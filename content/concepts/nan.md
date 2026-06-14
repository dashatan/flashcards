---
id: nan
title: NaN
aliases: [Not a Number, NaN value]
depth: foundation
related: [type-coercion, type-error]
---

## Definition

**NaN** (“Not a Number”) is a numeric value representing an invalid or undefined mathematical result.

## Why it exists

Distinguishes failed numeric operations from valid numbers without throwing on every bad parse.

## How it works

- Produced by invalid math: `0 / 0`, `Number("foo")`, `Math.sqrt(-1)`.
- **NaN is not equal to itself:** `NaN === NaN` → false.
- Use `Number.isNaN(value)` — not global `isNaN()` which coerces first.

## Example

```js
Number.isNaN(NaN);     // true
Number.isNaN("hello"); // false
isNaN("hello");        // true (coerces)
```

## Common confusion

`typeof NaN` is `"number"`. `NaN` is falsy but not equal to anything including itself.

## In practice

Validate parsed numbers with `Number.isFinite` or explicit checks before calculations.
