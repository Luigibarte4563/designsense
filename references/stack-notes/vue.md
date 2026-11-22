# Vue 3 Stack Notes

## Token Integration

### CSS Variables
```vue
<!-- styles/globals.css -->
@import '../styles/neobrutalism/css-variables.css';

<!-- components/DsButton.vue -->
<script setup>
defineProps({ variant: { type: String, default: 'primary' } });
</script>
<template>
  <button :class="['ds-btn', `ds-btn-${variant}`]"><slot /></button>
</template>
<style scoped>
.ds-btn { /* uses CSS variables */ }
</style>
```

### Tailwind
```js
// tailwind.config.js
const designsense = require('designsense/styles/neobrutalism/tailwind.preset.js');
module.exports = { presets: [designsense] };
```

### CSS-in-JS (UnoCSS / Windi CSS)
```ts
// uno.config.ts
import tokens from 'designsense/styles/neobrutalism/tokens.json';
export default defineConfig({
  theme: {
    colors: { ds: tokens.color },
    borderWidth: { ds: tokens.border.width },
    boxShadow: { ds: tokens.shadow.default, 'ds-hover': tokens.shadow.hover },
    borderRadius: tokens.radius,
    fontFamily: { heading: tokens.font.heading, body: tokens.font.body },
    fontWeight: tokens.font.weight,
    transitionDuration: { ds: tokens.motion.duration },
  },
});
```

## Composables for States

### useAsync
```ts
// composables/useAsync.ts
export function useAsync(asyncFn, deps = []) {
  const data = ref(null);
  const loading = ref(true);
  const error = ref(null);
  const execute = async () => {
    loading.value = true; error.value = null;
    try { data.value = await asyncFn(); }
    catch (e) { error.value = e; }
    finally { loading.value = false; }
  };
  watchEffect(() => { deps.forEach(d => d.value); execute(); });
  return { data, loading, error, execute };
}
```

### useFocusTrap
```ts
// composables/useFocusTrap.ts
export function useFocusTrap(active) {
  const el = ref<HTMLElement>();
  watch(active, (v) => {
    if (!v || !el.value) return;
    const focusables = el.value.querySelectorAll<HTMLElement>(
      'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusables[0]; const last = focusables[focusables.length - 1];
    first?.focus();
    const handler = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
      if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  });
  return el;
}
```

### useReducedMotion
```ts
// composables/useReducedMotion.ts
export function useReducedMotion() {
  const reduce = ref(false);
  onMounted(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)');
    reduce.value = m.matches;
    const h = (e: MediaQueryListEvent) => reduce.value = e.matches;
    m.addEventListener('change', h);
    return () => m.removeEventListener('change', h);
  });
  return reduce;
}
```

## Component Patterns

### Modal with Focus Trap
```vue
<!-- components/DsModal.vue -->
<script setup>
import { useFocusTrap } from '@/composables/useFocusTrap';
import { useReducedMotion } from '@/composables/useReducedMotion';
const props = defineProps({ open: Boolean, title: String });
const emit = defineEmits(['close']);
const reduce = useReducedMotion();
const modalRef = useFocusTrap(props.open);
function close() { emit('close'); }
</script>
<template>
  <Transition name="fade" :css="!reduce">
    <div v-if="open" class="ds-modal-overlay" @click.self="close" ref="modalRef">
      <div class="ds-modal">
        <h2>{{ title }}</h2>
        <slot />
        <button class="ds-btn ds-btn-secondary" @click="close">Cancel</button>
      </div>
    </div>
  </Transition>
</template>
<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
```

### Button with All States
```vue
<!-- components/DsButton.vue -->
<script setup>
defineProps({
  variant: { type: String, default: 'primary' },
  loading: Boolean,
  disabled: Boolean,
});
</script>
<template>
  <button
    :class="['ds-btn', `ds-btn-${variant}`, { 'ds-btn-loading': loading, 'ds-btn-disabled': disabled }]"
    :disabled="loading || disabled"
    :aria-busy="loading"
    :aria-disabled="disabled"
  >
    <span v-if="loading" class="ds-spinner" aria-hidden="true" />
    <slot v-else />
  </button>
</template>
```

## Pinia Store for Theme
```ts
// stores/theme.ts
import { defineStore } from 'pinia';
import tokens from 'designsense/styles/neobrutalism/tokens.json';

export const useThemeStore = defineStore('theme', {
  state: () => ({ style: 'neobrutalism' as const, tokens }),
  actions: {
    setStyle(style: 'neobrutalism' | 'glassmorphism' | 'minimalism') {
      this.style = style;
      // Dynamic import tokens for new style
      import(`designsense/styles/${style}/tokens.json`).then(m => { this.tokens = m.default; });
    },
  },
});
```

## Nuxt 3 Notes
- CSS variables in `assets/css/main.css`
- Auto-import composables from `composables/`
- `nuxt.config.ts` for Tailwind/UnoCSS preset
- SSR-safe: `useReducedMotion` only on client