---
id: 005
title: Deploy Site to GitHub Pages
stage: general
date: 2026-02-26
surface: agent
model: claude-sonnet-4-6
feature: 001-docusaurus-book-setup
branch: master
user: user
command: deploy the site
labels: ["deploy","github-pages","github-actions","docusaurus","ci"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .github/workflows/deploy.yml
  - frontend/docusaurus.config.js
tests:
  - GitHub Actions build job (PASS - 1m18s)
  - GitHub Actions deploy job (PASS - 8s)
---

## Prompt

deploy the site

## Response snapshot

Set up full GitHub Pages deployment pipeline:

1. **Updated `docusaurus.config.js`** — Changed `url`, `baseUrl`, `organizationName`, `projectName`, and added `trailingSlash: false` to match GitHub Pages at `https://TALHAFAROOQ136.github.io/radiology_textbook/`

2. **Created `.github/workflows/deploy.yml`** — Two-job pipeline:
   - `Build Docusaurus`: Node 20, `npm ci`, `npm run build` in `frontend/`, artifact upload
   - `Deploy to GitHub Pages`: `actions/deploy-pages@v4` with environment protection

3. **Enabled GitHub Pages** via API (`build_type: workflow`)

4. **Set `master` as default branch** on GitHub

5. **Pushed** → GitHub Actions triggered automatically

### Deployment Result
- Build job: ✅ passed in 1m18s
- Deploy job: ✅ passed in 8s
- Live URL: https://TALHAFAROOQ136.github.io/radiology_textbook/

## Outcome

- ✅ Site live at https://TALHAFAROOQ136.github.io/radiology_textbook/
- ✅ Auto-deploys on every push to master
- ✅ Manual trigger via workflow_dispatch also available
