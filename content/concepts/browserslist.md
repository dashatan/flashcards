---
id: browserslist
title: Browserslist
aliases: [browserslist config, .browserslistrc]
depth: intermediate
related: [babel, vite, core-web-vitals]
---

## Definition

**Browserslist** is a shared config (`package.json` or `.browserslistrc`) defining target browsers for Autoprefixer, Babel, and build tools.

## Why it exists

One source of truth for “which browsers we support” across the toolchain.

## How it works

```json
"browserslist": [">0.2%", "not dead", "not op_mini all"]
```

Tools query `caniuse` data to decide polyfills and CSS prefixes.

## Common confusion

Different tools may interpret queries differently — verify output bundles in CI.

## In practice

Align with product analytics on user browsers; tighten targets to reduce polyfill weight.
