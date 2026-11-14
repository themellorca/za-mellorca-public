---
hub: insights
record_id: INS-311
slug: why-teams-build-their-own-trackers
title: Why Teams Build Their Own Trackers
description: Side trackers are rarely a discipline problem. They show where the official systems fail the people doing the work.
lead: Side trackers are rarely a discipline problem. They show where the official systems fail the people doing the work.
category: Systems and Workflows
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Systems and Workflows
sources:
  - https://eusprig.org/research-info/horror-stories/ | https://eusprig.org/research-info/horror-stories/
  - https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intro | https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intro
  - https://popia.co.za/section-10-minimality/ | https://popia.co.za/section-10-minimality/
summary: Side trackers are rarely a discipline problem. They show where the official systems fail the people doing the work.
layout: plain
---
Ask any operations manager to show you how work is really tracked and you will be taken, sooner or later, to a spreadsheet. It might be called "Orders v3 FINAL" or "Do not delete". It has colour coding that only two people understand, a column for notes and a tab for every month. The official system exists, and everyone has access, but this is the file people open first.

It is tempting to treat such trackers as a discipline problem. In most businesses they are the opposite: a sign that people are doing their jobs and the official tools are not helping. This article looks at why teams build their own trackers, what they tell you, and how to respond sensibly.

## The official system answers a different question

Business systems are usually bought to serve the organisation's needs: accounting that satisfies auditors, a CRM that satisfies sales reporting, a ticketing tool that satisfies service-level targets. Those needs are legitimate. They are not the same as the practical question a team asks each morning, which is what must I do today, for whom, and what is waiting on someone else.

When the system does not show that view, people create one. A scheduler wants all jobs for next week on one screen, but the system lists them by customer. A buyer needs to see what has been ordered but not delivered, but the report is monthly. A team lead needs to know who is overloaded, but the tool only records completed items. The tracker is a workaround for a missing view.

## The usual triggers

Trackers tend to appear for a handful of recurring reasons.

- **A field is missing.** The system has nowhere to record a delivery window, a special condition or a follow-up date, so the team keeps it in a column of their own.
- **The workflow does not match reality.** The system forces a sequence of steps that the team does not follow, so they track their real sequence elsewhere.
- **It is too slow to change.** Asking for a new field means a request, a queue and a wait of weeks. A spreadsheet takes a minute.
- **Visibility is limited.** People are not given access to a part of the system they need, or the access they have makes the screens awkward.
- **Two systems do not talk to each other.** Someone merges the information by hand in a sheet because no integration exists. Our discussion of [how spreadsheet extracts quietly become the reporting system](/discovery/how-spreadsheet-extracts-quietly-become-the-reporting-system/) shows how this happens.

Our article on [why CRM adoption problems are often workflow problems](/insights/why-crm-adoption-problems-are-often-workflow-problems/) makes a related argument: when people avoid a system, the cause is usually that the system fits their work poorly, not that they resist change.

## Why a tracker is a rational choice

From the individual's point of view, a personal tracker is fast, flexible and under their control. They can add a column when they need it, sort it any way they like, and share it with a colleague in seconds. No approval is required. The cost of keeping it up to date is small, and the benefit, being able to do the job without chasing, is immediate.

The costs fall elsewhere and arrive later. The data is not visible to anyone else. It cannot be checked against the main system. When the person who built it goes on leave or leaves the company, the knowledge goes with them. Errors creep in unnoticed. Research collected by the European Spreadsheet Risks Interest Group, including its [collection of spreadsheet incidents](https://eusprig.org/research-info/horror-stories/), documents how spreadsheet errors have led to costly mistakes in organisations of every kind, which is a reminder that a convenient tool and a controlled one are not the same thing.

## Read the tracker as a requirements document

Instead of banning trackers, treat each one as free research. The columns show which facts the team needs and the official system does not give them. The colour codes show which statuses matter. The tabs show how work is grouped in practice. The formulas show what calculations people trust themselves to do.

Sit with the owner for thirty minutes and ask these questions:

- What do you look at first each morning, and why?
- Which column could you not work without?
- Where do the numbers come from, and how do they get in?
- Who else depends on this file, and what happens when you are away?
- What would the main system need to do for you to stop using this?

The answers become a short list of changes. We describe a methodical way to turn them into improvements in [turning side spreadsheets into CRM improvements](/insights/turning-side-spreadsheets-into-crm-improvements/). Often the fix is modest: one new field, one saved view or one scheduled export.

## Decide which trackers are fine

Not every tracker is a problem. A personal to-do list for one person's own tasks is harmless. A short-lived tracker for a project that ends in a month is reasonable. The risk grows when a tracker holds the only copy of important information, when several people depend on it, when it feeds figures reported to management, or when it contains personal information about customers or staff. Our guide on [when a spreadsheet is a useful tool and when it becomes infrastructure](/insights/when-a-spreadsheet-is-a-useful-tool-and-when-it-becomes-infrastructure/) gives a way to tell the difference.

Personal information deserves particular care. A spreadsheet of customer details saved on a laptop or emailed around is outside the controls your main systems provide, such as access rights and logging. Under POPIA you remain responsible for that information wherever it lives, and the [minimality principle](https://popia.co.za/section-10-minimality/) asks that it be relevant and not excessive for its purpose, so know which trackers hold it and why.

## Give people a better alternative, not just a rule

If the official tool is the bottleneck, the response must include making it easier to change. Lightweight platforms can help here. Microsoft describes [Dataverse](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intro) as a store that lets organisations hold data in tables with defined columns, relationships and security, which is the kind of structure that a spreadsheet lacks. Moving a heavily used tracker onto a governed platform keeps the flexibility people value and adds access control, history and the ability to connect to other systems. Whether you choose that platform or another, make sure someone owns the result and that changes can be requested and delivered in days, not months.

Set a simple rule for the future: a new tracker is not forbidden, but anything used by more than one person, or holding customer information, is registered with its owner and purpose. Registration costs nothing, and it gives you a list of unmet needs to work from.

## Practical next actions

1. Ask each team which spreadsheets they open every day, and list them with the owner, the purpose and the number of people who rely on each.
2. Interview the owners of the three most-used trackers and write down the columns, statuses and calculations they depend on.
3. Mark any tracker that holds customer or staff personal information, or feeds a management report, as higher risk and review where its file is stored and who can open it.
4. Pick one change to the official system that would let a high-risk tracker be retired, and schedule it with a named owner and a date.
5. Agree a short registration step for any new shared tracker, and review the register every quarter.

Teams build their own trackers because they have work to do and the official tools are not meeting them where they are. Listen to what the trackers say, fix the underlying gaps and the files will matter less.
