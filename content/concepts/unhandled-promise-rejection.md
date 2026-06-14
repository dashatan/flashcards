---
id: unhandled-promise-rejection
title: Unhandled Promise Rejection
aliases: [unhandled rejection, unhandled promise rejection]
depth: intermediate
related: [promise, async-await, try-catch-finally]
---

## Definition

An **unhandled promise rejection** occurs when a [Promise](concept:promise) rejects and no `.catch()` or `await` in try/catch handles it.

## Why it exists

Prevents silent async failures in production.

## How it works

```js
Promise.reject("oops"); // unhandled in Node may crash process
```

Browsers: `window.addEventListener("unhandledrejection")`. Always end chains with `.catch()` or try/catch around `await`.

## Common confusion

Forgotten `await` still runs the async function but errors surface as unhandled rejections, not sync throws.

## In practice

Global handlers for logging (Sentry); never empty async event handlers without error handling.
