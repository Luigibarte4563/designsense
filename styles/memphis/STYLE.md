# Memphis Design Style Preset

## Signature Traits
80s geometric shapes, squiggles, bright color clashes

## Do
- Use geometric shapes: circles, triangles, squiggles
- Bright pastel palette with black outlines
- Asymmetric, playful layouts
- Pattern backgrounds (dots, stripes, zigzags)
- Bouncy, springy animations

## Don't
- Don't use muted or sophisticated colors
- Don't align to strict grids
- Don't use corporate/safe aesthetics
- Don't skip the black outlines

## Accessibility Watch-outs
- **Black outlines help contrast**: 
- **Focus ring**: 3px solid black with offset
- **Patterns can impair reading — solid text backgrounds**: 
- **Animations respect prefers-reduced-motion**: 

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "3px",
    "color": "#000000"
  },
  "shadow": {
    "default": "6px 6px 0 #FF6B6B",
    "hover": "8px 8px 0 #4ECDC4"
  },
  "radius": {
    "sm": "0px",
    "md": "8px",
    "lg": "16px",
    "xl": "50% 50% 0 0",
    "blob": "60% 40% 30% 70% / 60% 30% 70% 40%"
  },
  "color": {
    "bg": "#FFFFFF",
    "surface": "#FFF5E6",
    "primary": "#FF6B6B",
    "secondary": "#4ECDC4",
    "accent": "#FFE66D",
    "ink": "#2D2D2D",
    "muted": "#95A5A6",
    "border": "#000000",
    "focus": "#FF6B6B",
    "error": "#E74C3C",
    "success": "#2ECC71",
    "white": "#FFFFFF",
    "shape1": "#FF6B6B",
    "shape2": "#4ECDC4",
    "shape3": "#FFE66D",
    "shape4": "#95E1D3",
    "shape5": "#F38BA8",
    "shape6": "#A8E6CF"
  },
  "font": {
    "heading": "\"Permanent Marker\", \"Fredoka One\", cursive",
    "body": "\"Nunito\", sans-serif",
    "mono": "\"Courier New\", monospace",
    "weight": {
      "normal": 400,
      "bold": 700
    }
  },
  "motion": {
    "duration": "300ms",
    "easing": "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 3px;
  --ds-border-color: #000000;
  --ds-shadow-default: 6px 6px 0 #FF6B6B;
  --ds-shadow-hover: 8px 8px 0 #4ECDC4;
  --ds-radius-sm: 0px;
  --ds-radius-md: 8px;
  --ds-radius-lg: 16px;
  --ds-radius-xl: 50% 50% 0 0;
  --ds-radius-blob: 60% 40% 30% 70% / 60% 30% 70% 40%;
  --ds-color-bg: #FFFFFF;
  --ds-color-surface: #FFF5E6;
  --ds-color-primary: #FF6B6B;
  --ds-color-secondary: #4ECDC4;
  --ds-color-accent: #FFE66D;
  --ds-color-ink: #2D2D2D;
  --ds-color-muted: #95A5A6;
  --ds-color-border: #000000;
  --ds-color-focus: #FF6B6B;
  --ds-color-error: #E74C3C;
  --ds-color-success: #2ECC71;
  --ds-color-white: #FFFFFF;
  --ds-color-shape1: #FF6B6B;
  --ds-color-shape2: #4ECDC4;
  --ds-color-shape3: #FFE66D;
  --ds-color-shape4: #95E1D3;
  --ds-color-shape5: #F38BA8;
  --ds-color-shape6: #A8E6CF;
  --ds-font-heading: "Permanent Marker", "Fredoka One", cursive;
  --ds-font-body: "Nunito", sans-serif;
  --ds-font-mono: "Courier New", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-bold: 700;
  --ds-motion-duration: 300ms;
  --ds-motion-easing: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FFFFFF",
            "surface": "#FFF5E6",
            "primary": "#FF6B6B",
            "secondary": "#4ECDC4",
            "accent": "#FFE66D",
            "ink": "#2D2D2D",
            "muted": "#95A5A6",
            "border": "#000000",
            "focus": "#FF6B6B",
            "error": "#E74C3C",
            "success": "#2ECC71",
            "white": "#FFFFFF",
            "shape1": "#FF6B6B",
            "shape2": "#4ECDC4",
            "shape3": "#FFE66D",
            "shape4": "#95E1D3",
            "shape5": "#F38BA8",
            "shape6": "#A8E6CF"
      } },
      borderWidth: {
            "ds": "3px"
      },
      boxShadow: {
            "ds-default": "6px 6px 0 #FF6B6B",
            "ds-hover": "8px 8px 0 #4ECDC4"
      },
      borderRadius: {
            "ds-sm": "0px",
            "ds-md": "8px",
            "ds-lg": "16px",
            "ds-xl": "50% 50% 0 0",
            "ds-blob": "60% 40% 30% 70% / 60% 30% 70% 40%"
      },
      fontFamily: {
            "heading": [
                  "\"Permanent Marker\", \"Fredoka One\", cursive"
            ],
            "body": [
                  "\"Nunito\", sans-serif"
            ],
            "mono": [
                  "\"Courier New\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-bold": 700
      },
      transitionDuration: {
            "ds": "300ms"
      },
      transitionTimingFunction: {
            "ds": "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
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
