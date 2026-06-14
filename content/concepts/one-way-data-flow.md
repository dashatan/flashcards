---
id: one-way-data-flow
title: One-Way Data Flow
aliases: [unidirectional data flow, data flows down]
depth: foundation
related: [props-vs-state, lifting-state-up]
---

## Definition

**One-way data flow** means data passes from parent to children via props; children notify parents via callback props — not by mutating parent data directly.

## Why it exists

Predictable debugging and clear ownership of who can change what.

## How it works

```
Parent state → props → Child
Child event → callback → Parent setState
```

Global stores (Redux, Zustand) still follow dispatch → new state → render.

## Common confusion

Context flows down too — still one direction for updates via Provider value changes.

## In practice

Contrast with two-way binding in some frameworks; foundation for React mental model.
