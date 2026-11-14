---
hub: patterns
record_id: PAT-478
slug: the-hidden-cost-of-slow-decisions
title: The Hidden Cost of Slow Decisions
description: Slow decisions rarely appear on a report, but they hold up orders, hires, payments and projects every day. Here is how to see the waiting time and shorten it without losing control.
lead: Slow decisions rarely appear on a report, but they hold up orders, hires, payments and projects every day. Here is how to see the waiting time and shorten it without losing control.
category: Governance & Decision Flow
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Governance & Decision Flow
pattern_family: Governance & Decision Flow
observable_condition: Equipment requests, hires, supplier responses and customer variations wait days or weeks for routine decisions while the work they unlock stands still.
primary_identification: Decision latency: decision rights, thresholds, required information and routing are not designed, so routine decisions wait unseen for senior people.
commercial_value_dimensions: Productive capacity, revenue timing, talent acquisition, supplier relationships and management time
sources:
  - Get started with Power Automate approvals - Power Automate | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
  - Create and test an approval workflow with Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/modern-approvals
related:
  - Why Approvals Accumulate as Companies Grow | /patterns/why-approval-steps-pile-up-as-a-company-grows/
  - The hidden cost of waiting for management information | /patterns/the-hidden-cost-of-waiting-for-management-information/
  - The Cost of Infrastructure That Cannot Scale With Demand | /patterns/why-growing-demand-exposes-infrastructure-sized-for-yesterday/
summary: Slow decisions rarely appear on a report, but they hold up orders, hires, payments and projects every day. Here is how to see the waiting time and shorten it without losing control.
layout: plain
---
## Observable condition

A Rustenburg mining services contractor has a capable team and a healthy order book. Yet work keeps stalling. A site supervisor needs approval for a hired generator and waits four days. A preferred candidate for a technician post accepts another offer because the hiring decision took three weeks. A supplier price increase sits unanswered, so the old purchase order cannot be filled. A customer's request for a variation is still being discussed at month end.

None of these decisions is difficult. Most would take a few minutes once the right person looked at them. They wait because the right person is busy, travelling or unaware the decision is pending.

The business tracks revenue, costs and safety incidents. It does not track how long decisions take.

## Realisation

The realisation is that waiting for a decision is a cost, even though it never appears as a line on a report. While a decision waits, the work it unlocks waits too. Equipment stands idle, candidates move on, suppliers deprioritise the account and customers lose patience.

Most slow decisions are not slow because they are hard. They are slow because they are invisible to the decision-maker, lack the information needed to decide, or require someone more senior than the decision warrants.

**Realisation prompt:** list the decisions currently waiting in your business. For each, how long has it been waiting, and what is held up until it is made?

## Identification

This is a pattern of decision latency. The visible symptom is work stalling between people. The common assumption is that managers are too busy and that is the price of control. The structural cause is that decision rights, information and routing are not designed: requests arrive informally, incomplete and to whoever happens to be senior.

It is related to [why reporting delays become decision delays](/patterns/why-reporting-delays-become-decision-delays/) and [when the number arrives after the decision is made](/patterns/when-the-number-arrives-after-the-decision-is-made/). This pattern focuses on the waiting time itself and how to make it visible.

## Diagnosis

- **Requests arrive in many forms.** Corridor conversations, WhatsApp, email and phone calls, none of which leaves a queue the decision-maker can see.
- **Information is missing.** The decision-maker cannot decide without a quote, a budget figure or a reason, and has to ask for it.
- **Authority sits too high.** Routine, low-value decisions need the same senior sign-off as large ones.
- **No time expectation.** Nobody has agreed how quickly a decision of each type should be made.
- **Waiting is not measured.** The business can see the outcome of decisions but not how long they took.

## Commercial impact

The commercial value at stake is productive capacity, revenue timing, talent, supplier relationships and management time.

Idle capacity is the most direct cost. A crew waiting for an equipment decision is paid whether it works or not. The Impact note on [work that stalls when the decision-maker is unavailable](/impact/work-stalls-when-decision-maker-unavailable-cost/) describes that cost.

Revenue is delayed. Variations and change requests that wait for approval delay the work and the invoice that follows.

Talent is lost. Good candidates seldom wait three weeks for an offer.

Supplier relationships weaken. Suppliers who wait for answers learn to prioritise more decisive customers.

Management time is wasted. When decisions arrive without context, the decision-maker spends more time gathering information than deciding.

## Common misidentification

The usual misreading is that the decision-maker needs to work harder or be more available. That puts more strain on the busiest person and does not change the design.

Another is to remove controls altogether. Controls exist for good reasons, and removing them creates other risks.

A third is to assume that faster decisions mean worse decisions. Most slow decisions are routine ones made slowly, not complex ones made carefully.

## Possibility

The possibility is a business where each common type of decision has a clear owner, a value threshold, a standard set of information and an expected turnaround. Requests are raised in one place with what the decision-maker needs. Low-value, routine decisions are delegated. The decision-maker sees pending items in a single list and can respond from a phone. Waiting time is measured, and the slowest decision types are redesigned.

[Microsoft's introduction to Power Automate approvals](https://learn.microsoft.com/en-us/power-automate/get-started-approvals) describes routing requests to approvers who can respond from email, Teams or a mobile app, with options for sequential approvals or first-to-respond. [The step-by-step approval workflow guide](https://learn.microsoft.com/en-us/power-automate/modern-approvals) shows how the decision is then recorded and the requester informed. The Moment [why decision rights belong in the system, not in someone's head](/moments/why-decision-rights-belong-in-the-system-not-in-someones-head/) describes why this matters for people.

## Intervention

Start by listing the ten most common decisions in the business: purchases, hires, leave, discounts, variations, supplier changes and so on.

For each, agree who decides, at what value threshold authority moves up, what information must accompany the request and how quickly a decision is expected.

Move requests for those decisions into one channel, even if it is a shared list to start, so pending items are visible. Record when each was raised and when it was decided.

After a month, look at the average wait for each type. Delegate or simplify the slowest ones first.

## Practical next actions

1. List the ten most frequent decision types in the business and who currently makes each.
2. Set a value threshold below which each decision can be made by a named person without escalation.
3. Define the minimum information that must come with each type of request.
4. Agree a target turnaround for each decision type and write it down.
5. Route requests through one visible channel and record when each is raised and decided.
6. Review average waiting time by decision type monthly and redesign the slowest.

## Diagnostic questions

- How many decisions are waiting right now, and how long has the oldest been waiting?
- Which routine decisions still need the most senior person in the business?
- Do decision-makers receive requests with everything they need to decide?
- What work was held up last month while a decision waited?

## Bottom line

Slow decisions carry a hidden cost in idle capacity, delayed revenue, lost candidates and strained suppliers. The cure is not to decide less carefully but to design decisions: clear owners, sensible thresholds, complete requests and visible queues. Measure the waiting, and it becomes something the business can reduce.
