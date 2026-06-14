---
id: typescript-conditional-types
title: TypeScript conditional types
aliases: [conditional types, extends ? :, T extends U ? X : Y]
depth: advanced
related: [typescript-generics, discriminated-unions, type-guards]
---

## Definition

**Conditional types** pick types based on a condition: `T extends U ? X : Y` — power utility types like `Exclude`, `Extract`, and `NonNullable`.

## Why it exists

Express type-level logic for libraries and advanced React prop inference.

## How it works

```ts
type IsString<T> = T extends string ? true : false;
type Result = IsString<"a">; // true
```

Distributive over unions when `T` is naked type parameter.

## Common confusion

Hard to debug errors — start simple; use built-in utility types before custom conditionals.

## In practice

Typed hooks, polymorphic components, and mapping API DTOs to UI models.
