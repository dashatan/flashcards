---
id: higher-order-function
title: Higher-Order Function
aliases: [higher-order functions, HOF]
depth: intermediate
related: [closure, function-expression]
---

## Definition

A **higher-order function** takes another function as an argument, returns a function, or both — e.g. `map`, `filter`, middleware, React HOCs.

## Why it exists

Abstracts control flow and shared behavior (logging, validation, composition) without duplicating loops.

## How it works

Functions are values in JS. HOFs close over configuration and return specialized callbacks via [closures](concept:closure).

## Example

```js
function withLogging(fn) {
  return (...args) => {
    console.log("calling", fn.name);
    return fn(...args);
  };
}
```

## Common confusion

Not the same as [currying](concept:currying) — currying is one style of HOF. Every `array.map` callback usage is HOF usage.

## In practice

Array methods, Express middleware, Redux, custom hooks wrapping behavior.
