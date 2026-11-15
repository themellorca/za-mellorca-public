---
hub: patterns
record_id: PAT-211
slug: why-procedure-knowledge-disappears-when-someone-leaves
title: Why Procedure Knowledge Disappears When Someone Leaves
description: When a long-serving employee resigns, the business discovers how much of its routine lived only in their head: which steps to follow, in what order and which exceptions to watch for. Here is why that happens and how to keep it.
lead: When a long-serving employee resigns, the business discovers how much of its routine lived only in their head: which steps to follow, in what order and which exceptions to watch for. Here is why that happens and how to keep it.
category: Knowledge, Documents & Information Retrieval
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Knowledge, Documents & Information Retrieval
pattern_family: Knowledge, Documents & Information Retrieval
observable_condition: When an experienced employee resigns, colleagues rush to sit with them during the notice period to write down how month-end, supplier payments, stock counts or customer setups are actually done, and some steps are still missed.
primary_identification: Tacit procedure: the real procedure exists only as practice in one person's routine, so documentation is either missing or describes an older, idealised version of the work.
commercial_value_dimensions: Continuity of operations, error rates after departures, onboarding time for replacements and key-person risk
sources:
  - https://learn.microsoft.com/en-us/power-automate/task-mining-overview | https://learn.microsoft.com/en-us/power-automate/task-mining-overview
  - https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview | https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview
summary: When a long-serving employee resigns, the business discovers how much of its routine lived only in their head: which steps to follow, in what order and which exceptions to watch for. Here is why that happens and how to keep it.
layout: plain
---
## Observable condition

The creditors clerk at a Kimberley building supplies merchant resigns after eleven years. She gives a month's notice. Her manager asks her to "write everything down" and books a junior colleague to sit with her for a few afternoons.

She writes a few pages. They cover the main steps: capturing supplier invoices, matching them to goods received and preparing the payment run. What they do not cover is everything she does without thinking: which supplier always invoices in the wrong branch name, which statements need checking line by line, why one payment is split across two runs and which manager must sign off anything over a certain amount on a Thursday.

Two months after she leaves, a supplier is paid twice, another threatens to stop deliveries and month end takes three extra days. Each problem traces back to something she knew.

## Realisation

The realisation is that the procedure was never really written down; it was performed. The documentation, where it existed, described how the work was supposed to be done years ago. The real procedure, with its exceptions and workarounds, lived in her habits.

A notice period is the worst time to capture that knowledge. The person is leaving, the colleague is busy and the most important details are the ones the expert no longer notices.

**Realisation prompt:** name three people whose resignation would cause the most disruption. For each, ask what they do that nobody else could do next week.

## Identification

This is a pattern of tacit procedure. The visible symptom is disruption and errors after an experienced person leaves. The common assumption is that the person did not document their work properly. The structural cause is that procedure is held as personal practice rather than built into the way work flows, and nothing captures how the work is actually done.

It is the departure moment of [the business process that only works because someone remembers](/patterns/the-business-process-that-only-works-because-someone-remembers/). That pattern describes the dependency; this one describes what happens when the dependency is suddenly removed.

## Diagnosis

- **Documentation describes the ideal, not the actual.** Written procedures, where they exist, have drifted from real practice.
- **Exceptions live in memory.** The rules for handling unusual cases are known, not recorded.
- **The system does not guide the work.** Staff must know the sequence of steps; the system lets them do things in any order.
- **Nobody else does the work regularly.** There is no backup who performs the procedure often enough to know it.
- **Capture starts too late.** Knowledge is collected only when someone resigns.

## Commercial impact

The commercial value at stake is continuity, error rates, replacement onboarding time and key-person risk.

Continuity is disrupted. Work slows as colleagues and replacements piece together how things were done. Deadlines such as month end and payment runs slip.

Errors rise. Missed exceptions lead to duplicate payments, incorrect stock adjustments or unhappy customers. Each error costs money to fix and some cannot be recovered.

Replacements take longer to become productive, because they learn by trial and error rather than from a reliable guide. Colleagues lose time answering the same questions, as described in [the cost of the same internal questions and undocumented knowledge](/impact/same-internal-questions-undocumented-knowledge-cost/).

The human side matters too. [When parental leave means handing over an undocumented job](/moments/when-parental-leave-means-handing-over-an-undocumented-job/) shows that the same gap makes planned absence stressful, not just resignations.

## Common misidentification

One misreading is to ask everyone to write a procedure manual. Large manuals take months, go out of date quickly and still miss what experts no longer notice.

Another is to make departing staff work longer notice periods. More time with the same method captures more pages, not more of the right detail.

A third is to rely on the replacement to work it out. That turns every resignation into a period of avoidable errors.

## Possibility

The possibility is that procedure knowledge is captured from the work as it happens, and then built into the system so that the next person is guided through it. Steps, sequence and checks become part of the workflow rather than part of someone's memory.

There are practical ways to capture real practice. Microsoft describes [task mining](https://learn.microsoft.com/en-us/power-automate/task-mining-overview) as capturing the detailed steps users perform on their desktops, so organisations can see how tasks are actually done and spot common mistakes. Once the steps are known, [business process flows](https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview) can guide users through the same stages every time, so that the sequence is held by the system rather than by a person.

Captured procedures also help people grow into roles, as explored in [why documented processes help people grow into roles](/moments/why-documented-processes-help-people-grow-into-roles/).

## Intervention

Start now, not at the next resignation. Identify the procedures with the highest key-person risk: usually finance runs, payroll, stock control and customer setup.

For each, have a second person perform the procedure while the expert watches and corrects, and record what is corrected. Capture the exceptions as a checklist and add the most important checks to the system itself, for example as required fields or approval steps.

Rotate the backup person through the procedure at least once a quarter, so the knowledge stays current in more than one head and in the system.

## Practical next actions

1. List the ten procedures whose owner's absence would cause the most disruption.
2. Assign a backup person for each and have them perform it while the owner observes.
3. Record every correction the owner makes as an exception or check.
4. Build the most important checks and sequence into the system as guided steps.
5. Rotate backups through each procedure at least quarterly.
6. Review procedure notes whenever the underlying system or supplier arrangements change.

## Diagnostic questions

- Whose resignation would most disrupt our month end, payroll or customer service?
- When did a backup person last perform each critical procedure without help?
- Do our written procedures match how the work is done today?
- Which exceptions are handled correctly only because one person remembers them?

## Bottom line

Procedure knowledge disappears when someone leaves because it was only ever held as personal practice. Capture procedures from the work itself, give every critical routine a practised backup and build the key steps into your systems. A resignation then becomes a handover rather than a crisis.
