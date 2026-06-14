---
id: react-memo
title: React.memo
aliases: [memo, React.memo]
depth: intermediate
related: [use-memo, use-callback, react-re-render]
---

## Definition

**React.memo** wraps a component to skip [re-render](concept:react-re-render) when props are shallowly equal to the previous render.

## Why it exists

Cut unnecessary work for pure presentational components with stable props.

## How it works

```js
const Row = memo(function Row({ item }) { ... });
```

Custom `arePropsEqual` optional. Compares each prop with `Object.is`.

## Common confusion

New object/function props every parent render break memo — pair with [useMemo](concept:use-memo)/[useCallback](concept:use-callback). Memo adds comparison overhead.

## In practice

List rows, heavy charts, icon components — profile before sprinkling memo everywhere.
