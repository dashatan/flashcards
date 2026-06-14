---
id: js-profiling
title: JavaScript profiling
aliases: [performance profiling, DevTools Performance, profile JavaScript]
depth: intermediate
related: [call-stack, reflow-repaint, memory-leak]
---

## Definition

**Profiling** measures where CPU time and memory go — browser DevTools Performance/Memory tabs, `console.time`, and sampling profilers.

## Why it exists

Optimize hot paths with data instead of guessing; find [memory leaks](concept:memory-leak) and long tasks.

## How it works

Record a Performance trace while reproducing jank; inspect flame chart, long tasks, and layout events ([reflow/repaint](concept:reflow-repaint)).

## Common confusion

Profiling in dev with HMR differs from production — validate with production builds and throttling.

## In practice

Fix largest bottlenecks first; pair with [Core Web Vitals](concept:core-web-vitals) field data when available.
