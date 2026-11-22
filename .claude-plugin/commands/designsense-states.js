#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const UI_EXTS = ['.tsx', '.jsx', '.vue', '.svelte', '.astro'];

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

function checkStates(file, content) {
  const issues = [];
  const lines = content.split('\n');
  
  const hasAsync = /useEffect|useQuery|useSWR|fetch\(|axios|async\s+function/.test(content);
  if (!hasAsync) return issues;

  const hasLoading = /isLoading|isPending|loading|skeleton|aria-busy/.test(content);
  const hasEmpty = /empty|no\s+data|length\s*===\s*0|data\?\.\s*length/.test(content);
  const hasError = /error|isError|catch\s*\(|try\s*{/.test(content);

  if (!hasLoading) {
    issues.push({ file, line: 1, severity: 'blocker', rule: 'missing-loading-state', message: 'Async component missing loading state (isLoading/aria-busy/skeleton)' });
  }
  if (!hasEmpty) {
    issues.push({ file, line: 1, severity: 'blocker', rule: 'missing-empty-state', message: 'Async component missing empty state (no data/empty illustration + CTA)' });
  }
  if (!hasError) {
    issues.push({ file, line: 1, severity: 'blocker', rule: 'missing-error-state', message: 'Async component missing error state (error message + aria-invalid + focus management)' });
  }

  return issues;
}

function main() {
  const target = process.argv[2] || process.cwd();
  const files = findUIFiles(path.resolve(target));
  
  console.log(`\n🔄 designsense-states — Checking ${files.length} component files...\n`);
  
  let total = { blocker: 0, 'should-fix': 0, 'nice-to-have': 0 };
  const byFile = {};
  
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const issues = checkStates(file, content);
    if (issues.length > 0) {
      byFile[file] = issues;
      for (const i of issues) total[i.severity]++;
    }
  }

  console.log(`Summary: 🔴 ${total.blocker} missing required states\n`);
  
  for (const [file, issues] of Object.entries(byFile)) {
    console.log(`\n${file}`);
    for (const i of issues) {
      console.log(`  🔴 ${i.message} [${i.rule}]`);
    }
  }

  if (total.blocker === 0) {
    console.log('✓ All async components have loading, empty, and error states');
  }
}

main();