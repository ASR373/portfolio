# ASR Portfolio

Personal portfolio for **Adith Sreeram Arjunan Sivakumar** — a clean, animated React + Three.js site with sections for About, Experience, Projects, Certifications, and Contact.

**Tech Stack**
- React + Vite
- Three.js via `@react-three/fiber`
- Framer Motion
- Vanilla CSS (custom design system via CSS variables)

## Local Development

```bash
npm install
npm run dev
```

Build and preview locally:

```bash
npm run build
npm run preview
```

## Deployment

This repo is set up for static hosting (SPA).

### Render (Static Site)
- Build Command: `npm ci && npm run build`
- Publish Directory: `dist`

If you see an error like `Publish directory dict does not exist!`, it means the Publish Directory was set incorrectly in Render. It must be `dist` (not `dict`).

### Netlify
- Build Command: `npm run build`
- Publish Directory: `dist`

SPA routing support is included via `public/_redirects` and `netlify.toml`.

## Contact Form

The contact form submits via FormSubmit to the configured email address.

## Project Structure
- `src/content/siteContent.js`: all site content (text, links, projects, certifications, etc.)
- `src/components/`: UI sections and shared components
- `src/styles/`: global styles and variables
