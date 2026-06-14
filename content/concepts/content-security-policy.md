---
id: content-security-policy
title: Content Security Policy (CSP)
aliases: [CSP, Content Security Policy]
depth: intermediate
related: [xss]
---

## Definition

**CSP** is an HTTP header restricting which scripts, styles, images, and connections the browser may load — mitigating [XSS](concept:xss).

## Why it exists

Even if attacker injects script tag, CSP blocks execution unless allowlisted.

## How it works

`Content-Security-Policy: script-src 'self' https://cdn.example.com`

Use nonces/hashes for inline scripts in strict policies.

## In practice

Production security requirement; report-uri for violations monitoring.
