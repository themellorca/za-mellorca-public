---
hub: insights
record_id: INS-014
slug: where-operational-errors-really-come-from
title: Where operational errors really come from
description: The person who made the visible mistake is usually at the end of a chain of causes. Six places errors really begin, and how to trace one back.
lead: The person who made the visible mistake is usually at the end of a chain of conditions that made it likely. Six places recurring business errors actually begin, and a simple method for tracing an error back to its origin instead of stopping at whoever noticed it last.
category: Operations
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Operations
sources:
  - Systems Approach - PSNet | https://psnet.ahrq.gov/primer/systems-approach
  - https://books.hse.gov.uk/gempdf/hsg48.pdf | https://books.hse.gov.uk/gempdf/hsg48.pdf
  - Root Cause Analysis - PSNet | https://psnet.ahrq.gov/primer/root-cause-analysis
related:
  - How manual data transfer becomes an operational bottleneck | /insights/how-manual-data-transfer-becomes-an-operational-bottleneck/
  - What your recurring problems are telling you about your systems | /insights/what-your-recurring-problems-are-telling-you-about-your-systems/
  - Why fixing symptoms without mapping the system rarely works | /insights/why-fixing-symptoms-without-mapping-the-system-rarely-works/
summary: The person who made the visible mistake is usually at the end of a chain of conditions that made it likely. Six places recurring business errors actually begin, and a simple method for tracing an error back to its origin instead of stopping at whoever noticed it last.
layout: plain
---
When an invoice goes out with the wrong amount, a delivery arrives at the wrong address or a customer is told something that turns out to be untrue, the first question is usually "who did this?" There is almost always an answer. Someone typed the figure, chose the address or gave the information. Correcting them feels like solving the problem.

It rarely is. The person who made the visible mistake is usually standing at the end of a chain of conditions that made the mistake likely. Fix the person and the conditions remain, ready for the next colleague to trip over. To reduce operational errors in a lasting way, you have to find where they actually start, and that is usually somewhere upstream of where they are noticed.

## Where an error is found is not where it began

Most businesses detect errors late. Finance spots the wrong invoice at month-end. The customer spots the wrong delivery. Management spots the wrong figure in a report. By then the error has passed through several steps, and each step could have created it, passed it on or failed to catch it.

Patient safety research has a well-known way of describing this. The [systems approach](https://psnet.ahrq.gov/primer/systems-approach) summarised by the US Agency for Healthcare Research and Quality distinguishes active errors, which happen at the point of contact, from latent errors: failures of organisation or design that sit in the system and allow active errors to cause harm. It describes latent errors as accidents waiting to happen. The related "Swiss cheese" model pictures each layer of defence as a slice with holes; harm occurs when the holes line up.

Business operations work the same way. The clerk who keys the wrong price is the active error. The latent errors might be a price list with two current versions, a system that accepts any price without a warning, and a review step that only checks totals.

## The usual origin points in business processes

When businesses trace their recurring errors back to where they began, the same handful of origins appear again and again.

### 1. Capture

Information enters the business incomplete, ambiguous or in free text. A sales order without a delivery contact, an enquiry form that allows any date format, a job card filled in from memory at the end of the day. Every later step works with what was captured, so errors created here travel furthest.

### 2. Re-keying and transfer

The same information is typed again into another system, copied from an email or exported and re-imported. Each transfer is a chance for a transposed digit, a missed field or a stale copy. These errors look like carelessness, but they are a predictable result of asking people to act as the link between systems.

### 3. Rules that live in people's heads

Discounts, credit terms, special handling and exceptions that are known rather than written down or configured. New or stand-in staff apply the general rule because they do not know the exception exists. Experienced staff apply different versions of the same rule.

### 4. Timing and handoffs

Work moves between people or teams, and something changes in between: a customer updates an address, a price changes, an approval is withdrawn. The person downstream works from the version they were given. The error is created by the gap, not by either person.

### 5. Unmanaged change

A template, formula, system setting or automation is changed without testing or telling the people who rely on it. Errors start on a particular date and are often blamed on whoever happened to be processing work that week.

### 6. Working conditions

Interruptions, high workload and time pressure increase errors in every step above. The UK Health and Safety Executive's guidance [Reducing error and influencing behaviour](https://books.hse.gov.uk/gempdf/hsg48.pdf) groups the causes of human failure into job, individual and organisational factors. Among those it lists are constant disturbances and interruptions, missing or unclear instructions, high workload, poor work planning that creates pressure, and inadequate responses to previous incidents. That last one deserves attention: an organisation that only corrects the individual is, by HSE's account, itself contributing to the next failure.

## Why blaming the last person keeps errors coming

Blame is quick, and it feels like accountability. But it has three effects that work against you. It stops the investigation at the most visible point, so the upstream causes are never found. It teaches people to hide or quietly fix errors rather than report them, which removes your best source of evidence. And it leaves the latent conditions in place, so the same error returns with a different name attached.

Even formal investigation can fall into this trap. AHRQ's primer on [root cause analysis](https://psnet.ahrq.gov/primer/root-cause-analysis) notes that such analyses often fail to produce sustainable system-level fixes, partly because organisations rely on weak actions such as reminders and retraining. It also points out that "root cause" can be misleading, because several conditions usually have to combine for an incident to happen.

None of this means individuals are never responsible. It means that when the same kind of error keeps happening across different people, the cause is almost certainly in the process.

## An illustrative example

Consider a hypothetical Pretoria office equipment supplier with about 50 staff. Customers regularly receive invoices for the wrong service plan. The billing clerk is retrained twice, and the errors continue at roughly the same rate.

When the operations manager traces ten recent cases backwards, a different picture appears. Service plans are agreed by sales reps and noted in the CRM as free text. Billing reads those notes and selects a plan code in the accounting system. Where a rep has written something like "standard plus extra visits", the clerk has to interpret it. In seven of the ten cases the note was ambiguous; in two, the customer had upgraded and the note was never updated; in one, the clerk simply picked the wrong code.

The real origin was capture: plans recorded as free text. The fix was a required plan field in the CRM using the same codes as billing, and a rule that upgrades are recorded as a change to that field. The clerk's error rate had never been the problem.

## How to trace an error to its origin

1. **Pick a recurring error, not a single incident.** Patterns reveal causes that one case hides.
2. **Collect several recent examples.** Five to ten is usually enough to see a pattern.
3. **Walk each one backwards.** For every step, ask: was the information correct when it arrived here? Was it correct when it left?
4. **Mark the step where it first became wrong.** That is the origin, regardless of who noticed it.
5. **Classify the origin.** Capture, re-keying, unwritten rules, timing and handoffs, unmanaged change, or working conditions.
6. **Ask why that step allowed it.** Was there no validation, no single source, no defined rule, no notification of change?
7. **Fix the condition, not just the case.** Prefer changes that make the error hard to make, such as required fields, picklists, single sources and change control, over reminders.

For the design side of this, including better inputs and checks placed near the risk, see [how to reduce human error without removing human judgment](/insights/how-to-reduce-human-error-without-removing-human-judgment/). Where re-keying is the main origin, [copy and paste is often really an integration problem](/insights/when-copy-and-paste-is-really-an-integration-problem/).

## Warning signs that errors are systemic

- The same type of error happens under different staff members.
- Errors spike after a system change, a new template or a busy period.
- Staff keep private checklists or notes to avoid known traps.
- Downstream teams routinely check and correct upstream work.
- Retraining produces a short improvement that fades.
- People hesitate to report errors because of how previous ones were handled.

When downstream teams spend their time correcting what arrives from upstream, the pattern described in [finance teams becoming data clean-up teams](/patterns/when-finance-teams-become-data-clean-up-teams/) is usually not far away.

## The trade-offs

Tracing errors properly takes time, and not every mistake deserves an investigation. Reserve the effort for errors that recur, cost money or reach customers. Equally, preventive controls can be overdone: every required field and approval adds friction. The aim is to place a small number of well-chosen controls at the points where errors begin, rather than many checks at the end where they are merely discovered.
