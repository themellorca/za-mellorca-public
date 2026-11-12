---
hub: insights
record_id: INS-453
slug: which-business-processes-break-first-when-a-company-grows
title: Which Processes Usually Break First During Growth
description: Growth rarely strains everything at once. Six kinds of process tend to give way first, with the early warning sign and a quick test for each.
lead: Growth rarely strains everything at once. Six kinds of process tend to give way first, with the early warning sign and a quick test for each.
category: Growth and Scaling
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Growth and Scaling
sources:
  - Architecture Strategies for Enabling and Implementing Automation in a Workload - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/enable-automation
  - Queue-Based Load Leveling Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/queue-based-load-leveling
  - Section 16 Quality of information - POPIA | https://popia.co.za/section-16-quality-of-information/
related:
  - Why the Official Process Is Often Not the Real Process | /insights/why-the-official-process-is-often-not-the-real-process/
  - Why Processes Break Between Departments | /insights/why-processes-break-between-departments-and-how-to-close-the-gaps/
  - How to Choose a Business Process for an AI Agent | /insights/how-to-choose-a-business-process-for-an-ai-agent/
summary: Growth rarely strains everything at once. Six kinds of process tend to give way first, with the early warning sign and a quick test for each.
layout: plain
---
When a business doubles its order volume, nothing breaks evenly. The warehouse copes, the website copes, and the accounts team copes for a while. Then one afternoon a customer receives three copies of the same invoice, a supplier is paid late for the second month running, and a salesperson promises stock that has not existed since Tuesday. The system did not fail all at once. One weak link carried more weight than it was built for, and the pressure travelled along the chain until it found the next one.

Anyone who has been through a growth phase will recognise the pattern. What is less obvious is that the weak links are fairly predictable. Certain kinds of process break first, for reasons that have little to do with the industry. Knowing which they are lets a business look at them before the strain arrives rather than after it.

## What "breaking" actually means

A process rarely collapses outright. It degrades in ways that are easy to dismiss at the time: tasks take longer, more things need chasing, errors creep in, and a few experienced people start working late to hold things together. The real signal is that the work depends on effort, not on the design. A process that runs on goodwill and memory has a ceiling set by how much goodwill and memory the team has left.

The broader reasons are covered in [why growth breaks systems that worked when the business was smaller](/insights/why-growth-breaks-systems-that-worked-when-the-business-was-smaller/). This article takes a narrower, practical view. It ranks the kinds of process that tend to give way first, describes what each looks like shortly before it does, and suggests a cheap test you can apply today.

## 1. Anything that depends on one person's knowledge

The first process to break is usually the one only one person fully understands: how special customers are priced, how a supplier's odd invoice format is captured, or which spreadsheet must be updated before the month-end run. At a small scale, that person is a strength. At a larger scale, they are a queue of one. Every new customer or supplier adds to their load, and any absence stops the process.

**Early warning:** colleagues say "ask Thandi" about the same task several times a week. **Quick test:** ask someone else to run the process from the written instructions alone. If they cannot, the process lives in a head, not in the business. The wider problem is explored in [how to know whether your business depends too much on one person](/insights/how-to-know-whether-your-business-depends-too-much-on-one-person/).

## 2. Manual re-entry between systems

Copying information from one system into another costs a fixed amount of time per item. When volume doubles, the time doubles, and so does the number of keying mistakes. Re-entry is also the process that most often feels too small to fix, which is why it survives until it is huge. A step that took ten minutes a day now takes two hours, and the mismatches it creates are discovered later by someone in finance or customer service.

**Early warning:** reconciliation arguments, and corrections that begin with "the figure in the other system says…". **Quick test:** count how many times a typical order, claim or customer record is typed in. Each repeat is a place where growth multiplies work and error. See [why copying data between systems is more expensive than it looks](/insights/why-copying-data-between-systems-is-more-expensive-than-it-looks/).

## 3. Approvals that rely on a few busy people

Approvals work when requests are few. As volume grows, requests pile up in the inboxes of the people who must sign off, and the waiting time becomes the largest part of the process. Staff learn to chase, or to approve things informally in chat, which defeats the control.

**Early warning:** people ask "has it been approved yet?" more often than they ask anything else. **Quick test:** measure the time requests spend waiting against the time spent being worked on. If the waiting dominates, the approval design is the limit, not the effort of the team. This is dealt with in [why approval processes become bottlenecks](/insights/why-approval-processes-become-bottlenecks/).

## 4. Shared inboxes and informal request channels

A shared mailbox is a fine way to receive a handful of requests a day. At volume, nobody can tell which messages have been answered, who owns them, or how long they have waited. Duplicate replies, dropped requests and unhappy customers follow.

**Early warning:** staff forward messages to each other with "can you take this?" and customers send the same query twice. **Quick test:** pick a request from last week and find out who handled it, when, and what happened. If that takes more than a minute, you are managing by search. More on this in [why shared inboxes become operational bottlenecks](/insights/why-shared-inboxes-become-operational-bottlenecks/).

## 5. Onboarding of customers, suppliers and staff

Onboarding is a chain of handoffs between sales, finance, operations and sometimes IT. Each handoff is a place where information can go missing. With ten new customers a month, the chain is held together by familiarity. With a hundred, it fails in the gaps, and the new customer experiences the failure first. The point is developed in [why customer onboarding breaks as the business grows](/insights/why-customer-onboarding-breaks-as-the-business-grows/).

## 6. Reporting built by hand

Month-end reports assembled from several exports are another early casualty. They take a day at small scale and a week at larger scale, they are only as accurate as the person who assembled them, and they arrive after the decisions they should have informed. Meanwhile, the data behind them is getting messier. The link between growth and declining data accuracy is the subject of [why business data quality declines with growth](/insights/why-business-data-quality-declines-with-growth/).

The legal side deserves a mention for South African businesses. Section 16 of the Protection of Personal Information Act requires a responsible party to take reasonably practicable steps to ensure that personal information is complete, accurate, not misleading and updated where necessary. A customer database that doubled in size through hasty capture is exactly where that obligation becomes harder to meet.

## Why these break first

These six share a structure. Each has a cost that rises in proportion to volume (re-entry, reporting), or a capacity that does not rise with volume at all (one person, a few approvers), or a shared space with no structure (the inbox).

Microsoft's architecture guidance on queue-based load levelling offers a useful picture here, even though it was written for software. A queue placed between a task and the service it calls acts as a buffer that smooths intermittent heavy loads, and the guidance is explicit about a risk: if work arrives faster than it is processed on average, the queue keeps growing and delays increase. A business has the same dynamic. Requests waiting for approval or for one person's attention are queues, and a queue that grows every week is a process that has already broken, even if everyone is still coping.

## Deciding what to fix first

You cannot redesign everything at once, and you should not try. Microsoft's guidance on automation suggests aiming for the easy wins first: tasks that are highly procedural, well defined, low in complexity and prone to human error. It also advises against automating tasks that need complex handling of variability or rarely occur. Applied to a growing business, this gives a sensible order of attack.

1. List the processes that grew in volume over the past year.
2. For each, note how the cost per item changes with volume, and whether it depends on one person or a few.
3. Pick the one where a repetitive, well-understood task consumes the most hours or causes the most errors.
4. Fix the design before adding technology. Automating a muddled process only produces muddled results faster, as discussed in [why automating a broken process makes the problem worse](/insights/why-automating-a-broken-process-makes-the-problem-worse/).

If you are unsure where the real constraint lies, [how to find the real bottleneck in a digital operation](/insights/how-to-find-the-real-bottleneck-in-a-digital-operation/) describes how to separate the process that is slow from the one that merely looks slow.

## An illustrative example

Take a hypothetical Durban distributor whose sales rose by about half in a year. Its staff blamed the accounting software for the delays. A short review showed otherwise. Customer pricing lived in one person's spreadsheet, orders were retyped from the web shop into the accounting package, and credit-limit approvals went to the financial manager by email. The three weakest links were a person, a re-entry step and an approval, in that order. The fix was not a new platform. It was to write the pricing rules down and move them into the order system, to connect the shop to the accounts so orders flowed through without retyping, and to pre-approve routine credit limits so that only exceptions needed a decision. Volume carried on rising, and the team was no longer working late to keep up.

## A short habit for growing businesses

Whenever volume rises noticeably, ask three questions of each key process. What happens to the cost of one item if volume doubles? Who or what is the single point everything passes through? And how would we know, within a day, that the process was falling behind? A business that can answer those has already done most of the work of staying ahead of growth.
