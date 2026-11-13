---
hub: discovery
record_id: DISC-306
slug: monitoring-alerts-without-a-clear-response-owner
title: When monitoring alerts fire and nobody knows who should respond
description: Alerts sent to a shared mailbox or whole team often get no response. How to give every alert an owner, an action and a route.
lead: Alerts that go to a shared mailbox or a whole team often get no response, because everyone assumes someone else has it. How to give every alert an owner, an action and a route.
category: Cloud, Infrastructure & Platform Operations
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Cloud, Infrastructure & Platform Operations
problem_domain: Cloud, Infrastructure & Platform Operations
problem_owner: IT manager or head of operations, with the business owners of monitored services
budget_owner: Chief information officer or chief operating officer
sources:
  - Google SRE monitoring ditributed system - sre golden signals | https://sre.google/sre-book/monitoring-distributed-systems/
  - Create and manage action groups in Azure Monitor - Azure Monitor | https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/action-groups
  - Alerting Principles - PagerDuty Incident Response Documentation | https://response.pagerduty.com/oncall/alerting_principles/
related:
  - Why servers get upsized when nobody trusts the utilisation data | /discovery/server-capacity-added-because-utilisation-data-is-not-trusted/
  - Why certificates expire when nobody clearly owns their renewal | /discovery/certificates-expire-because-nobody-owns-renewal/
  - Why infrastructure changes get made without recording the business impact | /discovery/infrastructure-changes-without-recorded-business-impact/
summary: Alerts that go to a shared mailbox or a whole team often get no response, because everyone assumes someone else has it. How to give every alert an owner, an action and a route.
layout: plain
---
At 02:14 the disk on the database server crosses 90 percent. An alert is sent to the IT shared mailbox, as it has been every night for the past week, because a log file grows overnight and shrinks again at 03:00. This night it does not shrink. At 06:40 the disk fills and the order system stops. Six people received the alert. Each assumed it was the usual noise, or that someone else was watching.

Monitoring is often set up well and still fails to prevent incidents, because the alerts it produces have no clear owner. They reach many people, or a mailbox nobody watches, without a defined action. Everyone sees them; nobody is responsible for them.

## The problem in plain language

An alert is a request for someone to do something. For that to work, three things must be clear: who should respond, what they should do, and how quickly. In many businesses, alerts were configured when systems were built, routed to whoever was involved at the time, and never revisited. Common signs include:

- alerts sent to a shared mailbox or a large distribution list;
- alerts routed to people who have changed roles or left;
- the same alert firing daily and being ignored;
- no written instructions for what to do when an alert fires;
- outside-hours alerts that reach nobody who is on duty.

The result is a monitoring system that records problems accurately and changes nothing.

## What you are actually trying to solve

The questions usually sound like "how do we reduce alert fatigue?", "who should receive monitoring alerts?", "how do we set up on-call for a small team?" or "why do users find incidents before IT does?" Managers notice the symptom after an outage: the system had warned about it, sometimes hours earlier, and nobody acted. The real need is a simple model that gives every alert an owner and a response, with routing that matches how the team actually works.

## Evidence and system mechanism

### Alerts must require action, or they train people to ignore them

Google's chapter on [monitoring distributed systems](https://sre.google/sre-book/monitoring-distributed-systems/) sets a high bar for alerts that interrupt people: each should be actionable, should require human judgement rather than a robotic response, and should represent an urgent condition that is, or soon will be, visible to users. It warns that alerts which are routinely not acted on wear down attention and make real problems easier to miss. Noise is not harmless; it changes behaviour.

### Alert tools are built around named recipients and actions

Microsoft's documentation on [action groups in Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/action-groups) describes them as collections of notification preferences and automated actions that define who is notified and what is done when an alert fires, by email, SMS, voice call, push notification, webhook, automation runbook or ticketing integration. Action groups can be reused across many alert rules. That flexibility is useful, but it also means one generic action group, pointing at a mailbox, can quietly become the destination for every alert in the estate.

### Every alert needs an owner and a next step

PagerDuty's published [alerting principles](https://response.pagerduty.com/oncall/alerting_principles/) separate alerts, which require a human to act, from notifications, which are for information only. They set different urgency levels for round-the-clock and business-hours response, and argue that alerts should include remediation steps or a link to a runbook; an alert with neither is of little use. They also stress testing alerts so they work when needed.

## Problem owner and why-now trigger

The IT manager or head of operations owns the alerting model. Each monitored service should have a business owner, such as the e-commerce manager for the online store, who agrees what matters and how fast. Budget for on-call arrangements and tooling usually sits with the chief information officer or chief operating officer.

Cloud migration is a common trigger. Moving workloads to a cloud platform brings many new alert sources, often with default or quickly configured routing, at the same time as roles are changing. Other triggers include a serious outage that was preceded by ignored alerts, a move to round-the-clock trading, outsourcing part of IT support, or a key person leaving and taking their alert subscriptions with them.

## Economic consequence

- **Longer outages.** Problems that could have been fixed from an early warning become full incidents.
- **Lost trading and service time.** Downtime falls in business hours because overnight warnings were missed. The value of an hour is explored in [not knowing the hourly cost of downtime](/impact/not-knowing-hourly-cost-of-downtime/).
- **Staff fatigue.** People who receive every alert, day and night, tire and leave, or switch notifications off.
- **Key-person dependency.** One person silently becomes the real responder, as discussed in [key-person dependency is a systems problem](/insights/key-person-dependency-is-a-systems-problem/).
- **Weak evidence.** After an incident, it is unclear who knew what and when.

## Root cause

- **Alerts configured by system, not by service.** Nobody asked which service and which owner each alert relates to.
- **Routing to groups instead of roles.** Shared mailboxes and large lists diffuse responsibility.
- **No severity model.** Every alert is treated the same, so urgent ones are lost among routine ones.
- **No runbooks.** Responders do not know what action is expected.
- **No review.** Noisy, outdated and orphaned alerts are never cleaned up.

## Practical intervention

1. **Inventory alerts by service.** List each alert rule, the service it protects, where it is sent and how often it fires.
2. **Name an owner for each service's alerts.** A role or on-duty rota, not a mailbox. Integration failures deserve the same treatment, as covered in [why integration failures should not route to personal inboxes](/discovery/why-integration-failures-should-not-route-to-personal-inboxes/).
3. **Set severity levels.** For example: urgent, needing response at any hour; business hours, within a day; and notifications, for information only.
4. **Write a short runbook for each alert.** What it means, what to check, what to do, and whom to escalate to.
5. **Route by severity and time.** Urgent alerts go to the person on duty by a channel that wakes them; others go to a team queue or ticket.
6. **Remove or fix noise.** Alerts that fire without needing action are retuned, automated away or downgraded to notifications.
7. **Test and review.** Test routing regularly, and review alert volumes and missed responses monthly.

### Trade-offs

Small teams cannot staff a full on-call rota. A practical alternative is a shared rota with a managed service provider covering outside hours for urgent alerts only, with everything else handled during the working day.

### An illustrative example

Illustrative: a Gqeberha manufacturer with about 140 staff moved its ERP and file servers to the cloud. Within a month the IT mailbox received several hundred alerts a week. After a weekend outage that had been preceded by disk warnings, the team listed every alert, removed or retuned most of the noisy ones, set three severity levels, wrote one-page runbooks for the urgent alerts and arranged outside-hours cover for those alone. Weekly alert volume dropped sharply, and urgent alerts now reach a named person on duty.

## Diagnostic questions

- For your most important system, who responds to an alert at 02:00 on a Sunday?
- How many alerts go to a shared mailbox or distribution list?
- Which alerts fire daily without anyone acting on them?
- Does each urgent alert have written steps for the responder?
- When did you last test that an urgent alert actually reaches someone?

## What good looks like

Every alert is linked to a service, a severity, an owner and a runbook. Urgent alerts reach the person on duty by a channel they will notice; routine ones land in a team queue. Noise is kept low, so alerts are trusted. Routing is tested, and alert volumes and responses are reviewed monthly. A single unwatched component is far less likely to cause the next outage, a risk explored in [when one unmonitored component can stop a critical service](/patterns/when-one-unmonitored-component-can-stop-a-critical-service/).

## Where Mellorca fits

Mellorca's [managed digital operations](/services/managed-digital-operations/) service can take on alert review, routing, runbooks and outside-hours response for urgent alerts. For businesses midway through a cloud migration, Mellorca's [digital infrastructure](/services/digital-infrastructure/) work can set up the alerting model as workloads move.

## Method note

Practices are drawn from published reliability guidance and current vendor documentation; tools differ in how they route and escalate alerts. The example is illustrative rather than a client case. The right severity levels and response times depend on each service's business impact.
