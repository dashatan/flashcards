---
id: const
title: const
aliases: [const keyword]
depth: foundation
related: [let, binding, value-vs-reference, block-scope]
---

## Definition

**`const`** declares a [block-scoped](concept:block-scope) [binding](concept:binding) that cannot be reassigned after initialization.

## Why it exists

Signals intent that a name will always point to the same value; prevents accidental rebinding bugs.

## How it works

```js
const user = { name: "Ada" };
user.name = "Grace"; // OK — mutate object
user = {}; // TypeError — cannot rebind
```

Must be initialized at declaration. Subject to [TDZ](concept:temporal-dead-zone) like `let`.

## Common confusion

`const` does not make objects deeply immutable — only the [binding](concept:binding) is fixed ([value vs reference](concept:value-vs-reference)).

## In practice

Use `const` by default in modern JavaScript and TypeScript.
