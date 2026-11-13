---
hub: discovery
record_id: DISC-324
slug: infrastructure-incidents-cannot-be-linked-to-recent-changes
title: Why infrastructure incidents cannot be linked to the change that caused them
description: Most outages follow a change, yet many teams cannot see what changed first. How to build a change timeline that speeds up recovery.
lead: Most outages follow a change, yet many teams cannot see what changed before an incident. How scattered change records slow recovery, and how to build a change timeline that speeds it up.
category: Cloud, Infrastructure & Platform Operations
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Cloud, Infrastructure & Platform Operations
problem_domain: Cloud, Infrastructure & Platform Operations
problem_owner: IT operations or platform lead, with the head of software delivery
budget_owner: CTO or CIO
sources:
  - Google SRE - IT Service Management: Automate Operations | https://sre.google/sre-book/introduction/
  - DORA - DORA’s software delivery performance metrics | https://dora.dev/guides/dora-metrics-four-keys/
  - What Is AWS CloudTrail? - AWS CloudTrail | https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html
  - Activity Log in Azure Monitor - Azure Monitor | https://learn.microsoft.com/en-us/azure/azure-monitor/fundamentals/activity-log
related:
  - Why platform logs pile up without anyone knowing what they are for | /discovery/platform-logs-kept-without-a-clear-purpose/
  - Why platform teams still build every environment request by hand | /discovery/platform-teams-build-environment-requests-by-hand/
  - When monitoring produces more alerts than your team can triage | /discovery/monitoring-produces-more-alerts-than-teams-can-triage/
summary: Most outages follow a change, yet many teams cannot see what changed before an incident. How scattered change records slow recovery, and how to build a change timeline that speeds it up.
layout: plain
---
Something breaks on a Tuesday afternoon. Orders slow down, then fail. The first question anyone asks is "what changed?" Nobody can answer quickly. A developer deployed a release yesterday. Someone resized a database last week. A supplier applied a patch. A firewall rule was edited in the cloud console. Each change is recorded somewhere, or nowhere, and none of the records sit next to the monitoring that shows when the problem started. The team spends hours assembling a timeline before it can even begin to fix the cause.

When incidents cannot be connected to recent changes, recovery is slower, the same failures recur, and the business never learns which kinds of change are risky.

## The problem in plain language

Most incidents are triggered by something changing: code, configuration, infrastructure, data or a supplier's service. The fastest route to recovery is often to identify that change and reverse it. That requires a single, reliable view of what changed, when and by whom, aligned with the moment problems began.

In many businesses that view does not exist. Common signs include:

- changes are recorded in different places: deployment tools, cloud logs, tickets, chat and suppliers' emails;
- some changes, especially manual console edits, are not recorded in any system the team looks at;
- cloud activity logs expire before anyone investigates;
- incident reviews conclude "cause unknown" or rely on guesswork;
- the business cannot say what proportion of its changes cause problems.

## What you are actually trying to solve

People ask "what changed before the outage?", "how do we correlate deployments with incidents?", "how do we track changes to cloud infrastructure?" or "is there an audit log of cloud changes?" Underneath is a practical goal: when something breaks, see within minutes every change made to the affected systems in the preceding hours, and use that history over time to make changes safer.

Related problems appear at other layers. Untracked prompt and configuration edits are covered in [prompt and configuration changes made without version control](/discovery/prompt-and-configuration-changes-made-without-version-control/), and diagnosing failures across suppliers in [why integration incidents require several vendors to diagnose](/discovery/why-integration-incidents-require-several-vendors-to-diagnose/). This article focuses on infrastructure changes and incident timelines.

## Evidence and system mechanism

### Change is the main source of outages

The introduction to Google's [site reliability engineering book](https://sre.google/sre-book/introduction/) states that roughly 70 percent of outages Google's SRE teams have found are due to changes in a live system. Its recommended practices are progressive rollouts, quickly and accurately detecting problems, and rolling back changes safely when problems arise. All three depend on knowing which change is in play.

### Delivery performance is measured partly by failed changes

DORA, the research programme on software delivery performance, includes in its [key delivery metrics](https://dora.dev/guides/dora-metrics-four-keys/) the change fail rate, the ratio of deployments that require immediate intervention such as a rollback or hotfix, and failed deployment recovery time, the time taken to recover from such a deployment. Neither can be measured if incidents cannot be traced to the changes behind them.

### Cloud platforms record changes, but only for a while

Amazon Web Services explains that [CloudTrail](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html) records actions taken by users, roles and services, whether through the console, command line or APIs. Its event history provides a searchable record of the past 90 days of management events in a region; longer retention requires configuring trails or an event data store.

Microsoft's documentation on the [Azure Monitor activity log](https://learn.microsoft.com/en-us/azure/azure-monitor/fundamentals/activity-log) describes a similar record of create, update and delete operations on Azure resources, retained for 90 days by default. Exporting it to a log workspace allows it to be correlated with other log data, kept longer and alerted on, and Microsoft notes that the activity log is the only place that records who created a resource.

The raw material therefore usually exists. What is missing is collecting it, keeping it and placing it alongside monitoring and deployment records.

## Problem owner and why now

The problem owner is the IT operations or platform lead, with the head of software delivery where the business builds its own systems. The budget owner is usually the CTO or CIO.

The trigger is platform growth. With one system and two engineers, everyone knows what changed. With several cloud accounts, automated pipelines, suppliers and more people making changes, memory no longer works. Other triggers include a long or repeated outage, an audit asking for evidence of change control, or a customer contract with recovery-time commitments.

## Economic consequence

- **Longer outages:** time spent reconstructing what changed is time not spent recovering.
- **Repeat incidents:** without a confirmed cause, the same change pattern causes the same failure again.
- **Risk-averse change:** teams slow down all changes because they cannot tell which ones are dangerous.
- **Audit and compliance effort:** evidence of who changed what must be assembled by hand.
- **Supplier disputes:** without a timeline, responsibility for an outage is argued rather than shown.

## Root cause

- **Change records scattered:** deployments, cloud logs, tickets and supplier notices are kept separately.
- **Manual changes outside pipelines:** console edits bypass any process that would record them meaningfully.
- **Short default retention:** platform logs expire before investigations need them.
- **Monitoring without change context:** dashboards show symptoms but not the changes around them.
- **No incident review habit:** causes are not recorded, so patterns are never seen.

## Practical intervention

1. **Collect change sources in one place.** Send cloud activity logs, deployment events and infrastructure-code runs to a central log store, and keep them beyond the 90-day default.
2. **Mark changes on monitoring.** Add deployment and configuration-change markers to the dashboards teams use during incidents, so the timeline is visible at a glance.
3. **Route changes through pipelines.** Reduce manual console changes, so most changes carry an author, a description and a link to a ticket.
4. **Record supplier changes.** Log maintenance notices and supplier patches in the same change record.
5. **Start every incident with "what changed".** Make a change-timeline query the first step of the incident process.
6. **Measure change fail rate.** Track how many changes lead to incidents and how long recovery takes, and review the results monthly.

### An illustrative example

*Illustrative:* a Bloemfontein healthcare administrator suffers three slow-downs in two months and cannot explain any of them. It exports its cloud activity log to a central workspace with one year's retention, adds release markers to its monitoring dashboards and asks its hosting supplier to send maintenance notices into the same channel. At the next incident, the dashboard shows a database configuration change twelve minutes before the slowdown began. The change is reversed within half an hour, and a review identifies the setting that caused all three incidents.

## Diagnostic questions

- When an incident starts, how long does it take to list every change made in the previous 24 hours?
- Are cloud activity logs kept for longer than the default retention period?
- Do your monitoring dashboards show when deployments and configuration changes happened?
- What share of changes are made manually in consoles?
- Do incident reviews record the triggering change?
- Do you know your change fail rate?

## What good looks like

Every significant change, whether from a pipeline, a person or a supplier, lands in one searchable record kept long enough to be useful. Monitoring shows changes alongside symptoms. Incident response starts with the change timeline and often ends with a rollback. Over time, change fail rate is measured and falls, and the business changes systems more confidently, not less. Our insight on [why uncontrolled configuration changes create operational risk](/insights/why-uncontrolled-configuration-changes-create-operational-risk/) explains the governance side of the same issue.

## Where Mellorca fits

Mellorca's [managed digital operations](/services/managed-digital-operations/) service centralises cloud and deployment change records, extends retention, adds change markers to monitoring, and builds a change-first incident routine with simple measures of change risk.

## Method note

This article draws on Google's site reliability engineering book, DORA's published metrics guidance and documentation from AWS and Microsoft Azure. Retention defaults and features vary by platform and change over time. The example is illustrative and not based on a named client.
