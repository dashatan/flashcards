---
id: e2e-testing
title: End-to-end testing
aliases: [e2e testing, e2e tests, Playwright, Cypress]
depth: intermediate
related: [testing-pyramid, react-testing-library]
---

## Definition

**End-to-end tests** drive the real app in a browser (or WebDriver) validating full user flows — login, checkout, critical paths.

## Why it exists

Catch integration issues unit tests miss — routing, network, and real [DOM](concept:dom) together.

## How it works

Tools like Playwright/Cypress open pages, click, type, assert visibility, intercept network optionally.

## Common confusion

Slow and flaky if overused — follow [testing pyramid](concept:testing-pyramid): few critical e2e, more integration/unit.

## In practice

Smoke tests on CI for release; stable selectors (`data-testid`, roles) over CSS classes.
