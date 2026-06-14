---
id: tanstack-virtual
title: TanStack Virtual
aliases: ["@tanstack/react-virtual", useVirtualizer, TanStack Virtual]
depth: intermediate
related: [react-list-virtualization, tanstack-query]
---

## Definition

**TanStack Virtual** (`@tanstack/react-virtual`) provides headless virtualizers that compute visible item ranges for scrollable lists and grids.

## Why it exists

Performant virtualization with flexible layouts without heavy table components.

## How it works

```tsx
const virtualizer = useVirtualizer({
  count: items.length,
  getScrollElement: () => parentRef.current,
  estimateSize: () => 48,
});
```

Maps virtual items to absolute positioning inside a tall inner container.

## Common confusion

Requires explicit scroll parent ref and size estimates; horizontal mode needs width estimates.

## In practice

Pairs well with TanStack ecosystem; alternative: react-window for simpler fixed-height lists.
