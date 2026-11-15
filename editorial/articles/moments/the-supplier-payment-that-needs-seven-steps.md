---
hub: moments
record_id: STORY-ANGLE-000141
slug: the-supplier-payment-that-needs-seven-steps
title: The Supplier Payment That Needs Seven Steps
description: Paying a routine supplier invoice can involve printing, signing, scanning, emailing and loading, each step added for a reason. How to keep the protection and drop the busywork.
lead: Paying a routine supplier invoice can involve printing, signing, scanning, emailing and loading, each step added for a reason. How to keep the protection and drop the busywork.
category: Relief from Friction
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Relief from Friction
thematic_domain: relief_from_friction
human_situation: A bookkeeper prints, signs, scans, emails and chases approval for every routine supplier invoice, while the owner approves a hundred of them late at night.
human_dividend: Time: routine payments follow a short route, and scrutiny is saved for the few payments that carry real risk.
trade_off: Thresholds can be gamed by splitting invoices; digital approvals need auditor acceptance; tools may cost money; some owners value seeing every invoice.
epistemic_state: HYPOTHESISED: reasoned from fraud-prevention guidance, SARS VAT requirements and vendor documentation, not from an audit of South African payment processes; the worked example is illustrative.
sources:
  - Business Email Compromise - CSC | https://csc.gov.im/advice-guidance/business-email-compromise/
  - Value-Added Tax - South African Revenue Service | https://www.sars.gov.za/types-of-tax/value-added-tax/
  - Get started with Power Automate approvals - Power Automate | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
related:
  - The friction of signing up for something at work | /moments/the-friction-of-signing-up-for-something-at-work/
  - The Small Joy of a Form That Remembers You | /moments/the-small-joy-of-a-follow-up-form-that-remembers-you/
  - When a Simple Change Needs Three Departments | /moments/when-a-simple-change-needs-sign-off-from-three-departments/
summary: Paying a routine supplier invoice can involve printing, signing, scanning, emailing and loading, each step added for a reason. How to keep the protection and drop the busywork.
layout: plain
---
A small supplier invoice for cleaning materials arrives by email. To pay it, the bookkeeper saves the PDF, checks it against the delivery note, prints it, gets it signed by the operations manager, scans it back in, emails it to the owner for approval, waits, loads the payment on the banking platform and asks the owner to release it. Seven steps or more, for a payment that has gone to the same supplier every month for three years.

This piece looks at how routine supplier payments accumulate steps, and how to keep the controls that protect the business while removing the ones that only slow it down. It is a hypothesis drawn from fraud-prevention guidance and vendor documentation, not an audit of any particular business.

## Every step had a reason

None of these steps was added carelessly. The delivery-note check catches billing for goods not received. The signature shows the operations manager agrees. The owner's approval guards against overspending. The separate release on the banking platform means no single person can make a payment alone. Each step answered a real risk at the time it was introduced.

The problem is that steps accumulate and rarely leave. Paper signatures persist after the business moves to email. Approvals designed for large, unusual payments apply equally to small, recurring ones. And the same person may effectively approve twice, once on paper and once on the banking platform.

An illustrative example, not a real case: a Nelspruit guest-house group with four properties. The bookkeeper processes about a hundred and twenty supplier invoices a month. Every one, regardless of size or supplier, follows the same route: print, sign, scan, email, approve, load, release. The owner approves batches late at night between other work. Suppliers phone to ask about payments, and the bookkeeper cannot say when they will clear because she does not know when the owner will get to the approval email.

## The real risk is not where the steps are

Fraud guidance points to a specific weak spot: changes to supplier bank details. The Isle of Man Cyber Security Centre's guidance on [business email compromise](https://csc.gov.im/advice-guidance/business-email-compromise/) advises treating emailed requests to change bank details with caution, confirming them through established contact details, having a senior person approve any such change, and requiring two people to authorise payments. The principle is to put strong controls where the risk concentrates, rather than spreading heavy controls across every payment.

A routine invoice from a known supplier, for an expected amount, to unchanged bank details, carries little risk. A first payment to a new supplier, a change of banking details, or an unusually large amount carries much more. A seven-step process that treats them identically spends effort in the wrong place and can leave the business no safer.

Tax requirements still apply. For VAT-registered businesses, SARS sets out the rules for [value-added tax](https://www.sars.gov.za/types-of-tax/value-added-tax/), including claiming input tax, which depends on keeping valid supplier documents. Simplifying approvals must not mean losing the invoice trail.

## The human tax: time and cognitive load

The time cost is spread across several people: the bookkeeper's printing and chasing, the manager's signing, the owner's late-night approvals. The cognitive load is harder to see. The bookkeeper holds the status of dozens of invoices in her head, because no single place shows which are waiting for whom. Suppliers' calls interrupt her, and she has to reconstruct each invoice's journey to answer them.

The owner carries a load too. Approving a hundred and twenty routine invoices a month is not oversight; it is a ritual that uses up the attention needed for the few payments that truly need scrutiny. The story [why approval chains make capable people wait](/moments/why-approval-chains-make-capable-people-wait/) covers the waiting, and [the lunch break eaten by approval requests](/moments/the-lunch-break-eaten-by-approval-requests/) covers the approver's side.

## What could realistically change

A tiered approach keeps protection where it matters. Recurring invoices from established suppliers, under an agreed amount and matched to a delivery note or order, follow a short route: one check, one approval, one release. New suppliers, bank-detail changes and large amounts follow a stricter route with independent verification by phone.

Digital approvals replace print-sign-scan. Microsoft's documentation on [Power Automate approvals](https://learn.microsoft.com/en-us/power-automate/get-started-approvals) describes routing sign-off requests to approvers who can respond from email or Teams, with sequential approval where the order matters, and a recorded history of each decision. Many accounting packages offer similar approval features. The record of who approved what, and when, also supports the audit trail, as described in [why audit trails protect people, not just companies](/moments/why-audit-trails-protect-people-not-just-companies/).

## Practical next actions

1. **Draw the current route.** Write down every step a routine supplier invoice takes from arrival to payment, and who does each one.
2. **Sort invoices by risk.** Separate routine, known-supplier invoices from new suppliers, bank-detail changes and unusually large amounts.
3. **Set a threshold.** Agree an amount below which routine invoices from established suppliers need only a single approval.
4. **Strengthen the bank-detail check.** Require any change of supplier banking details to be confirmed by phone using a number already on file, and approved by a second person.
5. **Replace paper signatures.** Move approvals to email or an approval tool that records decisions, and stop printing invoices for signature.
6. **Show status in one place.** Keep a shared list of invoices with their current stage, so supplier queries can be answered without chasing.

## The business outcome

Suppliers are paid more predictably, which protects relationships and sometimes earns better terms. Fewer queries reach the bookkeeper. Scrutiny is concentrated on the payments most likely to be fraudulent or wrong, which can make the business safer as well as faster. The neighbouring story [when unsafe shortcuts are built into the finance workflow](/moments/when-unsafe-shortcuts-are-built-into-the-finance-workflow/) shows what happens when slow processes push people to bypass controls instead.

## The human dividend

The dividend is time, for the bookkeeper, the manager and the owner. The bookkeeper no longer spends afternoons printing, scanning and chasing. The owner approves a handful of significant payments with real attention instead of a hundred routine ones half-asleep. Each of them gets back hours that can go to work they consider worthwhile, or to an evening without an approval queue.

## The trade-offs

- **Thresholds can be gamed.** Large purchases may be split into smaller invoices, so review patterns occasionally.
- **Less paper means different evidence.** Auditors and accountants need to agree that digital approvals are acceptable records.
- **Tools cost money.** Approval features may require a licence or a higher accounting-software tier.
- **Some people value the ritual.** An owner may feel less in control without seeing every invoice, and that feeling deserves a conversation.

## Why it matters

Controls exist to protect the business, and good ones should be kept. But a control applied everywhere tends to be applied carelessly. Matching the effort to the risk lets people pay routine bills quickly and look hard at the few payments that deserve it, which is better for them and for the business.
