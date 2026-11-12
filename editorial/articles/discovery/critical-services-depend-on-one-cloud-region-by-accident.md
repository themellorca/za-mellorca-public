---
hub: discovery
record_id: DISC-318
slug: critical-services-depend-on-one-cloud-region-by-accident
title: Why critical services end up depending on one cloud region by accident
description: Many businesses run production, backups and hidden dependencies in a single cloud region without ever deciding to. How that happens, what it risks, and how to choose resilience deliberately.
lead: Many businesses run production, backups and hidden dependencies in a single cloud region without ever deciding to. How that happens, what it risks, and how to choose resilience deliberately.
category: Cloud, Infrastructure & Platform Operations
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Cloud, Infrastructure & Platform Operations
problem_domain: Cloud, Infrastructure & Platform Operations
problem_owner: Head of IT or infrastructure, with business service owners
budget_owner: CIO or COO
sources:
  - Azure region pairs and nonpaired regions | https://learn.microsoft.com/en-us/azure/reliability/regions-paired
  - Global services - AWS Fault Isolation Boundaries | https://docs.aws.amazon.com/whitepapers/latest/aws-fault-isolation-boundaries/global-services.html
  - Disaster recovery options in the cloud - Disaster Recovery of Workloads on AWS: Recovery in the Cloud | https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html
related:
  - When capacity planning only happens after something has gone down | /discovery/capacity-planning-only-after-incidents/
  - Why old DNS records pile up after services are retired, and why it matters | /discovery/dns-records-left-behind-after-services-are-retired/
  - Why infrastructure diagrams are out of date as soon as the project ends | /discovery/infrastructure-diagrams-out-of-date-when-projects-end/
summary: Many businesses run production, backups and hidden dependencies in a single cloud region without ever deciding to. How that happens, what it risks, and how to choose resilience deliberately.
layout: plain
---
Most businesses never decide to run their critical systems in a single cloud region. It happens by default. The first project chose the nearest region, the next one followed, backups were stored next to production, and a few services quietly came to rely on components hosted somewhere else entirely. Nobody wrote it down as a design decision, so nobody tested what would happen if that region, or one of those hidden dependencies, became unavailable.

The result is a business that believes it is resilient because it is "in the cloud", when in practice one regional problem could stop sales, payments or operations.

## The problem in plain language

A cloud region is a group of data centres in one geographic area. Providers design regions to be independent of each other, and many offer multiple isolated zones inside a region. Being in the cloud does not automatically mean being spread across regions. Unless someone deliberately designs and pays for it, workloads, data and backups usually sit in one place.

The "by accident" part shows up in several ways:

- the production database, its backups and the deployment scripts all live in the same region;
- a disaster recovery plan exists on paper but assumes resources that would have to be created during the outage;
- identity, DNS or certificate services that the system relies on are managed from a region other than the one the business chose;
- a recovery region has been named, but nobody has checked whether it is open for normal use.

## What the buyer is actually trying to solve

Searches tend to follow an incident or a board question: "what happens if our cloud region goes down", "single region risk", "do we need multi-region", "cloud disaster recovery for a small business". The underlying need is to know, in plain terms, which services would stop, for how long, and what it would cost to reduce that risk to an acceptable level. Most businesses do not need full multi-region operation; they need a deliberate choice instead of an accidental one.

## Evidence and system mechanism

### Paired regions do not provide failover on their own

Microsoft's documentation on [Azure region pairs](https://learn.microsoft.com/en-us/azure/reliability/regions-paired) lists South Africa North as paired with South Africa West, and marks South Africa West as a restricted-access region intended for specific scenarios such as disaster recovery within the geography. More importantly, Microsoft states plainly that deploying resources to a region in a pair does not automatically make them more resilient or provide high availability, disaster recovery or failover, and that customers should develop their own plans. It also cautions against relying on Microsoft-managed storage failover as a primary recovery approach.

### Some dependencies are global even when your workload is regional

Amazon Web Services explains in its whitepaper on [fault isolation boundaries and global services](https://docs.aws.amazon.com/whitepapers/latest/aws-fault-isolation-boundaries/global-services.html) that a small set of services, including identity management, public DNS and its content delivery network, have their control planes hosted in a single region, while the services themselves run globally. Some routine operations, such as creating a load balancer, depend on those control planes. AWS recommends not relying on such operations during recovery, and instead pre-provisioning resources so the system can keep running without making changes. It also notes that software development kits default to a global security token endpoint unless configured to use regional ones. A business can therefore be exposed to a region it has never chosen.

### Recovery options trade cost against time

The AWS guidance on [disaster recovery options in the cloud](https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html) describes four broad strategies: backup and restore, pilot light, warm standby and multi-site active/active. Each step up reduces recovery time and cost of downtime but raises running cost and complexity. The same guidance stresses that infrastructure should be defined as code so it can be redeployed quickly, that backups must be tested, and that service quotas in the recovery region must be high enough to scale up.

## Problem owner and why now

The problem owner is the head of IT or infrastructure, working with the owners of the business services affected. The budget owner is typically the CIO or COO, because the decision balances running cost against the cost of downtime.

The trigger is usually an availability incident, either your own or a widely reported provider outage. Others include a customer contract demanding stated recovery times, an insurer's questionnaire, or a regulator asking for evidence of continuity planning.

## Economic consequence

- **Extended downtime:** without a prepared recovery location, recovery depends on the original region coming back.
- **Lost revenue and service:** online sales, bookings or payments stop for the duration. If you have not costed this, start with [the cost of not knowing your hourly downtime cost](/impact/not-knowing-hourly-cost-of-downtime/).
- **Data loss:** backups stored in the same region may be unavailable exactly when needed.
- **Contract and reputation exposure:** promised service levels cannot be met.

## Root cause

- **Region chosen once, never revisited:** the first project's default became the standard.
- **Resilience assumed, not designed:** "cloud" was treated as equivalent to "redundant".
- **Hidden global dependencies:** identity, DNS and certificates were never mapped.
- **Untested recovery:** plans exist but have not been exercised end to end.
- **No agreed recovery targets:** the business never stated how long each service can be down or how much data it can lose.

## Practical intervention

1. **List critical services and their locations.** For each, record the region, zones used, where backups live and which external or global services it depends on. Our guide to [identifying the systems your business depends on](/insights/how-to-identify-the-systems-your-business-actually-depends-on/) is a useful starting point.
2. **Agree recovery targets.** For each service, set an acceptable recovery time and data-loss window with the business owner.
3. **Use zones first.** Spreading across availability zones inside a region often addresses the most common failures at modest cost.
4. **Choose a cross-region strategy per service.** Copy backups to a second region at minimum; use pilot light or warm standby only where the recovery target justifies it.
5. **Remove recovery-time dependencies.** Pre-create load balancers, DNS records and access roles in the recovery location, and configure regional endpoints.
6. **Test.** Run a recovery exercise at least once a year and record how long it actually took.

### An illustrative example

*Illustrative:* a Durban logistics company runs its booking platform, database and backups in one region. During a review it finds that its recovery plan relies on creating new servers and DNS records in another region during an outage, with no infrastructure code to do so. It agrees a four-hour recovery target for bookings, copies backups to a second region daily, writes the environment as code and pre-creates the recovery network. The first test takes most of a day; the second meets the target.

## Diagnostic questions

- Which region does each critical service run in, and who chose it?
- Are your backups stored in a different region from production?
- Could you rebuild your environment elsewhere from code, without manual steps?
- Which identity, DNS or certificate services would you need during recovery, and where are they controlled?
- When did you last test a full recovery, and how long did it take?

## What good looks like

Every critical service has an agreed recovery target and a documented, tested strategy to meet it. Single-region operation is a conscious, recorded choice where the risk is acceptable, not an accident. Backups live elsewhere. Recovery does not depend on creating resources during an outage. As our piece on [why backups do not equal business resilience](/patterns/why-backups-do-not-equal-business-resilience/) explains, the test is whether the business can keep operating, not whether data exists somewhere.

## Where Mellorca fits

Mellorca's [digital infrastructure](/services/digital-infrastructure/) service maps where critical services and their dependencies run, agrees recovery targets with business owners, and designs proportionate zone and region strategies, including infrastructure-as-code and recovery testing.

## Method note

This article relies on public documentation from Microsoft Azure and Amazon Web Services; region availability and service behaviour change over time and differ between providers. It does not assess any specific provider's reliability. The example is illustrative.
