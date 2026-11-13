---
hub: discovery
record_id: DISC-387
slug: why-one-recovery-point-for-every-system-hides-your-most-valuable-data
title: Data recovery points are not aligned with transaction criticality
description: Treating all data as equally recoverable leaves payments and orders as exposed as archive folders. How to set recovery points that follow the value of each transaction.
lead: Treating all data as equally recoverable leaves payments and orders as exposed as archive folders. How to set recovery points that follow the value of each transaction.
category: Business Continuity & Resilience
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Business Continuity & Resilience
problem_domain: Business Continuity & Resilience
problem_owner: Finance or operations lead accountable for transaction records, working with the IT manager
budget_owner: Chief financial officer or managing director
sources:
  - https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery | https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery
  - https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html | https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html
  - https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final | https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final
summary: Treating all data as equally recoverable leaves payments and orders as exposed as archive folders. How to set recovery points that follow the value of each transaction.
layout: plain
---
On a Monday a company restores its order system after a failure. The restore point is Sunday at 02:00, which is when the nightly backup runs. The business lost about thirty hours of data. Among the missing records is a day's worth of customer deposits, three supplier payment approvals and the warehouse's pick confirmations. The marketing library, backed up on the same schedule, lost nothing of consequence. Both were protected at the same recovery point, as though a deposit and a brochure were equally valuable.

This article describes that mismatch, why it arises and how to correct it.

## The problem in plain language

A recovery point is the moment in time to which data can be restored. The question it answers is how much recent work the business is prepared to redo. If the answer is "since last night", every transaction since last night has to be recaptured from emails, paper slips, bank statements and memory.

The trouble is that many businesses set one recovery point for everything, usually whatever the default backup schedule happens to be. A nightly job covers the accounting system, the shared drive, the website content and the point-of-sale server alike. Yet the cost of losing a day of each is very different. A lost day of design drafts is an irritation. A lost day of payments, stock movements or signed orders can mean double payments, oversold stock, disputes with customers and difficulty explaining the books to an auditor.

## What the buyer is actually trying to solve

The person asking is usually responding to a prompt: an insurer's questionnaire asking for the maximum tolerable data loss, an auditor asking how completeness of records is protected, or a manager who realised that the "nightly backup" means a full day of invoices at risk. They want a defensible answer to two questions. How much of each kind of transaction can we afford to lose? And what is it worth to reduce that? They do not want a technology lecture; they want a table that the finance director and the IT manager can both sign.

## Evidence and system mechanism

### Recovery targets should follow business value

The recovery point objective is defined in Microsoft's reliability guidance as the maximum acceptable amount of data loss measured in time. The same [disaster recovery guidance](https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery) states that higher-criticality components need faster recovery and more frequent data protection, while lower-criticality components can tolerate slower restoration, and that targets should be derived from requirements so that recovery expectations align with business value. That is precisely the opposite of a single schedule for everything.

NIST's [contingency planning guide](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final) takes a comparable route: begin with a business impact analysis that identifies the processes that matter and the impact of their disruption, and set recovery requirements from that analysis. Whatever name you give the exercise, the order matters. Impact first, technology second.

### Backup frequency decides what is achievable

The recovery point is not a wish; it is constrained by how data is protected. AWS notes in its [disaster recovery options guidance](https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html) that how often you run a backup determines your achievable recovery point, and that this should align with the objective you have set. It also explains that continuous replication offers a very short recovery point but may not protect against corruption or malicious deletion as well as point-in-time backups do, because a bad change is copied immediately. Different tools protect against different failures, so a critical system often needs more than one.

That means a recovery point is a combination of decisions: how often data is copied, whether copies are kept at several moments in time, where they are stored, and how quickly a copy can be turned back into a working system.

### Transaction criticality, not system name

A single application can hold records of very different weight. An enterprise resource planning system might contain payment runs, goods receipts, customer notes and draft quotations. The aligned view classifies the transactions, not just the system:

- **Money movement.** Payments, receipts, payroll and bank reconciliations. These are often the hardest to reconstruct and the most scrutinised by auditors.
- **Commitments.** Signed orders, contract acceptances, stock reservations and delivery confirmations. Losing these creates disputes.
- **Operational records.** Picks, dispatches, production logs. Losing them disrupts the day but can often be rebuilt from the physical world.
- **Reference and working material.** Documents, drafts, marketing content. Usually recoverable from other sources.

## Why it persists

The default schedule is easy and nobody argues with it. Defining criticality requires the finance, sales and operations leads to sit with IT and agree what each kind of loss would cost, and that conversation is rarely scheduled. When no one owns the number, it is set by whoever configured the backup tool. The result is a recovery point that was chosen by convenience, which is the situation described in [an undefined recovery point](/impact/undefined-recovery-point-how-much-data-business-can-lose-financial-risk/).

## What good looks like

A business that has done this work can show a one-page table. Each row is a class of transaction. Each row has a business owner, an agreed maximum data loss, the protection method that delivers it, and the date that the recovery point was last proven in a restore test. Money movement might need a recovery point of minutes, supported by database-level logging or continuous replication plus separate point-in-time copies. Operational records might accept hours. Working documents might accept a day.

| Transaction class | Business owner | Maximum data loss | Protection method | Last proven |
| --- | --- | --- | --- | --- |
| Payments and receipts | Finance director | Minutes | Continuous protection plus point-in-time copies | Date of test |
| Signed customer orders | Sales operations manager | An hour | Frequent snapshots | Date of test |
| Warehouse movements | Warehouse manager | Half a day | Several daily backups | Date of test |
| Working documents | IT manager | One day | Nightly backup | Date of test |

## Risks and trade-offs

Shorter recovery points cost more. They need more storage, more bandwidth and sometimes a different edition of the software. They also create their own risks: replication that copies a corrupt record instantly, or a snapshot schedule that nobody monitors. Pushing every system to a very short point wastes money. The skill lies in spending where the transaction value justifies it and accepting a longer point elsewhere with a clear record that the business chose to do so.

As [backups alone do not equal resilience](/patterns/why-backups-do-not-equal-business-resilience/), a short recovery point also means little if the backups are never restored. The reassurance that comes from [monitored backups](/impact/unmonitored-backups-false-recovery-confidence/) depends on the restore working and the data being complete.

## Practical next actions

1. List the transaction types in your three most important systems and sort them into money movement, commitments, operational records and working material.
2. For each class, ask the business owner how much recent work they could recreate in a day, and what recreating it would cost in hours and in errors. Write the answer down as a maximum acceptable data loss.
3. Compare each figure to the current backup or replication schedule. Mark every row where the schedule is longer than the tolerance.
4. For the marked rows, ask IT or the supplier for a costed option that closes the gap, and decide with the budget owner which gaps to close and which to accept formally.
5. Restore a sample to the stated recovery point, reconcile it against the source records, and record the result and the date in the table.

## When it is worth getting help

If auditors, insurers or a customer contract require evidence of recovery point alignment, a neutral facilitator can run the impact conversation, produce the table and test the first restores. The point is for a finance director to be able to say, with a document in hand, which transactions are protected to the minute and which are not.
