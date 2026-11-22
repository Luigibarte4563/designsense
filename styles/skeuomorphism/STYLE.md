# Skeuomorphism Style Preset

## Signature Traits
Realistic textures, gradients, and depth mimicking physical objects

## Do
- Use realistic gradients for 3D form
- Add inner shadows for pressed/inset states
- Apply subtle noise texture on surfaces
- Use highlights and shadows for physical realism
- Match real-world material behavior

## Don't
- Don't use flat colors without depth cues
- Don't skip pressed/active states
- Don't use uniform lighting — follow a light source
- Don't overdo textures — keep it subtle

## Accessibility Watch-outs
- **Gradients must maintain 4.5**: 1 contrast at all points
- **Focus ring**: 3px solid with offset (visible on gradients)
- **Textures don't impair text readability**: 
- **Touch targets larger to compensate for visual complexity**: 

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "2px",
    "color": "rgba(0,0,0,0.2)"
  },
  "shadow": {
    "default": "0 4px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
    "hover": "0 6px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
    "active": "inset 0 2px 6px rgba(0,0,0,0.3)",
    "pressed": "inset 0 3px 8px rgba(0,0,0,0.4)"
  },
  "radius": {
    "sm": "6px",
    "md": "12px",
    "lg": "16px",
    "xl": "24px"
  },
  "color": {
    "bg": "linear-gradient(145deg, #E0E0E0 0%, #F5F5F5 50%, #E0E0E0 100%)",
    "surface": "linear-gradient(145deg, #FFFFFF 0%, #F0F0F0 100%)",
    "primary": "linear-gradient(145deg, #007AFF 0%, #0051D5 100%)",
    "secondary": "linear-gradient(145deg, #5856D6 0%, #3A38A0 100%)",
    "accent": "linear-gradient(145deg, #FF2D55 0%, #CC0033 100%)",
    "ink": "#1C1C1E",
    "muted": "#8E8E93",
    "border": "rgba(0,0,0,0.15)",
    "focus": "#007AFF",
    "error": "#FF3B30",
    "success": "#34C759",
    "white": "#FFFFFF",
    "highlight": "rgba(255,255,255,0.4)",
    "shadow": "rgba(0,0,0,0.3)"
  },
  "font": {
    "heading": "\"Helvetica Neue\", Helvetica, sans-serif",
    "body": "\"Helvetica Neue\", Helvetica, sans-serif",
    "mono": "Menlo, monospace",
    "weight": {
      "normal": 400,
      "medium": 500,
      "bold": 700
    }
  },
  "motion": {
    "duration": "300ms",
    "easing": "cubic-bezier(0.25, 0.1, 0.25, 1)"
  },
  "texture": {
    "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
    "gloss": "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 50%)"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 2px;
  --ds-border-color: rgba(0,0,0,0.2);
  --ds-shadow-default: 0 4px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2);
  --ds-shadow-hover: 0 6px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3);
  --ds-shadow-active: inset 0 2px 6px rgba(0,0,0,0.3);
  --ds-shadow-pressed: inset 0 3px 8px rgba(0,0,0,0.4);
  --ds-radius-sm: 6px;
  --ds-radius-md: 12px;
  --ds-radius-lg: 16px;
  --ds-radius-xl: 24px;
  --ds-color-bg: linear-gradient(145deg, #E0E0E0 0%, #F5F5F5 50%, #E0E0E0 100%);
  --ds-color-surface: linear-gradient(145deg, #FFFFFF 0%, #F0F0F0 100%);
  --ds-color-primary: linear-gradient(145deg, #007AFF 0%, #0051D5 100%);
  --ds-color-secondary: linear-gradient(145deg, #5856D6 0%, #3A38A0 100%);
  --ds-color-accent: linear-gradient(145deg, #FF2D55 0%, #CC0033 100%);
  --ds-color-ink: #1C1C1E;
  --ds-color-muted: #8E8E93;
  --ds-color-border: rgba(0,0,0,0.15);
  --ds-color-focus: #007AFF;
  --ds-color-error: #FF3B30;
  --ds-color-success: #34C759;
  --ds-color-white: #FFFFFF;
  --ds-color-highlight: rgba(255,255,255,0.4);
  --ds-color-shadow: rgba(0,0,0,0.3);
  --ds-font-heading: "Helvetica Neue", Helvetica, sans-serif;
  --ds-font-body: "Helvetica Neue", Helvetica, sans-serif;
  --ds-font-mono: Menlo, monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-medium: 500;
  --ds-font-weight-bold: 700;
  --ds-motion-duration: 300ms;
  --ds-motion-easing: cubic-bezier(0.25, 0.1, 0.25, 1);
  --ds-texture-noise: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  --ds-texture-gloss: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 50%);
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "linear-gradient(145deg, #E0E0E0 0%, #F5F5F5 50%, #E0E0E0 100%)",
            "surface": "linear-gradient(145deg, #FFFFFF 0%, #F0F0F0 100%)",
            "primary": "linear-gradient(145deg, #007AFF 0%, #0051D5 100%)",
            "secondary": "linear-gradient(145deg, #5856D6 0%, #3A38A0 100%)",
            "accent": "linear-gradient(145deg, #FF2D55 0%, #CC0033 100%)",
            "ink": "#1C1C1E",
            "muted": "#8E8E93",
            "border": "rgba(0,0,0,0.15)",
            "focus": "#007AFF",
            "error": "#FF3B30",
            "success": "#34C759",
            "white": "#FFFFFF",
            "highlight": "rgba(255,255,255,0.4)",
            "shadow": "rgba(0,0,0,0.3)"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-default": "0 4px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
            "ds-hover": "0 6px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
            "ds-active": "inset 0 2px 6px rgba(0,0,0,0.3)",
            "ds-pressed": "inset 0 3px 8px rgba(0,0,0,0.4)"
      },
      borderRadius: {
            "ds-sm": "6px",
            "ds-md": "12px",
            "ds-lg": "16px",
            "ds-xl": "24px"
      },
      fontFamily: {
            "heading": [
                  "\"Helvetica Neue\", Helvetica, sans-serif"
            ],
            "body": [
                  "\"Helvetica Neue\", Helvetica, sans-serif"
            ],
            "mono": [
                  "Menlo, monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-medium": 500,
            "ds-bold": 700
      },
      transitionDuration: {
            "ds": "300ms"
      },
      transitionTimingFunction: {
            "ds": "cubic-bezier(0.25, 0.1, 0.25, 1)"
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
