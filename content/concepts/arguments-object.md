---
id: arguments-object
title: arguments Object
aliases: [arguments, arguments object]
depth: intermediate
related: [arrow-function, function-expression]
---

## Definition

The **arguments object** is an array-like object available inside non-arrow functions listing all passed parameters — legacy before rest parameters.

## Why it exists

Pre-ES6 way to handle variadic functions without naming every parameter.

## How it works

```js
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
```

Modern replacement: `function sum(...nums) { return nums.reduce(...) }`.

[Arrow functions](concept:arrow-function) do not have `arguments` — they inherit nothing; use rest params.

## Common confusion

`arguments` is not a real array — use `Array.from(arguments)` or spread. Arrow functions cannot access outer `arguments` of non-arrow parent unless that parent is non-arrow.

## In practice

Read legacy code; write modern code with rest parameters.
