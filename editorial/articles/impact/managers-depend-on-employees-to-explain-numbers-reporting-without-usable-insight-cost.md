---
hub: impact
record_id: CPS-115
slug: managers-depend-on-employees-to-explain-numbers-reporting-without-usable-insight-cost
title: Reports That Need a Translator: The Cost of Numbers Managers Cannot Read Alone
description: The monthly pack arrives, but managers need an analyst or accountant to tell them what changed and why. Decisions wait for that explanation, and the people who give it never get to their real work.
lead: The monthly pack arrives, but managers need an analyst or accountant to tell them what changed and why. Decisions wait for that explanation, and the people who give it never get to their real work.
category: Data and Information
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Data and Information
commercial_domain: Data and Information
primary_pain: Management reports cannot be understood without an analyst or accountant explaining what the figures mean and why they changed
primary_cost_mechanism: Labour cost of skilled staff repeating explanations, opportunity cost of analysis not done, delayed decisions, decisions based on misreadings, and single-person dependency
sources:
  - https://learn.microsoft.com/en-us/power-bi/guidance/fabric-adoption-roadmap-content-ownership-and-management | https://learn.microsoft.com/en-us/power-bi/guidance/fabric-adoption-roadmap-content-ownership-and-management
  - https://learn.microsoft.com/en-us/power-bi/consumer/end-user-q-and-a | https://learn.microsoft.com/en-us/power-bi/consumer/end-user-q-and-a
summary: The monthly pack arrives, but managers need an analyst or accountant to tell them what changed and why. Decisions wait for that explanation, and the people who give it never get to their real work.
layout: plain
---
## The report nobody can read without help

Every month, the management accountant of a food wholesaler in Gqeberha produces a forty-page reporting pack. It contains every number the directors have ever asked for: sales by region, gross margin by product family, debtors ageing, stock days, fuel cost per route. The directors open it, look at a few pages, and then call her. Why is margin down in the Eastern Cape? Is the stock figure good or bad? What does this variance mean? She spends the first week of every month explaining the pack, one director at a time, before she can start on the analysis that would actually improve the business. When she takes leave, the pack goes out and nobody acts on it.

The example is illustrative, but many businesses work this way. They have reports, sometimes a great many of them, but the reports do not answer the questions managers have. Insight lives in the heads of a few people who know where the numbers come from and what they mean. Reporting has been produced, but understanding still has to be delivered by hand.

## Why numbers need explaining

Reports become dependent on a translator for a few recurring reasons:

- **Reports show data, not answers.** Pages of figures without comparisons, targets or thresholds leave the reader to work out what is normal and what is not.
- **Labels are technical.** Column names and codes come straight from the accounting or operational system and mean little to a general manager.
- **Context is missing.** One-off events, timing differences and known data issues are not noted, so readers cannot tell a real change from an artefact.
- **Nobody owns the meaning.** The person who builds the report knows the logic, but there is no written description of what each figure includes.
- **The report grows by accumulation.** New requests are added and nothing is removed, so the signal is buried in volume.

Microsoft's guidance on [content ownership and management](https://learn.microsoft.com/en-us/power-bi/guidance/fabric-adoption-roadmap-content-ownership-and-management) for reporting describes a role it calls the subject matter expert, responsible for defining what the data means, what it is used for and how it is presented, and stresses that readers need to know who to contact with questions. In many businesses that role exists informally in one person, and every reader routes through them.

## What it costs

### Skilled time spent on interpretation

The people who can explain the numbers are usually among the most expensive and capable in the business: accountants, analysts and senior managers. Time spent repeating the same explanations to different readers is time not spent on forecasting, pricing analysis or improving margin.

### Slower decisions

Managers wait for an explanation before acting. If the explainer is busy, away or overloaded at month-end, decisions slip by days or weeks. The article on [waiting weeks for management reports](/impact/waiting-weeks-for-management-reports-late-visibility-cost/) covers the cost of late reporting; this one is about reports that arrive on time but still cannot be used without help.

### Decisions made on misreadings

Some managers do not ask. They read the figures themselves and draw the wrong conclusion, for example treating a timing difference as a real loss, or missing a slow decline because the report shows only the current month. Those decisions can be costly and are rarely traced back to the report.

### Single-person dependency

When interpretation depends on one or two people, the business is exposed when they leave. The pattern of [only one person knowing where the report's numbers come from](/patterns/when-only-one-person-knows-where-the-reports-numbers-come-from/) describes this risk.

### Wasted reporting investment

Businesses invest in reporting tools and staff to produce figures. If those figures cannot be used without a translator, much of that investment produces activity rather than insight.

## A hypothetical estimate

The following figures are assumptions for illustration. If a management accountant spends four days a month explaining reports, and her loaded cost is R60,000 a month, the explanation work costs about R11,000 a month, or roughly R130,000 a year. If that time were spent on margin analysis that improved gross margin by half a percentage point on R40 million of sales, the business would gain R200,000. The opportunity cost is larger than the direct cost.

## Why it persists

Explaining reports feels like good service, and the people who do it are often proud of their knowledge. Managers may not want to admit they cannot read the report. Changing the reporting pack seems risky, because someone might need a figure that is removed. And the time spent explaining is spread across informal calls and meetings, so it never appears as a cost.

## What self-explaining reporting looks like

Good management reporting answers questions before they are asked. Each key figure is shown against a target, a prior period and a threshold, so the reader can see whether it is good, bad or normal. Labels use business language rather than system codes. A short written commentary accompanies each section, noting what changed, why, and what action is proposed. Every report shows who owns it and who to contact. The pack is short, built around the decisions managers actually make.

Reporting tools can help. Microsoft's description of [Q&A for business users](https://learn.microsoft.com/en-us/power-bi/consumer/end-user-q-and-a) explains that natural-language questions work better when report owners rename columns into terms people understand, and that users should be able to find and contact the owner. The same principle applies with or without any particular tool: plain language, visible ownership and context built in. The insights on [why more dashboards do not automatically create better decisions](/insights/why-more-dashboards-do-not-automatically-create-better-decisions/) and [deciding what should be on an operations dashboard](/insights/how-to-decide-what-should-be-on-an-operations-dashboard/) go further.

## Practical next actions

1. **Log the questions managers ask about reports.** For one month, record every question the report owners receive, and group them by theme.
2. **Answer the common questions in the report.** Add targets, prior-period comparisons and short commentary that address the questions that recur.
3. **Rename technical labels.** Replace system codes and abbreviations with plain business terms, and add a short note on what each key figure includes.
4. **Cut the pack to the decisions.** Ask each manager which pages they use to make decisions, and move everything else to an appendix or remove it.
5. **Show ownership on every report.** State who produced each report and who to contact, and make sure a second person can explain it.
6. **Hold one short review meeting.** Replace individual explanation calls with a single monthly session where the report owner walks through changes once for everyone.

A report that needs a translator has not finished its job. When the meaning is written into the report itself, managers can act sooner, analysts can return to analysis, and the business stops depending on one person to make its numbers useful.
