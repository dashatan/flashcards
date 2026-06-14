---
id: reconciliation
title: Reconciliation
aliases: [React reconciliation, diffing algorithm]
depth: intermediate
related: [virtual-dom, react-key-prop, react-fiber]
---

## Definition

**Reconciliation** is React’s process of comparing the new element tree with the previous one to determine minimal DOM updates.

## Why it exists

Avoid full page rewrites when only part of the UI changed.

## How it works

Heuristics: same component type → update props; different type → replace subtree; list items matched by [key](concept:react-key-prop). Implemented by [React Fiber](concept:react-fiber) as incremental work.

## Common confusion

Reconciliation is not full tree diff O(n³) — React assumes level-wise comparison with keys for lists.

## In practice

Explain list reorder bugs, why unstable keys break state, and performance of large trees.
