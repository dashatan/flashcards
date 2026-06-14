---
id: static-methods
title: Static methods
aliases: [static keyword, class static methods]
depth: intermediate
related: [es6-class, prototype-chain, new-operator]
---

## Definition

**Static methods** belong to the constructor (class) itself, not instances — invoked as `ClassName.method()` without `new`.

## Why it exists

Utility functions, factories, and namespaced helpers tied to a type without needing an instance.

## How it works

```js
class MathUtils {
  static clamp(n, min, max) {
    return Math.min(max, Math.max(min, n));
  }
}

MathUtils.clamp(5, 0, 10);
```

Defined with `static` in class syntax or directly on the function object in pre-class code.

## Common confusion

Static methods are not on the [prototype chain](concept:prototype-chain) of instances. `this` inside static methods refers to the class, not an instance.

## In practice

`Array.from`, `Object.keys`, React legacy `React.createElement` patterns, and service singletons.
