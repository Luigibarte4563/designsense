# Typographic Design Style Preset

## Signature Traits
Type as the main visual element — expressive typography

## Do
- Type is the hero — large, expressive, dominant
- Mix serif and sans-serif intentionally
- Extreme scale contrast (10rem vs 1rem)
- Minimal color — black, white, gray
- Whitespace as composition tool
- Typographic hierarchy over visual hierarchy

## Don't
- Don't use decorative graphics
- Don't use color for emphasis (use weight/scale)
- Don't use small type
- Don't crowd the composition

## Accessibility Watch-outs
- **Large type aids readability**: 
- **High contrast black on white**: 
- **Focus**: 2px solid black
- **Scale must be fluid (clamp) for zoom**: 

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "0px",
    "color": "transparent"
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
    "secondary": "#666666",
    "accent": "#000000",
    "ink": "#000000",
    "muted": "#999999",
    "border": "#E0E0E0",
    "focus": "#000000",
    "error": "#CC0000",
    "success": "#008000",
    "white": "#FFFFFF"
  },
  "font": {
    "heading": "\"Playfair Display\", \"Georgia\", serif",
    "body": "\"Source Serif Pro\", \"Georgia\", serif",
    "mono": "\"JetBrains Mono\", monospace",
    "weight": {
      "light": 300,
      "normal": 400,
      "medium": 500,
      "bold": 700
    },
    "scale": {
      "xs": "0.75rem",
      "sm": "1rem",
      "base": "1.25rem",
      "lg": "2rem",
      "xl": "3.5rem",
      "xxl": "6rem",
      "xxxl": "10rem"
    }
  },
  "motion": {
    "duration": "300ms",
    "easing": "ease-out"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 0px;
  --ds-border-color: transparent;
  --ds-shadow-default: none;
  --ds-shadow-hover: none;
  --ds-radius-sm: 0px;
  --ds-radius-md: 0px;
  --ds-radius-lg: 0px;
  --ds-color-bg: #FFFFFF;
  --ds-color-surface: #FFFFFF;
  --ds-color-primary: #000000;
  --ds-color-secondary: #666666;
  --ds-color-accent: #000000;
  --ds-color-ink: #000000;
  --ds-color-muted: #999999;
  --ds-color-border: #E0E0E0;
  --ds-color-focus: #000000;
  --ds-color-error: #CC0000;
  --ds-color-success: #008000;
  --ds-color-white: #FFFFFF;
  --ds-font-heading: "Playfair Display", "Georgia", serif;
  --ds-font-body: "Source Serif Pro", "Georgia", serif;
  --ds-font-mono: "JetBrains Mono", monospace;
  --ds-font-weight-light: 300;
  --ds-font-weight-normal: 400;
  --ds-font-weight-medium: 500;
  --ds-font-weight-bold: 700;
  --ds-font-scale-xs: 0.75rem;
  --ds-font-scale-sm: 1rem;
  --ds-font-scale-base: 1.25rem;
  --ds-font-scale-lg: 2rem;
  --ds-font-scale-xl: 3.5rem;
  --ds-font-scale-xxl: 6rem;
  --ds-font-scale-xxxl: 10rem;
  --ds-motion-duration: 300ms;
  --ds-motion-easing: ease-out;
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
            "secondary": "#666666",
            "accent": "#000000",
            "ink": "#000000",
            "muted": "#999999",
            "border": "#E0E0E0",
            "focus": "#000000",
            "error": "#CC0000",
            "success": "#008000",
            "white": "#FFFFFF"
      } },
      borderWidth: {
            "ds": "0px"
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
                  "\"Playfair Display\", \"Georgia\", serif"
            ],
            "body": [
                  "\"Source Serif Pro\", \"Georgia\", serif"
            ],
            "mono": [
                  "\"JetBrains Mono\", monospace"
            ]
      },
      fontWeight: {
            "ds-light": 300,
            "ds-normal": 400,
            "ds-medium": 500,
            "ds-bold": 700
      },
      transitionDuration: {
            "ds": "300ms"
      },
      transitionTimingFunction: {
            "ds": "ease-out"
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
