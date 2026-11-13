---
hub: impact
record_id: CPS-064
slug: technology-bought-before-process-defined-failed-implementation-wasted-licences
title: Software bought before the process was defined: What failed implementations cost
description: Buying a system before agreeing how the work should flow leaves you paying for licences, reconfiguration and rework while you decide what you needed.
lead: Buying a system before agreeing how the work should flow leaves the business paying for licences, reconfiguration and rework while it decides what it actually needed.
category: Digital Operations
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: Buying technology before defining the business process it must support
primary_cost_mechanism: Technology waste through unused licences, repeated implementation effort, rework labour and delayed benefit
sources:
  - Introduction to the Success by Design framework - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/success-by-design
  - Operational Excellence cloud design principles - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/principles
  - Manage your data in Dynamics 365 implementation projects - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/data-management
related:
  - Four tools, one job: The real cost of departments buying their own software | /impact/departments-buying-separate-tools-same-need-duplicate-subscription-cost/
  - The labour cost hidden behind software that needs constant workarounds | /impact/software-needing-constant-manual-workarounds-hidden-labour-cost-behind-licence-fee/
  - The cost of work waiting for approval | /impact/approval-queues-blocked-capacity-cost/
  - What belongs in an implementation plan | /insights/the-parts-of-a-sound-systems-implementation-plan/
summary: Buying a system before agreeing how the work should flow leaves the business paying for licences, reconfiguration and rework while it decides what it actually needed.
layout: plain
---
## The system that was bought before the question was asked

A demonstration goes well. The sales consultant shows how orders flow through the screens, how reports appear with one click, how approvals route themselves. The price is within reach, the vendor offers a year-end discount, and the business signs. Three months later, the team is still arguing about how a quote should become an order, nobody can agree who approves discounts, and half the licences have never been used.

What went wrong is rarely the software. It is the sequence. The business bought a tool to support a process that had never been written down, so the tool could not support it, and the implementation team was left to guess. This article is about that specific mistake, buying technology before defining the business process it has to serve, and about the cost of a failed or half-adopted implementation. It is a different problem from [buying a new application for every process problem](/impact/buying-software-for-every-process-problem/), which describes repeated purchasing across the business. Here the focus is a single significant purchase, and what happens when the groundwork is skipped.

## Why the order gets reversed

Buying first feels productive. A signed contract is a visible decision; mapping a process is slow and exposes disagreements that people would rather not have. The vendor is also motivated to move quickly, and the demonstration is designed to make the software look like the answer. Many owners also assume, reasonably, that the software embodies best practice, so adopting it will fix how work is done. Sometimes it does. More often it fixes nothing, because the problem was ownership, rules or data, and the tool simply makes the confusion visible and more expensive.

Smaller businesses face an additional pressure. Nobody has the time to run a requirements exercise, and the person who knows the process best is also the person who is busiest. The path of least resistance is to configure the software to look like the demonstration and promise to refine things later.

## What the vendor guidance itself says

It is worth noticing how seriously vendors treat this stage when they write for implementers. Microsoft's [Success by Design framework](https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/success-by-design) for Dynamics 365 places gathering and validating business requirements, and finalising the high-level solution approach, in its first phase, before building starts. It also notes that the common pressures of time, budget and resources can prevent teams from pausing to address risks "before it's too late in the project lifecycle". The Azure Well-Architected Framework's [operational excellence principles](https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/principles) make the same point from a different angle: good specifications cut operational costs and the chance of failure, because the people building understand the design, goals and completion criteria before they start.

Neither document is about small businesses, and neither guarantees an outcome. The shared lesson is that requirements and process come first in the guidance written by the vendors themselves, even though they are sold products at the demonstration stage.

## How it shows up

- **Endless configuration.** The implementation drifts because every decision about "how we do it" is being made for the first time during set-up.
- **Customisation creep.** The software is bent to fit existing habits, including the poor ones, creating cost and upgrade problems later.
- **Low adoption.** Staff continue to use spreadsheets and email because the system does not match how they actually work.
- **Shelfware.** Licences are paid for users who never log in. See [paying for software licences employees no longer use](/impact/unused-software-licences-financial-waste/).
- **Disputed success.** Nobody defined what success meant, so the project can neither be declared finished nor declared failed.

## How it becomes money

The mechanism is technology waste, combined with labour cost and rework. The visible part is the licence. The larger part is everything that has to be redone when the process is finally defined:

> Cost of the sequencing mistake = licences paid during under-use + implementation effort spent twice + staff time on parallel and manual working + delay in the benefit the system was meant to bring

### An illustrative example

A South African logistics business with 35 office staff buys a workflow and job-management platform for 25 users at R480 per user per month on a 12-month term, with a vendor-led set-up quoted at R90,000. Nobody maps the job-booking, dispatch and invoicing steps in advance. After four months, the team concludes that the configuration does not match how dispatch really works, and a second round of design begins. All figures are **illustrative assumptions**.

| Cost element | Assumption | Cost |
| --- | --- | --- |
| Licences paid, 12 months | 25 × R480 × 12 | R144,000 |
| Initial set-up | Vendor quote | R90,000 |
| Redesign and reconfiguration | Second round at 60% of original effort | R54,000 |
| Internal time on workshops and rework | 8 people × 30 hours × R350 | R84,000 |
| Parallel manual working during delay | 6 staff × 4 hours a week × 16 weeks × R300 | R115,200 |
| **Total first-year cost** |  | **R487,200** |

Check: 25 × 480 × 12 = R144,000; 60% of R90,000 = R54,000; 8 × 30 × 350 = R84,000; 6 × 4 × 16 × 300 = R115,200. The sum is R487,200.

Suppose a proper process definition up front would have cost 40 hours of internal time across five people (200 hours at R350, or R70,000) plus a modest consulting contribution of R40,000. That is R110,000. On these assumptions, roughly R54,000 of redesign, R84,000 of rework time and much of the R115,200 of parallel working could have been avoided or reduced, a saving well beyond the cost of doing the groundwork. The model does not prove that definition would have prevented every problem. It shows the scale of what is at stake if it prevents even half of them.

The licences also deserve a mention: for the four months before the system matched the work, a large share of the R144,000 bought nothing.

## Secondary consequences

The damage is not only financial. A failed first implementation makes staff sceptical of the next one. Customisations made to fit an unexamined process become permanent. Data entered into a badly designed structure must be cleaned later; Microsoft's [guidance on data management in implementation projects](https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/data-management) says that data quality should be treated as fitness for the intended use, and that during requirements gathering teams should start paying close attention to the availability of the data the solution needs. Without a defined process, nobody knows which data is the intended use. For the afterlife of a poorly prepared project, see [why technology implementations fail after go-live](/insights/why-technology-implementations-fail-after-go-live/).

## When it becomes urgent

The moment to act is before signature. If a contract is about to be signed, or a renewal is approaching and adoption is poor, the cheapest intervention is to stop and describe the process. If you are already live and struggling, the same applies: pause new configuration, document how work should flow, and test the configuration against it.

## What better looks like

A business that buys well can describe, in a page or two, the process the technology will support: who starts it, what the steps are, who decides what, which data is created, and what a good result looks like. It has a short list of must-have requirements and a larger list of nice-to-haves. It has asked what existing tools already cover. It has agreed measures of success, such as order-to-invoice time, or the share of jobs created without retyping. And it runs the demonstration using its own scenarios, not the vendor's. The Mellorca article on [how to scope a systems implementation properly before you sign](/insights/how-to-scope-a-systems-implementation-properly-before-you-sign/) goes into detail.

## Practical steps

1. **Write the process on one page** in plain language before any vendor conversation.
2. **Name the owner.** One person is accountable for the process and for approving its design in the tool.
3. **Define success measures** you can check after 90 days.
4. **Test with your scenarios.** Ask the vendor to show your three most awkward cases, not the polished ones.
5. **Phase licences** to match rollout, or negotiate a ramp, so you are not paying for users who cannot yet use the system.
6. **Get independent help** if the process is contested. A structured [digital systems audit](/services/digital-systems-audit/) can document what actually happens today.

## Bottom line

Software does not create a process, it only enforces one. When it is bought first, the business pays for configuration, for rework and for licences that sit idle while it decides what it wanted. When the process is defined first, the tool becomes a smaller, cheaper and far more likely success. The cost of thinking first is a few days. The cost of thinking second is usually measured in months and in six figures.
