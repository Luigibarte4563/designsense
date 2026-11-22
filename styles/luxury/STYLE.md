# Luxury / Premium Style Preset

## Signature Traits
Black and gold, serif type, generous spacing, refined

## Do
- Black background, gold accents
- Elegant serif typography (Didot/Bodoni)
- Generous whitespace and spacing
- Refined, restrained elegance
- High-quality imagery
- Subtle gold details only

## Don't
- Don't use bright colors
- Don't crowd the layout
- Don't use multiple accent colors
- Don't use playful/rounded elements

## Accessibility Watch-outs
- **Gold on black**: test contrast (may need lighter gold)
- **Focus**: 3px solid gold with 3px offset
- **Serif fonts**: minimum 18px
- **Dark mode default — ensure light text contrast**: 

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "1px",
    "color": "#D4AF37"
  },
  "shadow": {
    "default": "0 4px 20px rgba(0,0,0,0.3)",
    "hover": "0 8px 30px rgba(212,175,55,0.2)"
  },
  "radius": {
    "sm": "4px",
    "md": "8px",
    "lg": "12px"
  },
  "color": {
    "bg": "#0A0A0A",
    "surface": "#121212",
    "primary": "#D4AF37",
    "secondary": "#FFFFFF",
    "accent": "#FFFFFF",
    "ink": "#F5F0E8",
    "muted": "#888888",
    "border": "#333333",
    "focus": "#D4AF37",
    "error": "#C0392B",
    "success": "#27AE60",
    "white": "#FFFFFF",
    "gold": "#D4AF37",
    "goldLight": "#F4E4A8",
    "goldDark": "#B8962E",
    "black": "#000000",
    "charcoal": "#1A1A1A"
  },
  "font": {
    "heading": "\"Didot\", \"Bodoni\", \"Playfair Display\", serif",
    "body": "\"Cormorant Garamond\", \"Georgia\", serif",
    "mono": "\"Courier New\", monospace",
    "weight": {
      "light": 300,
      "normal": 400,
      "medium": 500,
      "bold": 600
    }
  },
  "motion": {
    "duration": "500ms",
    "easing": "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 1px;
  --ds-border-color: #D4AF37;
  --ds-shadow-default: 0 4px 20px rgba(0,0,0,0.3);
  --ds-shadow-hover: 0 8px 30px rgba(212,175,55,0.2);
  --ds-radius-sm: 4px;
  --ds-radius-md: 8px;
  --ds-radius-lg: 12px;
  --ds-color-bg: #0A0A0A;
  --ds-color-surface: #121212;
  --ds-color-primary: #D4AF37;
  --ds-color-secondary: #FFFFFF;
  --ds-color-accent: #FFFFFF;
  --ds-color-ink: #F5F0E8;
  --ds-color-muted: #888888;
  --ds-color-border: #333333;
  --ds-color-focus: #D4AF37;
  --ds-color-error: #C0392B;
  --ds-color-success: #27AE60;
  --ds-color-white: #FFFFFF;
  --ds-color-gold: #D4AF37;
  --ds-color-goldLight: #F4E4A8;
  --ds-color-goldDark: #B8962E;
  --ds-color-black: #000000;
  --ds-color-charcoal: #1A1A1A;
  --ds-font-heading: "Didot", "Bodoni", "Playfair Display", serif;
  --ds-font-body: "Cormorant Garamond", "Georgia", serif;
  --ds-font-mono: "Courier New", monospace;
  --ds-font-weight-light: 300;
  --ds-font-weight-normal: 400;
  --ds-font-weight-medium: 500;
  --ds-font-weight-bold: 600;
  --ds-motion-duration: 500ms;
  --ds-motion-easing: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#0A0A0A",
            "surface": "#121212",
            "primary": "#D4AF37",
            "secondary": "#FFFFFF",
            "accent": "#FFFFFF",
            "ink": "#F5F0E8",
            "muted": "#888888",
            "border": "#333333",
            "focus": "#D4AF37",
            "error": "#C0392B",
            "success": "#27AE60",
            "white": "#FFFFFF",
            "gold": "#D4AF37",
            "goldLight": "#F4E4A8",
            "goldDark": "#B8962E",
            "black": "#000000",
            "charcoal": "#1A1A1A"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 4px 20px rgba(0,0,0,0.3)",
            "ds-hover": "0 8px 30px rgba(212,175,55,0.2)"
      },
      borderRadius: {
            "ds-sm": "4px",
            "ds-md": "8px",
            "ds-lg": "12px"
      },
      fontFamily: {
            "heading": [
                  "\"Didot\", \"Bodoni\", \"Playfair Display\", serif"
            ],
            "body": [
                  "\"Cormorant Garamond\", \"Georgia\", serif"
            ],
            "mono": [
                  "\"Courier New\", monospace"
            ]
      },
      fontWeight: {
            "ds-light": 300,
            "ds-normal": 400,
            "ds-medium": 500,
            "ds-bold": 600
      },
      transitionDuration: {
            "ds": "500ms"
      },
      transitionTimingFunction: {
            "ds": "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
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
