---
id: generator
title: Generator functions
aliases: [generator, function*, yield]
depth: intermediate
related: [iterator, async-await, closure]
---

## Definition

**Generator functions** (`function*`) return iterators that pause with `yield` and resume on `next()` — implementing the [iterator](concept:iterator) protocol.

## Why it exists

Lazy sequences, custom iteration, and coroutine-style control flow before [async/await](concept:async-await).

## How it works

```js
function* ids() {
  let i = 0;
  while (true) yield ++i;
}
const gen = ids();
gen.next(); // { value: 1, done: false }
```

`yield*` delegates to another iterable.

## Common confusion

Generators are lazy — code after `yield` runs only on next `next()` call. Not the same as async functions.

## In practice

Iterator utilities, infinite streams, and redux-saga-style orchestration; less common in everyday UI code now.
