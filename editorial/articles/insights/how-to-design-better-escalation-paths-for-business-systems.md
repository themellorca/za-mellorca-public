---
hub: insights
record_id: INS-307
slug: how-to-design-better-escalation-paths-for-business-systems
title: How to design better escalation paths
description: When something goes wrong, who decides what happens next? How to design escalation paths that reach the right person fast and avoid a shared inbox.
lead: When something goes wrong, the first question is who decides what happens next. A practical way to design escalation paths that move a problem to the right person quickly, without waking everyone or losing it in a shared inbox.
category: Operational Resilience
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Operational Resilience
sources:
  - Escalation Policies for Incidents: Types & Tips - Atlassian | https://www.atlassian.com/incident-management/on-call/escalation-policies
  - Google SRE - Incident Management: Key to Restore Operations | https://sre.google/sre-book/managing-incidents/
  - Architecture strategies for designing an incident management (IcM) process - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/incident-response
related:
  - Which business systems should be actively monitored? | /insights/which-business-systems-should-be-actively-monitored-and-which-can-wait/
  - What business processes need documentation first? | /insights/what-business-processes-need-documentation-first/
  - When copy-and-paste is really an integration problem | /insights/when-copy-and-paste-is-really-an-integration-problem/
summary: When something goes wrong, the first question is who decides what happens next. A practical way to design escalation paths that move a problem to the right person quickly, without waking everyone or losing it in a shared inbox.
layout: plain
---
Every business has an escalation path, even when nobody has drawn it. It is whatever actually happens when a problem is bigger than the person who first noticed it: a message to the owner on WhatsApp, a call to the one colleague who knows the system, a forwarded email that may or may not be read before Monday. The question is not whether an escalation path exists. The question is whether it was designed or whether it simply grew.

An undesigned path tends to fail in predictable ways. It depends on one person's availability, it treats every problem as equally urgent, and it gives the person at the bottom no authority to act. This article sets out how to design one deliberately, using ideas borrowed from incident management and applying them to the ordinary systems a South African small or mid-sized business runs: accounting software, the payment gateway, the stock system, the network and the telephones.

> A good escalation path answers three questions without anyone having to think: who is told, how fast, and who may decide.
>

## Separate escalation from alerting

Alerting tells someone that something has happened. Escalation decides what happens when that first person cannot or does not resolve it. They are different design problems. Atlassian's guidance on [escalation policies](https://www.atlassian.com/incident-management/on-call/escalation-policies) describes the escalation policy as the set of rules that decide who is notified next and when, if the first responder does not acknowledge or cannot fix the issue. The useful idea is that the path is a sequence with time limits, not a list of names.

If your alerts are noisy, fix that first, because an escalation path layered on top of noise will train people to ignore it. The design questions for alerts are covered in [how to design alerts for automation failures](/insights/how-to-design-alerts-for-automation-failures/), and the organisational side of the problem appears in [monitoring alerts without a clear response owner](/discovery/monitoring-alerts-without-a-clear-response-owner/).

## Define levels by impact, not by seniority

The most common design mistake is to build the path around the organisation chart: junior staff, then the manager, then the director. That sequence says who is senior but nothing about what the problem is. A better approach is to define levels by business impact and let the level decide who is involved.

A simple three-level model is enough for most small businesses:

- **Level 1: a task is blocked.** One person or one customer is affected and a workaround exists. The first-line owner handles it and no one else needs to be told.
- **Level 2: a process is stopped.** Invoicing cannot run, orders cannot be captured, or a team cannot work. A named system owner is told immediately and a deadline for a status update is set.
- **Level 3: the business is exposed.** Customers cannot pay, personal information may have been disclosed, or the outage threatens a payroll or a regulatory deadline. A decision-maker is involved straight away.

Google's site reliability guidance on managing incidents makes a related point: clear roles matter more than heroics. Someone must be in charge of coordinating the response, someone must communicate, and people doing the hands-on work should not also be fielding questions. In a ten-person company one person may fill several roles, but name them so communication is not forgotten.

## Write down the trigger for each step

Escalation fails most often at the moment of hesitation. A staff member is not sure whether the problem is serious enough to bother the owner, so they wait. Remove the judgement call by writing the triggers down. A trigger can be a time limit, a count or a consequence:

1. If the card machines have been offline for more than 15 minutes during trading hours, move to Level 2.
2. If the issue is not resolved or has no confirmed cause within one hour, tell the system owner and the finance manager.
3. If customer or employee personal information may be involved at any point, move straight to Level 3 regardless of how long it has been.

Time-based triggers matter because they protect against optimism. Most people believe a problem will be fixed in a few minutes, and that belief is exactly how a small fault becomes a lost afternoon. A rule that says “at 30 minutes, tell the next person” makes escalation a procedure rather than an admission of failure.

## Give every step a person, a backup and a channel

A path with role titles but no names is a wish. For each level, record a named primary, a named backup, and the channel that will actually reach them. Be honest about the channel. A shared support mailbox is not an escalation channel at 17:30 on a Friday. A phone call, or a message in a group that the person has agreed to monitor, is.

South African conditions justify extra thought here. Load-shedding can remove mobile data, internet and landlines at once, so a path that relies entirely on an email to a cloud mailbox may not reach anyone during a Stage 6 evening. Include a phone number for each person, and agree what happens if the primary is unreachable for a defined number of minutes. Leave and sickness are also real: the backup should be someone who is not on the same leave calendar as the primary. The wider risk of a path that runs through one individual is discussed in [key person dependency is a systems problem](/insights/key-person-dependency-is-a-systems-problem/).

## Decide who may authorise what

An escalation path is also a path for authority. A support lead who can diagnose a payment fault but cannot approve switching to a manual process, or pay for an emergency call-out, will have to escalate for permission as well as for skill. Decide in advance which decisions each level may take.

Setting these limits in Rand terms makes them concrete. For instance, the system owner may approve an emergency repair up to a fixed amount without further sign-off, and anything above it goes to the director. Without this, escalation becomes a queue of people waiting for approval, which is the pattern described in [why approval processes become bottlenecks](/insights/why-approval-processes-become-bottlenecks/).

## Include external parties

For many systems the real escalation goes outside the company: to the software vendor, the internet provider, the payment processor or the managed service provider. Record, for each critical system, the support channel, the account or contract number, the hours of cover and what support level you are entitled to. Know who internally is authorised to log a call and who follows it up.

A frequent weakness is that nobody knows who holds the vendor relationship, so the call is made by whoever happens to remember a password. Where several suppliers are involved in one fault, the difficulty compounds, a problem examined in [why integration incidents require several vendors to diagnose](/discovery/why-integration-incidents-require-several-vendors-to-diagnose/).

## Plan communication alongside the technical fix

Escalation is not only about getting the right technician. It is about keeping the people who depend on the system informed. Agree who tells customers, who tells staff, and how often. A short status message every hour, even one saying the cause is still being investigated, prevents duplicate questions.

Where personal information may have been exposed, the POPIA obligation to notify the Information Regulator and affected data subjects adds a legal clock to the process. Include the name of whoever decides whether a notification is required, and make sure that person is reached early rather than after the technical work is finished.

## Test it before you need it

A path that has never been used is a theory. Once or twice a year, run a short walk-through: pick a plausible scenario, such as the accounting package being unavailable on the day before payroll, and ask each person what they would do and who they would call. It reveals changed phone numbers and backups who have left.

## After the incident, improve the path

Each time the path is used, review it briefly. Was the first person reached quickly? Did the problem sit at one level too long? Adjust the triggers and the contact list while the experience is fresh. Practical follow-through in the weeks after a fault is covered in [what happens after the automation goes live](/insights/what-happens-after-the-automation-goes-live/).

## A one-page checklist

- Are there defined levels based on business impact?
- Does each level have a named primary, a named backup and a working channel?
- Are time-based triggers written down, so no one has to guess?
- Is it clear which decisions and spending each level can approve?
- Are vendor contacts, contract details and support hours recorded?
- Has someone practised the path in the last twelve months?

A designed escalation path will not prevent failures. What it does is shorten the gap between a problem being noticed and the right person acting on it, and that gap is where most of the avoidable cost of an incident sits.
