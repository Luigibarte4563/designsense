# Y2K / Frutiger Aero Style Preset

## Signature Traits
Glossy bubbles, chrome, aqua and glass, early 2000s optimism

## Do
- Glossy, reflective surfaces
- Aqua/cyan/turquoise dominant palette
- Chrome/metallic gradients
- Bubble/orb shapes with highlights
- Water/glass transparency effects
- Optimistic, futuristic feel

## Don't
- Don't use dark/muted colors
- Don't use matte surfaces
- Don't skip the glossy highlights
- Don't use sharp corners

## Accessibility Watch-outs
- **Very low contrast on glass surfaces**: 
- **Solid opaque fallback required**: 
- **Focus**: 3px solid magenta with offset
- **Animations respect reduced motion**: 

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "2px",
    "color": "#00FFFF"
  },
  "shadow": {
    "default": "0 8px 24px rgba(0,255,255,0.3), inset 0 1px 0 rgba(255,255,255,0.5)",
    "hover": "0 12px 32px rgba(0,255,255,0.4)"
  },
  "radius": {
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "bubble": "50%"
  },
  "color": {
    "bg": "linear-gradient(180deg, #00FFFF 0%, #0080FF 50%, #FF00FF 100%)",
    "surface": "rgba(255,255,255,0.3)",
    "surfaceStrong": "rgba(255,255,255,0.5)",
    "primary": "#00FFFF",
    "secondary": "#FF00FF",
    "accent": "#FFFF00",
    "ink": "#000080",
    "muted": "#008080",
    "border": "#00FFFF",
    "focus": "#FF00FF",
    "error": "#FF0000",
    "success": "#00FF00",
    "white": "#FFFFFF",
    "chrome": "linear-gradient(180deg, #FFFFFF 0%, #CCCCCC 50%, #FFFFFF 100%)",
    "bubble": "rgba(255,255,255,0.4)",
    "water": "rgba(0,255,255,0.2)"
  },
  "font": {
    "heading": "\"Orbitron\", \"Eurostile\", sans-serif",
    "body": "\"Trebuchet MS\", \"Verdana\", sans-serif",
    "mono": "\"Courier New\", monospace",
    "weight": {
      "normal": 400,
      "bold": 700
    }
  },
  "motion": {
    "duration": "400ms",
    "easing": "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 2px;
  --ds-border-color: #00FFFF;
  --ds-shadow-default: 0 8px 24px rgba(0,255,255,0.3), inset 0 1px 0 rgba(255,255,255,0.5);
  --ds-shadow-hover: 0 12px 32px rgba(0,255,255,0.4);
  --ds-radius-sm: 8px;
  --ds-radius-md: 16px;
  --ds-radius-lg: 24px;
  --ds-radius-bubble: 50%;
  --ds-color-bg: linear-gradient(180deg, #00FFFF 0%, #0080FF 50%, #FF00FF 100%);
  --ds-color-surface: rgba(255,255,255,0.3);
  --ds-color-surfaceStrong: rgba(255,255,255,0.5);
  --ds-color-primary: #00FFFF;
  --ds-color-secondary: #FF00FF;
  --ds-color-accent: #FFFF00;
  --ds-color-ink: #000080;
  --ds-color-muted: #008080;
  --ds-color-border: #00FFFF;
  --ds-color-focus: #FF00FF;
  --ds-color-error: #FF0000;
  --ds-color-success: #00FF00;
  --ds-color-white: #FFFFFF;
  --ds-color-chrome: linear-gradient(180deg, #FFFFFF 0%, #CCCCCC 50%, #FFFFFF 100%);
  --ds-color-bubble: rgba(255,255,255,0.4);
  --ds-color-water: rgba(0,255,255,0.2);
  --ds-font-heading: "Orbitron", "Eurostile", sans-serif;
  --ds-font-body: "Trebuchet MS", "Verdana", sans-serif;
  --ds-font-mono: "Courier New", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-bold: 700;
  --ds-motion-duration: 400ms;
  --ds-motion-easing: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "linear-gradient(180deg, #00FFFF 0%, #0080FF 50%, #FF00FF 100%)",
            "surface": "rgba(255,255,255,0.3)",
            "surfaceStrong": "rgba(255,255,255,0.5)",
            "primary": "#00FFFF",
            "secondary": "#FF00FF",
            "accent": "#FFFF00",
            "ink": "#000080",
            "muted": "#008080",
            "border": "#00FFFF",
            "focus": "#FF00FF",
            "error": "#FF0000",
            "success": "#00FF00",
            "white": "#FFFFFF",
            "chrome": "linear-gradient(180deg, #FFFFFF 0%, #CCCCCC 50%, #FFFFFF 100%)",
            "bubble": "rgba(255,255,255,0.4)",
            "water": "rgba(0,255,255,0.2)"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-default": "0 8px 24px rgba(0,255,255,0.3), inset 0 1px 0 rgba(255,255,255,0.5)",
            "ds-hover": "0 12px 32px rgba(0,255,255,0.4)"
      },
      borderRadius: {
            "ds-sm": "8px",
            "ds-md": "16px",
            "ds-lg": "24px",
            "ds-bubble": "50%"
      },
      fontFamily: {
            "heading": [
                  "\"Orbitron\", \"Eurostile\", sans-serif"
            ],
            "body": [
                  "\"Trebuchet MS\", \"Verdana\", sans-serif"
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
