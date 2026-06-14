---
id: typescript-generics
title: TypeScript generics
aliases: [generics, generic types, generic components]
depth: intermediate
related: [type-guards, discriminated-unions, es6-class]
---

## Definition

**Generics** parameterize types and functions with type variables (`<T>`) so one implementation works for many types while staying type-safe.

## Why it exists

Reusable utilities (`Array<T>`, `Promise<T>`) and React components that preserve prop types across usages.

## How it works

```tsx
function identity<T>(value: T): T { return value; }

type ListProps<T> = { items: T[]; render: (item: T) => React.ReactNode };
```

Constraints: `<T extends { id: string }>`.

## Common confusion

Generics are compile-time only — erased at runtime. Over-generic APIs hurt readability.

## In practice

`useState<User | null>`, generic table components, and API response wrappers.
