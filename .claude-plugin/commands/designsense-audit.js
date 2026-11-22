#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const UI_EXTS = ['.tsx', '.jsx', '.vue', '.html', '.css', '.scss', '.svelte', '.astro'];

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

function runSmellLint(file, content) {
  const issues = [];
  const lines = content.split('\n');
  lines.forEach((line, i) => {
    const num = i + 1;
    if (/outline:\s*none/.test(line) && !/outline-offset|box-shadow|ring/.test(line)) {
      issues.push({ file, line: num, severity: 'blocker', rule: 'a11y-focus-visible', message: 'outline: none without visible focus alternative' });
    }
    if (/onClick|onMouseDown|onMouseUp/.test(line) && /<div|<span|<p|<h[1-6]/.test(line)) {
      issues.push({ file, line: num, severity: 'should-fix', rule: 'a11y-click-handler', message: 'Click handler on non-interactive element' });
    }
    if (/font-size:\s*\d+px/.test(line) && !/clamp|rem|em/.test(line)) {
      issues.push({ file, line: num, severity: 'nice-to-have', rule: 'fluid-type', message: 'Fixed px font-size; use rem/clamp' });
    }
    if (/<img/.test(line) && !/alt=/.test(line)) {
      issues.push({ file, line: num, severity: 'blocker', rule: 'a11y-alt', message: 'Missing alt attribute on img' });
    }
    if (/<input|<select|<textarea/.test(line) && !/<label|aria-label|aria-labelledby/.test(line)) {
      issues.push({ file, line: num, severity: 'blocker', rule: 'a11y-label', message: 'Form control missing accessible label' });
    }
  });
  return issues;
}

function loadStyle() {
  const configPath = path.join(process.cwd(), '.designsense', 'style.json');
  if (fs.existsSync(configPath)) {
    try { return JSON.parse(fs.readFileSync(configPath, 'utf8')).style || 'neobrutalism'; } catch {}
  }
  return process.env.DESIGNSENSE_STYLE || 'neobrutalism';
}

function runStyleFidelity(file, content, style) {
  const issues = [];
  const lines = content.split('\n');
  const styleTokens = {
    neobrutalism: { forbidden: ['blur', 'backdrop-filter', 'rgba.*0\\.[0-9]', 'transition.*shadow'] },
    glassmorphism: { forbidden: ['box-shadow.*0.*0.*0.*#000', 'border.*3px.*#000'] },
    minimalism: { forbidden: ['box-shadow.*[0-9]px.*[0-9]px.*[0-9]px', 'border.*[2-9]px'] }
  };
  const tokens = styleTokens[style];
  if (!tokens) return issues;
  lines.forEach((line, i) => {
    tokens.forbidden?.forEach(pattern => {
      if (new RegExp(pattern, 'i').test(line)) {
        issues.push({ file, line: i+1, severity: 'should-fix', rule: 'style-fidelity', message: `Pattern conflicts with ${style}` });
      }
    });
  });
  return issues;
}

function main() {
  const target = process.argv[2] || process.cwd();
  const style = loadStyle();
  const files = findUIFiles(path.resolve(target));
  
  console.log(`\n📊 designsense-audit — ${files.length} UI file(s) in ${target}\n`);
  
  let total = { blocker: 0, 'should-fix': 0, 'nice-to-have': 0 };
  const byFile = {};
  
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const issues = [...runSmellLint(file, content), ...runStyleFidelity(file, content, style)];
    if (issues.length > 0) {
      byFile[file] = issues;
      for (const i of issues) total[i.severity]++;
    }
  }

  console.log(`Summary: 🔴 ${total.blocker} blocker | 🟡 ${total['should-fix']} should-fix | 🟢 ${total['nice-to-have']} nice-to-have\n`);
  
  for (const [file, issues] of Object.entries(byFile)) {
    console.log(`\n${file} (${issues.length})`);
    for (const i of issues) {
      const icon = i.severity === 'blocker' ? '🔴' : i.severity === 'should-fix' ? '🟡' : '🟢';
      console.log(`  ${icon} L${i.line}: ${i.message} [${i.rule}]`);
    }
  }
}

main();