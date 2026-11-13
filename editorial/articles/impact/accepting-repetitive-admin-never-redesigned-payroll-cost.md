---
hub: impact
record_id: CPS-050
slug: accepting-repetitive-admin-never-redesigned-payroll-cost
title: "That's just admin": The payroll cost of processes nobody ever redesigned
description: Treating repetitive admin as a fixed cost of business means processes are never questioned, and their payroll cost repeats and grows every year.
lead: Treating repetitive admin as a fixed cost of business means processes are never questioned, and their payroll cost repeats and grows every year.
category: Digital Operations
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: Repetitive administrative work is accepted as a normal cost of business, so the processes behind it are never redesigned
primary_cost_mechanism: Recurring and compounding payroll cost of avoidable steps, with error, delay and opportunity cost
sources:
  - What is business process reengineering - IBM | https://www.ibm.com/think/topics/business-process-reengineering
  - Overview of process mining in Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/process-mining-overview
  - Overview of task mining - Power Automate | https://learn.microsoft.com/en-us/power-automate/task-mining-overview
related:
  - Answering the same question again: The payroll cost of undocumented know-how | /impact/same-internal-questions-undocumented-knowledge-cost/
  - Recreating documents nobody can find: The cost of duplicated work | /impact/staff-recreating-lost-documents-duplicated-work-cost/
  - Re-keying orders after the sale: The labour and fulfilment cost of disconnected systems | /impact/orders-rekeyed-after-sale-fulfilment-risk-cost/
summary: Treating repetitive admin as a fixed cost of business means processes are never questioned, and their payroll cost repeats and grows every year.
layout: plain
---
## The tolerated pain: "that's just admin"

Every business has work that everyone agrees is tedious and nobody expects to change. The weekly stock sheet that is printed, filled in by hand and typed back into the system. The monthly commission calculation that takes a day in a spreadsheet. The job card that is copied into three places. The approval that needs a printed form even though everyone involved sits at a computer. Ask why it is done this way and the answer is usually the same: "That's just how it works here."

The phrase is telling. The work is no longer seen as a process that someone designed. It is treated as a fixed cost of being in business, like rent. And because it is treated as fixed, it is never redesigned. The steps were set up years ago, for a smaller business, different systems and people who may have left. They continue because nobody has been given the job of asking whether they should.

Mellorca has already covered [the payroll cost of work software could do automatically](/impact/repeatable-manual-work-payroll-cost-automation/) and [the cost of automating a broken process without simplifying it](/impact/automating-broken-process-without-simplifying-cost/). This article is about what comes before both: the habit of accepting repetitive admin as normal, and the cost that builds up year after year because the work was never questioned.

## Why businesses accept it

- **It has always been there.** Staff learn the process from the person before them. Its age makes it look necessary.
- **Each task is small.** Fifteen minutes here and an hour there do not feel worth a project.
- **The cost is buried in salaries.** Payroll is a fixed line in the accounts, so the hours spent on avoidable admin never appear as a separate cost.
- **Nobody owns the whole process.** Each person does their part well, so nobody sees the full chain of copying, checking and re-entering.
- **Change feels risky.** The current process works, more or less, and redesigning it means time and disruption now for a saving later.

We describe this thinking as a pattern in [when repetitive work is mistaken for necessary work](/patterns/when-repetitive-work-is-mistaken-for-necessary-work/).

## Operational symptoms

- Staff can explain *how* a task is done but not *why* particular steps exist.
- Information is written down, then typed in, then checked against the original.
- Reports are produced that nobody reads, or that are reworked by the person who receives them.
- Busy periods such as month-end need overtime for work that is entirely predictable.
- New hires are added to admin teams as sales grow, even though the work has not changed.
- Software has been upgraded, but the process around it is the same as before the upgrade.

## How the pain becomes money

The main cost is **labour**: payroll hours spent on steps that add nothing. But because the process is never redesigned, that cost does not stay flat. It compounds in three ways.

1. **It repeats every year.** An avoidable hour a week is not a one-off cost. It recurs for as long as the process exists, which may be ten years or more.
2. **It grows with volume.** If the work is done per order, per invoice or per employee, the cost rises with the business. Growth brings more admin, not more efficiency. We explore this in [scaling by adding headcount](/impact/scaling-by-adding-headcount/).
3. **It rises with salaries.** Annual increases raise the cost of every avoidable hour, even when the hours stay the same.

There are secondary costs too: errors from retyping, delays while work waits for the next manual step, and **opportunity cost**, because the people doing this work are often capable of more valuable tasks.

## An illustrative cost model

The figures below are *illustrative assumptions* for an unnamed South African distributor with 60 staff. They show the method, not a benchmark.

| Avoidable task | Assumption | Hours a year |
| --- | --- | --- |
| Stock count sheets retyped | 3 hours a week, 48 weeks | 144 |
| Commission calculated by hand | 8 hours a month | 96 |
| Job details copied into three places | 10 minutes per job, 2,400 jobs | 400 |
| Paper approval forms | 4 hours a week of handling and chasing, 48 weeks | 192 |
| **Total** |  | **832** |

At an assumed fully loaded cost of R300 per hour, 832 hours is R249,600 a year. Checking the arithmetic: 3 × 48 = 144; 8 × 12 = 96; 2,400 × 10 ÷ 60 = 400; 4 × 48 = 192; 144 + 96 + 400 + 192 = 832; 832 × R300 = R249,600.

Now apply the compounding. Suppose job volumes grow 10% a year and pay rises 6% a year, and only the job-copying task grows with volume. The first year costs R249,600; by the fifth year the annual figure has risen to about R385,000, and the five-year total is roughly R1.57 million for these four tasks. That is the real price of "that's just admin": not one year's hours, but every year's hours for as long as the process is left alone. Replace these assumptions with your own before drawing conclusions.

## Redesign before automation

The answer is not simply to automate. Automating a step that should not exist only makes waste faster. The first question is whether each step is needed at all.

IBM describes [business process reengineering](https://www.ibm.com/think/topics/business-process-reengineering) as more radical than incremental improvement: it challenges existing norms and redesigns processes around the outcome, starting from goals and a map of the current state. Most small businesses do not need a large reengineering programme. They need the same habit on a smaller scale: take one process, ask what it is for, and rebuild it around that purpose.

A simple test for each step:

- **Eliminate:** does anyone use the output? If not, stop doing it.
- **Simplify:** can the information be captured once, at the source, in a form the system can use?
- **Combine:** can two hand-offs become one?
- **Automate:** only then, automate what remains and is genuinely repetitive.

## Finding the work you have stopped seeing

Because accepted admin is invisible, it has to be found deliberately. Ask staff to log, for two weeks, every task they repeat at least weekly and how long it takes. Walk through one transaction from start to finish and count the times data is re-entered. Where systems record events, tools can help.

Microsoft's documentation describes [process mining](https://learn.microsoft.com/en-us/power-automate/process-mining-overview), which uses event data from systems of record to show how processes actually run and where the bottlenecks are, and [task mining](https://learn.microsoft.com/en-us/power-automate/task-mining-overview), which records desktop steps to show which activities take most time and which could be automated. For a smaller business, a whiteboard and an honest conversation will often reveal enough. Our guide on [how to find the manual work nobody is measuring](/insights/how-to-find-the-manual-work-nobody-is-measuring/) sets out practical methods.

## When it becomes commercially urgent

- Admin headcount is rising in step with sales.
- Overtime is routine at month-end or year-end.
- A key administrator is leaving and the process is undocumented.
- A system upgrade or replacement is planned. This is the cheapest moment to redesign, before the old steps are rebuilt in the new system.

## Practical next steps

1. List the ten most repeated admin tasks and estimate hours a year for each.
2. Pick the one with the highest hours and the fewest dependencies.
3. Map it step by step and apply the eliminate, simplify, combine, automate test.
4. Run the redesigned version for a month and measure hours and errors against the old one.
5. Give every recurring process a named owner and a review date, so that it is questioned again at least once a year.

## Bottom line

Repetitive admin is not a fixed cost of doing business. It is the cost of processes that were designed once and never revisited. Because that cost repeats every year, grows with volume and rises with salaries, leaving it alone is one of the most expensive decisions a business can make without noticing. The first saving comes from asking a simple question about each step: why do we still do this?
