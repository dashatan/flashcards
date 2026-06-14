---
id: object-freeze-seal
title: Object.freeze and Object.seal
aliases: [Object.freeze, Object.seal, freeze, seal]
depth: intermediate
related: [property-descriptors, object-assign, deep-copy]
---

## Definition

**`Object.seal`** prevents adding/removing properties but allows changing existing values. **`Object.freeze`** additionally makes all properties non-writable — both are shallow.

## Why it exists

Immutability guarantees for configuration objects, constants, and defensive copies.

## How it works

```js
const sealed = Object.seal({ a: 1 });
sealed.a = 2; // OK
sealed.b = 3; // fails silently or throws in strict mode

const frozen = Object.freeze({ a: 1 });
frozen.a = 2; // fails
```

`Object.isSealed` / `Object.isFrozen` check state.

## Common confusion

Freezing is **shallow** — nested objects remain mutable unless recursively frozen or using immutable data libraries.

## In practice

Use for shallow config immutability; deep immutability needs libraries or recursive freeze.
