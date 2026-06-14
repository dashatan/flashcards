---
id: react-fiber
title: React Fiber
aliases: [Fiber, React Fiber architecture]
depth: advanced
related: [reconciliation, concurrent-rendering]
---

## Definition

**React Fiber** is React’s reconciliation engine — a linked list of work units representing components and their work to do.

## Why it exists

Enables pausable/resumable rendering, priorities, and [concurrent rendering](concept:concurrent-rendering) features (Suspense, transitions).

## How it works

Each fiber node tracks component type, props, state, and child/sibling links. The scheduler can interrupt low-priority fiber work for urgent updates (input).

## Common confusion

Fiber is internal — you don’t use it directly, but it explains why React 18 can keep UI responsive during heavy renders.

## In practice

Senior interview topic linking reconciliation, lanes, and time-slicing.
