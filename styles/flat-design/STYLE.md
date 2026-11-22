# Flat Design Style Preset

## Signature Traits
Solid colors, no shadows or gradients, clean and simple

## Do
- Use solid, opaque colors only
- Rely on color contrast for hierarchy
- Keep border radius consistent (0, 4, or 8px)
- Use typography and spacing for visual separation

## Don't
- No shadows, gradients, or transparency
- No 3D effects or depth illusions
- No textures or patterns
- No skeuomorphic details

## Accessibility Watch-outs
- **High contrast by default — ensure 4.5**: 1 on all text
- **Focus ring**: 2px solid primary with 2px offset
- **Touch targets**: 44px via padding (no border contribution)

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "0px",
    "color": "transparent"
  },
  "shadow": {
    "default": "none",
    "hover": "none",
    "active": "none"
  },
  "radius": {
    "sm": "0px",
    "md": "4px",
    "lg": "8px"
  },
  "color": {
    "bg": "#FFFFFF",
    "surface": "#F5F5F5",
    "primary": "#007AFF",
    "secondary": "#5856D6",
    "accent": "#FF2D55",
    "ink": "#1C1C1E",
    "muted": "#8E8E93",
    "border": "#C6C6C8",
    "focus": "#007AFF",
    "error": "#FF3B30",
    "success": "#34C759",
    "white": "#FFFFFF"
  },
  "font": {
    "heading": "-apple-system, BlinkMacSystemFont, \"SF Pro Display\", sans-serif",
    "body": "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", sans-serif",
    "mono": "\"SF Mono\", monospace",
    "weight": {
      "normal": 400,
      "medium": 500,
      "bold": 600
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
  --ds-border-width: 0px;
  --ds-border-color: transparent;
  --ds-shadow-default: none;
  --ds-shadow-hover: none;
  --ds-shadow-active: none;
  --ds-radius-sm: 0px;
  --ds-radius-md: 4px;
  --ds-radius-lg: 8px;
  --ds-color-bg: #FFFFFF;
  --ds-color-surface: #F5F5F5;
  --ds-color-primary: #007AFF;
  --ds-color-secondary: #5856D6;
  --ds-color-accent: #FF2D55;
  --ds-color-ink: #1C1C1E;
  --ds-color-muted: #8E8E93;
  --ds-color-border: #C6C6C8;
  --ds-color-focus: #007AFF;
  --ds-color-error: #FF3B30;
  --ds-color-success: #34C759;
  --ds-color-white: #FFFFFF;
  --ds-font-heading: -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif;
  --ds-font-body: -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;
  --ds-font-mono: "SF Mono", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-medium: 500;
  --ds-font-weight-bold: 600;
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
            "bg": "#FFFFFF",
            "surface": "#F5F5F5",
            "primary": "#007AFF",
            "secondary": "#5856D6",
            "accent": "#FF2D55",
            "ink": "#1C1C1E",
            "muted": "#8E8E93",
            "border": "#C6C6C8",
            "focus": "#007AFF",
            "error": "#FF3B30",
            "success": "#34C759",
            "white": "#FFFFFF"
      } },
      borderWidth: {
            "ds": "0px"
      },
      boxShadow: {
            "ds-default": "none",
            "ds-hover": "none",
            "ds-active": "none"
      },
      borderRadius: {
            "ds-sm": "0px",
            "ds-md": "4px",
            "ds-lg": "8px"
      },
      fontFamily: {
            "heading": [
                  "-apple-system, BlinkMacSystemFont, \"SF Pro Display\", sans-serif"
            ],
            "body": [
                  "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", sans-serif"
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
