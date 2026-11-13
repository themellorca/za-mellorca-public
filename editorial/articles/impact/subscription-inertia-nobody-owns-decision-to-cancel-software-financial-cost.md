---
hub: impact
record_id: CPS-063
slug: subscription-inertia-nobody-owns-decision-to-cancel-software-financial-cost
title: Nobody will cancel it: What subscription inertia costs a business
description: Software subscriptions survive not because they are useful but because nobody wants to own the decision to cancel them, and the Rand add up month after month.
lead: Software subscriptions survive not because they are useful but because nobody wants to own the decision to cancel them, and the Rand add up month after month.
category: Digital Operations
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: Keeping software subscriptions because nobody wants to own the decision to cancel
primary_cost_mechanism: Recurring fees on unneeded tools, annual auto-renewals locking in the cost, repeated staff time on unresolved charge queries and unmanaged data exposure
sources:
  - FinOps Foundation - What is FinOps? | https://www.finops.org/introduction/what-is-finops/
  - Cancel and delete your Azure subscription - Microsoft Cost Management | https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/cancel-azure-subscription
  - Consumer Protection Act 68 of 2008 - South African Government | https://www.gov.za/documents/consumer-protection-act
related:
  - Waiting weeks for management reports: What late visibility costs the business | /impact/waiting-weeks-for-management-reports-late-visibility-cost/
  - Four tools, one job: The real cost of departments buying their own software | /impact/departments-buying-separate-tools-same-need-duplicate-subscription-cost/
  - Every team picks its own software: The cost of having no integration standards | /impact/every-team-chooses-own-software-no-integration-standards-fragmented-data-cost/
summary: Software subscriptions survive not because they are useful but because nobody wants to own the decision to cancel them, and the Rand add up month after month.
layout: plain
---
## The subscription nobody will cancel

In most small and mid-sized businesses there is at least one piece of software that everyone suspects is not needed. The project it was bought for finished two years ago. The person who asked for it has moved on. The monthly debit order still goes out, and every few weeks somebody in finance asks about it. The answer is always the same: "I think that was Thandi's, let me check." Nothing happens.

The reason is rarely the amount. It is that cancelling feels like a decision with a possible downside and no reward. If the tool turns out to be needed, the person who cancelled it is blamed. If it keeps running, nobody is. So the sensible individual choice, which is to leave it alone, produces a poor collective result: a steady outflow of Rand for software that nobody has decided to keep.

This article is about that specific habit, where a subscription survives because ownership of the cancellation decision is unclear or unwelcome. It is different from simply not knowing what you subscribe to, which is covered in [unknown software subscriptions and invisible recurring cost](/impact/unknown-software-subscriptions-invisible-recurring-cost/). Here the subscription is known. It is the decision that is missing.

## Why inertia wins by default

Subscription billing is designed so that continuing requires no action and stopping requires several. That is not a conspiracy; it is simply how recurring revenue works. The result is that every month of delay is, in effect, a small decision to renew made on the business's behalf by nobody in particular.

- **Nobody owns the verdict.** The buyer has left, the user is unsure, and finance sees only a line on a statement. Each can reasonably say it is someone else's call.
- **Fear of the unknown dependency.** The tool might hold data, run an integration or feed a report that nobody has documented. Without a quick way to check, "leave it" feels safer than "cancel it".
- **Small amounts feel too small to bother with.** A R600 monthly fee does not justify a meeting. Fifteen of them add up to R108,000 a year.
- **Cancellation is awkward.** Notice periods, annual terms, cancellation by email only, data export steps and credit-card holders who are on leave all create friction.
- **Auto-renewal turns a delay into a year.** Missing a renewal date can lock the business into another twelve months, a pattern examined in [automatic software renewals without a value review](/impact/automatic-software-renewals-without-value-review-cost/).

## What it looks like inside the business

- finance queries about a charge that end with "we will look into it" and are never closed;
- logins that belong to people who left the company, so nobody can even open the account to see what is in it, as described in [orphaned software subscriptions after an employee leaves](/impact/orphaned-software-subscriptions-after-employee-leaves-cost/);
- a "review the subscriptions" task that has been carried forward from one month-end to the next;
- two or three tools that overlap, with each kept "just in case" because nobody will choose between them;
- a free trial that quietly became a paid plan and has since been renewed twice;
- annual plans whose renewal dates are known to nobody until the invoice arrives.

## How inertia becomes a financial cost

The cost has three layers, and only the first is obvious.

1. **The direct fees.** Money paid every month for something that adds no value. It is easy to calculate and easy to underestimate because it is spread across many small payments.
2. **The compounding effect of annual terms.** Once a tool auto-renews, the cost of the decision you did not make is locked in for the full term. Delay of a few weeks can be the difference between a R0 exit and a R30,000 commitment.
3. **The management drag.** Every time someone investigates the same charge without resolving it, staff time is consumed. Unclear ownership also delays other decisions, such as which tool should replace an old one.

There is a fourth, quieter cost: risk. Forgotten accounts often hold customer or employee information. A tool nobody uses is a tool nobody reviews, patches or monitors, yet it can still hold personal information that falls under the Protection of Personal Information Act. Software that is paid for but unmanaged is a liability on two fronts.

## An illustrative cost model

The figures below are **illustrative assumptions** for a hypothetical Johannesburg professional-services firm with 25 staff. They are not a benchmark.

| Assumption | Value |
| --- | --- |
| Subscriptions the firm pays for | 40 |
| Subscriptions with no confirmed business owner or current use | 8 |
| Average monthly cost of each of those | R750 |
| Subscriptions that renewed annually without review in the last year | 3, averaging R14,000 each |
| Hours spent a year on repeated, unresolved queries about the same charges | 30 |
| Loaded hourly cost of the finance and management time involved | R300 |

- Monthly fees on unowned subscriptions: 8 × R750 × 12 = R72,000
- Annual renewals that could have been avoided: 3 × R14,000 = R42,000
- Staff time on repeated queries: 30 × R300 = R9,000
- **Illustrative total: about R123,000 a year**

For a firm of this size that is roughly the cost of a junior employee for several months, spent entirely because a decision was left undecided. Even if only half of the eight subscriptions could genuinely be cancelled, the recurring saving would be material, and it would repeat every year.

## What good practice looks like

Cloud and technology cost-management guidance has converged on a simple principle: cost needs an accountable owner. The FinOps Foundation's description of [what FinOps is](https://www.finops.org/introduction/what-is-finops/) centres on collaboration between finance, technology and business teams so that spending decisions are made with shared accountability. The same idea applies to a R750 monthly app as much as to a large cloud bill. Someone must be named, and that person must be allowed to say "cancel".

It also helps to make cancellation a normal, practical step. Vendors publish their own procedures; Microsoft's documentation on how to [cancel an Azure subscription](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/cancel-azure-subscription) shows, for example, that cancelling involves specific permissions, checks for resources still running and a defined process. Most business tools have equivalents. Knowing the steps in advance removes some of the fear.

South African consumer law is also relevant for some purchases. The Consumer Protection Act, available through the government's [official documents portal](https://www.gov.za/documents/consumer-protection-act), contains provisions on fixed-term agreements and their cancellation. Whether and how those provisions apply to a business-to-business software contract depends on the customer and the contract, so treat this as a prompt to read your own terms or ask a legal adviser, not as a guaranteed right.

## A simple way to break the deadlock

1. **List every recurring software charge.** Use the bank and card statements, not memory. The approach in [how to build a business application inventory that is actually useful](/insights/how-to-build-a-business-application-inventory-that-is-actually-useful/) works well for this.
2. **Name one owner per item.** If nobody claims it, the finance lead or operations manager becomes its owner by default. See [why software ownership needs to be explicit](/insights/why-software-ownership-needs-to-be-explicit/).
3. **Set a "cancel unless" rule.** For anything with no confirmed user in 30 days, the default is cancellation unless an owner steps forward with a reason. This reverses the usual default.
4. **Test the downside cheaply.** Before cancelling, export the data, note the integrations and, where possible, downgrade to a free tier or pause the plan for a month.
5. **Diarise every renewal.** Put notice dates, not renewal dates, in a shared calendar, so that the decision comes before the debit.
6. **Review quarterly.** Use the questions in [how to decide which software to remove](/insights/how-to-decide-which-software-to-remove/) and keep a short log of what was cancelled and why.

## Making the decision safe to take

The deeper fix is cultural. People avoid cancelling because it exposes them to blame. A business that wants subscriptions reviewed needs to make it safe to cancel and safe to reverse. Say clearly that a cancelled tool that proves to be needed can be re-bought, usually at modest cost, and that this is an acceptable outcome of a good review. What is not acceptable is paying for months or years because nobody wanted to be the one to decide.

## When this becomes urgent

- a renewal invoice arrives for a tool nobody can describe;
- the business is preparing a budget cut and cannot say which subscriptions are essential;
- a key employee leaves and takes the only login with them;
- the total of small software charges has quietly become one of the largest overheads after salaries and rent.

## Bottom line

Subscription inertia is a decision-rights problem more than a technology problem. The software is known, the cost is visible, and the saving is plain. What is missing is a person who is expected, trusted and permitted to say no. Give every recurring charge a named owner, a review date and a default of "cancel unless proven useful", and the money that has been leaking out for years can be put to work elsewhere.
