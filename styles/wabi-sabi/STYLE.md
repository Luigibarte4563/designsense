# Japanese Minimal / Wabi-Sabi Style Preset

## Signature Traits
Imperfection, calm, natural materials, asymmetry

## Do
- Embrace imperfection (asymmetry, irregularity)
- Natural materials: wood, paper, stone, bamboo
- Muted, earthy color palette
- Generous negative space (ma)
- Subtle, understated elegance
- Aging gracefully (patina, wear)

## Don't
- Don't use perfect symmetry
- Don't use bright/artificial colors
- Don't use glossy finishes
- Don't fill all space
- Don't use decorative excess

## Accessibility Watch-outs
- **Muted palette**: test contrast thoroughly
- **Focus**: 3px solid with offset
- **Irregular shapes**: ensure touch targets
- **Minimalism aids cognitive accessibility**: 

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "1px",
    "color": "#C8B8A8"
  },
  "shadow": {
    "default": "0 2px 8px rgba(0,0,0,0.04)",
    "hover": "0 4px 16px rgba(0,0,0,0.06)"
  },
  "radius": {
    "sm": "4px",
    "md": "8px",
    "lg": "12px",
    "irregular": "clip-path: polygon(15% 0, 85% 0, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0 85%, 0 15%)"
  },
  "color": {
    "bg": "#FAF8F5",
    "surface": "#FDFBF8",
    "primary": "#6B5B4A",
    "secondary": "#9A8A7A",
    "accent": "#C8A878",
    "ink": "#1A1A1A",
    "muted": "#A89888",
    "border": "#D8C8B8",
    "focus": "#6B5B4A",
    "error": "#B22222",
    "success": "#556B2F",
    "white": "#FFFFFF",
    "tatami": "#E8D8C8",
    "bamboo": "#9A8A7A",
    "stone": "#A8A8A0"
  },
  "font": {
    "heading": "\"Noto Serif JP\", \"Noto Sans JP\", sans-serif",
    "body": "\"Noto Sans JP\", \"Inter\", sans-serif",
    "mono": "\"Noto Sans Mono JP\", monospace",
    "weight": {
      "light": 300,
      "normal": 400,
      "medium": 500
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
  --ds-border-width: 1px;
  --ds-border-color: #C8B8A8;
  --ds-shadow-default: 0 2px 8px rgba(0,0,0,0.04);
  --ds-shadow-hover: 0 4px 16px rgba(0,0,0,0.06);
  --ds-radius-sm: 4px;
  --ds-radius-md: 8px;
  --ds-radius-lg: 12px;
  --ds-radius-irregular: clip-path: polygon(15% 0, 85% 0, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0 85%, 0 15%);
  --ds-color-bg: #FAF8F5;
  --ds-color-surface: #FDFBF8;
  --ds-color-primary: #6B5B4A;
  --ds-color-secondary: #9A8A7A;
  --ds-color-accent: #C8A878;
  --ds-color-ink: #1A1A1A;
  --ds-color-muted: #A89888;
  --ds-color-border: #D8C8B8;
  --ds-color-focus: #6B5B4A;
  --ds-color-error: #B22222;
  --ds-color-success: #556B2F;
  --ds-color-white: #FFFFFF;
  --ds-color-tatami: #E8D8C8;
  --ds-color-bamboo: #9A8A7A;
  --ds-color-stone: #A8A8A0;
  --ds-font-heading: "Noto Serif JP", "Noto Sans JP", sans-serif;
  --ds-font-body: "Noto Sans JP", "Inter", sans-serif;
  --ds-font-mono: "Noto Sans Mono JP", monospace;
  --ds-font-weight-light: 300;
  --ds-font-weight-normal: 400;
  --ds-font-weight-medium: 500;
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
            "bg": "#FAF8F5",
            "surface": "#FDFBF8",
            "primary": "#6B5B4A",
            "secondary": "#9A8A7A",
            "accent": "#C8A878",
            "ink": "#1A1A1A",
            "muted": "#A89888",
            "border": "#D8C8B8",
            "focus": "#6B5B4A",
            "error": "#B22222",
            "success": "#556B2F",
            "white": "#FFFFFF",
            "tatami": "#E8D8C8",
            "bamboo": "#9A8A7A",
            "stone": "#A8A8A0"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 2px 8px rgba(0,0,0,0.04)",
            "ds-hover": "0 4px 16px rgba(0,0,0,0.06)"
      },
      borderRadius: {
            "ds-sm": "4px",
            "ds-md": "8px",
            "ds-lg": "12px",
            "ds-irregular": "clip-path: polygon(15% 0, 85% 0, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0 85%, 0 15%)"
      },
      fontFamily: {
            "heading": [
                  "\"Noto Serif JP\", \"Noto Sans JP\", sans-serif"
            ],
            "body": [
                  "\"Noto Sans JP\", \"Inter\", sans-serif"
            ],
            "mono": [
                  "\"Noto Sans Mono JP\", monospace"
            ]
      },
      fontWeight: {
            "ds-light": 300,
            "ds-normal": 400,
            "ds-medium": 500
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
  font-weight: var(--ds-font-weight-bold, 400);
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
