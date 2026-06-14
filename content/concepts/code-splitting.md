---
id: code-splitting
title: Code Splitting
aliases: [code splitting, dynamic import]
depth: intermediate
related: [lazy-loading, vite, webpack]
---

## Definition

**Code splitting** divides the app into separate JS chunks loaded on demand instead of one giant bundle.

## Why it exists

Faster initial load — users download only code for current route/feature.

## How it works

```js
const Admin = lazy(() => import("./Admin"));
```

Route-based splitting in frameworks; dynamic `import()` creates async chunks. Pair with [React Suspense](concept:react-suspense).

## In practice

Next.js automatic per-route splitting; manual splits for heavy editors/charts.
