---
id: new-operator
title: new operator
aliases: [new, new keyword]
depth: foundation
related: [prototype-chain, this-binding, es6-class]
---

## Definition

The **`new`** operator creates an object, wires its `[[Prototype]]` from the constructor's `prototype`, binds `this`, runs the constructor, and returns the object (unless constructor returns an object).

## Why it exists

Standard pattern for instance creation before class syntax.

## How it works

```js
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () { return this.name; };

const ada = new Person("Ada");
```

Equivalent to `class` instance creation under the hood.

## Common confusion

Forgetting `new` on a constructor leaves `this` as `undefined` (strict) or the global object (sloppy). Arrow functions cannot be used as constructors.

## In practice

Modern code uses `class`; understanding `new` explains [prototype chain](concept:prototype-chain) interview questions.
