---
id: rules-of-hooks
title: Rules of Hooks
aliases: [rules of hooks, hook rules]
depth: foundation
related: [use-state, custom-hooks]
---

## Definition

The **rules of hooks** require: (1) only call hooks at the top level — not in loops/conditions; (2) only call from React functions or [custom hooks](concept:custom-hooks).

## Why it exists

React matches hook calls to internal state by **call order** each render — conditional hooks break that mapping.

## How it works

Violations cause “Rendered more hooks than previous render” or wrong state attached to wrong hook.

## Common confusion

ESLint `react-hooks/rules-of-hooks` catches many issues. Custom hooks can call other hooks — components cannot call hooks conditionally.

## In practice

Non-negotiable in all React code; explains why early return before hooks is invalid.
