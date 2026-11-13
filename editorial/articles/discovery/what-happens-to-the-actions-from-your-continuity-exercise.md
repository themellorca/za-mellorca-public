---
hub: discovery
record_id: DISC-389
slug: what-happens-to-the-actions-from-your-continuity-exercise
title: Continuity exercises generate actions that are never closed
description: Exercises find real weaknesses, and then the action list sits in a folder. How to turn continuity exercise findings into owned, dated, verified fixes before the next incident.
lead: Exercises find real weaknesses, and then the action list sits in a folder. How to turn continuity exercise findings into owned, dated, verified fixes before the next incident.
category: Business Continuity & Resilience
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Business Continuity & Resilience
problem_domain: Business Continuity & Resilience
problem_owner: Risk, continuity or operations manager who runs the exercises and tracks follow-up
budget_owner: Operations director, chief risk officer or managing director
sources:
  - SP 800-34 Rev. 1, Contingency Planning Guide for Federal Information Systems - CSRC | https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final
  - REL12-BP04 Test resiliency using chaos engineering - Reliability Pillar | https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_testing_resiliency_failure_injection_resiliency.html
  - Architecture strategies for disaster recovery - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery
related:
  - Recovery plans list systems but not the business services they support | /discovery/why-recovery-plans-should-be-organised-around-business-services-not-servers/
  - Failover is tested quietly and fails when real load arrives | /discovery/failover-is-tested-quietly-and-fails-when-real-load-arrives/
  - Business and IT use different definitions of criticality | /discovery/business-and-it-use-different-definitions-of-criticality/
summary: Exercises find real weaknesses, and then the action list sits in a folder. How to turn continuity exercise findings into owned, dated, verified fixes before the next incident.
layout: plain
---
A manufacturer holds a half-day continuity exercise each year. The scenario this time is a prolonged loss of the main site's network. The exercise goes reasonably well, and the facilitator's report lists fourteen actions: update the call tree, document the manual order process, arrange a mobile data fallback, agree an alternative for the label printers, and so on. The report is filed and the team goes back to work. Twelve months later the next exercise, with a different scenario, produces fifteen actions. Eleven of them are almost identical to last year's.

The exercise did its job. The follow-up did not happen. This article is about that second half.

## The problem in plain language

An exercise is a cheap way to find weaknesses before a real incident finds them. The finding has value only if somebody then fixes the weakness. In many businesses the exercise ends with a report, the report goes to a folder, and the action list has no owner, no date and no review. The exercise is counted as done. The weaknesses remain.

This is awkward because the business now knows about the problems. If a real incident exposes a weakness that was written down eight months earlier, the question from the board, a customer or an insurer is no longer "why were you unprepared?" but "why did you not act on what you knew?"

## What the buyer is actually trying to solve

The reader looking for an answer has usually just finished an exercise, or is about to put a new critical service into production, and wants the work to count. They are trying to avoid two outcomes: repeating the same list next year, and being unable to show anyone that last year's exercise led to anything. They want a way to track findings that is light enough to be used, firm enough to be believed and visible enough that people feel accountable for it.

## Evidence and system mechanism

### Learning is part of the plan, not an extra

Microsoft's [disaster recovery guidance](https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery) describes recovery plans in which named owners are responsible for actions such as declaring a disaster, performing testing and validation, managing communication, and leading retrospectives or root-cause analysis. Retrospectives appear there as an assigned task with an owner, not as an optional extra. The logical next step is that the retrospective's output also needs an owner and a record of what was done.

NIST's [contingency planning guide](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final) likewise treats testing, training and exercises as part of the planning cycle, together with maintaining the plan so that it reflects what has been learned. A plan that is not changed after an exercise has not absorbed what the exercise taught.

### Past incidents should shape what you test

AWS's reliability guidance on [testing resiliency with fault injection](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_testing_resiliency_failure_injection_resiliency.html) lists common anti-patterns that include neglecting to use past post-incident analyses when deciding which faults to test, and not treating experiments as maintained work. Those cautions are written for engineering teams, but they describe a general discipline: findings from earlier events feed the design of the next exercise, and the exercise is part of a cycle rather than a calendar event. An exercise that does not check whether last time's fixes worked cannot show improvement.

### Why actions stall

- **No single owner.** The action reads "review the call tree" and is assigned to "operations". Everyone assumes someone else is doing it.
- **No date.** An action without a due date competes with work that has one, and loses.
- **No budget path.** The fix needs money, such as a second internet line, and nobody has authority to commit it, so the action sits in limbo.
- **Vague wording.** "Improve communication" cannot be completed or verified.
- **No check.** An action is marked done because someone said so, not because anyone tested the result.
- **Different owners for the exercise and the fix.** The continuity lead runs the exercise but has no authority over the departments that must act.

## Why it persists

An exercise feels like an event, and events have an end. People are tired afterwards, and the findings arrive at the same time as the normal workload. The action list usually has no place in the regular management rhythm, so nobody meets about it. Findings may also be uncomfortable: they point at departments, vendors or budget decisions, and it is easier to leave them unspoken. Where findings relate to an outside party, the link to contracts and obligations should be checked, as covered in [critical suppliers chosen without a dependency check](/impact/critical-suppliers-chosen-without-dependency-check-vendor-failure-cost/).

## What good looks like

A business that closes its actions has a simple, standing routine. Every finding is written as a specific, testable action. Each action has one named owner, a due date and a status. A short list of open actions goes to the management meeting that already exists, monthly or quarterly. Actions that need money have a decision recorded: funded, deferred with a date, or risk accepted by a named person. Closure requires evidence, such as a revised procedure, a test result or a signed-off decision. At the start of the next exercise the previous list is reviewed first, and the first question is whether the fixes worked.

| Action | Owner | Due | Status | Closure evidence |
| --- | --- | --- | --- | --- |
| Add mobile data fallback for dispatch | IT manager | Named date | Open, funded or deferred | Fallback tested at the next exercise |
| Document manual order capture | Sales operations manager | Named date | Open or done | Procedure used by someone who did not write it |
| Update call tree contacts | Continuity lead | Named date | Open or done | Every number called successfully |

## Risks and trade-offs

Tracking everything creates its own burden. Fourteen equally weighted actions invite paralysis, so sort them by consequence and by effort, fix the cheap ones quickly, and take the expensive ones to a decision-maker. Some actions will be rejected as too costly; that is acceptable if the risk is explicitly accepted and recorded. What the business cannot afford is for actions to disappear without a decision.

Closing actions also depends on exercises being realistic in the first place. The problems found by a timed, well-observed test, such as the one described in [not knowing recovery time after a major outage](/impact/not-knowing-recovery-time-after-major-outage-unplanned-downtime-cost/), are easier to close because they are specific. The comfort from a single exercise should not replace the wider picture, as set out in [why backups do not equal business resilience](/patterns/why-backups-do-not-equal-business-resilience/).

## Practical next actions

1. Collect the action lists from your last two exercises into one sheet and mark each as done with evidence, done without evidence, open or dropped without a decision.
2. Rewrite every open action so it is specific and testable, with one named owner and a due date. Split any that need more than one owner into separate actions.
3. Take the actions that need money or authority to the executive who controls the budget, and record a decision on each: fund, defer to a named date, or accept the risk.
4. Put the open list on the agenda of an existing management meeting, with five minutes at each meeting to report changes in status.
5. Begin the next exercise by reviewing the previous list, and include at least one scenario step that tests whether a past fix works.

## When it is worth getting help

If the exercise facilitator and the people who must fix things are the same overworked team, an outside party can run the review, help rewrite actions and report to management on progress. The measure of success is modest and clear: next year's list should contain new problems, not the old ones again.
