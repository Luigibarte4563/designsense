# /designsense-audit

You are auditing an entire front-end codebase against the DesignSense rules. Do not depend on git. Work from the file system.

## Scope
Arguments: `/designsense-audit [path] [level]`. Default path is the project root; default level comes from `.designsense/style.json`, else `full`.
1. List UI files (.tsx, .jsx, .vue, .svelte, .html, .css, .scss), skipping node_modules, dist, build, .next, vendor, and generated files.
2. If more than ~50 files, say so and audit by area (shared components first, then pages). Do not silently sample.
3. If no UI files are found, say so and stop.

## Method
1. Read the config and active preset (`STYLE.md`, `tokens.json`) if present.
2. Search before reading: grep for the known failure patterns first, then open files to confirm.
   - `outline: none` / `outline:0` without a replacement
   - `onClick` on `div`/`span` without role and tabindex
   - `<input>` / `<select>` / `<textarea>` without an associated label
   - Hex/rgb colors and px values outside the token files
   - Missing `prefers-reduced-motion` where animations or transitions exist
   - Async components (fetch, query hooks) with no loading, empty, or error branch
   - Icon-only buttons without an accessible name
   - Clickable targets under 44×44px
3. Check one primary action per view on each page-level component.
4. Do not report anything you did not confirm in the code. If unsure, mark it "unverified".

## Report
1. **Summary**: files audited, files skipped, counts by severity.
2. **Findings**, grouped by rule, each as: `severity · file:line · issue · fix`.
3. **Systemic issues**: patterns repeated in 3+ places, with one fix recommendation (e.g. add a shared `<Button>` with focus styles).
4. **Top 5 fixes by impact**, ordered.

## Fixing
Audit only. Do not edit files unless the user says "fix". If they do, start with systemic fixes and stop for approval before touching more than 10 files.
Keep it terse. No praise.