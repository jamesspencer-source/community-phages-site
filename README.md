# Community Phages Website

Static Astro website for the Community Phages summer research program.

## Commands

```bash
npm install
npm run dev -- --port 4321
npm run build
```

The local dev server runs at `http://127.0.0.1:4321/`.

## GitHub Pages

This repository is configured for GitHub Pages through `.github/workflows/deploy.yml`.

Recommended public repository:

```text
jamesspencer-source/community-phages-site
```

Once the repository exists on GitHub and this project is pushed to `main`, the workflow builds Astro and publishes `dist/` to:

```text
https://jamesspencer-source.github.io/community-phages-site/
```

In the GitHub repository settings, set Pages to deploy from GitHub Actions.

## Content Updates

Most annual program updates live in `src/data/site.ts`:

- navigation labels
- program facts
- weekly journey copy
- application status
- public discovery links
- public resource links
- partner descriptions

Keep private operational material out of this repository and public site, including student records, contact sheets, onboarding documents, internal Slack links, and private Google Drive logistics.

## Visual Direction

The implemented direction follows the approved specimen atlas concept: sharp public-institution typography, strong phage/plaque/sequencing motifs, numbered records, real headshots, and content-rich page rhythms.
