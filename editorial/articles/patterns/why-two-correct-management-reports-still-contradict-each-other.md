---
hub: patterns
record_id: PAT-072
slug: why-two-correct-management-reports-still-contradict-each-other
title: The Pattern Behind Conflicting Management Reports
description: When two competent people produce different totals from the same business, the cause is usually how the reports are built, not who made a mistake. Learn how to trace and remove the divergence.
lead: When two competent people produce different totals from the same business, the cause is usually how the reports are built, not who made a mistake. Learn how to trace and remove the divergence.
category: Data, Reporting & Management Visibility
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Data, Reporting & Management Visibility
pattern_family: Data, Reporting & Management Visibility
observable_condition: Two management reports, each defensible, show different totals for the same measure and meetings spend their opening time deciding which figure is correct.
primary_identification: Reporting-lineage problem: each report is built from its own extract with its own filters, grain and cut-off time, and no recorded path links the figures to source records.
commercial_value_dimensions: speed, risk, margin, productivity
sources:
  - Microsoft Fabric adoption roadmap: Content ownership and management - Power BI | https://learn.microsoft.com/en-us/power-bi/guidance/fabric-adoption-roadmap-content-ownership-and-management
  - Endorse your content - Power BI | https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-endorse-content
  - What is Master Data Management? - IBM | https://www.ibm.com/think/topics/master-data-management
  - What is Data Governance? - IBM | https://www.ibm.com/think/topics/data-governance
related:
  - When Your Metrics Arrive After the Decision Was Needed | /patterns/when-the-number-arrives-after-the-decision-is-made/
  - Why Real-Time Operations Still Depend on Friday Reports | /patterns/why-live-data-still-gets-managed-from-a-weekly-report/
  - When People Debate the Number Instead of the Decision | /patterns/when-meetings-argue-about-the-figure-and-never-reach-the-decision/
summary: When two competent people produce different totals from the same business, the cause is usually how the reports are built, not who made a mistake. Learn how to trace and remove the divergence.
layout: plain
---
## Observable condition

Two reports reach the same management meeting. One says revenue for the month was R4.62 million, the other R4.48 million. Both were prepared by capable people. Both can be traced to a system. Neither person made an error that anyone can find in the first hour of looking. The meeting spends its opening twenty minutes establishing which figure is "right", and sometimes ends without an answer, with an instruction to "reconcile and come back".

An illustrative example: a Cape Town company that installs and services commercial refrigeration equipment. The sales report counts a job when the quote is accepted. The finance report counts it when the invoice is raised. The operations report counts it when the technician closes the job card. Each department's number is correct by its own logic, and each is called "revenue" on the cover page. Add a late credit note, a job that spans month-end and a report that was exported on the 3rd instead of the 5th, and the differences are no longer explicable by any one cause.

This keeps happening, and each time it is treated as an unfortunate one-off.

## Realisation

When two reports disagree, the instinct is to ask which one is wrong. In many businesses neither is. They are answering slightly different questions, from slightly different data, taken at slightly different moments. The disagreement is not an accident of this month; it is a built-in feature of the way the reporting is assembled.

That matters because a one-off error is fixed once, while a structural disagreement returns every period. It also has a social effect that is easy to underrate. Each time a meeting cannot agree on the facts, trust moves from the shared numbers to individuals: managers start to believe their own department's report and discount everyone else's. The business slowly loses its common picture of itself.

## Identification

This is a **reporting-lineage problem**: reports are built from separate extracts, with separate filters and cut-off times, and there is no recorded path from the source records to each figure. It is not the same as [departments defining a metric differently](/patterns/when-every-department-reports-the-same-metric-differently/) or [nobody owning the definition](/patterns/when-nobody-owns-the-definition-of-a-business-metric/), both of which concern meaning. Here, even where the meaning is shared, the numbers still diverge, because the mechanics of production differ.

The visible symptom is contradictory figures. The common assumption is carelessness or a hidden mistake. The structural cause is that every report is its own small data project, with its own copy of the data.

## Diagnosis

Look for these mechanisms. Most conflicts are a combination of two or three.

- **Different moments.** One export was taken on the 2nd and another on the 5th. Late postings, reversals and credit notes appear in one and not the other. Nothing on the page says when it was produced.
- **Different scope.** One report excludes internal sales, another includes them; one is in rands excluding VAT, another includes it; one covers a single branch and another the group. The filters are applied in the file and are not visible to the reader.
- **Different grain.** One report counts invoices, another counts orders, and another counts customers. A single order can generate several invoices, so the totals cannot match without a conversion.
- **Different sources.** The same event is recorded in two systems, which have drifted apart. IBM's explanation of master data management describes the usual result: departments keep their own versions of the same records, which leads to duplicates, inaccurate reporting and wasted effort.
- **Many copies of the model.** Microsoft's adoption guidance for Power BI and Fabric points to a telling indicator: a high ratio of data models to reports, with many models supporting only one report, signals poor reuse and, in its words, discrepancies between different reports that cause distrust. The same logic applies to a folder full of spreadsheets that each contain their own version of the data.
- **Manual steps.** Where figures are copied, pasted or re-keyed on the way to a report, every step is a place where the number can be altered or an update missed.

## Commercial impact

The commercial value at stake is speed, risk, margin and productivity.

Speed suffers because decisions are held while the figures are reconciled. Productivity suffers because skilled people spend hours tracing differences instead of analysing them, and the same investigation is repeated each period. Margin and risk are exposed when the number that wins the argument is the one that is presented most confidently rather than the one that is best supported. For a business that borrows against its receivables, reports to a funder or prepares for an audit, a figure that cannot be traced is a risk in its own right. The meeting-level cost is set out in [departments reporting different numbers for the same metric](/impact/departments-reporting-different-numbers-same-metric-meeting-decision-cost/), and the question of trust in [why your reports cannot agree on the same number](/insights/why-your-reports-cannot-agree-on-the-same-number/).

## Common misidentification

The usual response is to appoint a referee: the finance manager's number becomes "the" number. That ends the argument but not the divergence. The other reports continue to be produced, and people continue to use them quietly because they match what the department sees on the ground.

The second misidentification is to buy a reporting tool. A new tool connected to the same unreconciled sources, with the same filters rebuilt from scratch, will produce its own version of the figure. Microsoft's endorsement feature, which allows an organisation to certify content that meets its quality standards, is useful, but it presupposes that someone has first decided what deserves a certificate.

## Possibility

In a better arrangement, the figures that matter are produced once, from one governed set of records, and everyone else consumes them. Each headline number has a short written description of its scope, source and cut-off. Every report states when it was produced. Where a departmental view legitimately differs, for example sales by acceptance date versus revenue by invoice date, the difference is named and a reconciliation line shows how one becomes the other.

Microsoft's description of managed self-service captures the principle neatly as discipline at the core and flexibility at the edge. A central team maintains the shared data, while departments build their own views on top of it. For the refrigeration company, that would allow the sales manager to keep a sales-by-acceptance view while seeing, in the same model, how it reconciles to invoiced revenue.

## Intervention

1. **Pick one disagreement and trace it.** Take the most recent conflict and walk it back to the records. Note every difference in moment, scope, grain and source.
2. **Write a one-page note per headline number.** State what it counts, what it excludes, which system it comes from and when it is taken.
3. **Build the bridge.** A simple reconciliation table that moves from one version of the figure to another is often more valuable than forcing a single definition.
4. **Reduce the number of copies.** Where several files hold their own extracts of the same data, move to one shared model that reports draw from. Where the root cause is two systems holding the same record, decide which one owns it. The Insight [How to Decide Which System Owns Which Data](/insights/how-to-decide-which-system-owns-which-data/) offers a structure for this.
5. **Stamp every report.** Date, time, source and filters, visible on the page.
6. **Mark the reports that can be relied upon.** Separate those that have been checked from those that are working drafts.

## Diagnostic questions

- When did two reports last disagree, and how long did it take to find out why?
- Does every report state when its data was taken and what is filtered out?
- How many separate files or models hold their own copy of your sales or cost data?
- Could a manager tell, on the page, whether a report is a checked version or a working draft?
- Is any figure presented to a bank, investor or auditor produced by a process that nobody else could repeat?

## Bottom line

Conflicting reports are rarely a sign that someone is wrong. They show that each report is a separate project with its own data. Building the figures once and showing how every view relates to them turns arguments about whose number is right into discussion about what to do.
