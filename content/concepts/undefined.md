---
id: undefined
title: undefined
aliases: [undefined value]
depth: foundation
related: [hoisting, var]
---

## Definition

**undefined** is a primitive value meaning “no value assigned” — the default for uninitialized `var` [hoisting](concept:hoisting), missing object properties, and functions with no `return`.

## Why it exists

Distinguishes “assigned nothing yet” from `null` (intentional empty) in older APIs.

## How it works

```js
var x;
console.log(x); // undefined

const obj = {};
console.log(obj.missing); // undefined

function noop() {}
console.log(noop()); // undefined
```

## Common confusion

`undefined` is falsy but `null == undefined` is true with loose equality. `typeof undefined` is `"undefined"` but `typeof undeclared` is also `"undefined"` (no throw).

## In practice

Default parameters treat only `undefined` as missing (`null` is passed through). Optional chaining returns `undefined` for nullish bases.
