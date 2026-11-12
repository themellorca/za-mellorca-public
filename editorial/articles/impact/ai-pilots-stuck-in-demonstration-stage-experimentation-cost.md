---
hub: impact
record_id: CPS-279
slug: ai-pilots-stuck-in-demonstration-stage-experimentation-cost
title: AI Pilots That Never Ship: The Cost of Experiments With No Operational Payoff
description: Repeated AI demonstrations and pilots that never reach daily use add up to licences, consultants and staff time with no return. A clear owner, measure and end date turn experiments into decisions.
lead: Repeated AI demonstrations and pilots that never reach daily use add up to licences, consultants and staff time with no return. A clear owner, measure and end date turn experiments into decisions.
category: Digital Operations
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: AI projects remaining in demonstrations and pilots that never reach daily operational use
primary_cost_mechanism: Licences, consulting and staff time spent with no operational return, plus the benefits delayed while pilots drift
sources:
  - AI Risk Management Framework | https://www.nist.gov/itl/ai-risk-management-framework
  - https://inforegulator.org.za/popia/ | https://inforegulator.org.za/popia/
  - Cost Optimization design principles - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/cost-optimization/principles
related:
  - Meetings That Decide Nothing: The Payroll Cost of Meeting Overload | /impact/meetings-without-decisions-payroll-cost/
  - Policing Routine Work: The Management Cost of Checking Recurring Tasks by Hand | /impact/checking-recurring-tasks-completed-management-policing-cost/
  - Thirty People, Five-Person Processes: The Cost of Systems That Did Not Grow | /impact/five-person-processes-growing-business-scaling-cost/
summary: Repeated AI demonstrations and pilots that never reach daily use add up to licences, consultants and staff time with no return. A clear owner, measure and end date turn experiments into decisions.
layout: plain
---
## The tolerated pain

The business has run an AI pilot. Then another. A chatbot was trialled on the website, a tool summarised meeting notes for the sales team, and an assistant drafted replies in the support inbox. The demonstrations went well and the board was impressed. Twelve months later, none is part of how the business actually runs. The chatbot is switched off, the summaries are used by two enthusiasts, and the support assistant is waiting for "the next phase".

Nothing dramatic went wrong, which is why nobody stops it. There is a licence here, a consultant's invoice there, a few hundred hours of staff time spent on workshops and testing. Each experiment is small enough to approve and too small to scrutinise. Added up, they are a continuing cost with no operational return.

This article is about AI experiments that remain in the demonstration stage. It is not about whether AI is useful. It is about the gap between a convincing demonstration and a working process, and what it costs to stay on the wrong side of that gap. It complements [buying AI without a defined business problem](/impact/buying-ai-without-defined-business-problem-cost/), which covers the starting point, and [AI subscription sprawl](/impact/ai-subscription-sprawl-unmeasured-value-cost/), which covers the spend that accumulates.

## Why pilots stall

A demonstration answers the question "can this work?" A production process has to answer "will it work every day, on our data, with our people, within our rules, at a cost we can justify?" Many pilots never face the second question until it is too late to answer it cheaply.

- **The data was tidied for the demo.** Pilots use a clean sample. The real records are incomplete, duplicated or spread across systems, as described in [AI on poor quality data](/impact/ai-on-poor-quality-data-financial-cost/).
- **No process owner.** A pilot is usually sponsored by IT or an enthusiast, not by the manager whose process it would change, so nobody is accountable for adopting it.
- **No definition of success.** Without a target such as time saved, error rate reduced or revenue protected, there is nothing to prove or disprove.
- **No path into the real systems.** The tool sits beside the workflow rather than inside it. Staff must copy and paste, so use fades once the novelty does. The Insights piece on [why AI readiness is really systems readiness](/insights/why-ai-readiness-is-really-systems-readiness/) explains the dependency on connected systems.
- **Risk was deferred.** Questions about personal information, accuracy, review of outputs and accountability are left for later, then block production.
- **The pilot has no end date.** It continues indefinitely because no decision rule says when to scale, change or stop.

## The governance gap

The US National Institute of Standards and Technology describes its [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) as a voluntary resource to help organisations incorporate trustworthiness considerations into the design, development, use and evaluation of AI products and systems. The point for a business owner is that such considerations are meant to be part of the design from the beginning, not an afterthought bolted on when a pilot is supposed to go live.

For South African organisations, the Information Regulator's [POPIA guidance](https://inforegulator.org.za/popia/) sets out the duties of the Information Officer, including encouraging compliance with the conditions for lawful processing of personal information. If a pilot uses customer or employee data, the Information Officer should know about it before it scales, because the cheapest time to decide what data may be used is before the tool is embedded.

## Why businesses tolerate it

- **Fear of falling behind.** Stopping a pilot feels like admitting defeat in a race that everyone says is urgent.
- **Small budgets hide the total.** Each experiment is funded from a different cost centre, so no one sees the combined spend.
- **Demonstrations are persuasive.** A polished demo creates an impression of progress even when the underlying process is unchanged.
- **Vendors and consultants benefit from phases.** "Phase two" is always about to begin.
- **Nobody wants to do the hard part.** Redesigning the process, cleaning the data and training the staff is slower and less exciting than running another demo.

## Operational symptoms

- several AI tools trialled, none embedded in a documented process;
- demonstrations that impress on the day but are not used the following month;
- licences still paid for tools that few people open;
- a consultant's slide deck as the main output of a project;
- no figure that shows time saved, errors avoided or revenue gained;
- pilot staff returning to their old way of working when the novelty fades;
- "phase two" and "next quarter" appearing in every status update.

## How the pain becomes money

- **Direct spend:** licences, platform fees, consultants and development time with no operational return.
- **Staff time:** workshops, testing, data preparation and training that do not become a lasting capability.
- **Opportunity cost:** the best people and the limited budget are tied up when they could improve a process that has a clearer return.
- **Repeated learning:** each pilot starts afresh because the earlier lessons were not recorded.
- **Credibility cost:** staff and leaders become sceptical, making a later, well-designed initiative harder to launch.
- **Delayed benefits:** savings that a working solution would have delivered are postponed, month after month.

## An illustrative cost model

This example is **illustrative**. Every figure is an assumption for a hypothetical business. Picture a Stellenbosch services company with 60 staff that has run three AI pilots in a year and moved none to production.

| Assumption | Value |
| --- | --- |
| Licences and platform fees for three pilots | R14,000 a month combined |
| External consulting and setup | R180,000 in total |
| Staff hours on workshops, testing and data preparation | 420 hours at R320 |
| Annual benefit expected from one pilot if in production | R240,000 |
| Months of that benefit delayed so far | 9 |

- Licences: R14,000 × 12 = R168,000
- Consulting and setup: R180,000
- Staff time: 420 × R320 = R134,400
- Delayed benefit from the pilot that could have gone live: R240,000 ÷ 12 × 9 = R180,000
- **Illustrative total: about R662,000 in a year**, of which R180,000 is benefit not yet captured rather than cash spent

The figure that matters is the last one. A pilot that ends in a decision, even a decision to stop, is a cheap experiment. One that drifts is an expensive habit. To check your own position, add up every AI-related licence, invoice and workshop in the last twelve months and then count how many are part of a daily process.

## When it becomes commercially urgent

- the business is about to approve a further pilot without reviewing the earlier ones;
- annual AI-related costs are visible in the management accounts but benefits are not;
- staff say they were promised time savings that never arrived;
- a competitor, client or tender requires evidence of AI-enabled efficiency;
- personal data is being used in a trial without a documented basis.

## What better looks like

Getting a pilot to production is mostly about management, not technology.

1. **Start from a process, not a tool.** Choose a specific, repetitive and measurable process. The Insights article on [how to choose a business process for an AI agent](/insights/how-to-choose-a-business-process-for-an-ai-agent/) gives practical criteria.
2. **Name a business owner.** The manager who runs the process must own the result, not just IT.
3. **Define success before starting.** Set a baseline and a target, such as hours per week, error rate or response time.
4. **Use real data from day one.** Test on messy, representative records, with the privacy questions answered up front.
5. **Plan the integration.** Decide how the tool connects to the systems staff actually use, and who reviews its output.
6. **Set an end date and a decision rule.** At the end of the pilot, scale it, change it or stop it. Record what was learned either way.
7. **Check readiness first.** The questions in [is your business actually ready for AI agents](/insights/is-your-business-actually-ready-for-ai-agents/) catch most blockers before money is spent.

Microsoft's [cost optimization principles](https://learn.microsoft.com/en-us/azure/well-architected/cost-optimization/principles) add a useful discipline: build a cost model that includes infrastructure, support and implementation, and treat cost management as a continuing practice with monitoring and repeatable processes. An AI pilot with no cost model and no review point does not meet that standard.

## Practical next actions

1. List every AI pilot, trial and subscription from the last year with its cost and owner.
2. For each, write one sentence stating the process it was meant to improve and the measured result.
3. Decide to scale, redesign or stop each one within thirty days.
4. Record the lessons from each in a single page that future projects will read.
5. Require a named owner, a baseline, a target and an end date before any new pilot is approved.
6. Involve the Information Officer wherever personal data is used.

## Bottom line

AI experiments are valuable when they end in a decision. They are costly when they become permanent pilots that consume licences, consultants and staff attention without changing how work gets done. The remedy is neither more enthusiasm nor less. It is choosing a real process, owning it, measuring it and deciding on a date what happens next.
