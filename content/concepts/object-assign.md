---
id: object-assign
title: Object.assign
aliases: [assign]
depth: intermediate
related: [shallow-copy, property-descriptors, object-freeze-seal]
---

## Definition

**`Object.assign(target, ...sources)`** copies enumerable own properties from sources onto the target and returns the target — a [shallow copy](concept:shallow-copy) merge.

## Why it exists

Merge defaults, clone shallow objects, and polyfill `Object.assign` patterns before spread syntax.

## How it works

```js
const defaults = { role: "user", active: true };
const user = Object.assign({}, defaults, { name: "Ada" });
```

Copies getters by **invoking** them and assigning the returned value.

## Common confusion

Shallow only — nested objects are shared. Does not copy non-enumerable or symbol keys by default.

## In practice

Often replaced by `{ ...defaults, ...patch }` but still common in legacy code and certain merge utilities.
