---
id: coding-standards
title: Coding standards
aliases: [coding conventions, style guide, lint rules, readable code, code readable, clear naming]
depth: intermediate
related: [technical-debt, ci-cd, monorepo]
---

## Definition

**Coding standards** are team agreements on style, patterns, naming, and review expectations — often enforced by ESLint, Prettier, and CI.

## Why it exists

Consistent readable code, fewer bikeshedding debates, and safer refactors across large teams.

## How it works

ESLint rules (`eqeqeq`, hooks rules), Prettier formatting, ADR docs, and PR checklists.

## Common confusion

Standards should evolve — avoid cargo cult rules without rationale.

## In practice

Share configs via [monorepo](concept:monorepo) packages; document exceptions in [ADRs](concept:adr).
