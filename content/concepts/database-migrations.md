---
id: database-migrations
title: Database migrations
aliases: [DB migrations, schema migrations, migration scripts]
depth: intermediate
related: [ci-cd, api-layer, technical-debt]
---

## Definition

**Database migrations** are versioned scripts that evolve schema/data safely — up/down steps applied in order across environments.

## Why it exists

Reproducible schema changes tied to app releases; avoid manual prod SQL drift.

## How it works

Tools (Prisma, Flyway, Knex) track applied migrations; CI runs migrations before/at deploy; backward-compatible steps for zero-downtime when possible.

## Common confusion

Frontend devs still need basics — API contracts depend on schema; coordinate breaking changes.

## In practice

Expand-contract pattern for column renames; never edit applied migration history in shared envs.
