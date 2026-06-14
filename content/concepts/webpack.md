---
id: webpack
title: Webpack
aliases: [Webpack bundler]
depth: intermediate
related: [vite, code-splitting, tree-shaking]
---

## Definition

**Webpack** is a module bundler that builds a dependency graph and emits optimized asset bundles.

## Why it exists

Legacy standard for complex apps — loaders, plugins, Module Federation.

## How it works

Entry → resolve imports → loaders transform (TS, CSS) → plugins optimize → output chunks.

Slower cold dev start than [Vite](concept:vite) because it bundles before serving.

## In practice

Still common in enterprise; know concepts even if daily driver is Vite.
