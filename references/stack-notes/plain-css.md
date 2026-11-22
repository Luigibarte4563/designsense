# Plain CSS / CSS Modules Stack Notes

## Token Integration

### CSS Variables (Primary Method)
```css
/* styles/globals.css */
@import 'designsense/styles/neobrutalism/css-variables.css';

/* components/Button.css */
.ds-btn {
  border: var(--ds-border-width) solid var(--ds-border-color);
  box-shadow: var(--ds-shadow-default);
  border-radius: var(--ds-radius-md);
  font-family: var(--ds-font-heading);
  font-weight: var(--ds-font-weight-bold);
  padding: 0.75rem 1.5rem;
  transition: box-shadow var(--ds-motion-duration);
}
.ds-btn:hover { box-shadow: var(--ds-shadow-hover); }
.ds-btn:focus-visible { outline: 3px solid var(--ds-color-focus); outline-offset: 3px; }
.ds-btn:active { box-shadow: var(--ds-shadow-default); transform: translate(2px, 2px); }
.ds-btn:disabled { opacity: 0.5; cursor: not-allowed; box-shadow: none; }

.ds-btn-primary { background: var(--ds-color-primary); color: var(--ds-color-ink); }
.ds-btn-secondary { background: var(--ds-color-secondary); color: var(--ds-color-ink); }
```

### CSS Modules
```css
/* components/Button.module.css */
@import '../../styles/neobrutalism/css-variables.css';

.btn {
  border: var(--ds-border-width) solid var(--ds-border-color);
  box-shadow: var(--ds-shadow-default);
  border-radius: var(--ds-radius-md);
  font-family: var(--ds-font-heading);
  font-weight: var(--ds-font-weight-bold);
  padding: 0.75rem 1.5rem;
}
.btn:hover { box-shadow: var(--ds-shadow-hover); }
.btn:focus-visible { outline: 3px solid var(--ds-color-focus); outline-offset: 3px; }
```

```tsx
// components/Button.tsx
import styles from './Button.module.css';
export function Button({ variant = 'primary', children, ...props }) {
  return <button className={`${styles.btn} ${styles[variant]}`} {...props}>{children}</button>;
}
```

## Component Patterns

### Button (All States)
```css
/* components/Button.css */
.ds-btn {
  /* Default */
  border: var(--ds-border-width) solid var(--ds-border-color);
  box-shadow: var(--ds-shadow-default);
  border-radius: var(--ds-radius-md);
  font-family: var(--ds-font-heading);
  font-weight: var(--ds-font-weight-bold);
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: box-shadow var(--ds-motion-duration), transform var(--ds-motion-duration);
}

.ds-btn:hover {
  /* Hover */
  box-shadow: var(--ds-shadow-hover);
}

.ds-btn:focus-visible {
  /* Focus */
  outline: 3px solid var(--ds-color-focus);
  outline-offset: 3px;
}

.ds-btn:active {
  /* Active */
  box-shadow: var(--ds-shadow-default);
  transform: translate(2px, 2px);
}

.ds-btn:disabled,
.ds-btn.ds-btn-disabled {
  /* Disabled */
  opacity: 0.5;
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
}

.ds-btn-loading {
  /* Loading */
  position: relative;
  color: transparent;
}
.ds-btn-loading::after {
  content: '';
  position: absolute;
  width: 1em; height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) {
  .ds-btn-loading::after { animation: none; border-color: currentColor; }
}
```

### Modal with Focus Trap
```css
/* components/Modal.css */
.ds-modal-overlay {
  position: fixed; inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex; align-items: center; justify-content: center;
  padding: 1rem;
  z-index: 1000;
}

.ds-modal {
  background: var(--ds-color-surface);
  border: var(--ds-border-width) solid var(--ds-border-color);
  box-shadow: var(--ds-shadow-default);
  border-radius: var(--ds-radius-md);
  padding: 2rem;
  max-width: 480px;
  width: 90%;
  max-height: 90vh;
  overflow: auto;
}

@media (prefers-reduced-motion: reduce) {
  .ds-modal-overlay, .ds-modal { animation: none !important; transition: none !important; }
}
```

```js
// components/Modal.js (vanilla JS focus trap)
export function createModal({ title, content, onClose }) {
  const overlay = document.createElement('div');
  overlay.className = 'ds-modal-overlay';
  overlay.innerHTML = `
    <div class="ds-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <h2 id="modal-title">${title}</h2>
      ${content}
      <button class="ds-btn ds-btn-secondary" data-close>Cancel</button>
    </div>
  `;
  
  const focusables = overlay.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  
  function trapTab(e) {
    if (e.key !== 'Tab') return;
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
  
  overlay.addEventListener('keydown', trapTab);
  overlay.querySelector('[data-close]').addEventListener('click', () => {
    overlay.removeEventListener('keydown', trapTab);
    onClose();
  });
  
  document.body.appendChild(overlay);
  first?.focus();
  return overlay;
}
```

### Form with Validation
```css
/* components/Form.css */
.ds-field { margin-bottom: 1rem; }
.ds-label { display: block; margin-bottom: 0.25rem; font-weight: 500; }
.ds-input {
  width: 100%;
  border: var(--ds-border-width) solid var(--ds-border-color);
  border-radius: var(--ds-radius-sm);
  padding: 0.625rem 0.875rem;
  font-family: var(--ds-font-body);
  font-size: 1rem;
  background: var(--ds-color-surface);
  color: var(--ds-color-ink);
}
.ds-input:hover { border-color: var(--ds-color-muted); }
.ds-input:focus { outline: none; border-color: var(--ds-color-focus); box-shadow: 0 0 0 3px var(--ds-color-focus); }
.ds-input[aria-invalid="true"] { border-color: var(--ds-color-error); }
.ds-error { color: var(--ds-color-error); font-size: 0.875rem; margin-top: 0.25rem; display: flex; align-items: center; gap: 0.25rem; }
```

```html
<form class="ds-form" novalidate>
  <div class="ds-field">
    <label class="ds-label" for="email">Email</label>
    <input class="ds-input" type="email" id="email" required aria-describedby="email-error" />
    <div class="ds-error" id="email-error" role="alert" hidden>Enter a valid email</div>
  </div>
  <button type="submit" class="ds-btn ds-btn-primary">Submit</button>
</form>
```

```js
// Form validation
document.querySelector('.ds-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const submitBtn = form.querySelector('[type="submit"]');
  let hasError = false;
  
  // Clear previous
  form.querySelectorAll('[aria-invalid]').forEach(el => {
    el.removeAttribute('aria-invalid');
    el.removeAttribute('aria-describedby');
  });
  form.querySelectorAll('.ds-error').forEach(el => el.hidden = true);
  
  // Validate
  form.querySelectorAll('[required]').forEach(input => {
    if (!input.value.trim() || (input.type === 'email' && !input.value.includes('@'))) {
      input.setAttribute('aria-invalid', 'true');
      const errorId = input.id + '-error';
      input.setAttribute('aria-describedby', errorId);
      document.getElementById(errorId).hidden = false;
      hasError = true;
    }
  });
  
  if (hasError) {
    form.querySelector('[aria-invalid="true"]')?.focus();
    return;
  }
  
  // Submit
  submitBtn.disabled = true;
  submitBtn.classList.add('ds-btn-loading');
  submitBtn.setAttribute('aria-busy', 'true');
  
  try {
    await submitForm(new FormData(form));
    showToast('Success!', 'success');
  } catch (err) {
    showToast(err.message, 'error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.classList.remove('ds-btn-loading');
    submitBtn.removeAttribute('aria-busy');
  }
});
```

## Switching Styles
```html
<!-- Just change the import -->
<link rel="stylesheet" href="styles/neobrutalism/css-variables.css" id="designsense-style">
<!-- To switch: -->
<script>
  document.getElementById('designsense-style').href = 'styles/glassmorphism/css-variables.css';
</script>
```

## Build Tools
```js
// vite.config.js
export default defineConfig({
  css: {
    postcss: {
      plugins: [
        require('postcss-import'),
        require('postcss-custom-properties')({ preserve: true }),
        require('autoprefixer'),
      ],
    },
  },
});
```