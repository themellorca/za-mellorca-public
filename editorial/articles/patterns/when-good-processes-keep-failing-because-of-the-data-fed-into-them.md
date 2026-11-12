---
hub: patterns
record_id: PAT-228
slug: when-good-processes-keep-failing-because-of-the-data-fed-into-them
title: When Good Processes Keep Failing Because of the Data Fed Into Them
description: When a sound process keeps producing wrong deliveries, rejected invoices and duplicate orders, the fault often enters at capture. Designing the point of entry with controlled values, validation and clear data ownership stops errors before they travel.
lead: When a sound process keeps producing wrong deliveries, rejected invoices and duplicate orders, the fault often enters at capture. Designing the point of entry with controlled values, validation and clear data ownership stops errors before they travel.
category: Data Quality, Ownership & Governance
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Data Quality, Ownership & Governance
pattern_family: Data Quality, Ownership & Governance
observable_condition: Well-designed processes keep producing errors that staff downstream quietly correct, because the information entering them was wrong at capture.
primary_identification: Data-capture quality problem: errors introduced at entry points are carried through otherwise sound processes.
commercial_value_dimensions: reliability, rework cost, cash flow, customer experience, decision quality, automation readiness
sources:
  - The Government Data Quality Framework | https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework
  - What Is Data Quality? - IBM | https://www.ibm.com/think/topics/data-quality
  - Create a business rule in Microsoft Dataverse - Power Apps | https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-create-business-rule
related:
  - When Nobody Owns the Definition of a Business Metric | /patterns/when-nobody-owns-the-definition-of-a-business-metric/
  - When Nobody Knows Which System Holds the Correct Data | /patterns/when-nobody-knows-which-system-holds-the-correct-data/
  - When Staff Get Blamed for Errors Their Systems Created | /patterns/when-staff-get-blamed-for-errors-their-systems-created/
summary: When a sound process keeps producing wrong deliveries, rejected invoices and duplicate orders, the fault often enters at capture. Designing the point of entry with controlled values, validation and clear data ownership stops errors before they travel.
layout: plain
---
## Observable condition

The order process is sound. It was designed carefully, the steps are clear and the people who run it know what they are doing. Yet orders still go wrong. A delivery goes to an old address because the customer record was captured with the postal address in the physical address field. An invoice bounces because the VAT number was typed with a missing digit. A stock item is ordered twice because one person captured it as "M10 bolt" and another as "Bolt M10". A quote is priced on the wrong customer category because the field was left on its default.

Each time, someone downstream catches the problem, fixes it and moves on. The dispatch clerk phones the customer to confirm the address. The bookkeeper corrects the VAT number. The buyer cancels the duplicate order. The process recovers, but only because people are quietly correcting inputs that should have been right when they entered the business.

## Realisation

When a process keeps producing errors, the natural instinct is to look at the process: add a check, add an approval, retrain the people at the end of the chain. The realisation is that the process may be working exactly as designed. It was simply designed on the assumption that the data entering it is correct. When that assumption fails, every downstream step inherits the fault, and the people at those steps become an unofficial quality-control function.

This matters because the cost of a bad input grows the further it travels. A wrong digit caught at capture costs seconds. The same digit discovered after an invoice is rejected, a payment is delayed and a customer is irritated costs hours and goodwill.

Realisation prompt: take the last ten errors that reached a customer or required rework. For each, trace back to where the wrong information first entered the business. If most began at capture rather than in the process itself, the problem is not the process.

## Identification

This is a data-capture quality problem: errors are introduced at the point where information enters the business and are then carried faithfully through otherwise sound processes. It is related to two existing patterns. [When finance teams become data clean-up teams](/patterns/when-finance-teams-become-data-clean-up-teams/) describes where the corrections often end up. [When poor data quality becomes an automation failure](/patterns/when-poor-data-quality-becomes-an-automation-failure/) describes what happens when automation removes the people who were catching errors. This pattern focuses on the entry point itself.

The UK government's [Government Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework) offers a useful vocabulary. It describes quality in terms of dimensions such as completeness, uniqueness, consistency, timeliness, validity and accuracy, and it advises focusing improvements as early in the data lifecycle as possible and solving issues at source rather than applying temporary fixes. The framework was written for the public sector, but the principle applies to any business.

## Diagnosis

The visible symptom is downstream errors and rework. The common assumption is carelessness by the people capturing data. The structural causes are usually in how capture is designed:

- **Free text where a choice should be.** When product names, customer categories or reasons are typed freely, the same thing gets recorded many ways, which breaks uniqueness and consistency.
- **No validation at entry.** Fields accept values in the wrong format or range, such as a VAT number with the wrong number of digits or a date in the future, because nothing checks them.
- **Unhelpful defaults.** A field that defaults to the most common value is silently accepted when it should have been changed.
- **Re-keying between systems.** Information is typed again from an email, a PDF or another system, and every re-keying is a fresh opportunity for error. The pattern is explored in [the hidden cost of re-entering the same information](/patterns/the-hidden-cost-of-reentering-the-same-information/).
- **Multiple entry points with different rules.** A customer can be created by sales, by accounts and by a website form, each capturing different fields to different standards.
- **No owner for the data itself.** Nobody is accountable for the quality of customer, product or supplier records, so standards drift.

## Commercial impact

The commercial value at stake is reliability, cost, cash flow, customer experience and readiness for automation.

- **Rework cost.** Skilled staff spend time correcting data that was wrong on arrival.
- **Cash flow.** Incorrect billing details lead to rejected invoices and delayed payment.
- **Customer experience.** Wrong deliveries, misspelt names and incorrect pricing are visible to customers, even when the process behind them is sound.
- **Decision quality.** Reports built on inconsistent records give misleading answers.
- **Automation readiness.** Automation and AI depend on clean inputs. IBM's [explainer on data quality](https://www.ibm.com/think/topics/data-quality) notes that flawed input data undermines the outputs of automated and AI systems.

The scale should be estimated from the business's own evidence, such as how many errors reach customers or need rework each month and how long each takes to resolve.

## Common misidentification

The usual response is to add checks downstream: a second person reviews every invoice, a supervisor signs off every new customer. These catch errors but do not prevent them, and they add cost and delay to every transaction, including the correct ones. A second common response is to blame and retrain the capturing staff. Training helps, but people working quickly will always make some errors unless the system is designed to prevent them. The broader point is made in [how to reduce human error without removing human judgment](/insights/how-to-reduce-human-error-without-removing-human-judgment/).

## Possibility

In a stronger state, the point of capture is designed to make correct entry easy and incorrect entry difficult. Choices are selected from controlled lists. Formats are validated as they are typed. Required information cannot be skipped. Information that already exists in one system is passed to the next rather than re-typed. Each major type of record has an owner who sets its standards.

Downstream staff then spend their time on the work the process was designed for, not on repairing what arrived.

## Intervention

1. **Trace errors to their origin.** For a month, log each data error that causes rework and note where it first entered the business.
2. **Map the entry points.** List every place customer, product and supplier data can be created or changed, and who uses each.
3. **Replace free text with controlled values** wherever the set of valid answers is known.
4. **Add validation and required fields at capture.** Most business platforms support this without custom code. Microsoft's guide to [creating business rules in Dataverse](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-create-business-rule), for example, describes setting default values and validating data with error messages as part of configuration.
5. **Reduce entry points.** Where several teams create the same type of record, agree one route and one standard.
6. **Remove re-keying.** Pass data between systems through integration rather than retyping.
7. **Assign data owners.** Make one person accountable for each major record type and its standards.

The underlying principle is covered in [poor data is an operations problem, not just a data problem](/insights/poor-data-is-an-operations-problem-not-just-a-data-problem/).

## An illustrative example

The following is illustrative, not a client case. A Pretoria office furniture supplier has a well-run order-to-delivery process, yet roughly every week a delivery goes to the wrong site or an invoice is rejected. When the operations manager traces a month of errors, nearly all began at capture. Sales reps created customers from their phones with free-text addresses, accounts created the same customers again with different details, and no field checked VAT number formats. The business moves customer creation to a single form with required fields, address and VAT validation, and a picklist for delivery regions. The order process itself is unchanged; it simply receives better data.

## Practical diagnostic questions

- Where do your most common errors first enter the business?
- How many places can a customer or product record be created?
- Which important fields accept free text when a fixed list would do?
- Which fields are validated at entry, and which are not?
- Who owns the quality of customer, product and supplier records?

## Bottom line

A good process cannot produce reliable results from unreliable inputs. When people downstream keep correcting errors, the fix is usually not another check at the end but better design at the start: fewer entry points, controlled values, validation at capture and clear ownership of the data. Fixing data where it enters protects every process that depends on it.
