---
hub: discovery
record_id: DISC-270
slug: forecast-models-quietly-run-on-stale-operational-data
title: Forecast models quietly run on stale operational data
description: When nobody tracks the age of forecast inputs, a failed load looks like fresh data. Here is how to record as-of times, set freshness limits and flag old inputs.
lead: When nobody tracks the age of forecast inputs, a failed load looks like fresh data. Here is how to record as-of times, set freshness limits and flag old inputs.
category: Data, Reporting & Decision Systems
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Data, Reporting & Decision Systems
problem_domain: Data, Reporting & Decision Systems
problem_owner: Head of financial planning and analysis
budget_owner: CFO
sources:
  - https://docs.getdbt.com/docs/build/sources | https://docs.getdbt.com/docs/build/sources
  - https://learn.microsoft.com/en-gb/power-BI/connect-data/refresh-scheduled-refresh | https://learn.microsoft.com/en-gb/power-BI/connect-data/refresh-scheduled-refresh
summary: When nobody tracks the age of forecast inputs, a failed load looks like fresh data. Here is how to record as-of times, set freshness limits and flag old inputs.
layout: plain
---
Picture the planning lead at a Durban manufacturer presenting the monthly stock and cash forecast to the executive team. The numbers look reasonable until the head of operations points out that the forecast shows one product line as slow-moving, while the warehouse has been dispatching it all week. Back at her desk, the analyst checks the sales extract the forecast reads from and finds it last loaded nine days ago. The overnight job failed, nothing raised an alarm, and the forecast simply used what was there.

The operating condition is plain: the forecast cannot tell fresh inputs from old ones. A failed or late load looks exactly like a good one, so the model runs, produces a number and carries a confidence it has not earned. For the CFO, that means stock, staffing and cash decisions made on data nobody has checked for age.

## The problem in plain language

A forecast is only as current as the oldest input it reads. Most forecasts read several: sales orders, stock on hand, purchase commitments, payroll, bank balances, perhaps a pipeline report from the CRM. Each arrives by a different route. Some come through an overnight integration, some through a scheduled report, some through a spreadsheet that somebody exports and drops into a shared folder.

Each route has its own way of going wrong. A job fails and is not rerun. A source system is down for maintenance during the load window. A person is on leave and the weekly export does not happen. A file is saved in the wrong folder. In every case the forecast keeps working, because the old data is still sitting where the new data should be.

The key detail is that the forecast carries no record of when each input was last updated. The model has a "last run" time, which tells you when the calculation happened. It does not tell you how old the data was when the calculation started. Those are two different clocks, and most forecasts only keep the first.

This problem is easy to confuse with three related ones. [Reports that cannot tell late data from a real decline](/discovery/reports-cannot-tell-data-delay-from-business-decline/) describes the reading side: a person sees a drop and cannot tell whether it is real. [Batch integrations that leave systems hours out of date](/discovery/batch-integrations-leave-systems-hours-out-of-date/) describes the delay built into the plumbing. This article is about the forecast model itself: whether it knows how old its inputs are, and what it does when they are too old.

## What the buyer is actually trying to solve

The FP&A lead and the head of operations describe this in practical terms. Why did the forecast miss when the business had already changed? Why did we find out in a meeting? Why does my analyst spend the first two days of every cycle checking whether the extracts are current and rebuilding numbers by hand?

The outcome they want is a forecast that states how old each of its inputs is, that refuses to present a confident number when an input is too old, and that tells the person responsible which input to fix. They do not need real-time data everywhere. They need to know what they are looking at.

## Evidence and system mechanism

### Freshness checks exist, but they are opt-in

Data engineering tools already have a standard way to measure input age, and the way they work shows why so many forecasts have no check. The dbt documentation on [source data freshness](https://docs.getdbt.com/docs/build/sources) explains that you declare a freshness rule on a source with a warning threshold and an error threshold, and name a timestamp column that records when each row was loaded. When the freshness command runs, dbt compares the latest load timestamp with those thresholds. The documentation is explicit that if no thresholds are given, dbt does not calculate freshness for those tables, and that a table without a load timestamp (or a usable alternative) is also not checked.

That means freshness monitoring is something a team switches on, source by source. A source that nobody configured is simply never measured. Spreadsheet extracts and manual exports usually have no load timestamp at all, so they sit outside any such check, even though a forecast may depend on them heavily.

### A refresh schedule is not a freshness guarantee

Reporting tools have a similar gap. Microsoft's documentation on [scheduled refresh in Power BI](https://learn.microsoft.com/en-gb/power-BI/connect-data/refresh-scheduled-refresh) lists the number of scheduled refreshes each licence allows per day, up to eight on Power BI Pro, and describes how a sign-in failure to a data source shows as an error in the data source credentials settings. A schedule describes when a refresh is meant to happen. It does not say when data last arrived successfully, and the error appears in a settings area, not on the page a planner reads.

The pattern is the same across tools: the schedule and the age are different pieces of information, and the second one has to be recorded on purpose.

| Gap | Effect |
| --- | --- |
| Input has no recorded load time | Nobody can tell whether it is an hour or a fortnight old |
| Load fails but old data remains in place | The forecast runs on old numbers and looks normal |
| Freshness checked for some sources, not others | The unchecked sources become the weak point |
| Forecast shows its run time but not the age of its inputs | Readers assume the numbers are current |
| No rule on what to do when an input is too old | Analysts decide case by case, or not at all |

### What South African law expects of the data

Where forecast inputs include personal information, South African law adds a requirement of its own. The [Protection of Personal Information Act, 4 of 2013](https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf) includes a condition on information quality. Section 16 requires a responsible party to take reasonably practicable steps to make sure personal information is complete, accurate, not misleading and updated where necessary.

A staffing forecast built on a stale headcount or payroll extract is one example. A customer-level cash forecast built on old account records is another. The Act does not prescribe a refresh interval, but it does expect the business to take reasonable steps to keep the data it relies on up to date. A recorded as-of time and a freshness limit are straightforward evidence that those steps exist.

## Why this becomes urgent

Stale inputs cause little harm while the business moves slowly. If volumes, prices and customers change little from week to week, last week's numbers are a safe stand-in for today's, and an old extract produces a forecast that is close enough.

Rapid growth removes that safety margin. New customers, new products, new branches and shifting volumes mean that last week's picture stops describing this week. The same nine-day-old extract that was harmless a year ago now produces a forecast that misses visibly. The trigger is not that the pipeline got worse. It is that the business started moving faster than its data's age could be ignored.

## Economic consequence

Where the money and time go depends on what the forecast drives:

- **Stock.** Buying or holding the wrong quantities because demand data was a week or more old, with cash tied up in slow stock or sales lost to shortages.
- **Staffing.** Rosters or hiring plans built on an out-of-date picture of volumes, leading to overtime, idle capacity or missed service levels.
- **Cash.** Funding or repayment decisions taken on a cash position that did not include recent receipts or commitments.
- **Credibility.** Each visible miss makes executives trust the forecast less, and they start to build their own numbers on the side.
- **Analyst time.** Skilled people spend the start of every cycle checking and rebuilding inputs by hand instead of analysing.

As an illustrative example only, suppose an analyst spends two days of every monthly cycle confirming that extracts are current and patching the ones that are not. Over a year that is more than three working weeks of one person's time spent on a check that a stored timestamp and a simple rule could do automatically.

## Root cause

The root cause is that forecasts read from extracts and batch loads whose age nobody tracks. The pipeline was built to move data, not to report on how current it is. When a load is late or fails, the previous data stays in place, so the next step in the chain receives something that looks valid.

This often goes hand in hand with [spreadsheet extracts that quietly become the reporting system](/discovery/how-spreadsheet-extracts-quietly-become-the-reporting-system/). A spreadsheet has no built-in record of when its numbers were pulled, no owner who is alerted when it is late, and no rule that stops anything downstream from using it. When such extracts feed the forecast, the age of the data depends on whether one person remembered to do their job that morning.

The underlying issue is ownership. Someone owns the model and someone owns each source system, but nobody owns the question: how old is each input right now, and is that acceptable for this forecast?

## Practical intervention

### Practical next actions

1. **List every input to the forecast and its route.** For each, write down the source system, how the data arrives (integration, scheduled report, manual export) and who is responsible for it. Include the spreadsheets, since they are usually the least visible.
2. **Record an as-of time for every input.** Store two times: when the data was loaded, and the date of the most recent business transaction in it. The first catches failed loads. The second catches a load that ran but picked up nothing new.
3. **Set a freshness limit per input.** Different inputs need different limits. Daily sales might warrant a warning after a day and an error after two; a monthly budget file may be fine for weeks. Agree the limits with the people who use the forecast, and write them down. The dbt documentation uses a warning at twelve hours and an error at twenty-four as its example, but your own limits should come from how the forecast is used.
4. **Show data age next to the forecast.** Put the as-of time of each input beside the headline numbers, in the same view the executives see. A reader should not need to ask.
5. **Decide what happens when a limit is breached.** For each input, choose whether an old input stops the forecast run or lets it run with a visible flag. Inputs that drive large commitments should stop the run; lower-risk inputs can flag.
6. **Alert the owner and record the fix.** When a limit is breached, the named owner is told, and the fix and the time it took are logged so repeated causes become visible.
7. **Test the rule on purpose.** Withhold one load in a test cycle and confirm that the forecast flags or stops as agreed, and that the right person is told.

## Diagnostic questions

- For each input to your main forecast, can you state when it was last loaded, without asking someone?
- Which inputs arrive by manual export, and what happens if the person responsible is away?
- If last night's load failed, would the forecast show it, or would it run on the old data?
- Does the forecast output show the age of its inputs, or only its own run time?
- When did a forecast last miss because an input was old, and how long did it take to find out?
- How many hours of analyst time go into checking that inputs are current each cycle?

## What good looks like

Every input to the forecast has a recorded as-of time and an agreed freshness limit. The forecast page shows the age of each input beside the numbers. When an input passes its limit, the forecast either stops or carries a clear flag, and the named owner is told straight away.

You can measure the result. The time between a failed load and someone knowing about it drops to a limit you set. Forecast misses traced to old inputs become rare and, when they happen, are explained in minutes. The analyst's first days of each cycle go to analysis instead of checking extracts.

## Where Mellorca fits

If you are not sure which inputs your forecast reads or how each one arrives, a [digital systems audit](/services/digital-systems-audit/) maps the routes and shows which have no age tracking. Once the rules are agreed, [business automation and AI workflows](/services/business-automation-ai-workflows/) can run the freshness checks, raise the alerts and flag or stop a forecast run when an input is too old.

## Method note

This article draws on the dbt documentation on source freshness, Microsoft's documentation on scheduled refresh in Power BI, and the text of the Protection of Personal Information Act. The scenarios, analyst hours and example limits are illustrative, not measured. The article does not claim that any tool behaves the same way in your environment, and the freshness limits given are examples rather than recommendations, so check the documentation for the systems you run and set limits to suit your own forecast. It is general information and not legal advice: confirm your obligations under the Protection of Personal Information Act with your information officer or legal adviser.
