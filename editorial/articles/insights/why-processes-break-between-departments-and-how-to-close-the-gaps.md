---
hub: insights
record_id: INS-107
slug: why-processes-break-between-departments-and-how-to-close-the-gaps
title: Why Processes Break Between Departments
description: Work rarely fails inside a department. It fails at the boundary, where ownership, definitions and information change hands.
lead: Work rarely fails inside a department. It fails at the boundary, where ownership, definitions and information change hands.
category: Process Design
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Process Design
sources:
  - Anti-Corruption Layer Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer
  - Saga Design Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/saga
  - Get started with Power Automate approvals - Power Automate | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
related:
  - Why Work Gets Lost Between Teams | /insights/why-work-gets-lost-between-teams/
  - Which Processes Usually Break First During Growth | /insights/which-business-processes-break-first-when-a-company-grows/
  - What Happens When Every Department Chooses Its Own Tools | /insights/what-happens-when-every-department-chooses-its-own-tools/
summary: Work rarely fails inside a department. It fails at the boundary, where ownership, definitions and information change hands.
layout: plain
---
A customer in Pretoria signs a contract on Monday. By Friday the finance team has not raised an invoice, the delivery team has not heard of the start date, and the customer has emailed twice to ask who their contact is. Every department did its own part correctly. Sales closed the deal, finance is waiting for a purchase order number, and delivery is waiting for a kick-off request. The process failed in the gaps between them, where nobody was assigned to look.

Cross-department failures are among the most common operational problems in growing businesses, and they are easy to misdiagnose as people problems. This article explains why they happen and what to change so that work crosses a boundary without being dropped, distorted or delayed.

## A process is rarely owned end to end

Most organisations assign responsibility by function. Sales owns the pipeline, finance owns invoicing, operations owns delivery. Each leader is measured on the performance of their own area, so each optimises locally. The sequence that carries a customer from enquiry to payment belongs to no one in particular, which means nobody is accountable for the points where it passes from one team to the next.

The consequence is predictable. A department treats its work as finished when it leaves their hands, not when it has been received and understood. A salesperson who sends a handover email considers the task done; whether delivery read it, understood it or had the information to act on it is somebody else's concern. Our article on [why broken handoffs are systems problems](/insights/broken-handoffs-are-systems-problems/) makes the same point from the perspective of systems design: when a handoff fails repeatedly, the structure is at fault, and replacing the person rarely helps.

## The same word means different things

A subtler cause is that departments use the same terms for different things. To sales, a "customer" is a signed contract. To finance, a customer exists once a credit check is complete and an account number is created. To delivery, a customer is real when a site address and a contact person are confirmed. Each definition is reasonable in its own context, but a record that is complete for one team is incomplete for the next.

Software architects have a name for this problem. Microsoft's description of the [anti-corruption layer pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer) addresses subsystems that do not share the same semantics, and proposes a translation layer between them so that one system's model does not leak into the other. You do not need to write software to borrow the idea. Where two departments hand work to each other, define a short translation: what one team produces, in the exact form the next team needs it. That might be a one-page handover template with required fields, a standard set of attachments, or a shared definition of "ready to invoice".

## Information degrades each time it is retyped

Every time a person copies information from one place to another, there is a chance of error, omission or delay. Customer details are re-entered into the accounting system, the order is retyped into a delivery sheet, and a note is pasted into an email. Each copy introduces differences, and after a few weeks different departments hold slightly different versions of the truth. When two numbers disagree, time goes into finding out which one is right instead of serving the customer.

The fix is not simply "use one system", which is rarely realistic. It is to decide which system holds the authoritative version of each piece of information, and to make every other place read from it or receive it through a controlled route. Our guide to [when copy-and-paste is really an integration problem](/insights/when-copy-and-paste-is-really-an-integration-problem/) helps you decide which retyping habits are worth removing first.

## Nobody can see the whole journey

Because each team sees only its own stage, nobody notices when work sits idle between stages. A deal can wait four days for a purchase order number without anyone raising a flag, since the waiting time falls outside every department's measures. Delay in a handover looks like normal life from within the team that is waiting and like an unanswered request from within the team that was asked.

Making the journey visible changes behaviour quickly. A simple method is to pick ten recent customers and trace each from first contact to first payment, noting the date each stage began and ended. The pattern usually shows that most of the elapsed time is waiting, not working. Our article on [how to find which handoffs are slowing your work down](/insights/how-to-find-which-handoffs-are-slowing-your-work-down/) gives a practical way to do the tracing, and the broader idea of a workflow that crosses departments is covered in [what a useful workflow map contains and what it leaves out](/insights/what-a-useful-workflow-map-contains-and-what-it-leaves-out/).

## Exceptions have no home

Normal cases often flow acceptably. It is the exceptions that fall through: a customer who needs a different payment term, an order that changes after confirmation, a delivery address that does not match the billing address. Each exception needs a decision, and the process rarely says whose decision it is. People send the query to whoever they know best, who may not have the authority to answer, and the matter circulates by email until it is either resolved by accident or forgotten.

Distributed systems have a related problem. Microsoft's guidance on the [saga pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/saga) describes a sequence of steps across several services in which, if one step fails, earlier steps need defined compensating actions to undo their effect. A business process crossing departments needs the same thing in plain language. If finance rejects an account after sales has promised a start date, who tells the customer, who releases the reserved capacity, and who records that the deal has reverted? Decide this before it happens, not during an argument.

## What to change

Fixing these breaks does not need a reorganisation. It needs a few explicit commitments at each boundary.

- **Name a journey owner.** One person is accountable for the full path of a given process, such as order to cash, even though they do not manage each team. Their job is to watch the gaps.
- **Define the handoff.** For each boundary, write what must be provided, in what form, by when, and what the receiver does if it is incomplete.
- **Make receipt visible.** A handoff is complete when the receiver accepts it, not when the sender sends it. A simple acknowledgement step, in a shared task list or a system status, closes the loop.
- **Agree on shared definitions.** Settle what "customer", "ready to invoice" and "delivered" mean, and record the definitions where everyone can find them.
- **Assign exceptions.** For each common exception, name who decides and how quickly.

Approval steps are a frequent point of friction, so it helps to look closely at them. Our article on [why approval processes become bottlenecks](/insights/why-approval-processes-become-bottlenecks/) explains how to review them. Where you have a tool that can route approvals, features such as those described in Microsoft's [Power Automate approvals guide](https://learn.microsoft.com/en-us/power-automate/get-started-approvals), which notify approvers and wait for a response before the flow continues, can remove the chasing, though only after the rule itself has been agreed.

## Practical next actions

1. Pick ten recent customers and trace each from first contact to first payment, recording the date every department received and finished its part.
2. Mark the three handoffs with the longest waiting time and write down, for each, what the receiving team actually needed and did not get.
3. Draft a one-page handover template for the worst boundary, with required fields and a named recipient, and trial it for a month.
4. Agree written definitions of the five terms that cause the most disagreement between departments, and share them in a single visible place.
5. Appoint a journey owner for one process and give that person a regular fifteen-minute review of stalled items across departments.
