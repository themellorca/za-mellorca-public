---
hub: insights
record_id: INS-304
slug: what-information-must-move-with-the-work
title: What Information Must Move With the Work?
description: Across the life of a job, order or case, six kinds of information must stay attached to the work: identity, intent, commitments, decisions, open questions and evidence. Here is how to move references rather than copies, and what to leave behind.
lead: Across the life of a job, order or case, six kinds of information must stay attached to the work: identity, intent, commitments, decisions, open questions and evidence. Here is how to move references rather than copies, and what to leave behind.
category: Digital Operations
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Digital Operations
sources:
  - Handoffs - PSNet | https://psnet.ahrq.gov/primer/handoffs-and-signouts
  - Google SRE - Incident Management: Key to Restore Operations | https://sre.google/sre-book/managing-incidents/
  - Section 10 Minimality - POPIA | https://popia.co.za/section-10-minimality/
related:
  - How to design workflows that can survive staff changes | /insights/how-to-design-workflows-that-can-survive-staff-changes/
  - What Should a CEO Understand About Digital Operations? | /insights/what-should-a-ceo-understand-about-digital-operations/
  - Why CRM adoption problems are often workflow problems | /insights/why-crm-adoption-problems-are-often-workflow-problems/
summary: Across the life of a job, order or case, six kinds of information must stay attached to the work: identity, intent, commitments, decisions, open questions and evidence. Here is how to move references rather than copies, and what to leave behind.
layout: plain
---
Work in most businesses passes through several pairs of hands before it is finished. An enquiry becomes a quote, the quote becomes an order, the order becomes a job, the job becomes an invoice. At each step a different person picks it up, and at each step they need certain information to do their part well. When that information does not arrive with the work, they stop and ask, or they guess.

Most advice on this subject focuses on the moment of handoff. This article looks at a different question: across the whole life of a piece of work, what information must stay attached to it, in what form, and what should deliberately be left behind.

> Information moves with the work when the next person can act correctly without contacting the previous person or the customer.
>

## The cost of information that stays behind

When information does not travel, three things happen. People interrupt each other to fill the gaps, which slows both the asker and the person asked. Customers are asked again for things they have already said. And some gaps are never noticed, so work is done on the wrong assumption: the wrong delivery address, the old price, the scope before the customer changed it. The last of these is the most expensive, because it surfaces as rework or a complaint.

Handoffs are a well-studied risk in healthcare. The Agency for Healthcare Research and Quality's patient safety primer on handoffs notes that communication failures between providers have been found to be a leading cause of preventable error in some settings. Business work is rarely life-or-death, but the mechanism is the same: the receiver acts on an incomplete picture.

## Six kinds of information that should move with the work

### 1. Identity

Who the work is for and what it is about, identified by stable references rather than descriptions: the customer account, the site, the order number, the product codes. This sounds obvious, but work often moves as an email that says "the Sandton job", and the receiver has to work out which one.

### 2. Intent

What the customer or requester actually wants to achieve, not only the task. "Replace the unit" and "replace the unit before the audit on the 14th" lead to different decisions about priority and approach. Intent is the information most often lost, because it is rarely recorded in a field.

### 3. Commitments

Everything the business has promised: price, scope, deadline, service level, special conditions. If a salesperson agreed to deliver on a Saturday, the dispatcher needs to know, and so does finance if it affects the price.

### 4. Decisions and the reasons for them

Choices already made, and why. If a technician decided not to replace a part because the customer declined the cost, the next technician should not have that conversation again. Recording the reason prevents decisions from being reversed by people who do not know they were made.

### 5. Current state and open questions

Where the work stands, what is still unresolved and who can answer it. Healthcare handoff formats include an action list and contingency planning, the "if this happens, do that" guidance for the next person. A business equivalent is a short list of open items and what to do if, for example, the customer does not confirm by Thursday.

### 6. Evidence

The documents the next step depends on: the signed quote, the approved drawing, the purchase order, photographs of the site. Evidence should be attached to the work, not described in an email that refers to an attachment somewhere else.

## Move a reference, not a copy

The instinct is to copy information forward: paste the customer's details into the job card, forward the email chain to the next team, re-key the order into the next system. Each copy is correct on the day it is made and starts drifting the day after. When the customer changes their contact person, the original record is updated and the copies are not.

Google's guidance on managing incidents offers a useful model. It describes a live incident state document, kept by the person in charge, editable by several people at once, as that person's most important responsibility. Everyone works from the same living record rather than passing messages. When command passes to someone else, the handover is explicit and acknowledged, and the record goes with it.

For business work, the equivalent is a single work record, such as a job, case or order, that every stage reads from and adds to. Information moves with the work because the work item points to it, not because someone copied it. That depends on knowing which system holds the authoritative version of each piece of information, a question addressed in [how to decide what should be the system of record](/insights/how-to-decide-what-should-be-the-system-of-record/).

## What should not move with the work

Moving everything is not the answer. A job card carrying the entire email history makes the important details harder to find. There is also a legal limit. Section 10 of the Protection of Personal Information Act says personal information may only be processed if, given the purpose, it is adequate, relevant and not excessive. A delivery driver needs an address and a contact number. They do not need the customer's identity number or credit history.

A practical rule is that each stage should see what it needs to act and know where to find the rest if it needs it. That means deciding, for each stage, which information is shown, which is available on request and which is not visible at all.

## A simple way to define it

| Stage | Must see | Available if needed | Not needed |
| --- | --- | --- | --- |
| Quoting | Customer, requirement, intent, deadline | Previous quotes and orders | Payment history detail |
| Scheduling | Site, scope, deadline, special commitments | Signed quote | Pricing negotiation |
| Field work | Site, contact, scope, decisions, open items | Photographs, drawings | Credit status, identity documents |
| Invoicing | Agreed price, completed scope, purchase order | Job notes | Site access details |

The rows will differ for every business. The value of the exercise is that it is done once, deliberately, rather than reinvented by each person at each handoff. Once the table exists, the work record can be designed so that each stage sees its column. The mechanics of the individual handoff, including acceptance and exceptions, are covered in [how to design a handoff that cannot depend on memory](/insights/how-to-design-a-handoff-that-cannot-depend-on-memory/).

## An illustrative example

Consider an illustrative Durban air-conditioning installation and maintenance business with about 45 staff. Jobs moved from sales to a scheduler to technicians to accounts. Each stage received a forwarded email and a job number in the scheduling tool.

Technicians regularly phoned the office from site to ask about access arrangements, whether the customer had approved a quoted extra, and which unit model had been agreed. Accounts often invoiced the original quote rather than the revised one. When the business counted, it found that about one call in three from technicians was a request for information that already existed somewhere in the business.

The business made the job record the single place for six things: site and access details, agreed scope and quote version, commitments, decisions with reasons, open items and attached documents. Technicians saw the first five on their phones; accounts saw scope, quote version and the completion note. Calls from site to the office fell noticeably, and invoice corrections became rare. The underlying pattern is described in [why field teams still phone the office for information](/patterns/why-field-teams-still-phone-the-office-for-information/).

## A practical diagnostic

1. For one common type of work, list every question the next stage asks the previous one in a typical week.
2. Sort the questions into the six kinds of information above.
3. For each, find where the answer currently lives and whether the work record can point to it.
4. Decide what each stage must see, what it can look up and what it should not see.

Most businesses find that a small number of missing items account for most of the interruptions. Attaching those to the work item, and keeping one living record rather than a trail of copies, removes much of the friction that teams currently absorb by phoning each other. Where that friction sits between teams, see [why work gets lost between teams](/insights/why-work-gets-lost-between-teams/).
