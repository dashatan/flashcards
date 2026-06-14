---
id: react-list-virtualization
title: Virtualizing large lists
aliases: [large lists, list virtualization, virtualized list]
depth: intermediate
related: [react-key-prop, react-memo, tanstack-virtual]
---

## Definition

**List virtualization** renders only visible rows of huge lists — windowing DOM nodes to keep scroll performance acceptable.

## Why it exists

Thousands of DOM nodes cause slow mount, layout, and [re-renders](concept:react-re-render).

## How it works

Libraries ([TanStack Virtual](concept:tanstack-virtual), react-window) measure viewport, render slice + overscan, translate positions.

## Common confusion

Stable [keys](concept:react-key-prop) and item height assumptions matter — dynamic heights need measurement cache.

## In practice

Use for tables/feeds with 500+ rows; combine with [memo](concept:react-memo) on row components.
