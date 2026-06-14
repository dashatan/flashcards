---
id: function-scope
title: Function Scope
aliases: [function-scoped]
depth: foundation
related: [block-scope, hoisting, var]
---

## Definition

**Function scope** means a binding is visible throughout the entire function body where it was declared, not only inside the nested block where the declaration appears.

## Why it exists

Early JavaScript only had `var` and function-level scoping. This was simpler for engines in the 1990s but causes leakage from blocks into the whole function.

## How it works

`var` declarations are function-scoped (or global if outside any function). A `var` inside an `if` block is hoisted to the top of the enclosing function and shared across the whole function.

## Example

```js
function demo() {
  if (true) {
    var count = 1;
  }
  console.log(count); // 1 — `count` is function-scoped, not block-scoped
}
```

## Common confusion

Function scope is not the same as [block scope](concept:block-scope). `let`/`const` in a function still use block scope inside that function.

## In practice

Legacy code and interview questions about `var` in loops rely on function scope behavior. Modern code avoids `var` unless maintaining legacy bundles.
