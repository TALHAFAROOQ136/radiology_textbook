# Implementation Plan: Radiology Text Book - RAG Chatbot with Text Selection Query

**Branch**: `001-rag-chatbot` | **Date**: 2026-01-17 | **Spec**: [link to spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-rag-chatbot/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Implementation of an AI-powered RAG (Retrieval-Augmented Generation) chatbot for the Radiology Text Book platform with text selection query functionality. The system will allow medical students to ask natural language questions about radiology content and receive accurate, contextually relevant answers based on the textbook material. The text selection feature enables users to highlight specific content and ask questions about it for contextual learning support. The solution leverages OpenAI for language processing and Qdrant for vector similarity search.

## Technical Context

**Language/Version**: Python 3.11 for RAG services, TypeScript/JavaScript (Node.js 18+) for web integration
**Primary Dependencies**: OpenAI SDK, Qdrant client, Langchain, FastAPI, React, Docusaurus
**Storage**: Qdrant Cloud for vector embeddings, Neon Serverless Postgres for conversation history and metadata
**Testing**: pytest for backend services, Jest for frontend/unit tests, Playwright for E2E tests
**Target Platform**: Web application (cross-platform compatible)
**Project Type**: Web application with backend microservices for AI processing
**Performance Goals**: <3 second response time for queries, 95% accuracy in content retrieval, support 1000+ concurrent users
**Constraints**: <500ms API response time for 95% of queries, medical accuracy requirements, content grounding verification
**Scale/Scope**: 10k+ medical students/users, 56 chapters of content, multi-turn conversations support

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Based on the project constitution and completed design work, the following gates have been satisfied:
- ✓ Library-first: RAG services designed as reusable components
- ✓ CLI Interface: Content indexing and management will have CLI tools
- ✓ Test-First: All AI functionality will have comprehensive test coverage
- ✓ Integration Testing: Critical paths like text selection and content retrieval need integration tests
- ✓ Observability: Logging and monitoring for AI responses and user interactions

## Project Structure

### Documentation (this feature)

```text
specs/001-rag-chatbot/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
backend/
├── src/
│   ├── models/
│   │   ├── chatbot.ts
│   │   ├── conversation.ts
│   │   ├── text-selection.ts
│   │   └── embeddings.ts
│   ├── services/
│   │   ├── rag-service.ts
│   │   ├── openai-service.ts
│   │   ├── qdrant-service.ts
│   │   ├── content-service.ts
│   │   └── conversation-service.ts
│   ├── api/
│   │   ├── chat/
│   │   │   ├── query-endpoint.ts
│   │   │   ├── selection-endpoint.ts
│   │   │   └── conversation-endpoint.ts
│   │   └── embeddings/
│   │       ├── index-endpoint.ts
│   │       └── search-endpoint.ts
│   └── utils/
│       ├── text-processor.ts
│       ├── response-formatter.ts
│       └── citation-generator.ts
├── tests/
│   ├── unit/
│   ├── integration/
│   └── contract/
├── scripts/
│   ├── content-indexer.py
│   ├── vector-embedder.py
│   └── content-processor.py
└── config/
    ├── openai-config.ts
    ├── qdrant-config.ts
    └── rag-config.ts

frontend/
├── src/
│   ├── components/
│   │   ├── chat/
│   │   │   ├── ChatInterface.jsx
│   │   │   ├── MessageBubble.jsx
│   │   │   ├── TextSelectionHandler.jsx
│   │   │   └── SourceCitation.jsx
│   │   ├── ui/
│   │   │   ├── LoadingSpinner.jsx
│   │   │   └── ErrorBoundary.jsx
│   │   └── providers/
│   │       └── ChatContext.jsx
│   ├── hooks/
│   │   ├── useChat.js
│   │   ├── useTextSelection.js
│   │   └── useConversation.js
│   ├── services/
│   │   ├── chat-api.js
│   │   └── text-selection-api.js
│   └── utils/
│       ├── text-utils.js
│       └── response-parser.js
├── docusaurus.config.js
├── babel.config.js
└── sidebars.js

package.json
tsconfig.json
README.md
```

**Structure Decision**: Backend microservices architecture with dedicated RAG services for handling AI queries and text selection functionality, integrated with the Docusaurus-based frontend through REST APIs. The system separates AI processing from content delivery for optimal performance and maintainability.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| AI Service Integration | Essential for RAG functionality to provide interactive learning experience | Building custom NLP from scratch would be prohibitively complex and time-consuming |
| Vector Database | Required for efficient similarity search in large content corpus | Traditional keyword search would not provide contextual relevance needed for medical content |
