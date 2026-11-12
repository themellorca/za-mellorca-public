---
hub: discovery
record_id: DISC-372
slug: why-control-testing-schedules-should-not-live-in-personal-calendars
title: Control testing schedules are maintained in personal calendars
description: When the only record of when controls must be tested is someone's diary, tests are missed and nobody knows. How to move to a shared control register with owners and deputies.
lead: When the only record of when controls must be tested is someone's diary, tests are missed and nobody knows. How to move to a shared control register with owners and deputies.
category: Security & Compliance Operations
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Security & Compliance Operations
problem_domain: Security & Compliance Operations
problem_owner: Risk, compliance or IT governance lead accountable for the control programme
budget_owner: Financial director or managing director
sources:
  - SP 800-53A Rev. 5, Assessing Security and Privacy Controls in Information Systems and Organizations - CSRC | https://csrc.nist.gov/pubs/sp/800/53/a/r5/final
  - SP 800-137, Information Security Continuous Monitoring (ISCM) for Federal Information Systems and Organizations - CSRC | https://csrc.nist.gov/pubs/sp/800/137/final
  - Cybersecurity Framework | https://www.nist.gov/cyberframework
related:
  - Security controls are duplicated across teams | /discovery/why-the-same-security-control-gets-built-and-evidenced-by-several-teams/
  - Control owners cannot produce evidence without manual searching | /discovery/control-owners-cannot-produce-evidence-without-manual-searching/
  - Audit evidence cannot be reproduced from the original source | /discovery/why-audit-evidence-must-be-reproducible-from-the-source-system/
summary: When the only record of when controls must be tested is someone's diary, tests are missed and nobody knows. How to move to a shared control register with owners and deputies.
layout: plain
---
The risk manager's calendar holds the dates on which the company's security controls are supposed to be tested: the quarterly access review, the six-monthly backup restore, the annual supplier check. The data protection officer keeps another set of dates in her own diary. The IT lead has a repeating reminder on his phone. Then the risk manager goes on three weeks of leave, the shared meeting invitation is deleted with her mailbox clean-up, and the access review does not happen. Nobody notices until a customer asks when it was last done.

This article looks at that operating condition: control testing schedules kept in personal calendars. It is common in businesses where good intentions have outpaced the structure to support them.

## The problem in plain language

A control that is not tested on time is a control of unknown quality. When the testing schedule lives in a person's calendar, it depends on that person being present, organised and still employed. It cannot be seen by their manager, reconciled with the list of controls, or counted as evidence that the programme exists. The schedule also tends to drift: meetings are moved, reminders are dismissed, and a test that was monthly in the policy becomes whenever someone remembers.

## What the buyer is actually trying to solve

The financial director or managing director wants confidence that every important control is tested as often as promised, with a record that shows it. They also want to avoid learning from an auditor or a customer that a test was missed. The control owners, for their part, want a single place to see what is due, so they stop relying on memory and informal nudges.

## Evidence and system mechanism

### Assessment is a planned, repeated activity

NIST's [control assessment guidance](https://csrc.nist.gov/pubs/sp/800/53/a/r5/final) describes a methodology and procedures for assessing controls at various phases, and includes guidance on building assessment plans and analysing results. The word plan matters. A plan is a shared, reviewable artefact with scope, frequency and responsibility. A personal calendar entry is none of these.

### Monitoring depends on frequency set by risk

NIST's [continuous monitoring guideline](https://csrc.nist.gov/pubs/sp/800/137/final) presents monitoring as a strategy and programme, and ties it to the organisation's risk tolerance and to timely information about whether controls are effective. If a high-risk control is tested annually while a minor one is tested monthly, the schedule does not reflect risk, and that is hard to notice when each person holds their own dates.

### A framework expects governance, not heroics

The [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework) organises cybersecurity outcomes under functions that include governance, and is intended to be used by organisations of all sizes. The point for a small business is not the framework's vocabulary but the idea that roles, responsibilities and oversight are part of the security programme, not an add-on. A schedule held by one person sits outside that oversight.

### Warning signs

- Test dates exist only as calendar invitations or phone reminders.
- The list of controls and the list of test dates have never been compared.
- When an owner leaves, nobody knows which tests they were running.
- Tests are done late "because things were busy", with no record of the delay.
- Renewal and review dates drift apart, as in [renewal calendars and architecture roadmaps drift apart](/discovery/why-renewal-calendars-and-architecture-roadmaps-drift-apart/).

## Problem owner and why-now trigger

The problem owner is the person accountable for the control programme, usually a risk, compliance or IT governance lead, with each control owner responsible for running their own test. The budget owner is typically the financial director or managing director.

The trigger is a regulatory change. A new or newly enforced requirement, for example about security safeguards for personal information under POPIA or a sector regulator's expectations, adds controls or raises how often they must be tested. Leadership asks for a schedule, and discovers there is no single one. The same moment often coincides with staff turnover or a restructuring, which exposes how much of the schedule sat with individuals.

## Economic consequence

A missed control test has no immediate cost, which is why it is so easily missed. The cost arrives later: a failed audit finding, a customer who decides the company cannot show it manages risk, or a real incident that a timely test would have prevented. If a backup restore test was supposed to run in the second quarter and did not, the first time the business learns that restores do not work is during an outage. The cost of rebuilding a schedule retrospectively, when someone leaves, is also real: days of the remaining team's time spent reconstructing what was supposed to happen and when.

## Root cause

- **No control register with frequencies.** The business has a policy that says "regularly" but no list that says how often, who and by when.
- **Personal tools by default.** Calendars are free, familiar and always open, so they become the system.
- **Ownership assigned to people, not roles.** When the person changes, the schedule leaves with them.
- **No oversight step.** Nobody reviews whether tests happened, only whether they failed.
- **Tests treated as events, not as records.** A test happens, but its date, result and follow-up are not captured in one place.

## Practical intervention

1. **Build a one-page control register.** List each control, its owner by role, the test method, the required frequency and the date it was last tested.
2. **Set frequency by risk.** High-impact controls, such as access to payment systems and backup restores, get shorter intervals. Record why.
3. **Move the schedule to a shared place.** A shared calendar owned by a role mailbox, a task tool or a simple tracker works. What matters is that it is visible to the control owner's manager and does not disappear when a mailbox is closed.
4. **Assign a deputy for every test.** Each control has a primary and a backup owner who both see the due date.
5. **Log the outcome.** For each test, record the date, who did it, the result and any follow-up action with a due date.
6. **Review monthly.** The programme owner checks what was due, what was done and what is overdue, and reports exceptions to the executive.

### Trade-offs

A shared tracker adds a small administrative burden for people who are already busy, and some will resist moving away from their own diaries. Keep it light: the register should fit on a page and each update should take a minute. Over-engineering the first version is a common reason these efforts are abandoned.

### An illustrative example

Illustrative: a Cape Town insurance broker with 45 staff discovered, while preparing for a customer review, that its compliance officer held nineteen test dates in her personal calendar and the IT lead held another seven. Two were overdue by months. The financial director asked them to merge the dates into one register with a deputy for each. The next review found every test either complete or flagged overdue with a reason, and the officer's planned leave no longer left a gap.

## Diagnostic questions

- Is there one list showing every control, how often it is tested and when it was last tested?
- If your risk or compliance lead left tomorrow, who would know what is due next month?
- Do frequencies reflect risk or habit?
- Who checks that tests actually took place?

## What good looks like

The control register is a single shared record. Each test has a role-based owner, a deputy, a risk-based frequency and a logged outcome. Overdue items are visible to management before anyone external asks, and the schedule survives staff changes without anyone reconstructing it from diaries.

## Where Mellorca fits

Mellorca's [digital systems audit](/services/digital-systems-audit/) can compare the controls a business claims against the test schedules that actually exist. [Digital operations improvement](/services/digital-operations-improvement/) can then set up the register, reminders and monthly review in tools the business already uses.

## Method note

The sources are standards and framework documents used to describe how control assessment, monitoring and governance are normally structured. They do not measure how many businesses keep schedules in personal calendars, and the example is illustrative rather than a client case. Specific regulatory obligations should be confirmed with the company's information officer or legal adviser.
