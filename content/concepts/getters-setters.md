---
id: getters-setters
title: Getters and setters
aliases: [accessor properties, get, set, getters, setters]
depth: intermediate
related: [es6-class, object-define-property, getters-setters]
---

## Definition

**Getters** and **setters** are accessor properties defined with `get`/`set` that intercept read and write operations on an object.

## Why it exists

Computed properties, validation on assignment, lazy initialization, and encapsulation without separate methods.

## How it works

```js
const user = {
  first: "Ada",
  last: "Lovelace",
  get fullName() { return `${this.first} ${this.last}`; },
  set fullName(v) {
    [this.first, this.last] = v.split(" ");
  },
};
```

Also defined via [Object.defineProperty](concept:object-define-property) or class syntax.

## Common confusion

Getters run on every access — avoid expensive work without memoization. Setters without getters create read-only properties at runtime.

## In practice

Common in data models, Vue 2 reactivity, and API wrappers that expose derived fields.
