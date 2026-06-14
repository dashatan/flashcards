---
id: function-declaration
title: Function Declaration
aliases: [function declaration, function declarations]
depth: foundation
related: [hoisting, function-expression]
---

## Definition

A **function declaration** is `function name() {}` — fully [hoisted](concept:hoisting) so the function name is available throughout its scope before the line where it appears.

## Why it exists

Allows mutual recursion and organizing code without worrying about declaration order within a scope.

## How it works

Hoisting registers both the name and the function body during the creation phase of the [execution context](concept:execution-context). Contrast with assigning a [function expression](concept:function-expression) to `const` — only the variable is hoisted (TDZ until line runs).

## Example

```js
hoisted(); // works

function hoisted() {
  return 42;
}
```

## Common confusion

Function declarations in blocks are block-scoped in ES6+ strict mode but behave oddly in sloppy mode (historical). Anonymous function declarations are only allowed as `export default function () {}` forms.

## In practice

Use declarations for top-level helpers; use expressions/arrows for callbacks and conditional creation.
