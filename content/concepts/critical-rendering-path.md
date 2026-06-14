---
id: critical-rendering-path
title: Critical Rendering Path
aliases: [critical rendering path, CRP]
depth: intermediate
related: [reflow-repaint, core-web-vitals]
---

## Definition

The **critical rendering path** is the sequence: HTML → DOM, CSS → CSSOM → render tree → layout → paint → composite.

## Why it exists

Understanding what blocks first paint guides performance optimization.

## How it works

Render-blocking CSS and sync JS in `<head>` delay first render. Optimize by minimizing blocking resources, inline critical CSS, defer JS.

## In practice

Interview diagram topic; ties to [LCP](concept:lcp) and TTFB improvements.
