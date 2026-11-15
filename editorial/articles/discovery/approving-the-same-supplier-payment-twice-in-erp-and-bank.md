---
hub: discovery
record_id: DISC-498
slug: approving-the-same-supplier-payment-twice-in-erp-and-bank
title: Paying suppliers means approving the same payment twice, in ERP and bank
description: A payment run is approved in the ERP, then approved again line by line on the banking platform. Why double approval adds delay without adding much control, and how to design one meaningful approval chain.
lead: A payment run is approved in the ERP, then approved again line by line on the banking platform. Why double approval adds delay without adding much control, and how to design one meaningful approval chain.
category: Payments, Expenses & Spend Operations
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Payments, Expenses & Spend Operations
problem_domain: Payments, Expenses & Spend Operations
problem_owner: Accounts payable manager or finance operations lead
budget_owner: CFO or financial director
sources:
  - https://learn.microsoft.com/en-us/dynamics365/business-central/payables-make-payments | https://learn.microsoft.com/en-us/dynamics365/business-central/payables-make-payments
  - https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-use-approval-workflows | https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-use-approval-workflows
  - https://csrc.nist.gov/glossary/term/separation_of_duty | https://csrc.nist.gov/glossary/term/separation_of_duty
summary: A payment run is approved in the ERP, then approved again line by line on the banking platform. Why double approval adds delay without adding much control, and how to design one meaningful approval chain.
layout: plain
---
Every Thursday, the financial director of a construction supplier approves the weekly payment run in the ERP: 140 supplier payments, each linked to an approved invoice. The file is exported and uploaded to the bank. Then the bank platform asks for approval again, and the same director, with a second signatory, approves the batch on the banking portal using a token. If either director is away, payments wait. If the file fails to upload, someone recaptures payments directly on the bank platform, and those are approved only there. Everyone believes the double approval makes payments safer. Nobody has checked what each approval actually verifies.

## The problem in plain language

Many businesses approve supplier payments in two places: once in the finance system, where invoices and payment proposals are reviewed, and again on the banking platform, where payments are released. In principle the two approvals check different things. In practice they are often done by the same people, at the same time, looking at the same totals, and the second approval becomes a formality. Meanwhile the extra step adds delay, creates a dependency on token holders, and encourages workarounds when either system is unavailable.

## What the buyer is actually trying to solve

The financial director or accounts payable manager looking into this wants a payment approval process that is quick, does not depend on one or two people being available, and genuinely protects against error and fraud. They want to know what each approval should check, where approval should sit, and how to stop payments being changed between the ERP and the bank.

## Evidence and system mechanism

### The payment journey crosses two systems

Microsoft's [overview of paying vendors in Business Central](https://learn.microsoft.com/en-us/dynamics365/business-central/payables-make-payments) describes the typical flow: payment lines are prepared in a payment journal, often using a suggest-payments function, the batch total is reviewed, payments are posted, and they are exported to a bank file to upload to the bank for processing. Afterwards, payments are applied to open entries. It also mentions positive pay files, which send the bank details of validated payments so that only those clear. The handover between the ERP and the bank is the point where payments can be altered or added, and where approval responsibilities often overlap.

### The ERP can enforce approval on the payment itself

Microsoft's documentation on [approval workflows](https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-use-approval-workflows) notes that core workflows exist for payment journals as well as purchase documents, that a record pending approval stays locked until approved, and that approvals can be delegated to substitutes when approvers are unavailable. If approval of the payment proposal is enforced in the ERP, the bank approval can be designed to check something else, rather than repeat it.

### Separation of duties is the real goal

NIST defines [separation of duty](https://csrc.nist.gov/glossary/term/separation_of_duty) as the principle that no user should have enough privileges to misuse a system alone, including the two-person rule where a second authorised user completes an operation started by the first. Two approvals by the same person do not achieve separation. One approval each by two people with different responsibilities does.

## Why this becomes urgent

A new payment platform is a common trigger. Moving to a new bank, a new business banking portal or a host-to-host connection forces the business to decide again who approves what, and often exposes that the existing double approval was never designed. Growth is another trigger: as payment volumes rise, the time spent approving, and the cost of delays when approvers are unavailable, grows with them.

## Economic consequence

Double approval costs senior time every payment cycle. When approvers are travelling or on leave, payments slip, suppliers chase, early-payment discounts are lost and relationships suffer, a pattern covered in [one missing approval holding up the payment run](/patterns/when-one-missing-approval-holds-up-the-whole-payment-run/). Worse, the control benefit may be small: if the bank approval only confirms a batch total, it will not catch a changed bank account or an added payment in the file. And when the upload fails and payments are recaptured on the bank platform, they bypass the ERP approval entirely.

## Root cause

- **Approvals were added, not designed.** The bank required signatories, the ERP added a workflow, and nobody aligned them.
- **Each approval checks the same thing.** Both look at amounts and totals; neither checks that the bank file matches what was approved.
- **Same people in both roles.** The director who approves in the ERP is also the bank signatory, so there is no real second view.
- **The file can change in transit.** Exported bank files may be editable before upload.
- **Bank capture is still allowed.** Payments can be created directly on the bank platform, outside the ERP.

## What good looks like

The business defines one approval chain with distinct checks at each step. In the ERP, budget holders have already approved invoices, and an accounts payable lead prepares the payment proposal. A finance manager approves the proposal in the ERP, checking which suppliers are paid, amounts and any changed bank details flagged by the system. The bank file is generated and transferred without manual editing, ideally through a direct connection, and the bank release is done by a different authorised person whose check is that the file total and count match the approved proposal. Payments cannot be created on the bank platform except through a separate, rarely used emergency route with its own approval. Delegation and alternates are set up in both systems. The result is fewer approval steps for each person and more actual control. Our article on [why approval processes become bottlenecks](/insights/why-approval-processes-become-bottlenecks/) discusses the design principles.

## Diagnostic questions

- What does each approval in your payment process check that the other does not?
- Are the ERP approver and the bank releaser ever the same person for the same batch?
- Can the bank file be edited between export and upload?
- Can payments be created directly on the banking platform, and how often does it happen?
- How often were payment runs delayed last quarter because an approver or token holder was unavailable?

## Practical next actions

1. Map your current payment process from invoice approval to bank release, recording who approves at each step and what they check.
2. Remove duplicate checks and assign each approval a distinct purpose, such as proposal content in the ERP and file integrity at the bank.
3. Ensure the ERP approver and the bank releaser are different people for each batch, with alternates set up in both systems.
4. Protect the bank file between export and upload, preferably with a direct connection or a locked transfer process.
5. Restrict direct payment capture on the banking platform to a documented emergency route with its own approval and review.
6. Measure approval delays and out-of-process payments for three months after the change to confirm the process is faster and tighter.

## Where Mellorca fits

Mellorca helps finance teams redesign payment approval chains, connect ERP and bank more securely and set up delegation and exception routes. This sits within [digital operations improvement](/services/digital-operations-improvement/). For the human cost of long approval chains, see [why approval chains make capable people wait](/moments/why-approval-chains-make-capable-people-wait/).

## Method note

This article uses Microsoft Business Central documentation as an example of ERP payment and approval functions and NIST's definition of separation of duty. Your bank's approval and release options will differ. The opening example is illustrative.
