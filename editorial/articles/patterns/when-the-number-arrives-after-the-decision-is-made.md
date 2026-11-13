---
hub: patterns
record_id: PAT-070
slug: when-the-number-arrives-after-the-decision-is-made
title: When your metrics arrive after the decision was needed
description: Accurate reports are still useless if they land after the decision. Match reporting rhythm to decision timing without paying for live data everywhere.
lead: Reports can be accurate and still useless if they land after the choice has been made. See how to match reporting rhythm to decision timing without paying for live data everywhere.
category: Data, Reporting & Management Visibility
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Data, Reporting & Management Visibility
pattern_family: Data, Reporting & Management Visibility
observable_condition: Accurate reports are produced on a fixed schedule but reach managers after the pricing, ordering and follow-up decisions they should have informed have already been made.
primary_identification: Decision-timing mismatch: reporting refresh rhythm is set by production convenience and is slower than the rhythm of the decisions it should support, with no stated needed-by time for each measure.
commercial_value_dimensions: speed, margin, cash flow, risk
sources:
  - Configure scheduled refresh - Power BI | https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-scheduled-refresh
  - Set data alerts in the Power BI service - Power BI | https://learn.microsoft.com/en-us/power-bi/create-reports/service-set-data-alerts
  - What Is Data Quality? - IBM | https://www.ibm.com/think/topics/data-quality
  - The Government Data Quality Framework | https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework
related:
  - Why real-time operations still depend on Friday reports | /patterns/why-live-data-still-gets-managed-from-a-weekly-report/
  - When people debate the number instead of the decision | /patterns/when-meetings-argue-about-the-figure-and-never-reach-the-decision/
  - The pattern behind conflicting management reports | /patterns/why-two-correct-management-reports-still-contradict-each-other/
  - The cost of managing yesterday’s information | /patterns/what-it-costs-to-run-a-business-on-last-nights-numbers/
summary: Reports can be accurate and still useless if they land after the choice has been made. See how to match reporting rhythm to decision timing without paying for live data everywhere.
layout: plain
---
## Observable condition

The decision is made on Tuesday. The figure that would have informed it is published on Thursday. Nobody did anything wrong: the sales manager chose a discount for a large account because the margin report had not yet been run, and the margin report was run, as scheduled, once the month's invoices had been posted. By the time the number arrives, the quote has been accepted and the discussion has moved on. The report is then filed as a record of what happened rather than used as a guide to what to do.

An illustrative example: a Durban distributor of building materials with about 60 staff reviews its branch performance every Monday morning. The pack is assembled over the weekend from three systems. The branch managers, however, make the decisions that move those numbers on Wednesday and Thursday: which lines to push, which customers to call about overdue accounts, how much to order from suppliers before a price rise. By Monday, those decisions are five days in the past and the next ones are already being taken without sight of the results.

The organisation measures a great deal. What it lacks is an agreement about when each measure has to be available in order to be useful.

## Realisation

It is easy to treat reporting as a question of accuracy: is the number right? A second question is hidden behind it: is the number *there* when the choice is being made? A perfectly accurate figure that arrives after the decision has the same practical value as no figure at all, except that it costs more to produce.

The realisation is that every metric has a decision window, and most businesses have never written those windows down. Reports are scheduled around what is convenient for the people who build them (month-end, a weekend, whenever the export finishes) rather than around the moment someone must commit to a price, an order, a roster or a promise. Over time the business accepts the gap as normal and compensates with experience, instinct and phone calls.

That compensation works until the business grows, a key person leaves, or conditions change faster than instinct can follow.

## Identification

This is a **decision-timing mismatch**: the refresh rhythm of the reporting is slower than the rhythm of the decisions it should support. It sits between two neighbouring problems that Mellorca has described separately. [When the Weekly Report Is Already Out of Date](/patterns/when-the-weekly-report-is-already-out-of-date/) is about the age of a figure on the page. [Why Reporting Delays Become Decision Delays](/patterns/why-reporting-delays-become-decision-delays/) is about the effort of producing the report. This Pattern is narrower: it concerns the timing of the *decision*, and whether anyone has ever matched the two.

The visible symptom is a report that nobody opens until a meeting. The common assumption is that managers are not data-minded enough. The structural cause is that the reporting calendar was set by production convenience and nobody owns the question of when each number is needed.

## Diagnosis

Several mechanisms usually combine.

- **Refresh limits nobody has looked at.** Even where reports are automated, the schedule is a setting. Microsoft's documentation for [Power BI](https://learn.microsoft.com/en-us/power-bi/create-reports/service-set-data-alerts), for example, states that [scheduled refresh](https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-scheduled-refresh) is limited by licence: up to eight refreshes a day on Pro and up to 48 on Premium and Fabric capacities. It also notes that a refresh is targeted to start within 15 minutes of its slot but can be delayed by up to an hour. A business that assumes its dashboard is "live" may in fact be looking at a snapshot taken at a time nobody remembers choosing.
- **Silent failure.** The same documentation explains that a refresh schedule is deactivated after four consecutive failures, for example when a credential expires. Unless someone is told, the dashboard keeps displaying the last successful state and looks entirely normal.
- **Period-end thinking.** Figures that depend on posted invoices, reconciled stock or approved timesheets cannot be produced before those steps are complete. If those steps are done in a batch at month-end, every dependent metric inherits the delay.
- **Alerts that depend on the same stale data.** Threshold alerts are an obvious remedy, but they work on refreshed data only. A threshold set on a figure that is updated daily will fire daily at best.
- **No statement of "needed by".** The report has an owner and a schedule but no stated decision, so nobody can say whether late is acceptable.

IBM's description of data quality lists timeliness as one of its dimensions, meaning that data is available within an expected time frame so that processes can work as people expect. The UK [Government Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework) makes the same point from a policy angle: timeliness is about whether data is up to date and available within a lag suitable for its use, and the framework openly accepts that trade-offs between dimensions such as timeliness and accuracy have to be made and communicated. Most small and mid-sized businesses have never made that trade-off consciously. It has been made for them by whichever process was built first.

## Commercial impact

The commercial value at stake is speed, margin, cash flow and risk.

Speed is lost directly: decisions either wait for the figure or go ahead without it. Margin suffers when prices, discounts and purchases are fixed before the cost position is known. Cash flow is affected when a customer drifting past terms is noticed on the next report rather than the day it happens. Risk accumulates in the form of choices that would have been different with a number to hand, but which nobody can identify afterwards because the evidence only appeared once the choice had been made.

There is also a quieter cost in confidence. Managers who repeatedly receive numbers after they needed them stop expecting reports to help, and build their own spreadsheets. The wider consequences of this are explored in [the pain of decision-making with outdated information](/impact/pain-decision-making-with-outdated-information/).

## Common misidentification

The usual response is to ask for "real-time" everything. That is rarely sensible or affordable, and it solves the wrong problem. Some decisions are made monthly and are perfectly well served by a monthly figure. Others are made hourly. Treating them identically leads either to expensive live feeds nobody needs or to a reporting rhythm that suits nobody.

The second misidentification is blaming the people who build the reports. They are generally working to the schedule they were given. The gap is in specification, not diligence.

A third is adding more dashboards. As discussed in [Why More Dashboards Do Not Automatically Create Better Decisions](/insights/why-more-dashboards-do-not-automatically-create-better-decisions/), a new screen over the same slow data simply displays the delay more attractively.

## Possibility

In a better arrangement, the business knows for each important measure what decision it supports, who takes it, how often, and how fresh the number needs to be at that moment. The few measures that drive daily or weekly choices are refreshed to match, and everything else stays on a slower rhythm that is clearly labelled. Each figure shows when it was last updated, so that nobody mistakes an old snapshot for a current one. A failed refresh produces a message to a named person instead of a quiet gap.

For the Durban distributor, this might mean that overdue balances and stock cover are refreshed each morning before branch managers start their calls, while the full performance pack stays weekly but is built from the same underlying data rather than from a fresh weekend export.

## Intervention

1. **List the recurring decisions.** For each manager, write down the five choices they make most often and the day or hour at which each is made.
2. **Attach a metric to each decision.** Note which figure would change the choice, and when it is currently available.
3. **Measure the gap.** For each pairing, record the delay between the decision and the figure. Rank by size of gap and by value of the decision.
4. **Close the largest gaps first.** Options include a more frequent automated refresh, moving a manual step earlier in the cycle, or capturing the underlying data at the point of work so it is available sooner. Where a connection between systems is the obstacle, an integration is usually cheaper than another round of manual extraction.
5. **Show the age of every figure.** A visible "as at" time costs almost nothing and prevents a surprising amount of misplaced confidence.
6. **Monitor the refresh itself.** Someone should be told when a scheduled update fails, and the failure should be treated as an operational incident rather than a nuisance.

## Diagnostic questions

- For the last three significant decisions, was the relevant figure available before or after the choice was made?
- Can each of your key reports state when its data was last refreshed?
- Who would find out if an automated report stopped updating, and how soon?
- Which of your reporting deadlines were set for the convenience of the people who build the report?
- Which numbers do managers ask for by phone because the report is too late?

## Bottom line

Timely information is not the same as accurate information, and the two are often confused. A business that matches the arrival of its figures to the moment of its decisions gains speed without gathering more data, and learns which reports it can retire because nobody ever needed them when they appeared.
