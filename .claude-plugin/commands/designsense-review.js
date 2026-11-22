#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function getChangedFiles() {
  try {
    const output = execSync('git diff --name-only HEAD', { encoding: 'utf8' });
    return output.trim().split('\n').filter(f => f);
  } catch {
    return [];
  }
}

const UI_EXTS = ['.tsx', '.jsx', '.vue', '.html', '.css', '.scss', '.svelte', '.astro'];

function shouldCheck(file) {
  return UI_EXTS.some(ext => file.endsWith(ext));
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
      issues.push({ file, line: num, severity: 'should-fix', rule: 'a11y-click-handler', message: 'Click handler on non-interactive element; use <button> or role="button" + tabindex' });
    }
    if (/font-size:\s*\d+px/.test(line) && !/clamp|rem|em/.test(line)) {
      issues.push({ file, line: num, severity: 'nice-to-have', rule: 'fluid-type', message: 'Fixed px font-size; use rem/clamp for fluid scaling' });
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

function runStyleFidelity(file, content, style) {
  const issues = [];
  const lines = content.split('\n');
  const styleTokens = {
    neobrutalism: { forbidden: ['blur', 'backdrop-filter', 'rgba.*0\\.[0-9]', 'transition.*shadow'], required: ['border.*3px', 'box-shadow.*4px.*4px.*0'] },
    glassmorphism: { forbidden: ['box-shadow.*0.*0.*0.*#000', 'border.*3px.*#000'], required: ['backdrop-filter', 'bg-opacity'] },
    minimalism: { forbidden: ['box-shadow.*[0-9]px.*[0-9]px.*[0-9]px', 'border.*[2-9]px'], required: [] }
  };
  const tokens = styleTokens[style];
  if (!tokens) return issues;
  
  lines.forEach((line, i) => {
    tokens.forbidden?.forEach(pattern => {
      if (new RegExp(pattern, 'i').test(line)) {
        issues.push({ file, line: i+1, severity: 'should-fix', rule: 'style-fidelity', message: `Pattern "${pattern}" conflicts with ${style} style` });
      }
    });
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

function main() {
  const style = loadStyle();
  const files = getChangedFiles().filter(shouldCheck);
  
  if (files.length === 0) {
    console.log('No UI files changed.');
    return;
  }

  let allIssues = [];
  for (const file of files) {
    if (!fs.existsSync(file)) continue;
    const content = fs.readFileSync(file, 'utf8');
    const issues = [...runSmellLint(file, content), ...runStyleFidelity(file, content, style)];
    allIssues.push(...issues);
  }

  if (allIssues.length === 0) {
    console.log('✓ No issues found');
    return;
  }

  const bySeverity = { blocker: [], 'should-fix': [], 'nice-to-have': [] };
  for (const issue of allIssues) bySeverity[issue.severity].push(issue);

  console.log(`\n📋 designsense-review — ${files.length} file(s) checked\n`);
  
  for (const severity of ['blocker', 'should-fix', 'nice-to-have']) {
    const issues = bySeverity[severity];
    if (issues.length === 0) continue;
    const label = severity === 'blocker' ? '🔴 BLOCKER' : severity === 'should-fix' ? '🟡 SHOULD-FIX' : '🟢 NICE-TO-HAVE';
    console.log(`${label} (${issues.length})`);
    for (const i of issues) {
      console.log(`  ${i.file}:${i.line} — ${i.message} [${i.rule}]`);
    }
    console.log('');
  }
}

main();