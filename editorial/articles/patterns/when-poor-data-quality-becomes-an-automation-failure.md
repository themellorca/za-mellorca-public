---
hub: patterns
record_id: PAT-239
slug: when-poor-data-quality-becomes-an-automation-failure
title: When poor data quality becomes an automation failure
description: Automation can expose data problems that people previously corrected silently. Reliable workflows need reliable operational inputs.
lead: Automation does not remove uncertainty from bad inputs. It often makes the hidden corrections people were performing manually impossible to ignore.
category: Data Quality, Ownership & Governance
published_date: 2026-09-07
updated_date: 2026-09-07
eyebrow: Pattern
tags:
  - Reliability
  - Capacity
  - Scalability
cta_label: Business Automation
cta_href: /services/business-automation-ai-workflows/
side_title: Commercial value
content_id: CONTENT-000170
pattern_family: Data Quality, Ownership & Governance
observable_condition: Automated workflows repeatedly stop, misroute or require manual correction because required business data is incomplete, inconsistent or untrusted.
primary_identification: operational-data-quality and automation-readiness problem
commercial_value_dimensions: Reliability, Capacity, Decision quality, Scalability
sources:
  - The Government Data Quality Framework | https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework
  - Principle (d): Accuracy | https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/accuracy/
  - Set up duplicate detection rules to keep your data clean - Power Platform | Microsoft Learn | https://learn.microsoft.com/en-us/power-platform/admin/set-up-duplicate-detection-rules-keep-data-clean
related:
  - When nobody owns the definition of a business metric | /patterns/when-nobody-owns-the-definition-of-a-business-metric/
  - When nobody knows which system holds the correct data | /patterns/when-nobody-knows-which-system-holds-the-correct-data/
  - When a spreadsheet becomes a business-critical system | /patterns/when-a-spreadsheet-becomes-a-business-critical-system/
summary: Automation often exposes data-quality work that people were quietly performing by hand. Strengthening ownership, definitions and validation at the source can make automation more reliable without turning every bad input into another technical workaround.
---
## Observable condition

An automated process works for some records but stops on others. Required fields are blank, customer names differ between systems, statuses mean different things to different teams, or a person still has to inspect the data before the next step can safely run.

The pattern tends to show itself in a familiar way. The automation is demonstrated on clean test data and works well. In production it handles the straightforward cases, then a queue of failed or held records begins to grow. Someone is asked to “keep an eye on it”. Within weeks that person has become a permanent part of a process that was meant to run without them.

## Realisation

People often compensate for weak data without recording the effort. They recognise a customer despite a naming difference, infer a missing category, phone someone to confirm a field or know which value should be ignored. Automation removes that invisible interpretation layer. The resulting failures can therefore reveal a data problem that already existed.

This is an uncomfortable realisation because it changes the question. The issue is no longer “why is the automation unreliable?” but “how much judgement were our people quietly applying to our data, and where?” The automation has become an accidental audit of operational data.

## Identification

This is an **operational-data-quality and automation-readiness problem**.

The UK government's [Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework) offers a useful vocabulary for identifying which kind of problem is present. It describes six core data quality dimensions drawn from DAMA UK—completeness, uniqueness, consistency, timeliness, validity and accuracy—and frames quality as data being fit for its intended purpose. That framing matters here: data that was fit for a person reading a screen may not be fit for a rule executing without supervision.

## Diagnosis

The mechanism usually includes unclear data ownership, weak validation at capture, duplicated records, inconsistent definitions or systems that allow the same business fact to be maintained independently. Automation then receives inputs that are structurally ambiguous. Adding more workflow logic can create a growing catalogue of exceptions without fixing the source. Microsoft's documentation on [duplicate detection rules](https://learn.microsoft.com/en-us/power-platform/admin/set-up-duplicate-detection-rules-keep-data-clean) shows what fixing it at source can look like: rules that reduce duplicate records in the system and so help maintain the integrity of the data.

Each dimension fails an automation in a recognisable way:

- **Completeness:** a mandatory field for the next step was optional at capture, so the workflow halts.
- **Uniqueness:** the same customer exists twice, so the automation updates one record while finance invoices the other.
- **Consistency:** a status such as “active” means signed in sales and live in operations, so the trigger fires at the wrong time.
- **Timeliness:** a change is entered after the automation has already run, so the output is based on yesterday's facts.
- **Validity:** free-text fields hold dates, codes or amounts in formats the rule cannot parse.
- **Accuracy:** the value is well formed but wrong, which is the most dangerous case because the automation proceeds confidently.

The framework's guidance on the data lifecycle names problems that typically begin at the design stage, including poor design of data collection, lack of validation rules and failure to specify master or reference data. It also explicitly encourages treating issues at source and using root cause analysis. For personal data there is a regulatory dimension as well: the UK Information Commissioner's [guidance on the accuracy principle](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/accuracy/) expects reasonable steps to check the accuracy of data collected, to record its source and to correct incorrect data. Automation that silently acts on inaccurate personal data spreads the error further and faster.

## An illustrative example

*Illustrative scenario, not a client case.* A services firm automates the creation of projects in its delivery system whenever a deal is marked won in its CRM. The automation fails for a noticeable share of deals. Investigation shows three causes: some deals have no billing entity because sales completes that field only when finance asks; some clients exist twice under trading and registered names; and one team marks deals won at verbal agreement while another waits for signature. None of these is a workflow defect. Each was being absorbed by an operations co-ordinator who knew which records to fix before creating projects by hand.

## Commercial impact

The value wrapper is **reliability, capacity, decision quality and scalability**. Failed runs create rework and monitoring demand. Teams lose confidence and keep manual controls beside the automation. Scaling the workflow increases the number of records exposed to the same input problem.

There is a quieter cost too. When automation is seen to fail, the business can draw the wrong conclusion and decide that automation does not work for it. Investment is then withheld from the very processes that would benefit most once the data contract is repaired. The relationship between duplicated capture and labour cost is explored further in [the cost of duplicated data entry](/impact/pain-employees-duplicated-data-entry/).

## Common misidentification

The symptom is frequently labelled an automation bug. Some failures are technical, but repeated failures tied to particular records, fields or definitions deserve a data diagnosis before the automation is rebuilt.

A second misidentification is to blame the people who capture the data. Capture errors are often the logical result of forms that allow ambiguity, definitions nobody agreed and fields nobody explained the downstream use of. Training without redesign rarely holds.

## Warning signs

- A standing “fix list” or held-records queue that someone clears daily.
- Workflow rules with long chains of special cases for particular customers, suppliers or products.
- Staff who say the automation is fine “as long as someone checks it first”.
- The same field maintained in two systems with no agreed master.
- Exceptions that recur on the same field after each fix.

When those exception queues outgrow the automated throughput, the condition has merged into the wider pattern described in [when manual exceptions become the normal process](/patterns/when-manual-exceptions-become-the-normal-process/).

## Possibility

A stronger model treats critical data fields as operational infrastructure. Ownership is explicit, required values are validated close to capture, definitions are shared and exceptions are observable. Automation then operates on a narrower, more reliable contract instead of compensating for every historical inconsistency.

The trade-off is real: stricter validation at capture adds friction for the people entering data, and cleaning historical records takes effort that produces no visible new feature. The practical answer is to be strict only on the fields that downstream automation actually depends on, and to clean historical data in the order that failures reveal, rather than attempting a complete cleanse before anything can move.

## Intervention

Take a sample of recent failed or manually corrected workflow cases. Identify the exact fields or definitions that caused intervention. Trace where each value originates, who owns it and where it can change. Fix the highest-impact capture or ownership failure first, then rerun the same cases to determine whether workflow reliability improves.

Record the result as a simple data contract for the workflow: which fields it depends on, the valid values for each, the system of record and the named owner. Make exceptions visible with a reason code rather than a generic failure, so that the next round of fixes is guided by evidence. The wider argument for this discipline as automation becomes more intelligent is set out in [why AI makes data quality more important, not less](/insights/why-ai-makes-data-quality-more-important-not-less/).

## Practical diagnostic questions

- Which fields cause the most automation exceptions?
- Who is accountable for the correctness of those fields?
- Can the same business fact be edited independently in multiple systems?
- What data corrections do experienced staff make without documenting them?
- Are new automation rules treating symptoms that should be fixed at capture?
- Do failed records carry a reason that a business owner can understand?

## Bottom line

When automation repeatedly needs humans to repair its inputs, the constraint may be the data contract underneath the workflow.
