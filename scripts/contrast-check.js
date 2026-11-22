#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function luminance(r, g, b) {
  const a = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

function contrastRatio(hex1, hex2) {
  const rgb = hex => hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i).slice(1).map(x => parseInt(x, 16));
  const [r1, g1, b1] = rgb(hex1);
  const [r2, g2, b2] = rgb(hex2);
  const l1 = luminance(r1, g1, b1);
  const l2 = luminance(r2, g2, b2);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

function parseColor(c) {
  if (!c) return null;
  if (c.startsWith('#')) return c;
  if (c.startsWith('rgb')) {
    const m = c.match(/\d+/g);
    if (m) return '#' + m.slice(0, 3).map(x => parseInt(x).toString(16).padStart(2, '0')).join('');
  }
  // Named colors
  const named = { white: '#FFFFFF', black: '#000000' };
  if (named[c.toLowerCase()]) return named[c.toLowerCase()];
  return null;
}

function checkTokens(tokensPath) {
  const tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));
  const colors = tokens.color || {};
  const results = [];
  
  const pairs = [
    { fg: 'ink', bg: 'bg', name: 'Body text', min: 4.5 },
    { fg: 'ink', bg: 'surface', name: 'Card text', min: 4.5 },
    { fg: 'muted', bg: 'bg', name: 'Muted text', min: 4.5 },
    { fg: 'primary', bg: 'white', name: 'Primary on white', min: 3 },
    { fg: 'ink', bg: 'primary', name: 'Ink on primary', min: 4.5 },
    { fg: 'ink', bg: 'secondary', name: 'Ink on secondary', min: 4.5 },
    { fg: 'border', bg: 'bg', name: 'Border', min: 3 },
    { fg: 'focus', bg: 'bg', name: 'Focus ring', min: 3 },
    { fg: 'error', bg: 'bg', name: 'Error text', min: 4.5 },
    { fg: 'success', bg: 'bg', name: 'Success text', min: 4.5 },
  ];
  
  for (const { fg, bg, name, min } of pairs) {
    const fgHex = parseColor(colors[fg]);
    const bgHex = parseColor(colors[bg]);
    if (!fgHex || !bgHex) {
      results.push({ name, status: 'SKIP', reason: 'Color not found or not hex' });
      continue;
    }
    const ratio = contrastRatio(fgHex, bgHex);
    const pass = ratio >= min;
    results.push({ name, fg: fgHex, bg: bgHex, ratio: ratio.toFixed(2), min, pass });
  }
  
  return results;
}

function main() {
  const args = process.argv.slice(2);
  const style = args[0] || 'neobrutalism';
  const tokensPath = path.join(__dirname, '..', 'styles', style, 'tokens.json');
  
  if (!fs.existsSync(tokensPath)) {
    console.error('Tokens not found: ' + tokensPath);
    process.exit(1);
  }
  
  console.log('\n🎨 Contrast Check — ' + style + '\n');
  const results = checkTokens(tokensPath);
  
  let failed = 0;
  for (const r of results) {
    if (r.status === 'SKIP') {
      console.log('  ⏭  ' + r.name + ': ' + r.reason);
      continue;
    }
    const icon = r.pass ? '✅' : '❌';
    const status = r.pass ? 'PASS' : 'FAIL';
    console.log('  ' + icon + ' ' + r.name + ': ' + r.ratio + ':1 (min ' + r.min + ':1) [' + r.fg + ' on ' + r.bg + ']');
    if (!r.pass) failed++;
  }
  
  console.log('\n' + (failed === 0 ? '✅ All checks passed' : '❌ ' + failed + ' failed'));
  process.exit(failed > 0 ? 1 : 0);
}

main();