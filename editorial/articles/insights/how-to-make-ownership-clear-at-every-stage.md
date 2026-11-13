---
hub: insights
record_id: INS-305
slug: how-to-make-ownership-clear-at-every-stage
title: How to make ownership clear at every stage
description: Ownership is usually clear at the top and bottom but missing in the middle, where work changes hands. How to name one accountable owner at every stage.
lead: Ownership is usually clear at the top and at the bottom, and missing in the middle where work changes hands. A practical way to name one accountable owner at every stage, with entry and exit conditions.
category: Operating Model
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Operating Model
sources:
  - - Atlassian | https://www.atlassian.com/agile/project-management/raci-chart
  - Cyber Security Toolkit for Boards | https://www.ncsc.gov.uk/collection/board-toolkit
  - Implement a solution based on business processes - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/process-focused-solution
related:
  - How to move operational knowledge out of people's heads | /insights/how-to-move-operational-knowledge-out-of-peoples-heads/
  - When copy-and-paste is really an integration problem | /insights/when-copy-and-paste-is-really-an-integration-problem/
  - How to buy business software without letting the demo make the decision | /insights/how-to-buy-business-software-without-letting-the-demo-make-the-decision/
summary: Ownership is usually clear at the top and at the bottom, and missing in the middle where work changes hands. A practical way to name one accountable owner at every stage, with entry and exit conditions.
layout: plain
---
Ask a business owner whether ownership is clear and the answer is usually yes. Ask who owns a specific customer order at 3pm on a Thursday, between the moment the quote is accepted and the moment the invoice goes out, and the room goes quiet. Sales believes operations has it. Operations believes finance is waiting on sales. Finance is waiting on a purchase order that nobody knew was missing.

Ownership is rarely absent in a business. It is usually clear at the top (the managing director owns everything) and clear at the bottom (a technician owns the job in front of them). It is the middle stages, where work changes hands, that go unowned. This article sets out a practical way to make ownership explicit at every stage of the work, without building an organisation chart nobody reads. The NCSC's [Cyber Security Toolkit for Boards](https://www.ncsc.gov.uk/collection/board-toolkit) makes a related point for security, saying board members have a critical role in making sure cyber resilience and risk management are embedded across the organisation.

## Why ownership fails at the stages, not at the edges

Most firms assign ownership by department or by system. Sales owns the CRM. Finance owns the accounting package. Operations owns the scheduling tool. That is useful for administration, but a customer order does not live inside one department. It crosses all three, and at each crossing it can be dropped.

Departmental ownership answers the question, "who looks after this tool?" Stage ownership answers a different question: "who is responsible for this piece of work right now, and for getting it to the next stage in good condition?" A business can have excellent answers to the first question and none to the second. The result is the familiar pattern in which everyone is busy, nobody is clearly accountable, and the customer is the one chasing for progress. We describe the downstream effects in [why work gets lost between teams](/insights/why-work-gets-lost-between-teams/).

## Step 1: Break the work into stages a person can point to

Start with one end-to-end flow, not the whole company. Pick the flow that earns or loses the most money: perhaps winning a customer and delivering the first job, or taking a supplier invoice through to payment. Write the stages as plain verbs a staff member would recognise. Microsoft's implementation guidance takes a similar view, recommending that a system is [designed around end-to-end processes](https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/process-focused-solution) drawn from a catalogue of business processes, rather than around individual departments.

For a typical services firm in Gauteng the stages might be:

1. Enquiry received and qualified.
2. Quote prepared and approved internally.
3. Quote accepted and customer details captured.
4. Work scheduled and resourced.
5. Work delivered and signed off.
6. Invoice raised and sent.
7. Payment collected and reconciled.
8. Query or complaint handled afterwards.

Eight stages is plenty. If you find twenty, you are mapping tasks rather than stages. The method in [how to map a business workflow without making it complicated](/insights/how-to-map-a-business-workflow-without-making-it-complicated/) keeps the exercise short.

## Step 2: Name one owner per stage, not a team

For each stage, write down one named person. Not "the sales team", not "finance", and not "whoever is on shift". A team can share the work, but a single person must be accountable for the outcome, because shared accountability behaves like no accountability when something slips.

Responsibility charts such as the RACI format, widely described in project management guidance, separate the people who do the work from the one who is accountable and the others who are consulted or informed. You do not need the full apparatus. The useful rule from it is simple: for any stage there may be many people doing, but only one answering.

Where a role rotates, name the role and keep a current name beside it. "Duty dispatcher (this week: Naledi)" is clear. "Dispatch" is not.

## Step 3: Give each stage an entry condition and an exit condition

An owner needs to know when the work becomes theirs and when it stops being theirs. Without that, ownership blurs at exactly the point where mistakes are made.

- **Entry condition:** what must be true before the owner accepts the work. For invoicing, this might be a signed delivery note, a valid purchase order number and the customer's VAT number on file.
- **Exit condition:** what must be true before the owner hands it on. For scheduling, this might be a confirmed technician, a confirmed time slot and a message to the customer.

If the entry condition is not met, the incoming owner sends the work back to the previous owner rather than quietly fixing it or sitting on it. That single habit removes a great deal of invisible rework. It also makes the quality of each handoff visible, which is the foundation of the approach in [how to design a handoff that cannot depend on memory](/insights/how-to-design-a-handoff-that-cannot-depend-on-memory/).

## Step 4: Make the owner visible where the work lives

An ownership list in a document that was last opened in March does not create ownership. The name has to appear in the place where people look when they have a question.

In practice this means a field on the job, ticket, order or deal record: "Current owner". When the work moves, the field changes. In many CRM and work-management tools this is a configuration setting rather than a development project. The rule should be that no record may sit in a stage without a named owner, and any record that has not changed owner or status in a set number of days is flagged automatically.

This also changes how people chase. Instead of asking the whole office for an update on an order, they look at who currently owns it and ask that person. We cover the wider problem in [why chasing people for updates is a systems failure](/insights/why-chasing-people-for-updates-is-a-systems-failure/).

## Step 5: Decide who owns the gaps and the exceptions

Stage ownership covers the normal path. Two kinds of work fall outside it, and both need an explicit owner.

- **The handoff itself.** When a stage is complete but the next owner has not accepted it, the work is in limbo. The previous owner stays responsible until the next owner acknowledges it. This one rule closes most of the gaps.
- **Exceptions.** Rush orders, disputed invoices, customers who change their minds halfway, and suppliers who deliver short are not rare events. Name a person who owns exceptions in each flow, with the authority to decide, so that an unusual case does not wait for a meeting.

## Step 6: Cover absence, because ownership fails when people are away

Every owner needs a named deputy. Leave, illness, a taxi strike or a day without power can all remove someone from the chain. A South African business that has dealt with load-shedding schedules knows that availability is never guaranteed. Ownership that stops when one person is out is a single point of failure, and it is a close cousin of key-person dependency.

The deputy does not need to be an expert. They need access, authority and a short written checklist for the stage. Test it by occasionally asking the deputy to run a stage for a day.

## Step 7: Extend ownership to the systems underneath the stages

Each stage depends on systems and integrations: the CRM that holds the quote, the connector that pushes the accepted quote into the accounting package, the template that generates the invoice. Those need owners too, otherwise a stage owner is accountable for an outcome that depends on something nobody maintains.

Keep two ideas separate. The stage owner is accountable for the work. The system owner is accountable for the tool and its configuration. When an invoice fails to generate, the stage owner raises it and the system owner fixes it, and both know that. The reasoning behind this is set out in [why software ownership needs to be explicit](/insights/why-software-ownership-needs-to-be-explicit/), and the integration case in [why every important integration needs an owner](/insights/why-every-important-integration-needs-an-owner/).

## An illustrative example

The following is a hypothetical case. A Durban company installs and services security systems. Its quote-to-cash flow has seven stages and about forty staff touch it. Debtors are slow, and management assumes the cause is weak credit control.

A one-hour workshop produces a stage list with owners. It quickly shows that stage five, work signed off, has no owner: technicians assume the office captures the signed job card, while the office assumes technicians upload it. Jobs are completed but not invoiced until someone notices. Naming the dispatcher as owner of sign-off, with an exit condition of "signed job card uploaded to the job record", and a daily flag for any completed job without one, cuts the delay. Nothing was bought. The credit controller was never the problem.

## A simple test

Pick any live order, job or case at random. Without asking around, can you answer three questions: what stage is it at, who owns it now, and who will own it next? If you can answer from the record in under a minute, ownership is clear. If you need to walk the floor, it is not, and the stages that cause the walk are the ones to fix first.
