---
id: git-branching
title: Git branching strategy
aliases: [branching strategy, trunk-based development, GitFlow]
depth: intermediate
related: [ci-cd, monorepo, feature-flags]
---

## Definition

A **branching strategy** defines how teams use branches — trunk-based (short-lived feature branches to main) vs GitFlow (develop/release branches).

## Why it exists

Balance integration frequency, release cadence, and [CI/CD](concept:ci-cd) automation.

## How it works

Feature branch → PR → CI checks → merge to main → deploy. Protect main; require reviews and green pipelines.

## Common confusion

Heavy GitFlow slows small teams; trunk-based needs strong CI and feature flags for incomplete work.

## In practice

Most frontend teams: short-lived branches + main always deployable + [feature flags](concept:feature-flags).
