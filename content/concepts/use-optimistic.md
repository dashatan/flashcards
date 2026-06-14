---
id: use-optimistic
title: useOptimistic
aliases: [useOptimistic, optimistic UI]
depth: intermediate
related: [react-server-actions, tanstack-query]
---

## Definition

**useOptimistic** shows updated UI immediately while an async action runs, reverting if the action fails.

## Why it exists

Responsive mutation UX (likes, todos, cart) without waiting for network round-trip.

## How it works

React 19 hook wrapping state with optimistic layer during pending server action or mutation.

## Common confusion

Distinct from TanStack Query optimistic updates — same UX pattern, different API.

## In practice

Social actions, inline edits, shopping cart — always handle rollback errors visibly.
