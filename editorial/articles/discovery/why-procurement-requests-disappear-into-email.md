---
hub: discovery
record_id: DISC-026
slug: why-procurement-requests-disappear-into-email
title: Why procurement requests disappear into email and chat
description: Procurement delay often starts before sourcing or purchasing: the business has no structured intake record, routing logic or visible workflow for a request.
lead: When employees ask for purchases through email, chat, spreadsheets and hallway conversations, procurement is forced to reconstruct the request before it can govern it. The first failure is not approval speed; it is the absence of structured intake.
category: Procurement & Supplier Operations
published_date: 2026-09-02
updated_date: 2026-09-02
tags:
  - Procurement
  - Workflow
  - Approvals
cta_label: Operations Improvement
cta_href: /services/digital-operations-improvement/
side_notes:
  - Problem owner: Head of Procurement / Operations Manager
  - Budget owner: CFO / COO
problem_domain: Procurement & Supplier Operations
problem_owner: Head of Procurement / Operations Manager
budget_owner: CFO / COO
sources:
  - https://www.servicenow.com/docs/r/source-to-pay-operations/sourcing-and-procurement-operations/purchase-requisition.html | https://www.servicenow.com/docs/r/source-to-pay-operations/sourcing-and-procurement-operations/purchase-requisition.html
  - https://www.servicenow.com/docs/r/source-to-pay-operations/sourcing-and-procurement-operations/create-approval-rule.html | https://www.servicenow.com/docs/r/source-to-pay-operations/sourcing-and-procurement-operations/create-approval-rule.html
  - https://www.servicenow.com/docs/r/source-to-pay-operations/sourcing-and-procurement-operations/pr-po-sr-states.html | https://www.servicenow.com/docs/r/source-to-pay-operations/sourcing-and-procurement-operations/pr-po-sr-states.html
closing_title: Method note
closing_text: This article diagnoses a class of operating problem. The cited platform documentation demonstrates current workflow and integration mechanisms; it does not prove that every organisation has the same failure mode. Quantify impact from your own process, transaction, labour and exception data.
related:
  - Why policy acknowledgements need a reliable system record | /discovery/why-policy-acknowledgements-need-a-reliable-system-record/
  - Why AI agents can answer questions but cannot complete work across business systems | /discovery/why-ai-agents-cannot-complete-work-across-business-systems/
  - AI evaluations are performed only before launch | /discovery/ai-evaluations-are-performed-only-before-launch/
  - When procurement starts with an email request | /patterns/how-purchase-requests-get-lost-in-an-inbox/
---
## The problem in plain language

A manager needs a supplier, software subscription, contractor or piece of equipment. The request begins in an email or chat message. Procurement asks for a specification, budget code, supplier details or approval. Some information arrives in a spreadsheet. A senior manager approves in a reply thread. Later, someone asks for status and nobody can answer without searching the conversation.

At that point procurement has become a human workflow engine. The team is not merely buying; it is manually creating the record, routing, state management, evidence trail and exception handling that a proper operating process should provide.

A familiar example: a branch manager at a multi-site clinic group sends a WhatsApp message to the operations director asking for a replacement autoclave. The director replies "fine, go ahead" and forwards it to the procurement officer by email. The procurement officer asks for the model, quotes and the cost centre. Two quotes arrive as photos in the chat; the third never arrives. Three weeks later the branch manager asks where the machine is. Nobody is being lazy. The request simply never became a record with a status.

## What people are really asking

The questions often sound like "what should our procurement request workflow be?", "how do we approve purchase requisitions?", "can we automate purchase approvals?", "do we need a procurement intake form?", "how do we track purchase requests?" or "why is this request stuck in email?" The person asking is rarely after a grand procurement transformation. They want a request to enter one controlled path and move.

## Evidence: procurement platforms treat the request as a governed business record

ServiceNow's current [sourcing and procurement](https://www.servicenow.com/docs/r/source-to-pay-operations/sourcing-and-procurement-operations/pr-po-sr-states.html) documentation [models a purchase requisition](https://www.servicenow.com/docs/r/source-to-pay-operations/sourcing-and-procurement-operations/purchase-requisition.html) as an internal request for goods or services, recording items, quantities, suppliers, costs and justification, and moving it through defined lifecycle states such as pending review and approval, awaiting task completion, final review, pending submission and closed. Its [approval rules](https://www.servicenow.com/docs/r/source-to-pay-operations/sourcing-and-procurement-operations/create-approval-rule.html) can route purchase requisitions according to managerial hierarchy, specified users or groups, cost centre managers, purchasing limits and trigger conditions, sequentially or in parallel.

Again, the product is not the point. The operating principle is. Procurement work is easier to govern when the request has a durable identifier, structured fields, explicit states, ownership, conditions and a traceable approval path. Email is excellent for communication; it is weak as a source-of-truth workflow database. The same failure appears wherever routine requests run through inboxes—see [the pain of processing routine requests through email chains](/impact/the-pain-of-processing-routine-requests-through-email-chains/).

## Buyer ownership

Procurement usually owns the process, but the CFO or COO often owns the economic consequence. Budget owners approve, employees request, finance validates spend and suppliers receive the final order. If the intake layer is weak, every downstream team pays for the ambiguity.

## Why the problem becomes urgent

It becomes urgent when spend grows, approval policies tighten, audit evidence is requested, supplier volume increases or procurement headcount cannot scale with the number of requests. A business can tolerate informal buying at low volume. At higher volume, the same informality becomes delay, maverick spend and repeated administrative work.

### Warning signs

- Procurement staff spend much of their day replying to "any update?" messages.
- Purchase orders are raised after the goods have already been ordered.
- Different managers approve the same type of purchase at different limits.
- Auditors' requests for approval evidence take days to answer.
- Suppliers chase payment for orders the finance team cannot match to an approval.

## Economic consequence

- **Cycle-time cost**: requests wait because the next decision or missing field is not visible.
- **Procurement labour**: specialists spend time reconstructing context rather than negotiating or managing suppliers.
- **Maverick spend**: employees bypass the process when the formal route feels slower than buying directly.
- **Duplicate effort**: request details are re-entered into sourcing, purchasing and finance systems.
- **Audit effort**: evidence must be assembled from messages rather than retrieved from a transaction history.
- **Supplier friction**: orders arrive late or with incomplete information after internal delays.

## The root cause is usually intake design, not approver laziness

Organisations often blame managers for slow approvals. Sometimes that is true. But the deeper causes are usually missing information, unclear routing rules, no purchase categories, an approval matrix that is not encoded, and no visible state model. A manager cannot make a fast decision on a request that arrives without cost, business reason, supplier, budget owner or timing.

The wider mechanics of approval delay are explored in [why approval processes become bottlenecks](/insights/why-approval-processes-become-bottlenecks/). For procurement specifically, the most useful distinction is between a request that is *waiting for a decision* and one that is *waiting for information*. In email, both look the same: silence. In a structured process, they are different states with different owners.

## How to diagnose the problem

Take a sample of twenty recent purchases across different values and categories and reconstruct each one:

1. When and where did the request first appear?
2. How many messages were exchanged before it was complete enough to approve?
3. Who approved it, by what means, and was that consistent with the delegation of authority?
4. How long did each stage take—clarification, approval, ordering, receipt?
5. Was any information typed again into the purchasing or accounting system?

The pattern that emerges usually shows that most elapsed time sits in clarification rather than approval, and that a few categories—new suppliers, software, contractors—cause most of the friction.

## A practical intervention

- Create one front door for procurement requests.
- Capture only the information needed to classify and route the request; do not turn intake into a 60-field punishment.
- Define request types such as routine catalogue purchase, non-catalogue purchase, new supplier, sourcing event, renewal and emergency purchase.
- Encode approval rules using value, cost centre, category, risk and authority rather than manually forwarding every request.
- Give every request an explicit state and owner.
- Create escalation and delegation for absent approvers.
- Integrate approved requests with purchasing and finance so data is not re-keyed downstream.
- Measure cycle time by stage and exception reason.

### Trade-offs

Structured intake adds a step for requesters, and some will resist it. The answer is to make the form shorter than the email it replaces and to make status visible to the requester, so the benefit is felt immediately. Encoding approval rules also forces decisions that may have been left vague—who really may approve a R50,000 software renewal? That conversation is uncomfortable but valuable. Finally, emergency purchases need a fast lane with after-the-fact review, otherwise people will simply go around the system. A single stuck approver can still hold everything up, which is why delegation matters; see [why one approval holds up an entire process](/patterns/why-does-one-approval-hold-up-an-entire-process/).

## Diagnostic questions

- Can an employee see where to submit a purchase request without asking procurement?
- Does every request receive a durable ID?
- Can procurement tell which requests are waiting for information versus approval?
- Are approval limits encoded in a system rather than remembered by staff?
- Can an approved request create the next purchasing record without re-entry?
- Can auditors reconstruct who approved what, when and under which rule?

## What to do first

Write down the current delegation of authority as a simple table of value bands, categories and approvers, and confirm it with finance. Then create a single request form—even a basic one—that assigns an ID and captures the five fields every approver needs: what, why, how much, which cost centre and by when. Route all new requests through it for one month and measure how long requests spend waiting for information versus waiting for approval. That evidence will show where automation is worth investing.

## What good looks like

Good procurement intake is boring in the best sense. A requester knows where to go. The form adapts to the type of request. The right owner receives it. Approvals follow policy. Status is visible. Clarification is captured against the same record. Approved information flows downstream. Exceptions are explicit instead of becoming invisible side conversations.

## Where Mellorca fits

Mellorca can map the request-to-purchase flow, simplify intake, define decision and approval logic, implement workflow automation and integrate purchasing records with finance or supplier systems. A typical path runs from a procurement-intake diagnostic and request and approval map to workflow redesign, implementation, and cycle-time and exception monitoring. The commercial objective is not "more workflow software"; it is lower coordination cost with stronger control.
