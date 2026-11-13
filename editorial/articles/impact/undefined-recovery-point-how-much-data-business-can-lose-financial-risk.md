---
hub: impact
record_id: CPS-156
slug: undefined-recovery-point-how-much-data-business-can-lose-financial-risk
title: How much data could you lose? The cost of an undefined recovery point
description: Most businesses have backups but never decided how many hours of work they can afford to lose, so an old default schedule sets the answer on the worst day.
lead: Most businesses have backups but have never decided how many hours of work they can afford to lose, so the real answer is set by an old default schedule and discovered on the worst day.
category: Risk and Continuity
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Risk and Continuity
commercial_domain: Risk and Continuity
primary_pain: Not knowing how much data the business could afford to lose
primary_cost_mechanism: Re-creation labour, delayed or lost billing, customer impact, mis-sized backup spend and compliance exposure after an undefined recovery point
sources:
  - Architecture strategies for defining reliability targets - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/reliability/metrics
  - Disaster recovery options in the cloud - Disaster Recovery of Workloads on AWS: Recovery in the Cloud | https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html
  - SP 800-34 Rev. 1, Contingency Planning Guide for Federal Information Systems - CSRC | https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final
  - Who makes an application to process Special Personal Information? | https://inforegulator.org.za/popia/
related:
  - The spreadsheet only one person understands: Financial and continuity risk | /impact/business-run-on-spreadsheet-one-person-understands-financial-continuity-risk/
  - Recurring tasks that live in someone's memory: The cost of missed work | /impact/recurring-tasks-relying-on-memory-missed-work-cost/
  - One backup method, no fallback: The financial cost of a single point of recovery | /impact/single-backup-method-no-recovery-fallback-cost/
  - Recovery plans list systems but not the business services they support | /discovery/why-recovery-plans-should-be-organised-around-business-services-not-servers/
summary: Most businesses have backups but have never decided how many hours of work they can afford to lose, so the real answer is set by an old default schedule and discovered on the worst day.
layout: plain
---
## The tolerated pain

Ask the owner of a Port Elizabeth engineering firm whether the business is backed up and the answer is a confident yes. Ask a second question, "If the server failed at three o'clock this afternoon, how much of today's work would we lose?", and the room goes quiet. The backup runs at night, probably. Or it runs on Fridays. The IT supplier would know. The owner assumes "not much", the office manager assumes "nothing", and the person who actually looks after the backup assumes the business knows it will lose up to a day.

That unspoken difference is the pain. The business has backups but has never decided how much recent data it can afford to lose. The decision has been made by default, by whichever schedule was set up on the day the system was installed.

This article looks at the financial risk of leaving that decision undefined. It sits alongside, but differs from, the question of how long a recovery will take, covered in [not knowing the recovery time after a major outage](/impact/not-knowing-recovery-time-after-major-outage-unplanned-downtime-cost/). Here the question is how far back in time the business would be thrown.

## What a recovery point actually means

In disaster recovery planning, the **recovery point objective**, usually shortened to RPO, is the maximum amount of data, measured in time, that the business is willing to lose. If the objective is four hours, the backup or replication must be able to restore data to a point no more than four hours before the failure. If the real backup is nightly, then up to a full working day of invoices, orders, job records and emails could vanish, and the business may not know until it tries to restore.

Microsoft's Azure Well-Architected guidance on [reliability metrics](https://learn.microsoft.com/en-us/azure/well-architected/reliability/metrics) describes recovery point objective as a key target to define for a workload, alongside recovery time. The AWS whitepaper on [disaster recovery options in the cloud](https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html) frames its recovery strategies around these same objectives, noting that tighter objectives generally cost more. The principle holds for a ten-person office as well as for a large platform: the shorter the window of acceptable loss, the more it costs to protect, so the objective has to be chosen deliberately.

The US National Institute of Standards and Technology covers contingency planning for information systems in [SP 800-34](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final). It treats identifying how much downtime and data loss each system can tolerate as part of the planning, not something left to the technician's default settings.

## Why businesses never define it

- **The word "backup" feels like an answer.** Having a backup is treated as the end of the matter, not the start of a decision.
- **The schedule was inherited.** Whoever installed the system chose a nightly job, and nobody has questioned it since.
- **It is a business question that sounds technical.** IT assumes the owner has decided. The owner assumes IT has handled it.
- **Different data has different value.** Email, accounting, job records and design files change at different rates, but they are all given the same schedule.
- **Nobody wants to put a price on loss.** Defining an acceptable loss implies admitting that some loss is possible.

## Operational symptoms

- no document that states how often each system is backed up, and why;
- different people giving different answers about how much would be lost;
- the same backup schedule for every system, from the accounting database to the shared drive of old files;
- load-shedding or power failures interrupting backup jobs that no one checks;
- critical data that changes all day, such as orders or timesheets, backed up once overnight;
- a recovery plan that mentions the backup but never the age of the data restored.

## How the pain becomes money

- **Re-creation labour:** after a failure, staff re-enter lost work from emails, paper notes and memory. The time is paid wages, and the accuracy is poor.
- **Lost revenue:** orders, bookings or timesheets that cannot be reconstructed are billed late, billed wrongly or never billed.
- **Customer impact:** customers who gave information or payments that were lost must be contacted and apologised to. Some will not return.
- **Over-spending and under-spending:** without an objective the business may pay for expensive protection of unimportant data, while the data that matters is covered only by a nightly copy.
- **Compliance exposure:** POPIA requires responsible parties to safeguard personal information, and loss of customer or employee records is a type of security compromise to consider. The [Information Regulator's POPIA page](https://inforegulator.org.za/popia/) is the starting point for the regulator's guidance.
- **False confidence:** backups that are never tested or monitored fail quietly, which is described in [unmonitored backups and false recovery confidence](/impact/unmonitored-backups-false-recovery-confidence/).

## An illustrative cost model

The figures below are **illustrative assumptions** for a hypothetical Port Elizabeth engineering firm with 40 staff. The failure is a server fault that is repaired by restoring last night's backup.

| Assumption | Value |
| --- | --- |
| Staff who create data during a working day | 30 |
| Share of the working day that must be re-created after a loss of one day | 50% |
| Hours in a working day | 8 |
| Loaded hourly cost | R210 |
| Billing or order value that is delayed or unrecoverable | R35,000 |
| Management and supplier time | 16 hours at R450 |

- Re-creation labour: 30 × 8 × 50% × R210 = R25,200
- Lost or delayed billing: R35,000
- Management and supplier time: 16 × R450 = R7,200
- **Illustrative cost of one incident: about R67,400**

The comparison is what matters. If the business had decided that four hours was the most it could lose, and its systems were configured to meet that, the same incident might have cost about a fifth of this. The additional protection, such as more frequent backups of the accounting and job database, would typically cost a few hundred rand a month. Without a stated objective, the business cannot make that comparison, and so cannot decide whether the extra protection is worth buying.

## Why the pain is tolerated

Data loss is a rare event, and until it happens the backup appears to be working. The cost of defining the objective is a conversation that takes time and may produce an uncomfortable answer. The cost of not defining it is deferred to the worst possible day. Many owners also assume that cloud systems keep everything permanently, without checking what each service actually retains and how far back it can restore.

## When it becomes commercially urgent

- a server, laptop or cloud account fails and the restored data is older than anyone expected;
- a ransomware or malware incident forces a restore;
- a key customer or tender requires evidence of a recovery plan;
- the business moves to a new system and has to decide how it will be protected;

## What better looks like

The work is mostly conversation and documentation, and then a small amount of configuration.

1. **List the systems that matter.** Accounting, job or order management, email, customer records, shared files and any cloud platform. The method in [how to identify the systems your business actually depends on](/insights/how-to-identify-the-systems-your-business-actually-depends-on/) helps.
2. **Ask one question per system.** "If this failed now, how much recent work could we re-create, and what would that cost?" Use the answer to set a target in hours.
3. **Compare with the real schedule.** Find out how often each system is actually backed up, and where the copy is held.
4. **Close the biggest gaps first.** Move the systems with the fastest-changing and most valuable data to more frequent protection. Leave slow-changing archives on the nightly cycle.
5. **Keep a copy elsewhere.** A backup in the same place as the original shares its fate, as shown in [backups in the same environment](/impact/backups-same-environment-losing-both-copies-risk/).
6. **Test a restore and write down the result.** Record how old the restored data was. That number is the true recovery point, whatever the plan says. See [backups that are never tested](/impact/backups-never-tested-restore-financial-cost/).

The wider point that copies alone do not guarantee continuity is made in [why backups do not equal business resilience](/patterns/why-backups-do-not-equal-business-resilience/).

## Practical next actions

1. Ask three managers separately how much work the business would lose if the main system failed today, and compare the answers.
2. Ask your IT supplier for the actual backup frequency of each important system, in writing.
3. Agree with the owner a maximum acceptable loss, in hours, for the three most important systems.
4. Price the change needed to meet each target, then decide.
5. Run one restore test and note the age of the restored data.
6. Put the targets and test results into a one-page recovery summary and review it every six months.

## Bottom line

Having a backup is not the same as knowing what a failure would cost. The recovery point is the missing number: how many hours of work the business can afford to lose. Until someone sets it, the answer is whatever the installer chose years ago. A short conversation, a list of systems and a restore test turn an accidental risk into a deliberate decision, and show exactly how much protection is worth paying for.
