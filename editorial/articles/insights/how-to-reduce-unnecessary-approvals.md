---
hub: insights
record_id: INS-114
slug: how-to-reduce-unnecessary-approvals
title: How to Reduce Unnecessary Approvals
description: High volume, near-zero rejections and long waits mean an approval has stopped controlling anything. An inventory shows which to remove, which to redesign and which to keep.
lead: High volume, near-zero rejections and long waits mean an approval has stopped controlling anything. An inventory shows which to remove, which to redesign and which to keep.
category: Process Improvement
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Process Improvement
sources:
  - Separation of Duty (SOD) - Glossary - CSRC | https://csrc.nist.gov/glossary/term/separation_of_duty
  - Approve or reject documents in workflows - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-use-approval-workflows
  - Get started with Power Automate approvals - Power Automate | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
related:
  - How to Find Steps That Exist Only Because the System Is Bad | /insights/how-to-find-steps-that-exist-only-because-the-system-is-bad/
  - How to Measure Whether a Workflow Is Improving | /insights/how-to-measure-whether-a-workflow-is-improving/
  - Why Hiring More People Does Not Fix Broken Operations | /insights/why-hiring-more-people-does-not-fix-broken-operations-diagnose-before-you-add-headcount/
summary: High volume, near-zero rejections and long waits mean an approval has stopped controlling anything. An inventory shows which to remove, which to redesign and which to keep.
layout: plain
---
A property management company in Umhlanga counted its approvals for one month. Maintenance call-outs under R2,000 needed the portfolio manager's sign-off. Tenant deposit refunds needed two signatures. Stationery orders needed the office manager. Marketing posts needed the director. Supplier detail changes needed finance. In total, the company processed just over 1,400 approval requests in the month. Fewer than twenty were rejected. Most were approved within seconds of being opened, often from a phone, between meetings. The median wait before they were opened was more than a day.

That pattern, high volume, very low rejection and long waiting time, is the signature of approvals that have stopped doing their job. The control still exists on paper, but it no longer changes decisions. It only delays them.

## What an approval is supposed to do

An approval is a control. It exists to stop something harmful from happening: spending money the business does not have, committing to terms it cannot meet, or allowing one person to both make and benefit from a decision. The US National Institute of Standards and Technology defines [separation of duty](https://csrc.nist.gov/glossary/term/separation_of_duty) as the principle that no user should have enough privileges to misuse a system on their own. Good approvals put that principle into practice.

An approval that never rejects anything, or that is rubber-stamped without review, provides little of that protection. It may even give false comfort, because everyone assumes someone else is checking. Our article on [why approval processes become bottlenecks](/insights/why-approval-processes-become-bottlenecks/) describes how this happens.

## Step one: build an approval inventory

List every approval in the business, formal or informal. For each one, record:

- What is being approved, and by whom.
- How many requests per month.
- How many were rejected or changed.
- The typical wait from request to decision.
- What risk the approval is meant to control.
- Whether that risk is real today, or was real when the approval was introduced.

Most systems that run approvals keep a history you can export. Where approvals happen by email or chat, a two-week sample is enough.

## Step two: sort approvals into keep, change and remove

With the inventory in hand, sort each approval using a few simple tests.

- **Remove** approvals where the risk is negligible, the rejection rate is near zero, and a mistake would be cheap and easy to reverse. Stationery orders below a set amount are a typical example.
- **Change** approvals where the risk is real but the current design is out of proportion. These are candidates for thresholds, pre-approval or after-the-fact review.
- **Keep** approvals that protect against significant or irreversible harm, such as changes to supplier bank details, large commitments or anything with legal consequences. Make these faster, not fewer.

## Step three: replace blanket approvals with smarter controls

Many approvals can be replaced by controls that protect the business without stopping every transaction.

- **Thresholds.** Require approval only above an amount. Microsoft's Business Central documentation on [approval workflows](https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-use-approval-workflows) notes that approval users are set up with amount limits, which is the same idea: approval effort follows value.
- **Pre-approval by category.** Approve a budget or a list of trusted suppliers once, then let routine transactions within it proceed.
- **After-the-fact review.** Let low-risk items go ahead and review a sample weekly. If problems appear, tighten the rule.
- **Automated checks.** Let the system confirm conditions that a person was only checking mechanically, such as whether a purchase order exists or whether a call-out matches an open maintenance ticket.

## Step four: reduce the number of approvers in each chain

Sequential approvals, where a request goes from one approver to the next in order, multiply waiting time. Power Automate's [approval types](https://learn.microsoft.com/en-us/power-automate/get-started-approvals) illustrate the alternatives: everyone must approve, the first to respond decides, or a strict sequence. Where two approvers are needed purely for cover, "first to respond" removes the wait without reducing control. Where two independent people genuinely need to agree, as with deposit refunds, run the approvals in parallel rather than one after the other.

## Step five: make the approvals you keep faster

For approvals that remain, reduce the time each one waits:

- Give the approver everything needed to decide on one screen, so they do not have to look things up.
- Set a response time and an automatic reminder, then escalation or delegation when it passes. Business Central, for example, supports delegation to a substitute approver and notifications for overdue requests.
- Name a substitute for every approver, so leave does not stop work.

Our guide to [automating approvals without losing control](/insights/how-to-automate-approvals-without-losing-control/) covers the design of the approvals you keep.

## Watch for approvals that hide a missing rule

Some approvals exist because nobody ever wrote down the rule the approver is applying. A manager who approves every discount request is often checking the same two things each time: whether the customer is in good standing and whether the discount stays above a minimum margin. Once that rule is written down, the system can apply it, and only requests that break the rule need a person. Ask each approver what they actually look at before saying yes. If the answer is the same short list every time, you have found a rule, not a judgement.

## Step six: tell people what changed and why

Removing an approval can feel like losing control to the person who used to give it. Explain the evidence from the inventory, describe the replacement control, and agree a review date. If problems appear, adjust. In practice, most managers are relieved to stop approving things they never rejected.

## What the property company changed

After the inventory, the Umhlanga company removed approval for stationery and for maintenance call-outs below R1,500 against open tickets, replacing them with a weekly sample review. It kept the deposit refund check but ran both signatures in parallel. It kept supplier bank detail changes as a strict two-person control. Approval volume fell by about two thirds, and the remaining approvals were opened faster because there were fewer of them competing for attention. For more on how small delays like these add up, see [the hidden cost of operational friction](/insights/hidden-cost-of-operational-friction/).

## Practical next actions

1. List every approval in the business with its monthly volume, rejection rate, typical wait and the risk it is meant to control.
2. Mark each approval as keep, change or remove, based on whether the risk is real, significant and hard to reverse.
3. Replace blanket approvals with thresholds, pre-approved categories, automated checks or weekly sample reviews where the risk allows.
4. Convert sequential approvals to parallel or first-to-respond where the second approver is only there for cover.
5. For the approvals you keep, set response times, reminders and named substitutes, and review the changes after three months.
