---
id: arrow-function
title: Arrow Function
aliases: [arrow functions, arrow function]
depth: intermediate
related: [function-expression, this-binding, lexical-scope]
---

## Definition

An **arrow function** is `() => {}` — a concise [function expression](concept:function-expression) with lexical `this`, no `arguments` object, and no `new` capability.

## Why it exists

Avoids manual `this` binding in callbacks and keeps `this` from the enclosing [lexical scope](concept:lexical-scope).

## How it works

- `this` is captured from surrounding scope (not dynamic).
- No own `arguments` — use rest parameters `...args`.
- Cannot be used as constructor → `new` throws [TypeError](concept:type-error).
- Implicit return with expression body: `x => x * 2`.

## Example

```js
const timer = {
  seconds: 0,
  start() {
    setInterval(() => {
      this.seconds++; // `this` is timer from lexical scope
    }, 1000);
  },
};
```

## Common confusion

Not for object methods that need dynamic `this`. Not for `prototype` methods if you rely on `this` at call time. Good for React functional components and array callbacks.

## In practice

Default choice for callbacks in modern React. Use regular functions when you need `new`, `arguments`, or dynamic `this`.
