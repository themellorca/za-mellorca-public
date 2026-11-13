---
hub: discovery
record_id: DISC-201
slug: why-crm-updates-happen-only-before-forecast-meetings
title: Salespeople update the CRM only before forecast meetings
description: When deals are updated once a month, the forecast is a reconstruction. How to find the cause before blaming people or replacing the CRM.
lead: When deals are updated once a month, the forecast is a reconstruction. How to find the cause before blaming people or replacing the CRM.
category: Sales Operations & CRM
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Sales Operations & CRM
problem_domain: Sales Operations & CRM
problem_owner: Sales director or head of sales, with the operations lead responsible for CRM configuration
budget_owner: Managing director or CFO
sources:
  - Configure forecasts in your organization | https://learn.microsoft.com/en-us/dynamics365/sales/configure-forecast
  - I Mastered Sales Forecasting, Here Are My Top Tips [+Template] | https://blog.hubspot.com/sales/sales-forecasting
  - Protection of Personal Information Act 4 of 2013 - South African Government | https://www.gov.za/documents/protection-personal-information-act
related:
  - Why credit checks happen after sales has already promised delivery | /discovery/why-credit-checks-happen-after-sales-has-promised-delivery/
  - Why cloud resource quotas are only discovered when a deployment fails | /discovery/cloud-resource-quotas-discovered-when-deployments-fail/
  - AI evaluations are performed only before launch | /discovery/ai-evaluations-are-performed-only-before-launch/
  - How to design CRM stages around real work | /insights/how-to-design-crm-stages-that-match-what-your-team-actually-does/
summary: When deals are updated once a month, the forecast is a reconstruction. How to find the cause before blaming people or replacing the CRM.
layout: plain
---
On the Monday before the forecast meeting, the sales manager sends a message to the team: "Please update your deals by midday." For the next few hours the CRM comes alive. Close dates move, amounts change, stages jump forward, and a handful of opportunities that have been dead since the last quarter are quietly closed. By Tuesday morning the numbers look tidy. By the second week of the month they are wrong again, and nobody is surprised.

This article looks at that operating pattern: a CRM that holds an accurate picture for one afternoon a month and a stale one for the rest. It is common in South African businesses with small and mid-sized sales teams, and it is one of the most frequent reasons an owner starts asking whether the CRM itself needs to be replaced.

## The problem in plain language

The CRM is supposed to be the record of what is happening with customers and prospects. In this pattern it is instead a reporting form that salespeople complete when someone is about to read it. The real record lives somewhere else: in WhatsApp threads, in email, in a personal spreadsheet, in the salesperson's memory. The forecast meeting then becomes a reconstruction exercise rather than a review of facts.

It is tempting to blame the people. Most salespeople are not lazy; they are rationally avoiding a task that gives them nothing back. If updating the CRM costs ten minutes per deal and the only visible result is more questions from the manager, updates will be batched and delayed.

## What you are actually trying to solve

The owner or sales director facing this problem usually wants three things: a forecast they can trust for cash planning and hiring, early warning when a deal is slipping, and the ability to see what a salesperson has agreed with a customer if that person is away or leaves. They often assume a new CRM will deliver this. In many cases the same behaviour moves into the new system within a quarter, because the cause was never the software.

## Evidence and system mechanism

### A forecast is only as good as the freshness of its inputs

Microsoft's guidance on [configuring forecasts in Dynamics 365 Sales](https://learn.microsoft.com/en-us/dynamics365/sales/configure-forecast) describes forecasting as a way to see revenue projections built from the open sales opportunities, spot risks early and let managers act before a quarter is lost. Its own example is a team tracking 15% below target mid-quarter, where managers can coach on gaps or accelerate deals.

That only works if the opportunity data is current in the middle of the quarter, not just on the eve of the meeting. The same page also warns that forecasting is meant to help managers improve team performance and is not intended for decisions about an individual employee's pay or employment, a useful reminder that using CRM data punitively will make the update problem worse.

### Forecasts depend on history and demand signals

HubSpot's [guide to sales forecasting](https://blog.hubspot.com/sales/sales-forecasting) notes that most forecasts draw on historical sales data and take demand fluctuations into account. If stage changes and close dates are entered in batches, the history that a forecast learns from records when people updated the system, not when the customer actually moved.

### Personal information needs to stay accurate

The CRM also holds personal information about customers and contacts. The [Protection of Personal Information Act](https://www.gov.za/documents/protection-personal-information-act) expects a responsible party to take reasonable steps to keep personal information complete, accurate and up to date. A CRM that is corrected only before meetings sits uneasily with that expectation, and it makes access and correction requests harder to answer. The wider cost of data that people stop trusting is covered in [why teams stop trusting the CRM](/insights/why-teams-stop-trusting-the-crm/).

### Warning signs

- Activity in the CRM spikes in the 24 hours before the forecast meeting and is flat the rest of the month.
- Many opportunities have a close date in the past that has not been changed.
- The weekly forecast in the CRM and the forecast the sales manager keeps in a spreadsheet do not agree.
- New leads sit unassigned or untouched, as described in [when a lead enters the CRM but nobody acts](/patterns/when-a-lead-enters-the-crm-but-nobody-acts/).

## Problem owner and why-now trigger

The sales director or head of sales owns the behaviour and the forecast. The operations or IT lead owns how the CRM is configured, and the finance director or owner depends on the output for cash flow, targets and stock or capacity planning. The budget for any change normally sits with the managing director or CFO.

The trigger is usually a missed quarter, a surprise at year-end, or a salesperson leaving and taking the real status of their accounts with them. A CRM contract coming up for renewal turns frustration into a replacement project.

## Economic consequence

An unreliable forecast has a direct cost. Hiring, stock purchases and supplier commitments are made against revenue that may not arrive, and cash shortfalls are discovered late. Deals are lost without anyone noticing because follow-ups were never recorded. The licence fee for the CRM is then paid for a tool that is not doing its job, the situation described in [how a CRM turns into an expensive address book](/insights/how-a-crm-turns-into-an-expensive-address-book/).

## Root cause

- **No value for the person entering data.** The CRM asks for effort but returns little, such as reminders, prepared quotes or customer history that saves time.
- **Too many fields and stages.** A long form that does not match how deals actually progress is filled in late and loosely.
- **Updates sit outside the real workflow.** The conversation happens in email and WhatsApp, and the CRM is a second place to re-type it; see [why CRM adoption problems are often workflow problems](/insights/why-crm-adoption-problems-are-often-workflow-problems/).
- **The meeting rewards the wrong behaviour.** If only the number is reviewed, salespeople prepare the number, not the evidence.

## Practical intervention

1. **Measure the pattern before changing anything.** Export the last two quarters of opportunity changes and look at the day of the week and month when they were made. If most edits cluster before meetings, the diagnosis is confirmed and the software is not the first suspect.
2. **Define each stage by evidence.** A deal moves to the next stage only when a stated event has happened, such as a quote sent, a decision-maker identified or a site visit completed. Keep the list short.
3. **Cut the form down.** Make only the fields needed for the forecast mandatory: amount, expected close date, stage, next step and next step date.
4. **Capture from where the work happens.** Connect email and calendar so that activity is logged automatically, and let quotes and follow-up reminders be created from the CRM, so the system saves time instead of only consuming it. The case for removing double entry is made in [retyping website enquiries into the CRM](/impact/retyping-website-enquiries-into-crm-lead-capture-cost/).
5. **Change the meeting.** Run the forecast review from the live CRM view, on the screen, with the rule that anything not in the system does not count. Ask about the next step and its date for each large deal, not only the amount.

### Trade-offs

Stricter rules can feel like surveillance. Explain what the data will and will not be used for, and keep it separate from commission disputes.

### An illustrative example

Illustrative: a Durban distributor of building products with eight salespeople found that 70% of opportunity edits happened on forecast days. The sales director cut the deal form from 22 fields to six, defined four stages with clear exit events, and began running the Monday meeting directly from the live view. Within two months the spreadsheet forecast was retired.

## Diagnostic questions

- On which days of the month are most opportunity changes made?
- How many open deals have a close date that has already passed?
- What does it mean, in observable terms, for a deal to reach each stage?
- If a salesperson left today, could someone else pick up their deals from the CRM alone?

## What good looks like

Salespeople record what happened close to when it happened, because it takes seconds and returns something useful. Stages mean the same thing to everyone. The forecast meeting looks at the live view and spends its time on decisions about risky deals. A change of CRM, if it happens, is a choice made after the behaviour has been understood, not a hope that new software will fix an old habit. For wider context see [why your CRM is not the problem you think it is](/insights/why-your-crm-is-not-the-problem-you-think-it-is/).

## Where Mellorca fits

A digital systems audit can show how deals really move from first contact to order and which steps the CRM misses. Digital operations improvement can then simplify the CRM workflow, connect email and quoting, and set up the stale-deal checks, before any decision to replace the platform.

## Method note

The vendor documents cited describe their own features and general forecasting practice; they do not prove how any particular business behaves. The example is illustrative rather than a client case, and legal questions about personal information should go to a qualified adviser.
