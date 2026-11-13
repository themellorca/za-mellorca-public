---
hub: insights
record_id: INS-043
slug: why-switching-software-is-not-always-the-answer
title: Why switching software is not always the answer
description: When a system frustrates everyone, replacing it feels like progress, yet many problems follow you to the next platform. How to tell, and what to try first.
lead: When a system frustrates everyone, replacing it feels like progress. But many of the problems blamed on software travel with the business to the next platform. How to tell whether the software is really the problem, what switching actually costs, and what to try first.
category: Systems & Strategy
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Systems & Strategy
sources:
  - Open Standards principles | https://www.gov.uk/government/publications/open-standards-principles/open-standards-principles
  - Choosing technology: an introduction | https://www.gov.uk/service-manual/technology/choosing-technology-an-introduction
  - Optimize your implementation with a fit-to-standard and fit-gap analysis - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/process-focused-solution-fit-to-standard-fit-gap-analysis
related:
  - How to decide whether to replace or reconfigure a system | /insights/how-to-decide-whether-to-replace-or-reconfigure-a-system/
  - When two tools are doing the job of one | /insights/when-two-tools-are-doing-the-job-of-one/
  - How to decide what technology problem to solve first | /insights/how-to-decide-what-technology-problem-to-solve-first/
summary: When a system frustrates everyone, replacing it feels like progress. But many of the problems blamed on software travel with the business to the next platform. How to tell whether the software is really the problem, what switching actually costs, and what to try first.
layout: plain
---
Every business has a system that people love to blame. The job management platform is clunky. The accounting package does not do what finance needs. The CRM is full of rubbish. Eventually someone says what everyone has been thinking: we should get rid of it and move to something better.

Sometimes that is exactly right. Software does age, vendors do stop investing, and businesses do outgrow tools. But switching is the most expensive response available, and it is often chosen before anyone has established what is actually wrong. When the real problem is a process, a data habit or a setup decision, it moves with the business to the new platform. Twelve months and a large invoice later, the same complaints return with a different logo on the screen.

## The problem often lives somewhere else

Before deciding that the software is at fault, it helps to sort complaints into four groups. Each points to a different kind of fix.

| Where the problem lives | Typical complaints | Will switching fix it? |
| --- | --- | --- |
| The process | "Nobody follows the steps", "Jobs get stuck waiting for approval", "Everyone does it differently" | Rarely. The process moves with you. |
| The data | "The customer list is full of duplicates", "The numbers never match" | No. Bad data is usually migrated into the new system. |
| The setup | "It makes us fill in twenty fields", "We cannot see what we need", "The reports are useless" | Often not. These are configuration choices that can usually be changed. |
| The software | "It cannot do this at all", "The vendor no longer supports it", "It cannot connect to anything" | Possibly. This is where switching makes sense. |

In most businesses, the first three groups account for a large share of the frustration. CRMs are a common example: [why your CRM is not the problem you think it is](/insights/why-your-crm-is-not-the-problem-you-think-it-is/) and [why CRM adoption problems are often workflow problems](/insights/why-crm-adoption-problems-are-often-workflow-problems/) both show how workflow and ownership issues get attributed to the platform.

## Problems that survive a switch

Some problems are almost guaranteed to follow a business to its next system.

### An undefined process

If nobody has agreed how a quote becomes an order, a new system will not decide for you. Implementation will force the question, but usually in a rushed workshop where the answer is shaped by the new software's defaults rather than by the business.

### Recreating the old system in the new one

The opposite risk is just as common. Teams ask the new platform to behave exactly like the old one. Microsoft's implementation guidance for Dynamics 365 on [fit-to-standard and fit-gap analysis](https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/process-focused-solution-fit-to-standard-fit-gap-analysis) warns that recreating the processes used in legacy systems can lead to costly and unnecessary customisations that require more design, coding, testing, training and documentation. The business pays for a new platform and then spends money making it resemble the one it left.

### Poor data habits

Duplicate customers, inconsistent product codes and half-completed records are created by how people capture information. A migration may clean some of it once, but if the capture habits stay the same, the new system degrades at the same rate as the old one.

### Missing ownership

A system that nobody owns drifts. Fields are added without thought, users are not trained, and reports multiply. Switching resets the clock but does not change the cause. [Why business systems need ongoing stewardship](/insights/why-business-systems-need-ongoing-stewardship/) sets out what that ownership involves.

## What switching actually costs

The subscription price of the new system is the smallest part of a switch. The rest includes data extraction and cleaning, migration, reconfiguration, rebuilding integrations and reports, testing, training, a period of running both systems, and the productivity dip while people relearn their work.

The UK government's [Open Standards principles](https://www.gov.uk/government/publications/open-standards-principles/open-standards-principles) make a useful accounting point: exit and migration costs should be estimated at the start of any new technology project, and associated with the incumbent system rather than the new one. In other words, the cost of leaving is part of the cost of what you have, and it should be known before any switch is approved. Some of that cost only becomes visible late, as described in [data export limits discovered only when leaving a vendor](/discovery/data-export-limits-discovered-only-when-leaving-a-vendor/).

The same principle applies forwards. The GOV.UK Service Manual's guidance on [choosing technology](https://www.gov.uk/service-manual/technology/choosing-technology-an-introduction) advises minimising total cost of ownership, including reducing the chance of being locked into long contracts. A new platform chosen in frustration can create a harder exit later.

## What to try before switching

Before committing to a replacement, work through these steps. Each is far cheaper than a migration, and each either fixes the problem or makes the case for switching much stronger.

1. **List the specific complaints.** Collect them from the people who use the system daily. Vague dissatisfaction is not a requirement.
2. **Sort each complaint into process, data, setup or software.** Be honest. "It is slow to find a customer" may be a search configuration, not a platform limitation.
3. **Check what the current system can already do.** Many businesses use a fraction of what they pay for. A conversation with the vendor or a specialist partner often reveals settings, modules or reports nobody knew about.
4. **Fix the process and the data first.** Agree the workflow, remove unnecessary steps and clean the most important records. If the frustration drops, the platform was not the problem.
5. **Test the remaining gaps.** What is left after steps one to four is the genuine software case. If it is small, live with it or close it with an integration. If it is large, you now know precisely what the new system must do.

## When switching is the right answer

Switching is justified when the problems that remain are genuinely about the software. Typical signs include:

- the vendor has announced end of support, or development has visibly stopped;
- the system cannot meet a legal, security or reporting requirement, and no reasonable configuration will change that;
- the business model has changed so much that the core data structure no longer fits, for example moving from once-off projects to recurring subscriptions;
- the system cannot exchange data with the rest of the business, and the manual work this creates is large and growing;
- the cost of keeping it running, including workarounds, clearly exceeds the full cost of moving.

Even then, the diagnostic work is not wasted. A business that has cleaned its data and agreed its process before switching will migrate faster and get more from the new platform. The guide on [how to buy business software without letting the demo make the decision](/insights/how-to-buy-business-software-without-letting-the-demo-make-the-decision/) covers the selection that follows.

## An illustrative example

Consider an illustrative Gauteng engineering services firm with 60 staff. Project managers complained that its job costing system was unusable and lobbied for a replacement. When the operations director listed the complaints, most fell into two groups: timesheets were captured days late, so job costs were always out of date, and the project dashboard had been set up years earlier around codes the firm no longer used.

Neither was a software limitation. The firm introduced a daily timesheet cut-off and had its implementation partner rebuild the dashboard around current job types. One genuine gap remained: the system could not produce a client-ready progress report. That was closed with a simple report template. The replacement project was dropped, and the firm kept a clear note of the conditions under which it would revisit the question.

## Switch for reasons, not relief

The urge to switch is usually an urge for relief from frustration. Relief is a legitimate goal, but it comes from fixing the cause. Sometimes the cause is the software. More often it is the way the software is used, set up or owned. Finding out which costs a few weeks of honest diagnosis, and that is a small price compared with discovering the answer after the migration.
