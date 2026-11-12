---
hub: insights
record_id: INS-046
slug: why-software-ownership-needs-to-be-explicit
title: Why Software Ownership Needs to Be Explicit
description: In most businesses, software ownership is assumed rather than assigned. The person who bought the tool, the heaviest user or the IT provider is treated as the owner until something goes wrong. What explicit ownership covers, how implicit ownership fails, and how to assign it in a small or mid-sized business.
lead: In most businesses, software ownership is assumed rather than assigned. The person who bought the tool, the heaviest user or the IT provider is treated as the owner until something goes wrong. What explicit ownership covers, how implicit ownership fails, and how to assign it in a small or mid-sized business.
category: Systems & Strategy
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Systems & Strategy
sources:
  - Asset management | https://www.ncsc.gov.uk/collection/10-steps/asset-management
  - Identifying the critical assets in your organisation | https://www.ncsc.gov.uk/collection/board-toolkit/principle-a-risk-management/identifying-the-critical-assets-in-your-organisation
  - Extend Dynamics 365 apps without compromising performance - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/extend-your-solution
related:
  - When a Spreadsheet Is a Useful Tool—and When It Becomes Infrastructure | /insights/when-a-spreadsheet-is-a-useful-tool-and-when-it-becomes-infrastructure/
  - How to Decide Which Software to Keep | /insights/how-to-decide-which-software-to-keep/
  - What Keep, Fix, Integrate, Automate, Replace or Remove Means in Practice | /insights/what-keep-fix-integrate-automate-replace-or-remove-means-in-practice/
summary: In most businesses, software ownership is assumed rather than assigned. The person who bought the tool, the heaviest user or the IT provider is treated as the owner until something goes wrong. What explicit ownership covers, how implicit ownership fails, and how to assign it in a small or mid-sized business.
layout: plain
---
Ask who owns a particular piece of software in most businesses and you will hear one of a few answers. "Sales, I suppose, they use it most." "Our IT company looks after that." "Thandi set it up, so probably her." "Finance pays for it." Each answer describes a relationship with the tool. None of them describes ownership.

Implicit ownership works well enough while nothing changes. The trouble starts when a decision is needed: a renewal, a price increase, a security issue, a request to add a feature, a staff member leaving. At that point the business discovers that nobody has the authority, the knowledge or the time to decide, and the default outcome takes over. The subscription renews. The access stays. The change is made by whoever is asked first.

## What ownership actually covers

Software ownership is not one job. It is a small set of responsibilities that can sit with one person in a small business or be split across several people in a larger one. What matters is that each is assigned to a named person, in writing.

| Responsibility | What it involves | Typical holder |
| --- | --- | --- |
| Business ownership | Decides whether the tool stays, changes or goes; agrees how it should be used; approves significant changes | The manager of the team whose work depends on it |
| Administration | Manages users, settings, configuration and day-to-day support; keeps a record of changes | A capable internal user or the IT provider |
| Data ownership | Decides who may see and change the information it holds; oversees retention and data quality | Often the business owner, sometimes a separate person for sensitive data |
| Commercial management | Tracks cost, renewal and notice dates; manages the supplier relationship | Finance or the business owner |

The UK National Cyber Security Centre's [asset management guidance](https://www.ncsc.gov.uk/collection/10-steps/asset-management) recommends recording who is responsible for each asset and what it is used for, and designating a person responsible for the security of data, usually called a Data Owner or Information Asset Owner. The roles above apply the same principle to everyday business software.

## How implicit ownership fails

The failures follow a recognisable pattern.

### The heaviest user is not the decision-maker

The sales team may use the CRM all day, but no individual salesperson has the authority to change how the business manages its customer data. Treating "the users" as the owner means nobody can make a binding decision.

### The IT provider is not the business owner

An external provider can administer a system expertly and still have no view on whether it serves the business well. Providers act on requests; they cannot decide what the business needs. When the provider is treated as the owner, technical changes happen without business judgement.

### The buyer moves on

Whoever signed up for the tool is often assumed to own it. When that person changes role or leaves, ownership leaves with them, usually without anyone noticing. The discovery note on [application owners who leave without transfer](/discovery/application-owners-leave-without-transfer/) describes how common this is.

### Finance owns the cost, not the tool

Finance sees the invoice and can cancel the payment, but cannot judge the impact. The result is either renewal by default or a cut that breaks something. The cost of this gap is set out in [the pain of unclear ownership of technology spending](/impact/pain-unclear-ownership-technology-spending/).

### Suppliers become de facto owners

Where a partner has customised a platform, the business can find that only the partner understands it. Microsoft's guidance on [extending Dynamics 365](https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/extend-your-solution) advises considering whether you depend on another provider to maintain and evolve your extensions, noting that an unresponsive partner can block you from adopting new functionality. An explicit business owner is the person who notices and manages that dependency before it becomes a constraint.

## Quick signs that ownership is only implicit

A short test reveals where ownership exists only by assumption. For each important application, ask three people the same questions: who decides whether we keep this, who can add a new user, and who would we call if it stopped working tonight? If the answers differ, or if the honest answer is "I am not sure", ownership is implicit. Other signs include renewals that nobody remembers approving, settings that nobody can explain, user accounts for people who left months ago, and requests for changes that sit unanswered because nobody feels entitled to say yes or no.

## What changes when ownership is explicit

Named ownership does not require a large governance structure. It changes a few specific things:

- **Renewals become decisions.** There is someone to ask, before the notice date, whether the tool still earns its place.
- **Access is reviewed.** The owner confirms who should have access and removes those who should not.
- **Configuration stays coherent.** Changes go through one person who understands the purpose of the system. [Why uncontrolled configuration changes create operational risk](/insights/why-uncontrolled-configuration-changes-create-operational-risk/) explains what happens otherwise.
- **Problems have a destination.** When something breaks, staff know whom to tell, and that person knows whom to call.
- **Improvement has a sponsor.** Someone is accountable for whether the system is getting better or worse over time.

## How to assign ownership in practice

For a small or mid-sized business, a straightforward routine works:

1. **Start from the application list.** If you do not have one, build a simple list of the software the business pays for and relies on.
2. **Propose an owner for each application.** Choose the manager whose team's work most depends on it, not the heaviest individual user or the IT provider.
3. **Agree it with that person.** Ownership that is assigned without acceptance is not ownership. Explain what the role involves and how much time it takes, which for most tools is a few hours a quarter.
4. **Name the administrator and commercial contact.** In a small business these may be the same person as the owner; write it down either way.
5. **Record it where people will see it.** The application list, the onboarding pack and the supplier file should all show the same names.
6. **Build ownership into transitions.** When someone resigns or changes role, transfer of their software ownership belongs on the handover checklist, alongside their access.
7. **Review once a year.** Confirm each owner is still the right person. If nobody will own a tool, ask whether the business still needs it.

The NCSC's [Board Toolkit](https://www.ncsc.gov.uk/collection/board-toolkit/principle-a-risk-management/identifying-the-critical-assets-in-your-organisation) stresses that identifying critical assets cannot be done by the technical team alone. Ownership is the same. The business must hold it, with technical support, not the other way round.

## An illustrative example

Consider an illustrative Gqeberha manufacturing business with 80 staff. When its managing director asked who owned each of its 24 business applications, the answers pointed to the IT provider for 11 of them, to "everyone" for four, and to people who had left for three.

Over two weeks, the operations manager proposed owners and met each one to agree the role. The production manager took the manufacturing planning system, the financial manager took the accounting and payroll platforms, and the sales manager took the CRM and quoting tool. The IT provider remained administrator for most systems but no longer made business decisions about them. Three tools that nobody was willing to own were reviewed at their next renewal; two were cancelled.

## Ownership is the precondition for everything else

Most systems improvement depends on someone being responsible for a system's purpose, data and future. Without that, reviews have nobody to report to, changes have nobody to approve them and problems have nobody to fix them. Making ownership explicit is quick, cheap and unglamorous, and it is the foundation for the [ongoing stewardship](/insights/why-business-systems-need-ongoing-stewardship/) that keeps systems useful.
