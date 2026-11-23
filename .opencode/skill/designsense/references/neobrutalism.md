# Neobrutalism Style Reference

## Tokens
Location: `styles/neobrutalism/tokens.json`

### Key Characteristics
- **Borders**: 3px solid black (`--border-width: 3px`, `--color-border: #000`)
- **Shadows**: 4px/4px/0 offset, black (`--shadow: 4px 4px 0 #000`)
- **Colors**: Flat, saturated, high contrast
- **Typography**: Bold, system fonts
- **Radius**: 0 (sharp corners)

### CSS Variables (from tokens.json)
```css
:root {
  --color-primary: #0066ff;
  --color-secondary: #ff3366;
  --color-accent: #ffcc00;
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-text-muted: #333333;
  --color-border: #000000;
  --border-width: 3px;
  --radius: 0;
  --shadow: 4px 4px 0 #000;
  --font-weight-bold: 700;
}
```

## Usage

### In OpenCode skill
```
/designsense neobrutalism full
```

### In config (`.designsense/style.json`)
```json
{ "level": "full", "style": "neobrutalism" }
```

### Direct token import (CSS)
```css
@import 'styles/neobrutalism/css-variables.css';
```

### Tailwind
```js
// tailwind.config.js
const neobrutalism = require('./styles/neobrutalism/tailwind.preset.js');
module.exports = { presets: [neobrutalism] };
```

## Component Patterns

### Button
```html
<button class="btn" style="
  border: 3px solid #000;
  box-shadow: 4px 4px 0 #000;
  background: #0066ff;
  color: #fff;
  padding: 12px 24px;
  font-weight: 700;
  border-radius: 0;
">
  Primary
</button>
```

### Card
```html
<div class="card" style="
  border: 3px solid #000;
  box-shadow: 4px 4px 0 #000;
  border-radius: 0;
  padding: 24px;
  background: #fff;
">
  Content
</div>
```

### Focus State
```css
:focus-visible {
  outline: 3px solid #000;
  outline-offset: 2px;
}
```

## Accessibility Notes
- High contrast by default (meets WCAG 2.2 AA)
- Focus rings use same border/shadow system
- No reduced-motion conflicts (no animations)
- Touch targets: ensure 44×44px minimum