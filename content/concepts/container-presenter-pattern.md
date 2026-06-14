---
id: container-presenter-pattern
title: Container/Presenter Pattern
aliases: [container presenter, smart dumb components]
depth: intermediate
related: [custom-hooks, feature-based-architecture]
---

## Definition

**Container/Presenter** splits data/logic containers from pure UI presenters that only receive props.

## Why it exists

Separation of concerns before hooks — containers fetch and mutate; presenters render.

## How it works

Today largely replaced by [custom hooks](concept:custom-hooks) + dumb components: hook = container logic, component = presenter.

## In practice

Still valid mental model; interview “how do you structure data vs UI?”
