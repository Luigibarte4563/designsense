#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const UI_EXTS = ['.tsx', '.jsx', '.vue', '.html', '.svelte', '.astro', '.js', '.ts'];

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

function runCustomChecks(file, content) {
  const issues = [];
  const lines = content.split('\n');
  const labelled = new Set([...content.matchAll(/<label[^>]*\sfor="([^"]+)"/g)].map(m => m[1]));
  
  lines.forEach((line, i) => {
    const num = i + 1;
    // outline: none without replacement
    if (/outline:\s*none/.test(line) && !/outline-offset|box-shadow|ring/.test(line)) {
      issues.push({ file, line: num, severity: 'error', rule: 'a11y-focus-visible', wcag: '2.4.7', message: 'outline: none without visible focus alternative' });
    }
    // Click handler on non-interactive
    if (/onClick|onMouseDown|onMouseUp/.test(line) && /<div|<span|<p|<h[1-6]/.test(line)) {
      issues.push({ file, line: num, severity: 'error', rule: 'a11y-click-handler', wcag: '2.1.1', message: 'Click handler on non-interactive element; use <button> or role="button"+tabindex' });
    }
    // Missing alt
    if (/<img/.test(line) && !/alt=/.test(line)) {
      issues.push({ file, line: num, severity: 'error', rule: 'a11y-alt', wcag: '1.1.1', message: 'Missing alt attribute on img' });
    }
    // Missing label (labels may be on a different line)
    if (/<input|<select|<textarea/.test(line)) {
      const id = (line.match(/\sid="([^"]+)"/) || [])[1];
      if (!/<label|aria-label|aria-labelledby/.test(line) && !labelled.has(id)) {
        issues.push({ file, line: num, severity: 'error', rule: 'a11y-label', wcag: '1.3.1', message: 'Form control missing accessible label' });
      }
    }
    // tabindex=-1 without aria-hidden
    if (/tabindex="-1"/.test(line) && !/aria-hidden/.test(line)) {
      issues.push({ file, line: num, severity: 'warning', rule: 'a11y-tabindex', wcag: '2.4.3', message: 'tabindex=-1 without aria-hidden; removes from focus order' });
    }
    // autofocus
    if (/autofocus/.test(line)) {
      issues.push({ file, line: num, severity: 'warning', rule: 'a11y-autofocus', wcag: '3.2.2', message: 'autofocus can disorient screen reader users' });
    }
    // Fixed px font-size
    if (/font-size:\s*\d+px/.test(line) && !/clamp|rem|em/.test(line)) {
      issues.push({ file, line: num, severity: 'info', rule: 'fluid-type', wcag: '1.4.4', message: 'Fixed px font-size; use rem/clamp for fluid scaling' });
    }
    // Missing lang
    if (/<html/.test(line) && !/lang=/.test(line)) {
      issues.push({ file, line: num, severity: 'warning', rule: 'a11y-lang', wcag: '3.1.1', message: 'Missing lang attribute on html' });
    }
    // Duplicate IDs (rough check)
    const ids = line.match(/\sid="([^"]+)"/g);
    if (ids && ids.length > 1) {
      issues.push({ file, line: num, severity: 'warning', rule: 'a11y-duplicate-id', wcag: '4.1.1', message: 'Possible duplicate IDs on same line' });
    }
  });
  return issues;
}

function runAxe(file) {
  try {
    const output = execSync(`npx axe-cli "${file}" --format json`, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
    const data = JSON.parse(output);
    return data.violations?.map(v => ({
      file,
      line: 0,
      severity: 'error',
      rule: v.id,
      wcag: v.tags.filter(t => t.startsWith('wcag')).join(', ') || 'N/A',
      message: `${v.help}: ${v.nodes[0]?.target?.join(', ') || 'unknown element'}`
    })) || [];
  } catch {
    return [];
  }
}

function main() {
  const target = process.argv[2] || process.cwd();
  const files = findFiles(path.resolve(target));
  
  console.log(`\n♿ A11y Scan — ${files.length} files\n`);
  
  let total = { error: 0, warning: 0, info: 0 };
  const byFile = {};
  
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const issues = [...runCustomChecks(file, content), ...runAxe(file)];
    if (issues.length > 0) {
      byFile[file] = issues;
      for (const i of issues) total[i.severity]++;
    }
  }
  
  console.log(`Summary: ❌ ${total.error} errors | ⚠️ ${total.warning} warnings | ℹ️ ${total.info} info\n`);
  
  for (const [file, issues] of Object.entries(byFile)) {
    console.log(`\n${file} (${issues.length})`);
    for (const i of issues) {
      const icon = i.severity === 'error' ? '❌' : i.severity === 'warning' ? '⚠️' : 'ℹ️';
      console.log(`  ${icon} L${i.line || '?'}: ${i.message} [${i.rule}${i.wcag ? `, WCAG ${i.wcag}` : ''}]`);
    }
  }
  
  if (total.error === 0 && total.warning === 0) {
    console.log('\n✅ No accessibility issues found');
  }
}

main();