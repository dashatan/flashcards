---
id: react-server-components
title: React Server Components (RSC)
aliases: [Server Components, RSC, React Server Components]
depth: advanced
related: [server-side-rendering, hydration, react-server-actions]
---

## Definition

**React Server Components** run only on the server — their logic is not shipped to the client bundle; they can read databases and filesystem directly.

## Why it exists

Zero client JS for static/server logic; smaller bundles; close to data sources.

## How it works

Compose with Client Components (`"use client"`) for interactivity. Server Components render to a special format streamed to the client; they are **not** [hydrated](concept:hydration) like [SSR](concept:server-side-rendering) client trees.

## Common confusion

RSC ≠ SSR alone — SSR can still ship component JS for hydration. RSC removes server component JS from client.

## In practice

Next.js App Router default; know boundaries for interviews at senior level.
