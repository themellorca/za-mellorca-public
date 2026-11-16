---
hub: discovery
record_id: DISC-178
slug: email-chat-and-phone-contacts-that-become-duplicate-support-cases
title: When one customer problem becomes three support cases across email, chat and phone
description: A customer emails, then opens a chat, then phones, and the help desk now holds three cases for one problem. Why channel-based case creation splits the work, and how to design intake around the customer instead.
lead: A customer emails, then opens a chat, then phones, and the help desk now holds three cases for one problem. Why channel-based case creation splits the work, and how to design intake around the customer instead.
category: Customer Service & Support Operations
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Customer Service & Support Operations
problem_domain: Customer Service & Support Operations
problem_owner: Head of customer service or support operations manager
budget_owner: COO or customer experience director
sources:
  - https://support.zendesk.com/hc/en-us/articles/4408882445594-Merging-tickets | https://support.zendesk.com/hc/en-us/articles/4408882445594-Merging-tickets
  - https://support.zendesk.com/hc/en-us/articles/4409149119514-About-omnichannel-routing | https://support.zendesk.com/hc/en-us/articles/4409149119514-About-omnichannel-routing
  - https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/set-up-rules-to-automatically-create-or-update-records | https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/set-up-rules-to-automatically-create-or-update-records
summary: A customer emails, then opens a chat, then phones, and the help desk now holds three cases for one problem. Why channel-based case creation splits the work, and how to design intake around the customer instead.
layout: plain
---
A customer of a Durban office furniture supplier emails on Monday morning to say a delivered desk arrived with a cracked frame. By lunchtime she has heard nothing, so she opens the chat window on the website and explains again. On Tuesday she phones. The help desk now holds three cases: one from email, one from chat and one logged by the agent who took the call. Three agents have each started work. One has asked the warehouse for photographs, one has offered a replacement and one has promised a call back from the delivery manager. On Wednesday the service-level report shows two breaches, and the customer receives two different answers on the same afternoon.

## The problem in plain language

Most help desks create a case for each conversation that arrives. An email creates one, a chat creates one, a call logged by an agent creates one. That works well while customers use one channel at a time. It breaks when customers do what people naturally do when they are worried or waiting: try another channel. The business then holds several records for one problem, each with its own owner, its own clock and its own partial history.

The duplicates are not usually caused by careless agents. They are caused by a setup in which each channel feeds the case system separately and nothing checks whether the person contacting already has an open case about the same thing. Agents working fast in a queue rarely have time to search for related cases before they respond.

## What the buyer is actually trying to solve

A head of customer service who searches for this problem wants to know why the case count is higher than the number of real customer problems, why service-level breaches keep appearing on cases that were in fact being handled elsewhere, and why customers complain about contradictory answers. The underlying goal is one record per customer problem, whatever channel it arrived on, with one owner and one honest service-level clock.

## Evidence and system mechanism

### Routing is organised by channel

Help desk platforms are built to accept work from many channels, and they generally treat each arrival as its own unit of work. Zendesk's documentation on [omnichannel routing](https://support.zendesk.com/hc/en-us/articles/4409149119514-About-omnichannel-routing) explains that tickets are classified by the original channel through which they are received, and it describes routing for email and web forms, messaging and calls. That design is sensible for workload balancing, but it means the system's starting point is the channel, not the customer's problem.

### Automatic case creation needs explicit rules

Microsoft's guidance on [rules that automatically create or update records](https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/set-up-rules-to-automatically-create-or-update-records) in Dynamics 365 Customer Service shows how much depends on configuration. Rules create cases from incoming emails and other activities. Settings decide whether email from unknown senders creates new records and contacts, and whether an email related to a resolved case opens a new case. An email linked to an active case does not create a new one, but only when the system can recognise that link. Where the customer writes a fresh email instead of replying, or arrives through a different channel, the rules have nothing to connect it to.

### Cleaning up afterwards has limits

Merging duplicates after the fact is possible but imperfect. Zendesk's article on [merging tickets](https://support.zendesk.com/hc/en-us/articles/4408882445594-Merging-tickets) states that merges are permanent and cannot be undone, that tags, type, priority and status from the closed ticket are not carried over, and that only the most recent public comment from the closed ticket appears in the merge. Merging is a useful repair tool, but it is not a substitute for intake that recognises the customer in the first place.

## Why this becomes urgent

The usual trigger is a run of service-level breaches that do not match the team's experience. Agents insist they responded quickly, yet the report shows cases waiting for days, because the duplicate copies were never touched. Adding a new channel, such as WhatsApp or web chat, makes the problem grow quickly. So does a backlog, because customers who wait longer try more channels, which creates more cases, which lengthens the wait.

## Economic consequence

Every duplicate costs agent time: reading, investigating and replying to something another agent is already handling. Contradictory replies create rework and escalations, and they damage trust with customers who now doubt any answer they receive. Reporting suffers too. Case volumes are overstated, which can lead to hiring decisions based on inflated demand, while service-level figures understate performance on real problems and overstate breaches on phantom ones. Where service levels are written into customer contracts, phantom breaches can trigger penalties or awkward conversations that the business cannot easily explain.

## Root cause

- **Intake keyed on channel, not customer.** Each channel creates cases independently, with no check for an open case from the same customer.
- **Weak customer identification.** A phone number, a chat name and an email address are not linked to one customer record, so the system cannot tell they belong to the same person.
- **No rule for related contacts.** Agents have no agreed step for searching open cases before creating a new one.
- **Clocks start per case.** Service-level timers attach to each record, so duplicates breach on their own.
- **Merging treated as housekeeping.** Duplicates are cleaned up weekly, if at all, after the damage is done.

## What good looks like

When a contact arrives on any channel, the system tries to identify the customer from email address, phone number or account details and shows the agent any open cases for that customer before a new one is created. Contacts about an existing problem are attached to the open case, so the history stays together and the original owner remains responsible. Phone agents log calls against an existing case by default rather than creating a fresh one. Service-level clocks run on the case that represents the problem. A short daily review catches remaining duplicates and records why they happened, so the matching rules can be improved. Customers receive one answer from one owner.

This is closely linked to the wider issue of [duplicate records causing operational problems](/patterns/when-duplicate-records-start-causing-operational-problems/), and to [how duplicate customer records are created](/insights/how-duplicate-customer-records-are-created/) in the first place. It is different from [customers repeating their problem after every handoff](/discovery/customers-repeat-the-same-problem-after-every-handoff/), which happens inside a single case.

## Diagnostic questions

- In a sample of last month's cases, how many customers had more than one open case at the same time?
- What share of service-level breaches were on cases that were duplicates of another case?
- Can your help desk recognise a phone number or chat contact as belonging to an existing customer?
- Do agents see open cases for a customer before they create a new one?
- When duplicates are merged, what information is lost, and who checks?

## Practical next actions

1. Sample 100 recent cases and count duplicates by channel combination, such as email then phone or chat then email, to see where the splits happen.
2. Link customer identifiers, including email addresses, phone numbers and account numbers, to one customer record in the help desk.
3. Configure intake so that agents see open cases for the customer before creating a new one, and make attaching to an existing case the default for calls.
4. Review automatic case creation rules for each channel, including how replies, new emails and contacts about resolved cases are handled.
5. Agree a merge procedure with clear rules on which case survives and what must be copied across before merging.
6. Report duplicates and service-level breaches separately for three months to confirm the change is working.

## Where Mellorca fits

Mellorca helps service teams redesign case intake, connect customer identifiers across channels and configure help desk rules so that one problem stays in one case. This work sits within [digital operations improvement](/services/digital-operations-improvement/), starting with a review of how cases are created on each channel today.

## Method note

This article uses Zendesk and Microsoft Dynamics 365 Customer Service documentation as examples of how help desks create, route and merge cases. Other platforms behave differently, and configuration matters more than the product. The opening example is illustrative.
