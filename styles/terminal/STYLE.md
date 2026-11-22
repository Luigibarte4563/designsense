# Terminal / Hacker Style Preset

## Signature Traits
Monospace text, green-on-black, command-line look

## Do
- Pure black background
- Green (#00FF00) or amber text
- Monospace font only
- Blinking cursor
- Command prompt style
- Syntax highlighting in terminal colors
- No mouse-only interactions

## Don't
- Don't use colors beyond palette
- Don't use proportional fonts
- Don't use rounded corners
- Don't use shadows
- Don't use images/graphics

## Accessibility Watch-outs
- **Green on black**: test contrast (may need brighter green)
- **Focus**: bright yellow outline
- **Blinking cursor**: respect reduced motion
- **Screen reader**: semantic structure critical

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "1px",
    "color": "#00FF00"
  },
  "shadow": {
    "default": "none",
    "hover": "0 0 10px #00FF00"
  },
  "radius": {
    "sm": "0px",
    "md": "0px",
    "lg": "0px"
  },
  "color": {
    "bg": "#000000",
    "surface": "#0D1117",
    "primary": "#00FF00",
    "secondary": "#00CC00",
    "accent": "#FFFF00",
    "ink": "#00FF00",
    "muted": "#004400",
    "border": "#003300",
    "focus": "#FFFF00",
    "error": "#FF0000",
    "success": "#00FF00",
    "white": "#00FF00",
    "cursor": "#00FF00",
    "selection": "rgba(0,255,0,0.3)",
    "prompt": "#00FF00",
    "comment": "#008800",
    "string": "#FFA500",
    "keyword": "#00FFFF",
    "function": "#FF00FF"
  },
  "font": {
    "heading": "\"JetBrains Mono\", \"Fira Code\", \"Cascadia Code\", monospace",
    "body": "\"JetBrains Mono\", \"Fira Code\", \"Cascadia Code\", monospace",
    "mono": "\"JetBrains Mono\", \"Fira Code\", \"Cascadia Code\", monospace",
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
  --ds-border-width: 1px;
  --ds-border-color: #00FF00;
  --ds-shadow-default: none;
  --ds-shadow-hover: 0 0 10px #00FF00;
  --ds-radius-sm: 0px;
  --ds-radius-md: 0px;
  --ds-radius-lg: 0px;
  --ds-color-bg: #000000;
  --ds-color-surface: #0D1117;
  --ds-color-primary: #00FF00;
  --ds-color-secondary: #00CC00;
  --ds-color-accent: #FFFF00;
  --ds-color-ink: #00FF00;
  --ds-color-muted: #004400;
  --ds-color-border: #003300;
  --ds-color-focus: #FFFF00;
  --ds-color-error: #FF0000;
  --ds-color-success: #00FF00;
  --ds-color-white: #00FF00;
  --ds-color-cursor: #00FF00;
  --ds-color-selection: rgba(0,255,0,0.3);
  --ds-color-prompt: #00FF00;
  --ds-color-comment: #008800;
  --ds-color-string: #FFA500;
  --ds-color-keyword: #00FFFF;
  --ds-color-function: #FF00FF;
  --ds-font-heading: "JetBrains Mono", "Fira Code", "Cascadia Code", monospace;
  --ds-font-body: "JetBrains Mono", "Fira Code", "Cascadia Code", monospace;
  --ds-font-mono: "JetBrains Mono", "Fira Code", "Cascadia Code", monospace;
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
            "bg": "#000000",
            "surface": "#0D1117",
            "primary": "#00FF00",
            "secondary": "#00CC00",
            "accent": "#FFFF00",
            "ink": "#00FF00",
            "muted": "#004400",
            "border": "#003300",
            "focus": "#FFFF00",
            "error": "#FF0000",
            "success": "#00FF00",
            "white": "#00FF00",
            "cursor": "#00FF00",
            "selection": "rgba(0,255,0,0.3)",
            "prompt": "#00FF00",
            "comment": "#008800",
            "string": "#FFA500",
            "keyword": "#00FFFF",
            "function": "#FF00FF"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "none",
            "ds-hover": "0 0 10px #00FF00"
      },
      borderRadius: {
            "ds-sm": "0px",
            "ds-md": "0px",
            "ds-lg": "0px"
      },
      fontFamily: {
            "heading": [
                  "\"JetBrains Mono\", \"Fira Code\", \"Cascadia Code\", monospace"
            ],
            "body": [
                  "\"JetBrains Mono\", \"Fira Code\", \"Cascadia Code\", monospace"
            ],
            "mono": [
                  "\"JetBrains Mono\", \"Fira Code\", \"Cascadia Code\", monospace"
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
