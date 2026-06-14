---
id: island-architecture
title: Island Architecture
aliases: [islands architecture, Astro islands]
depth: advanced
related: [hydration, progressive-enhancement]
---

## Definition

**Island architecture** ships mostly static HTML with small interactive “islands” hydrated independently — minimal client JS.

## Why it exists

Content sites need little interactivity; avoid shipping React for entire page.

## How it works

Static shell + selective [hydration](concept:hydration) of widgets (cart button, comments). Popularized by Astro.

## Contrast

Full SPA hydrates whole app; [micro-frontends](concept:micro-frontends) split by team/domain at runtime.

## In practice

Marketing sites, docs, blogs with sprinkles of interactivity.
