# Bento Grid Style Preset

## Signature Traits
Modular rounded tiles of varied sizes in a structured grid

## Do
- CSS Grid with varied tile spans
- Consistent border radius (12-16px)
- Subtle shadows for depth
- Tiles as content containers
- Mix tile sizes (1x1, 2x1, 1x2, 2x2)
- Consistent internal padding

## Don't
- Don't use sharp corners
- Don't use heavy shadows
- Don't mix with non-grid layouts
- Don't use too many colors per tile

## Accessibility Watch-outs
- **Focus ring visible on tile boundaries**: 
- **Grid order = tab order**: 
- **Tiles**: min 44px touch target
- **Reduced motion**: disable hover lift

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "1px",
    "color": "rgba(0,0,0,0.08)"
  },
  "shadow": {
    "default": "0 2px 8px rgba(0,0,0,0.06)",
    "hover": "0 8px 24px rgba(0,0,0,0.1)"
  },
  "radius": {
    "sm": "8px",
    "md": "12px",
    "lg": "16px",
    "xl": "24px"
  },
  "color": {
    "bg": "#F8F9FA",
    "surface": "#FFFFFF",
    "primary": "#0066CC",
    "secondary": "#6C757D",
    "accent": "#FF6B35",
    "ink": "#212529",
    "muted": "#6C757D",
    "border": "rgba(0,0,0,0.08)",
    "focus": "#0066CC",
    "error": "#DC3545",
    "success": "#28A745",
    "white": "#FFFFFF",
    "tile1": "#FFF8F0",
    "tile2": "#F0F8FF",
    "tile3": "#F5F5F5"
  },
  "font": {
    "heading": "\"Inter\", \"SF Pro Display\", sans-serif",
    "body": "\"Inter\", \"SF Pro Text\", sans-serif",
    "mono": "\"SF Mono\", monospace",
    "weight": {
      "normal": 400,
      "medium": 500,
      "bold": 600
    }
  },
  "motion": {
    "duration": "200ms",
    "easing": "cubic-bezier(0.4, 0, 0.2, 1)"
  },
  "grid": {
    "columns": 4,
    "gap": "16px",
    "tileRatio": "1:1"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 1px;
  --ds-border-color: rgba(0,0,0,0.08);
  --ds-shadow-default: 0 2px 8px rgba(0,0,0,0.06);
  --ds-shadow-hover: 0 8px 24px rgba(0,0,0,0.1);
  --ds-radius-sm: 8px;
  --ds-radius-md: 12px;
  --ds-radius-lg: 16px;
  --ds-radius-xl: 24px;
  --ds-color-bg: #F8F9FA;
  --ds-color-surface: #FFFFFF;
  --ds-color-primary: #0066CC;
  --ds-color-secondary: #6C757D;
  --ds-color-accent: #FF6B35;
  --ds-color-ink: #212529;
  --ds-color-muted: #6C757D;
  --ds-color-border: rgba(0,0,0,0.08);
  --ds-color-focus: #0066CC;
  --ds-color-error: #DC3545;
  --ds-color-success: #28A745;
  --ds-color-white: #FFFFFF;
  --ds-color-tile1: #FFF8F0;
  --ds-color-tile2: #F0F8FF;
  --ds-color-tile3: #F5F5F5;
  --ds-font-heading: "Inter", "SF Pro Display", sans-serif;
  --ds-font-body: "Inter", "SF Pro Text", sans-serif;
  --ds-font-mono: "SF Mono", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-medium: 500;
  --ds-font-weight-bold: 600;
  --ds-motion-duration: 200ms;
  --ds-motion-easing: cubic-bezier(0.4, 0, 0.2, 1);
  --ds-grid-columns: 4;
  --ds-grid-gap: 16px;
  --ds-grid-tileRatio: 1:1;
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#F8F9FA",
            "surface": "#FFFFFF",
            "primary": "#0066CC",
            "secondary": "#6C757D",
            "accent": "#FF6B35",
            "ink": "#212529",
            "muted": "#6C757D",
            "border": "rgba(0,0,0,0.08)",
            "focus": "#0066CC",
            "error": "#DC3545",
            "success": "#28A745",
            "white": "#FFFFFF",
            "tile1": "#FFF8F0",
            "tile2": "#F0F8FF",
            "tile3": "#F5F5F5"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 2px 8px rgba(0,0,0,0.06)",
            "ds-hover": "0 8px 24px rgba(0,0,0,0.1)"
      },
      borderRadius: {
            "ds-sm": "8px",
            "ds-md": "12px",
            "ds-lg": "16px",
            "ds-xl": "24px"
      },
      fontFamily: {
            "heading": [
                  "\"Inter\", \"SF Pro Display\", sans-serif"
            ],
            "body": [
                  "\"Inter\", \"SF Pro Text\", sans-serif"
            ],
            "mono": [
                  "\"SF Mono\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-medium": 500,
            "ds-bold": 600
      },
      transitionDuration: {
            "ds": "200ms"
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
