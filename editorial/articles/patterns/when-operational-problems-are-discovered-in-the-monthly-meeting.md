---
hub: patterns
record_id: PAT-060
slug: when-operational-problems-are-discovered-in-the-monthly-meeting
title: When operational problems are discovered in the monthly meeting
description: When the monthly review is where problems first surface, they have already run their course. Catch trouble as it happens, not at month-end.
lead: When the monthly review is where problems first surface, they have usually already run their course. Here is why calendar-based detection and monthly averages hide trouble, and how to catch it as it happens.
category: Reporting & Operational Visibility
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Reporting & Operational Visibility
pattern_family: Reporting & Operational Visibility
observable_condition: Operational problems such as quality spikes, late deliveries or waste are first identified and discussed at the monthly meeting, after they have already caused damage.
primary_identification: Detection-cadence problem: operational performance is inspected on a calendar cycle using aggregated figures, with no defined normal ranges or exception routing between meetings.
commercial_value_dimensions: Risk, responsiveness, margin, customer experience and management capacity
sources:
  - 6.3.1. What are Control Charts? | https://www.itl.nist.gov/div898/handbook/pmc/section3/pmc31.htm
  - Google SRE - Defining slo: service level objective meaning | https://sre.google/sre-book/service-level-objectives/
  - Operational Excellence Pillar - AWS Well-Architected Framework - Operational Excellence Pillar | https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/welcome.html
related:
  - Why teams spend more time preparing reports than using them | /patterns/why-teams-spend-more-time-preparing-reports-than-using-them/
  - Why reporting delays become decision delays | /patterns/why-reporting-delays-become-decision-delays/
  - Why decision-makers keep asking for status updates | /patterns/why-decision-makers-keep-asking-for-status-updates/
summary: When the monthly review is where problems first surface, they have usually already run their course. Here is why calendar-based detection and monthly averages hide trouble, and how to catch it as it happens.
layout: plain
---
## Observable condition

The monthly operations meeting opens with the pack. Halfway through, someone notices that customer returns were unusually high in the second week. Another person points out that one supplier delivered late three times. The workshop's rework rate jumped for a few days and then settled. Each item gets a few minutes of discussion, an action is noted, and the meeting moves on.

What nobody says out loud is that every one of those problems happened weeks ago. The returns spike was over before anyone discussed it. The supplier was paid on time despite being late. The rework had already cost materials and overtime. The meeting is where problems are discovered, but by then they have run their course.

The business has come to treat the monthly meeting as its main detection system without ever deciding that it should be one.

## Realisation

A monthly meeting is a good place to review trends, agree priorities and hold people to account. It is a poor place to detect operational problems, for two reasons.

The first is timing. Operational problems happen on a Tuesday afternoon, not at month-end. A problem that starts in week one has up to four weeks to grow before it is noticed.

The second is aggregation. Monthly figures are averages and totals, and averages hide spikes. Google's site reliability engineering guidance illustrates this with a simple case: a system that handles 200 requests a second in alternate seconds and none in between has the same average as one handling a steady 100, yet its peaks are twice as high. Its advice is to look at distributions and specify the measurement window, because averages can conceal exactly the bursts that hurt customers. A monthly return rate of 3% can contain a week at 9%.

**Realisation prompt:** list the problems raised at your last monthly meeting. For each, when did it actually start, and when could someone have known?

## Identification

This is a detection-cadence problem. The visible symptom is problems surfacing in the monthly review after they have already caused damage. The structural issue is that the business's only systematic inspection of operational performance runs on a calendar cycle, using aggregated figures, rather than on the rhythm of the work itself.

It is closely related to the broader pattern in [why management finds out too late](/patterns/why-management-finds-out-too-late/), which deals with how operational events fail to reach decision-makers. This article looks specifically at the monthly meeting acting as the detection point, and at how monthly aggregation hides the very signals that matter.

## Diagnosis

- **Measurement is designed for review, not detection.** Figures are compiled for the monthly pack, so nobody looks at them in between.
- **No normal range is defined.** Without an agreed expected range for returns, rework, late deliveries or response times, there is no way to say that a given day or week is abnormal.
- **Totals hide variation.** Monthly totals and averages blend good and bad weeks together, so a short, sharp problem disappears into the figure.
- **Escalation depends on judgement.** Staff close to the work may notice a problem, but whether they escalate it depends on whether they think it is big enough, and on whether there is a clear person to tell.
- **The meeting is the only forum.** With no other routine for reviewing performance, everything waits for the meeting.

Quality engineering solved a version of this problem long ago. The NIST/SEMATECH Engineering Statistics Handbook describes the control chart: plot a measure over time against a centre line and upper and lower control limits, chosen so that almost all points fall inside them while the process is behaving normally. A point outside the limits, or a non-random pattern within them, signals that something has changed. The value is that the chart is read as the data arrives, not at month-end.

## An illustrative example

The following scenario is illustrative and does not describe a specific organisation. An East London food manufacturer reviews quality, delivery and waste at a monthly operations meeting. In one month, waste is reported as slightly above target. Only when someone examines the daily figures does the team see that waste was normal for most of the month but tripled for four days after a change of packaging supplier. The supplier's film was jamming one machine. By the time of the meeting, the business had used the full order of film and run four days of elevated waste. A daily waste chart with an agreed upper limit would have flagged the problem on the first or second day.

## Commercial impact

The commercial value at stake is risk, responsiveness, margin and customer experience. The cost of an operational problem usually grows with the time it runs undetected: more defective product, more unhappy customers, more wasted material, more overtime to recover. Moving detection from monthly to daily or real time does not eliminate problems, but it limits how long each one can run.

There is also a cost to the meeting itself. When it spends its time discovering what went wrong, it has less time for improvement and planning. The broader point is made in [what management cannot see usually becomes expensive](/insights/what-management-cannot-see-usually-becomes-expensive/). The scale of the effect differs by business and should be estimated from real incidents, not assumed.

## Common misidentification

A frequent response is to hold the meeting more often. Moving to weekly meetings shortens the delay but keeps detection tied to a calendar and to people reading aggregated figures. It also consumes more management time.

Another response is to add more measures to the pack. More figures, still reviewed monthly, simply give problems more places to hide. The issue is not the volume of information in the meeting but the absence of detection outside it.

## Possibility

In a better state, a small number of operational measures are watched continuously or daily, each with a defined normal range. When a measure moves outside its range, the person responsible is told the same day, with enough context to act. The monthly meeting then reviews what happened, how quickly it was caught and what has changed, and spends its remaining time on improvement.

The AWS Well-Architected guidance on [operational excellence](https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/welcome.html) describes the aim as systems that provide insight into their status and support effective event response. That idea applies just as well to a workshop, a warehouse or a service desk as to cloud software. The meeting stops being the alarm and becomes the place where the business learns from alarms.

## Intervention

1. **Trace last month's issues.** For each problem raised at the meeting, record when it started and when it was first visible in some system or to some person.
2. **Choose a few critical measures.** Pick the handful that most affect customers, cost or safety.
3. **Define normal ranges.** Use historical daily data to set expected ranges or simple control limits for each.
4. **Measure at the rhythm of the work.** Capture these measures daily or as events occur, rather than only at month-end.
5. **Route exceptions to owners.** When a measure leaves its range, notify the named person who can act, and record the response.
6. **Change the meeting's purpose.** Use the monthly meeting to review exceptions already handled and decide on improvements.

## Diagnostic questions

- How many of the problems at your last monthly meeting were already over by the time they were discussed?
- Which of your operational measures have a defined normal range?
- Who looks at daily operational data between meetings, and what do they do when something looks wrong?
- Would your monthly figures reveal a bad week inside a good month?
- If a key measure went wrong tomorrow morning, how long would it take for the responsible person to know?

A monthly meeting is a review, not a smoke alarm. When it becomes the place where problems are discovered, the business is paying for every day between the event and the agenda. For a related view on how fragility builds unnoticed, see [why operations become fragile before they become obviously broken](/insights/why-operations-become-fragile-before-they-become-obviously-broken/).
