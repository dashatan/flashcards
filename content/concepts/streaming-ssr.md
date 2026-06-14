---
id: streaming-ssr
title: Streaming SSR
aliases: [streaming server rendering, progressive HTML]
depth: advanced
related: [server-side-rendering, react-suspense]
---

## Definition

**Streaming SSR** sends HTML in chunks as server components resolve, so the browser can paint early content before slow parts finish.

## Why it exists

Reduce time to first byte of meaningful content vs waiting for entire page render.

## How it works

Server flushes HTML at [Suspense](concept:react-suspense) boundaries. Slow data streams in later; client may [hydrate](concept:hydration) progressively ([selective hydration](concept:selective-hydration)).

## Common confusion

Requires server and framework support (React 18+, Next.js App Router).

## In practice

Improve LCP for pages with mixed fast/slow sections.
