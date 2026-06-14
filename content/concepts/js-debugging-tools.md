---
id: js-debugging-tools
title: JavaScript debugging tools
aliases: [debugging tools, Chrome DevTools, Firefox DevTools, DevTools, React DevTools, VS Code debugger, console methods]
depth: foundation
related: [js-profiling, source-map, call-stack]
---

## Definition

**JavaScript debugging tools** include browser DevTools (Sources, Console, Network), `debugger` statements, breakpoints, and [source maps](concept:source-map) for readable stack traces.

## Why it exists

Step through code, inspect scope, watch variables, and reproduce bugs without `console.log` sprawl.

## How it works

Set breakpoints in Sources tab; use conditional breakpoints; inspect [call stack](concept:call-stack) and async stacks for [Promises](concept:promise).

## Common confusion

Production minified code needs source maps to map stacks back to TypeScript. `debugger` pauses only when DevTools open.

## In practice

Combine with [profiling](concept:js-profiling) for performance issues; log structured errors in prod, debug locally with maps.
