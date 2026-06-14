---
id: lexical-environment
title: Lexical Environment
aliases: [lexical environment, environment record]
depth: foundation
related: [lexical-scope, scope-chain, closure, execution-context]
---

## Definition

A **lexical environment** is the internal data structure that stores [bindings](concept:binding) for a scope (variables, functions) and a reference to the outer environment — forming the [scope chain](concept:scope-chain).

## Why it exists

The engine needs a concrete place to resolve [identifiers](concept:identifier) and to keep outer variables alive for [closures](concept:closure).

## How it works

Each function, block, or module has an environment. When code runs:

1. New environment is created when entering a scope.
2. Declarations register bindings (with [hoisting](concept:hoisting) / [TDZ](concept:temporal-dead-zone) rules).
3. Identifier lookup searches the current environment, then outer environments, until global or `null`.

## Example

Conceptually, when `inner` runs below, it closes over the environment where `count` lives:

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
```

## Common confusion

Lexical environment is spec terminology — interviews may say “scope” or “closure over variables” instead. It is not the same as the [call stack](concept:call-stack) (which tracks which function is executing).

## In practice

Understanding environments explains closures, module scope, and why detached event handlers can leak memory if they hold large environments.
