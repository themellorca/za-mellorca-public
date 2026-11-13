---
hub: discovery
record_id: DISC-322
slug: cloud-resource-quotas-discovered-when-deployments-fail
title: Why cloud resource quotas are only discovered when a deployment fails
description: Cloud quotas stay invisible until a release or scaling event hits them. How to monitor and raise limits before a deployment fails.
lead: Cloud and cluster quotas stay invisible until a release or scaling event hits them. How quotas work, what surprise limits cost, and how to monitor and raise them before they cause failures.
category: Cloud, Infrastructure & Platform Operations
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Cloud, Infrastructure & Platform Operations
problem_domain: Cloud, Infrastructure & Platform Operations
problem_owner: Platform or cloud operations lead
budget_owner: Head of IT or CTO
sources:
  - What is Service Quotas? - Service Quotas | https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html
  - Quotas overview - Azure Quotas | https://learn.microsoft.com/en-us/azure/quotas/quotas-overview
  - Service Quotas and Amazon CloudWatch alarms - Service Quotas | https://docs.aws.amazon.com/servicequotas/latest/userguide/configure-cloudwatch.html
  - Resource Quotas | https://kubernetes.io/docs/concepts/policy/resource-quotas/
related:
  - Why inconsistent cloud resource names and tags cause problems as you grow | /discovery/cloud-resources-with-inconsistent-names-and-tags/
  - Why infrastructure incidents cannot be linked to the change that caused them | /discovery/infrastructure-incidents-cannot-be-linked-to-recent-changes/
  - Why cloud managed services get adopted without an exit plan | /discovery/managed-cloud-services-adopted-without-exit-planning/
summary: Cloud and cluster quotas stay invisible until a release or scaling event hits them. How quotas work, what surprise limits cost, and how to monitor and raise them before they cause failures.
layout: plain
---
The release has been tested, the change window is open and the deployment starts. Halfway through, it stops with an error saying a limit has been reached: too many virtual machines, too many processor cores, too many IP addresses or too many containers in a namespace. The team now has to request an increase, wait for approval and either roll back or leave the system half-deployed. Nobody knew the limit was there until they hit it.

Resource quotas are a normal, sensible part of every cloud platform. The problem is not that they exist; it is that most businesses never look at them until they cause a failure.

## The problem in plain language

A quota is a ceiling on how much of a resource an account, subscription, region or project can use. Providers set default values, and many can be raised on request. Container platforms such as Kubernetes add their own quotas inside a cluster. Because defaults are often generous enough for early projects, quotas stay invisible during the first months of cloud use. They surface later, at the worst moment: during a release, a scaling event, a migration or a disaster recovery test.

Signs that quotas are being managed by surprise include:

- deployments fail with "limit exceeded" or "forbidden" errors that are not code faults;
- quota increases are requested urgently, in the middle of a change;
- autoscaling stops adding capacity during busy periods;
- the recovery region has default quotas far below what production needs;
- no one can say how close each account is to its limits.

## What you are actually trying to solve

The first reaction is usually to look up the exact error text, then to ask "how do we monitor cloud quotas?", "why did the deployment fail with quota exceeded?" or "how do we request a quota increase before go-live?" The real need is to stop limits from surprising them: to know which quotas matter, how close they are, and to raise them in advance as part of normal planning.

## Evidence and system mechanism

### Quotas are per account and region, with defaults set by the provider

Amazon Web Services explains in [What is Service Quotas?](https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html) that quotas, also called limits, are the maximum values for resources, actions and items in an account. Each service defines default values. Some quotas apply per account and others per region; some are adjustable and others are not. Increases can be requested, take time to review and may be approved, denied or partially approved. The console can show utilisation as a percentage of the quota.

Microsoft's [Azure quotas overview](https://learn.microsoft.com/en-us/azure/quotas/quotas-overview) describes the same pattern: each subscription has a default value for each quota, some quotas are adjustable and others are hard limits that need a support request, and approval considers current usage and capacity. It adds an important caution: an assigned quota does not reserve or guarantee capacity, which may not be available at the time of request.

### Quotas can be monitored before they bite

AWS documents how to set [CloudWatch alarms on service quotas](https://docs.aws.amazon.com/servicequotas/latest/userguide/configure-cloudwatch.html), so a notification fires when usage approaches a chosen threshold, giving time to request an increase. Azure's quotas page similarly supports usage alerts at predefined thresholds. The tools exist; they simply need to be set up.

### Cluster quotas reject requests outright

Within Kubernetes clusters, the documentation on [resource quotas](https://kubernetes.io/docs/concepts/policy/resource-quotas/) explains that if creating or updating a resource would violate a quota, the request is rejected with an HTTP 403 Forbidden error and a message naming the constraint. Existing resources are not affected, which is why the problem appears at deployment time rather than in steady running.

## Problem owner and why now

The problem owner is the platform or cloud operations lead. The budget owner is usually the head of IT or CTO, since quota planning ties directly to capacity and cost planning.

The urgency trigger is often a cost or growth spike: a marketing campaign, seasonal peak or new client drives scaling that hits a ceiling. Disaster recovery is another trigger; guidance from providers on recovery planning specifically reminds teams to ensure quotas in the recovery region are high enough to scale up.

## Economic consequence

- **Failed or delayed releases:** change windows are lost and work is repeated.
- **Lost revenue during peaks:** systems cannot scale exactly when demand is highest.
- **Failed recovery:** a recovery environment that cannot reach production size does not deliver recovery.
- **Emergency effort:** senior engineers spend time on urgent support requests instead of planned work.

The pattern is similar to a business process held up by a single missing input; see [when one missing item stops a larger process](/patterns/when-one-missing-item-stops-a-larger-process/).

## Root cause

- **Defaults never reviewed:** quotas were inherited when accounts were created.
- **No quota monitoring:** utilisation is not tracked or alerted.
- **Capacity planning ignores limits:** plans cover cost and performance, not ceilings.
- **Accounts and regions multiply:** each new subscription or region starts at defaults.
- **Quotas confused with capacity:** teams assume an approved quota guarantees resources.

Platform limits on API calls cause a related, intermittent failure covered in [why API rate limits create intermittent business failures](/discovery/why-api-rate-limits-create-intermittent-business-failures/).

## Practical intervention

1. **Inventory the quotas that matter.** For each production and recovery account or subscription, list the quotas your workloads actually use: compute cores, instances, IP addresses, load balancers, storage and cluster limits.
2. **Measure utilisation.** Record current usage as a percentage of each quota.
3. **Set alerts.** Configure notifications at a threshold, for example 70 or 80 percent, routed to the team that owns capacity.
4. **Add quotas to change and capacity planning.** Any release or project that adds resources checks quota headroom first.
5. **Raise recovery-region quotas in advance.** Do not wait for a disaster to request capacity.
6. **Define new accounts from a template.** Include standard quota requests in the process of creating subscriptions or projects.
7. **Review quarterly.** Growth changes what matters.

### An illustrative example

*Illustrative:* a Gqeberha manufacturer moves its planning system to the cloud and adds a nightly batch that scales out many servers. The first month-end run fails because the subscription's processor-core quota is too low. After raising it under pressure, the team lists every quota its workloads use, sets alerts at 75 percent and adds a quota check to the release checklist. The next growth step is handled with an increase requested a week in advance.

## Diagnostic questions

- Do you know which cloud quotas your production workloads depend on?
- Can you see current utilisation for each?
- Are you alerted before a quota is reached?
- Have quotas in your recovery region been raised to production levels?
- Has a deployment failed because of a limit in the last year?

## What good looks like

Quotas are listed, monitored and alerted like any other capacity measure. Increases are requested ahead of releases and peaks, not during them. Recovery environments have headroom. New accounts start with known, appropriate limits. Deployment failures come from code, not from ceilings nobody knew about. As our insight on [why recurring maintenance is cheaper than emergency repair](/insights/why-recurring-systems-maintenance-is-cheaper-than-emergency-repair/) argues, routine checks cost far less than urgent fixes.

## Where Mellorca fits

Mellorca's [digital infrastructure](/services/digital-infrastructure/) service inventories cloud and cluster quotas, sets up utilisation alerts, builds quota checks into release and capacity planning, and prepares recovery environments with the headroom they need.

## Method note

This article draws on documentation from Amazon Web Services, Microsoft Azure and Kubernetes. Quota names, defaults and processes vary by provider and change over time. The example is illustrative.
