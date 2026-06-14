---
id: var
title: var
aliases: []
depth: foundation
related: [function-scope, hoisting, undefined, temporal-dead-zone]
---

## Definition

**var** is the legacy keyword for declaring a [function-scoped](concept:function-scope) binding with [hoisting](concept:hoisting) initialized to [undefined](concept:undefined) — no [temporal dead zone](concept:temporal-dead-zone).

## Why it exists

Original JS variable declaration before `let`/`const` (ES6). Still appears in legacy code and generated output.

## How it works

- Hoisted to top of function/global with value `undefined`.
- Allows redeclaration in same scope.
- Loop variable is shared across iterations (one binding).

## Example

```js
console.log(count); // undefined
var count = 1;

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // 3, 3, 3
}
```

## Common confusion

`var` at top level creates global property on `window` in browsers; `let`/`const` do not. Prefer `const`/`let` in all modern code.

## In practice

Interview contrast with `let`/`const` is about scope, TDZ, and loop closure behavior.
