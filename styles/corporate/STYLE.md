# Corporate / Enterprise Style Preset

## Signature Traits
Neutral, dense, table and form friendly, professional

## Do
- High information density
- Compact tables and forms
- Neutral blue primary, gray secondary
- Clear visual hierarchy for data
- Consistent spacing scale (4px base)
- Accessible by default

## Don't
- Don't use decorative elements
- Don't use bright/playful colors
- Don't waste whitespace
- Don't use large border radius

## Accessibility Watch-outs
- **WCAG AA baseline for all components**: 
- **Focus ring**: 2px solid primary with 2px offset
- **Table headers**: scope=col, sortable
- **Forms**: labels, validation, error handling
- **Dense doesn't mean inaccessible**: 

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "1px",
    "color": "#D0D5DD"
  },
  "shadow": {
    "default": "0 1px 3px rgba(0,0,0,0.08)",
    "hover": "0 4px 12px rgba(0,0,0,0.1)"
  },
  "radius": {
    "sm": "4px",
    "md": "6px",
    "lg": "8px"
  },
  "color": {
    "bg": "#F9FAFB",
    "surface": "#FFFFFF",
    "primary": "#1570EF",
    "primaryHover": "#1D65D8",
    "secondary": "#6B7280",
    "accent": "#00A3E0",
    "ink": "#111827",
    "muted": "#6B7280",
    "border": "#D0D5DD",
    "focus": "#1570EF",
    "error": "#DC2626",
    "success": "#059669",
    "white": "#FFFFFF",
    "tableHeader": "#F3F4F6",
    "tableStripe": "#F9FAFB"
  },
  "font": {
    "heading": "\"Inter\", \"System UI\", sans-serif",
    "body": "\"Inter\", \"System UI\", sans-serif",
    "mono": "\"JetBrains Mono\", \"Fira Code\", monospace",
    "weight": {
      "normal": 400,
      "medium": 500,
      "bold": 600
    }
  },
  "motion": {
    "duration": "150ms",
    "easing": "ease-out"
  },
  "density": {
    "compact": true,
    "tablePadding": "8px 12px"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 1px;
  --ds-border-color: #D0D5DD;
  --ds-shadow-default: 0 1px 3px rgba(0,0,0,0.08);
  --ds-shadow-hover: 0 4px 12px rgba(0,0,0,0.1);
  --ds-radius-sm: 4px;
  --ds-radius-md: 6px;
  --ds-radius-lg: 8px;
  --ds-color-bg: #F9FAFB;
  --ds-color-surface: #FFFFFF;
  --ds-color-primary: #1570EF;
  --ds-color-primaryHover: #1D65D8;
  --ds-color-secondary: #6B7280;
  --ds-color-accent: #00A3E0;
  --ds-color-ink: #111827;
  --ds-color-muted: #6B7280;
  --ds-color-border: #D0D5DD;
  --ds-color-focus: #1570EF;
  --ds-color-error: #DC2626;
  --ds-color-success: #059669;
  --ds-color-white: #FFFFFF;
  --ds-color-tableHeader: #F3F4F6;
  --ds-color-tableStripe: #F9FAFB;
  --ds-font-heading: "Inter", "System UI", sans-serif;
  --ds-font-body: "Inter", "System UI", sans-serif;
  --ds-font-mono: "JetBrains Mono", "Fira Code", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-medium: 500;
  --ds-font-weight-bold: 600;
  --ds-motion-duration: 150ms;
  --ds-motion-easing: ease-out;
  --ds-density-compact: true;
  --ds-density-tablePadding: 8px 12px;
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#F9FAFB",
            "surface": "#FFFFFF",
            "primary": "#1570EF",
            "primaryHover": "#1D65D8",
            "secondary": "#6B7280",
            "accent": "#00A3E0",
            "ink": "#111827",
            "muted": "#6B7280",
            "border": "#D0D5DD",
            "focus": "#1570EF",
            "error": "#DC2626",
            "success": "#059669",
            "white": "#FFFFFF",
            "tableHeader": "#F3F4F6",
            "tableStripe": "#F9FAFB"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 1px 3px rgba(0,0,0,0.08)",
            "ds-hover": "0 4px 12px rgba(0,0,0,0.1)"
      },
      borderRadius: {
            "ds-sm": "4px",
            "ds-md": "6px",
            "ds-lg": "8px"
      },
      fontFamily: {
            "heading": [
                  "\"Inter\", \"System UI\", sans-serif"
            ],
            "body": [
                  "\"Inter\", \"System UI\", sans-serif"
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
