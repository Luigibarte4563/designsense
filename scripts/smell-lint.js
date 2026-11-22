#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const UI_EXTS = ['.tsx', '.jsx', '.vue', '.html', '.css', '.scss', '.svelte', '.astro', '.js', '.ts'];

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

function runSmellLint(file, content) {
  const issues = [];
  const lines = content.split('\n');
  
  lines.forEach((line, i) => {
    const num = i + 1;
    const trimmed = line.trim();
    
    // outline: none without replacement
    if (/outline:\s*none/.test(line) && !/outline-offset|box-shadow|ring/.test(line)) {
      issues.push({ file, line: num, severity: 'blocker', rule: 'a11y-focus-visible', message: 'outline: none without visible focus alternative' });
    }
    
    // Click handler on non-interactive element
    if (/onClick|onMouseDown|onMouseUp/.test(line) && /<div|<span|<p|<h[1-6]/.test(line)) {
      issues.push({ file, line: num, severity: 'should-fix', rule: 'a11y-click-handler', message: 'Click handler on non-interactive element; use <button> or role="button" + tabindex' });
    }
    
    // Fixed px font-size
    if (/font-size:\s*\d+px/.test(line) && !/clamp|rem|em/.test(line)) {
      issues.push({ file, line: num, severity: 'nice-to-have', rule: 'fluid-type', message: 'Fixed px font-size; use rem/clamp for fluid scaling' });
    }
    
    // Missing alt on img
    if (/<img/.test(line) && !/alt=/.test(line)) {
      issues.push({ file, line: num, severity: 'blocker', rule: 'a11y-alt', message: 'Missing alt attribute on img' });
    }
    
    // Form control missing label
    if (/<input|<select|<textarea/.test(line) && !/<label|aria-label|aria-labelledby/.test(line)) {
      issues.push({ file, line: num, severity: 'blocker', rule: 'a11y-label', message: 'Form control missing accessible label' });
    }
    
    // Hardcoded colors (hex/rgb) in CSS/JSX
    if (/(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\))/.test(line) && !/tokens?\.color|var\(--ds-color/.test(line)) {
      issues.push({ file, line: num, severity: 'nice-to-have', rule: 'hardcoded-color', message: 'Hardcoded color value; use design tokens' });
    }
    
    // Hardcoded spacing (px/rem not in common scale)
    if (/(margin|padding|gap|width|height|top|right|bottom|left):\s*\d+(?:\.\d+)?(px|rem)/.test(line) && !/tokens?\.space|var\(--ds-space/.test(line)) {
      issues.push({ file, line: num, severity: 'nice-to-have', rule: 'hardcoded-spacing', message: 'Hardcoded spacing; use design tokens' });
    }
    
    // Missing focus-visible
    if (/:focus\s*{/.test(line) && !/:focus-visible/.test(line)) {
      issues.push({ file, line: num, severity: 'should-fix', rule: 'focus-visible', message: 'Use :focus-visible instead of :focus for keyboard-only focus styles' });
    }
    
    // z-index magic numbers
    if (/z-index:\s*\d{3,}/.test(line)) {
      issues.push({ file, line: num, severity: 'nice-to-have', rule: 'magic-z-index', message: 'High z-index; consider stacking context tokens' });
    }
    
    // !important
    if (/!important/.test(line)) {
      issues.push({ file, line: num, severity: 'should-fix', rule: 'important', message: 'Avoid !important; refactor specificity' });
    }
    
    // px border-radius not in scale
    if (/border-radius:\s*\d+px/.test(line) && !/tokens?\.radius|var\(--ds-radius/.test(line)) {
      issues.push({ file, line: num, severity: 'nice-to-have', rule: 'hardcoded-radius', message: 'Hardcoded border-radius; use design tokens' });
    }
  });
  
  return issues;
}

function main() {
  const target = process.argv[2] || process.cwd();
  const files = findFiles(path.resolve(target));
  
  console.log(`\n🔍 Smell Lint — ${files.length} files\n`);
  
  let total = { blocker: 0, 'should-fix': 0, 'nice-to-have': 0 };
  const byFile = {};
  
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const issues = runSmellLint(file, content);
    if (issues.length > 0) {
      byFile[file] = issues;
      for (const i of issues) total[i.severity]++;
    }
  }
  
  console.log(`Summary: 🔴 ${total.blocker} blockers | 🟡 ${total['should-fix']} should-fix | 🟢 ${total['nice-to-have']} nice-to-have\n`);
  
  for (const [file, issues] of Object.entries(byFile)) {
    console.log(`\n${file} (${issues.length})`);
    for (const i of issues) {
      const icon = i.severity === 'blocker' ? '🔴' : i.severity === 'should-fix' ? '🟡' : '🟢';
      console.log(`  ${icon} L${i.line}: ${i.message} [${i.rule}]`);
    }
  }
  
  if (total.blocker === 0 && total['should-fix'] === 0) {
    console.log('\n✅ No code smells detected');
  }
}

main();