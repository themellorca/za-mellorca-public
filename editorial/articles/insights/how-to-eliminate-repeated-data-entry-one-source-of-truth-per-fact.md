---
hub: insights
record_id: INS-136
slug: how-to-eliminate-repeated-data-entry-one-source-of-truth-per-fact
title: How to Eliminate Repeated Data Entry
description: Typing the same customer details into four systems creates errors, not just extra work. Here is how to capture each fact once and let every system use it.
lead: Typing the same customer details into four systems creates errors, not just extra work. Here is how to capture each fact once and let every system use it.
category: Systems and Data
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Systems and Data
sources:
  - Understanding Success Criterion 3.3.7: Redundant Entry - WAI - W3C | https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html
  - Who makes an application to process Special Personal Information? | https://www.inforegulator.org.za/popia/
  - Welcome to Dynamics 365 Sales | https://learn.microsoft.com/en-us/dynamics365/sales/overview
related:
  - How CRM Ownership Should Work | /insights/how-crm-ownership-should-work-roles-decisions-and-permissions/
  - How Duplicate Customer Records Are Created | /insights/how-duplicate-customer-records-are-created/
  - How Manual Data Entry Creates Downstream Problems | /insights/how-one-typing-error-becomes-a-disputed-invoice-and-a-wrong-report/
summary: Typing the same customer details into four systems creates errors, not just extra work. Here is how to capture each fact once and let every system use it.
layout: plain
---
A new customer signs a service agreement. The account manager types the company name, registration number and contact details into the CRM. A week later the billing clerk types the same details into the accounting package. The onboarding coordinator then types them again into a welcome form and a project tracker. Each person is careful. Yet by month three the company appears as "Delta Logistics (Pty) Ltd", "Delta Logistics" and "DELTA LOGISTIC", and the invoice has gone to a contact who left.

Repeated data entry is not mainly a typing problem. It is a design problem, and it has a design solution: capture each fact once, at the source, and let every other place use it.

## What repeated entry actually costs

The visible cost is time. The larger cost is inconsistency. Every manual copy is an opportunity for a transposed digit, a skipped field or a version that was correct last month. Once records disagree, people stop trusting any of them and start checking each against the others, which creates more work. Our article on [how bad CRM data gets created](/insights/how-bad-crm-data-gets-created/) traces how this happens in practice.

There is also a compliance angle. The Protection of Personal Information Act includes a principle on information quality, which expects the responsible party to take reasonably practicable steps to make sure personal information is complete, accurate and not misleading, and updated where necessary. The Information Regulator, which enforces the Act, publishes [guidance and the legislation on its POPIA page](https://www.inforegulator.org.za/popia/). Four copies of the same contact, each edited by a different person, make that duty harder to meet.

## Find where the same fact is entered twice

Start with one journey, such as a new customer, a new supplier or a new employee. For each, make a table with the main facts across the top (name, registration or ID number, address, contacts, bank details, product or service ordered) and the systems and documents down the side. Mark every cell where someone types the fact by hand. The result is usually a surprise: a customer's address may be typed in five places, whereas the product ordered is typed in only one.

Then add two columns. Which entry is the first one, where the fact originates? And which entry is the one that people treat as correct when there is a conflict? These are often different, and that gap is where most disputes come from.

## Choose a source of truth for each fact

For each fact, name one system where it is created and corrected. Other systems may display or use it, but should not become independent places to edit it. A workable pattern for a growing business is:

- **Customer identity and contacts:** the CRM.
- **Legal and billing details, payment terms:** the accounting or billing system, populated from the CRM at the point of becoming a customer.
- **Delivery or project specifics:** the operational system, linked to the customer record rather than retyping it.

Writing this down as a simple "who owns which fact" list does more good than most software purchases, because it ends the argument about which version is right. It also fits with the ownership thinking in [why software ownership needs to be explicit](/insights/why-software-ownership-needs-to-be-explicit/).

## Five ways to remove the second entry

Once a source of truth exists, remove duplicate typing in order of effort, starting with the cheapest.

1. **Delete the second entry.** Sometimes a form field is asked for out of habit. If a later step never uses the answer, take the field out.
2. **Reference instead of retype.** Use a look-up or link to the original record so the downstream form shows the customer rather than asking for the name again.
3. **Use built-in connectors or imports.** Many CRM and accounting products offer a native link or scheduled import. Check the vendor documentation before building anything custom.
4. **Automate the handoff.** When a deal reaches "won", create the billing account and the onboarding task from the CRM record, with a visible check for a person to confirm.
5. **Build or buy an integration.** Where systems are many and changes frequent, a more deliberate design may be justified. See [point-to-point integrations versus a more maintainable architecture](/insights/point-to-point-integrations-vs-a-more-maintainable-integration-architecture/) for how to think about that choice.

The same principle applies to forms customers fill in. The W3C's guidance on [redundant entry](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html), part of the Web Content Accessibility Guidelines, says that information a person has already provided in the same process should be auto-populated or available to select, with limited exceptions such as security. It was written for accessibility, but it is equally good practice for any customer-facing onboarding form: do not ask the customer for the same thing twice.

## Set up the first entry to be right

If a fact is entered once, that one entry must be good. Add light controls at the source rather than checking later:

- Make the fields that downstream systems need required, and use drop-down lists for values such as province, industry or payment terms.
- Validate formats that have a known structure, such as a thirteen-digit ID number or a company registration number in the standard layout.
- Warn about possible duplicates when a new account is created, so that the person can pick the existing record instead.

Avoid the temptation to demand twenty required fields on day one. Long mandatory forms push people to type "n/a" and move on, which is worse than a missing value, because it looks like data.

## Where to accept some duplication

Not every repeat can be removed immediately. Legacy systems may have no connector, and a one-off supplier may not justify an integration. In those cases, reduce the risk rather than ignoring it: assign the manual copy to one named person, have a second person check a sample, and log the date of the last reconciliation. Treat it as a known weak point on a list, not as a permanent feature. Our piece on [turning side spreadsheets into CRM improvements](/insights/turning-side-spreadsheets-into-crm-improvements/) shows how to move stubborn spreadsheet entry into the main system step by step.

## Practical next actions

1. Pick one journey, such as new customer onboarding, and build the table of facts against systems, marking every manual entry.
2. For each fact, decide which system is the single place where it is created and corrected, and write the list on one page.
3. Remove the easiest second entries first: take out unused fields and replace retyping with a look-up or link.
4. Check the vendor documentation of your CRM and accounting tools for a native connector or import before commissioning anything custom.
5. Add required fields, format checks and a duplicate warning at the point of first entry, then review the number of corrections after a month.
