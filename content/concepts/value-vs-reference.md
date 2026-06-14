---
id: value-vs-reference
title: Value vs Reference
aliases: [reference type, primitive vs object, by value, by reference]
depth: foundation
related: [binding]
---

## Definition

**Primitives** (number, string, boolean, null, undefined, symbol, bigint) are stored **by value** — assignments copy the value. **Objects** (including arrays and functions) are stored **by reference** — assignments copy the pointer to the same object in memory.

## Why it exists

This model keeps primitives cheap to copy and lets multiple bindings share one object without duplicating large structures.

## How it works

```js
let a = 1;
let b = a; // copies the number 1
b = 2;     // `a` is still 1

const obj1 = { x: 1 };
const obj2 = obj1; // both names point to the same object
obj2.x = 99;       // `obj1.x` is also 99
```

Equality: primitives compare by value (with coercion caveats for `==`). Objects compare by reference — two literals `{} === {}` is false.

## Common confusion

“JavaScript is always pass-by-reference” is wrong. **Arguments are passed by value** — for objects, the value passed is the reference (pointer). Reassigning a parameter inside a function does not change the outer variable.

## In practice

Explains shallow copy pitfalls, React state updates (always replace references for change detection), and why `const` objects can still be mutated.
