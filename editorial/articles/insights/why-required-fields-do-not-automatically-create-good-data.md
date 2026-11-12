---
hub: insights
record_id: INS-089
slug: why-required-fields-do-not-automatically-create-good-data
title: Why Required Fields Do Not Automatically Create Good Data
description: Making a field mandatory guarantees only that something is typed into it. Here is how to design forms that produce data people can actually rely on.
lead: Making a field mandatory guarantees only that something is typed into it. Here is how to design forms that produce data people can actually rely on.
category: Data Quality
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Data Quality
sources:
  - Protection of Personal Information Act 4 of 2013 - South African Government | https://www.gov.za/documents/protection-personal-information-act
  - What is Microsoft Dataverse? - Power Apps | https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intro
  - Text input control in Power Apps - Power Apps | https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-text-input
related:
  - What Data Should Be Required at the Point of Capture? | /insights/what-data-should-be-required-at-the-point-of-capture-and-what-can-wait/
  - Why More Fields Usually Do Not Fix Data Quality | /insights/why-more-fields-usually-do-not-fix-data-quality/
  - How to Clean Data Without Creating a Never-Ending Cleanup Project | /insights/how-to-clean-data-without-creating-a-never-ending-cleanup-project/
summary: Making a field mandatory guarantees only that something is typed into it. Here is how to design forms that produce data people can actually rely on.
layout: plain
---
A finance manager in Sandton asks for a change to the customer form: the VAT number must be mandatory. The next week, the number field fills up. A month later, the same manager finds forty customers with the VAT number 1111111111 and a dozen more with "n/a" typed in. Every record is complete. Roughly a third are useless.

This is the pattern behind most required-field projects. The control works exactly as designed, because the system refuses to save a blank. What it cannot do is tell whether the value is right, whether the person entering it knew it, or whether it was available at that moment. This article explains why mandatory fields so often disappoint and what produces better data instead.

## What a required field actually checks

A required field checks one thing: that the field is not empty. Platforms such as Microsoft Dataverse let an administrator mark a column as required, and canvas apps let a builder set conditions on input controls, as described in the [Dataverse documentation](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intro). These are useful controls. But they are a gate on presence, not on truth.

When a person is blocked from saving a record and does not have the information, they have three options: stop and go find it, escalate, or type something that satisfies the system. In a busy office with a queue of customers and a target to hit, the third option wins. The person is not being careless. They are responding rationally to the incentive the form created.

## How people satisfy a field they cannot fill honestly

The filler values are surprisingly consistent across businesses, and learning to recognise them is the quickest way to measure the damage.

- **Repeated characters:** 0000000000, 1111111111, "xxx", "test" and "a".
- **Placeholders that look honest:** "n/a", "unknown", "to follow", "-" and "none".
- **Plausible defaults:** the first item in a dropdown, today's date, or the company's own address in place of the customer's.
- **Borrowed values:** a colleague's phone number or a generic info@ address in a contact field.

The plausible defaults are the most dangerous, because nobody notices them. A dropdown that defaults to "Retail" will quietly classify half of your wholesale customers as retail, and every report that segments by industry will be wrong in a way that looks normal. Our article on [how bad CRM data gets created](/insights/how-bad-crm-data-gets-created/) walks through several of these routes in more detail.

## Why the problem grows over time

Filler data rarely stays where it was entered. It flows into reports, invoices, mailing lists and integrations. A wrong value in a customer record can end up on a quote, on an invoice and in a credit application, as we describe in [how one typing error becomes a disputed invoice and a wrong report](/insights/how-one-typing-error-becomes-a-disputed-invoice-and-a-wrong-report/). Meanwhile each additional mandatory field adds friction, so people get faster at filling them with whatever works. The more fields you force, the lower the average quality of each.

There is also a legal angle for South African businesses. The Protection of Personal Information Act requires a responsible party to take reasonably practicable steps to make sure personal information is complete, accurate, not misleading and updated where necessary. The wording is in the [Act itself](https://www.gov.za/documents/protection-personal-information-act). A form that is satisfied by "1111111111" meets none of those tests, even though every field is populated.

## Ask whether the field should be required at all

The first question to ask is not how to enforce a field but whether the person completing the form can reasonably know the answer at that point in the process. A salesperson capturing a lead at an exhibition does not have a company registration number. A receptionist logging a delivery does not have the purchase order. Forcing the field at that moment guarantees filler.

Instead, separate the moment of capture from the moment of need. Ask for the minimum at the first step, and make the fields required at the stage where the information is genuinely used. A customer can be saved as a lead with a name and phone number, but cannot move to "Quote issued" without a billing address, and cannot be invoiced without a VAT number if one applies. This ties the requirement to a real consequence, and the person completing it usually has the information by then. Our guide to [what makes data good enough to operate with](/insights/what-makes-data-good-enough-to-operate-with/) offers a way to decide which fields deserve that level of control.

## Replace presence checks with validity checks

Where a field does matter, check what is in it, not just that it exists.

- **Format rules:** a South African ID number has thirteen digits, a VAT number has ten and starts with a 4, and a mobile number has a recognisable pattern. Reject "1111111111" outright by blocking repeated digits.
- **Lookups instead of free text:** let people choose a province, bank or product from a maintained list rather than typing it.
- **Cross-checks:** compare a postal code against a suburb, or an end date against a start date.
- **Explicit "unknown" values:** offer an honest option such as "Not yet provided" that is visible in reports and can be chased, instead of forcing a made-up value.

The last of these is the most underused. An honest blank is data about your data. It tells you exactly which records need follow-up. A fake value hides that need and passes every check.

## Make the right entry the easy entry

Bad data is often a design problem rather than a discipline problem. If the form has thirty fields on one screen, people will rush. If the same information is held in another system, people will copy it by hand and introduce errors. Reducing the number of fields, pre-filling from a trusted source and keeping labels in the language people use all improve accuracy without adding a single rule. When data is typed into several systems, the better fix is to stop re-keying it, not to add more checks to each form.

It also helps to show people what their entry is used for. A field labelled "Industry" invites a guess. A field labelled "Industry (used to pick the correct quote template)" invites care, because the consequence is visible.

## Keep measuring after the form changes

No form design is permanent. Teams change, products change and people find new shortcuts. A short monthly check protects the improvement: count the records where a key field holds a known filler value, or where it is identical across an implausibly large share of records. A sudden spike of one value is almost always a workaround. Treat it as feedback on the form, and ask the team what stopped them from entering the real value.

Assign someone to own each important field. When nobody owns the definition of "customer type", every team uses its own, and the field slowly becomes noise. This is part of why data quality tends to decline as a business grows, which we cover in [why business data quality declines with growth](/insights/why-business-data-quality-declines-with-growth/).

## Practical next actions

1. Export one important table, such as customers or suppliers, and count how often each required field contains repeated digits, "n/a", "test" or the same value as a default. This gives you a baseline in an afternoon.
2. For each required field, write down who enters it, at what moment, and whether they can reasonably know the answer then. Move the requirement to the stage where the information is truly needed.
3. Add validity rules to the three fields that cause the most downstream damage, such as VAT number, email and bank details, and add an honest "not yet provided" option to the rest.
4. Name an owner for each key field and agree what a correct value looks like, including the definition of every dropdown option.
5. Schedule a monthly filler-value check and review the result with the people who do the data entry, not only with management.

A required field is a useful tool for stopping an empty record. It is a poor tool for creating a correct one. Good data comes from asking at the right moment, checking what comes back, and making the honest answer as easy to give as the convenient one.
