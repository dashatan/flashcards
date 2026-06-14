---
id: testing-pyramid
title: Testing Pyramid
aliases: [test pyramid, testing strategy, unit tests, integration tests, e2e tests, unit integration e2e]
depth: foundation
related: [react-testing-library, msw]
---

## Definition

The **testing pyramid** recommends many fast **unit** tests, fewer **integration** tests, and few **e2e** tests — each layer costs more but covers more realism.

## Why it exists

Balance speed, maintenance, and confidence.

## How it works

- Unit: pure functions, hooks with mocks.
- Integration: component + user flow (RTL).
- E2E: Playwright/Cypress full browser journeys.

## In practice

Interview answer for “how do you test React?” — behavior over implementation.
