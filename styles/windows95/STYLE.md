# Windows 95 / Retro OS Style Preset

## Signature Traits
Beveled gray panels, classic desktop widgets, system fonts

## Do
- Classic beveled borders (raised/sunken)
- Teal background (#008080)
- Gray window chrome (#C0C0C0)
- Blue title bar gradient
- MS Sans Serif / Tahoma fonts
- Pixel-perfect 1px lines
- No rounded corners
- Classic icon style

## Don't
- Don't use modern fonts
- Don't use rounded corners
- Don't use gradients on buttons
- Don't use shadows beyond bevels
- Don't use colors beyond palette

## Accessibility Watch-outs
- **High contrast available (classic HC mode)**: 
- **Focus**: dotted outline (classic Windows)
- **System metrics respected**: 
- **Keyboard navigation native**: 

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "2px",
    "color": "#FFFFFF"
  },
  "shadow": {
    "raised": "1px 1px 0 #FFFFFF, 2px 2px 0 #DFDFDF, -1px -1px 0 #808080, -2px -2px 0 #000000",
    "sunken": "1px 1px 0 #000000, 2px 2px 0 #808080, -1px -1px 0 #DFDFDF, -2px -2px 0 #FFFFFF",
    "default": "none"
  },
  "radius": {
    "sm": "0px",
    "md": "0px",
    "lg": "0px"
  },
  "color": {
    "bg": "#008080",
    "surface": "#C0C0C0",
    "windowBg": "#C0C0C0",
    "titleBar": "linear-gradient(90deg, #000080 0%, #1084D0 100%)",
    "titleBarInactive": "#808080",
    "primary": "#000000",
    "secondary": "#000080",
    "accent": "#FF0000",
    "ink": "#000000",
    "muted": "#808080",
    "border": "#FFFFFF",
    "focus": "#000080",
    "error": "#FF0000",
    "success": "#008000",
    "white": "#FFFFFF",
    "highlight": "#000080",
    "highlightText": "#FFFFFF",
    "buttonFace": "#C0C0C0",
    "buttonHighlight": "#FFFFFF",
    "buttonShadow": "#808080",
    "buttonDkShadow": "#000000"
  },
  "font": {
    "heading": "\"MS Sans Serif\", \"Tahoma\", sans-serif",
    "body": "\"MS Sans Serif\", \"Tahoma\", sans-serif",
    "mono": "\"Fixedsys\", \"Courier New\", monospace",
    "weight": {
      "normal": 400,
      "bold": 700
    }
  },
  "motion": {
    "duration": "0ms",
    "easing": "linear"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 2px;
  --ds-border-color: #FFFFFF;
  --ds-shadow-raised: 1px 1px 0 #FFFFFF, 2px 2px 0 #DFDFDF, -1px -1px 0 #808080, -2px -2px 0 #000000;
  --ds-shadow-sunken: 1px 1px 0 #000000, 2px 2px 0 #808080, -1px -1px 0 #DFDFDF, -2px -2px 0 #FFFFFF;
  --ds-shadow-default: none;
  --ds-radius-sm: 0px;
  --ds-radius-md: 0px;
  --ds-radius-lg: 0px;
  --ds-color-bg: #008080;
  --ds-color-surface: #C0C0C0;
  --ds-color-windowBg: #C0C0C0;
  --ds-color-titleBar: linear-gradient(90deg, #000080 0%, #1084D0 100%);
  --ds-color-titleBarInactive: #808080;
  --ds-color-primary: #000000;
  --ds-color-secondary: #000080;
  --ds-color-accent: #FF0000;
  --ds-color-ink: #000000;
  --ds-color-muted: #808080;
  --ds-color-border: #FFFFFF;
  --ds-color-focus: #000080;
  --ds-color-error: #FF0000;
  --ds-color-success: #008000;
  --ds-color-white: #FFFFFF;
  --ds-color-highlight: #000080;
  --ds-color-highlightText: #FFFFFF;
  --ds-color-buttonFace: #C0C0C0;
  --ds-color-buttonHighlight: #FFFFFF;
  --ds-color-buttonShadow: #808080;
  --ds-color-buttonDkShadow: #000000;
  --ds-font-heading: "MS Sans Serif", "Tahoma", sans-serif;
  --ds-font-body: "MS Sans Serif", "Tahoma", sans-serif;
  --ds-font-mono: "Fixedsys", "Courier New", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-bold: 700;
  --ds-motion-duration: 0ms;
  --ds-motion-easing: linear;
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#008080",
            "surface": "#C0C0C0",
            "windowBg": "#C0C0C0",
            "titleBar": "linear-gradient(90deg, #000080 0%, #1084D0 100%)",
            "titleBarInactive": "#808080",
            "primary": "#000000",
            "secondary": "#000080",
            "accent": "#FF0000",
            "ink": "#000000",
            "muted": "#808080",
            "border": "#FFFFFF",
            "focus": "#000080",
            "error": "#FF0000",
            "success": "#008000",
            "white": "#FFFFFF",
            "highlight": "#000080",
            "highlightText": "#FFFFFF",
            "buttonFace": "#C0C0C0",
            "buttonHighlight": "#FFFFFF",
            "buttonShadow": "#808080",
            "buttonDkShadow": "#000000"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-raised": "1px 1px 0 #FFFFFF, 2px 2px 0 #DFDFDF, -1px -1px 0 #808080, -2px -2px 0 #000000",
            "ds-sunken": "1px 1px 0 #000000, 2px 2px 0 #808080, -1px -1px 0 #DFDFDF, -2px -2px 0 #FFFFFF",
            "ds-default": "none"
      },
      borderRadius: {
            "ds-sm": "0px",
            "ds-md": "0px",
            "ds-lg": "0px"
      },
      fontFamily: {
            "heading": [
                  "\"MS Sans Serif\", \"Tahoma\", sans-serif"
            ],
            "body": [
                  "\"MS Sans Serif\", \"Tahoma\", sans-serif"
            ],
            "mono": [
                  "\"Fixedsys\", \"Courier New\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-bold": 700
      },
      transitionDuration: {
            "ds": "0ms"
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
