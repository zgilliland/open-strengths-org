

# Change "Read White Paper" to "Read Our Manifesto"

Two files need updating:

## 1. Hero Button (`src/components/Hero.tsx`)
- Change button text from "Read White Paper" to "Read Our Manifesto"

## 2. WhitePaper Page (`src/pages/WhitePaper.tsx`)
- Change the GitHub fetch URL from:
  `https://raw.githubusercontent.com/zgilliland/OpenStrengths/main/whitepaper.md`
  to:
  `https://raw.githubusercontent.com/open-strengths/docs/main/manifesto.md`

This will make the hero CTA say "Read Our Manifesto" and load the manifesto markdown from the correct repository.

