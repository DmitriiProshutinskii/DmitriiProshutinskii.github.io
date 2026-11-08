# Personal portfolio

Static implementation of the current Personal Website Figma designs: Inter, IBM Plex Mono, paper/ink/pink tokens, responsive grids and original image fills.

Routes: `/`, `/experience/`, `/travels/`.

Run `npm run build:site`, then `npm run start:site` from the repository root. No dependency installation is required for these Node scripts. After building, run `node scripts/check-site.mjs` to verify routes, assets and anchors.

`content/CV-Dmitrii-Proshutinskii-v7.md` is the resume source (AI Product Engineer positioning). Experience renders its roles, summary and skills directly; a role body keeps the CV's order, so `**LABEL**` paragraphs become mono sub-headings (Responsibilities / Key accomplishments). Homepage highlights use the same metrics: Football+ shipped solo in 2.5 months (80 screens, 40 API endpoints, 1,550 commits, 313 test files, 200+ MAU, #1 Product of the Week on Product Radar); Balady’s 500K MAU is product reach from internal analytics for 2025; ~10–15% lower search latency and startup 3.5 → 2 s are manual measurements.

Travels begins with the October 2026 mini-trip to Vardzia and Akhaltsikhe, Georgia. Georgia and Kamchatka use six optimized personal photographs in `assets/travel/`; the remaining nine frames use the original Figma illustration atlas and are visibly labeled as AI-generated. Dates for the earlier trips remain month-only because no years were supplied.

Existing React source and dependencies are retained for reference. The Pages workflow runs `build:site` and publishes to the existing `gh-pages` branch on pushes to `master`, without force-pushing. Old routes redirect to the new portfolio. The old PDF URL is preserved for compatibility; use Experience’s Print / Save PDF for the current resume.

The primary domain is `https://proshutinskii.com/`. The build copies the root `CNAME` into the published directory; canonical URLs, sitemap and robots.txt use this domain. Keep the `CNAME` file when changing deployment scripts.

Language variants are generated at `/ru/` and `/es/` with matching Experience and Travels paths, canonical URLs and hreflang links. `translations.mjs` holds reviewed RU/ES translations keyed to the English source; the build fails if a new text lacks a translation. `preferences.js` remembers language and theme in localStorage, preserves travel anchors on language changes and follows the system theme until a manual theme is chosen. Print styling always uses a light background.

Homepage summary now uses 5+ years, 9+ projects contributed to (seven CV roles plus Komodo Wallet and Football+), and three independent apps. Ongoing work is included in the project count; it is not a count of completed projects. Startup and release-time evidence remain in the full CV, while homepage headings describe concrete outcomes.

Travels offers list/map views using build-time SVG geometry from Natural Earth. `content/world-countries.json` contains simplified 110m country paths plus the Singapore contour from the 50m dataset, obtained from https://github.com/nvkelso/natural-earth-vector/tree/master/geojson. Natural Earth data is public domain: https://www.naturalearthdata.com/about/terms-of-use/. No runtime map service, key, or third-party scripts are needed. The five highlighted countries link to the same travel entries; Russia is labeled Russia / Kamchatka. On mobile the map scrolls horizontally, initially centered on the visited countries. With JavaScript disabled, the full list remains visible. `travel-view.js` remembers the display mode and supports country anchors and keyboard links.

`content/travel-places.mjs` records the user-supplied country and city lists in EN/RU/ES. All 27 visited countries are highlighted. The 22 countries without journal entries appear in a future-notes directory without invented dates or photos; Georgia and Russia retain their existing entries plus additional visited cities.

China includes Shanghai and Hong Kong; Vietnam includes Da Nang, Hanoi and Hoi An. Thailand / Phuket is included in the visited-country map and future-notes directory.

Motion layer: `motion/` holds small ES modules loaded from every page (`main.js` is the entry). It adds the variable-Inter headline intro, scroll-filled statements, counting metrics, masked heading reveals, a fine dot grid behind the page, a flow field behind the products, the liquid CTA, decoding mono labels, a small globe in the homepage proof row and a draggable globe on Travels. The globes rasterize `content/world-countries.json`, copied to `/assets/world-countries.json` at build time; pink marks the visited countries from `travel-places.mjs`. With `prefers-reduced-motion: reduce` every effect renders in its final, still state, and without JavaScript the page stays fully readable (the Travels globe section stays hidden). Variable Inter (latin and cyrillic subsets, OFL) is self-hosted in `assets/inter-var-*.woff2`. The static Inter files remain as the fallback for other glyphs.
