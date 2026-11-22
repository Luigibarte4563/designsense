#!/usr/bin/env node
/**
 * designsense — Universal Installer
 * Installs the plugin for all detected AI coding agents.
 * Usage: node scripts/install.js [--agent=<name>] [--force] [--dry-run]
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const HOME = process.env.HOME || process.env.USERPROFILE || '';

const AGENTS = {
  claude: {
    name: 'Claude Code',
    detect: () => fs.existsSync(path.join(HOME, '.claude')),
    dir: () => path.join(HOME, '.claude', 'plugins', 'designsense'),
    install: (force, dry) => copyDir(path.join(ROOT, '.claude-plugin'), AGENTS.claude.dir(), force, dry),
  },
  opencode: {
    name: 'OpenCode',
    detect: () => fs.existsSync(path.join(HOME, '.opencode')),
    dir: () => path.join(HOME, '.opencode', 'plugins'),
    install: (force, dry) => copyFile(path.join(ROOT, '.opencode', 'plugins', 'designsense.mjs'), path.join(AGENTS.opencode.dir(), 'designsense.mjs'), force, dry),
  },
  kiro: {
    name: 'Kiro',
    detect: () => fs.existsSync(path.join(HOME, '.kiro')),
    dir: () => path.join(HOME, '.kiro', 'steering'),
    install: (force, dry) => copyFile(path.join(ROOT, '.kiro', 'steering', 'designsense.md'), path.join(AGENTS.kiro.dir(), 'designsense.md'), force, dry),
  },
  gemini: {
    name: 'Gemini CLI',
    detect: () => fs.existsSync(path.join(HOME, '.gemini')),
    dir: () => path.join(HOME, '.gemini', 'extensions', 'designsense'),
    install: (force, dry) => {
      const dir = AGENTS.gemini.dir();
      const ok = copyDir(path.join(ROOT, '.claude-plugin'), path.join(dir, '.claude-plugin'), force, dry);
      fs.existsSync(path.join(ROOT, 'gemini-extension.json')) &&
        copyFile(path.join(ROOT, 'gemini-extension.json'), path.join(dir, 'gemini-extension.json'), force, dry);
      const hooks = path.join(ROOT, '.claude-plugin', 'hooks');
      const entry = [
        `const { injectRules } = require(${JSON.stringify(path.join(hooks, 'inject-rules.js').replace(/\\/g, '/'))});`,
        `const { postEditCheck } = require(${JSON.stringify(path.join(hooks, 'post-edit-check.js').replace(/\\/g, '/'))});`,
        'module.exports = { injectRules, postEditCheck };',
        '',
      ].join('\n');
      if (!dry) fs.writeFileSync(path.join(dir, 'gemini-extension.js'), entry);
      return ok;
    },
  },
  codex: {
    name: 'Codex / Cursor / Windsurf',
    detect: () => true,
    dir: () => process.cwd(),
    install: (force, dry) => copyFile(path.join(ROOT, 'AGENTS.md'), path.join(process.cwd(), 'AGENTS.md'), force, dry),
  },
};

function log(msg, type = 'info') {
  const icons = { info: 'ℹ️', success: '✅', warn: '⚠️', error: '❌', step: '▶' };
  console.log(`  ${icons[type]} ${msg}`);
}

function copyDir(src, dest, overwrite, dry) {
  if (!fs.existsSync(src)) return false;
  if (dry) return true;
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d, overwrite, dry);
    else if (overwrite || !fs.existsSync(d)) fs.copyFileSync(s, d);
  }
  return true;
}

function copyFile(src, dest, overwrite, dry) {
  if (!fs.existsSync(src)) return false;
  if (dry) return true;
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  if (overwrite || !fs.existsSync(dest)) fs.copyFileSync(src, dest);
  return true;
}

function createProjectConfig(force, dry) {
  const dir = path.join(ROOT, '.designsense');
  const file = path.join(dir, 'style.json');
  log(`Project config: ${file}`, 'step');
  if (dry) return;
  fs.mkdirSync(dir, { recursive: true });
  if (force || !fs.existsSync(file)) {
    fs.writeFileSync(file, JSON.stringify({ level: 'full', style: 'neobrutalism' }, null, 2) + '\n');
  }
}

function main() {
  const args = process.argv.slice(2);
  const force = args.includes('--force') || args.includes('-f');
  const dry = args.includes('--dry-run') || args.includes('-n');
  const only = (args.find(a => a.startsWith('--agent=')) || '').split('=')[1];

  console.log('\n🎨 designsense — Universal Installer\n');

  if (only && !AGENTS[only]) {
    log(`Unknown agent "${only}". Choose: ${Object.keys(AGENTS).join(', ')}`, 'error');
    process.exit(1);
  }

  const detected = {};
  for (const [key, agent] of Object.entries(AGENTS)) {
    try { detected[key] = agent.detect(); } catch { detected[key] = false; }
  }

  console.log('Detected agents:');
  for (const [key, agent] of Object.entries(AGENTS)) {
    const mark = detected[key] ? '✅' : '⭕';
    const tag = only === key ? ' ← target' : '';
    console.log(`  ${mark} ${agent.name}${tag}`);
  }

  if (only && !detected[only] && !force) {
    log(`${AGENTS[only].name} not detected — use --force to install anyway.`, 'warn');
    process.exit(1);
  }
  if (dry) log('Dry run — no files will be written', 'warn');

  let installed = 0;
  for (const [key, agent] of Object.entries(AGENTS)) {
    if (only && key !== only) continue;
    if (!detected[key] && !force && key !== 'codex') {
      log(`Skipping ${agent.name} (not detected)`, 'warn');
      continue;
    }
    log(`${agent.name} → ${agent.dir()}`, 'step');
    try {
      if (agent.install(force, dry)) installed++;
    } catch (e) {
      log(`Failed for ${agent.name}: ${e.message}`, 'error');
    }
  }

  createProjectConfig(force, dry);

  console.log(`\n${installed ? '✅' : '⭕'} Installation complete — ${installed} agent target(s) configured.`);
  if (!dry) {
    console.log('\nNext steps:');
    console.log('  1. Restart your AI coding agent');
    console.log('  2. Run /designsense-help (or equivalent) to verify');
    console.log('  3. Set a style: /designsense-style neobrutalism');
    console.log('  4. Project config: .designsense/style.json');
  }
  console.log('');
}

main();
