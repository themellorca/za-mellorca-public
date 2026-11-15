---
hub: discovery
record_id: DISC-054
slug: termination-notice-windows-missed-because-dates-live-in-spreadsheets
title: Termination notice windows missed because dates live in spreadsheets
description: The renewal date is in a spreadsheet, but the last day to give notice is not. Why notice windows are missed, what the Consumer Protection Act does and does not cover, and how to turn dates into owned tasks.
lead: The renewal date is in a spreadsheet, but the last day to give notice is not. Why notice windows are missed, what the Consumer Protection Act does and does not cover, and how to turn dates into owned tasks.
category: Contracts & Obligation Management
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Contracts & Obligation Management
problem_domain: Contracts & Obligation Management
problem_owner: Legal operations lead or commercial manager responsible for the contract register
budget_owner: Financial director, CFO or general counsel
sources:
  - https://www.acts.co.za/consumer-protection/14_expiry_and_renewal_of_fixed_term_agreements | https://www.acts.co.za/consumer-protection/14_expiry_and_renewal_of_fixed_term_agreements
  - https://www.servicenow.com/docs/r/etYGEBUVr6RQYKLnfpRuhw/WfLgh1FnMaEBy1lNoslO2w | https://www.servicenow.com/docs/r/etYGEBUVr6RQYKLnfpRuhw/WfLgh1FnMaEBy1lNoslO2w
  - https://learn.microsoft.com/en-us/dynamics365/supply-chain/procurement/purchase-agreements | https://learn.microsoft.com/en-us/dynamics365/supply-chain/procurement/purchase-agreements
summary: The renewal date is in a spreadsheet, but the last day to give notice is not. Why notice windows are missed, what the Consumer Protection Act does and does not cover, and how to turn dates into owned tasks.
layout: plain
---
A facilities manager opens the shared contracts spreadsheet in October and sees that the security services agreement expires at the end of December. She plans to put it out to tender. When she calls the supplier, she is told the contract renewed automatically for another two years: the agreement required written notice of termination ninety days before expiry, and that window closed at the end of September. The expiry date was in the spreadsheet. The notice deadline, which was the date that actually mattered, was not.

## The problem in plain language

Many businesses track contract end dates in a spreadsheet or calendar. That feels like control, but an end date is rarely the date on which a decision must be made. Most commercial agreements require notice some time before expiry, and some renew automatically if notice is not given. The decision date sits weeks or months earlier than the date in the column, and it is calculated differently for each contract. When the calculation lives in someone's head, or is never done at all, the business discovers the deadline only after it has passed.

Spreadsheets add further weaknesses. Rows are added inconsistently, amendments that change the term are not captured, nobody is alerted when a date approaches, and the person who maintained the sheet may have moved on.

## What the buyer is actually trying to solve

The commercial manager, legal operations lead or financial director looking into this usually wants three things: a reliable list of every agreement with its real notice deadline, a named person who will be prompted in time to decide, and evidence that the decision was made. Often the search starts after an unwanted renewal, or during a broader effort to move legal and contract administration out of email and shared drives.

## Evidence and system mechanism

### The law sets notice windows for some agreements, not all

Section 14 of the Consumer Protection Act, published on [Acts Online](https://www.acts.co.za/consumer-protection/14_expiry_and_renewal_of_fixed_term_agreements), governs the expiry and renewal of fixed-term agreements. It allows a consumer to cancel at expiry without penalty, or at any other time on 20 business days' written or recorded notice. It requires the supplier to notify the consumer between 80 and 40 business days before expiry of the impending end of the term and the consumer's options, and it provides that the agreement continues month to month on expiry unless the consumer directs otherwise or agrees to a new fixed term.

Two points matter for businesses. First, section 14 does not apply to transactions between juristic persons, so most business-to-business agreements depend entirely on their own notice clauses. A company that assumes the supplier will remind it, or that automatic renewal is limited by law, may be wrong. Second, if your business sells fixed-term agreements to individual consumers, you have your own obligation to send notices inside the 80-to-40 business-day window, which needs exactly the same reliable date tracking.

### Contract systems treat dates as triggers

Contract and procurement platforms handle this by storing dates as structured fields and attaching rules to them. ServiceNow's documentation on [reminder notifications for expiring contracts](https://www.servicenow.com/docs/r/etYGEBUVr6RQYKLnfpRuhw/WfLgh1FnMaEBy1lNoslO2w) describes condition checks that send reminders at set intervals before expiry, such as 30, 15 and 7 days, and allows administrators to add their own conditions. Microsoft's [purchase agreements documentation](https://learn.microsoft.com/en-us/dynamics365/supply-chain/procurement/purchase-agreements) describes agreements with a defined validity period, effective dates that purchases must fall within, and primary and secondary responsible workers. The common pattern is that the date is a field, the owner is a field, and the reminder is a rule. None of that is true of a spreadsheet row.

## Why this becomes urgent

Legal operations transformation is the usual trigger. When a business moves contracts from shared drives to a proper repository, it discovers how many agreements have no recorded notice period, no owner and no amendment history. Other triggers are an acquisition, where the buyer needs to know which supplier contracts can be exited, a cost-reduction drive that stalls because key agreements have just renewed, and a new financial director who asks for a list of commitments and their exit dates.

## Economic consequence

A missed notice window locks the business into another term at the old price, or at an escalated price the supplier was entitled to apply. It removes negotiating leverage: a supplier who knows the contract has renewed has little reason to improve terms. It can delay migrations, because a replacement system cannot go live while the old licence still has a year to run. In consumer-facing businesses, failure to send the section 14 notice correctly creates compliance risk and customer disputes. The search time spent reconstructing terms during every renewal is a smaller but recurring cost. Our analysis of [manual deadline monitoring](/impact/manual-deadline-renewal-monitoring-late-action-cost/) looks at how late action compounds.

## Root cause

- **The wrong date is tracked.** Expiry dates are recorded; notice deadlines, which require calculation from the clause, are not.
- **Contracts are stored as documents, not records.** The terms that drive action sit inside PDFs rather than in fields that a system can read.
- **No owner per agreement.** The person who negotiated the contract is not necessarily the one who will decide whether to renew it, and nobody is formally assigned.
- **Amendments are not reconciled.** An addendum that extended the term or changed the notice period is filed but never reflected in the tracker.
- **No alerting.** A spreadsheet does not tell anyone that a date is approaching.

## What good looks like

Every active agreement is a record with structured fields: start date, expiry date, renewal type, notice period, notice method required by the clause, calculated notice deadline, business owner and budget owner. The notice deadline is calculated from the clause and checked by a second person when the contract is captured. Reminders go to the owner well before the deadline, for example 120, 90 and 60 days before for significant agreements, with escalation to a manager if the owner has not recorded a decision. The decision itself, whether to renew, renegotiate or terminate, is recorded with the date notice was sent and proof of delivery. Amendments update the record when they are signed.

This ties closely to two earlier problems we have written about: [why contract renewals surprise finance and operations](/discovery/why-contract-renewals-surprise-finance-and-operations/) and [how to gather scattered signed agreements](/discovery/why-signed-agreements-end-up-scattered-and-how-to-gather-them/). Collecting the contracts is the first step; capturing the notice deadline is what turns the collection into control.

## Diagnostic questions

- For your ten largest supplier agreements, can you state the last date on which notice can be given, without opening the contract?
- Which of those agreements renew automatically?
- Who receives a reminder before each deadline, and how far in advance?
- If your business sells fixed-term agreements to consumers, how do you prove the section 14 notice was sent within the required window?
- When an amendment is signed, who updates the tracker?

## Practical next actions

1. List every active agreement with a value or risk above an agreed threshold, and for each one record the notice clause wording, not just the expiry date.
2. Calculate the notice deadline for each agreement, have a second person check the calculation, and record which agreements renew automatically.
3. Assign a business owner and a budget owner to each agreement, and confirm with them that they accept the responsibility.
4. Move the records into a system that can send reminders, whether a contract repository, a procurement module or a structured list with automated alerts, and set reminders well before each notice deadline.
5. Require owners to record a decision and the date notice was sent, and escalate when no decision is recorded by an agreed date.
6. If you sell fixed-term consumer agreements, set up the 80-to-40 business-day notices as an automated, logged step and test it on a sample of contracts.

## Where Mellorca fits

Mellorca helps businesses turn contract documents into records with owners and dates, connect them to procurement and finance, and automate the reminders and escalations. That work usually sits within [business automation and AI workflows](/services/business-automation-ai-workflows/), starting with a review of the existing agreements. For obligations that begin after signature, such as service reviews and reporting duties, see [obligations nobody owns after a contract is signed](/discovery/nobody-owns-the-obligations-that-start-after-a-contract-is-signed/).

## Method note

The summary of section 14 is drawn from the published text of the Consumer Protection Act and is not legal advice. Notice periods and renewal terms in business-to-business agreements depend on each contract; confirm interpretations with your legal adviser. The opening example is illustrative.
