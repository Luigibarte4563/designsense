# Retro / Vintage Style Preset

## Signature Traits
Muted palettes, old-print feel, textured surfaces

## Do
- Muted, earthy color palette
- Sepia/parchment backgrounds
- Serif typefaces with character
- Subtle paper texture overlay
- Ornate borders and dividers
- Aged, weathered appearance

## Don't
- Don't use bright, saturated colors
- Don't use pure white backgrounds
- Don't use modern geometric fonts
- Don't use clean, crisp edges

## Accessibility Watch-outs
- **Low contrast palette — test thoroughly**: 
- **Focus**: 3px solid accent with offset
- **Texture max 8% opacity behind text**: 
- **Increase font size for serif readability**: 

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "2px",
    "color": "#8B7355"
  },
  "shadow": {
    "default": "3px 3px 0 #8B7355",
    "hover": "5px 5px 0 #8B7355"
  },
  "radius": {
    "sm": "2px",
    "md": "4px",
    "lg": "8px"
  },
  "color": {
    "bg": "#F5F0E8",
    "surface": "#FAF5ED",
    "primary": "#8B4513",
    "secondary": "#CD853F",
    "accent": "#D2691E",
    "ink": "#3D2B1F",
    "muted": "#8B7355",
    "border": "#8B7355",
    "focus": "#CD853F",
    "error": "#B22222",
    "success": "#556B2F",
    "white": "#FFF8F0",
    "sepia": "#C9B896",
    "paper": "#FDF8F0"
  },
  "font": {
    "heading": "\"Playfair Display\", \"Georgia\", serif",
    "body": "\"Cormorant Garamond\", \"Georgia\", serif",
    "mono": "\"Courier New\", monospace",
    "weight": {
      "normal": 400,
      "bold": 700
    }
  },
  "motion": {
    "duration": "300ms",
    "easing": "ease-in-out"
  },
  "texture": {
    "paper": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.05' numOctaves='3'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23paper)' opacity='0.08'/%3E%3C/svg%3E\")"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 2px;
  --ds-border-color: #8B7355;
  --ds-shadow-default: 3px 3px 0 #8B7355;
  --ds-shadow-hover: 5px 5px 0 #8B7355;
  --ds-radius-sm: 2px;
  --ds-radius-md: 4px;
  --ds-radius-lg: 8px;
  --ds-color-bg: #F5F0E8;
  --ds-color-surface: #FAF5ED;
  --ds-color-primary: #8B4513;
  --ds-color-secondary: #CD853F;
  --ds-color-accent: #D2691E;
  --ds-color-ink: #3D2B1F;
  --ds-color-muted: #8B7355;
  --ds-color-border: #8B7355;
  --ds-color-focus: #CD853F;
  --ds-color-error: #B22222;
  --ds-color-success: #556B2F;
  --ds-color-white: #FFF8F0;
  --ds-color-sepia: #C9B896;
  --ds-color-paper: #FDF8F0;
  --ds-font-heading: "Playfair Display", "Georgia", serif;
  --ds-font-body: "Cormorant Garamond", "Georgia", serif;
  --ds-font-mono: "Courier New", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-bold: 700;
  --ds-motion-duration: 300ms;
  --ds-motion-easing: ease-in-out;
  --ds-texture-paper: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.05' numOctaves='3'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23paper)' opacity='0.08'/%3E%3C/svg%3E");
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
            "primary": "#8B4513",
            "secondary": "#CD853F",
            "accent": "#D2691E",
            "ink": "#3D2B1F",
            "muted": "#8B7355",
            "border": "#8B7355",
            "focus": "#CD853F",
            "error": "#B22222",
            "success": "#556B2F",
            "white": "#FFF8F0",
            "sepia": "#C9B896",
            "paper": "#FDF8F0"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-default": "3px 3px 0 #8B7355",
            "ds-hover": "5px 5px 0 #8B7355"
      },
      borderRadius: {
            "ds-sm": "2px",
            "ds-md": "4px",
            "ds-lg": "8px"
      },
      fontFamily: {
            "heading": [
                  "\"Playfair Display\", \"Georgia\", serif"
            ],
            "body": [
                  "\"Cormorant Garamond\", \"Georgia\", serif"
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
            "ds": "300ms"
      },
      transitionTimingFunction: {
            "ds": "ease-in-out"
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
