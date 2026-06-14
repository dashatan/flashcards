---
id: babel
title: Babel
aliases: [Babel transpiler, "@babel/preset-env"]
depth: intermediate
related: [webpack, vite, es-modules, tree-shaking]
---

## Definition

**Babel** is a JavaScript **transpiler** that converts modern syntax (JSX, class fields, optional chaining) to targets browsers can run, often via presets and plugins.

## Why it exists

Ship modern syntax while supporting older browsers; enable experimental proposals before native support.

## How it works

Source → parse → transform plugins → generate code. `@babel/preset-env` uses [browserslist](concept:browserslist) to pick transforms.

## Common confusion

Babel does not bundle — pair with [Webpack](concept:webpack) or [Vite](concept:vite). [esbuild](concept:vite) can replace Babel for faster dev transpile.

## In practice

`@babel/preset-react` for JSX; `preset-typescript` strips types (no type checking).
