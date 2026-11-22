# Paper / Cutout (Paper Craft) Style Preset

## Signature Traits
Layered paper shadows and textures, physical depth

## Do
- Multiple layered paper shadows
- Subtle color shifts per layer
- Paper texture on surfaces
- Cut-out edges with slight shadows
- Warm, natural paper tones
- Physical depth through layers

## Don't
- Don't use flat shadows
- Don't use pure white layers
- Don't use digital/perfect edges
- Don't skip layer shadows

## Accessibility Watch-outs
- **Layered shadows**: test contrast on each layer
- **Focus**: 3px solid with offset
- **Paper texture**: max 8% opacity behind text
- **Layer depth**: ensure touch targets not obscured

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "0px",
    "color": "transparent"
  },
  "shadow": {
    "default": "0 2px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.06)",
    "hover": "0 4px 8px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.1), 0 16px 32px rgba(0,0,0,0.08)",
    "layer1": "0 2px 4px rgba(0,0,0,0.1)",
    "layer2": "0 4px 8px rgba(0,0,0,0.08)",
    "layer3": "0 8px 16px rgba(0,0,0,0.06)",
    "layer4": "0 16px 24px rgba(0,0,0,0.05)"
  },
  "radius": {
    "sm": "4px",
    "md": "8px",
    "lg": "12px",
    "xl": "16px"
  },
  "color": {
    "bg": "#F0EDE5",
    "surface": "#FFFFFF",
    "layer1": "#F5F0E8",
    "layer2": "#E8E0D0",
    "layer3": "#D4C8B0",
    "layer4": "#C0B098",
    "primary": "#8B4513",
    "secondary": "#556B2F",
    "accent": "#CD853F",
    "ink": "#3D2B1F",
    "muted": "#A09078",
    "border": "transparent",
    "focus": "#8B4513",
    "error": "#B22222",
    "success": "#556B2F",
    "white": "#FFFFFF",
    "shadow": "rgba(0,0,0,0.15)",
    "paperEdge": "#D4C8B0"
  },
  "font": {
    "heading": "\"Nunito\", \"Quicksand\", sans-serif",
    "body": "\"Nunito\", \"Quicksand\", sans-serif",
    "mono": "\"Courier New\", monospace",
    "weight": {
      "normal": 400,
      "bold": 700
    }
  },
  "motion": {
    "duration": "300ms",
    "easing": "cubic-bezier(0.34, 1.56, 0.64, 1)"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 0px;
  --ds-border-color: transparent;
  --ds-shadow-default: 0 2px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.06);
  --ds-shadow-hover: 0 4px 8px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.1), 0 16px 32px rgba(0,0,0,0.08);
  --ds-shadow-layer1: 0 2px 4px rgba(0,0,0,0.1);
  --ds-shadow-layer2: 0 4px 8px rgba(0,0,0,0.08);
  --ds-shadow-layer3: 0 8px 16px rgba(0,0,0,0.06);
  --ds-shadow-layer4: 0 16px 24px rgba(0,0,0,0.05);
  --ds-radius-sm: 4px;
  --ds-radius-md: 8px;
  --ds-radius-lg: 12px;
  --ds-radius-xl: 16px;
  --ds-color-bg: #F0EDE5;
  --ds-color-surface: #FFFFFF;
  --ds-color-layer1: #F5F0E8;
  --ds-color-layer2: #E8E0D0;
  --ds-color-layer3: #D4C8B0;
  --ds-color-layer4: #C0B098;
  --ds-color-primary: #8B4513;
  --ds-color-secondary: #556B2F;
  --ds-color-accent: #CD853F;
  --ds-color-ink: #3D2B1F;
  --ds-color-muted: #A09078;
  --ds-color-border: transparent;
  --ds-color-focus: #8B4513;
  --ds-color-error: #B22222;
  --ds-color-success: #556B2F;
  --ds-color-white: #FFFFFF;
  --ds-color-shadow: rgba(0,0,0,0.15);
  --ds-color-paperEdge: #D4C8B0;
  --ds-font-heading: "Nunito", "Quicksand", sans-serif;
  --ds-font-body: "Nunito", "Quicksand", sans-serif;
  --ds-font-mono: "Courier New", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-bold: 700;
  --ds-motion-duration: 300ms;
  --ds-motion-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#F0EDE5",
            "surface": "#FFFFFF",
            "layer1": "#F5F0E8",
            "layer2": "#E8E0D0",
            "layer3": "#D4C8B0",
            "layer4": "#C0B098",
            "primary": "#8B4513",
            "secondary": "#556B2F",
            "accent": "#CD853F",
            "ink": "#3D2B1F",
            "muted": "#A09078",
            "border": "transparent",
            "focus": "#8B4513",
            "error": "#B22222",
            "success": "#556B2F",
            "white": "#FFFFFF",
            "shadow": "rgba(0,0,0,0.15)",
            "paperEdge": "#D4C8B0"
      } },
      borderWidth: {
            "ds": "0px"
      },
      boxShadow: {
            "ds-default": "0 2px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.06)",
            "ds-hover": "0 4px 8px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.1), 0 16px 32px rgba(0,0,0,0.08)",
            "ds-layer1": "0 2px 4px rgba(0,0,0,0.1)",
            "ds-layer2": "0 4px 8px rgba(0,0,0,0.08)",
            "ds-layer3": "0 8px 16px rgba(0,0,0,0.06)",
            "ds-layer4": "0 16px 24px rgba(0,0,0,0.05)"
      },
      borderRadius: {
            "ds-sm": "4px",
            "ds-md": "8px",
            "ds-lg": "12px",
            "ds-xl": "16px"
      },
      fontFamily: {
            "heading": [
                  "\"Nunito\", \"Quicksand\", sans-serif"
            ],
            "body": [
                  "\"Nunito\", \"Quicksand\", sans-serif"
            ],
            "mono": [
                  "\"Courier New\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-bold": 700
      },
      transitionDuration: {
            "ds": "300ms"
      },
      transitionTimingFunction: {
            "ds": "cubic-bezier(0.34, 1.56, 0.64, 1)"
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
