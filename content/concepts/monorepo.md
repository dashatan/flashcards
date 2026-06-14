---
id: monorepo
title: Monorepo
aliases: [monorepo, monolithic repository]
depth: intermediate
related: [feature-based-architecture, micro-frontends]
---

## Definition

A **monorepo** stores multiple packages/apps in one repository with shared tooling and atomic commits.

## Why it exists

Share UI library, types, and utils across apps without version sync hell.

## How it works

Tools: pnpm workspaces, Turborepo, Nx. Packages `packages/ui`, apps `apps/web`. Single CI pipeline with affected detection.

## Tradeoffs

Tooling complexity vs code reuse and coordinated releases.

## In practice

Common in design systems and multi-app product companies.
