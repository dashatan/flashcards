---
id: discriminated-unions
title: Discriminated Unions
aliases: [discriminated union, tagged union]
depth: intermediate
related: [type-guards]
---

## Definition

A **discriminated union** is a TypeScript union type with a common literal field (discriminator) so narrowing works in `switch`/`if`.

## Why it exists

Type-safe API results, reducer actions, and UI state machines.

## How it works

```ts
type Result =
  | { type: "ok"; data: User }
  | { type: "err"; message: string };

if (result.type === "ok") result.data; // narrowed
```

Often combined with `as const` on action types.

## In practice

Redux actions, fetch states, form wizard steps — essential senior TS pattern in React.
