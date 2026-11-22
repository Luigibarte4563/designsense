# designsense-check — Review, Audit, A11y, Tokens, States

Unified skill for on-demand quality checks. Run via commands or hooks.

## Commands
- `/designsense-review` — Review current diff; severity-ranked fix list (blocker/should-fix/nice-to-have) with file:line
- `/designsense-audit [path]` — Audit whole repo or chosen page; full report
- `/designsense-a11y [path]` — Focused accessibility pass (axe-core + custom rules)
- `/designsense-tokens [path]` — Extract hardcoded values into token file; suggest token map
- `/designsense-states [path]` — Find components missing loading, empty, or error states

## Checks (deterministic scripts in `scripts/`)
| Script | Purpose | Output |
|--------|---------|--------|
| `contrast-check.js` | Contrast ratios for token color pairs | PASS/FAIL per pair |
| `a11y-scan.js` | axe-core / eslint-plugin-jsx-a11y wrapper | Violations with WCAG refs |
| `smell-lint.js` | Grep-based: outline:none, missing alt, click on div, fixed px fonts, missing label | Line-level issues |
| `style-fidelity.js` | Flags code not matching active style (e.g., blur in neobrutalism) | Line-level issues |

## Review Output Format
```json
{
  "file": "components/Button.tsx",
  "issues": [
    { "line": 23, "severity": "blocker", "rule": "a11y-focus-visible", "message": "outline: none without replacement" },
    { "line": 45, "severity": "should-fix", "rule": "style-fidelity", "message": "box-shadow conflicts with neobrutalism" },
    { "line": 12, "severity": "nice-to-have", "rule": "fluid-type", "message": "Fixed 16px font-size; use clamp()" }
  ]
}
```

## Severity Definitions
- **blocker**: Violates non-negotiable (contrast, focus, semantic HTML, alt, label, touch target, states)
- **should-fix**: Violates level rules (hierarchy, heuristics, responsiveness, style fidelity)
- **nice-to-have**: Improves consistency/maintainability (tokens, fluid type, naming)

## Token Extraction
`/designsense-tokens` scans for:
- Hardcoded colors (hex, rgb, hsl)
- Spacing values (px, rem not in scale)
- Border radius, shadows, font sizes
- Outputs `design-tokens.json` with suggested mappings

## State Detection
`/designsense-states` looks for async components (useEffect, fetch, SWR, TanStack Query) and checks for:
- `isLoading` → Loading state (spinner/skeleton + aria-busy)
- `data.length === 0` → Empty state (illustration + CTA)
- `error` → Error state (inline message + aria-invalid + focus management)

## Integration
- Hooks: `PostToolUse` runs `post-edit-check.js` (smell-lint + style-fidelity)
- Commands: Run full suite on demand
- All output structured for agent consumption