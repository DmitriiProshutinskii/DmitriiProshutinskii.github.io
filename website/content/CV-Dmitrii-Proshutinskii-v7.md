# Dmitrii Proshutinskii

**AI Product Engineer | Agentic systems · RAG · LLM evals**

Tbilisi, Georgia | Open to relocation to Dubai or Spain, and to remote work

koptehe+job@gmail.com | [linkedin.com/in/koptehe](https://www.linkedin.com/in/koptehe/) | [github.com/DmitriiProshutinskii](https://github.com/DmitriiProshutinskii)

## Summary

AI Product Engineer with 8 years in software engineering. I build AI-native products end to end: agent harnesses, RAG pipelines and LLM features wired into production systems and held to measurable quality with evals, guardrails and observability. I own the full loop, from problem discovery with stakeholders and rapid prototyping to production rollout with attention to reliability, latency and cost. Background in senior mobile engineering at scale and Applied Mathematics & Physics at MIPT.

## Experience

### Football+ — Co-founder & CTO

Mar 2026 – Present | Remote

Social network and job marketplace for the Russian football industry.

- Built and shipped the whole product solo by orchestrating an AI toolchain: 80 screens and 40 API endpoints in 2.5 months; 1,550 commits and 313 test files.
- Launched to 200+ MAU; #1 Product of the Week on Product Radar.
- Built an LLM vacancy-intake pipeline: a link or text (hh.ru, Telegram posts, any site) becomes structured job drafts via schema-validated extraction (OpenAI SDK, Zod, Qwen3-30B), with employer matching and duplicate detection; powers a Telegram bot and the admin panel.
- Made LLM calls production-grade: typed failure handling (rate limits, refusals, truncation, invalid JSON), timeouts and retries, per-request token and cost tracking; an open-weight model through a pay-per-use router keeps LLM spend predictable.
- Shipped LLM features for candidate–vacancy matching, profile generation and content moderation using embeddings and structured outputs.
- Built computer-vision identity verification: on-device face detection (MediaPipe on web, VisionCamera on mobile), liveness / anti-spoofing and avatar matching through a queued CV service, automatic decisions with human-in-the-loop override.
- Stack: TypeScript monorepo — Hono API, Next.js, React Native / Expo, PostgreSQL, Redis / BullMQ, Socket.IO, Docker, CI/CD with rollback.

### 2GIS / URBI (USETECH) — AI Product Engineer

Sep 2025 – Oct 2026 | Remote

**RESPONSIBILITIES**

- Designed and shipped LLM applications from rapid prototype to production for 2GIS / URBI products.
- Built RAG pipelines: chunking, embeddings, vector search and grounded answers with structured outputs.
- Built agent harnesses for LLM task solving: multi-agent orchestration, tool calling and MCP integrations with internal APIs and data sources, on OpenAI and Anthropic Claude APIs.
- Orchestrated an AI engineering toolchain across the delivery cycle: Claude Code and Cursor agents, spec-driven workflows, custom harnesses, MCP tools and AI code review.

**KEY ACCOMPLISHMENTS**

- Made LLM evaluation a release standard: regression sets for prompts and agents, guardrails, observability and tracing, with quality, latency and cost tracked per task.
- Rolled AI-native development practices out to the team.
- Technical lead of a 3-person mobile team since Jul 2026: architecture, feature delivery, code review and mentoring of junior developers.

### 2GIS / URBI (USETECH) — Lead Mobile Engineer, Balady

Mar 2024 – Sep 2025 | Remote

Government navigation and city-services super-app for Saudi Arabia.

- Led mobile development of Balady, a government navigation and city-services super-app with 500K MAU (2025), built in Flutter.
- Cut search-to-result latency by ~10–15% with query-aware caching and fewer redundant requests; cut startup to a usable home screen from 3.5 s to 2 s.
- Shipped native Android Auto and Apple CarPlay integrations (Kotlin, Swift, platform channels).
- Initiated and co-architected a standalone Flutter UI kit with independent testing; partnered with designers on a design system, improving UI consistency and cutting recurring UI defects.

### Epic Charging — Lead Mobile Developer

Jan 2023 – Aug 2024 | Remote

EV charging software for the US market.

- Sole mobile engineer: first iOS and Android releases in six months — architecture, features, testing, App Store and Google Play publishing; rebuilt the codebase in Flutter.

### Konstructly — Flutter Developer

Jan 2022 – Jan 2023 | Remote

Construction management software.

- UI components were scattered and every release was built by hand, so I took ownership of both: built a reusable Flutter UI kit as a separate package from Figma designs with Storybook, and set up CI/CD on Codemagic and GitHub for environment-specific builds and store deployment.
- Added Sentry monitoring and Amplitude analytics, so the team could see errors and usage in production.

### No Finish Line — Flutter Developer

Aug 2021 – Apr 2022

- Owned monetization and engagement features for the Pawen app end to end: a RevenueCat paywall, analytics, push notifications and animated product interfaces.

### RAMAX Group — iOS Developer

Apr 2021 – Jan 2022

- Shipped features for the Aeroflot iOS app in a large production codebase (Swift, RxSwift, MVVM).

### Strata Solutions — Mixed Reality Developer

Aug 2018 – Mar 2021

- Built Microsoft HoloLens 2 applications from concept to working product (Unity, C#, Azure) and supervised an intern — my first experience leading someone else’s work.

### Computational Materials Discovery Laboratory — Python Developer

Aug 2017 – Sep 2018

- Developed scientific Python software for materials research.

## Selected Projects

- **[RusCaps](https://app.ruscaps.tech/):** AI subtitle SaaS for Russian short-form video; web app in early access.
- **Soyka:** Granola-style AI app that turns conversations into text.
- **KBT Note & Life Tracker:** two indie apps shipped solo to the App Store and RuStore.

## Technical Skills

**AI engineering:** LLM applications, AI agents, multi-agent orchestration, agent harnesses, tool calling, MCP, RAG (embeddings, vector search), prompt engineering, structured outputs.

**AI quality:** LLM evals, regression sets, guardrails, observability and tracing, latency and cost optimization.

**Models and APIs:** OpenAI API / SDK, Anthropic Claude API, open-weight models (Qwen) via OpenAI-compatible routers.

**AI-native development:** Claude Code, Cursor, spec-driven agentic workflows, AI code review.

**Engineering:** TypeScript, Node.js (Hono), Python, PostgreSQL, Redis, Docker, CI/CD, Azure, Git, REST APIs.

**Mobile:** Flutter / Dart (expert), React Native / Expo, iOS and Android releases, Android Auto, Apple CarPlay.

**Computer vision:** MediaPipe, on-device face detection, liveness checks.

**Product:** End-to-end ownership, 0→1 startups, hypothesis validation and MVPs, prototype to production, customer discovery, mentoring.

## Education

**Moscow Institute of Physics and Technology (MIPT)**

Bachelor of Science and Master of Science, Applied Mathematics and Physics | 2014–2020

## Technical Writing

- [Moving the Camera with a Rotated Viewport in 2GIS MSDK](https://koptehe.medium.com/moving-the-camera-with-a-rotated-viewport-in-2gis-msdk-73d85f0f2a5f)
- [Recreating the Telegram Profile Effect Using Metaballs and Flutter](https://koptehe.medium.com/recreating-the-telegram-profile-effect-using-metaballs-and-flutter-92aa128a0cf5)

## Languages

Russian: native | English: professional working proficiency | Spanish: A2–B1, DELE A2
