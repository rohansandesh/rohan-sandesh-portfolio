# Rohan Sandesh Portfolio

Suggested GitHub repository name: `rohan-sandesh-portfolio`

A single-page portfolio for software development internship and placement applications. Tagline: Learning | Building | Inspiring.

## Stack
React 18, TypeScript, Vite 5, standard CSS, semantic HTML. No backend, API keys, environment variables or external services. Fonts are system fonts.

## Features
Sticky responsive navigation with mobile menu and active-section highlight, hero, about, categorised skills, four featured projects, experience timeline, leadership cards, education and certifications, services, creative gallery (empty state until images are added), contact links, SEO and Open Graph metadata, reduced-motion support, keyboard focus styles.

## Prerequisites
Node.js 18 or newer and npm. VS Code is recommended.

## Run locally
```bash
npm install
npm run dev
```
Open the URL printed in the terminal (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```
Output is in `dist/`, a static site.

## Structure
```
public/            favicon.svg, resume.pdf, images/
src/data/portfolio.ts   ALL content (edit this first)
src/components/    Navbar, Footer, SectionHeading, Chips
src/sections/      Hero, About, Skills, Projects, Journey, Extras, Contact
src/styles/        global.css (tokens, layout), components.css
```

## Customising
- **Intro, tagline, contact details, links:** `profile` in `src/data/portfolio.ts`.
- **Add a project:** add an object to `projects`. Add `github` and `demo` URLs to show buttons.
- **Internships, involvement, education, certifications, skills:** the matching arrays in the same file.
- **Creative work:** copy images into `public/images/`, then add `{ src: '/images/name.jpg', alt: '...', category: 'Poster' }` to `creativeWork`.
- **Résumé:** replace `public/resume.pdf`.
- **Colours:** CSS variables at the top of `src/styles/global.css`.

## Deployment
Run `npm run build` and upload `dist/` to any static host. For Netlify or Vercel, set the build command to `npm run build` and the output directory to `dist`. For GitHub Pages, publish the `dist` folder (the build uses relative asset paths).
