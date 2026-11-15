---
hub: insights
record_id: INS-237
slug: what-a-practical-data-dictionary-looks-like
title: What a Practical Data Dictionary Looks Like
description: A useful data dictionary is short, owned and visible where people work. Here are the fields each entry needs, two worked examples and how to keep it current.
lead: A useful data dictionary is short, owned and visible where people work. Here are the fields each entry needs, two worked examples and how to keep it current.
category: Data Quality
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Data Quality
sources:
  - Play 5: Metadata - CalHHS Data Knowledge Base | https://kb.data.chhs.ca.gov/sharing-guide/data-plays-intro/play-5
  - The Government Data Quality Framework | https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework
related:
  - Why Required Fields Do Not Automatically Create Good Data | /insights/why-required-fields-do-not-automatically-create-good-data/
  - Why More Fields Usually Do Not Fix Data Quality | /insights/why-more-fields-usually-do-not-fix-data-quality/
  - How Duplicate Contacts and Companies Damage Operations | /insights/how-duplicate-contacts-and-companies-damage-operations-costs-and-controls/
summary: A useful data dictionary is short, owned and visible where people work. Here are the fields each entry needs, two worked examples and how to keep it current.
layout: plain
---
Ask three people at a Bloemfontein agricultural supplier what "active customer" means and you get three answers. Sales says anyone with an open quote. Finance says anyone who has bought in the last twelve months. The warehouse says anyone with an account that is not on credit hold. Each definition is reasonable. Together they explain why the monthly customer count is argued about in every management meeting, and why the new reporting tool produced a number nobody recognised.

A data dictionary is the simple, unglamorous fix for this kind of confusion. It is a written list of the important pieces of data a business uses, what each one means, where it comes from and who looks after it. Done well, it is short, practical and consulted. Done badly, it is a hundred-page spreadsheet that nobody opens after the consultant leaves.

## What a data dictionary is for

A data dictionary answers the questions people would otherwise ask each other, or guess at:

- What does this field or measure actually mean?
- Which values are allowed, and what does each one mean?
- Which system is the authoritative source?
- Who decides when the definition changes?
- Is this personal or sensitive information?

Its value shows up in reporting, where two people using the same term get the same number; in integration, where a developer can map fields correctly between systems; in onboarding, where a new employee learns what the data means without relying on folklore; and in AI and automation, where software needs explicit meanings rather than tribal knowledge.

## What to put in each entry

The California Health and Human Services Agency's data sharing guidance on [metadata and data dictionaries](https://kb.data.chhs.ca.gov/sharing-guide/data-plays-intro/play-5) lists the elements typically captured at field level: field name, label, data type, definition, valid inputs, source, and security and privacy classification, along with any related legislation. That list translates well to a business setting. A practical entry contains:

- **Name:** the business term people use, such as "Active customer".
- **Definition:** one or two plain sentences that someone outside the team would understand. Not a restatement of the name.
- **Rule or calculation:** for derived measures, exactly how it is worked out, including time periods and exclusions.
- **Allowed values:** for codes and categories, the list and what each value means.
- **Source system and field:** where the authoritative value lives, with the technical field name.
- **Owner:** the person or role who decides the definition and resolves disputes.
- **Sensitivity:** whether the field contains personal information under the Protection of Personal Information Act, or commercially sensitive data.
- **Quality notes:** known gaps or caveats, such as "phone numbers before 2022 are often missing".

Resist adding more columns until people are actually using these.

## Example entries

Here is how the agricultural supplier might write two of its entries.

**Active customer.** A customer account with at least one invoiced sale in the last twelve calendar months, excluding internal and staff accounts. Source: accounting system, customer and invoice tables. Owner: financial manager. Sensitivity: links to business contact details, which are personal information when they identify a sole trader. Note: sales may track "prospects with open quotes" separately; that is a different measure called "Open opportunity account".

**Delivery status.** Allowed values: Picked, Loaded, In transit, Delivered, Returned. "Delivered" means signed proof of delivery has been captured, not that the truck left the yard. Source: dispatch module. Owner: warehouse manager.

Notice that the first entry settles the argument by naming the other definition and giving it a different name. That is often the most useful thing a dictionary does.

## Where to start

Do not try to document every field in every system. Start with the terms that cause arguments or errors, which you can find by listing:

- The measures that appear in the management pack or dashboard.
- The fields that integrations pass between systems.
- The status and category fields that drive workflow or automation.
- The terms new staff most often ask about.

Twenty to forty well-written entries usually cover most of the value for a small or mid-sized business. Our article on [what to do when teams disagree about the numbers](/insights/what-to-do-when-teams-disagree-about-the-numbers/) shows how to identify the disputed terms first.

## Where to keep it

A data dictionary is only useful where people can find it. A shared spreadsheet or a page in your intranet or wiki works fine for most businesses. Better still, put short definitions directly into the systems themselves: most CRMs and business apps let you add a description to each field that appears as help text. People read what is on the screen far more than what is in a separate document.

Link the dictionary from your reports, too. A small "definitions" link on a dashboard prevents many questions.

## How to keep it alive

Dictionaries die when nobody owns them. Three habits keep one current:

- **Change through the owner.** Any change to a definition, allowed value or calculation goes through the named owner, who updates the entry before the change goes live.
- **Check at project time.** Every new integration, report or system change includes a step to update affected entries.
- **Review quarterly.** Spend half an hour each quarter checking the most-used entries against how the data is actually being used.

The UK government's [Government Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework) stresses documenting metadata so that users can judge whether data suits their needs, and being open about known quality issues. A dictionary with honest quality notes does exactly that. For the broader practice of maintaining documentation, see [why documentation is part of the business system, not an add-on](/insights/why-documentation-is-part-of-the-business-system-not-an-add-on/).

## Signs your dictionary is working

You will know the dictionary is earning its place when management meetings stop debating what a number means, when developers ask the owner rather than guessing, and when new staff point to it as the place they learned the business's language. If none of those are happening after six months, the dictionary is probably too long, too hidden or unowned. Cut it back to the terms people actually use and try again. When the same conflict appears in system ownership rather than definitions, our article on [what happens when two systems both think they own the same data](/insights/what-happens-when-two-systems-both-think-they-own-the-same-data/) may help.

## Practical next actions

1. List the twenty to forty terms that appear in your management reports, integrations and workflow status fields, and mark the ones people disagree about.
2. Write an entry for each disputed term first, using name, definition, rule, allowed values, source, owner, sensitivity and quality notes.
3. Where two definitions are both valid, give them different names rather than forcing one to win.
4. Copy short definitions into field help text in your CRM and business apps, and link the full dictionary from each report.
5. Make changes to definitions go through the named owner, and add a dictionary update step to every system or report project.
