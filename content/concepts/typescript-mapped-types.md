---
id: typescript-mapped-types
title: TypeScript mapped types
aliases: [mapped types, keyof mapped types]
depth: advanced
related: [typescript-generics, typescript-conditional-types]
---

## Definition

**Mapped types** transform each property of an existing type: `{ [K in keyof T]: ... }` — basis for `Partial`, `Readonly`, and custom mappers.

## Why it exists

Derive form state, optional update payloads, and readonly views from a single source type.

## How it works

```ts
type Optional<T> = { [K in keyof T]?: T[K] };
type ReadonlyFields<T> = { readonly [K in keyof T]: T[K] };
```

Combine with conditional types for fine control (`-?`, `+readonly` modifiers).

## Common confusion

Large mapped types can slow tsc — split types or simplify generics.

## In practice

React form libraries, API patch types, and table column definitions keyed by row shape.
