---
id: shallow-copy
title: Shallow Copy
aliases: [shallow copy]
depth: foundation
related: [deep-copy, value-vs-reference]
---

## Definition

A **shallow copy** duplicates the top level of an object or array; nested objects still share references with the original.

## Why it exists

Fast duplication for flat structures and immutable update patterns (`{ ...obj, field: newValue }`).

## How it works

```js
const copy = { ...original };
const arrCopy = [...arr];
Object.assign({}, original);
```

Nested `user.address` in copy and original point to the same object.

## Common confusion

Shallow copy is not [deep copy](concept:deep-copy). React state updates need new top-level references; nested mutation can still cause bugs.

## In practice

Spread for flat state updates; use deep clone when nesting matters.
