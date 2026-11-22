# Frutiger Metro / Early Web 2.0 Style Preset

## Signature Traits
Glossy buttons, reflections, badges, rounded corners

## Do
- Glossy buttons with white top highlight
- Subtle reflections on surfaces
- Bright, saturated primary colors
- Rounded corners everywhere (6-14px)
- Badges with red/orange accents
- Soft drop shadows with inner glow

## Don't
- Don't use flat/matte buttons
- Don't use dark color schemes
- Don't skip the inner highlight
- Don't use sharp corners

## Accessibility Watch-outs
- **Gloss reduces contrast — test button text**: 
- **Focus**: 3px solid blue with offset
- **Reflections don't impair readability**: 
- **Badge color**: ensure 4.5:1 on background

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "1px",
    "color": "#FFFFFF"
  },
  "shadow": {
    "default": "0 3px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
    "hover": "0 5px 12px rgba(0,0,0,0.4)"
  },
  "radius": {
    "sm": "6px",
    "md": "10px",
    "lg": "14px",
    "pill": "9999px"
  },
  "color": {
    "bg": "#E8F4FD",
    "surface": "#FFFFFF",
    "primary": "linear-gradient(180deg, #4A90E2 0%, #2E6FD6 100%)",
    "secondary": "linear-gradient(180deg, #7ED321 0%, #5DB81C 100%)",
    "accent": "linear-gradient(180deg, #F5A623 0%, #E8941A 100%)",
    "ink": "#333333",
    "muted": "#999999",
    "border": "#CCCCCC",
    "focus": "#4A90E2",
    "error": "#D0021B",
    "success": "#7ED321",
    "white": "#FFFFFF",
    "reflection": "rgba(255,255,255,0.3)",
    "badge": "#FF3B30"
  },
  "font": {
    "heading": "\"Helvetica Neue\", \"Lucida Grande\", sans-serif",
    "body": "\"Helvetica Neue\", \"Lucida Grande\", sans-serif",
    "mono": "\"Monaco\", monospace",
    "weight": {
      "normal": 400,
      "bold": 700
    }
  },
  "motion": {
    "duration": "250ms",
    "easing": "ease-out"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 1px;
  --ds-border-color: #FFFFFF;
  --ds-shadow-default: 0 3px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4);
  --ds-shadow-hover: 0 5px 12px rgba(0,0,0,0.4);
  --ds-radius-sm: 6px;
  --ds-radius-md: 10px;
  --ds-radius-lg: 14px;
  --ds-radius-pill: 9999px;
  --ds-color-bg: #E8F4FD;
  --ds-color-surface: #FFFFFF;
  --ds-color-primary: linear-gradient(180deg, #4A90E2 0%, #2E6FD6 100%);
  --ds-color-secondary: linear-gradient(180deg, #7ED321 0%, #5DB81C 100%);
  --ds-color-accent: linear-gradient(180deg, #F5A623 0%, #E8941A 100%);
  --ds-color-ink: #333333;
  --ds-color-muted: #999999;
  --ds-color-border: #CCCCCC;
  --ds-color-focus: #4A90E2;
  --ds-color-error: #D0021B;
  --ds-color-success: #7ED321;
  --ds-color-white: #FFFFFF;
  --ds-color-reflection: rgba(255,255,255,0.3);
  --ds-color-badge: #FF3B30;
  --ds-font-heading: "Helvetica Neue", "Lucida Grande", sans-serif;
  --ds-font-body: "Helvetica Neue", "Lucida Grande", sans-serif;
  --ds-font-mono: "Monaco", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-bold: 700;
  --ds-motion-duration: 250ms;
  --ds-motion-easing: ease-out;
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#E8F4FD",
            "surface": "#FFFFFF",
            "primary": "linear-gradient(180deg, #4A90E2 0%, #2E6FD6 100%)",
            "secondary": "linear-gradient(180deg, #7ED321 0%, #5DB81C 100%)",
            "accent": "linear-gradient(180deg, #F5A623 0%, #E8941A 100%)",
            "ink": "#333333",
            "muted": "#999999",
            "border": "#CCCCCC",
            "focus": "#4A90E2",
            "error": "#D0021B",
            "success": "#7ED321",
            "white": "#FFFFFF",
            "reflection": "rgba(255,255,255,0.3)",
            "badge": "#FF3B30"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 3px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
            "ds-hover": "0 5px 12px rgba(0,0,0,0.4)"
      },
      borderRadius: {
            "ds-sm": "6px",
            "ds-md": "10px",
            "ds-lg": "14px",
            "ds-pill": "9999px"
      },
      fontFamily: {
            "heading": [
                  "\"Helvetica Neue\", \"Lucida Grande\", sans-serif"
            ],
            "body": [
                  "\"Helvetica Neue\", \"Lucida Grande\", sans-serif"
            ],
            "mono": [
                  "\"Monaco\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-bold": 700
      },
      transitionDuration: {
            "ds": "250ms"
      },
      transitionTimingFunction: {
            "ds": "ease-out"
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
