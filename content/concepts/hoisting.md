---
id: hoisting
title: Hoisting
aliases: [hoisted]
depth: foundation
related: [temporal-dead-zone, function-declaration, function-expression, var]
---

## Definition

**Hoisting** is JavaScript's behavior of registering declarations during the compile phase before line-by-line execution runs in an [execution context](concept:execution-context).

## Why it exists

The engine needs to know what names exist in a scope before it executes statements that might reference them.

## How it works

- `function` **declarations** are fully hoisted — name and body — so you can call them before their line in the file.
- `var` bindings are hoisted and initialized to [undefined](concept:undefined).
- `let` / `const` bindings are hoisted but stay in the [temporal dead zone](concept:temporal-dead-zone) until their declaration line runs.
- `function` **expressions** assigned to `const`/`let` follow variable hoisting rules, not full function hoisting.

## Example

```js
console.log(typeof myFn); // "function"
myFn();

function myFn() {}

console.log(typeof myVar); // "undefined"
var myVar = 1;
```

## Common confusion

Hoisting does not move lines of code in the source file — it is an engine registration phase. Only declarations are hoisted, not initializations (`var x = 1` hoists `x`, but `1` is assigned at the line).

## In practice

Explains interview puzzles, why `let` before declare throws, and why function declarations in blocks behave differently in sloppy vs [strict mode](concept:strict-mode).
