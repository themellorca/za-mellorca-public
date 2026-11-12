---
hub: moments
record_id: STORY-ANGLE-000380
slug: when-nobody-can-say-which-number-is-true
title: When Nobody Can Say Which Number Is True
description: Two reports, two different figures, and a room full of people who each have a reason to believe their own. What disagreement over numbers quietly takes from the people who present them.
lead: Two reports, two different figures, and a room full of people who each have a reason to believe their own. What disagreement over numbers quietly takes from the people who present them.
category: Trust, Fairness & Clarity
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Trust, Fairness & Clarity
thematic_domain: trust_fairness_and_clarity
human_situation: A manager presents a figure in a meeting, a colleague presents a different figure for the same measure from another system, and the meeting turns into a dispute about whose number is right.
human_dividend: Predictability: figures with agreed definitions, a named source system and visible lineage, which lets the people presenting them speak with confidence and be believed without repeated reconciliation.
trade_off: Agreed definitions reduce presentational discretion; named owners take on unrecognised work and accountability; forcing one figure can hide genuine differences in perspective; definitions decay unless reviewed.
epistemic_state: HYPOTHESISED for the human experience of presenting contested figures; OBSERVED for the cited data-quality principles from IBM and the UK Government Data Quality Framework.
sources:
  - What Is Data Quality? - IBM | https://www.ibm.com/think/topics/data-quality
  - The Government Data Quality Framework | https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework
related:
  - Ten Open Tabs and Five Logins: What the Morning Sign-In Takes | /moments/ten-open-tabs-and-five-logins/
  - The Meeting That Could Have Been a Shared Record | /moments/the-meeting-that-could-have-been-a-shared-record/
  - When Screens Sit Between Colleagues Who Sit Together | /moments/when-screens-sit-between-colleagues-who-sit-together/
summary: Two reports, two different figures, and a room full of people who each have a reason to believe their own. What disagreement over numbers quietly takes from the people who present them.
layout: plain
---
Most people who have worked in a growing business will recognise the moment.

A figure is presented in a meeting. Somebody else has a different figure for the same thing. Both came from systems the business pays for. Both were prepared carefully. And for a few uncomfortable minutes the discussion is no longer about what to do. It is about whose number is right.

The technical reasons for this are well understood, and Mellorca has written about them directly: [why reports cannot agree on the same number](/insights/why-your-reports-cannot-agree-on-the-same-number/), and what happens [when nobody owns the definition of a metric](/patterns/when-nobody-owns-the-definition-of-a-business-metric/). This piece looks at the same situation from a different angle. Not the data, but the people standing next to it.

## What the person presenting is carrying

When a number is challenged in a meeting, someone has to answer for it. Often that is the person who compiled it, not the person who designed the systems it came from.

It would overstate the evidence to claim we know how people experience this. Some shrug it off; some find it genuinely stressful; some have learned to over-prepare as a defence. What can be said with more confidence is that the situation creates a predictable kind of work and a predictable kind of exposure.

- **The work** is reconciliation: checking extracts, re-running filters, comparing two spreadsheets line by line, often after the meeting has already happened.
- **The exposure** is to doubt. Once a figure has been visibly contradicted, the next figure from the same person may be received with more caution, regardless of whether the first was actually wrong.

The human tax in this record is **confidence**. Not confidence as a personality trait, but the practical ability to stand behind a number without hedging, and the ability of others to accept it without a second check.

## Why this is a systems problem, not a competence problem

The published frameworks on data quality are useful here because they shift the frame away from individuals.

IBM's overview of data quality lists the dimensions organisations typically assess, including accuracy, completeness, validity, timeliness, uniqueness and consistency, and describes consistency as alignment across multiple data sources. Its argument is direct: where sources are not consistent, teams cannot trust the insights drawn from them. The UK Government Data Quality Framework makes a similar point in public-sector language. It describes data quality as *fitness for purpose* and states that poor or unknown quality data weakens evidence and undermines trust.

Note the word *unknown*. A figure does not have to be wrong to undermine trust. It only has to be untraceable. If nobody can explain which system it came from, which definition of "active customer" or "revenue" was applied, and when it was extracted, then even a correct number is fragile.

The UK framework also recommends documenting and sharing metadata to reduce ambiguity, and being open about known quality issues. In ordinary business terms, that means the definition and origin of a figure should travel with it.

When that does not happen, the burden of explanation falls on whoever is holding the report. That is the mechanism this story is about: **missing definitions and lineage in the system become personal accountability for the individual**.

## An illustrative boardroom

Take an illustrative example: a Cape Town wholesale distributor with around sixty staff, using an accounting package, a separate sales platform and a stock system that were introduced at different times.

- The sales manager reports monthly revenue from the sales platform, based on orders confirmed.
- The financial manager reports revenue from the accounting system, based on invoices issued, net of credit notes.
- Neither is wrong. They are measuring different things under the same name.

In this scenario, the monthly management meeting regularly begins with a ten-minute discussion about which figure to use. Over time, the two managers each start preparing extra reconciliations in advance, just in case. The owner, unsure which number to plan against, quietly builds a third version.

No one in this example is careless. The business has simply never decided which system is the authority for which figure, and has never written down what each figure means. Mellorca has discussed the mechanics of that decision in [choosing a system of record](/insights/how-to-decide-what-should-be-the-system-of-record/).

## What could realistically change

The interventions are mostly organisational, supported by modest technical work.

1. **Name the figures that matter.** A short list of the ten or so numbers that drive decisions is more useful than an exhaustive data dictionary nobody reads.
2. **Define each one once.** Write down what is included and excluded, in plain language, and agree it with the people who use it.
3. **Assign an authority.** For each figure, decide which system is the source and who owns the definition.
4. **Make lineage visible.** Reports should state where a number came from and when, so that a challenge can be answered by looking rather than by defending.
5. **Treat disagreement as a signal.** When two figures differ, record why, and fix the cause rather than repeating the reconciliation each month.

Integration and reporting tools can help, especially where the same data is entered in several places. But the decisive step is agreeing definitions and ownership. Software cannot resolve a disagreement about what a word means.

## The first consequence, and the business outcome

The immediate change is that a challenge to a figure can be resolved quickly. Instead of "I'll check and come back to you", the answer becomes "this is invoiced revenue from the accounting system, extracted on Monday; the sales figure counts confirmed orders". The meeting moves on.

The business outcome is time and decision quality. Management discussion shifts from arguing about inputs to deciding about actions. Reconciliation effort falls. Decisions are less likely to be delayed while someone verifies a number that was already right.

## The human dividend

The dividend in this story is **predictability**: the reasonable expectation that a number will mean the same thing next month as this month, and that its origin can be shown.

From that predictability, something else plausibly returns to the people who present figures: the ability to speak about them with confidence, and to have that confidence accepted. It is a small thing to describe and a significant thing to lose. People who spend their meetings defending inputs have less room to contribute judgement, and judgement is usually why they were hired.

## The trade-offs

- **Agreed definitions remove some discretion.** A manager who could previously present a figure in the most favourable framing may lose that flexibility. That is partly the point, but it is a real change.
- **Ownership creates accountability.** The person named as owner of a definition takes on work and visibility that may not be welcome or recognised.
- **Not every disagreement is a data problem.** Sometimes two numbers differ because two parts of the business genuinely see the world differently. Forcing a single figure can hide a useful conversation.
- **Documentation decays.** Definitions agreed once and never reviewed become another source of confusion when systems change.

## Why it matters

A business runs on shared facts. When the facts are disputed, the cost is not only analytical. It is carried by individuals, in preparation time, in caution, and in the quiet reluctance to put a number forward at all.

Mellorca's interpretation is that this is one of the clearest cases where a systems decision has a human consequence. Deciding which number is true, and making that decision visible, is technical housekeeping. What it gives back is the ability of people to trust their own work, and to be trusted for it.
