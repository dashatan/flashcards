---
id: identifier
title: Identifier
aliases: [identifiers]
depth: foundation
related: [binding, lexical-scope]
---

## Definition

An **identifier** is the name you give to a variable, function, class, or other binding in source code (e.g. `count`, `fetchUser`).

## Why it exists

Identifiers let humans and tools refer to values and behavior by name instead of memory addresses.

## How it works

When JavaScript parses code, it registers identifiers in the current [lexical scope](concept:lexical-scope). When execution reaches a declaration, the engine creates a [binding](concept:binding) between that identifier and a value (or leaves it uninitialized in the [temporal dead zone](concept:temporal-dead-zone) for `let`/`const`).

## Example

```js
const userId = 42; // `userId` is the identifier
function greet(name) { // `greet` and `name` are identifiers
  return `Hello ${name}`;
}
```

## Common confusion

Identifiers are not the values themselves — `userId` is the name; `42` is the value. Renaming an identifier in your editor does not change runtime behavior unless you change what the code actually references.

## In practice

Lint rules (no unused vars), refactoring tools, and readable APIs all depend on clear identifier names. In interviews, “identifier lookup” means how the engine resolves a name through the [scope chain](concept:scope-chain).
