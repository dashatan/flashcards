---
id: block-scope
title: Block Scope
aliases: [block-scoped]
depth: foundation
related: [function-scope, lexical-scope, temporal-dead-zone]
---

## Definition

**Block scope** limits an [identifier](concept:identifier)'s visibility to the nearest enclosing `{}` block (e.g. `if`, `for`, `while`, or bare blocks).

## Why it exists

Block scope prevents variables declared inside a branch or loop from leaking into the whole function or global scope, reducing accidental name collisions and bugs.

## How it works

`let` and `const` create block-scoped [bindings](concept:binding). `var` does not — it uses [function scope](concept:function-scope). Each `let` iteration in a `for` loop gets its own binding, which matters for [closures](concept:closure) inside the loop.

## Example

```js
if (true) {
  let secret = 42;
}
// secret is not accessible here

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // 0, 1, 2
}
```

## Common confusion

A block `{ }` creates scope for `let`/`const` but not for `var`. `for (const x of arr)` creates a new binding each iteration; `for (const i = 0; ...)` in a C-style loop header fails on the second iteration because `const` cannot be reassigned.

## In practice

Default to `const`/`let` in modern code. Block scope is why TDZ and loop closures behave correctly in production code.
