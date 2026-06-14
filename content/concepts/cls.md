---
id: cls
title: CLS (Cumulative Layout Shift)
aliases: [CLS, Cumulative Layout Shift, layout shift]
depth: intermediate
related: [core-web-vitals, reflow-repaint]
---

## Definition

**CLS** scores unexpected layout movement during page life — visual stability metric.

## Why it exists

Shifting buttons/links cause mis-clicks and poor UX.

## How it works

Causes: images without dimensions, dynamic ad injection, web fonts (FOIT/FOUT), animations affecting layout.

Fix: `width`/`height` or `aspect-ratio`, reserve space, `font-display: swap` with fallback metrics.

## Good threshold

≤ 0.1 at 75th percentile.

## In practice

Always size media elements; skeleton placeholders matching final layout.
