# Editorial / Magazine Style Preset

## Signature Traits
Serif headings, strong typographic hierarchy, wide margins

## Do
- High-contrast serif headings (Didot/Bodoni)
- Readable serif body text (Garamond)
- Wide margins, generous line height (1.7+)
- Pull quotes, drop caps, folio numbers
- Editorial grid with columns
- Red accent for key elements only

## Don't
- Don't use sans-serif for long-form body
- Don't use tight line height
- Don't crowd margins
- Don't use too many font families

## Accessibility Watch-outs
- **Serif fonts readable at 18px+**: 
- **Line height 1.7 minimum**: 
- **Focus**: 2px solid accent red
- **High contrast throughout**: 

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "0px",
    "color": "transparent"
  },
  "shadow": {
    "default": "none",
    "hover": "none"
  },
  "radius": {
    "sm": "0px",
    "md": "0px",
    "lg": "0px"
  },
  "color": {
    "bg": "#FAFAFA",
    "surface": "#FFFFFF",
    "primary": "#1A1A1A",
    "secondary": "#4A4A4A",
    "accent": "#C41E3A",
    "ink": "#1A1A1A",
    "muted": "#666666",
    "border": "#E0E0E0",
    "focus": "#C41E3A",
    "error": "#C41E3A",
    "success": "#2D7D32",
    "white": "#FFFFFF",
    "pullQuote": "#C41E3A",
    "caption": "#888888"
  },
  "font": {
    "heading": "\"Didot\", \"Bodoni\", \"Playfair Display\", serif",
    "body": "\"Garamond\", \"Georgia\", serif",
    "sans": "\"Franklin Gothic\", \"Helvetica Neue\", sans-serif",
    "mono": "\"Courier New\", monospace",
    "weight": {
      "light": 300,
      "normal": 400,
      "medium": 500,
      "bold": 700
    }
  },
  "motion": {
    "duration": "0ms",
    "easing": "linear"
  },
  "layout": {
    "maxWidth": "720px",
    "margin": "auto",
    "columnGap": "32px"
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
  --ds-radius-sm: 0px;
  --ds-radius-md: 0px;
  --ds-radius-lg: 0px;
  --ds-color-bg: #FAFAFA;
  --ds-color-surface: #FFFFFF;
  --ds-color-primary: #1A1A1A;
  --ds-color-secondary: #4A4A4A;
  --ds-color-accent: #C41E3A;
  --ds-color-ink: #1A1A1A;
  --ds-color-muted: #666666;
  --ds-color-border: #E0E0E0;
  --ds-color-focus: #C41E3A;
  --ds-color-error: #C41E3A;
  --ds-color-success: #2D7D32;
  --ds-color-white: #FFFFFF;
  --ds-color-pullQuote: #C41E3A;
  --ds-color-caption: #888888;
  --ds-font-heading: "Didot", "Bodoni", "Playfair Display", serif;
  --ds-font-body: "Garamond", "Georgia", serif;
  --ds-font-sans: "Franklin Gothic", "Helvetica Neue", sans-serif;
  --ds-font-mono: "Courier New", monospace;
  --ds-font-weight-light: 300;
  --ds-font-weight-normal: 400;
  --ds-font-weight-medium: 500;
  --ds-font-weight-bold: 700;
  --ds-motion-duration: 0ms;
  --ds-motion-easing: linear;
  --ds-layout-maxWidth: 720px;
  --ds-layout-margin: auto;
  --ds-layout-columnGap: 32px;
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
            "primary": "#1A1A1A",
            "secondary": "#4A4A4A",
            "accent": "#C41E3A",
            "ink": "#1A1A1A",
            "muted": "#666666",
            "border": "#E0E0E0",
            "focus": "#C41E3A",
            "error": "#C41E3A",
            "success": "#2D7D32",
            "white": "#FFFFFF",
            "pullQuote": "#C41E3A",
            "caption": "#888888"
      } },
      borderWidth: {
            "ds": "0px"
      },
      boxShadow: {
            "ds-default": "none",
            "ds-hover": "none"
      },
      borderRadius: {
            "ds-sm": "0px",
            "ds-md": "0px",
            "ds-lg": "0px"
      },
      fontFamily: {
            "heading": [
                  "\"Didot\", \"Bodoni\", \"Playfair Display\", serif"
            ],
            "body": [
                  "\"Garamond\", \"Georgia\", serif"
            ],
            "mono": [
                  "\"Courier New\", monospace"
            ]
      },
      fontWeight: {
            "ds-light": 300,
            "ds-normal": 400,
            "ds-medium": 500,
            "ds-bold": 700
      },
      transitionDuration: {
            "ds": "0ms"
      },
      transitionTimingFunction: {
            "ds": "linear"
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
