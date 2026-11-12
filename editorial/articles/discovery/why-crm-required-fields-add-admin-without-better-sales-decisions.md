---
hub: discovery
record_id: DISC-216
slug: why-crm-required-fields-add-admin-without-better-sales-decisions
title: CRM required fields create admin without improving decisions
description: Mandatory CRM fields guarantee that something is entered, not that it is true. How to decide which fields earn a place on the form before you replace or tidy your CRM.
lead: Mandatory CRM fields guarantee that something is entered, not that it is true. How to decide which fields earn a place on the form before you replace or tidy your CRM.
category: Sales Operations & CRM
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Sales Operations & CRM
problem_domain: Sales Operations & CRM
problem_owner: Sales operations manager or sales director responsible for the CRM form design
budget_owner: Sales director or managing director
sources:
  - https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-edit-field-portal | https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-edit-field-portal
  - https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-create-business-rule | https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-create-business-rule
  - https://www.gov.za/documents/protection-personal-information-act | https://www.gov.za/documents/protection-personal-information-act
summary: Mandatory CRM fields guarantee that something is entered, not that it is true. How to decide which fields earn a place on the form before you replace or tidy your CRM.
layout: plain
---
A sales manager at a Midrand equipment supplier opens the CRM during a quarterly review and finds that 40 percent of open deals share the same "Industry" value: "Other". The same deals have a "Competitor" of "N/A", a "Budget confirmed" box ticked, and an expected close date that is the last day of the month. None of this is dishonest. The CRM would not let reps save a deal without those fields, so they filled them with whatever got the screen to close. The business now has a form that is complete on paper and nearly empty of meaning.

Required fields are usually added with good intentions. Someone senior wants better data, so the system is told to insist on it. This article looks at why that rarely works, what the requirement setting really does, and how to decide which fields deserve to be mandatory.

## What a required field actually enforces

A required field enforces presence, not accuracy. Microsoft's documentation for [creating and editing columns in Dataverse](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-edit-field-portal), the data layer under Dynamics 365, puts it plainly: when a column is marked as required, a record cannot be saved without data in it. That is the whole guarantee. The system checks that something was typed or selected. It does not check that the value is true, current or useful, and it cannot tell a considered answer from a keystroke typed to get past the screen.

The result is predictable. Where a field is mandatory and the rep does not know the answer, the rep picks the first option in the list, types a full stop, or enters a dummy date. The data looks present in every report. It is also wrong in a way that is harder to spot than an empty cell, because an empty cell at least admits that nobody knows.

## What the buyer is really trying to solve

People who search for this problem are rarely arguing about field settings. They are usually in the middle of a CRM replacement or a clean-up and have noticed that the old system has sixty fields on a deal, most reps fill in eight, and management reports on perhaps five. They want to know which fields are worth the effort and how to stop the form from slowing the team down. Behind that sits a more commercial worry: if the team is spending minutes on every update and the information still cannot be trusted, the new system will repeat the old mistakes at higher cost.

## Where the admin cost comes from

The cost of an unnecessary required field is small per record and large in total. Imagine a team of twelve reps who each create or update fifteen deals a week and spend an extra ninety seconds on mandatory fields they do not need. That is more than four hours a week across the team, before counting the time managers spend chasing incomplete entries, and before the time analysts spend cleaning values that were entered to satisfy the system. The figures here are an illustration of the arithmetic, not a benchmark, but the pattern holds in most sales teams: the burden grows with every field added, and nobody ever removes one.

There is also a quieter cost. Reps learn that the CRM is something to be satisfied rather than used. Once that attitude sets in, the fields that do matter get the same careless treatment as the ones that do not. This is one of the ways teams [stop trusting the CRM](/insights/why-teams-stop-trusting-the-crm/), and it is closely related to the way [bad CRM data gets created](/insights/how-bad-crm-data-gets-created/) in the first place.

## A test for whether a field deserves to be mandatory

Every required field should pass four questions. If the answer to any is no, the field should be optional, defaulted or removed.

- **Does a named person make a decision with it?** "Management might want it" is not a decision. "The sales director reallocates territory based on it every quarter" is.
- **Does the rep know the answer at the moment of entry?** If the information only becomes known later, such as the final competitor or the real budget, requiring it at creation guarantees guesses.
- **Can the value be checked or derived?** If the system can fill it from the customer record, a previous deal or an integration, nobody should type it.
- **Is the cost of a wrong answer lower than the cost of a blank?** For most descriptive fields, a blank is more honest.

The same thinking applies to personal information. South Africa's [Protection of Personal Information Act](https://www.gov.za/documents/protection-personal-information-act) requires that personal information be adequate, relevant and not excessive for the purpose it is collected for. A mandatory field that forces reps to capture a contact's personal mobile number, ID number or home address when a work email would do is an operational burden and a compliance exposure at once.

## Make requirements depend on the stage of the deal

Many CRMs let you change what is required as a deal progresses. Microsoft describes this under [business rules in Dataverse](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-create-business-rule), which can set column requirement levels, show or hide columns and validate data without custom code. The principle matters more than the product. Ask for almost nothing when a lead is created, ask for qualification detail when the deal is qualified, and ask for contract detail only when a proposal is ready to send. At each point the rep either knows the answer or is about to need it.

Stage-based requirements also make the data more honest, because a field is asked for when the rep has a reason to know it. A "decision maker" field that must be filled before any contact exists is a guess. The same field required before a proposal goes out is a prompt to find out.

### An illustrative example

Illustrative: a Cape Town commercial cleaning company with 140 staff and nine salespeople was preparing to move to a new CRM. Its existing deal form had 34 required fields. Before configuring the new system, the sales director listed every field and wrote beside each one the report or decision that used it. Eleven fields fed a regular report. Seven were used by operations at handover. The remaining sixteen had no named user. The new system launched with six required fields at deal creation and five more that became required when a deal moved to proposal. Update time per deal fell, and the monthly pipeline review stopped opening with a discussion of which values to ignore.

## Diagnostic questions

- For each required field, which report or decision depends on it, and who owns that decision?
- What share of records carry the default or first-listed value in each required choice field?
- Which required fields could the system fill from existing customer or product data?
- Are any required fields collecting personal information that the business does not need?

## What good looks like

A small set of fields is required at each stage, every one tied to a decision a named person makes. Values the system can derive are filled automatically. Optional fields are genuinely optional, and nobody is penalised for leaving them blank. Someone owns the form, reviews it each quarter, and retires fields that no report or decision uses. Reps trust that a field they are asked to fill matters, which is the single biggest driver of data that can be relied on.

## Practical next actions

1. Export the list of every required field on your lead, account and deal forms, and add a column naming the report or decision that depends on each one.
2. Run a count of the most common value in each required choice field. Anything where one value exceeds half the records is a sign that people are clicking through.
3. Move each field that depends on later knowledge to the stage where the rep will have the answer, and make it optional before that stage.
4. Time two or three reps creating and updating a deal on the current form, then repeat after the changes and share the difference with the team.
5. Name an owner for the form, set a quarterly review, and agree that any new required field needs a named decision and a field to retire.
6. Before a CRM replacement, build the new form from the list of fields that earn their place, not from the old export.

If the aim is a CRM that does the [jobs a growing business needs](/insights/the-five-jobs-a-crm-should-do-for-a-growing-business/), start with the smallest form that supports those jobs, and add a requirement only when somebody can say what they will do with the answer.
