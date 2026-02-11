

# Redesign "Under the Hood" Section

## The Problem with the Current Version

The section currently has two disconnected halves: a left column listing 6 technical features (jargon-heavy, no narrative) and a right column with 3 tabs (Curiosity example, a Python code snippet, an emoji flowchart). There's no story connecting them, and a visitor can't tell why any of it matters.

## The New Concept: Three Pillars

The white paper organizes its technical approach around three parts that map perfectly to a landing page narrative. Replace the current layout with **three clear pillars**, each answering a plain-language question:

### Pillar 1: "What We Measure" (The Framework)
- 6 domains, 36 facets -- a hierarchical model tested against 4, 5, and 7-factor alternatives
- Selected because it best predicts real-world outcomes (innovation, safety, leadership)
- Every facet backed by peer-reviewed research with published factor loadings
- Plain-language hook: "Not too broad, not too narrow -- 36 facets that actually predict what matters"

### Pillar 2: "How Questions Adapt to You" (The STEM Adapter)
- AI generates assessment items matched to your reading level, context, and background
- The same facet (e.g., Curiosity) is measured with different language for a high school student vs. a professional
- Every generated item passes multi-layer verification (semantic alignment, cross-loading prevention, reading level check)
- The key distinction: **AI generates and verifies questions, but never characterizes who you are**
- Keep the Curiosity example (Standard / Student / Professional) -- it's excellent and already built
- Plain-language hook: "The test meets you where you are. Same measurement, your language."

### Pillar 3: "Your Data, Your Control" (Data Portability)
- Open API with OAuth 2.0 -- you control who sees your results
- Standardized JSON schemas so results work across platforms (career tools, learning systems, coaching apps)
- No vendor lock-in: export, share, or delete your data anytime
- Plain-language hook: "Your strengths profile belongs to you, not a platform"

## Layout

Replace the current 2-column layout with a simpler structure:

- **Header**: Keep "Under the Hood" title. Update subtitle to something like "How it works -- and why you can trust it"
- **Three cards or tabs** for the three pillars, each with:
  - A clear title and one-sentence hook
  - 2-3 concise bullet points explaining the approach
  - One concrete detail or example that makes it tangible
- The Curiosity adaptive example (Standard / Student / Professional) stays as the showcase detail for Pillar 2
- Remove the Python code snippet (too technical for a landing page audience)
- Remove the emoji architecture flowchart (too simplistic to be useful)

## Visual Approach

Use tabs (like now) or stacked cards. Tabs work well here since the three pillars are distinct and a visitor might only care about one. Each tab content should be a single card with clear, scannable content -- not a wall of text.

## Content Details

**Tab 1 -- "What We Measure"**
Title: "Six Domains, 36 Facets"
Subtitle: "A model tested against alternatives and selected for what it predicts"

- Tested 4, 5, 6, and 7-factor models with factor analysis on 847 participants
- 6-factor model won: clearest construct boundaries, best real-world prediction
- Every facet loads uniquely (no redundancy), backed by published research
- Covers cognitive, motivational, emotional, interpersonal, and leadership strengths -- not just "character virtues"

**Tab 2 -- "How Questions Adapt"**
Title: "Adaptive Measurement"
Subtitle: "Same construct, your context"

- Keep the existing Curiosity example (Standard / Student / Professional cards)
- Add a brief explanation: AI generates items matched to reading level and context, then every item passes semantic verification to ensure it measures the same thing
- Anchor line: "AI generates and verifies questions. It never tells you who you are."

**Tab 3 -- "Your Data"**
Title: "Open and Portable"
Subtitle: "Your results belong to you"

- Open API: integrate your profile with career tools, learning platforms, coaching apps
- OAuth 2.0: you decide who sees what, and revoke access anytime
- Standardized formats: no vendor lock-in, no data silos
- Apache-2.0 license: the code, algorithms, and item bank are public

## File to Modify

`src/components/UnderTheHood.tsx` -- rewrite the section content while keeping the same component structure (section with id="science", same styling approach)

No new files or dependencies needed.

