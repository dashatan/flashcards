---
id: cookies
title: Cookies
aliases: [HTTP cookies, browser cookies]
depth: foundation
related: [local-storage, cors, xss]
---

## Definition

**Cookies** are small key-value strings the browser stores and sends with HTTP requests to matching domains.

## Why it exists

Session authentication, preferences, analytics — server-readable client storage.

## How it works

~4KB per cookie. Flags: `HttpOnly` (no JS access), `Secure` (HTTPS), `SameSite` (CSRF mitigation). Unlike [localStorage](concept:local-storage), sent automatically on requests.

## In practice

Session tokens with HttpOnly + Secure; know GDPR/consent for tracking cookies.
