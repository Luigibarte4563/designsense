# Gothic / Dark Fantasy Style Preset

## Signature Traits
Ornate serif type, dark moody palettes, dramatic

## Do
- Dark, moody palette (black, deep red, gold)
- Ornate serif typography (Blackletter, Trajan)
- Architectural arches and frames
- Gold/red accents on black
- Dramatic lighting and shadows
- Ornamental borders and flourishes

## Don't
- Don't use bright/happy colors
- Don't use sans-serif for headings
- Don't use flat/minimalist layouts
- Don't skip the ornamentation

## Accessibility Watch-outs
- **Dark mode default — light text required**: 
- **Focus**: 3px solid gold with offset
- **Ornate fonts**: minimum 20px for readability
- **Gold on black**: test contrast

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "2px",
    "color": "#8B0000"
  },
  "shadow": {
    "default": "0 4px 20px rgba(0,0,0,0.5)",
    "hover": "0 8px 30px rgba(139,0,0,0.3)"
  },
  "radius": {
    "sm": "4px",
    "md": "8px",
    "lg": "16px",
    "arch": "50% 50% 0 0"
  },
  "color": {
    "bg": "#0D0D0D",
    "surface": "#1A0A0A",
    "primary": "#8B0000",
    "secondary": "#4A0A0A",
    "accent": "#D4AF37",
    "ink": "#F5F0E8",
    "muted": "#8B4A4A",
    "border": "#4A0A0A",
    "focus": "#D4AF37",
    "error": "#FF0000",
    "success": "#2E8B57",
    "white": "#F5F0E8",
    "blood": "#8B0000",
    "gold": "#D4AF37",
    "stone": "#2A2A2A",
    "velvet": "#1A0A0A"
  },
  "font": {
    "heading": "\"Cinzel\", \"Trajan Pro\", \"Old English Text MT\", serif",
    "body": "\"Crimson Text\", \"Garamond\", serif",
    "mono": "\"Courier New\", monospace",
    "weight": {
      "normal": 400,
      "bold": 600
    }
  },
  "motion": {
    "duration": "500ms",
    "easing": "ease-in-out"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 2px;
  --ds-border-color: #8B0000;
  --ds-shadow-default: 0 4px 20px rgba(0,0,0,0.5);
  --ds-shadow-hover: 0 8px 30px rgba(139,0,0,0.3);
  --ds-radius-sm: 4px;
  --ds-radius-md: 8px;
  --ds-radius-lg: 16px;
  --ds-radius-arch: 50% 50% 0 0;
  --ds-color-bg: #0D0D0D;
  --ds-color-surface: #1A0A0A;
  --ds-color-primary: #8B0000;
  --ds-color-secondary: #4A0A0A;
  --ds-color-accent: #D4AF37;
  --ds-color-ink: #F5F0E8;
  --ds-color-muted: #8B4A4A;
  --ds-color-border: #4A0A0A;
  --ds-color-focus: #D4AF37;
  --ds-color-error: #FF0000;
  --ds-color-success: #2E8B57;
  --ds-color-white: #F5F0E8;
  --ds-color-blood: #8B0000;
  --ds-color-gold: #D4AF37;
  --ds-color-stone: #2A2A2A;
  --ds-color-velvet: #1A0A0A;
  --ds-font-heading: "Cinzel", "Trajan Pro", "Old English Text MT", serif;
  --ds-font-body: "Crimson Text", "Garamond", serif;
  --ds-font-mono: "Courier New", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-bold: 600;
  --ds-motion-duration: 500ms;
  --ds-motion-easing: ease-in-out;
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#0D0D0D",
            "surface": "#1A0A0A",
            "primary": "#8B0000",
            "secondary": "#4A0A0A",
            "accent": "#D4AF37",
            "ink": "#F5F0E8",
            "muted": "#8B4A4A",
            "border": "#4A0A0A",
            "focus": "#D4AF37",
            "error": "#FF0000",
            "success": "#2E8B57",
            "white": "#F5F0E8",
            "blood": "#8B0000",
            "gold": "#D4AF37",
            "stone": "#2A2A2A",
            "velvet": "#1A0A0A"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-default": "0 4px 20px rgba(0,0,0,0.5)",
            "ds-hover": "0 8px 30px rgba(139,0,0,0.3)"
      },
      borderRadius: {
            "ds-sm": "4px",
            "ds-md": "8px",
            "ds-lg": "16px",
            "ds-arch": "50% 50% 0 0"
      },
      fontFamily: {
            "heading": [
                  "\"Cinzel\", \"Trajan Pro\", \"Old English Text MT\", serif"
            ],
            "body": [
                  "\"Crimson Text\", \"Garamond\", serif"
            ],
            "mono": [
                  "\"Courier New\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-bold": 600
      },
      transitionDuration: {
            "ds": "500ms"
      },
      transitionTimingFunction: {
            "ds": "ease-in-out"
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
