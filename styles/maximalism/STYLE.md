# Maximalism Style Preset

## Signature Traits
Dense, layered, colorful, and busy — more is more

## Do
- Layer patterns, textures, and colors
- Mix multiple fonts and weights
- Fill whitespace with decorative elements
- Bold, overlapping compositions
- Vibrant, saturated color palette

## Don't
- Don't leave empty space
- Don't restrict color palette
- Don't use subtle hierarchy
- Don't follow minimalist rules

## Accessibility Watch-outs
- **Provide high-contrast mode alternative**: 
- **Focus ring**: 4px solid with offset
- **Ensure text readability over patterns**: 
- **Reduce motion drastically**: 

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "2px",
    "color": "#000000"
  },
  "shadow": {
    "default": "4px 4px 0 #FF00FF",
    "hover": "6px 6px 0 #00FFFF"
  },
  "radius": {
    "sm": "4px",
    "md": "8px",
    "lg": "12px",
    "xl": "0px"
  },
  "color": {
    "bg": "#FFF8E7",
    "surface": "#FFFFFF",
    "primary": "#FF006E",
    "secondary": "#8338EC",
    "accent": "#FFBE0B",
    "ink": "#000000",
    "muted": "#666666",
    "border": "#000000",
    "focus": "#3A86FF",
    "error": "#FF0000",
    "success": "#06D6A0",
    "white": "#FFFFFF",
    "pattern1": "#FB5607",
    "pattern2": "#FF006E",
    "pattern3": "#8338EC",
    "pattern4": "#3A86FF",
    "pattern5": "#06D6A0"
  },
  "font": {
    "heading": "\"Anton\", \"Bebas Neue\", sans-serif",
    "body": "\"Space Mono\", monospace",
    "mono": "\"Space Mono\", monospace",
    "weight": {
      "normal": 400,
      "bold": 700
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
  --ds-border-width: 2px;
  --ds-border-color: #000000;
  --ds-shadow-default: 4px 4px 0 #FF00FF;
  --ds-shadow-hover: 6px 6px 0 #00FFFF;
  --ds-radius-sm: 4px;
  --ds-radius-md: 8px;
  --ds-radius-lg: 12px;
  --ds-radius-xl: 0px;
  --ds-color-bg: #FFF8E7;
  --ds-color-surface: #FFFFFF;
  --ds-color-primary: #FF006E;
  --ds-color-secondary: #8338EC;
  --ds-color-accent: #FFBE0B;
  --ds-color-ink: #000000;
  --ds-color-muted: #666666;
  --ds-color-border: #000000;
  --ds-color-focus: #3A86FF;
  --ds-color-error: #FF0000;
  --ds-color-success: #06D6A0;
  --ds-color-white: #FFFFFF;
  --ds-color-pattern1: #FB5607;
  --ds-color-pattern2: #FF006E;
  --ds-color-pattern3: #8338EC;
  --ds-color-pattern4: #3A86FF;
  --ds-color-pattern5: #06D6A0;
  --ds-font-heading: "Anton", "Bebas Neue", sans-serif;
  --ds-font-body: "Space Mono", monospace;
  --ds-font-mono: "Space Mono", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-bold: 700;
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
            "bg": "#FFF8E7",
            "surface": "#FFFFFF",
            "primary": "#FF006E",
            "secondary": "#8338EC",
            "accent": "#FFBE0B",
            "ink": "#000000",
            "muted": "#666666",
            "border": "#000000",
            "focus": "#3A86FF",
            "error": "#FF0000",
            "success": "#06D6A0",
            "white": "#FFFFFF",
            "pattern1": "#FB5607",
            "pattern2": "#FF006E",
            "pattern3": "#8338EC",
            "pattern4": "#3A86FF",
            "pattern5": "#06D6A0"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-default": "4px 4px 0 #FF00FF",
            "ds-hover": "6px 6px 0 #00FFFF"
      },
      borderRadius: {
            "ds-sm": "4px",
            "ds-md": "8px",
            "ds-lg": "12px",
            "ds-xl": "0px"
      },
      fontFamily: {
            "heading": [
                  "\"Anton\", \"Bebas Neue\", sans-serif"
            ],
            "body": [
                  "\"Space Mono\", monospace"
            ],
            "mono": [
                  "\"Space Mono\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-bold": 700
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
