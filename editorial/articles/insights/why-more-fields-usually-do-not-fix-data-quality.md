---
hub: insights
record_id: INS-235
slug: why-more-fields-usually-do-not-fix-data-quality
title: Why More Fields Usually Do Not Fix Data Quality
description: Adding and requiring more fields raises completion, not accuracy. Here is why, and what to change instead.
lead: Adding and requiring more fields raises completion, not accuracy. Here is why, and what to change instead.
category: Data Quality
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Data Quality
sources:
  - The Government Data Quality Framework | https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework
  - Section 16 Quality of information - POPIA | https://popia.co.za/section-16-quality-of-information/
  - Section 10 Minimality - POPIA | https://popia.co.za/section-10-minimality/
related:
  - Why Required Fields Do Not Automatically Create Good Data | /insights/why-required-fields-do-not-automatically-create-good-data/
  - What Data Should Be Required at the Point of Capture? | /insights/what-data-should-be-required-at-the-point-of-capture-and-what-can-wait/
  - How Manual Data Entry Creates Downstream Problems | /insights/how-one-typing-error-becomes-a-disputed-invoice-and-a-wrong-report/
summary: Adding and requiring more fields raises completion, not accuracy. Here is why, and what to change instead.
layout: plain
---
The customer form has grown to eighteen fields. A new one was added after a billing dispute, another after a missed delivery, a third because a manager wanted to report on industry. Six months on, half of them are blank, a few contain a single dash, and the one field that mattered, the correct contact number, is wrong on one record in several. The instinctive response is to add more fields and make them mandatory. It rarely helps.

Data quality is mostly about whether the information in a field is right, current and used, not about how many fields exist. This article explains why extra fields so often make records worse, and what to do instead.

## What mandatory fields actually produce

Making a field mandatory guarantees that something is entered. It does not guarantee that the right thing is entered. When someone is in the middle of a call and the system will not let them save without a postal code, the quickest route to saving is a plausible guess: 0000, the office postcode, or whatever was typed last time. The record is now complete according to the system and wrong according to the customer.

This is how a form can show a high completion rate and still fail every report built on it. The check measures presence, and presence is the easiest thing to fake. Our explanation of [how bad CRM data gets created](/insights/how-bad-crm-data-gets-created/) walks through the same pattern: people under time pressure satisfy the form, not the intent behind it.

## Every field is a promise someone must keep

A field creates an ongoing duty. Someone must fill it in at the start, someone must notice when it changes, and someone must correct it when it is wrong. A phone number goes stale when the customer changes job. A tax number needs checking against the supplier's registration. A preferred contact method needs revisiting when the relationship shifts.

When fields multiply, the maintenance load multiplies with them, but the number of people and the amount of attention do not. The result is a record in which a few fields are maintained and the rest slowly decay. The decayed ones are the dangerous ones, because they look as trustworthy as the maintained ones. Our article on [why business data quality declines with growth](/insights/why-business-data-quality-declines-with-growth/) describes how this builds as a business adds people, systems and products.

## What quality means in practice

It helps to be precise about what you are trying to improve. The UK government's [Government Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework) frames quality in terms of whether data is fit for its intended use, and discusses dimensions such as completeness, accuracy, consistency, timeliness and validity. Completeness is only one of them. A record can be complete and out of date, or complete and inconsistent with the same customer in another system. Filling in more boxes addresses a single dimension and can make the others worse.

South African law points the same way. Section 16 of the Protection of Personal Information Act, summarised on the [quality of information section](https://popia.co.za/section-16-quality-of-information/), asks a responsible party to take reasonably practicable steps to make sure personal information is complete, accurate, not misleading and updated where necessary, having regard to the purpose for which it is collected. The wording is about purpose and reasonableness. It does not say collect as much as possible. Under the [minimality principle](https://popia.co.za/section-10-minimality/), personal information must also be relevant and not excessive for its purpose. Every extra personal field you hold is one more thing you are expected to keep accurate and to be able to justify.

## Start from the decision, not the field

A better design question than "what else could we capture" is "what decision or action will this field support, and who will use it". If you cannot name a person, a report or a step in a process that depends on the field, it is a candidate for removal. If you can, it is a candidate for care.

Go through the form one field at a time and sort each into three groups.

- **Essential.** The process cannot proceed without it, such as a delivery address for a delivery.
- **Useful but not urgent.** It improves a report or a conversation but nothing stops without it, such as industry or company size.
- **Unused.** Nobody can say when it was last read. Archive it or remove it from the form.

Cutting the unused group usually removes a surprising share of the form, and it makes the remaining fields easier to keep right.

## Fix quality at the point of entry

For the essential fields, effort is better spent on making the right answer easy than on forcing an answer. Practical ways to do that include:

- using pick lists instead of free text for anything you will later count or filter, such as province, industry or lead source;
- validating format where a format exists, for example a ten-digit local mobile number or a thirteen-digit identity number structure;
- pulling data from the system that already holds it rather than asking a person to retype it;
- allowing an honest "unknown" value, so staff do not invent one to get past a required box.

That last point matters more than it seems. A clearly marked unknown is data you can act on: you know to ask. An invented value is data you will trust, wrongly.

## Make ownership visible

Each important field needs a named owner, meaning the role responsible for its accuracy, and a sense of how often it should be reviewed. Customer contact details might belong to the account manager and be confirmed at each renewal. Banking details might belong to finance and be verified whenever they change. Ownership does not need to be elaborate. A single line in a data dictionary, saying what the field means, who maintains it and when it was last reviewed, is enough to change behaviour.

Measure quality directly instead of inferring it from completion. Take a sample of fifty records each quarter, check the essential fields against a reliable source, and record the share that are correct. If accuracy is falling, adding fields will not reverse it. The causes are almost always workflow ones, which is the theme of our piece on [why data quality problems are found after reports are published](/discovery/why-data-quality-problems-are-found-after-reports-are-published/).

The stakes are rising as more business processes lean on the data automatically. We discuss why in [why AI makes data quality more important, not less](/insights/why-ai-makes-data-quality-more-important-not-less/): a tool that acts on a wrong field will do so faster and at greater volume than a person would.

## Practical next actions

1. Print or export your main customer form and mark every field as essential, useful but not urgent, or unused.
2. Remove or archive the unused fields, and for each essential field name the role that owns its accuracy.
3. Replace free text with pick lists wherever you later count or filter the answer, and add an explicit "unknown" option to required fields.
4. Pull a random sample of fifty records, check the essential fields against a reliable source, and record the percentage that are correct.
5. Repeat the sample every quarter and report the accuracy figure alongside the completion rate.

A shorter form with accurate answers will serve the business better than a long form with plausible ones. Ask for less, check it properly and keep it current.
