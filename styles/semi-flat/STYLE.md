# Semi-Flat / Flat 2.0 Style Preset

## Signature Traits
Flat design with subtle shadows for depth and hierarchy

## Do
- Use subtle shadows (1-2px blur) for elevation
- Layer surfaces with shadow depth (1-3 levels)
- Keep colors flat but allow shadow for hierarchy
- Use consistent border radius scale

## Don't
- No heavy shadows (>12px blur)
- No gradients or transparency
- No dramatic depth effects
- Don't overuse shadows — 2-3 levels max

## Accessibility Watch-outs
- **Shadows don't affect contrast — test text on flat backgrounds**: 
- **Focus ring visible on all surfaces**: 
- **Shadows disappear in high contrast mode**: 

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "1px",
    "color": "#E0E0E0"
  },
  "shadow": {
    "default": "0 1px 3px rgba(0,0,0,0.08)",
    "hover": "0 4px 12px rgba(0,0,0,0.12)",
    "active": "0 1px 3px rgba(0,0,0,0.08)"
  },
  "radius": {
    "sm": "4px",
    "md": "8px",
    "lg": "12px"
  },
  "color": {
    "bg": "#FAFAFA",
    "surface": "#FFFFFF",
    "primary": "#1976D2",
    "secondary": "#7B1FA2",
    "accent": "#E91E63",
    "ink": "#212121",
    "muted": "#757575",
    "border": "#E0E0E0",
    "focus": "#1976D2",
    "error": "#D32F2F",
    "success": "#388E3C",
    "white": "#FFFFFF"
  },
  "font": {
    "heading": "\"Roboto\", \"Helvetica Neue\", sans-serif",
    "body": "\"Roboto\", \"Helvetica Neue\", sans-serif",
    "mono": "\"Roboto Mono\", monospace",
    "weight": {
      "normal": 400,
      "medium": 500,
      "bold": 700
    }
  },
  "motion": {
    "duration": "200ms",
    "easing": "cubic-bezier(0.4, 0, 0.2, 1)"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 1px;
  --ds-border-color: #E0E0E0;
  --ds-shadow-default: 0 1px 3px rgba(0,0,0,0.08);
  --ds-shadow-hover: 0 4px 12px rgba(0,0,0,0.12);
  --ds-shadow-active: 0 1px 3px rgba(0,0,0,0.08);
  --ds-radius-sm: 4px;
  --ds-radius-md: 8px;
  --ds-radius-lg: 12px;
  --ds-color-bg: #FAFAFA;
  --ds-color-surface: #FFFFFF;
  --ds-color-primary: #1976D2;
  --ds-color-secondary: #7B1FA2;
  --ds-color-accent: #E91E63;
  --ds-color-ink: #212121;
  --ds-color-muted: #757575;
  --ds-color-border: #E0E0E0;
  --ds-color-focus: #1976D2;
  --ds-color-error: #D32F2F;
  --ds-color-success: #388E3C;
  --ds-color-white: #FFFFFF;
  --ds-font-heading: "Roboto", "Helvetica Neue", sans-serif;
  --ds-font-body: "Roboto", "Helvetica Neue", sans-serif;
  --ds-font-mono: "Roboto Mono", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-medium: 500;
  --ds-font-weight-bold: 700;
  --ds-motion-duration: 200ms;
  --ds-motion-easing: cubic-bezier(0.4, 0, 0.2, 1);
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FAFAFA",
            "surface": "#FFFFFF",
            "primary": "#1976D2",
            "secondary": "#7B1FA2",
            "accent": "#E91E63",
            "ink": "#212121",
            "muted": "#757575",
            "border": "#E0E0E0",
            "focus": "#1976D2",
            "error": "#D32F2F",
            "success": "#388E3C",
            "white": "#FFFFFF"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 1px 3px rgba(0,0,0,0.08)",
            "ds-hover": "0 4px 12px rgba(0,0,0,0.12)",
            "ds-active": "0 1px 3px rgba(0,0,0,0.08)"
      },
      borderRadius: {
            "ds-sm": "4px",
            "ds-md": "8px",
            "ds-lg": "12px"
      },
      fontFamily: {
            "heading": [
                  "\"Roboto\", \"Helvetica Neue\", sans-serif"
            ],
            "body": [
                  "\"Roboto\", \"Helvetica Neue\", sans-serif"
            ],
            "mono": [
                  "\"Roboto Mono\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-medium": 500,
            "ds-bold": 700
      },
      transitionDuration: {
            "ds": "200ms"
      },
      transitionTimingFunction: {
            "ds": "cubic-bezier(0.4, 0, 0.2, 1)"
      }
    }
  }
}
```

## Example Component Patterns

Copy these verbatim. They are the exact button/card/input output for this style.

### Button
```html
<button class="ds-btn ds-btn-primary">Primary Action</button>
<button class="ds-btn ds-btn-secondary">Secondary Action</button>
```
```css
.ds-btn {
  font-family: var(--ds-font-heading);
  font-weight: var(--ds-font-weight-bold, 700);
  border: var(--ds-border-width) solid var(--ds-border-color);
  border-radius: var(--ds-radius-md);
  background: var(--ds-color-primary);
  color: var(--ds-color-ink);
  box-shadow: var(--ds-shadow-default);
  padding: 0.75rem 1.5rem;
  min-height: 44px;
  cursor: pointer;
  transition: background var(--ds-motion-duration) var(--ds-motion-easing), box-shadow var(--ds-motion-duration) var(--ds-motion-easing);
}
.ds-btn:hover { background: var(--ds-color-secondary, var(--ds-color-primary)); box-shadow: var(--ds-shadow-hover, var(--ds-shadow-default)); }
.ds-btn:focus-visible { outline: 2px solid var(--ds-color-focus); outline-offset: 2px; }
.ds-btn:active { box-shadow: var(--ds-shadow-default); }
.ds-btn:disabled { opacity: 0.5; cursor: not-allowed; box-shadow: none; }
.ds-btn-secondary { background: var(--ds-color-secondary, var(--ds-color-primary)); color: var(--ds-color-ink); }
.ds-btn-secondary:hover { background: var(--ds-color-primary); }
```

### Card
```html
<div class="ds-card"><h3>Card Title</h3><p>Content goes here</p></div>
```
```css
.ds-card {
  background: var(--ds-color-surface);
  border: var(--ds-border-width) solid var(--ds-border-color);
  border-radius: var(--ds-radius-md);
  box-shadow: var(--ds-shadow-default);
  color: var(--ds-color-ink);
  font-family: var(--ds-font-body);
  padding: 1.5rem;
}
```

### Input
```html
<label for="ds-field">Field label</label>
<input id="ds-field" class="ds-input" type="text" />
```
```css
.ds-input {
  background: var(--ds-color-surface);
  border: var(--ds-border-width) solid var(--ds-border-color);
  border-radius: var(--ds-radius-md);
  color: var(--ds-color-ink);
  font-family: var(--ds-font-body);
  font-size: 1rem;
  min-height: 44px;
  padding: 0.75rem 1rem;
  width: 100%;
}
.ds-input:focus-visible { outline: 2px solid var(--ds-color-focus); outline-offset: 2px; }
.ds-input[aria-invalid="true"] { border-color: var(--ds-color-error); }
```
