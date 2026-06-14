---
id: use-imperative-handle
title: useImperativeHandle
aliases: [useImperativeHandle hook]
depth: intermediate
related: [use-ref, forward-ref, controlled-component]
---

## Definition

**`useImperativeHandle`** customizes the instance value exposed when a parent calls `ref` on a child wrapped in `forwardRef`.

## Why it exists

Expose imperative methods (focus, scroll, play) on reusable components without leaking full DOM nodes.

## How it works

```tsx
useImperativeHandle(ref, () => ({
  focus: () => inputRef.current?.focus(),
}), []);
```

Parent: `ref.current?.focus()`.

## Common confusion

Prefer declarative props when possible — imperative handles are escape hatches. Must pair with `forwardRef`.

## In practice

Input wrappers, media players, and design-system components integrating non-React libraries.
