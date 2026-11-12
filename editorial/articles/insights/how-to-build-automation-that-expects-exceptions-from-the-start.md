---
hub: insights
record_id: INS-158
slug: how-to-build-automation-that-expects-exceptions-from-the-start
title: How to Build Automation Around Exceptions
description: Automation that handles only the standard case leaves staff to deal with the rest in the dark. How to classify exceptions, route them to the right person and use them to improve the process.
lead: Automation that handles only the standard case leaves staff to deal with the rest in the dark. How to classify exceptions, route them to the right person and use them to improve the process.
category: Automation Strategy
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Automation Strategy
sources:
  - What Is Workflow Automation? - IBM | https://www.ibm.com/think/topics/workflow-automation
  - What Is Human In The Loop (HITL)? - IBM | https://www.ibm.com/think/topics/human-in-the-loop
  - Retry pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/retry
  - Handle Workflow Errors and Exceptions - Azure Logic Apps | https://learn.microsoft.com/en-us/azure/logic-apps/error-exception-handling
related:
  - Which Manual Tasks Should Stay Manual? | /insights/which-manual-tasks-are-better-left-manual-a-sorting-test/
  - How to calculate the business case for automation | /insights/how-to-calculate-the-business-case-for-automation/
  - How to Route Work to the Right Person Automatically | /insights/how-to-route-work-to-the-right-person-automatically/
summary: Automation that handles only the standard case leaves staff to deal with the rest in the dark. How to classify exceptions, route them to the right person and use them to improve the process.
layout: plain
---
A demonstration of an automated process nearly always uses a clean example: a customer who orders a standard product, pays on time and lives at an address the courier recognises. In the live business, perhaps one case in five is different. The customer wants a part-delivery, the payment arrives short by a bank fee, the address has no street number, or the purchase order quotes a price that was valid last quarter. Those cases are the exceptions, and how an automation treats them decides whether it saves time or merely moves the mess.

Most automation projects are designed around the standard path and treat exceptions as an afterthought: something to be sorted out "by the team". This article argues for the reverse. Design the exception handling first, then build the standard path around it.

## Why exceptions deserve design

Exceptions tend to be few in number and large in effect. They consume a disproportionate share of senior attention, they involve unhappy customers, and they are where mistakes become expensive. An automation that quietly drops them, or pushes them into a shared inbox, can make the situation worse than before, because the people who used to notice the odd case now see only the cases the system chose to show them.

The IBM overview of workflow automation presents the benefit as replacing manual tasks with software that executes all or part of a process. The phrase "all or part" is worth underlining. Most real processes are best served by automation that handles part, and hands over the rest cleanly. The related discovery on [why manual work persists because automation covers the happy path](/discovery/manual-work-persists-because-automation-covers-the-happy-path/) shows the cost of leaving that handover undesigned.

## Step one: collect and classify the exceptions you already have

Before building anything, gather the evidence. Review a month of cases and note every one that needed a person to do something unusual: a correction, a phone call, an override, a special price. Sort them into groups. A typical set looks like this:

- **Missing or invalid data:** a required field is blank, a number is wrong, a document is unreadable.
- **Rule breaches:** an order above the credit limit, a discount above authority, a quantity not in stock.
- **Mismatches:** an invoice that does not agree with the order, a payment that does not agree with the invoice.
- **Outside-world faults:** a supplier system is down, a courier rejects a label.
- **Special requests:** a customer asks for something the process never anticipated.

Count how often each group occurs. You will usually find three or four groups account for most of the volume. This is also a good moment to separate genuine exceptions from "exceptions" that are really undocumented standard cases. If a variation happens every week, it is not an exception; it is a path that has not yet been designed. The question is explored in [how to diagnose a business that runs on exceptions](/insights/how-to-diagnose-a-business-that-runs-on-exceptions/).

## Step two: decide what the system does with each group

For each group choose one of four responses. Write the choice down.

1. **Fix automatically.** If the rule is clear, let the system correct it. Trimming spaces from a postcode or adding a standard bank-charge tolerance to a payment match are examples.
2. **Retry later.** Transient faults, such as a supplier system being briefly down, are usually self-correcting. Microsoft's retry pattern guidance describes retrying after a delay for common connectivity or busy failures, and cancelling and reporting when a fault is unlikely to succeed if repeated.
3. **Route to a person.** Where judgement or authority is needed, send the case to a named role with everything they need to decide.
4. **Stop and undo.** If a case fails halfway, reverse the steps already taken. Define in advance how each completed step is reversed, so a half-finished case does not leave a reservation or invoice behind.

The danger is the fifth, unwritten response: do nothing and hope. Automations that have no declared response to an unexpected case usually produce that outcome by default.

## Step three: build the route to a person with care

Routing to a person is where most designs are weakest, so give it the same attention as the standard path. A good exception route has these features.

- **A named role, not a name.** Credit exceptions go to "credit controller", not to Thandi, so that leave and resignations do not stall them.
- **A complete case file.** The person should see what the system did, what it could not do, the original data and a plain-language reason. Making someone hunt through three systems to understand an exception wastes the time you were trying to save.
- **A clear set of options.** Approve, correct and resubmit, reject with a reason, or escalate. Fewer choices mean faster, more consistent decisions.
- **A deadline.** Each exception type gets a response time. If it is not met, the case escalates automatically.
- **A record of the decision.** Who decided, when and why. This supports audits and makes patterns visible.

Azure Logic Apps documentation on error handling makes the structural point that an integration needs a defined path for failures as well as successes, so that problems are handled gracefully and not left to chance. The same principle applies to any process, whether or not it runs in that product. For an approach to designing the person-facing step, see [designing human approval checkpoints for AI workflows](/insights/designing-human-approval-checkpoints-for-ai-workflows/).

## Step four: make the queue visible and bounded

If exceptions pile up unseen, the automation has hidden its own failures. Show the exception queue on a screen or report that the team lead sees each day: how many cases, how old, and which type. Set a limit for acceptable age, say two working days. When the queue grows, treat that as information about the design, not as a staffing problem. The pattern is described in [human exception queues grow faster than automated throughput](/discovery/human-exception-queues-grow-faster-than-automated-throughput/).

## Step five: feed the exceptions back into the design

An exception queue is a source of improvement. Each month, review the cases by group and ask three questions.

1. Could a clear rule now handle the most common type automatically?
2. Could the cause be removed upstream, for example by making a field mandatory on the order form?
3. Is any exception really a new standard path that deserves its own design?

IBM's explanation of human-in-the-loop notes that human input helps systems deal with edge cases they were not equipped to handle and lets them improve over time. In a business process the same loop works through your own team: people resolve the cases, and you convert the repeated resolutions into rules. Do this slowly. Only automate an exception type once you have seen enough of them to be sure of the rule.

## Protect personal information in exception handling

Exception cases are often the ones containing personal details: a disputed account, a failed identity check, a customer's complaint. Under the Protection of Personal Information Act, these need the same care as any other personal information. Limit who can open the exception queue, avoid forwarding cases by email to private accounts, and decide how long resolved cases remain visible.

## An illustrative example

The following is a hypothetical case. A Stellenbosch wine distributor automated order entry from its customer portal. In the first version, any order with a problem was emailed to a general inbox. Within weeks, staff were ignoring the inbox. In the redesign, the distributor classified a month of problems. About half were out-of-stock lines, a quarter were delivery addresses outside the courier's area, and the rest were pricing disputes. Stock shortages were handled automatically by offering a back-order or substitute. Address problems went to the dispatch coordinator with the order and a suggested alternative courier. Pricing disputes went to the sales manager with a decision deadline of one working day. A weekly report showed how many cases of each type occurred. After three months the address problems were nearly eliminated by validating addresses on the portal.

## The point

Automation does not remove exceptions; it determines who meets them, in what condition and how quickly. Classify the exceptions you already have, decide the response for each group, give the human route the same design effort as the automated one, keep the queue in view, and use what it shows to improve the process. Designed that way, an automation earns the trust of the people who work beside it.
