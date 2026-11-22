# designsense — AGENTS.md (Codex, Cursor, and others)

## Always-On Rules (Paste into agent context)

You are generating front-end code. Follow these principles **always**:

### 1. Visual Hierarchy
- Define design tokens first (colors, spacing, radius, shadows, type). Never hardcode magic numbers.
- One primary action per view. Visual weight: primary > secondary > tertiary > ghost.
- Align to 8px grid. Limited palette: 1 primary, 1 secondary, 1 accent, neutrals.

### 2. Usability Heuristics
- **Visibility**: Loading, empty, error states on every async component.
- **Error prevention**: Disable submit until valid; confirm destructive actions.
- **Consistency**: Same component = same behavior/appearance.
- **Fitts's Law**: Touch targets ≥ 44×44px. Primary actions large, easy reach.
- **Hick's Law**: Limit choices. Progressive disclosure for complex settings.

### 3. Accessibility (WCAG 2.2 AA — Non-negotiable)
- **Contrast**: Text ≥ 4.5:1, large text ≥ 3:1, UI ≥ 3:1.
- **Keyboard**: All interactive elements reachable/operable via Tab/Enter/Space/Arrows.
- **Visible focus**: `outline: 2px solid` + `outline-offset: 2px` minimum. Never `outline: none` without replacement.
- **Semantic HTML first**: `<button>`, `<nav>`, `<main>`, `<form>`, `<label>`, `<fieldset>`. ARIA only when HTML cannot express it.
- **Touch targets**: ≥ 44×44px.
- **Reduced motion**: Respect `prefers-reduced-motion: reduce`.
- **Live regions**: `aria-live="polite"` for toasts; `"assertive"` for errors.

### 4. Interaction States (Every Component)
Handle all states explicitly:
| State | Visual | Behavioral |
|-------|--------|------------|
| Default | Base tokens | Ready |
| Hover | Elevate/brighten | Preview |
| Focus | Visible ring | Trap if modal |
| Active | Pressed | Commit on release |
| Disabled | Muted, `cursor:not-allowed` | `aria-disabled` |
| Loading | Spinner/skeleton, `aria-busy` | Prevent double-submit |
| Empty | Illustration + CTA | Helpful, not dead-end |
| Error | Inline message, `aria-invalid`, `aria-describedby` | Focus first error |

### 5. Responsiveness & Performance
- **Persistent navigation**: On scrolling pages keep the header/nav visible with `position: sticky; top: 0`, an opaque background and a z-index above content. Add `scroll-margin-top` to anchor targets.
- Mobile-first. Fluid layouts (`%`, `fr`, `clamp()`). No layout shift. Optimized images.

---

## Style Presets (Optional)
Activate one: `neobrutalism`, `glassmorphism`, `minimalism`.

**Neobrutalism**: 3px black borders, 4px/4px/0 shadows, flat saturated colors, bold type.
**Glassmorphism**: Translucent panels, backdrop blur, light borders, gradients.
**Minimalism**: Whitespace, restrained palette, no decoration.

Style changes **look only** — accessibility and states stay on.

---

## Working Rules
1. **Tokens first** — define `design-tokens.json` or CSS variables before components.
2. **State intent** — for new screens, write 2–3 lines: user goal, primary action, layout.
3. **Terse explanations** — put decisions in code; comments only for *why* (deviations).
4. **Mark deviations** — `// designsense: <reason>` for deliberate rule breaks.
5. **One primary action** — if design asks for two, push back or subordinate one.

---

## Quick Reference: Non-negotiables
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
Set once per project in `.designsense/style.json`:
```json
{ "level": "full", "style": "neobrutalism" }
```
Levels: `lite` (A11y+states), `full` (all pillars), `strict` (tokens mandatory).