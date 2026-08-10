# AGENTS.md

Vanilla Vite static site (no framework, no TypeScript). Plain HTML/CSS/JS only.

## Commands

- Package manager is **pnpm** (lockfile: `pnpm-lock.yaml`). Use `pnpm`, never `npm`/`yarn`.
- `pnpm dev` — Vite dev server
- `pnpm build` — production build to `dist/`
- `pnpm preview` — preview the production build
- There is no lint, typecheck, or test setup. `pnpm build` is the only verification step.

## Architecture

- Entry: `index.html` → `src/main.js` (imports `./style.css`). Vite uses `index.html` at repo root as the app shell.
- Static assets: `public/` is served at root (e.g. `/favicon.svg`); `src/assets/` holds imported assets like hero images.
- Vite 8 / Rolldown requires Node `^20.19 || >=22.12` (env has v22).

## Gotchas

- No `vite.config.*` exists — Vite defaults apply.
- CSS is imported from JS (`src/main.js`); don't add `<link>` tags in `index.html` for app CSS.
- Public assets referenced in `index.html` use root-absolute paths (`/favicon.svg`).
