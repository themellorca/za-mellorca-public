---
hub: insights
record_id: INS-030
slug: the-real-cost-of-paying-for-software-nobody-uses-properly
title: The real cost of paying for software nobody uses properly
description: Idle licences are the visible cost. Partly used software costs more through workarounds, double-paid features and missing information. How to measure it.
lead: Idle licences are the visible part of the bill. Software that is used only partly costs far more: the workarounds that run beside it, the features paid for twice, the information it never captures and the decisions made without it. How to measure that cost and what to do about it.
category: Operations
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Operations
sources:
  - What Is Software Asset Management? - IBM | https://www.ibm.com/think/topics/software-asset-management
  - Microsoft 365 Admin Center Usage Reports Overview - Microsoft 365 admin | https://learn.microsoft.com/en-us/microsoft-365/admin/activity-reports/activity-reports
  - What Is Shadow IT? - IBM | https://www.ibm.com/think/topics/shadow-it
related:
  - Why cheap SaaS can become expensive operations | /insights/why-cheap-saas-can-become-expensive-operations/
  - Why repeated workarounds are a warning sign | /insights/why-repeated-workarounds-are-a-warning-sign/
  - How to map a business workflow without making it complicated | /insights/how-to-map-a-business-workflow-without-making-it-complicated/
summary: Idle licences are the visible part of the bill. Software that is used only partly costs far more: the workarounds that run beside it, the features paid for twice, the information it never captures and the decisions made without it. How to measure that cost and what to do about it.
layout: plain
---
When businesses look for wasted software spend, they usually look for licences nobody logs into. Those are worth finding, and the waste is real, as described in [the financial waste of unused software licences](/impact/unused-software-licences-financial-waste/). But idle licences are the easy case. They show up in an admin report and can be cancelled at renewal.

The harder and more expensive case is software that people do use, just not properly. The CRM that holds contacts but not the pipeline. The project tool where tasks are created but never closed. The accounting package that can send automated statements, while someone still exports balances to a spreadsheet and emails customers one by one. Every licence in these systems is active. The cost is hidden in what happens around them.

## What "not used properly" actually looks like

Partial adoption takes a few recognisable forms:

- **Logged in, but not working there.** Staff open the system to look something up, but the work itself happens in email, chat or spreadsheets.
- **Some teams in, some out.** Sales uses the system; operations and finance keep their own records, so the picture is never complete.
- **Core features only.** The business pays for a tier that includes workflow, reporting or automation, but uses it as a data store.
- **Parallel tools.** A team adopts its own app because the official one is awkward. IBM describes this as [shadow IT](https://www.ibm.com/think/topics/shadow-it): tools adopted without the IT function's knowledge, often because they are quicker than the approved route.

In each case, the business is paying for a capability and then paying again, in time, to do the same job another way.

## The five costs behind a half-used system

### 1. The workaround labour

Every task that the software could do but people do by hand has a labour cost. Exporting, reformatting, re-keying, chasing and checking are not free because the software is already paid for. They are the largest cost in most cases, and the easiest to miss, because they are spread across many people in small amounts. A method for putting a number on them is set out in [how to calculate the real cost of a repetitive task](/insights/how-to-calculate-the-real-cost-of-a-repetitive-task/).

### 2. Paying twice for the same capability

When the official system is not used for a job, something else usually is. That might be a second subscription, a free tier that will become paid, or a spreadsheet maintained at considerable effort. IBM's overview of [software asset management](https://www.ibm.com/think/topics/software-asset-management) notes that one of its purposes is to find unused or under-used licences and redundant tools. Under-use and duplication are usually two sides of the same problem.

### 3. Information that never accumulates

A system that is only partly used never builds a reliable history. Customer conversations, job notes, approvals and exceptions stay in people's inboxes. When someone leaves, that knowledge leaves with them. When management asks a question, nobody can answer it from the system, so the system loses further credibility.

### 4. Decisions made on partial data

Reports from a half-used system are worse than no reports, because they look authoritative. A pipeline report that excludes half the deals, or a job-costing report that excludes unlogged hours, leads to real decisions about pricing, hiring and cash.

### 5. The cost of the next purchase

Partial adoption often ends with the conclusion that the software is the problem, and a replacement is bought. If the reasons for poor adoption were process, ownership or configuration, the new system follows the same path, and the business pays implementation costs a second time. That pattern is examined in [why technology implementations fail after go-live](/insights/why-technology-implementations-fail-after-go-live/).

## How to measure it

The first step is to find out how the system is really used. Most platforms provide some evidence. Microsoft's documentation for the [Microsoft 365 admin centre usage reports](https://learn.microsoft.com/en-us/microsoft-365/admin/activity-reports/activity-reports), for example, explains that they show who uses a service fully and who barely uses it, over periods of 7, 30, 90 and 180 days. Many CRM, accounting and project tools offer similar activity or audit logs.

Login data is only a starting point, though, because partial adoption is about what people do, not whether they sign in. A practical measurement has four parts:

1. **List what the system is meant to do.** Take the three to five jobs that justified buying it, such as managing the pipeline, issuing statements or tracking jobs.
2. **Check each job against evidence.** For a recent sample of real cases, does the system hold the record, the status and the outcome? Or did the work happen elsewhere?
3. **Find the parallel tools.** Ask each team where they actually keep track of the work. Spreadsheets, shared mailboxes and messaging groups are the usual answers.
4. **Cost the gap.** Estimate the weekly hours spent on workarounds and the spend on duplicate tools, and set that beside the subscription.

The comparison is often uncomfortable. A subscription of a few thousand rand a month can sit beside workaround labour several times larger.

## An illustrative example

Consider a hypothetical Johannesburg engineering services firm with twenty-five staff. It pays for a job-management platform that includes scheduling, timesheets and invoicing. Technicians use the mobile app to view job addresses. Timesheets are submitted on paper. The office manager types them into a spreadsheet, which the bookkeeper uses to prepare invoices in the accounting package.

Every licence is active, so no idle-licence review would flag anything. Measuring against the platform's intended jobs tells a different story: scheduling is used, timesheets and invoicing are not. The office manager spends roughly a day a week on transcription, invoices go out on average a week after job completion, and unbilled hours are discovered only at month-end.

The fix was not a new platform. The firm configured mobile timesheets to match how technicians actually record time, connected job completion to invoice drafting and stopped accepting paper sheets after a short transition. This scenario is illustrative, not a client case study.

## Why partial adoption happens

It is tempting to blame users. In practice, partial adoption usually has structural causes:

- the system was configured around the vendor's default process, not the business's real one;
- using it properly takes more effort than the workaround, at least for the person entering the data;
- nobody owns the system after go-live, so problems are never fixed;
- it is not connected to the systems around it, so information has to be carried in and out by hand;
- management keeps accepting the spreadsheet, so the spreadsheet remains the real system.

Each of these is fixable without replacing the software, which is why replacement should be the last option considered rather than the first.

## What to do about it

For each significant application, make one of four decisions:

| Decision | When it fits |
| --- | --- |
| Adopt properly | The system can do the job and the barriers are configuration, training or ownership |
| Reduce | Only some features or some users need it; move to a lower tier or fewer seats |
| Consolidate | Another system already used well can absorb the job |
| Remove | The job is not needed, or is better done elsewhere; see [how to decide which software to remove](/insights/how-to-decide-which-software-to-remove/) |

Whichever is chosen, retire the parallel tool at the same time. While the spreadsheet survives, it will keep winning.

## When to act

The signs are familiar: renewals approved without anyone checking use, reports that management no longer trusts, teams that keep their own lists, and a growing sense that the business has plenty of software but still runs on spreadsheets. The commercial value at stake is usually the workaround labour and duplicate spend, not the licence itself. Mellorca's [digital operations improvement](/services/digital-operations-improvement/) work starts by measuring that gap, so that the decision to adopt, reduce, consolidate or remove is based on evidence.
