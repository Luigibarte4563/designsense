# WCAG 2.2 AA Checklist for Designsense

## Perceivable

### 1.1 Non-text Content
- [ ] All images have `alt` text (decorative: `alt=""`)
- [ ] Icons have text labels or `aria-label`
- [ ] Charts/graphs have data tables or text summaries

### 1.2 Time-based Media
- [ ] Captions for video/audio
- [ ] Transcripts for audio
- [ ] Audio description for video (if visual info)

### 1.3 Adaptable
- [ ] Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- [ ] Form labels: `<label for="id">` or `aria-label`/`aria-labelledby`
- [ ] Fieldsets for grouped inputs (`<fieldset><legend>`)
- [ ] Tables: `<th scope="col|row">`, `<caption>`
- [ ] Heading hierarchy: h1 → h2 → h3 (no skips)

### 1.4 Distinguishable
- [ ] **Contrast 4.5:1** (text), **3:1** (large text 18pt+/14pt+ bold), **3:1** (UI components)
- [ ] Text resizable to 200% without horizontal scroll
- [ ] No text in images (except logos)
- [ ] Focus/hover states visible
- [ ] No color-only info (use icons, patterns, text too)
- [ ] Background audio controllable/off

---

## Operable

### 2.1 Keyboard Accessible
- [ ] All functionality via keyboard
- [ ] No keyboard traps
- [ ] Tab order = visual order
- [ ] Skip links for main content

### 2.2 Enough Time
- [ ] Adjustable timeouts (or warn + extend)
- [ ] Pause/stop/hide auto-updating content

### 2.3 Seizures
- [ ] No flash > 3x/sec
- [ ] No red flash threshold

### 2.4 Navigable
- [ ] **Focus visible** on all interactive elements
- [ ] Focus order logical
- [ ] Link purpose clear from text/context
- [ ] Multiple nav methods (search, TOC, sitemap)
- [ ] Headings/labels descriptive
- [ ] Focus not lost on dynamic content

### 2.5 Input Modalities
- [ ] **Touch targets ≥ 44×44px** (WCAG 2.5.5)
- [ ] Motion actuation has alternative
- [ ] Label in name (accessible name = visible label)
- [ ] Target size ≥ 44×44px (or equivalent spacing)

---

## Understandable

### 3.1 Readable
- [ ] Page language declared (`<html lang="en">`)
- [ ] Part language changes marked
- [ ] Unusual words/abbreviations defined

### 3.2 Predictable
- [ ] No context change on focus
- [ ] No context change on input (without warning)
- [ ] Consistent navigation
- [ ] Consistent identification

### 3.3 Input Assistance
- [ ] **Error identification** — specific, inline
- [ ] **Labels/instructions** for inputs
- [ ] **Error suggestions** — how to fix
- [ ] **Error prevention** (legal/financial/data): review, confirm, reversible

---

## Robust

### 4.1 Compatible
- [ ] Valid HTML (no duplicate IDs, proper nesting)
- [ ] ARIA roles/states/properties valid
- [ ] Name, role, value for custom components

---

## Designsense Non-Negotiables (Subset for Every Component)

| Rule | WCAG Ref | Check |
|------|----------|-------|
| Contrast ≥ 4.5:1 | 1.4.3 | Token pairs tested |
| Visible focus ring | 2.4.7 | `outline` + `outline-offset` |
| Semantic HTML | 1.3.1 | Button, label, nav, main |
| Form labels | 1.3.1, 3.3.2 | `<label>` or `aria-label` |
| Touch targets 44px | 2.5.5 | `min-height/min-width` or padding |
| Loading/empty/error states | 2.2.1, 3.3.1 | `aria-busy`, `aria-live`, `aria-invalid` |
| Reduced motion | 2.3.3 | `@media (prefers-reduced-motion)` |
| No `outline: none` alone | 2.4.7 | Replacement required |
| No click on div/span | 2.1.1, 4.1.2 | Use `<button>` or `role+tabindex` |

---

## Quick Token Contrast Test Pairs

| Pair | Min Ratio | Test |
|------|-----------|------|
| ink / bg | 4.5:1 | Body text |
| ink / surface | 4.5:1 | Card text |
| muted / bg | 3:1 | Secondary text |
| primary / white | 3:1 | Button text |
| border / bg | 3:1 | Input borders |
| focus / bg | 3:1 | Focus ring |

Run: `node scripts/contrast-check.js` to verify all token pairs.