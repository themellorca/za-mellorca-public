---
hub: insights
record_id: INS-234
slug: what-data-should-be-required-at-the-point-of-capture-and-what-can-wait
title: What Data Should Be Required at the Point of Capture?
description: Every required field is a trade-off between data you can trust later and people who stop filling in the form. Here is how to choose.
lead: Every required field is a trade-off between data you can trust later and people who stop filling in the form. Here is how to choose.
category: Data Quality
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Data Quality
sources:
  - https://www.gov.uk/service-manual/design/form-structure | https://www.gov.uk/service-manual/design/form-structure
  - https://www.gov.za/documents/protection-personal-information-act | https://www.gov.za/documents/protection-personal-information-act
  - https://www.gov.uk/service-manual/service-standard/point-4-make-the-service-simple-to-use | https://www.gov.uk/service-manual/service-standard/point-4-make-the-service-simple-to-use
summary: Every required field is a trade-off between data you can trust later and people who stop filling in the form. Here is how to choose.
layout: plain
---
A receptionist at a Durban service company is on the phone with a new caller. The system will not let her save the enquiry without a company registration number, a physical address, and a second contact person. The caller does not have the registration number to hand, so she types 000000 and moves on. Three months later, the finance team is trying to raise an invoice against a company with a registration number of zeros.

Requiring more data at the point of capture sounds like a quality control. Done without thought, it does the opposite: it teaches people to enter anything that satisfies the form. The better question is which data must be there for the next step to work, and which can safely wait.

## Start from the next step, not from the wish list

Most capture forms grow by accretion. Finance asks for one more field, sales asks for another, and someone adds a question because a report might need it one day. The government design guidance on [structuring forms](https://www.gov.uk/service-manual/design/form-structure) offers a discipline worth borrowing: before adding a question, know why you are asking, what you will do with the answer, who needs to give it, how you will check it is accurate, and how it will be kept up to date and secure. The guidance calls the resulting list a question protocol and says it gives you a way of challenging unnecessary questions.

For a business, the translation is direct. For every field, write down the first process that cannot proceed without it. If the answer is "nothing stops, we just like having it", the field is optional. If the answer is "we cannot raise an invoice" or "we cannot book the technician", the field is a candidate for being required, but only at the moment that step happens, which is not always the moment of first capture.

## Sort fields into three groups

A workable approach divides every field into one of three tiers.

1. **Required to start.** Without this, the record cannot exist or the first action cannot be taken. Typically a name, a way to contact the person, and the reason for the contact. Keep this list as short as you can defend.
2. **Required before a specific stage.** Information that is genuinely needed, but only later: a VAT number before invoicing, a delivery address before dispatch, a signed mandate before a debit order. The system should block the stage, not the capture.
3. **Optional or inferred.** Data that is nice to have, or that can be derived or looked up, such as a company name from a registration number, or a province from a postal code.

This staging matters because the person capturing the record often does not have the information at the beginning. Forcing it early produces junk. Asking for it at the stage where it is needed means the moment of asking and the moment of knowing coincide.

## Ask only what you are entitled to ask

South African businesses have a legal reason to be disciplined. The [Protection of Personal Information Act](https://www.gov.za/documents/protection-personal-information-act) sets conditions for lawful processing of personal information, and the principle of minimality means that personal information may only be processed if, given the purpose, it is adequate, relevant and not excessive. Collecting identity numbers, home addresses or dates of birth "just in case" runs against that principle and creates something you must then secure and eventually dispose of. A required field that holds personal information should have a stated purpose you could explain to the person being asked.

## Make the right data easy and the wrong data hard

Once the list is settled, the form should help people enter good data without punishing them for not having it. Several controls work well in practice:

- **Use constrained inputs.** Dropdowns for provinces, service types and statuses prevent the five spellings of Gauteng that later split a report.
- **Validate format at the moment of entry.** A South African mobile number has a predictable length, and an email address has a recognisable shape. Catch the typo while the person is still on the phone with the customer.
- **Look things up instead of retyping.** If a company registration number returns the company name, the person does not need to type it, and cannot mistype it.
- **Allow an honest "unknown".** A field that offers "to be confirmed" with a reason, and a task to follow up, produces better data than a field that forces a dummy value. Dummy values look like data and are far harder to find than blanks.
- **Branch the questions.** The same design guide recommends branching questions so people answer only what is relevant to them, which shortens the form and removes whole categories of irrelevant fields.

## Watch for the signs of a bad required field

You can detect fields that are causing harm by looking at the data they produce. Run a simple count on each required field in your main system. If one value, such as "N/A", "0000", "test" or a single repeated address, appears far more often than chance would allow, the field is being worked around. A field with a high rate of rejected entries on submission is a sign that the rule does not match reality. And a required field that nobody ever reads in a downstream report is simply a tax on the person capturing.

The way poor entries creep in is described in [how bad CRM data gets created](/insights/how-bad-crm-data-gets-created/), and the related problem of duplicates in [how duplicate data gets into business systems](/insights/how-duplicate-data-gets-into-business-systems/). Both come back to the same cause: forms designed around what the organisation wants, not around what the person at the keyboard can supply at that moment.

## Decide who is accountable for the form

Capture rules need an owner, otherwise they drift back into a wish list. Give each key form a single person who approves new required fields and who must name the downstream process that needs the field. Review the form twice a year against the question protocol: is each field still used, still accurate, and still lawful to hold? Retire the fields that fail. Our overview of [what makes data good enough to operate with](/insights/what-makes-data-good-enough-to-operate-with/) offers a useful test of how much accuracy and completeness each field really needs.

The cost of getting this wrong is paid in time. Where staff retype information from web forms or paper into a system, the arguments for better capture are even stronger, as [the cost of retyping website enquiries into a CRM](/impact/retyping-website-enquiries-into-crm-lead-capture-cost/) shows.

## Practical next actions

1. Pick your most-used capture form and list every field, then write beside each the first process that cannot proceed without it.
2. Sort the fields into required to start, required before a stage, and optional or inferred, and move stage-specific fields to the stage that needs them.
3. Count the most common values in each required field and look for dummy entries such as zeros, "N/A" or "test".
4. Replace free text with dropdowns or lookups wherever the answer comes from a short, known list.
5. Name one owner for the form and book a six-monthly review that removes fields nobody uses.
