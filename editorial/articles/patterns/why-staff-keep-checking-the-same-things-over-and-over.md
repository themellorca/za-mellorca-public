---
hub: patterns
record_id: PAT-012
slug: why-staff-keep-checking-the-same-things-over-and-over
title: Why staff keep checking the same things over and over
description: Refreshing the bank feed or reopening the courier portal shows that systems do not tell people when something needs attention. Replace the right checks.
lead: Refreshing the bank feed, re-opening the courier portal, looking again at stock levels: repeated checking is a sign that systems do not tell people when something needs attention. Here is how to tell which checks to replace.
category: Manual Work & Administrative Load
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Manual Work & Administrative Load
pattern_family: Manual Work & Administrative Load
observable_condition: Staff repeatedly open bank portals, courier tracking pages, stock sheets and inboxes throughout the day to see whether something has changed, and most checks find nothing.
primary_identification: Manual polling used in place of event-driven notification because systems are not set up to signal changes or thresholds.
commercial_value_dimensions: Speed, customer experience, labour capacity and operational risk
sources:
  - Poka Yoke - A Resource Guide - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/poka-yoke/
  - Set data alerts in the Power BI service - Power BI | https://learn.microsoft.com/en-us/power-bi/create-reports/service-set-data-alerts
  - Google SRE - What is Toil in SRE: Understanding Its Impact | https://sre.google/sre-book/eliminating-toil/
related:
  - Why teams keep building manual workarounds | /patterns/why-teams-keep-building-manual-workarounds/
  - When people are used to move data instead of make decisions | /patterns/when-people-are-used-to-move-data-instead-of-make-decisions/
  - The work your staff do because your systems don't | /patterns/the-work-your-staff-do-because-your-systems-dont/
summary: Refreshing the bank feed, re-opening the courier portal, looking again at stock levels: repeated checking is a sign that systems do not tell people when something needs attention. Here is how to tell which checks to replace.
layout: plain
---
## Observable condition

Watch a busy office for an hour and count how often people look at something just to see whether it has changed. The bookkeeper opens the online banking portal to see whether a customer's payment has come in, then opens it again an hour later. The dispatch clerk refreshes the courier tracking page for a delivery a client is anxious about. The buyer opens the stock sheet to check whether a fast-moving item has dropped below the reorder level. The project coordinator scrolls back through a shared inbox to see whether the supplier has replied.

None of these checks is unreasonable. Each protects something: an order that should not be released before payment, a client who will phone if the delivery is late, a line that must not run out. But most of the time, nothing has changed. The check finds nothing, and the person goes back to what they were doing, a little later than before.

An illustrative example: a Johannesburg wholesaler of hospitality supplies with about twenty-five staff released orders to customers on cash terms only once payment had reflected. Two people in the sales office checked the bank portal throughout the day for each pending order. Customers who paid early in the morning sometimes waited until the afternoon for dispatch, simply because the next check had not happened yet.

## Realisation

Repeated checking is a form of polling: asking a system again and again whether something has happened, because the system has no way of saying so. The cost has two parts. The first is the time spent on checks that find nothing, which is most of them. The second is the delay between the moment something happens and the moment someone next looks. A payment that reflects at 08:15 is only useful once a person sees it.

The checks also interrupt. Each one pulls attention away from the task at hand, and returning to that task takes longer than the check itself. The effect of these interruptions is examined in [the cost of employees being interrupted by messages and notifications](/impact/pain-employees-interrupted-messages-notifications-context-switching/).

Manufacturing learned this lesson long ago. The Lean Enterprise Institute's description of poka-yoke, or error-proofing, notes that checking every item is costly and does not address the root cause, and argues for preventing problems at source instead. Office checking works the same way. Looking again and again is a form of inspection. Designing the process so that the right event reaches the right person is a form of prevention.

**Realisation prompt:** which screens do your staff open several times a day, and how often does the check find something that needs action?

## Identification

This is a pattern of manual polling in place of event-driven notification. The visible symptom is people repeatedly opening the same portals, sheets and inboxes. The common assumption is that checking is simply diligence. The structural cause is that the systems involved either cannot signal a change, or can but have not been set up to, so people carry the responsibility for noticing.

It is related to [when a status update requires a staff member to investigate](/patterns/when-a-status-update-requires-a-staff-member-to-investigate/), which deals with answering someone else's question about status. This Pattern is about the checks staff run for themselves, all day, to avoid missing something.

## Diagnosis

- **No trigger exists.** The system records the event, such as a payment, a delivery scan or a stock movement, but nothing is configured to tell anyone when it happens or when a threshold is crossed.
- **The information lives in an external portal.** Banks, couriers and suppliers hold the data in their own systems. Without an integration or notification, the only way to know is to log in and look.
- **Thresholds are in people's heads.** The reorder level, the overdue limit or the acceptable delay is known by experienced staff but not written into any system, so no system can act on it.
- **Distrust of automation.** Where alerts have been tried and failed silently, people learn to check manually instead, which is reasonable but expensive. The question of how to know whether an automation actually ran is addressed in [this Insight](/insights/how-to-know-whether-an-automation-actually-ran/).
- **Responsibility is shared.** When several people may check the same thing, each checks in case the others have not, multiplying the effort.

## Commercial impact

The commercial value at stake is speed, customer experience, labour capacity and risk.

Speed suffers because action waits for the next check rather than following the event. Customers notice this as orders released late, queries answered after they have already chased and problems spotted after they have grown. Capacity is consumed by checks that mostly find nothing. Risk rises in a quieter way: manual checking is only as reliable as the person doing it, and on a busy day or during leave, checks are skipped and the thing they protect against happens anyway.

## Common misidentification

The usual response is a rota or a reminder: assign a person to check the portal at fixed times. That makes checking more regular, but it is still checking, and it fixes the delay at whatever interval the rota allows.

The opposite mistake is to switch on every notification available. People then receive so many messages that they start ignoring them and go back to checking manually. The aim is fewer, better signals, not more noise.

## Possibility

In a better state, people are told when something they care about has happened or crossed a threshold, and are otherwise left alone. Many business tools already support this. Microsoft's documentation for [Power BI](https://learn.microsoft.com/en-us/power-bi/create-reports/service-set-data-alerts), for example, describes data alerts that notify a user when a value on a dashboard moves beyond a limit they set, with alerts triggered when the underlying data is refreshed. Accounting platforms, bank feeds, courier services and stock systems commonly offer comparable notifications or integration points.

Where an event matters to a process, the better design goes one step further and lets the event move the work directly. For the wholesaler, that might mean a bank feed into the accounting system that matches the payment to the order and releases it to dispatch, with a person involved only when a payment does not match.

## Intervention

1. **List the checks.** Ask each team which screens, portals and files they open repeatedly to see whether something has changed, and roughly how often.
2. **Record the hit rate.** For a week, note how often each check found something that needed action. Low hit rates mark the best candidates for change.
3. **Write down the thresholds.** For each check, define what change matters: a payment received, stock below a level, a delivery late by more than a set time.
4. **Use what the system already offers.** Many systems have alerts, rules or notifications that are not switched on. Configure those first.
5. **Connect where the data sits outside.** For bank, courier and supplier data, look at feeds and integrations that bring the event into your own systems. The basics are explained in [APIs, webhooks and integrations: what business leaders actually need to know](/insights/apis-webhooks-and-integrations-what-business-leaders-actually-need-to-know/).
6. **Assign one owner per signal.** Make sure each alert goes to the person who will act on it, and that someone notices if alerts stop arriving.
7. **Retire the manual check.** Once the signal is reliable, stop the rota. Keep a periodic sense check, not a constant one.

## Diagnostic questions

- Which portals or files do your staff open more than five times a day just to see if something changed?
- How long, on average, is the gap between an important event and the moment someone acts on it?
- Which thresholds that matter to your business are known only to experienced staff?
- Do your current systems offer alerts or notifications that nobody has switched on?
- When the person who usually checks is on leave, what gets missed?

## Bottom line

Staff keep checking the same things because the business has asked people to notice what its systems could signal. Repeated checking costs time, interrupts work and still leaves a delay between the event and the response. Defining what matters, using the alerts and integrations already available and letting key events move the work directly replaces constant vigilance with a reliable signal.
