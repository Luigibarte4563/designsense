# Motion-First / Kinetic Style Preset

## Signature Traits
Animation drives the design, choreographed interactions

## Do
- Animation as primary design tool
- Choreographed entrance/exit sequences
- Staggered reveals
- Spring physics for natural feel
- Meaningful transitions between states
- Micro-interactions on every action

## Don't
- Don't animate without purpose
- Don't use linear easing
- Don't skip reduced motion support
- Don't block interaction during animation

## Accessibility Watch-outs
- **CRITICAL**: prefers-reduced-motion disables ALL non-essential animation
- **Focus**: immediate, no animation
- **Provide instant-complete alternative**: 
- **Test with vestibular disorders**: 

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "1px",
    "color": "rgba(0,0,0,0.1)"
  },
  "shadow": {
    "default": "0 4px 16px rgba(0,0,0,0.1)",
    "hover": "0 8px 24px rgba(0,0,0,0.15)"
  },
  "radius": {
    "sm": "8px",
    "md": "12px",
    "lg": "16px"
  },
  "color": {
    "bg": "#FAFAFA",
    "surface": "#FFFFFF",
    "primary": "#6366F1",
    "secondary": "#EC4899",
    "accent": "#F59E0B",
    "ink": "#1F2937",
    "muted": "#6B7280",
    "border": "#E5E7EB",
    "focus": "#6366F1",
    "error": "#EF4444",
    "success": "#22C55E",
    "white": "#FFFFFF"
  },
  "font": {
    "heading": "\"Inter\", \"SF Pro Display\", sans-serif",
    "body": "\"Inter\", \"SF Pro Text\", sans-serif",
    "mono": "\"JetBrains Mono\", monospace",
    "weight": {
      "normal": 400,
      "medium": 500,
      "bold": 600
    }
  },
  "motion": {
    "duration": "300ms",
    "easing": "cubic-bezier(0.4, 0, 0.2, 1)",
    "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
    "stagger": "50ms",
    "pageTransition": "400ms",
    "microInteraction": "150ms"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 1px;
  --ds-border-color: rgba(0,0,0,0.1);
  --ds-shadow-default: 0 4px 16px rgba(0,0,0,0.1);
  --ds-shadow-hover: 0 8px 24px rgba(0,0,0,0.15);
  --ds-radius-sm: 8px;
  --ds-radius-md: 12px;
  --ds-radius-lg: 16px;
  --ds-color-bg: #FAFAFA;
  --ds-color-surface: #FFFFFF;
  --ds-color-primary: #6366F1;
  --ds-color-secondary: #EC4899;
  --ds-color-accent: #F59E0B;
  --ds-color-ink: #1F2937;
  --ds-color-muted: #6B7280;
  --ds-color-border: #E5E7EB;
  --ds-color-focus: #6366F1;
  --ds-color-error: #EF4444;
  --ds-color-success: #22C55E;
  --ds-color-white: #FFFFFF;
  --ds-font-heading: "Inter", "SF Pro Display", sans-serif;
  --ds-font-body: "Inter", "SF Pro Text", sans-serif;
  --ds-font-mono: "JetBrains Mono", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-medium: 500;
  --ds-font-weight-bold: 600;
  --ds-motion-duration: 300ms;
  --ds-motion-easing: cubic-bezier(0.4, 0, 0.2, 1);
  --ds-motion-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ds-motion-stagger: 50ms;
  --ds-motion-pageTransition: 400ms;
  --ds-motion-microInteraction: 150ms;
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
            "primary": "#6366F1",
            "secondary": "#EC4899",
            "accent": "#F59E0B",
            "ink": "#1F2937",
            "muted": "#6B7280",
            "border": "#E5E7EB",
            "focus": "#6366F1",
            "error": "#EF4444",
            "success": "#22C55E",
            "white": "#FFFFFF"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 4px 16px rgba(0,0,0,0.1)",
            "ds-hover": "0 8px 24px rgba(0,0,0,0.15)"
      },
      borderRadius: {
            "ds-sm": "8px",
            "ds-md": "12px",
            "ds-lg": "16px"
      },
      fontFamily: {
            "heading": [
                  "\"Inter\", \"SF Pro Display\", sans-serif"
            ],
            "body": [
                  "\"Inter\", \"SF Pro Text\", sans-serif"
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
            "ds": "300ms"
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
