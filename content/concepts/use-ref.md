---
id: use-ref
title: useRef
aliases: [useRef hook, React useRef]
depth: intermediate
related: [use-state, closure, dom]
---

## Definition

**useRef** returns a mutable `{ current }` object persisting across renders without causing [re-renders](concept:react-re-render) when `current` changes.

## Why it exists

DOM node access, timer IDs, previous value storage, and instance-like variables in function components.

## How it works

```js
const inputRef = useRef(null);
inputRef.current?.focus();
```

Updating `ref.current` does not trigger render. Ref identity is stable.

## Common confusion

Not for derived UI state — use [useState](concept:use-state). Reading/writing `ref.current` during render is discouraged except initialization patterns.

## In practice

Focus management, scroll containers, integrating non-React libraries, avoiding stale closures in callbacks.
