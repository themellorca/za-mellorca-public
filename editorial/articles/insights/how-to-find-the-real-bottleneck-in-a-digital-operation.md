---
hub: insights
record_id: INS-008
slug: how-to-find-the-real-bottleneck-in-a-digital-operation
title: How to find the real bottleneck in a digital operation
description: The busiest team or the loudest complaint is rarely the real constraint. How to find the one step that limits how much work gets done, and what to do next.
lead: The busiest team or the loudest complaint is rarely the real constraint. A practical method for finding the one step that limits how much work a digital operation can complete, and what to do once you have found it.
category: Digital Operations
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Digital Operations
sources:
  - Five Focusing Steps, a Process of On-Going Improvement | https://www.tocinstitute.org/five-focusing-steps.html
  - Overview of process mining in Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/process-mining-overview
  - Value Stream Mapping Overview - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/value-stream-mapping/
related:
  - How to diagnose a business that runs on exceptions | /insights/how-to-diagnose-a-business-that-runs-on-exceptions/
  - Before you automate, understand how the work actually moves | /insights/before-you-automate-understand-how-the-work-actually-moves/
  - How to design a customer onboarding workflow that scales | /insights/how-to-design-a-customer-onboarding-workflow-that-scales/
  - How to identify the handoffs that cause delays | /insights/how-to-find-which-handoffs-are-slowing-your-work-down/
summary: The busiest team or the loudest complaint is rarely the real constraint. A practical method for finding the one step that limits how much work a digital operation can complete, and what to do once you have found it.
layout: plain
---
Every process has one step that limits how much work it can complete. In a factory, that step is often visible: a machine with a pile of parts in front of it. In a digital operation it is much harder to see. The pile is a folder of unprocessed orders, a shared inbox with 300 unread messages, a list of jobs waiting for approval in a system nobody checks, or a spreadsheet one person updates on Fridays.

Because digital queues are invisible, businesses often guess where the bottleneck is. They usually guess wrong, and then spend money speeding up a step that was never limiting the flow.

> Improving a step that is not the bottleneck makes that step faster. It does not make the business faster.
>

## Why the obvious answer is often wrong

Three false bottlenecks are especially common.

### The busiest team

A team that is always busy is not necessarily the constraint. It may be busy because it is doing rework caused upstream, or because it is processing work that will then wait for days at the next step. Utilisation is a poor guide. The Theory of Constraints Institute's guidance on the [five focusing steps](https://www.tocinstitute.org/five-focusing-steps.html) makes the point that what matters is the productivity of the constraint, not the utilisation of every other resource.

### The loudest complaint

Customer complaints arrive at the end of the process, so the team that faces the customer tends to be blamed. But the delay a customer feels is the sum of every wait in the chain, and the largest wait is often several steps back.

### The technology

"The system is slow" is a frequent diagnosis. Sometimes it is right. More often, the system processes a transaction in seconds and the work then waits hours or days for a person to pick it up, check it or approve it.

## A practical method for finding the real constraint

### 1. Choose one flow and define the unit of work

Pick a process with a clear start and end, such as order to invoice, enquiry to quote, or service request to resolution. Define what counts as one unit: an order, a quote, a ticket.

### 2. Measure elapsed time between steps, not effort within them

For a sample of recent cases, record when each step started and finished. Most business systems hold this as timestamps on status changes, emails or record edits. The aim is to separate touch time (someone working on the item) from wait time (the item sitting between steps). In most digital operations, waiting dominates. Our page on [when work sits waiting more than it moves](/patterns/when-work-sits-waiting-more-than-it-moves/) explores why.

### 3. Find where work accumulates

Count how many items are sitting in front of each step at a given moment. The constraint is usually the step with a persistent queue in front of it and little or no queue after it. If work piles up before credit approval and flows quickly after, credit approval is the candidate.

If the systems cannot give you this easily, a manual snapshot works. For two weeks, at the same time each morning, count the items in each state: awaiting capture, awaiting approval, awaiting scheduling, in progress, awaiting invoice. Record the numbers in a simple table. A queue that keeps growing, or never drains, will stand out within days. It is crude, but it replaces opinion with a pattern everyone can see.

### 4. Check the information flow, not just the work flow

The Lean Enterprise Institute notes that [value stream mapping](https://www.lean.org/lexicon-terms/value-stream-mapping/) is distinctive in covering both material flows and information flows. In digital operations, the constraint is often an information step: waiting for a missing detail, a document or a decision. A job cannot be scheduled until the site address is confirmed; an order cannot ship until the account is verified. Moving information between systems by hand is a frequent culprit, which we cover in [how manual data transfer becomes an operational bottleneck](/insights/how-manual-data-transfer-becomes-an-operational-bottleneck/).

### 5. Use the system's own records where you can

Microsoft describes [process mining](https://learn.microsoft.com/en-us/power-automate/process-mining-overview) as extracting event data from systems of record to visualise how processes actually run, and lists identifying bottlenecks and inefficiencies among its main benefits. A smaller business can apply a lighter version: export status-change dates from the CRM or job system, and calculate how long items spent in each state. The results regularly contradict what people believe. The broader case is set out in [what process mining can reveal that workshops cannot](/insights/what-process-mining-can-reveal-that-workshops-cannot/).

### 6. Test the conclusion

If a step is the constraint, adding capacity there should increase completed output. Adding capacity elsewhere should not. A short trial, such as moving one extra person to the suspected step for a week, often confirms or refutes the diagnosis cheaply.

## An illustrative example

The following is a hypothetical case. A Johannesburg IT reseller with 45 staff believes its warehouse is the bottleneck, because orders often ship late and the warehouse is visibly busy. Status dates from the order system tell a different story. Picking and packing take under a day on average. But orders wait an average of two and a half days between being captured and being released to the warehouse, because each one must be checked against the customer's credit limit by a single person in finance, who also handles month-end. The warehouse was busy because orders arrived in bursts after each credit review. The constraint was a credit check, not the warehouse.

## What to do once you have found it

The Theory of Constraints offers a sequence known as the five focusing steps. Translated into digital operations, it looks like this:

1. **Identify the constraint**, using the method above.
2. **Exploit it.** Make sure the constraint never waits for work and never spends time on work that could be done elsewhere. In the example, finance should receive complete, pre-checked orders, and routine low-risk orders could be released automatically within agreed limits.
3. **Subordinate everything else to it.** Other steps should pace their work to what the constraint can handle. The institute's guidance warns against producing more than the constraint can process; in an office, that means not pushing sales to capture more orders than can be approved.
4. **Elevate it.** If the constraint is still limiting after exploiting it, add capacity: a second approver, an automated rule, a better integration.
5. **Prevent inertia.** Once one constraint is relieved, another step becomes the limit. Return to step one rather than assuming the job is done.

Approval steps are one of the most common constraints in growing businesses, and [why approval processes become bottlenecks](/insights/why-approval-processes-become-bottlenecks/) covers the specific remedies.

## Common mistakes

- **Automating a non-constraint.** Automating a fast step can look impressive and leave throughput unchanged.
- **Measuring averages only.** A step that is quick on average but occasionally holds items for a week can still dominate customer experience. Look at the slowest cases too.
- **Ignoring rework loops.** Items sent back for correction pass through the constraint twice. Reducing upstream errors can free more constraint capacity than any investment at the constraint itself.
- **Treating the finding as permanent.** Constraints move as volumes, products and staff change. Repeat the analysis at least once a year, and whenever the business changes significantly.

## Why this matters

Finding the real bottleneck is one of the highest-return pieces of analysis a business can do, because it tells you where an hour or a rand of improvement will actually increase output. Everywhere else, improvement is optional. At the constraint, it is the business's capacity.
