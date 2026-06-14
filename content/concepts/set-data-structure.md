---
id: set-data-structure
title: Set (Data Structure)
aliases: [ES6 Set, JavaScript Set, Set object]
depth: foundation
related: [big-o-complexity, map-data-structure]
---

## Definition

A **Set** is a collection of unique values (primitives or object references) with fast add/has/delete.

## Why it exists

Remove duplicates, membership tests, and tag sets without duplicate keys like objects.

## How it works

```js
const ids = new Set([1, 2, 2, 3]);
ids.has(2); // true
[...new Set(arr)]; // unique array
```

Average O(1) `has` vs O(n) for `array.includes`.

## Common confusion

Set compares objects by reference, not deep equality. `new Set([{}])` size 1; two `{}` are distinct entries.

## In practice

Deduping arrays, tracking visited nodes, permission sets, and optimizing lookups in hot paths.
