---
id: strict-mode
title: Strict Mode
aliases: [strict mode, "use strict"]
depth: foundation
related: [type-error]
---

## Definition

**Strict mode** is an opt-in (or automatic in ES modules) variant of JavaScript that forbids silent errors and unsafe features — undeclared assignments throw, `delete` on unconfigurable properties fails, etc.

## Why it exists

Catches bugs early and enables engine optimizations. All modern bundlers emit modules in strict mode by default.

## How it works

- Files with `import`/`export` are modules → always strict.
- `const` reassignment throws [TypeError](concept:type-error) in strict mode.
- `this` in plain function calls is `undefined` (not global object).

## Example

```js
"use strict";
function loose() {
  console.log(this); // undefined
}
loose();
```

## Common confusion

Strict mode is per **execution context**, not per file fragment in classic scripts. Classes and modules are always strict.

## In practice

Interview: “modules are always strict” explains `const` mutation errors without mentioning `use strict` explicitly.
