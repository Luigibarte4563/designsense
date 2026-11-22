# [Style Name] Style Preset

## Signature Traits
- **Trait 1**: Description
- **Trait 2**: Description
- **Trait 3**: Description

## Do
- Use specific technique for X
- Follow pattern Y for Z

## Don't
- Avoid anti-pattern A
- Don't use technique B

## Accessibility Watch-outs
- **Risk**: Description of accessibility risk
- **Fix**: Built-in mitigation

## Token Reference (tokens.json)
```json
{
  "name": "[style-name]",
  "border": { "width": "1px", "color": "#000" },
  "shadow": { "default": "0 2px 4px rgba(0,0,0,0.1)" },
  "radius": { "sm": "4px", "md": "8px", "lg": "12px" },
  "color": {
    "bg": "#FFFFFF",
    "surface": "#FAFAFA",
    "primary": "#0066CC",
    "secondary": "#666666",
    "ink": "#1A1A1A",
    "muted": "#666666",
    "border": "#E5E5E5",
    "focus": "#0066CC",
    "error": "#CC3300",
    "success": "#00AA55"
  },
  "font": {
    "heading": "system-ui, sans-serif",
    "body": "system-ui, sans-serif",
    "mono": "monospace",
    "weight": { "normal": 400, "bold": 600 }
  },
  "motion": { "duration": "200ms", "easing": "ease-out" },
  "a11yNotes": [
    "Contrast note",
    "Focus ring note",
    "Touch target note"
  ]
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 1px;
  --ds-border-color: #000;
  --ds-shadow-default: 0 2px 4px rgba(0,0,0,0.1);
  --ds-radius-sm: 4px;
  --ds-radius-md: 8px;
  --ds-radius-lg: 12px;
  --ds-color-bg: #FFFFFF;
  --ds-color-surface: #FAFAFA;
  --ds-color-primary: #0066CC;
  --ds-color-secondary: #666666;
  --ds-color-ink: #1A1A1A;
  --ds-color-muted: #666666;
  --ds-color-border: #E5E5E5;
  --ds-color-focus: #0066CC;
  --ds-color-error: #CC3300;
  --ds-color-success: #00AA55;
  --ds-font-heading: system-ui, sans-serif;
  --ds-font-body: system-ui, sans-serif;
  --ds-font-mono: monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-bold: 600;
  --ds-motion-duration: 200ms;
  --ds-motion-easing: ease-out;
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: '#FFFFFF',
          surface: '#FAFAFA',
          primary: '#0066CC',
          secondary: '#666666',
          ink: '#1A1A1A',
          muted: '#666666',
          border: '#E5E5E5',
          focus: '#0066CC',
          error: '#CC3300',
          success: '#00AA55',
        }
      },
      borderWidth: { 'ds': '1px' },
      boxShadow: { 'ds': '0 2px 4px rgba(0,0,0,0.1)' },
      borderRadius: { 'ds-sm': '4px', 'ds-md': '8px', 'ds-lg': '12px' },
      fontFamily: {
        heading: ['system-ui', 'sans-serif'],
        body: ['system-ui', 'sans-serif'],
        mono: ['monospace'],
      },
      fontWeight: { 'ds-normal': 400, 'ds-bold': 600 },
      transitionDuration: { 'ds': '200ms' },
      transitionTimingFunction: { 'ds': 'ease-out' },
    }
  }
}
```

## Example Component Patterns

### Button
```html
<button class="ds-btn ds-btn-primary">Primary</button>
<button class="ds-btn ds-btn-secondary">Secondary</button>
<button class="ds-btn ds-btn-primary" disabled>Disabled</button>
<button class="ds-btn ds-btn-primary" aria-busy="true">Loading</button>
```

```css
.ds-btn {
  border: var(--ds-border-width) solid var(--ds-border-color);
  box-shadow: var(--ds-shadow-default);
  border-radius: var(--ds-radius-md);
  font-family: var(--ds-font-heading);
  font-weight: var(--ds-font-weight-bold);
  padding: 0.75rem 1.5rem;
  transition: all var(--ds-motion-duration) var(--ds-motion-easing);
}
.ds-btn:hover { box-shadow: var(--ds-shadow-hover); transform: translateY(-1px); }
.ds-btn:focus-visible { outline: 2px solid var(--ds-color-focus); outline-offset: 2px; }
.ds-btn:active { transform: translateY(0); }
.ds-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
.ds-btn[aria-busy="true"] { position: relative; color: transparent; }
.ds-btn[aria-busy="true"]::after {
  content: ''; position: absolute; width: 1em; height: 1em;
  border: 2px solid currentColor; border-right-color: transparent;
  border-radius: 50%; animation: spin 0.6s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) {
  .ds-btn[aria-busy="true"]::after { animation: none; border-color: currentColor; }
}

.ds-btn-primary { background: var(--ds-color-primary); color: white; }
.ds-btn-secondary { background: var(--ds-color-surface); color: var(--ds-color-ink); }
```

### Card
```html
<div class="ds-card">
  <h3>Card Title</h3>
  <p>Content</p>
  <button class="ds-btn ds-btn-primary">Action</button>
</div>
```

```css
.ds-card {
  background: var(--ds-color-surface);
  border: var(--ds-border-width) solid var(--ds-border-color);
  box-shadow: var(--ds-shadow-default);
  border-radius: var(--ds-radius-md);
  padding: 1.5rem;
}
```

### Input
```html
<label for="email">Email</label>
<input type="email" id="email" class="ds-input" placeholder="Enter email" required />
<div class="ds-error" id="email-error" role="alert" hidden>Invalid email</div>
```

```css
.ds-input {
  border: var(--ds-border-width) solid var(--ds-border-color);
  border-radius: var(--ds-radius-sm);
  padding: 0.625rem 0.875rem;
  font-family: var(--ds-font-body);
  font-size: 1rem;
  background: var(--ds-color-bg);
  color: var(--ds-color-ink);
  width: 100%;
  transition: border-color var(--ds-motion-duration), box-shadow var(--ds-motion-duration);
}
.ds-input:hover { border-color: var(--ds-color-muted); }
.ds-input:focus { outline: none; border-color: var(--ds-color-focus); box-shadow: 0 0 0 3px var(--ds-color-focus); }
.ds-input[aria-invalid="true"] { border-color: var(--ds-color-error); }
.ds-error { color: var(--ds-color-error); font-size: 0.875rem; margin-top: 0.25rem; }
```

### Modal
```html
<div class="ds-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <div class="ds-modal">
    <h2 id="modal-title">Title</h2>
    <p>Content</p>
    <button class="ds-btn ds-btn-secondary" data-close>Cancel</button>
    <button class="ds-btn ds-btn-primary" data-confirm>Confirm</button>
  </div>
</div>
```

```css
.ds-modal-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex; align-items: center; justify-content: center;
  padding: 1rem; z-index: 1000;
}
.ds-modal {
  background: var(--ds-color-surface);
  border: var(--ds-border-width) solid var(--ds-border-color);
  box-shadow: var(--ds-shadow-default);
  border-radius: var(--ds-radius-lg);
  padding: 2rem;
  max-width: 480px; width: 90%;
  max-height: 90vh; overflow: auto;
}
```

## Deviation Examples
```css
// designsense: Reason for deviation
.special-case { property: value; }
```