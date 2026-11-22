# Futuristic / Sci-Fi HUD Style Preset

## Signature Traits
Thin lines, data overlays, holographic look

## Do
- Thin lines (1px) for all borders
- Cyan/magenta holographic palette
- Transparent panels with grid lines
- Data-dense layouts
- Monospace for all text
- Scanline overlay
- Corner brackets instead of radius

## Don't
- Don't use thick borders
- Don't use filled buttons
- Don't use rounded corners
- Don't use warm colors

## Accessibility Watch-outs
- **Thin lines**: ensure 3:1 contrast
- **Focus**: 2px solid yellow with offset
- **Transparency**: solid fallback for text
- **Scanlines**: respect reduced motion

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "1px",
    "color": "rgba(0,255,255,0.5)"
  },
  "shadow": {
    "default": "0 0 10px rgba(0,255,255,0.2)",
    "hover": "0 0 20px rgba(0,255,255,0.4)",
    "hologram": "0 0 30px rgba(0,255,255,0.3)"
  },
  "radius": {
    "sm": "2px",
    "md": "4px",
    "lg": "8px",
    "sharp": "0px"
  },
  "color": {
    "bg": "#000000",
    "surface": "rgba(0,20,30,0.8)",
    "primary": "#00FFFF",
    "secondary": "#FF00FF",
    "accent": "#FFFF00",
    "ink": "#E0FFFF",
    "muted": "#008080",
    "border": "rgba(0,255,255,0.3)",
    "focus": "#FFFF00",
    "error": "#FF0044",
    "success": "#00FF88",
    "white": "#FFFFFF",
    "hologram": "rgba(0,255,255,0.15)",
    "scanline": "rgba(0,0,0,0.05)",
    "warning": "#FFAA00"
  },
  "font": {
    "heading": "\"Orbitron\", \"Rajdhani\", sans-serif",
    "body": "\"JetBrains Mono\", \"Share Tech Mono\", monospace",
    "mono": "\"JetBrains Mono\", \"Share Tech Mono\", monospace",
    "weight": {
      "light": 300,
      "normal": 400,
      "bold": 700
    }
  },
  "motion": {
    "duration": "100ms",
    "easing": "linear"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 1px;
  --ds-border-color: rgba(0,255,255,0.5);
  --ds-shadow-default: 0 0 10px rgba(0,255,255,0.2);
  --ds-shadow-hover: 0 0 20px rgba(0,255,255,0.4);
  --ds-shadow-hologram: 0 0 30px rgba(0,255,255,0.3);
  --ds-radius-sm: 2px;
  --ds-radius-md: 4px;
  --ds-radius-lg: 8px;
  --ds-radius-sharp: 0px;
  --ds-color-bg: #000000;
  --ds-color-surface: rgba(0,20,30,0.8);
  --ds-color-primary: #00FFFF;
  --ds-color-secondary: #FF00FF;
  --ds-color-accent: #FFFF00;
  --ds-color-ink: #E0FFFF;
  --ds-color-muted: #008080;
  --ds-color-border: rgba(0,255,255,0.3);
  --ds-color-focus: #FFFF00;
  --ds-color-error: #FF0044;
  --ds-color-success: #00FF88;
  --ds-color-white: #FFFFFF;
  --ds-color-hologram: rgba(0,255,255,0.15);
  --ds-color-scanline: rgba(0,0,0,0.05);
  --ds-color-warning: #FFAA00;
  --ds-font-heading: "Orbitron", "Rajdhani", sans-serif;
  --ds-font-body: "JetBrains Mono", "Share Tech Mono", monospace;
  --ds-font-mono: "JetBrains Mono", "Share Tech Mono", monospace;
  --ds-font-weight-light: 300;
  --ds-font-weight-normal: 400;
  --ds-font-weight-bold: 700;
  --ds-motion-duration: 100ms;
  --ds-motion-easing: linear;
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#000000",
            "surface": "rgba(0,20,30,0.8)",
            "primary": "#00FFFF",
            "secondary": "#FF00FF",
            "accent": "#FFFF00",
            "ink": "#E0FFFF",
            "muted": "#008080",
            "border": "rgba(0,255,255,0.3)",
            "focus": "#FFFF00",
            "error": "#FF0044",
            "success": "#00FF88",
            "white": "#FFFFFF",
            "hologram": "rgba(0,255,255,0.15)",
            "scanline": "rgba(0,0,0,0.05)",
            "warning": "#FFAA00"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 0 10px rgba(0,255,255,0.2)",
            "ds-hover": "0 0 20px rgba(0,255,255,0.4)",
            "ds-hologram": "0 0 30px rgba(0,255,255,0.3)"
      },
      borderRadius: {
            "ds-sm": "2px",
            "ds-md": "4px",
            "ds-lg": "8px",
            "ds-sharp": "0px"
      },
      fontFamily: {
            "heading": [
                  "\"Orbitron\", \"Rajdhani\", sans-serif"
            ],
            "body": [
                  "\"JetBrains Mono\", \"Share Tech Mono\", monospace"
            ],
            "mono": [
                  "\"JetBrains Mono\", \"Share Tech Mono\", monospace"
            ]
      },
      fontWeight: {
            "ds-light": 300,
            "ds-normal": 400,
            "ds-bold": 700
      },
      transitionDuration: {
            "ds": "100ms"
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
