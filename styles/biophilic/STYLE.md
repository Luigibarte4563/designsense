# Nature / Biophilic Style Preset

## Signature Traits
Earthy palettes, leaf and wood textures, organic forms

## Do
- Earthy green/brown color palette
- Leaf, wood, stone textures
- Organic, flowing shapes
- Natural light patterns
- Living system metaphors
- Calm, restorative aesthetic

## Don't
- Don't use synthetic/neon colors
- Don't use geometric rigidity
- Don't use harsh contrasts
- Don't skip natural textures

## Accessibility Watch-outs
- **Earth tones**: generally colorblind safe
- **Focus**: 3px solid forest green with offset
- **Textures**: max 10% opacity behind text
- **Green palette**: test deuteranopia safety

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "1px",
    "color": "#8F9B7A"
  },
  "shadow": {
    "default": "0 4px 16px rgba(0,0,0,0.08)",
    "hover": "0 8px 24px rgba(0,0,0,0.12)"
  },
  "radius": {
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "organic": "30% 70% 70% 30% / 30% 30% 70% 70%"
  },
  "color": {
    "bg": "#F1F4ED",
    "surface": "#FAFCF8",
    "primary": "#4A6B3A",
    "secondary": "#8F9B7A",
    "accent": "#C9A84C",
    "ink": "#2D3A1A",
    "muted": "#6B7A5A",
    "border": "#C4D0B0",
    "focus": "#4A6B3A",
    "error": "#B22222",
    "success": "#4A6B3A",
    "white": "#FFFFFF",
    "leaf": "#6B8E5A",
    "wood": "#8B7355",
    "bark": "#5D4E37",
    "moss": "#8F9B7A",
    "soil": "#4A3A2A",
    "sky": "#A8C8E8"
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
    "duration": "400ms",
    "easing": "cubic-bezier(0.34, 1.56, 0.64, 1)"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 1px;
  --ds-border-color: #8F9B7A;
  --ds-shadow-default: 0 4px 16px rgba(0,0,0,0.08);
  --ds-shadow-hover: 0 8px 24px rgba(0,0,0,0.12);
  --ds-radius-sm: 8px;
  --ds-radius-md: 16px;
  --ds-radius-lg: 24px;
  --ds-radius-organic: 30% 70% 70% 30% / 30% 30% 70% 70%;
  --ds-color-bg: #F1F4ED;
  --ds-color-surface: #FAFCF8;
  --ds-color-primary: #4A6B3A;
  --ds-color-secondary: #8F9B7A;
  --ds-color-accent: #C9A84C;
  --ds-color-ink: #2D3A1A;
  --ds-color-muted: #6B7A5A;
  --ds-color-border: #C4D0B0;
  --ds-color-focus: #4A6B3A;
  --ds-color-error: #B22222;
  --ds-color-success: #4A6B3A;
  --ds-color-white: #FFFFFF;
  --ds-color-leaf: #6B8E5A;
  --ds-color-wood: #8B7355;
  --ds-color-bark: #5D4E37;
  --ds-color-moss: #8F9B7A;
  --ds-color-soil: #4A3A2A;
  --ds-color-sky: #A8C8E8;
  --ds-font-heading: "IBM Plex Sans", "Inter", sans-serif;
  --ds-font-body: "IBM Plex Sans", "Inter", sans-serif;
  --ds-font-mono: "IBM Plex Mono", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-medium: 500;
  --ds-font-weight-bold: 600;
  --ds-motion-duration: 400ms;
  --ds-motion-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#F1F4ED",
            "surface": "#FAFCF8",
            "primary": "#4A6B3A",
            "secondary": "#8F9B7A",
            "accent": "#C9A84C",
            "ink": "#2D3A1A",
            "muted": "#6B7A5A",
            "border": "#C4D0B0",
            "focus": "#4A6B3A",
            "error": "#B22222",
            "success": "#4A6B3A",
            "white": "#FFFFFF",
            "leaf": "#6B8E5A",
            "wood": "#8B7355",
            "bark": "#5D4E37",
            "moss": "#8F9B7A",
            "soil": "#4A3A2A",
            "sky": "#A8C8E8"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 4px 16px rgba(0,0,0,0.08)",
            "ds-hover": "0 8px 24px rgba(0,0,0,0.12)"
      },
      borderRadius: {
            "ds-sm": "8px",
            "ds-md": "16px",
            "ds-lg": "24px",
            "ds-organic": "30% 70% 70% 30% / 30% 30% 70% 70%"
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
            "ds": "400ms"
      },
      transitionTimingFunction: {
            "ds": "cubic-bezier(0.34, 1.56, 0.64, 1)"
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
