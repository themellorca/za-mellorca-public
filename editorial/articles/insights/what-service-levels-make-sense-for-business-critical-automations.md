---
hub: insights
record_id: INS-220
slug: what-service-levels-make-sense-for-business-critical-automations
title: What service levels make sense for business-critical automations?
description: How to define practical service levels for business-critical automations using outcomes, reliability targets, recovery expectations, monitoring and ownership.
lead: If an automation has become part of how the business operates, “it usually works” is not a useful reliability standard. The right service level starts with the business outcome, not a generic uptime percentage.
category: Business Automation
published_date: 2026-09-02
updated_date: 2026-10-02
eyebrow: Article
page_title: What Service Levels Make Sense for Business-Critical Automations? | Mellorca
tags:
  - Service Levels
  - Automation Reliability
  - Operations
cta_label: Start a conversation
cta_href: /contact/
side_title: Topics
sources:
  - Google SRE: Embracing Risk | https://sre.google/sre-book/embracing-risk/
  - Google SRE Workbook: Example Error Budget Policy | https://sre.google/workbook/error-budget-policy/
  - Google SRE Workbook: SLO Documents | https://sre.google/workbook/slo-document/
related:
  - How silent automation failures damage operations | /insights/how-silent-automation-failures-damage-operations/
  - Is your business actually ready for AI agents? | /insights/is-your-business-actually-ready-for-ai-agents/
  - Why automation documentation matters | /insights/why-automation-documentation-matters/
---
Automations often begin as convenience tools. A workflow copies information, sends a notification or moves a request to the next stage. Over time, more work depends on it. The business stops performing the old manual check because the automation is expected to run.

At that point, reliability becomes an operating requirement. The problem is that many organisations still manage the workflow as though it were a small script. There may be no agreed definition of success, no response expectation, no recovery target and no owner watching whether failures are accumulating.

> A service level is useful only when it describes the reliability the business outcome actually needs.
>
> A service level is useful only when it describes the reliability the business outcome actually needs.

## Start with the consequence of failure

Not every automation deserves the same level of engineering or support. A workflow that posts a weekly internal summary can tolerate more delay than one that routes paid customer orders, updates financial records or provisions access for a new employee.

Classify the automation by consequence. Ask what happens if it fails for five minutes, one hour, one business day or several days. Consider customer impact, financial impact, compliance exposure, operational backlog and the effort required to reconstruct missed work.

A simple way to run this exercise is to sit with the people who depend on the workflow and walk through those four time horizons. For an online retailer's order-routing automation, five minutes might be invisible, one hour might delay same-day dispatch, one day might mean missed courier collections and angry customers, and several days might mean manual capture of hundreds of orders. For a weekly sales summary, even several days may only be an inconvenience.

This creates a rational basis for investment. Reliability should be proportional to business criticality rather than the technical sophistication of the workflow.

## Define the service in terms of outcomes

Traditional infrastructure often measures availability: was the service reachable? Business automation needs a wider definition. A workflow can technically run while still producing the wrong result, skipping records or leaving a downstream system incomplete.

A useful service definition may include several measures:
- **Execution success:** the percentage of eligible workflow instances that complete correctly.
- **Timeliness:** how quickly work must begin or finish after the trigger occurs.
- **Correctness:** whether the intended business state was actually reached.
- **Recovery:** how quickly failed or delayed work must be restored.
- **Backlog visibility:** whether stuck work can be identified before it becomes customer impact.


The point is not to create a complicated scorecard. It is to measure what the business would notice if the automation stopped doing its job.

Google's SRE book, in its chapter on [embracing risk](https://sre.google/sre-book/embracing-risk/), describes request-based availability as the proportion of successful requests over a period, rather than simple uptime. That framing suits business automation well: the natural unit is the transaction, order, invoice or request, not the minutes the platform was online.

## Use targets, not promises you cannot support

Google's Site Reliability Engineering guidance distinguishes service-level objectives from vague reliability expectations and uses error budgets to make trade-offs explicit. The same principle can be adapted to business automation without pretending every workflow is an internet-scale service.

For a critical workflow, the organisation might define an objective such as: 99.5% of eligible transactions complete correctly within fifteen minutes over a rolling month, with priority failures acknowledged within thirty minutes during supported hours. Another workflow may only need same-business-day completion.

Do not choose 99.9% because it sounds professional. Higher targets require better monitoring, redundancy, support coverage, testing and recovery mechanisms. Reliability has a cost. The SRE material makes the same point: extreme reliability is expensive, and a target should match what users and the business actually need rather than chase perfection.

### A worked example of an error budget

An error budget is simply 100% minus the objective. Suppose a distributor's order-to-warehouse automation handles around 2,000 eligible orders a month and the objective is 99.5% correct within fifteen minutes. The budget is 0.5%, or about ten orders a month that may be late or need intervention. If eleven orders fail in the first week, the business knows immediately that the workflow is not meeting its agreed standard, rather than discovering it through customer complaints at month-end. The figures here are illustrative; the method is what matters.

Google's [example error budget policy](https://sre.google/workbook/error-budget-policy/) shows how budgets can drive decisions. In that example, when the budget is exhausted the team pauses non-urgent changes until reliability recovers, and a single incident that consumes more than a fifth of the budget triggers a mandatory post-incident review. A smaller business does not need the same machinery, but a version of the rule is useful: if a critical automation exceeds its budget, stop adding features to it and fix the cause.

## Separate detection from recovery

An automation can fail for hours if nobody knows it failed. This is why service levels must include detection. A useful operating model defines how quickly a meaningful failure should become visible and how quickly somebody should begin responding.

The article [Who Watches the Automations?](/insights/who-watches-the-automations/) makes the broader observability case. Service levels add a sharper question: once the failure is visible, what response does the business actually require?

For important automations, define at least four time expectations: detection, acknowledgement, containment and restoration. These do not need to be contractual SLAs. They can be internal operating objectives that guide support priorities.

## Design for retries without creating duplicate work

Recovery is not simply "run it again". A retry can duplicate invoices, notifications, tasks or downstream records if the workflow was only partially successful. Service-level design therefore depends on technical controls such as idempotency, correlation IDs, checkpointing and reconciliation. These are explained in [how to design retries without creating duplicate work](/insights/how-to-design-retries-without-creating-duplicate-work/).

The reliability target should be supported by a recovery path that is safe. If failed work has to be reconstructed manually, document the procedure and ensure the necessary audit data is retained. Every critical automation also needs a defined route for work it cannot complete, as argued in [why every automation needs a failure path](/insights/why-every-automation-needs-a-failure-path/).

## Give criticality levels different support models

A practical approach is to create a small number of tiers rather than negotiate a unique standard for every automation.

| Tier | Typical consequence | Support model |
|---|---|---|
| Tier 1: business critical | Direct customer, revenue, financial or control impact | Active monitoring, rapid escalation, tested recovery, named primary and backup owners |
| Tier 2: operationally important | Material internal delay if unavailable | Monitored during business hours, documented recovery and ownership |
| Tier 3: convenience | Limited consequence | Handled through routine support without immediate intervention |

The exact names do not matter. The discipline does. Criticality should influence how much engineering, monitoring and support the workflow receives. The trade-off is cost: each Tier 1 automation carries ongoing support effort, so the tier should be earned by consequence, not assigned because a team feels its workflow is important.

## Measure the service level from the user's side

Automation platforms may report that a run succeeded, but the customer or employee may still be waiting because a downstream step did not occur. Measure the workflow as close as possible to the business outcome.

For example, an order-processing automation should not be judged only by whether the orchestration flow returned a success status. Check whether the order was created correctly, whether downstream fulfilment received it and whether exceptions were surfaced. The gap between these two views is the subject of [why integration monitoring misses business completion](/discovery/why-integration-monitoring-misses-business-completion/).

This is the difference between platform health and operational health.

## Write it down

Google's [example SLO document](https://sre.google/workbook/slo-document/) is a useful template even for a small business. It records the service description, the indicators and objectives, the measurement window, the rationale for each target, the error budget, known measurement caveats, and the people who approved it, along with a date to revisit it. For a business automation, one page covering the same headings is enough.

## Review targets as the business changes

A workflow that begins as a low-volume internal convenience can become critical as usage grows. Conversely, an old automation may become less important after a process changes. Review service levels when transaction volume, customer dependency, operating hours or architecture changes.

The target should describe the current business dependency, not the importance the workflow had when it was first built.

## What to do first
1. List the automations the business would notice within a day if they stopped.
2. Assign each a tier and a named owner.
3. For Tier 1 workflows, write a one-page objective covering success, timeliness, detection and recovery.
4. Check that failures for those workflows reach a monitored queue, not a single inbox.
5. Review results monthly and adjust targets based on what actually happened.


## What better looks like

A mature automation capability knows which workflows are critical, what success means for each one, how quickly failures must be detected and recovered, and who owns the response. Reliability expectations are explicit enough to guide engineering and support decisions without pretending every workflow needs maximum uptime.

If the business cannot answer what happens when a critical automation fails tonight, the missing control is not another dashboard. It is an operating agreement around the automation. Mellorca's [Managed Digital Operations](/services/managed-digital-operations/) covers monitoring, support, change and recovery disciplines for important workflows, while [Business Automation & AI Workflows](/services/business-automation-ai-workflows/) designs reliability into new automations from the start.
