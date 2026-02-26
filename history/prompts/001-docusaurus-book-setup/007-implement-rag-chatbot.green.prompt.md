---
id: 007
title: Implement RAG Chatbot with Qdrant and OpenAI
stage: green
date: 2026-02-26
surface: agent
model: claude-sonnet-4-6
feature: 001-rag-chatbot
branch: master
user: user
command: implement the RAG chatbot
labels: ["rag","chatbot","openai","qdrant","vector-search","text-selection","backend","frontend"]
links:
  spec: specs/001-rag-chatbot/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - backend/src/services/qdrant-service.ts
  - backend/src/services/rag-service.ts
  - backend/src/services/conversation-service.ts
  - backend/src/api/chatbot/chat.ts
  - backend/src/app.ts
  - backend/scripts/index-content.ts
  - backend/package.json
  - frontend/src/components/common/ChatbotWidget.tsx
  - frontend/src/components/common/ChatbotWidget.css
  - frontend/src/components/common/TextSelectionHandler.tsx
  - frontend/src/theme/Layout/index.js
tests:
  - TypeScript compile (chatbot files) - PASS
  - Docusaurus production build - PASS (exit 0)
---

## Prompt

implement the RAG chatbot

## Response snapshot

Implemented full RAG chatbot pipeline:

**Backend (new services):**
- `qdrant-service.ts` — Qdrant Cloud client: `ensureCollection()`, `upsertChunks()`, `searchSimilar(topK=5)`
- `rag-service.ts` — Core RAG: `embedText()` (text-embedding-3-small), `query(question, history)` → GPT-4o-mini with system prompt grounded in textbook context
- `conversation-service.ts` — In-memory sessions: `Map<sessionId, Turn[]>`, TTL 30min, 10-turn max

**Backend (modified):**
- `api/chatbot/chat.ts` — Replaced DB-based stub with Qdrant RAG handler; supports `selectedText` for context-aware queries
- `app.ts` — Registered `/api/chatbot` routes

**Backend (new script):**
- `scripts/index-content.ts` — Reads all 88 `.md` files from `frontend/docs/`, chunks by H2 headings, embeds via OpenAI, batches into Qdrant (20 per batch)

**Frontend (enhanced):**
- `ChatbotWidget.tsx` — Added sessionId (sessionStorage), source citations panel (toggle), `window.__chatbotOpen()` bridge for text selection, SSR guards
- `ChatbotWidget.css` — Added source card styles and text selection tooltip styles
- `TextSelectionHandler.tsx` — Floating "Ask AI ✨" button appears when user selects ≥20 chars in `.theme-doc-markdown` elements
- `Layout/index.js` — Mounted `TextSelectionHandler`

## Outcome

- ✅ Impact: Full RAG pipeline implemented; chatbot can answer radiology questions grounded in the 88-chapter textbook with source citations
- 🧪 Tests: TypeScript chatbot files compile clean; Docusaurus build passes (SSR guards in place)
- 📁 Files: 11 files changed, 893 insertions
- 🔁 Next prompts: User must add OPENAI_API_KEY and Qdrant Cloud credentials to .env, then run `npx ts-node scripts/index-content.ts` to index content
- 🧠 Reflection: SSR guards (`typeof window === 'undefined'`, `ExecutionEnvironment.canUseDOM`) are critical for Docusaurus static build — any browser API must be guarded

## Evaluation notes (flywheel)

- Failure modes observed: `sessionStorage` / `window` in component top-level caused SSR crash; fixed with guards
- Graders run and results (PASS/FAIL): tsc (chatbot files) PASS; docusaurus build PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): Add streaming responses (OpenAI stream=true) for perceived performance improvement
