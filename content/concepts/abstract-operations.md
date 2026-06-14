---
id: abstract-operations
title: Abstract operations (ToNumber, ToString)
aliases: [ToNumber, ToString, type conversion, Number(), parseInt()]
depth: intermediate
related: [type-coercion, loose-equality, truthy-falsy]
---

## Definition

**Abstract operations** like **ToNumber** and **ToString** are spec-defined algorithms that convert values for operators, comparisons, and built-in functions.

## Why it exists

Explains `+`, `==`, `Number()`, and `parseInt()` behavior consistently under [type coercion](concept:type-coercion).

## How it works

```js
Number("42"); // ToNumber → 42
String(42); // ToString → "42"
parseInt("42px", 10); // parses leading digits
+"42"; // unary + invokes ToNumber
```

`ToPrimitive` chooses number vs string hint for objects before coercion.

## Common confusion

`Number(null)` is 0, `Number(undefined)` is NaN. `parseInt` truncates; `Number` parses full string or NaN.

## In practice

Interview fodder for `[] + {}` and `==` puzzles — map answers to spec conversions, then recommend `===` and explicit parsing.
