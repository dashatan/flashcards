---
id: prototype-chain
title: Prototype Chain
aliases: [prototype chain, prototypal inheritance]
depth: intermediate
related: [value-vs-reference]
---

## Definition

The **prototype chain** is how objects inherit properties — each object has an internal link to another object (its prototype); lookup walks the chain until `null`.

## Why it exists

JavaScript uses prototypal inheritance instead of class-copying for shared methods.

## How it works

`Object.getPrototypeOf(obj)` returns the next object in the chain. Methods on `Array.prototype` are shared by all arrays. ES6 `class` is syntax over constructor + prototype.

## Example

```js
const arr = [1, 2];
arr.map((x) => x * 2); // `map` found on Array.prototype
```

## Common confusion

`__proto__` is legacy; use `Object.getPrototypeOf`. `prototype` property exists on functions; instances link via internal `[[Prototype]]`.

## In practice

`instanceof` checks prototype chain. Know for interviews on OOP in JS and performance of property lookup (usually negligible).
