# Anti-Design Style Preset

## Signature Traits
Deliberately chaotic, rule-breaking, uncomfortable

## Do
- Clashing colors intentionally
- Mismatched fonts and sizes
- Overlapping elements, broken grids
- Aggressive animations
- Deliberate usability friction
- Anti-patterns as features

## Don't
- Don't follow any convention
- Don't optimize for usability
- Don't use harmonious colors
- Don't align to grids

## Accessibility Watch-outs
- **INTENTIONALLY INACCESSIBLE — not for production**: 
- **If used**: provide accessible alternative
- **Focus indicators must still exist**: 
- **Motion must respect prefers-reduced-motion**: 

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "3px",
    "color": "#FF0000"
  },
  "shadow": {
    "default": "8px 8px 0 #00FF00",
    "hover": "12px 12px 0 #0000FF"
  },
  "radius": {
    "sm": "0px",
    "md": "8px",
    "lg": "0px",
    "xl": "20px"
  },
  "color": {
    "bg": "#FFFF00",
    "surface": "#FF00FF",
    "primary": "#000000",
    "secondary": "#FFFFFF",
    "accent": "#FF0000",
    "ink": "#000000",
    "muted": "#00FF00",
    "border": "#FF0000",
    "focus": "#0000FF",
    "error": "#FF00FF",
    "success": "#00FF00",
    "white": "#FFFFFF",
    "clashing1": "#FF00FF",
    "clashing2": "#00FFFF",
    "clashing3": "#FFFF00"
  },
  "font": {
    "heading": "\"Comic Sans MS\", \"Chiller\", cursive",
    "body": "\"Papyrus\", \"Jokerman\", fantasy",
    "mono": "\"Courier New\", monospace",
    "weight": {
      "normal": 400,
      "bold": 900
    }
  },
  "motion": {
    "duration": "100ms",
    "easing": "steps(2)"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 3px;
  --ds-border-color: #FF0000;
  --ds-shadow-default: 8px 8px 0 #00FF00;
  --ds-shadow-hover: 12px 12px 0 #0000FF;
  --ds-radius-sm: 0px;
  --ds-radius-md: 8px;
  --ds-radius-lg: 0px;
  --ds-radius-xl: 20px;
  --ds-color-bg: #FFFF00;
  --ds-color-surface: #FF00FF;
  --ds-color-primary: #000000;
  --ds-color-secondary: #FFFFFF;
  --ds-color-accent: #FF0000;
  --ds-color-ink: #000000;
  --ds-color-muted: #00FF00;
  --ds-color-border: #FF0000;
  --ds-color-focus: #0000FF;
  --ds-color-error: #FF00FF;
  --ds-color-success: #00FF00;
  --ds-color-white: #FFFFFF;
  --ds-color-clashing1: #FF00FF;
  --ds-color-clashing2: #00FFFF;
  --ds-color-clashing3: #FFFF00;
  --ds-font-heading: "Comic Sans MS", "Chiller", cursive;
  --ds-font-body: "Papyrus", "Jokerman", fantasy;
  --ds-font-mono: "Courier New", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-bold: 900;
  --ds-motion-duration: 100ms;
  --ds-motion-easing: steps(2);
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FFFF00",
            "surface": "#FF00FF",
            "primary": "#000000",
            "secondary": "#FFFFFF",
            "accent": "#FF0000",
            "ink": "#000000",
            "muted": "#00FF00",
            "border": "#FF0000",
            "focus": "#0000FF",
            "error": "#FF00FF",
            "success": "#00FF00",
            "white": "#FFFFFF",
            "clashing1": "#FF00FF",
            "clashing2": "#00FFFF",
            "clashing3": "#FFFF00"
      } },
      borderWidth: {
            "ds": "3px"
      },
      boxShadow: {
            "ds-default": "8px 8px 0 #00FF00",
            "ds-hover": "12px 12px 0 #0000FF"
      },
      borderRadius: {
            "ds-sm": "0px",
            "ds-md": "8px",
            "ds-lg": "0px",
            "ds-xl": "20px"
      },
      fontFamily: {
            "heading": [
                  "\"Comic Sans MS\", \"Chiller\", cursive"
            ],
            "body": [
                  "\"Papyrus\", \"Jokerman\", fantasy"
            ],
            "mono": [
                  "\"Courier New\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-bold": 900
      },
      transitionDuration: {
            "ds": "100ms"
      },
      transitionTimingFunction: {
            "ds": "steps(2)"
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
  font-weight: var(--ds-font-weight-bold, 900);
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
