---
id: optional-chaining
title: Optional Chaining (?.)
aliases: [optional chaining, ?. operator]
depth: foundation
related: [nullish-coalescing, undefined, type-error]
---

## Definition

**Optional chaining** short-circuits property access, method calls, or indexing when the base is `null` or `undefined`, returning `undefined` instead of throwing.

## Why it exists

Avoids nested guard clauses when drilling into optional API or user objects.

## How it works

```js
user?.address?.city;
arr?.[0];
callback?.();
```

Only protects against nullish **base** — wrong property on a valid object still throws.

## Common confusion

Does not replace validation for wrong types (`user.name.toUpperCase()` if `name` is a number).

## In practice

Ubiquitous in TypeScript React for optional props and API responses; pair with [nullish coalescing](concept:nullish-coalescing) for defaults.
