---
id: xss
title: XSS (Cross-Site Scripting)
aliases: [XSS, cross-site scripting]
depth: intermediate
related: [content-security-policy, dom]
---

## Definition

**XSS** is injecting malicious scripts into a page so they run in victims’ browsers — stealing cookies, session tokens, or DOM data.

## Why it exists

Attack vector when user-controlled strings become HTML or JS without sanitization.

## How it works

Vectors: `innerHTML`, unsanitized URL params reflected in page, compromised npm package. Defense: escape output, [CSP](concept:content-security-policy), `textContent` over `innerHTML`, framework auto-escaping (JSX).

## In practice

Never trust user HTML; sanitize with library if rich text required; HttpOnly cookies.
