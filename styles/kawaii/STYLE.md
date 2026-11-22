# Playful / Kawaii Style Preset

## Signature Traits
Cute characters, pastel colors, rounded shapes

## Do
- Pastel color palette
- Very round shapes (pill buttons, round cards)
- Cute character illustrations
- Bouncy, springy animations
- Heart/star/sparkle decorations
- High saturation but light values

## Don't
- Don't use dark/muted colors
- Don't use sharp corners
- Don't use serious/formal tone
- Don't skip the bounce animation

## Accessibility Watch-outs
- **Pastels on white**: test contrast (may need darker pastels)
- **Focus**: 3px solid pink with offset
- **Animations**: respect reduced motion
- **Cute ≠ inaccessible**: 

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "2px",
    "color": "#FFB3D9"
  },
  "shadow": {
    "default": "0 4px 12px rgba(255,179,217,0.3)",
    "hover": "0 6px 16px rgba(255,179,217,0.4)"
  },
  "radius": {
    "sm": "16px",
    "md": "24px",
    "lg": "32px",
    "xl": "48px",
    "pill": "9999px"
  },
  "color": {
    "bg": "#FFF0F5",
    "surface": "#FFFFFF",
    "primary": "#FF69B4",
    "secondary": "#87CEEB",
    "accent": "#FFD700",
    "ink": "#4A4A4A",
    "muted": "#FFB3D9",
    "border": "#FFB3D9",
    "focus": "#FF69B4",
    "error": "#FF4466",
    "success": "#88DD88",
    "white": "#FFFFFF",
    "pastel1": "#FFB3D9",
    "pastel2": "#B3D9FF",
    "pastel3": "#D9FFB3",
    "pastel4": "#FFF3B3",
    "pastel5": "#E6B3FF",
    "pastel6": "#FFD9B3",
    "character": "#FF69B4"
  },
  "font": {
    "heading": "\"Nunito\", \"Quicksand\", \"Fredoka One\", sans-serif",
    "body": "\"Nunito\", \"Quicksand\", sans-serif",
    "mono": "\"Fira Code\", monospace",
    "weight": {
      "normal": 500,
      "medium": 600,
      "bold": 800
    }
  },
  "motion": {
    "duration": "300ms",
    "easing": "cubic-bezier(0.34, 1.56, 0.64, 1)"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 2px;
  --ds-border-color: #FFB3D9;
  --ds-shadow-default: 0 4px 12px rgba(255,179,217,0.3);
  --ds-shadow-hover: 0 6px 16px rgba(255,179,217,0.4);
  --ds-radius-sm: 16px;
  --ds-radius-md: 24px;
  --ds-radius-lg: 32px;
  --ds-radius-xl: 48px;
  --ds-radius-pill: 9999px;
  --ds-color-bg: #FFF0F5;
  --ds-color-surface: #FFFFFF;
  --ds-color-primary: #FF69B4;
  --ds-color-secondary: #87CEEB;
  --ds-color-accent: #FFD700;
  --ds-color-ink: #4A4A4A;
  --ds-color-muted: #FFB3D9;
  --ds-color-border: #FFB3D9;
  --ds-color-focus: #FF69B4;
  --ds-color-error: #FF4466;
  --ds-color-success: #88DD88;
  --ds-color-white: #FFFFFF;
  --ds-color-pastel1: #FFB3D9;
  --ds-color-pastel2: #B3D9FF;
  --ds-color-pastel3: #D9FFB3;
  --ds-color-pastel4: #FFF3B3;
  --ds-color-pastel5: #E6B3FF;
  --ds-color-pastel6: #FFD9B3;
  --ds-color-character: #FF69B4;
  --ds-font-heading: "Nunito", "Quicksand", "Fredoka One", sans-serif;
  --ds-font-body: "Nunito", "Quicksand", sans-serif;
  --ds-font-mono: "Fira Code", monospace;
  --ds-font-weight-normal: 500;
  --ds-font-weight-medium: 600;
  --ds-font-weight-bold: 800;
  --ds-motion-duration: 300ms;
  --ds-motion-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FFF0F5",
            "surface": "#FFFFFF",
            "primary": "#FF69B4",
            "secondary": "#87CEEB",
            "accent": "#FFD700",
            "ink": "#4A4A4A",
            "muted": "#FFB3D9",
            "border": "#FFB3D9",
            "focus": "#FF69B4",
            "error": "#FF4466",
            "success": "#88DD88",
            "white": "#FFFFFF",
            "pastel1": "#FFB3D9",
            "pastel2": "#B3D9FF",
            "pastel3": "#D9FFB3",
            "pastel4": "#FFF3B3",
            "pastel5": "#E6B3FF",
            "pastel6": "#FFD9B3",
            "character": "#FF69B4"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-default": "0 4px 12px rgba(255,179,217,0.3)",
            "ds-hover": "0 6px 16px rgba(255,179,217,0.4)"
      },
      borderRadius: {
            "ds-sm": "16px",
            "ds-md": "24px",
            "ds-lg": "32px",
            "ds-xl": "48px",
            "ds-pill": "9999px"
      },
      fontFamily: {
            "heading": [
                  "\"Nunito\", \"Quicksand\", \"Fredoka One\", sans-serif"
            ],
            "body": [
                  "\"Nunito\", \"Quicksand\", sans-serif"
            ],
            "mono": [
                  "\"Fira Code\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 500,
            "ds-medium": 600,
            "ds-bold": 800
      },
      transitionDuration: {
            "ds": "300ms"
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
  font-weight: var(--ds-font-weight-bold, 800);
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
