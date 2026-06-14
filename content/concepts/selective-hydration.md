---
id: selective-hydration
title: Selective Hydration
aliases: [selective hydration]
depth: advanced
related: [hydration, streaming-ssr]
---

## Definition

**Selective hydration** prioritizes hydrating interactive regions first (often based on user interaction) instead of the full page sequentially.

## Why it exists

Improve time-to-interactive and [INP](concept:inp) on large SSR pages.

## How it works

React 18 schedules hydration for components users interact with while other regions hydrate in background.

## In practice

Senior React 18+ interview topic linked to streaming and Core Web Vitals.
