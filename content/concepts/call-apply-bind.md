---
id: call-apply-bind
title: call, apply, and bind
aliases: [call, apply, bind, Function.prototype.call]
depth: intermediate
related: [this-binding, partial-application]
---

## Definition

**call**, **apply**, and **bind** are `Function.prototype` methods to invoke functions with an explicit `this` and optional arguments — `call(thisArg, a, b)`, `apply(thisArg, [a,b])`, `bind(thisArg, a)` returns a new bound function.

## Why it exists

Control [this binding](concept:this-binding) and implement [partial application](concept:partial-application) without arrow wrappers.

## How it works

```js
function greet(greeting, name) {
  return `${greeting}, ${name}`;
}

greet.call({ id: 1 }, "Hi", "Ada");
greet.apply(null, ["Hi", "Ada"]);
const sayHi = greet.bind(null, "Hi");
sayHi("Grace");
```

`bind` returns a new function; does not invoke immediately.

## Common confusion

Arrow functions ignore bound `this`. `bind` with `new` can create bound constructors with limited use.

## In practice

Legacy React patterns, borrowing methods (`Array.prototype.slice.call(arguments)`), and utility libraries.
