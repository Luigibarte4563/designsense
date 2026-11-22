# Liquid Glass Style Preset

## Signature Traits
Refined fluid glass with light refraction and caustics

## Do
- Use higher transparency (15-25%) than glassmorphism
- Add subtle caustic/refraction glow on interactive elements
- Stronger backdrop blur (20-40px)
- White/light content on dark gradient backgrounds
- Animate with spring physics for fluid feel

## Don't
- Don't use on light backgrounds
- Don't use opaque surfaces
- Don't skip refraction glow on primary actions
- Don't use heavy borders

## Accessibility Watch-outs
- **Minimum 60% opaque overlay behind all text**: 
- **Solid fallback without backdrop-filter**: 
- **Focus ring**: 3px solid gold with 3px offset
- **Test thoroughly with reduced transparency**: 

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "1px",
    "color": "rgba(255,255,255,0.3)"
  },
  "shadow": {
    "default": "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)",
    "hover": "0 12px 40px rgba(0,0,0,0.16), 0 4px 12px rgba(0,0,0,0.1)",
    "refraction": "0 0 60px rgba(100,100,255,0.08)"
  },
  "radius": {
    "sm": "16px",
    "md": "24px",
    "lg": "32px",
    "xl": "48px"
  },
  "color": {
    "bg": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "surface": "rgba(255,255,255,0.15)",
    "surfaceStrong": "rgba(255,255,255,0.25)",
    "border": "rgba(255,255,255,0.3)",
    "primary": "#FFFFFF",
    "secondary": "rgba(255,255,255,0.9)",
    "accent": "#FFD700",
    "ink": "#FFFFFF",
    "muted": "rgba(255,255,255,0.7)",
    "focus": "#FFD700",
    "error": "#FF6B6B",
    "success": "#4ADE80",
    "white": "#FFFFFF",
    "caustic": "rgba(255,255,255,0.1)"
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
    "duration": "400ms",
    "easing": "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
  },
  "blur": {
    "default": "20px",
    "strong": "40px",
    "refraction": "60px"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 1px;
  --ds-border-color: rgba(255,255,255,0.3);
  --ds-shadow-default: 0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08);
  --ds-shadow-hover: 0 12px 40px rgba(0,0,0,0.16), 0 4px 12px rgba(0,0,0,0.1);
  --ds-shadow-refraction: 0 0 60px rgba(100,100,255,0.08);
  --ds-radius-sm: 16px;
  --ds-radius-md: 24px;
  --ds-radius-lg: 32px;
  --ds-radius-xl: 48px;
  --ds-color-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --ds-color-surface: rgba(255,255,255,0.15);
  --ds-color-surfaceStrong: rgba(255,255,255,0.25);
  --ds-color-border: rgba(255,255,255,0.3);
  --ds-color-primary: #FFFFFF;
  --ds-color-secondary: rgba(255,255,255,0.9);
  --ds-color-accent: #FFD700;
  --ds-color-ink: #FFFFFF;
  --ds-color-muted: rgba(255,255,255,0.7);
  --ds-color-focus: #FFD700;
  --ds-color-error: #FF6B6B;
  --ds-color-success: #4ADE80;
  --ds-color-white: #FFFFFF;
  --ds-color-caustic: rgba(255,255,255,0.1);
  --ds-font-heading: "Space Grotesk", "Inter", sans-serif;
  --ds-font-body: "Inter", sans-serif;
  --ds-font-mono: "JetBrains Mono", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-medium: 500;
  --ds-font-weight-bold: 600;
  --ds-motion-duration: 400ms;
  --ds-motion-easing: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ds-blur-default: 20px;
  --ds-blur-strong: 40px;
  --ds-blur-refraction: 60px;
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            "surface": "rgba(255,255,255,0.15)",
            "surfaceStrong": "rgba(255,255,255,0.25)",
            "border": "rgba(255,255,255,0.3)",
            "primary": "#FFFFFF",
            "secondary": "rgba(255,255,255,0.9)",
            "accent": "#FFD700",
            "ink": "#FFFFFF",
            "muted": "rgba(255,255,255,0.7)",
            "focus": "#FFD700",
            "error": "#FF6B6B",
            "success": "#4ADE80",
            "white": "#FFFFFF",
            "caustic": "rgba(255,255,255,0.1)"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)",
            "ds-hover": "0 12px 40px rgba(0,0,0,0.16), 0 4px 12px rgba(0,0,0,0.1)",
            "ds-refraction": "0 0 60px rgba(100,100,255,0.08)"
      },
      borderRadius: {
            "ds-sm": "16px",
            "ds-md": "24px",
            "ds-lg": "32px",
            "ds-xl": "48px"
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
            "ds": "400ms"
      },
      transitionTimingFunction: {
            "ds": "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
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
