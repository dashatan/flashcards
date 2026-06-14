---
id: function-expression
title: Function Expression
aliases: [function expression, function expressions]
depth: foundation
related: [function-declaration, arrow-function, closure]
---

## Definition

A **function expression** creates a function as a value — `const fn = function() {}` or `(function() {})()` — with hoisting rules of the variable it is assigned to, not full function hoisting.

## Why it exists

Functions are first-class values: pass to callbacks, return from factories, [IIFE](concept:iife) patterns.

## How it works

The function object is created when the assignment line runs. Named function expressions (`const fn = function helper() {}`) help stack traces; `helper` is not visible outside.

## Example

```js
const operations = {
  add: function (a, b) { return a + b; },
};

const doubler = function (n) { return n * 2; };
```

## Common confusion

Arrow functions are also expressions but lexically bind `this`. `function` expressions can be constructors (unless class fields change rules).

## In practice

[Higher-order functions](concept:higher-order-function), React class callbacks (legacy), and module patterns use expressions heavily.
