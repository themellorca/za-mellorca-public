---
hub: patterns
record_id: PAT-068
slug: why-the-latest-numbers-are-always-a-request-and-never-a-view
title: Why Executives Keep Asking Teams to “Send the Latest Numbers”
description: Each request for the latest figures starts a small production run and returns several versions with different ages.
lead: Each request for the latest figures starts a small production run and returns several versions with different ages.
category: Data & Reporting
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Data & Reporting
pattern_family: Data & Reporting
observable_condition: Leaders repeatedly message teams for the latest figures, and each answer is a small manual production with its own age and layout.
primary_identification: Pull-based reporting model dependent on interruption
commercial_value_dimensions: productivity, speed, decision quality, capacity
sources:
  - Email Subscriptions for Reports and Dashboards in the Power BI Service - Power BI | https://learn.microsoft.com/en-us/power-bi/collaborate-share/end-user-subscribe
  - Endorsement overview - Microsoft Fabric | https://learn.microsoft.com/en-us/fabric/governance/endorsement-overview
  - Get started with goals in Power BI - Power BI | https://learn.microsoft.com/en-us/power-bi/create-reports/service-goals-introduction
related:
  - The Operational Blind Spots Created by Periodic Reporting | /patterns/what-happens-between-reporting-periods-that-nobody-sees/
  - When KPI Tracking Becomes a Data Collection Exercise | /patterns/when-measuring-performance-means-collecting-numbers-all-month/
  - Why Manual Reporting Creates Invisible Risk | /patterns/the-risk-inside-reports-that-are-assembled-by-hand/
summary: Each request for the latest figures starts a small production run and returns several versions with different ages.
layout: plain
---
The message arrives at ten past four on a Wednesday: "Can you send me the latest numbers?" It is the third such message from the executive team this week, and each went to a different person. By five, a sales administrator has exported a report, a finance analyst has pasted figures into an email, and an operations manager has typed a summary from memory. All three are labelled "latest". None of them quite agree.

The request is polite, reasonable and entirely ordinary. It is also a small signal that something structural is missing.

## The condition: the figures only exist when someone is asked

In some businesses, the numbers that leaders need are not available until they are requested. The request goes to a person, the person gathers the figures, and the answer returns by email or chat. Because the figures do not exist in a place leaders can simply open, every question starts a small production run.

It is worth noticing how recognisable this is:

- Executives ask the same team for the same figures at similar times each week or month.
- Requests arrive by message, often urgent, often ahead of a meeting or a call.
- Replies are screenshots, pasted tables or attachments, each with its own layout.
- The word "latest" is used, but the reply rarely says as of when.
- Team members keep a private folder of previous answers, to save time when the question returns.

## The realisation: "latest" is not a number, it is a timestamp

The word that causes most of the trouble is "latest". It sounds precise and is not. The latest figure from the sales system might be as of this morning; from finance, as of last month's close; from operations, as of whenever the spreadsheet was last saved. When three people send "the latest numbers", the executive receives three figures with three different ages, and has to work out which to trust.

That points to what the request is really asking for: a figure that is current, agreed and clearly dated. If that existed in a known place, the request would not be needed. The messages are, in effect, a manual workaround for a missing shared view.

## Identification: a pull-based information flow

The class of issue is a pull-based reporting model that depends on interruption. The visible symptom is a steady stream of ad-hoc requests. The common assumption is that executives are impatient, or that teams are slow to share. The structural cause is that information moves only when someone asks for it, so the cost of each answer falls on the person asked.

It is also an ownership issue. If no one is responsible for a given number being available and current, then everyone who has it becomes an informal provider of it. The person who is best at answering becomes the person who is asked most often, and their other work is interrupted accordingly.

## Diagnosis: why each answer is a small project

An illustrative example, not a client case. A wholesaler's managing director wants, each Wednesday, the week's sales, the open orders and the current debtors. Sales sit in the order system, open orders in a separate fulfilment spreadsheet and debtors in the accounting package. A sales coordinator takes a reasonable hour and a half to gather and reconcile them, and sends a summary. A week later, when the director asks for a breakdown by region, the coordinator repeats most of the same steps, because nothing from the first exercise was kept in a reusable form.

The mechanisms look like this:

- **Systems:** the figures are in several tools, and no one tool holds the combined view.
- **Information:** definitions are not fixed, so the answer depends on who assembles it and which filters they apply.
- **Process:** there is no schedule and no place for delivery. Everything is on demand.
- **People:** a handful of colleagues know where the data lives, so requests flow to them.

Our related articles on [why decision-makers keep asking for status updates](/patterns/why-decision-makers-keep-asking-for-status-updates/) and [why one number requires three people and four systems](/patterns/why-one-number-requires-three-people-and-four-systems/) describe neighbouring conditions; this one focuses on the request itself and what it costs the people on the receiving end.

## The commercial value at stake

The value connected to fixing this is productivity, speed and decision quality. Productivity, because the people who field the requests are often skilled and could be doing analysis, selling or service. Speed, because an answer that is already available takes seconds, not an afternoon. Decision quality, because a single dated figure is less likely to be disputed than three conflicting ones.

There is also a consequence for the team. Being interrupted for figures is a hidden tax on concentration, and it falls on a few people disproportionately. We do not put a price on it, as that depends on who is asked and how often, but a week of logging the requests will show the pattern.

## Possibility: let the figures come to the reader

The alternative is to switch from pull to push. A defined set of figures is delivered on a schedule, or when something changes, from a source that everyone agrees on. Microsoft's documentation on Power BI email subscriptions describes exactly this mechanism: you subscribe yourself or others to a report or dashboard, and Power BI emails a snapshot and a link on a schedule you set, hourly, daily, weekly or monthly, or after the data refreshes. For a managing director who wants the same view each Wednesday, a subscription replaces the request. The documentation also notes requirements worth knowing, such as the licences needed to subscribe others.

A subscription is only as good as the figures behind it, which is where the agreement on definitions matters. Microsoft's endorsement feature in Fabric and Power BI offers promoted and certified labels, where a certified item is one an authorised reviewer has confirmed meets the organisation's quality standards and can be regarded as reliable and authoritative. It is a formal way of answering the executive's silent question: which version should I trust?

Scorecards add a further layer. The same documentation describes goals tracked against objectives in a single view, with connected goals updating when the underlying data refreshes. Where the real need is "are we on track?" rather than "give me the table", this is a better fit than a regular export.

## Intervention: turn the repeated request into a standing view

1. **Log the requests for two weeks.** Note who asked, what for, who answered and how long it took. Patterns usually appear quickly.
2. **Pick the three most repeated asks.** Start with the figures requested most often, not with the most impressive.
3. **Define each once.** Source, calculation, owner and refresh time. Add "as of" to every figure.
4. **Deliver, don't wait to be asked.** Push the view on a schedule that matches the decision rhythm, for example before the weekly meeting.
5. **Make exceptions the reason to ask.** Once the routine numbers arrive by themselves, ad-hoc questions become about why, not what.

Our article on [what operational visibility actually means](/insights/what-operational-visibility-actually-means/) sets out the underlying idea in more depth.

## Practical diagnostic questions

- Who in your business is asked for figures most often, and what else would they be doing?
- Do replies state the date and time they are accurate to?
- If three people answered the same request, would they give the same figure?
- How many of this month's requests were the same request as last month's?

## The bottom line

When executives keep asking teams to send the latest numbers, the requests are doing the work that a shared, dated and trusted view should do. Moving from asking to receiving does not remove the conversations that matter, it removes the ones that were only about getting the figures into the room.
