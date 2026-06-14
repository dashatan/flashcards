---
id: array-sort
title: Array.sort
aliases: [sort, Array.sort, comparator]
depth: foundation
related: [array-map-filter-reduce, big-o-complexity]
---

## Definition

**`Array.sort`** sorts elements in place using UTF-16 string conversion by default, or a custom comparator for numeric/date ordering.

## Why it exists

Order collections for display, binary search prep, and deterministic output.

## How it works

```js
[10, 2, 1].sort(); // [1, 10, 2] — string sort!
[10, 2, 1].sort((a, b) => a - b); // [1, 2, 10]
```

Mutates the original array — copy first if immutability matters: `[...arr].sort()`.

## Common confusion

Default sort is lexicographic, not numeric. Comparator must return negative/zero/positive, not boolean.

## In practice

Always pass comparator for numbers; stable sort in modern engines preserves equal element order.
