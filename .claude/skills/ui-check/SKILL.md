---
name: ui-check
description: Run a full visual + functional QA sweep of the georgesefair-website. Use when the user says "check the UI", "is the UI fire", "QA the site", "review the pages", or before deploying. Starts the dev server, visits every route at desktop and mobile, screenshots each, and reports issues (broken images, placeholder text, nav overlap, overflow, console errors, dead links) with a final verdict.
---

# UI Check — "is the UI fire?" 🔥

A repeatable quality sweep for the Dr. Georges Sefair site. Follow these steps in order and finish with a clear verdict.

## 1. Start the preview
- `preview_start` with `{ name: "georgesefair-dev" }` (defined in `.claude/launch.json`, port 5173). Reuse if already running.

## 2. Routes to audit
Visit each at **desktop** and **mobile (375×812)**:

| Route | Page |
|-------|------|
| `/` | Inicio |
| `/dr-george` | Dr. Georges |
| `/metodo-faos` | Método FAOS / Reset Mental |
| `/build-tour` | Build Tour |
| `/kingdom-builders` | Kingdom Builders |
| `/unirse` | Unirse |

For each route: navigate, wait ~1.5s for `Reveal` scroll animations to settle, screenshot top, scroll through, screenshot key sections.

## 3. Checklist — flag anything that fails

**Content integrity**
- [ ] No leftover placeholder text: grep the rendered page for `$[PRECIO`, `[Nombre`, `[Estudiante`, `lorem`, `TODO`, `Video testimonial` (empty video card), `undefined`, `NaN`.
- [ ] All `<img>` load (no broken/zero-size). Check via `read_network_requests` for 404s on `/historia/*`, `/_AFV3530*`, logos.
- [ ] All testimonial video iframes present and pointing at real Drive IDs (6 on Método FAOS, 2 on Kingdom Builders).

**Layout**
- [ ] No content hidden under the fixed navbar (hero top not cut off).
- [ ] No horizontal scroll / overflow at mobile width: `document.documentElement.scrollWidth <= window.innerWidth`.
- [ ] Cards/grids align; no overlapping text; CTAs not clipped.
- [ ] Gold-on-light and white-on-dark text stays readable (no white-on-white / gold-on-cream low contrast).

**Behavior**
- [ ] `read_console_messages` → zero errors (warnings noted).
- [ ] CTAs go to the real Circle URL (from `src/config.ts`), social links open the real profiles, internal nav routes resolve (no 404 route).
- [ ] Reveal animations fire once and settle (nothing stuck invisible at opacity 0).

**Brand/polish**
- [ ] Fonts loaded (Anton/Bebas display, Montserrat headings, Inter body) — no fallback serif flash left rendered.
- [ ] Section dark/light rhythm intact; gold used as accent only.

## 4. Diagnose & (optionally) fix
For each failure, open the source (`src/pages/*`, `src/components/*`), explain the cause, and fix if the user asked for fixes. Re-run the affected route to confirm.

## 5. Reset
- `resize_window` preset `desktop` when done.

## 6. Verdict
End with one of:
- **🔥 Fire** — all checks pass, screenshots attached.
- **⚠️ Needs work** — numbered list of issues, each with route + what's wrong + fix suggestion, most severe first.

Share representative screenshots with the user via SendUserFile (don't just describe them).
