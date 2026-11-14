---
hub: patterns
record_id: PAT-383
slug: the-cost-of-ai-experiments-that-never-reach-production
title: The Cost of AI Experiments That Never Reach Production
description: Stalled AI pilots look harmless, but they absorb salaries, subscriptions and staff trust. Here is how to count the cost and give each experiment a route to daily use or a clean stop.
lead: Stalled AI pilots look harmless, but they absorb salaries, subscriptions and staff trust. Here is how to count the cost and give each experiment a route to daily use or a clean stop.
category: AI & Automation
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: AI & Automation
pattern_family: AI & Automation
observable_condition: Several AI pilots were started and demonstrated, none is used daily, and they remain officially in progress while subscriptions and staff time continue to be spent.
primary_identification: Experiments launched without a business measure, an owner, a live data plan or a stop rule, so there is no defined route to production and no clean way to end them.
commercial_value_dimensions: Productivity, capital allocation, staff trust, competitive timing and organisational learning
sources:
  - https://www.nist.gov/itl/ai-risk-management-framework | https://www.nist.gov/itl/ai-risk-management-framework
  - https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/strategy | https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/strategy
  - https://learn.microsoft.com/en-us/azure/well-architected/ai/application-design | https://learn.microsoft.com/en-us/azure/well-architected/ai/application-design
summary: Stalled AI pilots look harmless, but they absorb salaries, subscriptions and staff trust. Here is how to count the cost and give each experiment a route to daily use or a clean stop.
layout: plain
---
## Observable condition

A logistics company in Durban runs an AI experiment to draft replies to customer enquiries. A team member builds a prototype in a few weeks, the demonstration impresses the directors, and a second experiment is started: this time on summarising delivery exceptions. Eight months later neither is used day to day. The first never connected to the real inbox. The second depends on a spreadsheet export that one person produces by hand.

Meanwhile the business has spent staff time, paid for tool subscriptions and consumed the goodwill of the people who were asked to test. The experiments are not failures that anyone has declared. They are simply still "in progress", which is a comfortable way of not deciding.

## Realisation

An experiment that never reaches production is not free because it was small. It has a cost in time, licences, attention and credibility. It also has a cost in what it prevents: the effort spent on a stalled pilot was not spent on something that might have gone live.

The realisation is that most of the expense of a failed experiment is hidden. It sits in salaries, in a recurring subscription, in the confidence of staff who were told this would change their work. Because nobody adds it up, the business does not learn that the pattern is repeating.

**Realisation prompt:** count the AI trials your business has started in the past year. How many are now part of someone's normal working day?

## Identification

This is a pattern of experiments without a route to operation. The visible signs are a demonstration that worked once, a pilot that depends on its creator and a list of ideas that keeps growing while few are completed. The common assumption is that the technology was not ready. The structural cause is usually that nothing was defined for what happens after the demonstration: who owns the result, what data feeds it, how it is checked and who pays for it to run.

The closest existing page is [why AI pilots stall before they become everyday operations](/patterns/why-ai-pilots-stall-before-they-become-everyday-operations/). That page describes the stall. This article is about the cost of the stall and how to count it.

## Diagnosis

- **The experiment starts with a tool, not a business measure.** Without a number that should change, there is no way to say it worked, so there is no moment at which it graduates.
- **The prototype uses clean sample data.** Live data is messier, spread across systems and sometimes inaccessible. The gap only appears at the point of going live.
- **Nobody owns the result.** The enthusiast who built it has a day job. The department that would use it was not involved in the design.
- **Risk and review are left for later.** The [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) organises AI risk work around governing, mapping, measuring and managing. Pilots that skip these questions meet them for the first time when someone asks to rely on the output.
- **Running costs are unknown.** Usage fees, support time and monitoring are not estimated up front, so approval for production is hard to give.
- **No stop rule exists.** Without an agreed point at which a pilot is ended, it continues quietly, taking up licences and attention.

## Commercial impact

The commercial value at stake is productivity, capital allocation, staff trust, competitive timing and learning.

The direct cost is the sum of subscriptions, cloud usage, consultant fees and the salary time of everyone who built, tested or attended meetings about the experiment. Few businesses total this. When they do, the figure is often larger than the cost of putting one idea properly into production.

The indirect cost is opportunity. A business that runs five stalled pilots has five half-built things that nobody trusts and no finished thing that saves time. Competitors who finish one use case, even a modest one, gain a compounding advantage in how their people work.

The third is staff trust. People who were asked to test a tool, give feedback and change how they worked, only to see it vanish, become sceptical of the next initiative. That scepticism slows even good projects.

The fourth is lost learning. If the reasons a pilot stalled are not recorded, the next pilot meets the same obstacles.

## Common misidentification

One misreading is to conclude that the business is not suited to AI. Often the use case was reasonable but the supporting work, such as data access, ownership and review, was never done.

Another is to believe that more experiments will eventually produce a winner. Volume without a path to production simply multiplies the cost.

A third is to treat an unfinished pilot as a neutral state. An open experiment still consumes licences, attention and, in some cases, access to company data, as described in [why AI adoption creates a new access control problem](/patterns/why-ai-adoption-creates-a-new-access-control-problem/).

## Possibility

The possibility is that experiments are treated as small, time-limited investments with a defined way forward. Each begins with a business measure, a named owner and a plan for the data it will use. At the end of a fixed period, a decision is made: take it into daily use with a running budget, change it, or stop it and record what was learned. Stopping is respected as a legitimate result.

In that business, a successful pilot becomes part of someone's job, and an unsuccessful one leaves behind a short note that stops the same mistake being made twice.

## Intervention

The first step is to list every AI trial currently running or paused, with the date it started, the people involved, the monthly cost and the measure it was meant to improve. That list alone usually clears several items, because the sponsor has forgotten about them or the measure was never defined.

For each experiment that stays, the business writes down what has to be true for it to go live: where the live data will come from, who reviews the output, what it costs to run and who is responsible. Microsoft's [AI strategy guidance in its Cloud Adoption Framework](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/strategy) describes tying AI adoption to business outcomes and planning for operating it, which is a useful checklist even for a small organisation. Mellorca's work in this area is about helping decide which candidates deserve production effort, a theme also covered in [automation candidates chosen by novelty instead of business value](/discovery/automation-candidates-are-chosen-by-novelty-instead-of-business-value/).

## Practical next actions

1. List every AI trial started in the last twelve months, with its start date, owner, monthly cost and the business measure it was meant to change.
2. Close any trial that has no owner or no measure, and write two lines on why, so the lesson is kept.
3. For each remaining trial, write down where the live data will come from and who will review the output before anyone relies on it.
4. Estimate the monthly running cost in production, including licences, usage fees and support time, and compare it with the value of the time saved.
5. Set a fixed end date for each pilot, 60 or 90 days out, at which the decision is go, change or stop, and put that date in the diary of the owner.

## Diagnostic questions

- Which of our AI experiments is used by someone every working day?
- What was each one meant to improve, and by how much?
- Who would be responsible if the output were wrong and a customer acted on it?
- What did the last stopped pilot teach us, and where is that written down?

## Bottom line

An AI experiment that never reaches production still has a price, paid in salaries, subscriptions, attention and trust. The way to reduce it is not to run fewer ideas but to give each one an owner, a measure, a cost estimate and an end date. A business that can say "we stopped this one and here is why" is learning faster than one that has ten pilots that nobody mentions.
