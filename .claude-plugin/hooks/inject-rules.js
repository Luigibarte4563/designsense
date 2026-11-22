const fs = require('fs');
const path = require('path');

function loadConfig() {
  const envMode = process.env.DESIGNSENSE_MODE;
  const envStyle = process.env.DESIGNSENSE_STYLE;
  const userConfigPath = path.join(process.env.HOME || process.env.USERPROFILE, '.config', 'designsense', 'config.json');
  const projectConfigPath = path.join(process.cwd(), '.designsense', 'style.json');

  let config = { level: 'full', style: 'neobrutalism' };

  if (fs.existsSync(userConfigPath)) {
    try { config = { ...config, ...JSON.parse(fs.readFileSync(userConfigPath, 'utf8')) }; } catch {}
  }
  if (fs.existsSync(projectConfigPath)) {
    try { config = { ...config, ...JSON.parse(fs.readFileSync(projectConfigPath, 'utf8')) }; } catch {}
  }
  if (envMode) config.level = envMode;
  if (envStyle) config.style = envStyle;

  return config;
}

function loadCoreRules(level) {
  const rulesPath = path.join(__dirname, '..', 'skills', 'designsense', 'SKILL.md');
  let content = fs.readFileSync(rulesPath, 'utf8');
  if (level === 'lite') {
    content = content.split('\n').filter(l => !l.includes('[FULL]') && !l.includes('[STRICT]')).join('\n');
  } else if (level === 'strict') {
    content = content.replace(/\[FULL\]/g, '').replace(/\[STRICT\]/g, '');
  } else {
    content = content.replace(/\[FULL\]/g, '').replace(/\[STRICT\]/g, '');
  }
  return content;
}

function loadStyleRules(styleName) {
  const stylePath = path.join(__dirname, '..', '..', 'styles', styleName, 'STYLE.md');
  if (!fs.existsSync(stylePath)) return '';
  return fs.readFileSync(stylePath, 'utf8');
}

function main() {
  const config = loadConfig();
  const coreRules = loadCoreRules(config.level);
  const styleRules = loadStyleRules(config.style);

  let output = '# designsense: ' + config.level + ' mode' + (config.style !== 'none' ? ' + ' + config.style + ' style' : '') + '\n\n';
  output += '## Core Principles (' + config.level + ')\n' + coreRules + '\n';
  if (styleRules) {
    output += '\n## Active Style: ' + config.style + '\n' + styleRules + '\n';
    output += '\n## Exact Style Output (mandatory)\n' +
      'The active style is a fixed spec, not inspiration. When writing UI:\n' +
      '1. Copy the `## Example Component Patterns` CSS verbatim for buttons, cards, inputs and their hover/focus/active/disabled states. Do not invent different shadows, radii, fonts or colors.\n' +
      '2. Use the `--ds-*` variable names from `## CSS Variables` exactly. Never hardcode a hex/px/rem value that already has a token.\n' +
      '3. Every visible element resolves to these tokens — background, border, shadow, radius, font, motion. If a needed value is missing, reuse the closest token instead of inventing one.\n' +
      '4. Never substitute generic descriptors ("modern", "clean", "vibrant", "soft") for concrete token values.\n' +
      '5. Style changes appearance only. Accessibility, semantic HTML and every interaction state from the core rules still apply.\n' +
      '6. Mark any deliberate deviation inline: `// designsense: <reason>`.\n';
  }
  output += '\n---\n*Config: level=' + config.level + ', style=' + config.style + ' | Change with /designsense [lite|full|strict] or /designsense-style <name>*';

  console.log(output);
}

main();