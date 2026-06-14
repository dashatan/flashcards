---
id: null-value
title: "null"
aliases: ["null", "null value"]
depth: foundation
related: [undefined, truthy-falsy, nullish-coalescing, strict-equality]
---

## Definition

**`null`** is a primitive value representing intentional absence of any object value — distinct from [undefined](concept:undefined).

## Why it exists

Explicit signal: “this variable intentionally has no object,” e.g. `document.getElementById` returning null when not found.

## How it works

```js
typeof null === "object"; // historical bug
null == undefined; // true (loose)
null === undefined; // false (strict)
```

Falsy in boolean context ([truthy/falsy](concept:truthy-falsy)).

## Common confusion

Use [strict equality](concept:strict-equality) (`=== null`) instead of `== null` unless you intentionally check both null and undefined.

## In practice

Prefer `undefined` for missing parameters; use `null` for explicit empty states in APIs and JSON.
