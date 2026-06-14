---
id: redux-toolkit
title: Redux Toolkit
aliases: [RTK, Redux Toolkit, createSlice]
depth: intermediate
related: [normalized-state, zustand, one-way-data-flow]
---

## Definition

**Redux Toolkit (RTK)** is the official Redux approach with `createSlice`, Immer-powered reducers, built-in thunk, and simplified store setup.

## Why it exists

Reduce Redux boilerplate, enforce best practices, and provide batteries-included async patterns.

## How it works

```js
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: { increment: state => { state.value += 1; } },
});
```

Includes RTK Query for server cache in many apps.

## Common confusion

Still global store complexity — [Zustand](concept:zustand) or [TanStack Query](concept:tanstack-query) may fit simpler needs.

## In practice

Large apps with predictable global state; pair server cache with RTK Query or TanStack Query deliberately.
