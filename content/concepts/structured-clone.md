---
id: structured-clone
title: structuredClone
aliases: [structured clone API]
depth: intermediate
related: [deep-copy]
---

## Definition

**structuredClone** is a built-in API that performs a [deep copy](concept:deep-copy) of most structured data types supported by the structured clone algorithm.

## Why it exists

Standard, faster alternative to JSON hacks and lodash for cloning plain objects, arrays, Dates, Maps, Sets, and more.

## How it works

```js
const clone = structuredClone(original);
```

Throws on functions, symbols in some cases, and DOM nodes. Handles circular references (unlike JSON).

## Common confusion

Not a universal clone — cannot clone class instances with methods you need preserved, or `Error` objects in all environments.

## In practice

Use for cloning API state, form defaults, and immutable snapshots in modern apps.
