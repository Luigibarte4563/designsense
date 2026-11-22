# Illustrated / Storybook Style Preset

## Signature Traits
Custom illustrations as the main visual identity

## Do
- Custom illustrations as hero elements
- Warm, storybook color palette
- Characters and scenes integrated
- Generous whitespace for illustrations
- Hand-crafted feel
- Narrative visual hierarchy

## Don't
- Don't use stock photos
- Don't use generic icons
- Don't crowd illustrations
- Don't use cold corporate colors

## Accessibility Watch-outs
- **Illustrations**: alt text describing content
- **Focus**: 3px solid with offset
- **Text on illustrated backgrounds**: solid overlay
- **Decorative illustrations**: aria-hidden

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "2px",
    "color": "#E8D5B7"
  },
  "shadow": {
    "default": "0 4px 16px rgba(0,0,0,0.08)",
    "hover": "0 8px 24px rgba(0,0,0,0.12)"
  },
  "radius": {
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "xl": "32px"
  },
  "color": {
    "bg": "#FDFBF7",
    "surface": "#FFFFFF",
    "primary": "#8B4513",
    "secondary": "#556B2F",
    "accent": "#CD853F",
    "ink": "#3D2B1F",
    "muted": "#A09078",
    "border": "#E8D5B7",
    "focus": "#8B4513",
    "error": "#B22222",
    "success": "#556B2F",
    "white": "#FFFFFF",
    "illustration": "#F5E6D3",
    "character": "#D4A574",
    "nature": "#556B2F"
  },
  "font": {
    "heading": "\"Merriweather\", \"Georgia\", serif",
    "body": "\"Nunito\", \"Quicksand\", sans-serif",
    "mono": "\"Courier New\", monospace",
    "weight": {
      "normal": 400,
      "medium": 500,
      "bold": 700
    }
  },
  "motion": {
    "duration": "400ms",
    "easing": "cubic-bezier(0.34, 1.56, 0.64, 1)"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 2px;
  --ds-border-color: #E8D5B7;
  --ds-shadow-default: 0 4px 16px rgba(0,0,0,0.08);
  --ds-shadow-hover: 0 8px 24px rgba(0,0,0,0.12);
  --ds-radius-sm: 8px;
  --ds-radius-md: 16px;
  --ds-radius-lg: 24px;
  --ds-radius-xl: 32px;
  --ds-color-bg: #FDFBF7;
  --ds-color-surface: #FFFFFF;
  --ds-color-primary: #8B4513;
  --ds-color-secondary: #556B2F;
  --ds-color-accent: #CD853F;
  --ds-color-ink: #3D2B1F;
  --ds-color-muted: #A09078;
  --ds-color-border: #E8D5B7;
  --ds-color-focus: #8B4513;
  --ds-color-error: #B22222;
  --ds-color-success: #556B2F;
  --ds-color-white: #FFFFFF;
  --ds-color-illustration: #F5E6D3;
  --ds-color-character: #D4A574;
  --ds-color-nature: #556B2F;
  --ds-font-heading: "Merriweather", "Georgia", serif;
  --ds-font-body: "Nunito", "Quicksand", sans-serif;
  --ds-font-mono: "Courier New", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-medium: 500;
  --ds-font-weight-bold: 700;
  --ds-motion-duration: 400ms;
  --ds-motion-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FDFBF7",
            "surface": "#FFFFFF",
            "primary": "#8B4513",
            "secondary": "#556B2F",
            "accent": "#CD853F",
            "ink": "#3D2B1F",
            "muted": "#A09078",
            "border": "#E8D5B7",
            "focus": "#8B4513",
            "error": "#B22222",
            "success": "#556B2F",
            "white": "#FFFFFF",
            "illustration": "#F5E6D3",
            "character": "#D4A574",
            "nature": "#556B2F"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-default": "0 4px 16px rgba(0,0,0,0.08)",
            "ds-hover": "0 8px 24px rgba(0,0,0,0.12)"
      },
      borderRadius: {
            "ds-sm": "8px",
            "ds-md": "16px",
            "ds-lg": "24px",
            "ds-xl": "32px"
      },
      fontFamily: {
            "heading": [
                  "\"Merriweather\", \"Georgia\", serif"
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
            "ds-medium": 500,
            "ds-bold": 700
      },
      transitionDuration: {
            "ds": "400ms"
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
