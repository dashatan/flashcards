---
id: use-reducer
title: useReducer
aliases: [useReducer hook, React useReducer]
depth: intermediate
related: [use-state, react-batching]
---

## Definition

**useReducer** manages complex state with a reducer function `(state, action) => newState` and a `dispatch` function.

## Why it exists

Predictable state transitions, easier testing, and patterns similar to Redux without external library.

## How it works

```js
const [state, dispatch] = useReducer(reducer, initialState);
dispatch({ type: "increment" });
```

Updates batch like [useState](concept:use-state). Reducer must be pure.

## Common confusion

Not always better than multiple `useState` — use when state logic is intertwined or action-driven.

## In practice

Form wizards, complex UI state, combining with Context for lightweight global state.
