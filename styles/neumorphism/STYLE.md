# Neumorphism (Soft UI) Style Preset

## Signature Traits
Soft extruded surfaces with dual shadows (light/dark)

## Do
- Use dual shadows (dark bottom-right, light top-left)
- Keep surfaces same color as background
- Use inset shadows for pressed/active states
- Maintain consistent light source (top-left)
- Use generous border radius (12px+)

## Don't
- Don't use borders — shadows define edges
- Don't use high contrast colors on surfaces
- Don't mix with other shadow styles
- Don't use on dark backgrounds (breaks illusion)

## Accessibility Watch-outs
- **CRITICAL**: Low contrast — add visible borders on interactive elements
- **Focus ring**: 3px solid primary with 3px offset (required)
- **Add distinct focus styles beyond shadow changes**: 
- **Consider alternative style for accessibility-critical UIs**: 

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "0px",
    "color": "transparent"
  },
  "shadow": {
    "default": "8px 8px 16px #A3B1C6, -8px -8px 16px #FFFFFF",
    "hover": "10px 10px 20px #A3B1C6, -10px -10px 20px #FFFFFF",
    "active": "inset 4px 4px 8px #A3B1C6, inset -4px -4px 8px #FFFFFF",
    "pressed": "inset 6px 6px 12px #A3B1C6, inset -6px -6px 12px #FFFFFF",
    "concave": "inset 8px 8px 16px #A3B1C6, inset -8px -8px 16px #FFFFFF"
  },
  "radius": {
    "sm": "12px",
    "md": "20px",
    "lg": "28px",
    "xl": "40px"
  },
  "color": {
    "bg": "#E0E5EC",
    "surface": "#E0E5EC",
    "primary": "#6C7A89",
    "secondary": "#A3B1C6",
    "accent": "#FF6B6B",
    "ink": "#2D3748",
    "muted": "#8A9BB8",
    "border": "transparent",
    "focus": "#4299E1",
    "error": "#E53E3E",
    "success": "#38A169",
    "white": "#FFFFFF",
    "shadowDark": "#A3B1C6",
    "shadowLight": "#FFFFFF"
  },
  "font": {
    "heading": "\"Inter\", \"SF Pro Display\", sans-serif",
    "body": "\"Inter\", \"SF Pro Text\", sans-serif",
    "mono": "\"SF Mono\", \"Fira Code\", monospace",
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
  --ds-border-width: 0px;
  --ds-border-color: transparent;
  --ds-shadow-default: 8px 8px 16px #A3B1C6, -8px -8px 16px #FFFFFF;
  --ds-shadow-hover: 10px 10px 20px #A3B1C6, -10px -10px 20px #FFFFFF;
  --ds-shadow-active: inset 4px 4px 8px #A3B1C6, inset -4px -4px 8px #FFFFFF;
  --ds-shadow-pressed: inset 6px 6px 12px #A3B1C6, inset -6px -6px 12px #FFFFFF;
  --ds-shadow-concave: inset 8px 8px 16px #A3B1C6, inset -8px -8px 16px #FFFFFF;
  --ds-radius-sm: 12px;
  --ds-radius-md: 20px;
  --ds-radius-lg: 28px;
  --ds-radius-xl: 40px;
  --ds-color-bg: #E0E5EC;
  --ds-color-surface: #E0E5EC;
  --ds-color-primary: #6C7A89;
  --ds-color-secondary: #A3B1C6;
  --ds-color-accent: #FF6B6B;
  --ds-color-ink: #2D3748;
  --ds-color-muted: #8A9BB8;
  --ds-color-border: transparent;
  --ds-color-focus: #4299E1;
  --ds-color-error: #E53E3E;
  --ds-color-success: #38A169;
  --ds-color-white: #FFFFFF;
  --ds-color-shadowDark: #A3B1C6;
  --ds-color-shadowLight: #FFFFFF;
  --ds-font-heading: "Inter", "SF Pro Display", sans-serif;
  --ds-font-body: "Inter", "SF Pro Text", sans-serif;
  --ds-font-mono: "SF Mono", "Fira Code", monospace;
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
            "bg": "#E0E5EC",
            "surface": "#E0E5EC",
            "primary": "#6C7A89",
            "secondary": "#A3B1C6",
            "accent": "#FF6B6B",
            "ink": "#2D3748",
            "muted": "#8A9BB8",
            "border": "transparent",
            "focus": "#4299E1",
            "error": "#E53E3E",
            "success": "#38A169",
            "white": "#FFFFFF",
            "shadowDark": "#A3B1C6",
            "shadowLight": "#FFFFFF"
      } },
      borderWidth: {
            "ds": "0px"
      },
      boxShadow: {
            "ds-default": "8px 8px 16px #A3B1C6, -8px -8px 16px #FFFFFF",
            "ds-hover": "10px 10px 20px #A3B1C6, -10px -10px 20px #FFFFFF",
            "ds-active": "inset 4px 4px 8px #A3B1C6, inset -4px -4px 8px #FFFFFF",
            "ds-pressed": "inset 6px 6px 12px #A3B1C6, inset -6px -6px 12px #FFFFFF",
            "ds-concave": "inset 8px 8px 16px #A3B1C6, inset -8px -8px 16px #FFFFFF"
      },
      borderRadius: {
            "ds-sm": "12px",
            "ds-md": "20px",
            "ds-lg": "28px",
            "ds-xl": "40px"
      },
      fontFamily: {
            "heading": [
                  "\"Inter\", \"SF Pro Display\", sans-serif"
            ],
            "body": [
                  "\"Inter\", \"SF Pro Text\", sans-serif"
            ],
            "mono": [
                  "\"SF Mono\", \"Fira Code\", monospace"
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
