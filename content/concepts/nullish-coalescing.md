---
id: nullish-coalescing
title: Nullish Coalescing (??)
aliases: [nullish coalescing, ?? operator]
depth: foundation
related: [optional-chaining, undefined, truthy-falsy]
---

## Definition

The **nullish coalescing operator** (`??`) returns the right operand only when the left is `null` or `undefined`.

## Why it exists

Unlike `||`, it does not treat `0`, `""`, or `false` as missing — only nullish values.

## How it works

```js
0 ?? 5;        // 0
"" ?? "default"; // ""
null ?? 5;     // 5
undefined ?? 5; // 5
```

## Common confusion

`??` cannot mix with `&&`/`||` without parentheses (syntax error). Combine with [optional chaining](concept:optional-chaining): `user?.name ?? "Guest"`.

## In practice

Default values for config, API fields, and form state where `0` or empty string are valid.
