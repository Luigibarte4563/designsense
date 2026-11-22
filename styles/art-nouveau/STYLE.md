# Art Nouveau Style Preset

## Signature Traits
Organic curves, floral ornament, flowing lines

## Do
- Flowing, organic curves (whiplash lines)
- Floral and vine motifs
- Asymmetric but balanced compositions
- Earthy, natural color palette
- Elegant serif typography
- Ornamental borders and frames

## Don't
- Don't use geometric/sharp angles
- Don't use bright synthetic colors
- Don't use rigid grids
- Don't skip the organic ornamentation

## Accessibility Watch-outs
- **Earth tones**: ensure 4.5:1 contrast
- **Focus**: 3px solid accent brown with offset
- **Ornamental elements**: decorative only (aria-hidden)
- **Curved text paths**: avoid for body text

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "1px",
    "color": "#8B7355"
  },
  "shadow": {
    "default": "2px 2px 8px rgba(0,0,0,0.2)",
    "hover": "4px 4px 16px rgba(0,0,0,0.3)"
  },
  "radius": {
    "sm": "8px",
    "md": "16px",
    "lg": "32px",
    "organic": "60% 40% 30% 70% / 60% 30% 70% 40%"
  },
  "color": {
    "bg": "#FDF6E3",
    "surface": "#FFF8F0",
    "primary": "#8B7355",
    "secondary": "#556B2F",
    "accent": "#CD853F",
    "ink": "#3D2B1F",
    "muted": "#A09078",
    "border": "#D4C4A8",
    "focus": "#8B7355",
    "error": "#B22222",
    "success": "#556B2F",
    "white": "#FFFFFF",
    "floral": "#D4A574",
    "vine": "#556B2F",
    "cream": "#FDF6E3"
  },
  "font": {
    "heading": "\"Trajan Pro\", \"Optima\", serif",
    "body": "\"Palatino\", \"Georgia\", serif",
    "mono": "\"Courier New\", monospace",
    "weight": {
      "normal": 400,
      "bold": 600
    }
  },
  "motion": {
    "duration": "500ms",
    "easing": "ease-in-out"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 1px;
  --ds-border-color: #8B7355;
  --ds-shadow-default: 2px 2px 8px rgba(0,0,0,0.2);
  --ds-shadow-hover: 4px 4px 16px rgba(0,0,0,0.3);
  --ds-radius-sm: 8px;
  --ds-radius-md: 16px;
  --ds-radius-lg: 32px;
  --ds-radius-organic: 60% 40% 30% 70% / 60% 30% 70% 40%;
  --ds-color-bg: #FDF6E3;
  --ds-color-surface: #FFF8F0;
  --ds-color-primary: #8B7355;
  --ds-color-secondary: #556B2F;
  --ds-color-accent: #CD853F;
  --ds-color-ink: #3D2B1F;
  --ds-color-muted: #A09078;
  --ds-color-border: #D4C4A8;
  --ds-color-focus: #8B7355;
  --ds-color-error: #B22222;
  --ds-color-success: #556B2F;
  --ds-color-white: #FFFFFF;
  --ds-color-floral: #D4A574;
  --ds-color-vine: #556B2F;
  --ds-color-cream: #FDF6E3;
  --ds-font-heading: "Trajan Pro", "Optima", serif;
  --ds-font-body: "Palatino", "Georgia", serif;
  --ds-font-mono: "Courier New", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-bold: 600;
  --ds-motion-duration: 500ms;
  --ds-motion-easing: ease-in-out;
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FDF6E3",
            "surface": "#FFF8F0",
            "primary": "#8B7355",
            "secondary": "#556B2F",
            "accent": "#CD853F",
            "ink": "#3D2B1F",
            "muted": "#A09078",
            "border": "#D4C4A8",
            "focus": "#8B7355",
            "error": "#B22222",
            "success": "#556B2F",
            "white": "#FFFFFF",
            "floral": "#D4A574",
            "vine": "#556B2F",
            "cream": "#FDF6E3"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "2px 2px 8px rgba(0,0,0,0.2)",
            "ds-hover": "4px 4px 16px rgba(0,0,0,0.3)"
      },
      borderRadius: {
            "ds-sm": "8px",
            "ds-md": "16px",
            "ds-lg": "32px",
            "ds-organic": "60% 40% 30% 70% / 60% 30% 70% 40%"
      },
      fontFamily: {
            "heading": [
                  "\"Trajan Pro\", \"Optima\", serif"
            ],
            "body": [
                  "\"Palatino\", \"Georgia\", serif"
            ],
            "mono": [
                  "\"Courier New\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-bold": 600
      },
      transitionDuration: {
            "ds": "500ms"
      },
      transitionTimingFunction: {
            "ds": "ease-in-out"
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
  font-weight: var(--ds-font-weight-bold, 600);
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
