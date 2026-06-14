---
id: session-storage
title: sessionStorage
aliases: [sessionStorage, session storage]
depth: foundation
related: [local-storage]
---

## Definition

**sessionStorage** is like [localStorage](concept:local-storage) but scoped to the browser tab — cleared when tab closes.

## Why it exists

Temporary per-tab state (multi-step form, wizard) without polluting global persistence.

## How it works

Same API as localStorage. Not shared across tabs of same origin.

## In practice

Tab-scoped UI; not for cross-tab sync — use localStorage or server session.
