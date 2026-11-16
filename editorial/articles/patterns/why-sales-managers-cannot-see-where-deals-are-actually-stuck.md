---
hub: patterns
record_id: PAT-119
slug: why-sales-managers-cannot-see-where-deals-are-actually-stuck
title: Why Sales Managers Cannot See Where Deals Are Actually Stuck
description: The pipeline report shows totals by stage, but not which deals have stopped moving or why. How to make stalled deals visible before they quietly die.
lead: The pipeline report shows totals by stage, but not which deals have stopped moving or why. How to make stalled deals visible before they quietly die.
category: Sales, Leads & Revenue Handoffs
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Sales, Leads & Revenue Handoffs
pattern_family: Sales, Leads & Revenue Handoffs
observable_condition: The CRM pipeline shows deals and values by stage, but the sales manager has to ask each rep in a weekly meeting which deals are really moving and which have quietly stalled.
primary_identification: Static pipeline: the pipeline records where deals are, not how long they have been there, what the next step is or what is blocking them, so stagnation is invisible.
commercial_value_dimensions: Revenue, forecast accuracy, sales capacity, cash flow planning and coaching quality
sources:
  - Manage opportunities using pipeline view | https://learn.microsoft.com/en-us/dynamics365/sales/access-deal-manager
  - Business process flows overview - Power Automate | https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview
related:
  - When Pipeline Hygiene Requires Constant Chasing | /patterns/when-pipeline-hygiene-requires-constant-chasing/
  - The Operational Cost of Manual Proposal Assembly | /patterns/the-operational-cost-of-manual-proposal-assembly/
  - Why Lead Qualification Becomes Inconsistent Across Reps | /patterns/why-lead-qualification-becomes-inconsistent-across-reps/
summary: The pipeline report shows totals by stage, but not which deals have stopped moving or why. How to make stalled deals visible before they quietly die.
layout: plain
---
## Observable condition

The sales pipeline looks healthy. There is plenty of value in proposal and negotiation. Yet the month ends short, and the deals that were supposed to close slip again. In the weekly sales meeting, the manager goes through each rep's list and asks, deal by deal, what is happening. The answers are usually reassuring: waiting for the client, they are reviewing internally, should hear next week. The meeting is the only place where anyone learns which deals have stopped moving.

An illustrative example: an IT services company in Centurion with eight account managers. The CRM shows a pipeline of several times the monthly target. When the manager sorts opportunities by the date they entered their current stage, a large share have not moved in more than sixty days, and many have no next activity scheduled. None of that was visible on the stage-by-value chart the team reviews every week.

## Realisation

The realisation is that a pipeline view shows position, not movement. It tells a manager where deals sit and how much they are worth. It does not, by default, show how long they have been there, when anyone last did something, or what must happen next. A deal that has sat in negotiation for four months looks exactly like one that arrived yesterday.

CRM platforms can usually show more than teams use. [Microsoft's documentation on the opportunity pipeline view](https://learn.microsoft.com/en-us/dynamics365/sales/access-deal-manager) describes metrics, charts and an editable grid that can be personalised and sorted, and a bubble chart that plots deals by probability or score and close date. Those tools only reveal stalled deals if the records hold the signals that indicate stalling, and if someone looks at them.

**Realisation prompt:** how many deals in your pipeline have had no recorded activity in the last thirty days, and how much of your forecast do they represent?

## Identification

This is a pattern of a static pipeline. The visible symptom is a manager who can only find stuck deals by asking. The common assumption is that reps are not updating the CRM or are being optimistic. The structural cause is that the pipeline was designed to record stage and value, not stage age, last activity, next step and blocker, so stagnation leaves no trace in the data.

It sits beside the Discovery note on [pipeline stages that mean different things to different teams](/discovery/sales-pipeline-stages-mean-different-things-to-different-teams/). Even when stages are well defined, a pipeline that does not record movement cannot show where deals are stuck.

## Diagnosis

- **No stage-entry date is tracked or reviewed.** The system may know when a deal changed stage, but nobody reports on it.
- **Next steps are optional.** Deals can sit without a scheduled next action, so there is nothing to show they are being worked.
- **Stage exit criteria are vague.** Without defined criteria for moving forward, deals are moved on hope or left behind by habit. [Microsoft's overview of business process flows](https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview) describes how required steps can stage-gate progress so a deal cannot advance until key information is recorded.
- **Blockers are not recorded.** When a deal is waiting for a budget decision, a legal review or a technical answer, that reason lives in the rep's head.
- **Deals are never closed as lost.** Dead opportunities stay open because closing them feels like admitting failure, and they hide the live ones.
- **The review is about totals.** The weekly meeting starts from value by stage, not from age and activity, so the conversation never reaches the stalled deals systematically.

## Commercial impact

The commercial value at stake is revenue, forecast accuracy and the use of selling time.

Stalled deals that are not noticed are not rescued. A manager who sees that a deal has stopped can intervene: involve a senior contact, adjust the offer, or decide to let it go. A manager who sees only totals cannot. The forecast suffers too. When old, inactive deals are counted at full stage probability, the pipeline overstates future revenue, and cash planning built on it is wrong. The Impact note on [forecasts based on optimism rather than deal evidence](/impact/sales-forecasts-based-on-optimism-not-deal-evidence-unreliable-forecasting-cost/) describes that cost.

Selling time is also wasted. Reps keep nursing deals that are dead, while live opportunities get less attention. Coaching is weaker because the manager's time goes into asking for status rather than helping to move deals forward.

## Common misidentification

The common responses are to demand that reps update the CRM more often, to add more required fields, or to buy a forecasting tool. More updates without the right fields produce more data of the same kind. More fields add admin. A forecasting tool trained on a pipeline full of stale deals inherits the same blind spot.

## Possibility

In a better state, every open deal has a next step with a date, a recorded blocker if it is waiting, and a visible age in its current stage. The manager's weekly view starts with deals that have exceeded a normal stage age or have no next step, not with totals. Stage exit criteria are defined, so movement means something. Dead deals are closed with a reason, which makes the remaining pipeline smaller and more honest. The Insight [how to design CRM stages that match what your team actually does](/insights/how-to-design-crm-stages-that-match-what-your-team-actually-does/) covers stage design in more depth.

## Intervention

Start with the data the system already holds. Most CRMs can show stage-entry dates and last activity once someone asks for them.

## Practical next actions

1. **Run an age report.** List open deals by days in current stage and days since last activity, and share it with the team.
2. **Set normal stage ages.** Using closed deals from the past year, work out how long a winning deal typically spends in each stage.
3. **Require a dated next step.** Make a next action with a date mandatory for every open deal, and flag deals without one.
4. **Add a simple blocker field.** A short list such as budget, decision-maker, legal, technical and competitor is enough.
5. **Change the meeting agenda.** Start each pipeline review with deals that are over normal age or have no next step.
6. **Close dead deals with a reason.** Agree a rule, for example no activity in ninety days means close as lost unless the manager agrees otherwise.

## Diagnostic questions

- How long has the oldest deal in your negotiation stage been there?
- What share of open deals has no scheduled next step?
- Can your CRM tell you why a specific deal is waiting?
- Does your pipeline review start from totals or from stalled deals?
- How many deals were closed as lost last quarter, and does that number seem honest?

## Article summary

Sales managers cannot see where deals are stuck when the pipeline records only stage and value. Adding stage age, last activity, a dated next step and a recorded blocker turns the pipeline from a list of hopes into a tool for finding and rescuing stalled deals, and makes the forecast more honest. If this condition is familiar in your business, [explore our solutions](/solutions/) or [start a conversation](/contact/) so we can examine where your deals stall and how Mellorca may be able to help.
