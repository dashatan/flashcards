---
id: partial-application
title: Partial Application
aliases: [partial application, partial apply]
depth: intermediate
related: [currying, call-apply-bind, closure]
---

## Definition

**Partial application** fixes some arguments of a function to produce a new function with fewer parameters — unlike [currying](concept:currying), args can be fixed in one step.

## Why it exists

Reuse logic with preset configuration (`multiplyBy2`, API client with base URL).

## How it works

```js
function multiply(a, b) { return a * b; }
const double = multiply.bind(null, 2);
double(5); // 10
```

Or manual [closure](concept:closure): `const double = (n) => multiply(2, n)`.

## Common confusion

`bind` partial application sets `this` too — pass `null`/`undefined` for plain functions in modules.

## In practice

Event handlers with preset IDs, configurable validators, factory functions.
