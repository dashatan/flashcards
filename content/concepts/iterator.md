---
id: iterator
title: Iterator protocol
aliases: [iterable, Symbol.iterator, iteration]
depth: intermediate
related: [symbol, for-loops, generator]
---

## Definition

An **iterable** exposes `Symbol.iterator` returning an **iterator** with a `next()` method yielding `{ value, done }` — powers `for...of` and spread.

## Why it exists

Uniform iteration over arrays, strings, Maps, Sets, and custom collections.

## How it works

```js
const iter = [1, 2][Symbol.iterator]();
iter.next(); // { value: 1, done: false }

function* range(n) {
  for (let i = 0; i < n; i++) yield i;
}
```

Generators implement the iterator protocol automatically.

## Common confusion

Iterables are not iterators — `for...of` calls `Symbol.iterator` to get a fresh iterator. Plain objects are not iterable by default.

## In practice

Custom data structures, lazy sequences, and async iterators (`for await...of`).
