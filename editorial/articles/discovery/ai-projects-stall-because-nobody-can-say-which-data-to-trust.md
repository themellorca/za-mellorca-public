---
hub: discovery
record_id: DISC-275
slug: ai-projects-stall-because-nobody-can-say-which-data-to-trust
title: AI projects stall because nobody can say which data to trust
description: AI pilots stall when every project must investigate whether the data is reliable. Rate key data sets for fitness for automation, publish the rating and gate projects on it.
lead: AI pilots stall when every project must investigate whether the data is reliable. Rate key data sets for fitness for automation, publish the rating and gate projects on it.
category: Data, Reporting & Decision Systems
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Data, Reporting & Decision Systems
problem_domain: Data, Reporting & Decision Systems
problem_owner: Head of data or digital
budget_owner: COO or CIO
sources:
  - https://learn.microsoft.com/en-us/purview/data-quality-overview | https://learn.microsoft.com/en-us/purview/data-quality-overview
  - https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf | https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf
summary: AI pilots stall when every project must investigate whether the data is reliable. Rate key data sets for fitness for automation, publish the rating and gate projects on it.
layout: plain
---
Picture a Johannesburg distributor that has started three AI pilots in the same quarter: a forecast that suggests stock replenishment, an assistant that answers customers about orders, and a tool that matches supplier invoices to deliveries. Each pilot team begins the same way. It needs a table of stock on hand, and it finds two. The ERP says one thing and the warehouse system says another. One team spends three weeks interviewing people to find out which is right. A second team picks one without asking. The third waits for someone in IT to answer an email.

By the ninth week the replenishment pilot has produced recommendations that the buyers do not believe, because the numbers disagree with what they see on the shelves. The sponsor asks why the AI is wrong. The honest answer is that nobody ever established which data it was allowed to rely on, and each project had to make that judgement alone.

The operating condition is simple: the business cannot say, in advance and in writing, which of its data is trustworthy enough to automate on. Every AI project therefore starts with an investigation, and many stall there. That matters to the COO and the CIO because pilots cost money, and the cost lands whether or not anything reaches production.

## The problem in plain language

Automation takes decisions or actions out of human hands, or at least makes them faster. A person reading a report can notice that a number looks odd and ask a colleague. A system acting on the same number does not. So data that is acceptable for a monthly review may not be acceptable for an automated order, an automated approval or an automated message to a customer.

Most businesses have never written down which data sets are good enough for which purposes. The knowledge exists in people's heads: the finance analyst knows the debtors table is reliable after the third working day of the month; the warehouse supervisor knows that one field is rarely filled in; the sales operations lead knows the customer list contains duplicates. None of this is recorded where an AI project team can find it.

So every new project asks the same questions again. Who owns this data? How current is it? How much of it is missing? Where is it known to be wrong? What has it been approved for? Each project answers them slowly, informally and differently.

This is related to, but different from, [AI tools that fail without an authoritative data source](/discovery/why-ai-tools-fail-without-authoritative-data/). That topic is about the absence of a single source of truth. This article is about something earlier: deciding, before a project starts, which data sets are fit to rely on at all, and recording the answer so that nobody has to rediscover it.

## What the buyer is actually trying to solve

Heads of data, operations and digital describe this in practical terms. Which of our data can we safely build automation on? Why does every pilot spend its first month arguing about the data? How do we stop projects starting on data we already know is poor? How do we explain to the board why a pilot stalled?

The outcome they want is a short, published list. For each key data set, someone has said who owns it, how fresh and complete it is, what is known to be wrong with it, and what it is approved to be used for. A new AI project looks at the list on day one and either proceeds, proceeds with a human in the loop, or waits until the data is fixed.

## Evidence and system mechanism

### Data quality can be measured against named dimensions

Quality is not a single judgement. Data platforms already break it into measurable dimensions. Microsoft's documentation on [data quality in the Purview Unified Catalog](https://learn.microsoft.com/en-us/purview/data-quality-overview) says it offers out-of-the-box rules to measure six industry-standard dimensions: completeness, consistency, conformity, accuracy, freshness and uniqueness. The rules are applied at column level, and the scores are aggregated upwards to data assets, data products and governance domains, so a business can see quality at each level.

The product is not the point. The useful idea is that "is this data good?" can be turned into specific questions with scores: how much is missing, how many values break the expected format, how many records are duplicated, how old is the latest record. Those scores can be calculated with whatever tooling you have, including simple queries run on a schedule. A rating for automation is built from them.

### AI risk frameworks start with mapping and measuring

The NIST [AI Risk Management Framework](https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf), published as NIST AI 100-1 in January 2023, is voluntary guidance organised around four functions: govern, map, measure and manage. Two of them matter here. Mapping means establishing the context in which an AI system will operate and what it depends on. Measuring means assessing the system against appropriate metrics. Neither can be done for an AI project if nobody has established what its data is and how reliable it is.

A rating on key data sets is that groundwork done once, in advance, instead of once per project.

| Gap | Effect |
| --- | --- |
| No recorded owner for a data set | Nobody can answer questions or fix problems |
| No freshness or completeness measure | Projects cannot tell usable data from unusable data |
| Known gaps held in people's heads | Each project rediscovers the same problems |
| No approved uses | A table good enough for a report is used for an automated decision |
| No gate before a project starts | Projects begin on data that was never checked |

### What South African law expects when decisions are automated

South African law gives the question a legal edge when automation affects people. The [Protection of Personal Information Act, 4 of 2013](https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf) deals with automated decision-making in section 71. In general, a person may not be subject to a decision that has legal consequences for them, or affects them to a substantial degree, if it is based solely on automated processing of personal information intended to profile them, for example their performance at work, creditworthiness, reliability or conduct. The section provides exceptions, such as decisions taken in connection with a contract where appropriate measures protect the person's legitimate interests. Those measures include giving the person a chance to make representations.

Section 16 of the same Act adds the information quality duty: a responsible party must take reasonably practicable steps to make sure personal information is complete, accurate, not misleading and updated where necessary.

Together they mean that an automated decision about a customer or employee made on stale or incomplete data is a legal problem, as well as an operational one. A rating that records the freshness and known gaps of data sets containing personal information is practical evidence that the business has taken those steps. Take advice from your information officer or legal adviser on how these provisions apply to your own use cases.

## Why this becomes urgent

Two pressures arrive together. The business is growing, and the people who knew which data to trust by instinct are now too few and too busy to answer every question. At the same time, there is a push from the board or the executive to automate more, using AI tools that are easy to start and hard to put into production.

The result is a pile of pilots. Each is easy to begin, because the tool works on a sample. Each stalls when it meets real data and someone asks whether the numbers can be relied on. Without an answer, the pilot either dies quietly or, worse, goes live on data nobody trusted.

## Economic consequence

The cost of not knowing shows up in several places:

- **Pilots that never reach production.** Money and months spent on projects that stopped when the data question could not be answered.
- **Automated decisions on bad data.** Orders, approvals or messages triggered by figures that were stale, incomplete or duplicated, which then have to be reversed.
- **Rework.** Teams repeating the same investigation of the same data for each new project, and fixing the same problems in separate places.
- **Lost trust in the data.** Staff stop believing the numbers when an automated recommendation contradicts what they can see.
- **Lost trust in the AI.** One visible mistake from an automated system makes people reluctant to use any of them, even the ones that would have worked.

As an illustrative example only, suppose each AI pilot spends three weeks of one analyst's time establishing which data to use. Across four pilots in a year that is twelve weeks, a full quarter of one person, spent on the same kind of question that a published rating would answer in minutes. The figure is invented for illustration, but the pattern is real in most businesses: the cost is repeated, hidden and never budgeted.

Problems that are found late tend to be found by readers of outputs, which is the pattern described in [data quality problems found only after reports go out](/discovery/why-data-quality-problems-are-found-after-reports-are-published/). With automation, the output is an action and there may be no reader to catch it first.

## Root cause

The root cause is that data has no recorded owner, quality measures or approved use, so every AI project has to investigate trust from scratch. Data sets were created by systems and teams for operational purposes. Nobody was asked to describe their fitness for other purposes, and nobody was given the job of keeping that description current.

A second cause is that quality is judged at the wrong moment. Checks, where they exist, happen when a report is built or when something goes wrong. They do not happen as a gate before a project begins, which is when the answer is cheapest to use.

A third cause is that "good data" is treated as one thing. A data set may be fine for monthly trend analysis and unfit for automated customer messages. Without a statement of approved uses, a project has no way to know which kind of fine it has.

## Practical intervention

### Practical next actions

1. **Pick the key data sets.** Start with the ten or so that most projects will touch: customers, products, stock, orders, invoices, suppliers, staff. Do not try to rate everything.
2. **Name an owner for each.** The owner is a role in the business, not just IT, and is accountable for answering questions and fixing problems.
3. **Measure the basics.** For each data set, record how fresh it is (the age of the latest record and how often it updates), how complete it is (the share of key fields filled in) and how consistent and unique it is. Use simple scheduled queries if you have no tooling.
4. **Record the known gaps.** Write down what is known to be wrong or missing, in plain language: "supplier addresses are missing for older suppliers", "stock figures lag by a day". Capture what people already know.
5. **State the approved uses.** For each data set, say what it may be used for: reporting only, decision support with human review, or automation. Where personal information is involved, note whether decisions about people could be affected.
6. **Give it a simple rating.** For example, ready for automation, usable with human review, or not yet usable. Show the reasons next to the rating, and the date it was last reviewed.
7. **Publish the ratings and gate on them.** Put the list where project teams can find it. Require every AI project to cite the ratings of the data it plans to use before it starts, and require a named exception for anything rated below the level the use needs.
8. **Review on a schedule.** Re-rate each data set at least quarterly, and after any major system change or data incident.

## Diagnostic questions

- For our five most important data sets, can we name the owner, the freshness and the known gaps without asking around?
- When an AI project asks which stock, customer or invoice data to use, how long does it take to get an answer?
- Which of our data sets are approved for automated decisions, and who approved them?
- When did an automated or AI output last disagree with what staff could see, and was the data the cause?
- Do any of our automations make decisions about customers or employees, and do we know how fresh and complete their inputs are?
- What happens when a data set that was rated ready for automation gets worse?

## What good looks like

There is a short, published list of key data sets. Each has an owner, a freshness and completeness measure, a list of known gaps, a statement of approved uses, a rating and a review date. A new AI project checks the list before it begins. Projects that need data rated below their use either wait, use a human in the loop, or fund the fix as part of the project.

You can measure the result. The time from project start to a decision on which data to use falls from weeks to a day or two. Fewer pilots stall on data questions, and when one does, the reason is on record. Automated outputs that contradict what staff see become rare and are traced to a known, rated gap. The ratings are reviewed on schedule and change when the data changes.

## Where Mellorca fits

If you do not yet know how reliable your key data sets are, a [digital systems audit](/services/digital-systems-audit/) can identify them, measure the basics and write the first set of ratings and known gaps. Once the ratings exist, [business automation and AI workflows](/services/business-automation-ai-workflows/) can build the gate into how projects start, so that a pilot reads the rating of its data before it begins and routes anything below the required level to a person.

## Method note

This article draws on Microsoft's documentation on data quality in the Purview Unified Catalog, the NIST AI Risk Management Framework and the text of the Protection of Personal Information Act. The scenario, the time figures and the rating labels are illustrative and not measured. The article does not claim that any product is needed to produce the ratings or that it behaves the same way in your environment, so check the documentation for the tools you use. It is general information and not legal advice: confirm your obligations under the Protection of Personal Information Act, including section 71 where automated decisions affect people, with your information officer or legal adviser.
