---
id: rail-performance-model
title: RAIL performance model
aliases: [RAIL model, RAIL, Response Animation Idle Load]
depth: intermediate
related: [inp, lcp, core-web-vitals, js-profiling]
---

## Definition

**RAIL** is a user-centric performance model: **Response** (<100ms input), **Animation** (60fps / 16ms frames), **Idle** (chunk work in 50ms slices), **Load** (interactive <5s).

## Why it exists

Frame performance goals around user perception, complementing [Core Web Vitals](concept:core-web-vitals).

## How it works

Prioritize input latency first, keep animations on compositor, defer non-critical work to idle periods, optimize critical path load.

## Common confusion

RAIL is a guideline, not a spec — pair with field metrics ([INP](concept:inp), [LCP](concept:lcp)).

## In practice

Break long tasks; use [web workers](concept:web-workers) for heavy idle work; measure with DevTools.
