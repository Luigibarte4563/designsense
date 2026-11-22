# Material Design Style Preset

## Signature Traits
Elevation system, ripple effects, tonal color roles

## Do
- Use elevation levels (1-5) consistently
- Apply ripple effect on all interactive surfaces
- Follow tonal color palette (primary, secondary, tertiary)
- Use baseline grid (8dp) for spacing
- Respect motion duration standards

## Don't
- Don't mix elevation levels arbitrarily
- Don't use custom shadows outside the system
- Don't skip ripple on touch targets
- Don't use non-Material color roles

## Accessibility Watch-outs
- **Elevation doesn't replace focus indicators**: 
- **Ripple respects prefers-reduced-motion**: 
- **Tonal palette ensures contrast compliance**: 
- **Minimum touch target 48x48dp**: 

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "1px",
    "color": "rgba(0,0,0,0.12)"
  },
  "shadow": {
    "default": "0 2px 4px rgba(0,0,0,0.15)",
    "hover": "0 4px 8px rgba(0,0,0,0.2)",
    "active": "0 1px 2px rgba(0,0,0,0.15)",
    "level1": "0 2px 4px rgba(0,0,0,0.15)",
    "level2": "0 4px 8px rgba(0,0,0,0.2)",
    "level3": "0 8px 16px rgba(0,0,0,0.25)",
    "level4": "0 16px 24px rgba(0,0,0,0.3)",
    "level5": "0 24px 32px rgba(0,0,0,0.35)"
  },
  "radius": {
    "sm": "4px",
    "md": "8px",
    "lg": "12px",
    "xl": "16px",
    "pill": "9999px"
  },
  "color": {
    "bg": "#FEF7FF",
    "surface": "#FFFFFF",
    "surfaceVariant": "#F5F0F6",
    "primary": "#6750A4",
    "onPrimary": "#FFFFFF",
    "primaryContainer": "#EADDFF",
    "onPrimaryContainer": "#21005D",
    "secondary": "#625B71",
    "onSecondary": "#FFFFFF",
    "secondaryContainer": "#E8DEF8",
    "onSecondaryContainer": "#1D192B",
    "tertiary": "#7D5260",
    "onTertiary": "#FFFFFF",
    "tertiaryContainer": "#FFD8E4",
    "onTertiaryContainer": "#31111D",
    "ink": "#1C1B1F",
    "muted": "#6F6D76",
    "border": "#CAC4D0",
    "focus": "#6750A4",
    "error": "#B3261E",
    "success": "#388E3C",
    "white": "#FFFFFF"
  },
  "font": {
    "heading": "\"Google Sans\", \"Roboto\", sans-serif",
    "body": "\"Roboto\", sans-serif",
    "mono": "\"Roboto Mono\", monospace",
    "weight": {
      "normal": 400,
      "medium": 500,
      "bold": 700
    }
  },
  "motion": {
    "duration": "200ms",
    "easing": "cubic-bezier(0.4, 0, 0.2, 1)"
  },
  "ripple": {
    "color": "rgba(0,0,0,0.12)",
    "duration": "300ms"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 1px;
  --ds-border-color: rgba(0,0,0,0.12);
  --ds-shadow-default: 0 2px 4px rgba(0,0,0,0.15);
  --ds-shadow-hover: 0 4px 8px rgba(0,0,0,0.2);
  --ds-shadow-active: 0 1px 2px rgba(0,0,0,0.15);
  --ds-shadow-level1: 0 2px 4px rgba(0,0,0,0.15);
  --ds-shadow-level2: 0 4px 8px rgba(0,0,0,0.2);
  --ds-shadow-level3: 0 8px 16px rgba(0,0,0,0.25);
  --ds-shadow-level4: 0 16px 24px rgba(0,0,0,0.3);
  --ds-shadow-level5: 0 24px 32px rgba(0,0,0,0.35);
  --ds-radius-sm: 4px;
  --ds-radius-md: 8px;
  --ds-radius-lg: 12px;
  --ds-radius-xl: 16px;
  --ds-radius-pill: 9999px;
  --ds-color-bg: #FEF7FF;
  --ds-color-surface: #FFFFFF;
  --ds-color-surfaceVariant: #F5F0F6;
  --ds-color-primary: #6750A4;
  --ds-color-onPrimary: #FFFFFF;
  --ds-color-primaryContainer: #EADDFF;
  --ds-color-onPrimaryContainer: #21005D;
  --ds-color-secondary: #625B71;
  --ds-color-onSecondary: #FFFFFF;
  --ds-color-secondaryContainer: #E8DEF8;
  --ds-color-onSecondaryContainer: #1D192B;
  --ds-color-tertiary: #7D5260;
  --ds-color-onTertiary: #FFFFFF;
  --ds-color-tertiaryContainer: #FFD8E4;
  --ds-color-onTertiaryContainer: #31111D;
  --ds-color-ink: #1C1B1F;
  --ds-color-muted: #6F6D76;
  --ds-color-border: #CAC4D0;
  --ds-color-focus: #6750A4;
  --ds-color-error: #B3261E;
  --ds-color-success: #388E3C;
  --ds-color-white: #FFFFFF;
  --ds-font-heading: "Google Sans", "Roboto", sans-serif;
  --ds-font-body: "Roboto", sans-serif;
  --ds-font-mono: "Roboto Mono", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-medium: 500;
  --ds-font-weight-bold: 700;
  --ds-motion-duration: 200ms;
  --ds-motion-easing: cubic-bezier(0.4, 0, 0.2, 1);
  --ds-ripple-color: rgba(0,0,0,0.12);
  --ds-ripple-duration: 300ms;
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FEF7FF",
            "surface": "#FFFFFF",
            "surfaceVariant": "#F5F0F6",
            "primary": "#6750A4",
            "onPrimary": "#FFFFFF",
            "primaryContainer": "#EADDFF",
            "onPrimaryContainer": "#21005D",
            "secondary": "#625B71",
            "onSecondary": "#FFFFFF",
            "secondaryContainer": "#E8DEF8",
            "onSecondaryContainer": "#1D192B",
            "tertiary": "#7D5260",
            "onTertiary": "#FFFFFF",
            "tertiaryContainer": "#FFD8E4",
            "onTertiaryContainer": "#31111D",
            "ink": "#1C1B1F",
            "muted": "#6F6D76",
            "border": "#CAC4D0",
            "focus": "#6750A4",
            "error": "#B3261E",
            "success": "#388E3C",
            "white": "#FFFFFF"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 2px 4px rgba(0,0,0,0.15)",
            "ds-hover": "0 4px 8px rgba(0,0,0,0.2)",
            "ds-active": "0 1px 2px rgba(0,0,0,0.15)",
            "ds-level1": "0 2px 4px rgba(0,0,0,0.15)",
            "ds-level2": "0 4px 8px rgba(0,0,0,0.2)",
            "ds-level3": "0 8px 16px rgba(0,0,0,0.25)",
            "ds-level4": "0 16px 24px rgba(0,0,0,0.3)",
            "ds-level5": "0 24px 32px rgba(0,0,0,0.35)"
      },
      borderRadius: {
            "ds-sm": "4px",
            "ds-md": "8px",
            "ds-lg": "12px",
            "ds-xl": "16px",
            "ds-pill": "9999px"
      },
      fontFamily: {
            "heading": [
                  "\"Google Sans\", \"Roboto\", sans-serif"
            ],
            "body": [
                  "\"Roboto\", sans-serif"
            ],
            "mono": [
                  "\"Roboto Mono\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-medium": 500,
            "ds-bold": 700
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
