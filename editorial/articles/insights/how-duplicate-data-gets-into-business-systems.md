---
hub: insights
record_id: INS-228
slug: how-duplicate-data-gets-into-business-systems
title: How Duplicate Data Gets Into Business Systems
description: Duplicate records enter business systems through a handful of predictable routes: multiple capture points, free-text names, imports, integrations, retries, conversions and workarounds. Here is how to close each one at source.
lead: Duplicate records enter business systems through a handful of predictable routes: multiple capture points, free-text names, imports, integrations, retries, conversions and workarounds. Here is how to close each one at source.
category: Digital Operations
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Digital Operations
sources:
  - Set up duplicate detection rules to keep your data clean - Power Platform | https://learn.microsoft.com/en-us/power-platform/admin/set-up-duplicate-detection-rules-keep-data-clean
  - Define alternate keys using Power Apps - Power Apps | https://learn.microsoft.com/en-us/power-apps/maker/data-platform/define-alternate-keys-portal
  - Idempotent requests - Stripe API Reference | https://docs.stripe.com/api/idempotent_requests
related:
  - Where Customer Information Gets Lost During Onboarding | /insights/where-customer-information-gets-lost-during-onboarding/
  - Why uncontrolled configuration changes create operational risk | /insights/why-uncontrolled-configuration-changes-create-operational-risk/
  - Why your reports cannot agree on the same number | /insights/why-your-reports-cannot-agree-on-the-same-number/
summary: Duplicate records enter business systems through a handful of predictable routes: multiple capture points, free-text names, imports, integrations, retries, conversions and workarounds. Here is how to close each one at source.
layout: plain
---
Most businesses discover duplicate data by accident. A customer receives two statements. A sales report shows the same company twice with different totals. A supplier is paid twice for one invoice. Someone is asked to "clean up the CRM", spends a week merging records, and six months later the duplicates are back.

They come back because the clean-up dealt with the result and not the route. Duplicate records do not appear at random. They enter through a small number of predictable doors, and each door can be narrowed once it has been identified. This article describes the common ways duplicates get into business systems and what stops each one at source.

> A duplicate is created every time a system cannot recognise something it already knows. Fixing duplicates means fixing recognition, not just merging records.
>

## Why duplicates are an operating problem, not a tidiness problem

A duplicate customer record splits history in two. Half the orders, notes and complaints sit on one record and half on the other. Credit limits are checked against only part of the balance. Marketing sends two copies of every message, and a customer who unsubscribed on one record keeps receiving mail on the other. In finance, a duplicate supplier or invoice record can lead directly to a double payment, a risk described in [the cost of duplicate supplier invoice payments](/impact/duplicate-supplier-invoice-payments-weak-controls-cost/).

Reports suffer too. Counts of customers, active accounts and average order values are all wrong in ways that are hard to spot, because nothing looks broken. The data simply describes a business slightly different from the real one.

## The seven common entry routes

### 1. More than one place to capture the same thing

A customer can arrive through the website form, a sales rep's phone, the accounts team and a marketing event list. If each route creates a record in its own way, and none checks what already exists, every additional route is another source of duplicates. This is the most common cause, and it usually grows with the business as new channels are added.

### 2. Free-text identifiers

"ABC Construction (Pty) Ltd", "ABC Construction" and "A.B.C. Constr." are the same company to a person and three different companies to most systems. Where records are identified by typed names rather than a stable reference, such as a company registration number, a VAT number or a customer account code, near-duplicates are inevitable. The same customer appearing under different names is explored in [why the same customer has three different names in your systems](/patterns/why-does-the-same-customer-have-three-different-names-in-your-systems/).

### 3. Imports and bulk uploads

Spreadsheet imports are a fast way to load many records and a fast way to load many duplicates. An event attendee list, a purchased contact list or a migration from an old system often goes in without being matched against what is already there. One import can undo months of careful data entry.

### 4. Integrations that create instead of match

When two systems are connected, the integration has to decide whether an incoming record is new or an update to one that already exists. If it has no reliable way to tell, it usually creates. Microsoft's documentation for Dataverse describes *alternate keys* as an efficient and accurate way of integrating data with external systems, particularly when the external system does not store the internal identifier the platform uses. Without an agreed key of this kind, such as an account number both systems hold, an integration has to guess, and guessing produces duplicates.

### 5. Retries after a failure or time-out

Automations and integrations retry when a request fails or takes too long. If the first attempt actually succeeded but the confirmation was lost, the retry creates the record a second time. Stripe's API documentation explains the standard defence: an idempotency key, a unique value sent with a request, so that a repeated request with the same key returns the original result instead of performing the operation twice. Many business tools do not offer this, which is why retry design matters; see [how to design retries without creating duplicate work](/insights/how-to-design-retries-without-creating-duplicate-work/).

### 6. Conversion steps that create new records

Many systems create new records when work changes stage: a lead becomes a contact and an account, a quote becomes an order, an applicant becomes an employee. If the conversion does not check for an existing match, a returning customer is created as a new one. Some platforms prompt at this point, but a prompt that can be clicked past is a weak control.

### 7. Workarounds when people cannot find the record

If search is poor, or a user does not have permission to see an existing record, the quickest way to get on with the job is to create a new one. This is rarely carelessness. It is a predictable response to a system that makes finding harder than creating.

## What stops duplicates at source

Each route has a matching control. Most are design decisions rather than software purchases.

| Entry route | Control at source |
| --- | --- |
| Many capture points | One intake path per record type, or every path checks for a match before creating |
| Free-text identifiers | A required stable reference, such as a registration number, account code or email address |
| Imports | Match against existing records before loading; load updates, not new rows |
| Integrations | A shared key both systems hold, used to update existing records |
| Retries | Idempotency keys, or a check for an existing result before acting again |
| Conversions | A required match step before a new record can be created |
| Workarounds | Better search, sensible visibility rights and a way to request access quickly |

### Use duplicate detection, but understand its limits

Most CRM and ERP platforms offer built-in duplicate detection. Microsoft's guidance for Power Platform and Dynamics 365 notes that default rules exist for accounts and contacts but not for other record types, and recommends basing rules on a field with unique values, such as email. Its documentation also lets rules ignore blank values, which matters: if two records are both missing an email address, a careless rule treats them as matches.

Detection rules help, but they only work as well as the data they compare. If identifying fields are optional, inconsistently formatted or often blank, rules will either miss duplicates or flag false ones. The stronger fix is to make the identifying field required and well formatted at the point of capture.

### Decide which system creates which record

Duplicates multiply when several systems are allowed to create the same kind of record. Deciding which system is authoritative for customers, suppliers and products, and letting others only reference or update those records, removes several entry routes at once. The approach is set out in [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/).

## An illustrative example

Consider an illustrative Pretoria provider of office cleaning services with about 120 staff and several hundred business clients. Its CRM held nearly a fifth more client records than the accounts team believed it had clients. A clean-up merged them, and within a year the problem had returned.

Tracing new duplicates back to how they were created showed three routes. Sales reps created clients by name when quotes were accepted. The website quote form created a new contact for every submission. And a nightly sync from the accounting package created a client whenever it could not match the accounting name to a CRM name.

The fixes were modest. The accounting customer code became a required field and the matching key for the sync. The website form checked for an existing contact by email before creating one. Converting a quote into a client required a search step that showed likely matches. New duplicates fell to a handful a month, which the team reviewed weekly.

## A practical diagnostic

1. Take twenty recent duplicates and find out how each one was created. The pattern usually shows two or three dominant routes.
2. List every route that can create a customer, supplier or product record, including imports and integrations.
3. For each record type, name the field that uniquely identifies it. If there is none, that is the first thing to fix.
4. Check how integrations decide between create and update, and what happens when a request is retried.
5. Ask staff when they create a new record instead of using an existing one, and why.

Cleaning up existing duplicates is still worthwhile, but it should come after the main routes are narrowed. Otherwise the clean-up becomes a recurring project rather than a one-off correction, and the people doing it become, in effect, a permanent manual matching service. The pattern is familiar from [why one customer exists differently in three systems](/patterns/why-does-one-customer-exist-differently-in-three-systems/).
