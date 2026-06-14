---
id: scope-chain
title: Scope Chain
aliases: [scope chain]
depth: foundation
related: [lexical-scope, lexical-environment]
---

## Definition

The **scope chain** is the linked list of [lexical environments](concept:lexical-environment) from the current scope outward to the global scope, used to resolve [identifiers](concept:identifier).

## Why it exists

Inner code must read outer variables without copying them. The chain defines the lookup path.

## How it works

When JavaScript evaluates a name:

1. Search the current environment's bindings.
2. If not found, follow the outer reference to the parent environment.
3. Repeat until found or until the chain ends → [ReferenceError](concept:reference-error).

[Lexical scope](concept:lexical-scope) means this chain is fixed at write time, not at call time.

## Example

```js
const theme = "dark";

function render() {
  const padding = 8;
  function label() {
  return `${theme} ${padding}`; // walks chain: label → render → global
  }
  return label();
}
```

## Common confusion

Scope chain is for variable lookup (`x`). `this` resolution uses different rules ([this binding](concept:this-binding)). `with` and `eval` can mutate scope in non-strict legacy code — avoid both.

## In practice

Foundation for closures, variable shadowing (inner `let` hides outer same name), and debugging “why is this undefined?”
