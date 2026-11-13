---
hub: discovery
record_id: DISC-386
slug: when-a-suppliers-recovery-promise-is-not-written-into-your-contract
title: Third-party recovery commitments are not linked to contracts
description: A hosting provider says it can restore you in four hours, but the contract says nothing. How to trace every outside recovery promise to a clause you can rely on.
lead: A hosting provider says it can restore you in four hours, but the contract says nothing. How to trace every outside recovery promise to a clause you can rely on.
category: Business Continuity & Resilience
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Business Continuity & Resilience
problem_domain: Business Continuity & Resilience
problem_owner: Head of operations or IT manager who owns the continuity plan together with the contract owner
budget_owner: Chief financial officer or managing director
sources:
  - SP 800-34 Rev. 1, Contingency Planning Guide for Federal Information Systems - CSRC | https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final
  - Architecture strategies for disaster recovery - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery
  - Disaster recovery is different in the cloud - Disaster Recovery of Workloads on AWS: Recovery in the Cloud | https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-is-different-in-the-cloud.html
related:
  - RTO targets are copied from templates rather than business impact | /discovery/why-recovery-time-targets-should-come-from-business-impact-not-templates/
  - Cyber recovery and disaster recovery runbooks give conflicting instructions | /discovery/cyber-recovery-and-disaster-recovery-runbooks-give-conflicting-instructions/
  - After a cloud migration, nobody updates who to call in a crisis | /discovery/after-a-cloud-migration-nobody-updates-who-to-call-in-a-crisis/
summary: A hosting provider says it can restore you in four hours, but the contract says nothing. How to trace every outside recovery promise to a clause you can rely on.
layout: plain
---
After a long outage at a hosting provider, a company pulls out its continuity plan. The plan says the provider will restore the customer portal within four hours. The operations manager then opens the contract to see what the provider owes the company for the eight hours it actually took. The contract has a general availability percentage, a service credit that works out to a few hundred rand, and no mention of restoration times at all. The four-hour figure came from a sales presentation two years earlier.

That is the problem this article describes: recovery commitments made by suppliers that are written into the plan but not into the contract.

## The problem in plain language

Every business that relies on a hosted system, a payment provider, a managed network or an outsourced service has a second recovery plan, written by someone else. The supplier's plan decides how quickly your service returns. Your own plan usually repeats what the supplier has said: restored within a few hours, data no more than fifteen minutes old, a secondary site available. Those statements may come from a proposal, a sales call, a support email or a web page.

Unless the statement is also in the signed agreement, or in a schedule that the agreement incorporates, it is a hope, not a commitment. When something goes wrong the supplier is entitled to point to the contract, and the contract may promise something much weaker.

## What the buyer is actually trying to solve

Someone searching for this issue is rarely a lawyer. They are an operations or IT leader who has just realised that the recovery time in their plan depends on a third party, and who wants to know three things. What did the supplier actually agree to? What can we require of them? And what must we cover ourselves because they will not? A new critical service, an insurer's questionnaire or a major incident at a neighbouring company often prompts the question.

## Evidence and system mechanism

### Plans are expected to cover outside parties

Contingency planning guidance treats dependencies on outside parties as part of the plan. NIST's [Contingency Planning Guide for Federal Information Systems](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final) is written for a specific sector, but its approach is widely used: identify the systems and services that support critical functions, set recovery objectives, and make sure the arrangements that support those objectives are in place and tested. A recovery objective that rests on a supplier is only as strong as the arrangement that binds the supplier.

Microsoft's reliability guidance makes a similar point from the operational side. It asks that recovery plans define responsibilities for the people involved, [including any external groups](https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery), and that they list prerequisites. If the plan says "supplier restores the service" but nobody has agreed how the supplier is told, how fast they must respond, or what they must supply, the plan has a hole that only shows during an incident.

### Responsibility for recovery is shared, not transferred

Cloud and hosting providers describe recovery as a shared task. AWS explains in its guidance on [disaster recovery in the cloud](https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-is-different-in-the-cloud.html) that the provider is responsible for the resilience of the underlying cloud infrastructure, while the customer is responsible for the design and recovery of the workloads they run on it. Many software and hosting suppliers draw a similar line. The practical result is that a supplier can be fully compliant with its own commitments while your service is still down, because the part that failed was yours to design.

A contract link is therefore two-sided. It records what the supplier promises, and it records what the supplier explicitly does not promise, so that the business knows which gaps it must close itself.

### The usual breaks between plan and contract

- **Availability is not recovery.** A ninety-nine point nine percent uptime figure describes how often a service is available, not how fast it comes back, or how much data is lost, after a serious failure.
- **Marketing is not a schedule.** Restoration times quoted in a brochure or a trust page can be changed without notice and are not normally part of the agreement.
- **Service credits are not compensation.** A credit against next month's invoice rarely approaches the cost of the lost trading.
- **Subcontractors are invisible.** The supplier may rely on a data centre, a network carrier or another software company whose own commitments sit behind yours.
- **Contacts go stale.** The escalation path in the contract names people who left, or a support desk that is closed at weekends.

## Why it persists

Contracts and continuity plans are owned by different people. Procurement or finance signs the agreement at the start; IT or operations writes the plan later. The supplier's recovery claims arrive in the second stage and are rarely sent back to the first. When the contract renews, the focus is on price. The renewal dynamics are explored in [supplier contracts renewing without review](/impact/supplier-contracts-renewing-without-review/), and the same blind spot applies to recovery terms.

## What good looks like

A business with this under control keeps a register with one line for each critical supplier. Each line records the recovery commitment that the plan relies on, the contract clause or schedule that supports it, the evidence the supplier has provided, the date it was last tested, and the gap the business covers itself. Where no clause exists, the register says so plainly and a decision is recorded: ask for one, accept the risk, or add a second supplier.

| Supplier service | Commitment the plan relies on | Contract reference | Evidence held | Gap we cover |
| --- | --- | --- | --- | --- |
| Hosted accounting system | Restored within four hours | Clause or schedule number, or "none" | Latest recovery test summary | Manual invoicing procedure |
| Internet and WAN link | Fault repair within a stated time | Service level schedule | Fault history | Mobile data fallback |

The register links naturally to your dependency view. If you have not mapped which suppliers support which critical services, the problem described in [critical suppliers chosen without a dependency check](/impact/critical-suppliers-chosen-without-dependency-check-vendor-failure-cost/) is the place to start.

## Risks and trade-offs

Suppliers do not always agree to tighter terms, especially standard software-as-a-service platforms whose terms are the same for every customer. A small business may have little leverage. In those cases the register still has value, because it turns an assumption into a recorded risk and points to what you must do yourself: keep an independent export of your data, document a manual workaround, or choose a different provider at the next renewal. The question of leaving a supplier is covered in [data export limits discovered only when leaving a vendor](/discovery/data-export-limits-discovered-only-when-leaving-a-vendor/).

Contract language also needs legal review. Nothing in this article replaces advice from an attorney on drafting or enforcing terms.

## Practical next actions

1. List the five suppliers whose failure would stop trading, and for each write down the recovery time and data-loss figures that your continuity plan assumes they will meet.
2. Find the source of each assumption. Mark it as contract clause, schedule, supplier email, web page or verbal, and give the contract owner the items that are not in a signed document.
3. For each unsupported item, send the supplier a short written request to confirm the figure in writing and to say whether it can be added to the agreement or a service schedule.
4. Ask each critical supplier for their latest recovery test summary or equivalent evidence, and file it next to the contract.
5. Record the gaps you will cover yourself, assign an owner, and add contract review to the calendar at least ninety days before each renewal date.

## When it is worth getting help

If several critical services depend on overlapping suppliers, or a recent incident has shown that the plan and the contracts disagree, an independent review can map the dependencies and produce a register without taking sides between departments. The result should be short enough that the next person to inherit the plan can see, in one page, what each supplier has really promised.
