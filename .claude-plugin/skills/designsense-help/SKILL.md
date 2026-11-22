# designsense-help — Command Reference

## Core Commands
| Command | Purpose |
|---------|---------|
| `/designsense [lite\|full\|strict]` | Set principles level (default: full) |
| `/designsense-review` | Review current diff → severity-ranked fixes |
| `/designsense-audit [path]` | Audit repo or page → full report |
| `/designsense-a11y [path]` | Focused accessibility pass |
| `/designsense-tokens [path]` | Extract hardcoded values → token file |
| `/designsense-states [path]` | Find missing loading/empty/error states |

## Style Commands
| Command | Purpose |
|---------|---------|
| `/designsense-style` | List available styles |
| `/designsense-style <name> [--accent=color]` | Activate style |
| `/designsense-style mix <primary>+<accent>` | Blend primary + accent (max 2) |
| `/designsense-style off` | Principles only, no aesthetic |
| `/designsense-style-preview` | Generate HTML showcase page |
| `/designsense-style-convert` | Restyle components to another preset |
| `/designsense-style-create` | Guided custom preset creation |

## Config Priority (highest wins)
1. Env vars: `DESIGNSENSE_MODE`, `DESIGNSENSE_STYLE`
2. User config: `~/.config/designsense/config.json`
3. Project config: `.designsense/style.json` (commit for team sync)

## Levels
- **lite**: A11y + states only (non-negotiables)
- **full**: All 5 pillars (default)
- **strict**: Full + design-system enforcement (tokens mandatory)

## Presets (MVP)
- `neobrutalism` — Thick borders, hard shadows, saturated flat colors
- `glassmorphism` — Translucent, backdrop blur, gradients
- `minimalism` — Whitespace, restrained palette, content-first

## Non-negotiables (every level, every style)
- Contrast ≥ 4.5:1 (text), 3:1 (UI)
- Visible focus ring on every interactive element
- Semantic HTML, labels on inputs
- 44×44px touch targets
- Loading / empty / error states on async UI
- `prefers-reduced-motion` respected
- Header/nav stays visible while scrolling (`position: sticky; top: 0`)
- No `outline: none` without replacement
- No click handlers on `<div>`/`<span>` without role+tabindex

## Deviation Markers
Mark deliberate rule breaks: `// designsense: <reason>`
Example: `// designsense: Brand requires centered layout despite left-align rule`

## Workflow
1. Set level/style once per project (project config)
2. Code normally — hooks inject rules, lint on edit
3. `/designsense-review` before commit
4. `/designsense-audit` periodically or on new pages
5. `/designsense-style <new>` to restyle; only tokens change