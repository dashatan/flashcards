---
id: iife
title: IIFE
aliases: [IIFE, immediately invoked function expression]
depth: intermediate
related: [function-expression, closure, lexical-scope]
---

## Definition

An **IIFE** (Immediately Invoked Function Expression) is `(function () { ... })()` — runs a [function expression](concept:function-expression) once at definition time to create a private scope.

## Why it exists

Before ES modules and [block scope](concept:block-scope), IIFEs avoided global pollution and simulated private variables via [closures](concept:closure).

## How it works

The outer parentheses make `function` an expression; trailing `()` invokes it immediately, creating a fresh [lexical environment](concept:lexical-environment) that dies unless closures escape.

## Example

```js
const module = (function () {
  let secret = 0;
  return {
    inc() { secret++; },
    get() { return secret; },
  };
})();
```

## Common confusion

Modern code uses ES modules or block-scoped `let` instead. IIFEs still appear in build output and legacy bundles.

## In practice

Understand for interviews and reading minified code; prefer modules for new code.
