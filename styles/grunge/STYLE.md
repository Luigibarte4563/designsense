# Grunge / Distressed Style Preset

## Signature Traits
Torn textures, rough edges, gritty feel

## Do
- Distressed, worn textures
- Rough, torn edges
- Dark, moody color palette
- Grainy, noisy overlays
- Typewriter/monospace fonts
- Layered, overlapping elements

## Don't
- Don't use clean, smooth surfaces
- Don't use bright, cheerful colors
- Don't use perfect alignment
- Don't skip the texture overlay

## Accessibility Watch-outs
- **Textures reduce contrast — solid text backgrounds required**: 
- **Focus ring**: 3px solid gold with offset
- **Dark mode default — ensure light text contrast**: 
- **Texture overlay**: opacity max 15% behind text

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "2px",
    "color": "#3D2B1F"
  },
  "shadow": {
    "default": "4px 4px 8px rgba(0,0,0,0.4)",
    "hover": "6px 6px 12px rgba(0,0,0,0.5)"
  },
  "radius": {
    "sm": "2px",
    "md": "4px",
    "lg": "8px",
    "irregular": "clip-path: polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%)"
  },
  "color": {
    "bg": "#1A1A1A",
    "surface": "#2D2D2D",
    "primary": "#E8D5B7",
    "secondary": "#8B7355",
    "accent": "#C0392B",
    "ink": "#F5F0E8",
    "muted": "#8B7355",
    "border": "#3D2B1F",
    "focus": "#F39C12",
    "error": "#E74C3C",
    "success": "#27AE60",
    "white": "#F5F0E8",
    "texture": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grunge'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='6'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23grunge)' opacity='0.15'/%3E%3C/svg%3E\")"
  },
  "font": {
    "heading": "\"Oswald\", \"Bebas Neue\", sans-serif",
    "body": "\"Courier New\", monospace",
    "mono": "\"Courier New\", monospace",
    "weight": {
      "normal": 400,
      "bold": 700
    }
  },
  "motion": {
    "duration": "200ms",
    "easing": "ease-in"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 2px;
  --ds-border-color: #3D2B1F;
  --ds-shadow-default: 4px 4px 8px rgba(0,0,0,0.4);
  --ds-shadow-hover: 6px 6px 12px rgba(0,0,0,0.5);
  --ds-radius-sm: 2px;
  --ds-radius-md: 4px;
  --ds-radius-lg: 8px;
  --ds-radius-irregular: clip-path: polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%);
  --ds-color-bg: #1A1A1A;
  --ds-color-surface: #2D2D2D;
  --ds-color-primary: #E8D5B7;
  --ds-color-secondary: #8B7355;
  --ds-color-accent: #C0392B;
  --ds-color-ink: #F5F0E8;
  --ds-color-muted: #8B7355;
  --ds-color-border: #3D2B1F;
  --ds-color-focus: #F39C12;
  --ds-color-error: #E74C3C;
  --ds-color-success: #27AE60;
  --ds-color-white: #F5F0E8;
  --ds-color-texture: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grunge'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='6'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23grunge)' opacity='0.15'/%3E%3C/svg%3E");
  --ds-font-heading: "Oswald", "Bebas Neue", sans-serif;
  --ds-font-body: "Courier New", monospace;
  --ds-font-mono: "Courier New", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-bold: 700;
  --ds-motion-duration: 200ms;
  --ds-motion-easing: ease-in;
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#1A1A1A",
            "surface": "#2D2D2D",
            "primary": "#E8D5B7",
            "secondary": "#8B7355",
            "accent": "#C0392B",
            "ink": "#F5F0E8",
            "muted": "#8B7355",
            "border": "#3D2B1F",
            "focus": "#F39C12",
            "error": "#E74C3C",
            "success": "#27AE60",
            "white": "#F5F0E8",
            "texture": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grunge'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='6'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23grunge)' opacity='0.15'/%3E%3C/svg%3E\")"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-default": "4px 4px 8px rgba(0,0,0,0.4)",
            "ds-hover": "6px 6px 12px rgba(0,0,0,0.5)"
      },
      borderRadius: {
            "ds-sm": "2px",
            "ds-md": "4px",
            "ds-lg": "8px",
            "ds-irregular": "clip-path: polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%)"
      },
      fontFamily: {
            "heading": [
                  "\"Oswald\", \"Bebas Neue\", sans-serif"
            ],
            "body": [
                  "\"Courier New\", monospace"
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
            "ds": "200ms"
      },
      transitionTimingFunction: {
            "ds": "ease-in"
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
