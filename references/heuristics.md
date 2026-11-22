# UI/UX Heuristics Reference

## Nielsen's 10 Usability Heuristics

1. **Visibility of System Status**
   - Show loading states, progress, confirmations
   - Never leave user wondering "did it work?"

2. **Match Between System and Real World**
   - Use familiar language, not jargon
   - Follow real-world conventions (trash = delete)

3. **User Control and Freedom**
   - Undo/redo, cancel, back navigation
   - Emergency exits from unwanted states

4. **Consistency and Standards**
   - Same action = same result everywhere
   - Follow platform conventions (iOS/Android/Web)

5. **Error Prevention**
   - Disable invalid actions
   - Confirm destructive operations
   - Smart defaults prevent mistakes

6. **Recognition Rather Than Recall**
   - Show options, don't make users remember
   - Persistent navigation, visible affordances

7. **Flexibility and Efficiency of Use**
   - Shortcuts for power users (cmd+k, keyboard nav)
   - Customizable workflows

8. **Aesthetic and Minimalist Design**
   - Every element earns its place
   - Content > chrome

9. **Help Users Recognize, Diagnose, Recover from Errors**
   - Plain language error messages
   - Specific, actionable recovery steps

10. **Help and Documentation**
    - Contextual help, not manuals
    - Searchable, task-oriented

---

## Fitts's Law
> Time to acquire a target = a + b × log₂(D/W + 1)
> - D = distance to target
> - W = width of target

**Implications:**
- Make primary actions **large** and **close**
- Corners/edges are easiest to hit (infinite W)
- Group related actions to reduce D
- Touch targets **≥ 44×44px** (WCAG AAA: 48×48px)

---

## Hick's Law
> Decision time = a + b × log₂(n + 1)
> - n = number of choices

**Implications:**
- Limit visible options (progressive disclosure)
- Categorize/group choices
- Smart defaults reduce n
- Search/filter for large sets

---

## Gestalt Principles (Visual Grouping)
- **Proximity**: Close = related
- **Similarity**: Same style = same function
- **Continuity**: Eye follows lines/curves
- **Closure**: Brain completes shapes
- **Figure/Ground**: Focus vs. background
- **Symmetry**: Balanced = stable

---

## Designsense Application

| Heuristic | Designsense Rule |
|-----------|------------------|
| Status visibility | Loading/empty/error states mandatory |
| Error prevention | Disable submit until valid; confirm destructive |
| Consistency | Reuse components; tokens not magic numbers |
| Recognition | Visible labels, persistent nav, clear affordances |
| Fitts | 44px targets, primary actions prominent |
| Hick | Progressive disclosure, smart defaults |
| Gestalt | 8px grid, consistent alignment, type scale |

---

## Quick Checklist for New Screens
- [ ] User goal stated in 1 line
- [ ] Primary action identified and visually dominant
- [ ] Loading/empty/error states designed
- [ ] Touch targets ≥ 44px
- [ ] Keyboard accessible (Tab order = visual order)
- [ ] Focus visible on all interactive elements
- [ ] Contrast ≥ 4.5:1
- [ ] Reduced motion respected