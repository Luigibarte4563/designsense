# Techno / Glitch Style Preset

## Signature Traits
Distorted, scanline, digital-artifact effects

## Do
- RGB channel shift on hover
- Scanline overlays
- Digital noise texture
- Glitch text animations
- Corrupted data aesthetic
- Fast, jittery animations
- Monospace everywhere

## Don't
- Don't use smooth animations
- Don't use organic shapes
- Don't use warm colors
- Don't skip the glitch effects

## Accessibility Watch-outs
- **CRITICAL**: Animations must respect prefers-reduced-motion
- **Provide non-glitch alternative**: 
- **Focus**: 3px solid cyan with offset
- **High contrast text required**: 
- **Noise**: low opacity only

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "2px",
    "color": "#FF00FF"
  },
  "shadow": {
    "default": "0 0 10px rgba(255,0,255,0.3)",
    "hover": "0 0 20px rgba(0,255,255,0.4)",
    "glitch": "3px 0 0 #00FFFF, -3px 0 0 #FF00FF"
  },
  "radius": {
    "sm": "0px",
    "md": "4px",
    "lg": "8px"
  },
  "color": {
    "bg": "#000000",
    "surface": "#0A0A0A",
    "primary": "#FF00FF",
    "secondary": "#00FFFF",
    "accent": "#FFFF00",
    "ink": "#FFFFFF",
    "muted": "#444444",
    "border": "#FF00FF",
    "focus": "#00FFFF",
    "error": "#FF0000",
    "success": "#00FF00",
    "white": "#FFFFFF",
    "noise": "rgba(255,255,255,0.02)",
    "scanline": "rgba(0,0,0,0.1)",
    "rgbShift": "rgba(255,0,255,0.5)"
  },
  "font": {
    "heading": "\"JetBrains Mono\", \"Share Tech Mono\", monospace",
    "body": "\"JetBrains Mono\", \"Share Tech Mono\", monospace",
    "mono": "\"JetBrains Mono\", \"Share Tech Mono\", monospace",
    "weight": {
      "normal": 400,
      "bold": 700
    }
  },
  "motion": {
    "duration": "50ms",
    "easing": "steps(2)"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 2px;
  --ds-border-color: #FF00FF;
  --ds-shadow-default: 0 0 10px rgba(255,0,255,0.3);
  --ds-shadow-hover: 0 0 20px rgba(0,255,255,0.4);
  --ds-shadow-glitch: 3px 0 0 #00FFFF, -3px 0 0 #FF00FF;
  --ds-radius-sm: 0px;
  --ds-radius-md: 4px;
  --ds-radius-lg: 8px;
  --ds-color-bg: #000000;
  --ds-color-surface: #0A0A0A;
  --ds-color-primary: #FF00FF;
  --ds-color-secondary: #00FFFF;
  --ds-color-accent: #FFFF00;
  --ds-color-ink: #FFFFFF;
  --ds-color-muted: #444444;
  --ds-color-border: #FF00FF;
  --ds-color-focus: #00FFFF;
  --ds-color-error: #FF0000;
  --ds-color-success: #00FF00;
  --ds-color-white: #FFFFFF;
  --ds-color-noise: rgba(255,255,255,0.02);
  --ds-color-scanline: rgba(0,0,0,0.1);
  --ds-color-rgbShift: rgba(255,0,255,0.5);
  --ds-font-heading: "JetBrains Mono", "Share Tech Mono", monospace;
  --ds-font-body: "JetBrains Mono", "Share Tech Mono", monospace;
  --ds-font-mono: "JetBrains Mono", "Share Tech Mono", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-bold: 700;
  --ds-motion-duration: 50ms;
  --ds-motion-easing: steps(2);
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#000000",
            "surface": "#0A0A0A",
            "primary": "#FF00FF",
            "secondary": "#00FFFF",
            "accent": "#FFFF00",
            "ink": "#FFFFFF",
            "muted": "#444444",
            "border": "#FF00FF",
            "focus": "#00FFFF",
            "error": "#FF0000",
            "success": "#00FF00",
            "white": "#FFFFFF",
            "noise": "rgba(255,255,255,0.02)",
            "scanline": "rgba(0,0,0,0.1)",
            "rgbShift": "rgba(255,0,255,0.5)"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-default": "0 0 10px rgba(255,0,255,0.3)",
            "ds-hover": "0 0 20px rgba(0,255,255,0.4)",
            "ds-glitch": "3px 0 0 #00FFFF, -3px 0 0 #FF00FF"
      },
      borderRadius: {
            "ds-sm": "0px",
            "ds-md": "4px",
            "ds-lg": "8px"
      },
      fontFamily: {
            "heading": [
                  "\"JetBrains Mono\", \"Share Tech Mono\", monospace"
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
            "ds": "50ms"
      },
      transitionTimingFunction: {
            "ds": "steps(2)"
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
