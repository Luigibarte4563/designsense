# Industrial / Blueprint Style Preset

## Signature Traits
Technical lines, grid paper, schematics, utilitarian

## Do
- Blueprint grid background
- Technical line weights
- Dimension lines and annotations
- Monospace typography throughout
- Minimal color: blue lines on white
- Schematic/diagram aesthetic

## Don't
- Don't use decorative elements
- Don't use organic shapes
- Don't use fill colors
- Don't skip the grid

## Accessibility Watch-outs
- **High contrast blue on white**: 
- **Focus**: 2px solid blue with offset
- **Grid lines**: low opacity, decorative only
- **Monospace**: ensures character clarity

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "1px",
    "color": "#4A90E2"
  },
  "shadow": {
    "default": "none",
    "hover": "0 0 10px rgba(74,144,226,0.3)"
  },
  "radius": {
    "sm": "0px",
    "md": "2px",
    "lg": "4px"
  },
  "color": {
    "bg": "#F0F4FA",
    "surface": "#FFFFFF",
    "primary": "#4A90E2",
    "secondary": "#6B7A8A",
    "accent": "#FF6B35",
    "ink": "#2D3E50",
    "muted": "#8A9BA8",
    "border": "#D0D8E0",
    "focus": "#4A90E2",
    "error": "#D0021B",
    "success": "#7ED321",
    "white": "#FFFFFF",
    "grid": "rgba(74,144,226,0.1)",
    "blueprint": "rgba(74,144,226,0.05)",
    "dimension": "#FF6B35",
    "note": "#8A9BA8",
    "line": "#4A90E2"
  },
  "font": {
    "heading": "\"JetBrains Mono\", \"Fira Code\", monospace",
    "body": "\"JetBrains Mono\", \"Fira Code\", monospace",
    "mono": "\"JetBrains Mono\", \"Fira Code\", monospace",
    "weight": {
      "normal": 400,
      "medium": 500,
      "bold": 600
    }
  },
  "motion": {
    "duration": "100ms",
    "easing": "linear"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 1px;
  --ds-border-color: #4A90E2;
  --ds-shadow-default: none;
  --ds-shadow-hover: 0 0 10px rgba(74,144,226,0.3);
  --ds-radius-sm: 0px;
  --ds-radius-md: 2px;
  --ds-radius-lg: 4px;
  --ds-color-bg: #F0F4FA;
  --ds-color-surface: #FFFFFF;
  --ds-color-primary: #4A90E2;
  --ds-color-secondary: #6B7A8A;
  --ds-color-accent: #FF6B35;
  --ds-color-ink: #2D3E50;
  --ds-color-muted: #8A9BA8;
  --ds-color-border: #D0D8E0;
  --ds-color-focus: #4A90E2;
  --ds-color-error: #D0021B;
  --ds-color-success: #7ED321;
  --ds-color-white: #FFFFFF;
  --ds-color-grid: rgba(74,144,226,0.1);
  --ds-color-blueprint: rgba(74,144,226,0.05);
  --ds-color-dimension: #FF6B35;
  --ds-color-note: #8A9BA8;
  --ds-color-line: #4A90E2;
  --ds-font-heading: "JetBrains Mono", "Fira Code", monospace;
  --ds-font-body: "JetBrains Mono", "Fira Code", monospace;
  --ds-font-mono: "JetBrains Mono", "Fira Code", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-medium: 500;
  --ds-font-weight-bold: 600;
  --ds-motion-duration: 100ms;
  --ds-motion-easing: linear;
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#F0F4FA",
            "surface": "#FFFFFF",
            "primary": "#4A90E2",
            "secondary": "#6B7A8A",
            "accent": "#FF6B35",
            "ink": "#2D3E50",
            "muted": "#8A9BA8",
            "border": "#D0D8E0",
            "focus": "#4A90E2",
            "error": "#D0021B",
            "success": "#7ED321",
            "white": "#FFFFFF",
            "grid": "rgba(74,144,226,0.1)",
            "blueprint": "rgba(74,144,226,0.05)",
            "dimension": "#FF6B35",
            "note": "#8A9BA8",
            "line": "#4A90E2"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "none",
            "ds-hover": "0 0 10px rgba(74,144,226,0.3)"
      },
      borderRadius: {
            "ds-sm": "0px",
            "ds-md": "2px",
            "ds-lg": "4px"
      },
      fontFamily: {
            "heading": [
                  "\"JetBrains Mono\", \"Fira Code\", monospace"
            ],
            "body": [
                  "\"JetBrains Mono\", \"Fira Code\", monospace"
            ],
            "mono": [
                  "\"JetBrains Mono\", \"Fira Code\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-medium": 500,
            "ds-bold": 600
      },
      transitionDuration: {
            "ds": "100ms"
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
