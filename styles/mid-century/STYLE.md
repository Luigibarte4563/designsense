# Mid-Century Modern Style Preset

## Signature Traits
Warm earth tones, simple shapes, 50s-60s feel

## Do
- Warm earth tones: teak, mustard, olive, burnt orange
- Simple, organic shapes with tapered legs
- Clean lines, minimal ornamentation
- Mix of wood tones and colored surfaces
- Geometric but warm patterns
- Functional beauty

## Don't
- Don't use cool/neon colors
- Don't use heavy ornamentation
- Don't use sharp industrial look
- Don't use pure black/white

## Accessibility Watch-outs
- **Earth tones**: test contrast on cream backgrounds
- **Focus**: 3px solid burnt orange with offset
- **Warm palette**: generally colorblind safe
- **Organic shapes**: ensure touch targets

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "1px",
    "color": "#8B7355"
  },
  "shadow": {
    "default": "4px 4px 0 #8B7355",
    "hover": "6px 6px 0 #8B7355"
  },
  "radius": {
    "sm": "4px",
    "md": "8px",
    "lg": "16px",
    "organic": "30% 70% 70% 30% / 30% 30% 70% 70%"
  },
  "color": {
    "bg": "#F5F0E8",
    "surface": "#FAF5ED",
    "primary": "#C46210",
    "secondary": "#8B7355",
    "accent": "#2D5A27",
    "ink": "#3D2B1F",
    "muted": "#A09078",
    "border": "#D4C4A8",
    "focus": "#C46210",
    "error": "#B22222",
    "success": "#2D5A27",
    "white": "#FFF8F0",
    "teak": "#8B7355",
    "mustard": "#D4A574",
    "olive": "#556B2F",
    "burntOrange": "#C46210",
    "cream": "#F5F0E8"
  },
  "font": {
    "heading": "\"Futura\", \"Century Gothic\", sans-serif",
    "body": "\"Palatino\", \"Georgia\", serif",
    "mono": "\"Courier New\", monospace",
    "weight": {
      "normal": 400,
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
  --ds-border-color: #8B7355;
  --ds-shadow-default: 4px 4px 0 #8B7355;
  --ds-shadow-hover: 6px 6px 0 #8B7355;
  --ds-radius-sm: 4px;
  --ds-radius-md: 8px;
  --ds-radius-lg: 16px;
  --ds-radius-organic: 30% 70% 70% 30% / 30% 30% 70% 70%;
  --ds-color-bg: #F5F0E8;
  --ds-color-surface: #FAF5ED;
  --ds-color-primary: #C46210;
  --ds-color-secondary: #8B7355;
  --ds-color-accent: #2D5A27;
  --ds-color-ink: #3D2B1F;
  --ds-color-muted: #A09078;
  --ds-color-border: #D4C4A8;
  --ds-color-focus: #C46210;
  --ds-color-error: #B22222;
  --ds-color-success: #2D5A27;
  --ds-color-white: #FFF8F0;
  --ds-color-teak: #8B7355;
  --ds-color-mustard: #D4A574;
  --ds-color-olive: #556B2F;
  --ds-color-burntOrange: #C46210;
  --ds-color-cream: #F5F0E8;
  --ds-font-heading: "Futura", "Century Gothic", sans-serif;
  --ds-font-body: "Palatino", "Georgia", serif;
  --ds-font-mono: "Courier New", monospace;
  --ds-font-weight-normal: 400;
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
            "bg": "#F5F0E8",
            "surface": "#FAF5ED",
            "primary": "#C46210",
            "secondary": "#8B7355",
            "accent": "#2D5A27",
            "ink": "#3D2B1F",
            "muted": "#A09078",
            "border": "#D4C4A8",
            "focus": "#C46210",
            "error": "#B22222",
            "success": "#2D5A27",
            "white": "#FFF8F0",
            "teak": "#8B7355",
            "mustard": "#D4A574",
            "olive": "#556B2F",
            "burntOrange": "#C46210",
            "cream": "#F5F0E8"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "4px 4px 0 #8B7355",
            "ds-hover": "6px 6px 0 #8B7355"
      },
      borderRadius: {
            "ds-sm": "4px",
            "ds-md": "8px",
            "ds-lg": "16px",
            "ds-organic": "30% 70% 70% 30% / 30% 30% 70% 70%"
      },
      fontFamily: {
            "heading": [
                  "\"Futura\", \"Century Gothic\", sans-serif"
            ],
            "body": [
                  "\"Palatino\", \"Georgia\", serif"
            ],
            "mono": [
                  "\"Courier New\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
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
