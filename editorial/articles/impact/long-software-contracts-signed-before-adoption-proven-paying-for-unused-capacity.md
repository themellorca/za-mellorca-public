---
hub: impact
record_id: CPS-068
slug: long-software-contracts-signed-before-adoption-proven-paying-for-unused-capacity
title: Long software contracts signed before adoption is proven
description: A multi-year discount is only a saving if the business uses what it committed to, and committing before adoption is proven turns the discount into a risk.
lead: A multi-year discount is only a saving if the business uses what it committed to, and committing before adoption is proven turns the discount into a risk.
category: Digital Operations
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: Signing long software contracts before adoption and value are proven
primary_cost_mechanism: Paying for unused seats and capacity for the whole term, prepaid cash-flow impact and loss of exit flexibility
sources:
  - Rate Optimization FinOps Framework Capability | https://www.finops.org/framework/capabilities/rate-optimization/
  - FinOps Foundation - What is FinOps? | https://www.finops.org/introduction/what-is-finops/
  - Consumer Protection Act 68 of 2008 - South African Government | https://www.gov.za/documents/consumer-protection-act
related:
  - Paying consultants to keep unnecessary software complexity running | /impact/paying-consultants-to-maintain-unnecessary-software-complexity-recurring-cost/
  - Software bought before the process was defined: What failed implementations cost | /impact/technology-bought-before-process-defined-failed-implementation-wasted-licences/
  - Stitching spreadsheets together: The labour and delay behind management reports | /impact/manually-combining-spreadsheets-before-management-sees-performance-labour-delay-cost/
summary: A multi-year discount is only a saving if the business uses what it committed to, and committing before adoption is proven turns the discount into a risk.
layout: plain
---
## The discount that comes with a three-year lock

The vendor's proposal arrives with two prices. Month to month, the platform costs a certain amount per user. Sign for three years, paid annually in advance, and the price drops by a fifth, with a bonus module included. The sales representative mentions that the offer expires at month-end. The finance manager sees a saving, the operations manager sees a tool the team is keen to try, and the contract is signed before anyone has used the software for a single week.

A year later, only half the licences are in regular use, the bonus module has never been configured, and the business is committed to two more years of payments for capacity it does not need. This article looks at the financial risk of signing long software contracts before adoption and value have been proven, and at how to get the benefit of a discount without carrying the full risk of a commitment.

## Why long commitments are so attractive

The appeal is real. Discounts for longer terms are legitimate, and price protection can be valuable in a currency-sensitive market. Annual billing reduces administration. Vendors prefer commitments because they make revenue predictable, and they price that preference into the discount. For a business, a visible saving today is easy to justify, while the risk of under-use is vague and in the future.

Several biases are at work. People overestimate how quickly a new tool will be adopted, because the enthusiasm that exists at purchase is not representative of the whole team. They underestimate the time that implementation, training and process change will take. And the person who negotiates the discount is rewarded for the saving, while nobody is accountable for the capacity that goes unused. The usual result is a contract sized for the optimistic scenario and paid for in the realistic one.

## What the cloud cost community learned about commitments

The same trade-off has been studied closely in cloud computing, where commitment discounts are common. The FinOps Foundation's page on [rate optimisation](https://www.finops.org/framework/capabilities/rate-optimization/) describes commitment discounts as lower rates in exchange for committing to use or spend over a one- or three-year term, and says that longer and more restrictive commitments yield higher discounts. Its central risk is stated plainly: if no matching resource is running, the organisation still pays for the commitment. It warns that rightsizing or restructuring after purchase can leave a business paying for resources that no longer exist in their original form, and that low utilisation of a commitment reduces the effective saving.

The practices it recommends carry over well to software subscriptions. They include basing purchases on forecast usage and planned changes, spreading purchases across the year so that some commitments always expire and can be reassessed, alerting when utilisation falls, and targeting a break-even point of around nine months. Although the page concerns cloud infrastructure, not business applications, the principle is general: a discount is only a saving if you use what you committed to. The FinOps Foundation's overview, [what is FinOps](https://www.finops.org/introduction/what-is-finops/), adds that the goal is value, not cost cutting alone, and that decisions should be driven by usage data.

## What it looks like when it goes wrong

- **Seats bought for the whole company** when only one department actively uses the tool.
- **Tiers selected for features** nobody has configured. Compare [premium plans bought for basic needs](/impact/premium-software-plans-basic-needs-overbuying-cost/).
- **Annual prepayment** that consumes working capital for value not yet received.
- **Auto-renewal clauses** that extend the commitment silently; see [automatic software renewals without a value review](/impact/automatic-software-renewals-without-value-review-cost/).
- **No exit rights** if the vendor changes its product, price or terms, or if the business changes direction.
- **Adoption never measured**, so nobody knows whether the tool is working until the renewal notice arrives.

## How it becomes money

The cost mechanisms are technology waste and cash-flow impact, with a risk element where a tool turns out to be unsuitable. A practical expression:

> Real saving = discount received − cost of capacity unused − cost of being unable to leave if the tool is unsuitable

### An illustrative comparison

A South African marketing agency with 40 staff is offered a project management platform at R420 per user per month on a monthly contract, or R336 per user per month (a 20% discount) on a 36-month contract billed annually. The agency buys 40 seats on the long contract. After six months, 22 people use it regularly, and after twelve months the number is 26. All figures are **illustrative assumptions**.

| Item | Calculation | Cost |
| --- | --- | --- |
| Long contract, 36 months | 40 × R336 × 36 | R483,840 |
| Monthly contract for actual users (average 26 seats for 36 months, assumed) | 26 × R420 × 36 | R393,120 |
| Difference |  | R90,720 more on the long contract |

In this scenario the discount looked like a saving of R84 per seat per month, but it was earned on 14 seats nobody needed. Those 14 seats cost 14 × R336 × 36 = R169,344 over the term. The discount on the 26 seats actually used is only 26 × R84 × 36 = R78,624. Net: R78,624 − R169,344 = −R90,720, matching the table. The agency overpays by about R90,720 compared with a flexible contract sized to real use.

A second scenario shows that long contracts are not always wrong. If 40 people had adopted the tool within two months, the long contract would have saved R120,960 over the term. The difference between the two outcomes is entirely adoption, and adoption can be tested before committing.

Cash flow adds to the picture. Annual billing means R161,280 at signing in the first scenario (40 × R336 × 12), against about R131,000 for 26 seats at monthly rates over the same year, which is cash tied up while the tool is still being proven.

## Secondary consequences

A long commitment creates sunk-cost pressure. Once the business has paid, it tends to defend the purchase, forcing adoption of a tool that may not suit the work. It also reduces negotiating leverage, delays evaluation of better alternatives, and can carry cancellation or data-export terms that are discovered only on exit; see [managed cloud services adopted without exit planning](/discovery/managed-cloud-services-adopted-without-exit-planning/). Contract terms are matters of law as well as commerce. South Africa's [Consumer Protection Act](https://www.gov.za/documents/consumer-protection-act) sets rules for consumer agreements, but whether it applies to a business-to-business software contract depends on the parties and the transaction, so it is sensible to read the actual terms and take advice before relying on it.

## When it becomes urgent

The time to act is before signature, and then again about 90 days before every renewal. If a contract is already running, look now at utilisation and the cancellation notice period, because the notice date is the last cheap moment to change course.

## What better looks like

A business that buys well treats a commitment as an investment that has to earn its place. It starts with a pilot or a monthly term for a defined group of users, with agreed adoption measures: the share of users active weekly, tasks completed in the tool, processes retired elsewhere.

It commits to the long term only once those measures are met, and sizes the commitment to the proven level of use, not the hoped-for one. It negotiates flexibility: the right to reduce seats at renewal, a ramped schedule, co-termination of add-ons, and clear export rights. Someone owns the contract and its review dates. The Mellorca guidance on [how to buy business software without letting the demo make the decision](/insights/how-to-buy-business-software-without-letting-the-demo-make-the-decision/) covers the evaluation stage.

## Practical steps

1. **Ask for a pilot term** of one to three months for the first user group, even at a higher unit price.
2. **Define adoption measures** before signing and agree who will report them.
3. **Size seats to proven use**, and negotiate a ramp for growth, not a day-one commitment for everyone.
4. **Calculate break-even utilisation:** divide the discounted price by the monthly price. At a 20% discount, you need roughly 80% of the committed seats in regular use to break even.
5. **Diarise the notice date** and a utilisation review 90 days before it.
6. **Stagger commitments** across tools so that renewals do not all fall in the same month, and review the total in one place alongside [your known and unknown subscriptions](/impact/unknown-software-subscriptions-invisible-recurring-cost/).

## Bottom line

A long contract is a bet that the business will use what it has committed to. Sometimes the bet is sound, and the discount is worth taking. But a discount is not a saving until the capacity is used, and the evidence on use is cheap to collect before signing and expensive to collect afterwards. Prove adoption first, then commit, and size the commitment to the use you have seen.
