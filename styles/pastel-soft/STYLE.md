# Pastel / Soft Style Preset

## Signature Traits
Gentle, low-saturation colors, calm and approachable

## Do
- Low saturation, high lightness colors
- Very round, soft shapes
- Gentle, calm aesthetic
- Minimal contrast between elements
- Approachable, non-threatening
- Breathing room everywhere

## Don't
- Don't use saturated colors
- Don't use sharp corners
- Don't use heavy shadows
- Don't use high contrast

## Accessibility Watch-outs
- **CRITICAL**: Pastels often fail 4.5:1 on white
- **Use darker pastels or colored backgrounds**: 
- **Focus**: 3px solid with offset
- **Test every color combination**: 

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "1px",
    "color": "#E8E8F0"
  },
  "shadow": {
    "default": "0 2px 8px rgba(0,0,0,0.04)",
    "hover": "0 4px 16px rgba(0,0,0,0.06)"
  },
  "radius": {
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "xl": "32px",
    "pill": "9999px"
  },
  "color": {
    "bg": "#FAFAFC",
    "surface": "#FFFFFF",
    "primary": "#A8C0E8",
    "secondary": "#E8C0A8",
    "accent": "#C0E8A8",
    "ink": "#4A4A5A",
    "muted": "#A8A8B8",
    "border": "#E8E8F0",
    "focus": "#A8C0E8",
    "error": "#E8A8A8",
    "success": "#A8E8A8",
    "white": "#FFFFFF",
    "pastel1": "#E8D0E8",
    "pastel2": "#D0E8E8",
    "pastel3": "#E8E8D0",
    "pastel4": "#F0E0D0",
    "pastel5": "#E0F0D0",
    "pastel6": "#E8D0F0"
  },
  "font": {
    "heading": "\"Nunito\", \"Quicksand\", sans-serif",
    "body": "\"Nunito\", \"Quicksand\", sans-serif",
    "mono": "\"Fira Code\", monospace",
    "weight": {
      "normal": 400,
      "medium": 500,
      "bold": 600
    }
  },
  "motion": {
    "duration": "300ms",
    "easing": "ease-out"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 1px;
  --ds-border-color: #E8E8F0;
  --ds-shadow-default: 0 2px 8px rgba(0,0,0,0.04);
  --ds-shadow-hover: 0 4px 16px rgba(0,0,0,0.06);
  --ds-radius-sm: 8px;
  --ds-radius-md: 16px;
  --ds-radius-lg: 24px;
  --ds-radius-xl: 32px;
  --ds-radius-pill: 9999px;
  --ds-color-bg: #FAFAFC;
  --ds-color-surface: #FFFFFF;
  --ds-color-primary: #A8C0E8;
  --ds-color-secondary: #E8C0A8;
  --ds-color-accent: #C0E8A8;
  --ds-color-ink: #4A4A5A;
  --ds-color-muted: #A8A8B8;
  --ds-color-border: #E8E8F0;
  --ds-color-focus: #A8C0E8;
  --ds-color-error: #E8A8A8;
  --ds-color-success: #A8E8A8;
  --ds-color-white: #FFFFFF;
  --ds-color-pastel1: #E8D0E8;
  --ds-color-pastel2: #D0E8E8;
  --ds-color-pastel3: #E8E8D0;
  --ds-color-pastel4: #F0E0D0;
  --ds-color-pastel5: #E0F0D0;
  --ds-color-pastel6: #E8D0F0;
  --ds-font-heading: "Nunito", "Quicksand", sans-serif;
  --ds-font-body: "Nunito", "Quicksand", sans-serif;
  --ds-font-mono: "Fira Code", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-medium: 500;
  --ds-font-weight-bold: 600;
  --ds-motion-duration: 300ms;
  --ds-motion-easing: ease-out;
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FAFAFC",
            "surface": "#FFFFFF",
            "primary": "#A8C0E8",
            "secondary": "#E8C0A8",
            "accent": "#C0E8A8",
            "ink": "#4A4A5A",
            "muted": "#A8A8B8",
            "border": "#E8E8F0",
            "focus": "#A8C0E8",
            "error": "#E8A8A8",
            "success": "#A8E8A8",
            "white": "#FFFFFF",
            "pastel1": "#E8D0E8",
            "pastel2": "#D0E8E8",
            "pastel3": "#E8E8D0",
            "pastel4": "#F0E0D0",
            "pastel5": "#E0F0D0",
            "pastel6": "#E8D0F0"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 2px 8px rgba(0,0,0,0.04)",
            "ds-hover": "0 4px 16px rgba(0,0,0,0.06)"
      },
      borderRadius: {
            "ds-sm": "8px",
            "ds-md": "16px",
            "ds-lg": "24px",
            "ds-xl": "32px",
            "ds-pill": "9999px"
      },
      fontFamily: {
            "heading": [
                  "\"Nunito\", \"Quicksand\", sans-serif"
            ],
            "body": [
                  "\"Nunito\", \"Quicksand\", sans-serif"
            ],
            "mono": [
                  "\"Fira Code\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-medium": 500,
            "ds-bold": 600
      },
      transitionDuration: {
            "ds": "300ms"
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
  font-weight: var(--ds-font-weight-bold, 600);
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
