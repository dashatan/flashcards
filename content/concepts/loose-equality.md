---
id: loose-equality
title: Loose equality (==)
aliases: [==, abstract equality, double equals]
depth: foundation
related: [strict-equality, type-coercion, truthy-falsy, null-value]
---

## Definition

**Loose equality (`==`)** compares values with [type coercion](concept:type-coercion) — `null == undefined` is true, but `null == 0` is false.

## Why it exists

Legacy JavaScript behavior before `===` was widely adopted.

## How it works

```js
0 == false; // true
"" == 0; // true
null == undefined; // true
[] == false; // true
```

Coercion rules follow abstract equality algorithm — often surprising.

## Common confusion

Almost always prefer [strict equality](concept:strict-equality) (`===`). Exception: `value == null` checks both `null` and [undefined](concept:undefined).

## In practice

Lint rules (`eqeqeq`) ban `==` in modern codebases except intentional null checks.
