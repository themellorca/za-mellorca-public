---
hub: insights
record_id: INS-379
slug: which-business-systems-should-be-actively-monitored-and-which-can-wait
title: Which Business Systems Should Be Actively Monitored?
description: Monitoring everything creates noise, and monitoring nothing creates surprises. A way to decide which business systems deserve active monitoring, based on what stops when they fail rather than on what is technically interesting.
lead: Monitoring everything creates noise, and monitoring nothing creates surprises. A way to decide which business systems deserve active monitoring, based on what stops when they fail rather than on what is technically interesting.
category: Operational Resilience
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Operational Resilience
sources:
  - Google SRE monitoring ditributed system - sre golden signals | https://sre.google/sre-book/monitoring-distributed-systems/
  - Architecture Strategies for Designing a Monitoring System - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/observability
  - What are Service-Level Objectives (SLOs)? - Atlassian | https://www.atlassian.com/incident-management/kpis/sla-vs-slo-vs-sli
related:
  - How to Design Better Escalation Paths | /insights/how-to-design-better-escalation-paths-for-business-systems/
  - What business processes need documentation first? | /insights/what-business-processes-need-documentation-first/
  - Why chasing people for updates is a systems failure | /insights/why-chasing-people-for-updates-is-a-systems-failure/
summary: Monitoring everything creates noise, and monitoring nothing creates surprises. A way to decide which business systems deserve active monitoring, based on what stops when they fail rather than on what is technically interesting.
layout: plain
---
Monitoring is often discussed as a technical subject, but the first decision is a business one: which systems matter enough to watch. A small company can have dozens of tools, from accounting and payroll to the website, the phone system, the file server, the card machines and a handful of cloud subscriptions. Watching all of them closely is neither practical nor useful. Watching none of them means that customers and staff find the failures first.

The answer lies in choosing deliberately. This article gives a simple way to decide which systems should be actively monitored, what “monitored” should mean for each, and which can safely rely on lighter checks.

> Monitor the things whose failure the business would notice too late, not the things that are easiest to measure.
>

## Start from consequences, not components

A system deserves active monitoring in proportion to what happens when it fails and how quickly the failure would otherwise be noticed. Two questions do most of the work.

- **What stops, and what does it cost per hour?** A point-of-sale outage on a Saturday costs sales directly. A delayed marketing report costs very little.
- **Would we notice without a signal?** A broken website is noticed by customers within minutes. A failed overnight backup, a stalled bank-feed or an expired certificate may go unnoticed for weeks.

The second question is the more revealing. The systems that most need active monitoring are the ones that fail silently. Visible failures announce themselves, while silent ones accumulate damage, as described in [when one unmonitored component can stop a critical service](/patterns/when-one-unmonitored-component-can-stop-a-critical-service/) and in the cost of [unmonitored backups and false recovery confidence](/impact/unmonitored-backups-false-recovery-confidence/).

## A simple four-tier classification

Sort your systems into tiers and decide monitoring effort by tier. Keep the tiers few enough that people will actually use them.

1. **Tier 1, business-stopping.** If it fails, revenue or core service stops within hours. Examples include the payment gateway or card machines, the ordering or booking platform, the main internet connection, and the system that generates invoices. These get continuous automated monitoring with alerts that reach a named person.
2. **Tier 2, process-critical.** Failure causes delay or rework within a day or two. Examples include payroll, the accounting system, the CRM and email. These get automated checks and a daily or weekly review.
3. **Tier 3, supporting.** Failure is inconvenient but workarounds exist, such as the intranet, internal chat, or a reporting dashboard. A periodic check is enough.
4. **Tier 4, low impact.** Failure is tolerable for days. Review when it is reported or when the subscription renews.

The classification depends on your business, not on the software. For a retailer the point-of-sale system is Tier 1. For a consultancy it may be email and the document store. The wider question of which digital systems have become infrastructure is explored in [which digital systems are actually infrastructure](/insights/which-digital-systems-are-actually-infrastructure/).

## Include the things around the systems

Several of the most valuable monitoring targets are not applications at all. Consider these supporting items, which often fail quietly:

- **Backups.** Monitor that the job ran, that it completed, and that a restore has been tested. A green tick on a schedule is not evidence of recoverability.
- **Integrations and scheduled jobs.** A nightly sync between the shop and accounting software can stop after a password change. Check that the expected number of records moved.
- **Certificates, domains and licences.** Expiry dates are predictable, so monitor them on a calendar with a lead time of thirty days or more.
- **Power and connectivity.** In South Africa, load-shedding makes UPS battery health, inverter capacity and a secondary internet link part of the monitoring picture, not an afterthought.
- **Storage and capacity.** Disks and mailboxes that fill slowly will eventually fail abruptly.

The monitoring of automated processes has its own considerations, covered in [what you should monitor in an automated business process](/insights/what-should-you-monitor-in-an-automated-business-process/).

## Decide what to measure for each monitored system

Once a system is in scope, the next mistake is to measure whatever the tool makes easy. Google's site reliability guidance on monitoring distributed systems recommends concentrating on a small set of signals that reflect the user's experience: latency, traffic, errors and saturation. For a small business the translation is simpler. Ask whether the system is available, whether it is working correctly and whether it is running out of something.

Microsoft's operational excellence guidance on observability makes a related point that monitoring should produce information people can act on rather than raw data. A metric that nobody could respond to is clutter. The most useful measure is often one tied to business completion, such as the number of invoices issued today compared with a normal day, because a system can be technically running while the work is not being completed. This gap is explored in why integration monitoring misses business completion.

## Every alert needs an owner and an action

Monitoring that cannot lead to action is a source of anxiety, not safety. Before turning anything on, answer three questions for each alert: who receives it, what they are expected to do, and what happens if they do not respond. If the answer to the first is “the IT mailbox”, the alert has no owner. The pattern is common and expensive, described in [monitoring alerts without a clear response owner](/discovery/monitoring-alerts-without-a-clear-response-owner/).

Be disciplined about thresholds, too. Alerts that fire daily for harmless reasons teach people to ignore the one that matters. Prefer a few alerts that always require action over many that rarely do. Agree an objective for each important service, for example availability during trading hours, so that alerts reflect a target the business cares about. Atlassian's explanation of service level indicators, objectives and agreements is a helpful vocabulary for this conversation, even for small teams.

## Match the method to the tier

Active monitoring does not require expensive tooling in every case. A practical spread looks like this:

- For Tier 1, use automated uptime checks, built-in vendor status alerts and notifications to a phone that is actually answered.
- For Tier 2, use scheduled reports, a short daily checklist and exception emails that arrive only when something is wrong.
- For Tier 3 and 4, use a monthly review of the register and the vendor's status page.

Cloud providers and SaaS vendors publish their own status pages and send incident notices, which are worth subscribing to for Tier 1 and 2 services. They do not replace your own checks, because they report the vendor's health, not whether your own configuration, integration or credentials are working.

## An illustrative example

The following is a hypothetical case. A Johannesburg logistics firm lists 26 systems and classifies them. Only four land in Tier 1: the dispatch platform, the internet line to the depot, the invoicing job and the fuel-card integration. Previously, the owner had monitoring on the file server and the website, which were both Tier 3. The fuel-card sync had stopped twice without anyone noticing until reconciliation. The firm adds an exception alert on the sync, a daily record-count check on invoicing, and a standby 4G router for the depot. Monitoring effort goes down in total because several low-value checks are dropped, while coverage of what matters goes up.

## Keep the list alive

The classification is only useful if it is current. Add a system to the register when it is bought, review tiers when a process changes, and remove monitors for systems that have been retired. Having a maintained inventory is the foundation for all of this, and a practical approach is given in [how to build a business application inventory that is actually useful](/insights/how-to-build-a-business-application-inventory-that-is-actually-useful/).

## Questions to check your coverage

- Can you name the systems whose failure would stop revenue within hours?
- Is each of them monitored, with an alert that reaches a named person?
- Do you monitor silent failures such as backups, syncs and expiries?
- Does every alert have a documented action?
- When did you last review which systems are on the list?

The aim is not to watch everything. It is to make sure that the failures which would hurt the business are the ones that tell you about themselves first.
