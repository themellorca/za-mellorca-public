---
hub: insights
record_id: INS-429
slug: how-to-calculate-the-cost-of-piling-on-more-software
title: How to Calculate the Cost of Piling On More Software
description: The subscription fee is the visible part of what software costs. Setup, connections, support, workarounds and exit make up the rest, and the whole pile matters more than the newest tool.
lead: The subscription fee is the visible part of what software costs. Setup, connections, support, workarounds and exit make up the rest, and the whole pile matters more than the newest tool.
category: Software Portfolio
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Software Portfolio
sources:
  - Cost Optimization design principles - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/cost-optimization/principles
  - Architecture strategies for optimizing component costs. - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/cost-optimization/optimize-component-costs
  - Make better use of data | https://www.gov.uk/guidance/make-better-use-of-data
related:
  - Why Cheap SaaS Can Become Expensive Operations | /insights/why-cheap-saas-can-become-expensive-operations/
  - How to buy business software without letting the demo make the decision | /insights/how-to-buy-business-software-without-letting-the-demo-make-the-decision/
  - What Managed Digital Operations Actually Means | /insights/what-managed-digital-operations-actually-means/
summary: The subscription fee is the visible part of what software costs. Setup, connections, support, workarounds and exit make up the rest, and the whole pile matters more than the newest tool.
layout: plain
---
A sales manager finds a tool that tracks follow-ups better than the shared spreadsheet. It costs a modest monthly fee per user, so it goes on the company card. A few months later, finance adds another tool for approvals, operations adds one for scheduling, and someone connects a fourth with an automation service. Each purchase was easy to justify, and none of them is expensive on its own. Nobody has added them up.

The licence fee is the part of the cost that appears on a statement, which is why it gets the attention. It is usually the smaller part. This article shows how to build a realistic picture of what the latest addition, and the pile behind it, actually cost.

## Start from the full cost, not the subscription

Microsoft's cost optimisation guidance for architects recommends developing a cost model, describing it as a way to [segment expenses and estimate the total cost of ownership, including infrastructure, support, and implementation](https://learn.microsoft.com/en-us/azure/well-architected/cost-optimization/principles). The guidance is aimed at cloud workloads, but the discipline applies to any software purchase. The price list gives you one line of a cost that has several.

Build your own model with these layers, in rand, for twelve months:

- **Licences:** every seat, add-on and usage charge, including the ones that rise with volume. Include seats that nobody uses.
- **Setup:** configuration, data loading and any consultant time to get started.
- **Connections:** the effort to link the tool to the others, plus the cost of keeping the links working. A new tool that must exchange data with three existing ones adds three connections, not one.
- **Training and support:** staff hours to learn it, the hours of the person who answers questions, and any paid support tier.
- **Administration:** user management, permissions, renewals and security checks.
- **Workarounds:** the manual copying, re-keying and checking that staff do because the tool does not quite fit. Our discussion of [the hidden labour cost behind a licence fee](/impact/software-needing-constant-manual-workarounds-hidden-labour-cost-behind-licence-fee/) covers this layer in depth.
- **Exit:** the cost of getting your data out and moving on if the tool is dropped.

UK government guidance on data practice makes a related point about purchasing, noting that a business process should include [a purchasing strategy which considers the total cost of a technology tool or service through its full lifecycle](https://www.gov.uk/guidance/make-better-use-of-data). Lifecycle is the right word. The costs arrive at different moments, and the last ones, exit and data recovery, are the ones people forget to ask about at the start.

## Put a rand value on time

Most of the layers above are measured in hours rather than invoices. To compare them with licence fees you need one hourly figure. Take a typical monthly cost to the company of the staff involved, including benefits and employer contributions, and divide by the hours they actually work in a month. The result is imprecise, but it is better than treating staff time as free. Use a range, with a low and a high estimate, and see whether your conclusion changes. If it does not, the precision does not matter.

A worked illustration, with invented figures to show the method: suppose a tool costs R400 per user per month for ten users, so R48,000 a year. Setup takes forty hours of internal and consultant time. Two people spend an hour each week keeping two connections tidy, about a hundred hours a year. Everyone spends fifteen minutes a week re-entering data the tool cannot receive automatically. At an assumed internal cost of R300 an hour, the time costs alone add up to more than the licences. Use your own figures; the point is the shape. The visible fee is often a minority of the real cost.

## Count the pile, not just the newest piece

Adding a tool changes the cost of the tools already there. Every addition raises the number of places where information can disagree, the number of logins to manage, the number of renewal dates to track and the number of things a new employee must learn. These effects are shared across the whole stack, so a fair accounting allocates them across the full set rather than pinning them on the latest purchase alone.

A practical way to see this is to count pairs. With four tools, six pairs could need to exchange data. With eight tools, there are twenty-eight. Not every pair will need a link, but each missing link tends to become a person copying and pasting. If you have not yet counted your tools, our article on [paying for software nobody uses properly](/insights/the-real-cost-of-paying-for-software-nobody-uses-properly/) is a good starting point for the inventory.

## Look for overlap and idle features

Many tools now bundle features that other tools already provide. A project tool includes chat, a communication tool includes tasks, and a customer system includes document signing. When two products do the same job, you pay twice and staff must decide which to use. Microsoft's guidance on optimising component costs recommends that organisations [regularly remove or optimize legacy, unneeded, and underutilized workload components](https://learn.microsoft.com/en-us/azure/well-architected/cost-optimization/optimize-component-costs). Applied to a business software stack, that means asking of each tool and each paid feature whether it is actually used, by whom and for what.

Evidence beats opinion here. Use the vendor's usage reports where they exist, and look at when each seat was last active. Seats unused for ninety days are a candidate to cancel. Features that exist only because they came in a bundle cannot be removed on their own, but they belong in the case when you consider a cheaper plan.

## Set the benefit against the cost

A cost without a benefit is half an analysis. For each tool, state in one sentence what it is meant to improve and how you would know. It might be fewer days to collect payment, fewer missed follow-ups, less time preparing a monthly report or fewer errors on orders. Measure the starting point before the tool goes live, otherwise you will never be able to show a change. Our note on [how to measure whether software is paying for itself](/insights/how-to-measure-whether-software-is-paying-for-itself/) explains how to set a baseline.

When the benefit cannot be stated, or cannot be shown after a fair trial, that is information. It may point to a tool nobody needed, or one that was never properly adopted.

## Use the numbers to decide, and decide before you buy

The cost model is most valuable at the point of purchase. Before approving the next tool, require a one-page estimate that covers the layers above, names an owner and states the expected benefit. Ask whether an existing tool could do the job, and what would be switched off if this one is added. Our list of [questions to ask before you buy another tool](/insights/before-you-buy-another-tool-ask-these-questions/) can be used as the checklist. Where the answer is that nothing would be switched off, the true cost of the purchase includes the extra complexity.

## Practical next actions

1. List every paid software tool, including those on staff expense claims and company cards, with its monthly cost, number of seats and the person who owns it.
2. For your three most expensive tools, estimate annual hours spent on setup, connections, support, administration and workarounds, and multiply by a cost-to-company hourly rate.
3. Check usage reports and cancel or downgrade seats and plans that show no activity for ninety days.
4. Draw a simple map of which tools exchange data and where staff copy information by hand, and count the manual links.
5. Write one sentence per tool stating the benefit it was bought for and the measure that would show it, then check whether that measure has moved.
6. Adopt a one-page cost estimate that must be completed before any new tool is approved, including what it replaces and what it costs to leave.

Piling on software feels cheap because each step is small. Calculating the whole cost makes the steps visible, and that is usually enough to change which ones you take.
