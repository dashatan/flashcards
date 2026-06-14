---
id: micro-frontends
title: Micro-Frontends
aliases: [micro frontends, MFE]
depth: advanced
related: [monorepo, island-architecture]
---

## Definition

**Micro-frontends** split a frontend into independently deployable apps by domain, composed at runtime in one shell.

## Why it exists

Team autonomy, independent release cycles for large orgs.

## How it works

Integration: Module Federation, single-spa, iframes. Challenges: shared dependencies, consistent UX, routing, performance overhead.

## In practice

Senior architecture interview topic — compare to [monorepo](concept:monorepo) with single deploy vs true MFE.
