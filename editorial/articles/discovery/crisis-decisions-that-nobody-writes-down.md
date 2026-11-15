---
hub: discovery
record_id: DISC-399
slug: crisis-decisions-that-nobody-writes-down
title: Crisis decisions that nobody writes down, and why it costs you later
description: During an incident, decisions are made on calls and in chat groups and never recorded. Why a decision log matters for insurers, regulators and lessons learned, and how to keep one without slowing the response.
lead: During an incident, decisions are made on calls and in chat groups and never recorded. Why a decision log matters for insurers, regulators and lessons learned, and how to keep one without slowing the response.
category: Business Continuity & Resilience
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Business Continuity & Resilience
problem_domain: Business Continuity & Resilience
problem_owner: Business continuity lead or risk manager responsible for incident governance
budget_owner: COO, managing director or CFO
sources:
  - 1. Immediate activities (what to do in the first hours) | https://www.ncsc.gov.uk/collection/what-to-do-when-cyber-attacks-disrupt-your-organisation/recovering/immediate-activities
  - Architecture strategies for disaster recovery - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery
  - SP 800-84, Guide to Test, Training, and Exercise Programs for IT Plans and Capabilities - CSRC | https://csrc.nist.gov/pubs/sp/800/84/final
related:
  - The reports you need most are the ones you cannot run during an outage | /discovery/critical-reports-you-cannot-produce-during-a-system-outage/
  - Who tells customers what during an outage? Fix it before the next one | /discovery/who-tells-customers-what-during-an-outage/
  - Recovery environments drift from production | /discovery/why-recovery-environments-quietly-drift-away-from-production/
summary: During an incident, decisions are made on calls and in chat groups and never recorded. Why a decision log matters for insurers, regulators and lessons learned, and how to keep one without slowing the response.
layout: plain
---
Two weeks after a cyber incident, a logistics company's insurer asks a simple question: when did you decide to shut down the warehouse system, who decided, and why? The managing director remembers a call on the first evening. The IT manager thinks it was the following morning. The external responder's notes mention a recommendation, but not who accepted it. The decision may well have been right. The business cannot show it.

## The problem in plain language

In a crisis, decisions come quickly: take systems offline, notify customers, call in a specialist, pay for overtime, switch to manual processes, restore from a particular backup. They are made on phone calls, in messaging groups and in corridors, often by different people as the incident moves. Few businesses record those decisions consistently, with the time, the decision maker, the information available and the reasoning. Afterwards, the business has a timeline of technical events but no reliable record of why it acted as it did.

## What the buyer is actually trying to solve

The continuity lead, risk manager or managing director looking into this wants a simple way to capture decisions during incidents that will stand up to questions from insurers, auditors, regulators and the board, and that helps the business learn. They also want it to be practical: a log that slows down the response will be abandoned in the first hour.

## Evidence and system mechanism

### A single authoritative record

The UK National Cyber Security Centre's guidance on [immediate activities when a cyber attack disrupts an organisation](https://www.ncsc.gov.uk/collection/what-to-do-when-cyber-attacks-disrupt-your-organisation/recovering/immediate-activities) recommends creating a single, authoritative record so that all teams work from the same understanding, noting that regulators or insurers may require it. It suggests logging what was discovered and when, the decisions made, by whom and why, and actions with their status, using standardised time references and considering a designated recorder. It assigns ownership of that record to the management lead.

### Decision rights are part of the plan

Microsoft's [disaster recovery guidance](https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery) recommends defining who makes decisions, who is informed and how information flows, with named owners for declaring a disaster, closing an incident, managing communication and leading retrospectives. A decision log only works if it is clear who is entitled to make each kind of decision.

### Recording is something to practise

NIST's [SP 800-84 on test, training and exercise programmes](https://csrc.nist.gov/pubs/sp/800/84/final) describes exercises that train personnel and exercise plans. Decision logging is a skill: the recorder needs to know what to capture, and decision makers need to get used to stating their reasoning aloud so it can be written down. An exercise is the safe place to build that habit.

## Why this becomes urgent

A new critical service often brings this to a head. When a business launches a service that customers or partners depend on, such as an online ordering platform or a managed service, contracts and insurers start asking how incidents are governed. Other triggers include a regulatory notification, where the timing of decisions matters, an insurance claim, a dispute with a supplier or customer about an outage, and a board that wants assurance that crisis decisions are made by the right people.

## Economic consequence

Without a decision record, the business is exposed in several ways. Insurance claims can be delayed or reduced if the business cannot evidence the actions it took to limit loss. Disputes with customers and suppliers become one memory against another. Regulators may view an undocumented response as weak governance. Internally, the same mistakes repeat, because the post-incident review is based on recollection rather than record. Our article on [why incident reviews must change the controls that failed](/discovery/why-incident-reviews-must-change-the-controls-that-failed/) depends on having an accurate account of what was decided.

## Root cause

- **Logging is nobody's job.** Everyone is focused on fixing the problem, and no one is assigned to record.
- **Decisions happen in scattered channels.** Calls, chat groups and email threads each hold fragments.
- **Decision rights are unclear.** If it is not clear who may decide, it is hard to record who did.
- **Reasoning is not captured.** Even when actions are logged, the information and alternatives behind them are not.
- **The habit is not practised.** Exercises focus on technical recovery, so recording is first attempted in a real crisis. Our piece on [actions from continuity exercises](/discovery/what-happens-to-the-actions-from-your-continuity-exercise/) shows how lessons can be lost even when exercises happen.

## What good looks like

The incident plan names a decision recorder role, filled by someone who is not leading the technical response, with a deputy. There is one log, kept in a location that remains available if main systems are down, with simple fields: date and time, decision, decision maker, information available, options considered, reason, and follow-up action with owner. Decision makers state decisions explicitly, for example "We are taking the warehouse system offline now because...", so the recorder can capture them. Decisions made in other channels are copied into the log promptly. Decision rights for common decisions, such as shutting down systems, notifying customers or authorising spend, are written down in advance. After the incident, the log is the basis of the review and is retained with the incident records.

## Diagnostic questions

- For your last significant incident, could you produce a list of decisions with times, decision makers and reasons?
- Who in your incident plan is responsible for recording decisions?
- Where would the log be kept if email and file servers were unavailable?
- Are decision rights for taking systems offline or notifying customers written down?
- Has your team practised decision logging in an exercise?

## Practical next actions

1. Add a decision recorder and deputy to your incident plan, separate from the technical and communication leads.
2. Create a simple decision log template with time, decision, decision maker, information available, options considered, reason and follow-up.
3. Choose a location for the log that stays available if main systems fail, and keep a printed template as a fallback.
4. Write down decision rights for the most common crisis decisions and who may make them out of hours.
5. Practise decision logging in your next tabletop exercise, and review whether the log would satisfy an insurer's questions.
6. Use the log as the starting point for every post-incident review, and retain it with the incident records.

## Where Mellorca fits

Mellorca helps businesses define incident roles and decision rights, set up practical logging and run exercises that include governance as well as technical recovery. For businesses with no written plan, our analysis of [the cost of improvising during a crisis](/impact/no-written-business-recovery-plan-improvising-during-crisis-financial-cost/) explains where to start, and [recovery that depends on one specialist](/discovery/recovery-only-works-while-one-specialist-is-reachable/) covers a related key-person risk.

## Method note

This article draws on published guidance from the UK National Cyber Security Centre, Microsoft and NIST. It does not give legal or insurance advice; check with your insurer what evidence they expect. The opening example is illustrative.
