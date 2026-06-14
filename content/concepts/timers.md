---
id: timers
title: Timers (setTimeout / setInterval)
aliases: [setTimeout, setInterval, setImmediate, timer APIs]
depth: foundation
related: [event-loop, macrotask, debounce-throttle]
---

## Definition

**`setTimeout`** and **`setInterval`** schedule callbacks on the timer queue — [macrotasks](concept:macrotask) processed by the [event loop](concept:event-loop) after current sync code and [microtasks](concept:microtask).

## Why it exists

Defer work, poll, animations (legacy), and implement [debounce/throttle](concept:debounce-throttle).

## How it works

```js
setTimeout(() => console.log("later"), 0);
const id = setInterval(tick, 1000);
clearInterval(id);
```

`setTimeout(fn, 0)` does not run immediately — waits for the stack to clear.

## Common confusion

`setInterval` does not account for callback duration — can drift. `setTimeout(0)` still runs after [Promise](concept:promise) microtasks.

## In practice

Prefer `requestAnimationFrame` for visual updates; use `clearTimeout`/`clearInterval` to avoid leaks.
