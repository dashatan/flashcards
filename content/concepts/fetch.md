---
id: fetch
title: fetch API
aliases: [fetch, Fetch API, window.fetch]
depth: foundation
related: [promise, abort-controller, cors, async-await]
---

## Definition

The **`fetch`** API performs network requests and returns a [Promise](concept:promise) resolving to a `Response` — modern replacement for `XMLHttpRequest`.

## Why it exists

Promise-based HTTP with streaming, headers, and integration with [async/await](concept:async-await) and cancellation via [AbortController](concept:abort-controller).

## How it works

```js
const res = await fetch("/api/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Ada" }),
});
const data = await res.json();
```

Does not reject on HTTP 4xx/5xx — check `res.ok`.

## Common confusion

No request timeout by default — combine with `AbortController` and `setTimeout`. Cookies and [CORS](concept:cors) follow browser rules.

## In practice

Default in browsers and many SSR data loaders; pair with [TanStack Query](concept:tanstack-query) for caching and retries.
