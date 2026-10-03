# Personal portfolio

Static implementation of the current Personal Website Figma designs: Inter, IBM Plex Mono, paper/ink/pink tokens, responsive grids and original image fills.

Routes: `/`, `/experience/`, `/travels/`.

Run `npm run build:site`, then `npm run start:site` from the repository root. No dependency installation is required for these Node scripts. After building, run `node scripts/check-site.mjs` to verify routes, assets and anchors.

`content/CV-Dmitrii-Proshutinskii-v6.md` is the resume source. Experience renders its roles, summary and skills directly. Homepage highlights use the same verified metrics: manually measured startup 3.5 → 2 seconds; approximately 10–15% lower manually measured search latency over six months; first iOS/Android Epic Charging releases in six months as sole mobile engineer. Balady’s 500,000 MAU is product reach from internal analytics for 2025.

Travel dates are month-only because no years were supplied. Images are AI-generated destination illustrations from Figma and visibly labeled. Image crops preserve the design’s 4×3 atlas.

Existing React source and dependencies are retained for reference. The Pages workflow runs `build:site` and publishes to the existing `gh-pages` branch on pushes to `master`, without force-pushing. Old routes redirect to the new portfolio. The old PDF URL is preserved for compatibility; use Experience’s Print / Save PDF for the current resume.

The primary domain is `https://proshutinskii.com/`. The build copies the root `CNAME` into the published directory; canonical URLs, sitemap and robots.txt use this domain. Keep the `CNAME` file when changing deployment scripts.

Language variants are generated at `/ru/` and `/es/` with matching Experience and Travels paths, canonical URLs and hreflang links. `translations.mjs` holds reviewed RU/ES translations keyed to the English source; the build fails if a new text lacks a translation. English CV v6 remains unchanged. `preferences.js` remembers language and theme in localStorage, preserves travel anchors on language changes and follows the system theme until a manual theme is chosen. Print styling always uses a light background.
