#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const STYLES_DIR = path.join(__dirname, '..', '..', 'styles');
const CONFIG_PATH = path.join(process.cwd(), '.designsense', 'style.json');
const USER_CONFIG_PATH = path.join(process.env.HOME || process.env.USERPROFILE, '.config', 'designsense', 'config.json');

function getAvailableStyles() {
  if (!fs.existsSync(STYLES_DIR)) return [];
  return fs.readdirSync(STYLES_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory() && d.name !== '_template')
    .map(d => d.name);
}

function loadConfig() {
  let config = { level: 'full', style: 'neobrutalism' };
  if (fs.existsSync(USER_CONFIG_PATH)) {
    try { config = { ...config, ...JSON.parse(fs.readFileSync(USER_CONFIG_PATH, 'utf8')) }; } catch {}
  }
  if (fs.existsSync(CONFIG_PATH)) {
    try { config = { ...config, ...JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8')) }; } catch {}
  }
  if (process.env.DESIGNSENSE_MODE) config.level = process.env.DESIGNSENSE_MODE;
  if (process.env.DESIGNSENSE_STYLE) config.style = process.env.DESIGNSENSE_STYLE;
  return config;
}

function saveConfig(config, target = 'project') {
  const p = target === 'user' ? USER_CONFIG_PATH : CONFIG_PATH;
  const dir = path.dirname(p);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(p, JSON.stringify(config, null, 2));
  console.log('Saved to ' + p);
}

function readStyleFile(styleName, fileName) {
  const p = path.join(STYLES_DIR, styleName, fileName);
  if (fs.existsSync(p)) return fs.readFileSync(p, 'utf8');
  return null;
}

function main() {
  const args = process.argv.slice(2);
  const styles = getAvailableStyles();
  const config = loadConfig();

  if (args.length === 0) {
    console.log('Available styles:');
    for (const s of styles) {
      const marker = s === config.style ? ' <- active' : '';
      console.log('  ' + s + marker);
    }
    console.log('\nUsage: /designsense-style <name> [--accent=color] [--user|--project]');
    console.log('       /designsense-style mix <primary>+<accent>');
    console.log('       /designsense-style off');
    console.log('       /designsense-style-preview');
    return;
  }

  const sub = args[0];

  if (sub === 'off') {
    config.style = 'none';
    const target = args.includes('--user') ? 'user' : 'project';
    saveConfig(config, target);
    console.log('Style disabled (principles only)');
    return;
  }

  if (sub === 'mix') {
    const blend = args[1];
    if (!blend || !blend.includes('+')) {
      console.error('Usage: /designsense-style mix <primary>+<accent>');
      process.exit(1);
    }
    const [primary, accent] = blend.split('+');
    if (!styles.includes(primary) || !styles.includes(accent)) {
      console.error('Both styles must be available. Run /designsense-style to list.');
      process.exit(1);
    }
    config.style = primary;
    config.accent = accent;
    const target = args.includes('--user') ? 'user' : 'project';
    saveConfig(config, target);
    console.log('Mixed style: ' + primary + ' + ' + accent + ' accent');
    return;
  }

  if (sub === 'preview') {
    generatePreview(config.style);
    return;
  }

  if (sub === 'convert') {
    console.log('Style conversion not yet implemented. Use /designsense-style <new> then review changes.');
    return;
  }

  if (sub === 'create') {
    console.log('Custom preset creation not yet implemented.');
    return;
  }

  if (!styles.includes(sub)) {
    console.error('Unknown style: ' + sub);
    console.log('Available:', styles.join(', '));
    process.exit(1);
  }

  config.style = sub;
  const target = args.includes('--user') ? 'user' : 'project';
  saveConfig(config, target);
  console.log('Style set to ' + sub + ' (' + target + ')');
}

function generatePreview(styleName) {
  const styleMd = readStyleFile(styleName, 'STYLE.md') || '';
  const tokens = readStyleFile(styleName, 'tokens.json');
  let tokenObj = {};
  if (tokens) {
    try { tokenObj = JSON.parse(tokens); } catch {}
  }

  const html = '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>designsense preview — ' + styleName + '</title>\n  <style>\n    ' + generateCSS(tokenObj, styleName) + '\n    body { font-family: system-ui, sans-serif; max-width: 900px; margin: 0 auto; padding: 2rem; line-height: 1.6; }\n    .showcase { display: grid; gap: 2rem; margin-top: 2rem; }\n    .component { border: 1px solid var(--color-border, #ccc); padding: 1.5rem; border-radius: var(--radius-md, 8px); }\n    .btn { display: inline-block; padding: 0.75rem 1.5rem; border-radius: var(--radius-md, 8px); border: none; cursor: pointer; font-weight: 600; margin-right: 0.5rem; margin-bottom: 0.5rem; }\n    .btn-primary { background: var(--color-primary, #0066cc); color: white; }\n    .btn-secondary { background: var(--color-secondary, #6c757d); color: white; }\n    .btn:disabled { opacity: 0.5; cursor: not-allowed; }\n    .card { padding: 1.5rem; }\n    .form-group { margin-bottom: 1rem; }\n    label { display: block; margin-bottom: 0.25rem; font-weight: 500; }\n    input, select, textarea { width: 100%; padding: 0.5rem; border: 1px solid var(--color-border, #ccc); border-radius: var(--radius-sm, 4px); }\n    .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; }\n    .modal { background: var(--color-bg, white); padding: 2rem; border-radius: var(--radius-lg, 12px); max-width: 400px; width: 90%; }\n  </style>\n</head>\n<body>\n  <h1>' + styleName + ' Preview</h1>\n  <p>' + styleMd.split('\n').slice(0, 3).join(' ') + '</p>\n  \n  <div class="showcase">\n    <div class="component">\n      <h2>Buttons</h2>\n      <button class="btn btn-primary">Primary</button>\n      <button class="btn btn-secondary">Secondary</button>\n      <button class="btn btn-primary" disabled>Disabled</button>\n      <button class="btn" style="background: var(--color-accent, #f0f0f0); color: var(--color-ink, #000);">Accent</button>\n    </div>\n\n    <div class="component">\n      <h2>Card</h2>\n      <div class="card">\n        <h3>Card Title</h3>\n        <p>Card description text goes here. This shows the style\'s typography and spacing.</p>\n        <button class="btn btn-primary" style="margin-top: 1rem;">Action</button>\n      </div>\n    </div>\n\n    <div class="component">\n      <h2>Form</h2>\n      <form>\n        <div class="form-group">\n          <label for="email">Email</label>\n          <input type="email" id="email" placeholder="you@example.com" required>\n        </div>\n        <div class="form-group">\n          <label for="plan">Plan</label>\n          <select id="plan">\n            <option>Free</option>\n            <option>Pro</option>\n            <option>Enterprise</option>\n          </select>\n        </div>\n        <button type="submit" class="btn btn-primary">Submit</button>\n      </form>\n    </div>\n\n    <div class="component">\n      <h2>Modal</h2>\n      <button class="btn btn-primary" onclick="document.getElementById(\'modal\').style.display=\'flex\'">Open Modal</button>\n      <div id="modal" class="modal-overlay" style="display:none" onclick="event.target===this && (this.style.display=\'none\')">\n        <div class="modal">\n          <h3>Confirm Action</h3>\n          <p>Are you sure you want to proceed?</p>\n          <div style="display:flex; gap:0.5rem; justify-content:flex-end; margin-top:1rem;">\n            <button class="btn btn-secondary" onclick="document.getElementById(\'modal\').style.display=\'none\'">Cancel</button>\n            <button class="btn btn-primary" onclick="document.getElementById(\'modal\').style.display=\'none\'">Confirm</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n</html>';

  const outPath = path.join(process.cwd(), 'designsense-preview-' + styleName + '.html');
  fs.writeFileSync(outPath, html);
  console.log('Generated ' + outPath + ' — open in browser to preview');
}

function generateCSS(tokens, styleName) {
  const cssVars = [];
  if (tokens.color) {
    for (const [k, v] of Object.entries(tokens.color)) {
      cssVars.push('--color-' + k + ': ' + v + ';');
    }
  }
  if (tokens.border) {
    for (const [k, v] of Object.entries(tokens.border)) {
      cssVars.push('--border-' + k + ': ' + v + ';');
    }
  }
  if (tokens.shadow) {
    for (const [k, v] of Object.entries(tokens.shadow)) {
      cssVars.push('--shadow-' + k + ': ' + v + ';');
    }
  }
  if (tokens.radius) {
    for (const [k, v] of Object.entries(tokens.radius)) {
      cssVars.push('--radius-' + k + ': ' + v + ';');
    }
  }
  if (tokens.font) {
    for (const [k, v] of Object.entries(tokens.font)) {
      cssVars.push('--font-' + k + ': ' + v + ';');
    }
  }

  return ':root { ' + cssVars.join(' ') + ' }';
}

main();