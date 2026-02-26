---
id: 006
title: Fix Live Site Logo and GitHub Links
stage: general
date: 2026-02-26
surface: agent
model: claude-sonnet-4-6
feature: 001-docusaurus-book-setup
branch: master
user: user
command: check the live site
labels: ["bugfix","github-pages","logo","docusaurus","config"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - frontend/static/img/logo.svg
  - frontend/docusaurus.config.js
tests:
  - Docusaurus production build (PASS - exit 0)
  - Live site console errors: 0 (previously 2)
  - Logo renders in navbar (PASS - visual verified)
  - GitHub navbar link points to correct repo (PASS)
  - GitHub footer link points to correct repo (PASS)
---

## Prompt

check the live site

## Response snapshot

Checked live site at https://TALHAFAROOQ136.github.io/radiology_textbook/ and found two issues:

1. **Missing `logo.svg`**: `frontend/static/img/` directory was empty — `img/logo.svg` returned 404, causing two console errors on every page load.
2. **Wrong GitHub links**: Three GitHub URLs in `docusaurus.config.js` still pointed to the placeholder `radiology-textbook/radiology-textbook` repo instead of `TALHAFAROOQ136/radiology_textbook`.

**Fixes:**
- Created `frontend/static/img/logo.svg` — SVG medical cross icon (blue, circle + cross design)
- Updated `docusaurus.config.js`:
  - `docs.editUrl` → `https://github.com/TALHAFAROOQ136/radiology_textbook/tree/master/`
  - `blog.editUrl` → `https://github.com/TALHAFAROOQ136/radiology_textbook/edit/master/`
  - Navbar GitHub `href` → `https://github.com/TALHAFAROOQ136/radiology_textbook`
  - Footer "More > GitHub" `href` → `https://github.com/TALHAFAROOQ136/radiology_textbook`
- Build verified (exit 0)
- Pushed to master → GitHub Actions redeployed automatically
- Live site re-verified: 0 console errors, logo renders in navbar

## Outcome

- ✅ Impact: Live site now error-free; logo visible in navbar; all GitHub links correct
- 🧪 Tests: Docusaurus build passes; 0 console errors on live site
- 📁 Files: 2 files changed (logo.svg created, docusaurus.config.js updated)
- 🔁 Next prompts: RAG chatbot feature (spec ready at specs/001-rag-chatbot/), favicon.ico still missing
- 🧠 Reflection: Static assets in `frontend/static/img/` must be explicitly created — Docusaurus does not ship defaults

## Evaluation notes (flywheel)

- Failure modes observed: Missing static assets not caught by local dev (browser may cache); placeholder config URLs from Docusaurus scaffold not updated at project creation
- Graders run and results (PASS/FAIL): Build PASS, live site check PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): Add favicon.ico to eliminate remaining 404; update Community footer links from Docusaurus defaults to project-specific links
