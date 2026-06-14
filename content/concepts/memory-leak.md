---
id: memory-leak
title: Memory Leak
aliases: [memory leaks, retained memory]
depth: intermediate
related: [closure, event-delegation]
---

## Definition

A **memory leak** is when memory stays allocated after it is no longer needed, often because references remain reachable.

## Why it exists

GC cannot free objects still referenced from listeners, closures, caches, or detached DOM nodes.

## How it works

Common causes: forgotten `removeEventListener`, intervals, closures holding large data, global caches without eviction, retained DOM in JS references.

## Example

```js
useEffect(() => {
  window.addEventListener("resize", onResize);
  return () => window.removeEventListener("resize", onResize);
}, []);
```

## Common confusion

Not every growth is a leak — growing cache by design needs bounds (WeakMap, TTL).

## In practice

Cleanup in `useEffect`, Chrome Memory heap snapshots, detach listeners, abort fetches with `AbortController`.
