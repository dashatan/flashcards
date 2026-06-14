---
id: execution-context
title: Execution Context
aliases: [execution context, EC]
depth: foundation
related: [call-stack, lexical-environment, hoisting]
---

## Definition

An **execution context** is the environment in which JavaScript code runs — it includes the [lexical environment](concept:lexical-environment), `this` binding, and metadata for the currently executing code (global, function, or eval).

## Why it exists

Each time code enters global scope or invokes a function, the engine needs an isolated place for locals, hoisting, and return behavior.

## How it works

1. **Creation phase**: create environment, hoist declarations ([hoisting](concept:hoisting)), set up `this`.
2. **Execution phase**: run statements line by line.
3. Context is pushed on the [call stack](concept:call-stack) when entering, popped when leaving.

## Example

Calling `greet()` creates a new function execution context with its own locals while the caller's context waits on the stack.

```js
function greet(name) {
  const msg = `Hi ${name}`;
  return msg;
}
greet("Ada");
```

## Common confusion

Execution context is spec-level; developers often say “scope” or “stack frame.” One function call = one frame on the call stack with its own context.

## In practice

Explains hoisting timing, why `return` exits the current context, and how the event loop picks the next context to run after the stack clears.
