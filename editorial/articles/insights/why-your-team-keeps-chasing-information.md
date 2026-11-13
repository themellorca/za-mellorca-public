---
hub: insights
record_id: INS-013
slug: why-your-team-keeps-chasing-information
title: Why your team keeps chasing information
description: Asking a colleague is often the fastest way to find a price or what a client agreed. That is a design problem, not a habit. How to fix each kind at source.
lead: Asking a colleague is often the fastest reliable way to find a price, an address or what was agreed with a client. That is a design problem, not a habit problem. How to tell the four kinds of information people chase apart, and fix each at its source.
category: Digital Operations
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Digital Operations
sources:
  - https://www.microsoft.com/en-us/worklab/work-trend-index/will-ai-fix-work | https://www.microsoft.com/en-us/worklab/work-trend-index/will-ai-fix-work
  - Introduction to SharePoint information architecture - SharePoint in Microsoft 365 | https://learn.microsoft.com/en-us/sharepoint/information-architecture-modern-experience
  - Asset management | https://www.ncsc.gov.uk/collection/10-steps/asset-management
related:
  - Why CRM adoption problems are often workflow problems | /insights/why-crm-adoption-problems-are-often-workflow-problems/
  - How to design a handoff that cannot depend on memory | /insights/how-to-design-a-handoff-that-cannot-depend-on-memory/
  - How to design workflows that can survive staff changes | /insights/how-to-design-workflows-that-can-survive-staff-changes/
summary: Asking a colleague is often the fastest reliable way to find a price, an address or what was agreed with a client. That is a design problem, not a habit problem. How to tell the four kinds of information people chase apart, and fix each at its source.
layout: plain
---
"Does anyone have the latest price list?" "Which address do we use for this client's deliveries?" "Did we agree to waive the call-out fee?" "Where's the signed contract?" In many businesses, a large part of the working day is spent asking colleagues for information that should already be at hand. Each question takes a minute or two. Multiplied across a team and a year, it becomes one of the largest invisible costs in the operation.

It is tempting to treat this as a habit problem: people should check before they ask, or file things properly. Sometimes that is true. More often, people chase information because asking a colleague is genuinely the fastest reliable way to get it. That is a design problem, not a behaviour problem.

## The scale of the problem

Microsoft's 2023 [Work Trend Index](https://www.microsoft.com/en-us/worklab/work-trend-index/will-ai-fix-work), based on a survey of 31,000 full-time workers in 31 countries, found that 62% of respondents said they struggle with too much time spent searching for information during the workday. The same report found that 68% did not have enough uninterrupted focus time. These are self-reported figures and they do not tell you what your own team loses, but they confirm that the experience is widespread, not peculiar to your business.

The cost is not only the searcher's time. Every question interrupts someone else, and the people interrupted most are usually the most experienced, because they are the ones who know where things are.

## Not all chasing is the same

The most useful step is to recognise that people chase several different kinds of information, and each has a different cause and a different fix. Lumping them together as "communication problems" leads to generic answers, such as another meeting or another chat channel, that rarely help.

### Reference information

Prices, policies, templates, product specifications, standard terms, approved suppliers. This information changes occasionally and applies to everyone. People chase it when there is no single, current, findable copy, so they ask the person most likely to have the latest version.

**Typical fix:** one authoritative location per type of reference information, a named owner who keeps it current, and old versions removed or clearly marked as superseded.

### Record information

Customer details, contacts, delivery addresses, account terms, supplier bank details, asset serial numbers. People chase it when the same record exists in several places with different values, or when part of it is held only in someone's inbox.

**Typical fix:** decide which system holds the authoritative version of each record and make it the place everyone reads from and updates. The pattern of the [same customer existing differently in three systems](/patterns/why-does-one-customer-exist-differently-in-three-systems/) is a common source of this kind of chasing.

### Status information

Where a job, order, approval or case stands right now. This is the most frequent kind of chasing in most businesses, and it has its own causes: undefined states, unrecorded waiting and silent changes of ownership. It is covered in detail in [why chasing people for updates is a systems failure](/insights/why-chasing-people-for-updates-is-a-systems-failure/).

### Context and decisions

What was agreed with a client, why an exception was granted, what was promised on a call. This information is usually created in conversation and never recorded anywhere shared. People chase it by asking whoever was in the room, and when that person leaves, it is lost.

**Typical fix:** agree where decisions and commitments about a customer or job are recorded, and make capturing them part of closing the conversation, not an optional extra. Business knowledge that [lives in inbox history](/patterns/when-business-knowledge-lives-in-inbox-history/) is the classic symptom.

## Why the information is hard to find

Across all four kinds, the underlying causes tend to repeat:

- **No agreed home.** The same type of document is saved in personal drives, shared folders, chat threads and email attachments, depending on who created it.
- **Duplicate copies.** Several versions exist and nobody is sure which is current, so people ask rather than risk using the wrong one.
- **Unclear ownership.** Nobody is responsible for keeping a given piece of information accurate, so it decays.
- **Poor structure.** Deeply nested folders and inconsistent naming make search unreliable.
- **Information created outside systems.** Phone calls, WhatsApp messages and meetings produce decisions that never reach a shared record.

Microsoft's own guidance on [information architecture in SharePoint](https://learn.microsoft.com/en-us/sharepoint/information-architecture-modern-experience) makes a related point: how content is organised, labelled and navigated determines whether people can find what they need. It specifically cautions that folder structures with more than one or two levels of nesting create a significant discoverability burden, and recommends using metadata so content can be filtered and searched. The principle holds whatever platform you use.

Ownership matters as much as structure. The UK National Cyber Security Centre's [asset management guidance](https://www.ncsc.gov.uk/collection/10-steps/asset-management) recommends understanding what data you have and where it is stored, and recording who is responsible for it. That advice is written for security, but it describes exactly the conditions that stop teams chasing each other for information.

## An illustrative example

Consider a hypothetical Durban engineering services firm with 30 staff. Technicians regularly phone the office to confirm site access arrangements, equipment serial numbers and whether a client is on a maintenance contract. Office staff check three places: the accounting system for contract status, a shared folder for site notes and a senior technician's email for anything agreed informally.

When the firm logged these calls for two weeks, it found that most fell into two groups: record information about sites and equipment, and context about informal agreements. Neither required new software. The firm chose its job management system as the single home for site and equipment records, moved the site notes into it, and introduced a rule that any agreement with a client about scope or pricing is noted on the client's record before the call ends. The calls did not stop entirely, but they fell sharply, and new technicians became productive faster because the answers were where they worked. The pattern is common enough to have its own name: [field teams phoning the office for information](/patterns/why-field-teams-still-phone-the-office-for-information/).

## A practical way to start

1. **Log the questions.** For two weeks, ask the people who are interrupted most to note each request for information: what was asked, by whom and how long it took to answer.
2. **Sort them into the four kinds.** Reference, record, status, or context and decisions.
3. **Find the biggest cluster.** Usually one or two kinds account for most of the questions.
4. **Give each piece of information one home and one owner.** Be specific: "current price list lives here, maintained by this person, old versions archived".
5. **Remove the alternatives.** Archive duplicate copies so the authoritative one is the only one people find.
6. **Make recording part of the work.** Capture decisions and record changes at the point they happen, not later.
7. **Repeat the log** after a month and compare.

## The trade-offs

Some asking is healthy. Colleagues who talk to each other share judgement and context that no system holds, and a team that never asks questions is probably not collaborating. The aim is not silence but to stop using people as the retrieval system for facts that should be written down once. If your most experienced staff spend a large part of their day answering the same factual questions, you are paying senior rates for a filing system, and that is worth fixing.
