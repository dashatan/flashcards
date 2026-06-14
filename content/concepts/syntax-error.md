---
id: syntax-error
title: SyntaxError
aliases: [SyntaxError]
depth: foundation
related: [strict-mode]
---

## Definition

A **SyntaxError** is thrown when source code violates JavaScript grammar and cannot be parsed.

## Why it exists

Fails at parse time before execution — illegal tokens, missing brackets, invalid `await` placement.

## How it works

Cannot be caught by try/catch in the same script if the parser fails before running. Build tools (TypeScript, ESLint) catch these earlier.

## Example

```js
if { } // SyntaxError
const fn = () => { return }; // ok
```

## Common confusion

Runtime [TypeError](concept:type-error) vs parse-time SyntaxError — only SyntaxError prevents the file from running.

## In practice

Fix in editor/CI; not recoverable at runtime in the broken module.
