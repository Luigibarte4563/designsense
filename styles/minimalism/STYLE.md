# Minimalism Style Preset

## Signature Traits
- **Whitespace first** — Generous padding/margins, content breathes
- **Restrained palette** — Neutral grays + 1 accent color only
- **No decoration** — No shadows, no gradients, no borders (or hairline only)
- **Content hierarchy via type** — Scale, weight, spacing do the work
- **Subtle interactions** — Color change only, no elevation/shadow on hover
- **System fonts preferred** — Or clean geometric sans (Inter, DM Sans)

## Do
- Use 8px base spacing scale, 4x-8x for section gaps
- One accent color: `#0066CC` (blue), `#00AA55` (green), `#CC3300` (red), etc.
- Backgrounds: `#FFFFFF` (light), `#0A0A0A` (dark) — true white/black
- Text: `#1A1A1A` / `#F5F5F5` (high contrast), muted: `#666666` / `#999999`
- Borders: `1px solid #E5E5E5` (light) / `#333333` (dark) — or none
- Radius: 4-8px consistent, or 0 for strict minimal
- Shadows: `none` or `0 1px 3px rgba(0,0,0,0.04)` — barely perceptible

## Don't
- No decorative shadows, glows, or elevations
- No gradients (except subtle 2-stop for accent hover)
- No thick borders — hairline or none
- No multiple accent colors — one only
- No rounded pills — 4-8px or 0
- No animation for decoration — only functional transitions (150-200ms)

## Accessibility Watch-outs
- **Contrast is easy** — high contrast by default, but verify accent on white/black
- **Focus ring** → `outline: 2px solid var(--color-accent); outline-offset: 2px;` (visible on white/dark)
- **Touch targets** → 44px via padding, not borders
- **Reduced motion** → Instant state changes or 150ms max

## Token Reference (tokens.json)
```json
{
  "border": { "width": "1px", "color": "#E5E5E5" },
  "shadow": { "default": "none", "subtle": "0 1px 3px rgba(0,0,0,0.04)", "focus": "0 0 0 2px var(--color-accent)" },
  "radius": { "sm": "4px", "md": "6px", "lg": "8px" },
  "color": {
    "bg": "#FFFFFF",
    "surface": "#FAFAFA",
    "primary": "#0066CC",
    "primary-hover": "#0052A3",
    "secondary": "#666666",
    "ink": "#1A1A1A",
    "muted": "#666666",
    "border": "#E5E5E5",
    "focus": "#0066CC",
    "error": "#CC3300",
    "success": "#00AA55"
  },
  "font": {
    "heading": "system-ui, -apple-system, 'Inter', sans-serif",
    "body": "system-ui, -apple-system, 'Inter', sans-serif",
    "mono": "'SF Mono', 'Fira Code', monospace",
    "weight": { "normal": 400, "medium": 500, "bold": 600 }
  },
  "motion": { "duration": "150ms", "easing": "ease-out" },
  "space": { "base": "8px", "scale": [0, 4, 8, 16, 24, 32, 48, 64, 96] }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 1px;
  --ds-border-color: #E5E5E5;
  --ds-shadow-default: none;
  --ds-shadow-subtle: 0 1px 3px rgba(0,0,0,0.04);
  --ds-shadow-focus: 0 0 0 2px var(--ds-color-focus);
  --ds-radius-sm: 4px;
  --ds-radius-md: 6px;
  --ds-radius-lg: 8px;
  --ds-color-bg: #FFFFFF;
  --ds-color-surface: #FAFAFA;
  --ds-color-primary: #0066CC;
  --ds-color-primary-hover: #0052A3;
  --ds-color-secondary: #666666;
  --ds-color-ink: #1A1A1A;
  --ds-color-muted: #666666;
  --ds-color-border: #E5E5E5;
  --ds-color-focus: #0066CC;
  --ds-color-error: #CC3300;
  --ds-color-success: #00AA55;
  --ds-font-heading: system-ui, -apple-system, 'Inter', sans-serif;
  --ds-font-body: system-ui, -apple-system, 'Inter', sans-serif;
  --ds-font-mono: 'SF Mono', 'Fira Code', monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-medium: 500;
  --ds-font-weight-bold: 600;
  --ds-motion-duration: 150ms;
  --ds-motion-easing: ease-out;
  --ds-space-base: 8px;
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: '#FFFFFF',
          surface: '#FAFAFA',
          primary: '#0066CC',
          'primary-hover': '#0052A3',
          secondary: '#666666',
          ink: '#1A1A1A',
          muted: '#666666',
          border: '#E5E5E5',
          focus: '#0066CC',
          error: '#CC3300',
          success: '#00AA55',
        }
      },
      borderWidth: { 'ds': '1px', 'hairline': '0.5px' },
      boxShadow: {
        'ds': 'none',
        'ds-subtle': '0 1px 3px rgba(0,0,0,0.04)',
        'ds-focus': '0 0 0 2px #0066CC',
      },
      borderRadius: { 'ds-sm': '4px', 'ds-md': '6px', 'ds-lg': '8px' },
      fontFamily: {
        heading: ['system-ui', '-apple-system', 'Inter', 'sans-serif'],
        body: ['system-ui', '-apple-system', 'Inter', 'sans-serif'],
        mono: ['SF Mono', 'Fira Code', 'monospace'],
      },
      fontWeight: { 'ds-normal': 400, 'ds-medium': 500, 'ds-bold': 600 },
      spacing: {
        'ds-0': '0', 'ds-1': '4px', 'ds-2': '8px', 'ds-3': '16px',
        'ds-4': '24px', 'ds-5': '32px', 'ds-6': '48px', 'ds-8': '64px', 'ds-12': '96px',
      },
      transitionDuration: { 'ds': '150ms' },
      transitionTimingFunction: { 'ds': 'ease-out' },
    }
  }
}
```

## Example Component Patterns

### Button
```tsx
<button className="ds-btn ds-btn-primary">
  Primary Action
</button>

<style>
.ds-btn {
  border: none;
  border-radius: var(--ds-radius-md);
  font-family: var(--ds-font-heading);
  font-weight: var(--ds-font-weight-medium);
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  transition: background-color var(--ds-motion-duration) var(--ds-motion-easing);
}
.ds-btn:focus-visible { outline: 2px solid var(--ds-color-focus); outline-offset: 2px; }
.ds-btn:disabled { opacity: 0.4; cursor: not-allowed; }

.ds-btn-primary { background: var(--ds-color-primary); color: white; }
.ds-btn-primary:hover { background: var(--ds-color-primary-hover); }
.ds-btn-secondary { background: var(--ds-color-surface); color: var(--ds-color-ink); border: 1px solid var(--ds-color-border); }
.ds-btn-secondary:hover { background: var(--ds-color-border); }
</style>
```

### Card
```tsx
<div className="ds-card">
  <h3>Card Title</h3>
  <p>Content with generous whitespace</p>
</div>

<style>
.ds-card {
  background: var(--ds-color-surface);
  border: 1px solid var(--ds-color-border);
  border-radius: var(--ds-radius-md);
  padding: 1.5rem;
}
</style>
```

### Input
```tsx
<input className="ds-input" placeholder="Enter text..." />

<style>
.ds-input {
  border: 1px solid var(--ds-color-border);
  border-radius: var(--ds-radius-sm);
  padding: 0.625rem 0.875rem;
  font-family: var(--ds-font-body);
  font-size: 0.875rem;
  background: var(--ds-color-bg);
  color: var(--ds-color-ink);
  width: 100%;
  transition: border-color var(--ds-motion-duration), box-shadow var(--ds-motion-duration);
}
.ds-input:hover { border-color: var(--ds-color-muted); }
.ds-input:focus { 
  outline: none; 
  border-color: var(--ds-color-focus); 
  box-shadow: var(--ds-shadow-focus); 
}
</style>
```

## Deviation Examples
```css
// designsense: Marketing hero uses larger type scale
.hero-title { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 700; }

// designsense: Divider needs visual separation
.divider { border-top: 1px solid var(--ds-color-border); margin: var(--ds-space-6) 0; }
```