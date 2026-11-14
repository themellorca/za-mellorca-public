---
hub: insights
record_id: INS-335
slug: how-to-document-exceptions-not-just-the-happy-path
title: How to Document Exceptions, Not Just the Happy Path
description: Written procedures cover the smooth case while the real knowledge sits in exceptions. Capture them from real cases, with an owner, an end point and an escalation rule.
lead: Written procedures cover the smooth case while the real knowledge sits in exceptions. Capture them from real cases, with an owner, an end point and an escalation rule.
category: Process Documentation
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Process Documentation
sources:
  - https://learn.microsoft.com/en-us/azure/architecture/patterns/compensating-transaction | https://learn.microsoft.com/en-us/azure/architecture/patterns/compensating-transaction
  - https://learn.microsoft.com/en-us/azure/architecture/best-practices/transient-faults | https://learn.microsoft.com/en-us/azure/architecture/best-practices/transient-faults
  - https://www.gov.uk/guidance/the-technology-code-of-practice | https://www.gov.uk/guidance/the-technology-code-of-practice
summary: Written procedures cover the smooth case while the real knowledge sits in exceptions. Capture them from real cases, with an owner, an end point and an escalation rule.
layout: plain
---
Ask a team to describe how an order is processed and you will hear a clean story: the order arrives, stock is checked, the invoice goes out, the goods ship, the customer pays. Ask the same team what happened last Tuesday and the story changes. A customer changed the delivery address after dispatch. A supplier shipped half the quantity. The invoice went to a department that had been renamed. Somebody on the team knew what to do each time, and none of it was written down.

Most written procedures describe the happy path, the sequence that applies when everything arrives complete, on time and correct. That is the easiest part to document and the part least in need of it. The work that depends on one person's memory is the exception handling. This article explains how to capture exceptions in a form people will actually use.

## Why the happy path gets all the attention

Exceptions are untidy. They branch, they depend on context and they often involve a conversation with a customer or supplier rather than a click in a system.

The result is a procedure that looks complete and fails the first time something unusual happens. A new employee follows the steps, reaches a situation the steps do not cover, and asks the person who has been there longest. That person answers from experience. The answer is sensible, but it is now a decision made by one individual and recorded nowhere. If that person leaves, the knowledge leaves with them. Our article on [why the official process is often not the real process](/insights/why-the-official-process-is-often-not-the-real-process/) describes how this gap between the written and the actual way of working builds up.

## What counts as an exception

Not every departure from the standard flow deserves its own page. A useful working definition is any situation where the standard steps cannot be completed as written. In practice, exceptions fall into a few families:

- **Missing or wrong input.** A purchase order number is absent, a customer record is incomplete or a figure on a supplier invoice does not match the order.
- **Timing problems.** A payment arrives before the invoice, an approver is on leave or a deadline passes before a document is signed.
- **Changes after the fact.** A customer cancels, amends or disputes something that has already been processed.
- **System failures.** An integration stops, a login expires or a file fails to import.
- **Policy edge cases.** A request falls just outside a limit, a rule or a category, and someone has to decide whether to allow it.

Each family needs a different answer: missing input needs a way to ask for it, timing problems need an owner and a deadline, and policy edge cases need a decision-maker.

## Start from the evidence, not from imagination

The most reliable way to find your exceptions is to look at what already happened. Do not hold a workshop and ask people to imagine everything that could go wrong; you will get a long list of unlikely events and miss the ordinary ones. Instead, look at the last month or two of real work:

- Search email and chat for phrases such as "can you check", "this doesn't match" or "who normally handles".
- Look at records that were corrected, reopened, credited or reversed.
- Count the cases. An exception that happens twice a week matters more than one that happened once.

This gives you a ranked list based on frequency and cost, which tells you where to spend effort first. Our piece on [how to diagnose a business that runs on exceptions](/insights/how-to-diagnose-a-business-that-runs-on-exceptions/) goes further into reading these patterns at the level of the whole business.

## A simple structure for each exception

An exception entry should be short enough to read while the problem is happening. A consistent structure helps. Each entry needs only six parts:

1. **What it looks like.** Describe how someone recognises the situation, in the words they would use. For example, "The delivery note quantity is lower than the order quantity."
2. **What to do first.** The immediate safe action, such as placing the invoice on hold, not paying until checked.
3. **Who decides.** A named role, not a department, with a stand-in for when that person is away.
4. **What to record.** Where the outcome is logged, so the next person finds it and the pattern becomes visible.
5. **How it ends.** The condition under which the case is considered closed and the normal flow resumes.
6. **When to escalate.** The time limit or amount beyond which the case goes to someone more senior.

The fifth and sixth parts are the ones most often left out, and they are where cases get stuck. A held invoice that nobody is responsible for releasing is an exception that has turned into a permanent backlog.

## Document the undo as well as the do

Many exceptions are really requests to reverse something that was already done: a payment sent in error, an order processed twice, a record created for the wrong customer. Software architects treat this as a design problem in its own right. Microsoft's description of the [compensating transaction pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/compensating-transaction) explains that when a multi-step operation fails part-way through, the work already completed may have to be undone by a separate set of steps, and that those steps will not always be a simple mirror image of the originals. The same is true in a business process. Cancelling an invoice is not the same as never having sent one, because the customer may already have seen it.

For each major step in your process, ask what the reversal looks like, who is allowed to do it and what the customer or supplier will see as a result. Writing this down in advance is far cheaper than inventing it while a customer is waiting.

## Separate temporary faults from real exceptions

Some problems fix themselves if you try again. An import fails because a file was still being saved; a message does not arrive because a connection dropped. Microsoft's guidance on [transient fault handling](https://learn.microsoft.com/en-us/azure/architecture/best-practices/transient-faults) notes that these short-lived faults are common in connected systems and that the right response is often a controlled retry, not human intervention. Knowing which category a problem belongs to saves people from escalating things that only need a second attempt, and from retrying things that need a decision.

In your documentation, mark the exceptions where the first action is simply "try again after a few minutes", and say how many attempts are reasonable before it becomes a real case. That one line stops many unnecessary calls.

## Keep the documentation where the work happens

An exception guide stored in a folder nobody opens will not be used. Put each entry as close to the point of need as you can: in the team's working notes for the accounting system, or pinned in the shared inbox where the problem arises.

Ownership matters as much as location. Name one person who maintains the exception list for each process, and give them the authority to add entries when a new case turns up. Our article on [why documentation is part of the business system](/insights/why-documentation-is-part-of-the-business-system-not-an-add-on/) explains why documents that nobody owns decay quickly, and the same rule applies here.

## Use the log to improve the process

A well-run exception record does more than help the next person. Over a few months, it shows which exceptions are frequent, which are expensive and which could be removed by changing the normal process. If one in five supplier invoices lacks an order number, the answer is not a better exception entry. It is a rule that no purchase is approved without an order number being issued first. The exception list is a to-do list for process design, and it is one of the cheapest sources of improvement ideas a business has.

## Practical next actions

1. Pick one process that matters, such as supplier payments or customer onboarding, and read through the last four to eight weeks of real cases to list every time work stopped or needed a decision.
2. Rank those cases by how often they occurred and how much time or money each cost, and choose the top five to write up first.
3. For each of the five, write an entry covering what it looks like, the first safe action, who decides, what to record, how it closes and when to escalate.
4. Name an owner for the list, give them a stand-in, and agree where the list will live so that people find it at the moment they need it.
5. Review the log monthly and ask of each frequent exception whether a change to the normal process would stop it from occurring at all.
