# Pop Art / Comic Style Preset

## Signature Traits
Halftone dots, bold outlines, speech-bubble elements

## Do
- Thick black outlines on everything
- Halftone dot patterns for shading
- Speech bubbles for callouts
- Primary colors: red, blue, yellow
- Ben-Day dots texture
- Comic-style onomatopoeia

## Don't
- Don't use thin lines
- Don't use gradients
- Don't use realistic proportions
- Don't skip the halftone texture

## Accessibility Watch-outs
- **High contrast black outlines help**: 
- **Focus ring**: 4px solid black
- **Halftone can cause visual distortion — solid alt**: 
- **Speech bubbles**: ensure arrow points to trigger

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "4px",
    "color": "#000000"
  },
  "shadow": {
    "default": "6px 6px 0 #000000",
    "hover": "8px 8px 0 #000000"
  },
  "radius": {
    "sm": "0px",
    "md": "4px",
    "lg": "8px",
    "bubble": "20px 20px 20px 0"
  },
  "color": {
    "bg": "#FFFFFF",
    "surface": "#FFFF00",
    "primary": "#FF0000",
    "secondary": "#0000FF",
    "accent": "#FFFF00",
    "ink": "#000000",
    "muted": "#666666",
    "border": "#000000",
    "focus": "#FF0000",
    "error": "#FF0000",
    "success": "#00FF00",
    "white": "#FFFFFF",
    "halftone": "rgba(0,0,0,0.15)",
    "bubble": "#FFFFFF",
    "bubbleBorder": "#000000"
  },
  "font": {
    "heading": "\"Bangers\", \"Anton\", sans-serif",
    "body": "\"Comic Neue\", cursive",
    "mono": "\"Courier New\", monospace",
    "weight": {
      "normal": 400,
      "bold": 700
    }
  },
  "motion": {
    "duration": "150ms",
    "easing": "steps(3)"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 4px;
  --ds-border-color: #000000;
  --ds-shadow-default: 6px 6px 0 #000000;
  --ds-shadow-hover: 8px 8px 0 #000000;
  --ds-radius-sm: 0px;
  --ds-radius-md: 4px;
  --ds-radius-lg: 8px;
  --ds-radius-bubble: 20px 20px 20px 0;
  --ds-color-bg: #FFFFFF;
  --ds-color-surface: #FFFF00;
  --ds-color-primary: #FF0000;
  --ds-color-secondary: #0000FF;
  --ds-color-accent: #FFFF00;
  --ds-color-ink: #000000;
  --ds-color-muted: #666666;
  --ds-color-border: #000000;
  --ds-color-focus: #FF0000;
  --ds-color-error: #FF0000;
  --ds-color-success: #00FF00;
  --ds-color-white: #FFFFFF;
  --ds-color-halftone: rgba(0,0,0,0.15);
  --ds-color-bubble: #FFFFFF;
  --ds-color-bubbleBorder: #000000;
  --ds-font-heading: "Bangers", "Anton", sans-serif;
  --ds-font-body: "Comic Neue", cursive;
  --ds-font-mono: "Courier New", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-bold: 700;
  --ds-motion-duration: 150ms;
  --ds-motion-easing: steps(3);
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FFFFFF",
            "surface": "#FFFF00",
            "primary": "#FF0000",
            "secondary": "#0000FF",
            "accent": "#FFFF00",
            "ink": "#000000",
            "muted": "#666666",
            "border": "#000000",
            "focus": "#FF0000",
            "error": "#FF0000",
            "success": "#00FF00",
            "white": "#FFFFFF",
            "halftone": "rgba(0,0,0,0.15)",
            "bubble": "#FFFFFF",
            "bubbleBorder": "#000000"
      } },
      borderWidth: {
            "ds": "4px"
      },
      boxShadow: {
            "ds-default": "6px 6px 0 #000000",
            "ds-hover": "8px 8px 0 #000000"
      },
      borderRadius: {
            "ds-sm": "0px",
            "ds-md": "4px",
            "ds-lg": "8px",
            "ds-bubble": "20px 20px 20px 0"
      },
      fontFamily: {
            "heading": [
                  "\"Bangers\", \"Anton\", sans-serif"
            ],
            "body": [
                  "\"Comic Neue\", cursive"
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
            "ds": "150ms"
      },
      transitionTimingFunction: {
            "ds": "steps(3)"
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
