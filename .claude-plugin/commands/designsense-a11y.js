#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const UI_EXTS = ['.tsx', '.jsx', '.vue', '.html', '.svelte', '.astro'];

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

function runAxeScan(files) {
  const results = [];
  for (const file of files) {
    try {
      const output = execSync(`npx axe-cli ${file} --format json`, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
      const data = JSON.parse(output);
      if (data.violations?.length) {
        results.push({ file, violations: data.violations });
      }
    } catch (e) {
      // axe-cli not available or no violations
    }
  }
  return results;
}

function runCustomA11y(file, content) {
  const issues = [];
  const lines = content.split('\n');
  lines.forEach((line, i) => {
    const num = i + 1;
    if (/outline:\s*none/.test(line) && !/outline-offset|box-shadow|ring/.test(line)) {
      issues.push({ line: num, severity: 'blocker', rule: 'a11y-focus-visible', wcag: '2.4.7', message: 'outline: none without visible focus alternative' });
    }
    if (/onClick|onMouseDown|onMouseUp/.test(line) && /<div|<span|<p|<h[1-6]/.test(line)) {
      issues.push({ line: num, severity: 'blocker', rule: 'a11y-click-handler', wcag: '2.1.1', message: 'Click handler on non-interactive element' });
    }
    if (/<img/.test(line) && !/alt=/.test(line)) {
      issues.push({ line: num, severity: 'blocker', rule: 'a11y-alt', wcag: '1.1.1', message: 'Missing alt attribute on img' });
    }
    if (/<input|<select|<textarea/.test(line) && !/<label|aria-label|aria-labelledby/.test(line)) {
      issues.push({ line: num, severity: 'blocker', rule: 'a11y-label', wcag: '1.3.1', message: 'Form control missing accessible label' });
    }
    if (/tabindex="-1"/.test(line) && !/aria-hidden/.test(line)) {
      issues.push({ line: num, severity: 'should-fix', rule: 'a11y-tabindex', wcag: '2.4.3', message: 'tabindex=-1 without aria-hidden; removes from focus order' });
    }
    if (/autofocus/.test(line)) {
      issues.push({ line: num, severity: 'should-fix', rule: 'a11y-autofocus', wcag: '3.2.2', message: 'autofocus can disorient screen reader users' });
    }
  });
  return issues;
}

function main() {
  const target = process.argv[2] || process.cwd();
  const files = findUIFiles(path.resolve(target));
  
  console.log(`\n♿ designsense-a11y — ${files.length} UI file(s) in ${target}\n`);
  
  let totalIssues = 0;
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const issues = runCustomA11y(file, content);
    if (issues.length > 0) {
      console.log(`${file} (${issues.length})`);
      for (const i of issues) {
        const icon = i.severity === 'blocker' ? '🔴' : '🟡';
        console.log(`  ${icon} L${i.line}: ${i.message} [${i.rule}, WCAG ${i.wcag}]`);
      }
      totalIssues += issues.length;
    }
  }

  // Try axe-core scan
  try {
    const axeResults = runAxeScan(files);
    for (const { file, violations } of axeResults) {
      console.log(`\n${file} (axe: ${violations.length})`);
      for (const v of violations) {
        console.log(`  🔴 ${v.help}: ${v.nodes[0]?.target?.join(', ') || 'unknown'} [WCAG ${v.tags.filter(t => t.startsWith('wcag')).join(', ')}]`);
        totalIssues++;
      }
    }
  } catch {}

  console.log(`\nTotal accessibility issues: ${totalIssues}`);
}

main();