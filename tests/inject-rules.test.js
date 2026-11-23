const test = require('node:test');
const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const path = require('node:path');

const root = path.join(__dirname, '..');
const hook = path.join(root, '.claude-plugin', 'hooks', 'inject-rules.js');

function inject(extraEnv = {}) {
  const env = { ...process.env };
  delete env.DESIGNSENSE_MODE;
  delete env.DESIGNSENSE_STYLE;
  return execFileSync(process.execPath, [hook], {
    cwd: root,
    env: { ...env, ...extraEnv },
    encoding: 'utf8',
  });
}

const a11yMarkers = ['Contrast', 'Visible focus', 'Semantic HTML first', 'Loading', 'Error'];

test('hook injects resolved config and the active STYLE.md', () => {
  const out = inject();
  assert.ok(!out.includes('{{') && !out.includes('}}'), 'placeholders left unresolved');
  assert.match(out, /# designsense: full mode \+ neobrutalism style/);
  assert.match(out, /## Active Style: neobrutalism/);
  assert.match(out, /--ds-color-primary: #FFD23F/, 'STYLE.md css variables missing');
  assert.match(out, /## Example Component Patterns/, 'STYLE.md component patterns missing');
  for (const marker of a11yMarkers) assert.ok(out.includes(marker), `missing a11y rule: ${marker}`);
});

test('a terse plugin mode does not drop accessibility rules', () => {
  const baseline = inject();
  const terse = inject({ PONYTAIL_LEVEL: 'ultra', TERSE_MODE: 'on' });
  for (const marker of a11yMarkers) {
    assert.ok(terse.includes(marker), `terse mode dropped a11y rule: ${marker}`);
  }
  assert.equal(terse, baseline, 'terse mode changed injected core rules');
});
