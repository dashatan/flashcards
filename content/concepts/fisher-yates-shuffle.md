---
id: fisher-yates-shuffle
title: Fisher-Yates shuffle
aliases: [shuffle array, array shuffle, Fisher-Yates]
depth: intermediate
related: [array-map-filter-reduce, big-o-complexity]
---

## Definition

The **Fisher-Yates shuffle** randomly permutes an array in O(n) time with uniform distribution — the standard unbiased shuffle algorithm.

## Why it exists

Randomize decks, quiz order, and A/B splits without bias from naive `sort(() => Math.random() - 0.5)`.

## How it works

```js
for (let i = arr.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
```

Iterate backward, swap each index with random earlier index.

## Common confusion

`sort` with random comparator is not uniformly random and is slower.

## In practice

Flashcard shuffle modes, games, and sampling without replacement.
