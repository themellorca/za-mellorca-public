---
hub: insights
record_id: INS-097
slug: how-to-design-crm-notifications-without-creating-alert-fatigue
title: How to Design CRM Notifications Without Creating Alert Fatigue
description: When the CRM pings people about every field change, they stop reading any of it, including the alert about a key customer. Here is how to audit CRM notifications and keep only the ones that prompt action.
lead: When the CRM pings people about every field change, they stop reading any of it, including the alert about a key customer. Here is how to audit CRM notifications and keep only the ones that prompt action.
category: CRM Operations
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: CRM Operations
sources:
  - Google SRE monitoring ditributed system - sre golden signals | https://sre.google/sre-book/monitoring-distributed-systems/
  - Send In-App Notifications Within Model-Driven Apps - Power Apps | https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/send-in-app-notifications
  - Retry pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/retry
related:
  - How to Keep a CRM Clean After the Cleanup Project Ends | /insights/how-to-keep-a-crm-clean-after-the-cleanup-project-ends/
  - How to Reduce Manual Customer Follow-Up | /insights/how-to-reduce-manual-customer-follow-up-rules-sequences-and-stop-conditions/
  - What Data Should Be Required at the Point of Capture? | /insights/what-data-should-be-required-at-the-point-of-capture-and-what-can-wait/
summary: When the CRM pings people about every field change, they stop reading any of it, including the alert about a key customer. Here is how to audit CRM notifications and keep only the ones that prompt action.
layout: plain
---
A sales manager at a packaging company in East London receives around 140 CRM notifications a day: every new lead, every stage change, every task assigned to anyone on her team, every comment on every account she follows and a reminder for each overdue activity. She has set up an email rule that moves them all into a folder she rarely opens. When the system notified her that the company's largest customer had logged a formal complaint, that notification went into the same folder. She found out three days later, from the customer.

This is alert fatigue. It happens when people receive so many notifications that they stop treating any of them as important. It is not a personal failing. It is a design outcome, and it is common in CRMs because notifications are easy to switch on and nobody is responsible for switching them off.

## Why CRM notifications multiply

CRMs make it easy to notify. Each new automation, each new team and each new manager tends to add a notification or two, usually for a good reason at the time. Few are ever removed. Default settings often favour notifying more people rather than fewer. Over a couple of years, the volume grows until the useful messages are drowned out by the routine ones.

The site reliability engineers at Google, writing about [monitoring distributed systems](https://sre.google/sre-book/monitoring-distributed-systems/), describe the same problem in technical operations: every alert that interrupts someone should be actionable and should require a response, people can only respond with urgency a few times a day before fatigue sets in, and noisy alerts train people to ignore them, which hides real problems. A sales or service team is not an on-call engineering team, but human attention works the same way.

## Start with an audit of what exists

Before designing better notifications, list the ones you have. For each notification, record:

- What triggers it.
- Who receives it and through which channel: in-app, email, mobile push or a chat tool.
- How many were sent in the last month.
- What the recipient is expected to do when it arrives.

The last column does most of the work. If nobody can say what action a notification should prompt, it is a candidate for removal. If the action is "be aware", it probably belongs in a report or a daily summary, not an interruption.

Ask a few heavy CRM users to forward you a day of their notifications and mark each one as useful, sometimes useful or ignored. The result is usually sobering, and it gives you evidence to remove notifications that someone will defend on principle.

## Sort notifications into three tiers

Every remaining notification should fit one of three tiers. Our general guide to [automating notifications without creating noise](/insights/how-to-automate-notifications-without-creating-noise-tiers-recipients-and-channels/) describes tiering in detail; here is how it applies to a CRM.

**Act now.** Something needs a response from a specific person soon, and delay causes harm. Examples: a high-value inbound enquiry assigned to you, a complaint from a key account, a deal you own that a customer has just accepted. These should be few, specific and delivered where the person will see them quickly.

**Act today.** Something needs attention but not immediately. Examples: a task due today, a deal with no activity for the stale period, a handoff awaiting your acceptance. These belong in a work list or a morning summary rather than separate interruptions.

**Know about.** Information that is useful context but needs no action. Examples: a colleague's deal moved stage, a new contact added to an account you follow. These belong in reports, dashboards or a weekly digest.

Most CRMs over-use the first tier for messages that belong in the third.

## Design each notification properly

For the notifications you keep, a few design choices make a large difference.

**Send it to one person, not a group.** A notification sent to a team is often acted on by nobody. Route it to the record owner or the person on duty, with an escalation if it is not acknowledged.

**Make it self-contained.** Include the customer, the event, why it matters and a direct link to the record. The recipient should be able to decide what to do without opening three screens.

**Set priority and expiry.** Many platforms support this directly. Microsoft's documentation on [in-app notifications in model-driven apps](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/send-in-app-notifications), the platform behind Dynamics 365, describes notifications that can appear as a toast or in a notification centre, with a priority setting that orders them and an expiry after which they are removed. By default they expire after 14 days. Use expiry so stale notifications do not pile up, and use priority so the important ones sit at the top.

**Do not notify on every attempt.** When an automation fails and retries, people do not need a message for each attempt. Microsoft's guidance on the [retry pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/retry) recommends logging early failures as informational and treating only the final failed attempt as an error, specifically to avoid flooding operators with alerts. The same principle applies to CRM automations that notify users.

## Give people some control, within limits

Let users adjust the "know about" tier: following or unfollowing accounts, choosing a daily or weekly digest. Do not let them switch off the "act now" tier for records they own; if those are being ignored, the problem is volume or relevance, not preference.

## Review notifications like any other part of the system

Notification volume creeps back up as automations are added. Assign the CRM owner to review notification volumes quarterly, and require every new notification to state its tier, recipient and expected action before it is switched on. Track a simple measure: notifications per user per day. If it rises steadily, something is being added without being removed.

Alert fatigue also undermines trust in the system as a whole. When people learn to ignore the CRM's messages, they start to ignore the CRM, a dynamic we explore in [why teams stop trusting the CRM](/insights/why-teams-stop-trusting-the-crm/). For notifications about automations themselves, see [how to design alerts for automation failures](/insights/how-to-design-alerts-for-automation-failures/).

## Practical next actions

1. List every CRM notification with its trigger, recipients, channel, monthly volume and the action it should prompt.
2. Ask three heavy users to mark a day of notifications as useful, sometimes useful or ignored, and remove those nobody acts on.
3. Assign each remaining notification to act now, act today or know about, and move the last two tiers into work lists, summaries or reports.
4. Route act-now notifications to a single owner with an escalation, and make each message self-contained with a direct link.
5. Set priority and expiry on in-app notifications, and stop notifying users on each retry of a failing automation.
6. Measure notifications per user per day and review the full list quarterly with the CRM owner.
