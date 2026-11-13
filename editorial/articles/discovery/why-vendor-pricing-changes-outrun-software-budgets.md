---
hub: discovery
record_id: DISC-342
slug: why-vendor-pricing-changes-outrun-software-budgets
title: Vendors change packaging and pricing faster than budgets adapt
description: Vendors can repackage and reprice at any renewal, while budgets are set once a year. How to keep a commitment register and a budget that can absorb the change.
lead: Vendors can repackage and reprice at any renewal, while budgets are set once a year. How to keep a commitment register and a budget that can absorb the change.
category: SaaS & Application Portfolio Management
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: SaaS & Application Portfolio Management
problem_domain: SaaS & Application Portfolio Management
problem_owner: Finance manager and business owners of each major software product
budget_owner: Financial director or CFO
sources:
  - Rate Optimization FinOps Framework Capability | https://www.finops.org/framework/capabilities/rate-optimization/
  - FinOps Principles | https://www.finops.org/framework/principles/
  - Application portfolio assessment guide for AWS Cloud migration - AWS Prescriptive Guidance | https://docs.aws.amazon.com/prescriptive-guidance/latest/application-portfolio-assessment-guide/introduction.html
related:
  - New SaaS purchases create integrations nobody budgets to maintain | /discovery/why-new-saas-integrations-have-no-maintenance-budget/
  - Renewal calendars are disconnected from architecture roadmaps | /discovery/why-renewal-calendars-and-architecture-roadmaps-drift-apart/
  - Applications are retained because migration effort is unknown | /discovery/why-applications-stay-because-migration-effort-is-unknown/
  - AI add-ons increase software spend outside original budgets | /discovery/ai-add-ons-push-software-spend-beyond-the-approved-budget/
summary: Vendors can repackage and reprice at any renewal, while budgets are set once a year. How to keep a commitment register and a budget that can absorb the change.
layout: plain
---
The software budget was approved in February at a fixed number. In June, a vendor announces that the product the finance team relies on is moving to a new edition, that two features are being split into separate add-ons, and that the per-user price will be billed in dollars from the next renewal. Nobody did anything wrong. The budget simply had no way of absorbing a change that the vendor was free to make and the business was not free to ignore.

This article looks at the operating condition behind that experience: vendors change how they package and price their products faster than the business updates the budgets and plans that depend on them. It is most visible when an acquisition, a merger or a restructuring forces every contract and every commitment onto the table at once.

## The problem in plain language

Most business software is no longer bought once. It is rented, usually per user or per usage unit, and the terms of the rental can change at renewal. Editions are renamed, features move between tiers, bundles are unbundled, and credits or usage allowances are introduced. Meanwhile, the budget is built once a year from last year's invoices. The two clocks run at different speeds, and the gap is paid for by whoever owns the cost centre when the next invoice arrives.

For a South African business the gap is often wider than it looks. Many vendors price in US dollars or euros, so a packaging change and a currency movement can land on the same invoice. The finance team sees a Rand increase and cannot tell how much came from the exchange rate, how much from extra seats and how much from a repackaged product.

## What you are actually trying to solve

Finance leaders and operations managers look for ways to forecast software spend, control price increases and understand what they are really paying for. Underneath that is a simpler need: a budget that knows which commitments are fixed, which can change, and when each one is next open to change. Without that, every price announcement is a surprise and every surprise becomes an unplanned decision.

## Evidence and system mechanism

### Pricing is a lever the vendor manages actively

The FinOps Foundation's [rate optimisation capability](https://www.finops.org/framework/capabilities/rate-optimization/) describes driving rate efficiency through strategic vendor use, negotiated discounts, commitment discounts and other pricing mechanisms, to meet the organisation's strategic, operational and budgetary objectives. The framework is written for cloud spending, but the lesson carries over to software generally: the rate you pay is something to be managed deliberately, not simply received. A business that only reviews the invoice has handed that management to the vendor.

### Cost control is a shared responsibility

The first of the FinOps [principles](https://www.finops.org/framework/principles/) is that teams need to collaborate: finance, technology, product and leadership working together to manage spend at the speed and granularity each technology requires. In smaller businesses the equivalent is simple. The person who knows what the software is used for, the person who signs the contract and the person who holds the budget need to see the same facts at the same time.

### Stable commitments are a design choice

The AWS guidance on [application portfolio assessment](https://docs.aws.amazon.com/prescriptive-guidance/latest/application-portfolio-assessment-guide/introduction.html) treats understanding the portfolio as the basis for deciding what to keep, change or retire. A portfolio that has not been assessed cannot be budgeted with confidence, because nobody can say which products are essential, which are marginal and which could be swapped if the price changes.

### Warning signs

- Finance learns about a price change from the invoice rather than from a notice that someone read.
- Vendor emails about edition changes go to a departed employee or a shared mailbox.
- Renewals are accepted automatically because there is no time to compare alternatives; see [why contract renewals surprise finance and operations](/discovery/why-contract-renewals-surprise-finance-and-operations/).

## Problem owner and why-now trigger

The finance manager or financial director normally feels the problem first, but the owner of the fix is shared. A named business owner for each major product decides whether it is still needed; the financial director owns the budget; whoever manages technology owns the renewal calendar and the vendor relationship.

The trigger that turns an irritation into an urgent matter is often a merger or acquisition. Due diligence asks for a list of recurring commitments, the buyer wants to know what will change on a change of control, and the combined business suddenly has two sets of overlapping products on two sets of terms.

## Economic consequence

Unplanned increases are approved quickly because the alternative is a service outage, which removes any negotiating power. Where a product is repackaged so that an essential feature now needs a more expensive edition, the business can end up paying for capabilities it does not use in order to keep the one it does. The related waste of paying for unused seats is covered in [unused software licences and financial waste](/impact/unused-software-licences-financial-waste/), and the habit of accepting renewals unseen in [automatic software renewals without value review](/impact/automatic-software-renewals-without-value-review-cost/).

## Root cause

- **Annual budgets for continuous pricing.** The budget is fixed for twelve months while vendor terms can change at any renewal or notice date.
- **No commitment register.** Contract terms, currencies, notice periods and price-change clauses are scattered across inboxes and filing cabinets.
- **No decision owner.** Nobody is accountable for deciding whether a repackaged product is still worth its price.
- **Single-vendor dependence by default.** Exit costs are rarely known; see [data export limits discovered only when leaving a vendor](/discovery/data-export-limits-discovered-only-when-leaving-a-vendor/).

## Practical intervention

1. **Build a commitment register.** For every recurring software contract record the vendor, product, business owner, billing currency, unit of charge, term, renewal date, notice period and any clause that allows price or packaging changes.
2. **Add a price-change allowance to the budget.** Set a contingency for software, sized from last year's actual increases, and track it separately so the cost of vendor change is visible rather than buried.
3. **Separate currency from price.** Record the foreign-currency amount and the Rand amount, so that exchange-rate movement and genuine price increases can be told apart.
4. **Route vendor notices to a role, not a person.** Use a shared address that is monitored, and log every packaging or pricing notice with a date and an owner for the response.
5. **Review at ninety days.** Start every renewal review at least ninety days before the notice deadline. Ask three questions: is the product still needed, is the edition still right, and what would the alternative cost?
6. **Test the exit.** For the top five commitments, write down what leaving would take. A credible alternative is the most effective negotiating tool a small business has. A broader method is in [how software renewal dates can force better technology decisions](/insights/how-software-renewal-dates-can-force-better-technology-decisions/).

### Trade-offs

Multi-year terms can lock in a price and protect against increases, but they also lock in a product the business may outgrow.

### An illustrative example

Illustrative: a Durban distribution business with about 120 staff was preparing to be acquired. The buyer's due-diligence request asked for all recurring software commitments. Finance found 41 subscriptions, nine of them billed in dollars, and two where the vendor had moved a reporting feature into a higher edition at the previous renewal without anyone noticing. Building the register took three weeks, but it let the business correct one overpriced edition before signature, show the buyer a clean list, and begin the next budget with renewal dates and currencies attached to every line.

## Diagnostic questions

- Can you list every software contract with its renewal date, notice period and billing currency?
- Who reads vendor pricing and packaging notices, and where are they logged?
- How much did your software cost increase at the last renewal, and how much of that was currency?
- Which three products would hurt most if the price rose by a quarter?

## What good looks like

Every commitment has a named business owner, a known renewal date and a recorded price basis. The budget contains a visible allowance for vendor change. Notices are read within days, decisions are made before notice deadlines, and the exit path for the biggest contracts is understood. When a vendor changes its packaging, the business responds with a decision rather than a scramble, and when an acquirer asks for the list, it exists.

## Where Mellorca fits

Mellorca helps businesses map their application portfolio to the business capabilities it supports, assemble a renewal and commitment register, and connect it to an architecture roadmap so that renewal decisions follow a plan instead of a vendor's calendar.

## Method note

The FinOps Foundation and AWS material is used as a reference for how rate management and portfolio assessment are approached in cloud environments; it is not a statement of what any South African business must do. Contract terms differ and specific clauses should be reviewed by a qualified adviser. The example is illustrative rather than a client case.
