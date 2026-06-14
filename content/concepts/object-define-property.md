---
id: object-define-property
title: Object.defineProperty
aliases: [defineProperty]
depth: intermediate
related: [property-descriptors, getters-setters, object-freeze-seal]
---

## Definition

**`Object.defineProperty`** defines or modifies a property on an object using an explicit [property descriptor](concept:property-descriptors).

## Why it exists

Create non-enumerable keys, read-only fields, or accessor properties that intercept reads/writes.

## How it works

```js
const obj = {};
Object.defineProperty(obj, "secret", {
  get() { return 42; },
  enumerable: false,
});
```

Returns the object. Throws if `configurable: false` and you try incompatible changes.

## Common confusion

Defining a getter without a setter makes the property read-only at runtime. Default descriptor values differ from assignment (`obj.x = 1`).

## In practice

Foundation for `Object.defineProperties`, some ORM/proxy patterns, and legacy `__defineGetter__` replacements.
