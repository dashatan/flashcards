---
id: type-guards
title: Type Guards
aliases: [type guard, TypeScript narrowing]
depth: intermediate
related: [discriminated-unions, optional-chaining]
---

## Definition

A **type guard** is a function or check that narrows a TypeScript type in a branch — often `x is User` predicate.

## Why it exists

Safely parse `unknown` API JSON and handle union props in components.

## How it works

```ts
function isUser(x: unknown): x is User {
  return typeof x === "object" && x !== null && "id" in x;
}
```

`in`, `typeof`, `instanceof`, and discriminant checks all narrow types.

## In practice

Validate API responses at boundaries; avoid `as` casts when possible.
