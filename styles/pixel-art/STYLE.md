# Pixel Art / 8-bit Style Preset

## Signature Traits
Blocky pixel graphics, bitmap fonts, limited palette

## Do
- Bitmap/pixel fonts only
- 16-color palette maximum
- No anti-aliasing
- Hard edges, no curves
- Pixel-perfect alignment
- CRT scanline effect optional

## Don't
- Don't use smooth fonts
- Don't use gradients
- Don't use transparency
- Don't use border radius
- Don't use more than 16 colors

## Accessibility Watch-outs
- **High contrast by default**: 
- **Bitmap fonts**: minimum 16px for readability
- **Focus**: 2px solid yellow
- **Scaling**: nearest-neighbor only

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "2px",
    "color": "#000000"
  },
  "shadow": {
    "default": "4px 4px 0 #000000",
    "hover": "6px 6px 0 #000000"
  },
  "radius": {
    "sm": "0px",
    "md": "0px",
    "lg": "0px"
  },
  "color": {
    "bg": "#000000",
    "surface": "#1A1A2E",
    "primary": "#00FF00",
    "secondary": "#FF00FF",
    "accent": "#FFFF00",
    "ink": "#FFFFFF",
    "muted": "#888888",
    "border": "#000000",
    "focus": "#FFFF00",
    "error": "#FF0000",
    "success": "#00FF00",
    "white": "#FFFFFF",
    "palette1": "#000000",
    "palette2": "#1A1A2E",
    "palette3": "#7F7F7F",
    "palette4": "#FFFFFF",
    "palette5": "#FF0000",
    "palette6": "#00FF00",
    "palette7": "#0000FF",
    "palette8": "#FFFF00",
    "palette9": "#FF00FF",
    "palette10": "#00FFFF",
    "palette11": "#FFA500",
    "palette12": "#800080",
    "palette13": "#008080",
    "palette14": "#808080",
    "palette15": "#C0C0C0",
    "palette16": "#FFFFFF"
  },
  "font": {
    "heading": "\"Press Start 2P\", \"VT323\", monospace",
    "body": "\"VT323\", \"Press Start 2P\", monospace",
    "mono": "\"VT323\", monospace",
    "weight": {
      "normal": 400
    }
  },
  "motion": {
    "duration": "100ms",
    "easing": "steps(4)"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 2px;
  --ds-border-color: #000000;
  --ds-shadow-default: 4px 4px 0 #000000;
  --ds-shadow-hover: 6px 6px 0 #000000;
  --ds-radius-sm: 0px;
  --ds-radius-md: 0px;
  --ds-radius-lg: 0px;
  --ds-color-bg: #000000;
  --ds-color-surface: #1A1A2E;
  --ds-color-primary: #00FF00;
  --ds-color-secondary: #FF00FF;
  --ds-color-accent: #FFFF00;
  --ds-color-ink: #FFFFFF;
  --ds-color-muted: #888888;
  --ds-color-border: #000000;
  --ds-color-focus: #FFFF00;
  --ds-color-error: #FF0000;
  --ds-color-success: #00FF00;
  --ds-color-white: #FFFFFF;
  --ds-color-palette1: #000000;
  --ds-color-palette2: #1A1A2E;
  --ds-color-palette3: #7F7F7F;
  --ds-color-palette4: #FFFFFF;
  --ds-color-palette5: #FF0000;
  --ds-color-palette6: #00FF00;
  --ds-color-palette7: #0000FF;
  --ds-color-palette8: #FFFF00;
  --ds-color-palette9: #FF00FF;
  --ds-color-palette10: #00FFFF;
  --ds-color-palette11: #FFA500;
  --ds-color-palette12: #800080;
  --ds-color-palette13: #008080;
  --ds-color-palette14: #808080;
  --ds-color-palette15: #C0C0C0;
  --ds-color-palette16: #FFFFFF;
  --ds-font-heading: "Press Start 2P", "VT323", monospace;
  --ds-font-body: "VT323", "Press Start 2P", monospace;
  --ds-font-mono: "VT323", monospace;
  --ds-font-weight-normal: 400;
  --ds-motion-duration: 100ms;
  --ds-motion-easing: steps(4);
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#000000",
            "surface": "#1A1A2E",
            "primary": "#00FF00",
            "secondary": "#FF00FF",
            "accent": "#FFFF00",
            "ink": "#FFFFFF",
            "muted": "#888888",
            "border": "#000000",
            "focus": "#FFFF00",
            "error": "#FF0000",
            "success": "#00FF00",
            "white": "#FFFFFF",
            "palette1": "#000000",
            "palette2": "#1A1A2E",
            "palette3": "#7F7F7F",
            "palette4": "#FFFFFF",
            "palette5": "#FF0000",
            "palette6": "#00FF00",
            "palette7": "#0000FF",
            "palette8": "#FFFF00",
            "palette9": "#FF00FF",
            "palette10": "#00FFFF",
            "palette11": "#FFA500",
            "palette12": "#800080",
            "palette13": "#008080",
            "palette14": "#808080",
            "palette15": "#C0C0C0",
            "palette16": "#FFFFFF"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-default": "4px 4px 0 #000000",
            "ds-hover": "6px 6px 0 #000000"
      },
      borderRadius: {
            "ds-sm": "0px",
            "ds-md": "0px",
            "ds-lg": "0px"
      },
      fontFamily: {
            "heading": [
                  "\"Press Start 2P\", \"VT323\", monospace"
            ],
            "body": [
                  "\"VT323\", \"Press Start 2P\", monospace"
            ],
            "mono": [
                  "\"VT323\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400
      },
      transitionDuration: {
            "ds": "100ms"
      },
      transitionTimingFunction: {
            "ds": "steps(4)"
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
  font-weight: var(--ds-font-weight-bold, 400);
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
