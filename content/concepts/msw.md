---
id: msw
title: MSW (Mock Service Worker)
aliases: [Mock Service Worker, MSW]
depth: intermediate
related: [react-testing-library, tanstack-query]
---

## Definition

**MSW** intercepts network requests in tests and development with realistic HTTP handlers — no real API needed.

## Why it exists

Test components that fetch without brittle `fetch` mocks; same handlers in dev and test.

## How it works

Define `rest.get("/api/user", () => res(ctx.json(user)))`. Browser uses Service Worker; Node uses interceptors.

## In practice

Pair with RTL for integration tests; share handlers with Storybook optional.
