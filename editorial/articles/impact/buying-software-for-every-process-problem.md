---
hub: impact
record_id: CPS-054
slug: buying-software-for-every-process-problem
title: When every process problem becomes another software purchase
description: How repeatedly buying applications for unresolved process problems creates subscription overlap, integration burden, training cost and application sprawl.
lead: A new application can solve a real problem. Repeated purchasing without process and architecture discipline can also convert operational confusion into subscriptions, integrations, training and duplicated data.
category: Technology Economics
published_date: 2026-09-05
updated_date: 2026-09-05
byline_category: Systems & Strategy
tags:
  - Software Spend
  - Sprawl
  - Lifecycle Cost
cta_label: Architecture & Roadmap
cta_href: /services/digital-systems-architecture-roadmap/
side_title: Cost mechanisms
sources:
  - AWS Marketplace Cost Optimization: Manage & Track Cloud Spend | https://aws.amazon.com/marketplace/features/cost-optimization
  - Flexera 2026 State of ITAM Report: How teams are regaining control of cloud, SaaS and AI | https://www.flexera.com/blog/it-asset-management/state-of-itam-2026/
  - Select your cloud migration strategies - Cloud Adoption Framework | https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/digital-estate/5-rs-of-rationalization
related:
  - When every rise in workload needs another hire | /impact/scaling-by-adding-headcount/
  - When cloud spend has no business owner | /impact/cloud-costs-without-business-owner-allocation/
  - When security spend runs ahead of basic controls | /impact/security-products-without-basic-controls/
---
## The tolerated pain

A team struggles with a workflow, so a new tool is purchased. Another department solves a similar problem with a different tool. Over time the application portfolio reflects local decisions rather than a coherent operating architecture.

A new application can solve a real problem, and sometimes buying is exactly the right answer. The pain begins when purchasing becomes the default response to any operational difficulty, before anyone has asked what the problem actually is, whether existing platforms already cover it, or how the new tool will fit with everything else.

## Why businesses tolerate it

Buying software feels like progress. It is visible, quick and easy to approve, particularly with monthly subscriptions and card payments that never reach a formal procurement review. A demonstration shows the tool solving the problem neatly, in isolation, with clean sample data.

Fixing the underlying process is slower and less satisfying. It requires agreeing how work should flow, who owns what and which system is authoritative. Faced with that choice, a subscription is often the path of least resistance, and each individual purchase looks reasonable on its own. The cumulative effect is only visible when someone looks across the whole portfolio, which is rarely anyone’s job.

The result is a portfolio that nobody fully sees. Flexera's [2026 State of ITAM report](https://www.flexera.com/blog/it-asset-management/state-of-itam-2026/) found that 43% of respondents reported increased SaaS waste over the past year, and that complete IT visibility had fallen to 36%, down from 43% in 2025. Those figures describe surveyed organisations, not yours, but they show that sprawl and visibility gaps are a common pattern rather than an isolated failing.

## Operational consequence

The licence invoice is only one cost. New tools introduce identity, permissions, data storage, support, integrations, training, vendor management and eventual exit work. Employees must also decide which platform is authoritative.

In daily operations, this shows up as:

- **Re-keying:** the same customer, order or project data is typed into several tools because they do not share it.
- **Conflicting records:** each tool holds a slightly different version of the truth, and reports disagree.
- **Access risk:** every application is another set of accounts to create and, more importantly, to remove when people leave.
- **Training load:** new employees must learn many interfaces before they can do a straightforward job.
- **Unchanged process problems:** the original difficulty often survives, because the tool automated a confused process rather than fixing it.

## How it becomes money

> application lifecycle cost = subscriptions + implementation + integration + support + training + administration + exit cost

Track overlapping capability separately. A tool may be heavily used and still duplicate a capability that should be consolidated.

### An illustrative cost model

Consider one new task-management tool bought by a single department. Every figure is an **illustrative assumption**, not a market price.

| Cost element | Illustrative assumption | First-year cost |
| --- | --- | --- |
| Subscriptions | 25 users × R350 per month × 12 months | R105,000 |
| Implementation | 60 hours of set-up and configuration × R450 blended hourly cost | R27,000 |
| Integration | R40,000 build + R1,500 per month maintenance × 12 | R58,000 |
| Training | 25 users × 3 hours × R250 loaded hourly cost | R18,750 |
| Administration and support | 4 hours per month × R300 × 12 months | R14,400 |
| **Total** |  | **R223,150** |

The arithmetic: 25 × R350 × 12 = R105,000. 60 × R450 = R27,000. R40,000 + (R1,500 × 12 = R18,000) = R58,000. 25 × 3 × R250 = R18,750. 4 × R300 × 12 = R14,400. The total is R223,150, of which the subscription is R105,000, or about 47%.

In other words, in this example **the licence is less than half of the first-year cost**. From the second year, recurring cost falls to roughly R137,400 (subscriptions R105,000, integration maintenance R18,000 and administration R14,400), before training for new joiners. An exit cost, such as an assumed R15,000 for data migration and re-training when the tool is eventually retired, is deferred rather than avoided.

Now suppose a second department buys a different tool for substantially the same job. The business pays a comparable lifecycle cost again, and adds a new cost: reconciling two sets of project data. That duplication is where sprawl becomes expensive. For the related waste of seats nobody uses, see [The Pain of Paying for Software Licences Employees No Longer Use](/impact/unused-software-licences-financial-waste/).

## When it becomes commercially urgent

If the first response to a workflow problem is “what app should we buy?” rather than “what operating problem are we solving?”, technology spend is likely outrunning architecture.

Act when software spend grows faster than headcount or revenue, when staff cannot say which tool is authoritative for customers or projects, when integration requests are piling up, or when a major renewal, restructure or AI initiative is approaching. Each new tool also enlarges the surface that AI and automation projects must later connect to.

## Resolution

Visibility should come before another purchase. AWS describes the value of consolidated third-party spend in its [AWS Marketplace cost optimisation](https://aws.amazon.com/marketplace/features/cost-optimization) material as helping customers reduce SaaS sprawl and identify underutilised software commitments. The commercial principle is straightforward: portfolio visibility should precede another purchase, whichever tool provides it. Microsoft's [Cloud Adoption Framework](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/digital-estate/5-rs-of-rationalization) makes a similar point about retiring workloads that are obsolete, underused or redundant, advising that the business first confirm they have no critical dependencies on other systems.

1. Define the process and required capability before selecting software.
2. Check existing platforms for usable capability.
3. Assess integration and data ownership before purchase.
4. Model lifecycle rather than licence cost alone.
5. Assign a business owner and review date.
6. Retire overlap deliberately when new capability is introduced.

A simple rule helps: no new application without a named owner, a stated process problem, a lifecycle cost estimate and a decision on what it replaces. The Insights articles [How to Buy Business Software Without Letting the Demo Make the Decision](/insights/how-to-buy-business-software-without-letting-the-demo-make-the-decision/) and [Why More Software Can Make the Business Harder to Run](/insights/why-more-software-can-make-the-business-harder-to-run/) expand on both sides of the decision.

## Bottom line

Software should simplify the operating system. If every improvement adds another disconnected layer, the portfolio is accumulating complexity rather than capability. The real price of a tool is its lifecycle cost plus the overlap it creates, and in the example above that price is more than double the subscription.

**In summary:** define the problem before choosing the product, model the full lifecycle, and retire what a new tool replaces. Purchases made that way add capability; purchases made by reflex add sprawl.
