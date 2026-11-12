---
hub: discovery
record_id: DISC-203
slug: why-dead-deals-stay-open-in-the-crm-and-distort-the-sales-forecast
title: Opportunities remain open long after buyers go quiet
description: Deals that have not moved for months still count toward the forecast because nobody closes them. How to set stale-deal rules that keep the pipeline honest.
lead: Deals that have not moved for months still count toward the forecast because nobody closes them. How to set stale-deal rules that keep the pipeline honest.
category: Sales Operations & CRM
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Sales Operations & CRM
problem_domain: Sales Operations & CRM
problem_owner: Sales director, with the sales operations lead or CRM administrator owning the rules
budget_owner: Sales director, commercial director or managing director
sources:
  - Set up the forecast tool | https://knowledge.hubspot.com/forecast/set-up-the-forecast-tool
  - Set up and manage object pipelines | https://knowledge.hubspot.com/object-settings/set-up-and-customize-pipelines
  - HubSpot | https://knowledge.hubspot.com/properties/hubspots-default-deal-properties
related:
  - Why recurring billing is still set up by hand after a deal closes | /discovery/why-recurring-billing-is-set-up-by-hand-after-a-deal-closes/
  - Why you cannot measure the time from accepted quote to first invoice | /discovery/why-you-cannot-measure-time-from-accepted-quote-to-first-invoice/
  - Why Legacy Applications Remain Live Without an Owner | /discovery/why-legacy-applications-remain-live-without-an-owner/
summary: Deals that have not moved for months still count toward the forecast because nobody closes them. How to set stale-deal rules that keep the pipeline honest.
layout: plain
---
On the last Thursday of the quarter the sales director opens the forecast. It shows R14 million of open opportunities with a close date inside the next 30 days. She scrolls through the list and recognises a third of them: a proposal sent in March to a customer who stopped replying, a tender that was awarded to someone else, a company that restructured. The deals are not lost in the system because nobody has marked them lost. They are simply waiting, and every week they sit there they add to a total that the finance director is using to plan cash.

This article looks at that operating condition: sales opportunities that remain open long after the buyer has stopped responding. It affects any business with a CRM and a forecast meeting, and it tends to worsen as the team and the number of deals grow.

## The problem in plain language

Opening an opportunity is a positive act with a clear moment: a proposal is requested, a meeting happens. Closing a lost opportunity has no such moment. The buyer does not announce that they have decided against it. They stop replying. The salesperson, who may still hope, has no reason to mark the deal lost, and a lost deal reduces their own pipeline and may reflect badly on them. So the opportunity stays open, usually with a close date that was set optimistically and has since been pushed forward again and again.

## What the buyer is actually trying to solve

A sales director, sales operations lead or managing director who searches for this problem is trying to get a forecast they can believe. They need a way to separate live deals from dormant ones without accusing the team of dishonesty, and a routine that keeps the pipeline clean without a quarterly purge that everyone dreads. They also want to protect the credibility of the CRM, since a pipeline full of dead deals teaches people to ignore it.

## Evidence and system mechanism

### Forecasts are arithmetic on the data entered

HubSpot's guide to [setting up the forecast tool](https://knowledge.hubspot.com/forecast/set-up-the-forecast-tool) explains that a weighted forecast multiplies each deal's amount by its deal probability, and that deals are grouped into forecast categories according to their stage. The mechanism is typical of CRM systems. The forecast reflects whatever stage, amount, probability and close date have been recorded. A deal that has not moved since March but still sits in a late stage carries a high probability into the total, whatever the buyer is actually doing.

### Stage probabilities are defaults, not evidence

HubSpot's page on [setting up and customising pipelines](https://knowledge.hubspot.com/object-settings/set-up-and-customize-pipelines) notes that each stage in the default sales pipeline has an associated probability of closing, and that the stage probability is used to calculate the weighted amount. A probability attached to a stage describes a typical deal at that stage. It says nothing about a particular deal that has stopped moving. Without a rule that reduces probability or moves a stale deal back, the system keeps assuming the typical case.

### The CRM can record when the last activity happened

HubSpot's list of [default deal properties](https://knowledge.hubspot.com/properties/hubspots-default-deal-properties) includes a close date, described as the day the deal is expected to close or was closed, and a last activity date, which records the most recent logged call, meeting, email or completed task on the deal. These two fields are enough to detect staleness: a close date that has passed or is close, with no logged activity for a long time, is a deal that needs a decision. Other CRM tools hold equivalent fields.

### Warning signs

- Close dates are pushed forward repeatedly without a note saying why.
- Many open deals show no activity for sixty days or more.
- The forecast total is routinely much higher than what closes, as discussed in [why CRM updates happen only before forecast meetings](/discovery/why-crm-updates-happen-only-before-forecast-meetings/).
- Closed-lost reasons are rarely filled in, so the business cannot see why it loses.

## Problem owner and why-now trigger

The sales director owns the forecast and the discipline of the pipeline. The sales operations lead or CRM administrator owns the fields and rules. Individual salespeople own the accuracy of their own deals. The budget owner for any improvement is usually the sales director, the commercial director or the managing director.

The trigger is forecast misses: a quarter where the number promised was not delivered, or a cash plan that relied on revenue which never arrived. A new CRM rollout, a change in sales leadership or an investor or lender asking for pipeline evidence can also bring the problem to the surface. The related pattern of [qualified opportunities going cold during internal handoffs](/patterns/why-qualified-opportunities-go-cold-during-internal-handoffs/) shows how some deals become dormant for internal reasons rather than buyer decisions.

## Economic consequence

The first cost is planning error. If the pipeline overstates likely revenue by 30 percent, then purchasing, hiring and cash-flow decisions rest on revenue that is not coming. The second cost is attention. Managers review dead deals in every meeting, and salespeople spend time defending them instead of working live ones. The third is lost follow-up. A deal that could have been revived with a call stays unexamined because it is assumed to be in progress. In Rand terms, a business that carries R4 million of dormant opportunities and wins even five percent of them back with a prompt review gains R200,000 it would otherwise have ignored. The figure is illustrative, not a benchmark.

## Root cause

- **No rule for dormancy.** Nothing defines how long a deal can sit without activity.
- **Incentives favour a large pipeline.** Targets and coverage ratios reward the number of open deals, not their quality.
- **Lost is a hard status to enter.** It needs a reason, an explanation, and sometimes an awkward conversation.
- **Close dates are editable without trace.** A date can slip repeatedly without anyone being asked.
- **The CRM does not prompt.** There is no reminder or task when a deal passes a threshold.

## Practical intervention

1. **Define staleness.** For example, no logged activity in thirty days for deals under three months old, or in twenty-one days for deals in late stages. Choose numbers that fit your sales cycle.
2. **Build a stale-deal view.** List open deals that breach the rule, with the owner, the amount and the last activity, and review it weekly for ten minutes.
3. **Require one of three outcomes.** Each stale deal gets a dated next step with the buyer, a move back to an earlier stage, or a closed-lost status with a reason.
4. **Track close date changes.** Count how often each deal's date has moved. After two moves, ask for a reason.
5. **Use a short closed-lost reason list.** Price, no budget, competitor, no decision, bad timing. A dropdown is easier than an essay.
6. **Reopen cleanly.** If a buyer returns, a lost deal can be reopened or a new one created and linked, so history is kept.
7. **Judge the forecast on the cleaned data.** Compare the forecast at the start of each month to what closed, and watch the gap narrow.

### Trade-offs

A strict rule can close deals that are slow rather than dead, such as public sector buyers with long approval cycles. Allow a different threshold by deal type or a "waiting on buyer decision" status with a review date. A short weekly review is easier to sustain than a quarterly purge.

### An illustrative example

Illustrative: a Johannesburg IT services reseller found that 40 of its 110 open opportunities had no logged activity for more than sixty days. The sales operations lead built a stale-deal view and the sales director reviewed it every Monday. Within six weeks, 28 deals were closed as lost with reasons, nine received a fresh next step, and three were revived and won. The forecast shrank by a quarter but matched the quarter's actual revenue much more closely.

## Diagnostic questions

- How many open opportunities have had no logged activity in the last sixty days?
- How often has the close date of each deal been moved?
- What proportion of lost deals have a reason recorded?
- How far did last quarter's forecast differ from what closed?

## What good looks like

Every open deal has a recent activity and a dated next step. Deals that go quiet appear on a weekly review and are revived, moved back or closed with a reason. The forecast is built from deals the team believes in, and the gap between forecast and result is small enough to plan around.

## Where Mellorca fits

Mellorca's [business automation](/services/business-automation/) work can set up stale-deal rules, alerts and reminders inside the CRM a business already uses. A [digital systems audit](/services/digital-systems-audit/) can first measure how many open deals are dormant and how reliable the forecast has been.

## Method note

The sources are CRM vendor documentation describing how forecasts, stage probabilities, close dates and activity fields work. They do not measure how many dormant deals any business carries. The figures and the example are illustrative rather than a client case.
