---
hub: discovery
record_id: DISC-052
slug: why-signed-agreements-end-up-scattered-and-how-to-gather-them
title: Signed agreements are scattered across inboxes and shared drives
description: Before a supplier consolidation, nobody can say where the signed contracts are. How to collect them, centralise them and keep a register of the dates and terms that matter.
lead: Before a supplier consolidation, nobody can say where the signed contracts are. How to collect them, centralise them and keep a register of the dates and terms that matter.
category: Contracts & Obligation Management
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Contracts & Obligation Management
problem_domain: Contracts & Obligation Management
problem_owner: Procurement lead, commercial manager or financial manager responsible for supplier agreements
budget_owner: Financial director or managing director
sources:
  - Electronic Communications and Transactions Act 25 of 2002 - South African Government | https://www.gov.za/documents/electronic-communications-and-transactions-act
  - Learn about retention policies & labels to retain or delete | https://learn.microsoft.com/en-us/purview/retention
  - Learn about retention for SharePoint and OneDrive | https://learn.microsoft.com/en-us/purview/retention-policies-sharepoint
related:
  - Nobody owns the obligations that start after a contract is signed | /discovery/nobody-owns-the-obligations-that-start-after-a-contract-is-signed/
  - Software usage data is unavailable before renewals | /discovery/why-software-usage-data-is-missing-when-renewals-arrive/
  - API credentials are shared across unrelated integrations | /discovery/api-credentials-shared-across-unrelated-integrations/
summary: Before a supplier consolidation, nobody can say where the signed contracts are. How to collect them, centralise them and keep a register of the dates and terms that matter.
layout: plain
---
The procurement manager is asked to consolidate three cleaning suppliers into one. To negotiate, she needs the current agreements: rates, notice periods, renewal terms and any exclusivity clauses. One signed contract is in a shared drive folder called "Contracts old". A second is an attachment in a former colleague's email. The third, she is told, was signed by the site manager and might be in the filing cabinet at the branch. Two weeks later she has two of three and is not certain either is the latest version.

This is the practical meaning of scattered agreements. The business has made commitments, but cannot reliably say what they are. This article looks at why signed agreements end up in inboxes and shared drives, and what a workable single record looks like.

## The problem in plain language

A signed agreement is only useful if you can find it, trust that it is the final version, and see its key terms without reading forty pages. When agreements sit in personal inboxes, scanned folders and shared drives with inconsistent names, none of those is true. People rely on memory, on the supplier's copy, or on the last person who dealt with the account.

The scatter happens naturally. Contracts are negotiated by email, signed electronically or on paper, and then saved wherever the signer happens to be working. Nobody decides to hide them. Nobody decides to collect them either.

## What the buyer is actually trying to solve

Someone searching for this problem usually has an event in front of them: a supplier consolidation, a dispute about terms, a renewal notice, an audit request or a due-diligence exercise. They need a complete set of current agreements quickly. Behind that is a wider aim: to know what the business has committed to, with whom, until when, and on what terms, without asking five people. They are seldom looking for contract software in the first instance. They want a reliable way to know what they have signed.

## Evidence and system mechanism

### Electronic agreements are legally recognised, which makes them easier to scatter

The [Electronic Communications and Transactions Act](https://www.gov.za/documents/electronic-communications-and-transactions-act) gives legal recognition to data messages and to electronic signatures, within the limits the Act sets. That is useful for business, since agreements can be concluded quickly by email or through signing platforms. The side effect is that the signed record is created in many places, including inboxes and signing tools, and its location depends on whoever completed the process. Legal validity does not solve the findability problem. A valid agreement nobody can locate is still a problem.

### Retention rules need a known home for the record

Microsoft's explanation of [retention policies and retention labels](https://learn.microsoft.com/en-us/purview/retention) describes two actions: retain content to prevent permanent deletion, and delete content after a defined period. It notes that managing information properly helps comply with regulations and internal policies that require retention for a minimum period, and reduces risk by deleting content you are no longer required to keep. Both actions work on content in known locations. An agreement stored in a personal mailbox may be deleted when the person leaves and the mailbox is removed, while one in a controlled library can be retained for the right period.

### Location plus rules beats location alone

The same vendor's guidance on [retention policies for SharePoint and OneDrive](https://learn.microsoft.com/en-us/purview/retention-policies-sharepoint) explains how retention can be applied to document libraries and personal storage. The practical point is not the specific product. It is that a designated library with a consistent rule is something a business can manage, audit and recover, while a scattering of private folders is not. If you use another platform, the same principle applies.

## Problem owner and why-now trigger

The day-to-day owner is often the legal or commercial manager if there is one, otherwise the financial manager or procurement lead. The budget owner is the financial director or managing director. The trigger named in this case is supplier consolidation, which forces the business to compare terms side by side and exposes how many agreements cannot be found. Related pain shows up in [contract renewals that surprise finance and operations](/discovery/why-contract-renewals-surprise-finance-and-operations/), since renewal dates are one of the first facts lost when the document is lost.

## Economic consequence

The first cost is negotiating weakness. A buyer who cannot produce the existing agreement cannot confirm notice periods, price escalators or termination rights, and the supplier's own records may become the only version of events. The second is automatic renewal. If nobody sees the notice period, the contract rolls over, as described in [supplier contracts renewing without review](/impact/supplier-contracts-renewing-without-review/).

The third is time. Staff spend days locating documents for an audit or a dispute, and legal advisers charge for the search as well as the advice. The fourth is risk: a missing agreement may contain obligations, such as exclusivity, minimum volumes or data-handling duties, that the business is unaware it must meet.

## Root cause

- **The signer saves the document.** Whoever completes the signature keeps the copy in their own mailbox or folder, and handover to a shared location is optional.
- **No standard for names or metadata.** "Final", "Final v2" and "Signed" are all in use, and the key terms are only in the text.
- **Several departments sign.** Site managers, project leads and department heads all enter into agreements, outside any central process.
- **People leave.** When mailboxes are archived, the agreements go with them and nobody knows what was there.

## Practical intervention

Build a contract register in stages. First, collect: ask each department head for the agreements they hold, search shared drives and mailboxes for common words such as "agreement", "terms and conditions" and "service level", and ask your top suppliers for their copies of signed agreements. Do not aim for perfection. Aim to find the contracts that matter most by value, risk or renewal date.

Second, centralise. Choose one library with restricted edit rights and a naming convention that includes the supplier, the type of agreement and the effective date. Third, extract: for each agreement, record parties, start date, end date, notice period, renewal mechanism, value and the person who manages the relationship. A simple table is enough. Fourth, set the rule going forward: no agreement is complete until the signed copy is in the library and the register has been updated.

### An illustrative example

Illustrative: a Bloemfontein property services company with 90 staff set out to cut its cleaning and security suppliers from seven to four. The financial manager spent a week gathering agreements, finding eleven documents across mailboxes and drives and obtaining a further three from suppliers. She recorded the end dates and notice periods in a single table and discovered that two contracts would auto-renew within six weeks. She served notice on one and used the other as leverage in the consolidation talks.

## Diagnostic questions

- Could you produce every signed supplier agreement above a given value within a day?
- Do you know which agreements renew in the next ninety days?
- Who, apart from head office, is allowed to sign?
- What happens to agreements stored in a mailbox when an employee leaves?

## What good looks like

Every agreement has a single signed copy in one controlled library, named in a standard way. A register lists the key dates and terms and has a named owner. New agreements are added at signing. When consolidation, audit or renewal arrives, the business starts from a list, not a search.

## Practical next actions

1. Ask each department head to send you every signed agreement they hold, with a deadline of two weeks.
2. Search shared drives and mailboxes for agreements and request signed copies from your twenty largest suppliers.
3. Create one restricted library with a naming standard covering supplier, agreement type and effective date.
4. Build a register recording parties, end date, notice period, renewal terms, value and relationship owner.
5. Make filing the signed copy and updating the register a condition of closing any agreement.

## Where Mellorca fits

Mellorca helps businesses bring order to the commitments they have already made. That usually means a contract and obligation audit, a register design that suits the way the company works, and a simple intake process so that new agreements land in the right place. The aim is to make renewal dates and obligations visible, as discussed in [manual deadline and renewal monitoring](/impact/manual-deadline-renewal-monitoring-late-action-cost/).

## Method note

The sources describe the legal recognition of electronic agreements and the retention features of one major platform. They do not measure how many businesses hold scattered agreements. The scenario and example are illustrative rather than a client case, and this article is not legal advice.
