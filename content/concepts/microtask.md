---
id: microtask
title: Microtask
aliases: [microtasks, microtask queue]
depth: intermediate
related: [event-loop, macrotask, promise]
---

## Definition

A **microtask** is a short async job queued after the current script and before the next render/macrotask — Promise reactions, `queueMicrotask`, `MutationObserver`.

## Why it exists

Promises need predictable “run soon” ordering that beats timers and I/O, so `.then` runs before `setTimeout(0)`.

## How it works

When a Promise settles, handlers are queued as microtasks. After synchronous code finishes, the engine drains **all** microtasks in the queue before taking the next [macrotask](concept:macrotask) from the [event loop](concept:event-loop).

## Example

```js
Promise.resolve().then(() => console.log("micro"));
setTimeout(() => console.log("macro"), 0);
```

## Common confusion

Microtasks can starve macrotasks if you chain infinite `then` — the loop never reaches timers. Avoid recursive Promise chains without yielding.

## In practice

Explains `Promise.resolve().then` vs `setTimeout` ordering in interviews and React 18 batching interactions with microtasks.
