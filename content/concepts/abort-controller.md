---
id: abort-controller
title: AbortController
aliases: [AbortController, AbortSignal, abort signal]
depth: intermediate
related: [fetch, promise, async-await]
---

## Definition

**`AbortController`** provides an **`AbortSignal`** to cancel async operations like `fetch`, event listeners, and some APIs cooperatively.

## Why it exists

Cancel in-flight requests when users navigate away, debounce searches, or abort stale responses.

## How it works

```js
const controller = new AbortController();
fetch("/api", { signal: controller.signal });
controller.abort(); // rejects fetch with AbortError
```

Pass `signal` to supported APIs; listen with `signal.addEventListener("abort", ...)`.

## Common confusion

Abort is cooperative — code must respect the signal. Aborted [Promises](concept:promise) reject; handle errors explicitly.

## In practice

Standard for cancellable `fetch` in React effects cleanup and [TanStack Query](concept:tanstack-query) cancellation.
