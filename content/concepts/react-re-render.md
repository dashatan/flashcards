---
id: react-re-render
title: React Re-render
aliases: [re-render, React rendering, component re-render]
depth: intermediate
related: [virtual-dom, react-batching, use-state]
---

## Definition

A **re-render** is when React calls a component function again to produce a new element tree because inputs changed or a parent re-rendered.

## Why it exists

UI must reflect current props, state, and context.

## How it works

Triggers: [useState](concept:use-state)/[useReducer](concept:use-reducer) dispatch, parent re-render, [context](concept:use-context) value change, store subscription. Re-render ≠ DOM update — [reconciliation](concept:reconciliation) may skip DOM changes.

## Common confusion

Child re-renders when parent renders even if props unchanged — unless memoized. Context updates re-render all consumers.

## In practice

Profile with React DevTools; optimize with composition, memo, stable props — not premature everywhere.
