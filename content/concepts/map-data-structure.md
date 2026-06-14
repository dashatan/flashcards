---
id: map-data-structure
title: Map (Data Structure)
aliases: [ES6 Map, JavaScript Map, Map object]
depth: foundation
related: [set-data-structure, value-vs-reference]
---

## Definition

A **Map** is a key-value collection where keys can be any type (objects, functions), with predictable iteration order.

## Why it exists

Better than plain objects for non-string keys, frequent add/delete, and avoiding prototype pollution.

## How it works

```js
const cache = new Map();
cache.set(userObj, sessionData);
cache.get(userObj);
```

## Common confusion

Not the same as `Array.prototype.map`. Keys use [reference equality](concept:value-vs-reference) for objects.

## In practice

Memoization caches, metadata on objects, grouping by id, and replacing `Record` when keys are dynamic or non-string.
