# Shravya Achanala — Portfolio

Bilingual (English / German) portfolio site for Shravya Achanala, M.Sc. Environmental Planning student at TU Berlin. Built with Angular 17 as standalone components, with routed pages rather than one long scroll.

## Stack

- **Angular 17** — standalone components, signals for state (no NgModules, no RxJS needed)
- **Angular Router** — each top-level page is its own lazy-loaded route
- **SCSS**, using CSS custom properties for the olive/paper color palette and light/dark theming
- No backend — all content lives in typed data files and is bundled at build time

## Pages

| Route | Content |
|---|---|
| `/` | Hero + About |
| `/experience` | Experience + Education |
| `/projects` | Publications + Projects |
| `/engagement` | Leadership + Skills |
| `/contact` | Contact |

## Project structure

```
src/app/
├── pages/                one route per page, each just composes section components
│   ├── home/
│   ├── experience/
│   ├── projects/
│   ├── engagement/
│   └── contact/
├── components/            one folder per section, each with .ts / .html / .scss
│   ├── navbar/
│   ├── hero/
│   ├── about/
│   ├── experience/
│   ├── education/
│   ├── publications/
│   ├── projects/
│   ├── leadership/
│   ├── skills/
│   ├── contact/
│   └── footer/
├── data/
│   ├── portfolio.types.ts   TypeScript interfaces for all content
│   └── portfolio.data.ts    EN + DE copy, keyed by section
├── services/
│   ├── language.service.ts  active language (signal), persisted to localStorage
│   ├── theme.service.ts     light/dark theme (signal), persisted to localStorage
│   └── navigation.service.ts  mobile nav drawer open/closed state
├── app.routes.ts         route → page component mapping
├── app.component.ts      persistent navbar + footer around <router-outlet>, sets document.title per route + language
└── app.component.html
```

Each component injects `LanguageService` and reads its slice of content reactively — switching the EN/DE toggle in the navbar re-renders every page immediately, no reload.

Deploying to a static host requires an SPA fallback rule so deep links like `/experience` don't 404 on refresh — already configured in `netlify.toml` and `vercel.json`.

## Updating content

All copy (both languages) lives in `src/app/data/portfolio.data.ts`. Update the `EN` and `DE` objects there — the shapes are enforced by `portfolio.types.ts`, so a mismatched or missing field is a compile error, not a silent bug.

## Photos & CV

Assets already in `src/assets/`:

- `portrait.jpg` — About section photo
- `proj1.jpg` … `proj4.jpg` — project cards (in the same order as `portfolio.data.ts`)
- `Shravya-Achanala-CV-EN.pdf` / `Shravya-Achanala-CV-DE.pdf` — the CV download; the About section's button links to whichever file matches the active language, switching live with the EN/DE toggle

To swap any of these, just overwrite the file with the same name and rebuild — no code changes needed. The About and Projects components check whether each file exists and fall back to a "coming soon" placeholder automatically if one is ever missing.

## Development

```bash
npm install
npm start        # ng serve — http://localhost:4200, auto-reloads on save
```

## Build

```bash
npm run build     # outputs to dist/shravya-portfolio/
```

The `dist/shravya-portfolio/browser` folder is static output — deployable to Netlify, GitHub Pages, Vercel, or any static host.

## Tests

```bash
npm test          # unit tests via Karma
```
