#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const UI_EXTS = ['.tsx', '.jsx', '.vue', '.html', '.css', '.scss', '.svelte', '.astro', '.js', '.ts'];

const STYLE_RULES = {
  // Original 3
  neobrutalism: {
    forbidden: [
      { pattern: 'blur', message: 'blur/backdrop-filter not allowed in neobrutalism' },
      { pattern: 'backdrop-filter', message: 'backdrop-filter not allowed in neobrutalism' },
      { pattern: 'rgba\\([^)]*0\\.[0-9]', message: 'Transparent colors not allowed; use opaque flat colors' },
      { pattern: 'transition.*shadow', message: 'Shadow transitions not allowed; instant state changes only' },
      { pattern: 'gradient', message: 'Gradients not allowed in neobrutalism' },
      { pattern: 'border-radius:\\s*(8|12|16|24)px', message: 'Large radius not allowed; max 4px' },
    ],
    required: [
      { pattern: 'border.*3px', message: 'Missing 3px border (neobrutalism signature)' },
      { pattern: 'box-shadow.*4px.*4px.*0', message: 'Missing hard offset shadow (4px 4px 0)' },
    ],
  },
  glassmorphism: {
    forbidden: [
      { pattern: 'box-shadow.*0.*0.*0.*#000', message: 'Hard black shadows not allowed in glassmorphism' },
      { pattern: 'border.*3px.*#000', message: 'Thick black borders not allowed' },
      { pattern: 'background:\\s*#[0-9a-fA-F]{6}\\s*;', message: 'Opaque backgrounds break glass effect; use translucent' },
    ],
    required: [
      { pattern: 'backdrop-filter', message: 'Missing backdrop-filter (glassmorphism signature)' },
      { pattern: 'rgba\\([^)]*0\\.[0-9]', message: 'Missing translucent background' },
    ],
  },
  minimalism: {
    forbidden: [
      { pattern: 'box-shadow.*[0-9]px.*[0-9]px.*[0-9]px', message: 'Visible shadows not allowed in minimalism' },
      { pattern: 'border.*[2-9]px', message: 'Thick borders not allowed; use 1px or none' },
      { pattern: 'gradient', message: 'Gradients not allowed in minimalism' },
      { pattern: 'rgba\\([^)]*0\\.[0-9]', message: 'Transparency not needed in minimalism' },
    ],
    required: [],
  },

  // Depth & Surface
  'flat-design': {
    forbidden: [
      { pattern: 'box-shadow', message: 'No shadows in flat design' },
      { pattern: 'gradient', message: 'No gradients in flat design' },
      { pattern: 'rgba\\([^)]*0\\.[0-9]', message: 'No transparency in flat design' },
      { pattern: 'border-radius:\\s*(8|12|16|24)px', message: 'Keep radius minimal (0-4px)' },
    ],
    required: [],
  },
  'semi-flat': {
    forbidden: [
      { pattern: 'box-shadow.*[0-9]{2,}px.*[0-9]{2,}px.*[0-9]{2,}px', message: 'Only subtle shadows (1-12px blur)' },
      { pattern: 'gradient', message: 'No gradients in semi-flat' },
    ],
    required: [],
  },
  'material-design': {
    forbidden: [
      { pattern: 'box-shadow:\\s*[^;]*rgba\\(0,0,0,0\\.[3-9]', message: 'Shadow opacity too high for Material' },
      { pattern: 'border-radius:\\s*0px', message: 'Material uses rounded corners (4px+)' },
    ],
    required: [
      { pattern: 'box-shadow', message: 'Elevation shadows expected' },
    ],
  },
  skeuomorphism: {
    forbidden: [
      { pattern: 'background:\\s*#[0-9a-fA-F]{6}\\s*;', message: 'Skeuomorphism uses gradients for depth' },
    ],
    required: [
      { pattern: 'gradient', message: 'Gradients expected for 3D form' },
      { pattern: 'inset', message: 'Inset shadows for pressed states' },
    ],
  },
  neumorphism: {
    forbidden: [
      { pattern: 'border.*[1-9]px.*#[0-9a-fA-F]', message: 'Neumorphism uses shadows not borders' },
      { pattern: 'background:\\s*#[0-9a-fA-F]{6}(?!(.*\\#E0E5EC))', message: 'Background must match surface color' },
    ],
    required: [
      { pattern: '#E0E5EC', message: 'Neumorphism signature background color' },
      { pattern: 'shadow.*#A3B1C6.*#FFFFFF', message: 'Dual shadows (dark + light) required' },
    ],
  },
  claymorphism: {
    forbidden: [
      { pattern: 'border-radius:\\s*(0|2|4|6|8|10|12)px', message: 'Claymorphism needs large radius (20px+)' },
      { pattern: 'box-shadow.*[0-9]px.*[0-9]px.*0.*#000', message: 'No hard shadows in claymorphism' },
    ],
    required: [
      { pattern: 'border-radius:\\s*(2[0-9]|[3-9][0-9]|[1-9][0-9]{2})px', message: 'Large radius (20px+) required' },
      { pattern: 'shadow.*#C5CAD8.*#FFFFFF', message: 'Soft dual shadows required' },
    ],
  },
  'liquid-glass': {
    forbidden: [
      { pattern: 'background:\\s*#[0-9a-fA-F]{6}\\s*;', message: 'Liquid glass uses translucent surfaces' },
    ],
    required: [
      { pattern: 'backdrop-filter', message: 'Backdrop filter required' },
      { pattern: 'rgba\\([^)]*0\\.1[5-9]', message: 'High transparency (15%+) required' },
    ],
  },
  aurora: {
    forbidden: [
      { pattern: 'background:\\s*#[0-9a-fA-F]{6}\\s*;', message: 'Aurora uses mesh gradients' },
    ],
    required: [
      { pattern: 'gradient.*mesh|filter.*blur.*[6-9][0-9]px', message: 'Blurred mesh gradient required' },
    ],
  },
  'gradient-heavy': {
    forbidden: [
      { pattern: 'background:\\s*#[0-9a-fA-F]{6}\\s*;', message: 'Gradient-heavy uses gradients everywhere' },
    ],
    required: [
      { pattern: 'gradient', message: 'Gradients expected on most surfaces' },
    ],
  },

  // Bold & Raw
  brutalism: {
    forbidden: [
      { pattern: 'border-radius', message: 'No rounded corners in brutalism' },
      { pattern: 'box-shadow', message: 'No shadows in brutalism' },
      { pattern: 'gradient', message: 'No gradients in brutalism' },
      { pattern: 'font-family.*[^system-ui|monospace]', message: 'Only system/monospace fonts' },
    ],
    required: [],
  },
  'anti-design': {
    forbidden: [],
    required: [],
  },
  maximalism: {
    forbidden: [
      { pattern: 'background:\\s*#[0-9a-fA-F]{6}\\s*;', message: 'Maximalism uses patterns and layers' },
    ],
    required: [],
  },
  memphis: {
    forbidden: [
      { pattern: 'border-radius:\\s*0px', message: 'Memphis uses varied radius including organic' },
    ],
    required: [
      { pattern: '#FF6B6B|#4ECDC4|#FFE66D', message: 'Memphis signature colors' },
      { pattern: 'border.*3px.*#000', message: 'Thick black outlines' },
    ],
  },
  'pop-art': {
    forbidden: [
      { pattern: 'border-width:\\s*[0-2]px', message: 'Pop art needs thick outlines (3-4px)' },
      { pattern: 'box-shadow', message: 'No shadows - use halftone' },
    ],
    required: [
      { pattern: 'border.*[34]px.*#000', message: 'Thick black outlines required' },
      { pattern: '#FF0000|#0000FF|#FFFF00', message: 'Primary color palette' },
    ],
  },
  grunge: {
    forbidden: [
      { pattern: 'border-radius:\\s*0px', message: 'Grunge uses slightly rounded' },
    ],
    required: [
      { pattern: '#1A1A1A|#2D2D2D', message: 'Dark grunge palette' },
    ],
  },

  // Minimal & Structured
  swiss: {
    forbidden: [
      { pattern: 'border-radius', message: 'Swiss uses sharp corners' },
      { pattern: 'box-shadow', message: 'No shadows in Swiss' },
      { pattern: 'gradient', message: 'No gradients in Swiss' },
      { pattern: 'text-align:\\s*center', message: 'Swiss uses left-aligned/flush-left' },
    ],
    required: [
      { pattern: '#000000', message: 'Black primary color' },
    ],
  },
  'bento-grid': {
    forbidden: [
      { pattern: 'border-radius:\\s*(0|2|4|6)px', message: 'Bento uses 8px+ radius' },
      { pattern: 'box-shadow.*[0-9]{2,}px.*[0-9]{2,}px.*[0-9]{2,}px', message: 'Only subtle shadows' },
    ],
    required: [
      { pattern: 'border-radius:\\s*(8|1[0-9]|2[0-9])px', message: 'Consistent radius (8-24px)' },
    ],
  },
  monochrome: {
    forbidden: [
      { pattern: '#[0-9a-fA-F]{6}(?!(.*\\1))', message: 'Monochrome uses single hue variations' },
    ],
    required: [],
  },
  typographic: {
    forbidden: [
      { pattern: 'background:\\s*#[0-9a-fA-F]{6}', message: 'Typographic uses minimal color' },
    ],
    required: [
      { pattern: 'font-size:\\s*(3|4|5|6|7|8|9|10)rem', message: 'Large display type expected' },
    ],
  },
  editorial: {
    forbidden: [
      { pattern: 'font-family.*sans-serif', message: 'Editorial uses serif for body' },
      { pattern: 'line-height:\\s*1(\\.[0-5])?', message: 'Editorial needs generous line-height (1.7+)' },
    ],
    required: [
      { pattern: 'serif', message: 'Serif fonts required' },
    ],
  },
  corporate: {
    forbidden: [
      { pattern: '#[0-9a-fA-F]{6}(?!(.*\\#1570EF|\\#6B7280|\\#00A3E0|\\#DC2626|\\#059669))', message: 'Corporate uses restricted palette' },
    ],
    required: [],
  },
  scandinavian: {
    forbidden: [
      { pattern: '#000000', message: 'Scandinavian avoids pure black' },
      { pattern: 'box-shadow.*[0-9]{2,}px', message: 'Only subtle shadows' },
    ],
    required: [],
  },

  // Retro & Nostalgic
  'retro-vintage': {
    forbidden: [
      { pattern: '#[0-9a-fA-F]{6}(?!(.*\\#8B4513|\\#CD853F|\\#D2691E|\\#3D2B1F|\\#8B7355|\\#C9B896))', message: 'Retro uses muted earth palette' },
    ],
    required: [],
  },
  y2k: {
    forbidden: [
      { pattern: 'border-radius:\\s*(0|2|4)px', message: 'Y2K uses rounded/bubble shapes' },
    ],
    required: [
      { pattern: '#00FFFF|#FF00FF|#FFFF00', message: 'Y2K signature aqua/magenta/yellow' },
      { pattern: 'gradient', message: 'Glossy gradients required' },
    ],
  },
  'frutiger-metro': {
    forbidden: [
      { pattern: 'border-radius:\\s*(0|2|4)px', message: 'Frutiger Metro uses 6-14px radius' },
    ],
    required: [
      { pattern: 'linear-gradient.*180deg', message: 'Glossy vertical gradients' },
      { pattern: 'rgba\\(255,255,255,0\\.[34]', message: 'White highlight/reflection' },
    ],
  },
  vaporwave: {
    forbidden: [
      { pattern: 'background:\\s*#[0-9a-fA-F]{6}(?!(.*\\#1A0033|\\#000033|\\#001A33))', message: 'Vaporwave uses dark gradient bg' },
    ],
    required: [
      { pattern: '#FF00FF|#00FFFF|#FFFF00', message: 'Pink/cyan/yellow palette' },
      { pattern: 'grid', message: 'Perspective grid expected' },
    ],
  },
  synthwave: {
    forbidden: [
      { pattern: 'background:\\s*#[0-9a-fA-F]{6}(?!(.*\\#1A002E|\\#16213E|\\#0F3460))', message: 'Synthwave uses dark purple gradient' },
    ],
    required: [
      { pattern: '#FF00FF|#00FFFF|#FFD700', message: 'Neon pink/cyan/gold palette' },
      { pattern: 'grid', message: 'Perspective grid expected' },
    ],
  },
  windows95: {
    forbidden: [
      { pattern: 'border-radius', message: 'Windows 95 uses sharp corners' },
      { pattern: 'box-shadow', message: 'Windows 95 uses bevels not shadows' },
      { pattern: 'font-family.*[^MS Sans Serif|Tahoma|Fixedsys]', message: 'System fonts only' },
    ],
    required: [
      { pattern: '#008080', message: 'Classic teal background' },
      { pattern: '#C0C0C0', message: 'Classic gray chrome' },
    ],
  },
  'pixel-art': {
    forbidden: [
      { pattern: 'border-radius', message: 'Pixel art uses sharp corners' },
      { pattern: 'gradient', message: 'No gradients in pixel art' },
      { pattern: 'font-family.*[^Press Start 2P|VT323]', message: 'Bitmap fonts only' },
    ],
    required: [
      { pattern: '#000000|#1A1A2E|#7F7F7F|#FFFFFF', message: '16-color palette' },
    ],
  },
  terminal: {
    forbidden: [
      { pattern: 'border-radius', message: 'Terminal uses sharp corners' },
      { pattern: 'font-family.*[^JetBrains Mono|Fira Code|Cascadia Code|monospace]', message: 'Monospace only' },
      { pattern: 'background:\\s*#[0-9a-fA-F]{6}(?!(.*\\#000000|\\#0D1117))', message: 'Black/near-black only' },
    ],
    required: [
      { pattern: '#00FF00', message: 'Green/amber terminal color' },
    ],
  },
  'art-deco': {
    forbidden: [
      { pattern: 'border-radius:\\s*(8|12|16|24|32)px', message: 'Art Deco uses sharp or subtle radius' },
    ],
    required: [
      { pattern: '#D4AF37', message: 'Gold accent required' },
      { pattern: '#1A1A2E|#000000', message: 'Dark navy/black background' },
    ],
  },
  'art-nouveau': {
    forbidden: [
      { pattern: 'border-radius:\\s*(0|2|4)px', message: 'Art Nouveau uses organic radius' },
    ],
    required: [
      { pattern: '#8B7355|#556B2F|#CD853F', message: 'Earthy natural palette' },
    ],
  },
  bauhaus: {
    forbidden: [
      { pattern: '#[0-9a-fA-F]{6}(?!(.*\\#FF0000|\\#0000FF|\\#FFFF00|\\#000000|\\#FFFFFF))', message: 'Bauhaus: primary colors only' },
      { pattern: 'border-radius', message: 'Bauhaus uses geometric shapes' },
      { pattern: 'gradient', message: 'No gradients in Bauhaus' },
    ],
    required: [
      { pattern: '#FF0000|#0000FF|#FFFF00', message: 'Primary colors required' },
    ],
  },
  'mid-century': {
    forbidden: [
      { pattern: '#[0-9a-fA-F]{6}(?!(.*\\#C46210|\\#8B7355|\\#2D5A27|\\#D4A574|\\#556B2F|\\#F5F0E8))', message: 'Mid-century uses warm earth tones' },
    ],
    required: [],
  },

  // Dark & Futuristic
  'dark-oled': {
    forbidden: [
      { pattern: 'background:\\s*#[0-9a-fA-F]{6}(?!(.*\\#000000|\\#09090B|\\#18181B))', message: 'OLED uses true black only' },
      { pattern: '#[0-9a-fA-F]{6}(?!(.*\\#A5F3FC|\\#E9D5FF|\\#FDE68A|\\#FAFAFA|\\#71717A|\\#27272A))', message: 'OLED uses desaturated accents' },
    ],
    required: [
      { pattern: '#000000', message: 'True black background required' },
    ],
  },
  cyberpunk: {
    forbidden: [
      { pattern: 'background:\\s*#[0-9a-fA-F]{6}(?!(.*\\#0A0A0F|\\#12121A))', message: 'Cyberpunk uses near-black' },
    ],
    required: [
      { pattern: '#FF00FF|#00FFFF|#FFFF00', message: 'Neon pink/cyan/yellow required' },
    ],
  },
  'futuristic-hud': {
    forbidden: [
      { pattern: 'border-width:\\s*[2-9]px', message: 'HUD uses thin 1px lines' },
      { pattern: 'border-radius:\\s*(8|12|16|24)px', message: 'HUD uses sharp corners' },
      { pattern: 'background:\\s*#[0-9a-fA-F]{6}(?!(.*\\#000000))', message: 'HUD uses transparent panels' },
    ],
    required: [
      { pattern: '#00FFFF|#FF00FF|#FFFF00', message: 'Cyan/magenta/yellow holographic' },
    ],
  },
  'techno-glitch': {
    forbidden: [
      { pattern: 'transition-duration:\\s*[2-9][0-9]{2,}ms', message: 'Glitch uses fast/jittery timing' },
    ],
    required: [
      { pattern: '#FF00FF|#00FFFF', message: 'RGB shift colors' },
    ],
  },
  'space-cosmic': {
    forbidden: [
      { pattern: 'background:\\s*#[0-9a-fA-F]{6}(?!(.*\\#050510|\\#100520|\\#051020))', message: 'Space uses deep gradients' },
    ],
    required: [
      { pattern: '#6688FF|#FF66AA|#FFAA00', message: 'Cosmic color palette' },
    ],
  },

  // Organic & Playful
  'organic-blob': {
    forbidden: [
      { pattern: 'border-radius:\\s*(0|2|4|6|8|10|12|16|20)px', message: 'Organic blob uses asymmetric radius (24px+)' },
    ],
    required: [
      { pattern: 'border-radius:\\s*(2[4-9]|[3-9][0-9])px', message: 'Large asymmetric radius required' },
    ],
  },
  'hand-drawn': {
    forbidden: [
      { pattern: 'font-family.*[^Caveat|Patrick Hand|Architects Daughter|Indie Flower]', message: 'Hand-drawn fonts required' },
      { pattern: 'border-radius:\\s*(0|2|4|6|8|10|12|16|20)px', message: 'Imperfect asymmetric radius' },
    ],
    required: [
      { pattern: 'cursive', message: 'Handwritten fonts required' },
    ],
  },
  illustrated: {
    forbidden: [],
    required: [],
  },
  'paper-cutout': {
    forbidden: [
      { pattern: 'box-shadow:\\s*[^;]*rgba\\(0,0,0,0\\.[2-9]', message: 'Paper cutout uses subtle layered shadows' },
    ],
    required: [
      { pattern: 'rgba\\(0,0,0,0\\.0[5-9]', message: 'Subtle layer shadows' },
    ],
  },
  kawaii: {
    forbidden: [
      { pattern: 'border-radius:\\s*(0|2|4|6|8|10|12)px', message: 'Kawaii uses very round shapes (16px+)' },
      { pattern: '#[0-9a-fA-F]{6}(?!(.*\\#FFB3D9|\\#B3D9FF|\\#D9FFB3|\\#FFF3B3|\\#E6B3FF|\\#FFD9B3|\\#FF69B4|\\#87CEEB|\\#FFD700))', message: 'Kawaii uses pastel palette' },
    ],
    required: [
      { pattern: 'border-radius:\\s*(1[6-9]|[2-9][0-9])px', message: 'Very round shapes required' },
    ],
  },
  isometric: {
    forbidden: [
      { pattern: 'transform.*perspective', message: 'Isometric uses parallel projection' },
    ],
    required: [
      { pattern: '#FFFFFF|#E0E8F0|#C0D0E0', message: 'Three-tone shading (top/side/dark)' },
    ],
  },
  biophilic: {
    forbidden: [
      { pattern: '#[0-9a-fA-F]{6}(?!(.*\\#4A6B3A|\\#8F9B7A|\\#C9A84C|\\#2D3A1A|\\#6B7A5A|\\#C4D0B0|\\#6B8E5A|\\#8B7355|\\#5D4E37))', message: 'Biophilic uses earthy palette' },
    ],
    required: [],
  },
  'pastel-soft': {
    forbidden: [
      { pattern: '#[0-9a-fA-F]{6}(?!(.*\\#E8E8F0|\\#FAFAFC|\\#A8C0E8|\\#E8C0A8|\\#C0E8A8|\\#4A4A5A|\\#A8A8B8|\\#E8A8A8|\\#A8E8A8|\\#E8D0E8|\\#D0E8E8|\\#E8E8D0|\\#F0E0D0|\\#E0F0D0|\\#E8D0F0))', message: 'Pastel uses low saturation palette' },
    ],
    required: [],
  },

  // Cultural & Thematic
  'wabi-sabi': {
    forbidden: [
      { pattern: 'text-align:\\s*center', message: 'Wabi-sabi embraces asymmetry' },
      { pattern: '#[0-9a-fA-F]{6}(?!(.*\\#6B5B4A|\\#9A8A7A|\\#C8A878|\\#3D3D3D|\\#A89888|\\#D8C8B8|\\#E8D8C8|\\#A8A8A0))', message: 'Wabi-sabi uses muted natural tones' },
    ],
    required: [],
  },
  'neo-tokyo': {
    forbidden: [
      { pattern: 'background:\\s*#[0-9a-fA-F]{6}(?!(.*\\#0A0A1A|\\#12122A))', message: 'Neo-Tokyo uses dark neon backgrounds' },
    ],
    required: [
      { pattern: '#FF0080|#00FFFF|#FFFF00', message: 'Vivid magenta/cyan/yellow' },
    ],
  },
  gothic: {
    forbidden: [
      { pattern: 'font-family.*sans-serif', message: 'Gothic uses ornate serif' },
    ],
    required: [
      { pattern: '#8B0000|#D4AF37', message: 'Blood red and gold' },
      { pattern: 'serif', message: 'Ornate serif fonts' },
    ],
  },
  luxury: {
    forbidden: [
      { pattern: '#[0-9a-fA-F]{6}(?!(.*\\#D4AF37|\\#F4E4A8|\\#B8962E|\\#0A0A0A|\\#121212|\\#1A1A1A|\\#FFFFFF|\\#888888|\\#333333))', message: 'Luxury uses black/gold only' },
    ],
    required: [
      { pattern: '#D4AF37', message: 'Gold accent required' },
      { pattern: 'serif', message: 'Elegant serif typography' },
    ],
  },
  industrial: {
    forbidden: [
      { pattern: 'border-radius:\\s*(8|12|16|24)px', message: 'Industrial uses sharp corners' },
      { pattern: 'font-family.*[^JetBrains Mono|Fira Code|monospace]', message: 'Monospace only' },
    ],
    required: [
      { pattern: '#4A90E2', message: 'Technical blue lines' },
      { pattern: 'monospace', message: 'Monospace typography' },
    ],
  },

  // Interaction-led
  'motion-first': {
    forbidden: [
      { pattern: 'transition-duration:\\s*0ms', message: 'Motion-first uses meaningful animation' },
      { pattern: 'transition-timing-function:\\s*linear', message: 'Use spring/ease curves' },
    ],
    required: [],
  },
  parallax: {
    forbidden: [],
    required: [],
  },
  'spatial-ar': {
    forbidden: [
      { pattern: 'border-radius:\\s*(0|2|4|6|8)px', message: 'Spatial uses large radius (12px+)' },
    ],
    required: [
      { pattern: 'backdrop-filter', message: 'Glass panels with blur' },
      { pattern: 'rgba\\(255,255,255,0\\.0[8-9]', message: 'Subtle glass transparency' },
    ],
  },
  'voice-ui': {
    forbidden: [],
    required: [
      { pattern: 'border-radius:\\s*(9999px|50%)', message: 'Pill/round chat bubbles' },
    ],
  },
};

function findFiles(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(entry.name)) {
        findFiles(fullPath, fileList);
      }
    } else if (UI_EXTS.some(ext => entry.name.endsWith(ext))) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

function checkFile(file, content, style) {
  const issues = [];
  const rules = STYLE_RULES[style];
  if (!rules) return issues;
  
  const lines = content.split('\n');
  
  lines.forEach((line, i) => {
    const num = i + 1;
    for (const { pattern, message } of rules.forbidden) {
      if (new RegExp(pattern, 'i').test(line)) {
        issues.push({ file, line: num, severity: 'should-fix', rule: 'style-fidelity', message: `${message} (pattern: ${pattern})` });
      }
    }
  });
  
  for (const { pattern, message } of rules.required) {
    const regex = new RegExp(pattern, 'i');
    if (!regex.test(content)) {
      issues.push({ file, line: 1, severity: 'should-fix', rule: 'style-fidelity', message: `${message} (expected: ${pattern})` });
    }
  }
  
  return issues;
}

function main() {
  const args = process.argv.slice(2);
  const style = args[0] || 'neobrutalism';
  const target = args[1] || process.cwd();
  
  if (!STYLE_RULES[style]) {
    console.error('Unknown style: ' + style);
    console.log('Available:', Object.keys(STYLE_RULES).join(', '));
    process.exit(1);
  }
  
  const files = findFiles(path.resolve(target));
  
  console.log('\n🎯 Style Fidelity — ' + style + ' (' + files.length + ' files)\n');
  
  let total = { blocker: 0, 'should-fix': 0, 'nice-to-have': 0 };
  const byFile = {};
  
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const issues = checkFile(file, content, style);
    if (issues.length > 0) {
      byFile[file] = issues;
      for (const i of issues) total[i.severity]++;
    }
  }
  
  console.log('Summary: 🔴 ' + total.blocker + ' blockers | 🟡 ' + total['should-fix'] + ' should-fix | 🟢 ' + total['nice-to-have'] + ' nice-to-have\n');
  
  for (const [file, issues] of Object.entries(byFile)) {
    console.log('\n' + file + ' (' + issues.length + ')');
    for (const i of issues) {
      const icon = i.severity === 'blocker' ? '🔴' : i.severity === 'should-fix' ? '🟡' : '🟢';
      console.log('  ' + icon + ' L' + i.line + ': ' + i.message + ' [' + i.rule + ']');
    }
  }
  
  if (total['should-fix'] === 0) {
    console.log('\n✅ All files match style signature');
  }
}

main();