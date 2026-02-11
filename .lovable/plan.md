

# Replace "What We Measure" Tab in Under the Hood

**Problem:** The "What We Measure" tab repeats the Six Domains content shown directly above it.

**Solution:** Replace it with **"Why You Can Trust It"** -- focused on psychometric rigor, complementing "How Questions Adapt" and "Your Data."

## Changes

**File:** `src/components/UnderTheHood.tsx`

- Rename first tab from "What We Measure" to "Why You Can Trust It" (value: `trust`)
- Replace card title/description with "Rigorous by Design" / "Every decision is backed by evidence"
- New bullet points:
  - Research compared 4-, 5-, 6-, and 7-factor models -- the 6-factor structure was selected for the clearest construct boundaries and best real-world prediction
  - Every facet loads uniquely in factor analysis -- no redundancy, each grounded in peer-reviewed research
  - Anti-faking measures planned: forced-choice items and response-time checks
  - All scoring algorithms, factor loadings, and IRT parameters will be public and reproducible
- Summary line: "Built on peer-reviewed methods -- and you can verify every step."

The three tabs become: **trust the science** / **understand the experience** / **own your data**.

