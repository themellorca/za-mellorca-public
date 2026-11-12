---
hub: discovery
record_id: DISC-280
slug: why-one-customer-record-ends-up-flowing-through-many-different-connections
title: The same customer data is integrated through several different interfaces
description: When customer data is wired into each application separately, the copies drift apart. How to map the connections, name an owning system and consolidate.
lead: When customer data is wired into each application separately, the copies drift apart. How to map the connections, name an owning system and consolidate.
category: Integration & API Operations
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Integration & API Operations
problem_domain: Integration & API Operations
problem_owner: Head of IT or integration lead, with the digital operations manager
budget_owner: IT director, operations director or business owner
sources:
  - Message Translator - Enterprise Integration Patterns | https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageTranslator.html
  - Canonical Data Model - Enterprise Integration Patterns | https://www.enterpriseintegrationpatterns.com/patterns/messaging/CanonicalDataModel.html
  - Anti-Corruption Layer Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer
related:
  - Why teams cannot trace one business transaction across several systems | /discovery/teams-cannot-trace-a-business-transaction-across-systems/
  - Why Integration Incidents Require Several Vendors to Diagnose | /discovery/why-integration-incidents-require-several-vendors-to-diagnose/
  - Why integration costs stay hidden inside application projects | /discovery/integration-costs-hidden-inside-application-projects/
summary: When customer data is wired into each application separately, the copies drift apart. How to map the connections, name an owning system and consolidate.
layout: plain
---
A customer changes their billing address. The change reaches the accounting system straight away, reaches the CRM the next morning through a nightly file, never reaches the support platform because that connection was built by a contractor who has left, and arrives in the e-commerce store by a fourth route that overwrites the postal code with a blank when one field is missing. Four systems, four interfaces, four slightly different versions of the same customer. Nobody designed it that way. It accumulated.

The problem has become more visible as businesses prepare to let AI assistants and agents read and act on customer data. An agent that asks "who is this customer?" will get a different answer depending on which interface it happens to call.

## The problem in plain language

When the same customer data is connected to several applications through several different interfaces, each connection has its own field mappings, its own timing, its own error handling and sometimes its own owner. A change to one connection does not change the others. Over time the copies drift apart, and the business loses a single trustworthy answer about its customers. Fixing a defect in one interface leaves identical defects in the rest.

## What the buyer is actually trying to solve

The operations director, head of IT or digital lead searching for this wants a customer record that is the same everywhere, a connection landscape that is understandable enough to change safely, and readiness for AI tools that need reliable, consistent access to customer information. They also want to stop paying for the same integration to be built, fixed and explained more than once.

## Evidence and system mechanism

### Each application has its own idea of a customer

The Enterprise Integration Patterns catalogue describes the [Message Translator](https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageTranslator.html) pattern by noting that each application is usually built around its own data model, with its own notion of what a customer is and which attributes define one. Its example is an accounting system that cares about tax numbers while a CRM stores phone numbers and addresses. Every separate interface has to translate between such models, so every separate interface is another place where meaning can be lost.

### A common format reduces the number of translations

The same catalogue's [Canonical Data Model](https://www.enterpriseintegrationpatterns.com/patterns/messaging/CanonicalDataModel.html) pattern proposes a shared format that is independent of any one application. It gives a simple count: with six applications exchanging data in both directions, direct translation needs thirty translators, whereas a shared model needs twelve. The saving is small with two applications and grows quickly as more are added, which is why businesses that add one tool at a time often reach the painful point without noticing.

### A translation layer can protect a clean design from a messy one

Microsoft's Azure Architecture Center describes the [anti-corruption layer](https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer) pattern: a facade or adapter between subsystems that do not share the same meaning, translating requests from one to the other so that a legacy system's awkward data model does not shape the newer one. The practical lesson for a smaller business is that translation should happen in one maintained place, not be rebuilt inside every connection.

### Warning signs

- Two systems show different phone numbers or addresses for the same customer, and staff are unsure which to trust.
- Fixing a mapping bug means finding and changing it in several places, as described in [point-to-point integrations multiply faster than applications](/discovery/point-to-point-integrations-multiply-faster-than-applications/).
- Nobody can say how many connections carry customer data, or who owns each.
- A recent system change broke an interface that nobody knew existed.

## Problem owner and why-now trigger

The head of IT, integration lead or digital operations manager normally owns the interfaces. The customer or commercial director feels the effect through duplicate contacts, wrong statements and slow service. The budget owner is typically the IT director, operations director or business owner.

The trigger now is often an AI agent rollout. An assistant that drafts customer replies or checks account status needs one dependable way to read and update customer data. When teams try to point it at the existing interfaces, they discover that the interfaces disagree. POPIA adds weight: if a customer asks for their data to be corrected or deleted, every copy reached by every interface has to be found and changed. Related technical risk is covered in [why AI tools fail without authoritative data](/discovery/why-ai-tools-fail-without-authoritative-data/).

## Economic consequence

The direct cost is development and support: the same mapping logic built and repaired several times, often by different suppliers billing separately. The indirect costs are larger. Staff spend time checking which record is right and re-typing corrections, a cost described in [customer details held differently in different applications](/impact/pain-customer-details-different-applications-cost-mistakes/). Customers receive statements and deliveries with outdated details. Every new application added to the landscape costs more to connect than the last. And change becomes slow, because nobody is confident which interface a modification will break.

## Root cause

- **Integrations are bought project by project.** Each project connects to whatever it needs, and the cost of the extra interface is hidden in the project budget.
- **No agreed source of truth.** Without a decision about which system owns each customer attribute, every interface guesses.
- **No shared definition of the customer.** Fields such as status, segment and account number mean different things in different systems.
- **No interface register.** Connections are not inventoried, so duplicates cannot be seen, let alone retired.
- **Ownership sits with whoever built each one,** often an external supplier or a person who has moved on.

## Practical intervention

1. **Inventory every interface that carries customer data.** For each, record the systems at both ends, the method (file, API, manual export), the schedule, the fields mapped and the owner.
2. **Decide which system owns each attribute.** Address may belong to the accounting system, communication preferences to the CRM. Write the decisions down in one page.
3. **Agree a minimum shared customer definition.** Settle identifier, name, contact fields, status values and consent flags, and publish them in a short data dictionary.
4. **Compare the copies.** Take a sample of two hundred customers and compare the key fields across systems. The mismatch rate shows where the interfaces are failing and where to start.
5. **Consolidate on the worst offenders first.** Replace several direct connections with one maintained route, or a shared service that other systems call, rather than rebuilding all at once.
6. **Retire duplicates deliberately.** Switch off an old interface only after the replacement has run in parallel and matched for an agreed period.
7. **Give every remaining interface a named owner and a change notice rule,** so that downstream teams hear before a mapping changes.

### Trade-offs

A shared model or central route adds a dependency: if it fails, many systems are affected, so it needs monitoring and an owner. It also takes up-front design time that a quick direct connection avoids. For a business with only three or four applications, a documented set of direct connections with a clear source of truth may be enough; consolidation pays off as the count grows or as AI tools are added.

### An illustrative example

Illustrative: a Cape Town insurance broker with a CRM, an accounting package, a claims tool and a client portal found five separate interfaces carrying client details, built by three suppliers over six years. Comparing a sample showed that about one in eight records differed between the CRM and the portal. The broker named the CRM as owner of contact details and accounting as owner of banking details, routed all contact updates through a single service, and retired two of the five interfaces after a month of parallel running. Corrections began to appear everywhere on the same day.

## Diagnostic questions

- How many different interfaces carry customer data, and who owns each one?
- Which system is the authority for a customer's address, and do all the others defer to it?
- If a customer asks you to correct their details under POPIA, can you find and change every copy?
- Could an AI assistant safely read a customer record today, and which of the conflicting versions would it see?

## What good looks like

Each customer attribute has one owning system. Other systems receive it through a small number of documented, monitored routes using an agreed shared definition. The interface register is current, every route has an owner, and changes are announced before they happen. Copies still exist, but they match, and when they do not, someone is alerted.

## Where Mellorca fits

Mellorca can map the interfaces that carry customer data as part of a systems review, using the approach in [what business leaders need to know about APIs, webhooks and integrations](/insights/apis-webhooks-and-integrations-what-business-leaders-actually-need-to-know/). We then help agree the owning systems and shared definitions, and consolidate the connections that cause the most drift.

## Method note

The sources are pattern and architecture documentation used to explain why separate translations multiply and how a shared model or translation layer reduces them. They do not measure how common the problem is. The example is illustrative rather than a client case.
