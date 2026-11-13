---
hub: discovery
record_id: DISC-302
slug: development-environments-keep-running-after-projects-stop
title: Why development environments keep running after projects stop
description: Test and development servers run through nights, weekends and long after go-live. Schedules and expiry dates stop you paying for idle environments.
lead: Test and development servers are created quickly for a project, then left running at nights, weekends and long after go-live. Schedules and expiry dates stop paying for idle environments.
category: Cloud, Infrastructure & Platform Operations
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Cloud, Infrastructure & Platform Operations
problem_domain: Cloud, Infrastructure & Platform Operations
problem_owner: IT Manager / Development Lead
budget_owner: CFO / Financial Director
sources:
  - Auto-shutdown a VM - Azure Virtual Machines | https://learn.microsoft.com/en-us/azure/virtual-machines/auto-shutdown-vm
  - Automate starting and stopping AWS instances - Instance Scheduler on AWS | https://docs.aws.amazon.com/solutions/latest/instance-scheduler-on-aws/solution-overview.html
  - Schedule an Environment for Automatic Deletion - Azure Deployment Environments | https://learn.microsoft.com/en-us/azure/deployment-environments/how-to-schedule-environment-deletion
related:
  - Why servers get upsized when nobody trusts the utilisation data | /discovery/server-capacity-added-because-utilisation-data-is-not-trusted/
  - Why old DNS records pile up after services are retired, and why it matters | /discovery/dns-records-left-behind-after-services-are-retired/
  - Why manual changes keep bypassing your infrastructure-as-code | /discovery/manual-changes-bypass-infrastructure-as-code/
summary: Test and development servers are created quickly for a project, then left running at nights, weekends and long after go-live. Schedules and expiry dates stop paying for idle environments.
layout: plain
---
A project team needs a test environment, so a developer creates a few virtual machines, a database and some storage in the cloud. The project goes live. The team moves on. The test environment keeps running every hour of every day, including weekends and the December shutdown, until someone in finance asks why the cloud bill has not fallen since the project ended.

Non-production environments are easy to create and easy to forget. Unlike a production system, nobody complains when one is switched off, so nobody checks whether it is still needed.

## The problem in plain language

Development, test, training and demonstration environments are usually needed during working hours, and only while a piece of work is active. Yet most are created with no schedule and no end date. They run around the clock and outlive the projects that justified them. The bill arrives as one line among many, and the people who created the resources rarely see it.

This differs from the wider problem of [unused cloud resources](/impact/unused-cloud-resources-financial-waste/) and from [infrastructure with no clear business owner](/discovery/infrastructure-resources-without-a-clear-business-owner/), though it overlaps with both. Here the resources often do have an owner and a purpose. The problem is that nothing about how they were created tells them when to stop.

## What you are actually trying to solve

The concern usually follows a cost spike and sounds like "our development environments run continuously", "should we shut down dev servers at night?" or "why do test environments still cost money after the project?" The person asking, often an IT manager or financial director, wants to cut spend quickly without slowing developers down, and wants a rule that stops the waste coming back.

## Evidence and system mechanism

Cloud providers bill most compute by the hour or second it runs, whether or not anyone is using it. The platforms provide tools to stop it. Microsoft's guide to [auto-shutdown for Azure virtual machines](https://learn.microsoft.com/en-us/azure/virtual-machines/auto-shutdown-vm) describes how to shut a VM down at a set time each day, with an optional notice by email or webhook beforehand, so costs fall during off hours. It notes that the default time zone is UTC. A shutdown set for 18:00 without adjusting the zone will run at 20:00 South African time.

Amazon's [Instance Scheduler on AWS](https://docs.aws.amazon.com/solutions/latest/instance-scheduler-on-aws/solution-overview.html) starts and stops EC2 and RDS database instances on a defined schedule, using resource tags to decide which instances it controls. AWS's own example is useful arithmetic. An instance needed only in business hours runs about 50 hours a week instead of 168, and AWS says scheduling can cut the cost of such instances by up to 70%. That figure covers compute that can be stopped. Storage, reserved capacity and always-on services keep charging.

Schedules deal with nights and weekends. Expiry deals with the end of the project. Microsoft's [Azure Deployment Environments](https://learn.microsoft.com/en-us/azure/deployment-environments/how-to-schedule-environment-deletion) lets a developer set an expiry date and time when creating an environment. On that date the environment and all its resources are deleted. Project administrators can set or change expiry on any environment in their project, which matters because, as the documentation notes, developers might not always know when an environment is no longer needed.

### How the cost accumulates

*Illustrative example, not a client case.* A Cape Town software company builds client portals. Each client project gets its own test environment: two application servers and a managed database. Projects last three to four months, but environments are rarely removed, and none has a schedule. After two years, the company finds environments for more than a dozen finished projects still running, alongside the current ones running at night. Simply adding office-hours schedules to active environments and expiry dates to new ones cuts the non-production bill noticeably. Nobody has to change how they write code.

## Problem owner and why now

The day-to-day owner is usually the development lead or IT manager who controls the cloud subscription. The budget owner is the CFO or financial director, sometimes through a client project budget. The usual trigger is a cost spike: a larger-than-expected invoice, an exchange-rate move that inflates dollar-priced cloud costs, or a finance review of IT spend. Other triggers include the end of a big project, a move from on-premises servers to cloud, or a team adopting environment-per-feature practices that multiply the number of environments.

## Economic consequence

The direct cost is paying for compute and managed services that are idle most of the week or no longer needed. For South African businesses billed in US dollars, a weaker rand amplifies that waste. Indirect costs include forgotten environments that still hold copies of real data, become security exposures, and clutter the subscription so that real cost drivers are hard to see. To size it, total the monthly cost of all non-production resources. Then estimate the share of hours they are actually used, and list environments linked to projects that have closed.

## Root cause

- **Creation is easy, removal is nobody's job.** No step in the project close-out covers environments.
- **Defaults are always-on.** Resources run continuously unless someone sets a schedule.
- **No expiry at creation.** Environments are created without an end date or a link to a project.
- **Costs are not shown to creators.** Developers rarely see what their environments cost.
- **Fear of losing work.** Teams keep environments "just in case" because rebuilding them is manual.

## Practical intervention

1. **Inventory non-production resources** and tag each one with environment type, project, owner and intended end date.
2. **Apply office-hours schedules by default** to development and test compute, with a simple way to override when someone works late. Set the time zone correctly.
3. **Set expiry dates at creation** and require an owner to renew them. Use platform features where available, or a scheduled script that flags and then removes expired resources.
4. **Add environment removal to project close-out,** with a confirmation step and a backup of anything worth keeping.
5. **Make rebuilding cheap** by defining environments as code templates, so deleting one is not a loss.
6. **Show non-production cost by project and owner** in a monthly report, building on the tagging and allocation work described in [cloud costs without business owner allocation](/impact/cloud-costs-without-business-owner-allocation/).

## Trade-offs

Schedules can annoy developers who work irregular hours, so overrides must be quick. Some services cannot be stopped and must be scaled down or deleted instead. Automatic deletion is risky without warnings and backups, so start with notifications and owner confirmation, then move to automatic expiry once people trust it. Templates take effort to build, but they also make environments more consistent and testing more reliable.

## Diagnostic questions

- What share of your cloud bill is non-production, and how many hours a week is it actually used?
- How many environments belong to projects that have finished?
- Do new environments get a schedule and an end date when they are created?
- Could your team rebuild a test environment from a template in under an hour?
- Does anyone outside IT see non-production cost by project?

## What good looks like

Every non-production environment is tagged with an owner, a project and an end date. Development and test compute runs only when it is needed. Environments are removed at project close-out or on expiry, and they can be rebuilt quickly from templates. Finance sees non-production cost by project each month, and a cost spike is explained before anyone has to ask.

## Where Mellorca fits

Mellorca's [digital infrastructure](/services/digital-infrastructure/) service sets up schedules, expiry and tagging across cloud subscriptions. [Managed digital operations](/services/managed-digital-operations/) can run the monthly review so that idle environments do not build up again.

*Method note:* the savings figure quoted is the vendor's own estimate for instances needed only in business hours; actual savings depend on which resources can be stopped and how your pricing is structured.
