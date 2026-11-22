# Aurora / Gradient Mesh Style Preset

## Signature Traits
Blurred multicolor gradients behind clean content

## Do
- Use 3-5 color stops in mesh gradient
- Blur mesh heavily (60-100px) behind content
- Keep content surfaces semi-transparent
- White/light typography on dark mesh
- Subtle animation on mesh (slow drift)

## Don't
- Don't use sharp/unblurred gradients
- Don't put dark text on light mesh areas
- Don't use too many colors (max 5)
- Don't animate mesh too fast

## Accessibility Watch-outs
- **Solid opaque background behind text (min 85% opacity)**: 
- **Focus ring visible on all mesh backgrounds**: 
- **Reduced motion**: freeze mesh animation
- **Test contrast at every viewport position**: 

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "1px",
    "color": "rgba(255,255,255,0.2)"
  },
  "shadow": {
    "default": "0 4px 24px rgba(0,0,0,0.1)",
    "hover": "0 8px 32px rgba(0,0,0,0.15)",
    "glow": "0 0 60px rgba(100,100,255,0.3)"
  },
  "radius": {
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "xl": "32px"
  },
  "color": {
    "bg": "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
    "surface": "rgba(255,255,255,0.1)",
    "surfaceStrong": "rgba(255,255,255,0.15)",
    "border": "rgba(255,255,255,0.2)",
    "primary": "#FFFFFF",
    "secondary": "rgba(255,255,255,0.9)",
    "accent": "#FFD700",
    "ink": "#1A1A2E",
    "muted": "rgba(255,255,255,0.7)",
    "focus": "#FFD700",
    "error": "#FF6B6B",
    "success": "#4ADE80",
    "white": "#FFFFFF",
    "mesh1": "rgba(102, 126, 234, 0.4)",
    "mesh2": "rgba(118, 75, 162, 0.4)",
    "mesh3": "rgba(240, 147, 251, 0.4)"
  },
  "font": {
    "heading": "\"Space Grotesk\", \"Inter\", sans-serif",
    "body": "\"Inter\", sans-serif",
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
  },
  "blur": {
    "default": "30px",
    "mesh": "80px"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 1px;
  --ds-border-color: rgba(255,255,255,0.2);
  --ds-shadow-default: 0 4px 24px rgba(0,0,0,0.1);
  --ds-shadow-hover: 0 8px 32px rgba(0,0,0,0.15);
  --ds-shadow-glow: 0 0 60px rgba(100,100,255,0.3);
  --ds-radius-sm: 8px;
  --ds-radius-md: 16px;
  --ds-radius-lg: 24px;
  --ds-radius-xl: 32px;
  --ds-color-bg: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  --ds-color-surface: rgba(255,255,255,0.1);
  --ds-color-surfaceStrong: rgba(255,255,255,0.15);
  --ds-color-border: rgba(255,255,255,0.2);
  --ds-color-primary: #FFFFFF;
  --ds-color-secondary: rgba(255,255,255,0.9);
  --ds-color-accent: #FFD700;
  --ds-color-ink: #1A1A2E;
  --ds-color-muted: rgba(255,255,255,0.7);
  --ds-color-focus: #FFD700;
  --ds-color-error: #FF6B6B;
  --ds-color-success: #4ADE80;
  --ds-color-white: #FFFFFF;
  --ds-color-mesh1: rgba(102, 126, 234, 0.4);
  --ds-color-mesh2: rgba(118, 75, 162, 0.4);
  --ds-color-mesh3: rgba(240, 147, 251, 0.4);
  --ds-font-heading: "Space Grotesk", "Inter", sans-serif;
  --ds-font-body: "Inter", sans-serif;
  --ds-font-mono: "JetBrains Mono", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-medium: 500;
  --ds-font-weight-bold: 600;
  --ds-motion-duration: 300ms;
  --ds-motion-easing: cubic-bezier(0.4, 0, 0.2, 1);
  --ds-blur-default: 30px;
  --ds-blur-mesh: 80px;
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
            "surface": "rgba(255,255,255,0.1)",
            "surfaceStrong": "rgba(255,255,255,0.15)",
            "border": "rgba(255,255,255,0.2)",
            "primary": "#FFFFFF",
            "secondary": "rgba(255,255,255,0.9)",
            "accent": "#FFD700",
            "ink": "#1A1A2E",
            "muted": "rgba(255,255,255,0.7)",
            "focus": "#FFD700",
            "error": "#FF6B6B",
            "success": "#4ADE80",
            "white": "#FFFFFF",
            "mesh1": "rgba(102, 126, 234, 0.4)",
            "mesh2": "rgba(118, 75, 162, 0.4)",
            "mesh3": "rgba(240, 147, 251, 0.4)"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 4px 24px rgba(0,0,0,0.1)",
            "ds-hover": "0 8px 32px rgba(0,0,0,0.15)",
            "ds-glow": "0 0 60px rgba(100,100,255,0.3)"
      },
      borderRadius: {
            "ds-sm": "8px",
            "ds-md": "16px",
            "ds-lg": "24px",
            "ds-xl": "32px"
      },
      fontFamily: {
            "heading": [
                  "\"Space Grotesk\", \"Inter\", sans-serif"
            ],
            "body": [
                  "\"Inter\", sans-serif"
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
