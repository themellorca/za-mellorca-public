---
hub: insights
record_id: INS-376
slug: what-happens-after-the-automation-goes-live
title: What Happens After the Automation Goes Live?
description: Go-live is the start of an automation's working life, not the end of the project. A practical guide to the first weeks, the first quarter and the first year of running a business automation.
lead: Go-live is the start of an automation's working life, not the end of the project. A practical guide to the first weeks, the first quarter and the first year of running a business automation.
category: Business Automation
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Business Automation
sources:
  - Plan your support operations to provide effective support - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/transition-to-support-operations
  - Holistic enterprise automation techniques (HEAT) - Power Automate | https://learn.microsoft.com/en-us/power-automate/guidance/automation-coe/heat
  - Overview of the Automation Kit - Power Automate | https://learn.microsoft.com/en-us/power-automate/guidance/automation-kit/overview/introduction
  - Measure and communicate the business value of Power Platform solutions - Power Platform | https://learn.microsoft.com/en-us/power-platform/guidance/adoption/business-value
related:
  - Who watches the automations? | /insights/who-watches-the-automations/
  - How to calculate the business case for automation | /insights/how-to-calculate-the-business-case-for-automation/
  - Is your business actually ready for AI agents? | /insights/is-your-business-actually-ready-for-ai-agents/
summary: Go-live is the start of an automation's working life, not the end of the project. A practical guide to the first weeks, the first quarter and the first year of running a business automation.
layout: plain
---
The day an automation goes live usually feels like the finish line. The workflow has been built, tested and switched on, the team that built it moves on to the next request, and everybody expects the process to look after itself. In practice, go-live is the moment an automation starts doing real work with real data, under conditions nobody fully tested. What happens next decides whether it becomes a dependable part of the operation or a quiet source of rework.

This article sets out what a business should expect after an automation goes live, and what to plan for at each stage: the first fortnight, the first quarter, the first year and, eventually, retirement. It applies whether the automation is a simple invoice-approval flow or a multi-step process that touches the CRM, the accounting system and customer email.

> An automation is not finished when it runs. It is finished when someone owns it, can tell whether it is working, and knows what to do when it is not.
>

## Why go-live is the riskiest moment, not the safest

Testing covers the cases people thought of. Production covers everything else: the supplier who sends a PDF in a new layout, the customer record with no email address, the month-end volume spike, the public holiday that shifts a deadline. The automation will meet these within days. Some it will handle, some it will reject loudly, and some it will process incorrectly without telling anyone.

At the same time, the people who understand the automation best are often the least available. An external developer has started another client. The internal person who championed it is back to their day job. Microsoft's Dynamics 365 implementation guidance names this problem directly: it warns that project and partner resources may be busy with the next phase and resist being involved in support issues unless expectations are set in advance. That guidance is written for large business applications, but the dynamic is the same for a small automation built over a few weeks.

## The first fortnight: watch closely and fix fast

The first two weeks are a short period of deliberate extra attention. Large implementations call this hypercare. Microsoft describes it as a short period after go-live when extra resources and attention support users and business processes, and recommends defining a clear exit based on specific criteria rather than a date alone. Its examples of exit criteria include no critical issues, key processes running efficiently, service levels being met, and the support team resolving most issues without extra help.

For a smaller business, a sensible version looks like this:

- **Check every run, not just failures.** For the first week, someone compares what the automation did with what should have happened: invoices created, records updated, emails sent. Silent errors are found this way, not by waiting for alerts. Our article on [how to know whether an automation actually ran](/insights/how-to-know-whether-an-automation-actually-ran/) covers the checks in more detail.
- **Keep the builder on call.** Agree in advance how quickly the developer or partner will respond during this period, and for how long.
- **Log every exception.** Each case the automation could not handle goes into a simple list with its cause. The list becomes the backlog for the first round of fixes.
- **Keep the manual fallback ready.** Staff should still know how to do the work by hand if the automation has to be paused.

The fortnight ends when the exit criteria are met, not when the calendar says so. If exceptions are still arriving daily, the automation is not yet stable, and declaring it finished simply moves the problem onto the people who process the exceptions.

## The first quarter: from project to operation

Once the automation is stable, it needs to move from being someone's project to being part of how the business runs. Microsoft's support guidance makes the point that this transition is gradual rather than a single event, and that it works best when the people who will support the system are involved before launch. In practice, the first three months should settle four things.

### A named owner

Someone in the business, not only the developer, is accountable for the automation's results. They do not need to maintain the code. They need to know what it is for, receive its alerts, and decide when it needs changing. Without this, the automation drifts into the gap described in [why every important integration needs an owner](/insights/why-every-important-integration-needs-an-owner/).

### Routine monitoring

Microsoft's HEAT guidance for automation treats deploy and manage as its own stage, with run-level success and failure information, scheduling and queueing, and visibility into the health of the automation and the infrastructure it runs on. A small business does not need a central automation team to apply the principle. It needs a short daily or weekly check that confirms the expected volume went through and the exception list is not growing.

### A change rule

The automation now depends on things it does not control: the fields in the CRM, the template of a supplier's invoice, the login it runs under, the vendor's interface. Agree that changes to any of those are checked against the automation first. The same HEAT guidance recommends controlled deployment so that changes do not accidentally break automations in production. For smaller teams, the practical version is a short list of "things that will break this automation" kept with its documentation.

### A first benefits check

At around the ninety-day mark, compare the process before and after. Power Platform's business-value guidance suggests straightforward before-and-after measures: time taken per task, error rates, and output in a given period. If nobody recorded a baseline before launch, reconstruct a rough one from staff estimates and historical volumes, and label it as an estimate.

## An illustrative example

The following is a hypothetical case. A Durban logistics business with about 60 staff automates the creation of delivery notes from confirmed orders. The first week goes well. In week two, a large customer starts sending orders with two delivery addresses, and the automation picks the first one every time. Because the dispatch team checks every run during hypercare, they catch it on the second day, and the developer adds a rule that sends split-address orders to a person instead. Three months later, the owner notices exceptions creeping up again. The cause is a new product category with no weight recorded in the system, so the automation cannot assign a vehicle. The fix is a data rule rather than an automation change. Neither problem was a failure of the build. Both were the normal life of an automation in production.

## The first year: keep it fit for purpose

After the first quarter, attention can drop to a steady rhythm, but it should not drop to zero. Over a year, several things will change around the automation even if nobody touches it:

- **Volumes grow or shift.** A flow sized for 200 transactions a month may struggle at 2,000, or hit the limits of a licence or connector.
- **The process changes.** Pricing rules, approval thresholds and product ranges move. If the automation is not updated, staff start working around it.
- **People change.** The owner leaves or changes role. The knowledge of why the automation behaves as it does goes with them unless it is written down, which is why [automation documentation matters](/insights/why-automation-documentation-matters/).
- **Exceptions accumulate.** The cases sent to people instead of being handled automatically can quietly grow until the "automated" process needs as much staff time as the manual one did.

A quarterly review of fifteen minutes per important automation is usually enough: is it still doing the job it was built for, is the exception rate stable, has anything around it changed, and is the documentation still accurate? The broader case for this rhythm is set out in [why business systems need ongoing stewardship](/insights/why-business-systems-need-ongoing-stewardship/).

## Measuring whether it was worth it

The Automation Kit that Microsoft built for its automation platform was designed explicitly to monitor automations and estimate money saved and return on investment. The tooling is specific to that platform, but the idea is general: an automation should be able to show what it delivers. That means counting the work it completes, the time it saves, the errors it removes and the cost of running and supporting it, including the hours staff spend on its exceptions.

If the numbers are disappointing, the answer is not always to abandon the automation. Often the exception rate points to a data or process problem upstream, and fixing that unlocks the expected value.

## Knowing when to retire it

Automations should also have an end. When the process it supports is redesigned, replaced by a feature in a core platform, or no longer needed, the automation should be switched off deliberately, its credentials removed and its documentation archived. Automations that keep running after their process has gone are a quiet risk: they can still send emails, create records or hold access to systems nobody remembers granting.

## A simple post-go-live checklist

1. Exit criteria for the first fortnight, agreed before launch.
2. A named business owner who receives alerts and approves changes.
3. An exception list, reviewed weekly at first and monthly later.
4. A short list of upstream changes that could break the automation.
5. A before-and-after comparison at about ninety days.
6. A quarterly review, and a deliberate decision to retire the automation when its job is done.

None of this needs a large team or specialist tooling. It needs the business to accept that go-live is the start of the automation's working life, and to give that working life an owner.
