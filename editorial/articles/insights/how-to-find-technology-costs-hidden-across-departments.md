---
hub: insights
record_id: INS-428
slug: how-to-find-technology-costs-hidden-across-departments
title: How to Find Technology Costs Hidden Across Departments
description: Technology spend rarely sits in one budget. A practical method for tracing subscriptions, connection work, staff time and unreviewed data exposure back to the tools that cause them.
lead: Technology spend rarely sits in one budget. A practical method for tracing subscriptions, connection work, staff time and unreviewed data exposure back to the tools that cause them.
category: Technology Cost Management
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Technology Cost Management
sources:
  - FinOps Principles | https://www.finops.org/framework/principles/
  - Architecture strategies for creating a culture of financial responsibility - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/cost-optimization/create-culture-financial-responsibility
  - Cloud app discovery overview - Microsoft Defender for Cloud Apps | https://learn.microsoft.com/en-us/defender-cloud-apps/set-up-cloud-discovery
related:
  - How to Find the Real Bottleneck in a Digital Operation | /insights/how-to-find-the-real-bottleneck-in-a-digital-operation/
  - How Repetitive Admin Work Accumulates Across a Team | /insights/how-repetitive-admin-work-accumulates-across-a-team/
  - How to Map the Flow of Information Between Business Systems | /insights/how-to-map-the-flow-of-information-between-business-systems/
summary: Technology spend rarely sits in one budget. A practical method for tracing subscriptions, connection work, staff time and unreviewed data exposure back to the tools that cause them.
layout: plain
---
A finance manager at a Johannesburg logistics company once asked a simple question before budget season: what do we spend on technology? The IT line in the ledger gave one answer. Then she started asking around. Marketing paid for a design and scheduling tool on a company card. The warehouse had a stock-counting app billed to operations. Sales had a quoting add-on that sat inside a team lead's expense claims, and HR was paying for an e-signature service. The real figure was well above the one in the IT budget, and nobody could say which of these tools were still being used. (This is an illustrative case, not a named client.)

That gap between the technology line and the technology reality is where hidden costs live. They are rarely sinister. They arise because buying software has become easy, and because most businesses record spend by who paid, not by what the spend is for. This article sets out how to find those costs across departments, what kinds of cost to look for beyond the subscription itself, and how to turn the exercise into a habit rather than a one-off clean-up.

## Why technology costs scatter

Three ordinary things scatter technology spend across a business.

- **Low entry price.** A monthly subscription can be approved by a team lead without a purchase order, so it never passes through the people who track IT spend.
- **Different payment routes.** Cards, expense claims, department budgets, annual prepayments and reseller invoices all land in different places in the accounts.
- **Different owners.** The person who chose the tool, the person who pays for it and the person who relies on it are often three different people, or have left.

The result is a pattern we explore in [why teams keep buying their own software](/insights/why-teams-keep-buying-their-own-software/). Each purchase is sensible on its own. Together they create overlap, unused licences and data held in places nobody governs.

## Look beyond the subscription

When people try to find hidden technology costs, they usually hunt for subscriptions. That is a good start, but the larger costs often sit elsewhere. A useful way to organise the search is to separate four kinds of cost.

### Direct costs

These are the licences, subscriptions, support contracts, hosting fees and hardware that appear on an invoice. They are the easiest to find and the easiest to understate, because add-ons, extra users and annual price changes tend to be billed separately from the base product.

### Connection costs

Every tool that has to exchange information with another tool carries a cost: a connector, a middleware fee, a developer's time, or an employee who copies figures between screens. These costs usually sit inside project budgets or salaries and are never labelled as technology. The article on [the hidden cost of apps that do not share data](/insights/the-hidden-cost-of-apps-that-do-not-share-data/) looks at this in more detail.

### Labour costs

Time spent administering a tool, correcting its data, training new users, chasing approvals or building spreadsheet workarounds is real money. It appears in no technology line at all, because it is paid as salary. A tool that costs R400 a month but needs two hours of weekly manual clean-up is not a R400 tool.

### Exposure costs

These are the costs of what could go wrong: customer data held in a tool the business has never reviewed, a login shared by four people, a renewal that rolls over unnoticed, or an export that cannot be done when the supplier relationship ends. They do not appear until something happens, but they can be estimated by asking what the business would lose if a given tool disappeared tomorrow.

## Where to look

You will not find all of this in one place, so triangulate from several sources. Each one catches a different kind of hidden cost.

1. **The general ledger and card statements.** Search every cost centre, not just IT, for recurring payments to software and service companies. Look at expense claims as well as supplier payments. Annual charges are easy to miss in a monthly review, so check twelve months at a time.
2. **Identity and email records.** Where a business uses a single sign-in service or a mail platform, the list of applications that staff have signed into, or the sign-up confirmation emails, reveal tools that nobody entered in a register. Network-monitoring products take this further: Microsoft's documentation for its cloud discovery feature describes analysing traffic logs against a catalogue of cloud apps to give visibility into cloud use and so-called shadow IT. See also [why application inventories leave out shadow IT](/discovery/why-application-inventories-leave-out-shadow-it/).
3. **Conversations with team leads.** Ask each department a plain question: which tools could your team not work without, and which did you set up yourselves? The second part of that question matters most.
4. **Contracts and renewal dates.** Collect them in one list, with notice periods. A cost you cannot stop before the next renewal is a cost already committed.

## Build one view of each tool

As evidence comes in, record each tool once, with a small set of fields. Resist the temptation to build an elaborate register. For every tool, capture:

- what it is for, in one sentence a colleague would understand;
- the person accountable for it, by name, not just a department;
- what it costs per year in total, including add-ons and extra users;
- how many people have access and how many actually use it;
- what other tools it exchanges data with, and how;
- the renewal date and the notice period.

This is the same discipline described in [how to build a business application inventory that is actually useful](/insights/how-to-build-a-business-application-inventory-that-is-actually-useful/), applied specifically to cost. The goal is not completeness for its own sake. It is to make each tool's cost visible to someone who can decide whether it earns its place.

## Allocate costs to what they support

Finding the cost is half the job. The other half is allocating it. When an application serves several departments, its cost often sits in whichever budget happened to pay for it first, so the department that carries the cost is not the one that benefits. This distorts every later decision. A team will fight to keep a tool that is free to them and will resist a tool that is charged to them, regardless of value. The difficulty of doing this fairly is explored in [why application costs cannot be allocated to business units](/discovery/why-application-costs-cannot-be-allocated-to-business-units/).

A simple allocation rule is better than none. Split shared costs by number of active users, or by a measure that reflects use, and review the rule once a year. The FinOps Foundation, which publishes principles for managing technology spend, makes a related point: teams should have timely, accessible and accurate cost data, and the people who make usage decisions should own the cost outcomes of those decisions. Its guidance is written with cloud services in mind, but the same logic holds for any subscription, whether it is a hosting platform or a quoting add-on.

## Make cost transparent, not punitive

There is a human side to this exercise. If staff fear that disclosing a tool means losing it, or being blamed for buying it, they will hide the next one. Microsoft's guidance on building a culture of financial responsibility stresses sharing budgets and cost information openly with the people involved, so that everyone understands the financial effect of their decisions and overspending can be caught early. In a small or mid-sized business this can be as simple as showing each team lead a one-page summary of what their area spends on technology and why.

Make clear at the start that the purpose is to understand, not to punish. A team that bought a good tool without telling anyone has usually found a real need. The right response is to ask whether that need is met elsewhere, and if not, to adopt the tool properly with an owner, a budget line and a renewal date.

## An illustrative example

Consider a hypothetical Cape Town professional-services firm with about sixty staff. A review of twelve months of card statements and supplier invoices turns up thirty-one recurring software payments. Eleven were not in the IT register. Of those eleven, three performed the same task as a tool already paid for centrally, two had no active users in the past quarter, and four held client information. The firm cancels the two unused tools, consolidates the three duplicates at the next renewal, and assigns an owner and a short review to the four that hold client data. None of this requires new software. It requires someone to look across departments, which no single department had a reason to do.

## Turn the exercise into a routine

A one-off review will decay. Within a year, new tools appear and old ones change owners. To keep the picture current:

1. Route every new software purchase, whatever the payment method, through a short check that records the tool, the owner and the cost.
2. Review the list quarterly, comparing it with the ledger and card statements.
3. Diarise renewal dates at least one notice period ahead and name who decides.

An independent first review avoids one team auditing another, which is what a [digital systems audit](/services/digital-systems-audit/) is designed to provide, though you can begin alone with a spreadsheet and a few hours with the finance team.
