---
id: environment-variables
title: Environment variables
aliases: [env variables, process.env, import.meta.env]
depth: intermediate
related: [vite, webpack, ci-cd]
---

## Definition

**Environment variables** inject config at build or runtime — API URLs, feature toggles, secrets — without hardcoding in source.

## Why it exists

Different values per environment (dev/staging/prod) and keep secrets out of git.

## How it works

Vite: `import.meta.env.VITE_API_URL` (client must be `VITE_` prefixed). Node/Webpack: `process.env.NODE_ENV`.

## Common confusion

Client bundles expose `VITE_*` values — never put private keys in frontend env vars.

## In practice

`.env.local` for dev; CI injects production vars; validate required env at startup.
