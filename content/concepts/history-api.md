---
id: history-api
title: History API
aliases: [History API, pushState, SPA routing]
depth: intermediate
related: [code-splitting]
---

## Definition

The **History API** (`pushState`, `replaceState`, `popstate`) changes the URL without full page reload.

## Why it exists

Client-side routing for SPAs (React Router, TanStack Router, Next.js client nav).

## How it works

```js
history.pushState({}, "", "/dashboard");
window.addEventListener("popstate", onBack);
```

Server must still handle deep links (SSR or static fallback).

## In practice

Foundation of modern frontend routing; pair with code-split route chunks.
