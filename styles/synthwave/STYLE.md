# Synthwave / Retrowave Style Preset

## Signature Traits
Neon sunsets, grids, dark purple backgrounds

## Do
- Dark purple/blue gradient backgrounds
- Neon pink/cyan glow effects
- Perspective grid floors
- Sunset gradients with orange/pink
- Palm tree silhouettes
- Scanline overlays
- Retro-futuristic typography

## Don't
- Don't use light backgrounds
- Don't use pastel colors
- Don't skip the neon glow
- Don't use rounded UI elements

## Accessibility Watch-outs
- **Dark mode default — ensure light text contrast**: 
- **Focus**: 3px solid cyan with offset
- **Neon glow**: respect reduced motion
- **Grid**: low opacity, behind content only

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "2px",
    "color": "#FF00FF"
  },
  "shadow": {
    "default": "0 0 20px rgba(255,0,255,0.5)",
    "hover": "0 0 30px rgba(0,255,255,0.6)"
  },
  "radius": {
    "sm": "4px",
    "md": "8px",
    "lg": "12px"
  },
  "color": {
    "bg": "linear-gradient(180deg, #1A002E 0%, #16213E 50%, #0F3460 100%)",
    "surface": "rgba(255,255,255,0.03)",
    "primary": "#FF00FF",
    "secondary": "#00FFFF",
    "accent": "#FFD700",
    "ink": "#FFFFFF",
    "muted": "#8A2BE2",
    "border": "#FF00FF",
    "focus": "#00FFFF",
    "error": "#FF0000",
    "success": "#00FF00",
    "white": "#FFFFFF",
    "grid": "rgba(255,0,255,0.15)",
    "sun": "#FF6600",
    "palm": "#0F3460"
  },
  "font": {
    "heading": "\"Orbitron\", \"Rajdhani\", sans-serif",
    "body": "\"Share Tech Mono\", monospace",
    "mono": "\"Share Tech Mono\", monospace",
    "weight": {
      "normal": 400,
      "bold": 700
    }
  },
  "motion": {
    "duration": "400ms",
    "easing": "ease-in-out"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 2px;
  --ds-border-color: #FF00FF;
  --ds-shadow-default: 0 0 20px rgba(255,0,255,0.5);
  --ds-shadow-hover: 0 0 30px rgba(0,255,255,0.6);
  --ds-radius-sm: 4px;
  --ds-radius-md: 8px;
  --ds-radius-lg: 12px;
  --ds-color-bg: linear-gradient(180deg, #1A002E 0%, #16213E 50%, #0F3460 100%);
  --ds-color-surface: rgba(255,255,255,0.03);
  --ds-color-primary: #FF00FF;
  --ds-color-secondary: #00FFFF;
  --ds-color-accent: #FFD700;
  --ds-color-ink: #FFFFFF;
  --ds-color-muted: #8A2BE2;
  --ds-color-border: #FF00FF;
  --ds-color-focus: #00FFFF;
  --ds-color-error: #FF0000;
  --ds-color-success: #00FF00;
  --ds-color-white: #FFFFFF;
  --ds-color-grid: rgba(255,0,255,0.15);
  --ds-color-sun: #FF6600;
  --ds-color-palm: #0F3460;
  --ds-font-heading: "Orbitron", "Rajdhani", sans-serif;
  --ds-font-body: "Share Tech Mono", monospace;
  --ds-font-mono: "Share Tech Mono", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-bold: 700;
  --ds-motion-duration: 400ms;
  --ds-motion-easing: ease-in-out;
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "linear-gradient(180deg, #1A002E 0%, #16213E 50%, #0F3460 100%)",
            "surface": "rgba(255,255,255,0.03)",
            "primary": "#FF00FF",
            "secondary": "#00FFFF",
            "accent": "#FFD700",
            "ink": "#FFFFFF",
            "muted": "#8A2BE2",
            "border": "#FF00FF",
            "focus": "#00FFFF",
            "error": "#FF0000",
            "success": "#00FF00",
            "white": "#FFFFFF",
            "grid": "rgba(255,0,255,0.15)",
            "sun": "#FF6600",
            "palm": "#0F3460"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-default": "0 0 20px rgba(255,0,255,0.5)",
            "ds-hover": "0 0 30px rgba(0,255,255,0.6)"
      },
      borderRadius: {
            "ds-sm": "4px",
            "ds-md": "8px",
            "ds-lg": "12px"
      },
      fontFamily: {
            "heading": [
                  "\"Orbitron\", \"Rajdhani\", sans-serif"
            ],
            "body": [
                  "\"Share Tech Mono\", monospace"
            ],
            "mono": [
                  "\"Share Tech Mono\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-bold": 700
      },
      transitionDuration: {
            "ds": "400ms"
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
