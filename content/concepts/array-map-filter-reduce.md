---
id: array-map-filter-reduce
title: map, filter, and reduce
aliases: [Array.map, Array.filter, Array.reduce]
depth: foundation
related: [higher-order-function, big-o-complexity]
---

## Definition

**map**, **filter**, and **reduce** are [higher-order](concept:higher-order-function) array methods for transforming, selecting, and aggregating data.

## Why it exists

Declarative data pipelines instead of manual `for` loops.

## How it works

- **map**: each element → new value; same length array.
- **filter**: keep elements where predicate is true.
- **reduce**: accumulate to one value (or any type) with an accumulator.

```js
items.filter(i => i.active).map(i => i.price).reduce((s, p) => s + p, 0);
```

## Common confusion

Missing `return` in `map` callback → `undefined` entries. Chaining three passes is O(n) but allocates intermediate arrays.

## In practice

Default for collection transforms; combine into one loop for huge datasets.
