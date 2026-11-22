# Glassmorphism Style Preset

## Signature Traits
- **Translucent panels** — `background: rgba(255,255,255,0.1)` with backdrop blur
- **Backdrop blur** — `backdrop-filter: blur(16px)` (fallback: solid bg)
- **Light borders** — `1px solid rgba(255,255,255,0.2)` or subtle colored borders
- **Gradient backgrounds** — Multi-stop gradients behind content
- **Soft shadows** — `0 8px 32px rgba(0,0,0,0.1)` for depth
- **Rounded corners** — 12-24px radius for organic feel

## Do
- Use `backdrop-filter: blur(16px)` on panels over gradients/images
- Layer translucent surfaces: `rgba(255,255,255,0.05-0.15)`
- Borders: `1px solid rgba(255,255,255,0.18)` for light mode, `rgba(255,255,255,0.1)` for dark
- Gradients: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)` or mesh gradients
- Shadows: `0 4px 24px rgba(0,0,0,0.08)`, `0 8px 32px rgba(0,0,0,0.12)` for elevated
- Radius: 12px (cards), 16px (modals), 24px (hero elements)

## Don't
- No opaque solid cards over busy backgrounds without fallback
- No hard black borders (breaks the "glass" illusion)
- No flat colors without transparency — the aesthetic is layered depth
- No sharp corners (radius < 8px feels wrong)
- No heavy opaque shadows — keep them soft and diffused

## Accessibility Watch-outs
- **Low contrast over busy backgrounds** → Minimum opaque overlay (`rgba(0,0,0,0.4)` or `rgba(255,255,255,0.9)`) behind text
- **Backdrop-filter not supported** (Firefox, older Safari) → Solid fallback background required
- **Focus ring** → Use `outline: 2px solid var(--color-primary); outline-offset: 2px;` on glass panels
- **Text on glass** → Ensure 4.5:1 via overlay or solid text container
- **Reduced motion** → Disable parallax/float animations

## Token Reference (tokens.json)
```json
{
  "border": { "width": "1px", "color": "rgba(255,255,255,0.18)" },
  "shadow": { "default": "0 4px 24px rgba(0,0,0,0.08)", "hover": "0 8px 32px rgba(0,0,0,0.12)", "modal": "0 16px 48px rgba(0,0,0,0.16)" },
  "radius": { "sm": "8px", "md": "12px", "lg": "16px", "xl": "24px" },
  "color": {
    "bg": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "surface": "rgba(255,255,255,0.1)",
    "surface-strong": "rgba(255,255,255,0.15)",
    "border": "rgba(255,255,255,0.18)",
    "primary": "#6366f1",
    "primary-hover": "#4f46e5",
    "secondary": "#ec4899",
    "ink": "#1e293b",
    "ink-light": "#64748b",
    "white": "#ffffff",
    "overlay": "rgba(0,0,0,0.4)",
    "overlay-light": "rgba(255,255,255,0.9)"
  },
  "font": {
    "heading": "'Inter', 'DM Sans', sans-serif",
    "body": "'Inter', 'DM Sans', sans-serif",
    "mono": "'JetBrains Mono', 'Fira Code', monospace",
    "weight": { "normal": 400, "medium": 500, "bold": 600 }
  },
  "motion": { "duration": "200ms", "easing": "cubic-bezier(0.4, 0, 0.2, 1)" },
  "blur": { "default": "16px", "strong": "24px" }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 1px;
  --ds-border-color: rgba(255,255,255,0.18);
  --ds-shadow-default: 0 4px 24px rgba(0,0,0,0.08);
  --ds-shadow-hover: 0 8px 32px rgba(0,0,0,0.12);
  --ds-shadow-modal: 0 16px 48px rgba(0,0,0,0.16);
  --ds-radius-sm: 8px;
  --ds-radius-md: 12px;
  --ds-radius-lg: 16px;
  --ds-radius-xl: 24px;
  --ds-color-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --ds-color-surface: rgba(255,255,255,0.1);
  --ds-color-surface-strong: rgba(255,255,255,0.15);
  --ds-color-border: rgba(255,255,255,0.18);
  --ds-color-primary: #6366f1;
  --ds-color-primary-hover: #4f46e5;
  --ds-color-secondary: #ec4899;
  --ds-color-ink: #1e293b;
  --ds-color-ink-light: #64748b;
  --ds-color-white: #ffffff;
  --ds-color-overlay: rgba(0,0,0,0.4);
  --ds-color-overlay-light: rgba(255,255,255,0.9);
  --ds-font-heading: 'Inter', 'DM Sans', sans-serif;
  --ds-font-body: 'Inter', 'DM Sans', sans-serif;
  --ds-font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  --ds-font-weight-normal: 400;
  --ds-font-weight-medium: 500;
  --ds-font-weight-bold: 600;
  --ds-motion-duration: 200ms;
  --ds-motion-easing: cubic-bezier(0.4, 0, 0.2, 1);
  --ds-blur-default: 16px;
  --ds-blur-strong: 24px;
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          surface: 'rgba(255,255,255,0.1)',
          'surface-strong': 'rgba(255,255,255,0.15)',
          border: 'rgba(255,255,255,0.18)',
          primary: '#6366f1',
          'primary-hover': '#4f46e5',
          secondary: '#ec4899',
          ink: '#1e293b',
          'ink-light': '#64748b',
          white: '#ffffff',
          overlay: 'rgba(0,0,0,0.4)',
          'overlay-light': 'rgba(255,255,255,0.9)',
        }
      },
      borderWidth: { 'ds': '1px' },
      boxShadow: {
        'ds': '0 4px 24px rgba(0,0,0,0.08)',
        'ds-hover': '0 8px 32px rgba(0,0,0,0.12)',
        'ds-modal': '0 16px 48px rgba(0,0,0,0.16)',
      },
      borderRadius: { 'ds-sm': '8px', 'ds-md': '12px', 'ds-lg': '16px', 'ds-xl': '24px' },
      backdropBlur: { 'ds': '16px', 'ds-strong': '24px' },
      backgroundImage: {
        'ds-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
      fontFamily: {
        heading: ['Inter', 'DM Sans', 'sans-serif'],
        body: ['Inter', 'DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontWeight: { 'ds-normal': 400, 'ds-medium': 500, 'ds-bold': 600 },
      transitionDuration: { 'ds': '200ms' },
      transitionTimingFunction: { 'ds': 'cubic-bezier(0.4, 0, 0.2, 1)' },
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
  border: var(--ds-border-width) solid var(--ds-border-color);
  box-shadow: var(--ds-shadow-default);
  border-radius: var(--ds-radius-md);
  font-family: var(--ds-font-heading);
  font-weight: var(--ds-font-weight-bold);
  padding: 0.75rem 1.5rem;
  backdrop-filter: blur(var(--ds-blur-default));
  transition: all var(--ds-motion-duration) var(--ds-motion-easing);
}
.ds-btn:hover { box-shadow: var(--ds-shadow-hover); transform: translateY(-1px); }
.ds-btn:focus-visible { outline: 2px solid var(--ds-color-primary); outline-offset: 2px; }
.ds-btn:active { transform: translateY(0); box-shadow: var(--ds-shadow-default); }
.ds-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

.ds-btn-primary { 
  background: var(--ds-color-primary); 
  color: var(--ds-color-white); 
  border-color: transparent;
}
.ds-btn-secondary { 
  background: var(--ds-color-surface-strong); 
  color: var(--ds-color-ink); 
}
</style>
```

### Card (Glass Panel)
```tsx
<div className="ds-card">
  <h3>Glass Card</h3>
  <p>Translucent content panel</p>
</div>

<style>
.ds-card {
  background: var(--ds-color-surface);
  backdrop-filter: blur(var(--ds-blur-default));
  border: var(--ds-border-width) solid var(--ds-border-color);
  box-shadow: var(--ds-shadow-default);
  border-radius: var(--ds-radius-md);
  padding: 1.5rem;
  /* Accessibility: ensure text contrast */
  position: relative;
}
.ds-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--ds-color-overlay-light);
  border-radius: inherit;
  opacity: 0;
  pointer-events: none;
}
@media (prefers-contrast: more) {
  .ds-card::before { opacity: 1; }
}
</style>
```

### Modal
```tsx
<div className="ds-modal-overlay" role="dialog" aria-modal="true">
  <div className="ds-modal">
    <h3>Modal Title</h3>
    <p>Content</p>
  </div>
</div>

<style>
.ds-modal-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(4px);
  display: flex; align-items: center; justify-content: center;
  padding: 1rem;
}
.ds-modal {
  background: var(--ds-color-surface-strong);
  backdrop-filter: blur(var(--ds-blur-strong));
  border: var(--ds-border-width) solid var(--ds-border-color);
  box-shadow: var(--ds-shadow-modal);
  border-radius: var(--ds-radius-lg);
  padding: 2rem;
  max-width: 480px;
  width: 100%;
}
</style>
```

## Deviation Examples
```css
// designsense: Hero section uses opaque background for readability
.hero { background: var(--ds-color-ink); color: var(--ds-color-white); }

// designsense: Data table needs solid rows for scanning
.table-row { background: var(--ds-color-white); backdrop-filter: none; }
```