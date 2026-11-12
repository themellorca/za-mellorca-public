---
hub: patterns
record_id: PAT-073
slug: when-meetings-argue-about-the-figure-and-never-reach-the-decision
title: When People Debate the Number Instead of the Decision
description: Meetings that dwell on whether a figure is exactly right often postpone the choice it was meant to inform. Learn how to frame decisions, thresholds and tolerances so evidence gets used.
lead: Meetings that dwell on whether a figure is exactly right often postpone the choice it was meant to inform. Learn how to frame decisions, thresholds and tolerances so evidence gets used.
category: Data, Reporting & Management Visibility
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Data, Reporting & Management Visibility
pattern_family: Data, Reporting & Management Visibility
observable_condition: Management meetings spend most of their time disputing the exact value or calculation of a figure while the decision it was meant to inform is postponed to the next meeting.
primary_identification: Decision-framing gap: the question, the threshold that would change the choice and the accuracy required are not stated in advance, so any figure remains arguable and quality cannot be judged against use.
commercial_value_dimensions: speed, capacity, growth, risk
sources:
  - The Government Data Quality Framework | https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework
  - Tips for Designing a Great Power BI Dashboard - Power BI | https://learn.microsoft.com/en-us/power-bi/create-reports/service-dashboards-design-tips
  - What Is Data Quality? - IBM | https://www.ibm.com/think/topics/data-quality
  - What is Data Governance? - IBM | https://www.ibm.com/think/topics/data-governance
related:
  - When Your Metrics Arrive After the Decision Was Needed | /patterns/when-the-number-arrives-after-the-decision-is-made/
  - The Pattern Behind Conflicting Management Reports | /patterns/why-two-correct-management-reports-still-contradict-each-other/
  - Why Real-Time Operations Still Depend on Friday Reports | /patterns/why-live-data-still-gets-managed-from-a-weekly-report/
summary: Meetings that dwell on whether a figure is exactly right often postpone the choice it was meant to inform. Learn how to frame decisions, thresholds and tolerances so evidence gets used.
layout: plain
---
## Observable condition

The agenda item is whether to hire a second dispatcher. The meeting is forty minutes long. Thirty of them are spent on whether the average number of jobs per week is 112 or 121, which period it should cover, whether weekends count and who last updated the spreadsheet. The decision itself, whether the current volume justifies another salary and what would be lost by waiting, receives the last ten minutes, and is deferred to the next meeting "once we have the right figures".

Nobody in the room is being obstructive. Each person is protecting something reasonable: accuracy, their own department's reputation, or their reluctance to commit on shaky evidence. But a pattern has formed in which the figure becomes the subject of the meeting, and the choice it was meant to serve becomes the thing that gets postponed.

An illustrative example: a Pietermaritzburg firm of fifty people that supplies and installs security systems. The directors review technician utilisation monthly. Each review turns into a dispute about how utilisation is calculated, whether travel time counts, and whether leave is excluded. Three months running, the same question (should we take on a second installation team?) is raised and not answered.

## Realisation

The realisation is that numerical precision is a poor proxy for decision readiness. For most management choices, the decision does not change between 112 and 121; it changes between, say, 80 and 140. Debate over the second decimal place is comfortable, because it is a technical argument with a possible answer. The decision is uncomfortable, because it involves risk, money and accountability.

A figure can also serve as a place to hide. If the data is disputed, nobody has to commit. This is not usually conscious, but it is common, and it explains why a business may spend months improving its reports without making any faster or better decisions.

It also means that fixing the numbers alone will not fix the meeting. A perfect number delivered into a meeting with no agreed decision rule will provoke a different argument, about what it means.

## Identification

This is a **decision-framing gap** expressed through a data dispute. The business has not stated, before the meeting, what decision is being made, what evidence would settle it and how good that evidence needs to be. It is different from [nobody owning the definition of a metric](/patterns/when-nobody-owns-the-definition-of-a-business-metric/), which concerns who decides what a term means. It is also different from [decision-makers asking repeatedly for status](/patterns/why-decision-makers-keep-asking-for-status-updates/), which concerns information flow. Here the data may be adequate, and the missing element is the agreement about how it will be used.

The visible symptom is a debate about the number. The common assumption is that the data quality is not good enough yet. The structural cause is that the question being asked of the data has not been written down, so there is no standard against which "good enough" can be judged.

## Diagnosis

- **No stated decision.** The agenda item is a topic ("utilisation") instead of a question ("add a second team: yes or no, by when?"). Without a question, any figure is arguable.
- **No threshold.** Nobody has said what result would lead to which choice. If 70% utilisation means "hire" and 85% means "wait", the argument over 78% versus 81% dissolves. If no threshold exists, every number invites reinterpretation.
- **Quality is judged in the abstract.** The UK Government Data Quality Framework starts from a simple premise: data quality means asking whether a dataset is good enough for its intended use, and the level required depends on that use. It states that perfect quality is rarely achievable and that trade-offs, such as between timeliness and accuracy, should be prioritised according to what matters to users and communicated openly. A meeting that has not named the intended use has no way to apply that test.
- **Presentation that invites the wrong argument.** Microsoft's dashboard design guidance advises asking what key metrics help the audience make decisions and which information they need to be successful, and warns that cluttered displays hide the important item. A pack that offers forty figures with equal weight directs attention to whichever one someone dislikes.
- **Different people hold different risks.** The sales director wants the figure to support growth; the finance manager wants it to support caution. Without a shared decision rule, the figure becomes a proxy for a disagreement about risk appetite.
- **Trust has already been damaged.** Where earlier reports contradicted each other (see [why one number requires three people and four systems](/patterns/why-one-number-requires-three-people-and-four-systems/)), scepticism is a reasonable response, and the debate is partly a reflection of experience.

## Commercial impact

The commercial value at stake is speed, capacity, growth and risk.

Speed is lost when decisions are deferred while numbers are refined beyond the point of usefulness. Capacity is lost when senior people spend their meeting time on arithmetic. Growth opportunities, such as hiring ahead of demand, taking on a contract or investing in equipment, pass while the business waits for certainty that it cannot have. Risk can go either way: a firm may commit on thin evidence because the meeting ran out of time, or fail to act when evidence was already sufficient. The more general cost of meetings that fail to decide is described in [meetings without decisions](/impact/meetings-without-decisions-payroll-cost/), and the effect on trust in [untrusted business numbers](/impact/untrusted-business-numbers-unreliable-decision-cost/).

## Common misidentification

The typical response is to commission a data-cleaning project. That is occasionally right, but when the quality of the data is not what is blocking the decision, it spends months and budget without improving the meetings. The cleaned-up figure arrives and the disagreement moves elsewhere.

A second misidentification is to treat the behaviour as a personality problem: a manager who "always challenges the numbers". Often that person is the only one who is taking evidence seriously, and the system does not give them a way to say what level of evidence would satisfy them.

A third is to tighten the dashboard, as if a better display would end the argument. Design helps, but it cannot supply the decision rule.

## Possibility

In a better arrangement, each recurring decision has a short written frame: the question, the options, the figure or figures that bear on it, the accepted range of uncertainty and the thresholds that lead to each option. The meeting opens with the frame, not with the data. If the figure falls clearly on one side of a threshold, the decision is taken. If it falls close to the line, the group decides explicitly whether to act now, to wait for a named piece of additional evidence or to run a small test.

For the security-systems firm, a frame might say that a second installation team is justified if booked utilisation exceeds an agreed level for three consecutive months and the order book covers the next quarter. The detailed definition of utilisation then sits in a note beside the figure and is settled once.

## Intervention

1. **Rewrite the agenda as questions.** Replace topics with decisions, each with an owner and a date.
2. **Set thresholds before looking at results.** Agree what number would lead to which action, in a calm moment rather than in the middle of a dispute.
3. **State the tolerance.** Write down how precise the figure needs to be for this choice. Many decisions tolerate a range of ten per cent or more; some do not.
4. **Park definitions in a note.** Where a definition is genuinely contested, move it to a short side process with one owner, and do not hold the decision hostage to it.
5. **Reduce the pack.** Show only the figures that bear on the decision, with the most important in a prominent place and consistent scales and periods throughout.
6. **Record what was decided and why.** Review it later against what happened. This builds a history of how good the evidence needed to be.

## Diagnostic questions

- Can each agenda item be written as a question with options?
- Did anyone state, before the figures were shown, what result would change the decision?
- How many meetings in the last quarter ended with "let's get the right numbers" and no date?
- Which decisions have been postponed more than once for data reasons?
- Would the decision have been different if the figure had been ten per cent higher or lower?

## Bottom line

An argument about a number is often an argument about a decision that nobody has framed. Writing down the question, the thresholds and the accuracy required allows the business to use imperfect evidence well, and shows where better data would genuinely change the outcome.
