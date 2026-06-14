---
id: source-map
title: Source Map
aliases: [source maps, sourcemap]
depth: intermediate
related: []
---

## Definition

A **source map** maps minified/bundled code positions back to original source files for debugging.

## Why it exists

Production bundles are transformed; stack traces without maps point to unreadable line 1 of `chunk.js`.

## How it works

Bundler emits `.map` files. DevTools and Sentry use them to show real file names and TypeScript lines.

## Common confusion

`hidden-source-map` uploads to Sentry only — maps not served to users. Never expose sensitive source in public maps without intent.

## In practice

Enable in production for error tracking; use fast `eval` maps in dev via Vite.
