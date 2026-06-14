---
id: concurrent-rendering
title: Concurrent Rendering
aliases: [concurrent mode, concurrent React]
depth: advanced
related: [react-fiber, react-suspense]
---

## Definition

**Concurrent rendering** lets React interrupt, pause, and resume rendering work instead of one blocking synchronous pass.

## Why it exists

Keep UI responsive during large updates; prioritize urgent user input over background rendering.

## How it works

Built on [React Fiber](concept:react-fiber). `startTransition` marks low-priority updates. [Suspense](concept:react-suspense) coordinates async UI.

## Common confusion

Concurrent features are opt-in via transitions/Suspense — not all renders are automatically concurrent in all cases.

## In practice

React 18 default architecture; ties to INP improvements and streaming.
