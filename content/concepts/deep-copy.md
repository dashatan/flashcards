---
id: deep-copy
title: Deep Copy
aliases: [deep clone, deep copy]
depth: intermediate
related: [shallow-copy, structured-clone, value-vs-reference]
---

## Definition

A **deep copy** recursively clones all nested structures so mutations in the copy never affect the original.

## Why it exists

Safe duplication of nested config, state snapshots, and undo stacks.

## How it works

- Modern: [structuredClone](concept:structured-clone)(obj)
- JSON hack: `JSON.parse(JSON.stringify(obj))` — loses `Date`, `Map`, functions, `undefined`
- Libraries: lodash `cloneDeep`

## Example

```js
const deep = structuredClone({ a: { b: 1 } });
deep.a.b = 2;
// original.a.b unchanged
```

## Common confusion

`structuredClone` does not clone functions or DOM nodes. Circular references need specialized handling.

## In practice

Prefer `structuredClone` in modern browsers/Node; understand limits before cloning API payloads.
