---
hub: insights
record_id: INS-007
slug: why-fixing-symptoms-without-mapping-the-system-rarely-works
title: Why fixing symptoms without mapping the system rarely works
description: Late invoices, angry customers and messy data are usually symptoms of something upstream. Why fixing them where they appear fails, and how to trace them.
lead: Late invoices, angry customers and messy data are usually symptoms of something further upstream. Why fixing them where they appear tends to fail, and how to trace a symptom back through the system before acting.
category: Operations
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Operations
sources:
  - 5 Whys - What is it? - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/5-whys/
  - Value Stream Mapping Overview - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/value-stream-mapping/
  - Google SRE - Troubleshooting Methodology: A Learning Path | https://sre.google/sre-book/effective-troubleshooting/
  - Overview of process mining in Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/process-mining-overview
related:
  - Poor data is an operations problem, not just a data problem | /insights/poor-data-is-an-operations-problem-not-just-a-data-problem/
  - What your recurring problems are telling you about your systems | /insights/what-your-recurring-problems-are-telling-you-about-your-systems/
  - Why work gets lost between teams | /insights/why-work-gets-lost-between-teams/
summary: Late invoices, angry customers and messy data are usually symptoms of something further upstream. Why fixing them where they appear tends to fail, and how to trace a symptom back through the system before acting.
layout: plain
---
Most operational problems announce themselves at the end of a process. Invoices go out late. Customers complain that nobody called back. The month-end report does not balance. Stock runs out of a fast-moving line. Because that is where the pain is felt, that is usually where the fix is applied: a reminder for the billing clerk, a callback rule for customer service, an extra reconciliation step for finance, a higher reorder level.

Sometimes that works. More often the problem returns in a slightly different form, or moves to another team, or the fix itself creates new work. The reason is simple. The place where a problem appears is rarely the place where it is caused.

> A symptom tells you where the system hurts. It does not tell you where the system is broken.
>

## Why symptoms mislead

Business processes are chains. Information and work move from one team and one system to the next, and each step depends on what came before. A defect introduced early travels downstream until it reaches a point where it can no longer be absorbed. That point is where people notice it.

Consider late invoices. The billing clerk may be slow, but the invoice may also be late because the job was not closed in the system, because the technician could not close it without a missing part number, because the part was ordered outside the purchasing system, because the supplier account was not set up. Each of those is a plausible cause. Only one or two are actually responsible, and none of them is visible from the billing desk.

The Lean Enterprise Institute describes the 5 Whys technique as asking why repeatedly whenever a problem is encountered, in order to get beyond the obvious symptoms to the root cause. Its point is that without that discipline, people replace the failed part and the failure recurs.

## Four ways symptom fixes go wrong

### They add work instead of removing it

A checking step, a reminder or a manual reconciliation treats the symptom by adding labour. Over time these accumulate into a layer of compensating work that nobody designed and everybody depends on.

### They move the problem

Pushing one team to go faster often just moves the queue to the next team. A sales push that wins more orders without fixing onboarding simply relocates the backlog to operations.

### They optimise a part at the expense of the whole

The Lean Enterprise Institute's description of [value stream mapping](https://www.lean.org/lexicon-terms/value-stream-mapping/) stresses that it is about improving the whole, not just optimising the parts. A department can improve its own numbers while making the end-to-end flow worse, a pattern described in [when every department optimises its part but the whole process gets worse](/patterns/when-every-department-optimizes-its-part-but-the-whole-process-gets-worse/).

### They target the wrong cause

Google's Site Reliability Engineering guidance on troubleshooting warns against confusing correlation with causation, and against latching on to the causes of past problems on the assumption that the same thing must be happening again. Those warnings were written for engineers diagnosing software, but they describe management diagnosis just as well. The problem that started at the same time as the new hire may have nothing to do with the new hire.

## Map just enough of the system

The alternative is not a months-long analysis. It is to map enough of the system around the symptom to see where it might be coming from, before choosing a fix. A practical sequence:

1. **Describe the symptom precisely.** Not "invoicing is a mess", but "about one in four invoices goes out more than a week after the job is completed".
2. **Draw the boundary.** Identify where the work that produces the symptom starts. For late invoices, that might be the moment a job is booked.
3. **List the steps and handoffs.** Include both the work and the information it needs, because value stream mapping is distinctive in looking at both material and information flows. Where does each piece of information come from, and who provides it?
4. **Follow real cases backwards.** Take five or ten recent examples of the symptom and trace each one back to the first point where something went wrong.
5. **Group the causes.** Patterns appear quickly. Most late invoices may share one or two upstream causes.
6. **Fix at the earliest sensible point.** Change the step where the defect enters, not the step where it is noticed.

A simple table is usually enough for this. Our guide to [how to map a business workflow without making it complicated](/insights/how-to-map-a-business-workflow-without-making-it-complicated/) sets out a lightweight format.

## Use the evidence the systems already hold

Where the process runs through software, the systems often contain a record of what actually happened: timestamps on status changes, who edited what, how long records sat in each state. Microsoft describes [process mining](https://learn.microsoft.com/en-us/power-automate/process-mining-overview) as a way of extracting this event data to visualise how processes actually run, compare them and determine the root causes of inefficiencies. A small business may not need a process mining tool, but the principle applies: a few exports of dates and statuses can reveal where cases really stall, which is often different from where people believe they stall.

## An illustrative example

The following is a hypothetical case. A Bloemfontein agricultural equipment dealer has repeated complaints that service customers are not told when their machines are ready. The first fix is a rule that service advisers phone every customer at 4pm. Complaints fall for a month, then return. Tracing ten recent cases shows that in eight of them, the workshop had finished the job but not updated its status, because the status could only be changed from a desktop computer in the office, not from the workshop tablet. Advisers were phoning customers based on stale information. Allowing the status to be updated from the tablet removed most of the complaints and made the 4pm calls unnecessary.

## When a symptom fix is the right call

Treating a symptom is not always wrong. When customers or cash are being harmed right now, a temporary fix that contains the damage is sensible. The mistake is letting that temporary fix become permanent without ever tracing the cause. Treat each symptom fix as a holding measure with a review date, and record what the real cause is believed to be.

It is also worth checking whether the problem is really about people at all. Many issues blamed on individual performance turn out to be design problems in the process or systems around them, as we discuss in [how to tell whether you have a people problem or a systems problem](/insights/how-to-tell-whether-you-have-a-people-problem-or-a-systems-problem/).

## Signs you are treating symptoms

- The same problem has been "fixed" more than once in the past year.
- Fixes consist mainly of extra checks, reminders or approvals.
- Each team can explain why the problem is caused by another team.
- Nobody can point to the step where the problem first enters the process.
- Improvements in one area are followed by new complaints in another.

If two or more of these apply, the next fix should start with tracing rather than acting.

## The habit that pays off

The discipline is modest: before fixing a recurring problem, spend an hour tracing a handful of real cases back to their origin. That hour regularly saves weeks of repeated fixes. It also changes how a management team talks about problems, from "who dropped the ball" to "where does this enter the system", which is a more productive question and a fairer one.
