---
hub: patterns
record_id: PAT-010
slug: when-new-business-brings-more-paperwork-than-profit
title: When new business brings more paperwork than profit
description: Special terms, custom pricing and one-off processes make growth costly. When each account adds more handling than margin, administration outgrows revenue.
lead: Some growth arrives wrapped in special terms, custom pricing and one-off processes. When each new account adds more handling than margin, the business is growing its administration faster than its revenue.
category: Manual Work & Administrative Load
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Manual Work & Administrative Load
pattern_family: Manual Work & Administrative Load
observable_condition: New accounts, products and special arrangements increase revenue, but back-office handling, exceptions and administrative headcount rise faster than the revenue they support.
primary_identification: Complexity-driven administration in which growth adds variety and exceptions faster than volume, with handling cost hidden in overheads.
commercial_value_dimensions: Margin, labour capacity, cash flow, billing risk and scalability
sources:
  - Google SRE - Operational Efficiency: Eliminating Toil | https://sre.google/workbook/eliminating-toil/
  - What is Process Mining? - IBM | https://www.ibm.com/think/topics/process-mining
  - Muda, Mura, Muri - Get a Quick Introduction - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/muda-mura-muri/
related:
  - The cost of work that adds no new information | /patterns/the-cost-of-work-that-adds-no-new-information/
  - The process that gets slower every time volume increases | /patterns/the-process-that-gets-slower-every-time-volume-increases/
  - The business process that only works because someone remembers | /patterns/the-business-process-that-only-works-because-someone-remembers/
summary: Some growth arrives wrapped in special terms, custom pricing and one-off processes. When each new account adds more handling than margin, the business is growing its administration faster than its revenue.
layout: plain
---
## Observable condition

The sales team has had a good quarter. New accounts have been opened, a larger client has been won and a new product line has started to sell. Yet the people who process the work are more stretched than ever, and the month-end numbers look less impressive than the sales board suggested.

Look closely at what the new business brought with it. One new client wants invoices split by cost centre and sent to three addresses. Another pays on sixty days instead of thirty and needs a purchase order number on every document. A third was won on a special price that has to be applied by hand because the price list cannot hold it. The new product line needs its own order form, its own supplier, its own delivery arrangement and a separate stock sheet. Each concession was reasonable when it was agreed. Together they have changed how much work a rand of revenue now requires.

An illustrative example: a Western Cape packaging supplier with about forty staff grew its customer base by a quarter over two years, mostly by taking on smaller accounts and agreeing to their individual requirements. Revenue rose. So did the number of credit notes, statement queries, manual price overrides and delivery exceptions. The finance and order-processing team grew from four to seven people, and gross margin per order fell.

## Realisation

Growth is usually measured in one dimension: revenue. Administration responds to a different set of dimensions: the number of customers, the number of transactions, the number of variations in how those customers are served and the number of exceptions that fall outside the standard way of working. When revenue grows mainly through volume of similar work, administration can stay relatively flat. When revenue grows through variety, administration grows faster than the revenue it supports.

This is easy to miss because the extra effort is never charged to the account that caused it. The special invoice format is absorbed by the billing clerk. The manual price is absorbed by the order desk. The statement queries are absorbed by the credit controller. Each account looks profitable on a price-minus-cost basis because the handling cost sits in overheads, spread across every customer evenly.

Google's site reliability engineering guidance describes one property of toil as work that scales up linearly with service size, traffic volume or user count. Administrative variety can be worse than linear. Every new variation interacts with the existing ones, so a business with ten pricing arrangements and five invoice formats has many more combinations to get right than one with two of each.

**Realisation prompt:** of the accounts you opened last year, which ones needed something your standard process could not do?

## Identification

This is a pattern of complexity-driven administration: growth that adds variety faster than it adds volume. The visible symptom is back-office headcount and overtime rising faster than revenue. The common assumption is that the team is simply busier because the business is bigger. The structural cause is that each new account, product or arrangement is allowed to bring its own process, and nobody measures what that process costs to run.

It is related to [why revenue growth requires more admin staff](/patterns/why-revenue-growth-requires-more-admin-staff/), which looks at the absence of operating leverage as volume rises, and [when growth makes the business feel less efficient](/patterns/when-growth-makes-the-business-feel-less-efficient/), which looks at coordination breaking down as teams grow. This Pattern looks at something narrower: the kind of growth the business accepts, and how much handling each new piece of revenue carries with it.

## Diagnosis

- **Sales terms are agreed without an operational view.** The person who agrees a special arrangement is rarely the person who has to carry it out every month. The deal is assessed on price and volume, not on handling effort.
- **Systems cannot hold the variation.** When the accounting or order system cannot store a customer-specific price, billing rule or delivery instruction, the variation lives in a person's memory, a sticky note or a side spreadsheet, and every transaction requires someone to apply it by hand.
- **Exceptions are not counted.** Credit notes, manual overrides and re-issued invoices are treated as part of normal work rather than as evidence of a process that does not fit the customer.
- **Handling cost sits in overheads.** Because administration is not allocated to customers or products, a demanding small account and a simple large one appear equally attractive.
- **Variety accumulates and is never retired.** Old arrangements stay in place long after the reason for them has gone, so the number of variations only ever increases.

[Process mining](https://www.ibm.com/think/topics/process-mining), as IBM describes it, uses system event logs to reveal how processes actually run, including variations and deviations from the intended model. Even without such tools, the same idea applies: the number of distinct ways the business handles an order or an invoice is a measurable property, and it is often far higher than managers expect.

## Commercial impact

The commercial value at stake is margin, labour capacity, cash flow and scalability.

Margin erodes quietly because the handling cost of complex accounts is paid by the whole business. Capacity is consumed by variations rather than by volume, so the team cannot absorb further growth without hiring, the route described in [scaling by adding headcount](/impact/scaling-by-adding-headcount/). Cash flow suffers when non-standard invoices are delayed, queried or rejected by the customer's accounts department. Scalability is limited because every new account risks adding another special case to a process that is already hard to run.

There is also a risk dimension. Manual application of special prices and terms produces errors, and errors in billing produce disputes, write-offs and strained client relationships.

## Common misidentification

This condition is usually read as a staffing problem. The answer chosen is another administrator, which relieves the pressure for a while and confirms the assumption that growth simply requires more people.

It can also be misread as a sales problem, leading to a blanket refusal of any non-standard request. That throws away good business. Some variation is worth paying for. The point is to know which variation earns its keep and to handle the rest through configuration rather than effort.

## Possibility

In a better state, the business knows what each kind of customer costs to serve, not only what it pays. Standard terms cover most accounts. Where a customer genuinely needs something different, the variation is set up once in the system, such as a customer-specific price list, a billing rule or a delivery profile, so it is applied automatically on every transaction rather than remembered. Sales people see the operational cost of a concession before they agree to it. Arrangements that no longer serve a purpose are retired.

For the packaging supplier, that might mean moving special prices into the accounting system's customer price lists, standardising invoice formats into a small number of options and reviewing every exception-heavy account once a year.

## Intervention

1. **Count the variations.** List the distinct pricing arrangements, payment terms, invoice formats and delivery arrangements currently in use. The number alone is often revealing.
2. **Find where exceptions cluster.** For one quarter, record credit notes, manual overrides, re-issued documents and customer queries by account. A small number of accounts usually produce most of them.
3. **Estimate handling effort by account type.** Use the approach in [how to calculate the real cost of a repetitive task](/insights/how-to-calculate-the-real-cost-of-a-repetitive-task/) to put an approximate time on the extra steps each variation requires.
4. **Move variation into configuration.** Where a variation is worth keeping, set it up in the system so it is applied automatically. Where the system cannot hold it, treat that as a design gap to close, not a job for a person.
5. **Give sales an operational view.** Agree a short checklist for non-standard requests that asks what the arrangement will require every month and who will do it.
6. **Retire old arrangements.** Review special terms annually and remove those that no longer have a reason to exist.

The broader principle, that systems built for a smaller business struggle as it grows, is explored in [why growth breaks systems that worked when the business was smaller](/insights/why-growth-breaks-systems-that-worked-when-the-business-was-smaller/).

## Diagnostic questions

- Has back-office headcount grown faster than revenue over the last two or three years?
- How many different pricing arrangements and invoice formats are currently in use?
- Which customer-specific rules exist only in someone's memory or a side spreadsheet?
- Do sales people see the handling cost of a concession before they agree to it?
- Which accounts produce the most credit notes, overrides and queries, and are they your most profitable ones?

## Bottom line

Growth creates more administration than revenue when the business accepts variety without counting what it costs to handle. Each special arrangement is small and reasonable on its own; together they turn the back office into the place where margin disappears. Knowing the cost to serve, moving worthwhile variation into system configuration and retiring the rest lets new business add profit rather than paperwork.
