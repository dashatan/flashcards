---
id: ci-cd
title: CI/CD
aliases: [CI/CD, continuous integration, continuous deployment]
depth: foundation
related: [feature-flags, blue-green-deployment]
---

## Definition

**CI/CD** automates building, testing, and deploying code on every change — continuous integration and (optional) continuous deployment.

## Why it exists

Catch bugs early; repeatable releases; reduce manual deploy risk.

## How it works

Pipeline: lint → typecheck → test → build → deploy preview → production promote. GitHub Actions, GitLab CI, Vercel.

## In practice

Frontend: Lighthouse CI, Playwright in pipeline, preview URLs per PR.
