---
id: request-animation-frame
title: requestAnimationFrame
aliases: [requestAnimationFrame, rAF]
depth: intermediate
related: [reflow-repaint, inp]
---

## Definition

**requestAnimationFrame** schedules a callback before the next browser repaint (~60fps).

## Why it exists

Smooth animations synced with display refresh; better than `setInterval` for DOM visual updates.

## How it works

```js
function tick() {
  update();
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);
```

Pauses in background tabs. Chains with [composite](concept:reflow-repaint)-friendly `transform` animations.

## In practice

Custom animations, scroll-linked effects; prefer CSS animations when possible.
