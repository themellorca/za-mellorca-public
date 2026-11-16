---
hub: discovery
record_id: DISC-058
slug: service-levels-promised-in-contracts-that-nobody-turns-into-daily-work
title: Service levels promised in contracts that nobody turns into daily work
description: Response times, resolution targets, reporting duties and review meetings are written into customer contracts, but the teams doing the work never see them. How to turn each commitment into a timer, a task and an owner.
lead: Response times, resolution targets, reporting duties and review meetings are written into customer contracts, but the teams doing the work never see them. How to turn each commitment into a timer, a task and an owner.
category: Contracts & Obligation Management
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Contracts & Obligation Management
problem_domain: Contracts & Obligation Management
problem_owner: Operations manager or head of service delivery, with the commercial manager who agreed the contract
budget_owner: COO, managing director or CFO
sources:
  - https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/define-service-level-agreements | https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/define-service-level-agreements
  - https://aws.amazon.com/compute/sla/ | https://aws.amazon.com/compute/sla/
summary: Response times, resolution targets, reporting duties and review meetings are written into customer contracts, but the teams doing the work never see them. How to turn each commitment into a timer, a task and an owner.
layout: plain
---
A Cape Town facilities maintenance company wins a three-year contract with a retail group. The agreement promises a two-hour on-site response for critical faults at any of forty stores, a monthly performance report, a quarterly service review and a penalty of 5 percent of the monthly fee for each month in which fewer than 95 percent of critical calls are attended on time. The contract is signed by the managing director and filed. The service desk keeps working as before: calls are logged in order of arrival, technicians are dispatched by area, and nobody tracks the two-hour clock. Eight months later, the client's procurement team sends its own analysis of the job cards and claims penalties for five of the eight months. The company cannot produce figures to dispute it.

## The problem in plain language

Service-level commitments are promises about how work will be done: how quickly a request will be answered, how soon a fault will be fixed, how often a report will be sent, which hours count and what happens when a target is missed. They are negotiated by sales or the commercial team, signed by a director and stored with the contract. But the people who deliver the service work in a ticketing tool, a job card system, a shared mailbox or a spreadsheet, and none of those knows what was promised to which customer.

So the commitment exists legally but not operationally. Work is prioritised by habit, all customers get the same treatment regardless of what they bought, recurring duties such as reports and reviews are remembered by individuals, and nobody knows whether the business is meeting its targets until the customer says it is not.

## What the buyer is actually trying to solve

An operations manager, head of service delivery or commercial manager in this position wants every contractual service level to show up where the work happens. They want each customer's targets attached to that customer's requests, a visible clock on each one, warnings before a target is breached, recurring obligations scheduled as tasks, and evidence of performance that the business produces itself. They also want sales to stop promising service levels the operation cannot measure.

## Evidence and system mechanism

### Service tools can run the clock, once targets are set up

Service management software is built to turn a commitment into a timer. Microsoft's documentation on [configuring service-level agreements in Dynamics 365 Customer Service](https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/define-service-level-agreements) describes the pieces. Key performance indicators such as first response or resolve-by are defined. Each agreement item has conditions that decide when it applies, success conditions, optional pause and resume rules for when a case is on hold, business hours that determine when the clock runs, and warning and failure durations. Actions can be configured to run when an item is nearing non-compliance, when it succeeds and when it fails, for example sending an email to a manager. A timer on the case form shows the person doing the work how much time remains.

All of this depends on someone translating the contract into conditions: which customer, which request types, which hours, which target, which escalation. If that translation is never done, the tool runs default targets or none.

### Your own suppliers' service levels work the same way in reverse

The commitments a business receives from its suppliers also need operational follow-up. Amazon Web Services' [Compute service level agreement](https://aws.amazon.com/compute/sla/) is a public example: to receive a service credit, the customer must open a claim in the support centre by the end of the second billing cycle after the incident, with dates, times, affected resources and logs; a claim missing the required information does not qualify. A service level that no one monitors and claims against is worth nothing in practice, whichever side of the contract you are on. Our article on [supplier recovery promises not written into contracts](/discovery/when-a-suppliers-recovery-promise-is-not-written-into-your-contract/) covers the opposite gap, where the commitment was never agreed at all.

## Why this becomes urgent

Renewal season is when the gap shows. A customer preparing to renew asks for a year of performance figures, compares them with its own records and uses any shortfall to negotiate a lower price or claim penalties. If the business has no reliable figures, it negotiates from weakness. A large new contract with stricter targets than existing customers, a penalty claim or a public tender that asks for evidence of service performance are other common triggers.

## Economic consequence

Penalties and service credits are the visible cost. Behind them are discounts conceded at renewal because performance cannot be proven, customers lost to competitors who report better, and over-servicing: when nobody knows which customers bought premium response, everyone gets it, and the cost of the premium tier is spread across contracts that do not pay for it. Missed recurring duties such as reports and review meetings damage trust out of proportion to the effort they would have taken. The [cost of not measuring supplier performance](/impact/supplier-performance-not-measured/) describes the same mechanism from the buyer's side.

## Root cause

- **Commitments are negotiated without operations.** Sales agrees targets the service team has never seen.
- **No translation step after signature.** Nobody converts clauses into conditions, timers and tasks.
- **One-size service tools.** The ticketing system has one set of targets, or none, for every customer.
- **Recurring obligations live in people's heads.** Monthly reports and quarterly reviews have no scheduled task.
- **Customer and contract records are not linked.** The service desk cannot tell which contract a request falls under.

## What good looks like

Every customer contract with service commitments has a short service schedule extracted from it: the targets, the request types and priorities they apply to, the hours that count, the exclusions, the reporting and review duties, and the penalties. Operations signs off that it can measure and meet each target before the contract is signed. After signature, the schedule is configured in the service tool so each customer's requests carry their own clock and escalation, and recurring duties are created as dated tasks with owners. Performance is reported monthly from the service system, and the figures are the ones used in review meetings and renewals. The same discipline applies to supplier commitments: someone owns checking them and claiming credits. Our insight on [which service levels make sense](/insights/what-service-levels-make-sense-for-business-critical-automations/) helps set realistic targets in the first place.

## Diagnostic questions

- For your five largest customers, can the service team name the response and resolution targets they were promised?
- Does each request in your service tool carry the target that applies to that customer's contract?
- Who produces the monthly or quarterly performance reports your contracts require, and from which data?
- Did operations review the service schedule of your last three contracts before they were signed?
- When did you last claim a service credit from one of your own suppliers?

## Practical next actions

1. Extract the service commitments from your ten largest customer contracts into one table: target, scope, hours, exclusions, reporting duty and penalty.
2. Configure customer-specific targets, warnings and escalations in your service tool for those contracts first.
3. Create scheduled tasks with named owners for every recurring report, review and audit duty.
4. Add an operations sign-off to the sales process for any non-standard service commitment.
5. Produce a monthly performance report per contract from the service system and compare it with what customers see.
6. Repeat the extraction for your key supplier agreements and assign someone to monitor and claim service credits.

## Where Mellorca fits

Mellorca helps service businesses turn contract schedules into working configuration: extracting commitments, setting up targets and escalations in service tools, and creating the reporting that proves performance. This sits within [digital operations improvement](/services/digital-operations-improvement/).

## Method note

This article uses Microsoft Dynamics 365 Customer Service documentation as an example of how service tools model service-level targets, and the AWS Compute service level agreement as an example of a supplier commitment that requires a claim. Other tools and contracts differ. The opening example is illustrative and not a specific client.
