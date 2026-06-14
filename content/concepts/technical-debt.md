---
id: technical-debt
title: Technical Debt
aliases: [technical debt, tech debt]
depth: foundation
related: [adr, strangler-fig-pattern]
---

## Definition

**Technical debt** is the implied cost of shortcuts — outdated patterns, missing tests, tangled modules — that slow future work.

## Why it exists

Teams trade quality for speed; debt accumulates when shortcuts aren’t repaid.

## How it works

Manage: track in backlog, allocate ~10–20% sprint capacity, boy scout rule (leave code cleaner), prevent new debt via reviews.

## In practice

Senior interviews: balance delivery vs refactoring; use [ADRs](concept:adr) for intentional tradeoffs.
