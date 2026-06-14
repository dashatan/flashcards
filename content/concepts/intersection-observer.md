---
id: intersection-observer
title: Intersection Observer API
aliases: [Intersection Observer, IntersectionObserver]
depth: intermediate
related: [lazy-loading, debounce-throttle]
---

## Definition

**Intersection Observer** asynchronously reports when target elements enter or leave a viewport (or root) — without scroll event listeners.

## Why it exists

Efficient infinite scroll, lazy load, visibility analytics, sticky animations.

## How it works

```js
const obs = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) loadMore();
});
obs.observe(sentinel);
```

Runs off main scroll polling path; better than raw scroll handlers for visibility.

## In practice

Infinite lists, `loading="lazy"` alternative for custom behavior, ad viewability.
