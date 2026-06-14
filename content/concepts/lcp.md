---
id: lcp
title: LCP (Largest Contentful Paint)
aliases: [LCP, Largest Contentful Paint]
depth: intermediate
related: [core-web-vitals, lazy-loading]
---

## Definition

**LCP** measures when the largest visible content element (hero image, heading block) finishes rendering — loading performance.

## Why it exists

Users perceive page as loaded when main content appears.

## How it works

Improve via image optimization, preload hero, reduce TTFB ([SSR](concept:server-side-rendering)), eliminate render-blocking CSS/JS, CDN.

## Good threshold

≤ 2.5s at 75th percentile (field).

## In practice

Optimize above-the-fold assets first.
