---
hub: impact
record_id: CPS-079
slug: departments-separate-customer-records-financial-impact
title: Sales, finance and operations each with their own customer: The cost
description: When each department keeps its own version of the customer, invoices are rejected, credit holds are missed and cash arrives later. How to fix ownership.
lead: When each department keeps its own version of the customer, invoices are rejected, credit holds are missed and cash arrives later. How to fix ownership.
category: Data & Customer Experience
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Data & Customer Experience
commercial_domain: Data & Customer Experience
primary_pain: Sales, finance and operations each keep separate versions of customer information
primary_cost_mechanism: Cash-flow delay, credit exposure and cross-department rework from fragmented customer data
sources:
  - Section 16 Quality of information - POPIA | https://popia.co.za/section-16-quality-of-information/
  - https://www.sars.gov.za/wp-content/uploads/Docs/Government/Tax-Invoice-Checklist-Version-2-29032016.pdf | https://www.sars.gov.za/wp-content/uploads/Docs/Government/Tax-Invoice-Checklist-Version-2-29032016.pdf
  - The Government Data Quality Framework | https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework
related:
  - Customer requests lost in shared inboxes: The cost of missed service work | /impact/customer-requests-lost-shared-inbox-missed-service-work/
  - Manual payment matching turns cash visibility into reconciliation work | /impact/manual-payment-matching-reconciliation-cost/
  - Late invoices from manual billing: The cash-flow cost | /impact/late-invoicing-manual-billing-cash-flow-cost/
summary: When each department keeps its own version of the customer, invoices are rejected, credit holds are missed and cash arrives later. How to fix ownership.
layout: plain
---
## The tolerated pain: three departments, three customers

In many businesses the same customer exists three times. Sales has them in the CRM, with the buyer's name, the latest quote and notes from the last visit. Finance has them in the accounting system, with a registered name, a VAT number, credit terms and an account balance. Operations has them in a job, delivery or project system, or in a spreadsheet, with a site address, a contact on the ground and special handling instructions.

Each department maintains its own version because each needs slightly different information, and each version is correct for the department that keeps it. The trouble is that nobody owns the customer as a whole. When something changes, such as a new trading name, a different billing address, a credit hold or a new decision-maker, it is updated in one place and not the others.

Mellorca has covered the mistakes that arise when [customer details differ between applications](/impact/pain-customer-details-different-applications-cost-mistakes/). This article looks at the organisational root of the problem: departments acting as separate owners of the same customer, and what that costs the business commercially.

## Why businesses tolerate it

- **Each system was bought by a department for that department.** The CRM was a sales decision, the accounting package a finance decision, the job system an operations decision.
- **Each version works locally.** Within its own team, the data is good enough, so no one experiences the problem until work crosses a boundary.
- **Nobody's job is "the customer record".** Data ownership is not written into any role, so every team assumes another is responsible for keeping things aligned.
- **Reconciliation happens informally.** People phone or message each other to check details, which hides the gap behind goodwill and effort.

## Operational consequence

The cost shows up at the handoffs, where one department acts on information another department holds differently.

### Selling to customers finance would not sell to

Sales quotes and closes a new order for a customer that finance has placed on credit hold. Operations starts the work. The dispute about whether to deliver happens after costs have been incurred.

### Invoices that cannot be used

Finance raises an invoice using the registered name and address it holds, while the customer's procurement team expects a different entity or branch. The invoice is rejected or parked, and payment is delayed. For VAT-registered suppliers there is a compliance angle too. SARS's checklist for a full [tax invoice](https://www.sars.gov.za/wp-content/uploads/Docs/Government/Tax-Invoice-Checklist-Version-2-29032016.pdf), required where the supply including VAT exceeds R5,000, includes the recipient's name and address and, where the recipient is a vendor, the recipient's VAT registration number. If the customer details finance holds are out of date, the business can issue invoices that do not meet the requirements its customers need for their own VAT claims.

### Deliveries and service to the wrong place or person

Operations uses a site contact who left months ago, or a delivery address sales already knew had changed.

### Conflicting answers to the customer

The customer asks about an order, an account balance or a service history and gets different answers depending on who they speak to. Mellorca's pattern on [when your CRM knows something your finance system does not](/patterns/when-your-crm-knows-something-your-finance-system-does-not/) describes how this undermines confidence.

### Management cannot see the whole customer

Revenue per customer in the CRM does not match revenue per customer in the accounting system because the records do not align. Questions such as "who are our most profitable customers?" become a manual matching exercise.

## How the pain becomes money

- **Cash-flow impact:** invoices rejected or queried because of wrong customer details are paid later.
- **Bad-debt and credit exposure:** work done for customers who should have been on hold, or on terms finance never approved.
- **Labour cost:** staff time spent checking, phoning, correcting and re-issuing across departments.
- **Rework cost:** failed deliveries, reissued invoices and repeat service calls.
- **Revenue and margin loss:** poor customer experience that weakens renewals, and an inability to see which customers are actually profitable.
- **Compliance exposure:** section 16 of the Protection of Personal Information Act requires a responsible party to take reasonably practicable steps to ensure personal information is complete, accurate, not misleading and updated where necessary. Three uncoordinated copies of a contact's details make that harder to demonstrate.

## A transparent cost model

The cost can be estimated from internal records over one quarter:

> **Quarterly cost of fragmented customer data**
> invoices rejected or queried for customer-detail reasons × average extra days to payment × daily cost of funding the debtor balance
> + correction incidents × average hours to resolve × loaded hourly cost
> + failed deliveries or service visits × cost per repeat
> + value of work done for customers on hold that proved hard to collect

*Illustrative example.* A building-supplies wholesaler in KwaZulu-Natal with around 60 staff keeps customers in a CRM used by its sales representatives, an accounting system used by its credit controllers and a delivery spreadsheet used by dispatch. Over a quarter, the credit team tags every invoice query and rejection with its cause. A meaningful share trace back to customer details: wrong branch, outdated registered name or a missing VAT number on the invoice. Dispatch logs deliveries that went to an old address. In one case, sales accepted a large order from a customer finance had already placed on hold. The wholesaler then prices each category using its own debtor days, staff costs and delivery costs. The figures are the business's own; the categories are what make them visible.

## When it becomes commercially urgent

- debtor days are rising and a noticeable share of queries relate to customer details;
- a large customer complains that invoices do not meet their procurement or VAT requirements;
- work has been delivered to a customer on credit hold;
- management wants customer profitability reporting and cannot produce it;
- the business is about to add a new system, such as e-commerce or a customer portal, that will create a fourth version.

## What better looks like

Better does not mean one system for everything. It means clear ownership of each customer data element and a defined way for that data to flow.

The UK [Government Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework), drawing on DAMA UK, describes dimensions that translate directly to this problem: **uniqueness**, meaning no duplication of records; **consistency**, meaning values do not contradict other representations of the same entity; and **timeliness** and **accuracy**, meaning the data reflects reality now. Fragmented departmental records usually fail on all four.

A workable model for a small or mid-sized business usually looks like this:

| Customer data element | Typical owning system | Owner |
| --- | --- | --- |
| Registered name, VAT number, billing address, credit terms, credit status | Accounting system | Finance |
| Contacts, opportunities, relationship notes | CRM | Sales |
| Sites, delivery addresses, service instructions | Operations or job system | Operations |
| Shared customer identifier | All systems | Agreed jointly |

Each element is changed only in its owning system and copied, ideally automatically, to the others. A shared customer identifier links the records so they can be matched without guesswork. Mellorca's guide on [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/) sets out the decisions in more detail.

## Practical remediation steps

1. **Tag the failures** for one quarter: invoice queries, failed deliveries and credit conflicts caused by customer data.
2. **Agree ownership** of each customer data element in a one-page table signed off by sales, finance and operations.
3. **Introduce a shared customer code** and add it to every system's customer record.
4. **Clean the top customers first.** Match and correct the records for the customers that account for most revenue.
5. **Make credit status visible to sales** before quotes are issued, even if only through a daily export at first.
6. **Integrate the owning system to the others** for the elements that change most, so updates flow rather than being retyped.
7. **Review monthly** using the same failure tags to confirm improvement.

Connecting CRM, accounting and operational systems properly is the kind of work Mellorca does under [systems implementation and integration](/services/systems-implementation-integration/), starting with the ownership table rather than the software.

## Bottom line

When sales, finance and operations each keep their own version of the customer, the business pays at every handoff: slower payment, rework, credit exposure and an unclear view of who its valuable customers are. Agreeing who owns each piece of customer information, and letting it flow from there, turns three partial pictures into one dependable customer record.
