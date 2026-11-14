---
hub: impact
record_id: CPS-363
slug: supplier-payments-without-clear-approval-trail-fraud-audit-cost
title: Who Approved That Payment? The Cost of Supplier Payments With No Trail
description: Supplier payments released without a recorded approval trail leave a business exposed to fraud, error and audit rework, and make disputes a contest of memory rather than evidence.
lead: Supplier payments released without a recorded approval trail leave a business exposed to fraud, error and audit rework, and make disputes a contest of memory rather than evidence.
category: Finance
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Finance
commercial_domain: Finance
primary_pain: Supplier payments are released without a clear, recorded approval trail
primary_cost_mechanism: Undetected fraud and payment errors, audit and review time spent reconstructing approvals, supplier disputes and late payments, and weak evidence of control
sources:
  - https://www.gov.za/documents/companies-act | https://www.gov.za/documents/companies-act
  - https://csrc.nist.gov/glossary/term/separation_of_duty | https://csrc.nist.gov/glossary/term/separation_of_duty
  - https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/fin-ops/organization-administration/overview-workflow-system | https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/fin-ops/organization-administration/overview-workflow-system
summary: Supplier payments released without a recorded approval trail leave a business exposed to fraud, error and audit rework, and make disputes a contest of memory rather than evidence.
layout: plain
---
## The payment nobody can explain

A manufacturing company in Germiston pays a supplier R184,000 on a Thursday afternoon. Three weeks later, the auditor asks who approved it. The finance manager remembers saying "go ahead" in the corridor. The bookkeeper remembers a WhatsApp message. The supplier's invoice has a signature on it, but nobody can say whether it belongs to the person who ordered the goods or the person who received them. The money may well have been owed. The business simply cannot prove it.

That is the weakness this article is about: supplier payments that are released without a clear, recorded approval trail. It is not a story about a dishonest employee. It is a story about a process that works as long as everyone is honest, remembers correctly and stays employed, and that offers no evidence when one of those assumptions fails.

## What a missing trail looks like in practice

Weak approval trails are usually ordinary rather than dramatic. They tend to look like this:

- Approval given verbally, by chat message or by forwarding an email, with nothing attached to the invoice or payment batch.
- One person who captures the supplier, captures the invoice and releases the payment, with nobody reviewing the combination.
- Changes to supplier bank details made on the strength of an email, with no call-back to a known number.
- Payment batches approved in the banking app by someone who sees only a total, not the list of invoices behind it.
- Approval limits that exist on paper but are not enforced by the system, so a large payment is split into smaller ones.
- Urgent payments that "skip the process" and are never documented afterwards.

Each of these is understandable when the team is small and everyone knows each other. Each also removes the evidence that would let the business show the payment was correct.

## The cost shows up in three places

### 1. Fraud and error that go undetected

Payments to the wrong account, duplicated invoices and altered bank details are common ways for money to leave a business. A clear approval step is where these are caught. Without it, the first person to notice is often the genuine supplier asking why they have not been paid. We cover one frequent version in [duplicate supplier invoice payments and weak controls](/impact/duplicate-supplier-invoice-payments-weak-controls-cost/).

### 2. Audit and review effort

When approval evidence is not recorded at the time, it has to be reconstructed later. A finance person spends days searching inboxes, asking colleagues to recall decisions and compiling a folder of screenshots. The cost is the time, plus the risk that the reconstruction is incomplete or inconsistent. In an audit it may also limit how much comfort the auditor can take from the controls. South African companies also carry a duty to keep accurate and complete accounting records under the [Companies Act](https://www.gov.za/documents/companies-act), and a payment with no recorded authority is a weak entry in those records. This is general information, not legal advice. The related problem of numbers that cannot be traced back to their source is explored in [untraceable reporting numbers and audit cost](/impact/untraceable-reporting-number-audit-cost/).

### 3. Disputes and strained supplier relationships

If no one can show who approved an invoice or whether goods were received, a disputed payment becomes a negotiation based on memory. Honest suppliers get paid late. Dishonest ones sometimes get paid anyway. Either outcome erodes trust.

## The principle behind a good approval trail

The standard idea in control design is separation of duties. NIST's glossary defines [separation of duty](https://csrc.nist.gov/glossary/term/separation_of_duty) as the principle that no user should be given enough privileges to misuse the system on their own. Applied to supplier payments, it means that the person who creates or changes a supplier, the person who approves an invoice and the person who releases the money should not all be the same person. In a ten-person business that may not be possible for every payment, so the discipline shifts to a second pair of eyes on the exceptions and on anything above an agreed amount.

A trail has four parts, and you can check any payment against them:

1. **Who requested it**: the order or request that created the obligation.
2. **Who confirmed receipt**: the person who can say that the goods or service arrived.
3. **Who approved payment**: a named person, within their limit, at a recorded time.
4. **Who released the money**: and against which version of the bank details.

If any of the four is missing, the payment is a candidate for review, however routine it looks.

## What approval workflow software can do

Most accounting and ERP products let you move this from habit to system. Microsoft's documentation on the [workflow system in Dynamics 365 finance and operations](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/fin-ops/organization-administration/overview-workflow-system) describes how business documents can be routed through approval steps that are configured and recorded. The same idea exists in entry-level packages, often under names such as invoice approvals or purchase order authorisation. You do not need an enterprise product to use it. You need three features: routing to a named approver, an amount limit that triggers a second approver, and a log that records who did what and when.

Approvals trapped in personal inboxes are a related weakness, because the evidence is private and unsearchable. The page on [invoice approvals in inboxes](/impact/pain-invoice-approvals-in-inboxes/) describes how that develops and why it slows payment as well as weakening control.

## Do not trade control for speed

An approval step that takes days will be bypassed, and a bypassed control is worse than none because it gives false comfort. The aim is a trail that adds minutes, not days. Two practical ways to keep it light:

- **Set tiers.** Small recurring payments to established suppliers can have a single approver. Large, new or changed-detail payments need two.
- **Give approvers a deputy.** If the only approver is on leave, the invoice waits or the rule is broken. A named deputy removes the excuse. Our article on [approval queues that block capacity](/impact/approval-queues-blocked-capacity-cost/) shows what slow approval costs the other way round.

## Supplier bank details deserve their own control

The riskiest single moment in the supplier-payment process is when bank details are added or changed. Treat it as its own approval. Verify the change through a phone number you already hold, not the one on the email asking for the change. Record who verified it and when. Keep the old details visible in the history so that the change can be reversed and reviewed. A short list of supplier changes each month, reviewed by someone who did not make them, catches most problems early.

## Practical next actions

1. **Test ten recent payments.** For each, try to find the request, proof of receipt, the approval and the release. Note which of the four is hardest to find.
2. **Write down your approval limits.** State who may approve what amount, who is their deputy, and which payments always need two people.
3. **Stop approving in chat and corridors.** Agree that an approval is only valid if it is recorded against the invoice or payment batch, in the accounting system or an attached email.
4. **Separate supplier changes from payment release.** The person who edits bank details should not also release payments, and every change should be verified by a call-back.
5. **Review the payment batch before release.** The approver should see the list of invoices, not just the total, and should compare it to the approved invoices.
6. **Switch on the workflow you already pay for.** Check whether your accounting package has approval routing and a change log that is currently disabled.

A clear trail will not stop every bad payment, but it turns the question from "do we trust everyone's memory?" into "let us look at the record."
