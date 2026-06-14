---
id: debounce-throttle
title: Debounce and Throttle
aliases: [debounce, throttle, debouncing, throttling]
depth: intermediate
related: [closure, higher-order-function]
---

## Definition

**Debounce** delays execution until events stop for a wait period. **Throttle** limits execution to once per interval.

## Why it exists

Scroll, resize, and search input fire too often — protect [call stack](concept:call-stack) and network.

## How it works

- Debounce search: wait 300ms after last keystroke before API call.
- Throttle scroll: run handler max once per 100ms.

Both implemented with [closures](concept:closure) storing timers or last-run time.

## Common confusion

Debounce = “after pause”; throttle = “at most every N ms”. Pick based on UX (search vs scroll).

## In practice

Lodash `debounce`/`throttle`, `useDeferredValue` for search, passive scroll listeners.
