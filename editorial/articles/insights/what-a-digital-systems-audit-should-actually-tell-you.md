---
hub: insights
record_id: INS-006
slug: what-a-digital-systems-audit-should-actually-tell-you
title: What a digital systems audit should actually tell you
description: A good audit is judged by the decisions it enables, not the length of its inventory. Eight answers an owner should have afterwards.
lead: A useful systems audit is judged by the decisions it lets you make, not by the length of its inventory. The eight answers a business owner should be able to give once an audit is finished, and how to tell a useful audit report from a thick one.
category: Digital Operations
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Digital Operations
sources:
  - Asset management | https://www.ncsc.gov.uk/collection/10-steps/asset-management
  - CIS Control 2: Inventory and Control of Software Assets | https://www.cisecurity.org/controls/inventory-and-control-of-software-assets
  - Section 19 Security measures on integrity and confidentiality of personal information - POPIA | https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/
related:
  - Before you automate, understand how the work actually moves | /insights/before-you-automate-understand-how-the-work-actually-moves/
  - Key-person dependency is a systems problem | /insights/key-person-dependency-is-a-systems-problem/
  - How to find the real bottleneck in a digital operation | /insights/how-to-find-the-real-bottleneck-in-a-digital-operation/
summary: A useful systems audit is judged by the decisions it lets you make, not by the length of its inventory. The eight answers a business owner should be able to give once an audit is finished, and how to tell a useful audit report from a thick one.
layout: plain
---
Most businesses that commission a review of their technology receive something that looks thorough. There is a spreadsheet of applications, a list of devices, a set of screenshots, perhaps a colour-coded risk register. Weeks later the report sits in a shared folder and very little has changed. The audit described the estate, but it did not tell anyone what to do.

A digital systems audit is worth paying for only if it changes decisions. The test of a good one is simple: when it is finished, can the owner and the management team answer a small number of practical questions they could not answer before? This article sets out those questions, why each one matters, and how to recognise an audit that is producing a catalogue rather than a diagnosis.

## Why so many audits disappoint

Audits tend to go wrong in three predictable ways.

- **They count rather than explain.** A list of forty applications is a start, but it does not say which ones the business depends on, which overlap and which are drifting out of use.
- **They look at systems one at a time.** Most operational pain sits between systems, in the copying, chasing and reconciling that happens where one application stops and the next begins.
- **They stop at findings.** A finding without a priority, an owner and a rough cost of doing nothing becomes another item on a list nobody acts on.

The questions below are designed to avoid all three.

## The eight answers a useful audit should give you

### 1. What do we actually run, and who owns each part?

An inventory is the foundation, and it is harder to build than it sounds. The UK National Cyber Security Centre's guidance on [asset management](https://www.ncsc.gov.uk/collection/10-steps/asset-management) recommends creating and maintaining an asset inventory and validating it from more than one source, because what people believe is in use and what is really in use often differ. CIS Control 2 makes the same point for software specifically: [inventory and control of software assets](https://www.cisecurity.org/controls/inventory-and-control-of-software-assets) is about knowing what is installed and used, not just what was purchased.

For a business audit, the inventory should go one step further and name an accountable owner for every application that matters. Applications without an owner are where licences renew unnoticed, access is never reviewed and nobody notices when an integration stops. The common reasons a business cannot produce this list are explored in [why businesses cannot list all the applications they use](/discovery/why-businesses-cannot-list-all-applications-they-use/).

### 2. Which systems hold the authoritative version of our key information?

For customers, products, prices, suppliers, employees and stock, the audit should say where the trusted version lives, and where copies exist. If two systems both claim to be the source of customer details, that is a finding in its own right. The method for settling it is covered in [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/).

### 3. How does information move between systems, and where do people carry it?

This is the part most audits skip. A useful audit traces a handful of core workflows, such as quote to cash, order to delivery or hire to first payslip, and shows where data moves automatically, where it is exported and imported, and where a person retypes it. Each manual transfer is a cost, a delay and a source of error.

### 4. What does the business depend on that could stop it?

The NCSC guidance stresses understanding dependencies: which services rely on which systems, data and suppliers. An audit should identify the small number of components whose failure would stop invoicing, trading or payroll, and say whether each one is monitored, backed up and supported. The broader pattern is described in [when nobody knows which services depend on which systems](/patterns/when-nobody-knows-which-services-depend-on-which-systems/).

### 5. What are we paying for that we do not use or need?

Overlapping tools, unused licences and subscriptions that outlived the project that justified them are almost always present. The audit should quantify them, but carefully: a licence that looks idle may support a quarterly process. NCSC's advice to decommission systems and information that are no longer used is sound, provided the decision is based on evidence of use rather than on a guess.

### 6. Where is personal information exposed?

For South African businesses this is not optional. Section 19 of POPIA requires a responsible party to [identify all reasonably foreseeable internal and external risks](https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/) to personal information in its possession or under its control. A systems audit is a natural moment to do that: it should show where customer and employee data is stored, who can reach it, which former staff or suppliers still have access, and where copies sit in spreadsheets and inboxes.

### 7. Which problems matter most, and in what order?

An audit that lists fifty findings with equal weight has not finished its work. Each significant finding should carry a plain estimate of business impact, the likelihood of it causing harm, and what it depends on. Some problems must be solved before others can be. The reasoning for ordering them is set out in [how to decide what technology problem to solve first](/insights/how-to-decide-what-technology-problem-to-solve-first/).

### 8. What should we do in the next ninety days, and what can wait?

The final answer is a short, sequenced plan: a handful of actions, each with an owner, an approximate cost and a reason. It should include things to stop doing and tools to remove, not only things to buy. A good audit is often cheaper to act on than people expect, because the first steps are usually ownership, clean-up and configuration rather than new software.

## A quick test for an audit report

| A catalogue tells you | A useful audit tells you |
| --- | --- |
| You have 38 applications | Six are critical, four overlap, three have no owner |
| Customer data is in the CRM and accounting system | Accounting is the trusted source for billing details; the CRM copy is out of date for a fifth of active accounts |
| There is an integration between the web shop and stock | It fails silently about once a week and someone checks it by hand each morning |
| Multi-factor authentication is not enabled everywhere | Two former employees still have access to the finance system; close that first |
| Recommendations: improve integration, review licences | Three actions this quarter, each with an owner and an estimated effort |

If most of what you receive sits in the left-hand column, the audit has described the estate without diagnosing it.

## An illustrative example

Consider a hypothetical Durban distribution business with around sixty staff. It commissions a review because month-end has started taking two weeks and the owner suspects the business is paying for too much software.

A catalogue-style audit would have produced a list of 31 applications and a recommendation to consolidate. The more useful version traced three workflows end to end. It found that sales orders were retyped from the CRM into the accounting package, that stock adjustments made in the warehouse application reached finance only through a weekly spreadsheet, and that month-end was mostly spent reconciling the two. It found four overlapping file-sharing and messaging tools, and two former staff members with active finance logins.

The plan that followed had five items: remove the stale accounts immediately, assign owners to the six critical systems, connect order creation one way from CRM to accounting, replace the weekly stock spreadsheet with a daily automated feed, and retire two of the overlapping tools once their content was moved. The software question turned out to be the least important finding. This scenario is illustrative, not a client case study.

## What to agree before an audit starts

Much of an audit's usefulness is decided before any work begins. Before commissioning one, agree:

- **The decisions it must inform.** For example, whether to replace the accounting system, how to reduce month-end effort, or how to prepare for growth.
- **The workflows it will trace.** Two or three that matter commercially are better than a shallow look at everything.
- **Who will be interviewed and observed.** Front-line staff often know where the workarounds are; management often does not.
- **The form of the output.** A short prioritised plan with owners, supported by the inventory, rather than the other way round.
- **What happens afterwards.** Who owns the plan, and when progress will be reviewed.

## When an audit is worth doing

An audit earns its cost when a significant decision is coming, such as a system replacement, an acquisition, rapid growth or a change in leadership, or when the business has a persistent feeling that technology is slowing it down without a clear explanation of why. It is also worth doing when nobody can say with confidence what the business runs, who has access to it, and what would stop it.

Mellorca's [digital systems audit](/services/digital-systems-audit/) is built around these questions, so that the result is a set of decisions the business can act on rather than a document that describes what it already suspected.
