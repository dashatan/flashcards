---
id: temporal-dead-zone
title: Temporal Dead Zone (TDZ)
aliases: [TDZ, temporal dead zone]
depth: foundation
related: [hoisting, block-scope, lexical-environment, reference-error]
usedInFlashcards: [1, 2, 3, 4, 5]
---

## Definition

The **temporal dead zone (TDZ)** is the period between entering a scope and executing the `let` or `const` declaration line, during which the binding exists but cannot be accessed.

## Why it exists

Before ES6, `var` was hoisted as [undefined](concept:undefined), which hid “use before declare” bugs. TDZ makes illegal access throw [ReferenceError](concept:reference-error), aligning runtime behavior with [block scope](concept:block-scope) and “declare before use.”

## How it works

1. Scope is created ([lexical environment](concept:lexical-environment)).
2. `let`/`const` [bindings](concept:binding) are registered via [hoisting](concept:hoisting) but marked uninitialized.
3. Any read of the name before the declaration line → ReferenceError (TDZ).
4. Declaration line runs → binding initialized → name is usable.

## Example

```js
console.log(x); // ReferenceError — TDZ
let x = 10;
console.log(x); // 10

// contrast with var:
console.log(y); // undefined (no TDZ for var)
var y = 10;
```

## Common confusion

TDZ applies to `let`, `const`, and `class` bindings. `typeof undeclaredVar` returns `"undefined"`, but `typeof` on a TDZ name still throws. Default parameters have their own scope — inner `let` with the same name as a parameter does not hit the outer TDZ oddly.

## In practice

Core to every `let` vs `var` interview answer. TDZ + per-iteration `let` in loops fixes classic closure bugs that `var` caused.
