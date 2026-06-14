---
id: reflow-repaint
title: Reflow, Repaint, and Composite
aliases: [reflow, repaint, layout thrashing, composite layer]
depth: intermediate
related: [critical-rendering-path, dom]
---

## Definition

**Reflow** (layout) recalculates element geometry. **Repaint** redraws pixels without layout change. **Composite** updates GPU layers — cheapest for animation.

## Why it exists

Browser must know positions before painting; unnecessary layout is expensive.

## How it works

Reading `offsetWidth` then writing `style.width` in a loop causes **layout thrashing**. Animating `transform` and `opacity` often compositor-only.

## In practice

Batch DOM reads/writes; use `will-change` sparingly; DevTools Performance panel shows Layout vs Paint.
