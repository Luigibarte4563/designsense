const fs = require('fs');
const path = require('path');

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

function main() {
  const args = process.argv.slice(2);
  const file = args[0];
  const style = args[1] || 'neobrutalism';
  
  if (!file || !shouldCheck(file)) return;
  
  const content = fs.readFileSync(file, 'utf8');
  const issues = [...runSmellLint(file, content), ...runStyleFidelity(file, content, style)];
  
  if (issues.length > 0) {
    console.log(JSON.stringify({ file, issues }, null, 2));
  }
}

main();