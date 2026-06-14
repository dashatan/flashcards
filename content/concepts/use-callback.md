---
id: use-callback
title: useCallback
aliases: [useCallback hook, React useCallback]
depth: intermediate
related: [use-memo, react-memo, closure]
---

## Definition

**useCallback** memoizes a **function reference** between renders when [dependencies](concept:dependency-array) are unchanged.

## Why it exists

Stable function props for [React.memo](concept:react-memo) children and stable effect dependencies.

## How it works

```js
const onSave = useCallback(() => save(user), [user]);
```

Internally similar to `useMemo(() => fn, deps)`. Empty deps → same function forever (watch stale [closures](concept:closure)).

## Common confusion

Does not memoize child by itself — child must be wrapped in `memo`. Overuse everywhere adds complexity without benefit.

## In practice

Use when profiling shows unnecessary child renders or dep churn in effects.
