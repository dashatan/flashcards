---
id: type-coercion
title: Type Coercion
aliases: [type conversion, implicit conversion, explicit conversion]
depth: intermediate
related: [strict-equality, truthy-falsy, nan]
---

## Definition

**Type coercion** is JavaScript automatically or manually converting a value from one type to another (string, number, boolean, object) during operations.

## Why it exists

Loose operators and APIs expect flexible inputs; coercion lets `"5"` participate in math after conversion.

## How it works

- **Implicit**: `==`, `+`, `if (value)`, template literals call abstract operations `ToNumber`, `ToString`, `ToBoolean`.
- **Explicit**: `Number(x)`, `String(x)`, `Boolean(x)`.
- `+` prefers string if either operand is a string; otherwise numeric addition.

## Example

```js
"5" + 1;    // "51" (string concat)
"5" - 1;    // 4 (numbers)
Boolean(""); // false
```

## Common confusion

Coercion is not the same as [strict equality](concept:strict-equality). `[]` is [truthy](concept:truthy-falsy) but `Number([])` is `0`.

## In practice

Use `===` and explicit conversions in production code. Coercion puzzles are common in interviews (`[] + {}`).
