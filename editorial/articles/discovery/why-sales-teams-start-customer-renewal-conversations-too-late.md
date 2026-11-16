---
hub: discovery
record_id: DISC-056
slug: why-sales-teams-start-customer-renewal-conversations-too-late
title: Why sales teams start customer renewal conversations too late
description: Customer contracts reach their end date before anyone in sales has asked whether the customer wants to stay. How renewals slip out of the pipeline, and how to start each one on a set date with a named owner.
lead: Customer contracts reach their end date before anyone in sales has asked whether the customer wants to stay. How renewals slip out of the pipeline, and how to start each one on a set date with a named owner.
category: Contracts & Obligation Management
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Contracts & Obligation Management
problem_domain: Contracts & Obligation Management
problem_owner: Sales or revenue operations lead, with the commercial manager responsible for customer agreements
budget_owner: Sales director, CFO or managing director
sources:
  - Generating Renewal Opportunities for Sales Forecasting | https://trailhead.salesforce.com/content/learn/projects/simplify-home-security-subscription-renewals/generate-renewal-opportunity-forecasting
  - Consumer Protection Act, 2008 (Act No. 68 of 2008) - 14. Expiry and renewal of fixed-term agreements - Acts Online | https://www.acts.co.za/consumer-protection/14_expiry_and_renewal_of_fixed_term_agreements
related:
  - Nobody owns the obligations that start after a contract is signed | /discovery/nobody-owns-the-obligations-that-start-after-a-contract-is-signed/
  - Service levels promised in contracts that nobody turns into daily work | /discovery/service-levels-promised-in-contracts-that-nobody-turns-into-daily-work/
  - Termination notice windows missed because dates live in spreadsheets | /discovery/termination-notice-windows-missed-because-dates-live-in-spreadsheets/
summary: Customer contracts reach their end date before anyone in sales has asked whether the customer wants to stay. How renewals slip out of the pipeline, and how to start each one on a set date with a named owner.
layout: plain
---
A Johannesburg managed print and document services firm has about 180 business customers on 36-month agreements. In March, its largest customer in the region, a logistics company with eleven sites, emails to say it has signed with another provider and will not renew when the term ends in April. The account manager had last visited in October. Nobody in sales had raised the renewal, because the agreement end date sat in a contract folder and the CRM showed the account as active and healthy. By the time the sales director heard about it, the customer had run a tender, compared three suppliers and made its choice. The firm never got to make an offer.

## The problem in plain language

Renewal is the moment a customer decides whether to keep buying. For businesses that sell on fixed-term agreements, such as service contracts, rentals, maintenance plans, software subscriptions and supply agreements, it is often the largest single sales event in the year. Yet in many businesses no one starts the conversation on a planned date. The account manager is busy with new business, the end date is not visible in the tools sales uses every day, and the renewal is noticed only when the customer raises it, the contract lapses or finance asks why billing stopped.

Starting late changes the shape of the conversation. The customer may already have gone to market. Price increases arrive without time to explain them. Service problems from the past year have not been dealt with. And the business is negotiating against a deadline rather than from a position of having shown value.

## What the buyer is actually trying to solve

A sales director, revenue operations lead or commercial manager looking into this wants every customer renewal to enter the pipeline early enough to be worked properly. They want to know which contracts end in the next six to twelve months, who owns each renewal, what the customer's position is, and whether the expected renewal revenue in the forecast is real. They also want a repeatable rhythm so renewals do not depend on an individual account manager remembering.

## Evidence and system mechanism

### A renewal can be created as a pipeline record long before it is due

CRM and quoting systems can create the renewal as a sales opportunity from the contract itself. Salesforce's training on [generating renewal opportunities for forecasting](https://trailhead.salesforce.com/content/learn/projects/simplify-home-security-subscription-renewals/generate-renewal-opportunity-forecasting) shows that ticking a renewal forecast option on a contract causes the system to create a renewal opportunity from the contract's subscriptions, even when the renewal itself is two years away. The renewal term can differ from the original term, the renewal can swap products for their replacements, and if the contract is amended the renewal opportunity is updated to reflect the change. The point is not the product: it is that the renewal can exist in the forecast from the day the contract is signed, instead of appearing when somebody remembers it.

### For consumer agreements, South African law sets a notice window

Where a business sells fixed-term agreements to consumers, section 14 of the [Consumer Protection Act](https://www.acts.co.za/consumer-protection/14_expiry_and_renewal_of_fixed_term_agreements) requires the supplier to notify the consumer in writing, not more than 80 and not less than 40 business days before the term expires, of the expiry date, any material changes that would apply on renewal and the consumer's options to end the agreement or renew it for a further fixed term. The section does not apply to agreements between juristic persons, so most business-to-business contracts are governed by their own terms instead. Even so, it shows the kind of lead time a regulator considers reasonable for a customer to make a decision, and businesses with consumer customers need that window built into their process.

## Why this becomes urgent

Contract volume growth is the usual trigger. A business with forty customer agreements can rely on an account manager's memory and a calendar. With two hundred agreements on different start dates, terms and auto-renewal clauses, renewals start to arrive in clusters that nobody planned for. A loss like the one in the opening example, a price increase that lands badly, or a quarter where renewal revenue was forecast but did not arrive usually forces the question.

## Economic consequence

The direct cost is lost recurring revenue: customers who leave because they were never asked, and customers who stay but negotiate harder because the supplier is under time pressure. There are quieter costs too. Planned price increases are delayed or abandoned because there is no time to justify them. Forecasts carry renewal revenue that is assumed rather than confirmed. Account managers spend their time on emergency retention instead of planned account reviews. Our article on the [cost of monitoring renewal deadlines by hand](/impact/manual-deadline-renewal-monitoring-late-action-cost/) describes how late action compounds.

## Root cause

- **The end date lives in the contract, not in the sales system.** Sales works from the CRM, and the CRM does not know when agreements end.
- **Renewals have no owner by default.** New business has targets and owners; renewals are assumed to happen.
- **No defined start point.** Nobody has decided how many months before expiry a renewal should open, so each one starts whenever it is noticed.
- **Customer contacts have changed.** The person who signed may have left, as described in our piece on [customer contact roles that go stale after the deal](/discovery/nobody-keeps-customer-contact-roles-current-after-the-deal/).
- **Health signals are not connected.** Service complaints, payment problems and usage drops sit in other systems and never reach the account manager before the renewal.

## What good looks like

Every customer contract has its end date, notice period, renewal terms and auto-renewal status recorded as fields, not just in a PDF. A renewal opportunity is created automatically a fixed period before expiry, for example nine months for large accounts and four months for small ones, with the account manager as owner and a due date for the first conversation. The renewal shows the customer's service history, open complaints and payment behaviour, so the account manager knows what to fix before talking price. Renewal revenue in the forecast is split into confirmed, in discussion and at risk. Sales leadership reviews the next two quarters of renewals monthly. This is the customer-side counterpart of [contract renewals that surprise finance and operations](/discovery/why-contract-renewals-surprise-finance-and-operations/), which looks at supplier agreements.

## Diagnostic questions

- Can you list every customer agreement that ends in the next twelve months, with its owner, in under an hour?
- How many months before expiry does a typical renewal conversation start today, and who decided that?
- How many customers in the past year left or reduced their contract after raising the renewal themselves?
- Does the account manager see service and payment problems before the renewal meeting?
- For consumer agreements, can you show that expiry notices went out inside the required window?

## Practical next actions

1. Extract end date, notice period, renewal term and auto-renewal status for every active customer agreement into one list, starting with your largest accounts.
2. Agree a renewal start point by account size or value, and record it as a rule rather than leaving it to each account manager.
3. Create renewal opportunities in the CRM from that list with a named owner and a first-conversation date, and set up automatic creation for new contracts.
4. Add service, complaint and payment signals to the renewal record so account managers prepare with the full picture.
5. Review the next two quarters of renewals monthly, separating confirmed from at-risk revenue in the forecast.
6. After six months, compare retention and price outcomes for renewals started on time against those started late.

## Where Mellorca fits

Mellorca helps commercial teams turn contract dates into owned pipeline work: extracting renewal terms, setting up renewal rules in the CRM and connecting service and finance signals to the account. This sits within [digital operations improvement](/services/digital-operations-improvement/).

## Method note

This article uses Salesforce training material as one example of creating renewal opportunities from contracts; other CRM and quoting tools offer similar functions under different names. The Consumer Protection Act reference applies only to consumer agreements. The opening example is illustrative and not a specific client.
