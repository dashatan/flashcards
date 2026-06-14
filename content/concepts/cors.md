---
id: cors
title: CORS
aliases: [Cross-Origin Resource Sharing, CORS]
depth: intermediate
related: [cookies, api-layer]
---

## Definition

**CORS** is a browser security mechanism blocking cross-origin HTTP requests unless the server sends permissive `Access-Control-*` headers.

## Why it exists

Prevent malicious sites from reading private API responses using user cookies (with caveats).

## How it works

Browser sends preflight `OPTIONS` for non-simple requests. Server responds `Access-Control-Allow-Origin`. Cannot be “disabled” from client — fix server or dev proxy.

## In practice

Common dev headache; production fix is server config, not frontend hack.
