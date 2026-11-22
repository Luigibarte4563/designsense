# Component Patterns Reference

Standard accessible patterns for common UI components. Each includes required states, keyboard behavior, and ARIA.

---

## Button
**Element**: `<button>` (never `<div onClick>`)

### States
| State | Visual | ARIA |
|-------|--------|------|
| Default | Base tokens | — |
| Hover | Elevate/brighten | — |
| Focus | Visible ring (2px+ offset) | — |
| Active | Pressed | — |
| Disabled | Muted, `cursor:not-allowed` | `aria-disabled="true"` |
| Loading | Spinner, `aria-busy="true"` | `aria-busy="true"` |

### Keyboard
- Enter/Space: Activate
- Disabled: Skip in tab order

### Pattern
```tsx
<button
  className="ds-btn"
  disabled={loading || disabled}
  aria-busy={loading}
  aria-disabled={disabled}
>
  {loading ? <Spinner /> : children}
</button>
```

---

## Link vs Button
- **Link** (`<a href>`): Navigation, URL changes
- **Button** (`<button>`): Action, no URL change
- Never `<a href="#" onClick>` — use `<button>`

---

## Input (Text, Email, Password, Search)
**Element**: `<input type="...">` + `<label>`

### States
| State | Visual | ARIA |
|-------|--------|------|
| Default | Base border | — |
| Hover | Border highlight | — |
| Focus | Ring + border | — |
| Filled | Optional style | — |
| Error | Red border + message | `aria-invalid="true"`, `aria-describedby="error-id"` |
| Disabled | Muted | `aria-disabled="true"` |

### Required
```tsx
<label htmlFor="email">Email</label>
<input
  id="email"
  type="email"
  aria-describedby={error ? "email-error" : undefined}
  aria-invalid={!!error}
/>
{error && <span id="email-error" role="alert">{error}</span>}
```

---

## Select (Native)
**Element**: `<select>` + `<label>`

### Pattern
```tsx
<label htmlFor="plan">Plan</label>
<select id="plan" aria-describedby={error ? "plan-error" : undefined}>
  <option value="">Select...</option>
  <option value="free">Free</option>
  <option value="pro">Pro</option>
</select>
```

---

## Checkbox / Radio
**Element**: `<input type="checkbox|radio">` + `<label>`

### Group (Radio)
```tsx
<fieldset>
  <legend>Plan</legend>
  <label><input type="radio" name="plan" value="free" /> Free</label>
  <label><input type="radio" name="plan" value="pro" /> Pro</label>
</fieldset>
```

### Single Checkbox
```tsx
<label>
  <input type="checkbox" aria-describedby="terms-desc" />
  I agree
</label>
<span id="terms-desc">Read our terms</span>
```

---

## Toggle Switch
**Element**: `<button role="switch" aria-checked>` (not `<input type="checkbox">` for visual toggle)

### Pattern
```tsx
<button
  role="switch"
  aria-checked={on}
  aria-label={label}
  className="ds-toggle"
>
  <span className="ds-toggle-thumb" />
</button>
```

### Keyboard
- Space/Enter: Toggle
- Arrow keys: Optional (left/right)

---

## Modal Dialog
**Element**: `<div role="dialog" aria-modal="true">` or `<dialog>`

### Required
- Focus trap (Tab cycles within modal)
- Focus first focusable on open
- Return focus to trigger on close
- `aria-labelledby` → title, `aria-describedby` → description
- ESC to close
- Backdrop click to close (optional)

### Pattern
```tsx
<div role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-desc">
  <h2 id="modal-title">Confirm</h2>
  <p id="modal-desc">Are you sure?</p>
  <button onClick={onConfirm}>Yes</button>
  <button onClick={onClose}>No</button>
</div>
```

### Focus Trap (simplified)
```js
function trapFocus(element) {
  const focusables = element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  element.addEventListener('keydown', e => {
    if (e.key !== 'Tab') return;
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
}
```

---

## Toast / Notification
**Element**: `<div role="status" aria-live="polite">` (info) or `role="alert" aria-live="assertive"` (error)

### Pattern
```tsx
<div role="status" aria-live="polite" className="ds-toast">
  <span>Saved successfully</span>
</div>
```

### Auto-dismiss
- Minimum 5 seconds visible
- Pause on hover/focus
- Announce on mount (not on dismiss)

---

## Tabs
**Element**: ARIA tabs pattern

### Structure
```tsx
<div role="tablist" aria-label="Settings">
  <button role="tab" aria-selected="true" aria-controls="panel1" id="tab1">General</button>
  <button role="tab" aria-selected="false" aria-controls="panel2" id="tab2" tabindex="-1">Privacy</button>
</div>
<div role="tabpanel" id="panel1" aria-labelledby="tab1">...</div>
<div role="tabpanel" id="panel2" aria-labelledby="tab2" hidden>...</div>
```

### Keyboard
- Left/Right: Switch tabs (auto-activate or manual with Enter)
- Home/End: First/last tab
- Tab: Into panel

---

## Accordion
**Element**: `<button aria-expanded>` + panel

### Pattern
```tsx
<h3><button aria-expanded="false" aria-controls="panel1" onClick={toggle}>Section</button></h3>
<div id="panel1" role="region" aria-labelledby="btn1" hidden>Content</div>
```

### Keyboard
- Enter/Space: Toggle
- Optional: Arrow keys for multiple

---

## Data Table
**Element**: `<table>` with `<thead>`, `<tbody>`, `<th scope="col">`

### Pattern
```tsx
<table>
  <caption>Users</caption>
  <thead>
    <tr><th scope="col">Name</th><th scope="col">Role</th><th scope="col">Actions</th></tr>
  </thead>
  <tbody>
    <tr><td>John</td><td>Admin</td><td><button>Edit</button></td></tr>
  </tbody>
</table>
```

### Sortable Columns
```tsx
<th scope="col">
  <button aria-sort="ascending">Name</button>
</th>
```

---

## Navigation (Main)
**Element**: `<nav aria-label="Main">` + `<ul>` + `<a>`

### Current Page
```tsx
<a href="/dashboard" aria-current="page">Dashboard</a>
```

### Mobile (Hamburger)
```tsx
<button aria-expanded="false" aria-controls="nav-menu" aria-label="Menu">
  <span className="hamburger" aria-hidden="true" />
</button>
<nav id="nav-menu" hidden>...</nav>
```

---

## Form (Complete)
### Pattern
```tsx
<form onSubmit={handleSubmit} noValidate>
  <fieldset>
    <legend>Account</legend>
    <div className="field">
      <label htmlFor="email">Email</label>
      <input id="email" type="email" required aria-describedby="email-hint" />
      <span id="email-hint">We'll never share your email</span>
    </div>
    <div className="field">
      <label htmlFor="password">Password</label>
      <input id="password" type="password" required />
    </div>
  </fieldset>
  <button type="submit">Create Account</button>
</form>
```

### Validation
- `noValidate` on form (custom handling)
- `aria-invalid` + `aria-describedby` on error
- `role="alert"` or `aria-live="assertive"` for error summary
- Focus first error on submit

---

## Loading States
### Skeleton
```tsx
<div className="ds-skeleton" aria-busy="true" aria-label="Loading content">
  <div className="ds-skeleton-line" />
  <div className="ds-skeleton-line short" />
</div>
```

### Spinner
```tsx
<div className="ds-spinner" role="status" aria-label="Loading">
  <span className="visually-hidden">Loading...</span>
</div>
```

---

## Empty State
```tsx
<div className="ds-empty">
  <svg aria-hidden="true">...</svg>
  <h3>No results</h3>
  <p>Try adjusting your filters</p>
  <button onClick={clearFilters}>Clear filters</button>
</div>
```

---

## Error State (Inline)
```tsx
<div className="ds-field-error" role="alert" id="email-error">
  <svg aria-hidden="true">...</svg>
  <span>Enter a valid email address</span>
</div>
```

---

## All Components: Required States Checklist
- [ ] Default
- [ ] Hover
- [ ] Focus (visible ring)
- [ ] Active/Pressed
- [ ] Disabled
- [ ] Loading (if async)
- [ ] Empty (if data-driven)
- [ ] Error (if validation/submission)

Mark missing with `// designsense: missing empty state — async list`