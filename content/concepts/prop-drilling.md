---
id: prop-drilling
title: Prop Drilling
aliases: [prop drilling]
depth: intermediate
related: [react-context-api, react-composition]
---

## Definition

**Prop drilling** is passing props through many intermediate components that do not use them, only to reach a deep child.

## Why it exists

Not intentional — symptom of [one-way data flow](concept:one-way-data-flow) without better structure.

## How it works

Fixes: [composition](concept:react-composition) (children slots), Context, colocate state, or external store (Zustand).

## Common confusion

Drilling 1–2 levels is fine. Context for everything causes broad [re-renders](concept:react-re-render).

## In practice

Interview tradeoff question: Context vs composition vs Zustand vs TanStack Query for server data.
