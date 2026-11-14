---
hub: patterns
record_id: PAT-308
slug: when-routine-decisions-all-wait-for-one-manager
title: When a Manager Becomes the Bottleneck for Routine Decisions
description: Small, familiar decisions pile up on one desk and the whole team waits. Here is why it happens, what it costs, and how to set decision limits that free everyone.
lead: Small, familiar decisions pile up on one desk and the whole team waits. Here is why it happens, what it costs, and how to set decision limits that free everyone.
category: People, HR & Workforce Operations
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: People, HR & Workforce Operations
pattern_family: People, HR & Workforce Operations
observable_condition: Staff wait for one manager to approve small, repeated requests, and work stalls whenever that manager is away or busy.
primary_identification: Concentrated decision rights: limits of authority are unwritten and context sits with one person, so every question is safely sent upward.
commercial_value_dimensions: Speed of routine work, manager time, staff initiative and operational resilience
sources:
  - https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/delegate-app-roles | https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/delegate-app-roles
  - https://learn.microsoft.com/en-us/power-automate/get-started-approvals | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
  - https://learn.microsoft.com/en-us/power-automate/modern-approvals | https://learn.microsoft.com/en-us/power-automate/modern-approvals
summary: Small, familiar decisions pile up on one desk and the whole team waits. Here is why it happens, what it costs, and how to set decision limits that free everyone.
layout: plain
---
## Observable condition

A supervisor wants to replace a damaged pallet jack for R3,800. She cannot buy it herself, so she messages the operations manager. He is at a supplier's site until Thursday. By Wednesday, three people are carrying loads by hand, a fourth is waiting for permission to book a courier, and the manager has fifty-one unread messages, most of which ask for a decision he has made many times before.

Nothing about these decisions is hard. They are small, familiar and low in risk. Yet they all pass through one person, and when his diary fills, the whole operation waits. His team have learnt not to decide anything alone, and he has learnt to answer quickly at the cost of his own work.

An illustrative example: a Midrand logistics company of forty staff in which every purchase above R500, every overtime request and every customer concession goes to the operations manager. He works long hours and feels indispensable. His team feel constrained and a little invisible.

## Realisation

The realisation is that the manager is rarely the cause on his own. A bottleneck is made of two things: a person who holds the authority, and a system that sends everything to them. Removing the first without changing the second produces a different bottleneck. Both sides contribute: staff pass up decisions they could make, and the manager keeps decisions he could pass down.

It is also worth noticing that decisions of different kinds have been treated alike. A rare, expensive, hard-to-reverse choice deserves a senior view. A frequent, cheap, easily corrected one does not. When both go to the same desk, the senior person's time is spent on the wrong ones. [Microsoft's documentation on delegating administrative permissions in Entra](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/delegate-app-roles) describes assigning scoped roles to the people who need them, rather than routing everything through a single top-level account. The same principle works for decisions: authority limited to a clear scope, held by the person closest to the work.

**Realisation prompt:** list the last ten decisions that reached your manager. How many would the same answer have been given every time?

## Identification

This is a pattern of concentrated decision rights. The visible symptom is a queue of waiting requests and a manager who is always busy. The common assumption is that the manager is a poor delegator or that staff lack confidence. The structural cause is that nobody has defined which decisions staff may make, within what limits, so every question is safely sent upward.

It sits near the problem described in [when waiting for approval costs more than the approval protects](/patterns/when-waiting-for-approval-costs-more-than-the-approval-protects/), which weighs cost against protection. This pattern focuses on who is placed to make routine calls and why they are not.

## Diagnosis

- **Limits are unwritten.** Staff do not know whether they may spend R500 or R5,000, so they ask about R50. Asking is the only safe course when the boundary is invisible.
- **Mistakes are remembered.** One past error that was publicly corrected teaches the whole team to avoid deciding. The manager has no intention of this, but the effect lasts.
- **The manager is the only holder of context.** If the information needed to decide is in his head or his inbox, nobody else can decide, however capable.
- **Approvals follow the person, not the rule.** Requests go to him because he has always approved them. No rule says why. Approval tools such as [Power Automate approvals](https://learn.microsoft.com/en-us/power-automate/get-started-approvals) can route a request according to its type or amount, but someone must first decide the rule.
- **The manager enjoys being needed.** This is rarely admitted. Being the one who unblocks others is rewarding, and it can sustain the pattern.
- **Cover is not planned.** When he is away, no named deputy has authority, so work stops, as the Moment [the manager who can't act without the founder](/moments/the-manager-who-cant-act-without-the-founder/) illustrates one level up.

## Commercial impact

The value at stake is the speed of routine work, the manager's time for work that only they can do, staff initiative and the resilience of the operation when any one person is absent.

The first cost is delay. A R3,800 purchase that waits three days costs more in lost hours than the item itself. Multiply that across dozens of routine decisions each month and the waiting becomes a regular drag on output. The Impact note on [approval queues and blocked capacity](/impact/approval-queues-blocked-capacity-cost/) shows how waiting translates into cost.

The second is the manager's own opportunity cost. Hours spent on answers that anyone could have given are hours not spent on supplier negotiations, planning or developing the team. The most expensive person in the operation is doing its cheapest work.

The third is the effect on staff. People who are never allowed to decide stop developing judgement. They become reliable at following instructions and weak at solving problems, and the best of them leave for places that give them room.

The fourth is fragility. An operation that depends on one person's availability for ordinary decisions is exposed to leave, illness and resignation. The Impact note on [work stalling when the decision-maker is unavailable](/impact/work-stalls-when-decision-maker-unavailable-cost/) describes what that looks like in practice.

## Common misidentification

The usual advice is to tell the manager to delegate more. He agrees, hands over a decision, receives a worried message about it and takes it back. Another response is to blame the team for being timid, which deepens the reluctance. A third is to add a deputy who becomes a second bottleneck. These all treat the symptom as a matter of attitude when it is a matter of undefined authority.

## Possibility

In a better state, routine decisions are made by the people closest to the work, within written limits, and the manager sees only what falls outside them. The supervisor replaces the pallet jack on Monday and tells him afterward. The manager reviews a short weekly list of what was decided and spends his time on the exceptions.

Delegation of this kind is not abdication. Limits, reporting and a review of mistakes without blame keep control in place. The Insight on [why approval processes become bottlenecks](/insights/why-approval-processes-become-bottlenecks/) covers the structural side, and the Insight on [how to make ownership clear at every stage](/insights/how-to-make-ownership-clear-at-every-stage/) shows how to attach decisions to roles.

## Intervention

Begin with evidence about which decisions actually arrive and how they are answered. Most managers are surprised by how repetitive the list is.

## Practical next actions

1. **Log the decisions for two weeks.** Record each request that reaches the manager, what was asked, the answer and how long it waited.
2. **Find the repeated answers.** Mark requests where the answer was the same every time, or where the manager simply approved.
3. **Write decision limits by role.** State what a supervisor, team leader and manager may decide alone, with rand limits and examples.
4. **Give staff the context.** Provide the price lists, budgets and rules that the manager uses, so others can decide with the same information.
5. **Agree a review, not a permission.** Replace the approval step with a weekly list of decisions made, which the manager scans for problems.
6. **Name a deputy for absences.** Give one person written authority for the days the manager is away, and test it.

## Diagnostic questions

- How many requests reached your manager last week, and how many got the same answer as before?
- Can your team state the limit up to which they may decide without asking?
- What happens to routine work when the manager is out for two days?
- Does the manager hold information that others need in order to decide?
- When a delegated decision turns out wrong, what happens to the person who made it?

## Bottom line

A manager becomes the bottleneck for routine decisions when the limits of authority are unclear and the context sits with one person. Writing down who may decide what, sharing the information, and reviewing outcomes instead of approving each step lets the team move at its own speed and frees the manager for work only they can do.
