---
id: zustand
title: Zustand
aliases: [Zustand state library]
depth: intermediate
related: [server-state-vs-client-state, react-context-api]
---

## Definition

**Zustand** is a minimal client state library for React — store with hooks, no Provider required, fine-grained subscriptions.

## Why it exists

Simpler than Redux for medium apps; avoids [Context](concept:react-context-api) re-render issues when store selectors are used.

## How it works

```js
const useStore = create(set => ({
  count: 0,
  inc: () => set(s => ({ count: s.count + 1 })),
}));
```

## In practice

UI state, modals, client cart — not duplicate [server state](concept:server-state-vs-client-state) (use TanStack Query).
