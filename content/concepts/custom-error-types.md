---
id: custom-error-types
title: Custom error types
aliases: [custom errors, extend Error, ValidationError]
depth: intermediate
related: [try-catch-finally, type-error, syntax-error]
---

## Definition

**Custom error types** extend `Error` (or built-in subclasses) to add domain-specific `name`, fields, and instanceof checks while preserving stack traces.

## Why it exists

Distinguish validation failures from network errors in [try/catch](concept:try-catch-finally) without string matching.

## How it works

```js
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}
throw new ValidationError("Invalid email", "email");
```

Use `instanceof` or error `name` in handlers.

## Common confusion

Must call `super(message)` in subclass constructors. Some environments need `Error.captureStackTrace` for clean stacks.

## In practice

API layers throw typed errors; UI maps them to user-friendly messages.
