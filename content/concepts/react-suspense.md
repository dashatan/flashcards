---
id: react-suspense
title: React Suspense
aliases: [Suspense, Suspense boundaries]
depth: intermediate
related: [concurrent-rendering, streaming-ssr, tanstack-query]
---

## Definition

**Suspense** is a React component that shows **fallback** UI while children are loading (lazy components, async data in supported setups).

## Why it exists

Declarative loading states and coordination with streaming/concurrent rendering.

## How it works

```jsx
<Suspense fallback={<Spinner />}>
  <SlowComponent />
</Suspense>
```

Frameworks integrate data loaders that “throw” promises during render. Multiple boundaries allow granular fallbacks.

## Common confusion

Data fetching Suspense needs framework support (Next.js, Relay, TanStack Query suspense mode) — not automatic for raw `fetch` in client components.

## In practice

Route-level loading UI, code-split pages, streaming SSR chunk boundaries.
