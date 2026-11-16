---
hub: discovery
record_id: DISC-061
slug: why-finding-one-clause-across-all-your-contracts-takes-legal-days
title: Why finding one clause across all your contracts takes legal days
description: Which agreements let the supplier assign the contract? Which customers can terminate for convenience? When questions like these mean opening hundreds of PDFs, the fix is structured clause data, not faster reading.
lead: Which agreements let the supplier assign the contract? Which customers can terminate for convenience? When questions like these mean opening hundreds of PDFs, the fix is structured clause data, not faster reading.
category: Contracts & Obligation Management
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Contracts & Obligation Management
problem_domain: Contracts & Obligation Management
problem_owner: In-house legal adviser or legal operations lead responsible for the contract repository
budget_owner: General counsel, CFO or managing director
sources:
  - Contract data extraction – Document Intelligence - Foundry Tools | https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/contract
  - Use a prebuilt model to extract information from contracts | https://learn.microsoft.com/en-us/microsoft-365/syntex/prebuilt-model-contract
related:
  - Signed agreements are scattered across inboxes and shared drives | /discovery/why-signed-agreements-end-up-scattered-and-how-to-gather-them/
  - Contract amendments filed apart from the agreement they change | /discovery/contract-amendments-filed-apart-from-the-agreement-they-change/
  - Nobody owns the obligations that start after a contract is signed | /discovery/nobody-owns-the-obligations-that-start-after-a-contract-is-signed/
summary: Which agreements let the supplier assign the contract? Which customers can terminate for convenience? When questions like these mean opening hundreds of PDFs, the fix is structured clause data, not faster reading.
layout: plain
---
A mid-sized Pretoria engineering group is preparing to sell one of its divisions. The buyer's lawyers send a due diligence list: every customer agreement with a change-of-control clause, every supplier agreement that cannot be assigned without consent, every contract with uncapped liability. The group's in-house legal adviser has around 600 active agreements, some on the group's templates, many on customers' paper, stored as scanned and signed PDFs in a shared drive. There is no list of which agreements contain which clauses. She and an external candidate attorney spend three weeks opening files one by one, and the buyer's lawyers still find two agreements they missed.

## The problem in plain language

Legal and commercial teams regularly need to answer questions across all their contracts at once. Which agreements renew automatically? Which allow the other party to terminate on short notice? Which have a liability cap, and at what amount? Which require consent before assignment? Which mention personal information, exclusivity or a particular governing law? Each question is simple, but if contracts are stored only as documents, answering it means reading every document.

Keyword search helps less than expected. Clauses use different wording on different templates. Scanned agreements may not be searchable at all. A search for the word termination returns nearly every contract. So the work falls to people reading, and the hours grow with the number of agreements.

## What the buyer is actually trying to solve

A legal adviser, legal operations lead or commercial manager in this position wants to answer clause questions in hours rather than weeks. They want the important clauses in each agreement identified and recorded once, in a consistent form, so they can be filtered and reported. They want new agreements captured the same way when they are signed. And they want confidence that the answer is complete, not just the agreements someone remembered to check.

## Evidence and system mechanism

### Document processing tools can extract key contract data, within limits

Extraction technology is now part of mainstream platforms. Microsoft's [Document Intelligence contract model](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/contract) uses optical character recognition to analyse contracts in phone-captured, scanned or digital form and returns key fields such as parties, jurisdictions, contract ID and title as structured data. Microsoft notes that contract analysis has historically been manual and very time consuming, and that accurate extraction of key data is typically the first step in contract automation. The model currently supports English-language documents.

Microsoft's [prebuilt contracts model for SharePoint](https://learn.microsoft.com/en-us/microsoft-365/syntex/prebuilt-model-contract) applies the same idea inside a document library: it extracts information such as client name and address, contract duration and renewal date, and writes the selected values into library columns. Multiple values are allowed for a field, so a contract with several parties or jurisdictions can be captured. It currently works only on PDF and image files.

### Standard fields are the start, not the answer

These prebuilt models focus on header data: who, when, how long, which jurisdiction. Most clause questions, such as change of control, assignment, liability caps or termination for convenience, need fields the business defines itself, extracted either by custom models or by people working from a clear checklist, and checked by someone qualified. The technology makes the extraction faster; it does not decide which clauses matter or confirm that the reading is right.

## Why this becomes urgent

Contract volume growth is the steady trigger: every year adds agreements, and the cost of answering a cross-contract question rises with it. Sudden triggers make it acute: due diligence for a sale or acquisition, a new regulation that requires a review of certain clauses, a supplier failure that raises the question of which contracts depend on it, or a dispute where the business needs to know whether the same clause appears elsewhere. Our article on [questionnaires that pull specialists off their work](/discovery/why-customer-security-questionnaires-keep-pulling-specialists-off-their-work/) describes a similar pattern of repeated expert searching.

## Economic consequence

The cost shows up as legal hours, external counsel fees and delay. Due diligence that takes weeks can slow a transaction or reduce its value. Clause reviews for regulatory change are done partially because a full review is too expensive. Risk is missed: an uncapped liability or an automatic renewal sits in an agreement nobody checked. Commercial teams wait for legal answers and make decisions without them. Specialist time spent searching is time not spent advising, a cost described more broadly in our piece on [time lost searching for files](/impact/employees-searching-for-files-lost-productivity-cost/).

## Root cause

- **Contracts are stored as documents, not data.** Clauses can only be found by reading.
- **No agreed list of clauses that matter.** Nobody has defined which terms the business needs to report on.
- **Mixed templates and counterparty paper.** The same clause is worded many ways.
- **Scanned agreements are not searchable.** Older or wet-signed contracts are images.
- **Capture happens per question.** Each review starts from scratch and its findings are not kept.

## What good looks like

The business has a short, agreed list of clause types it needs to know about across its contracts, usually ten to twenty, such as auto-renewal, notice period, termination for convenience, change of control, assignment, liability cap, exclusivity, governing law and personal information. Every active agreement has these recorded as fields alongside the document, with the clause text and page reference. New agreements are captured at signature; the backlog is worked through in order of value, using extraction tools to produce a first reading and a qualified reviewer to confirm it. Clause questions become filters and reports. When a review is done for a specific purpose, its findings are added to the record so the next question starts from more data, not less. Our article on [why AI tools fail without authoritative data](/discovery/why-ai-tools-fail-without-authoritative-data/) explains why the confirmed record, not the raw extraction, is what should be trusted.

## Diagnostic questions

- How long would it take to list every agreement with a change-of-control clause?
- Has your business agreed which clause types it needs to be able to report on?
- How many of your active agreements are scanned images that cannot be searched?
- When legal last reviewed a clause across many contracts, were the results kept in a reusable form?
- Who checks the output of any extraction tool before it is relied on?

## Practical next actions

1. Agree a list of ten to twenty clause types your business needs to report on, with legal and commercial input.
2. Run text recognition on scanned agreements so every active contract is at least searchable.
3. Pilot an extraction tool on fifty agreements, and have a qualified reviewer check each extracted clause against the document.
4. Record confirmed clauses as fields with clause text and page reference, starting with your highest-value agreements.
5. Add clause capture to the signing process so new agreements arrive with their fields complete.
6. Keep the results of every future clause review in the same record so each question improves the data.

## Where Mellorca fits

Mellorca helps legal and commercial teams set up clause extraction and review workflows, configure repository fields and connect contract data to the people who need it. This sits within [business automation and AI workflows](/services/business-automation-ai-workflows/). For the broader problem of documents that exist but cannot be found, see [why nobody can find the document they know exists](/patterns/why-can-nobody-find-the-document-they-know-exists/).

## Method note

This article uses Microsoft Document Intelligence and SharePoint documentation as examples of contract extraction capabilities; other tools offer similar functions. Extraction output should always be reviewed by a qualified person before it is relied on for legal decisions. This is not legal advice. The opening example is illustrative.
