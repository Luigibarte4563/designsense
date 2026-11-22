# Brutalism (Web Brutalism) Style Preset

## Signature Traits
Stark, raw, default-looking, intentionally unpolished

## Do
- Use system/default fonts only
- Raw HTML aesthetics — default link colors
- No rounded corners, no shadows
- Exposed structure and hierarchy
- Black text on white, blue links, purple visited
- Monospace for code/technical content

## Don't
- No custom fonts
- No shadows, gradients, or animations
- No border radius
- No decorative elements
- No hover effects beyond underline

## Accessibility Watch-outs
- **High contrast by default**: 
- **Focus**: browser default outline (don't remove)
- **Semantic HTML is the design**: 
- **Keyboard navigation works natively**: 

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "2px",
    "color": "#000000"
  },
  "shadow": {
    "default": "none",
    "hover": "none"
  },
  "radius": {
    "sm": "0px",
    "md": "0px",
    "lg": "0px"
  },
  "color": {
    "bg": "#FFFFFF",
    "surface": "#FFFFFF",
    "primary": "#000000",
    "secondary": "#0000FF",
    "accent": "#FF0000",
    "ink": "#000000",
    "muted": "#666666",
    "border": "#000000",
    "focus": "#FF0000",
    "error": "#FF0000",
    "success": "#008000",
    "white": "#FFFFFF",
    "link": "#0000FF",
    "linkVisited": "#800080"
  },
  "font": {
    "heading": "system-ui, sans-serif",
    "body": "system-ui, sans-serif",
    "mono": "monospace",
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
  --ds-border-color: #000000;
  --ds-shadow-default: none;
  --ds-shadow-hover: none;
  --ds-radius-sm: 0px;
  --ds-radius-md: 0px;
  --ds-radius-lg: 0px;
  --ds-color-bg: #FFFFFF;
  --ds-color-surface: #FFFFFF;
  --ds-color-primary: #000000;
  --ds-color-secondary: #0000FF;
  --ds-color-accent: #FF0000;
  --ds-color-ink: #000000;
  --ds-color-muted: #666666;
  --ds-color-border: #000000;
  --ds-color-focus: #FF0000;
  --ds-color-error: #FF0000;
  --ds-color-success: #008000;
  --ds-color-white: #FFFFFF;
  --ds-color-link: #0000FF;
  --ds-color-linkVisited: #800080;
  --ds-font-heading: system-ui, sans-serif;
  --ds-font-body: system-ui, sans-serif;
  --ds-font-mono: monospace;
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
            "primary": "#000000",
            "secondary": "#0000FF",
            "accent": "#FF0000",
            "ink": "#000000",
            "muted": "#666666",
            "border": "#000000",
            "focus": "#FF0000",
            "error": "#FF0000",
            "success": "#008000",
            "white": "#FFFFFF",
            "link": "#0000FF",
            "linkVisited": "#800080"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-default": "none",
            "ds-hover": "none"
      },
      borderRadius: {
            "ds-sm": "0px",
            "ds-md": "0px",
            "ds-lg": "0px"
      },
      fontFamily: {
            "heading": [
                  "system-ui, sans-serif"
            ],
            "body": [
                  "system-ui, sans-serif"
            ],
            "mono": [
                  "monospace"
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
