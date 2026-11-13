---
hub: insights
record_id: INS-427
slug: how-to-measure-whether-software-is-paying-for-itself
title: How to measure whether software is paying for itself
description: Most businesses justify software before buying and never check afterwards. A practical method for measuring whether a system is earning back its full cost.
lead: Most businesses justify software before they buy it and never check afterwards. A practical method for measuring, after purchase, whether a system is earning back its full cost.
category: Systems & Strategy
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Systems & Strategy
sources:
  - Measure and communicate the business value of Power Platform solutions - Power Platform | https://learn.microsoft.com/en-us/power-platform/guidance/adoption/business-value
  - Measure value and realize return on investment - Power Platform | https://learn.microsoft.com/en-us/power-platform/guidance/adoption/common-vision/realize-value
  - Overview of the Automation Kit - Power Automate | https://learn.microsoft.com/en-us/power-automate/guidance/automation-kit/overview/introduction
related:
  - How software renewal dates can force better technology decisions | /insights/how-software-renewal-dates-can-force-better-technology-decisions/
  - How to buy business software without letting the demo make the decision | /insights/how-to-buy-business-software-without-letting-the-demo-make-the-decision/
  - What to decide before configuring a new platform | /insights/what-to-decide-before-configuring-a-new-platform/
summary: Most businesses justify software before they buy it and never check afterwards. A practical method for measuring, after purchase, whether a system is earning back its full cost.
layout: plain
---
Most business software is justified once, before it is bought. A supplier demonstrates it, someone estimates the hours it will save, and the subscription starts. After that, the question of whether the software is actually paying for itself is rarely asked again until a renewal invoice arrives, or until cash is tight and someone starts reading the bank statement line by line.

By then, the answer is usually a matter of opinion. The people who championed the system believe in it. The people who work around it do not. Nobody has the numbers. This article sets out a practical way to measure whether software is earning its keep, using information most businesses already have or can collect in a few weeks.

> A business case is a forecast. Measuring after go-live is how you find out whether the forecast came true, and what to do if it did not.
>

## Why the question goes unanswered

Three things make post-purchase measurement hard. First, there is often no baseline: nobody recorded how long the old process took or how many errors it produced. Second, the costs are spread across budgets: the licence sits with IT or finance, the implementation hours sit with operations, and the integration work sits with a supplier. Third, the benefits are often indirect. A CRM rarely produces revenue by itself; it changes how quickly the sales team follows up, which changes conversion, which changes revenue.

None of these is a reason not to measure. They are reasons to measure deliberately, with a simple, agreed method, rather than relying on impressions. Microsoft's guidance on measuring business value from its own platform makes the same case: value measurement answers the question "why are we doing this?" and moves decisions from intuition towards data on performance, satisfaction and cost-effectiveness.

## Step 1: Count the full cost, not just the licence

The subscription is usually the smallest honest number. A full annual cost includes:

- **Licences and add-ons**, including users who no longer need a seat.
- **Implementation**, spread over the expected life of the system rather than counted only in year one.
- **Integrations and connectors**, including middleware subscriptions and developer time when they break.
- **Internal administration**: the hours someone spends managing users, fixing data and answering questions.
- **Workarounds**: the time staff spend doing outside the system what the system was meant to do.
- **Support and training** from the supplier or a partner.

Microsoft's guidance uses the term total cost of ownership for this: all the costs of owning, operating and maintaining a system over its lifetime. The point for a small business is simpler. If you only count the licence, almost any system looks cheap.

## Step 2: Name the mechanism that is supposed to create value

Every system should have a short statement of how it is meant to pay back. Examples: "Quotes go out the same day instead of in three days, so we win more of them." "Invoices are raised when the job closes, so cash arrives a week sooner." "Stock counts are accurate, so we stop over-ordering." If no one can write this sentence, the system cannot be measured, and that is itself a finding. Our article on [why technology spend does not automatically create business value](/insights/why-technology-spend-does-not-automatically-create-business-value/) explains why this mechanism matters more than the features.

## Step 3: Choose a small number of measures

Pick two to four measures that sit directly on the value mechanism. [Power Platform](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/business-value)'s business-value guidance suggests straightforward before-and-after comparisons that work for most business software:

| Measure | What to compare |
| --- | --- |
| Time per task | How long the process took before and how long it takes now |
| Error rate | Mistakes, rework or credit notes before and after |
| Output | Work completed in a given period with the same people |
| Risk incidents | Problems the system was meant to prevent, and their cost |
| Cycle time | Elapsed time from request to result, such as order to invoice |

The same guidance separates tangible value, such as cost savings and productivity, from intangible value, such as fewer disruptions or better employee experience. Both count. But a system that can only point to intangible benefits after a year should prompt a harder conversation.

## Step 4: Reconstruct a baseline if you do not have one

If nobody measured before go-live, build a reasonable baseline from what exists: historical volumes from the accounting system, staff estimates of time per task, old email threads showing turnaround, error logs, or customer complaints. Label it as an estimate and note how it was made. A careful estimate is far more useful than no baseline, and it makes the next measurement more honest.

## Step 5: Convert time into money carefully

Time saved is only worth money if it is used for something else. If an administrator saves five hours a week but the hours disappear into other admin, the saving is real for capacity but not for cost. Record both: hours released, and what they were used for. Our guide to [calculating the real cost of a repetitive task](/insights/how-to-calculate-the-real-cost-of-a-repetitive-task/) covers the arithmetic.

## An illustrative example

The following figures are hypothetical. A Cape Town engineering supplier pays R9,000 a month for a job management system across 20 users, plus about R4,000 a month in integration and partner support, and estimates eight hours a week of internal administration. Annual cost, including the administrator's time at a loaded rate of R250 an hour, comes to roughly R260,000.

The value mechanism was faster invoicing. Before the system, jobs were invoiced on average nine days after completion; now it is two days. With about R1.5 million invoiced a month, cash arrives a week sooner, which reduces the business's reliance on its overdraft. Separately, the scheduling team now handles 15% more jobs with the same staff. Against that, the business discovers that six of the 20 licences belong to people who log in rarely, and that two staff still keep a parallel spreadsheet. The verdict: the system pays for itself, but not fully. Removing unused seats and retiring the spreadsheet would improve the return without any new investment.

## Step 6: Review on a schedule, and decide

Microsoft's guidance on realising [return on investment](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/common-vision/realize-value) emphasises regular tracking and reporting so that success is measured by the value delivered, not merely by completing a project. For a smaller business, a review at three, six and twelve months after go-live, and then before each renewal, is usually enough. Each review should end with one of four decisions:

1. **Keep:** the system pays back clearly.
2. **Fix:** the value mechanism is sound but blocked by adoption, data or process problems.
3. **Reduce:** keep the system but cut seats, modules or add-ons that are not used.
4. **Remove:** the system costs more than it returns and fixing it is not worth the effort. Our article on [how to decide which software to remove](/insights/how-to-decide-which-software-to-remove/) covers that decision.

## What this measurement is not

This is not a precise return-on-investment model, and it should not pretend to be. Its purpose is to replace opinion with evidence that is good enough to decide. A few honest numbers, reviewed regularly, are more useful than an elaborate spreadsheet nobody updates. They also make the next software decision better, because the business learns which kinds of systems actually deliver for it. The cost of skipping this discipline shows up most plainly in [licences that are paid for but not used](/impact/unused-software-licences-financial-waste/).
