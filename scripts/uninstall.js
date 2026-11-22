#!/usr/bin/env node
/**
 * designsense — Universal Uninstaller
 * Removes installed plugin files from all supported agents.
 * Usage: node scripts/uninstall.js [--agent=<name>] [--dry-run]
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const HOME = process.env.HOME || process.env.USERPROFILE || '';

const TARGETS = {
  claude: () => path.join(HOME, '.claude', 'plugins', 'designsense'),
  opencode: () => path.join(HOME, '.opencode', 'plugins', 'designsense.mjs'),
  kiro: () => path.join(HOME, '.kiro', 'steering', 'designsense.md'),
  gemini: () => path.join(HOME, '.gemini', 'extensions', 'designsense'),
  codex: () => path.join(process.cwd(), 'AGENTS.md'),
};

function log(msg, type = 'info') {
  const icons = { info: 'ℹ️', success: '✅', warn: '⚠️', error: '❌', step: '▶', dry: '🔍' };
  console.log(`  ${icons[type]} ${msg}`);
}

function remove(target, dry) {
  if (!fs.existsSync(target)) return false;
  if (dry) return true;
  const stat = fs.lstatSync(target);
  if (stat.isDirectory()) fs.rmSync(target, { recursive: true, force: true });
  else fs.unlinkSync(target);
  return true;
}

function main() {
  const args = process.argv.slice(2);
  const dry = args.includes('--dry-run') || args.includes('-n');
  const only = (args.find(a => a.startsWith('--agent=')) || '').split('=')[1];

  console.log('\n🧹 designsense — Universal Uninstaller\n');
  if (dry) log('Dry run — no files will be removed', 'dry');

  if (only && !TARGETS[only]) {
    log(`Unknown agent "${only}". Choose: ${Object.keys(TARGETS).join(', ')}`, 'error');
    process.exit(1);
  }

  let removed = 0;
  for (const [key, getPath] of Object.entries(TARGETS)) {
    if (only && key !== only) continue;
    const target = getPath();
    log(`${key}: ${target}`, 'step');
    if (remove(target, dry)) {
      log(`Removed ${target}`, dry ? 'dry' : 'success');
      removed++;
    } else {
      log('Not installed', 'warn');
    }
  }

  const cmdDir = path.join(HOME, '.config', 'opencode', 'commands');
  if ((!only || only === 'opencode') && fs.existsSync(cmdDir)) {
    for (const file of fs.readdirSync(cmdDir).filter(f => f.startsWith('designsense') && f.endsWith('.md'))) {
      const target = path.join(cmdDir, file);
      log(`OpenCode command: ${target}`, 'step');
      if (remove(target, dry)) log('Removed', dry ? 'dry' : 'success');
    }
  }

  const config = path.join(ROOT, '.designsense', 'style.json');
  if (!only && fs.existsSync(config)) {
    log(`Project config: ${config}`, 'step');
    if (remove(config, dry)) log('Removed project config', dry ? 'dry' : 'success');
  }

  console.log(`\n${removed ? '✅' : '⭕'} Uninstall complete — ${removed} target(s) removed.`);
  console.log('');
}

main();
