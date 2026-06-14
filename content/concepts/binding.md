---
id: binding
title: Binding
aliases: [bindings, variable binding]
depth: foundation
related: [identifier, value-vs-reference, temporal-dead-zone]
---

## Definition

A **binding** is the link between an [identifier](concept:identifier) and a storage cell that holds a value (or remains uninitialized).

## Why it exists

JavaScript needs a concrete rule for what happens when you declare `const x = 1` — the engine creates a binding named `x` in the current environment.

## How it works

- `let` / `const` / `var` each create bindings differently regarding [hoisting](concept:hoisting), [temporal dead zone](concept:temporal-dead-zone), and reassignment.
- `const` forbids **reassigning the binding** (the name → new value), but if the bound value is an object, you can still mutate the object's properties because the binding still points to the same object ([value vs reference](concept:value-vs-reference)).

## Example

```js
const user = { name: "Ada" };
user.name = "Grace"; // OK — mutating the object
user = {}; // TypeError — rebinding `user` is forbidden
```

## Common confusion

“Immutable `const`” is often misunderstood. Only the binding is immutable, not necessarily the value it points to.

## In practice

Understanding bindings explains `const` object mutation interview questions and why destructuring creates new bindings from existing values.
