---
hub: insights
record_id: INS-403
slug: why-saas-applications-are-part-of-your-operating-infrastructure-not-just-subscriptions
title: Why SaaS applications are part of your operating infrastructure
description: Cloud apps are bought like subscriptions but behave like infrastructure, because the business stops when they stop. What changes when managed that way.
lead: Cloud applications are bought like subscriptions but they behave like infrastructure: the business stops when they stop. What changes when SaaS is managed as operating infrastructure instead of a list of software expenses.
category: Digital Infrastructure
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Digital Infrastructure
sources:
  - Understanding cloud services | https://www.ncsc.gov.uk/collection/cloud/understanding-cloud-services
  - The cloud security principles | https://www.ncsc.gov.uk/collection/cloud/the-cloud-security-principles
  - Section 19 Security measures on integrity and confidentiality of personal information - POPIA | https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/
related:
  - How to identify the systems your business actually depends on | /insights/how-to-identify-the-systems-your-business-actually-depends-on/
  - How to decide which system owns which data | /insights/how-to-decide-which-system-owns-which-data/
  - The hidden cost of apps that do not share data | /insights/the-hidden-cost-of-apps-that-do-not-share-data/
summary: Cloud applications are bought like subscriptions but they behave like infrastructure: the business stops when they stop. What changes when SaaS is managed as operating infrastructure instead of a list of software expenses.
layout: plain
---
Most businesses buy software as a Software-as-a-Service subscription in much the same way they buy anything else recurring: someone chooses a tool, a card is attached, and the monthly debit order appears in the accounts. Because it is a subscription, it tends to be managed like one, as a line in the budget reviewed at renewal. Yet for many companies the accounting package, the CRM, the payroll platform, the booking tool and the email service are not optional extras. When they stop, the business stops.

That is the definition of infrastructure. The distinction matters because infrastructure is managed differently from purchases. It has owners, continuity plans, controls over access, and a view of dependencies. SaaS that is treated only as a subscription gets none of that until the first serious failure.

> If an outage in the application would halt revenue, payroll or customer service, it is operating infrastructure, whatever the invoice calls it.
>

## What makes something infrastructure

The test is functional, not technical. A system is infrastructure when other work depends on it and the business cannot easily operate without it. Servers in a cupboard used to be the obvious example. Today the same role is played by a hosted ERP, a cloud telephone system, a shared document store or an identity service that signs everyone in. The question of which digital systems qualify is examined more broadly in [which digital systems are actually infrastructure](/insights/which-digital-systems-are-actually-infrastructure/), and the shift in definition is discussed in what digital infrastructure means for a modern business.

The UK National Cyber Security Centre's guidance on [understanding cloud services](https://www.ncsc.gov.uk/collection/cloud/understanding-cloud-services) stresses that using a cloud service means sharing responsibility with the provider, and that the customer still has to decide how services are configured, who may use them and what data goes into them. In the same way, the US Cybersecurity and Infrastructure Security Agency frames critical infrastructure around the functions societies depend on. The principle that scales down to a small business is simple: identify the functions you depend on and manage whatever delivers them.

## Why the subscription mindset is risky

Managing SaaS as a subscription produces a recognisable set of weaknesses.

- **Ownership is unclear.** The person who signed up may have left, and the account is registered to their personal email. This is a common cause of locked-out administrators and orphaned subscriptions, discussed in [the cost of orphaned software subscriptions after an employee leaves](/impact/orphaned-software-subscriptions-after-employee-leaves-cost/).
- **Dependencies are invisible.** A change in one application, such as a new field in the CRM, breaks an export that finance relies on. Nobody mapped the connection.
- **Access is unmanaged.** Former staff and suppliers retain logins, and administrator rights are given freely.
- **There is no continuity plan.** The business cannot say what it would do if the application was unavailable for a day, or if the vendor changed terms.
- **Spend grows without scrutiny.** Tiers, seats and add-ons creep upward. The relationship between low entry price and growing operational cost is explored in [why cheap SaaS can become expensive operations](/insights/why-cheap-saas-can-become-expensive-operations/).

Asset registers contribute to the problem. Many are built for hardware and miss cloud services entirely, a gap examined in why IT asset registers miss cloud and SaaS services.

## Shared responsibility is still your responsibility

Moving to SaaS does shift some work to the provider: servers, patching and the physical environment. It does not remove the customer's obligations. The NCSC's [cloud security principles](https://www.ncsc.gov.uk/collection/cloud/the-cloud-security-principles) set out the areas that a customer should consider when relying on a service, including how data is protected in transit and at rest, how the provider separates customers, what governance and operational security look like, how the customer manages users, and how it can leave. These are infrastructure questions, and they apply to a R400-a-month tool as much as to an enterprise platform if the tool is critical.

In South Africa, the Protection of Personal Information Act makes this concrete. A company that puts customer or employee data into a SaaS application remains the responsible party under the Act, and the provider is typically an operator. Section 19 requires appropriate, reasonable technical and organisational measures to secure the information, and the Act expects a written contract with operators that requires them to maintain [security measures](https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/). Choosing, configuring and reviewing the application is part of discharging that duty, which is difficult to do when the tool is only a line on a card statement.

## What it means to manage SaaS as infrastructure

The practical change is a handful of habits applied to the applications that matter.

### Keep a register with a business owner

List each critical application, what business function it supports, who the business owner is, who the technical administrator is, and when it renews. The owner should be a role that survives staff changes, not a personal inbox. The approach is set out in [how to build a business application inventory that is actually useful](/insights/how-to-build-a-business-application-inventory-that-is-actually-useful/), and the case for explicit ownership in [why software ownership needs to be explicit](/insights/why-software-ownership-needs-to-be-explicit/).

### Control access deliberately

Use company-owned accounts for administration, apply multi-factor authentication, remove leavers promptly and review who holds administrator rights. Where possible, sign in through a central identity so that one removal closes many doors. The issues are described in when offboarding leaves digital access behind.

### Know what depends on what

Record which applications exchange data and which processes cross them. When a vendor announces a change, you can then tell quickly what is exposed. This is where an undocumented connection can turn a minor update into a stopped process.

### Plan for the application being unavailable

For each critical system, decide what happens during an outage of a day. It might be a manual fallback for taking orders, a weekly export of key data to storage you control, or a documented list of customers to call. Also check what data you can export and in what form. Many businesses learn the limits only when leaving, as described in [data export limits discovered only when leaving a vendor](/discovery/data-export-limits-discovered-only-when-leaving-a-vendor/). Remember that your own connectivity is part of the chain: a vendor with excellent uptime does not help when load-shedding has taken down your branch router.

### Review at renewal and in between

Use the renewal date as a decision point rather than an automatic payment. Check usage, the number of seats, contract changes, and whether the application still fits the process. Tie renewals to a named owner, as argued in why software renewals need a confirmed business owner.

## An illustrative example

The following is a hypothetical case. A Durban engineering firm with 50 staff runs on six SaaS tools: project management, time-tracking, accounting, e-signature, file sharing and a quoting tool. Each was bought by a different manager. When the manager who set up the quoting tool resigns, the firm finds the account is registered to his personal address and the vendor cannot reset the administrator without his confirmation. Two weeks of quotes are delayed while the issue is resolved.

In response, the firm creates a register of the six tools with an owner for each, moves the accounts to company addresses, turns on multi-factor authentication, and adds a monthly export of quotes to its own storage. The software is unchanged; it is now managed as part of the operating base of the company.

## A short test

- If this application was unavailable tomorrow, what would stop?
- Who is accountable for it, and who can administer it?
- Do we know what it connects to and what we could export?
- Do we know where the personal information in it sits and what the contract says about security?

Applications that fail the test are infrastructure that nobody has yet decided to manage. The sooner that decision is made, the less it costs.
