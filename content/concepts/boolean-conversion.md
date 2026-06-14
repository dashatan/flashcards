---
id: boolean-conversion
title: Boolean conversion
aliases: ["Boolean()", "double negation", "!!", ToBoolean]
depth: foundation
related: [truthy-falsy, type-coercion, loose-equality]
---

## Definition

**Boolean conversion** turns any value into `true` or `false` using [truthy/falsy](concept:truthy-falsy) rules — `Boolean(value)` or idiomatic `!!value`.

## Why it exists

Explicit boolean context for conditionals, flags, and API contracts without loose equality surprises.

## How it works

```js
!!""; // false
!!"hello"; // true
!!0; // false
!!{}; // true
```

Same result as `Boolean(value)` — double NOT negates twice.

## Common confusion

`!!` is not magic — it applies standard truthiness. Prefer explicit `Boolean(x)` in code reviews for readability.

## In practice

Guard clauses, React conditional render checks, and normalizing API inputs to booleans.
