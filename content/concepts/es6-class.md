---
id: es6-class
title: ES6 class
aliases: [class, class syntax, JavaScript class]
depth: foundation
related: [prototype-chain, new-operator, static-methods, super-keyword]
---

## Definition

**`class`** is syntactic sugar over constructor functions and [prototype chain](concept:prototype-chain) inheritance — `class Foo {}` ≈ `function Foo() {}` with `Foo.prototype` methods.

## Why it exists

Familiar OOP syntax for constructors, inheritance, [static methods](concept:static-methods), and private fields.

## How it works

```js
class User {
  #id;
  constructor(name) { this.name = name; }
  greet() { return this.name; }
  static create(name) { return new User(name); }
}
```

`extends` sets up prototype linkage; [super](concept:super-keyword) calls parent constructor/methods.

## Common confusion

Classes are hoisted like `let` (TDZ) — not callable before declaration. Methods are non-enumerable on the prototype.

## In practice

React class components (legacy), domain models, and service classes — most UI code uses functions + hooks today.
