---
id: promise
title: Promise
aliases: [Promises, promise]
depth: intermediate
related: [microtask, event-loop, async-await]
---

## Definition

A **Promise** is an object representing the eventual result of async work — states: pending, fulfilled, or rejected — with `.then` / `.catch` handlers scheduled as [microtasks](concept:microtask).

## Why it exists

Replaces callback pyramids with composable async chains and standardized error propagation.

## How it works

Settling a Promise queues reactions on the [microtask](concept:microtask) queue. Chaining returns new Promises; returning a Promise from `.then` flattens the chain. Integrates with [async/await](concept:async-await).

## Example

```js
fetch("/api/user")
  .then((res) => res.json())
  .then((user) => console.log(user.name))
  .catch(console.error);
```

## Common confusion

`new Promise` executor runs synchronously; handlers run async. Unhandled rejections crash Node / trigger global handlers.

## In practice

All modern network code, TanStack Query, and React Server Actions build on Promises.
