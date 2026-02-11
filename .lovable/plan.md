

# Revamped Six Domains Section with Expandable Facets

## Concept

Transform the current 6-card grid into an interactive, larger section where clicking/tapping a domain card expands it to reveal all 6 of its facets with descriptions. This creates a rich, explorable experience while keeping the colorful aesthetic.

## How It Works

- The 6 domain cards remain in a 2x3 (mobile) / 3x2 (desktop) grid
- Clicking a domain card selects it and expands a detail panel below the grid
- The detail panel shows all 6 facets for that domain as colored pills/mini-cards, each with its name and a short description
- The selected domain card gets a highlighted ring/border treatment; other cards dim slightly
- Smooth animations for expanding/collapsing the facet panel
- First domain (Insight) is pre-selected so the section feels alive on load

## Facet Data (from the white paper)

Each domain gets its 6 facets with short, approachable descriptions:

- **Insight**: Analytical Reasoning, Systems Perspective, Foresight, Curiosity, Reflective Learning, Sense-Making
- **Creativity**: Ideation, Innovation, Aesthetic Sensitivity, Improvisation, Experimentation, Synthesizing
- **Drive**: Achievement Focus, Discipline, Adaptable Execution, Resilience, Initiative, Efficiency
- **Stability**: Responsibility, Ethics, Reliability, Patience, Organizing, Safety Orientation
- **Connection**: Empathy, Social Awareness, Collaboration, Trust Building, Inclusiveness, Mentorship
- **Influence**: Persuasion, Storytelling, Confidence, Energizing, Negotiation, Vision Casting

## Visual Design

- Domain cards: keep existing color palette and hover effects
- Selected card: solid domain color background with white text + subtle glow/shadow
- Facet panel: appears below the grid with a smooth slide-down animation
- Each facet shown as a rounded pill/chip in the domain's lighter color, with the facet name and a one-line description on hover or below
- A colored accent bar at the top of the panel matching the selected domain

## Technical Details

**File:** `src/components/SixDomains.tsx`

- Add a `facets` array to each domain object containing `{ name, description }` entries
- Change state from `hoveredDomain` to `selectedDomain` (click-based instead of hover-only)
- Keep hover effects on cards for visual polish
- Add an expandable panel below the grid that renders when a domain is selected
- Use CSS transitions for the panel expand/collapse animation
- Default `selectedDomain` to `'Insight'` so users see facets immediately

No new files or dependencies needed -- all built with existing Tailwind classes and React state.
