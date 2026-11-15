---
hub: discovery
record_id: DISC-491
slug: foreign-currency-payment-costs-nobody-analyses-by-route
title: Foreign-currency payment costs nobody analyses by route
description: Bank fees, exchange-rate margins and intermediary charges on foreign payments are posted to one expense line and never compared. How to see what each payment route really costs as invoice volumes grow.
lead: Bank fees, exchange-rate margins and intermediary charges on foreign payments are posted to one expense line and never compared. How to see what each payment route really costs as invoice volumes grow.
category: Payments, Expenses & Spend Operations
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Payments, Expenses & Spend Operations
problem_domain: Payments, Expenses & Spend Operations
problem_owner: Financial controller or treasury lead responsible for supplier payments
budget_owner: CFO or financial director
sources:
  - https://learn.microsoft.com/en-us/dynamics365/business-central/finance-how-update-currencies | https://learn.microsoft.com/en-us/dynamics365/business-central/finance-how-update-currencies
  - https://learn.microsoft.com/en-us/dynamics365/business-central/payables-how-apply-purchase-transactions-manually | https://learn.microsoft.com/en-us/dynamics365/business-central/payables-how-apply-purchase-transactions-manually
  - https://www.fsb.org/2021/10/targets-for-addressing-the-four-challenges-of-cross-border-payments-final-report/ | https://www.fsb.org/2021/10/targets-for-addressing-the-four-challenges-of-cross-border-payments-final-report/
summary: Bank fees, exchange-rate margins and intermediary charges on foreign payments are posted to one expense line and never compared. How to see what each payment route really costs as invoice volumes grow.
layout: plain
---
A manufacturer imports components from China, Germany and the United States. Payments go out through its main bank, sometimes through a second bank when the first is slow, and occasionally through a payment service a director signed up for. At year-end, the "bank charges" line is much larger than budget, and the foreign exchange loss account is larger still. Nobody can say which route, supplier or currency drove the cost, because every payment was posted as an invoice amount plus a lump of charges.

## The problem in plain language

A foreign-currency payment has several costs. There is the visible bank fee. There is the difference between the exchange rate the bank applies and a reference rate, which is often the larger cost and rarely shown as a separate figure. There may be charges from intermediary banks that reduce the amount the supplier receives, leading the supplier to invoice the shortfall. And there is the difference between the rate used when the invoice was recorded and the rate when it was paid. Most finance systems capture the total, not the parts, so the business cannot compare routes, banks or currencies.

## What the buyer is actually trying to solve

The financial controller or treasury lead who searches for this usually wants to know whether the business is paying too much to move money abroad, which route is cheapest for which currency and amount, and how to capture enough data to decide. The trigger is often growth in foreign invoice volume, which turns a small cost into a material one.

## Evidence and system mechanism

### Bank rates differ from reference rates, and gains and losses follow

Microsoft's documentation on [updating currency exchange rates in Business Central](https://learn.microsoft.com/en-us/dynamics365/business-central/finance-how-update-currencies) explains why the local currency cost of a foreign invoice cannot be known at invoice date: payment terms delay payment to a later date with a different rate, and bank currency rates always differ from official rates. It walks through how unrealised gains and losses are calculated at month-end and then reversed when the realised gain or loss is posted at payment. The documentation on [applying vendor entries](https://learn.microsoft.com/en-us/dynamics365/business-central/payables-how-apply-purchase-transactions-manually) adds that applying entries in different currencies can leave small residual amounts posted as realised gains or losses. All of this is useful accounting, but it mixes market movement with the cost of the route, unless the business records the rate applied and a reference rate side by side.

### Cost and transparency of cross-border payments is a recognised problem

The Financial Stability Board's [targets for enhancing cross-border payments](https://www.fsb.org/2021/10/targets-for-addressing-the-four-challenges-of-cross-border-payments-final-report/) address four challenges, cost, speed, transparency and access, across wholesale payments, retail payments and remittances, with end-2027 as the common target date for most targets. The fact that central banks and regulators set targets for cost and transparency shows that the full cost of a cross-border payment is not always easy for the payer to see.

## Why this becomes urgent

Invoice volume growth is the main trigger. A business making a handful of foreign payments a year can absorb unclear costs. When it starts paying dozens of foreign suppliers monthly, adds new currencies or moves to smaller, more frequent payments, the costs multiply. Fixed fees per payment matter more for small payments, and exchange-rate margins matter more for large ones, so the cheapest route depends on the payment profile, which is changing.

## Economic consequence

Without route-level analysis, the business keeps paying the default route even when cheaper options exist for some currencies or amounts. Exchange margins hidden inside the rate are never negotiated. Short payments caused by intermediary charges lead to supplier queries, top-up payments with their own fees, and strained relationships. Budgeting for imported costs is less accurate because the true landed cost of each supplier is unknown. Finance spends time explaining the exchange loss account each month without being able to separate market movement from avoidable cost, adding to the burden described in [manual reconciliation between systems](/impact/manual-reconciliation-between-systems-labour-cost/).

## Root cause

- **Costs are posted in totals.** Fee, margin and intermediary charges are not captured separately.
- **No reference rate is recorded.** Without a reference rate at payment time, the margin cannot be calculated.
- **Routes are not tagged.** Payments do not record which bank or service and which charging option was used.
- **Bank data is not imported in detail.** Statements and payment confirmations hold the detail, but it stays in PDFs and portals, a pattern described in [finance reconciling information systems already hold](/patterns/why-finance-reconciles-information-that-systems-already-hold/).
- **Nobody owns the comparison.** Treasury, accounts payable and the bank relationship sit with different people.

## What good looks like

Every foreign payment record carries a small set of fields: currency, amount, route used, charging option, rate applied, a reference rate for the same time, visible fees, and the amount the supplier confirmed receiving. Fees and margin are posted to separate accounts from market exchange movements. Bank confirmation data is imported rather than retyped. Each quarter finance produces a simple analysis of total cost by route, currency and payment size band, and uses it to set routing rules, such as which bank to use for which currency, and to negotiate margins. Suppliers who repeatedly receive short payments are moved to a charging option that avoids it. This also reduces the after-the-fact corrections described in [currency corrections after invoices are issued](/discovery/why-tax-and-currency-corrections-keep-happening-after-invoices-are-issued/).

## Diagnostic questions

- For your last 20 foreign payments, can you state the exchange-rate margin on each?
- Which routes and charging options are used, and who chooses them?
- How many suppliers queried short payments in the last year?
- Are bank fees and exchange margins posted separately from exchange gains and losses?
- When was your foreign payment pricing last reviewed with your bank?

## Practical next actions

1. Take a sample of recent foreign payments and, for each, record the rate applied, a reference rate for the same time, the visible fees and the amount the supplier received.
2. Calculate the total cost of each payment as a percentage and group results by route, currency and payment size.
3. Add route, charging option, rate applied and reference rate as fields on foreign payment records going forward.
4. Separate bank fees and exchange margins from market exchange gains and losses in your chart of accounts.
5. Import payment confirmations and statement detail from your banks instead of retyping totals.
6. Set routing rules based on the analysis and use the results to negotiate pricing with your banks, then repeat the analysis quarterly.

## Where Mellorca fits

Mellorca helps finance teams capture the data needed to see payment costs clearly, connect bank data to the finance system and build the regular analysis. This often starts with a [digital systems audit](/services/digital-systems-audit/) of how payments and bank data flow today.

## Method note

This article draws on Microsoft's Business Central documentation and the Financial Stability Board's cross-border payment targets. It is not treasury or investment advice, and exchange control rules for South African residents should be confirmed with your bank. The opening example is illustrative.
