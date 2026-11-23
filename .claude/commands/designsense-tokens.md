# /designsense-tokens

You are generating design tokens only, with no components or layout code.

## Setup
Arguments: `/designsense-tokens [style] [format]`. Style falls back to `.designsense/style.json`, then to neutral. Format is one of `css` (default), `json`, `tailwind`, or `all`.
If a style is set, read `styles/<style>/tokens.json` and extend it. Do not replace it, and do not invent values that duplicate it.
If a brand color is given, derive the palette from it; otherwise pick one.

## Token set (all required)
- **Color**: primary, secondary, accent, neutral scale (50-900), and semantic colors (success, warning, danger, info). Each has a surface, text, and border variant where relevant.
- **Spacing**: 8px base (4, 8, 16, 24, 32, 48, 64).
- **Radius**, **shadow/elevation**, **border width**.
- **Type**: font families, size scale (use `clamp()` for fluid sizes), weights, line heights.
- **Motion**: durations and easings, plus a reduced-motion override that sets durations to ~0.
- **Focus**: ring width, offset, and color.
- **Touch**: minimum target size (44px).
- **Z-index**: named layers (base, sticky, dropdown, modal, toast).

## Constraints
- Palette: 1 primary, 1 secondary, 1 accent, neutrals. No extras.
- Contrast: compute or verify that text tokens on their surfaces reach 4.5:1 (3:1 for large text and UI). List each pairing and its ratio in a short table. If a preset color fails, adjust it and note the original with `designsense: <reason>`.
- Name tokens by role (`--color-text-muted`), not by value (`--color-gray-500`), except in the raw scales.
- Light and dark themes if the style supports them; otherwise light only.

## Output
1. The token file(s) in the requested format.
2. Contrast table.
3. Two lines: how to import the tokens, and which values were adjusted from the preset.
No component code.