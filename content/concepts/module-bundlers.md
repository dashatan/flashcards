---
id: module-bundlers
title: Module bundlers
aliases: [module bundler, bundlers, bundling]
depth: intermediate
related: [webpack, vite, es-modules, code-splitting]
---

## Definition

**Module bundlers** resolve [ES module](concept:es-modules) graphs, transform assets, and emit optimized files for browsers — [Webpack](concept:webpack), [Vite](concept:vite), Rollup, esbuild.

## Why it exists

Browsers need bundled/split output; bundlers apply [tree shaking](concept:tree-shaking), [code splitting](concept:code-splitting), and loaders.

## How it works

Entry → dependency graph → plugins/loaders (Babel, CSS) → chunks + asset hashes for cache busting.

## Common confusion

Dev server (Vite) vs production bundle (Rollup/esbuild) — different pipelines, same mental model.

## In practice

Choose Vite for modern DX; Webpack where legacy plugin ecosystem required.
