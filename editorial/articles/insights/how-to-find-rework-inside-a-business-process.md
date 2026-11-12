---
hub: insights
record_id: INS-104
slug: how-to-find-rework-inside-a-business-process
title: How to Find Rework Inside a Business Process
description: Rework hides inside normal-looking activity as corrections, repetition and work sent backwards. Four ways to find it with evidence, price it, and trace it to a cause worth fixing.
lead: Rework hides inside normal-looking activity as corrections, repetition and work sent backwards. Four ways to find it with evidence, price it, and trace it to a cause worth fixing.
category: Process Analysis
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Process Analysis
sources:
  - Value Stream Mapping Overview - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/value-stream-mapping/
  - 5 Whys - What is it? - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/5-whys/
  - Overview of process mining in Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/process-mining-overview
  - What is Process Mining? - IBM | https://www.ibm.com/think/topics/process-mining
related:
  - Before you automate, understand how the work actually moves | /insights/before-you-automate-understand-how-the-work-actually-moves/
  - How to find the manual work nobody is measuring | /insights/how-to-find-the-manual-work-nobody-is-measuring/
  - How to find automation opportunities from operational evidence | /insights/how-to-find-automation-opportunities-from-operational-evidence/
summary: Rework hides inside normal-looking activity as corrections, repetition and work sent backwards. Four ways to find it with evidence, price it, and trace it to a cause worth fixing.
layout: plain
---
Rework is work done again because it was not right the first time: the quote reissued with the correct price, the invoice credited and re-raised, the onboarding form sent back for missing details. It is rarely recorded as a line in any report. It appears instead as overtime, slow turnaround and a general sense that people are busy but the output does not match the effort.

Because rework hides inside normal-looking activity, finding it takes a method. This article describes where rework lives, how to detect it with evidence rather than opinion, and how to trace it to a cause that can actually be fixed.

> Rework is not a measure of how careless people are. It is a measure of how often the process hands them something that cannot be used as it arrives.
>

## What counts as rework

Three categories are worth separating, because each points at a different part of the process.

- **Correction:** something was produced and then fixed, such as an invoice with a wrong purchase order number.
- **Repetition:** the same step is done again, such as capturing customer details in two systems.
- **Return:** work travels backwards to an earlier stage, such as an order bounced from dispatch to sales because the delivery address is incomplete.

The third is the most expensive and the least visible, because the clock on the original task often keeps running while it waits to be sent back and forth.

## Where rework tends to hide

Rework concentrates at a few predictable places. Handoffs between teams are the most common, since the receiving team discovers what the sending team did not provide. Points where the same data is entered twice are next. Approval steps are another: a request that arrives without the information the approver needs is returned, as described in [why approval processes become bottlenecks](/insights/why-approval-processes-become-bottlenecks/). Finally, anywhere that staff talk about "chasing" is a likely site, which [why chasing people for updates is a systems failure](/insights/why-chasing-people-for-updates-is-a-systems-failure/) explains in more detail.

## Method 1: follow a sample of real items end to end

Pick ten recent jobs, orders or cases and trace each from start to finish, noting every time it moved backwards, was edited after being marked complete, or waited for a missing piece of information. This is the practical core of what lean practice calls a value stream map: recording not only the steps but the waiting and the loops between them. Ten items is enough to see patterns. A walkthrough of the technique is given in [how to map a business workflow without making it complicated](/insights/how-to-map-a-business-workflow-without-making-it-complicated/).

The key discipline is to use real items, not the process as described. The written procedure shows the intended path. The sample shows the actual one, which is the theme of [why the official process is often not the real process](/insights/why-the-official-process-is-often-not-the-real-process/).

## Method 2: look for the fingerprints in your data

Many systems leave traces of rework without anyone intending it. Look for:

- records edited multiple times after they were marked complete;
- credit notes and cancelled-and-reissued documents, counted as a share of the originals;
- statuses that move backwards, such as "in dispatch" returning to "awaiting details";
- tickets reopened after closure;
- email subject lines containing "corrected", "updated" or "please resend".

Where event data exists, process mining tools can reconstruct the paths automatically and show loops. Microsoft's documentation on process mining in Power Automate describes this approach of using system event logs to visualise how a process actually runs, and IBM's overview explains how it exposes deviations and bottlenecks. For small businesses, a manual count from a month of credit notes is often enough to start. The wider case is made in [what process mining can reveal that workshops cannot](/insights/what-process-mining-can-reveal-that-workshops-cannot/).

## Method 3: ask the people who receive the work

Rework is felt by the receiver. Ask the person downstream one question: "What do you most often have to fix, ask about or send back?" Then ask the same of the next team along. Do not ask the sender whether they make mistakes; ask the receiver what arrives incomplete. The answers are usually specific and consistent, and the same three or four items keep coming up. People will name the source accurately when the question is about the work and not about blame.

## Method 4: price it

A loop that happens twice a week for 15 minutes seems trivial. A loop that happens 40 times a month across three people is a different matter. For each rework pattern, estimate how often it occurs, how long each occurrence takes, and the loaded hourly cost of the people involved. Add the delay cost where it matters, such as late invoicing pushing back cash collection. The method for this is set out in [how to calculate the real cost of a repetitive task](/insights/how-to-calculate-the-real-cost-of-a-repetitive-task/). The aim is not precision. It is a ranked list, so that effort goes to the pattern that matters most.

## From pattern to cause: ask why more than once

Once a rework loop is found, resist the temptation to fix the most visible instance. The five whys technique, associated with lean practice, asks why repeatedly until the underlying cause appears. Suppose invoices are frequently reissued.

1. Why? The purchase order number was missing.
2. Why? Sales did not record it on the order.
3. Why? The order form has no field for it.
4. Why? The form was designed before the largest customers required purchase order numbers.
5. Why was it not updated? Nobody owns the form.

The fix is not to remind people to check invoices. It is to add the field, make it required for the customers who need it, and give the form an owner. The same reasoning is behind what your recurring problems are telling you about your systems.

## An illustrative example

The following is a hypothetical case. A Pretoria electrical wholesaler with 35 staff believes its main problem is slow invoicing. A sample of fifteen orders shows that six were returned from the accounts team to the sales desk at least once, always for the same reasons: a missing purchase order number, an unconfirmed delivery contact, or a price that differed from the agreed quote. Counting the previous month's credit notes confirms that around one in eight invoices had been reissued.

Pricing the loops gives roughly 25 hours of staff time a month and several days of delayed billing on affected orders. The business adds three required fields to the order form, locks quoted prices into the order automatically, and has the sales desk review a short daily list of orders missing details before they go to accounts. Within two months, returned orders fall sharply, and invoicing speeds up without anyone working faster.

## Before you automate or buy anything

Finding rework matters most before spending money on software. Automating a loop leaves the loop in place, only faster, as why automating a broken process makes the problem worse warns. Remove the cause first, then decide what is worth automating.

## A short checklist for your first pass

- Trace ten recent items and mark every backward movement.
- Count last month's credit notes, reopened tickets and reissued documents.
- Ask each receiving team what they most often fix or send back.
- Price the three most frequent loops.
- Trace the top loop to its cause, and give that cause an owner.

Rework shrinks when the process stops handing people work that cannot be used as it arrives. Finding it is the first step, and it requires nothing more sophisticated than looking at what actually happened.
