---
id: cross-cutting-concerns
title: Cross-Cutting Concerns
aliases: [cross-cutting concerns]
depth: intermediate
related: [dependency-injection, observability, error-boundary]
---

## Definition

**Cross-cutting concerns** are functionality spanning many features — auth, logging, analytics, theming, error handling.

## Why it exists

Avoid duplicating auth checks and telemetry in every feature module.

## How it works

App shell: [error boundaries](concept:error-boundary), Context, middleware, layout wrappers, [observability](concept:observability) SDKs at root.

## In practice

Next.js middleware for auth; Sentry `beforeSend` globally; theme Provider once.
