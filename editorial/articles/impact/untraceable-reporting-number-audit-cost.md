---
hub: impact
record_id: CPS-118
slug: untraceable-reporting-number-audit-cost
title: When Nobody Can Trace Where a Reported Number Came From
description: A management number is expensive when staff must reverse-engineer its source before they can trust, explain or audit it.
lead: A number can look precise while hiding an uncertain lineage. When its source, transformation and owner are unclear, every challenge to the figure becomes another investigation.
category: Digital Operations
published_date: 2026-09-07
updated_date: 2026-09-07
tags:
  - Digital Operations
cta_label: Talk to Mellorca
cta_href: /contact/
side_title: Cost mechanisms
side_text: Analyst rework, delayed decisions and audit/control effort
side_text_position: above_tags
content_id: CONTENT-000166
commercial_domain: Digital Operations
primary_pain: reported figures cannot be traced to authoritative source data
primary_cost_mechanism: analyst rework, delayed decisions and audit/control effort
evidence_basis: qualitative operational analysis and transparent time-cost model; no external benchmark asserted
sources:
  - Spreadsheet Errors: What We Know. What We Think We Can Do | https://arxiv.org/abs/0802.3457
  - The AQuA Book | https://www.gov.uk/guidance/the-aqua-book
related:
  - Recreating Documents Nobody Can Find: The Cost of Duplicated Work | /impact/staff-recreating-lost-documents-duplicated-work-cost/
  - Scattered Supplier Invoices Create Handling Cost and Payment Uncertainty | /impact/supplier-invoices-multiple-inboxes-handling-cost/
  - The Cost of Work Waiting for Approval | /impact/approval-queues-blocked-capacity-cost/
---
## The tolerated pain

A spreadsheet or dashboard produces the number management expects, so the reporting process appears to work. The weakness appears only when somebody asks where the figure came from, which records were included, which adjustments were made or why it differs from another report.

Most of the time, nobody asks. The monthly pack goes out, the board reviews it and decisions are made. The cost stays hidden until a figure is challenged by a director, an auditor, a lender or a customer, and the business discovers that the answer depends on one analyst's memory of how a workbook was built two years ago.

## Why businesses tolerate it

Untraceable numbers are usually the product of good intentions. Someone needed an answer quickly, exported data from a system, cleaned it in a spreadsheet, applied a few sensible adjustments and produced the figure. It worked, so it was repeated. Over time, the exports multiplied, the adjustments became undocumented habits and the workbook became the real reporting system.

Because the output looks right most months, the absence of lineage feels like a theoretical risk rather than a practical one. The cost of rebuilding the process properly is visible; the cost of leaving it alone is spread across many small investigations that nobody totals. The result is often several reports that should agree but do not, as explored in [why your reports cannot agree on the same number](/insights/why-your-reports-cannot-agree-on-the-same-number/).

## Operational consequence

Staff then reconstruct lineage manually: opening source exports, comparing formulas, asking the report owner and recreating transformations. That makes explanation dependent on individual memory and turns routine assurance into recurring investigative work.

The symptoms are recognisable:

- meetings spend more time debating which number is right than deciding what to do about it;
- the same metric is defined differently by finance, sales and operations;
- a key analyst cannot take leave during month-end because nobody else knows how the pack is assembled;
- audit and due-diligence requests trigger days of reconstruction rather than a quick retrieval;
- manual adjustments are made, but nobody can later say who made them or why.

The spreadsheet layer adds its own risk. Raymond Panko's review of research on [spreadsheet errors](https://arxiv.org/abs/0802.3457) concludes that such errors are both common and non-trivial, and that cell-by-cell inspection was the only error-reduction technique with demonstrated effectiveness. When the reporting logic lives in private workbooks, that inspection rarely happens.

## Financial consequence

Measure the avoidable burden as hours spent tracing, reconciling and re-explaining recurring metrics × loaded cost of the people involved. Record decision delay separately where a disputed figure prevents action. Do not automatically translate every delay into lost revenue; only value commercial consequences that can be evidenced.

## A worked cost model

Every input below is illustrative and chosen only to show the arithmetic. It is not a benchmark for any business.

| Input | Illustrative value |
| --- | --- |
| Recurring metrics challenged per month | 4 |
| Analyst time to trace each challenged metric | 3 hours at R350 an hour (loaded) |
| Finance manager time to review and confirm | 1 hour at R600 an hour (loaded) |
| Meeting time re-explaining the figure | 30 minutes for 4 senior people at R900 an hour (loaded) |
| Figures auditors ask to be supported each year | 20, at 2 analyst hours each |

**Cost per challenged metric:** R1,050 analyst time + R600 finance manager time + R1,800 meeting time (0.5 hours × 4 people × R900) = R3,450.

**Annual challenge cost:** 4 challenges × 12 months × R3,450 = R165,600.

**Annual audit support:** 20 figures × 2 hours × R350 = R14,000.

**Total illustrative burden:** R179,600 a year, before any value is placed on delayed decisions.

Now assume, again illustratively, that each metric has a documented definition, source and transformation path. Tracing falls to 30 minutes of analyst time (R175) and the meeting explanation to 15 minutes (R900), so each challenge costs R1,075, or R51,600 a year. Audit support falls to 30 minutes per figure, or R3,500. The total becomes R55,100, a difference of R124,500 a year. That is the arithmetic of the example, not an estimate of your saving, and it must be weighed against the effort of documenting and rebuilding the reporting flow.

## Commercial urgency

The trigger is repeated challenge without fast provenance. If a critical metric cannot be traced from presentation back to authoritative source, definition and transformation logic, management is paying both a labour cost and a control cost for uncertainty.

Urgency rises sharply before events where the number will be scrutinised by outsiders: an audit, a funding round, a lender covenant test, a sale or a regulatory return. It also rises when a key analyst resigns. At that point, undocumented logic stops being an inefficiency and becomes a continuity risk.

## Resolution

Define the metric, authoritative source, transformation rules, refresh timing and accountable owner. Preserve lineage through the reporting flow, automate repeatable transformations where appropriate and make exceptions explicit rather than hidden inside private spreadsheet steps. A reader should be able to answer not only "what is the number?" but "why is this the number?"

Government analytical practice offers a useful pattern. The UK's [AQuA Book](https://www.gov.uk/guidance/the-aqua-book) expects analysts to keep records of their work and to log the data, assumptions and inputs used and the decisions made, with assumptions and decisions logs recording when a choice was made, why and who signed it off. It also separates the analyst who produces the work from the assurer who checks it. A business does not need the full apparatus, but the same principles apply:

1. List the metrics that drive decisions, funding or compliance and start there.
2. For each, record the definition, source system, filters, adjustments and owner.
3. Replace manual export-and-paste steps with repeatable, versioned transformations.
4. Log every manual adjustment with who made it, when and why.
5. Have someone other than the producer check critical figures before release.

Deciding which system is authoritative for each data item is part of this work; [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/) covers that decision.

## The economic meaning

Reporting value comes from decision confidence. A figure that must be reverse-engineered before it can be trusted consumes analytical capacity twice: once to produce it and again to prove it. The cost model above uses inputs only; it asserts no universal audit cost or financial-loss benchmark. What it shows is that traceability is not an administrative nicety. It is what turns a number into something management can act on without first paying to prove it.
