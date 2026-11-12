---
hub: patterns
record_id: PAT-040
slug: when-automation-stops-at-the-edge-of-each-system
title: When Automation Stops at the Edge of Each System
description: The CRM automates follow-ups, accounting automates reminders and the job app automates scheduling, yet every handover between them still waits for a person. When automation ends where each product ends, the overall process stays slow.
lead: The CRM automates follow-ups, accounting automates reminders and the job app automates scheduling, yet every handover between them still waits for a person. When automation ends where each product ends, the overall process stays slow.
category: Disconnected Systems & Integration Friction
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Disconnected Systems & Integration Friction
pattern_family: Disconnected Systems & Integration Friction
observable_condition: Each system automates the work inside it, but when work must move from one system to another, such as from a won deal to an account in accounting or from a completed job to an invoice, a person exports, forwards or re-creates it.
primary_identification: Automation islands: automation configured product by product, with the business events that should carry work across system boundaries never defined as triggers.
commercial_value_dimensions: Speed, cash flow, capacity and customer experience
sources:
  - Create workflows | https://knowledge.hubspot.com/workflows/create-workflows
  - Learn key concepts in Zap workflows | https://help.zapier.com/hc/en-us/articles/8496181725453-Learn-key-concepts-in-Zaps
  - Triggers - Power Automate | https://learn.microsoft.com/en-us/power-automate/triggers-introduction
related:
  - When the Next Step Waits for Someone to Check Another System | /patterns/when-the-next-step-waits-for-someone-to-check-another-system/
  - Why Information Has to Be Copied From One System to Another | /patterns/why-information-has-to-be-copied-from-one-system-to-another/
  - When Disconnected Systems Let the Business Act on Old Information | /patterns/when-disconnected-systems-let-the-business-act-on-old-information/
summary: The CRM automates follow-ups, accounting automates reminders and the job app automates scheduling, yet every handover between them still waits for a person. When automation ends where each product ends, the overall process stays slow.
layout: plain
---
## Observable condition

A new enquiry lands in the CRM. The CRM's own workflow assigns it to a salesperson, sends the prospect a welcome email and creates a follow-up task. Everything inside the CRM runs on its own. Then the deal is won, and the automation stops. Someone exports the customer details, opens the accounting system, creates the customer account, builds the first invoice and emails operations to say a new job is coming.

The same thing happens elsewhere in the business. The accounting system sends invoice reminders automatically, but when a customer pays, someone still has to tell the warehouse that the order can be released. The job-management app marks a job complete and generates a signed job card, but the invoice is only raised when the job card is forwarded to finance. Each system is well automated inside its own walls. The work that crosses from one system to the next is still pushed along by a person.

An illustrative example: a Johannesburg facilities-maintenance company with around forty staff had invested in automation in every department. Sales used CRM workflows, technicians used a job app with automatic scheduling, and finance used automated statements. Yet the managing director noticed that the time from job completion to invoice had not improved in two years. The delay sat entirely in the gaps between the three systems.

## Realisation

Most business software now includes automation. HubSpot's workflows, for example, enrol records automatically when they meet set criteria and then carry out actions such as assigning records, creating tasks and sending internal notifications. Accounting, job-management and e-commerce platforms offer similar rules. These features are designed around the data the platform holds, so they are strongest inside the platform and weakest at its edge.

That means a business can be heavily automated and still slow. Each department can point to its automations and say, truthfully, that its part of the process runs itself. But a customer does not experience the departments. They experience the whole journey from enquiry to delivery to invoice, and that journey is only as fast as its slowest handover.

Automation tools describe this in simple terms. Zapier explains that a Zap is a trigger and one or more actions: an event in one app starts work in another. Microsoft's Power Automate documentation describes a trigger as the event that starts a flow, and distinguishes automated flows that start when something happens from instant flows that a person starts by hand. In many businesses, the step between two systems is effectively an instant flow where the button is a person remembering to act.

**Realisation prompt:** where in your main customer process does a finished step in one system wait for someone to start the next step in another?

## Identification

This is a pattern of **automation islands**: each system automates the work it owns, and the transitions between systems remain manual. The visible symptom is a process where the internal steps are fast but the overall cycle time barely moves. The common assumption is that automation has been done, because every department has some. The structural cause is that automation was bought and configured system by system, and nobody designed the triggers that should carry work across the boundaries.

It is related to, but different from, the situation where [APIs exist but the business still works manually](/patterns/when-apis-exist-but-the-business-still-works-manually/). There, the connection technology is available but unused. Here, automation is in active use, but its scope ends at the boundary of each product.

## Diagnosis

- **Automation follows the product, not the process.** Each team configured the automation features in the tool it was given. Nobody was asked to automate the end-to-end process because nobody owned it.
- **The cross-system event is not defined.** "Deal won", "payment received" and "job complete" are business events. Each one should start work elsewhere, but they have never been named as triggers, so each lives only as a status in one system.
- **The receiving system needs data the sending system does not hold in the right form.** The CRM has a contact name; accounting needs a registered company name, VAT number and billing terms. Without agreed fields, a person has to fill the gap.
- **The handover was designed as a message.** The bridge between systems is an email or a chat message to a colleague, not a record created in the next system.
- **Exceptions were used as a reason not to automate.** Because some deals need special terms, every deal is handled manually, rather than automating the standard case and routing exceptions to a person.

## Commercial impact

The commercial value at stake is speed, cash flow, capacity and customer experience.

The cost of automation islands appears in elapsed time more than in effort. A manual handover might take only a few minutes of work, but it waits in a queue until someone gets to it. If a won deal waits a day to be set up in accounting, and a completed job waits several days to be invoiced, cash arrives later than it needs to. For businesses where payment terms already stretch collection, that delay matters.

The manual handovers also concentrate risk. When the person who usually forwards job cards is on leave, invoicing slows or stops. Handovers carried by email are easy to miss and hard to audit. The Impact page on [half-automated processes that need a manual trigger](/impact/manual-automation-trigger-half-automated-process-cost/) explores how this cost builds up.

Finally, the business may conclude that automation does not deliver. It has paid for automation features in several platforms, but the outcome customers and managers care about, from order to cash, has not changed. That can make leaders reluctant to invest in the connection work that would actually help.

## Common misidentification

One misreading is that the business needs more automation inside each tool. Adding further rules to the CRM or the accounting system improves work that is already fast, while the slow handovers stay untouched.

Another is that the problem is staff discipline: if people simply forwarded things promptly, the gaps would close. Prompt staff help, but a process that depends on someone noticing a status change in one system and acting in another will always run at the speed of that person's attention.

A third is that the answer is to replace several systems with one large platform. Sometimes consolidation is right, but it is a large and disruptive change. Often the same benefit can be had by connecting the systems the business already uses well.

## Possibility

In a better state, business events trigger work across systems automatically. When a deal is marked as won, a customer account is created in accounting using agreed fields and an onboarding task appears in operations. When payment is received, the order is released in the warehouse system. When a job is completed, a draft invoice is created for finance to check. People handle exceptions, approvals and judgement calls rather than carrying routine work across the gap.

For the facilities company, the change was to treat "job complete" as a trigger that creates a draft invoice with the job card attached, and to route only disputed or non-standard jobs to a person. The invoicing delay became a matter of review time rather than forwarding time.

## Intervention

1. **Map the boundaries, not just the steps.** Follow one customer journey and mark every point where work leaves one system and must start in another. These are the boundaries to examine. The Insight on [understanding how work actually moves before automating](/insights/before-you-automate-understand-how-the-work-actually-moves/) sets out a practical approach.
2. **Name the business events.** For each boundary, write down the event that should start the next step, such as deal won, payment received or job complete, and which system records it.
3. **Agree the data the next system needs.** List the fields the receiving system requires and make sure the sending system captures them in a usable form at the right time.
4. **Automate the standard path first.** Connect the most common case using the platforms' own integrations or an integration tool. Route exceptions to a named person instead of keeping the whole flow manual.
5. **Give each cross-system flow an owner.** Someone must be responsible for whether work actually arrived on the other side, not just for each system.
6. **Measure the elapsed time across the boundary.** Track the time from event to next action, for example from job complete to invoice raised, before and after the change.

The Discovery page on [manual work that persists because automation covers only the standard path](/discovery/manual-work-persists-because-automation-covers-the-happy-path/) is a useful companion when deciding how to handle exceptions.

## Practical diagnostic questions

- Which of your systems have automation switched on, and where does each of those automations stop?
- When a deal is won, a payment arrives or a job is finished, what tells the next system?
- How long does work typically wait at each handover between systems?
- Who is responsible for the flow from one system to the next, rather than for each system on its own?
- If the person who usually does the handover is away, what happens?

## Bottom line

A business can automate every department and still move slowly if the automation stops where each product ends. The delay sits in the handovers between systems, which are usually carried by people, messages and memory. Treating key business events as triggers that start work in the next system, and automating the standard path across those boundaries, is often where the real gains in speed and cash flow lie.
