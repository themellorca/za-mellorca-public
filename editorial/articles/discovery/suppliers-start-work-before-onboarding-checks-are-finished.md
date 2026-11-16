---
hub: discovery
record_id: DISC-031
slug: suppliers-start-work-before-onboarding-checks-are-finished
title: Suppliers start work before onboarding checks are finished
description: A new supplier delivers goods or starts a project while tax, bank and contract checks are still outstanding. Why onboarding falls behind purchasing as spend grows, and how to stop orders until the supplier record is approved.
lead: A new supplier delivers goods or starts a project while tax, bank and contract checks are still outstanding. Why onboarding falls behind purchasing as spend grows, and how to stop orders until the supplier record is approved.
category: Procurement & Supplier Operations
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Procurement & Supplier Operations
problem_domain: Procurement & Supplier Operations
problem_owner: Head of procurement or operations manager
budget_owner: CFO or COO
sources:
  - Block vendors - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/payables-how-block-vendors
  - Approve or reject documents in workflows - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-use-approval-workflows
  - Register a new vendor - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/purchasing-how-register-new-vendors
  - FAQs for VAT vendors - South African Revenue Service | https://www.sars.gov.za/types-of-tax/value-added-tax/faqs-for-vat-vendors/
related:
  - Why procurement requests disappear into email and chat | /discovery/why-procurement-requests-disappear-into-email/
  - Purchase approvals go to the wrong people when suppliers multiply | /discovery/purchase-approvals-go-to-the-wrong-people-when-suppliers-multiply/
  - Accepted quotes do not automatically create fulfilment work | /discovery/accepted-quotes-that-do-not-create-fulfilment-work/
summary: A new supplier delivers goods or starts a project while tax, bank and contract checks are still outstanding. Why onboarding falls behind purchasing as spend grows, and how to stop orders until the supplier record is approved.
layout: plain
---
A building contractor in Gqeberha needs scaffolding for a site that opens on Monday. On Thursday the site manager finds a new hire company, agrees a price by phone and asks them to deliver. On Friday the supplier's invoice arrives. Accounts payable cannot pay it because the supplier has no record in the finance system, no VAT number has been checked, no bank confirmation letter is on file and no one has signed the hire terms. The supplier is created in a hurry the following week, with the details copied from the invoice. Three months later an auditor asks for the onboarding evidence, and most of it does not exist.

## The problem in plain language

Supplier onboarding is meant to happen before a supplier is used. The business confirms who the supplier is, checks tax registration, verifies bank details, agrees terms and, where it matters, checks insurance, safety or data protection arrangements. In practice, the order is often reversed. Work starts, goods arrive or a service begins, and the checks follow because the invoice cannot be paid without a supplier record. By then the checks are paperwork, not protection: the business is already committed.

## What the buyer is actually trying to solve

The head of procurement or operations manager looking at this wants a simple rule that holds under pressure: no supplier can be ordered from until its record is approved. They also want onboarding fast enough that site managers and department heads stop working around it, and an exception route for genuine emergencies that is recorded and reviewed rather than improvised.

## Evidence and system mechanism

### Finance systems can block a supplier until it is ready

Most finance systems can hold a supplier record in a state that prevents use. Microsoft's Business Central guidance on [blocking vendors](https://learn.microsoft.com/en-us/dynamics365/business-central/payables-how-block-vendors) describes options that stop new payments to a vendor, or stop all transactions so that people cannot select the vendor on purchase documents. Its guide to [registering a new vendor](https://learn.microsoft.com/en-us/dynamics365/business-central/purchasing-how-register-new-vendors) describes vendor cards and templates that pre-fill standard information so new suppliers are set up consistently.

### Approval workflows can lock a record until checks are complete

Business Central's article on [approval workflows](https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-use-approval-workflows) explains that when an approval request is sent, the record moves to pending approval and stays locked for processing until all approvers approve it. Combining a blocked status for new suppliers with an approval step to release them turns onboarding from a reminder into a gate: the purchase order cannot be raised against a supplier that has not been approved.

### Some checks are quick if they are done at the right time

Not every check is slow. SARS's [FAQ for VAT vendors](https://www.sars.gov.za/types-of-tax/value-added-tax/faqs-for-vat-vendors/) points businesses to the VAT vendor search to confirm whether a person is registered for VAT. Done at onboarding, that takes minutes. Done after invoices have been captured and VAT claimed, a problem becomes a correction exercise.

## Why this becomes urgent

Spend growth is the usual trigger. As a business takes on more projects, sites or customers, it adds suppliers faster, and more of the first orders are urgent. Onboarding volume rises at the same time as pressure to skip it. Other triggers include an audit finding on supplier master data, a payment to a fraudulent bank account, a customer or regulator asking for evidence of supplier due diligence, and a new finance system that exposes how many incomplete supplier records exist.

## Economic consequence

Once goods are delivered, the business has lost its negotiating position on terms. Bank details taken from an invoice rather than verified independently increase exposure to payment fraud. Unchecked VAT numbers can lead to input tax claims that are later disallowed. Suppliers without signed terms or proof of insurance leave the business carrying risks it never agreed to. Rushed supplier records create duplicates and errors that cost accounts payable time for years. And the labour of chasing documents after the fact is higher than collecting them before the first order.

## Root cause

- **No hard gate.** New suppliers can be selected on purchase orders, or orders are placed outside the system.
- **Onboarding owned by finance, purchasing owned by operations.** The people who need suppliers are not the people who check them.
- **Slow, unclear intake.** Requirements are not published, so requesters do not know what to collect, and onboarding takes too long.
- **No emergency route.** Without a sanctioned fast path, urgent needs bypass the process entirely.
- **Checks not risk-based.** Every supplier gets the same heavy process, or none does.

## What good looks like

A requester starts onboarding through one intake form that lists what is needed for the supplier's risk level. New supplier records are created blocked. Procurement or finance completes the checks, such as tax registration, independent bank verification, signed terms and any insurance or safety documents, and approval releases the record. Purchase orders can only be raised against approved suppliers. A documented emergency route allows a limited first order with a named approver, and the record must be completed within a set number of days. Onboarding time is measured, and requirements are reduced for low-risk, low-value suppliers so the process stays quick enough to be followed.

Related reading covers [supplier bank detail changes that arrive by email](/discovery/supplier-bank-detail-changes-arrive-by-email-and-go-unchecked/), [third-party security reviews that start from scratch](/discovery/third-party-security-reviews-keep-starting-from-scratch/) and the [hidden cost of collecting supplier quotes by email and phone](/patterns/the-hidden-cost-of-collecting-supplier-quotes-by-email-and-phone/).

## Diagnostic questions

- Can a purchase order be raised against a supplier whose record has not been approved?
- Of suppliers added last quarter, how many received an order or delivered before their record was complete?
- How long does onboarding take from request to approval?
- Where did the bank details for your newest suppliers come from?
- Is there a documented emergency route, and how often is it used?

## Practical next actions

1. Check the last 20 new suppliers and record whether the first order or delivery came before onboarding was complete.
2. Set new supplier records to be created blocked, and release them only through an approval step.
3. Publish one intake form listing required documents by supplier risk level.
4. Verify tax registration and bank details from independent sources, not from the invoice.
5. Create an emergency route with a named approver, a value limit and a deadline for completing the record.
6. Measure onboarding time monthly and simplify requirements for low-risk suppliers if it is too slow.

## Where Mellorca fits

Mellorca helps procurement and finance teams build supplier intake forms, approval workflows and blocking rules in their finance systems, so onboarding becomes a gate that is quick enough to follow. This sits within [business automation and AI workflows](/services/business-automation-ai-workflows/).

## Method note

This article uses Microsoft Business Central documentation as an example of vendor blocking and approval functions, and SARS guidance on confirming VAT registration. Other finance systems offer similar controls under different names. The opening example is illustrative.
