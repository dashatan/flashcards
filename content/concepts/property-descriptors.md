---
id: property-descriptors
title: Property descriptors
aliases: [property attributes, data property descriptor]
depth: intermediate
related: [object-define-property, getters-setters]
---

## Definition

**Property descriptors** are metadata flags for object properties: `value`, `writable`, `enumerable`, and `configurable` for data properties.

## Why it exists

Fine-grained control over visibility (`enumerable`), mutability (`writable`), and whether a property can be deleted or redefined (`configurable`).

## How it works

```js
Object.defineProperty(obj, "id", {
  value: 1,
  writable: false,
  enumerable: true,
  configurable: false,
});
```

Inspect with `Object.getOwnPropertyDescriptor(obj, "id")`.

## Common confusion

`for...in` and `Object.keys` only see **enumerable** own properties. [Getters/setters](concept:getters-setters) use a different descriptor shape.

## In practice

Used in frameworks, polyfills, and immutability patterns alongside [Object.defineProperty](concept:object-define-property).
