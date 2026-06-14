---
id: web-workers
title: Web Workers
aliases: [Web Worker, web workers]
depth: intermediate
related: [event-loop, inp]
---

## Definition

**Web Workers** run JavaScript on background threads with no DOM access — message-passing only.

## Why it exists

CPU-heavy work (parse large JSON, crypto, image processing) without blocking the main thread and hurting [INP](concept:inp).

## How it works

```js
const worker = new Worker("worker.js");
worker.postMessage(data);
worker.onmessage = e => console.log(e.data);
```

Separate [event loop](concept:event-loop) per worker.

## In practice

Offload parsing; consider Worker pools; not for tiny tasks (overhead).
