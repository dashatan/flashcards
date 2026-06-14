---
id: try-catch-finally
title: try/catch/finally
aliases: [try catch finally, try-catch, try, catch, finally, try...catch...finally]
depth: foundation
related: [type-error, reference-error, promise]
---

## Definition

**try/catch/finally** runs code in `try`, handles thrown errors in `catch`, and always runs cleanup in `finally`.

## Why it exists

Structured error handling without crashing the whole script.

## How it works

```js
try {
  await risky();
} catch (e) {
  if (e instanceof TypeError) { /* ... */ }
} finally {
  cleanup();
}
```

Only catches synchronous throws in `try` and awaited errors inside async `try`.

## Common confusion

Event handler throws, un-awaited [Promise](concept:promise) rejections, and parse-time errors are not caught here.

## In practice

Wrap awaited async code; use `.catch()` on fire-and-forget promises; global handlers for monitoring.
