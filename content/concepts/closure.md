---
id: closure
title: Closure
aliases: [closures]
depth: intermediate
related: [lexical-scope, lexical-environment, higher-order-function]
---

## Definition

A **closure** is when a function retains access to variables from its outer [lexical scope](concept:lexical-scope) even after the outer function has finished executing.

## Why it exists

Closures enable private state, factories, callbacks that remember context, and most patterns in modern JS frameworks.

## How it works

When a function is created, it captures a reference to its surrounding [lexical environment](concept:lexical-environment). If the inner function outlives the outer (returned, passed as callback, stored), the environment stays alive so variables remain accessible.

## Example

```js
function createCounter() {
  let count = 0;
  return () => ++count;
}

const counter = createCounter();
counter(); // 1
counter(); // 2
```

## Common confusion

A closure is not “a function inside a function” alone — it matters when the inner function **escapes** and still references outer variables. Every function in JS has closure capability; not every nested function is used as a closure.

## In practice

Debounce/throttle, React hooks, event handlers, module pattern, memoization caches. Watch memory: closures holding large objects cause leaks if listeners are not removed.
