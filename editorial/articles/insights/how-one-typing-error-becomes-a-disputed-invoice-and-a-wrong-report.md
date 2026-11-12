---
hub: insights
record_id: INS-232
slug: how-one-typing-error-becomes-a-disputed-invoice-and-a-wrong-report
title: How Manual Data Entry Creates Downstream Problems
description: Manual data entry is cheap at the keyboard and expensive afterwards. Here is how small errors travel into invoices, stock, reports and compliance, and how to stop them at the entry point.
lead: Manual data entry is cheap at the keyboard and expensive afterwards. Here is how small errors travel into invoices, stock, reports and compliance, and how to stop them at the entry point.
category: Data Quality
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Data Quality
sources:
  - Section 16 Quality of information - POPIA | https://popia.co.za/section-16-quality-of-information/
  - What Is Data Quality? - IBM | https://www.ibm.com/think/topics/data-quality
  - What Are Data Silos? - IBM | https://www.ibm.com/think/topics/data-silos
  - Set up duplicate detection rules to keep your data clean - Power Platform | https://learn.microsoft.com/en-us/power-platform/admin/set-up-duplicate-detection-rules-keep-data-clean
related:
  - Why Data Quality Gets Worse as a Business Grows | /insights/why-business-data-quality-declines-with-growth/
  - How to Clean Data Without Creating a Never-Ending Cleanup Project | /insights/how-to-clean-data-without-creating-a-never-ending-cleanup-project/
  - Why Cheap SaaS Can Become Expensive Operations | /insights/why-cheap-saas-can-become-expensive-operations/
summary: Manual data entry is cheap at the keyboard and expensive afterwards. Here is how small errors travel into invoices, stock, reports and compliance, and how to stop them at the entry point.
layout: plain
---
Manual data entry looks like a small cost. Someone types an order from an email into the accounting package, copies a delivery address from a PDF, keys in a supplier invoice. Each task takes minutes. The real cost is not the minutes. It is what happens afterwards, when the typed data flows into invoices, stock counts, reports and customer messages, and a small slip at the start becomes a problem several steps away and several days later, in a place where nobody thinks to look for its cause.

This article follows the trail of those downstream problems, so that the case for fixing the entry point is based on what actually goes wrong rather than on a general sense that typing is wasteful.

## Why the error appears far from where it was made

A typing error is cheap to fix at the moment it is made, when the person still has the source document in front of them. Every step it travels without being noticed makes it more expensive. Once a wrong quantity has been posted, it is picked up by the picking list, the invoice, the stock report and the monthly margin analysis. By the time a customer disputes the invoice, the original error has been copied into four places, and correcting it means finding and fixing each one.

The quality of data is not an abstract matter. The Protection of Personal Information Act, in its section on quality of information, requires a responsible party to take reasonably practicable steps to ensure that personal information is complete, accurate, not misleading and updated where necessary. A customer's wrong phone number or misspelt name is therefore not only an annoyance. For personal information, it is a compliance question.

## The common downstream problems

- **Wrong or disputed invoices.** A mistyped quantity, price or customer code produces an invoice the customer queries. Payment is held while the query is resolved, and the time spent on disputes is rarely counted against the original entry.
- **Duplicates.** The same customer entered twice, under slightly different spellings, splits their history in two. Credit limits are then not applied against the full balance, and marketing reaches the same person more than once. The mechanism is described in [how duplicate data gets into business systems](/insights/how-duplicate-data-gets-into-business-systems/).
- **Stock that does not match the shelf.** A transposed digit in a receiving note shows ten units where there are one hundred. Orders are held back, or purchasing buys stock the business already has.
- **Reports nobody trusts.** When managers find a few wrong numbers, they stop trusting the right ones too and start keeping their own spreadsheets. The result is that [reports cannot agree on the same number](/insights/why-your-reports-cannot-agree-on-the-same-number/).
- **Tax and compliance exposure.** Wrong VAT numbers, incorrect amounts or misdated documents can trigger queries from SARS, delay refunds or complicate an audit.
- **Customer irritation.** A wrong delivery address, a misspelt name in a message, or an invoice sent to the wrong person tells the customer that the business does not quite have its details straight.

## Retyping is where the quiet errors live

Most people enter data accurately most of the time. The trouble is that the work is repetitive, often done at the end of a busy day, and often interrupted. Errors cluster at the edges: unusual formats, long reference numbers, handwritten documents, and the odd case that does not fit the field. Meanwhile the typing itself rarely has any check on it. A free-text field accepts "Jhb", "JHB", "Johannesburg" and "Joburg" equally, and every one of them will later have to be reconciled as the same place. This is a design problem, not a staff problem, and it is one reason why [bad CRM data gets created](/insights/how-bad-crm-data-gets-created/) even in careful businesses.

IBM's overview of data quality describes the usual dimensions of good data: accuracy, completeness, consistency, timeliness, uniqueness and validity. Manual entry puts pressure on every one of them. A rushed entry is inaccurate, a skipped field is incomplete, a variant spelling is inconsistent, a delayed entry is late, a re-keyed customer is a duplicate, and an unrestricted field accepts values that are invalid.

## Where the same data is typed more than once

The worst case is the same information keyed into several systems. An order captured in the website, retyped into accounting, retyped again into a courier portal. Each retyping is a new chance for a different error, and the three copies then disagree. IBM's explanation of data silos points out that disconnected systems hold their own versions of the same information, which leads to inconsistency and duplicated effort. The cost of this pattern is explored in [why copying data between systems is more expensive than it looks](/insights/why-copying-data-between-systems-is-more-expensive-than-it-looks/), and the operational effect in [how manual data transfer becomes an operational bottleneck](/insights/how-manual-data-transfer-becomes-an-operational-bottleneck/).

## How to reduce the damage without buying anything

Before any automation, a good deal can be done simply by tightening the entry point.

1. **Replace free text with choices.** Provinces, product categories, payment terms and reasons for returns should come from a list, not be typed.
2. **Validate at the point of entry.** Check that a VAT number has the right length, that an email address looks like one, that a quantity is positive and plausible.
3. **Search before creating.** Make it normal to look for an existing customer or supplier before creating a new one. Microsoft documents duplicate detection rules in Dataverse for exactly this purpose, matching on fields such as name or email before a record is saved.
4. **Enter once.** Decide which system is the first place a piece of data is captured, and let other systems receive it from there. Settling [which system owns which data](/insights/how-to-decide-which-system-owns-which-data/) is the groundwork.
5. **Check close to the source.** A second pair of eyes, or an automatic check against the source document, is cheapest immediately after entry.
6. **Track corrections.** Count how often entries are corrected and which fields are most affected. The pattern tells you where to start.

## An illustrative example

The following is a hypothetical case. A Pretoria electrical wholesaler receives orders by email as PDFs. A clerk retypes each into the order system. Over a quarter, the owner notices a rise in credit notes. Tracing a sample shows that most arise from three causes: wrong product codes where two similar codes exist, delivery addresses with missing unit numbers, and customers entered twice under different trading names.

The wholesaler makes three changes. Product codes are chosen from a searchable list that shows the description. The address form requires a unit field for sectional-title customers. Staff search the customer list before adding a new one, and a duplicate check flags matches. Credit notes for entry errors halve within two months, with no software purchased. Only then does the owner consider whether the PDF orders could be read automatically, now with a clear idea of which fields cause trouble.

## The point

The expense of manual data entry is not the time it takes. It is the chain of corrections, disputes, reconciliations and lost trust that begins when one wrong value is accepted without a check. Start by finding where entry errors are made and which downstream problems they cause, tighten that point, and only then decide what to automate. The effort saved is greatest when the error is stopped at its source.
