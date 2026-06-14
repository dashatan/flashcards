---
id: mutation-observer
title: MutationObserver
aliases: [MutationObserver API]
depth: intermediate
related: [dom, intersection-observer, event-loop]
---

## Definition

**`MutationObserver`** watches [DOM](concept:dom) trees for changes (child list, attributes, character data) and delivers notifications asynchronously.

## Why it exists

React to DOM mutations without polling — widgets, editors, legacy integration, and devtools-style instrumentation.

## How it works

```js
const observer = new MutationObserver(mutations => {
  for (const m of mutations) console.log(m.type, m.target);
});
observer.observe(root, { childList: true, subtree: true });
observer.disconnect();
```

Callbacks run as [microtasks](concept:microtask) after DOM updates in the same turn.

## Common confusion

Not a replacement for [Intersection Observer](concept:intersection-observer) — different use cases. Observing large subtrees can be expensive.

## In practice

Polyfills, contenteditable sync, and detecting third-party DOM injections — use sparingly for performance.
