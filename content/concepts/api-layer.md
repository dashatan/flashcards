---
id: api-layer
title: API Layer
aliases: [API layer, data access layer, fetch wrapper]
depth: intermediate
related: [tanstack-query, cors]
---

## Definition

An **API layer** centralizes HTTP calls — typed clients, error handling, auth headers — separate from UI components.

## Why it exists

Single place for retries, logging, base URL, and [CORS](concept:cors)-related config; components stay thin.

## How it works

`lib/api/client.ts` + feature hooks using [TanStack Query](concept:tanstack-query). Map responses to view models in selectors/mappers.

## In practice

Never fetch directly inside presentational components; colocate query hooks per domain.
