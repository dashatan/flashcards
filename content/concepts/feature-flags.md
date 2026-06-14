---
id: feature-flags
title: Feature Flags
aliases: [feature flags, feature toggles]
depth: intermediate
related: [ci-cd, strangler-fig-pattern]
---

## Definition

**Feature flags** gate features behind runtime configuration — enable gradual rollout, A/B tests, or kill switches without redeploy.

## Why it exists

Safe delivery of risky changes; canary releases; decouple deploy from release.

## How it works

Tools: LaunchDarkly, Unleash, or config service. Wrap UI: `if (flags.newDashboard) ...`. Clean up flags after full rollout.

## In practice

Pair with [CI/CD](concept:ci-cd); avoid permanent flag accumulation (technical debt).
