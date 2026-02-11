

# Fix "Academic Organizations" Title Wrapping

The `min-h` approach reserves equal vertical space but doesn't prevent the visual inconsistency of one title wrapping. Two options:

**Option A (Recommended):** Shorten the title from "Academic Organizations" to "Academic Partners" or "Academia" so it fits on one line like the others.

**Option B:** Reduce the `CardTitle` font size from `text-lg` to `text-base` so all titles fit on one line at the current card width.

Going with **Option A** -- rename "Academic Organizations" to "Academic Partners" in the `partnerTypes` array in `src/components/GetInvolved.tsx`. This keeps the font size consistent with the rest of the page and solves the wrapping issue cleanly.

**File:** `src/components/GetInvolved.tsx` -- change `title: 'Academic Organizations'` to `title: 'Academic Partners'`.

