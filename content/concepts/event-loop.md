---
id: event-loop
title: Event Loop
aliases: [event loop, javascript event loop]
depth: intermediate
related: [call-stack, microtask, macrotask]
---

## Definition

The **event loop** is the mechanism that lets JavaScript handle asynchronous work on a single thread by cycling: run [call stack](concept:call-stack) → drain [microtasks](concept:microtask) → take one [macrotask](concept:macrotask) → repeat.

## Why it exists

Without threads for every I/O operation, JS still needs timers, network, and UI events. The event loop interleaves async callbacks with synchronous code.

## How it works

1. Execute synchronous code on the stack until empty.
2. Run all pending microtasks (Promise reactions, `queueMicrotask`).
3. Run one macrotask (`setTimeout`, I/O callback, user event).
4. Go to step 2.

## Example

```js
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
// 1, 4, 3, 2
```

## Common confusion

`async/await` is still Promise-based — `await` schedules continuation as microtasks. `requestAnimationFrame` is neither micro nor macro in the simple model; it runs before paint.

## In practice

Core interview topic. Explains UI freezing, Promise ordering puzzles, and why `setTimeout(fn, 0)` is not “immediate.”
