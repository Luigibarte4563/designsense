# Parallax / Scroll Storytelling Style Preset

## Signature Traits
Layered depth on scroll, narrative scroll experiences

## Do
- Layered parallax on scroll
- Foreground moves faster than background
- Narrative scroll sections
- Smooth, performant transforms
- Scroll-triggered animations
- Depth through layering

## Don't
- Don't parallax everything
- Don't break scroll performance
- Don't skip reduced motion
- Don't disable native scroll

## Accessibility Watch-outs
- **CRITICAL**: prefers-reduced-motion disables parallax
- **Focus**: not affected by scroll position
- **Provide non-parallax alternative**: 
- **Ensure content readable without scroll**: 

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "0px",
    "color": "transparent"
  },
  "shadow": {
    "default": "0 8px 32px rgba(0,0,0,0.12)",
    "hover": "0 12px 40px rgba(0,0,0,0.16)"
  },
  "radius": {
    "sm": "8px",
    "md": "16px",
    "lg": "24px"
  },
  "color": {
    "bg": "#FAFAFA",
    "surface": "#FFFFFF",
    "primary": "#1E3A5F",
    "secondary": "#4A5568",
    "accent": "#ECC94B",
    "ink": "#1A202C",
    "muted": "#718096",
    "border": "#E2E8F0",
    "focus": "#3182CE",
    "error": "#E53E3E",
    "success": "#38A169",
    "white": "#FFFFFF",
    "layer1": "#FFFFFF",
    "layer2": "#F7FAFC",
    "layer3": "#EDF2F7",
    "layer4": "#E2E8F0"
  },
  "font": {
    "heading": "\"Playfair Display\", \"Georgia\", serif",
    "body": "\"Inter\", \"Source Serif Pro\", serif",
    "mono": "\"JetBrains Mono\", monospace",
    "weight": {
      "normal": 400,
      "medium": 500,
      "bold": 600
    }
  },
  "motion": {
    "duration": "600ms",
    "easing": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    "parallaxSpeed": {
      "slow": "0.3",
      "medium": "0.5",
      "fast": "0.8"
    }
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 0px;
  --ds-border-color: transparent;
  --ds-shadow-default: 0 8px 32px rgba(0,0,0,0.12);
  --ds-shadow-hover: 0 12px 40px rgba(0,0,0,0.16);
  --ds-radius-sm: 8px;
  --ds-radius-md: 16px;
  --ds-radius-lg: 24px;
  --ds-color-bg: #FAFAFA;
  --ds-color-surface: #FFFFFF;
  --ds-color-primary: #1E3A5F;
  --ds-color-secondary: #4A5568;
  --ds-color-accent: #ECC94B;
  --ds-color-ink: #1A202C;
  --ds-color-muted: #718096;
  --ds-color-border: #E2E8F0;
  --ds-color-focus: #3182CE;
  --ds-color-error: #E53E3E;
  --ds-color-success: #38A169;
  --ds-color-white: #FFFFFF;
  --ds-color-layer1: #FFFFFF;
  --ds-color-layer2: #F7FAFC;
  --ds-color-layer3: #EDF2F7;
  --ds-color-layer4: #E2E8F0;
  --ds-font-heading: "Playfair Display", "Georgia", serif;
  --ds-font-body: "Inter", "Source Serif Pro", serif;
  --ds-font-mono: "JetBrains Mono", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-medium: 500;
  --ds-font-weight-bold: 600;
  --ds-motion-duration: 600ms;
  --ds-motion-easing: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ds-motion-parallaxSpeed-slow: 0.3;
  --ds-motion-parallaxSpeed-medium: 0.5;
  --ds-motion-parallaxSpeed-fast: 0.8;
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FAFAFA",
            "surface": "#FFFFFF",
            "primary": "#1E3A5F",
            "secondary": "#4A5568",
            "accent": "#ECC94B",
            "ink": "#1A202C",
            "muted": "#718096",
            "border": "#E2E8F0",
            "focus": "#3182CE",
            "error": "#E53E3E",
            "success": "#38A169",
            "white": "#FFFFFF",
            "layer1": "#FFFFFF",
            "layer2": "#F7FAFC",
            "layer3": "#EDF2F7",
            "layer4": "#E2E8F0"
      } },
      borderWidth: {
            "ds": "0px"
      },
      boxShadow: {
            "ds-default": "0 8px 32px rgba(0,0,0,0.12)",
            "ds-hover": "0 12px 40px rgba(0,0,0,0.16)"
      },
      borderRadius: {
            "ds-sm": "8px",
            "ds-md": "16px",
            "ds-lg": "24px"
      },
      fontFamily: {
            "heading": [
                  "\"Playfair Display\", \"Georgia\", serif"
            ],
            "body": [
                  "\"Inter\", \"Source Serif Pro\", serif"
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
            "ds": "600ms"
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
