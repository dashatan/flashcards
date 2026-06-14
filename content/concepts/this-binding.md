---
id: this-binding
title: this Binding
aliases: [this, this binding, context binding]
depth: intermediate
related: [arrow-function, function-expression, call-apply-bind]
---

## Definition

**this binding** is how JavaScript determines the value of `this` for a function call — it depends on **how** the function is invoked, not where it is written (unlike [lexical scope](concept:lexical-scope)).

## Why it exists

Object-oriented patterns need methods to reference their owner. Callbacks lose that unless bound.

## How it works

Rules (simplified):

1. `obj.method()` → `this` is `obj`
2. Plain call `fn()` → `this` is `undefined` in strict/modules, or global in sloppy
3. `new fn()` → `this` is new object
4. `call`/`apply`/`bind` → explicit `this`
5. [Arrow functions](concept:arrow-function) → lexical `this` from outer scope

## Example

```js
const counter = {
  n: 0,
  inc() { this.n++; },
};
const loose = counter.inc;
loose(); // not incrementing counter.n — wrong `this`
```

## Common confusion

`this` is not the [lexical environment](concept:lexical-environment). React class components used `bind` or arrows for this reason.

## In practice

Use arrows in callbacks, `bind` for legacy, or class fields. Know [call, apply, bind](concept:call-apply-bind) for interviews.
