---
id: let
title: let
aliases: [let keyword]
depth: foundation
related: [block-scope, binding, temporal-dead-zone, var]
---

## Definition

**`let`** declares a [block-scoped](concept:block-scope), reassignable [binding](concept:binding) subject to the [temporal dead zone](concept:temporal-dead-zone).

## Why it exists

Modern alternative to [var](concept:var) — no function-scope leakage, no silent redeclaration, and correct loop [closure](concept:closure) behavior.

## How it works

```js
let count = 0;
count = 1; // OK
let count = 2; // SyntaxError in same scope
```

[Hoisted](concept:hoisting) but inaccessible until the declaration line runs.

## Common confusion

`let` allows reassignment unlike [const](concept:const). It does not hoist like `var` with `undefined` — TDZ applies until initialized.

## In practice

Default to [const](concept:const); use `let` only when reassignment is required.
