

# Make Partner Card Titles Consistent Height

The issue: "Academic Organizations" wraps to two lines while the other three titles fit on one line, creating visual misalignment across the cards.

**Fix:** Add a minimum height to the `CardTitle` element in `GetInvolved.tsx` so all titles occupy the same vertical space regardless of whether they wrap. This keeps all card content aligned.

**File:** `src/components/GetInvolved.tsx` -- add a `min-h-[3.5rem] flex items-center justify-center` class to the `CardTitle` so all titles reserve two lines of space and center vertically within that space.

