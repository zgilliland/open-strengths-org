

# Aligning Landing Page Content with the Manifesto

## Philosophy

Keep the current Hero untouched. Keep the same section count and simple scroll-down UX. The change is purely narrative: replace the current "academic research stats" framing with the manifesto's more compelling story arc, and update downstream sections with manifesto-accurate content.

## The New Narrative Arc (Challenge Section)

The current Challenge section has 6 boxes (Foundation, Impact, Problem, Barriers, Solution, CTA). The manifesto tells a tighter, more emotional 3-beat story. Restructure into:

**Beat 1 -- "The Need"** (blue box)
Everyone searches for self-understanding. Personality quizzes go viral. Astrology has 83B views on TikTok. The desire is fundamental. Some tools deliver -- Myers-Briggs gave us "introvert" and "extrovert," CliftonStrengths goes deeper still. But most people never access them: $30-200 per person, invisible outside corporate settings.

Pull quote: *"Everyone deserves to know what's strong in them."*

**Beat 2 -- "The AI Problem"** (orange/red box, NEW)
AI met people where they were. 220M companion app downloads. A third of teens discuss serious life issues with AI. It responds to your situation, it's there at 2am, it won't charge by the hour. But there's nothing underneath -- no framework, no evidence. Systems validate what you want to hear 50% more than a human would. Early research shows sustained AI identity conversations lower confidence in decision-making.

Anchor line: *"The question isn't whether AI will shape how people understand themselves. It already does. The question is whether there will be anything real underneath."*

**Beat 3 -- "Our Answer"** (primary-colored box)
Compact the current Solution preview cards (Transparent, Inclusive, Accessible) into this single beat, framed by the manifesto's closing: "OpenStrengths is building that foundation." Keep the three cards but update copy to manifesto language.

This replaces the current 6 boxes with 3, making the section faster to read and more emotionally compelling.

## Other Section Updates

### Six Domains
- Update descriptions to match manifesto: "how you process, analyze, and understand" etc.
- Add "36 facets across six domains" subtitle language

### Under the Hood
- Add the "Curiosity" measurement example from the manifesto (standard / student / professional versions of the same question)
- Add the "bounded AI" concept: AI generates and verifies questions but cannot characterize identity
- Update the architecture tab to reflect adaptive questioning matched to context/reading level

### Get Involved
- Lead with the nonprofit framing and $2.2M funding need
- Replace the 4 generic contributor types with the manifesto's 4 partner types: Psychometric, Academic, Applied experts, Technical builders
- Add team@openstrengths.org contact
- Keep social links at bottom

### FAQ
- Update "Will it always be free?" answer with "Self-knowledge is a right, not a product" language
- Add new Q: "What role does AI play?" covering bounded AI (generates/verifies items, cannot characterize identity)
- Update CliftonStrengths comparison to mention accessibility and AI framing

### Footer
- Update copyright from 2025 to 2026
- Update GitHub link to `https://github.com/open-strengths/docs/`
- Update description to mention nonprofit status

## Files to Modify

| File | Change |
|------|--------|
| `src/components/Challenge.tsx` | Restructure from 6 boxes to 3 beats with manifesto content |
| `src/components/SixDomains.tsx` | Update domain descriptions and subtitle |
| `src/components/UnderTheHood.tsx` | Add Curiosity example, bounded AI, adaptive questioning |
| `src/components/GetInvolved.tsx` | Rewrite with funding need and manifesto partner types |
| `src/components/FAQ.tsx` | Update answers, add AI question |
| `src/components/Footer.tsx` | Update year, GitHub link, description |

No new files. No new dependencies. Same page structure, same visual style.

