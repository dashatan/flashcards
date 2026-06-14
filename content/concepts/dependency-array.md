---
id: dependency-array
title: Dependency Array
aliases: [dependency array, effect dependencies, exhaustive deps]
depth: intermediate
related: [use-effect, use-memo, use-callback]
---

## Definition

The **dependency array** is the second argument to [useEffect](concept:use-effect), [useMemo](concept:use-memo), and [useCallback](concept:use-callback) listing values that determine when to re-run.

## Why it exists

Effects must re-sync when props/state used inside them change; memoization must invalidate when inputs change.

## How it works

React compares deps with `Object.is` each render.

- `[]` — run once on mount (effects) or never recalculate until unmount.
- Omitted (effects only) — run after every render.

## Common confusion

Stale closures when deps are incomplete — ESLint `exhaustive-deps` warns. Including unstable inline objects defeats memoization.

## In practice

Include all reactive values from component scope; wrap functions in useCallback when needed as deps.
