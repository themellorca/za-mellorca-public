---
hub: patterns
record_id: PAT-233
slug: why-empty-fields-in-business-records-have-no-owner
title: The Cost of Missing Fields That Nobody Owns
description: A blank delivery contact or VAT number is rarely carelessness. It is a question nobody was asked to answer. Here is the cost and a way to give each field an owner.
lead: A blank delivery contact or VAT number is rarely carelessness. It is a question nobody was asked to answer. Here is the cost and a way to give each field an owner.
category: Workflow & Process Efficiency
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Workflow & Process Efficiency
pattern_family: Workflow & Process Efficiency
observable_condition: Invoices are rejected, deliveries fail or payments are skipped because a field such as a contact, reference or bank detail was left empty and nobody was responsible for it.
primary_identification: Unassigned data responsibility: fields are defined without a named role to supply, check or maintain them, so completeness depends on memory and goodwill.
commercial_value_dimensions: Cash flow, customer experience, staff chasing time and reporting accuracy
sources:
  - How to create and edit columns for Microsoft Dataverse - Power Apps | https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-edit-fields
  - Column data types in Microsoft Dataverse - Power Apps | https://learn.microsoft.com/en-us/power-apps/maker/data-platform/types-of-fields
  - What is Microsoft Dataverse? - Power Apps | https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intro
related:
  - Why Handoffs Create More Delay Than the Work Itself | /patterns/why-waiting-between-people-takes-longer-than-the-work/
  - The Cost of Processes That Move Through Email | /patterns/the-cost-of-running-business-processes-through-email-threads/
  - When Order Status Lives in Several Systems | /patterns/when-the-true-status-of-an-order-is-spread-across-several-systems/
summary: A blank delivery contact or VAT number is rarely carelessness. It is a question nobody was asked to answer. Here is the cost and a way to give each field an owner.
layout: plain
---
## Observable condition

An order arrives at the warehouse with no delivery contact number. The invoice goes out with the wrong customer reference, so the client's accounts team rejects it. A new supplier is paid late because the bank account field in the record was empty and the payment run skipped it. Each of these is a small gap in a single field. Each takes a person ten minutes to chase. Together they take hours every week.

When someone asks why the field was empty, the answers are all reasonable. The salesperson thought accounts would add it. Accounts thought it came from sales. The warehouse assumed the form would not have been submitted without it. Everyone is correct about their own part and nobody is responsible for the gap.

An illustrative example: a Johannesburg wholesale distributor of electrical components, with a customer master list kept in a shared workbook. Credit limit, delivery address and VAT number are all supposed to be filled in, but the list has no rule about who completes which column or when.

## Realisation

The realisation is that a field is a small piece of responsibility. Somebody has to know it is required, supply the value, and check it. When a business designs a form, it usually decides what to ask and forgets to decide who answers. The empty field is then not an error by anyone; it is the natural result of a question with no addressee.

That matters because gaps are cheap to create and expensive to discover. They are created in seconds at the front of a process and found days later at the back, by someone with no ability to fix them. [Microsoft's documentation on creating and editing columns in Dataverse](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-edit-fields) explains that a column can be given a business requirement level, so that a record cannot be saved without a value. The existence of that setting is a good prompt: for each field, someone has to have decided whether it is optional, and who will see to it when it is not.

**Realisation prompt:** choose one field that is often empty in your customer or supplier records. Who would you ask to fill it, and would they say it was theirs?

## Identification

This is a pattern of unassigned data responsibility. The visible symptom is a record that cannot move to the next step because something is missing. The common assumption is that people are careless or that the form is too long. The structural cause is that nobody holds the job of completing, checking or maintaining a given piece of information, so completion depends on goodwill and memory.

It overlaps with the situation in [when one missing item stops a larger process](/patterns/when-one-missing-item-stops-a-larger-process/), which looks at how a single gap halts downstream work. This pattern looks upstream, at why the item was missing in the first place.

## Diagnosis

- **Fields have a label but no owner.** The form says "Delivery contact" but does not say whose job it is to provide it. The first person to open the record might assume someone with more knowledge will fill it.
- **Requirement is unclear.** Whether a field is mandatory, optional or required only for some customers is held in staff memory. New starters guess.
- **Different departments need different fields.** Sales cares about the contact name, accounts about the VAT number, operations about the delivery window. Each leaves the others' columns alone, since they seem to belong to someone else.
- **Values are accepted in any format.** A phone number entered as text with spaces, or a reference with a trailing character, looks complete and still fails in the next system. [Microsoft's guide to column data types in Dataverse](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/types-of-fields) shows how a typed column constrains what can be entered. Without that kind of constraint, errors enter quietly.
- **No one reviews completeness.** There is no regular check that lists records with missing values, so gaps are found only when they cause a failure.
- **Fixes are made downstream.** The person who discovers the gap supplies the value for that one record and moves on, so the cause stays in place for the next record.

## Commercial impact

The value at stake is cash flow, customer experience, staff time and the reliability of the reports built from the data.

The most direct cost is delay in getting paid. An invoice rejected for a missing purchase order number or reference goes back into the queue, and the payment date moves. For a business that runs close to its overdraft, a few late invoices matter.

The second cost is chasing. Every missing field creates a small investigation: an email, a phone call, a wait. Because these are spread across many people they rarely appear as one cost, yet they are real. The Impact note on [support requests without clear owners](/impact/support-requests-without-clear-owners-cost/) shows the same dynamic when a request has no home.

The third is customer perception. A client who has to supply their VAT number three times, or who receives a delivery without notice because a contact was missing, concludes the business is disorganised. They rarely say so; they simply place the next order elsewhere.

The fourth is poor reporting. A column that is half empty cannot be summarised honestly. Totals by region, by product or by customer type are wrong in ways nobody can measure, and decisions rest on them. The Impact note on [untrusted business numbers](/impact/untrusted-business-numbers-unreliable-decision-cost/) describes what happens once leaders stop believing the figures.

## Common misidentification

The typical response is to send a reminder: please complete all fields. That works for a week. Another is to make every field mandatory, which gets the form submitted with the word "none" or a row of nines in the empty boxes. Both treat the gap as carelessness. A third is to ask finance or an administrator to clean the data each month, which fixes today's records and leaves the process that produces the gaps untouched.

## Possibility

In a better state, every field that matters has a named role that supplies it and a point in the process at which it is checked. Required fields cannot be skipped. Optional fields are visibly optional. A weekly list shows records with gaps in important fields, and the role responsible clears it.

The result is not a perfect database, but one in which a gap is noticed on the day it appears, by the person who can fix it. The Insight on [how to make ownership clear at every stage](/insights/how-to-make-ownership-clear-at-every-stage/) sets out how responsibility can be written into a process instead of assumed.

## Intervention

Start with the fields that cause the most rework, not with every field. Five or six important ones will account for most of the chasing.

## Practical next actions

1. **Find the fields that fail most.** Review the last month of rejected invoices, returned deliveries and chased records, and list which missing values caused them.
2. **Name a role for each field.** Write beside each one who supplies it, at what step, and who checks it. Use a role, not a person, so it survives leave and resignations.
3. **Mark required fields as required.** If your system or form tool allows it, stop a record from being saved without them. If it does not, add a checklist step before the record moves on.
4. **Constrain the format.** Use dropdowns, number fields and date pickers wherever a value has a fixed shape, so entries are consistent.
5. **Run a weekly gap list.** Produce a short list of records with empty important fields and give it to the responsible role to clear.
6. **Fix the cause, not only the record.** When a gap is found, ask where in the process it should have been caught and change that step.

## Diagnostic questions

- Which three fields do staff most often chase someone to fill in?
- For each, can you name the role responsible for supplying it?
- Can a record be saved or sent on without the fields that downstream steps need?
- Who looks at incomplete records, and how often?
- When a gap is fixed, does anyone change the step that allowed it?

## Bottom line

A missing field is usually a question that nobody was asked to answer. Giving each important field an owner, a point of capture and a simple completeness check removes a surprising amount of chasing, delay and doubt in the numbers, without asking anyone to try harder.
