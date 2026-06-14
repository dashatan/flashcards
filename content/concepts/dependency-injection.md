---
id: dependency-injection
title: Dependency Injection (DI)
aliases: [dependency injection, DI in React]
depth: intermediate
related: [react-context-api, api-layer]
---

## Definition

**Dependency injection** supplies dependencies (API client, logger, config) from outside rather than hard-coding imports inside modules.

## Why it exists

Testability with mocks, swap implementations per environment, clear boundaries.

## How it works

In React: Context providers (`ApiProvider`), prop injection, or module factories. Tests wrap with mock providers.

## In practice

`createApiClient(baseUrl)` injected via Context; MSW replaces network in tests.
