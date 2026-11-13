---
hub: patterns
record_id: PAT-013
slug: when-one-simple-request-turns-into-five-separate-jobs
title: When one simple request turns into five separate jobs
description: One customer change means five people in three systems must act. Small requests fan out into manual work when a change is not recorded once.
lead: A customer changes their billing contact and five people in three systems have to act. When small requests fan out into many manual actions, the business is missing a single place where a change is recorded once.
category: Manual Work & Administrative Load
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Manual Work & Administrative Load
pattern_family: Manual Work & Administrative Load
observable_condition: A simple request, such as a changed contact, address, bank detail or new site, triggers several separate manual actions by different people across multiple systems and lists.
primary_identification: Manual change propagation caused by duplicated information with no authoritative record and no mechanism to pass changes on.
commercial_value_dimensions: Customer experience, speed, labour capacity and payment and data risk
sources:
  - What to do after someone dies | https://www.gov.uk/after-a-death/organisations-you-need-to-contact-and-tell-us-once
  - What Is Workflow Automation? - IBM | https://www.ibm.com/think/topics/workflow-automation
  - Explore the Power Automate home page - Power Automate | https://learn.microsoft.com/en-us/power-automate/getting-started
  - Value Stream Mapping Overview - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/value-stream-mapping/
related:
  - Why teams keep building manual workarounds | /patterns/why-teams-keep-building-manual-workarounds/
  - When repetitive work is mistaken for necessary work | /patterns/when-repetitive-work-is-mistaken-for-necessary-work/
  - Why high-value employees become human middleware | /patterns/why-high-value-employees-become-human-middleware/
summary: A customer changes their billing contact and five people in three systems have to act. When small requests fan out into many manual actions, the business is missing a single place where a change is recorded once.
layout: plain
---
## Observable condition

A long-standing client emails to say that their accounts contact has changed and their delivery address is moving next month. It is a two-line message. Inside the business it becomes a small project. Someone updates the customer record in the accounting system. Someone else changes the contact in the CRM. The delivery address has to be changed in the dispatch system, but only from the right date. The sales representative needs to be told. The recurring monthly statement has a separate distribution list that also needs updating. Each of these actions is done by a different person, often after an internal email asking them to do it.

The same thing happens with other simple requests. A staff member asks to change their bank details. A supplier changes its name after a restructure. A customer asks to add a second branch to their account. A new product price is agreed. Each request is simple to describe and slow to complete, because it has to be repeated in every place the information lives.

An illustrative example: an Eastern Cape engineering services firm with about fifty staff tracked what happened when a client asked to add a new site to an existing maintenance contract. The request touched the contract file, the job scheduling system, the accounting system, a technician roster spreadsheet and the client portal. It took four people and nine days to complete, and on one occasion the first maintenance visit was missed because the roster had not been updated.

## Realisation

The effort in these requests is not in deciding anything. The decision is usually obvious. The effort is in propagation: carrying one fact to every place that needs it. Every additional system or list that holds a copy of the same information adds another action, another person and another chance for one copy to be missed.

Governments have recognised this problem in the services they offer citizens. The UK's Tell Us Once service, for example, lets people report a death to most government organisations in one go instead of contacting each one separately. The principle behind it is simple: the person making the request should not have to carry the change to every department, and neither should the organisation's own staff.

Inside a business, the cost of fan-out is largely hidden. Each action is small and belongs to a different team, so nobody sees the whole sequence. What the customer sees is the result: a change that takes days, or a change that is made in some places and not others.

**Realisation prompt:** take the last time a customer changed a basic detail. How many people touched that change before it was complete?

## Identification

This is a pattern of manual change propagation: a single business event that has to be applied separately in several systems and lists because there is no authoritative record and no mechanism to pass the change on. The visible symptom is a simple request generating several internal tasks. The common assumption is that each team simply needs to be informed. The structural cause is that the same information is held in several places with no defined owner and no connection between them.

It is related to [why does an order need so many manual touches](/patterns/why-does-an-order-need-so-many-manual-touches/), which follows a transaction through its steps, and [why information has to be copied from one system to another](/patterns/why-information-has-to-be-copied-from-one-system-to-another/), which looks at re-keying. This Pattern focuses on the fan-out of a single change: one request, many parallel actions.

## Diagnosis

- **Information is duplicated.** Customer, supplier, employee and product details are held separately in accounting, CRM, operations and spreadsheets, each maintained by a different team.
- **No system is defined as the source.** Without an agreed owner for each type of data, every copy is treated as equally valid and must be updated by hand. How to settle this is set out in [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/).
- **Requests arrive unstructured.** Changes come in by email or phone in free text, so someone must interpret the request and work out which systems it affects before anything happens.
- **Routing depends on knowledge.** Knowing that a site change also affects the technician roster is experience, not process. A newer staff member may not know all the places a change must go.
- **Completion is not tracked.** There is rarely a single view showing that a change has been applied everywhere, so partial updates go unnoticed until something goes wrong.

Mapping the flow, as value-stream mapping does for both material and information, makes the fan-out visible: one input arrow, many output arrows, each with its own queue and delay.

## Commercial impact

The commercial value at stake is customer experience, speed, labour capacity and risk.

Customers experience slow responses to simple requests and, worse, inconsistent outcomes: the statement goes to the old contact, the delivery goes to the old address, the visit is missed. Each of these generates further work in the form of corrections, apologies and credits. Capacity is consumed by several people each doing a small part of what should be one action. Risk rises where the change involves money or access: an employee's bank details, a supplier's payment details, a former contact who still receives account information. A missed update in one of those places is not just inconvenient; it can be costly.

The handling cost of routine requests that travel through email is examined in [the cost of processing routine requests through email chains](/impact/the-pain-of-processing-routine-requests-through-email-chains/).

## Common misidentification

The common fix is a checklist: a list of every place a customer change must be applied. That helps reliability but leaves the fan-out intact. Five actions on a checklist are still five actions.

Another response is to buy an all-in-one system so that everything lives in one place. Sometimes that is right, but often the business only needs one authoritative record for each type of information and a reliable way to pass changes from it to the systems that need them.

## Possibility

In a better state, a change is recorded once, in the system that owns that information, and flows from there to every system that needs it. The request comes in through a structured form or a portal rather than free text, so it is clear from the start what is changing and from when. The business can see, for any request, whether it has been completed everywhere.

Workflow tools make this practical for smaller businesses. IBM describes [workflow automation](https://www.ibm.com/think/topics/workflow-automation) as software executing all or part of a process to replace manual tasks. Microsoft's documentation describes [Power Automate](https://learn.microsoft.com/en-us/power-automate/getting-started) as a service for creating automated workflows between apps and services to synchronise files, collect data and send notifications. For the engineering firm, that could mean a site-addition form that creates the scheduling record, updates the contract and roster and notifies accounts in one step, with a person reviewing only the commercial terms.

## Intervention

1. **Pick the most common requests.** List the five or six routine change requests the business receives most often: contact changes, address changes, bank detail changes, new sites, price changes.
2. **Trace each one.** For each request, write down every system, list and person it touches before it is complete, and how long that takes.
3. **Name the owning system.** For each type of information, decide which system holds the authoritative version.
4. **Remove copies where possible.** Where a list or spreadsheet duplicates information already held elsewhere, see whether it can read from the owning system instead.
5. **Structure the intake.** Replace free-text requests with simple forms that capture what is changing and when.
6. **Automate the propagation.** Use integrations or workflow tools to pass the change from the owning system to the others, with a clear confirmation when every step has completed and an alert when one fails.
7. **Control sensitive changes.** For bank and payment details, keep a verification step with a person, but make it a single, defined step rather than one of many scattered actions.

## Diagnostic questions

- How many systems hold a customer's address or contact details in your business?
- How long does it take, from request to completion, to change a basic customer or supplier detail?
- Can anyone see whether a change has been applied everywhere it should be?
- Which routine requests depend on one experienced person knowing where they need to go?
- When did a partial update last cause a missed delivery, a misdirected document or a payment error?

## Bottom line

When a simple request creates five separate actions, the business is asking people to carry one change to every place a copy of the information lives. The work is slow, easy to get partly wrong and invisible as a whole. Deciding where each kind of information belongs, taking requests in a structured way and letting changes flow from one record to the rest turns a small internal project back into a single action.
