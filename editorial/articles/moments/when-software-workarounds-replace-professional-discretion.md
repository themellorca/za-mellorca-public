---
hub: moments
record_id: STORY-ANGLE-000048
slug: when-software-workarounds-replace-professional-discretion
title: When software workarounds replace professional discretion
description: A bookkeeper knows the right treatment, but the system as configured will not record it, so judgement ends up in a suspense account. How to restore it.
lead: An experienced bookkeeper knows the right treatment, but the accounting system as configured will not record it, so the judgement ends up in a suspense account and a spreadsheet. What that takes from finance professionals, and how to bring discretion back inside the system.
category: Human Agency
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Human Agency
thematic_domain: human_agency
human_situation: An experienced bookkeeper knows the correct treatment for a partial credit or unclear payment, but the accounting system as configured will not record it cleanly, so the decision is held in a suspense account and a personal spreadsheet.
human_dividend: Autonomy: professional judgement can be exercised and recorded properly inside the system, making the professional's sound decisions visible rather than something to be defended.
trade_off: Tax and audit rules legitimately limit discretion; wider correction permissions increase risk; reconfiguration costs time and money; some people value being the one who knows the workarounds; some workarounds reflect unclear policy rather than system faults.
epistemic_state: HYPOTHESISED: the autonomy and dignity effects of finance workarounds are inferred from the mechanism and vendor and SARS documentation, not from a South African study of finance staff.
sources:
  - Tax Invoices - South African Revenue Service | https://www.sars.gov.za/businesses-and-employers/government/tax-invoices/
  - Correct or cancel a posted sales invoice - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-correct-cancel-sales-invoice
  - Undo a posting using a reversing entry - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/finance-how-reverse-journal-posting
related:
  - When the system decides what you can do today | /moments/when-the-system-decides-what-you-can-do-today/
  - Why good judgement gets buried under process | /moments/why-good-judgement-gets-buried-under-process/
  - The owner who can't decide without the spreadsheet wizard | /moments/the-owner-who-cant-decide-without-the-spreadsheet-wizard/
summary: An experienced bookkeeper knows the right treatment, but the accounting system as configured will not record it, so the judgement ends up in a suspense account and a spreadsheet. What that takes from finance professionals, and how to bring discretion back inside the system.
layout: plain
---
Picture an experienced bookkeeper looking at a customer account that is slightly wrong. A customer was invoiced for a full delivery, accepted part of it, and has paid for what they kept. The right treatment is clear to her: a partial credit against the original invoice, with a note explaining why. The accounting package, as it has been set up, will not let her do it the way she knows it should be done.

So she does what many experienced finance people do. She finds a way round. A small adjustment to a suspense account, a note in a spreadsheet, a reminder to tidy it up at month-end. The books balance. The judgement was sound. But it now lives outside the system, in a workaround only she understands.

This piece is about that moment, repeated many times: when software, or the way it has been configured, leaves professionals unable to record what their judgement says is right, and they turn to workarounds instead. It looks at what that takes from them, and what would let discretion live inside the system rather than around it.

## Why systems constrain finance work

Accounting systems are deliberately strict, and much of that strictness is valuable. The South African Revenue Service, for example, sets out the particulars a valid tax invoice must contain, from supplier and recipient details to a serial number, description, quantity, value and VAT, and requires it within 21 days of the supply. A business cannot simply edit an issued invoice to suit a later conversation.

Software reflects those requirements. Microsoft's Business Central documentation explains that an unpaid, unshipped [posted sales invoice](https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-correct-cancel-sales-invoice) can be cancelled or corrected, which automatically creates a corrective credit memo, but that once an invoice is partially or fully paid it cannot be corrected from the invoice itself, and a credit memo must be created manually. Similarly, its documentation on reversing journal postings explains that an entry can be reversed only once, and only if it originated from a general journal.

These rules protect the audit trail. Every correction leaves a visible, traceable record. That is a good thing. The difficulty arises when the legitimate correction a professional needs to make is not one the system, as configured, supports cleanly, or when doing it properly requires permissions, steps or knowledge that the person does not have.

## An illustrative finance office

Consider an illustrative example: the finance team of a Durban distribution business with fifty staff, using an accounting package set up some years ago by a consultant who has since moved on. This is a hypothetical scenario.

The bookkeeper regularly meets situations the setup does not handle well: partial credits, customers who pay several invoices with one unclear amount, supplier rebates that arrive months later. The proper treatment in each case is clear to her. But some require a role she has not been given, others a workflow nobody configured. So she uses a suspense account, keeps a spreadsheet of explanations, and clears items when she can.

At year-end, the auditors ask about the suspense account. She can explain every item, from memory and from her spreadsheet. But she spends days doing so, and the conversation feels, to some people in her position, less like professional discussion and more like defending herself. That last point is an interpretation, not a finding about any particular person.

Mellorca has described the operational version of this in [why teams keep building manual workarounds](/patterns/why-teams-keep-building-manual-workarounds/), and the warning it carries in [why repeated workarounds are a warning sign](/insights/why-repeated-workarounds-are-a-warning-sign/).

## The human tax: autonomy and dignity

**Autonomy** is the first tax. Professional discretion is the ability to apply judgement to a situation and act on it. When the system will not accept that judgement, the professional can still decide, but cannot carry out the decision properly. The software has, in effect, taken part of the decision.

**Dignity** is the second, and needs careful handling. A skilled person whose sound decisions must be recorded as workarounds may find their competence harder to see. To an outsider, the suspense account looks like a mess rather than a set of correct decisions in the wrong place. The person can end up explaining and justifying work that was right all along. We cannot say how any individual feels about that, and some people take it in their stride. But the risk is real enough to name.

There is also a dependency cost. When judgement lives in workarounds, it lives in one person. If the bookkeeper leaves, the explanations leave with her. Mellorca's piece on [the skilled professional reduced to copy and paste](/moments/the-skilled-professional-reduced-to-copy-and-paste/) looks at a related loss: expertise spent on mechanical work rather than judgement.

## What could realistically change

1. **Collect the workarounds.** Ask finance staff to list every regular workaround and what it is for. Each one is a record of a situation the system does not handle. The list is often short and revealing.
2. **Configure for the real cases.** Many workarounds exist because a feature was never switched on or set up: credit memos, payment allocation rules, rebate handling. A review of the configuration against the workaround list can remove several at once.
3. **Give the right role to the right person.** If a correction requires a permission the bookkeeper lacks, decide whether she should have it, with logging, rather than routing every case to someone else.
4. **Record the reason inside the system.** Most accounting packages allow notes or descriptions on transactions. A correction with its reason attached is far easier to audit than a correction explained in a separate spreadsheet.
5. **Accept some exceptions deliberately.** Not every situation justifies a system change. A short, documented procedure for rare cases is better than an undocumented workaround.

Mellorca's pattern on [when manual exceptions become the normal process](/patterns/when-manual-exceptions-become-the-normal-process/) covers how to tell when an exception has become routine enough to design for.

## What changes first, and the business outcome

The first change is that fewer decisions leave the system. Partial credits are recorded as credits, with reasons. Payment allocations follow agreed rules. The suspense account shrinks.

For the business, the books become easier to audit, less dependent on one person's memory, and more reliable for decisions. Year-end takes less time, and the risk of an unexplained balance falls.

## The human dividend

The dividend is **autonomy**: the ability to exercise professional judgement and record it properly, in the system designed to hold it. With that comes a measure of dignity, as the professional's work becomes visible as sound decisions rather than as clutter to be explained.

There is also relief from being the only person who understands the books. That can feel like security, but it also ties the person to the job in ways they may not have chosen.

## The trade-offs

- **Some strictness is necessary.** Tax and audit requirements mean not every judgement can be recorded however the professional prefers. Discretion operates within those rules.
- **Wider permissions carry risk.** Giving more correction rights to more people can increase the scope for error or fraud. Logging and review reduce this.
- **Reconfiguration has a cost.** Changing an accounting setup takes time and sometimes outside help, and can disrupt work while it happens.
- **Workarounds can carry status.** Being the person who knows how things really work can be valued. Making the knowledge shared can feel like a loss, even when it reduces pressure.
- **Not every workaround is a system fault.** Some reflect unclear policy, such as how rebates should be treated, which needs a management decision before any configuration.

## Why it matters

Software in finance exists to hold decisions faithfully. When it cannot hold the decisions skilled people actually make, those people carry the gap themselves, in spreadsheets, memory and explanations. Closing that gap returns more than a cleaner ledger. It lets professionals use their judgement openly, and be seen doing so.
