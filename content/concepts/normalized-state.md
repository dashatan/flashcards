---
id: normalized-state
title: Normalized State
aliases: [normalized state, state normalization]
depth: intermediate
related: [server-state-vs-client-state, map-data-structure]
---

## Definition

**Normalized state** stores entities by ID in flat maps (`users.byId`, `posts.byId`) instead of nested duplicates — like a client-side database.

## Why it exists

Single source of truth when same user appears in many lists; easier updates.

## How it works

```js
{ users: { byId: { "1": {...} }, allIds: ["1","2"] } }
```

Redux Toolkit encourages `createEntityAdapter`. Relates to [Map](concept:map-data-structure) mentally.

## In practice

Redux legacy pattern; TanStack Query normalizes in cache automatically for many cases.
