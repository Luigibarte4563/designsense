#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const CONFIG_PATHS = [
  path.join(process.env.HOME || process.env.USERPROFILE, '.config', 'designsense', 'config.json'),
  path.join(process.cwd(), '.designsense', 'style.json')
];

function loadConfig() {
  let config = { level: 'full', style: 'neobrutalism' };
  for (const p of CONFIG_PATHS) {
    if (fs.existsSync(p)) {
      try { config = { ...config, ...JSON.parse(fs.readFileSync(p, 'utf8')) }; } catch {}
    }
  }
  if (process.env.DESIGNSENSE_MODE) config.level = process.env.DESIGNSENSE_MODE;
  if (process.env.DESIGNSENSE_STYLE) config.style = process.env.DESIGNSENSE_STYLE;
  return config;
}

function saveConfig(config, target = 'project') {
  const p = CONFIG_PATHS[target === 'user' ? 0 : 1];
  const dir = path.dirname(p);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(p, JSON.stringify(config, null, 2));
  console.log(`Saved to ${p}`);
}

function main() {
  const args = process.argv.slice(2);
  const config = loadConfig();

  if (args.length === 0) {
    console.log(`designsense: ${config.level} mode${config.style !== 'none' ? ` + ${config.style} style` : ''}`);
    console.log('Usage: /designsense [lite|full|strict] [--user|--project]');
    return;
  }

  const level = args[0];
  if (!['lite', 'full', 'strict'].includes(level)) {
    console.error('Invalid level. Use: lite, full, or strict');
    process.exit(1);
  }

  const target = args.includes('--user') ? 'user' : 'project';
  config.level = level;
  saveConfig(config, target);
  console.log(`Set level to ${level} (${target})`);
}

main();