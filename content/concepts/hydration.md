---
id: hydration
title: Hydration
aliases: [React hydration, hydrate]
depth: intermediate
related: [server-side-rendering, react-server-components]
---

## Definition

**Hydration** is attaching client-side React event listeners and state to HTML already rendered on the server.

## Why it exists

SSR gives fast HTML; hydration makes it interactive without re-rendering entire DOM from scratch.

## How it works

Client JS matches server HTML to component tree. **Mismatch** errors if server and client output differ (random ids, dates, browser-only APIs during SSR).

## Common confusion

[RSC](concept:react-server-components) server components skip hydration — only Client Components hydrate.

## In practice

Use `useId`, suppressHydrationWarning sparingly, avoid `window` in initial render on server.
