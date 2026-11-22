# Voice / Conversational UI Style Preset

## Signature Traits
Chat-style, minimal visuals, audio-first interaction

## Do
- Chat bubbles as primary UI
- Minimal visual chrome
- Visual feedback for voice states (listening, thinking, speaking)
- Waveform/orb animations
- Transcript as secondary
- Hands-free first

## Don't
- Don't use complex visual layouts
- Don't require visual attention
- Don't skip voice state indicators
- Don't use small touch targets

## Accessibility Watch-outs
- **Screen reader**: native chat pattern
- **Focus**: logical tab order
- **Voice states**: announced via aria-live
- **Visual + audio redundancy**: 

## Token Reference (tokens.json)
```json
{
  "border": {
    "width": "0px",
    "color": "transparent"
  },
  "shadow": {
    "default": "0 2px 8px rgba(0,0,0,0.06)",
    "hover": "0 4px 16px rgba(0,0,0,0.1)"
  },
  "radius": {
    "sm": "12px",
    "md": "18px",
    "lg": "24px",
    "pill": "9999px"
  },
  "color": {
    "bg": "#FAFAFA",
    "surface": "#FFFFFF",
    "user": "#6366F1",
    "assistant": "#F3F4F6",
    "primary": "#6366F1",
    "secondary": "#EC4899",
    "accent": "#F59E0B",
    "ink": "#1F2937",
    "muted": "#6B7280",
    "border": "#E5E7EB",
    "focus": "#6366F1",
    "error": "#EF4444",
    "success": "#22C55E",
    "white": "#FFFFFF",
    "listening": "#10B981",
    "thinking": "#F59E0B",
    "speaking": "#6366F1"
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
    "duration": "200ms",
    "easing": "cubic-bezier(0.4, 0, 0.2, 1)",
    "wave": "cubic-bezier(0.34, 1.56, 0.64, 1)"
  }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 0px;
  --ds-border-color: transparent;
  --ds-shadow-default: 0 2px 8px rgba(0,0,0,0.06);
  --ds-shadow-hover: 0 4px 16px rgba(0,0,0,0.1);
  --ds-radius-sm: 12px;
  --ds-radius-md: 18px;
  --ds-radius-lg: 24px;
  --ds-radius-pill: 9999px;
  --ds-color-bg: #FAFAFA;
  --ds-color-surface: #FFFFFF;
  --ds-color-user: #6366F1;
  --ds-color-assistant: #F3F4F6;
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
  --ds-color-listening: #10B981;
  --ds-color-thinking: #F59E0B;
  --ds-color-speaking: #6366F1;
  --ds-font-heading: "Inter", "SF Pro Display", sans-serif;
  --ds-font-body: "Inter", "SF Pro Text", sans-serif;
  --ds-font-mono: "JetBrains Mono", monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-medium: 500;
  --ds-font-weight-bold: 600;
  --ds-motion-duration: 200ms;
  --ds-motion-easing: cubic-bezier(0.4, 0, 0.2, 1);
  --ds-motion-wave: cubic-bezier(0.34, 1.56, 0.64, 1);
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
            "user": "#6366F1",
            "assistant": "#F3F4F6",
            "primary": "#6366F1",
            "secondary": "#EC4899",
            "accent": "#F59E0B",
            "ink": "#1F2937",
            "muted": "#6B7280",
            "border": "#E5E7EB",
            "focus": "#6366F1",
            "error": "#EF4444",
            "success": "#22C55E",
            "white": "#FFFFFF",
            "listening": "#10B981",
            "thinking": "#F59E0B",
            "speaking": "#6366F1"
      } },
      borderWidth: {
            "ds": "0px"
      },
      boxShadow: {
            "ds-default": "0 2px 8px rgba(0,0,0,0.06)",
            "ds-hover": "0 4px 16px rgba(0,0,0,0.1)"
      },
      borderRadius: {
            "ds-sm": "12px",
            "ds-md": "18px",
            "ds-lg": "24px",
            "ds-pill": "9999px"
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
