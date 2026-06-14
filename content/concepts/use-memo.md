---
id: use-memo
title: useMemo
aliases: [useMemo hook, React useMemo]
depth: intermediate
related: [use-callback, react-memo, dependency-array]
---

## Definition

**useMemo** memoizes a **computed value** between renders, recalculating only when [dependencies](concept:dependency-array) change.

## Why it exists

Avoid expensive recomputation (filter/sort large lists) and stabilize object references for deps.

## How it works

```js
const visible = useMemo(
  () => items.filter(i => i.active),
  [items]
);
```

Uses `Object.is` on deps. Returns cached value if deps unchanged.

## Common confusion

Not free — overhead for cheap math. Does not prevent child [re-renders](concept:react-re-render) unless combined with [React.memo](concept:react-memo) and stable props.

## In practice

Profile first; React Compiler may auto-memoize in future ([react-compiler](concept:react-compiler)).
