---
hub: patterns
record_id: PAT-235
slug: when-data-governance-sounds-abstract-but-operations-feel-the-pain
title: When Data Governance Sounds Abstract but Operations Feel the Pain
description: Data governance can sound like a corporate exercise, but wrong delivery addresses, duplicate customers and disputed numbers are what it looks like when nobody does it. Here is the practical version.
lead: Data governance can sound like a corporate exercise, but wrong delivery addresses, duplicate customers and disputed numbers are what it looks like when nobody does it. Here is the practical version.
category: Data, Reporting & Management Visibility
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Data, Reporting & Management Visibility
pattern_family: Data, Reporting & Management Visibility
observable_condition: Deliveries go to outdated addresses, customers exist twice, managers dispute the same figure and former staff keep logins, and each issue is fixed separately without a common cause being identified.
primary_identification: Unowned information: core records and figures have no owner, agreed definition, master source or access rule, so errors recur in different forms across operations.
commercial_value_dimensions: Operational accuracy, decision quality, personal information compliance and return on systems and automation
sources:
  - https://learn.microsoft.com/en-us/purview/data-governance-overview | https://learn.microsoft.com/en-us/purview/data-governance-overview
  - https://www.gov.za/documents/protection-personal-information-act | https://www.gov.za/documents/protection-personal-information-act
  - https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query | https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query
summary: Data governance can sound like a corporate exercise, but wrong delivery addresses, duplicate customers and disputed numbers are what it looks like when nobody does it. Here is the practical version.
layout: plain
---
## Observable condition

The owner of a Kimberley agricultural inputs distributor hears the term data governance at an industry event and files it under things for large corporates. Back at the office, the week continues as usual.

A delivery goes to a farm's old address because the customer record was updated in the accounting system but not in the dispatch spreadsheet. The sales manager and the bookkeeper argue about last month's revenue because they used different definitions of a sale. A customer receives two statements because he exists twice under slightly different names. A former employee still has the login to the online ordering platform.

Each problem is fixed on the day. Nobody connects them.

## Realisation

The realisation is that these are all the same problem. In each case, nobody has decided who owns a particular piece of information, what it should look like, where the master version lives and who may see or change it. Data governance is simply the practice of making those decisions.

Large companies give it formal structures. A small or mid-sized business needs the same decisions in a much lighter form. Without them, the cost does not appear as a governance problem. It appears as wrong deliveries, duplicate records, disputed reports and access that nobody controls.

**Realisation prompt:** for your customer list, your product list and your monthly sales figure, can you name who owns each, where the master version is and who may change it?

## Identification

This is a pattern of unowned information. The visible symptoms are scattered operational errors. The common assumption is that each error is a one-off mistake by an individual. The structural cause is that core information has no owner, no agreed definition and no single source, so errors recur in different forms.

It ties together several narrower patterns, including [why the same customer has three different names in your systems](/patterns/why-does-the-same-customer-have-three-different-names-in-your-systems/) and [when nobody owns the definition of a business metric](/patterns/when-nobody-owns-the-definition-of-a-business-metric/).

## Diagnosis

- **No owner for core records.** Customer, supplier and product records can be created and changed by anyone, in several systems.
- **No agreed definitions.** Terms such as active customer, sale or overdue mean different things to different teams.
- **No master source.** When the same information is kept in two places, nobody has decided which one wins.
- **Access granted informally.** Logins are shared, passed on and rarely removed.
- **Errors fixed, not traced.** Each mistake is corrected where it is found, without asking where it entered.

## Commercial impact

The commercial value at stake is operational accuracy, decision quality, compliance and the return on any future system or automation.

Operational accuracy is the most immediate. Wrong addresses, duplicate customers and outdated prices each cause rework, credit notes and frustrated customers.

Decision quality follows. When managers disagree about what a number means, meetings are spent on arguing rather than deciding. The Impact note on [untrusted business numbers](/impact/untrusted-business-numbers-unreliable-decision-cost/) describes that cost.

Compliance is a real exposure. South Africa's [Protection of Personal Information Act](https://www.gov.za/documents/protection-personal-information-act) places obligations on businesses that process personal information, including customer and employee details. A business that does not know where personal information is held or who can access it will struggle to meet them.

The return on technology is at stake too. Automation and reporting tools built on unowned, inconsistent data reproduce the inconsistency faster. See [when good processes keep failing because of the data fed into them](/patterns/when-good-processes-keep-failing-because-of-the-data-fed-into-them/).

## Common misidentification

The most common misreading is to treat governance as a large project requiring consultants, committees and policy documents. That makes it easy to postpone indefinitely.

Another is to treat each error as a training issue for the person who made it. The same error will recur with someone else.

A third is to buy a tool. Governance tools help large organisations catalogue and control data, but they rely on decisions about ownership and definitions that only the business can make.

## Possibility

The possibility is light, practical governance. A short register lists the business's most important information, such as customers, suppliers, products, prices, employees and the five key reporting figures. For each, it records an owner, a definition, the master system and who may change it.

That register does not need special software. A one-page document reviewed quarterly is enough to start. [Microsoft's overview of data governance](https://learn.microsoft.com/en-us/purview/data-governance-overview) describes the aim as making data discoverable, accurate, trusted and protected, and describes roles such as data owners and stewards. A small business can apply the same roles to a handful of people.

Where data must be combined from several systems, tools such as [Power Query](https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query) can apply the agreed definitions consistently each time, rather than relying on whoever builds the report.

## Intervention

Begin with a list of six to ten information types that matter most to daily operations and reporting.

For each, hold a short conversation with the people who use it and agree four things: who owns it, how it is defined, which system holds the master version and who may create or change it. Write the answers down.

Then act on the most painful gap. If customer records are duplicated, the owner cleans the list and sets a rule that new customers are created only in the master system. If a metric is disputed, the owner publishes one definition.

Review access as part of the same exercise. Remove logins held by former staff and replace shared accounts with individual ones.

## Practical next actions

1. List the six to ten information types your operations and reports depend on most.
2. For each, record an owner, a definition, a master system and who may change it.
3. Choose the information type that causes the most operational errors and clean it first.
4. Set a rule that core records are created only in their master system.
5. Review who has access to systems holding personal information and remove anyone who no longer needs it.
6. Review the register every quarter and record any errors traced back to unowned data.

## Diagnostic questions

- Who owns our customer list, and can anyone else create a customer?
- Do our sales and finance teams use the same definition of a sale?
- Do we know every system that holds customer or employee personal information?
- When an operational error is fixed, do we find out where the bad data came from?

## Bottom line

Data governance sounds abstract until you notice that wrong deliveries, duplicate customers, disputed figures and forgotten logins are all symptoms of nobody owning the information behind them. Name owners, agree definitions, choose master sources and control access for the few kinds of information that matter most. That is governance a growing business can actually run.
