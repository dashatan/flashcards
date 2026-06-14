---
id: macrotask
title: Macrotask
aliases: [macrotasks, task queue, macrotask queue]
depth: intermediate
related: [event-loop, microtask]
---

## Definition

A **macrotask** (task) is a queued callback from timers, I/O, UI events, or `setImmediate` (Node) — processed one at a time per [event loop](concept:event-loop) turn after [microtasks](concept:microtask) drain.

## Why it exists

Browser and Node schedule network, timers, and input as separate tasks so microtasks (Promises) can complete consistently first.

## How it works

`setTimeout`, `setInterval`, DOM event handlers, and message channel callbacks are macrotasks. One macrotask runs per loop iteration (then all microtasks again).

## Example

```js
setTimeout(() => console.log("timeout"), 0); // macrotask
setTimeout(() => console.log("timeout 2"), 0); // next loop iteration
```

## Common confusion

`setTimeout(fn, 0)` minimum delay is clamped (often ~4ms in nested timers). Background tabs throttle macrotasks heavily.

## In practice

Use macrotask timing for yielding to browser paint; use microtasks for Promise consistency. `requestIdleCallback` is yet another scheduling lane.
