---
id: inp
title: INP (Interaction to Next Paint)
aliases: [INP, Interaction to Next Paint, First Input Delay]
depth: intermediate
related: [core-web-vitals, event-loop, web-workers]
---

## Definition

**INP** measures responsiveness — latency from user interaction to the next frame paint (replaced FID in Core Web Vitals).

## Why it exists

Captures overall interaction lag, not just first input.

## How it works

Reduce long tasks on main thread: break up JS, [Web Workers](concept:web-workers), defer work, optimize handlers, [React batching](concept:react-batching).

## Good threshold

≤ 200ms at 75th percentile.

## In practice

Profile long tasks in Chrome Performance; watch [useLayoutEffect](concept:use-layout-effect) overuse.
