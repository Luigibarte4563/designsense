# Cyberpunk / Neon Style Preset

## Signature Traits
Dark base, glowing accents, glitch details, high tech low life

## Do
- Dark near-black backgrounds
- Neon pink/cyan/yellow glow effects
- Glitch text animations
- Grid backgrounds with scanlines
- High contrast: bright on dark
- Monospace fonts for data
- Glitch: respect reduced motion

## Don't
- Don't use light backgrounds
- Don't use pastel colors
- Don't skip the glow effects
- Don't use serif fonts

## Accessibility Watch-outs
- **Glow on accents only — body text high contrast**: 
- **Focus**: 3px solid cyan with offset
- **Glitch/animations**: respect reduced motion
- **Scanlines**: low opacity, behind content only

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "1px",
    "color": "#FF00FF"
  },
  "shadow": {
    "default": "0 0 20px rgba(255,0,255,0.3)",
    "hover": "0 0 30px rgba(0,255,255,0.4)",
    "glitch": "2px 0 0 #00FFFF, -2px 0 0 #FF00FF"
  },
  "radius": {
    "sm": "4px",
    "md": "8px",
    "lg": "12px"
  },
  "color": {
    "bg": "#0A0A0F",
    "surface": "#12121A",
    "primary": "#FF00FF",
    "secondary": "#00FFFF",
    "accent": "#FFFF00",
    "ink": "#FFFFFF",
    "muted": "#6B4E8C",
    "border": "#FF00FF",
    "focus": "#00FFFF",
    "error": "#FF0044",
    "success": "#00FF88",
    "white": "#FFFFFF",
    "glitch1": "#FF00FF",
    "glitch2": "#00FFFF",
    "grid": "rgba(255,0,255,0.1)",
    "scanline": "rgba(0,0,0,0.1)"
  },
  "font": {
    "heading": "\"Orbitron\", \"Rajdhani\", sans-serif",
    "body": "\"JetBrains Mono\", \"Share Tech Mono\", monospace",
    "mono": "\"JetBrains Mono\", \"Share Tech Mono\", monospace",
    "weight": {
      "normal": 400,
      "bold": 700
    }
  },
  "motion": {
    "duration": "150ms",
    "easing": "ease-out"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 1px;
  --ds-border-color: #FF00FF;
  --ds-shadow-default: 0 0 20px rgba(255,0,255,0.3);
  --ds-shadow-hover: 0 0 30px rgba(0,255,255,0.4);
  --ds-shadow-glitch: 2px 0 0 #00FFFF, -2px 0 0 #FF00FF;
  --ds-radius-sm: 4px;
  --ds-radius-md: 8px;
  --ds-radius-lg: 12px;
  --ds-color-bg: #0A0A0F;
  --ds-color-surface: #12121A;
  --ds-color-primary: #FF00FF;
  --ds-color-secondary: #00FFFF;
  --ds-color-accent: #FFFF00;
  --ds-color-ink: #FFFFFF;
  --ds-color-muted: #6B4E8C;
  --ds-color-border: #FF00FF;
  --ds-color-focus: #00FFFF;
  --ds-color-error: #FF0044;
  --ds-color-success: #00FF88;
  --ds-color-white: #FFFFFF;
  --ds-color-glitch1: #FF00FF;
  --ds-color-glitch2: #00FFFF;
  --ds-color-grid: rgba(255,0,255,0.1);
  --ds-color-scanline: rgba(0,0,0,0.1);
  --ds-font-heading: "Orbitron", "Rajdhani", sans-serif;
  --ds-font-body: "JetBrains Mono", "Share Tech Mono", monospace;
  --ds-font-mono: "JetBrains Mono", "Share Tech Mono", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-bold: 700;
  --ds-motion-duration: 150ms;
  --ds-motion-easing: ease-out;
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#0A0A0F",
            "surface": "#12121A",
            "primary": "#FF00FF",
            "secondary": "#00FFFF",
            "accent": "#FFFF00",
            "ink": "#FFFFFF",
            "muted": "#6B4E8C",
            "border": "#FF00FF",
            "focus": "#00FFFF",
            "error": "#FF0044",
            "success": "#00FF88",
            "white": "#FFFFFF",
            "glitch1": "#FF00FF",
            "glitch2": "#00FFFF",
            "grid": "rgba(255,0,255,0.1)",
            "scanline": "rgba(0,0,0,0.1)"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 0 20px rgba(255,0,255,0.3)",
            "ds-hover": "0 0 30px rgba(0,255,255,0.4)",
            "ds-glitch": "2px 0 0 #00FFFF, -2px 0 0 #FF00FF"
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
                  "\"JetBrains Mono\", \"Share Tech Mono\", monospace"
            ],
            "mono": [
                  "\"JetBrains Mono\", \"Share Tech Mono\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-bold": 700
      },
      transitionDuration: {
            "ds": "150ms"
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
