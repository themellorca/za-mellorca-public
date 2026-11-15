---
hub: discovery
record_id: DISC-394
slug: restored-data-that-nobody-reconciles-against-downstream-systems
title: Restored data that nobody reconciles against the systems downstream
description: A database comes back from a backup taken hours earlier while connected systems kept moving. Why restored data must be reconciled with the systems that depend on it before the business trusts it again.
lead: A database comes back from a backup taken hours earlier while connected systems kept moving. Why restored data must be reconciled with the systems that depend on it before the business trusts it again.
category: Business Continuity & Resilience
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Business Continuity & Resilience
problem_domain: Business Continuity & Resilience
problem_owner: IT service manager responsible for restores, working with a named business data owner
budget_owner: COO, CIO or CFO
sources:
  - https://csrc.nist.gov/pubs/sp/1800/11/final | https://csrc.nist.gov/pubs/sp/1800/11/final
  - https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery | https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery
  - https://learn.microsoft.com/en-us/azure/azure-sql/database/active-geo-replication-overview | https://learn.microsoft.com/en-us/azure/azure-sql/database/active-geo-replication-overview
  - https://docs.aws.amazon.com/aws-backup/latest/devguide/restore-testing-validation.html | https://docs.aws.amazon.com/aws-backup/latest/devguide/restore-testing-validation.html
summary: A database comes back from a backup taken hours earlier while connected systems kept moving. Why restored data must be reconciled with the systems that depend on it before the business trusts it again.
layout: plain
---
The order database of a wholesaler is corrupted at 14:00 and restored from the 02:00 backup. The restore succeeds and the IT team declares the system recovered. What nobody checks is everything that happened in the twelve hours in between. The warehouse system has already shipped orders the restored database no longer knows about. The payment gateway has captured card payments for orders that now do not exist. The accounting system has posted invoices with numbers the order system will now issue again. Over the following weeks finance finds duplicate invoice numbers, unexplained payments and stock counts that do not reconcile.

## The problem in plain language

Restoring a system from backup takes it back to a point in time. The systems around it do not go back with it. Integrations, payment providers, warehouse tools, customer portals and accounting platforms keep their own records of what happened after the backup point. Once the restored system is running again, it disagrees with all of them. Unless someone deliberately compares the restored data with the downstream and upstream systems and fixes the differences, those differences turn into duplicate transactions, missing records and reports nobody can trust.

Many recovery plans stop at the point where the system starts and users can log in. The reconciliation step is not written down, not owned and not tested.

## What the buyer is actually trying to solve

The IT manager, finance controller or continuity lead who runs into this wants a repeatable way to answer one question after any restore: is the restored data consistent with everything it connects to, and if not, what exactly is different? They also want to know who should do that work, how long it takes, and how to include it in recovery time targets.

## Evidence and system mechanism

### Recovery is about trusting the data, not just restoring it

NIST's [SP 1800-11 on data integrity](https://csrc.nist.gov/pubs/sp/1800/11/final) addresses recovery from corruption caused by ransomware, destructive malware, malicious insiders or honest mistakes. It stresses that organisations need to recover quickly and be able to trust that the recovered data is accurate. Trust in the data is the goal; a running system is only part of it.

### Dependencies between data stores have to be planned for

Microsoft's [disaster recovery guidance](https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery) advises accounting for dependencies between data stores, implementing point-in-time recovery, and automating integrity checks during recovery. It also recommends capturing post-failover tasks so the workload is fully back online.

### Some recent data is always lost

Microsoft's documentation on [active geo-replication for Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/active-geo-replication-overview) explains that asynchronous replication makes some data loss unavoidable if the primary fails, and that a forced failover loses transactions committed on the primary but not yet replicated. It notes that recovering a service end-to-end requires all components and dependent services to be recovered, not only the database. Even with replication, then, the recovered database may be seconds or minutes behind the systems it talks to. With nightly backups, the gap is hours.

### Validation can be automated

AWS Backup's [restore testing validation](https://docs.aws.amazon.com/aws-backup/latest/devguide/restore-testing-validation.html) lets teams run their own validation workflow when a restore test completes and record a validation result. The feature runs the check; the business still has to decide what to check, including comparisons with downstream systems.

## Why this becomes urgent

A new critical service is often the trigger. When a business launches an online channel, a payment integration or a new warehouse system, it adds another place where transactions are recorded independently. Before the launch, a restore of the core system might have been reconciled by a couple of people in an afternoon. Afterwards, the same restore creates differences across several systems, some of them external, and the manual approach no longer works.

## Economic consequence

Unreconciled restores cause losses that appear slowly. Orders shipped but not invoiced are lost revenue. Payments received for orders that no longer exist become refunds or disputes. Duplicate document numbers cause audit and tax issues. Stock figures drift, leading to overselling or write-offs. The finance team spends weeks investigating differences that could have been identified in hours with a planned comparison. Our piece on [undefined recovery points](/impact/undefined-recovery-point-how-much-data-business-can-lose-financial-risk/) sets out why knowing the size of the gap is the first financial question.

## Root cause

- **Recovery is declared at system start-up.** The plan ends when the application runs, before data is checked.
- **Interfaces are not part of the plan.** Integrations keep running, replay messages or fail silently, and nobody decides how to handle them after a restore.
- **No reconciliation owner.** IT owns the restore, finance and operations own the data, and nobody owns the comparison.
- **One recovery point for everything.** Systems are backed up on different schedules, so their restored states never line up, a problem explored in [one recovery point for every system](/discovery/why-one-recovery-point-for-every-system-hides-your-most-valuable-data/).
- **Restore tests stop early.** Tests prove files return, not that the service and its connections work, as described in [restore tests that only prove files return](/discovery/restore-tests-prove-the-files-return-not-that-the-service-works/).

## What good looks like

For each critical system, the recovery plan includes a reconciliation stage with a named owner from the business. Before the restore, integrations to and from the system are paused or queued so they do not send stale data or duplicate transactions. After the restore, a checklist compares key totals and identifiers with each connected system for the period since the restore point: order counts and numbers, invoice numbers, payments, stock movements. Differences are listed and resolved by replaying, re-entering or reversing transactions under control. Document number sequences are reset beyond the highest number used anywhere. Only then is the service declared recovered, and the reconciliation time is included in the recovery time target. Our article on [retry logic creating duplicate transactions](/discovery/retry-logic-creates-duplicate-transactions-at-the-receiving-end/) covers one of the specific risks when queued messages are released.

## Diagnostic questions

- After your last restore, what checks were done to confirm the data matched connected systems?
- Who would own that reconciliation, and is it written into the recovery plan?
- Which integrations would keep running during a restore, and what would they send or receive?
- How would you avoid issuing invoice or order numbers that already exist in another system?
- Does your recovery time target include time for reconciliation?

## Practical next actions

1. For each critical system, list every upstream and downstream system that exchanges data with it, including payment providers and external portals.
2. Write a reconciliation checklist per critical system covering record counts, document number ranges, monetary totals and stock movements for the period after the restore point.
3. Name a business owner for reconciliation alongside the technical owner for the restore.
4. Define how each integration is paused, queued and released during a restore, and how duplicates are prevented.
5. Include document number sequence resets in the restore procedure.
6. Run the reconciliation step in your next restore test and record how long it takes, then update the recovery time target to include it.

## Where Mellorca fits

Mellorca helps businesses extend recovery plans past system start-up, map data flows between systems, and build reconciliation and integration controls into restore procedures. This work sits within [managed digital operations](/services/managed-digital-operations/), usually starting with the system that has the most connections.

## Method note

This article draws on NIST SP 1800-11, Microsoft's disaster recovery and Azure SQL documentation, and AWS Backup documentation. Specific reconciliation checks depend on your systems. The opening example is illustrative.
