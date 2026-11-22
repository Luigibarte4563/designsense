# Gradient-Heavy / Duotone Style Preset

## Signature Traits
Bold gradients or two-color treatments throughout

## Do
- Use gradients on backgrounds, buttons, text, borders
- Duotone: map two colors across light/dark values
- Keep gradient directions consistent (e.g., 135deg)
- High contrast text (white on dark gradients)
- Animate gradient positions for living feel

## Don't
- Don't use more than 2-3 gradient palettes
- Don't put gradients on text smaller than 18px
- Don't use low-contrast gradient combinations
- Don't mix with flat design elements

## Accessibility Watch-outs
- **Text on gradients**: test contrast at every point
- **Solid fallback background for text blocks**: 
- **Focus ring**: 3px solid contrasting color
- **Duotone images**: ensure recognizable without color

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "0px",
    "color": "transparent"
  },
  "shadow": {
    "default": "0 4px 20px rgba(0,0,0,0.15)",
    "hover": "0 8px 30px rgba(0,0,0,0.2)",
    "glow": "0 0 40px rgba(255,100,100,0.4)"
  },
  "radius": {
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "xl": "32px"
  },
  "color": {
    "bg": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "surface": "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
    "primary": "linear-gradient(135deg, #FF6B6B 0%, #FFD93D 100%)",
    "secondary": "linear-gradient(135deg, #6BCB77 0%, #43E97B 100%)",
    "accent": "linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%)",
    "ink": "#FFFFFF",
    "muted": "rgba(255,255,255,0.8)",
    "border": "rgba(255,255,255,0.3)",
    "focus": "#FFD700",
    "error": "#FF6B6B",
    "success": "#4ADE80",
    "white": "#FFFFFF",
    "duotone1": "#667eea",
    "duotone2": "#764ba2"
  },
  "font": {
    "heading": "\"Poppins\", \"Inter\", sans-serif",
    "body": "\"Inter\", sans-serif",
    "mono": "\"Fira Code\", monospace",
    "weight": {
      "normal": 400,
      "medium": 600,
      "bold": 700
    }
  },
  "motion": {
    "duration": "300ms",
    "easing": "cubic-bezier(0.4, 0, 0.2, 1)"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 0px;
  --ds-border-color: transparent;
  --ds-shadow-default: 0 4px 20px rgba(0,0,0,0.15);
  --ds-shadow-hover: 0 8px 30px rgba(0,0,0,0.2);
  --ds-shadow-glow: 0 0 40px rgba(255,100,100,0.4);
  --ds-radius-sm: 8px;
  --ds-radius-md: 16px;
  --ds-radius-lg: 24px;
  --ds-radius-xl: 32px;
  --ds-color-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --ds-color-surface: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%);
  --ds-color-primary: linear-gradient(135deg, #FF6B6B 0%, #FFD93D 100%);
  --ds-color-secondary: linear-gradient(135deg, #6BCB77 0%, #43E97B 100%);
  --ds-color-accent: linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%);
  --ds-color-ink: #FFFFFF;
  --ds-color-muted: rgba(255,255,255,0.8);
  --ds-color-border: rgba(255,255,255,0.3);
  --ds-color-focus: #FFD700;
  --ds-color-error: #FF6B6B;
  --ds-color-success: #4ADE80;
  --ds-color-white: #FFFFFF;
  --ds-color-duotone1: #667eea;
  --ds-color-duotone2: #764ba2;
  --ds-font-heading: "Poppins", "Inter", sans-serif;
  --ds-font-body: "Inter", sans-serif;
  --ds-font-mono: "Fira Code", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-medium: 600;
  --ds-font-weight-bold: 700;
  --ds-motion-duration: 300ms;
  --ds-motion-easing: cubic-bezier(0.4, 0, 0.2, 1);
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            "surface": "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
            "primary": "linear-gradient(135deg, #FF6B6B 0%, #FFD93D 100%)",
            "secondary": "linear-gradient(135deg, #6BCB77 0%, #43E97B 100%)",
            "accent": "linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%)",
            "ink": "#FFFFFF",
            "muted": "rgba(255,255,255,0.8)",
            "border": "rgba(255,255,255,0.3)",
            "focus": "#FFD700",
            "error": "#FF6B6B",
            "success": "#4ADE80",
            "white": "#FFFFFF",
            "duotone1": "#667eea",
            "duotone2": "#764ba2"
      } },
      borderWidth: {
            "ds": "0px"
      },
      boxShadow: {
            "ds-default": "0 4px 20px rgba(0,0,0,0.15)",
            "ds-hover": "0 8px 30px rgba(0,0,0,0.2)",
            "ds-glow": "0 0 40px rgba(255,100,100,0.4)"
      },
      borderRadius: {
            "ds-sm": "8px",
            "ds-md": "16px",
            "ds-lg": "24px",
            "ds-xl": "32px"
      },
      fontFamily: {
            "heading": [
                  "\"Poppins\", \"Inter\", sans-serif"
            ],
            "body": [
                  "\"Inter\", sans-serif"
            ],
            "mono": [
                  "\"Fira Code\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-medium": 600,
            "ds-bold": 700
      },
      transitionDuration: {
            "ds": "300ms"
      },
      transitionTimingFunction: {
            "ds": "cubic-bezier(0.4, 0, 0.2, 1)"
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
