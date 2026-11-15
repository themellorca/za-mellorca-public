---
hub: discovery
record_id: DISC-392
slug: who-tells-customers-what-during-an-outage
title: Who tells customers what during an outage? Fix it before the next one
description: When systems fail, IT fixes and everyone else guesses what to say. Why customer communication during outages has no owner, what it costs, and how to assign it before an insurer or auditor asks.
lead: When systems fail, IT fixes and everyone else guesses what to say. Why customer communication during outages has no owner, what it costs, and how to assign it before an insurer or auditor asks.
category: Business Continuity & Resilience
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Business Continuity & Resilience
problem_domain: Business Continuity & Resilience
problem_owner: Business continuity lead or IT service manager responsible for incident roles
budget_owner: Operations director, CIO or managing director
sources:
  - Architecture strategies for disaster recovery - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery
  - Planning your response to cyber incidents | https://www.ncsc.gov.uk/collection/board-toolkit/principle-d-incident-planning-response-recovery/planning-your-response-to-cyber-incidents
  - 1. Immediate activities (what to do in the first hours) | https://www.ncsc.gov.uk/collection/what-to-do-when-cyber-attacks-disrupt-your-organisation/recovering/immediate-activities
  - https://inforegulator.org.za/popia/ | https://inforegulator.org.za/popia/
related:
  - Business and IT use different definitions of criticality | /discovery/business-and-it-use-different-definitions-of-criticality/
  - Manual recovery steps are not timed during tests | /discovery/why-manual-recovery-steps-need-a-stopwatch-during-every-test/
  - The reports you need most are the ones you cannot run during an outage | /discovery/critical-reports-you-cannot-produce-during-a-system-outage/
summary: When systems fail, IT fixes and everyone else guesses what to say. Why customer communication during outages has no owner, what it costs, and how to assign it before an insurer or auditor asks.
layout: plain
---
At 08:40 on a Monday the ordering portal stops accepting payments. The IT manager and the hosting provider start working on it. By 09:15 the call centre has had forty calls, two account managers have each emailed their biggest clients with different estimates of when it will be fixed, the marketing assistant has posted an apology on social media without knowing the cause, and the financial director learns about the outage from a customer who phoned her directly. The system is restored at 11:30. The confusion about what customers were told takes the rest of the week to untangle.

Nothing in that morning was a technical failure of communication tools. Email, phones and the website all worked. What failed was ownership: nobody had been given the job of deciding what customers would hear, through which channel, and how often.

## The problem in plain language

Most businesses have some form of incident response for their systems. Far fewer have decided, in advance, who speaks to customers when those systems are down. In the gap, several people speak at once or nobody speaks at all. Front-line staff improvise because customers are waiting on the line. Senior people send personal messages to the clients they know. Updates contradict each other because each sender has a different picture of the problem.

The symptom is noise and inconsistency. The cause is that customer communication is treated as something that happens naturally during an incident, rather than as a defined role with its own preparation.

## What the buyer is actually trying to solve

The operations director, IT manager or business continuity lead who searches for this usually has one of two prompts. Either a recent outage produced complaints about mixed messages, or an insurer, auditor or major customer has asked to see how the business communicates during a disruption. In both cases the question is practical: who should own customer communication, what should be prepared beforehand, and how do we keep it consistent with what the technical team actually knows?

## Evidence and system mechanism

### Communication is a designed part of recovery

Microsoft's [guidance on disaster recovery strategy](https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery) treats communication as part of the plan, not an afterthought. It recommends defining who makes decisions, who gets informed and how information flows during an event, and naming owners for managing internal and external communication. It also advises preparing communication channels and message templates in advance so teams are not improvising under pressure, and defining escalation paths so recovery status reaches stakeholders.

### Boards are expected to ask about it

The UK National Cyber Security Centre's [board toolkit on planning a response to incidents](https://www.ncsc.gov.uk/collection/board-toolkit/principle-d-incident-planning-response-recovery/planning-your-response-to-cyber-incidents) says a response plan should set out responsibilities for contacting key individuals, and suggests boards ask whether there is a communications plan with individuals assigned to deliver the corporate message. Its guidance on [the first hours of a disruptive attack](https://www.ncsc.gov.uk/collection/what-to-do-when-cyber-attacks-disrupt-your-organisation/recovering/immediate-activities) recommends establishing controlled, coordinated channels early to reduce confusion and conflicting messages, and setting up alternative channels for staff and customers if normal ones are unavailable or cannot be trusted.

### Some outages carry a legal duty to notify

For South African businesses, an outage caused by a security incident can change the communication task completely. The Information Regulator's [POPIA guidance page](https://inforegulator.org.za/popia/) explains that security compromises involving personal information must be reported, and that since 1 April 2025 section 22 notifications are made through the Regulator's eServices portal. If the people talking to customers do not know whether the outage involves personal information, they may say things that later conflict with a formal notification.

## Why this becomes urgent

The trigger is often external. Cyber insurers increasingly ask how a business will manage an incident, and a written communication plan with named roles is a reasonable thing for them to request. Auditors reviewing continuity arrangements look for the same. Large customers include incident-notification clauses in supply contracts, which turns an informal courtesy into an obligation with a deadline. A business that cannot show who sends those notices is exposed before anything has gone wrong.

## Economic consequence

Poor outage communication rarely appears as a line item, but its costs are real. Call volumes spike and staff spend hours repeating guesses. Account managers make promises about restoration times that the technical team never gave, and those promises become disputes when they are missed. Customers who hear nothing assume the worst and start looking for alternatives. Where contracts require notification within a set time, a missed notice can become a breach in its own right. And if a personal-information compromise is involved, inconsistent statements make the formal process harder to manage.

## Root cause

- **The incident role list stops at the technical team.** Plans name the people who restore systems, not the person who explains the situation to customers.
- **No single source of status.** Front-line staff, managers and the website all draw on different conversations, so each message reflects a different moment in the incident.
- **No prepared wording.** Every message is written from scratch under pressure, which is slow and invites speculation about causes and timings.
- **Channels are not agreed.** Without a primary channel such as a status page or a single mailing list, updates scatter across email, social media and personal calls.
- **No threshold for when to communicate.** Nobody has defined which outages warrant a customer message, so small incidents get overreactions and large ones get silence.

## What good looks like

A business that handles this well has one named communication lead per incident, with a deputy, who is not the person fixing the system. That lead receives status from the technical lead at agreed intervals and is the only source for customer-facing messages. There is a primary channel that customers know about, and every other channel points back to it. Pre-approved templates exist for the common stages: we are aware of a problem, we are working on it, service is partly restored, service is restored, and here is what happened. Account managers and the call centre receive the same short internal brief each time a public update goes out, so what they say matches. The communication lead also has a checklist question: does this incident involve personal information, and has the information officer been told?

The technical team benefits as well. When one person handles customer questions, engineers are interrupted less, which shortens the outage itself. Our article on [faults reported first by customers](/patterns/when-infrastructure-faults-are-first-reported-by-customers-not-by-monitoring/) shows how often the business learns about a problem from outside, which makes a prepared response even more important.

## Diagnostic questions

- If the main customer system failed this morning, who would decide what customers are told, and does that person know it is their job?
- Is there one place customers can check for status, and do your staff point them there?
- Do you have written templates for the first, middle and final messages of an outage?
- Which customer contracts require notification of service interruptions, and within what time?
- Does the person communicating know how to tell whether an incident must be reported to the Information Regulator?
- When did you last practise an outage with the communication role included?

## Practical next actions

1. Name a communication lead and a deputy for incidents, separate from the technical lead, and write their responsibilities into your incident or continuity plan.
2. Choose one primary channel for customer status updates, such as a status page or a dedicated mailing list, and tell customers where to find it.
3. Draft and approve message templates for each stage of an outage, avoiding speculation about cause or fixed restoration times.
4. List the customer contracts with notification clauses, with their deadlines and contacts, and keep the list with the incident plan.
5. Agree a status rhythm, for example every 30 or 60 minutes, between the technical lead and the communication lead, and a short internal brief for front-line staff after each public update.
6. Add a check for personal-information involvement to the first hour of every incident, linked to your POPIA notification process.
7. Run a short exercise where the communication lead drafts real messages from a simulated outage, and review whether the wording and timing worked.

## Where Mellorca fits

Customer communication only works if the communication lead receives accurate, timely status. That depends on monitoring, clear incident roles and a tested continuity plan. Mellorca's [managed digital operations](/services/managed-digital-operations/) work covers incident roles, status reporting and exercises, and can help put the communication role alongside the technical one. If your continuity arrangements changed during a migration, our piece on [contact lists that go stale after a cloud migration](/discovery/after-a-cloud-migration-nobody-updates-who-to-call-in-a-crisis/) covers a closely related gap, and [the cost of never practising an outage](/impact/never-practising-technology-outage-operations-confusion-prolonged-interruption-cost/) explains why rehearsal matters.

## Method note

This article draws on published guidance from Microsoft, the UK National Cyber Security Centre and South Africa's Information Regulator. It does not give legal advice on POPIA notification or contractual notice obligations; confirm those with your information officer and legal adviser. The opening scenario is illustrative and not based on a specific business.
