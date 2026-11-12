---
hub: insights
record_id: INS-061
slug: how-duplicate-customer-records-are-created
title: How Duplicate Customer Records Are Created
description: Duplicate customers are rarely just typing errors. They come from changing emails, rebrands, returning buyers and unclear customer structures. How to recognise and prevent them.
lead: Duplicate customers are rarely just typing errors. They come from changing emails, rebrands, returning buyers and unclear customer structures. How to recognise and prevent them.
category: Data Ownership
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Data Ownership
sources:
  - Deduplicate records in HubSpot | https://knowledge.hubspot.com/records/deduplication-of-records
  - Merge records | https://knowledge.hubspot.com/records/merge-records
  - Section 16 Quality of information - POPIA | https://popia.co.za/section-16-quality-of-information/
related:
  - What Happens When Two Systems Both Think They Own the Same Data | /insights/what-happens-when-two-systems-both-think-they-own-the-same-data/
  - Poor Data Is an Operations Problem, Not Just a Data Problem | /insights/poor-data-is-an-operations-problem-not-just-a-data-problem/
  - How to decide what should be the system of record | /insights/how-to-decide-what-should-be-the-system-of-record/
summary: Duplicate customers are rarely just typing errors. They come from changing emails, rebrands, returning buyers and unclear customer structures. How to recognise and prevent them.
layout: plain
---
Ask most businesses how many customers they have and you will get two answers: the number in the system and the number people believe. The gap between them is usually duplicate customer records. The same person or company appears twice, three times or more, each copy holding part of the history.

The usual explanation is careless data capture. Sometimes that is true, but it is rarely the main cause. Duplicate customer records are mostly created by perfectly ordinary events: customers change, businesses change, and systems are asked to recognise people using clues that do not stay constant. Understanding those events is the key to preventing duplicates rather than cleaning them up every year.

> A duplicate is what a system creates when it meets someone it already knows and fails to recognise them.
>

## Start with a harder question: who is "the customer"?

Many duplicates exist because the business has never agreed what a customer record represents. Consider a single relationship with a construction group. There is the holding company that signs the master agreement, two operating subsidiaries that each receive invoices, five building sites that take deliveries, and a dozen site managers and buyers who place orders. Depending on who captures the record, any one of these might be entered as "the customer".

If one team records the subsidiary, another records a site, and the website creates a record for a buyer's email, the system now holds several "customers" that are really parts of one relationship. None of them is technically a duplicate of another, yet the business cannot see total sales, total debt or total service history for the group.

Before tackling duplicates, define your customer structure. Typically that means separating:

- **the legal entity** that is billed and carries credit risk;
- **accounts or branches** under that entity;
- **sites or delivery points**;
- **people** who act for the customer.

When each level has its own place, many apparent duplicates turn out to be missing links rather than extra records.

## The life events that create duplicates

### The customer's contact details change

Many systems recognise people by email address. HubSpot's documentation, for example, explains that it deduplicates contacts automatically by matching the email address of a new contact against existing contacts. That works well until the customer uses a different address. A buyer who once enquired from a personal address and later orders from a work address is, to the system, two people. A buyer who moves to a new employer and keeps buying from you is either correctly linked to a new company or, more often, recorded again from scratch.

### The business changes its name or structure

Companies rename, rebrand, convert from sole proprietor to private company, merge or are acquired. Each change can lead staff to create a new customer rather than update the existing one, especially where the registration number or VAT number is not recorded. HubSpot deduplicates companies by their primary domain name, which means a rebrand to a new website domain can produce a new company record unless someone links the two. The patterns that follow are described in [why the same customer has three different names in your systems](/patterns/why-does-the-same-customer-have-three-different-names-in-your-systems/).

### A customer returns after a long gap

Returning customers are a common source of duplicates. The staff member capturing the order may not search, may search with a slightly different spelling, or may not be able to see archived or dormant records. Creating a new record is quicker than investigating, so a returning customer becomes a new one.

### The customer arrives through a new channel

A walk-in customer, an online buyer and a marketplace customer may all be the same person. If each channel creates customers in its own way, the business accumulates parallel records. Separate departmental records add cost of their own, as set out in [the financial impact of departments keeping separate customer records](/impact/departments-separate-customer-records-financial-impact/).

### Records are loaded without an identifier

Bulk loads are a particular risk. HubSpot's guidance states that if an import does not include the email address or another unique identifier, each row is imported as a new contact. The same principle applies in most systems: a list of names without a stable key cannot be matched, so it is added.

## Why matching rules alone do not solve it

It is tempting to rely on duplicate detection. It helps, but every matching rule makes a trade-off. A strict rule, such as exact email match, misses customers who use several addresses. A loose rule, such as similar name and same town, flags many false matches, and staff learn to click past the warnings.

The strongest protection is a dependable identifier captured at the right moment. For businesses, a company registration number or VAT number is far more stable than a trading name or website. For individuals, the identifiers available are weaker, which is why the account-opening process matters more than any later clean-up.

## Why duplicates matter beyond tidiness

Duplicate customers split history, credit exposure and service records, and they cause customers to repeat themselves, a cost described in [customers repeating information because records are disconnected](/impact/pain-of-customers-repeating-information-disconnected-records/). They also carry a compliance dimension. Section 16 of South Africa's Protection of Personal Information Act requires a responsible party to take reasonably practicable steps to ensure that personal information is complete, accurate, not misleading and updated where necessary. When a person's details are split across several records, updating one leaves outdated information in the others.

## Be careful how you merge

Merging is the usual remedy, and it should be done deliberately. HubSpot's documentation notes that when records are merged, the primary record's property values are generally kept, timeline activity from both records is combined, and records cannot be unmerged afterwards. Merging two records that are really different customers is harder to fix than leaving a duplicate in place. A short review step for merges, especially where balances or contracts are involved, is worth the time.

## Prevention at a glance

| Cause | Prevention |
| --- | --- |
| Unclear customer structure | Separate legal entity, account, site and contact levels |
| Changing email or domain | Allow several emails or domains per record; capture a registration or VAT number for businesses |
| Name changes and restructures | Update the existing record and keep the previous name searchable |
| Returning customers | Require a search before creation, including dormant records |
| New channels | Route all channels through the same matching step |
| Imports without identifiers | Refuse imports that lack a matching key |

## An illustrative example

Consider an illustrative Gqeberha supplier of industrial cleaning products with about fifty staff. Its sales team believed it served around 600 active business customers, but the CRM held far more customer records. A review of the extra records showed that only a minority came from typing errors. Most came from buyers who had changed jobs or email addresses, customers that had rebranded, and branches of the same group captured as separate customers.

The supplier introduced a simple structure of group, account and site, made the company registration number required for new business accounts, allowed several email addresses per contact, and required a search, including dormant accounts, before a new customer could be created. Existing duplicates were reviewed and merged in batches, with finance approving any merge involving an outstanding balance.

## A practical diagnostic

1. Take a sample of recent duplicate pairs and record which life event or route created each one.
2. Write down what a customer record represents in your business, and whether everyone agrees.
3. Check which identifier your systems use to recognise customers, and how often it changes.
4. Confirm who may create customers, and whether a search is required first.
5. Agree a merge procedure with a review step before running any bulk clean-up.

Duplicate customer records are less a data-entry failure than a recognition failure. Fixing recognition, through clear structure and stable identifiers, keeps a CRM from [turning into an expensive address book](/insights/how-a-crm-turns-into-an-expensive-address-book/).
