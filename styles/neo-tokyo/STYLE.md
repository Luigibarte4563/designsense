# Neo-Tokyo / Anime Style Preset

## Signature Traits
Vivid color, manga-influenced layouts, dynamic energy

## Do
- High saturation: magenta, cyan, yellow
- Dark backgrounds with neon accents
- Speed lines and motion effects
- Manga-style panels and layouts
- Dynamic, energetic compositions
- Japanese text as design element

## Don't
- Don't use muted colors
- Don't use static layouts
- Don't skip the energy/dynamism
- Don't use serif fonts

## Accessibility Watch-outs
- **Dark bg + neon = test contrast**: 
- **Focus**: 3px solid cyan with offset
- **Speed lines**: respect reduced motion
- **Japanese text**: provide translation

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "2px",
    "color": "#FF0080"
  },
  "shadow": {
    "default": "0 0 20px rgba(255,0,128,0.4)",
    "hover": "0 0 30px rgba(0,255,255,0.5)",
    "speed": "8px 0 0 #00FFFF, -8px 0 0 #FF0080"
  },
  "radius": {
    "sm": "4px",
    "md": "8px",
    "lg": "12px",
    "sharp": "0px"
  },
  "color": {
    "bg": "#0A0A1A",
    "surface": "#12122A",
    "primary": "#FF0080",
    "secondary": "#00FFFF",
    "accent": "#FFFF00",
    "ink": "#FFFFFF",
    "muted": "#8844AA",
    "border": "#FF0080",
    "focus": "#00FFFF",
    "error": "#FF0044",
    "success": "#00FF88",
    "white": "#FFFFFF",
    "speed": "#FF0080",
    "neon": "#00FFFF",
    "warning": "#FFAA00",
    "manga": "#FF0080"
  },
  "font": {
    "heading": "\"Noto Sans JP\", \"Orbitron\", sans-serif",
    "body": "\"Noto Sans JP\", \"Inter\", sans-serif",
    "mono": "\"JetBrains Mono\", monospace",
    "weight": {
      "normal": 400,
      "bold": 700,
      "black": 900
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
  --ds-border-width: 2px;
  --ds-border-color: #FF0080;
  --ds-shadow-default: 0 0 20px rgba(255,0,128,0.4);
  --ds-shadow-hover: 0 0 30px rgba(0,255,255,0.5);
  --ds-shadow-speed: 8px 0 0 #00FFFF, -8px 0 0 #FF0080;
  --ds-radius-sm: 4px;
  --ds-radius-md: 8px;
  --ds-radius-lg: 12px;
  --ds-radius-sharp: 0px;
  --ds-color-bg: #0A0A1A;
  --ds-color-surface: #12122A;
  --ds-color-primary: #FF0080;
  --ds-color-secondary: #00FFFF;
  --ds-color-accent: #FFFF00;
  --ds-color-ink: #FFFFFF;
  --ds-color-muted: #8844AA;
  --ds-color-border: #FF0080;
  --ds-color-focus: #00FFFF;
  --ds-color-error: #FF0044;
  --ds-color-success: #00FF88;
  --ds-color-white: #FFFFFF;
  --ds-color-speed: #FF0080;
  --ds-color-neon: #00FFFF;
  --ds-color-warning: #FFAA00;
  --ds-color-manga: #FF0080;
  --ds-font-heading: "Noto Sans JP", "Orbitron", sans-serif;
  --ds-font-body: "Noto Sans JP", "Inter", sans-serif;
  --ds-font-mono: "JetBrains Mono", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-bold: 700;
  --ds-font-weight-black: 900;
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
            "bg": "#0A0A1A",
            "surface": "#12122A",
            "primary": "#FF0080",
            "secondary": "#00FFFF",
            "accent": "#FFFF00",
            "ink": "#FFFFFF",
            "muted": "#8844AA",
            "border": "#FF0080",
            "focus": "#00FFFF",
            "error": "#FF0044",
            "success": "#00FF88",
            "white": "#FFFFFF",
            "speed": "#FF0080",
            "neon": "#00FFFF",
            "warning": "#FFAA00",
            "manga": "#FF0080"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-default": "0 0 20px rgba(255,0,128,0.4)",
            "ds-hover": "0 0 30px rgba(0,255,255,0.5)",
            "ds-speed": "8px 0 0 #00FFFF, -8px 0 0 #FF0080"
      },
      borderRadius: {
            "ds-sm": "4px",
            "ds-md": "8px",
            "ds-lg": "12px",
            "ds-sharp": "0px"
      },
      fontFamily: {
            "heading": [
                  "\"Noto Sans JP\", \"Orbitron\", sans-serif"
            ],
            "body": [
                  "\"Noto Sans JP\", \"Inter\", sans-serif"
            ],
            "mono": [
                  "\"JetBrains Mono\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-bold": 700,
            "ds-black": 900
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
