---
id: super-keyword
title: super keyword
aliases: [super(), super keyword]
depth: intermediate
related: [es6-class, prototype-chain, this-binding]
---

## Definition

**`super`** in classes calls the parent constructor (`super()`) or invokes parent methods on the subclass prototype chain.

## Why it exists

Extend built-in or custom classes while preserving parent initialization and behavior.

## How it works

```js
class Admin extends User {
  constructor(name, role) {
    super(name); // must call before using `this`
    this.role = role;
  }
  greet() { return super.greet() + ` (${this.role})`; }
}
```

`super` references the parent prototype for method calls.

## Common confusion

Must call `super()` in derived constructors before `this`. In methods, `super` is not the same as `this`.

## In practice

Standard in class components, service hierarchies, and extending native types (use cautiously).
