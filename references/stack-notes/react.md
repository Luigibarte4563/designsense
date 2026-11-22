# React / Next.js Stack Notes

## Token Integration

### CSS Variables (Recommended)
```tsx
// app/globals.css
@import '../styles/neobrutalism/css-variables.css';

// components/Button.tsx
export function Button({ children, ...props }) {
  return <button className="ds-btn" {...props}>{children}</button>;
}
```

### Tailwind Preset
```js
// tailwind.config.js
const designsense = require('designsense/styles/neobrutalism/tailwind.preset.js');
module.exports = { presets: [designsense], ... };
```

```tsx
// components/Button.tsx
export function Button({ variant = 'primary', ...props }) {
  return (
    <button className={`ds-btn ds-btn-${variant}`} {...props} />
  );
}
```

### CSS-in-JS (Styled Components / Emotion)
```ts
// theme/neobrutalism.ts
import tokens from 'designsense/styles/neobrutalism/tokens.json';
export const theme = {
  border: tokens.border,
  shadow: tokens.shadow,
  radius: tokens.radius,
  color: tokens.color,
  font: tokens.font,
  motion: tokens.motion,
};
```

```tsx
// components/Button.styles.ts
import styled from 'styled-components';
export const Button = styled.button`
  border: ${p => p.theme.border.width} solid ${p => p.theme.border.color};
  box-shadow: ${p => p.theme.shadow.default};
  border-radius: ${p => p.theme.radius.md};
  font-family: ${p => p.theme.font.heading};
  font-weight: ${p => p.theme.font.weight.bold};
  padding: 0.75rem 1.5rem;
  transition: box-shadow ${p => p.theme.motion.duration};
  &:hover { box-shadow: ${p => p.theme.shadow.hover}; }
  &:focus-visible { outline: 3px solid ${p => p.theme.color.focus}; outline-offset: 3px; }
`;
```

### Theme Provider Pattern
```tsx
// providers/DesignSenseProvider.tsx
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/neobrutalism';

export function DesignSenseProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
```

## Component State Management

### Loading/Empty/Error Pattern
```tsx
// hooks/useAsync.ts
export function useAsync(asyncFn, deps) {
  const [state, setState] = useState({ data: null, loading: true, error: null });
  useEffect(() => {
    let mounted = true;
    setState(s => ({ ...s, loading: true, error: null }));
    asyncFn().then(data => mounted && setState({ data, loading: false, error: null }))
      .catch(err => mounted && setState({ data: null, loading: false, error: err }));
    return () => { mounted = false; };
  }, deps);
  return state;
}

// components/UserList.tsx
export function UserList() {
  const { data, loading, error } = useAsync(fetchUsers, []);
  if (loading) return <Skeleton count={5} />;
  if (error) return <ErrorMessage error={error} onRetry={() => refetch()} />;
  if (!data?.length) return <EmptyState message="No users" action={<Button>Add User</Button>} />;
  return <ul>{data.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}
```

## Focus Management
```tsx
// hooks/useFocusTrap.ts
export function useFocusTrap(active) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!active || !ref.current) return;
    const focusables = ref.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    first?.focus();
    function handleTab(e: KeyboardEvent) {
      if (e.key !== 'Tab') return;
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
      if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
    }
    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [active]);
  return ref;
}
```

## Reduced Motion
```tsx
// hooks/useReducedMotion.ts
export function useReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduce(media.matches);
    const handler = (e: MediaQueryListEvent) => setReduce(e.matches);
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);
  return reduce;
}

// components/Modal.tsx
export function Modal({ open, onClose, children }) {
  const reduce = useReducedMotion();
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="ds-modal-overlay"
          initial={reduce ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? {} : { opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.2 }}
          onClick={e => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            className="ds-modal"
            initial={reduce ? {} : { scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={reduce ? {} : { scale: 0.95, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

## Shadcn/UI Integration
```ts
// lib/designsense-theme.ts
import tokens from 'designsense/styles/neobrutalism/tokens.json';
export const designsenseTheme = {
  colors: {
    primary: tokens.color.primary,
    'primary-foreground': tokens.color.ink,
    secondary: tokens.color.secondary,
    'secondary-foreground': tokens.color.ink,
    background: tokens.color.bg,
    foreground: tokens.color.ink,
    border: tokens.border.color,
    ring: tokens.color.focus,
  },
  borderRadius: {
    DEFAULT: tokens.radius.md,
    sm: tokens.radius.sm,
    lg: tokens.radius.lg,
  },
  boxShadow: {
    DEFAULT: tokens.shadow.default,
    hover: tokens.shadow.hover,
  },
  fontFamily: {
    heading: tokens.font.heading,
    body: tokens.font.body,
    mono: tokens.font.mono,
  },
};
```

```ts
// tailwind.config.js
const { designsenseTheme } = require('./lib/designsense-theme');
module.exports = {
  theme: { extend: designsenseTheme },
  plugins: [require('@shadcn/ui/tailwind')],
};
```

## Next.js App Router Notes
- Put CSS variables in `app/globals.css` (imports once)
- Client components for interactivity (`'use client'`)
- Server components for static content (no hydration)
- `next/font` for font loading (prevents layout shift)