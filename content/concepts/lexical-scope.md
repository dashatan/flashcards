---
id: lexical-scope
title: Lexical Scope
aliases: [static scope]
depth: foundation
related: [scope-chain, closure, lexical-environment]
---

## Definition

**Lexical scope** means a function's access to variables is determined by where functions and blocks are **written** in source code, not where they are **called**.

## Why it exists

Lexical scope makes behavior predictable: inner code can read outer declarations, and [closures](concept:closure) can capture stable variable environments.

## How it works

Each block or function creates a nested scope. When code reads an [identifier](concept:identifier), the engine walks the [scope chain](concept:scope-chain) outward from the inner [lexical environment](concept:lexical-environment) until it finds a binding or throws [ReferenceError](concept:reference-error).

## Example

```js
const factor = 2;
function scale(n) {
  return n * factor; // `factor` resolved lexically, not from caller's scope
}
```

## Common confusion

Lexical scope is not dynamic scope (where caller's variables would matter). `this` binding is separate from lexical scope — see [this binding](concept:this-binding).

## In practice

Foundation for closures, module patterns, hooks (stable closures over state), and why loop `var` vs `let` behaves differently with callbacks.
