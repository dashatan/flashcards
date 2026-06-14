---
id: es-modules
title: ES Modules (ESM)
aliases: [ESM, ES modules, import export]
depth: foundation
related: [tree-shaking, vite]
---

## Definition

**ES modules** are the standard `import`/`export` syntax for JavaScript modules — statically analyzable and natively supported in browsers and Node.

## Why it exists

Replace ad-hoc script tags and CommonJS for tree-shakeable, async-loadable modules.

## How it works

```js
import { fn } from "./utils.js";
export const x = 1;
```

`import` is hoisted; live bindings for exports. CJS `require` is synchronous legacy in Node.

## In practice

All modern bundlers and [Vite](concept:vite) dev server rely on ESM. `"type": "module"` in package.json.
