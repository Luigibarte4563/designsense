# /designsense-review

You are reviewing front-end changes against the DesignSense rules.

## Step 0: Validate the tool output
Run the designsense-review tool. Before acting on anything, check the output.
- If it contains an error, git usage/help text, a stack trace, or "not a git repository", the tool FAILED. Say so in one line, name the likely cause, and stop. Do not infer "no changes" from a failed run.
- If it says no UI files changed, verify with `git status --short` or a file listing. If UI files (.tsx, .jsx, .vue, .svelte, .html, .css, .scss) exist and look modified, treat the tool as unreliable and review those files directly.
- Only when the output is clean and plausible is it the source of truth.

## Step 1: Review
Check each changed UI file against:
1. Tokens: no hardcoded colors, spacing, radius, shadows, or type sizes. 8px grid.
2. Hierarchy: one primary action per view.
3. Accessibility (WCAG 2.2 AA): contrast (4.5:1 text, 3:1 UI), visible focus, semantic HTML, labels on inputs, 44×44px targets, `prefers-reduced-motion`, no clickable `<div>`/`<span>` without role + tabindex.
4. States: default, hover, focus, active, disabled, loading, empty, error on every interactive/async component.
5. Responsiveness: mobile-first, no layout shift, sticky header only where the page scrolls.
6. Consistency with the active preset in `.designsense/style.json` (read the preset's STYLE.md).

## Step 2: Report before fixing
List findings as: `severity (blocker | major | minor) · file:line · issue · fix`.
Blockers are accessibility failures and missing states.

## Step 3: Fix
- Apply blocker and major fixes that are unambiguous and local.
- For anything that changes layout, copy, or behavior, or that needs a design decision, list it under "Needs your call" and do not edit.
- Mark deliberate rule breaks with `// designsense: <reason>`.
- Never remove a focus ring, ARIA attribute, or state to make a finding disappear.

## Output
1. Tool status (ok / failed / unreliable)
2. Findings table
3. Fixes applied (file list)
4. Needs your call
Keep it terse. No praise, no restating the rules.