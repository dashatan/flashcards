---
id: feature-based-architecture
title: Feature-Based Architecture
aliases: [feature folders, feature-based structure]
depth: intermediate
related: [api-layer, cross-cutting-concerns]
---

## Definition

**Feature-based architecture** organizes code by product feature (`features/auth`, `features/dashboard`) instead of technical type-only folders.

## Why it exists

Colocate everything a feature needs — components, hooks, tests, API — for faster navigation and team ownership.

## How it works

Shared `components/ui`, `lib/`, `hooks/` for cross-feature utilities. Each feature exports public API; internal files stay private to folder.

## In practice

Standard large React/Next.js structure; scales with [monorepo](concept:monorepo) packages per domain.
