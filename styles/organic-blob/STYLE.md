# Organic / Blob Shapes Style Preset

## Signature Traits
Fluid, asymmetric curves, morphing shapes

## Do
- Asymmetric, organic border-radius values
- Morphing/animated blob shapes
- Warm, friendly color palette
- Soft shadows for depth
- Generous, rounded everything
- Fluid, springy animations

## Don't
- Don't use symmetric radius
- Don't use sharp corners
- Don't use cold colors
- Don't use stiff animations

## Accessibility Watch-outs
- **Irregular shapes**: ensure 44px touch targets
- **Focus**: 3px solid with offset
- **Morphing animations**: respect reduced motion
- **Blob shapes don't clip content**: 

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "0px",
    "color": "transparent"
  },
  "shadow": {
    "default": "0 8px 32px rgba(0,0,0,0.1)",
    "hover": "0 12px 40px rgba(0,0,0,0.15)"
  },
  "radius": {
    "sm": "24px 20px 28px 22px / 20px 24px 22px 28px",
    "md": "32px 28px 36px 30px / 28px 32px 30px 36px",
    "lg": "48px 40px 52px 44px / 40px 48px 44px 52px",
    "blob": "60% 40% 30% 70% / 60% 30% 70% 40%",
    "morph1": "55% 45% 35% 65% / 55% 35% 65% 45%",
    "morph2": "65% 35% 25% 75% / 65% 25% 75% 35%"
  },
  "color": {
    "bg": "#FEF7F0",
    "surface": "#FFFFFF",
    "primary": "#FF8C42",
    "secondary": "#6BCB77",
    "accent": "#4ECDC4",
    "ink": "#2D2D2D",
    "muted": "#95A5A6",
    "border": "transparent",
    "focus": "#FF8C42",
    "error": "#E74C3C",
    "success": "#2ECC71",
    "white": "#FFFFFF",
    "blob1": "#FFE66D",
    "blob2": "#95E1D3",
    "blob3": "#F38BA8",
    "blob4": "#A8E6CF"
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
    "duration": "500ms",
    "easing": "cubic-bezier(0.34, 1.56, 0.64, 1)"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 0px;
  --ds-border-color: transparent;
  --ds-shadow-default: 0 8px 32px rgba(0,0,0,0.1);
  --ds-shadow-hover: 0 12px 40px rgba(0,0,0,0.15);
  --ds-radius-sm: 24px 20px 28px 22px / 20px 24px 22px 28px;
  --ds-radius-md: 32px 28px 36px 30px / 28px 32px 30px 36px;
  --ds-radius-lg: 48px 40px 52px 44px / 40px 48px 44px 52px;
  --ds-radius-blob: 60% 40% 30% 70% / 60% 30% 70% 40%;
  --ds-radius-morph1: 55% 45% 35% 65% / 55% 35% 65% 45%;
  --ds-radius-morph2: 65% 35% 25% 75% / 65% 25% 75% 35%;
  --ds-color-bg: #FEF7F0;
  --ds-color-surface: #FFFFFF;
  --ds-color-primary: #FF8C42;
  --ds-color-secondary: #6BCB77;
  --ds-color-accent: #4ECDC4;
  --ds-color-ink: #2D2D2D;
  --ds-color-muted: #95A5A6;
  --ds-color-border: transparent;
  --ds-color-focus: #FF8C42;
  --ds-color-error: #E74C3C;
  --ds-color-success: #2ECC71;
  --ds-color-white: #FFFFFF;
  --ds-color-blob1: #FFE66D;
  --ds-color-blob2: #95E1D3;
  --ds-color-blob3: #F38BA8;
  --ds-color-blob4: #A8E6CF;
  --ds-font-heading: "Nunito", "Quicksand", sans-serif;
  --ds-font-body: "Nunito", "Quicksand", sans-serif;
  --ds-font-mono: "Fira Code", monospace;
  --ds-font-weight-normal: 500;
  --ds-font-weight-medium: 600;
  --ds-font-weight-bold: 800;
  --ds-motion-duration: 500ms;
  --ds-motion-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FEF7F0",
            "surface": "#FFFFFF",
            "primary": "#FF8C42",
            "secondary": "#6BCB77",
            "accent": "#4ECDC4",
            "ink": "#2D2D2D",
            "muted": "#95A5A6",
            "border": "transparent",
            "focus": "#FF8C42",
            "error": "#E74C3C",
            "success": "#2ECC71",
            "white": "#FFFFFF",
            "blob1": "#FFE66D",
            "blob2": "#95E1D3",
            "blob3": "#F38BA8",
            "blob4": "#A8E6CF"
      } },
      borderWidth: {
            "ds": "0px"
      },
      boxShadow: {
            "ds-default": "0 8px 32px rgba(0,0,0,0.1)",
            "ds-hover": "0 12px 40px rgba(0,0,0,0.15)"
      },
      borderRadius: {
            "ds-sm": "24px 20px 28px 22px / 20px 24px 22px 28px",
            "ds-md": "32px 28px 36px 30px / 28px 32px 30px 36px",
            "ds-lg": "48px 40px 52px 44px / 40px 48px 44px 52px",
            "ds-blob": "60% 40% 30% 70% / 60% 30% 70% 40%",
            "ds-morph1": "55% 45% 35% 65% / 55% 35% 65% 45%",
            "ds-morph2": "65% 35% 25% 75% / 65% 25% 75% 35%"
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
            "ds": "500ms"
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
