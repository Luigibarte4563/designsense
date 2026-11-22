# designsense — Core UI/UX Ruleset

Always-on principles for AI-generated front-end code. Style is separate (see `designsense-style`).

## Levels
- **lite**: Accessibility + interaction states only
- **full**: All 5 pillars (default)
- **strict**: Full + design-system consistency enforcement

---

## 1. Visual Hierarchy
- Define a **type scale** (e.g., 12/14/16/20/24/32/48) and **spacing scale** (4/8px base) as tokens. Never hardcode magic numbers.
- One **primary action** per view. Visual weight: primary > secondary > tertiary > ghost.
- Align to an 8px grid. Use consistent alignment (left, center, or justified — pick one per section).
- Limited palette: 1 primary, 1 secondary, 1 accent, neutrals (bg, surface, border, ink, muted).

**[FULL]** Declare tokens at file/top of component: `const tokens = { color: {...}, space: {...}, radius: {...} }`.

**[STRICT]** All values must reference tokens. Flag any raw pixel/hex/rem not in token map.

---

## 2. Usability Heuristics (Nielsen + Fitts + Hick)
- **Visibility of status**: Loading, empty, error states on every async component.
- **Error prevention**: Disable submit until valid; confirm destructive actions.
- **Consistency**: Same component = same behavior/appearance. Reuse, don't reimplement.
- **Fitts's Law**: Touch targets ≥ 44×44px. Primary actions large, placed for easy reach.
- **Hick's Law**: Limit choices. Progressive disclosure for complex settings.
- **Sensible defaults**: Pre-fill known values; smart autocomplete; remember last selection.

**[FULL]** Before coding a new screen, state in 2–3 lines: user goal, primary action, layout approach.

---

## 3. Accessibility (WCAG 2.2 AA — Non-negotiable)
- **Contrast**: Text ≥ 4.5:1, large text ≥ 3:1, UI elements ≥ 3:1. Test token pairs.
- **Keyboard**: All interactive elements reachable and operable via Tab/Enter/Space/Arrows. Focus order = visual order.
- **Visible focus**: `outline: 2px solid` + `outline-offset: 2px` minimum. Never `outline: none` without replacement.
- **Semantic HTML first**: `<button>`, `<nav>`, `<main>`, `<form>`, `<label>`, `<fieldset>`. ARIA only when HTML cannot express it.
- **Touch targets**: ≥ 44×44px (CSS `min-height/min-width` or padding).
- **Reduced motion**: Respect `prefers-reduced-motion: reduce` — disable non-essential animation.
- **Live regions**: `aria-live="polite"` for toasts/status; `"assertive"` for errors.

**[LITE]** These rules always apply regardless of level.

---

## 4. Interaction States (Every Component)
Handle all six states explicitly:
| State | Visual | Behavioral |
|-------|--------|------------|
| **Default** | Base token values | Ready |
| **Hover** | Elevate/brighten (cursor) | Preview action |
| **Focus** | Visible ring (keyboard) | Trap if modal |
| **Active** | Pressed/depressed | Commit on release |
| **Disabled** | Muted, `cursor: not-allowed` | Non-interactive, `aria-disabled` |
| **Loading** | Spinner/skeleton, `aria-busy` | Prevent double-submit |
| **Empty** | Illustration + guidance CTA | Helpful, not dead-end |
| **Error** | Inline message, `aria-invalid`, `aria-describedby` | Focus first error |

**[FULL]** Missing states = blocker in review.

---

## 5. Responsiveness & Performance
- **Persistent navigation**: On any scrolling page, keep the header/nav reachable — `position: sticky; top: 0` with an opaque background and a `z-index` above content. Never let primary nav scroll out of view. Add `scroll-margin-top` to anchor targets so in-page links aren't hidden under it.
- **Mobile-first**: Base styles for <640px; progressive enhancement via media queries.
- **Fluid layouts**: `%`, `fr`, `clamp()`, `min()/max()` — avoid fixed widths.
- **No layout shift**: Reserve space for images/ads/fonts (`aspect-ratio`, `font-display: optional`).
- **Optimized images**: `srcset`/`sizes`, WebP/AVIF, lazy-load below fold.
- **Touch-friendly**: 44px targets, adequate spacing between tappable elements.

**[STRICT]** Audit CLS/LCP/INP thresholds in review.

---

## Working Rules for the Agent
1. **Tokens first** — define `design-tokens.json` or CSS variables before writing components.
2. **State intent** — for new screens, write 2–3 lines: goal, primary action, layout.
3. **Terse explanations** — put decisions in code; comments only for *why* (deviations).
4. **Mark deviations** — `// designsense: <reason>` for deliberate rule breaks.
5. **One primary action** — if design asks for two, push back or make one visually subordinate.

---

## Quick Reference: Non-negotiables (all levels)
- [ ] Contrast ≥ 4.5:1 (text), 3:1 (UI)
- [ ] Visible focus ring on every interactive element
- [ ] Semantic HTML, labels on inputs
- [ ] 44×44px touch targets
- [ ] Loading / empty / error states on async UI
- [ ] `prefers-reduced-motion` respected
- [ ] Header/nav stays visible while scrolling (`position: sticky; top: 0`)
- [ ] No `outline: none` without replacement
- [ ] No click handlers on `<div>`/`<span>` without role+tabindex

---

## Config
Env: `DESIGNSENSE_MODE=lite|full|strict`, `DESIGNSENSE_STYLE=neobrutalism|glassmorphism|minimalism|none`
User: `~/.config/designsense/config.json`
Project: `.designsense/style.json` (commits with repo for team consistency)