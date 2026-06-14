---
id: strangler-fig-pattern
title: Strangler Fig Pattern
aliases: [strangler fig, strangler pattern]
depth: intermediate
related: [technical-debt, micro-frontends]
---

## Definition

The **strangler fig pattern** incrementally replaces a legacy system by routing slices of traffic/features to the new implementation until the old system is “strangled.”

## Why it exists

Avoid risky big-bang rewrites; deliver value while migrating.

## How it works

Proxy or router sends `/new-feature` to new stack, rest to legacy. Expand coverage over releases.

## In practice

Legacy React class app → hooks + new routes; old SPA → Next.js piece by piece.
