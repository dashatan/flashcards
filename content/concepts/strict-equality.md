---
id: strict-equality
title: Strict Equality (===)
aliases: [strict equality, triple equals]
depth: foundation
related: [type-coercion, value-vs-reference]
---

## Definition

**Strict equality** (`===`) compares two values without [type coercion](concept:type-coercion) — types and values must match.

## Why it exists

Avoids surprising `==` results like `0 == false` being true.

## How it works

- Primitives compared by value (except `NaN` — `NaN === NaN` is false).
- Objects compared by [reference](concept:value-vs-reference), not deep structure.

## Example

```js
5 === "5";      // false
null == undefined; // true with ==
null === undefined; // false
{} === {};      // false (different references)
```

## Common confusion

Exception: `value == null` checks both `null` and [undefined](concept:undefined) — intentional shorthand some teams allow.

## In practice

Default to `===` everywhere except documented `== null` pattern.
