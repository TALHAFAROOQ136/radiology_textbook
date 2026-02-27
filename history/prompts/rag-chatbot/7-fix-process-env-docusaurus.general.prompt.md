---
id: 7
title: "Fix process.env Docusaurus CustomFields"
stage: general
date: 2026-02-27
surface: agent
model: claude-sonnet-4-6
feature: rag-chatbot
branch: master
user: user
command: "fix the process.env issue"
labels: ["fix", "docusaurus", "chatbot", "process-env", "deploy"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - frontend/docusaurus.config.js
  - frontend/src/components/common/ChatbotWidget.tsx
tests:
  - GitHub Actions: Build Docusaurus — PASS (1m13s)
  - GitHub Actions: Deploy to GitHub Pages — PASS (10s)
---

## Prompt

fix the process.env issue

## Response snapshot

Replaced `process.env.BACKEND_URL` (not available in browser builds) with the Docusaurus-idiomatic pattern:
- `docusaurus.config.js`: added `customFields.backendUrl` sourced from `process.env.BACKEND_URL`
- `ChatbotWidget.tsx`: reads value via `useDocusaurusContext().siteConfig.customFields.backendUrl`

Committed directly to master, pushed, and deployment completed successfully (run 22476697052).

## Outcome

- ✅ Impact: `ReferenceError: process is not defined` console error eliminated from deployed site
- 🧪 Tests: Build PASS + Deploy PASS — GitHub Actions run 22476697052
- 📁 Files: 2 files modified (docusaurus.config.js, ChatbotWidget.tsx)
- 🔁 Next prompts: set BACKEND_URL env var when backend is hosted in production
- 🧠 Reflection: Docusaurus compiles at build time; runtime env vars must go through customFields built into the bundle

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): GitHub Actions PASS
- Prompt variant (if applicable): N/A
- Next experiment: N/A
