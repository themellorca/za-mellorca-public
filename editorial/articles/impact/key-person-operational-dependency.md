---
hub: impact
record_id: CPS-478
slug: key-person-operational-dependency
title: When one employee knows how everything works
description: Key-person dependency turns undocumented operational knowledge into a continuity, capacity and scaling risk.
lead: Expert employees create value. The risk begins when critical procedures, credentials, vendor relationships and exception logic exist only in one person's memory.
category: Operational Resilience
published_date: 2026-09-03
updated_date: 2026-09-03
tags:
  - Continuity
  - Capacity
  - Recovery
cta_label: Digital Systems Audit
cta_href: /services/digital-systems-audit/
side_title: Cost mechanisms
sources:
  - https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf | https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf
  - How we identify and mitigate single-points-of-failure (SPOF) – Justice Digital, Data and Science | https://mojdigital.blog.gov.uk/2021/08/03/how-we-identify-and-mitigate-single-points-of-failure-spof/
  - Manage emergency access admin accounts - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/security-emergency-access
  - Basic Guide to Sick Leave | https://www.labour.gov.za/DocumentCenter/Pages/Basic-Guide-to-Sick-Leave.aspx
related:
  - When one Internet connection can stop the business | /impact/single-internet-connection-business-downtime-risk/
  - The cost of paid time spent searching for files | /impact/employees-searching-for-files-lost-productivity-cost/
  - Backups nobody has tested: The cost when recovery fails | /impact/backups-never-tested-restore-financial-cost/
---
## The tolerated pain

Businesses often celebrate the person who can fix every exception. Over time that competence becomes infrastructure: colleagues wait for them, approvals route through them, suppliers know only them and undocumented work stops when they are unavailable.

Expert employees create value, and the problem is not their expertise. The risk begins when critical procedures, credentials, vendor relationships and exception logic exist only in one person's memory. At that point, the business is no longer relying on a capable colleague. It is relying on a single point of failure that happens to be human.

## Why businesses tolerate it

Key-person dependency grows out of good intentions. The most capable person takes on the difficult work because it is faster than explaining it. Documentation feels like a distraction from delivery. The arrangement works for years, so it feels safe.

The dependency is often invisible to the person at the centre of it as well. They do not think of their knowledge as undocumented; they simply know it. And because they are reliable, nobody plans for their absence, even though absence is certain. In South Africa, the Basic Conditions of Employment Act gives workers [paid sick leave equal to the days they would normally work in a six-week period, over a three-year cycle](https://www.labour.gov.za/DocumentCenter/Pages/Basic-Guide-to-Sick-Leave.aspx). Planned and unplanned absence is a normal, foreseeable part of employment, not an exceptional event.

## Operational consequence

Dependency shows up long before anyone resigns:

- critical work queues behind one person;
- leave, illness or departure can interrupt operations;
- new employees take longer to become productive;
- management cannot confidently change systems or suppliers;
- high-value specialists spend time answering repeatable operational questions.

Add to this the human cost. The indispensable person often cannot take uninterrupted leave, carries a growing load of informal support and becomes a bottleneck through no fault of their own. That pattern is itself a retention risk, which makes the dependency more likely to be tested.

## How it becomes money

> dependency exposure = critical processes with one capable operator × business impact of interruption × expected recovery time

This is a scenario model, not a generic benchmark. Use the business's own process criticality and recovery assumptions.

Contingency planning offers useful language. NIST's [Contingency Planning Guide for Federal Information Systems (SP 800-34 Rev. 1)](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf) defines maximum tolerable downtime as the total time a process owner is willing to accept for an outage or disruption, and recovery time objective as the maximum time a resource can remain unavailable before there is an unacceptable impact. The guide was written for information systems, but the questions transfer well to people-dependent processes: how long could this process stop before the damage becomes unacceptable, and how long would recovery take if the only operator were unavailable?

### An illustrative cost model

Assume one person runs month-end billing and nobody else can. Every figure below is an **illustrative assumption**.

| Cost element | Illustrative assumption | Cost |
| --- | --- | --- |
| Delayed cash collection | R1,500,000 monthly billing delayed 10 days, financed at 12% a year: R1,500,000 × 12% × 10 ÷ 365 | R4,932 |
| Emergency cover | 30 hours of contractor or overtime × R600 | R18,000 |
| Rework from improvised workarounds | 2% of 300 invoices reissued = 6 invoices × 1.5 hours × R250 | R2,250 |
| **Cost of one two-week absence** |  | **R25,182** |

The arithmetic: R1,500,000 × 0.12 = R180,000 a year; ten days of that is R180,000 × 10 ÷ 365 = R4,931.51, rounded to R4,932. 30 × R600 = R18,000. 300 × 2% = 6 invoices; 6 × 1.5 = 9 hours; 9 × R250 = R2,250. The total is R4,932 + R18,000 + R2,250 = R25,182.

That is the visible incident cost for one process. The quieter, recurring cost is capacity. If the same specialist spends 6 hours a week answering repeatable questions, over 46 working weeks that is 276 hours × R450 loaded hourly cost = **R124,200 a year** of senior time spent as a help desk.

Compare that with an illustrative fix: 40 hours to document the process at R450 (R18,000), plus 30 hours of cross-training in which both the specialist (R450) and a backup (R250) participate, at R700 an hour combined (R21,000). The one-off cost is R39,000, less than a third of one year of the R124,200 help-desk time, and about one and a half times the cost of a single two-week absence. The model excludes the larger, harder-to-quantify risks, such as a lost customer or missed statutory deadline, which can dwarf these figures and should be assessed qualitatively.

## When it becomes commercially urgent

Ask: “What would stop tomorrow if this person were unavailable for two weeks?” The answers reveal where knowledge has become a single point of failure.

Treat it as urgent when the key person has resigned or is close to retirement, when they have not taken uninterrupted leave in a long time, when a system migration or supplier change depends on knowledge only they hold, or when the business is preparing for sale, investment or audit. A business that cannot operate without one individual is harder to hand over, value and scrutinise.

## What better looks like

Critical procedures have named owners and backups; credentials use managed access rather than personal custody; recurring exceptions are documented; supplier contacts are organisational; and important operating knowledge is embedded in systems, runbooks and workflows.

## Practical actions

1. Identify processes with only one competent operator.
2. Rank them by revenue, customer, compliance and continuity impact.
3. Document normal steps, exception rules, dependencies and recovery actions.
4. Cross-train a backup and test the handover.
5. Move shared credentials and vendor records into governed systems.
6. Redesign recurring manual coordination that keeps recreating the dependency.

Test the handover for real: let the backup run the process while the specialist is available but hands-off. The gaps that appear are the ones that would have stopped the business. The Insights articles [Key-Person Dependency Is a Systems Problem](/insights/key-person-dependency-is-a-systems-problem/) and [How to Design Workflows That Can Survive Staff Changes](/insights/how-to-design-workflows-that-can-survive-staff-changes/) explore the design side in more depth.

## Bottom line

The problem is not having indispensable people. It is allowing the business to become technically incapable of operating without them. Documenting, cross-training and embedding knowledge in systems is a modest, one-off cost set against a recurring drain on capacity and a continuity risk that will eventually be tested, and it frees the expert to do the work only they can do.

**In summary:** key-person dependency is a foreseeable continuity and capacity risk. Map it, cost it with your own figures, and remove it deliberately before leave, illness or resignation tests it for you.

Key-person dependency rarely sits on its own. It often travels with systems that lose their only knowledgeable owner, described in [application owners who leave without a transfer](/discovery/application-owners-leave-without-transfer/), and with automations that stop when one person's login changes, the subject of [why automations should not run on personal credentials](/discovery/why-automations-should-not-run-on-personal-credentials/). Where the specialist has also become the link between systems, [high-value employees acting as human middleware](/patterns/why-high-value-employees-become-human-middleware/) shows how that capacity cost builds up.
