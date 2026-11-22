# Dark Mode / OLED Style Preset

## Signature Traits
True-black surfaces, desaturated accents, pure blacks

## Do
- True black (#000000) for OLED power saving
- Desaturated, pastel accents
- Subtle elevation with grayscale surfaces
- Minimal colored UI — color only for meaning
- High contrast text (near-white on black)
- No pure white backgrounds

## Don't
- Don't use gray backgrounds (not true black)
- Don't use saturated colors
- Don't use heavy shadows
- Don't use colored surfaces

## Accessibility Watch-outs
- **True black + near-white = max contrast**: 
- **Focus**: 3px solid cyan with 3px offset
- **Desaturated accents**: test 4.5:1
- **Pure black helps photophobia**: 

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "1px",
    "color": "#27272A"
  },
  "shadow": {
    "default": "0 4px 16px rgba(0,0,0,0.5)",
    "hover": "0 8px 24px rgba(0,0,0,0.6)"
  },
  "radius": {
    "sm": "6px",
    "md": "10px",
    "lg": "14px"
  },
  "color": {
    "bg": "#000000",
    "surface": "#09090B",
    "surfaceHover": "#18181B",
    "primary": "#A5F3FC",
    "secondary": "#E9D5FF",
    "accent": "#FDE68A",
    "ink": "#FAFAFA",
    "muted": "#71717A",
    "border": "#27272A",
    "focus": "#A5F3FC",
    "error": "#FCA5A5",
    "success": "#86EFAC",
    "white": "#FFFFFF",
    "elevated": "#18181B"
  },
  "font": {
    "heading": "\"Inter\", \"SF Pro Display\", sans-serif",
    "body": "\"Inter\", \"SF Pro Text\", sans-serif",
    "mono": "\"SF Mono\", \"JetBrains Mono\", monospace",
    "weight": {
      "normal": 400,
      "medium": 500,
      "bold": 600
    }
  },
  "motion": {
    "duration": "200ms",
    "easing": "cubic-bezier(0.4, 0, 0.2, 1)"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 1px;
  --ds-border-color: #27272A;
  --ds-shadow-default: 0 4px 16px rgba(0,0,0,0.5);
  --ds-shadow-hover: 0 8px 24px rgba(0,0,0,0.6);
  --ds-radius-sm: 6px;
  --ds-radius-md: 10px;
  --ds-radius-lg: 14px;
  --ds-color-bg: #000000;
  --ds-color-surface: #09090B;
  --ds-color-surfaceHover: #18181B;
  --ds-color-primary: #A5F3FC;
  --ds-color-secondary: #E9D5FF;
  --ds-color-accent: #FDE68A;
  --ds-color-ink: #FAFAFA;
  --ds-color-muted: #71717A;
  --ds-color-border: #27272A;
  --ds-color-focus: #A5F3FC;
  --ds-color-error: #FCA5A5;
  --ds-color-success: #86EFAC;
  --ds-color-white: #FFFFFF;
  --ds-color-elevated: #18181B;
  --ds-font-heading: "Inter", "SF Pro Display", sans-serif;
  --ds-font-body: "Inter", "SF Pro Text", sans-serif;
  --ds-font-mono: "SF Mono", "JetBrains Mono", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-medium: 500;
  --ds-font-weight-bold: 600;
  --ds-motion-duration: 200ms;
  --ds-motion-easing: cubic-bezier(0.4, 0, 0.2, 1);
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#000000",
            "surface": "#09090B",
            "surfaceHover": "#18181B",
            "primary": "#A5F3FC",
            "secondary": "#E9D5FF",
            "accent": "#FDE68A",
            "ink": "#FAFAFA",
            "muted": "#71717A",
            "border": "#27272A",
            "focus": "#A5F3FC",
            "error": "#FCA5A5",
            "success": "#86EFAC",
            "white": "#FFFFFF",
            "elevated": "#18181B"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 4px 16px rgba(0,0,0,0.5)",
            "ds-hover": "0 8px 24px rgba(0,0,0,0.6)"
      },
      borderRadius: {
            "ds-sm": "6px",
            "ds-md": "10px",
            "ds-lg": "14px"
      },
      fontFamily: {
            "heading": [
                  "\"Inter\", \"SF Pro Display\", sans-serif"
            ],
            "body": [
                  "\"Inter\", \"SF Pro Text\", sans-serif"
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
            "ds": "200ms"
      },
      transitionTimingFunction: {
            "ds": "cubic-bezier(0.4, 0, 0.2, 1)"
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
