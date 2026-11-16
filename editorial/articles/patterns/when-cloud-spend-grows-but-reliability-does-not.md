---
hub: patterns
record_id: PAT-337
slug: when-cloud-spend-grows-but-reliability-does-not
title: When Cloud Spend Grows but Reliability Does Not
description: The monthly cloud bill keeps rising, yet outages and slowdowns are no rarer than before. Why spending and reliability drift apart, and how to reconnect them.
lead: The monthly cloud bill keeps rising, yet outages and slowdowns are no rarer than before. Why spending and reliability drift apart, and how to reconnect them.
category: Cloud, Infrastructure & Reliability
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Cloud, Infrastructure & Reliability
pattern_family: Cloud, Infrastructure & Reliability
observable_condition: The monthly cloud and hosting bill rises year on year, yet staff and customers still experience outages, slow systems and failed integrations about as often as before.
primary_identification: Spend without reliability targets: money is added to capacity and services without defined service levels, failure design or change discipline, so cost and reliability are managed separately.
commercial_value_dimensions: Resilience, cost, revenue protection, customer experience and management confidence
sources:
  - Reliability Pillar - AWS Well-Architected Framework - Reliability Pillar | https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html
  - Google SRE - Defining slo: service level objective meaning | https://sre.google/sre-book/service-level-objectives/
  - FinOps Framework Overview | https://www.finops.org/framework/
related:
  - When your website is up but the business process behind it is down | /patterns/when-your-website-is-up-but-the-business-process-behind-it-is-down/
  - Why backups do not equal business resilience | /patterns/why-backups-do-not-equal-business-resilience/
  - Why does a small technical failure stop the whole business? | /patterns/why-does-a-small-technical-failure-stop-the-whole-business/
summary: The monthly cloud bill keeps rising, yet outages and slowdowns are no rarer than before. Why spending and reliability drift apart, and how to reconnect them.
layout: plain
---
## Observable condition

The cloud bill is higher this year than last, and last year was higher than the year before. Some of the increase is growth, some is price, and some nobody can quite explain. Yet when the online ordering system stalls on a Friday afternoon, or the accounting integration fails overnight, the business is no better off than it was when the bill was half the size. The money went up. The reliability did not.

Ask why the spend rose and the answers are reasonable: a larger server after a slowdown, a second environment for testing, an extra service a supplier recommended, more storage. Ask what level of reliability the business is paying for and there is usually no answer at all.

An illustrative example: a Cape Town online retailer whose hosting costs have roughly doubled over three years. Each increase followed an incident: a slow site during a sale, a database that ran out of space, a failed backup. Each fix added capacity. The site still goes down when a single integration with the courier fails, because that dependency was never designed to fail gracefully.

## Realisation

The realisation is that cloud spend and reliability are related but not linked. Paying for more capacity helps when the problem is capacity. Many outages are caused by something else: a single point of failure, an untested change, an expired certificate, a dependency nobody monitors. More money spent on the parts that were not failing does nothing for the part that was.

The reliability guidance published by cloud providers makes the same point. The [AWS Well-Architected reliability pillar](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html) attributes reliability to strong foundations, resilient architecture, consistent change management and proven failure recovery processes. None of those is purchased by default with a larger bill.

**Realisation prompt:** for your three most important systems, what availability are you actually aiming for, and how would you know if you missed it last month?

## Identification

This is a pattern of spending without reliability targets. The visible symptom is a rising bill alongside unchanged or worsening incidents. The common assumption is that reliability is a function of how much is spent, or that the cloud provider is responsible for it. The structural cause is that the business never defined what reliable means for each service, so spending decisions are made reactively after incidents and are not tested against any target.

It sits alongside the Pattern [when infrastructure faults are first reported by customers](/patterns/when-infrastructure-faults-are-first-reported-by-customers-not-by-monitoring/), which looks at detection. Here the focus is the gap between what is paid for and what is achieved.

## Diagnosis

- **No service levels are defined.** Without a target, there is no way to say whether a service is reliable enough, or whether spending more would help. The [Google SRE book chapter on service level objectives](https://sre.google/sre-book/service-level-objectives/) describes how a measured indicator, such as availability or latency, and an agreed target for it give teams a shared definition of acceptable service.
- **Incidents are fixed with capacity.** A slowdown leads to a bigger server, whether or not size was the cause. The underlying fault stays.
- **Single points of failure are unmapped.** One integration, one internet line, one administrator account or one database can still stop the business, however much is spent elsewhere.
- **Changes are not controlled.** Updates are made directly in production without testing or a way back, so many incidents are self-inflicted.
- **Cost and reliability have different owners.** Finance sees the bill, IT or a supplier sees the incidents, and nobody looks at both together. The [FinOps Foundation framework](https://www.finops.org/framework/) exists precisely to create shared financial accountability across engineering, finance and business teams.

## Commercial impact

The commercial value at stake is resilience, cost control and the revenue that depends on systems being available.

The direct cost is money spent on capacity and services that do not reduce the incidents that actually hurt. The indirect cost is the outages themselves: orders that cannot be placed, staff who cannot work, data that must be re-entered after a failed integration. The Impact note on [not knowing recovery time after a major outage](/impact/not-knowing-recovery-time-after-major-outage-unplanned-downtime-cost/) describes how that uncertainty turns into downtime cost.

There is a confidence cost as well. When leaders see the bill rise and the incidents continue, they lose trust in technology spending generally. Good investments become harder to approve, and the business can end up underinvesting in exactly the reliability work it needs.

## Common misidentification

One common response is to cut cloud costs across the board. That reduces the bill but can remove capacity or redundancy that was doing useful work. The opposite response is to move to a premium tier or a different provider in the hope of better uptime. Without fixing the single points of failure and the change practices, the same incidents follow the business to the new platform.

## Possibility

In a better state, the business has written down a small number of reliability targets for the services that matter most, measures them every month, and reviews spending against them. Spending that does not support a target is questioned. Reliability gaps are traced to their real cause, which is often design or process rather than capacity, and the fix is chosen accordingly. Cost and incidents are reviewed together, by the people who own each.

## Intervention

Start with definitions, not with cuts or upgrades. A business that knows what reliability it needs can spend toward it deliberately.

## Practical next actions

1. **List your critical services.** Name the five systems or integrations whose failure most affects customers or revenue.
2. **Set a simple target for each.** For example, available during trading hours on all but a set number of hours a month, or orders synced within fifteen minutes. Keep the targets few and plain.
3. **Review the last ten incidents.** For each, record the real cause and whether the spending increase that followed addressed it.
4. **Map single points of failure.** For each critical service, note any one component, connection or person whose loss would stop it.
5. **Put the bill and the incident log on one page.** Review them together monthly, with both finance and the technical owner present.
6. **Control changes to critical services.** Require a test and a way back for changes, and record them, so incidents can be traced to recent changes quickly.

## Diagnostic questions

- What reliability target has been agreed for each of your critical systems?
- Did your last three spending increases fix the cause of the incident that triggered them?
- Which single component or connection could stop your business today?
- Who looks at the cloud bill and the incident history at the same time?
- How many recent incidents followed a change made without testing?

## Article summary

A rising cloud bill does not buy reliability unless spending is aimed at defined targets and at the real causes of failure. Setting a few clear reliability goals, tracing incidents to their causes and reviewing cost and incidents together lets the business spend less where it is wasted and more where it protects revenue. If this condition is familiar in your business, [explore our solutions](/solutions/) or [start a conversation](/contact/) so we can examine where your reliability gaps sit and how Mellorca may be able to help.
