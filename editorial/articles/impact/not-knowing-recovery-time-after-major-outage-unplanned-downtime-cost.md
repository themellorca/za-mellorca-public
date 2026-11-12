---
hub: impact
record_id: CPS-155
slug: not-knowing-recovery-time-after-major-outage-unplanned-downtime-cost
title: How Long Until We Are Back? The Cost of Not Knowing Your Recovery Time
description: Most businesses cannot say how long recovery would take after a major outage. Setting recovery targets and testing a restore turns an open-ended, expensive unknown into a number you can plan around.
lead: Most businesses cannot say how long recovery would take after a major outage. Setting recovery targets and testing a restore turns an open-ended, expensive unknown into a number you can plan around.
category: Business Continuity
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Business Continuity
commercial_domain: Business Continuity
primary_pain: Not knowing how long the business would take to recover after a major outage
primary_cost_mechanism: Idle labour, lost sales and delayed invoicing, penalties, emergency improvisation and mis-sized resilience spending
sources:
  - What are Business Continuity, High Availability, and Disaster Recovery? | https://learn.microsoft.com/en-us/azure/reliability/concept-business-continuity-high-availability-disaster-recovery
  - About Azure Site Recovery - Azure Site Recovery | https://learn.microsoft.com/en-us/azure/site-recovery/site-recovery-overview
  - SP 800-34 Rev. 1, Contingency Planning Guide for Federal Information Systems - CSRC | https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final
  - Disaster recovery options in the cloud - Disaster Recovery of Workloads on AWS: Recovery in the Cloud | https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html
related:
  - One Backup Method, No Fallback: The Financial Cost of a Single Point of Recovery | /impact/single-backup-method-no-recovery-fallback-cost/
  - When One Employee Knows How Everything Works | /impact/key-person-operational-dependency/
  - The Cost of Paid Time Spent Searching for Files | /impact/employees-searching-for-files-lost-productivity-cost/
summary: Most businesses cannot say how long recovery would take after a major outage. Setting recovery targets and testing a restore turns an open-ended, expensive unknown into a number you can plan around.
layout: plain
---
## The tolerated pain

Ask the owner of a 50-person business a simple question: "If your main server, your internet line or your accounting system went down at nine tomorrow morning, when would you be trading again?" The usual answer is a hopeful one. "Probably by lunch." "Our IT guy would sort it." "We have backups." Press a little and the answer becomes a guess. Nobody has written down how long recovery would take, in what order systems would return, or what the business would do in the meantime.

That uncertainty is the pain. Outages are not rare, and in South Africa the causes include power cuts, cable theft, ISP faults, ransomware, failed updates and ordinary human error. The cost of an outage depends heavily on how long it lasts. A business that does not know its recovery time cannot decide how much to spend on avoiding it, cannot tell customers when service will resume and cannot judge whether its insurance, backups and suppliers are adequate. Two neighbouring articles cover related ground: [not knowing the hourly cost of downtime](/impact/not-knowing-hourly-cost-of-downtime/) and [backups that were never tested](/impact/backups-never-tested-restore-financial-cost/). This article is about the missing answer to "how long?".

## Two numbers every business should have

Disaster recovery planning uses two terms. Microsoft's [guidance on business continuity and disaster recovery](https://learn.microsoft.com/en-us/azure/reliability/concept-business-continuity-high-availability-disaster-recovery) defines the Recovery Time Objective (RTO) as the maximum duration of acceptable downtime in the event of a disaster, and the Recovery Point Objective (RPO) as the maximum duration of acceptable data loss. Both are measured in units of time, for example "eight hours of downtime" or "four hours of data". The same guidance notes that a complete plan sets these for each critical flow in the business, not as one figure for everything.

The terms come from large-system engineering, but the ideas are plain:

- **How long can we be down** before the damage becomes unacceptable?
- **How much recent work can we afford to lose**, and so how often must data be copied?

Most small and mid-sized businesses can answer neither, and so have no basis for checking whether their actual recovery would meet the need. Microsoft's [Site Recovery overview](https://learn.microsoft.com/en-us/azure/site-recovery/site-recovery-overview) lists keeping RTO and RPO within organisational limits as a core purpose of replication tools. That only makes sense if the organisation has decided its limits. NIST's [Contingency Planning Guide for Federal Information Systems](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final) is written for government, but its central idea applies to any business: plan recovery in advance, rank systems by importance and rehearse the plan.

## Why businesses tolerate it

- **"We have backups" feels like an answer.** A backup shows data exists. It does not show how long it takes to restore it, onto what, and by whom.
- **Outages have been short so far.** Experience of a 90-minute outage does not prepare a business for a three-day one.
- **Recovery depends on a few people.** One IT person or one external supplier "knows how it works", which feels reassuring until they are unavailable.
- **Planning has no deadline.** Unlike a tax return, a recovery plan is never due, so it is never done.
- **Each part seems fine.** The server vendor, the backup provider and the ISP each have a service level, but nobody has added them together.

## Operational symptoms

- no written list of which systems matter most or in what order they should be restored;
- restore time that has never been measured by actually doing a restore;
- dependence on a single internet line, a single server or a single person; see [single internet connection and the risk of business downtime](/impact/single-internet-connection-business-downtime-risk/);
- staff unsure what to do when the system is down: wait, use paper, go home?
- no agreed message to tell customers and suppliers what has happened;
- backups that run but whose success is not checked, as explained in [unmonitored backups and false recovery confidence](/impact/unmonitored-backups-false-recovery-confidence/).

## How the pain becomes money

- **Idle labour:** staff are paid while unable to work. Every hour of downtime is an hour of wages with no output.
- **Lost sales and delayed invoicing:** orders cannot be taken, goods cannot be dispatched and invoices wait. Cash flow slips even when sales are eventually recovered.
- **Penalties and broken commitments:** service-level agreements, delivery promises and payment deadlines are missed.
- **Customer attrition:** an outage with no communication damages trust more than the outage itself.
- **Expensive improvisation:** emergency IT call-outs, rushed hardware purchases and overtime to clear the backlog all cost more than planned work.
- **Over- or under-spending on resilience:** without a target, a business either buys expensive protection it does not need or none at all. The target is what makes the spending decision rational.

## An illustrative cost model

This example is **illustrative**. All figures are assumptions for a hypothetical Pretoria logistics company with 40 staff. The outage durations are planning scenarios, not predictions.

| Assumption | Value |
| --- | --- |
| Staff who cannot work during a core system outage | 30 |
| Loaded hourly cost per person | R200 |
| Gross margin lost per hour (orders not captured or dispatched) | R6,500 |
| Emergency support and rework per incident | R25,000 |
| Scenario A: planned recovery, 4 hours | Written plan, tested restore |
| Scenario B: unplanned recovery, 20 hours | Untested restore, key person unavailable |

- Hourly cost: 30 × R200 = R6,000 of idle labour plus R6,500 of margin = R12,500 per hour
- Scenario A: 4 × R12,500 + R10,000 support = R60,000
- Scenario B: 20 × R12,500 + R25,000 = R275,000
- **Illustrative difference for one incident: about R215,000**

The point of the model is the gap, not the totals. Knowing the recovery time moves a business from the second column to the first. Use your own staff numbers, and use the method in [not knowing the hourly cost of downtime](/impact/not-knowing-hourly-cost-of-downtime/) to firm up the hourly figure.

## When it becomes commercially urgent

- a customer contract or tender asks for recovery times or a continuity plan;
- the business moves a core process, such as order capture or payroll, onto one system;
- load-shedding or an area-wide fault repeatedly interrupts trading;
- cyber insurance questionnaires ask for recovery objectives and the answer is blank;
- the person who "knows the systems" resigns or goes on leave.

## What better looks like

A workable recovery position for a small business can be reached in weeks, not months.

1. **List the critical processes.** Taking orders, dispatching, invoicing, paying wages and answering customers are typical. Rank them by how quickly their absence hurts.
2. **Set a target for each.** Decide how many hours of downtime and how much lost data each can tolerate. Different processes will have different answers.
3. **Map what each depends on.** Servers, cloud services, internet, power, suppliers and people. Look for single points of failure.
4. **Test an actual restore.** Time it from start to a working system. The result is your real recovery time, which may differ sharply from the target. AWS's overview of [disaster recovery options in the cloud](https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html) shows how the options range from simple backup and restore to fully duplicated environments, with faster recovery costing more. It is a useful way to see the trade-off between speed and spend.
5. **Close the biggest gap first.** That may be a second internet line, a tested backup, a written runbook or a cover person.
6. **Write a one-page "when it breaks" sheet.** Who to call, what staff do meanwhile, what customers are told and in what order systems return.
7. **Repeat once a year.** Systems change, and so does the recovery time.

If a second copy of data kept in the same environment is a concern, [backups in the same environment and the risk of losing both copies](/impact/backups-same-environment-losing-both-copies-risk/) explains why location matters.

## Practical next actions

1. Ask your IT provider, in writing: "If our main system failed today, how long until we are trading again, and how do you know?"
2. Pick your three most critical processes and write a target recovery time for each.
3. Schedule a timed test restore of one system within the next month.
4. Record the real result and compare it with the target.
5. Fix the largest gap, and write a one-page response sheet that is stored where staff can reach it without the system that is down.
6. Put an annual review in the calendar.

## Bottom line

Not knowing how long recovery would take is a cost carried in advance. It shows up as over-spending or under-spending on resilience, as longer and more chaotic outages and as awkward questions from customers, insurers and auditors. A target, a tested restore and a one-page plan convert that uncertainty into a number, and a number is something a business can manage, fund and improve.
