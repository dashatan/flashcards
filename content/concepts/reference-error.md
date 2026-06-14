---
id: reference-error
title: ReferenceError
aliases: [ReferenceError]
depth: foundation
related: [temporal-dead-zone, identifier]
---

## Definition

**ReferenceError** is thrown when code references an [identifier](concept:identifier) that cannot be resolved — undeclared variable, or variable in the [temporal dead zone](concept:temporal-dead-zone).

## Why it exists

Fails fast instead of silently producing wrong results (unlike `var` before declare returning [undefined](concept:undefined)).

## How it works

```js
console.log(notDeclared); // ReferenceError

let x = 1;
{
  console.log(x); // TDZ ReferenceError
  let x = 2;
}
```

## Common confusion

`typeof undeclaredName` returns `"undefined"` without throwing. Accessing a TDZ binding throws even with `typeof` in some cases. Strict mode does not change ReferenceError for TDZ.

## In practice

Debugging: check spelling, import paths, block scope leaks, and hoisting order.
