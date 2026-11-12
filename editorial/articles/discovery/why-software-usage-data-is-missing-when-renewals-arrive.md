---
hub: discovery
record_id: DISC-335
slug: why-software-usage-data-is-missing-when-renewals-arrive
title: Software usage data is unavailable before renewals
description: Renewal quotes arrive long before anyone can say how many seats are really used. How to gather usage evidence in time to keep, reduce or drop each application.
lead: Renewal quotes arrive long before anyone can say how many seats are really used. How to gather usage evidence in time to keep, reduce or drop each application.
category: SaaS & Application Portfolio Management
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: SaaS & Application Portfolio Management
problem_domain: SaaS & Application Portfolio Management
problem_owner: IT or operations manager who administers the application, with the finance manager owning the renewal approval
budget_owner: Financial director or the department head who signs the purchase order
sources:
  - https://learn.microsoft.com/en-us/entra/identity/monitoring-health/concept-sign-ins | https://learn.microsoft.com/en-us/entra/identity/monitoring-health/concept-sign-ins
  - https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/manage-application-permissions | https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/manage-application-permissions
  - https://learn.microsoft.com/en-us/entra/identity/app-provisioning/what-is-hr-driven-provisioning | https://learn.microsoft.com/en-us/entra/identity/app-provisioning/what-is-hr-driven-provisioning
summary: Renewal quotes arrive long before anyone can say how many seats are really used. How to gather usage evidence in time to keep, reduce or drop each application.
layout: plain
---
Sixty days before a software contract renews, the finance manager asks a simple question: how many of the licences we pay for are actually used? The application owner opens the admin console, finds a list of 140 named users and a "last active" column that is blank for half of them, and replies that the vendor can send a usage report if someone raises a ticket. The renewal date does not move. The vendor's account manager sends the renewal quote with a note about a price increase and an early-payment discount.

This is the situation many South African businesses face when an application rationalisation exercise collides with renewal dates. The decision to keep, shrink or drop a product needs usage evidence, and the evidence arrives after the decision has effectively been made.

## The problem in plain language

Usage data is the record of who used which application, how often, and for what. It is the only direct evidence that a subscription earns its cost. When it is unavailable at renewal, the business falls back on three weaker substitutes: the number of licences bought last year, the opinion of the loudest user, or the vendor's own summary. None of these tells you whether the seats are in use.

The gap is rarely a technical impossibility. It is usually that nobody decided, at purchase time, where the data would come from and who would look at it. By the time the question matters, the trail is incomplete.

## What the buyer is actually trying to solve

People who search for this problem are typically preparing a renewal, a budget or a clean-up. They want to know which products can be cancelled, which can be reduced to fewer seats, and which are quietly critical. They also want a defensible answer for a managing director or finance director who is asking why the software line keeps growing. The real need is not a reporting tool. It is a repeatable way to turn "I think nobody uses this" into a number the business can act on before the notice period closes.

## Evidence and system mechanism

### Some usage evidence already exists in your identity platform

If staff sign in to applications through a central identity provider, that provider holds a record of access. Microsoft's documentation for [Microsoft Entra sign-in logs](https://learn.microsoft.com/en-us/entra/identity/monitoring-health/concept-sign-ins) describes questions the logs can answer, including how many users signed in to a particular application in a given week. That is a measure of access rather than of productive use, but it is far better than a blank column. An application that nobody has signed in to for a full quarter is a strong candidate for removal, and one that the whole company opens daily is probably not.

The limits matter. Sign-in data only covers applications connected to the identity platform. Products that people log in to with their own email and password, or that use shared credentials, leave no trace there. Retention of the logs is also finite, so evidence for a twelve-month contract may already have aged out if nobody exported it.

### Access to an application is often wider than anyone remembers

Microsoft's guidance on [reviewing permissions granted to enterprise applications](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/manage-application-permissions) shows that grants can be reviewed per application, user or group. For a renewal, that answers a second question: what the product is allowed to touch. Broad access with little use is both a cost and an exposure.

### Joiner and leaver feeds keep the seat list honest

Seat counts inflate when leavers keep their accounts. Microsoft's explanation of [HR-driven provisioning](https://learn.microsoft.com/en-us/entra/identity/app-provisioning/what-is-hr-driven-provisioning) describes creating, updating and disabling accounts from a human-resources source of truth. Even if you do not automate this, the principle applies: the licence list should be reconciled against the staff list on a schedule. Otherwise a renewal quote is built on a seat count that includes people who left last year.

## Problem owner and why-now trigger

The day-to-day owner is usually the IT or operations manager who administers the application. The person who feels the pain is the finance manager or financial director who must approve the renewal. The budget owner is whoever signs the purchase order, which may be a department head rather than IT.

The trigger is an application rationalisation project: a cost-cutting mandate, a merger that doubles up tools, or a board question about the growth of the software line. These projects have a deadline, and the deadline is set by the contract notice period, not by the project plan. If usage evidence is not ready when the notice window opens, the default is automatic renewal, as explored in [the cost of automatic renewals without a value review](/impact/automatic-software-renewals-without-value-review-cost/).

## Economic consequence

The direct cost is paying for seats that nobody uses for another term, often twelve months and sometimes thirty-six. Because annual software contracts are usually prepaid, the cash has already left before the question is answered. The indirect cost is a weakened negotiating position. A buyer who cannot say "we use 62 of 140 seats" cannot credibly ask for a reduction, and vendors know it.

Gathering evidence under deadline pressure also costs staff time; see [the waste from unused licences](/impact/unused-software-licences-financial-waste/).

## Root cause

- **No usage question was asked at purchase.** The business agreed a price and a seat count but never defined what "in use" means for that product.
- **Data sits in several places.** Identity logs, vendor consoles and finance records are not joined, so no single person can see all three.
- **Nobody owns the renewal date.** The contract end date lives in the vendor's system or one inbox, so the evidence work starts late. See [why software renewals need a confirmed business owner](/discovery/why-software-renewals-need-a-confirmed-business-owner/).
- **Access is confused with value.** A log-in count looks like evidence but says nothing about whether the work depends on the product.

## Practical intervention

The intervention is a small routine, not a new platform. For each paid application, record where its usage evidence comes from, who reads it, and how far ahead of the notice date it must be reviewed. Then run the routine on a calendar rather than on a crisis.

### Trade-offs

Sign-in data is cheap but incomplete, and vendor reports arrive on the vendor's schedule. Use logs to find candidates for removal, then confirm with team leads before cancelling.

### An illustrative example

Illustrative: a Johannesburg professional-services firm with 120 staff held a project-management tool with 95 seats. Ninety days before renewal the operations manager exported sign-in activity and found that 31 accounts had not been used in the quarter, nine of them belonging to people who had left. She asked team leads to confirm the remaining low-activity names, reduced the renewal to 70 seats, and had the figures in hand when she spoke to the vendor.

## Diagnostic questions

- For your five largest renewals, can you name the source of usage evidence?
- Which applications are not connected to your identity platform?

## What good looks like

Every paid application has a named owner, a renewal date on a shared calendar and a usage record that can be produced in a day. Ninety days before each notice date, the evidence is exported and reviewed. Renewals become decisions: keep as is, reduce, or exit. When the vendor sends a quote, the business already knows what it needs, and the first negotiating move is its own.

## Practical next actions

1. Build a one-page register of your ten largest software contracts with renewal date, notice period, seat count and annual cost.
2. Open the sign-in logs for each application connected to your identity platform and export the last ninety days of activity.
3. Write to the vendors of the remaining products and request usage reports in writing, with a date for delivery.
4. Compare each seat list with your current staff list and remove accounts for people who have left.
5. Set a calendar reminder ninety days before every notice date, assigned to a named person.

## Where Mellorca fits

Mellorca helps businesses work out which applications are doing real work and which are only being paid for. The work usually starts with a renewal calendar and a usage evidence map, and moves into a decision framework for keeping, reducing or removing each product, described in [how to decide which software to remove](/insights/how-to-decide-which-software-to-remove/). Where renewals are already overdue for review, a short diagnostic can produce the evidence before the next notice window closes.

## Method note

The sources describe what identity platforms record and how accounts and permissions can be reviewed. They do not measure how often usage data is missing at renewal in any given business. The scenario and figures in the example are illustrative rather than a client case.
