---
hub: insights
record_id: INS-115
slug: how-to-design-ownership-into-a-process
title: How to Design Ownership Into a Process
description: Ownership works better when it is built into the process like the steps and forms. Separate process, case, step and information ownership, and make each one visible.
lead: Ownership works better when it is built into the process like the steps and forms. Separate process, case, step and information ownership, and make each one visible.
category: Process Design
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Process Design
sources:
  - https://www.hse.gov.uk/stress/standards/role.htm | https://www.hse.gov.uk/stress/standards/role.htm
  - https://learn.microsoft.com/en-us/purview/data-governance-overview | https://learn.microsoft.com/en-us/purview/data-governance-overview
  - https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-use-approval-workflows | https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-use-approval-workflows
summary: Ownership works better when it is built into the process like the steps and forms. Separate process, case, step and information ownership, and make each one visible.
layout: plain
---
A medical equipment supplier in Centurion loses a hospital tender because the compliance documents were submitted a day late. In the post-mortem, everyone has a reasonable explanation. Sales assumed the tender office was gathering documents. The tender office assumed sales would request the latest certificates from the quality team. Quality had the certificates ready but was never asked. The process document describes every step correctly. What it never says is who owns the outcome, who owns each step, and who owns the information that moves between them.

Ownership is usually treated as a people matter, settled by job titles and good intentions. It works far better when it is designed into the process itself, in the same way as the steps, the forms and the systems. A process with designed ownership answers "whose job is this?" before anyone has to ask.

## Four kinds of ownership a process needs

When people say "nobody owns this", they may mean one of several different things. A well-designed process separates them.

- **Process owner.** The person accountable for the process as a whole: its design, its performance and its improvement. There is one per process, usually a manager, and they decide when the process changes.
- **Case owner.** For each individual instance, such as one tender, one order or one onboarding, the person accountable for getting it from start to finish. The case owner chases, escalates and answers the customer.
- **Step owner.** For each step, the role responsible for doing that piece of work to the required standard and within the agreed time.
- **Information owner.** For each important piece of data or document the process uses, the person responsible for its accuracy and availability, such as the quality manager for compliance certificates.

In the tender example, step owners existed, but nobody was the case owner for the tender, and the information owner for certificates was never connected to the step that needed them.

## Why roles must be clear to the people in them

The UK Health and Safety Executive's management standard on [role](https://www.hse.gov.uk/stress/standards/role.htm) asks whether people understand their role and responsibilities and whether the organisation avoids giving them conflicting ones. It recommends that organisations make their requirements clear and provide ways for staff to raise uncertainty or conflict about their roles. The standard is written about workplace wellbeing, but it describes exactly the conditions under which ownership works: people know what they own, the demands on them do not conflict, and there is a route to resolve confusion.

## Step one: name the process owner

Start at the top. For each important process, such as quote to cash, tender submission, customer onboarding or supplier payment, name one person as process owner. Write it down where the process is documented. That person agrees the design, reviews performance regularly and has the authority to change the process. Without this, improvements stall because nobody can decide.

## Step two: assign a case owner at the moment work starts

The most common ownership gap is the individual case. Make the case owner a required field when work is created, not something sorted out later. In a CRM, this is usually the record owner. In a job or ticket system, it is the assignee. The rule should be simple: every open case has exactly one named owner, and that owner can be found in seconds. Our article on [making ownership clear at every stage](/insights/how-to-make-ownership-clear-at-every-stage/) covers how to keep stage-by-stage ownership visible as work moves.

## Step three: attach step owners to roles, not people

Steps should be owned by roles, such as "quality officer" or "accounts payable clerk", with the current person mapped to each role. This makes cover and handover possible. It also makes it easy to see when one person holds too many roles, which is a common source of conflicting demands in small businesses. Our guide on [designing workflows that can survive staff changes](/insights/how-to-design-workflows-that-can-survive-staff-changes/) explains why this matters.

## Step four: connect information owners to the steps that need their data

For each step, list the information it depends on and who owns that information. Then make the request explicit. In the tender process, a step called "request current certificates from quality" with a due date would have closed the gap. Microsoft's [data governance overview](https://learn.microsoft.com/en-us/purview/data-governance-overview) describes data owners as responsible for the quality and access of their data, and data stewards as responsible for consistency and definitions. A small business does not need those titles, but it does need someone accountable for each critical document and dataset.

## Step five: plan for absence and handover

Ownership fails most often when the owner is away. For every owner, name a substitute, and make it possible to reassign cases in bulk. Business systems often support this directly. Microsoft's Business Central documentation on [approval workflows](https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-use-approval-workflows), for example, allows approval requests to be delegated to a substitute so that records do not pile up, and can notify approvers and requesters about overdue requests. Whatever your system, design the handover before you need it.

## Step six: make ownership visible in daily work

Ownership written in a process document but invisible on screen does little. Show the case owner on every record, show step owners on task lists, and give managers a view of open cases by owner and age. When a case sits too long, it should be obvious whose desk it is on. Our article on [why work gets lost between teams](/insights/why-work-gets-lost-between-teams/) describes what happens when this visibility is missing.

## A quick ownership audit

Pick one process that has recently gone wrong. For it, try to answer:

- Who is the process owner, and do they know it?
- For the case that failed, who was the case owner?
- For each step, which role owned it, and who was in that role at the time?
- Which information did the process need, and who owned it?
- Who was covering for anyone who was away?

Any question that takes more than a minute to answer, or produces two different answers, marks a place where ownership needs to be designed in.

## Practical next actions

1. Name one process owner for each of your five most important processes and record it with the process documentation.
2. Make the case owner a required field when each order, job, tender or onboarding record is created.
3. Assign each process step to a role, map current people to roles, and check for people holding conflicting roles.
4. List the information each step depends on, name its owner, and add an explicit request step with a due date where needed.
5. Name a substitute for every owner and add a view of open cases by owner and age for managers.
