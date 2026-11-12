---
hub: insights
record_id: INS-201
slug: who-watches-the-automations
title: Who watches the automations?
description: Why business-critical automations and AI agents need monitoring, failure handling, ownership and operational visibility after they go live.
lead: Building a workflow or AI agent is only the beginning. If an automation matters enough to run part of the business, it matters enough to monitor, own, recover and improve.
category: Business Automation
published_date: 2026-08-31
updated_date: 2026-08-31
eyebrow: Article
page_title: Who Watches the Automations? | Mellorca
tags:
  - Business Automation
  - Observability
  - Managed Operations
cta_label: Talk to Mellorca
cta_href: /contact/
side_title: Topics
side_text: Related service: [Managed Digital Operations](/services/managed-digital-operations/).
sources:
  - What is AI Observability? - IBM | https://www.ibm.com/think/topics/ai-observability
  - State of AI Engineering - Datadog | https://www.datadoghq.com/state-of-ai-engineering/
  - Google SRE monitoring ditributed system - sre golden signals | https://sre.google/sre-book/monitoring-distributed-systems/
related:
  - Is your business actually ready for AI agents? | /insights/is-your-business-actually-ready-for-ai-agents/
  - How to design automations that people can understand | /insights/how-to-design-automations-that-people-can-understand/
  - Why automation documentation matters | /insights/why-automation-documentation-matters/
---
Automation is usually sold through the happy path.

A form is submitted. A record is created. An approval is routed. A document is generated. An AI agent reads the request and updates the right system. The demonstration ends when the workflow succeeds.

Operations begin when it does not.

The API times out. The data is incomplete. An access token expires. The model provider hits a rate limit. A record already exists. The customer enters something unexpected. One step succeeds and the next fails. The automation technically completes but produces the wrong business outcome.

> The operational question is not only "Can this be automated?" It is "How will we know whether the automation is healthy tomorrow?"

## Automation creates a new operational dependency

When a person performs a task, failure is often visible. The person notices the missing information, asks a question or tells someone the system is unavailable.

An unattended workflow can fail differently. It can stop quietly. It can retry repeatedly. It can produce duplicate actions. It can complete with partial information. It can consume increasing amounts of API or AI capacity while still appearing to run.

That changes the nature of the system. The business has not merely removed a manual task. It has introduced a software dependency that now takes part in operations. The financial side of quiet failure is covered in [the financial impact of silent automation failures](/impact/silent-automation-failures-financial-impact/).

### A worked example

A Johannesburg training provider automates enrolments: a web form creates a CRM record, generates an invoice in the accounting system and emails joining instructions. It works for months. Then the accounting platform changes its authentication, the token expires, and invoice creation fails. The CRM step still succeeds, so the workflow dashboard shows mostly green. Learners receive joining instructions but no invoices. Finance notices three weeks later, when the debtors report looks unusually light.

Nothing exotic happened. A routine dependency changed, and nobody was watching the outcome that mattered: was every enrolment invoiced?

## What observability means in business automation

Observability is a technical term, but the business requirement is simple: can the organisation understand what the automated system is doing from the evidence it produces?

For ordinary workflow automation, that usually means being able to see:

- whether the workflow ran;
- whether each critical step succeeded;
- how long execution took;
- which records were affected;
- what errors occurred;
- whether retries happened;
- whether human intervention is required; and
- who owns the response.

For AI agents, additional signals matter: model usage, tool calls, decision paths, costs, latency, response quality and the actions taken in external systems.

IBM's explanation of [AI observability](https://www.ibm.com/think/topics/ai-observability) highlights this broader telemetry requirement. Alongside conventional logs, metrics and traces, it points to token usage, model drift, response quality and agent-specific logs covering user interactions, model calls, tool execution and decision pathways. It also notes the core difficulty: with generative AI, identical inputs can produce different responses. Agent observability is therefore an ongoing operating capability rather than a one-time deployment concern.

## Production AI is exposing the reliability problem

The need for operational control is not theoretical. Datadog's [2026 State of AI Engineering](https://www.datadoghq.com/state-of-ai-engineering/) research, based on production telemetry, found that AI workloads run into real capacity and reliability constraints. In its February 2026 sample, 5% of LLM call spans reported an error, and 60% of those errors were caused by exceeded rate limits. In March 2026 the error share was 2%, with rate limits accounting for almost a third.

The exact failure rate will vary by architecture and provider. The important point is that production AI behaves like production software: it has dependencies, resource limits, latency, retries and failure modes.

An agent that can update a CRM or approve a routine action therefore needs more than a good prompt. It needs operational controls.

## Every important automation needs five things

### 1. An owner

Someone must be accountable for the workflow's health and know what business outcome it supports. "The automation platform" cannot own an incident.

### 2. Meaningful monitoring

Monitoring should focus on business-critical signals, not produce an endless stream of technical noise. A failed optional notification is different from a workflow that silently stops creating customer orders.

### 3. A failure path

Define what should happen when the automated route cannot continue. Does it retry, create an exception record, notify an owner or hand the case to a person? The design of that route is covered in [why every automation needs a failure path](/insights/why-every-automation-needs-a-failure-path/).

### 4. Traceability

The organisation should be able to reconstruct what happened. This becomes especially important when AI agents can choose tools or actions dynamically.

### 5. A change process

Automations depend on external systems. Fields change. APIs change. Credentials expire. Business rules evolve. The workflow must be maintainable after launch.

## Monitoring is not the same as alerting

A common failure in operational design is to send an alert for everything. That simply turns the automation problem into an attention problem.

Good monitoring distinguishes between information, degradation and incidents. It can aggregate low-level errors, surface patterns and escalate only when the business outcome is threatened or intervention is necessary. Google's guidance on [monitoring distributed systems](https://sre.google/sre-book/monitoring-distributed-systems/) makes a similar point: an alert that interrupts a person should be actionable, urgent and need human judgement, and email alerts in particular are easily overrun with noise. It also separates symptoms, what is broken, from causes, why it is broken. In business automation, the symptom to watch is usually the outcome, such as orders not invoiced.

The objective is not to make people watch dashboards all day. It is to make abnormal behaviour visible soon enough to act.

## AI agents require a wider definition of "worked"

A deterministic workflow is often easier to evaluate: the record was created or it was not. An AI agent can complete technically while still making a poor decision.

That means operational measures may need to include outcome quality as well as system health. Did the agent choose the correct tool? Did it follow the right policy? Was a human approval bypassed? Did its cost increase? Did response quality drift after a model change?

This is why the emerging idea of "human on the loop" is useful. The person is not manually executing every step, but remains responsible for oversight, policy and intervention when the automated system leaves acceptable bounds.

## From project automation to managed automation

There is an important commercial distinction between building an automation and operating one.

Build work focuses on requirements, design, configuration, testing and launch. Operating work includes monitoring, incident response, changes, documentation, dependency management, cost visibility and continuous improvement.

Businesses often budget for the first and assume the second will somehow happen. As automation becomes more business-critical, that assumption becomes fragile. When something does break, the response is often improvised, the pattern described in [automation incident response that is improvised](/discovery/automation-incident-response-improvised/).

## What better looks like

A mature automation environment is boring in the right ways. Important workflows have owners. Failures are visible. Exception queues exist. Documentation explains dependencies. Changes are controlled. Recurring issues are fixed rather than repeatedly patched. AI activity can be traced well enough to investigate unexpected outcomes.

The organisation does not need to watch every workflow continuously. It needs a system that makes the right things observable and routes intervention to the right people. Agreeing how quickly each workflow must be restored helps set that bar, as discussed in [what service levels make sense for business-critical automations](/insights/what-service-levels-make-sense-for-business-critical-automations/).

### What to do first

1. List the automations that touch customers, money or compliance.
2. Name an owner for each, and record it where the team can see it.
3. For each, define one outcome check, such as every enrolment has an invoice, and run it daily.
4. Route failures to a shared exception queue, not a personal inbox.
5. Review the queue weekly and fix recurring causes rather than re-running items.

## When to act

If your team learns about automation failures from customers, nobody can explain who owns a workflow, integrations routinely break after platform changes, AI costs are difficult to attribute, or staff are manually checking whether automations ran, the business has moved beyond an implementation problem.

It has an operational-control problem.
