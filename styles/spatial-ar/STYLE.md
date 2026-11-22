# Spatial / AR-VR UI Style Preset

## Signature Traits
Floating panels with depth, visionOS style, spatial computing

## Do
- Glass panels with depth layers
- Floating UI in 3D space
- Variable blur by depth
- Subtle parallax on head/hand movement
- Eye-tracking aware focus
- Spatial audio cues

## Don't
- Don't use flat 2D panels
- Don't skip depth layering
- Don't use heavy borders
- Don't ignore comfort (vergence-accommodation)

## Accessibility Watch-outs
- **Glass panels**: solid fallback for text
- **Focus**: visible at all depths
- **Depth**: not sole information carrier
- **Motion**: respect reduced motion

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "1px",
    "color": "rgba(255,255,255,0.15)"
  },
  "shadow": {
    "default": "0 8px 32px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.1)",
    "hover": "0 16px 48px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.15)",
    "depth1": "0 4px 16px rgba(0,0,0,0.15)",
    "depth2": "0 8px 32px rgba(0,0,0,0.2)",
    "depth3": "0 16px 48px rgba(0,0,0,0.25)",
    "glass": "0 0 0 1px rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.2)"
  },
  "radius": {
    "sm": "12px",
    "md": "18px",
    "lg": "24px",
    "xl": "32px"
  },
  "color": {
    "bg": "radial-gradient(ellipse at center, #1A1A2E 0%, #0A0A1A 100%)",
    "surface": "rgba(255,255,255,0.08)",
    "surfaceStrong": "rgba(255,255,255,0.12)",
    "surfaceGlass": "rgba(255,255,255,0.15)",
    "primary": "#00D4FF",
    "secondary": "#FF6B9D",
    "accent": "#FFD700",
    "ink": "#FFFFFF",
    "muted": "rgba(255,255,255,0.6)",
    "border": "rgba(255,255,255,0.15)",
    "focus": "#00D4FF",
    "error": "#FF6B6B",
    "success": "#4ADE80",
    "white": "#FFFFFF",
    "glass": "rgba(255,255,255,0.1)",
    "portal": "rgba(0,212,255,0.2)"
  },
  "font": {
    "heading": "\"SF Pro Rounded\", \"Inter\", sans-serif",
    "body": "\"SF Pro Rounded\", \"Inter\", sans-serif",
    "mono": "\"SF Mono\", \"JetBrains Mono\", monospace",
    "weight": {
      "normal": 400,
      "medium": 500,
      "bold": 600
    }
  },
  "motion": {
    "duration": "300ms",
    "easing": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 1px;
  --ds-border-color: rgba(255,255,255,0.15);
  --ds-shadow-default: 0 8px 32px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.1);
  --ds-shadow-hover: 0 16px 48px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.15);
  --ds-shadow-depth1: 0 4px 16px rgba(0,0,0,0.15);
  --ds-shadow-depth2: 0 8px 32px rgba(0,0,0,0.2);
  --ds-shadow-depth3: 0 16px 48px rgba(0,0,0,0.25);
  --ds-shadow-glass: 0 0 0 1px rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.2);
  --ds-radius-sm: 12px;
  --ds-radius-md: 18px;
  --ds-radius-lg: 24px;
  --ds-radius-xl: 32px;
  --ds-color-bg: radial-gradient(ellipse at center, #1A1A2E 0%, #0A0A1A 100%);
  --ds-color-surface: rgba(255,255,255,0.08);
  --ds-color-surfaceStrong: rgba(255,255,255,0.12);
  --ds-color-surfaceGlass: rgba(255,255,255,0.15);
  --ds-color-primary: #00D4FF;
  --ds-color-secondary: #FF6B9D;
  --ds-color-accent: #FFD700;
  --ds-color-ink: #FFFFFF;
  --ds-color-muted: rgba(255,255,255,0.6);
  --ds-color-border: rgba(255,255,255,0.15);
  --ds-color-focus: #00D4FF;
  --ds-color-error: #FF6B6B;
  --ds-color-success: #4ADE80;
  --ds-color-white: #FFFFFF;
  --ds-color-glass: rgba(255,255,255,0.1);
  --ds-color-portal: rgba(0,212,255,0.2);
  --ds-font-heading: "SF Pro Rounded", "Inter", sans-serif;
  --ds-font-body: "SF Pro Rounded", "Inter", sans-serif;
  --ds-font-mono: "SF Mono", "JetBrains Mono", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-medium: 500;
  --ds-font-weight-bold: 600;
  --ds-motion-duration: 300ms;
  --ds-motion-easing: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ds-motion-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "radial-gradient(ellipse at center, #1A1A2E 0%, #0A0A1A 100%)",
            "surface": "rgba(255,255,255,0.08)",
            "surfaceStrong": "rgba(255,255,255,0.12)",
            "surfaceGlass": "rgba(255,255,255,0.15)",
            "primary": "#00D4FF",
            "secondary": "#FF6B9D",
            "accent": "#FFD700",
            "ink": "#FFFFFF",
            "muted": "rgba(255,255,255,0.6)",
            "border": "rgba(255,255,255,0.15)",
            "focus": "#00D4FF",
            "error": "#FF6B6B",
            "success": "#4ADE80",
            "white": "#FFFFFF",
            "glass": "rgba(255,255,255,0.1)",
            "portal": "rgba(0,212,255,0.2)"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 8px 32px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.1)",
            "ds-hover": "0 16px 48px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.15)",
            "ds-depth1": "0 4px 16px rgba(0,0,0,0.15)",
            "ds-depth2": "0 8px 32px rgba(0,0,0,0.2)",
            "ds-depth3": "0 16px 48px rgba(0,0,0,0.25)",
            "ds-glass": "0 0 0 1px rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.2)"
      },
      borderRadius: {
            "ds-sm": "12px",
            "ds-md": "18px",
            "ds-lg": "24px",
            "ds-xl": "32px"
      },
      fontFamily: {
            "heading": [
                  "\"SF Pro Rounded\", \"Inter\", sans-serif"
            ],
            "body": [
                  "\"SF Pro Rounded\", \"Inter\", sans-serif"
            ],
            "mono": [
                  "\"SF Mono\", \"JetBrains Mono\", monospace"
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
