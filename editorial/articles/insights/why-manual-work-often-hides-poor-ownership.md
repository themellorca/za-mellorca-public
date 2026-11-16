---
hub: insights
record_id: INS-139
slug: why-manual-work-often-hides-poor-ownership
title: Why Manual Work Often Hides Poor Ownership
description: Persistent manual work is often a symptom of nobody having the authority to fix the process behind it. Clarifying who owns the outcome is frequently the first step to removing the effort.
lead: Persistent manual work is often a symptom of nobody having the authority to fix the process behind it. Clarifying who owns the outcome is frequently the first step to removing the effort.
category: Process Design
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Process Design
sources:
  - https://sre.google/sre-book/eliminating-toil/ | https://sre.google/sre-book/eliminating-toil/
  - https://www.gov.uk/service-manual/the-team/what-each-role-does-in-service-team | https://www.gov.uk/service-manual/the-team/what-each-role-does-in-service-team
  - https://www.atlassian.com/team-playbook/plays/daci | https://www.atlassian.com/team-playbook/plays/daci
summary: Persistent manual work is often a symptom of nobody having the authority to fix the process behind it. Clarifying who owns the outcome is frequently the first step to removing the effort.
layout: plain
---
Every Friday afternoon, a finance clerk at an East Rand manufacturing business spends three hours reconciling the sales team's CRM with the accounting system. Customer names differ, some deals marked "won" were never invoiced, and some invoices have no matching deal. She has done this every week for four years. Everyone knows it is wasteful. The sales manager says the problem is in finance's system. The financial manager says sales capture deals badly. The IT contractor says he can build an integration, if someone tells him which system's data is correct. Nobody has.

The reconciliation is not really a technology problem. It is an ownership problem disguised as manual work. Until someone has the authority to decide how customer and deal data should flow, the clerk will keep absorbing the gap every Friday.

## Manual work fills the space ownership leaves

Most recurring manual work in a growing business falls into a few types: re-keying data between systems, reconciling records that disagree, chasing people for information, checking work that should have been right first time, and patching exceptions by hand. Google's site reliability engineering book, in its chapter on [eliminating toil](https://sre.google/sre-book/eliminating-toil/), describes such work as manual, repetitive, automatable, tactical and without enduring value. It adds that toil tends to expand if left unchecked.

The question worth asking is why the toil persists. Often the fix is technically straightforward. What is missing is a person with the authority, and the responsibility, to make a decision that crosses team boundaries: which system is the master, which team captures which field, which rule governs the exception. Without that person, each team adapts locally, and somebody near the gap does the manual work to hold it together.

## Signs that manual work is an ownership problem

- **It sits between teams.** The work exists at a handoff or between two systems owned by different departments.
- **Everyone agrees it is wasteful, and nothing changes.** The issue has been raised many times without a decision.
- **Each team blames the other's system or behaviour.**
- **The person doing the work cannot change its cause.** The clerk can reconcile, but cannot change how sales capture deals.
- **Fixes have been proposed but stalled** waiting for agreement.

Our article on [why repeated workarounds are a warning sign](/insights/why-repeated-workarounds-are-a-warning-sign/) explores the first signals in more detail.

## Three kinds of ownership that are often missing

**Process ownership.** Someone responsible for how an end-to-end process performs, from customer enquiry to cash collected, not just their department's part. The UK government's description of [roles in a service team](https://www.gov.uk/service-manual/the-team/what-each-role-does-in-service-team) gives a useful model: a service owner who has the decision-making authority to deliver on all aspects of a service and overall responsibility for developing, operating and continually improving it. Smaller businesses rarely need a dedicated role, but they do need someone holding that responsibility for each core process.

**Data ownership.** Someone who decides what a key piece of data means, where its master copy lives and who may change it. Without it, two systems both believe they are right, and somebody reconciles them by hand.

**System ownership.** Someone accountable for how a system is configured and changed, who can say yes or no to a new field or integration. Our article on [why software ownership needs to be explicit](/insights/why-software-ownership-needs-to-be-explicit/) describes the consequences when this is missing.

## Make decisions with one decider

Cross-team problems stall because everyone has a voice and nobody has the final say. Atlassian's [DACI decision framework](https://www.atlassian.com/team-playbook/plays/daci) addresses this by naming a Driver who gathers information and moves the decision to a date, a single Approver who makes the decision, Contributors who provide input, and people who are Informed. Its insistence on exactly one approver is the important part. For the manufacturer, a DACI on "which system is the master for customer and deal data?" would name the financial manager as driver, the managing director as approver, sales and IT as contributors, and the finance clerk as an essential informant, since she knows every mismatch.

## Give the person doing the work a voice

The people who do recurring manual work understand its causes better than anyone, but they are often the least able to change them. A simple route for raising recurring manual work to the relevant owner, with the hours it consumes attached, turns invisible effort into a visible cost. Our article on [the difference between necessary human work and avoidable manual work](/insights/the-difference-between-necessary-human-work-and-avoidable-manual-work/) helps separate what should stay manual from what should not.

## Assign, then fix

When you find manual work that hides an ownership gap, resist going straight to a technical fix. First, name the owner of the process, data or system concerned. Second, have that owner make the decision that has been stalling. Third, fix the cause, whether through a rule, a configuration change, an integration or a changed responsibility. Finally, have the owner confirm that the manual work has actually stopped, rather than just moved somewhere else. Our guide on [making ownership clear at every stage](/insights/how-to-make-ownership-clear-at-every-stage/) covers how to keep ownership visible once it is assigned.

## Keep ownership from fading

Ownership assigned in a meeting can quietly lapse when people change roles or priorities shift. Record each owner in a simple register alongside the process, data set or system they own, and review it whenever someone joins, leaves or moves. Ask owners to report briefly each quarter on the manual work in their area: how many hours it consumes, what has been removed, and what is still waiting on a decision. When an owner leaves, reassign the role before their last day rather than after the first problem appears. Manual work tends to return wherever ownership becomes vague again.

In the manufacturer's case, the decision took one meeting: accounting would be the master for customer records, the CRM would draw customers from it, and a deal could only be marked won once an order number existed. The integration took two weeks. The Friday reconciliation ended.

## Practical next actions

1. List the recurring manual tasks that sit between teams or systems, with the hours each takes per month.
2. For each, ask who has the authority to remove its cause, and note where the answer is unclear or disputed.
3. Name an owner for each affected process, data set or system, with authority to make cross-team decisions.
4. Use a single-approver decision method to settle the longest-stalled question.
5. Fix the cause, then confirm with the person who did the manual work that it has genuinely stopped.
