# Space / Cosmic Style Preset

## Signature Traits
Deep gradients, stars, glowing elements, vastness

## Do
- Deep space gradients (dark blue/purple/black)
- Star field backgrounds
- Nebula glow effects
- Slow, majestic animations
- Glowing accent elements
- Vast whitespace

## Don't
- Don't use bright/light backgrounds
- Don't use saturated primary colors
- Don't use fast animations
- Don't clutter the void

## Accessibility Watch-outs
- **Dark background — light text required**: 
- **Focus**: 3px solid accent gold with offset
- **Slow animations**: respect reduced motion
- **Star fields**: low opacity, behind content

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "1px",
    "color": "rgba(255,255,255,0.1)"
  },
  "shadow": {
    "default": "0 0 40px rgba(100,100,255,0.2)",
    "hover": "0 0 60px rgba(255,100,255,0.3)",
    "glow": "0 0 80px rgba(100,100,255,0.4)"
  },
  "radius": {
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "xl": "48px"
  },
  "color": {
    "bg": "linear-gradient(180deg, #050510 0%, #100520 50%, #051020 100%)",
    "surface": "rgba(20,20,40,0.6)",
    "primary": "#6688FF",
    "secondary": "#FF66AA",
    "accent": "#FFAA00",
    "ink": "#FFFFFF",
    "muted": "#666688",
    "border": "rgba(255,255,255,0.1)",
    "focus": "#FF66AA",
    "error": "#FF4466",
    "success": "#44FF88",
    "white": "#FFFFFF",
    "star": "#FFFFFF",
    "nebula1": "rgba(102,136,255,0.3)",
    "nebula2": "rgba(255,102,170,0.3)",
    "nebula3": "rgba(255,170,0,0.3)"
  },
  "font": {
    "heading": "\"Orbitron\", \"Exo 2\", sans-serif",
    "body": "\"Inter\", \"Exo 2\", sans-serif",
    "mono": "\"JetBrains Mono\", monospace",
    "weight": {
      "light": 300,
      "normal": 400,
      "bold": 600
    }
  },
  "motion": {
    "duration": "600ms",
    "easing": "ease-in-out"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 1px;
  --ds-border-color: rgba(255,255,255,0.1);
  --ds-shadow-default: 0 0 40px rgba(100,100,255,0.2);
  --ds-shadow-hover: 0 0 60px rgba(255,100,255,0.3);
  --ds-shadow-glow: 0 0 80px rgba(100,100,255,0.4);
  --ds-radius-sm: 8px;
  --ds-radius-md: 16px;
  --ds-radius-lg: 24px;
  --ds-radius-xl: 48px;
  --ds-color-bg: linear-gradient(180deg, #050510 0%, #100520 50%, #051020 100%);
  --ds-color-surface: rgba(20,20,40,0.6);
  --ds-color-primary: #6688FF;
  --ds-color-secondary: #FF66AA;
  --ds-color-accent: #FFAA00;
  --ds-color-ink: #FFFFFF;
  --ds-color-muted: #666688;
  --ds-color-border: rgba(255,255,255,0.1);
  --ds-color-focus: #FF66AA;
  --ds-color-error: #FF4466;
  --ds-color-success: #44FF88;
  --ds-color-white: #FFFFFF;
  --ds-color-star: #FFFFFF;
  --ds-color-nebula1: rgba(102,136,255,0.3);
  --ds-color-nebula2: rgba(255,102,170,0.3);
  --ds-color-nebula3: rgba(255,170,0,0.3);
  --ds-font-heading: "Orbitron", "Exo 2", sans-serif;
  --ds-font-body: "Inter", "Exo 2", sans-serif;
  --ds-font-mono: "JetBrains Mono", monospace;
  --ds-font-weight-light: 300;
  --ds-font-weight-normal: 400;
  --ds-font-weight-bold: 600;
  --ds-motion-duration: 600ms;
  --ds-motion-easing: ease-in-out;
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "linear-gradient(180deg, #050510 0%, #100520 50%, #051020 100%)",
            "surface": "rgba(20,20,40,0.6)",
            "primary": "#6688FF",
            "secondary": "#FF66AA",
            "accent": "#FFAA00",
            "ink": "#FFFFFF",
            "muted": "#666688",
            "border": "rgba(255,255,255,0.1)",
            "focus": "#FF66AA",
            "error": "#FF4466",
            "success": "#44FF88",
            "white": "#FFFFFF",
            "star": "#FFFFFF",
            "nebula1": "rgba(102,136,255,0.3)",
            "nebula2": "rgba(255,102,170,0.3)",
            "nebula3": "rgba(255,170,0,0.3)"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 0 40px rgba(100,100,255,0.2)",
            "ds-hover": "0 0 60px rgba(255,100,255,0.3)",
            "ds-glow": "0 0 80px rgba(100,100,255,0.4)"
      },
      borderRadius: {
            "ds-sm": "8px",
            "ds-md": "16px",
            "ds-lg": "24px",
            "ds-xl": "48px"
      },
      fontFamily: {
            "heading": [
                  "\"Orbitron\", \"Exo 2\", sans-serif"
            ],
            "body": [
                  "\"Inter\", \"Exo 2\", sans-serif"
            ],
            "mono": [
                  "\"JetBrains Mono\", monospace"
            ]
      },
      fontWeight: {
            "ds-light": 300,
            "ds-normal": 400,
            "ds-bold": 600
      },
      transitionDuration: {
            "ds": "600ms"
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
