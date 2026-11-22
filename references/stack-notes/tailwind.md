# Tailwind CSS Stack Notes

## Using Designsense Presets

### Install
```bash
npm install -D tailwindcss @tailwindcss/typography
```

### Config (tailwind.config.js)
```js
const neobrutalism = require('designsense/styles/neobrutalism/tailwind.preset.js');
const glassmorphism = require('designsense/styles/glassmorphism/tailwind.preset.js');
const minimalism = require('designsense/styles/minimalism/tailwind.preset.js');

module.exports = {
  presets: [neobrutalism], // or glassmorphism, minimalism
  content: ['./src/**/*.{js,ts,jsx,tsx,vue,svelte,astro}'],
  theme: {
    extend: {
      // Override specific values if needed
    },
  },
  plugins: [],
};
```

### Switching Styles at Build Time
```js
// tailwind.config.js
const style = process.env.DESIGNSENSE_STYLE || 'neobrutalism';
const presets = {
  neobrutalism: require('designsense/styles/neobrutalism/tailwind.preset.js'),
  glassmorphism: require('designsense/styles/glassmorphism/tailwind.preset.js'),
  minimalism: require('designsense/styles/minimalism/tailwind.preset.js'),
};
module.exports = { presets: [presets[style]], content: [...] };
```

## Utility Patterns by Style

### Neobrutalism
```html
<!-- Button -->
<button class="ds-btn ds-btn-primary">Primary</button>

<!-- Card -->
<div class="ds-card p-6">Content</div>

<!-- Input -->
<input class="ds-input" placeholder="Enter..." />

<!-- Focus ring (all styles) -->
<button class="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ds-focus">
```

### Glassmorphism
```html
<!-- Glass panel -->
<div class="bg-ds-surface backdrop-blur-ds border-ds-border shadow-ds rounded-ds-md p-6">
  Content
</div>

<!-- Button -->
<button class="ds-btn ds-btn-primary">Primary</button>

<!-- Modal -->
<div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
  <div class="bg-ds-surface-strong backdrop-blur-ds-strong border-ds-border shadow-ds-modal rounded-ds-lg p-8 max-w-md w-full">
    Content
  </div>
</div>
```

### Minimalism
```html
<!-- Button -->
<button class="ds-btn ds-btn-primary">Primary</button>

<!-- Card -->
<div class="bg-ds-surface border-ds-border rounded-ds-md p-6">Content</div>

<!-- Input -->
<input class="ds-input" placeholder="Enter..." />

<!-- Spacing scale -->
<div class="space-y-ds-4"> <!-- 8px base -->
  <div class="p-ds-6">Content</div>
</div>
```

## CSS Variables Fallback
For non-Tailwind projects or progressive enhancement:
```css
/* styles/designsense.css */
@import 'designsense/styles/neobrutalism/css-variables.css';

/* Use in any CSS */
.my-component {
  border: var(--ds-border-width) solid var(--ds-border-color);
  box-shadow: var(--ds-shadow-default);
  border-radius: var(--ds-radius-md);
  color: var(--ds-color-ink);
  background: var(--ds-color-surface);
}
```

## Dark Mode
Each preset includes dark mode tokens. Add to Tailwind:
```js
// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media'
  presets: [neobrutalism],
};
```

```html
<!-- Toggle -->
<button onclick="document.documentElement.classList.toggle('dark')">Toggle Dark</button>
```

## Responsive Design
```html
<!-- Mobile-first spacing -->
<div class="p-ds-4 md:p-ds-6 lg:p-ds-8">Content</div>

<!-- Fluid type (minimalism preset) -->
<h1 class="text-ds-heading xl:text-ds-heading-lg">Title</h1>

<!-- Grid -->
<div class="grid gap-ds-4 md:grid-cols-2 lg:grid-cols-3">Cards</div>
```

## Component Library Integration

### Headless UI
```tsx
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

function Modal({ open, onClose, children }) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="ds-modal w-full max-w-lg">
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
```

### Radix UI
```tsx
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

function Modal({ open, onOpenChange, children }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="ds-modal fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg">
          <Dialog.Title className="text-lg font-semibold mb-4">Title</Dialog.Title>
          {children}
          <Dialog.Close className="absolute top-4 right-4 ds-btn ds-btn-secondary">
            <X className="w-4 h-4" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
```

## Designsense Utility Classes (Add to your CSS)
```css
/* styles/designsense-utilities.css */
@layer utilities {
  .ds-focus-ring {
    @apply focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ds-focus;
  }
  .ds-touch-target {
    @apply min-h-[44px] min-w-[44px];
  }
  .ds-reduced-motion {
    @apply motion-reduce:transition-none motion-reduce:animate-none;
  }
}
```