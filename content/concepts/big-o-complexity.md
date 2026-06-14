---
id: big-o-complexity
title: Big O Complexity
aliases: [Big O, time complexity, algorithmic complexity]
depth: foundation
related: [set-data-structure]
---

## Definition

**Big O** describes how runtime or memory grows with input size **n** — upper bound, ignoring constants.

## Why it exists

Compare approaches at scale (millions of array items, large DOM lists).

## How it works

Common orders: O(1) constant, O(log n) binary search, O(n) single loop, O(n log n) efficient sort, O(n²) nested loops.

Chaining `filter().map().reduce()` on n items is O(n) time but O(n) extra space per intermediate array.

## Example

`arr.includes(x)` → O(n). [Set](concept:set-data-structure) lookup → O(1) average after build O(n).

## Common confusion

Big O is asymptotic — constants matter for small n. “O(3n) is still O(n).”

## In practice

Frontend: choose Set/Map for frequent lookups; combine array passes; virtualize long lists.
