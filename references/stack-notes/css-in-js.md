# CSS-in-JS Stack Notes (Styled Components, Emotion, Stitches, Panda CSS)

## Token Integration

### Theme Object from Tokens
```ts
// theme/tokens.ts
import neobrutalism from 'designsense/styles/neobrutalism/tokens.json';
import glassmorphism from 'designsense/styles/glassmorphism/tokens.json';
import minimalism from 'designsense/styles/minimalism/tokens.json';

export type StyleName = 'neobrutalism' | 'glassmorphism' | 'minimalism';
export const themes: Record<StyleName, typeof neobrutalism> = {
  neobrutalism,
  glassmorphism,
  minimalism,
};

export function createTheme(style: StyleName) {
  const t = themes[style];
  return {
    border: t.border,
    shadow: t.shadow,
    radius: t.radius,
    color: t.color,
    font: t.font,
    motion: t.motion,
    blur: t.blur,
    space: t.space,
  };
}
```

### Styled Components
```tsx
// theme/ThemeProvider.tsx
import { ThemeProvider } from 'styled-components';
import { createTheme, type StyleName } from './tokens';
import { useState } from 'react';

export function DesignSenseProvider({ children, initialStyle = 'neobrutalism' }) {
  const [style, setStyle] = useState<StyleName>(initialStyle);
  const theme = createTheme(style);
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
```

```tsx
// components/Button.styles.ts
import styled, { css } from 'styled-components';

export const Button = styled.button`
  border: ${p => p.theme.border.width} solid ${p => p.theme.border.color};
  box-shadow: ${p => p.theme.shadow.default};
  border-radius: ${p => p.theme.radius.md};
  font-family: ${p => p.theme.font.heading};
  font-weight: ${p => p.theme.font.weight.bold};
  padding: 0.75rem 1.5rem;
  transition: box-shadow ${p => p.theme.motion.duration}, transform ${p => p.theme.motion.duration};
  
  &:hover { box-shadow: ${p => p.theme.shadow.hover}; }
  &:focus-visible { outline: 3px solid ${p => p.theme.color.focus}; outline-offset: 3px; }
  &:active { box-shadow: ${p => p.theme.shadow.default}; transform: translate(2px, 2px); }
  &:disabled { opacity: 0.5; cursor: not-allowed; box-shadow: none; transform: none; }
  
  ${p => p.variant === 'primary' && css`
    background: ${p => p.theme.color.primary};
    color: ${p => p.theme.color.ink};
  `}
  ${p => p.variant === 'secondary' && css`
    background: ${p => p.theme.color.secondary};
    color: ${p => p.theme.color.ink};
  `}
`;

export const LoadingSpinner = styled.span`
  display: inline-block;
  width: 1em; height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    border-color: currentColor;
  }
`;
@keyframes spin { to { transform: rotate(360deg); } }
```

```tsx
// components/Button.tsx
import { Button, LoadingSpinner } from './Button.styles';
export function Button({ variant = 'primary', loading, disabled, children, ...props }) {
  return (
    <Button variant={variant} disabled={loading || disabled} aria-busy={loading} aria-disabled={disabled} {...props}>
      {loading ? <LoadingSpinner aria-hidden="true" /> : children}
    </Button>
  );
}
```

### Emotion
```tsx
// theme/ThemeProvider.tsx
import { CacheProvider, createCache } from '@emotion/cache';
import { ThemeProvider } from '@emotion/react';
import { createTheme, type StyleName } from './tokens';
import { useMemo, useState } from 'react';

export function DesignSenseProvider({ children, initialStyle = 'neobrutalism' }) {
  const [style, setStyle] = useState<StyleName>(initialStyle);
  const theme = useMemo(() => createTheme(style), [style]);
  const cache = useMemo(() => createCache({ key: 'designsense' }), []);
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
}
```

```tsx
// components/Button.styles.ts
import { css, keyframes } from '@emotion/react';

export const buttonBase = (theme) => css`
  border: ${theme.border.width} solid ${theme.border.color};
  box-shadow: ${theme.shadow.default};
  border-radius: ${theme.radius.md};
  font-family: ${theme.font.heading};
  font-weight: ${theme.font.weight.bold};
  padding: 0.75rem 1.5rem;
  transition: box-shadow ${theme.motion.duration}, transform ${theme.motion.duration};
  &:hover { box-shadow: ${theme.shadow.hover}; }
  &:focus-visible { outline: 3px solid ${theme.color.focus}; outline-offset: 3px; }
  &:active { box-shadow: ${theme.shadow.default}; transform: translate(2px, 2px); }
  &:disabled { opacity: 0.5; cursor: not-allowed; box-shadow: none; transform: none; }
`;

export const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const loadingSpinner = (theme) => css`
  display: inline-block;
  width: 1em; height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    border-color: currentColor;
  }
`;
```

### Stitches (Recommended for Performance)
```ts
// stitches.config.ts
import { createStitches } from '@stitches/react';
import neobrutalism from 'designsense/styles/neobrutalism/tokens.json';

export const { styled, css, globalCss, keyframes, theme, createTheme } = createStitches({
  theme: {
    colors: neobrutalism.color,
    space: neobrutalism.space?.scale?.map(v => `${v}px`) || {},
    fontSizes: {},
    fonts: {
      heading: neobrutalism.font.heading,
      body: neobrutalism.font.body,
      mono: neobrutalism.font.mono,
    },
    fontWeights: neobrutalism.font.weight,
    borderWidths: { ds: neobrutalism.border.width },
    borderStyles: { solid: 'solid' },
    borderColors: { default: neobrutalism.border.color },
    radii: neobrutalism.radius,
    shadows: neobrutalism.shadow,
    transitions: { default: `${neobrutalism.motion.duration} ${neobrutalism.motion.easing}` },
  },
  media: {
    reduceMotion: '(prefers-reduced-motion: reduce)',
  },
  utils: {
    touchTarget: () => ({ minHeight: '44px', minWidth: '44px' }),
  },
});
```

```tsx
// components/Button.tsx
import { styled, keyframes } from '../stitches.config';

const spin = keyframes({ to: { transform: 'rotate(360deg)' } });

export const Button = styled('button', {
  border: '$ds solid $borderColors$default',
  boxShadow: '$shadows$default',
  borderRadius: '$radii$md',
  fontFamily: '$fonts$heading',
  fontWeight: '$fontWeights$bold',
  padding: '0.75rem 1.5rem',
  transition: 'box-shadow $transitions$default, transform $transitions$default',
  '&:hover': { boxShadow: '$shadows$hover' },
  '&:focus-visible': { outline: '3px solid $colors$focus', outlineOffset: '3px' },
  '&:active': { boxShadow: '$shadows$default', transform: 'translate(2px, 2px)' },
  '&:disabled': { opacity: 0.5, cursor: 'not-allowed', boxShadow: 'none', transform: 'none' },
  variants: {
    variant: {
      primary: { background: '$colors$primary', color: '$colors$ink' },
      secondary: { background: '$colors$secondary', color: '$colors$ink' },
    },
    loading: {
      true: {
        position: 'relative',
        color: 'transparent',
        '&::after': {
          content: '""',
          position: 'absolute',
          width: '1em', height: '1em',
          border: '2px solid currentColor',
          borderRightColor: 'transparent',
          borderRadius: '50%',
          animation: `${spin} 0.6s linear infinite`,
          '@reduceMotion': { animation: 'none', borderColor: 'currentColor' },
        },
      },
    },
  },
});
```

### Panda CSS
```ts
// panda.config.ts
import { defineConfig } from '@pandacss/dev';
import neobrutalism from 'designsense/styles/neobrutalism/tokens.json';

export default defineConfig({
  theme: {
    extend: {
      tokens: {
        colors: neobrutalism.color,
        radii: neobrutalism.radius,
        shadows: neobrutalism.shadow,
        fonts: {
          heading: { value: neobrutalism.font.heading },
          body: { value: neobrutalism.font.body },
          mono: { value: neobrutalism.font.mono },
        },
        fontWeights: neobrutalism.font.weight,
        borderWidths: { ds: { value: neobrutalism.border.width } },
        borderColors: { default: { value: neobrutalism.border.color } },
        motion: { default: { value: `${neobrutalism.motion.duration} ${neobrutalism.motion.easing}` } },
      },
      semanticTokens: {
        colors: {
          'btn-primary-bg': { value: { base: '{colors.primary}' } },
          'btn-primary-color': { value: { base: '{colors.ink}' } },
        },
      },
    },
  },
  patterns: {
    button: {
      description: 'Button with all states',
      properties: {
        variant: { type: 'enum', values: ['primary', 'secondary'], default: 'primary' },
        loading: { type: 'boolean', default: false },
      },
      transform(props) {
        const { variant, loading, ...rest } = props;
        return {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 'ds',
          borderStyle: 'solid',
          borderColor: 'default',
          boxShadow: 'default',
          borderRadius: 'md',
          fontFamily: 'heading',
          fontWeight: 'bold',
          padding: '0.75rem 1.5rem',
          transition: 'box-shadow {motion.default}, transform {motion.default}',
          _hover: { boxShadow: 'hover' },
          _focusVisible: { outline: '3px solid', outlineColor: 'focus', outlineOffset: '3px' },
          _active: { boxShadow: 'default', transform: 'translate(2px, 2px)' },
          _disabled: { opacity: 0.5, cursor: 'not-allowed', boxShadow: 'none', transform: 'none' },
          ...(variant === 'primary' && { bg: 'btn-primary-bg', color: 'btn-primary-color' }),
          ...(variant === 'secondary' && { bg: 'secondary', color: 'ink' }),
          ...(loading && {
            position: 'relative',
            color: 'transparent',
            _before: {
              content: '""',
              position: 'absolute',
              width: '1em', height: '1em',
              border: '2px solid currentColor',
              borderRightColor: 'transparent',
              borderRadius: 'full',
              animation: 'spin 0.6s linear infinite',
              _reduceMotion: { animation: 'none', borderColor: 'currentColor' },
            },
          }),
        };
      },
    },
  },
});
```

## Switching Themes at Runtime
```tsx
// hooks/useTheme.ts
import { useState, useCallback } from 'react';
import { createTheme, type StyleName } from '../theme/tokens';

export function useTheme(initial: StyleName = 'neobrutalism') {
  const [theme, setTheme] = useState(() => createTheme(initial));
  const [style, setStyle] = useState<StyleName>(initial);
  
  const switchStyle = useCallback((newStyle: StyleName) => {
    setStyle(newStyle);
    setTheme(createTheme(newStyle));
  }, []);
  
  return { theme, style, switchStyle };
}
```

## Reduced Motion (All Libraries)
```tsx
// hooks/useReducedMotion.ts
import { useEffect, useState } from 'react';
export function useReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduce(m.matches);
    const h = (e) => setReduce(e.matches);
    m.addEventListener('change', h);
    return () => m.removeEventListener('change', h);
  }, []);
  return reduce;
}
```

```tsx
// Usage in any CSS-in-JS
const reduce = useReducedMotion();
const transition = reduce ? 'none' : theme.motion.duration;
```