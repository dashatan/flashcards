---
id: observability
title: Observability
aliases: [observability, monitoring, RUM]
depth: intermediate
related: [cross-cutting-concerns, core-web-vitals]
---

## Definition

**Observability** is measuring and understanding system behavior in production — errors, performance, logs, and user experience metrics.

## Why it exists

You cannot fix what you cannot see; ties code to real user impact.

## How it works

- Errors: Sentry, Datadog
- RUM: Web Vitals, session replay
- Logs: structured JSON, correlation IDs
- Alerts on SLO breaches

## In practice

Frontend owns client errors and [Core Web Vitals](concept:core-web-vitals) reporting; pair with backend traces.
