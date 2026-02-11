

# Remove Buttons from Get Involved Partner Cards

A small content change in `src/components/GetInvolved.tsx`:

- Remove the `Button` elements ("Join as partner", "Run a pilot", "Get involved", "Fork the code") from each of the four partner type cards
- Remove the `cta` property from the `partnerTypes` data array since it will no longer be used
- Keep everything else (emoji avatars, titles, descriptions, hover effects)

Single file to modify: `src/components/GetInvolved.tsx`

