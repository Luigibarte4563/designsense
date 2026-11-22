# Monochrome Style Preset

## Signature Traits
A single hue in varying tones and tints

## Do
- Single hue with 5-7 tonal variations
- Use tints (lighter) and shades (darker) for hierarchy
- White/lightest tint for backgrounds
- Darkest shade for primary text
- Subtle shadows for depth
- Accent: white or complementary

## Don't
- Don't introduce second hue
- Don't use high saturation variations
- Don't use gradients outside the hue
- Don't break the tonal scale

## Accessibility Watch-outs
- **Ensure 4.5**: 1 between adjacent tones
- **Darkest on lightest = max contrast**: 
- **Focus ring**: 3px solid primary with offset
- **Test colorblind safety (blue base works well)**: 

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "1px",
    "color": "var(--color-border)"
  },
  "shadow": {
    "default": "0 2px 8px rgba(0,0,0,0.08)",
    "hover": "0 4px 16px rgba(0,0,0,0.12)"
  },
  "radius": {
    "sm": "4px",
    "md": "8px",
    "lg": "12px"
  },
  "color": {
    "bg": "#F0F4F8",
    "surface": "#FFFFFF",
    "primary": "#1E3A5F",
    "primaryLight": "#2C5282",
    "primaryLighter": "#3182CE",
    "primaryLightest": "#63B3ED",
    "primaryDark": "#1A365D",
    "primaryDarker": "#0F2A4A",
    "accent": "#FFFFFF",
    "ink": "#1E3A5F",
    "muted": "#4A5568",
    "border": "#CBD5E0",
    "focus": "#3182CE",
    "error": "#E53E3E",
    "success": "#38A169",
    "white": "#FFFFFF"
  },
  "font": {
    "heading": "\"Inter\", sans-serif",
    "body": "\"Inter\", sans-serif",
    "mono": "\"Fira Code\", monospace",
    "weight": {
      "normal": 400,
      "medium": 500,
      "bold": 600
    }
  },
  "motion": {
    "duration": "200ms",
    "easing": "ease-out"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 1px;
  --ds-border-color: var(--color-border);
  --ds-shadow-default: 0 2px 8px rgba(0,0,0,0.08);
  --ds-shadow-hover: 0 4px 16px rgba(0,0,0,0.12);
  --ds-radius-sm: 4px;
  --ds-radius-md: 8px;
  --ds-radius-lg: 12px;
  --ds-color-bg: #F0F4F8;
  --ds-color-surface: #FFFFFF;
  --ds-color-primary: #1E3A5F;
  --ds-color-primaryLight: #2C5282;
  --ds-color-primaryLighter: #3182CE;
  --ds-color-primaryLightest: #63B3ED;
  --ds-color-primaryDark: #1A365D;
  --ds-color-primaryDarker: #0F2A4A;
  --ds-color-accent: #FFFFFF;
  --ds-color-ink: #1E3A5F;
  --ds-color-muted: #4A5568;
  --ds-color-border: #CBD5E0;
  --ds-color-focus: #3182CE;
  --ds-color-error: #E53E3E;
  --ds-color-success: #38A169;
  --ds-color-white: #FFFFFF;
  --ds-font-heading: "Inter", sans-serif;
  --ds-font-body: "Inter", sans-serif;
  --ds-font-mono: "Fira Code", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-medium: 500;
  --ds-font-weight-bold: 600;
  --ds-motion-duration: 200ms;
  --ds-motion-easing: ease-out;
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
            "primary": "#1E3A5F",
            "primaryLight": "#2C5282",
            "primaryLighter": "#3182CE",
            "primaryLightest": "#63B3ED",
            "primaryDark": "#1A365D",
            "primaryDarker": "#0F2A4A",
            "accent": "#FFFFFF",
            "ink": "#1E3A5F",
            "muted": "#4A5568",
            "border": "#CBD5E0",
            "focus": "#3182CE",
            "error": "#E53E3E",
            "success": "#38A169",
            "white": "#FFFFFF"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 2px 8px rgba(0,0,0,0.08)",
            "ds-hover": "0 4px 16px rgba(0,0,0,0.12)"
      },
      borderRadius: {
            "ds-sm": "4px",
            "ds-md": "8px",
            "ds-lg": "12px"
      },
      fontFamily: {
            "heading": [
                  "\"Inter\", sans-serif"
            ],
            "body": [
                  "\"Inter\", sans-serif"
            ],
            "mono": [
                  "\"Fira Code\", monospace"
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
