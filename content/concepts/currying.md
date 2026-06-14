---
id: currying
title: Currying
aliases: [curry, curried function]
depth: intermediate
related: [partial-application, higher-order-function, closure]
---

## Definition

**Currying** transforms a function of multiple arguments into a chain of unary functions: `f(a, b, c)` → `f(a)(b)(c)`.

## Why it exists

Enables reusable specialized functions and point-free style in functional libraries.

## How it works

Each call takes one argument and returns a new function closing over previous args via [closure](concept:closure).

## Example

```js
const add = (a) => (b) => a + b;
const add5 = add(5);
add5(3); // 8
```

## Common confusion

[Partial application](concept:partial-application) fixes some args at once — not necessarily one-at-a-time. Lodash `curry` vs manual `bind` differ in arity handling.

## In practice

Rare in everyday React code; common in FP utilities and interview “implement curry” questions.
