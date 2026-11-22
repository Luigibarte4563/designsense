# Bauhaus Style Preset

## Signature Traits
Primary colors, geometric shapes, functional forms

## Do
- Primary colors only: red, blue, yellow, black, white
- Basic geometric shapes: circle, square, triangle
- Form follows function
- Sans-serif typography (Futura/Univers)
- Asymmetric balance
- Grid-based layouts

## Don't
- Don't use secondary colors (orange, green, purple)
- Don't use gradients
- Don't use organic shapes
- Don't use decorative elements
- Don't use serif fonts

## Accessibility Watch-outs
- **Maximum contrast by design**: 
- **Focus**: 3px solid black with offset
- **Primary colors**: test colorblind safety
- **Simple shapes aid recognition**: 

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "3px",
    "color": "#000000"
  },
  "shadow": {
    "default": "none",
    "hover": "none"
  },
  "radius": {
    "sm": "0px",
    "md": "0px",
    "lg": "0px",
    "circle": "50%"
  },
  "color": {
    "bg": "#FFFFFF",
    "surface": "#FFFFFF",
    "primary": "#FF0000",
    "secondary": "#0000FF",
    "accent": "#FFFF00",
    "ink": "#000000",
    "muted": "#808080",
    "border": "#000000",
    "focus": "#FF0000",
    "error": "#FF0000",
    "success": "#00FF00",
    "white": "#FFFFFF",
    "red": "#FF0000",
    "blue": "#0000FF",
    "yellow": "#FFFF00",
    "black": "#000000"
  },
  "font": {
    "heading": "\"Futura\", \"Univers\", \"Helvetica\", sans-serif",
    "body": "\"Futura\", \"Univers\", \"Helvetica\", sans-serif",
    "mono": "\"Courier New\", monospace",
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
  --ds-border-width: 3px;
  --ds-border-color: #000000;
  --ds-shadow-default: none;
  --ds-shadow-hover: none;
  --ds-radius-sm: 0px;
  --ds-radius-md: 0px;
  --ds-radius-lg: 0px;
  --ds-radius-circle: 50%;
  --ds-color-bg: #FFFFFF;
  --ds-color-surface: #FFFFFF;
  --ds-color-primary: #FF0000;
  --ds-color-secondary: #0000FF;
  --ds-color-accent: #FFFF00;
  --ds-color-ink: #000000;
  --ds-color-muted: #808080;
  --ds-color-border: #000000;
  --ds-color-focus: #FF0000;
  --ds-color-error: #FF0000;
  --ds-color-success: #00FF00;
  --ds-color-white: #FFFFFF;
  --ds-color-red: #FF0000;
  --ds-color-blue: #0000FF;
  --ds-color-yellow: #FFFF00;
  --ds-color-black: #000000;
  --ds-font-heading: "Futura", "Univers", "Helvetica", sans-serif;
  --ds-font-body: "Futura", "Univers", "Helvetica", sans-serif;
  --ds-font-mono: "Courier New", monospace;
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
            "bg": "#FFFFFF",
            "surface": "#FFFFFF",
            "primary": "#FF0000",
            "secondary": "#0000FF",
            "accent": "#FFFF00",
            "ink": "#000000",
            "muted": "#808080",
            "border": "#000000",
            "focus": "#FF0000",
            "error": "#FF0000",
            "success": "#00FF00",
            "white": "#FFFFFF",
            "red": "#FF0000",
            "blue": "#0000FF",
            "yellow": "#FFFF00",
            "black": "#000000"
      } },
      borderWidth: {
            "ds": "3px"
      },
      boxShadow: {
            "ds-default": "none",
            "ds-hover": "none"
      },
      borderRadius: {
            "ds-sm": "0px",
            "ds-md": "0px",
            "ds-lg": "0px",
            "ds-circle": "50%"
      },
      fontFamily: {
            "heading": [
                  "\"Futura\", \"Univers\", \"Helvetica\", sans-serif"
            ],
            "body": [
                  "\"Futura\", \"Univers\", \"Helvetica\", sans-serif"
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
