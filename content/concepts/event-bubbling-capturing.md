---
id: event-bubbling-capturing
title: Event Bubbling and Capturing
aliases: [event bubbling, event capturing, propagation phases]
depth: foundation
related: [event-delegation, prevent-default]
---

## Definition

DOM events flow in three phases: **capturing** (window → target), **target**, then **bubbling** (target → window).

## Why it exists

Predictable order for nested handlers and delegation.

## How it works

Default listeners run in bubbling phase. `{ capture: true }` runs in capturing phase first.

`stopPropagation()` stops further propagation; `stopImmediatePropagation()` also blocks other listeners on same element.

## In practice

Modal overlays, nested buttons, understanding React synthetic event delegation to root.
