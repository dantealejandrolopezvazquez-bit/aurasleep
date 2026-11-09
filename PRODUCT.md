# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML + CSS + JS, no framework (CLAUDE.md). Hosted on GitHub Pages from `main`. The redesign lives in `v2/` and is published at https://dantealejandrolopezvazquez-bit.github.io/aurasleep/v2/ in parallel with the current site; the user decides later whether it replaces the main URL.

## Users

Two audiences, weighted equally (user, 2026-11-08):
- **Evaluators:** the Emprendimiento teacher and classmates, watching the site projected on a large screen during the team's presentation. They judge whether the idea is viable, honest and well researched.
- **Imagined buyer:** urban adults 22–45 with demanding work or studies who already invest in wellbeing; couples sharing a bedroom (docs/contenido.md §6).

Primary viewing situation: projected in class (user, 2026-11-08). Also shared as a link and opened on phones.

## Product Purpose

AuraSleep is a conceptual school project (subject: Emprendimiento, activity "Un objeto cotidiano: la almohada"): a pillow that replaces the sound alarm with a 15-minute sequential wake-up of warm light and a directed scent burst. The site must convince both audiences that the idea is desirable, viable and honestly argued. Nothing is sold; any waitlist is a demonstration.

## Positioning

The hybrid union: dawn light (textile optical fiber in the top edge) and focused aroma (coin-sized diffuser at nose height) in one calibrated sequence, inside the pillow itself. Sunrise lamps only do light, aroma clocks only do scent, smart pillows don't handle waking. Hard to copy because the value is the calibration per user, not the parts.

## Operating Context

Presented live in class from a laptop to a projector, alongside the team's 8-slide Canva pitch; then the link circulates by WhatsApp/Classroom. Supporting artifacts: the research PDF (5 chapters) and the 3D model.

## Capabilities and Constraints

Fixed by the user (2026-11-08), must survive any redesign:
- **3D model stays:** `modelo-3d/aurasleep-3d.html` (geometry, views perspectiva/superior/lateral/interna/uso, the generic person figure, the wake-up animation). Only its visual frame (stage background, label styling) may change to match the site.
- **Canva presentation stays embedded:** https://www.canva.com/design/DAHZhJLSbZk/PKP8oiFlfbjpvsR61WyPbQ/view?embed (load on demand; no third-party cookies by default).
- **Information is not altered:** texts in `docs/contenido.md`, figures in `docs/datos.json`, the research PDF. Nothing invented; anything missing is researched and sourced.
- Spanish (Mexico), "tú". Responsive to 360 px without horizontal scroll. Contrast AA, keyboard navigable, `prefers-reduced-motion` respected. No trackers or third-party cookies.
- Waitlist form is demonstrative: sends and stores nothing.

## Brand Commitments

- Name **AuraSleep**; slogan **"Despierta con luz y aroma, no con ruido."**
- Product cover colors are fixed and named: Blanco roto `#EDE8DF`, Gris piedra `#8F8B85`, Beige cálido `#D8C2A3`.
- The aroma keeps a dedicated color of its own.
- Concept: from night to dawn as the visitor moves through the page (aurasleep-marca skill, fixed part).
- The user rejected the first site's look (dark navy + orange/amber, Instrument Sans + DM Mono) as "sin personalidad, muy IA": it is an anti-reference, not a palette to reuse.

## Evidence on Hand

- Copy: `docs/contenido.md`. Data: `docs/datos.json` (specs, costs, prices, margins, 3-year illustrative scenario, market figures with sources).
- Renders: `public/img/*.webp`, `public/img/vista_uso.jpg`. 3D viewer: `modelo-3d/aurasleep-3d.html`.
- Research PDF: `docs/AuraSleep_Investigacion.pdf`. Canva pitch (embed above); public Canva links for poster and flyer in the current `index.html`.
- Sources [1]–[14] listed in `docs/contenido.md`.
- Team: Dante Lopez, Sebastian Saavedra, Carlos Prol, Sebastian Lavariega. Contact: dantealejandrolopezvazquez@gmail.com. School, teacher and group are not shown.
- **Absent, never fabricate:** testimonials, reviews, press logos, customer counts, real sales, medical claims. All prices and costs are hypothetical and must say so in small print where they appear.

## Product Principles

1. Honesty is part of the pitch: hypothetical figures labelled, manufacturer data flagged as such, open risks stated.
2. Show the mechanism, don't describe it: light rising and aroma reaching the nose are the proof.
3. Calm over noise: the product removes a jolt; the experience of the site must not be one.
4. Readable from the back of a classroom first, beautiful second, never the reverse.

## Accessibility & Inclusion

WCAG AA contrast; must stay legible when projected (washed-out projectors lower contrast further). Keyboard access to every control, including the 3D view buttons and the presentation loader. Reduced motion: no autoplay animation.
