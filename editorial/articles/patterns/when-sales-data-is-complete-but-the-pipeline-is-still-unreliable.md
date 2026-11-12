---
hub: patterns
record_id: PAT-107
slug: when-sales-data-is-complete-but-the-pipeline-is-still-unreliable
title: When Sales Data Is Complete but the Pipeline Is Still Unreliable
description: Every deal is in the CRM and every field is filled, yet the forecast keeps missing. The problem is what the fields mean and when they change, not whether they exist.
lead: Every deal is in the CRM and every field is filled, yet the forecast keeps missing. The problem is what the fields mean and when they change, not whether they exist.
category: Data, Reporting & Management Visibility
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Data, Reporting & Management Visibility
pattern_family: Data, Reporting & Management Visibility
observable_condition: Every opportunity has complete CRM fields, yet forecasts repeatedly miss and managers distrust the pipeline report.
primary_identification: Unreliable pipeline data despite full capture: stages, dates and values are not tied to customer evidence and are not updated when circumstances change.
commercial_value_dimensions: Forecast accuracy, resource and cash planning, sales management time and coaching effectiveness
sources:
  - What is a Sales Pipeline? - IBM | https://www.ibm.com/think/topics/sales-pipeline
  - What Is Data Quality? - IBM | https://www.ibm.com/think/topics/data-quality
  - What Is Customer Relationship Management (CRM)? - IBM | https://www.ibm.com/think/topics/crm
related:
  - Why New Clients Wait While Internal Teams Coordinate | /patterns/why-new-clients-wait-while-internal-teams-coordinate/
  - When Customers Know Less Than Your Internal Systems Do | /patterns/when-customers-know-less-than-your-internal-systems-do/
  - Why Your Business Has Data but No Single View of Operations | /patterns/why-a-business-with-plenty-of-data-still-has-no-single-view-of-operations/
summary: Every deal is in the CRM and every field is filled, yet the forecast keeps missing. The problem is what the fields mean and when they change, not whether they exist.
layout: plain
---
## Observable condition

The CRM looks healthy. Every opportunity has an owner, a value, a stage and a close date. Reports run without errors. Nobody can say that data is missing. Yet the forecast built from it is wrong month after month: deals that were "90 per cent" slip into next quarter, and a few that nobody mentioned arrive from nowhere.

The sales director has two reactions. The first is to ask the team to update the CRM more diligently. The second is to ignore the pipeline report and phone each salesperson. Both reactions show the same thing: the data is complete, but it cannot be relied upon.

An illustrative example: a Pretoria software reseller sells annual licences to municipalities and mid-sized companies. Its pipeline shows R14 million in the "proposal" stage at the start of each quarter. In the last four quarters, between a third and a half of that value closed in the quarter predicted. The sales manager knows, from long experience, that deals in the same stage differ wildly in readiness, but the CRM cannot show it.

## Realisation

The realisation is that completeness and reliability are separate qualities. A field can be filled in and still be wrong, stale or answering a different question from the one the forecast asks. A close date entered three months ago and never revisited is complete. A stage name chosen by the salesperson's feeling of optimism is complete. A value copied from the first conversation is complete. None of them is reliable.

Reliability comes from agreed meaning and from timeliness. Does "proposal" mean that a proposal has been sent, that a decision-maker has read it, or that the customer has said it is acceptable? Does the close date move when the customer's circumstances change, or only when the salesperson is asked about it? Without answers, each person fills the same field differently, and the pipeline becomes the sum of individual judgements.

IBM's overview of sales pipelines makes the standard point that a pipeline is a staged view of a buying process, which only works if the stages reflect real, observable steps. A stage that depends on opinion is not a step.

**Realisation prompt:** take the five largest deals in your pipeline. For each, can you point to the most recent customer action, not salesperson action, that justifies its current stage?

## Identification

This is a pattern of unreliable pipeline data despite full capture. The visible symptom is forecast error and distrust of the report. The common assumption is that salespeople are not entering enough information, or that they are being deliberately optimistic. The structural cause is that stages, probabilities and dates are not tied to evidence, and nothing in the process prompts an update when circumstances change.

The published Pattern [when a lead enters the CRM but nobody acts](/patterns/when-a-lead-enters-the-crm-but-nobody-acts/) deals with the front of the funnel. This Pattern concerns what happens further along, where records exist, are tidy and are still misleading. The Discovery note [why CRM updates happen only before forecast meetings](/discovery/why-crm-updates-happen-only-before-forecast-meetings/) describes one common cause.

## Diagnosis

- **Stages are defined by feeling.** Without an exit criterion for each stage, such as "customer has confirmed budget", the label reflects confidence rather than progress.
- **Dates do not age visibly.** A close date in the past, or an opportunity untouched for sixty days, sits in the pipeline looking the same as a live one.
- **Values change silently.** The amount entered at the first meeting is rarely updated as scope changes, so the total drifts from reality.
- **Updates are batched.** The CRM is brought up to date on the afternoon before the forecast meeting, which means the data is accurate once a week and stale for the rest.
- **Customer signals live elsewhere.** The email that says "we have put this on hold" sits in a personal inbox and never touches the opportunity record. The Insight [how bad CRM data gets created](/insights/how-bad-crm-data-gets-created/) describes this gap between activity and record.
- **Win and loss reasons are not captured.** Without them, the team cannot learn which stage criteria actually predict closing.
- **Data quality is judged by fields filled.** IBM's overview of data quality lists accuracy, timeliness and consistency alongside completeness. A pipeline that satisfies only the last of these will look fine and perform poorly.

## Commercial impact

The commercial value at stake is forecast accuracy, resource planning, sales management time and cash planning.

An unreliable pipeline affects decisions well beyond the sales team. Procurement orders stock against expected demand. Operations schedules delivery staff. Finance sets a cash plan and decides whether to draw on a facility. A forecast that is wrong by a third in either direction produces either idle capacity or missed commitments, and both cost money.

It also consumes management time. If the report cannot be trusted, the sales manager reviews every deal personally, which does not scale and ties the business to one person's judgement. The Pattern [why salespeople spend time updating systems instead of selling](/patterns/why-salespeople-spend-time-updating-systems-instead-of-selling/) describes the opposite trap: pushing for more updates without making them useful.

Finally, there is a coaching cost. If stage definitions are loose, a manager cannot see where deals are stalling or which salespeople struggle at which step, so effort goes into pep talks instead of specific help.

## Common misidentification

The typical response is to make more fields mandatory. This raises completeness, which was never the problem, and often lowers quality, because people fill the new fields with whatever allows them to save the record. Another response is to buy a forecasting or analytics add-on. Analytics will model whatever the CRM contains, so unreliable inputs produce confident but unreliable outputs.

A third response is to blame the sales team's honesty. In most cases the issue is that the system asks for a judgement without giving any shared definition of what the judgement means. People who answer a vague question inconsistently are not dishonest.

## Possibility

In a better state, every stage has a short, observable entry criterion, such as "customer has seen a written quote" or "customer has named an approver". Moving a deal forward means recording the evidence. Opportunities that have been silent too long are flagged automatically and must be either updated or closed. The value and close date are reviewed when something changes, not only when a meeting is called.

The forecast then reflects what customers have done. Variance between forecast and result is smaller, and when it does occur, the team can see which assumption failed.

## Intervention

1. **Compare forecast with outcome.** For the last four quarters, check which stage-and-age combinations actually closed. This shows where the pipeline misleads.
2. **Rewrite stages around customer actions.** Define each stage by something the customer has done or confirmed, not by what the salesperson hopes.
3. **Add ageing rules.** Flag any opportunity with no activity in a set number of days, and require a decision to keep or close it.
4. **Capture signals where they happen.** Connect email and calendar activity to the opportunity, so a customer's "on hold" reply appears on the record without retyping.
5. **Record reasons.** Make win and loss reasons a required step on closure, and review them each quarter.
6. **Measure reliability.** Track forecast accuracy by stage and by salesperson, and share it as a learning tool. The Insight [what makes data good enough to operate with](/insights/what-makes-data-good-enough-to-operate-with/) offers a practical test.

## Diagnostic questions

- How much of last quarter's expected pipeline closed in the quarter predicted?
- Does each stage have a written exit criterion based on customer evidence?
- How many open opportunities have a close date in the past?
- When did the CRM last change because of something a customer did, rather than a meeting?
- Do you know why you lost your last ten deals?

## Bottom line

A full CRM is not a reliable one. Reliability comes from stages tied to customer evidence, dates that cannot age unnoticed and updates that follow events. When those are in place, the same data that used to produce disappointing forecasts becomes a planning tool the rest of the business can use.
