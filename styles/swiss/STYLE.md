# Swiss / International Style Style Preset

## Signature Traits
Strict grid, big type, limited palette, asymmetric layouts

## Do
- Strict modular grid (12 columns)
- Asymmetric layouts with strong visual hierarchy
- Large, bold typography as primary visual element
- Limited palette: black, white, one accent color
- Left-aligned, flush-left ragged-right text
- Generous whitespace as active design element

## Don't
- Don't use centered layouts
- Don't use decorative elements
- Don't use more than 2 font weights
- Don't use rounded corners
- Don't use shadows or gradients

## Accessibility Watch-outs
- **Maximum contrast by design**: 
- **Focus**: browser default or 2px solid red
- **Grid structure aids navigation**: 
- **Large type aids readability**: 

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "1px",
    "color": "#000000"
  },
  "shadow": {
    "default": "none",
    "hover": "none"
  },
  "radius": {
    "sm": "0px",
    "md": "0px",
    "lg": "0px"
  },
  "color": {
    "bg": "#FFFFFF",
    "surface": "#FFFFFF",
    "primary": "#000000",
    "secondary": "#FF0000",
    "accent": "#0000FF",
    "ink": "#000000",
    "muted": "#666666",
    "border": "#000000",
    "focus": "#FF0000",
    "error": "#FF0000",
    "success": "#008000",
    "white": "#FFFFFF"
  },
  "font": {
    "heading": "\"Helvetica Neue\", \"Univers\", \"Arial\", sans-serif",
    "body": "\"Helvetica Neue\", \"Univers\", \"Arial\", sans-serif",
    "mono": "\"Helvetica Neue\", monospace",
    "weight": {
      "normal": 400,
      "medium": 500,
      "bold": 700,
      "black": 900
    }
  },
  "motion": {
    "duration": "0ms",
    "easing": "linear"
  },
  "grid": {
    "columns": 12,
    "gutter": "24px",
    "baseline": "8px"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 1px;
  --ds-border-color: #000000;
  --ds-shadow-default: none;
  --ds-shadow-hover: none;
  --ds-radius-sm: 0px;
  --ds-radius-md: 0px;
  --ds-radius-lg: 0px;
  --ds-color-bg: #FFFFFF;
  --ds-color-surface: #FFFFFF;
  --ds-color-primary: #000000;
  --ds-color-secondary: #FF0000;
  --ds-color-accent: #0000FF;
  --ds-color-ink: #000000;
  --ds-color-muted: #666666;
  --ds-color-border: #000000;
  --ds-color-focus: #FF0000;
  --ds-color-error: #FF0000;
  --ds-color-success: #008000;
  --ds-color-white: #FFFFFF;
  --ds-font-heading: "Helvetica Neue", "Univers", "Arial", sans-serif;
  --ds-font-body: "Helvetica Neue", "Univers", "Arial", sans-serif;
  --ds-font-mono: "Helvetica Neue", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-medium: 500;
  --ds-font-weight-bold: 700;
  --ds-font-weight-black: 900;
  --ds-motion-duration: 0ms;
  --ds-motion-easing: linear;
  --ds-grid-columns: 12;
  --ds-grid-gutter: 24px;
  --ds-grid-baseline: 8px;
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FFFFFF",
            "surface": "#FFFFFF",
            "primary": "#000000",
            "secondary": "#FF0000",
            "accent": "#0000FF",
            "ink": "#000000",
            "muted": "#666666",
            "border": "#000000",
            "focus": "#FF0000",
            "error": "#FF0000",
            "success": "#008000",
            "white": "#FFFFFF"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "none",
            "ds-hover": "none"
      },
      borderRadius: {
            "ds-sm": "0px",
            "ds-md": "0px",
            "ds-lg": "0px"
      },
      fontFamily: {
            "heading": [
                  "\"Helvetica Neue\", \"Univers\", \"Arial\", sans-serif"
            ],
            "body": [
                  "\"Helvetica Neue\", \"Univers\", \"Arial\", sans-serif"
            ],
            "mono": [
                  "\"Helvetica Neue\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-medium": 500,
            "ds-bold": 700,
            "ds-black": 900
      },
      transitionDuration: {
            "ds": "0ms"
      },
      transitionTimingFunction: {
            "ds": "linear"
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
