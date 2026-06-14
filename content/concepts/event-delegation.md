---
id: event-delegation
title: Event Delegation
aliases: [event delegation]
depth: intermediate
related: [dom, event-bubbling-capturing]
---

## Definition

**Event delegation** attaches one listener on a parent element and uses `event.target` to handle events from descendants.

## Why it exists

Fewer listeners for dynamic lists; new child elements work without rebinding.

## How it works

Relies on [event bubbling](concept:event-bubbling-capturing) from target to parent. Check `target` matches expected child (closest, matches).

## Common confusion

Not suitable if you stop propagation on children inconsistently. `pointer-events: none` affects targeting.

## In practice

List rows, tables, menus — alternative to per-row listeners in vanilla JS; React often uses direct handlers but pattern still applies.
