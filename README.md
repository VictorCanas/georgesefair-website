# Dr. Georges Sefair — Kingdom Builders

Marketing site for the Dr. Georges Sefair / Kingdom Builders ecosystem.
Live at **[georgesefair.com](https://georgesefair.com)**.

> 📖 **Maintaining or taking over this project?** Read **[HANDOFF.md](./HANDOFF.md)** — a full guide (in Spanish) on how to run, edit, and deploy the site.

## Stack

Vite · React 18 · TypeScript · Tailwind CSS · React Router · deployed on Vercel.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
```

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Dev server with live reload |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build |
| `npm run typecheck` | TypeScript check |
| `npm run lint` | ESLint |

## Deploy

```bash
vercel --prod
```

(Or connect the GitHub repo in Vercel for automatic deploys on push to `main` — see HANDOFF.md §6.)

## Where things live

- **Links, socials, testimonial videos** → [`src/config.ts`](./src/config.ts)
- **Routes** → [`src/App.tsx`](./src/App.tsx)
- **Pages** → `src/pages/`
- **Shared UI & animations** → `src/components/ui.tsx`
- **SEO / social card** → [`index.html`](./index.html) + `public/og-image.jpg`
- **Collage photos** → `public/historia/`

## QA

A Claude Code skill `ui-check` (`.claude/skills/ui-check/`) runs a full visual + functional sweep of every page. Trigger it with `/ui-check`.
