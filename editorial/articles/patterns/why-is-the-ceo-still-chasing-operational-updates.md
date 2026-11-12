---
hub: patterns
record_id: PAT-476
slug: why-is-the-ceo-still-chasing-operational-updates
title: Why Is the CEO Still Chasing Operational Updates?
description: When the chief executive spends the morning asking managers what happened, the business has no defined way of pushing operational signals to leadership. Here is why that happens and how to change it.
lead: When the chief executive spends the morning asking managers what happened, the business has no defined way of pushing operational signals to leadership. Here is why that happens and how to change it.
category: Executive Operating Model, Decisions & Resilience
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Executive Operating Model, Decisions & Resilience
pattern_family: Executive Operating Model, Decisions & Resilience
observable_condition: The chief executive regularly messages and calls managers to find out whether key operational events have happened, and management meetings are spent establishing facts.
primary_identification: Pull-based executive visibility: leadership signals, data sources and escalation rules have not been defined, so information flows only when the CEO asks.
commercial_value_dimensions: Strategic capacity, execution speed, management productivity, scalability and enterprise value
sources:
  - Andon - What Is It? - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/andon/
  - Gemba - What Does It Mean? - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/gemba/
  - Set data alerts in the Power BI service - Power BI | https://learn.microsoft.com/en-us/power-bi/create-reports/service-set-data-alerts
related:
  - The Signs That Your Business Needs an Operating System, Not Another App | /patterns/signs-your-business-needs-an-operating-system-not-another-app/
  - When Every Department Optimizes Its Part but the Whole Process Gets Worse | /patterns/when-every-department-optimizes-its-part-but-the-whole-process-gets-worse/
  - Why Decision-Makers Keep Asking for Status Updates | /patterns/why-decision-makers-keep-asking-for-status-updates/
summary: When the chief executive spends the morning asking managers what happened, the business has no defined way of pushing operational signals to leadership. Here is why that happens and how to change it.
layout: plain
---
## Observable condition

The chief executive starts the day with a list of questions. Did the big order go out? Has the client signed? Is the new branch's system working yet? Did the supplier fix the quality problem? Each question becomes a message or a call to a manager, who often has to ask someone else. Answers arrive through the morning in different forms: a voice note, a forwarded email, a screenshot of a spreadsheet. By lunchtime the CEO knows roughly what is going on, and has spent much of the morning finding out.

The managers feel it too. They are interrupted by the CEO's questions, often about things they were about to report. Some start sending long daily updates to pre-empt the questions, which the CEO does not have time to read.

An illustrative example: the founder and CEO of a Johannesburg logistics and warehousing business with about one hundred and twenty employees describes their role as "chief chaser". Weekly management meetings are spent establishing what happened rather than deciding what to do. Between meetings, the founder relies on WhatsApp to keep track of operations across three sites.

## Realisation

When the most senior person in the business has to pull operational information, the business has no defined way of pushing it. Updates flow only when someone asks. The CEO is not being nosy or micromanaging; they are compensating for an operating model in which nobody has agreed what leadership needs to know, when, and from where.

This has a cost beyond the CEO's time. Every question interrupts a manager, and every manager's answer depends on someone below them. A single morning of chasing can ripple through dozens of people. The information that arrives is also uneven: it is what each person thought was relevant, at the moment they were asked, in whatever form was quickest.

Lean management has long had a different model. An andon, in the Lean Enterprise Institute's definition, is a visual management tool that shows the status of operations at a glance and signals whenever an abnormality occurs. The point is that normal operation is visible without asking, and problems announce themselves. Leaders then go to the place where work happens, the gemba, to understand and improve, not to collect status.

**Realisation prompt:** how many of the questions you asked your managers this week could have been answered by a screen you trusted?

## Identification

This is a pattern of pull-based executive visibility. The visible symptom is a CEO who constantly chases updates. The common assumption is that managers should communicate more proactively, or that the CEO should delegate more and ask less. The structural cause is that the business has not defined which operational signals leadership needs, has not connected them to the systems where the work is recorded, and has not agreed when an exception should be escalated.

The published Pattern [why management finds out too late](/patterns/why-management-finds-out-too-late/) covers the timing problem: learning about issues after customers or month-end expose them. The Insight [why chasing people for updates is a systems failure](/insights/why-chasing-people-for-updates-is-a-systems-failure/) explains the general principle. This Pattern focuses on the chief executive's own role, and how chasing becomes part of the job description at the top.

## Diagnosis

- **Nobody defined what leadership needs.** There is no short list of measures and events the CEO should see without asking, so everything is potentially a question.
- **The data exists but is not assembled.** Orders, jobs, cash and incidents are recorded in operational systems, but nothing brings the key signals together in one trusted place.
- **No escalation rules.** Managers are unsure what is serious enough to raise, so they either over-report everything or wait to be asked.
- **Reporting is periodic, problems are not.** A weekly report cannot show a problem that started on Tuesday, so the CEO fills the gap by asking.
- **Habit reinforces the pattern.** When the CEO asks, people answer. Over time the organisation learns that the CEO's question is the trigger for reporting, and stops reporting otherwise.

## Commercial impact

The commercial value at stake is strategic capacity, execution speed, management productivity and scalability.

The CEO's time is the scarcest resource in many growing businesses. Hours spent chasing are hours not spent on customers, strategy, people or capital decisions. Managers lose focus to interruptions and to writing defensive updates. Decisions are slower because information has to be gathered before it can be used, and they are riskier because the information is assembled from partial answers. The Impact page on [decision-making with outdated information](/impact/pain-decision-making-with-outdated-information/) explores that cost.

The pattern also caps growth. A business in which the CEO is the integration point for operational information cannot add sites, product lines or customers much faster than one person can ask questions. It also reduces the business's value to a buyer or investor, who will see a company that depends on its leader's daily attention.

## Common misidentification

A common response is to demand more reporting: daily email updates from every manager. That moves the work around and buries the CEO in text without making exceptions easier to see.

Another is to buy a dashboard tool. A dashboard helps only if the underlying data is captured reliably in operational systems, the measures have been chosen deliberately, and someone owns them. Otherwise it becomes one more place to check, as the Insight [why more dashboards do not automatically create better decisions](/insights/why-more-dashboards-do-not-automatically-create-better-decisions/) explains.

## Possibility

In a better state, the CEO opens one view each morning that shows the handful of measures that matter, drawn directly from the systems where work is recorded, and current enough to trust. Normal days need no questions. When something crosses a defined threshold, an alert reaches the CEO and the responsible manager at the same time, with a link to the detail. Management meetings start from shared facts and focus on decisions.

Common business intelligence tools support this pattern already. Microsoft's Power BI documentation, for example, describes data alerts that notify a user when a value on a dashboard tile crosses a threshold they set, with a link to the data. The technology is not the hard part; agreeing the measures, thresholds and owners is.

For the logistics business, that could mean a daily view of orders dispatched against plan per site, open incidents, staff attendance and cash received, with alerts for missed dispatch cut-offs and safety incidents.

## Intervention

1. **Log the questions.** For two weeks, have the CEO note every operational question they ask. This list is the specification for what leadership needs.
2. **Group and prioritise.** Reduce the list to a small set of measures and events. Decide which need daily visibility and which need immediate alerts.
3. **Trace each to its source.** For each measure, identify the system that holds the data and whether it is captured reliably. Fix capture before building displays. The Insight [why management has poor visibility into the business](/insights/why-management-has-poor-visibility-into-the-business/) covers common gaps.
4. **Agree escalation rules.** Define the thresholds at which a manager must raise an issue without being asked, and to whom.
5. **Build one trusted view.** Assemble the measures in a single place, with alerts for exceptions, and name an owner for each measure.
6. **Change the habit.** The CEO agrees to check the view before asking, and managers agree to keep it accurate. Review after a month which questions have disappeared.

## Diagnostic questions

- How many operational questions does the CEO ask in a typical day?
- Is there a written list of what leadership should see without asking?
- Do managers know which problems they must escalate immediately?
- How much of the weekly management meeting is spent establishing facts?
- If the CEO took two weeks' leave, how would they know whether the business was running normally?

## Bottom line

A CEO who chases operational updates is filling a gap in the operating model with personal effort. The cure is not more reports or more questions, but a defined set of signals drawn from the systems where work happens, clear escalation rules and one trusted view. That frees the most valuable hours in the business for decisions, and lets the company grow beyond the reach of one person's inbox.
