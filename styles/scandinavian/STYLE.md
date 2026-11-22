# Scandinavian / Nordic Style Preset

## Signature Traits
Calm, light, natural tones, functional minimalism

## Do
- Light, airy color palette (off-white, sage, warm gray)
- Natural material references (wood, stone, linen)
- Functional, unpretentious aesthetic
- Generous whitespace
- Subtle contrast, no harsh blacks
- Quality over quantity

## Don't
- Don't use pure black (#000)
- Don't use saturated colors
- Don't use heavy shadows
- Don't use decorative flourishes

## Accessibility Watch-outs
- **Sage green primary**: test contrast on off-white
- **Focus**: 3px solid sage with offset
- **Light backgrounds need darker text**: 
- **Natural tones work well for colorblind**: 

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "1px",
    "color": "#E8E4DD"
  },
  "shadow": {
    "default": "0 2px 8px rgba(0,0,0,0.04)",
    "hover": "0 4px 16px rgba(0,0,0,0.06)"
  },
  "radius": {
    "sm": "4px",
    "md": "8px",
    "lg": "12px"
  },
  "color": {
    "bg": "#FDFBF7",
    "surface": "#FFFFFF",
    "primary": "#2D4A3E",
    "secondary": "#8B9A8C",
    "accent": "#D4A574",
    "ink": "#1A1A1A",
    "muted": "#8B9A8C",
    "border": "#E8E4DD",
    "focus": "#2D4A3E",
    "error": "#C0392B",
    "success": "#2D4A3E",
    "white": "#FFFFFF",
    "wood": "#C9B896",
    "stone": "#A8A8A0",
    "linen": "#F5F0E8"
  },
  "font": {
    "heading": "\"IBM Plex Sans\", \"Inter\", sans-serif",
    "body": "\"IBM Plex Sans\", \"Inter\", sans-serif",
    "mono": "\"IBM Plex Mono\", monospace",
    "weight": {
      "normal": 400,
      "medium": 500,
      "bold": 600
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
  --ds-border-color: #E8E4DD;
  --ds-shadow-default: 0 2px 8px rgba(0,0,0,0.04);
  --ds-shadow-hover: 0 4px 16px rgba(0,0,0,0.06);
  --ds-radius-sm: 4px;
  --ds-radius-md: 8px;
  --ds-radius-lg: 12px;
  --ds-color-bg: #FDFBF7;
  --ds-color-surface: #FFFFFF;
  --ds-color-primary: #2D4A3E;
  --ds-color-secondary: #8B9A8C;
  --ds-color-accent: #D4A574;
  --ds-color-ink: #1A1A1A;
  --ds-color-muted: #8B9A8C;
  --ds-color-border: #E8E4DD;
  --ds-color-focus: #2D4A3E;
  --ds-color-error: #C0392B;
  --ds-color-success: #2D4A3E;
  --ds-color-white: #FFFFFF;
  --ds-color-wood: #C9B896;
  --ds-color-stone: #A8A8A0;
  --ds-color-linen: #F5F0E8;
  --ds-font-heading: "IBM Plex Sans", "Inter", sans-serif;
  --ds-font-body: "IBM Plex Sans", "Inter", sans-serif;
  --ds-font-mono: "IBM Plex Mono", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-medium: 500;
  --ds-font-weight-bold: 600;
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
            "bg": "#FDFBF7",
            "surface": "#FFFFFF",
            "primary": "#2D4A3E",
            "secondary": "#8B9A8C",
            "accent": "#D4A574",
            "ink": "#1A1A1A",
            "muted": "#8B9A8C",
            "border": "#E8E4DD",
            "focus": "#2D4A3E",
            "error": "#C0392B",
            "success": "#2D4A3E",
            "white": "#FFFFFF",
            "wood": "#C9B896",
            "stone": "#A8A8A0",
            "linen": "#F5F0E8"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 2px 8px rgba(0,0,0,0.04)",
            "ds-hover": "0 4px 16px rgba(0,0,0,0.06)"
      },
      borderRadius: {
            "ds-sm": "4px",
            "ds-md": "8px",
            "ds-lg": "12px"
      },
      fontFamily: {
            "heading": [
                  "\"IBM Plex Sans\", \"Inter\", sans-serif"
            ],
            "body": [
                  "\"IBM Plex Sans\", \"Inter\", sans-serif"
            ],
            "mono": [
                  "\"IBM Plex Mono\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-medium": 500,
            "ds-bold": 600
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
