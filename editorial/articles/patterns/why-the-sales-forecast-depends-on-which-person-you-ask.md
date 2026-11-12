---
hub: patterns
record_id: PAT-109
slug: why-the-sales-forecast-depends-on-which-person-you-ask
title: Why Sales Forecasts Change Depending on Who You Ask
description: Ask three people for the sales forecast and get three numbers. The gap is rarely about optimism. It comes from undefined stages, private spreadsheets and different cut-off times.
lead: Ask three people for the sales forecast and get three numbers. The gap is rarely about optimism. It comes from undefined stages, private spreadsheets and different cut-off times.
category: Sales, CRM & Revenue Operations
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Sales, CRM & Revenue Operations
pattern_family: Sales, CRM & Revenue Operations
observable_condition: The sales manager, the finance lead and the owner each quote a different forecast for the same month, and meeting time goes on reconciling the totals.
primary_identification: Undefined and unshared forecast inputs: stages mean different things to different people, data is copied at different times, and each person works from a private version.
commercial_value_dimensions: Forecast reliability, cash planning, hiring and purchasing decisions, management time and sales credibility
sources:
  - Welcome to Dynamics 365 Sales | https://learn.microsoft.com/en-us/dynamics365/sales/overview
  - Data refresh in Power BI - Power BI | https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-data
  - Understand the sales process | https://learn.microsoft.com/en-us/dynamics365/sales/nurture-sales-from-lead-order-sales
related:
  - Why Signed Deals Stall Before Delivery Begins | /patterns/why-signed-deals-sit-idle-between-acceptance-and-the-first-day-of-delivery/
  - When Sales Data Is Complete but the Pipeline Is Still Unreliable | /patterns/when-sales-data-is-complete-but-the-pipeline-is-still-unreliable/
  - Why Salespeople Spend Time Updating Systems Instead of Selling | /patterns/why-salespeople-spend-time-updating-systems-instead-of-selling/
summary: Ask three people for the sales forecast and get three numbers. The gap is rarely about optimism. It comes from undefined stages, private spreadsheets and different cut-off times.
layout: plain
---
## Observable condition

On Monday morning the sales manager says the month will close at R2.4 million. The finance lead, working from invoices and signed orders, expects R1.9 million. The owner, who spoke to two clients over the weekend, has been telling the bank R2.8 million. Nobody is lying. Each is describing a different slice of reality using a different method, and each is confident.

The meeting that follows is not about customers. It is about reconciling three totals. Someone opens a spreadsheet, someone else shares their screen, and twenty minutes later the group settles on a compromise figure that none of them believes.

An illustrative example: a Cape Town commercial-interiors company with six salespeople. Each reports their own deals by message on Friday. The sales manager adds them up in a personal workbook, the bookkeeper counts only what has been quoted formally, and the owner adds the deals he is personally involved in at full value.

## Realisation

The realisation is that a forecast is not a prediction first. It is a definition first. Before anyone can say how much will close, the business has to agree what counts as a deal worth including, what stage it is at, what it is worth and as of when. Where those agreements do not exist, every person fills the gap with their own judgement.

[Microsoft's documentation for its sales application](https://learn.microsoft.com/en-us/dynamics365/sales/overview) describes tracking opportunities through defined stages so that everyone sees the same progression. The useful idea is not the software but the shared vocabulary: if "proposal sent" means the same thing for every salesperson, a figure built from it means something too.

The deeper point is that forecast disagreement is information. It tells the business that its inputs are not shared. Treating it as an argument to be won hides that signal.

**Realisation prompt:** ask three people to write down the value of deals they would include in this month's forecast, and the rule they used. Compare the rules, not just the totals.

## Identification

This is a pattern of unaligned forecast inputs. The visible symptom is a meeting that opens with competing numbers. The common assumption is that salespeople are too optimistic or finance is too cautious. The structural cause is that there is no single, agreed set of stage definitions, no common cut-off time and no one authoritative copy of the open deals.

The Discovery note [why CRM updates happen only before forecast meetings](/discovery/why-crm-updates-happen-only-before-forecast-meetings/) explains one reason inputs go stale. This pattern looks at the next layer: even when the data is updated, it is read through different definitions.

## Diagnosis

- **Stages are named but not defined.** "Negotiation" might mean a price has been requested to one person and a verbal commitment to another. Without entry criteria, the stage carries no weight.
- **Each person has a private version.** Salespeople keep their own lists, the manager keeps a consolidated workbook and finance keeps a ledger. They are copies of copies, made at different times.
- **Cut-off times differ.** One number is Friday's, one is Monday's, and one includes a deal signed this morning. [Microsoft's Power BI documentation on data refresh](https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-data) makes the same point for reports: what you see is as current as its last refresh, so the age of the data has to be known before the figures can be compared.
- **Value is counted inconsistently.** Some include the full contract value, some only the first year, some exclude VAT and some include it.
- **Probability is judged by feel.** Weighting a deal at 70 percent because the client was friendly is a mood, not a method, and it varies with the person.
- **Stale deals stay in.** Opportunities that have gone quiet are still counted. The Discovery note [why dead deals stay open in the CRM and distort the sales forecast](/discovery/why-dead-deals-stay-open-in-the-crm-and-distort-the-sales-forecast/) covers how this inflates totals.

## Commercial impact

The value at stake is the reliability of the number that other decisions depend on: cash planning, stock purchasing, hiring, supplier commitments and what the business tells its bank or investors.

A forecast that is too high leads to spending that revenue does not support. Equipment is ordered, a person is hired, a lease is signed, and then the month closes short. A forecast that is too low means the business holds back, turns down capacity or buys stock late. In either direction, the error is paid for in cash.

The second cost is management time. A weekly meeting spent reconciling totals is a meeting not spent working out how to win the next deal. Over a year the hours add up, and they are the hours of the most expensive people in the business.

The third cost is credibility. When the number moves each week, people stop relying on it. The owner discounts what sales says, sales feels second-guessed, and finance builds its own shadow forecast. The Impact note [no visibility into customer and product profitability](/impact/no-visibility-into-customer-product-profitability/) shows what happens when leaders cannot trust the figures in front of them.

## Common misidentification

The usual fix is to push salespeople to be more accurate, or to apply a blanket haircut to their figures. Neither tackles the cause, and a haircut only hides the variation. Another reflex is to buy a forecasting module, which fails if the underlying stages and cut-offs are still undefined. A third is to centralise the forecast in one person's workbook, which gives a single number but not a trustworthy one.

## Possibility

In a better state, the business has one list of open deals, held in one place, with each deal showing its stage, value, expected close date and the date it was last touched. Stages have written entry criteria. Everyone forecasts from the same snapshot, taken at an agreed time, and the snapshot is labelled with that time.

Differences still arise, because people judge deals differently. But now the disagreement is about a specific deal, which can be discussed, not about the whole method. [Microsoft's description of the path from lead to order](https://learn.microsoft.com/en-us/dynamics365/sales/nurture-sales-from-lead-order-sales) shows how a deal can be followed through defined steps, which is the kind of traceability that lets a forecast be checked against what actually happened.

The Pattern [why reporting delays become decision delays](/patterns/why-reporting-delays-become-decision-delays/) covers the related problem of figures that arrive too late to be used.

## Intervention

The work is mostly agreement, not technology. It can begin with a single sitting and a whiteboard.

## Practical next actions

1. **Write stage definitions.** For each stage, state in a sentence what must have happened for a deal to enter it, such as "written quote sent and decision-maker identified".
2. **Choose one list of open deals.** Pick the place where it lives and stop maintaining parallel versions. Salespeople update it directly rather than reporting by message.
3. **Fix a cut-off time.** Take the snapshot at the same time each week and put the date on every figure presented.
4. **Agree how value is counted.** Decide whether VAT is in or out, and whether the figure is first-year or total contract value, and apply it to every deal.
5. **Remove stale deals.** Set a rule that a deal with no activity for an agreed number of days is reviewed and either revived or closed.
6. **Compare forecast to outcome.** At month end, record how far each month's forecast was from the result and look at the deals that explain the gap.

## Diagnostic questions

- If three people each wrote the forecast today, would they use the same rules?
- Where does the single list of open deals live, and who can change it?
- How old is the forecast number at the moment it is presented?
- Does every stage have a written entry condition?
- When did you last compare a forecast to what actually closed?

## Bottom line

Forecasts differ between people because the inputs and definitions are not shared, not because anyone is careless. Agreeing what each stage means, when the numbers are taken and where the one list lives turns the weekly argument into a useful conversation about specific deals.
