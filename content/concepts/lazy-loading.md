---
id: lazy-loading
title: Lazy Loading
aliases: [lazy load, lazy loading]
depth: intermediate
related: [code-splitting, intersection-observer]
---

## Definition

**Lazy loading** defers loading resources (images, JS, data) until they are needed — usually when near viewport.

## Why it exists

Reduce initial payload and improve [LCP](concept:lcp) for content below the fold.

## How it works

- Images: `loading="lazy"` or [Intersection Observer](concept:intersection-observer)
- JS: dynamic `import()` + [code splitting](concept:code-splitting)
- Routes: React `lazy()` + Suspense

## In practice

Default for images in content sites; route-based splitting in SPAs.
