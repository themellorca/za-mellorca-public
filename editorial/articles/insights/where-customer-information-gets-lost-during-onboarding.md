---
hub: insights
record_id: INS-278
slug: where-customer-information-gets-lost-during-onboarding
title: Where Customer Information Gets Lost During Onboarding
description: Customer information leaks during onboarding at predictable points: sales notes, record conversion, quote changes, attachments and handovers to finance and delivery. Here is where to look and what keeps it intact.
lead: Customer information leaks during onboarding at predictable points: sales notes, record conversion, quote changes, attachments and handovers to finance and delivery. Here is where to look and what keeps it intact.
category: Digital Operations
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Digital Operations
sources:
  - Qualify and convert a lead to opportunity | https://learn.microsoft.com/en-us/dynamics365/sales/qualify-lead-convert-opportunity-sales
  - Protection of Personal Information Act 4 of 2013 - South African Government | https://www.gov.za/documents/protection-personal-information-act
  - Section 16 Quality of information - POPIA | https://popia.co.za/section-16-quality-of-information/
related:
  - How Duplicate Data Gets Into Business Systems | /insights/how-duplicate-data-gets-into-business-systems/
  - What Happens When the Only Person Who Understands the System Leaves? | /insights/what-happens-when-the-only-person-who-understands-the-system-leaves/
  - What Information Must Move With the Work? | /insights/what-information-must-move-with-the-work/
summary: Customer information leaks during onboarding at predictable points: sales notes, record conversion, quote changes, attachments and handovers to finance and delivery. Here is where to look and what keeps it intact.
layout: plain
---
A new customer usually tells the business everything it needs to know in the first few weeks. They explain what they bought and why, who the decision-makers are, which deadlines matter, what went wrong with their previous supplier and what they were promised. Then, a month into the relationship, someone from the delivery team asks them for the same information again, or does something that contradicts what the salesperson agreed.

The information was not missing. It was given, and then it was lost somewhere between the first conversation and the team doing the work. This article maps where that loss usually happens during onboarding and what keeps information intact at each point.

> Customer information is rarely lost all at once. It leaks at each point where the work changes hands, changes system or changes format.
>

## Why onboarding is where information leaks most

Onboarding concentrates every condition that causes loss. The customer is new, so nobody has history to fall back on. Several teams are involved in a short period: sales, finance, operations, perhaps compliance and a technical team. The information arrives in many forms, including emails, calls, signed documents, forms and meeting notes. And the people involved are under pressure to start delivering, so recording takes second place to doing.

The result is familiar: the customer repeats themselves, internal teams chase each other and early mistakes damage a relationship that was won at some cost. The internal side of this is described in [why winning a customer creates an internal scramble](/patterns/why-does-winning-a-customer-create-an-internal-scramble/).

## Seven places customer information gets lost

### 1. In the salesperson's notes and memory

The richest information about a new customer is usually gathered during the sale: their priorities, concerns, internal politics and the reasons they chose this supplier. Much of it lives in the salesperson's head, a notebook or an email thread, not in a structured field. When the deal closes, the salesperson moves on to the next opportunity and the context stays with them.

### 2. At the conversion from prospect to customer

Many CRMs create new records when a prospect becomes a customer. Microsoft's documentation for Dynamics 365 Sales describes how qualifying a lead can create account, contact and opportunity records, with fields from the lead mapped to the new records. Only mapped fields carry across. Notes, custom fields or details recorded in places the mapping does not cover may stay behind on a closed record that nobody opens again. Every system that converts one record type into another has a version of this boundary.

### 3. In the gap between the quote and the contract

Prices, scope and special terms are often negotiated over several versions of a quote. The final agreement may include concessions made by phone or email that never reach the signed document or the system that drives billing and delivery. Commitments made to win the deal then disappear after the sale, and the customer discovers it when the first invoice or delivery is wrong.

### 4. In attachments and inboxes

Onboarding often runs on documents: registration certificates, proof of address, signed mandates, technical specifications, site details. When these arrive as email attachments to an individual, they are available only to that person. Someone else then asks the customer to send them again. The same pattern appears when the welcome form is a PDF that is completed, emailed and saved to a personal folder.

### 5. Between sales and finance

Finance needs billing contacts, purchase order requirements, payment terms and VAT details. If these are collected on a separate form, emailed to the accounts team and keyed into the accounting system by hand, every detail can be mistyped, delayed or missed. The first sign is usually an invoice rejected by the customer for lacking a purchase order number.

### 6. Between sales and delivery

The delivery team needs a different subset: what was sold, what was promised, who to contact, when work must start and what the customer is worried about. A short handover email or a brief meeting rarely transfers all of it. The cost of delays at this point is described in [the cost of delayed handoffs after a deal is won](/patterns/the-cost-of-delayed-handoffs-after-a-deal-is-won/).

### 7. In updates nobody records

Customer information changes during onboarding. Contacts change, start dates move, scope is clarified. If the update is agreed in a call and recorded nowhere, the records drift away from reality within weeks.

## Why this is also a compliance matter

For South African businesses, lost and repeated information is not only an efficiency problem. The Protection of Personal Information Act sets minimum requirements for how personal information is processed. Section 16 of the Act requires a responsible party to take reasonably practicable steps to ensure that personal information is complete, accurate, not misleading and updated where necessary. Copies of identity documents sitting in several inboxes, contact details that differ between systems and updates that never reach the record all make that obligation harder to meet. A single, maintained record of what the customer provided is easier to keep accurate and easier to secure.

## What keeps customer information intact

| Loss point | What helps |
| --- | --- |
| Salesperson's memory | A short structured handover record completed before a deal can be marked won |
| Record conversion | Check field mappings; carry notes and key fields across deliberately |
| Quote to contract | Final agreed terms recorded once, in the system that drives billing and delivery |
| Attachments | Documents stored against the customer record, not in personal inboxes |
| Sales to finance | Billing details captured once and passed to accounting without retyping |
| Sales to delivery | A handover that the receiving team accepts, with commitments listed |
| Unrecorded updates | One owner of the customer record during onboarding |

The principle behind all of these is to capture information once, at the point it is first given, in a place every team can reach, and to reuse it rather than ask again. Customers notice the difference directly: the burden of repeating information is set out in [the cost of customers repeating information to disconnected records](/impact/pain-of-customers-repeating-information-disconnected-records/). The design of the onboarding flow itself is covered in [how to design a customer onboarding workflow that scales](/insights/how-to-design-a-customer-onboarding-workflow-that-scales/).

## An illustrative example

Consider an illustrative Cape Town managed print and document services company with about 50 staff. New clients were often asked for their site addresses, billing contact and equipment requirements three times: by sales, by the accounts team and by the installation technicians.

A review of five recent onboardings traced each request back. Site details were in the salesperson's email. Billing details were on a PDF form saved in the accounts team's shared drive. Equipment requirements were in the final quote, but the technicians worked from the original quote, which had changed twice. One client had been promised installation outside business hours. That promise existed only in a phone call.

The company did not replace its systems. It added a required onboarding section to the client record in its CRM, covering sites, billing contact, purchase order requirements, agreed quote version and special commitments, and a deal could not be marked won until it was complete. Documents were attached to the client record. Finance and the installation team worked from that record. Repeat requests to new clients largely stopped within two months.

## A practical diagnostic

1. Pick three recent new customers and list every time they were asked for information they had already given.
2. For each repeat request, find where the original answer went.
3. List every commitment made during the sale and check whether the delivery team can see it.
4. Count how many places hold copies of each new customer's documents.

The answers usually show that the loss is concentrated at one or two boundaries. Fixing those first gives customers a noticeably better start and saves the internal chasing that follows every leak. The broader growth pressures on onboarding are covered in [why customer onboarding breaks as the business grows](/insights/why-customer-onboarding-breaks-as-the-business-grows/).
