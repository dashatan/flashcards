---
id: vite
title: Vite
aliases: [Vite bundler]
depth: intermediate
related: [hmr, es-modules, tree-shaking]
---

## Definition

**Vite** is a dev server and build tool using native [ES modules](concept:es-modules) in dev and Rollup for production bundles.

## Why it exists

Near-instant dev startup and [HMR](concept:hmr) vs traditional bundler-first dev ([webpack](concept:webpack)).

## How it works

Dev: serve modules directly; pre-bundle deps with esbuild. Prod: Rollup tree-shake and chunk.

## In practice

Default for new React/Vue apps; this flashcard app uses Vite + TanStack Router.
