# Art Deco Style Preset

## Signature Traits
Gold accents, geometric symmetry, elegant lines

## Do
- Gold/metallic accents on dark backgrounds
- Geometric patterns (sunbursts, chevrons, zigzags)
- Symmetrical layouts
- Elegant serif headings (Cinzel/Trajan)
- High contrast: gold on navy/black
- Stepped/graduated forms

## Don't
- Don't use bright primary colors
- Don't use asymmetry
- Don't use rounded/organic shapes
- Don't skip the gold accent

## Accessibility Watch-outs
- **Gold on navy**: test contrast (may need lighter gold)
- **Focus**: 3px solid gold with offset
- **Dark mode default — ensure light text**: 
- **Geometric patterns**: low opacity behind text

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "2px",
    "color": "#D4AF37"
  },
  "shadow": {
    "default": "4px 4px 0 #1A1A2E",
    "hover": "6px 6px 0 #D4AF37"
  },
  "radius": {
    "sm": "0px",
    "md": "4px",
    "lg": "8px",
    "fan": "50% 50% 0 0"
  },
  "color": {
    "bg": "#1A1A2E",
    "surface": "#16213E",
    "primary": "#D4AF37",
    "secondary": "#000000",
    "accent": "#FFFFFF",
    "ink": "#F5F0E8",
    "muted": "#8B8B8B",
    "border": "#D4AF37",
    "focus": "#D4AF37",
    "error": "#C0392B",
    "success": "#27AE60",
    "white": "#FFFFFF",
    "gold": "#D4AF37",
    "goldLight": "#F4E4A8",
    "goldDark": "#B8962E",
    "black": "#000000",
    "navy": "#1A1A2E"
  },
  "font": {
    "heading": "\"Cinzel\", \"Trajan Pro\", serif",
    "body": "\"Montserrat\", \"Futura\", sans-serif",
    "mono": "\"Courier New\", monospace",
    "weight": {
      "normal": 400,
      "bold": 700
    }
  },
  "motion": {
    "duration": "400ms",
    "easing": "ease-in-out"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 2px;
  --ds-border-color: #D4AF37;
  --ds-shadow-default: 4px 4px 0 #1A1A2E;
  --ds-shadow-hover: 6px 6px 0 #D4AF37;
  --ds-radius-sm: 0px;
  --ds-radius-md: 4px;
  --ds-radius-lg: 8px;
  --ds-radius-fan: 50% 50% 0 0;
  --ds-color-bg: #1A1A2E;
  --ds-color-surface: #16213E;
  --ds-color-primary: #D4AF37;
  --ds-color-secondary: #000000;
  --ds-color-accent: #FFFFFF;
  --ds-color-ink: #F5F0E8;
  --ds-color-muted: #8B8B8B;
  --ds-color-border: #D4AF37;
  --ds-color-focus: #D4AF37;
  --ds-color-error: #C0392B;
  --ds-color-success: #27AE60;
  --ds-color-white: #FFFFFF;
  --ds-color-gold: #D4AF37;
  --ds-color-goldLight: #F4E4A8;
  --ds-color-goldDark: #B8962E;
  --ds-color-black: #000000;
  --ds-color-navy: #1A1A2E;
  --ds-font-heading: "Cinzel", "Trajan Pro", serif;
  --ds-font-body: "Montserrat", "Futura", sans-serif;
  --ds-font-mono: "Courier New", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-bold: 700;
  --ds-motion-duration: 400ms;
  --ds-motion-easing: ease-in-out;
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#1A1A2E",
            "surface": "#16213E",
            "primary": "#D4AF37",
            "secondary": "#000000",
            "accent": "#FFFFFF",
            "ink": "#F5F0E8",
            "muted": "#8B8B8B",
            "border": "#D4AF37",
            "focus": "#D4AF37",
            "error": "#C0392B",
            "success": "#27AE60",
            "white": "#FFFFFF",
            "gold": "#D4AF37",
            "goldLight": "#F4E4A8",
            "goldDark": "#B8962E",
            "black": "#000000",
            "navy": "#1A1A2E"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-default": "4px 4px 0 #1A1A2E",
            "ds-hover": "6px 6px 0 #D4AF37"
      },
      borderRadius: {
            "ds-sm": "0px",
            "ds-md": "4px",
            "ds-lg": "8px",
            "ds-fan": "50% 50% 0 0"
      },
      fontFamily: {
            "heading": [
                  "\"Cinzel\", \"Trajan Pro\", serif"
            ],
            "body": [
                  "\"Montserrat\", \"Futura\", sans-serif"
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
            "ds": "400ms"
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
