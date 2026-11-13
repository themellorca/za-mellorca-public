---
hub: patterns
record_id: PAT-230
slug: when-duplicate-records-start-causing-operational-problems
title: When duplicate records become an operational issue
description: Duplicate customers, suppliers and products start as an irritation and end as double payments and wrong balances. Spot the tipping point and control it.
lead: Duplicate customers, suppliers and products start as an irritation and end as double payments, wrong balances and distorted reports. Here is how to spot the tipping point and control it.
category: Data, Reporting & Management Visibility
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Data, Reporting & Management Visibility
pattern_family: Data, Reporting & Management Visibility
observable_condition: The same customer, supplier or product exists as several records, producing conflicting balances, split payments and customers who are asked to repeat their details.
primary_identification: Uncontrolled record creation: records can be created from several entry points without a match check, a stable identifier or an owner for merging.
commercial_value_dimensions: Payment and credit control, financial accuracy, customer experience, POPIA data accuracy, staff time
sources:
  - What Is Data Quality? - IBM | https://www.ibm.com/think/topics/data-quality
  - What is Master Data Management? - IBM | https://www.ibm.com/think/topics/master-data-management
  - Record linkage - Wikipedia | https://en.wikipedia.org/wiki/Entity_resolution
  - https://help.salesforce.com/s/articleView?id=sales.duplicate_prevention_map_of_reference.htm | https://help.salesforce.com/s/articleView?id=sales.duplicate_prevention_map_of_reference.htm
related:
  - When customers know less than your internal systems do | /patterns/when-customers-know-less-than-your-internal-systems-do/
  - When every department reports the same metric differently | /patterns/when-every-department-reports-the-same-metric-differently/
  - Why your business has data but no single view of operations | /patterns/why-a-business-with-plenty-of-data-still-has-no-single-view-of-operations/
summary: Duplicate customers, suppliers and products start as an irritation and end as double payments, wrong balances and distorted reports. Here is how to spot the tipping point and control it.
layout: plain
---
## Observable condition

A customer phones a Cape Town building-supplies company to query an invoice. The agent finds the account, but the invoice is not there. She searches again and finds a second account for the same company, spelt with "(Pty) Ltd" instead of "PTY LTD", with a different delivery address and half the order history. A third entry, created by a sales rep for a quote, has no history at all. The customer is told three different balances in the same week.

Duplicate records start as a nuisance. A contact appears twice in the mailing list. A supplier is captured under two names. A product has two stock codes. Staff learn to work around them, and for a while that is cheaper than fixing them. Then the duplicates begin to cause things to go wrong in ways that cost money and attention: a supplier is paid twice, a customer is invoiced from the wrong account, a stock count never reconciles, a statement goes to an address that is no longer used.

An illustrative example: a Gqeberha logistics firm discovers during a year-end review that one supplier exists under four vendor records. Payments have been split across them, so the true annual spend with that supplier was never visible and a volume discount was never claimed.

## Realisation

The realisation is that duplicates are not a data-cleaning problem that happens to sit in the background. Once other processes depend on a record, a duplicate becomes a decision error waiting to occur. The invoice, the credit limit, the delivery schedule and the marketing email all follow whichever record someone happened to choose.

It is also a sign that the business has no agreed answer to a simple question: how do we recognise that two entries describe the same thing? People make that call informally at the point of capture, often in a hurry, and each person applies a slightly different instinct.

**Realisation prompt:** pick your ten largest customers and ten largest suppliers and search for each by name, trading name and registration number. How many return more than one record?

## Identification

This is a pattern of uncontrolled record creation. The visible symptom is double entries and conflicting balances. The common assumption is that the cause is careless data capture and the remedy is a one-off tidy-up. The structural cause is that records can be created without first checking for an existing match, from several entry points, with no rule for what counts as the same party and no one accountable for merging them.

The published Insights [how duplicate customer records are created](/insights/how-duplicate-customer-records-are-created/) and [how to decide what should be the system of record](/insights/how-to-decide-what-should-be-the-system-of-record/) cover the origins and the ownership question. This Pattern focuses on the point at which duplicates stop being untidy and start disrupting operations, and on how to recognise that point in a business that has not yet had an incident.

## Diagnosis

- **No match check at capture.** Systems often accept a new record without asking whether a similar one exists. Where a duplicate check is available, it is frequently switched off or never configured. Vendors such as Salesforce publish documentation on duplicate and matching rules precisely because this control has to be set up deliberately.
- **Many doors into the same list.** Records arrive from web forms, sales quotes, imports, the accounts team and staff typing directly. Each uses its own format and none consults the others.
- **Names are poor identifiers.** Trading names, registered names, abbreviations and typing variations make exact matching unreliable. A registration number, tax number or verified email is a stronger key, but is often optional. Wikipedia's entry on [record linkage](https://en.wikipedia.org/wiki/Entity_resolution) describes it as the task of finding records that refer to the same entity across data sources, which is needed when there is no shared identifier.
- **Merging is risky and unowned.** Combining two records may affect invoices, history and permissions, so people leave duplicates in place rather than risk damage. Without a named owner, the job never happens.
- **Several systems hold overlapping lists.** The CRM, billing system and delivery tool each keep a customer list. Fixing one leaves the others unchanged. [IBM's overview of master data management](https://www.ibm.com/think/topics/master-data-management) describes this problem: without a single agreed view of core entities, each system carries its own version.

## Commercial impact

The commercial value at stake is financial accuracy, control over payments and credit, customer experience and staff time.

The most direct cost is payment error. Duplicate supplier records are a recognised route to double payments and bypassed approval limits, because a check that looks for an invoice on one vendor will not see the same invoice on another. The Impact page [on duplicate supplier invoice payments](/impact/duplicate-supplier-invoice-payments-weak-controls-cost/) sets out how the control weakness arises. On the revenue side, a customer split into two accounts can exceed their intended credit limit twice over, or be chased for money that has already been paid against the other record.

Customer experience suffers more quietly. A client who receives two copies of every email, or who is asked to repeat their details because the agent opened the wrong record, concludes that the business is disorganised. The Impact page [on departments keeping separate customer records](/impact/departments-separate-customer-records-financial-impact/) covers the wider financial effect. There is also a compliance dimension: under POPIA, personal information must be kept accurate, and a person who asks for their data to be corrected or deleted cannot be properly served if their details are scattered across several records.

Finally, reports are distorted. Customer counts are inflated, average revenue per customer is understated, and a supplier's true spend is hidden. [IBM's discussion of data quality](https://www.ibm.com/think/topics/data-quality) lists duplication alongside accuracy and completeness as a core dimension, because decisions built on duplicated data inherit the error.

## Common misidentification

The standard response is an annual clean-up, often a weekend with a spreadsheet. It reduces the count and then the duplicates return, because the way records are created has not changed. It also carries risk: merging by hand without knowing which record is linked to open orders can break history.

Another response is to blame a particular team, typically sales or the front office. The people at the point of entry are working with a system that allows duplicates and gives them no quick way to check. The fault is in the design of the process, not the diligence of the person.

## Possibility

In a better state, every new customer, supplier or product is checked against existing records before it is created, using a stable identifier such as a registration number as well as the name. A single record is named as the master for each type of party, and other systems refer to it. Suspected duplicates are flagged for a named person to review on a regular schedule, with a clear rule for what is kept and what is merged. When two records are found, the business learns where they came from and closes that route.

## Intervention

1. **Measure the problem.** Export customers and suppliers, sort by registration number, tax number and normalised name, and count the clusters. A rough percentage is enough to establish scale.
2. **Find the entry points.** List every way a record can be created, and who can do it. Reduce the list where possible.
3. **Define a match rule.** Agree which fields identify a party, and make the key field mandatory for new records.
4. **Turn on the checks you already have.** Many systems include duplicate warnings or matching rules. Configure them for the main record types.
5. **Merge the costly cases first.** Start with suppliers and customers who carry open balances, and keep a note of which record survived and why.
6. **Review monthly.** Assign a named person to check the flagged list for fifteen minutes each month and report the trend.

## Diagnostic questions

- If you search for your biggest client three ways, how many records appear?
- Does your system warn when a similar customer or supplier already exists?
- Who is allowed to create new supplier records, and who checks them?
- Has a payment, credit note or statement ever gone to the wrong duplicate?
- Who is accountable for deciding which record survives a merge?

## Bottom line

Duplicate records become an operational issue the moment payments, credit, delivery or customer communication depend on them. Checking for a match before creating a record, naming a master, and giving one person responsibility for merging turns an annual clean-up into a small, routine control and protects the accuracy of everything built on top of the list.
