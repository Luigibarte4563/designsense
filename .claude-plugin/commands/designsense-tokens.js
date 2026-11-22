#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const UI_EXTS = ['.tsx', '.jsx', '.vue', '.html', '.css', '.scss', '.svelte', '.astro', '.js', '.ts'];

function findUIFiles(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(entry.name)) {
        findUIFiles(fullPath, fileList);
      }
    } else if (UI_EXTS.some(ext => entry.name.endsWith(ext))) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

function extractTokens(files) {
  const colors = new Set();
  const spacing = new Set();
  const radius = new Set();
  const shadows = new Set();
  const fontSizes = new Set();
  const fontWeights = new Set();
  const borders = new Set();

  const colorRegex = /(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\)|hsla?\([^)]+\))/g;
  const spacingRegex = /(\d+(?:\.\d+)?)(px|rem|em)(?=\s*[;}])/g;
  const radiusRegex = /(border-radius|radius):\s*([^;}]+)/g;
  const shadowRegex = /(box-shadow|shadow):\s*([^;}]+)/g;
  const fontSizeRegex = /font-size:\s*([^;}]+)/g;
  const fontWeightRegex = /font-weight:\s*([^;}]+)/g;
  const borderRegex = /border(?:-(?:width|color|style))?:\s*([^;}]+)/g;

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = colorRegex.exec(content)) !== null) colors.add(match[1]);
    while ((match = spacingRegex.exec(content)) !== null) spacing.add(`${match[1]}${match[2]}`);
    while ((match = radiusRegex.exec(content)) !== null) radius.add(match[2].trim());
    while ((match = shadowRegex.exec(content)) !== null) shadows.add(match[2].trim());
    while ((match = fontSizeRegex.exec(content)) !== null) fontSizes.add(match[1].trim());
    while ((match = fontWeightRegex.exec(content)) !== null) fontWeights.add(match[1].trim());
    while ((match = borderRegex.exec(content)) !== null) borders.add(match[1].trim());
  }

  return {
    color: [...colors].sort(),
    spacing: [...spacing].sort(),
    radius: [...radius].sort(),
    shadow: [...shadows].sort(),
    fontSize: [...fontSizes].sort(),
    fontWeight: [...fontWeights].sort(),
    border: [...borders].sort()
  };
}

function generateTokenFile(tokens, outputPath) {
  const tokenMap = {
    color: {},
    spacing: {},
    radius: {},
    shadow: {},
    fontSize: {},
    fontWeight: {},
    border: {}
  };

  let colorIndex = 0;
  for (const c of tokens.color) {
    const name = `color-${colorIndex++}`;
    tokenMap.color[name] = c;
  }

  for (const s of tokens.spacing) {
    const name = `space-${s.replace(/[^\d.]/g, '')}`;
    tokenMap.spacing[name] = s;
  }

  for (const r of tokens.radius) {
    const name = `radius-${r.replace(/[^\d.]/g, '')}`;
    tokenMap.radius[name] = r;
  }

  for (const s of tokens.shadow) {
    const name = `shadow-${tokenMap.shadow.length}`;
    tokenMap.shadow[name] = s;
  }

  for (const fs of tokens.fontSize) {
    const name = `text-${fs.replace(/[^\d.]/g, '')}`;
    tokenMap.fontSize[name] = fs;
  }

  for (const fw of tokens.fontWeight) {
    const name = `weight-${fw}`;
    tokenMap.fontWeight[name] = fw;
  }

  for (const b of tokens.border) {
    const name = `border-${tokenMap.border.length}`;
    tokenMap.border[name] = b;
  }

  const output = {
    $schema: 'https://design-tokens.github.io/schema.json',
    ...tokenMap
  };

  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
  console.log(`Generated ${outputPath}`);
  console.log(`Found: ${tokens.color.length} colors, ${tokens.spacing.length} spacing, ${tokens.radius.length} radius, ${tokens.shadow.length} shadows, ${tokens.fontSize.length} font-sizes`);
}

function main() {
  const target = process.argv[2] || process.cwd();
  const output = process.argv[3] || path.join(target, 'design-tokens.json');
  const files = findUIFiles(path.resolve(target));
  
  console.log(`\n🔍 designsense-tokens — Scanning ${files.length} files...\n`);
  
  const tokens = extractTokens(files);
  generateTokenFile(tokens, output);
}

main();