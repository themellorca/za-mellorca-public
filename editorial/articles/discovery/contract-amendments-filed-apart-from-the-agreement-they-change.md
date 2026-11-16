---
hub: discovery
record_id: DISC-059
slug: contract-amendments-filed-apart-from-the-agreement-they-change
title: Contract amendments filed apart from the agreement they change
description: The original agreement is in one folder, the price addendum in an email, the scope change in a signed PDF on someone's laptop. Why nobody can say what the contract currently says, and how to keep every amendment attached.
lead: The original agreement is in one folder, the price addendum in an email, the scope change in a signed PDF on someone's laptop. Why nobody can say what the contract currently says, and how to keep every amendment attached.
category: Contracts & Obligation Management
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Contracts & Obligation Management
problem_domain: Contracts & Obligation Management
problem_owner: Legal operations lead or commercial manager responsible for the contract repository
budget_owner: General counsel, CFO or managing director
sources:
  - https://trailhead.salesforce.com/content/learn/modules/contract-amendments-with-salesforce-cpq/change-an-existing-contract | https://trailhead.salesforce.com/content/learn/modules/contract-amendments-with-salesforce-cpq/change-an-existing-contract
  - https://learn.microsoft.com/en-us/sharepoint/governance/document-set-planning | https://learn.microsoft.com/en-us/sharepoint/governance/document-set-planning
summary: The original agreement is in one folder, the price addendum in an email, the scope change in a signed PDF on someone's laptop. Why nobody can say what the contract currently says, and how to keep every amendment attached.
layout: plain
---
A Gauteng security services company has provided guarding to a property group for six years under a master agreement signed in 2020. Since then there have been four changes: an addendum adding two sites, a letter agreeing a rate increase, an emailed variation reducing night shifts at one building, and a renewal letter extending the term. When the property group's new facilities manager disputes an invoice, the company's commercial manager opens the contract folder and finds the original agreement and the renewal letter. The rate letter is in the former account manager's mailbox. The night-shift variation is found three days later as an attachment in a finance query. For most of that week nobody could say, with confidence, what the company had actually agreed to provide or at what price.

## The problem in plain language

Contracts change during their life. Prices are adjusted, sites or products are added or removed, terms are extended, service levels are revised and parties change names. Each change is usually recorded in its own document: an addendum, a variation, a side letter, a signed email or a change order. The trouble starts when those documents are stored wherever they happened to be created, rather than with the agreement they change.

When that happens, the original agreement no longer tells the truth on its own. Anyone reading it, whether a new account manager, finance, a lawyer or an auditor, sees terms that may have been replaced. To know the current position, someone has to find every amendment, put them in order and work out which clause each one overrides. That is slow when it works and dangerous when a document is missed.

## What the buyer is actually trying to solve

A legal operations lead, commercial manager or financial controller looking into this wants one answer to a simple question: what does this contract say today? They want every amendment kept with the agreement it changes, in the order it was made, with a clear record of which terms are now in force. They also want new amendments to be captured that way automatically, rather than relying on whoever signed them to file them correctly.

## Evidence and system mechanism

### Commercial systems can treat an amendment as a change to the contract record

Quoting and contract systems can model amendments as changes to a single contract, rather than as separate documents. Salesforce's training on [changing an existing contract with amendments](https://trailhead.salesforce.com/content/learn/modules/contract-amendments-with-salesforce-cpq/change-an-existing-contract) describes how amending creates an amendment quote and opportunity from the existing contract, with current subscriptions as the starting lines. Changes are entered as the new end-result quantities and take effect from a start date. Existing subscription records are not edited; new records are added for the adjustments, and cancelled items receive a terminated date. The contract only changes once the amendment is ordered and marked as contracted, and the list of subscriptions becomes a ledger of every change over time. The principle applies beyond any one product: each amendment is linked to the agreement, dated and additive, so the current position can be calculated and the history is kept.

### Document stores can group related documents as one unit

Even without a contract system, document management tools can keep related documents together. Microsoft's guidance on [planning document sets in SharePoint Server](https://learn.microsoft.com/en-us/sharepoint/governance/document-set-planning) describes document sets as a special kind of folder for managing a single work product made up of multiple documents, with shared metadata, allowed content types and a welcome page that shows the items included and key information. A legal team managing a matter is one of the examples it gives. Used for contracts, the agreement and every amendment sit in one set that shares the same contract number, counterparty and dates.

## Why this becomes urgent

A legal operations transformation is the usual trigger. When a business introduces a contract repository, a contract management tool or AI-assisted contract review, it quickly discovers that the documents it loads are incomplete: the originals are there, but the changes are scattered. Loading originals without amendments creates a system that confidently reports the wrong terms. Disputes, audits, acquisitions and a change in account manager also expose the gap. Our article on [gathering scattered signed agreements](/discovery/why-signed-agreements-end-up-scattered-and-how-to-gather-them/) covers the first step of locating originals; amendments need their own treatment because they change meaning, not just location.

## Economic consequence

The most direct cost is billing and payment on the wrong terms: rates that should have increased but did not, or reductions that were agreed but never applied. Disputes take longer and cost more when the business cannot produce the complete agreement quickly. Renewal negotiations start from outdated terms. Contract data loaded into systems, including AI tools, carries errors that look authoritative. And staff time disappears into searching mailboxes and comparing versions, a cost described in our piece on [conflicting document versions](/impact/conflicting-document-versions-rework-decision-cost/).

## Root cause

- **Amendments are created through informal channels.** Letters, emails and change orders are signed by whoever is closest to the customer or supplier.
- **No rule for where an amendment goes.** Filing is left to the person who signed.
- **No shared contract identifier.** The amendment does not reference the agreement's number, so it cannot be matched later.
- **Repositories store documents, not relationships.** Folders do not record that one document changes another.
- **No consolidated view.** Nobody maintains a summary of current terms after each change.

## What good looks like

Every agreement has a unique contract number, and every amendment cites it. Amendments are stored with their parent agreement, in sequence, in the same repository location or contract record. Each one is logged with its effective date and the clauses it changes, and a short summary of current terms is updated after every amendment so nobody has to reread the whole history. Amendments are only valid once signed through the agreed route, and the signing process files them automatically. Billing, payment and service settings are updated from the amendment, not from memory. Our article on [numbered versions for revised quotes](/discovery/why-revised-quotes-need-numbered-versions-before-they-become-orders/) applies the same thinking earlier in the sales cycle.

## Diagnostic questions

- For your ten most valuable agreements, can you produce every amendment in date order within an hour?
- Do your amendments always quote the contract number of the agreement they change?
- Who decides where a signed amendment is stored, and is it the same person every time?
- Is there a summary of current terms for each agreement, and when was it last updated?
- If you loaded your contracts into a new system tomorrow, how many amendments would be missing?

## Practical next actions

1. Assign a unique contract number to every active agreement and require it on all future amendments, letters and change orders.
2. For your most valuable agreements, gather every amendment from mailboxes and shared drives and store them with the parent agreement in date order.
3. Write a one-page summary of current terms for each of those agreements, noting which amendment set each term.
4. Set a rule that amendments are signed only through your normal signing route, which files them in the contract record.
5. Before loading contracts into any repository or AI tool, check each agreement for missing amendments.
6. Add a step after each amendment to update billing, payment or service settings that the change affects.

## Where Mellorca fits

Mellorca helps businesses assess the state of their contract records, find and attach missing amendments, and set up repositories and signing routes that keep the full agreement together. This sits within a [digital systems audit](/services/digital-systems-audit/).

## Method note

This article uses Salesforce training material on contract amendments and Microsoft guidance on SharePoint document sets as examples of how systems keep amendments linked to agreements; other tools work differently. It is not legal advice on the validity or form of amendments. The opening example is illustrative.
