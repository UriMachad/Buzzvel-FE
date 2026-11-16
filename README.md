# Luma – Buzzvel FE Test 2026

Responsive landing page (mobile, tablet, desktop) built with Next.js 15 (App Router), TypeScript and Tailwind CSS v4.

## Install, run, build
```bash
npm install
npm run dev            # http://localhost:3000
npm run build && npm start
npm run lint
npm test               # Vitest: contact form validation
```

## Structure
- `src/data/content.ts` + `src/types.ts` – typed mock data
- `src/components/ui` – Container, Button, SectionHeading, Photo, FormField (typed props)
- `src/components/sections` – one file per page section
- `src/components/ContactForm.tsx` – client form with validation

## Key decisions
- Mobile-first; layouts switch at `lg` (1024px), nav and steps at `md`, so tablet gets a single-column hero with a capped image width.
- Images are served by `next/image` from `public/images/` (`hero.jpg`, `featured.jpg`, `people-1..10.jpg`); the hero image uses `priority`. A tinted fallback shows if a file is missing.
- Image assets: photos were exported from the Figma design and cropped manually with an image editor to remove the white card frame; files are stored in `public/images/`.
- Font: Plus Jakarta Sans via `next/font`.
- The design repeats "STEP 01" three times; I numbered the steps 01–03.
- Mobile mockup has Portuguese form placeholders; I kept English for consistency.
- Form: client-side validation, errors linked with `aria-describedby`, success message in a `role="status"` region.
- No animations beyond a small button transition, only enabled under `prefers-reduced-motion: no-preference`.
- Accessibility: skip link, landmarks, labelled inputs, alt text, keyboard-friendly menu (Esc closes it), one `h1`.

## Known gaps
- [Fill in after checking against Figma: colors, spacing, avatars, decorative shapes in the CTA]
- [Fill in: Lighthouse scores, build/lint/test results]

## Time spent
Approximately [X] hours.

## AI tools used
I used Claude to generate the initial structure and components from the design screenshots. I then [reviewed each file, compared with Figma, ran build/lint/tests, checked 375/768/1440px and keyboard navigation]. I can explain the code.
