---
id: css-selector-performance
title: CSS selector performance
aliases: [CSS selectors performance, expensive selectors]
depth: intermediate
related: [reflow-repaint, critical-rendering-path, dom]
---

## Definition

**CSS selector performance** matters when engines match rules against large [DOM](concept:dom) trees — overly universal or deep selectors increase style recalc cost.

## Why it exists

Heavy selectors contribute to [reflow/repaint](concept:reflow-repaint) and slow dynamic pages with frequent DOM changes.

## How it works

Prefer classes over `*` and long descendant chains (`div div div`). ID/class matching is fast; `:not()` complexity varies by engine.

## Common confusion

Micro-optimizing selectors rarely beats fixing layout thrashing — profile first.

## In practice

BEM/utility classes; scope styles in components; avoid `querySelector` on unindexed selectors in hot loops.
