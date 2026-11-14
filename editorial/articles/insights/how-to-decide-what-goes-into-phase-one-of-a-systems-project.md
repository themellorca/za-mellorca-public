---
hub: insights
record_id: INS-358
slug: how-to-decide-what-goes-into-phase-one-of-a-systems-project
title: How to Decide What Goes Into Phase One
description: A practical filter for turning a long wish list into a focused first phase that removes a real cost, tests the riskiest assumption and leaves the business better off.
lead: A practical filter for turning a long wish list into a focused first phase that removes a real cost, tests the riskiest assumption and leaves the business better off.
category: Implementation Planning
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Implementation Planning
sources:
  - How the discovery phase works | https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works
  - How the alpha phase works | https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works
  - How the beta phase works | https://www.gov.uk/service-manual/agile-delivery/how-the-beta-phase-works
related:
  - How to decide what technology problem to solve first | /insights/how-to-decide-what-technology-problem-to-solve-first/
  - How to Prevent Requirements From Growing Without Control | /insights/how-to-prevent-requirements-from-growing-without-control/
  - How to prioritise digital improvements when budget is limited | /insights/how-to-prioritise-digital-improvements-when-budget-is-limited/
summary: A practical filter for turning a long wish list into a focused first phase that removes a real cost, tests the riskiest assumption and leaves the business better off.
layout: plain
---
Every systems project starts with a long wish list. Sales wants the pipeline view, finance wants automated invoicing, the warehouse wants barcode scanning and the owner wants a dashboard that shows everything. The list is reasonable item by item. Taken together, it is a project that will run late, overspend and arrive half-adopted. The real work of planning is deciding what goes into phase one and what waits.

This article offers a way to make that decision on grounds other than who argued loudest. It borrows from how public-sector digital teams stage their work, because their guidance is unusually plain about what each stage is for.

## What phase one is for

Phase one is not a smaller version of the whole project. It is the part that proves the approach works, in real conditions, with real users, so that the later phases rest on something solid. A good first phase therefore has three jobs: remove a pain people already feel, test the riskiest assumption in the plan, and leave the business in a working state if the project stopped there.

The UK government's service manual, which many South African teams find a practical reference, describes a staged approach. In its guidance on the [discovery phase](https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works), the first stage is about understanding the problem before committing to build anything. It advises reframing a pre-defined solution as a problem to be solved and, where possible, quantifying how much the problem currently costs. It also states that you should not start building your service in discovery.

Those two ideas, define the problem and put a cost on it, are the best filter for a wish list. An item that cannot be tied to a stated problem or a measurable cost has not earned a place in phase one.

## A five-question filter for each wish-list item

Write every request on its own line, then ask the same five questions of each. Be strict with the answers.

1. **What problem does this remove, and for whom?** Name a person and a task, such as "the credit controller re-keys every invoice into two systems". Items with no named person are usually preferences.
2. **What does that problem cost now?** A rough figure in hours per week or rand per month is enough. If nobody can estimate it, it is probably not the biggest problem.
3. **Does anything else depend on it?** Some items are foundations: a clean customer list, an agreed set of product codes, a decision on which system owns which data. Later features fail without them, so they go in early even when they are not exciting.
4. **How risky is it?** The alpha-phase guidance in the same service manual recommends identifying your riskiest assumptions and testing them first. Its example is a team that needed to connect with over 400 local council systems and concentrated its early effort on proving that integration was possible, because the service would not work without it.
5. **Can we ship it and use it within weeks?** A first phase that takes nine months will not give you the feedback you need. If an item cannot be useful quickly, split it.

## Sort into three bins

After the questions, place each item in one of three bins.

- **Phase one:** high cost, real owner, foundational or high-risk, deliverable quickly.
- **Later phases:** valuable but dependent on phase one, or lower in cost, or needing more learning first.
- **Not now, possibly never:** requests with no clear problem, or problems that a change in process would fix without any software at all.

The third bin matters more than it looks. Many wish-list items disappear once the team writes out the problem they are meant to solve. Our article on [why automating a broken process makes the problem worse](/insights/why-automating-a-broken-process-makes-the-problem-worse/) explains why fixing the process first often removes the need for the feature.

## Keep the first phase narrow, but complete

Our piece on [which business processes break first when a company grows](/insights/which-business-processes-break-first-when-a-company-grows/) is a useful guide to where a thin slice will pay off fastest. There is a trap in the opposite direction. A phase one that includes only the easy items, spread thinly across every department, helps nobody enough to change a habit. The better approach is a thin slice that runs from beginning to end for one process or one team. A single order-to-cash flow working properly, for example, teaches you more than ten half-configured modules.

The beta-phase guidance describes the same logic in terms of rollout. It suggests starting with a limited number of real users so you can gather feedback and improve before opening up further, and says to keep any legacy service running until the new one is ready to replace it. For a business, that translates to a pilot group, a defined start date and the old method kept available until the new one has proven itself. You can read the full reasoning in the [beta phase guidance](https://www.gov.uk/service-manual/agile-delivery/how-the-beta-phase-works).

## Decide what success looks like before you start

A first phase needs a finish line that is not "the software is installed". Agree two or three measures in advance: for instance, invoices raised from the system rather than a spreadsheet, time taken to produce the weekly stock report, or the share of customer records with a valid contact. Without these, phase two will be argued on opinion.

The alpha guidance also reminds teams to expect to throw away some of what they build early on, since the purpose is to test ideas and not to produce final work. You do not have to be that blunt in a business setting, but you should treat phase one as a learning stage as much as a delivery stage, and keep some of the budget and the schedule free for what you find out. See the full explanation of [how the alpha phase works](https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works) for how those teams handle it.

## Protect the scope once you have it

The list will be challenged the moment it is published. Someone senior will ask for one more thing. Before you say yes or no, ask what comes out in exchange, and put the answer in writing. A trade-off made visible is usually easier to defend than a refusal. If you are still choosing a supplier, use our guide to [scoping a systems implementation properly before you sign](/insights/how-to-scope-a-systems-implementation-properly-before-you-sign/) to make sure the contract reflects the phase boundaries, not just the total price.

## Practical next actions

1. Collect every request into one list and write beside each the person affected and the task they struggle with today.
2. Estimate the monthly cost of each problem in hours or rand, even roughly, and drop or park any item nobody can connect to a cost.
3. Mark the foundations, such as clean data and agreed codes, and the single riskiest assumption in the plan, and place both in phase one.
4. Choose one end-to-end process or one team for the first release, with a pilot group and a date by which people should be using it.
5. Write down two or three success measures and the trade-off rule for scope changes, and have the project sponsor sign them before work starts.

A first phase that is small, useful and measured gives you the evidence to fund the second. A first phase that tries to be everything usually delivers a demonstration and a delay.
