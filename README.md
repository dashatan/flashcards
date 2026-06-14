# Knowledge Flashcards

Web + PWA study app for senior frontend interview Q&A with a linked **concept glossary**.

## Stack

- Vite + React + TypeScript
- TanStack Router (routes, search params, breadcrumbs)
- TanStack Query (content loading + prefetch)
- TanStack Virtual (concept index)
- TanStack Store (navigation stack + UI state)
- Dexie (IndexedDB progress)
- Serwist (PWA offline)
- Tailwind CSS v4

## Scripts

```bash
pnpm install
pnpm dev          # build content + start dev server
pnpm build        # production build with PWA
pnpm content:build
pnpm content:validate
pnpm typecheck
```

## Content

- `content/flashcards/cards.json` — 330 interview cards
- `content/concepts/*.md` — definition cards with `concept:` links (~143 concepts covering Parts 1–6)

## Study workflow

1. Study flashcards on `/study`
2. Tap highlighted concept terms in answers
3. Read full definition, drill into nested concepts
4. Use breadcrumbs or **Back to card** to return
5. Mark flashcards (known / learning / review) and concepts (understood / learning)

Progress is stored locally. Use **Export** / **Import** in the header to backup.
