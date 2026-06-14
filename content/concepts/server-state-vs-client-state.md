---
id: server-state-vs-client-state
title: Server State vs Client State
aliases: [server state, client state, UI state]
depth: intermediate
related: [tanstack-query, use-state]
---

## Definition

**Server state** lives on the backend (users, posts) — async, shared, stale. **Client state** is UI-only (modal open, tab, draft text) — local and immediate.

## Why it exists

Different lifecycles and tools: don’t duplicate API data in Redux if a cache library handles it.

## How it works

Server: TanStack Query / SWR — fetch, cache, revalidate. Client: [useState](concept:use-state), Zustand, URL state.

## Common confusion

“Global state” is not all one bucket — auth profile (server) vs sidebar collapsed (client).

## In practice

Colocate server state in query hooks; keep global client state minimal.
