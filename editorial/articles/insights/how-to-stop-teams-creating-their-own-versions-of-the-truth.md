---
hub: insights
record_id: INS-236
slug: how-to-stop-teams-creating-their-own-versions-of-the-truth
title: How to Stop Teams Creating Their Own Versions of the Truth
description: Private spreadsheets and team-specific reports appear when the official numbers are late, hard to reach or not trusted. Here is how to remove those reasons rather than ban the spreadsheets.
lead: Private spreadsheets and team-specific reports appear when the official numbers are late, hard to reach or not trusted. Here is how to remove those reasons rather than ban the spreadsheets.
category: Data and Systems
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Data and Systems
sources:
  - https://learn.microsoft.com/en-us/power-bi/guidance/fabric-adoption-roadmap-data-culture | https://learn.microsoft.com/en-us/power-bi/guidance/fabric-adoption-roadmap-data-culture
  - https://learn.microsoft.com/en-us/purview/data-governance-overview | https://learn.microsoft.com/en-us/purview/data-governance-overview
  - https://www.gov.uk/guidance/make-better-use-of-data | https://www.gov.uk/guidance/make-better-use-of-data
summary: Private spreadsheets and team-specific reports appear when the official numbers are late, hard to reach or not trusted. Here is how to remove those reasons rather than ban the spreadsheets.
layout: plain
---
The monthly management meeting at a manufacturing business outside Pretoria opens with an argument. Sales reports R4.2 million in orders for the month. Finance reports R3.7 million in revenue. Operations has a third figure for "jobs completed". Each manager arrived with a spreadsheet they built themselves, from data they exported themselves, using definitions they chose themselves. Forty minutes pass before anyone discusses what to do.

Every growing business develops these parallel versions of the truth. They are not a sign that people are careless or difficult. They are a sign that the official source, if there is one, is failing to meet a need. The way to stop them is to find that need and meet it, not to ban the spreadsheets.

## Why teams build their own versions

When you ask people why they keep a private report, the answers tend to fall into a few groups:

- **The official data is late.** Finance closes the month on the tenth; sales needs to know on the first.
- **It is hard to get.** Only one person can run the report, or access requests take weeks.
- **It does not answer their question.** The standard report shows revenue by product, but the team needs it by region or by salesperson.
- **They do not trust it.** They have been caught out by a wrong figure before.
- **The definitions differ.** Sales counts an order when it is signed; finance counts revenue when it is invoiced; both are right for their purpose.

Microsoft's guidance on building a [data culture](https://learn.microsoft.com/en-us/power-bi/guidance/fabric-adoption-roadmap-data-culture) makes a similar observation, asking whether redundant data sources exist because people cannot find the data they need and whether users insist on exporting data to build their own reports. It also stresses having a clear, simple process for requesting access, because when people know data exists but cannot get to it, they turn to inefficient workarounds.

Each of these causes has a different fix. Treating them all as a discipline problem fixes none of them.

## Separate definitions from disagreements

Many conflicting numbers are not errors at all. They are different measures with the same name. "Sales" might mean orders signed, orders delivered, invoices raised or cash received. Each is legitimate. The problem arises when they are all called "sales" in the meeting.

Write a short glossary of the twenty or so measures your business discusses most. For each, record the name, a plain-language definition, the system it comes from, when it is considered final and who owns the definition. Give different measures different names: "orders booked" and "revenue invoiced", not two kinds of "sales". Our article on [why your reports cannot agree on the same number](/insights/why-your-reports-cannot-agree-on-the-same-number/) explains how far definitional differences go in explaining conflicts.

Once definitions are written down, real disagreements become visible: two reports that use the same definition and still produce different numbers. Those point to genuine data problems, usually upstream in how data is captured, as we discuss in [why reporting problems usually start upstream](/insights/why-reporting-problems-usually-start-upstream/).

## Give each fact one home

A version of the truth often begins when a fact is captured twice. A customer's credit limit is held in the accounting package and in the CRM. A product price lives in the price list and in a quoting spreadsheet. As soon as one copy is updated and the other is not, the business has two truths.

Decide, for each important fact, which system is its home. Other systems may display it, but only the home system can change it. The UK government's guidance to [make better use of data](https://www.gov.uk/guidance/make-better-use-of-data) recommends collecting data once and reusing it, and keeping it accurate and current with audit trails. For a step-by-step method, see our guide to [eliminating repeated data entry with one source of truth per fact](/insights/how-to-eliminate-repeated-data-entry-one-source-of-truth-per-fact/).

## Make the official source easier than the workaround

People will keep building their own versions as long as that is easier than using the official one. So compete on convenience:

- **Speed.** Publish provisional figures early, clearly labelled, rather than nothing until the month is closed.
- **Access.** Give people self-service access to the data they are entitled to see, with a quick process for requesting more.
- **Fit.** Ask each team what question their spreadsheet answers, and add that view to the shared report if it is reasonable.
- **Visible quality.** Show when the data was last refreshed and flag known issues, so people do not discover them in a meeting.

Private spreadsheets are valuable research. Each one shows a need the official system does not meet. Our piece on [turning side spreadsheets into CRM improvements](/insights/turning-side-spreadsheets-into-crm-improvements/) shows how to harvest them rather than fight them.

## Assign ownership for each data domain

Data without an owner degrades. Microsoft's overview of [data governance](https://learn.microsoft.com/en-us/purview/data-governance-overview) describes a federated approach in which a central function sets the rules while the people who use and understand the data in each area govern it, with roles such as data owners and data stewards responsible for quality and consistency. A small business does not need a governance office, but it does need a named person for customer data, product data, financial data and operational data, who decides definitions, approves changes and fixes problems at source.

That person should also endorse the official reports in their area. When a report carries the name of the person who stands behind it, it becomes clearer which numbers are official and which are personal analysis.

## Use the meeting to reinforce the change

Leadership behaviour decides whether official numbers stick. If the management meeting accepts figures from personal spreadsheets, people will keep bringing them. Agree that discussion starts from the official report, that personal analysis is welcome as a supplement and that any conflict between the two becomes an action item for the data owner rather than a debate in the room. Within a few months the meeting time shifts from reconciling numbers to deciding what to do about them.

## Practical next actions

1. Ask each manager which private spreadsheets or reports they rely on and what question each one answers that the official reports do not.
2. Write a glossary of your twenty most-used measures with a definition, source system, finality point and owner, and rename measures that share a name.
3. Choose one home system for each important fact, such as price, credit limit and customer status, and stop editing copies elsewhere.
4. Name an owner for customer, product, financial and operational data, and have them endorse the official reports in their area.
5. Publish early provisional figures and show last-refreshed dates on shared reports.
6. Start management meetings from the official report and log every conflicting number as an action for its data owner.
