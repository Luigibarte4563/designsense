# Vaporwave Style Preset

## Signature Traits
Pink and cyan gradients, 80s-90s aesthetics, statues and grids

## Do
- Pink/cyan/purple gradient palette
- Perspective grids on backgrounds
- Greek statue imagery
- Glitch text effects
- Japanese text as decoration
- Sunset gradients
- CRT scanline overlays

## Don't
- Don't use light backgrounds
- Don't use natural colors
- Don't use readable UI patterns
- Don't skip the grid background

## Accessibility Watch-outs
- **Dark background — light text required**: 
- **Focus**: 3px solid cyan with offset
- **Glitch effects**: respect reduced motion
- **Grid lines**: low opacity, don't impair text

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "2px",
    "color": "#FF00FF"
  },
  "shadow": {
    "default": "0 0 30px rgba(255,0,255,0.4)",
    "hover": "0 0 40px rgba(0,255,255,0.5)"
  },
  "radius": {
    "sm": "4px",
    "md": "8px",
    "lg": "12px",
    "grid": "0px"
  },
  "color": {
    "bg": "linear-gradient(135deg, #1A0033 0%, #000033 50%, #001A33 100%)",
    "surface": "rgba(255,255,255,0.05)",
    "primary": "#FF00FF",
    "secondary": "#00FFFF",
    "accent": "#FFFF00",
    "ink": "#FFFFFF",
    "muted": "#FF00FF",
    "border": "#FF00FF",
    "focus": "#00FFFF",
    "error": "#FF0000",
    "success": "#00FF00",
    "white": "#FFFFFF",
    "grid": "rgba(255,0,255,0.2)",
    "statue": "#E0E0E0",
    "sunset": "linear-gradient(180deg, #FF00FF 0%, #FF6600 50%, #FFFF00 100%)"
  },
  "font": {
    "heading": "\"Orbitron\", \"Rajdhani\", sans-serif",
    "body": "\"Share Tech Mono\", monospace",
    "mono": "\"Share Tech Mono\", monospace",
    "weight": {
      "normal": 400,
      "bold": 700
    }
  },
  "motion": {
    "duration": "500ms",
    "easing": "linear"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 2px;
  --ds-border-color: #FF00FF;
  --ds-shadow-default: 0 0 30px rgba(255,0,255,0.4);
  --ds-shadow-hover: 0 0 40px rgba(0,255,255,0.5);
  --ds-radius-sm: 4px;
  --ds-radius-md: 8px;
  --ds-radius-lg: 12px;
  --ds-radius-grid: 0px;
  --ds-color-bg: linear-gradient(135deg, #1A0033 0%, #000033 50%, #001A33 100%);
  --ds-color-surface: rgba(255,255,255,0.05);
  --ds-color-primary: #FF00FF;
  --ds-color-secondary: #00FFFF;
  --ds-color-accent: #FFFF00;
  --ds-color-ink: #FFFFFF;
  --ds-color-muted: #FF00FF;
  --ds-color-border: #FF00FF;
  --ds-color-focus: #00FFFF;
  --ds-color-error: #FF0000;
  --ds-color-success: #00FF00;
  --ds-color-white: #FFFFFF;
  --ds-color-grid: rgba(255,0,255,0.2);
  --ds-color-statue: #E0E0E0;
  --ds-color-sunset: linear-gradient(180deg, #FF00FF 0%, #FF6600 50%, #FFFF00 100%);
  --ds-font-heading: "Orbitron", "Rajdhani", sans-serif;
  --ds-font-body: "Share Tech Mono", monospace;
  --ds-font-mono: "Share Tech Mono", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-bold: 700;
  --ds-motion-duration: 500ms;
  --ds-motion-easing: linear;
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "linear-gradient(135deg, #1A0033 0%, #000033 50%, #001A33 100%)",
            "surface": "rgba(255,255,255,0.05)",
            "primary": "#FF00FF",
            "secondary": "#00FFFF",
            "accent": "#FFFF00",
            "ink": "#FFFFFF",
            "muted": "#FF00FF",
            "border": "#FF00FF",
            "focus": "#00FFFF",
            "error": "#FF0000",
            "success": "#00FF00",
            "white": "#FFFFFF",
            "grid": "rgba(255,0,255,0.2)",
            "statue": "#E0E0E0",
            "sunset": "linear-gradient(180deg, #FF00FF 0%, #FF6600 50%, #FFFF00 100%)"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-default": "0 0 30px rgba(255,0,255,0.4)",
            "ds-hover": "0 0 40px rgba(0,255,255,0.5)"
      },
      borderRadius: {
            "ds-sm": "4px",
            "ds-md": "8px",
            "ds-lg": "12px",
            "ds-grid": "0px"
      },
      fontFamily: {
            "heading": [
                  "\"Orbitron\", \"Rajdhani\", sans-serif"
            ],
            "body": [
                  "\"Share Tech Mono\", monospace"
            ],
            "mono": [
                  "\"Share Tech Mono\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-bold": 700
      },
      transitionDuration: {
            "ds": "500ms"
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
