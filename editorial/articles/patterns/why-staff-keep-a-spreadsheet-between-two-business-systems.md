---
hub: patterns
record_id: PAT-041
slug: why-staff-keep-a-spreadsheet-between-two-business-systems
title: Why Staff Keep a Spreadsheet Between Two Business Systems
description: An export goes in, a lookup tab translates the codes and a new file comes out for the next system to import. When a spreadsheet sits between two applications, it is an integration built by hand, with no checks and often one person who understands it.
lead: An export goes in, a lookup tab translates the codes and a new file comes out for the next system to import. When a spreadsheet sits between two applications, it is an integration built by hand, with no checks and often one person who understands it.
category: Disconnected Systems & Integration Friction
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Disconnected Systems & Integration Friction
pattern_family: Disconnected Systems & Integration Friction
observable_condition: Staff regularly export data from one application into a spreadsheet, translate codes and reshape columns with lookup tabs and formulas, and import the result into another application.
primary_identification: Spreadsheet bridges: hand-built integrations that hold the mapping between two systems' identifiers and formats, without monitoring, version control or a clear owner.
commercial_value_dimensions: Accuracy, risk, capacity and resilience
sources:
  - XLOOKUP function - Microsoft Support | https://support.microsoft.com/en-us/office/xlookup-function-b7fd680e-6d10-43e6-84f9-88eae8bf5929
  - Keeping leading zeros and large numbers - Microsoft Support | https://support.microsoft.com/en-us/office/keeping-leading-zeros-and-large-numbers-1bf7b935-36e1-4985-842f-5dfa51f85fe7
  - What Is Power Query? - Power Query | https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query
related:
  - Why Information Has to Be Copied From One System to Another | /patterns/why-information-has-to-be-copied-from-one-system-to-another/
  - When Work Goes Missing in the Gap Between Two Systems | /patterns/when-work-goes-missing-in-the-gap-between-two-systems/
  - When Disconnected Systems Let the Business Act on Old Information | /patterns/when-disconnected-systems-let-the-business-act-on-old-information/
summary: An export goes in, a lookup tab translates the codes and a new file comes out for the next system to import. When a spreadsheet sits between two applications, it is an integration built by hand, with no checks and often one person who understands it.
layout: plain
---
## Observable condition

Every Monday, someone exports last week's orders from the online store as a CSV file. They paste it into a workbook called something like "Orders to Accounts MASTER". One tab holds the export. Another holds a lookup table that translates product codes from the store into stock codes in the accounting system. A third tab reformats customer names, dates and amounts into the exact columns the accounting import expects. The result is saved as a new CSV and imported.

Nobody would call this workbook a system, but it is one. It sits between two business applications and does the job an integration would do: it matches records, translates codes and reshapes data so that one system can accept what another produced. It exists because the two applications do not speak to each other directly, and someone found a way to make them.

An illustrative example: a Durban food-supply distributor with about thirty staff used a bridge workbook like this to move orders from its ordering portal into its accounting system. When a new product range was added, the lookup tab was not updated. For several weeks, a handful of new products were imported under the wrong stock codes. The error was only found when a stock count did not reconcile.

## Realisation

A spreadsheet that sits between two applications is different from a spreadsheet used for analysis. An analysis sheet is read by people. A bridge sheet is read by another system. Its output is fed straight into accounting, payroll, stock or the CRM, which means any error inside the sheet becomes an error in a system of record.

Bridge sheets also carry silent rules. Microsoft documents that if XLOOKUP finds no match and no alternative is specified, it returns #N/A. In a bridge sheet, a missing match may be handled by a default value, a blank or a manual fix that nobody writes down. Microsoft also documents that Excel removes leading zeros, converts large numbers to scientific notation and keeps only 15 significant digits. Account numbers, product codes and identity numbers passing through a spreadsheet can quietly change shape on the way.

The important realisation is that the business already has an integration. It is simply built in a form that has no monitoring, no version control and usually only one person who understands it.

**Realisation prompt:** which spreadsheets in your business exist only to take data out of one system and put it into another?

## Identification

This is a pattern of **spreadsheet bridges**: workbooks that perform the translation, matching and reshaping that two applications need in order to exchange data. The visible symptom is a recurring export, transform and import routine. The common assumption is that this is normal admin. The structural cause is that the two systems have no agreed mapping between their data, so the mapping lives in a spreadsheet maintained by hand.

It differs from the case where [a critical process runs in Excel](/patterns/why-your-most-important-process-is-running-in-excel/). There, the spreadsheet is the workflow itself. Here, the spreadsheet is the connection between two workflows that already have their own systems. The Insight on [when a spreadsheet becomes infrastructure](/insights/when-a-spreadsheet-is-a-useful-tool-and-when-it-becomes-infrastructure/) helps place the line.

## Diagnosis

- **The systems use different identifiers.** The store, the CRM and the accounting system each have their own customer and product codes. Nobody decided which identifier is authoritative, so a lookup table translates between them.
- **The receiving system demands a specific format.** Import templates require fixed columns, date formats and codes. The sending system's export does not match, so someone reshapes it.
- **Mappings change without a process.** New products, customers, tax codes or cost centres must be added to the lookup table. That depends on someone remembering.
- **The sheet has no failure signal.** If a row does not match, the sheet may still produce an output. Nothing tells anyone that the import was incomplete or wrong.
- **The knowledge sits with one person.** The person who built the workbook understands its tabs, formulas and workarounds. Others follow the steps without knowing why.

The Discovery page on [undocumented interface mappings](/discovery/why-undocumented-interface-mappings-make-change-risky/) explains why this kind of hidden translation makes change risky.

## Commercial impact

The commercial value at stake is accuracy, risk, capacity and resilience.

The direct cost is the time spent on each export, transform and import cycle, repeated weekly or daily. The larger cost is in what the bridge can get wrong. A missing mapping can post revenue to the wrong account, issue stock under the wrong code or create duplicate customers. Because the bridge has no checks, these errors surface later, during reconciliation, month-end or an audit, when they are harder and more expensive to unpick.

There is also key-person risk. If the one person who understands the bridge leaves or is ill, the routine may stop or be run incorrectly. The business may not even know the bridge exists until it breaks.

Finally, bridge sheets limit timing. Because they run in batches, the receiving system is always behind. Accounting sees orders once a week; stock levels lag; management reports are built on data that is days old.

## Common misidentification

The usual response is to make the spreadsheet better: add more formulas, protect cells, write instructions. That reduces some errors but strengthens the dependency on a manual bridge.

Another response is to blame the person running it when errors occur. Usually the error comes from a mapping that changed upstream, not from carelessness. The business is managing a person when it should be managing a connection.

A third is to assume that a full integration project is the only alternative. Often the first step is much smaller: agreeing shared identifiers and moving the mapping somewhere it can be maintained and checked.

## Possibility

In a better state, the translation between systems is defined once, maintained deliberately and checked automatically. Shared identifiers mean fewer lookups are needed. Where a mapping is still required, it lives in an integration tool or a maintained reference table with an owner, not in someone's personal workbook. Unmatched records are flagged before they reach the receiving system.

Where some transformation must stay in the Microsoft toolset, Power Query offers a middle step. Microsoft describes it as a way to define a repeatable process that can be refreshed rather than reshaping data by hand each time. That does not remove the bridge, but it makes the transformation visible and repeatable while a proper connection is designed.

For the food distributor, the change was to adopt the accounting system's stock codes as the master codes in the ordering portal, which removed most of the lookup table, and to connect orders directly with a check that every order arrived.

## Intervention

1. **Find the bridges.** Ask each team which spreadsheets take an export from one system and produce an import for another. List them with their frequency and owner.
2. **Read the mapping.** For each bridge, write down what it translates: codes, names, formats, defaults. This is the specification for any future integration.
3. **Agree authoritative identifiers.** Decide which system owns customer, product and account codes, and align the others where possible. The Insight on [deciding which system owns which data](/insights/how-to-decide-which-system-owns-which-data/) covers this decision.
4. **Add a check before the import.** At minimum, count rows in and out and flag unmatched records, so errors are caught before they reach a system of record.
5. **Replace the highest-risk bridge first.** Prioritise the bridge that feeds financial or stock records, runs most often or depends on one person.
6. **Assign an owner for mappings.** When new products, customers or codes are created, someone must be responsible for updating the translation.

## Practical diagnostic questions

- How many spreadsheets exist mainly to move data from one system into another?
- What happens in each one when a code or record has no match?
- Who updates the lookup tables when products, customers or accounts change?
- How would you know if last week's import was incomplete?
- Could anyone other than the builder run and fix the routine?

## Bottom line

A spreadsheet between two business applications is an integration built by hand. It translates codes, reshapes data and carries silent rules that feed straight into systems of record, with no monitoring and often one person who understands it. Finding these bridges, documenting what they translate and replacing the riskiest with maintained, checked connections reduces errors and removes a hidden dependency the business may not know it has.
