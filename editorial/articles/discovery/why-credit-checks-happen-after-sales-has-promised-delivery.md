---
hub: discovery
record_id: DISC-086
slug: why-credit-checks-happen-after-sales-has-promised-delivery
title: Why credit checks happen after sales has already promised delivery
description: When credit is checked only once an order reaches finance, sales has already made promises the business may have to break. How to move the credit decision to the point of commitment.
lead: When credit is checked only once an order reaches finance, sales has already made promises the business may have to break. How to move the credit decision to the point of commitment.
category: Quote-to-Cash & Revenue Operations
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Quote-to-Cash & Revenue Operations
problem_domain: Quote-to-Cash & Revenue Operations
problem_owner: Credit controller or financial controller, jointly with the sales director
budget_owner: Finance director
sources:
  - Credit limits for customers - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/sales-marketing/credit-limits-customers
  - Credit holds for sales orders - Finance - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/finance/accounts-receivable/cm-sales-order-credit-holds
  - Credit and collections overview - Finance - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/finance/accounts-receivable/cm-credit-and-collections-overview
related:
  - Why Sales Quotes Have to Be Re-Keyed Before an Order Can Start | /discovery/why-sales-quotes-have-to-be-re-keyed-before-orders/
  - Why salespeople cannot see whether an order has actually been fulfilled | /discovery/salespeople-cannot-see-whether-an-order-has-been-fulfilled/
  - When sales and finance work from different product and price data | /discovery/sales-and-finance-use-different-product-and-price-data/
summary: When credit is checked only once an order reaches finance, sales has already made promises the business may have to break. How to move the credit decision to the point of commitment.
layout: plain
---
The sales manager confirms a large order on Thursday and promises delivery on Monday. The customer is delighted. On Friday the order reaches finance, who find that the account is already over its credit limit and has an invoice ninety days overdue. Finance puts the order on hold. Sales escalates to the managing director, the customer is told delivery is delayed, and everyone spends the weekend arguing about whose job it was to check.

This article looks at that operating condition: credit checks happening after sales promises have already been made. It is common in businesses that sell on account, especially wholesalers, distributors, manufacturers and service firms whose sales teams work in a CRM while credit is managed in the accounting system.

## The problem in plain language

Two legitimate controls are running in the wrong order. Sales commits to quantities, prices, terms and delivery dates. Credit control decides whether the business is prepared to extend credit for that commitment. When credit is checked only at order processing, dispatch or invoicing, sales has already made a promise that finance may have to break. The result is either a customer let down, or a credit decision overridden under pressure.

## What the buyer is actually trying to solve

Finance managers search for ways to enforce credit limits, stop orders for customers in arrears, or set up credit holds. Sales leaders want to know, before they quote, whether a customer can be supplied on terms. The shared need is for credit status to be visible and applied at the point of commitment, with a clear and quick route for exceptions, so that a promise made to a customer is one the business can keep.

## Evidence and system mechanism

### Where the check happens is a configuration choice

Accounting and ERP systems let businesses choose when credit is tested. Microsoft's documentation on [credit limits for customers](https://learn.microsoft.com/en-us/dynamics365/supply-chain/sales-marketing/credit-limits-customers) lists checks on sales order lines as they are entered, on orders received electronically, on packing slips and on invoice posting. It also shows that remaining credit can be calculated against the balance alone, against balance plus deliveries, or against balance plus deliveries and open orders, and that exceeding the limit can raise either a warning that lets the process continue or an error that stops it. A business that checks only at invoicing, uses only the posted balance, or treats breaches as warnings has effectively chosen a late check.

### Credit rules are broader than a single limit

The [credit holds documentation](https://learn.microsoft.com/en-us/dynamics365/finance/accounts-receivable/cm-sales-order-credit-holds) describes blocking rules based on days overdue, account status, payment terms, an expired credit limit, overdue amounts, order value and the portion of credit used, with exclusions and a central hold list for review and release. The [credit and collections overview](https://learn.microsoft.com/en-us/dynamics365/finance/accounts-receivable/cm-credit-and-collections-overview) adds temporary limits, shared limits for related customers and approval workflows for releases. These features exist precisely because the decision to extend credit has several inputs, most of which sales cannot see from a CRM.

### Warning signs

- Orders regularly sit on credit hold after the customer has been given a delivery date.
- Credit holds are routinely released by senior managers to protect relationships.
- Sales cannot see a customer's overdue balance or available credit in the CRM.
- Credit limits are set once at account opening and rarely reviewed.
- Related companies trade on separate accounts, each with its own limit.

## Problem owner and why-now trigger

The credit controller or financial controller owns credit risk. The sales director owns the customer promise. The finance director usually owns both the budget and the final say on credit policy.

The trigger is usually sales growth. New customers, larger orders and more salespeople increase the number of commitments made before finance sees them. A bad debt or a cluster of disputed overdue accounts often follows, and the business discovers that credit control has been working downstream of the decisions that created the exposure.

## Economic consequence

Late checks create two kinds of cost. When finance holds the order, the business pays in customer goodwill, expediting, idle stock that was reserved, and management time spent resolving escalations. When the hold is overridden, the business takes on credit risk it had decided not to accept, which shows up later as overdue debtors, collection effort and, at worst, write-offs. Working capital suffers either way. The collection side of the problem is covered in [when cash collection depends on someone remembering to follow up](/patterns/when-cash-collection-depends-on-someone-remembering-to-follow-up/), and its cost in [the cash flow cost of inconsistent payment follow-up](/impact/inconsistent-payment-follow-up-cash-flow-cost/).

## Root cause

- **Credit data lives only in finance.** The CRM shows the opportunity, not the account's balance, arrears or limit.
- **The check is configured late.** Credit is tested at dispatch or invoicing, or only against posted balances.
- **Warnings instead of rules.** Breaches raise messages that are easy to click through.
- **No defined exception route.** When sales needs an exception, the only path is escalation.
- **Disconnected order flow.** Orders are re-keyed from CRM to ERP, so the credit check happens only when the order reaches finance; see [why an order needs so many manual touches](/patterns/why-does-an-order-need-so-many-manual-touches/).

## Practical intervention

1. **Write the credit policy as rules.** Define limits, overdue thresholds, payment-term rules and who can approve exceptions, in terms a system can apply.
2. **Show credit status to sales.** Integrate available credit, overdue balance and account status into the CRM, so they are visible before a quote is sent.
3. **Check at commitment.** Run a credit check when a quote is accepted or an order is created, using balance plus open orders, not only at invoicing.
4. **Make holds visible and fast.** Route held orders to a single list with reasons, and set a response time for credit decisions so holds do not stall sales.
5. **Use structured exceptions.** Offer temporary limits, deposits or partial deliveries through an approval workflow, rather than informal overrides.
6. **Review limits regularly.** Reassess limits on a cycle and when payment behaviour changes, and group related accounts under a shared limit.

### Trade-offs

Earlier checks can slow fast-moving sales. The answer is a quick decision route, not a weaker check. Exposing credit information in the CRM also needs care: sales needs status and available credit, not necessarily the full financial history.

### An illustrative example

Illustrative: a KwaZulu-Natal building materials distributor with about 110 staff found that a large share of its credit holds involved orders where a delivery date had already been given. Credit was checked only when orders were captured in the accounting system, a day or more after sales confirmed them. The business added available credit and overdue status to the CRM account view, moved the check to order creation against balance plus open orders, and gave the credit controller a two-hour response target for held orders. Escalations to the managing director became rare.

## Diagnostic questions

- At what point in the sales process is a customer's credit first checked?
- Can a salesperson see available credit and overdue balance before quoting?
- Does the check include open orders, or only posted invoices?
- How often are credit holds overridden, and by whom?
- How long does a held order wait for a credit decision?

## What good looks like

Credit policy is expressed as rules in the system. Sales sees credit status when it matters, before making a promise. The check runs at commitment and includes open orders. Exceptions follow a defined, fast approval path with options such as deposits or temporary limits. Holds are rare, short and expected, and the promises sales makes are ones the business has already agreed it can keep.

## Where Mellorca fits

Mellorca's [systems implementation and integration](/services/systems-implementation-integration/) work can bring credit status from the accounting or ERP system into the CRM and move the check to the point of commitment. [Business automation and AI workflows](/services/business-automation-ai-workflows/) can handle hold routing, exception approvals and limit review reminders.

## Method note

Product capabilities are drawn from current vendor documentation and are examples of a general mechanism rather than recommendations. This article does not cover consumer credit regulation, which applies different obligations. The example is illustrative rather than a client case.
