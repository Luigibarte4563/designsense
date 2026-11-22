# designsense-style — Visual Style Presets

Style changes the **look**, never the **usability**. Accessibility and interaction states stay on in every style.

## Exact Output (mandatory)
- The active style is a fixed spec, not inspiration. Read `styles/<active>/STYLE.md` before writing UI.
- Copy its `Example Component Patterns` verbatim for buttons/cards/inputs and all states; copy `--ds-*` variable names exactly.
- Never hardcode a value that has a token, and never invent a value that is missing — reuse the closest token.
- If a token conflicts with a non-negotiable a11y rule, keep the look and adjust the value with `// designsense: <reason>`.

## Commands
- `/designsense-style` — List available styles
- `/designsense-style <name> [--accent=color]` — Activate a style
- `/designsense-style mix <primary>+<accent>` — Limited blend (one primary + one accent only)
- `/designsense-style off` — Principles only, no aesthetic preset
- `/designsense-style-preview` — Generate HTML page showing buttons, cards, forms, modal in active style
- `/designsense-style-convert` — Restyle existing components into another preset
- `/designsense-style-create` — Guided custom preset creation

## Style Preset Structure
Each preset in `styles/<name>/` contains:
- `STYLE.md` — Signature traits, do/don't, accessibility watch-outs
- `tokens.json` — Color, border, shadow, radius, font, motion
- `css-variables.css` — CSS custom properties
- `tailwind.preset.js` — Tailwind config extension
- `STYLE.md` also contains exact button/card/input patterns to copy verbatim

## Launch Presets (3 original, 56 more in `styles/`)

### 1. Neobrutalism
**Traits**: Thick black borders (3px), hard offset shadows (4px/4px/0), saturated flat colors, bold type (weight 800)
**Tokens**: `border: 3px #000`, `shadow: 4px 4px 0 #000`, `radius: 0/4px`, `colors: bg #FFF4E0, primary #FFD23F, secondary #FF6B9D, ink #000`
**A11y watch**: Ink on yellow/pink ≥ 4.5:1; Focus ring: 3px offset outline, not shadow-only

### 2. Glassmorphism
**Traits**: Translucent panels, backdrop blur, light borders, gradient backgrounds
**Tokens**: `bg: rgba(255,255,255,0.1)`, `backdrop-filter: blur(16px)`, `border: 1px rgba(255,255,255,0.2)`, `shadow: 0 8px 32px rgba(0,0,0,0.1)`
**A11y watch**: Low contrast over busy backgrounds → minimum opaque overlay, solid fallback without backdrop-filter

### 3. Minimalism
**Traits**: Whitespace, restrained palette, content first, no decoration
**Tokens**: `colors: neutral grays + 1 accent`, `shadow: none or subtle`, `border: 1px or none`, `radius: 4-8px`, `generous space`
**A11y watch**: Ensure sufficient contrast without decorative crutches

## Style vs. Accessibility Guardrails
| Style | Known Risk | Built-in Fix |
|-------|------------|--------------|
| Glassmorphism | Low contrast over busy backgrounds | Minimum opaque overlay, solid fallback |
| Neumorphism | Weak edges, low contrast | Visible borders or stronger shadows on interactive, distinct focus ring |
| Cyberpunk/Neon | Glow hurts readability | Glow only on accents, high-contrast body text |
| Retro/Y2K | Busy decoration, hard fonts | Readable font for body text |
| Brutalism | Unconventional layouts | Keep semantic structure and keyboard order |

**If a request breaks a non-negotiable rule**: Keep the style's look, adjust offending values, add `// designsense: <reason>` comment.

## Mixing Rule
One primary style + one accent style only (e.g., bento layout + glass surfaces). Arbitrary blends not allowed — results get inconsistent.

## Framework Output
Tokens defined once; components built from them. Changing style = editing token file, not rewriting components.
- **Tailwind**: Preset config + utility patterns
- **Plain CSS/CSS Modules**: CSS variables
- **CSS-in-JS**: Theme object
- **shadcn/ui, MUI, Chakra**: Theme overrides

## Config
- Env: `DESIGNSENSE_STYLE=neobrutalism|glassmorphism|minimalism|none`
- User: `~/.config/designsense/config.json`
- Project: `.designsense/style.json` (team consistency)