---
hub: impact
record_id: CPS-430
slug: ecommerce-orders-manually-re-entered-fulfilment-accounting-labour-error-cost
title: Typed Three Times: The Labour and Error Cost of Disconnected Ecommerce
description: When online orders have to be retyped into fulfilment and accounting systems, a growing shop pays for hours of repeat entry, avoidable errors and extra copies of customer data.
lead: When online orders have to be retyped into fulfilment and accounting systems, a growing shop pays for hours of repeat entry, avoidable errors and extra copies of customer data.
category: Ecommerce Operations
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Ecommerce Operations
commercial_domain: Ecommerce Operations
primary_pain: Orders require manual re-entry into fulfilment or accounting systems
primary_cost_mechanism: Admin hours that scale with order volume, wrong-address and wrong-item errors with return and resend cost, invoice corrections, missed orders, and extra copies of customer personal information
sources:
  - About webhooks | https://shopify.dev/docs/apps/build/webhooks
  - Accounting API Overview — Xero Developer | https://developer.xero.com/documentation/api/accounting/overview
  - Protection of Personal Information Act 4 of 2013 - South African Government | https://www.gov.za/documents/protection-personal-information-act
related:
  - The cost of retyping customer details into every system | /impact/pain-duplication-of-customer-data-entry/
  - Retyping invoices into the accounting system: The labour and error cost | /impact/retyping-invoices-manual-capture-labour-error-cost/
  - Salespeople as data clerks: The payroll cost of re-entering customer details | /impact/salespeople-re-entering-customer-details-administrative-selling-payroll-cost/
summary: When online orders have to be retyped into fulfilment and accounting systems, a growing shop pays for hours of repeat entry, avoidable errors and extra copies of customer data.
layout: plain
---
## The 6 pm copy-and-paste shift

A small online homeware seller in Cape Town takes about 80 orders a day through its web shop. Every evening, Naledi exports the day's orders to a spreadsheet, sorts them by courier, and types each one into the courier portal and the warehouse list. The next morning, the bookkeeper copies the same orders into the accounting package as invoices. On a good day the whole routine takes three hours. On a busy day, such as the week of a sale, it takes five, and mistakes creep in: a transposed phone number, a missing apartment number, an invoice raised for the wrong amount.

The shop sells well. The back office has not kept up. Every order has been typed, in effect, three times: once by the customer, once into fulfilment and once into accounting. This article looks at that specific problem, orders that need manual re-entry into fulfilment or accounting systems, and at the labour and error cost of an ecommerce operation whose systems do not talk to each other.

## Where the manual steps hide

Most re-keying is not a conscious decision. It grows because each tool was added for a good reason and nobody connected them. Common hand-offs include:

- **Web shop to fulfilment.** Orders exported as a file and typed or imported into a courier portal, warehouse list or third-party logistics system.
- **Web shop to accounting.** Daily or weekly summaries entered as one journal, or individual invoices typed in, with fees and refunds handled separately.
- **Marketplace to everything else.** Orders from a marketplace arrive by email or a separate dashboard, so they are added by hand to stock and accounting.
- **Stock back to the shop.** Warehouse counts changed by hand in the shop, so the shop sells goods that are not available.
- **Tracking numbers back to customers.** Couriers send tracking details that someone pastes into the order and emails to the customer.

This is the practical form of the problem described in [business systems that do not talk to each other](/impact/business-systems-do-not-talk-integration-cost/), and in the pattern [the hidden cost of re-keying order information](/patterns/the-hidden-cost-of-re-keying-order-information/).

## The labour cost

Re-entry looks cheap because it is spread across many small moments. A realistic estimate keeps it visible. Suppose each order takes two minutes to enter into fulfilment and one and a half minutes to enter into accounting. That is 3.5 minutes. At 80 orders a day, over 22 working days, it comes to about 103 hours a month. At a loaded cost of R200 an hour, that is more than R20,000 a month, or around R250,000 a year, for work that adds no value for the customer. The figures are illustrative, so replace them with your own order volume and wage rates. The result usually surprises owners, because nobody ever added it up.

The cost also scales the wrong way. When a promotion doubles the order volume, the manual hours double too, at the moment when speed matters most. Sales growth then forces the business to hire administrative staff rather than to make money from the extra volume.

## The error cost

Typing creates mistakes at a rate that is small per entry and large over a year. Each mistake has a cost that is rarely recorded:

- **Wrong address or contact detail.** A parcel is delayed or returned, and you pay for the courier twice.
- **Wrong quantity or product.** The customer receives the wrong item, and the business pays for the return, the resend and the apology.
- **Wrong invoice amount.** A VAT or discount error means the customer's invoice and the web shop disagree. Finance spends time on a credit note. We explore the payment side in [manual payment matching and reconciliation cost](/impact/manual-payment-matching-reconciliation-cost/).
- **Missed orders.** An order falls through a gap in the export, and the customer waits for something that nobody knows they ordered.

The article [orders rekeyed after the sale](/impact/orders-rekeyed-after-sale-fulfilment-risk-cost/) covers the fulfilment risk in more detail. In ecommerce, errors are also public. A customer who receives the wrong item is more likely to say so in a review than to phone.

## A privacy side effect

Every export, spreadsheet and pasted email is another copy of customer names, addresses and phone numbers. The Protection of Personal Information Act asks a responsible party to take reasonably practicable steps to secure personal information in its possession, and the [Act's text](https://www.gov.za/documents/protection-personal-information-act) is available from the government site. Order data circulating through downloaded files and inboxes is harder to protect and harder to delete than data that moves directly between systems. This is general information, not legal advice.

## How systems can pass orders on automatically

Most mainstream shop platforms are built to push orders elsewhere. Shopify's developer documentation on [webhooks](https://shopify.dev/docs/apps/build/webhooks) explains that an app can subscribe to events such as order creation and receive near-real-time data, and lists integrating order data with accounting software and informing shipping companies of order changes among the things you can build. The same page describes webhooks as an alternative to continuously polling for changes. Accounting platforms offer matching interfaces. Xero, for example, publishes an [Accounting API](https://developer.xero.com/documentation/api/accounting/overview) that connected apps use to work with invoices and other accounting records.

In practice, most small businesses do not write any code. They use a connector or integration app that is already on the platform's marketplace, or a general automation tool, to carry the order from the shop to the courier and the accounting package. The point of the vendor documentation is to show that the plumbing exists, and that re-keying is a configuration question more often than a development project.

## Fix the order of the work

Connecting everything at once is a common cause of failed projects. A more reliable sequence follows the cost.

1. **Start with the highest-volume hand-off.** If most of the labour goes into accounting entry, connect that first. If errors cluster in fulfilment, begin there.
2. **Clean the product and customer data first.** An integration that moves untidy data only moves the mess faster. Standardise product codes, tax settings and shipping options before connecting.
3. **Run old and new routes side by side for a week.** Compare totals daily and fix the mismatches before switching off the manual route.
4. **Decide how failures are handled.** Integrations fail now and then. Someone should receive an alert and know what to do. The article on [handling failed integrations without losing the work in flight](/insights/how-to-handle-failed-integrations-without-losing-the-work-in-flight/) sets out how to do that.

Keep a person in the loop for exceptions such as high-value orders, address problems and fraud flags. The aim is to remove typing, not judgement.

## Practical next actions

1. **Time one normal day.** Record how many minutes are spent moving each order from the shop into fulfilment and accounting, then convert it to hours and Rand per month.
2. **Log every correction for two weeks.** Note wrong addresses, quantities and invoice amounts, and what each cost to fix.
3. **Map the hand-offs.** List each point where a person copies order data between systems, with the system names and the volume.
4. **Ask your vendors what they connect to.** Check the shop, courier and accounting apps' marketplaces and documentation for existing integrations before you consider custom work.
5. **Pick one hand-off and automate it.** Choose the highest-cost step, test it alongside the manual route for a week and compare the totals.
6. **Assign an owner for the integration.** Someone should receive failure alerts and be responsible for checking totals each week.

Naledi's evening is a useful benchmark. If the shop can sell an order in under a minute, nobody should have to spend three and a half minutes retyping it.
