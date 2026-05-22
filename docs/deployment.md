# Deployment

This repository uses Astro and GitHub Actions to publish the site to GitHub Pages.

## Required GitHub Pages setting

In repository settings, set GitHub Pages to use GitHub Actions:

1. Open repository Settings.
2. Open Pages.
3. Under Build and deployment, set Source to `GitHub Actions`.
4. Save.

After this is enabled, every push to `main` runs `.github/workflows/deploy-pages.yml`, builds the Astro site, uploads `dist`, and deploys it to GitHub Pages.

## Expected site URL

https://agennext.github.io/Agent-Theories/

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deployment trigger

Last deployment trigger note: refresh Pages deployment from `main`.
