---
hub: insights
record_id: INS-164
slug: how-to-automate-reporting-without-hiding-errors
title: How to Automate Reporting Without Hiding Errors
description: Automated reports remove the person who used to notice odd numbers. Freshness panels, reconciliation counts and properly routed failure notices put that check back.
lead: Automated reports remove the person who used to notice odd numbers. Freshness panels, reconciliation counts and properly routed failure notices put that check back.
category: Reporting and Data
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Reporting and Data
sources:
  - https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-data | https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-data
  - https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework | https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework
  - https://learn.microsoft.com/en-us/power-bi/create-reports/service-set-data-alerts | https://learn.microsoft.com/en-us/power-bi/create-reports/service-set-data-alerts
summary: Automated reports remove the person who used to notice odd numbers. Freshness panels, reconciliation counts and properly routed failure notices put that check back.
layout: plain
---
A retail group with eleven stores across the Western Cape replaced its Monday spreadsheet ritual with an automated sales dashboard. Everyone was pleased for three weeks. Then the finance manager noticed that the Paarl store had shown identical figures for four days running. The point-of-sale export from that store had stopped arriving, and the dashboard had quietly kept displaying the last numbers it received. Nobody had been told, because nothing had technically failed: the report refreshed on schedule, with stale data.

The old manual report had a hidden virtue. The person building it every week noticed when something looked wrong, because she touched every number. Automation removes that person, and with them the informal quality check. If you do not design a replacement, automated reporting can be faster and less trustworthy at the same time.

## How automated reports hide errors

Errors in automated reports tend to fall into a few recognisable patterns:

- **Stale data shown as current.** A source stops updating, but the report keeps showing the last values it received, with no visible sign of their age.
- **Partial loads.** Nine of eleven stores load successfully. Totals look plausible, just lower than usual, and the gap is blamed on trading conditions.
- **Silent exclusions.** Records that fail a join, such as sales for a product code missing from the product list, simply drop out of the totals.
- **Changed definitions.** Someone edits a filter or a calculation, and this month's figure no longer means what last month's did.
- **Failure notices nobody reads.** The tool does send an alert, but to the person who built the report and has since moved roles.

None of these produce an error on the screen. That is what makes them dangerous. A report that crashes gets fixed the same day. A report that is wrong but looks fine can steer decisions for weeks. Our article on [why reporting problems usually start upstream](/insights/why-reporting-problems-usually-start-upstream/) explains where most of these faults originate.

## Show freshness on every report

The simplest and most effective control is to show, on the face of the report, when each source last updated successfully. Not when the report was opened, and not when the scheduled job ran, but the latest date in the underlying data from each source. A small table at the top reading "Store sales: latest transaction 14:52 today" for each store would have exposed the Paarl problem on the first morning.

Pair this with a rule about what is acceptable. If store data should never be more than a day old, show any source older than that in a warning colour. People learn quickly to glance at the freshness panel before trusting the numbers.

## Reconcile counts, not just totals

Add a small set of checks that compare what arrived with what was expected. Typical examples:

- The number of stores, branches or accounts reporting today compared with the number that should.
- Row counts loaded compared with row counts in the source export.
- Records excluded because they could not be matched, shown as a count with a link to the list.
- A control total, such as total invoiced in the accounting system, compared with the report total.

The UK government's [Government Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework) describes completeness, timeliness and consistency as core dimensions of data quality, and asks that quality information be communicated clearly to users, including known issues and trade-offs. In practice that means a report should tell its reader what it does not contain, not leave them to guess.

## Route failure notices to someone who will act

Most reporting tools can tell you when a refresh fails. Microsoft's documentation on [data refresh in Power BI](https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-data) explains that refresh failure notifications go to the owner by default, that additional contacts can be added, and recommends sending them to a colleague or support alias so problems get noticed promptly. It also notes that on-demand refreshes and refreshes triggered from automation do not send these emails, and that spam filters can hide them.

The lesson applies to any tool: a failure notice that reaches one person's inbox is a weak control. Send it to a shared mailbox or channel, name an owner who checks it daily, and test it occasionally by deliberately breaking a source in a test copy.

## Alert on values that should never happen

Refresh succeeded does not mean data is sensible. Set a few value-based alerts for conditions that almost always signal a data problem rather than a business change: a store with zero sales on a trading day, a margin above a believable ceiling, or a day's revenue less than a fifth of the trailing average. Power BI's [data alerts](https://learn.microsoft.com/en-us/power-bi/create-reports/service-set-data-alerts) work on card, gauge and KPI tiles and only trigger on refreshed data, which is a reminder that value alerts complement freshness checks rather than replace them. Our guide to [designing alerts for automation failures](/insights/how-to-design-alerts-for-automation-failures/) covers how to keep such alerts useful rather than noisy.

## Control changes to definitions

When a calculation changes, record what changed, when and why, and show a short note on the report for the following period. If a definition change makes figures incomparable with earlier months, say so plainly. This is less about technology than about discipline, and it prevents the familiar argument where two managers bring different numbers to the same meeting. Our piece on [why your reports cannot agree on the same number](/insights/why-your-reports-cannot-agree-on-the-same-number/) covers this in detail.

## Keep a human review, but make it smaller

Automation should not mean nobody looks. It should mean the person looking spends five minutes on targeted checks instead of three hours assembling numbers. A short weekly routine works well: read the freshness panel, scan the reconciliation counts, open the excluded-records list, and confirm that any alerts were dealt with. Record that the review happened. If the report feeds a board pack or a lender covenant, this record is worth having.

## Practical next actions

1. Add a freshness panel to each automated report showing the latest data date from every source, with a warning when any source is older than the agreed limit.
2. Build three or four reconciliation checks, such as expected versus received sources, loaded versus source row counts, and excluded records.
3. Redirect refresh failure notifications to a shared mailbox or channel with a named owner, and test them in a copy of the report.
4. Set value-based alerts for conditions that almost always mean bad data, such as zero sales on a trading day.
5. Keep a change log for report definitions and introduce a short weekly review that someone signs off.
