---
id: array-some-every
title: Array.some and Array.every
aliases: [Array.some, Array.every, some, every]
depth: foundation
related: [array-map-filter-reduce, higher-order-function]
---

## Definition

**`some`** returns true if at least one element passes a predicate; **`every`** returns true only if all elements pass.

## Why it exists

Readable existence/universal checks without manual loops.

## How it works

```js
[1, 2, 3].some(n => n > 2); // true
[1, 2, 3].every(n => n > 0); // true
```

Short-circuit: `some` stops at first match; `every` stops at first failure.

## Common confusion

Empty array: `[].some(fn)` → `false`; `[].every(fn)` → `true` (vacuous truth).

## In practice

Validation, permissions checks, and feature flags on collections before expensive work.
