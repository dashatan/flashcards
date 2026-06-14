---
id: error-boundary
title: Error Boundary
aliases: [error boundaries, React error boundary]
depth: intermediate
related: [try-catch-finally, react-re-render]
---

## Definition

An **error boundary** is a React component that catches JavaScript errors in its **child render tree** and shows fallback UI instead of crashing the whole app.

## Why it exists

Isolate failures (broken widget, bad API shape) so the rest of the app stays usable.

## How it works

Class: `getDerivedStateFromError` + `componentDidCatch`. Libraries: `react-error-boundary`.

Does **not** catch: event handler errors, async code, SSR errors alone, errors in the boundary itself.

## Common confusion

Not a replacement for try/catch in handlers — use both. Log to Sentry in `onError`.

## In practice

Wrap route segments, risky third-party widgets, and data-heavy panels.
