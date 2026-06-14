---
id: type-error
title: TypeError
aliases: [TypeError]
depth: foundation
related: [strict-mode, binding]
---

## Definition

**TypeError** is thrown when an operation is applied to a value of the wrong type — e.g. reassigning a `const` [binding](concept:binding), calling `null` as a function, or using an arrow function with `new`.

## Why it exists

Protects against invalid operations that would corrupt runtime state.

## How it works

```js
const n = 1;
n = 2; // TypeError in strict mode / modules

const fn = () => {};
new fn(); // TypeError — arrow functions are not constructors
```

## Common confusion

`TypeError` vs [ReferenceError](concept:reference-error): Reference = name resolution failed; Type = name resolved but operation invalid.

## In practice

Common in interview answers about `const`, `new` on arrows, and optional chaining short-circuit (no TypeError on nullish base).
