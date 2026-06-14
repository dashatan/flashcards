---
id: hmr
title: Hot Module Replacement (HMR)
aliases: [HMR, hot reload, hot module replacement]
depth: intermediate
related: [vite, webpack]
---

## Definition

**HMR** updates modules in the running app when source files change, preserving application state where possible.

## Why it exists

Fast feedback loop during development without full page reload.

## How it works

Bundler sends patch events; runtime swaps module factory and re-executes affected components. [Vite](concept:vite) updates only changed modules via WebSocket.

## Common confusion

HMR ≠ full refresh — some state survives; misconfigured HMR may need manual reload.

## In practice

Dev experience staple; production builds do not use HMR.
