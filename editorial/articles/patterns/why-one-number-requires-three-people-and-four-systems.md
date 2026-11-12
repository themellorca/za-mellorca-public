---
hub: patterns
record_id: PAT-053
slug: why-one-number-requires-three-people-and-four-systems
title: Why One Number Requires Three People and Four Systems
description: Explores how a single KPI value often relies on multiple people and systems, creating overhead and misalignment across processes; shows diagnosis and practical interventions.
lead: Explores how a single KPI value often relies on multiple people and systems, creating overhead and misalignment across processes; shows diagnosis and practical interventions.
category: Data Integrity and System Integration
published_date: 2026-10-02
updated_date: 2026-10-02
eyebrow: Patterns
pattern_family: Data Integrity and System Integration
observable_condition: A single KPI value is produced by multiple people across four systems, with manual reconciliation and timing differences.
primary_identification: Cross-system data fragmentation and manual reconciliation burden
commercial_value_dimensions: speed, cost, risk, accuracy
sources:
  - What Is Data Lineage? - IBM | https://www.ibm.com/think/topics/data-lineage
  - Data ownership model | https://www.gov.uk/government/publications/data-ownership-in-government/data-ownership-model
related:
  - Why Does One Customer Exist Differently in Three Systems? | /patterns/why-does-one-customer-exist-differently-in-three-systems/
  - Why Does the Same Customer Have Three Different Names in Your Systems? | /patterns/why-does-the-same-customer-have-three-different-names-in-your-systems/
  - When Your CRM Knows Something Your Finance System Does Not | /patterns/when-your-crm-knows-something-your-finance-system-does-not/
summary: Explores how a single KPI value often relies on multiple people and systems, creating overhead and misalignment across processes; shows diagnosis and practical interventions.
layout: plain
---
## Observable Condition

A single KPI value travels through at least three people and four systems before it is trusted or acted upon. The same number is reinterpreted, corrected, and reconciled in separate spreadsheets, dashboards, and ETL pipelines, often with conflicting implications for decisions. What begins as a simple metric becomes a data governance fray as ownership shifts and trust fragments across silos.

A typical example in a mid-sized distributor is monthly gross margin. Sales figures come from the order system. Cost of goods comes from the inventory module, adjusted by a stock controller. Rebates and credit notes sit in the accounting package. A financial analyst exports all three into a spreadsheet, applies a set of manual corrections that only they fully understand, and sends the result to the finance manager, who adjusts it again before it reaches the managing director. By the time the number is presented, it has been touched by three people and pulled from four systems, and nobody can quickly explain why it differs from the figure in the dashboard the sales director looks at.

## Realisation

Realisation emerges when leaders notice that the number is not a single source of truth but a composite artefact. Each hand-off introduces risk: manual adjustments, timing differences, and inconsistent definitions. The organisation may believe the number captures performance, yet the steps to generate it reveal a brittle chain rather than a robust process.

The moment of realisation is often uncomfortable. It may come when the analyst who builds the figure goes on leave and nobody else can produce it. It may come when an auditor or a bank asks how the number was derived. Or it may come when two directors arrive at a board meeting with different versions of the same metric, each convinced theirs is correct.

### Warning signs

- The KPI cannot be produced without a specific person.
- Meetings spend time debating which number is right before discussing what to do.
- The spreadsheet that produces the figure has hard-coded adjustments with no notes.
- Dashboard and management-pack figures for the same period disagree.
- Producing the number takes days after month-end, so decisions run on old information.

## Identification

This is a data integrity and systems integration issue. It identifies a pattern where a critical metric becomes a proxy for coordination among disparate teams, not a single data product. The root cause lies not in the calculation itself but in the lack of clear ownership, common definitions, and a durable data fabric.

Mellorca covers the reporting side of this in [why your reports cannot agree on the same number](/insights/why-your-reports-cannot-agree-on-the-same-number/). The pattern here is the operational one: the human chain that forms around a number when systems do not produce it reliably on their own.

## Diagnosis

The mechanism is a network of processes where data passes through multiple transform stages, each with its own rules. Without a canonical owner and a trusted source of truth, reconciliation steps create drift and conflict. The outcome is fragile decision-making and a consistent misalignment between what the KPI indicates and what actions teams take.

A practical way to diagnose the chain is to trace one month's figure backwards. Sit with the person who presents the KPI and ask where each component came from. Write down every system, export, file, formula and manual adjustment until you reach source records. This is a simple, paper-based version of data lineage. IBM describes data lineage as tracking where data originated, how it has changed and where it ends up, and notes that this visibility helps teams validate reports and find the root cause of discrepancies. Even a hand-drawn lineage map often reveals the problem immediately: a definition that changed in one system but not another, a cut-off date that differs between modules, or a manual correction that has been repeated every month for years because the underlying data was never fixed.

| Stage | Question to ask | Typical finding |
| --- | --- | --- |
| Source systems | Which records feed the number, and as of when? | Different cut-off times across systems |
| Extraction | Who exports the data, and how? | Manual exports with filters set by hand |
| Transformation | What rules and adjustments are applied? | Undocumented corrections in a spreadsheet |
| Review | Who changes the figure before it is published? | Further adjustments without an audit trail |

## Commercial Impact

Operational inefficiency and elevated risk flow from duplicated effort and delayed decisions. The cost is not a single line item but a cascade: slower response times, more meetings, and higher chances of acting on outdated information. The KPI becomes a governance burden rather than a true diagnostic signal.

The audit dimension matters too. When a figure cannot be traced back to source, every review becomes an investigation. Mellorca's article on [the audit cost of an untraceable reporting number](/impact/untraceable-reporting-number-audit-cost/) examines that expense in more detail.

## Common Misidentification

- Assuming the number's correctness implies systemic health, when it actually reflects reconciliation practice.
- Attributing the issue to data quality alone without addressing process ownership.
- Treating the metric as immutable truth rather than a product of a data pipeline.
- Assuming a new dashboard will solve it, when the dashboard simply automates the same conflicting inputs.

## Possibility

Better outcomes arise when the organisation consolidates data into a single source of truth and clearly assigns data stewardship. Replacing ad hoc reconciliations with standardised definitions, governance, and automation reduces misinterpretation and speeds decision-making.

The UK government's data ownership model offers a useful division of roles. Data owners are senior leaders accountable for a grouping of data who approve major changes without needing granular knowledge; data stewards manage it day to day as subject-matter experts; data custodians handle technical storage and access. A mid-sized business does not need formal titles, but it does need to know who decides what "gross margin" means, who keeps the definition consistent, and who maintains the systems that hold it.

## Intervention

Interventions include appointing a data owner, establishing a canonical KPI dataset, and locking down definitions across systems. Implement automated reconciliation checks, versioned lineage, and a lightweight data fabric that ensures the number remains consistent across users. Align incentives so teams share responsibility for the KPI rather than racing to adjust it in isolation.

### What to do first

1. Choose the one KPI that causes the most argument and write a one-paragraph definition, including what is excluded and the cut-off time.
2. Name a single owner who approves changes to that definition.
3. Trace its lineage for one month and list every manual adjustment.
4. For each recurring adjustment, decide whether to fix the source data, encode the rule in the system, or document it as an approved step.
5. Agree which system or dataset is the canonical source, and point every dashboard and report at it.
6. Add a simple automated check that compares the canonical figure with the component systems and flags differences above an agreed tolerance.

The trade-off is effort now against effort every month. Fixing definitions and source data takes concentrated work and some difficult conversations between departments. Leaving the chain in place costs a smaller amount of time repeatedly and carries the larger risk of a wrong decision. Where the chain depends heavily on a workbook, Mellorca's pattern on [when a spreadsheet becomes a business-critical system](/patterns/when-a-spreadsheet-becomes-a-business-critical-system/) is a useful companion.

## Diagnostic Questions

- Who defines the KPI, and where is the canonical data source located?
- What changes cause the number to drift across systems, and how is this tracked?
- How quickly can the organisation surface misalignment and correct it?
- What governance metrics indicate that the KPI is a trusted signal?
- Could someone other than the usual preparer produce the number from documented steps?

## Bottom Line

One number often requires more than one process to validate. The real work is building a durable data fabric with clear ownership, common definitions, and automated checks so that a KPI can serve as a true decision signal rather than a reconciliation artefact.
