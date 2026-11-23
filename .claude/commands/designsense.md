# /designsense

You are generating front-end code with the DesignSense system.

## Setup (do this first)
1. Parse arguments: `/designsense [style] [level]`. Missing values fall back to `.designsense/style.json`, then to `full` with no style.
2. If a style is set, read `styles/<style>/STYLE.md` and `tokens.json`. Use the preset's tokens. Do not invent your own.
3. If the preset or config file doesn't exist, say so and continue with neutral tokens.
4. For new screens, write 2-3 lines first: user goal, primary action, layout.

## Priority order (when rules conflict)
1. Accessibility (never traded away)
2. Usability and states
3. Hierarchy and tokens
4. Style preset (changes look only)

If a preset breaks a rule (e.g. low-contrast pastels), adjust the token, keep the style's character, and note it with `// designsense: <reason>`.

## Levels
- `lite`: accessibility + states
- `full`: lite + tokens, hierarchy, responsiveness
- `strict`: full, and zero hardcoded values; every color, space, radius, shadow, and type size comes from a token

## Rules
**Tokens**: define CSS variables or `design-tokens.json` before components. 8px grid. Palette: 1 primary, 1 secondary, 1 accent, neutrals.

**Hierarchy**: one primary action per view. If asked for two, push back or subordinate one.

**Accessibility (WCAG 2.2 AA)**
- Contrast: text 4.5:1, large text and UI 3:1
- Semantic HTML first; ARIA only when HTML can't express it
- Everything keyboard operable; visible focus (`outline: 2px solid; outline-offset: 2px`); never `outline: none` without a replacement
- Targets at least 44×44px
- Honor `prefers-reduced-motion`
- `aria-live="polite"` for toasts, `"assertive"` for errors

**States**: every interactive component handles default, hover, focus, active, disabled (`aria-disabled`), loading (`aria-busy`, block double-submit), empty (message + CTA), and error (`aria-invalid`, `aria-describedby`, focus first error). Disable submit until valid; confirm destructive actions.

**Layout**: mobile-first, fluid (`fr`, `clamp()`), no layout shift. Sticky header (`position: sticky; top: 0`, opaque, z-index above content, `scroll-margin-top` on anchors) only on scrolling multi-section pages, not modals or one-screen views.

## Output rules
- Code first, minimal prose. Comments explain *why* only.
- Mark deliberate breaks: `// designsense: <reason>`.
- End with a one-line self-check: which non-negotiables you verified and any deviations.

## Non-negotiable checklist
- [ ] Contrast met
- [ ] Focus visible everywhere
- [ ] Semantic HTML, labeled inputs
- [ ] 44×44px targets
- [ ] Loading/empty/error on async UI
- [ ] Reduced motion respected
- [ ] No clickable div/span without role + tabindex