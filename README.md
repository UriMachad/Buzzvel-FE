# Luma – Buzzvel FE Test 2026

Responsive landing page (mobile, tablet, desktop) built from the supplied Figma
design with Next.js 15 (App Router), TypeScript and Tailwind CSS v4.

## Install, run, build
```bash
npm install
npm run dev              # http://localhost:3000
npm run build && npm start
npm run lint
npm test                 # Vitest: contact form validation
```

## Structure
- `src/data/content.ts` and `src/types.ts` – typed mock data
- `src/components/ui` – reusable components with typed props
  (Container, Button, SectionHeading, Photo, FormField, AvatarStack)
- `src/components/sections` – one file per page section
- `src/components/ContactForm.tsx` – client form with validation
- `public/images` – photos and SVGs exported from Figma

## Key decisions
- Mobile-first. The nav and the steps switch layout at `md` (768px); the hero,
  featured course, people gallery and contact switch at `lg` (1024px), so
  tablet gets a single-column layout with a width-capped hero image.
- Fonts: Plus Jakarta Sans for headings and Inter for body text, loaded with
  `next/font`.
- Images use `next/image`; only the hero image has `priority`. Photos were
  exported from Figma and cropped manually with an image editor to remove the
  white card frame. If a file is missing, `Photo` shows a tinted placeholder.
- The people gallery is positioned with percentages measured from the design,
  so it scales as one piece.
- CTA: only the decorative shapes come from the Figma SVG (cleaned to keep
  just the shapes, ~11 KB). Heading, buttons and avatars are real HTML for
  accessibility. From 1024px the section keeps the SVG's aspect ratio so the
  shapes are never cropped; the container is capped at 1920px.
- The design shows "STEP 01" on all three steps; I kept it as designed.
- Mobile steps use short vertical lines arriving at each icon, as in the
  mobile design; desktop uses a horizontal line stopping at the last icon.
- The mobile mockup has Portuguese form placeholders; I kept English for
  consistency with the desktop design.
- Form: client-side validation, errors linked with `aria-describedby`, success
  message in a `role="status"` region. No backend (mock submit).
- Accessibility: skip link, landmarks, one `h1`, labelled inputs, alt text
  (decorative images use empty alt), keyboard-friendly menu (Esc closes it),
  visible focus (white on the blue and dark sections).
- Animations: only a small button transition, enabled under
  `prefers-reduced-motion: no-preference`.
- ESLint is pinned to v8 because the default setup failed with a circular
  structure error.

## Checks
- npm run build: passes
- npm run lint: passes
- npm test: passes (2 tests)
- Lighthouse, production build: Performance [98 mobile / 100 desktop],
  Accessibility [97 mobile / 97 desktop], Best Practices [100 mobile / 100 desktop], SEO [100 mobile / 100 desktop]
- Manually checked at 375, 768 and 1440px, and with keyboard navigation.

## Known gaps
- Spacing, sizes and positions were matched by eye against the Figma
  screenshots, not measured in Dev Mode, so small pixel differences may remain.
- The CTA decoration is a single SVG exported at desktop size; on mobile it
  is cropped from the sides instead of having its own layout.
- Beyond 1920px wide, the CTA shapes that bleed off the edges may be cut.
- Placeholder links: "Log in", "View course", "Join Luma" and the footer
  links point to `#`, since the design defines no destinations.
- After closing the mobile menu with Esc, focus is not moved back to the
  menu button.

## Time spent
Approximately 18 hours.

## AI tools used
I used Claude (Anthropic) throughout the project: to generate the initial
Next.js/TypeScript/Tailwind structure from the design screenshots and to help
debug build, ESLint and test errors.

I checked the result by comparing each section with the Figma design,
exporting and fixing the assets myself, testing at 375/768/1440px and with
the keyboard, and running build, lint, tests and Lighthouse on the
production build. 
I can explain the code in this repository.