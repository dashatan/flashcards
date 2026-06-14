---
id: forward-ref
title: forwardRef
aliases: [React.forwardRef, forward ref]
depth: intermediate
related: [use-ref, use-imperative-handle, controlled-component]
---

## Definition

**`forwardRef`** lets a function component receive a `ref` from its parent and pass it to an inner DOM node or [useImperativeHandle](concept:use-imperative-handle).

## Why it exists

Refs don't pass through components like props — `forwardRef` bridges parent refs to children.

## How it works

```tsx
const Input = forwardRef<HTMLInputElement, Props>((props, ref) => (
  <input ref={ref} {...props} />
));
```

React 19+ can pass ref as a regular prop in some cases.

## Common confusion

Overuse blocks component encapsulation — expose minimal API via imperative handle when needed.

## In practice

Design system inputs, focus management, and measuring DOM elements from parent effects.
