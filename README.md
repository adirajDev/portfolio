# adirajDev — portfolio

Aditya Raj's portfolio site. React + Vite + Tailwind CSS, with a light/dark theme switcher.

## Stack

- React 18 + Vite
- Tailwind CSS (theme driven by CSS variables, see `src/index.css`)
- No backend, no external UI libraries — plain components

## Getting started

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

```bash
npm run build      # production build to dist/
npm run preview    # preview the production build locally
```

## Project structure

```
src/
  components/       one component per section (Hero, About, Experience, Projects, Skills, Contact)
                     plus shared pieces (Nav, ThemeToggle, Reveal, UI.jsx for RouteLabel/Tag)
  hooks/
    useTheme.js      dark/light theme state, persisted to localStorage
    useReveal.js      scroll-triggered reveal animation via IntersectionObserver
  data/
    content.js        all editable content — name, bio, experience, projects, skills, links
  App.jsx             page layout + scroll-spy nav highlighting
  index.css           theme CSS variables (light + dark) and global styles
```

## Editing content

Everything you'd want to change — name, tagline, projects, skills, experience, links — lives in
`src/data/content.js`. No need to touch component files for content updates.

## Deploying

Static build, works anywhere: Vercel, Netlify, GitHub Pages, Cloudflare Pages.

```bash
npm run build
```

Upload the `dist/` folder, or connect the repo to your host of choice and set the build command
to `npm run build` with output directory `dist`.
