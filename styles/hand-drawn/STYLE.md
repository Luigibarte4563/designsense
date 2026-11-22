# Hand-Drawn / Sketch Style Preset

## Signature Traits
Doodles, rough lines, paper textures, imperfect

## Do
- Hand-drawn fonts (cursive/sketch)
- Imperfect, wobbly lines
- Paper texture background
- Doodle icons and illustrations
- Pencil/pen color palette
- Asymmetric, organic layout

## Don't
- Don't use perfect geometric shapes
- Don't use clean digital fonts
- Don't use pure white backgrounds
- Don't use precise alignment

## Accessibility Watch-outs
- **Handwritten fonts**: minimum 18px for readability
- **Focus**: 3px solid accent with offset
- **Paper texture**: max 10% opacity behind text
- **Sketch fonts**: provide sans-serif fallback

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "2px",
    "color": "#2D2D2D"
  },
  "shadow": {
    "default": "2px 2px 0 #95A5A6",
    "hover": "3px 3px 0 #7F8C8D"
  },
  "radius": {
    "sm": "4px 8px 4px 8px",
    "md": "8px 16px 8px 16px",
    "lg": "12px 24px 12px 24px",
    "sketch": "10% 90% 90% 10% / 10% 10% 90% 90%"
  },
  "color": {
    "bg": "#FDFBF7",
    "surface": "#FEFEFE",
    "primary": "#2D2D2D",
    "secondary": "#8B4513",
    "accent": "#E74C3C",
    "ink": "#2D2D2D",
    "muted": "#95A5A6",
    "border": "#2D2D2D",
    "focus": "#E74C3C",
    "error": "#E74C3C",
    "success": "#2ECC71",
    "white": "#FFFFFF",
    "paper": "#FDFBF7",
    "pencil": "#4A4A4A",
    "highlighter": "#FFFF00"
  },
  "font": {
    "heading": "\"Caveat\", \"Patrick Hand\", cursive",
    "body": "\"Architects Daughter\", \"Indie Flower\", cursive",
    "mono": "\"Courier New\", monospace",
    "weight": {
      "normal": 400,
      "bold": 700
    }
  },
  "motion": {
    "duration": "200ms",
    "easing": "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  },
  "texture": {
    "paper": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.05' numOctaves='3'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23paper)' opacity='0.1'/%3E%3C/svg%3E\")"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 2px;
  --ds-border-color: #2D2D2D;
  --ds-shadow-default: 2px 2px 0 #95A5A6;
  --ds-shadow-hover: 3px 3px 0 #7F8C8D;
  --ds-radius-sm: 4px 8px 4px 8px;
  --ds-radius-md: 8px 16px 8px 16px;
  --ds-radius-lg: 12px 24px 12px 24px;
  --ds-radius-sketch: 10% 90% 90% 10% / 10% 10% 90% 90%;
  --ds-color-bg: #FDFBF7;
  --ds-color-surface: #FEFEFE;
  --ds-color-primary: #2D2D2D;
  --ds-color-secondary: #8B4513;
  --ds-color-accent: #E74C3C;
  --ds-color-ink: #2D2D2D;
  --ds-color-muted: #95A5A6;
  --ds-color-border: #2D2D2D;
  --ds-color-focus: #E74C3C;
  --ds-color-error: #E74C3C;
  --ds-color-success: #2ECC71;
  --ds-color-white: #FFFFFF;
  --ds-color-paper: #FDFBF7;
  --ds-color-pencil: #4A4A4A;
  --ds-color-highlighter: #FFFF00;
  --ds-font-heading: "Caveat", "Patrick Hand", cursive;
  --ds-font-body: "Architects Daughter", "Indie Flower", cursive;
  --ds-font-mono: "Courier New", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-bold: 700;
  --ds-motion-duration: 200ms;
  --ds-motion-easing: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ds-texture-paper: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.05' numOctaves='3'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23paper)' opacity='0.1'/%3E%3C/svg%3E");
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FDFBF7",
            "surface": "#FEFEFE",
            "primary": "#2D2D2D",
            "secondary": "#8B4513",
            "accent": "#E74C3C",
            "ink": "#2D2D2D",
            "muted": "#95A5A6",
            "border": "#2D2D2D",
            "focus": "#E74C3C",
            "error": "#E74C3C",
            "success": "#2ECC71",
            "white": "#FFFFFF",
            "paper": "#FDFBF7",
            "pencil": "#4A4A4A",
            "highlighter": "#FFFF00"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-default": "2px 2px 0 #95A5A6",
            "ds-hover": "3px 3px 0 #7F8C8D"
      },
      borderRadius: {
            "ds-sm": "4px 8px 4px 8px",
            "ds-md": "8px 16px 8px 16px",
            "ds-lg": "12px 24px 12px 24px",
            "ds-sketch": "10% 90% 90% 10% / 10% 10% 90% 90%"
      },
      fontFamily: {
            "heading": [
                  "\"Caveat\", \"Patrick Hand\", cursive"
            ],
            "body": [
                  "\"Architects Daughter\", \"Indie Flower\", cursive"
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
            "ds": "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
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
