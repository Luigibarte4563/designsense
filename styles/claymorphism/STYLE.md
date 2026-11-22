# Claymorphism Style Preset

## Signature Traits
Puffy 3D rounded shapes with soft inner and outer shadows

## Do
- Use very large border radius (20px+ for small, 48px+ for large)
- Dual shadows with soft, diffused edges
- Inner shadows for depth on larger surfaces
- Puffy, inflated appearance
- Pastel or muted color palette

## Don't
- Don't use sharp corners or small radius
- Don't use high contrast or saturated colors
- Don't use hard-edged shadows
- Don't mix with flat design elements

## Accessibility Watch-outs
- **Very low contrast — add visible borders on all interactive elements**: 
- **Focus ring**: 4px solid with 4px offset (required)
- **Consider alternative for text-heavy interfaces**: 
- **Large radius reduces touch target precision — increase padding**: 

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "0px",
    "color": "transparent"
  },
  "shadow": {
    "default": "12px 12px 24px #C5CAD8, -12px -12px 24px #FFFFFF",
    "hover": "16px 16px 32px #C5CAD8, -16px -16px 32px #FFFFFF",
    "active": "inset 6px 6px 12px #C5CAD8, inset -6px -6px 12px #FFFFFF",
    "inner": "inset 8px 8px 16px #C5CAD8, inset -8px -8px 16px #FFFFFF",
    "float": "20px 20px 40px #C5CAD8, -20px -20px 40px #FFFFFF"
  },
  "radius": {
    "sm": "20px",
    "md": "32px",
    "lg": "48px",
    "xl": "64px",
    "pill": "9999px"
  },
  "color": {
    "bg": "#E0E5EC",
    "surface": "#E0E5EC",
    "primary": "#7C8DB5",
    "secondary": "#A3B1C6",
    "accent": "#FF8A8A",
    "ink": "#2D3748",
    "muted": "#8A9BB8",
    "border": "transparent",
    "focus": "#4299E1",
    "error": "#E53E3E",
    "success": "#38A169",
    "white": "#FFFFFF",
    "shadowDark": "#C5CAD8",
    "shadowLight": "#FFFFFF"
  },
  "font": {
    "heading": "\"Nunito\", \"Quicksand\", sans-serif",
    "body": "\"Nunito\", \"Quicksand\", sans-serif",
    "mono": "\"Fira Code\", monospace",
    "weight": {
      "normal": 500,
      "medium": 600,
      "bold": 800
    }
  },
  "motion": {
    "duration": "300ms",
    "easing": "cubic-bezier(0.34, 1.56, 0.64, 1)"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 0px;
  --ds-border-color: transparent;
  --ds-shadow-default: 12px 12px 24px #C5CAD8, -12px -12px 24px #FFFFFF;
  --ds-shadow-hover: 16px 16px 32px #C5CAD8, -16px -16px 32px #FFFFFF;
  --ds-shadow-active: inset 6px 6px 12px #C5CAD8, inset -6px -6px 12px #FFFFFF;
  --ds-shadow-inner: inset 8px 8px 16px #C5CAD8, inset -8px -8px 16px #FFFFFF;
  --ds-shadow-float: 20px 20px 40px #C5CAD8, -20px -20px 40px #FFFFFF;
  --ds-radius-sm: 20px;
  --ds-radius-md: 32px;
  --ds-radius-lg: 48px;
  --ds-radius-xl: 64px;
  --ds-radius-pill: 9999px;
  --ds-color-bg: #E0E5EC;
  --ds-color-surface: #E0E5EC;
  --ds-color-primary: #7C8DB5;
  --ds-color-secondary: #A3B1C6;
  --ds-color-accent: #FF8A8A;
  --ds-color-ink: #2D3748;
  --ds-color-muted: #8A9BB8;
  --ds-color-border: transparent;
  --ds-color-focus: #4299E1;
  --ds-color-error: #E53E3E;
  --ds-color-success: #38A169;
  --ds-color-white: #FFFFFF;
  --ds-color-shadowDark: #C5CAD8;
  --ds-color-shadowLight: #FFFFFF;
  --ds-font-heading: "Nunito", "Quicksand", sans-serif;
  --ds-font-body: "Nunito", "Quicksand", sans-serif;
  --ds-font-mono: "Fira Code", monospace;
  --ds-font-weight-normal: 500;
  --ds-font-weight-medium: 600;
  --ds-font-weight-bold: 800;
  --ds-motion-duration: 300ms;
  --ds-motion-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#E0E5EC",
            "surface": "#E0E5EC",
            "primary": "#7C8DB5",
            "secondary": "#A3B1C6",
            "accent": "#FF8A8A",
            "ink": "#2D3748",
            "muted": "#8A9BB8",
            "border": "transparent",
            "focus": "#4299E1",
            "error": "#E53E3E",
            "success": "#38A169",
            "white": "#FFFFFF",
            "shadowDark": "#C5CAD8",
            "shadowLight": "#FFFFFF"
      } },
      borderWidth: {
            "ds": "0px"
      },
      boxShadow: {
            "ds-default": "12px 12px 24px #C5CAD8, -12px -12px 24px #FFFFFF",
            "ds-hover": "16px 16px 32px #C5CAD8, -16px -16px 32px #FFFFFF",
            "ds-active": "inset 6px 6px 12px #C5CAD8, inset -6px -6px 12px #FFFFFF",
            "ds-inner": "inset 8px 8px 16px #C5CAD8, inset -8px -8px 16px #FFFFFF",
            "ds-float": "20px 20px 40px #C5CAD8, -20px -20px 40px #FFFFFF"
      },
      borderRadius: {
            "ds-sm": "20px",
            "ds-md": "32px",
            "ds-lg": "48px",
            "ds-xl": "64px",
            "ds-pill": "9999px"
      },
      fontFamily: {
            "heading": [
                  "\"Nunito\", \"Quicksand\", sans-serif"
            ],
            "body": [
                  "\"Nunito\", \"Quicksand\", sans-serif"
            ],
            "mono": [
                  "\"Fira Code\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 500,
            "ds-medium": 600,
            "ds-bold": 800
      },
      transitionDuration: {
            "ds": "300ms"
      },
      transitionTimingFunction: {
            "ds": "cubic-bezier(0.34, 1.56, 0.64, 1)"
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
  font-weight: var(--ds-font-weight-bold, 800);
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
