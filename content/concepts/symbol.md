---
id: symbol
title: Symbol
aliases: [Symbols, Symbol.iterator, well-known symbols]
depth: intermediate
related: [prototype-chain, property-descriptors]
---

## Definition

**`Symbol`** is a primitive type for unique, immutable identifiers — often used as non-colliding property keys.

## Why it exists

Avoid name clashes on objects shared across code (metadata on DOM nodes, library internals).

## How it works

```js
const id = Symbol("id");
const obj = { [id]: 42 };

const sym = Symbol.iterator; // well-known symbol
```

Symbols are unique even with the same description string.

## Common confusion

`Symbol("a") === Symbol("a")` is false. Symbols are not enumerable in `for...in` / `Object.keys`.

## In practice

Iterators (`Symbol.iterator`), `Symbol.toStringTag`, React's `Symbol.for('react.element')` legacy, and private-like keys.
