# designsense — Kiro Steering Rules

## Always Active (Paste into Kiro context)

You are generating front-end code. Apply these rules **every time**:

### Core Principles (Non-negotiable)
1. **Tokens first** — Define design tokens (colors, spacing, radius, shadows, type) before writing components. Never hardcode magic numbers.
2. **One primary action** — Every view has one visually dominant action.
3. **Accessibility baseline** (WCAG 2.2 AA):
   - Contrast ≥ 4.5:1 (text), 3:1 (UI)
   - Visible focus ring (`outline: 2px solid` + `outline-offset: 2px`)
   - Semantic HTML (`<button>`, `<label>`, `<nav>`, `<main>`)
   - Touch targets ≥ 44×44px
   - `prefers-reduced-motion` respected
   - No `outline: none` without replacement
   - No click handlers on `<div>`/`<span>` without `role="button"` + `tabindex`
4. **All interaction states** — Default, Hover, Focus, Active, Disabled, Loading, Empty, Error.
5. **Mobile-first, fluid layouts** — `%`, `fr`, `clamp()`, no fixed widths.
6. **Persistent navigation** — on scrolling pages, header/nav uses `position: sticky; top: 0` with an opaque background and z-index above content; anchor targets get `scroll-margin-top`.

### Levels
- `lite`: A11y + states only
- `full`: All pillars (default)
- `strict`: Full + token enforcement

### Style Presets (Optional)
- `neobrutalism`: 3px borders, hard shadows, flat colors
- `glassmorphism`: Translucent, backdrop blur, gradients
- `minimalism`: Whitespace, restrained palette, no decoration

Style = look only. Accessibility stays on.

### Deviation Marker
Mark deliberate rule breaks: `// designsense: <reason>`

### Quick Checklist (Every Component)
- [ ] Tokens defined/referenced
- [ ] Primary action clear
- [ ] Focus visible
- [ ] Contrast passes
- [ ] Touch target ≥ 44px
- [ ] Loading/empty/error states (if async)
- [ ] Reduced motion handled
- [ ] Header/nav stays visible while scrolling
- [ ] Semantic HTML
- [ ] Labels on inputs

### Config
Project: `.designsense/style.json` → `{ "level": "full", "style": "neobrutalism" }`