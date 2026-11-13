---
hub: patterns
record_id: PAT-064
slug: what-it-costs-to-run-a-business-on-last-nights-numbers
title: The cost of managing yesterday’s information
description: When stock, prices and balances are a day old by the time anyone acts, the business pays in small errors every hour. Find the lag and shorten it.
lead: When stock, prices, rosters and balances are a day old by the time anyone acts on them, the business pays in small errors every hour. Here is where the lag comes from and how to shorten it.
category: Data, Reporting & Management Visibility
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Data, Reporting & Management Visibility
pattern_family: Data, Reporting & Management Visibility
observable_condition: Staff quote stock, prices, balances and schedules that are a day old, so small surprises and corrections arise throughout the working day.
primary_identification: Information latency: the refresh cycle of the systems is slower than the decisions made from them, and the age of each figure is not visible.
commercial_value_dimensions: Order accuracy, customer trust, working capital, staff time and quality of daily decisions
sources:
  - What Is Data Integration? - IBM | https://www.ibm.com/think/topics/data-integration
  - What Is Data Quality? - IBM | https://www.ibm.com/think/topics/data-quality
  - Configure scheduled refresh - Power BI | https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-scheduled-refresh
related:
  - The cost of manual consolidation across workbooks | /patterns/the-hidden-cost-of-combining-figures-from-many-workbooks-by-hand/
  - Why your business has data but no single view of operations | /patterns/why-a-business-with-plenty-of-data-still-has-no-single-view-of-operations/
  - When customers know less than your internal systems do | /patterns/when-customers-know-less-than-your-internal-systems-do/
summary: When stock, prices, rosters and balances are a day old by the time anyone acts on them, the business pays in small errors every hour. Here is where the lag comes from and how to shorten it.
layout: plain
---
## Observable condition

Every morning begins with a report that describes the night before. The stock sheet shows what was on the shelf at close of business. The debtors list shows balances as at yesterday's batch run. The delivery schedule was exported at five o'clock and printed. By ten, a customer has phoned about an item that sold at nine, a driver has been sent to a client who paid a deposit and changed the order, and a supervisor has assigned a shift that was swapped over WhatsApp at lunchtime.

Nobody in this business is careless. They are working diligently from the best information they have. The difficulty is that the best information they have is a day old, and the business moves faster than that.

An illustrative example: a Gqeberha plumbing-supplies wholesaler with three counters and a delivery van. Stock is counted into the accounting system overnight. The counters sell all day from the same shelves. By mid-morning the "available" figure that the sales staff quote is wrong for the fastest-moving fittings, and the shortfall surfaces only when a contractor arrives to collect.

## Realisation

The realisation is that old information is not neutral. A figure that is a day old is not simply less precise; it is a confident statement about a situation that has already changed. People act on it as if it were current, because it arrives in the same format and from the same system as accurate figures do.

Most managers sense this and compensate informally. They phone the depot "just to check", they walk to the shelf, they ask the person who was there. Those checks work, but they are the business paying a hidden tax every time a decision depends on something that might have moved. The cost is not one dramatic failure; it is hundreds of small corrections, each too minor to appear in a report.

IBM's overview of data integration notes that integration processes can run in batches or continuously, and that the choice determines how current the combined data is. That choice is often made once, years ago, for technical convenience, and never revisited when the business changes pace.

**Realisation prompt:** pick the three figures your team quotes to customers most often, such as stock, price and delivery date. For each, how old is the number at the moment it is spoken?

## Identification

This is a pattern of information latency. The visible symptom is a steady flow of small surprises: items sold twice, jobs double-booked, customers told something that is no longer true. The common assumption is that staff are not updating the system quickly enough. The structural cause is that the system's own refresh cycle is slower than the decisions made from it.

The related Pattern [when disconnected systems let the business act on old information](/patterns/when-disconnected-systems-let-the-business-act-on-old-information/) looks at the problem from the standpoint of disconnected tools. This Pattern looks at the price of the lag itself: what each hour of delay costs in rework, goodwill and decisions made on a stale picture.

## Diagnosis

- **Overnight batches set the clock.** A nightly job copies data from the till or the field app into the accounting or planning system. Everything downstream is therefore at least as old as the last run, and a failed run makes it two days old without anyone noticing.
- **Exports become the working copy.** Someone downloads the morning report into a spreadsheet, and from that point the spreadsheet is what people consult. It never refreshes. The Discovery note [batch integrations leave systems hours out of date](/discovery/batch-integrations-leave-systems-hours-out-of-date/) describes the mechanism.
- **No timestamp is visible.** The screen does not say when the figure was last updated, so a day-old number and a live one look identical.
- **Different feeds age differently.** Sales are live, purchase orders update weekly and the roster is whatever was last printed. A combined view mixes information of different ages without saying so.
- **Corrections travel by word of mouth.** When someone knows a figure is wrong, they tell the person next to them. The system stays wrong until the next update, and a new colleague trusts it.
- **Nobody has defined how fresh is fresh enough.** A monthly management pack can tolerate a lag of days. A counter quoting stock cannot. Without that distinction, every figure is treated the same way.

## Commercial impact

The commercial value at stake is order accuracy, customer trust, working capital, staff time and the quality of day-to-day decisions.

The most direct cost is in the promises the business makes. Selling stock that has already gone, or quoting a price that changed this morning, creates a cancelled order, a discount to apologise, or a special purchase at a worse price. Each is small. Multiplied by the number of counter and phone interactions in a week, they add up to a real figure in Rand.

The second cost is working capital. A debtors list that is a day behind means a customer who paid this morning still receives a reminder, while one who has gone quiet is not yet flagged. The Discovery note [why paying customers still get overdue invoice reminders](/discovery/why-paying-customers-still-get-overdue-invoice-reminders/) shows how that irritates good customers. Cash decisions made from stale balances also tend to be cautious, so the business holds back spending it could have afforded.

The third cost is staff time. Checking whether a figure is still true is work that produces nothing new. The effort is spread across many people and rarely measured, which is why it persists.

The fourth cost is the quality of management decisions. The Impact note [decision-making with outdated information](/impact/pain-decision-making-with-outdated-information/) describes how leaders either wait for fresher numbers or decide on old ones and pay for the difference later. In a country where load-shedding can interrupt syncs and connectivity at a branch, the lag is also less predictable than it looks on paper.

## Common misidentification

The usual diagnosis is human: "the team must capture transactions faster." Often they already do. The delay is between the moment the transaction is captured and the moment other systems learn of it. Asking staff to hurry does nothing to a batch job that runs at two in the morning.

A second misreading is to demand real-time everything. That is expensive and unnecessary. A board pack does not need to refresh by the minute, and chasing that standard can divert money from the few figures that really need it. A third is to add yet another report that shows the same stale data in a nicer format.

## Possibility

In a better state, each important figure has a declared freshness and shows its own timestamp. Stock and price at the counter reflect the last sale within minutes. Balances reflect yesterday's payment by mid-morning at the latest. The monthly pack says plainly "as at" a given hour. When a feed fails, someone is told the same day, not when a customer notices.

This does not demand a large new platform. It begins with deciding which decisions are sensitive to age and shortening the path for those alone. The Pattern [why reporting delays become decision delays](/patterns/why-reporting-delays-become-decision-delays/) treats the management end of the same question.

## Intervention

1. **List the decisions made from numbers.** Quoting stock, setting a delivery route, approving credit, assigning shifts. Note the figure each one uses.
2. **Record the age of each figure.** Find out when it was last refreshed and by what mechanism: batch, manual export, live link.
3. **Rank by cost of being wrong.** A mistaken stock figure at the counter costs more than a mistaken monthly overhead. Spend effort in that order.
4. **Show the timestamp.** Add a visible "last updated" to the screens and reports that matter. This costs almost nothing and changes how people trust what they see.
5. **Shorten the path for the top few.** Replace overnight copying with more frequent or event-driven updates for those figures, and leave the rest alone. Microsoft's documentation on [scheduled refresh](https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-scheduled-refresh) is a reminder that refresh frequency is a setting that someone has to choose and monitor.
6. **Alert on failure.** If a sync does not run, tell a named person that morning.

## Diagnostic questions

- When a customer asks for a stock level or a balance, how old is the answer you give?
- Which screens or reports show when they were last updated, and which do not?
- What happens if the overnight job fails: who finds out, and when?
- How many times last week did someone phone or walk somewhere to confirm what the system said?
- Which decisions in your business genuinely need numbers fresher than they are today?

## Bottom line

Running on yesterday's information feels normal because everyone does it together. The cost shows up as small errors, apologies and checking, never as a single line in the accounts. Deciding how fresh each important number needs to be, and making its age visible, is a modest step with an outsized effect on how reliably a business keeps its promises.
