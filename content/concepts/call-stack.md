---
id: call-stack
title: Call Stack
aliases: [call stack, stack frame]
depth: foundation
related: [execution-context, event-loop]
---

## Definition

The **call stack** is the LIFO structure that tracks which [execution contexts](concept:execution-context) are currently active — each function call pushes a frame; `return` pops it.

## Why it exists

JavaScript runs on a single main thread. The stack orders nested calls (`a` calls `b` calls `c`) and detects infinite recursion (`Maximum call stack size exceeded`).

## How it works

- Synchronous code runs until the stack is empty.
- The [event loop](concept:event-loop) schedules async callbacks only when the stack clears (then microtasks, then macrotasks).
- Long synchronous work blocks the stack → UI jank, delayed timers.

## Example

```js
function a() { b(); }
function b() { c(); }
function c() { console.log("deep"); }
a(); // stack: a → b → c → pop c → pop b → pop a
```

## Common confusion

Call stack is not where objects live long-term — that's the heap. Stack holds execution frames and primitive values in frames. Async functions still use the stack when their synchronous parts run; `await` suspends the async function without blocking the whole stack indefinitely.

## In practice

Stack traces in errors show the call stack. Performance work breaks up long tasks so the stack can clear and the browser can paint.
