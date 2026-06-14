---
id: truthy-falsy
title: Truthy and Falsy Values
aliases: [truthy, falsy, boolean coercion]
depth: foundation
related: [type-coercion, undefined]
---

## Definition

A value is **falsy** if it coerces to `false` in a boolean context; **truthy** if it coerces to `true`.

## Why it exists

`if`, `&&`, `||`, and `!` need predictable boolean interpretation.

## How it works

**Falsy only:** `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.

Everything else is truthy — including `[]`, `{}`, `"0"`, `"false"`.

## Example

```js
if ("0") console.log("truthy");
!![]; // true
Boolean(""); // false
```

## Common confusion

Truthy does not mean “valid” or “non-empty” — empty arrays/objects are truthy.

## In practice

Use explicit checks for arrays (`length`), objects (`keys`), and numbers instead of relying on truthiness alone.
