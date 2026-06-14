---
id: blue-green-deployment
title: Blue-Green Deployment
aliases: [blue-green deployment, blue green deploy]
depth: intermediate
related: [ci-cd, feature-flags]
---

## Definition

**Blue-green deployment** runs two identical environments — deploy to idle (green), verify, then switch traffic from live (blue) for instant rollback.

## Why it exists

Zero-downtime releases and fast rollback without rebuilding.

## How it works

Load balancer or CDN switches traffic. Smoke tests on green before cutover. Keep blue warm for rollback.

## In practice

Common at infrastructure level; frontend static assets on CDN with versioned URLs.
