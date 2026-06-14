---
id: object-create
title: Object.create
aliases: [Object.create(null)]
depth: intermediate
related: [prototype-chain, object-assign, null-value]
---

## Definition

**`Object.create(proto)`** creates a new object with the specified object as its `[[Prototype]]` — or `null` for a dictionary with no inherited properties.

## Why it exists

Explicit prototype wiring without constructors; pure map objects without `Object.prototype` pollution.

## How it works

```js
const dict = Object.create(null);
dict.count = 1; // no inherited toString/hasOwnProperty

const child = Object.create(parent);
```

Alternative to `new Constructor()` when you only need prototype linkage.

## Common confusion

`Object.create({})` still inherits from `Object.prototype` via the empty object proto. Use `null` for true dictionaries.

## In practice

Safe maps, prototype delegation patterns, and polyfilling `Object.create` in older environments.
