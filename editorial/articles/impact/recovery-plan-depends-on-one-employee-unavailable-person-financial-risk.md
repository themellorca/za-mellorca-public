---
hub: impact
record_id: CPS-160
slug: recovery-plan-depends-on-one-employee-unavailable-person-financial-risk
title: A Recovery Plan That Depends on One Person Is Not a Plan
description: If only one employee knows how to restore your systems, every outage is a gamble on that person's availability, and the cost of the gamble is paid in extended downtime.
lead: If only one employee knows how to restore your systems, every outage is a gamble on that person's availability, and the cost of the gamble is paid in extended downtime.
category: Business Continuity
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Business Continuity
commercial_domain: Business Continuity
primary_pain: Having a recovery plan that depends on one specific employee
primary_cost_mechanism: Extended downtime when the person is on leave, unreachable or gone, lost trading hours and revenue, idle staff wages during the outage, emergency outside support at premium rates, and lost data when recovery is improvised
sources:
  - SP 800-34 Rev. 1, Contingency Planning Guide for Federal Information Systems - CSRC | https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final
  - Create a resilient access control management strategy - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/authentication/concept-resilient-controls
  - Architecture strategies for disaster recovery - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery
related:
  - Backups Nobody Has Tested: The Cost When Recovery Fails | /impact/backups-never-tested-restore-financial-cost/
  - Not Knowing Your Hourly Cost of Downtime | /impact/not-knowing-hourly-cost-of-downtime/
  - The Spreadsheet Only One Person Understands: Financial and Continuity Risk | /impact/business-run-on-spreadsheet-one-person-understands-financial-continuity-risk/
summary: If only one employee knows how to restore your systems, every outage is a gamble on that person's availability, and the cost of the gamble is paid in extended downtime.
layout: plain
---
## The plan with one name on it

A medical-supplies wholesaler in Cape Town has a recovery plan. It is a three-page document, and it is reassuring until you read who does what. Every step says "Thandi". Thandi knows where the backups are. Thandi has the administrator password to the server. Thandi knows the order in which services must be restarted, and she is the only person who has ever done it. In July, the main storage fails on a Friday afternoon. Thandi is on a long-weekend trip in the Karoo with patchy signal. The business cannot take orders, print picking slips or issue invoices. A supplier's IT consultant is brought in on an emergency call-out, but cannot find the backup credentials or the restart sequence. The system returns on Tuesday. Four trading days were lost.

The company had a plan. What it did not have was a plan that worked without one particular person.

## Why this is so common

- **The person who built it is the person who runs it.** Knowledge accumulates with whoever set the system up, and nobody else has a reason to learn.
- **The plan documents what exists, not who else can do it.** Most plans list systems and priorities but are vague about people.
- **Handover feels like an insult or an expense.** Asking the expert to teach a colleague, or paying someone to learn, competes with day-to-day work.
- **Nothing has gone wrong yet.** Without a failure, the dependency looks like efficiency.
- **Credentials are personal.** Critical access sits in one person's head, one person's password manager or one person's phone.

This is a specific case of the wider pattern in [key-person operational dependency](/impact/key-person-operational-dependency/), and the broader argument is made in [why it is a systems problem rather than a people problem](/insights/key-person-dependency-is-a-systems-problem/). Here we look at what it does to recovery, when time costs the most.

## What the dependency costs

### Downtime that lasts as long as the absence

With a well-prepared plan, recovery time depends on the technology. With a one-person plan, it depends on that person's availability plus their travel or reachability time. Instead of a recovery time of three hours, you may have a recovery time of "whenever Thandi is back". If you do not know how long you can afford to be down, start with the article on [not knowing your recovery time after a major outage](/impact/not-knowing-recovery-time-after-major-outage-unplanned-downtime-cost/).

### A rough cost of an unavailable person

You can estimate the exposure with a short calculation. Take the cost of one hour of downtime and multiply it by the hours the person might plausibly be unavailable at a bad moment.

| Input | Illustrative figure |
| --- | --- |
| Revenue not invoiced per trading hour | R12,000 |
| Staff wages for idle employees per hour (25 people) | R4,500 |
| Hours the key person could be unreachable (weekend, leave, illness) | 60 hours of outage during a typical absence |
| Cost of an unavailable key person for one incident | Roughly R990,000, if the whole period were trading time, or far less if only trading hours count |

The figures are invented, but the method is real. Even if you count only working hours and apply a probability, the annualised exposure is often larger than the cost of documenting the process and training a second person.

### Improvised recovery loses data

People who are not trained for a recovery under pressure make the usual mistakes: restoring the wrong backup, overwriting newer data or skipping a check. The result can be a second, longer outage after the first.

### Premium outside help

Emergency call-outs from consultants who do not know your environment are slow and expensive, and they still need credentials and documentation that only one person holds.

### The person themselves

Being the sole point of recovery is a heavy load. It makes holidays stressful and burnout more likely, which in turn raises the chance that the person leaves.

## What a good plan assumes

The US National Institute of Standards and Technology publishes contingency planning guidance, [Special Publication 800-34](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final), that covers roles, responsibilities and documented procedures for recovery. A theme that runs through that kind of guidance is that plans must name roles and alternates, not just individuals, and must be exercised and updated. A plan is only as reliable as the least-prepared person who may have to carry it out.

Microsoft's guidance on resilient identity makes a related point about access: organisations should plan for the situation where the normal administrator, or the normal sign-in method, is not available, for example by maintaining emergency access accounts that are stored securely and tested. The detail is in the [resilient access controls documentation](https://learn.microsoft.com/en-us/entra/identity/authentication/concept-resilient-controls). The principle applies beyond Microsoft products: if one person's phone or password is the only way in, you have a single point of failure.

The Azure Well-Architected Framework guidance on [disaster recovery](https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery) likewise stresses defining recovery objectives, documenting the recovery procedure and testing it regularly. Testing is what exposes the hidden dependency, because it forces someone other than the usual person to follow the steps.

## Building a plan that survives absence

### Write steps a stranger could follow

Document recovery as a numbered runbook: where the backups are, how to check they are good, the order in which to start services, who to call, and how to confirm the system is working. Use plain language and screenshots. The test is whether a competent person who has never seen your environment could follow it.

### Name a primary and an alternate for every role

Each role in the plan, such as decision-maker, technical lead and communicator, gets two names. The alternate does not have to be an expert, but they must have access, a copy of the runbook and a chance to practise.

### Secure the access

Put critical credentials in a company-controlled vault or sealed procedure that at least two people can open, with a record of who did so. The article on [single backup method with no fallback](/impact/single-backup-method-no-recovery-fallback-cost/) covers a similar principle for the data itself.

### Run a drill without the expert

Once a year, ask the alternate to carry out a restore of a non-critical system while the usual person watches but does not touch anything. Note where they get stuck, fix the document and repeat.

## Practical next actions

1. Read your recovery plan and highlight every step that names, or in practice depends on, a single person. Count them.
2. Ask that person to take a week of leave with their phone off, or simulate it, and note which tasks would have stopped.
3. Write a runbook for the three most important systems, with locations, order of restart and emergency contacts, and store a copy where two other people can reach it.
4. Name an alternate for each role and give them access to the backups and the critical credentials through a controlled, auditable method.
5. Schedule a restore drill for the next quarter, led by the alternate, and record the time it takes and what went wrong.

## The measure that matters

A recovery plan has two tests. Can the technology be restored, and can it be restored by someone other than the person who built it? Many businesses pass the first and fail the second without knowing. Asking the question now, while everyone is at work and nothing is broken, costs a few hours. Asking it on a Friday afternoon, with the key person in the Karoo, costs a great deal more.
