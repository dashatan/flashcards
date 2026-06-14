---
id: use-layout-effect
title: useLayoutEffect
aliases: [useLayoutEffect hook]
depth: intermediate
related: [use-effect, reflow-repaint]
---

## Definition

**useLayoutEffect** fires synchronously after DOM mutations but **before** the browser paints — blocking visual update.

## Why it exists

Measure or mutate DOM when flicker would occur if you waited for [useEffect](concept:use-effect).

## How it works

Same signature as `useEffect`. Runs before user sees frame — use for layout measurements, scroll sync, tooltip positioning.

## Common confusion

Blocks paint → hurts INP if overused. Default to `useEffect`; use layout effect only when you see visual flicker.

## In practice

Read `getBoundingClientRect`, set scroll position, sync canvas size before paint.
