---
id: tree-shaking
title: Tree Shaking
aliases: [tree shaking, dead code elimination]
depth: intermediate
related: [es-modules, vite, webpack]
---

## Definition

**Tree shaking** removes unused exports from production bundles when modules are statically analyzable.

## Why it exists

Smaller JS payloads — only ship code you import.

## How it works

Requires [ES modules](concept:es-modules) `import`/`export`. Side-effect-free packages (`"sideEffects": false` in package.json). Bundler marks unreachable exports and drops them.

## Common confusion

CJS `require` trees shake poorly. Barrel files can accidentally import entire libraries.

## In practice

Audit bundle analyzer; import `lodash-es` per function; check library side effects.
