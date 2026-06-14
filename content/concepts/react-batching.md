---
id: react-batching
title: React State Batching
aliases: [batching, automatic batching, React 18 batching]
depth: intermediate
related: [react-re-render, use-state]
---

## Definition

**Batching** groups multiple state updates into a single [re-render](concept:react-re-render) for consistency and performance.

## Why it exists

Avoids partial UI states and redundant renders when several `setState` calls happen in one logical event.

## How it works

React 18 **automatic batching**: updates inside event handlers, promises, `setTimeout`, and native handlers batch together. One render after all updates in the same tick (in most cases).

## Example

```js
setCount(c => c + 1);
setFlag(true);
// one re-render in React 18
```

## Common confusion

`flushSync` forces synchronous render — escape hatch, use rarely.

## In practice

Explain React 18 upgrade benefits; `await` boundaries may end batch in some legacy patterns.
