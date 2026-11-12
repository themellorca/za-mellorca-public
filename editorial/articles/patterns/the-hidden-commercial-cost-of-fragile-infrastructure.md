---
hub: patterns
record_id: PAT-328
slug: the-hidden-commercial-cost-of-fragile-infrastructure
title: The Hidden Commercial Cost of Fragile Infrastructure
description: Small outages, slowdowns and workarounds each look harmless, yet together they drain wages, sales and customer confidence. Here is how to see the cost and decide what to fix first.
lead: Small outages, slowdowns and workarounds each look harmless, yet together they drain wages, sales and customer confidence. Here is how to see the cost and decide what to fix first.
category: Technology Foundations, Reliability & Continuity
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Technology Foundations, Reliability & Continuity
pattern_family: Technology Foundations, Reliability & Continuity
observable_condition: The business experiences repeated short outages, slowdowns and workarounds on connectivity, power or core systems, each treated as an annoyance, with no record of how often they happen or what they cost.
primary_identification: Unpriced infrastructure fragility: single points of failure and ageing equipment produce cumulative losses that are never measured, so resilience cannot be compared with the cost of disruption.
commercial_value_dimensions: Revenue protection, labour productivity, customer retention, margin and business continuity
sources:
  - Reliability design principles - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/reliability/principles
  - Google SRE - Embracing risk and reliability engineering book | https://sre.google/sre-book/embracing-risk/
  - Common Incident Management Metrics - Atlassian | https://www.atlassian.com/incident-management/kpis/common-metrics
related:
  - The Hidden Cost of Asking Customers for the Same Information Twice | /patterns/the-hidden-cost-of-asking-customers-for-the-same-information-twice/
  - When One Unmonitored Component Can Stop a Critical Service | /patterns/when-one-unmonitored-component-can-stop-a-critical-service/
  - The Hidden Cost of Re-Keying Order Information | /patterns/the-hidden-cost-of-re-keying-order-information/
summary: Small outages, slowdowns and workarounds each look harmless, yet together they drain wages, sales and customer confidence. Here is how to see the cost and decide what to fix first.
layout: plain
---
## Observable condition

The business runs on a handful of things that nobody thinks about until they stop: a single internet line, a server in a cupboard, a router that was installed years ago by someone who has since left, a backup that may or may not be running. Most days they work. Every few weeks something wobbles. The connection drops for twenty minutes, the accounting system is slow, the card machines will not connect, or the shared drive disappears for an hour.

Each incident is treated as an annoyance. Someone restarts something, the team makes tea, and work resumes. Nobody adds up the incidents, because each one is small and none of them is anybody's job to track. The cost is spread across dozens of people in ten-minute and thirty-minute pieces, and it never appears as a line in the management accounts.

An illustrative example: a Cape Town wholesale distributor with about seventy staff takes orders by phone and email and processes them through an on-premises system. Over a winter, load-shedding and a failing switch cause six interruptions of between twenty minutes and half a day. Each is dealt with as it happens. At year end, the managing director learns that two key customers have moved part of their volume to a competitor, citing "reliability".

## Realisation

Fragile infrastructure is expensive in ways that are hard to see. The visible cost is the repair: a technician's call-out, a replacement part. The larger cost is the time lost across the business while the problem lasts, the work that has to be redone afterwards, the customer who was told "our system is down" and the sale that went elsewhere.

The Microsoft Azure Well-Architected Framework, which is written for cloud workloads but expresses ideas that apply more widely, defines reliability as the ability of a system to recover from failures and continue to function. It also stresses that failures will happen and that the sensible response is to design for them and to define how much disruption the business can tolerate. Google's Site Reliability Engineering guidance makes a related point: reliability is not an absolute, it is a business decision about how much unreliability is acceptable at what cost. Most small and mid-sized businesses have never made that decision. They have the reliability they happened to inherit.

**Realisation prompt:** if your main system or connection failed for four hours on a busy day, could you say, within a rough range, what that would cost in rand?

## Identification

This is a pattern of unpriced infrastructure fragility. The visible symptom is a series of small outages and slowdowns. The common assumption is that these are normal, unavoidable and cheaper to tolerate than to fix. The structural cause is that the cost of disruption is never measured, so the business cannot compare it with the cost of resilience.

The published Pattern [why a small technical failure stops the whole business](/patterns/why-does-a-small-technical-failure-stop-the-whole-business/) explains how single points of failure turn minor faults into stoppages. This Pattern is about the commercial side: what the fragility costs over a year in lost sales, rework, overtime and customer confidence, and why that cost stays hidden.

## Diagnosis

- **Single points of failure.** One internet line, one firewall, one person who knows the passwords. When it fails, there is no alternative path.
- **Ageing equipment nobody owns.** Switches, routers and servers continue to run past their support dates because replacing them is nobody's budget line.
- **No record of incidents.** Without a simple log of what failed, when and for how long, patterns cannot be seen and each failure feels new.
- **Unknown recovery time.** Nobody knows how long it takes to restore the main system from backup, because it has never been tested.
- **Power treated as someone else's problem.** Load-shedding schedules are published, yet critical equipment may have no battery backup or only a battery that no longer holds a charge.
- **Repairs only after failure.** Maintenance is reactive, so every fix is urgent and expensive.

## Commercial impact

The commercial value at stake is revenue protection, labour productivity, customer retention, margin and business continuity.

Consider the arithmetic for a seventy-person business. If an hour of disruption idles even twenty people at a fully loaded cost of R250 an hour, that is R5,000 of wages for an hour in which they produced little. Add the orders that could not be captured, the card payments that were declined, the overtime to clear the backlog and the credit notes issued for late deliveries, and the figure rises quickly. Six incidents in a season can cost more than a proper fix, yet they are never added together. The Impact page on [not knowing the hourly cost of downtime](/impact/not-knowing-hourly-cost-of-downtime/) sets out how to estimate the figure, and [relying on a single internet connection](/impact/single-internet-connection-business-downtime-risk/) covers one of the commonest single points of failure.

The reputational cost is slower and larger. Customers rarely complain about one outage. They quietly shift some of their orders to a supplier who always answers.

## Common misidentification

Fragile infrastructure is often blamed on the provider: the internet service provider, the software vendor or the municipality. Sometimes they are at fault, but a business that has never defined what it needs from them, or built a fallback, is exposed whoever the provider is.

The opposite mistake is to buy expensive redundancy everywhere. Not every system needs to be available around the clock. Without knowing what an hour of disruption costs for each system, spending is guesswork in either direction. The Insight [why recurring systems maintenance is cheaper than emergency repair](/insights/why-recurring-systems-maintenance-is-cheaper-than-emergency-repair/) makes the case for steady, planned attention rather than either neglect or over-engineering.

## Possibility

In a more resilient state, the business knows which systems it cannot do without, how long it can cope without each, and what happens if they fail. Critical equipment has battery backup sized for the load-shedding schedule. There is a second connection, perhaps a mobile data failover, for the few processes that depend on being online. Backups are tested by restoring from them. Incidents are logged, reviewed monthly, and the worst repeat offenders are replaced before they fail.

None of this requires a large budget. It requires a decision about which systems matter most and a modest, regular spend on keeping them healthy. The Insight [what digital infrastructure means for a modern business](/insights/what-digital-infrastructure-means-for-a-modern-business/) offers a plain-language map of the components involved.

For the distributor, that could mean a failover connection for the order-entry team, battery backup on the switch and server, a tested restore of the order system, and a simple incident log. The cost would be a fraction of the volume that two customers moved away.

## Intervention

1. **List the critical systems.** Identify the five or six systems, connections and devices without which sales, delivery or invoicing stop.
2. **Start an incident log.** Record every interruption: what failed, when, how long, who was affected and what was lost. A shared spreadsheet is enough.
3. **Price an hour.** For each critical system, estimate the cost of an hour offline: idle wages, missed sales, rework and penalties.
4. **Find the single points of failure.** Note where one device, line or person is the only path. Rank them by the cost of failure and the cost of a fix.
5. **Test recovery.** Restore a backup to a spare machine and time it. Compare the result with what the business can tolerate.
6. **Fund the cheapest, highest-value fixes first.** Typically batteries, a failover line and replacing out-of-support equipment come before anything more elaborate.
7. **Review quarterly.** Check the incident log, update the costs and retire the next piece of ageing equipment.

## Diagnostic questions

- How many unplanned interruptions did the business have in the last twelve months, and do you have a record?
- Which single device or connection would stop sales if it failed today?
- Has anyone restored the main system from backup, and how long did it take?
- What happens to your critical equipment during a two-hour load-shedding slot?
- Have any customers mentioned reliability in the last year?

## Bottom line

Fragile infrastructure does not usually announce itself as a crisis. It shows up as dozens of small losses that nobody adds together. Once the business records the incidents, prices an hour of disruption and removes its few biggest single points of failure, the cost becomes visible and the fix becomes an ordinary investment decision. The reward is fewer bad days, steadier service and customers who stay.
