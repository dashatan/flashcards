---
id: for-loops
title: for loops
aliases: [for...of, for...in, for-of, for-in, for loop, for loops]
depth: foundation
related: [block-scope, closure, iterator]
---

## Definition

**`for` loops** iterate with C-style `for (init; test; step)`, **`for...of`** over iterables, and **`for...in`** over enumerable property keys (usually avoid on arrays).

## Why it exists

Control flow for repeated work — the classic loop forms before array methods dominated collection processing.

## How it works

```js
for (let i = 0; i < arr.length; i++) { /* index */ }
for (const item of arr) { /* values */ }
for (const key in obj) { /* keys — includes inherited enumerable */ }
```

`let` in C-style loops creates per-iteration [bindings](concept:binding) in modern JS.

## Common confusion

`for...in` on arrays iterates indices as strings and may include inherited keys — prefer `for...of` or `.map`. `for...of` needs iterables ([arrays](concept:array-map-filter-reduce), strings, Maps).

## In practice

Prefer array methods for transforms; use `for...of` for async-unfriendly simple iteration; `for...in` for plain object keys with `hasOwnProperty` checks.
