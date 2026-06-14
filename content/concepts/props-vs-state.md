---
id: props-vs-state
title: Props vs State
aliases: [props and state, React props, component state]
depth: foundation
related: [use-state, one-way-data-flow]
---

## Definition

**Props** are inputs from parent — read-only for the child. **State** is internal data the component owns and updates via [useState](concept:use-state)/reducer.

## Why it exists

Clear data ownership and [one-way data flow](concept:one-way-data-flow) from parent to child.

## How it works

Parent passes props down; child calls setters for its own state. Never mutate props directly.

## Common confusion

“Lift state up” moves state to common ancestor — props then carry values down, callbacks up.

## In practice

Interview staple; guides where to put form data, fetched data (often server state + hooks).
