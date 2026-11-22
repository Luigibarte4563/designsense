/**
 * designsense — OpenCode Plugin Adapter
 * Reuses hooks, skills, and scripts from .claude-plugin/
 */

import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', '..');
const CLAUDE_PLUGIN = join(ROOT, '.claude-plugin');

export const designsensePlugin = {
  name: 'designsense',
  version: '0.1.0',
  description: 'UI/UX principles and style plugin for AI coding agents',

  // Hooks (adapted from Claude Code hooks)
  hooks: {
    async onUserPrompt(prompt, context) {
      // Inject core rules + active style
      const { injectRules } = await import(join(CLAUDE_PLUGIN, 'hooks', 'inject-rules.js'));
      const rules = await injectRules();
      return { ...context, systemPrompt: context.systemPrompt + '\n\n' + rules };
    },

    async onToolUse(tool, args, result) {
      // Lint UI files after edits
      if (tool === 'write' || tool === 'edit') {
        const file = args.path || args.file;
        const uiExts = ['.tsx', '.jsx', '.vue', '.html', '.css', '.scss', '.svelte', '.astro'];
        if (uiExts.some(ext => file?.endsWith(ext))) {
          const { postEditCheck } = await import(join(CLAUDE_PLUGIN, 'hooks', 'post-edit-check.js'));
          const issues = await postEditCheck(file);
          if (issues?.length) {
            return { ...result, warnings: issues };
          }
        }
      }
      return result;
    },
  },

  // Commands
  commands: {
    designsense: async (args) => {
      const { main } = await import(join(CLAUDE_PLUGIN, 'commands', 'designsense.js'));
      return main(args);
    },
    'designsense-review': async (args) => {
      const { main } = await import(join(CLAUDE_PLUGIN, 'commands', 'designsense-review.js'));
      return main(args);
    },
    'designsense-audit': async (args) => {
      const { main } = await import(join(CLAUDE_PLUGIN, 'commands', 'designsense-audit.js'));
      return main(args);
    },
    'designsense-a11y': async (args) => {
      const { main } = await import(join(CLAUDE_PLUGIN, 'commands', 'designsense-a11y.js'));
      return main(args);
    },
    'designsense-tokens': async (args) => {
      const { main } = await import(join(CLAUDE_PLUGIN, 'commands', 'designsense-tokens.js'));
      return main(args);
    },
    'designsense-states': async (args) => {
      const { main } = await import(join(CLAUDE_PLUGIN, 'commands', 'designsense-states.js'));
      return main(args);
    },
    'designsense-style': async (args) => {
      const { main } = await import(join(CLAUDE_PLUGIN, 'commands', 'designsense-style.js'));
      return main(args);
    },
    'designsense-help': async (args) => {
      const { main } = await import(join(CLAUDE_PLUGIN, 'commands', 'designsense-help.js'));
      return main(args);
    },
  },

  // Skills (load SKILL.md files)
  skills: {
    designsense: readFileSync(join(CLAUDE_PLUGIN, 'skills', 'designsense', 'SKILL.md'), 'utf8'),
    'designsense-style': readFileSync(join(CLAUDE_PLUGIN, 'skills', 'designsense-style', 'SKILL.md'), 'utf8'),
    'designsense-check': readFileSync(join(CLAUDE_PLUGIN, 'skills', 'designsense-check', 'SKILL.md'), 'utf8'),
    'designsense-help': readFileSync(join(CLAUDE_PLUGIN, 'skills', 'designsense-help', 'SKILL.md'), 'utf8'),
  },

  // Scripts (for programmatic use)
  scripts: {
    contrastCheck: join(ROOT, 'scripts', 'contrast-check.js'),
    a11yScan: join(ROOT, 'scripts', 'a11y-scan.js'),
    smellLint: join(ROOT, 'scripts', 'smell-lint.js'),
    styleFidelity: join(ROOT, 'scripts', 'style-fidelity.js'),
  },

  // Config
  config: {
    defaultLevel: 'full',
    defaultStyle: 'neobrutalism',
    configPaths: [
      join(process.env.HOME || process.env.USERPROFILE, '.config', 'designsense', 'config.json'),
      join(process.cwd(), '.designsense', 'style.json'),
    ],
  },
};

export default designsensePlugin;