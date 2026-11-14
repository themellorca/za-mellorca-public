---
hub: insights
record_id: INS-382
slug: how-often-should-you-review-your-crm-configuration
title: How Often Should You Review Your CRM Configuration?
description: A practical review rhythm for CRM settings, with the triggers that justify reviewing sooner and a light schedule small teams can keep.
lead: A practical review rhythm for CRM settings, with the triggers that justify reviewing sooner and a light schedule small teams can keep.
category: CRM Operations
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: CRM Operations
sources:
  - Dynamics 365 and Power Platform Release Schedules - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/get-started/release-schedule
  - Application lifecycle management (ALM) with Microsoft Power Platform - Power Platform | https://learn.microsoft.com/en-us/power-platform/alm/overview-alm
  - Solution concepts with Power Platform - Power Platform | https://learn.microsoft.com/en-us/power-platform/alm/solution-concepts-alm
related:
  - How to Keep a CRM Clean After the Cleanup Project Ends | /insights/how-to-keep-a-crm-clean-after-the-cleanup-project-ends/
  - How to Design CRM Notifications Without Creating Alert Fatigue | /insights/how-to-design-crm-notifications-without-creating-alert-fatigue/
  - How Often Should You Review Your Integrations? | /insights/how-often-should-you-review-your-integrations/
summary: A practical review rhythm for CRM settings, with the triggers that justify reviewing sooner and a light schedule small teams can keep.
layout: plain
---
Most CRM systems are configured intensively for the first three months and then left alone. Fields are added when someone asks, a stage is renamed in a hurry, a workflow is switched on for a campaign and never switched off. Two years later the system carries the fingerprints of every urgent request, and nobody can say which parts still serve a purpose.

The question is how often a business should stop and review the configuration as a whole. There is no universal answer, but there is a sensible rhythm, and it depends on three things: how fast the business changes, how fast the vendor changes the product, and how much damage a stale setup can do.

## What a configuration review covers

A configuration review is not a data clean-up and not a user-training session, although it often leads to both. It looks at the settings that determine how the CRM behaves.

- **Fields and layouts:** which fields are required, which are used, which are duplicates, and which are never filled in.
- **Stages and statuses:** whether the pipeline still matches how the team really sells or serves.
- **Automations and workflows:** what runs, who it notifies, and whether the trigger conditions still make sense.
- **Roles and permissions:** who can see, edit, export and delete, and whether leavers and role changes have been reflected.
- **Integrations:** what connects to the CRM, who owns each connection, and what happens when it fails.
- **Reports and dashboards:** which ones are used in decisions, and which are inherited from a previous manager.

## The baseline rhythm: twice a year

For most small and mid-sized South African businesses, a full review twice a year is a reasonable baseline. The reason is partly external. Major cloud business platforms release changes on a fixed cycle. Microsoft, for example, delivers service updates for Dynamics 365 and the Power Platform in two annual release waves, with the first covering April to September and the second October to March, as set out on its [release schedule page](https://learn.microsoft.com/en-us/dynamics365/get-started/release-schedule). The vendor also offers early access, so you can validate an update in a sandbox environment before it reaches production.

That cycle is a convenient prompt even if you use a different product. When your vendor changes the platform twice a year, you should look at your own configuration at roughly the same interval. New features may replace a custom workaround you built, and deprecated settings may quietly stop working. Check your own vendor's release notes for the equivalent dates and put them in the calendar.

## When to review more often

Twice a year is a baseline, not a limit. Bring the review forward when any of these happen.

- **A change in how you sell or serve.** A new product line, a new channel or a new customer segment means the stages, fields and reports probably no longer fit.
- **A merger, restructure or large hiring round.** Roles, territories and approval rules need to match the new organisation.
- **A bad forecast or a surprising report.** If the numbers cannot be trusted, the cause is often configuration, such as stages with no exit criteria. Our piece on [why dead deals stay open and distort the forecast](/discovery/why-dead-deals-stay-open-in-the-crm-and-distort-the-sales-forecast/) shows how a small setup choice distorts leadership decisions.
- **A new integration or an AI feature.** Anything that writes into the CRM automatically deserves a check of permissions and validation rules before and shortly after launch.
- **A security or privacy event.** A leaver who kept access, or an export that went to the wrong person, justifies an immediate access review.

## When a lighter rhythm is enough

Not every business needs a full review twice a year. A five-person firm with a simple pipeline and no integrations can do a short annual review and a quarterly access check. The test is whether the system has changed. If nobody has touched the configuration in twelve months and the business has not changed, the review will be quick. If it has been touched weekly by three different people, you need to review it more often, not less.

## Make the review small and regular

Large reviews get postponed because they look like projects. Break the work into a lighter schedule that people will actually keep.

- **Monthly (15 minutes):** look at the list of recent configuration changes, and check that new fields and automations were requested and recorded.
- **Quarterly (one hour):** review user access, active automations and failed integration runs.
- **Twice a year (half a day):** the full review of fields, stages, reports and vendor changes, with the people who use the system in the room.

Microsoft's overview of application lifecycle management lists change tracking, review, audit, deployment control and rollback among the governance disciplines it expects around a business application, as described in its [ALM overview](https://learn.microsoft.com/en-us/power-platform/alm/overview-alm). You do not need an enterprise toolset to follow the principle. You need a record of what was changed, who asked and when, and a way to reverse it.

## Control change between reviews

A review is much easier if changes between reviews are controlled. Microsoft's guidance on [solution concepts](https://learn.microsoft.com/en-us/power-platform/alm/solution-concepts-alm) distinguishes between a development environment where changes are made and the environments where tested changes are deployed. The same idea works at any scale: try changes in a sandbox or a copy first, and then move them to the live system deliberately. A change made directly in production by whoever happened to have admin rights is the main source of configuration clutter.

Behind this sits the question of ownership. Someone has to be accountable for the CRM's setup, and that person needs authority to say no. Our article on [why software ownership needs to be explicit](/insights/why-software-ownership-needs-to-be-explicit/) explains how to assign it so that reviews actually happen.

## Why reviews are cheaper than rescue

The alternative to scheduled review is emergency repair, usually after trust in the system has collapsed. We cover that cost in [why recurring systems maintenance is cheaper than emergency repair](/insights/why-recurring-systems-maintenance-is-cheaper-than-emergency-repair/). A half-day review twice a year is a small price against a rebuild.

## Practical next actions

1. Find out who currently has admin rights to change the CRM's configuration, and name one accountable owner for the setup.
2. Put your vendor's next two release dates in the shared calendar and schedule a configuration review within a few weeks of each.
3. Start a simple change log with the date, the change, the person who requested it and the reason, and use it from this week.
4. Run a first access review now: remove leavers, check export permissions and confirm that everyone's role still matches their job.
5. Before the next review, list the fields, automations and reports nobody has used in six months, and decide in the meeting whether to keep, fix or retire each one.

The right frequency is the one your team will actually keep. A short, regular review that happens beats a perfect annual audit that is always next quarter's job.
