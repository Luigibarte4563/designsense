# 3D / Isometric Style Preset

## Signature Traits
Isometric illustrations and 3D objects, dimensional depth

## Do
- Three-tone shading (top, side, dark side)
- Isometric grid (30° angles)
- 3D objects with consistent lighting
- Layered depth with shadows
- Technical/clean aesthetic
- Perspective-free projection

## Don't
- Don't use perspective (vanishing points)
- Don't use single-tone shading
- Don't use inconsistent light angles
- Don't mix 2D and 3D elements

## Accessibility Watch-outs
- **3D shading**: ensure text contrast on all faces
- **Focus**: 3px solid with offset
- **Isometric grids**: decorative only
- **Depth perception**: not required for function

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "0px",
    "color": "transparent"
  },
  "shadow": {
    "default": "4px 4px 8px rgba(0,0,0,0.15), 8px 8px 16px rgba(0,0,0,0.1), 12px 12px 24px rgba(0,0,0,0.05)",
    "hover": "6px 6px 12px rgba(0,0,0,0.2), 12px 12px 24px rgba(0,0,0,0.15), 18px 18px 36px rgba(0,0,0,0.1)",
    "iso": "10px 10px 20px rgba(0,0,0,0.2), 20px 20px 40px rgba(0,0,0,0.15)"
  },
  "radius": {
    "sm": "4px",
    "md": "8px",
    "lg": "12px"
  },
  "color": {
    "bg": "#F0F4F8",
    "surface": "#FFFFFF",
    "top": "#FFFFFF",
    "side": "#E0E8F0",
    "darkSide": "#C0D0E0",
    "primary": "#4A90E2",
    "secondary": "#7ED321",
    "accent": "#F5A623",
    "ink": "#2D3E50",
    "muted": "#8A9BA8",
    "border": "#D0D8E0",
    "focus": "#4A90E2",
    "error": "#D0021B",
    "success": "#7ED321",
    "white": "#FFFFFF",
    "ground": "#E0E8F0",
    "grid": "rgba(74,144,226,0.1)"
  },
  "font": {
    "heading": "\"Inter\", \"SF Pro Display\", sans-serif",
    "body": "\"Inter\", \"SF Pro Text\", sans-serif",
    "mono": "\"JetBrains Mono\", monospace",
    "weight": {
      "normal": 400,
      "medium": 500,
      "bold": 600
    }
  },
  "motion": {
    "duration": "300ms",
    "easing": "cubic-bezier(0.4, 0, 0.2, 1)"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 0px;
  --ds-border-color: transparent;
  --ds-shadow-default: 4px 4px 8px rgba(0,0,0,0.15), 8px 8px 16px rgba(0,0,0,0.1), 12px 12px 24px rgba(0,0,0,0.05);
  --ds-shadow-hover: 6px 6px 12px rgba(0,0,0,0.2), 12px 12px 24px rgba(0,0,0,0.15), 18px 18px 36px rgba(0,0,0,0.1);
  --ds-shadow-iso: 10px 10px 20px rgba(0,0,0,0.2), 20px 20px 40px rgba(0,0,0,0.15);
  --ds-radius-sm: 4px;
  --ds-radius-md: 8px;
  --ds-radius-lg: 12px;
  --ds-color-bg: #F0F4F8;
  --ds-color-surface: #FFFFFF;
  --ds-color-top: #FFFFFF;
  --ds-color-side: #E0E8F0;
  --ds-color-darkSide: #C0D0E0;
  --ds-color-primary: #4A90E2;
  --ds-color-secondary: #7ED321;
  --ds-color-accent: #F5A623;
  --ds-color-ink: #2D3E50;
  --ds-color-muted: #8A9BA8;
  --ds-color-border: #D0D8E0;
  --ds-color-focus: #4A90E2;
  --ds-color-error: #D0021B;
  --ds-color-success: #7ED321;
  --ds-color-white: #FFFFFF;
  --ds-color-ground: #E0E8F0;
  --ds-color-grid: rgba(74,144,226,0.1);
  --ds-font-heading: "Inter", "SF Pro Display", sans-serif;
  --ds-font-body: "Inter", "SF Pro Text", sans-serif;
  --ds-font-mono: "JetBrains Mono", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-medium: 500;
  --ds-font-weight-bold: 600;
  --ds-motion-duration: 300ms;
  --ds-motion-easing: cubic-bezier(0.4, 0, 0.2, 1);
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#F0F4F8",
            "surface": "#FFFFFF",
            "top": "#FFFFFF",
            "side": "#E0E8F0",
            "darkSide": "#C0D0E0",
            "primary": "#4A90E2",
            "secondary": "#7ED321",
            "accent": "#F5A623",
            "ink": "#2D3E50",
            "muted": "#8A9BA8",
            "border": "#D0D8E0",
            "focus": "#4A90E2",
            "error": "#D0021B",
            "success": "#7ED321",
            "white": "#FFFFFF",
            "ground": "#E0E8F0",
            "grid": "rgba(74,144,226,0.1)"
      } },
      borderWidth: {
            "ds": "0px"
      },
      boxShadow: {
            "ds-default": "4px 4px 8px rgba(0,0,0,0.15), 8px 8px 16px rgba(0,0,0,0.1), 12px 12px 24px rgba(0,0,0,0.05)",
            "ds-hover": "6px 6px 12px rgba(0,0,0,0.2), 12px 12px 24px rgba(0,0,0,0.15), 18px 18px 36px rgba(0,0,0,0.1)",
            "ds-iso": "10px 10px 20px rgba(0,0,0,0.2), 20px 20px 40px rgba(0,0,0,0.15)"
      },
      borderRadius: {
            "ds-sm": "4px",
            "ds-md": "8px",
            "ds-lg": "12px"
      },
      fontFamily: {
            "heading": [
                  "\"Inter\", \"SF Pro Display\", sans-serif"
            ],
            "body": [
                  "\"Inter\", \"SF Pro Text\", sans-serif"
            ],
            "mono": [
                  "\"JetBrains Mono\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-medium": 500,
            "ds-bold": 600
      },
      transitionDuration: {
            "ds": "300ms"
      },
      transitionTimingFunction: {
            "ds": "cubic-bezier(0.4, 0, 0.2, 1)"
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
