# Neobrutalism Style Preset

## Signature Traits
- **Thick black borders** (3px) on all interactive elements and cards
- **Hard offset shadows** (4px/4px/0 #000 default, 6px/6px/0 #000 hover)
- **Saturated flat colors** — no gradients, no transparency
- **Bold typography** — weight 800 for headings, monospace or geometric sans
- **Zero/minimal border radius** — sharp corners (0-4px)
- **High contrast by default** — ink on bright backgrounds

## Do
- Use `border: 3px solid #000` as the primary visual separator
- Use `box-shadow: 4px 4px 0 #000` for elevation; increase on hover
- Keep colors flat and opaque: `#FFD23F`, `#FF6B9D`, `#00FFAA`, `#000`, `#FFF`
- Use geometric sans (Space Grotesk, DM Sans, Inter Tight) at weight 700-800
- Make primary actions unmissable: thick border + shadow + bright fill

## Don't
- No blur, backdrop-filter, or transparency
- No soft shadows (no `rgba(0,0,0,0.1)`)
- No rounded pills (radius > 4px)
- No subtle gray borders — borders are thick and black
- No gradient backgrounds

## Accessibility Watch-outs
- **Ink on yellow/pink must meet 4.5:1** — test `#000` on `#FFD23F` and `#FF6B9D`
- **Focus ring**: Use `outline: 3px solid #000; outline-offset: 3px;` — never rely on shadow-only focus
- **Touch targets**: 3px border + padding naturally exceeds 44px; verify
- **Reduced motion**: Instant shadow jumps on hover (no transition)

## Token Reference (tokens.json)
```json
{
  "border": { "width": "3px", "color": "#000" },
  "shadow": { "default": "4px 4px 0 #000", "hover": "6px 6px 0 #000" },
  "radius": { "sm": "0px", "md": "4px", "lg": "8px" },
  "color": {
    "bg": "#FFF4E0",
    "surface": "#FFFFFF",
    "primary": "#FFD23F",
    "secondary": "#FF6B9D",
    "accent": "#00FFAA",
    "ink": "#000000",
    "muted": "#666666",
    "border": "#000000"
  },
  "font": {
    "heading": "'Space Grotesk', 'DM Sans', sans-serif",
    "body": "'DM Sans', 'Inter', sans-serif",
    "mono": "'JetBrains Mono', 'Fira Code', monospace",
    "weight": { "normal": 500, "bold": 800 }
  },
  "motion": { "duration": "0ms", "easing": "linear" }
}
```

## CSS Variables (css-variables.css)
```css
:root {
  --ds-border-width: 3px;
  --ds-border-color: #000;
  --ds-shadow-default: 4px 4px 0 #000;
  --ds-shadow-hover: 6px 6px 0 #000;
  --ds-radius-sm: 0px;
  --ds-radius-md: 4px;
  --ds-radius-lg: 8px;
  --ds-color-bg: #FFF4E0;
  --ds-color-surface: #FFFFFF;
  --ds-color-primary: #FFD23F;
  --ds-color-secondary: #FF6B9D;
  --ds-color-accent: #00FFAA;
  --ds-color-ink: #000;
  --ds-color-muted: #666;
  --ds-color-border: #000;
  --ds-font-heading: 'Space Grotesk', 'DM Sans', sans-serif;
  --ds-font-body: 'DM Sans', 'Inter', sans-serif;
  --ds-font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  --ds-font-weight-normal: 500;
  --ds-font-weight-bold: 800;
  --ds-motion-duration: 0ms;
}
```

## Tailwind Preset (tailwind.preset.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: '#FFF4E0',
          surface: '#FFFFFF',
          primary: '#FFD23F',
          secondary: '#FF6B9D',
          accent: '#00FFAA',
          ink: '#000',
          muted: '#666666',
          border: '#000',
        }
      },
      borderWidth: { 'ds': '3px' },
      boxShadow: {
        'ds': '4px 4px 0 #000',
        'ds-hover': '6px 6px 0 #000',
      },
      borderRadius: { 'ds-sm': '0px', 'ds-md': '4px', 'ds-lg': '8px' },
      fontFamily: {
        heading: ['Space Grotesk', 'DM Sans', 'sans-serif'],
        body: ['DM Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontWeight: { 'ds-normal': 500, 'ds-bold': 800 },
      transitionDuration: { 'ds': '0ms' },
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
  transition: box-shadow 0ms, transform 0ms;
}
.ds-btn:hover { box-shadow: var(--ds-shadow-hover); }
.ds-btn:focus-visible { outline: 3px solid var(--ds-color-ink); outline-offset: 3px; }
.ds-btn:active { box-shadow: var(--ds-shadow-default); transform: translate(2px, 2px); }
.ds-btn:disabled { opacity: 0.5; cursor: not-allowed; box-shadow: none; }

.ds-btn-primary { background: var(--ds-color-primary); color: var(--ds-color-ink); }
.ds-btn-secondary { background: var(--ds-color-secondary); color: var(--ds-color-ink); }
</style>
```

### Card
```tsx
<div className="ds-card">
  <h3>Card Title</h3>
  <p>Content goes here</p>
</div>

<style>
.ds-card {
  border: var(--ds-border-width) solid var(--ds-border-color);
  box-shadow: var(--ds-shadow-default);
  border-radius: var(--ds-radius-md);
  background: var(--ds-color-surface);
  padding: 1.5rem;
}
</style>
```

### Input
```tsx
<input className="ds-input" placeholder="Enter text..." />

<style>
.ds-input {
  border: var(--ds-border-width) solid var(--ds-border-color);
  border-radius: var(--ds-radius-md);
  padding: 0.75rem 1rem;
  font-family: var(--ds-font-body);
  font-size: 1rem;
  background: var(--ds-color-surface);
  color: var(--ds-color-ink);
  width: 100%;
}
.ds-input:focus { outline: 3px solid var(--ds-color-ink); outline-offset: 3px; }
</style>
```

## Deviation Examples
```css
// designsense: Brand requires 2px border for logo mark only
.logo-mark { border-width: 2px; }

// designsense: Legal disclaimer needs smaller text
.disclaimer { font-size: 0.75rem; font-weight: 400; }
```