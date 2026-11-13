---
hub: insights
record_id: INS-036
slug: how-to-decide-whether-to-replace-or-reconfigure-a-system
title: How to decide whether to replace or reconfigure a system
description: Many systems people want to replace are good products buried under old setup. How to tell product limits from setup problems and compare the real costs.
lead: Many systems people want to replace are good products buried under old configuration and unclear processes. How to tell product limits from setup problems, run a short diagnostic, and compare the real costs of replacing and reconfiguring.
category: Systems & Strategy
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Systems & Strategy
sources:
  - Select your cloud migration strategies - Cloud Adoption Framework | https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/plan/select-cloud-migration-strategy
  - Optimize your implementation with a fit-to-standard and fit-gap analysis - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/process-focused-solution-fit-to-standard-fit-gap-analysis
  - Standardize processes during a Dynamics 365 implementation - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/business-processes/standardize-business-processes
related:
  - Why switching software is not always the answer | /insights/why-switching-software-is-not-always-the-answer/
  - How to decide what technology problem to solve first | /insights/how-to-decide-what-technology-problem-to-solve-first/
  - Piling on more software is not digital maturity | /insights/piling-on-more-software-is-not-digital-maturity/
  - Why teams build spreadsheets after the business buys enterprise software | /patterns/why-teams-build-spreadsheets-after-the-business-buys-enterprise-software/
summary: Many systems people want to replace are good products buried under old configuration and unclear processes. How to tell product limits from setup problems, run a short diagnostic, and compare the real costs of replacing and reconfiguring.
layout: plain
---
When a business system frustrates people for long enough, someone eventually says it: "We need to get rid of this thing." The CRM is clumsy, the job system does not match how work is done, the finance package forces three workarounds every month-end. A replacement promises a clean start.

Sometimes that is right. Often, though, the system is not the real problem. The way it was set up, the way the process was designed around it, or the way it has been changed since go-live is the problem. Replacing it without understanding that difference is one of the most expensive mistakes a growing business can make, because the new system gets configured by the same people, around the same process, with the same assumptions.

This article sets out how to tell the difference, and how to make the call with evidence rather than frustration.

## Two very different interventions

**Reconfiguring** means changing how an existing system is set up: its fields, workflows, permissions, automations, templates, reports and integrations. It may also mean redesigning the process the system supports. The vendor, the data and most of the user knowledge stay in place.

**Replacing** means moving to a different product. That involves selecting a vendor, migrating data, rebuilding integrations, retraining every user, running two systems in parallel for a while, and accepting a dip in productivity while people learn the new tool.

Microsoft's [Cloud Adoption Framework](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/plan/select-cloud-migration-strategy) lists replacement as one of several options for any workload and notes the factors that come with it: data migration complexity, user training needs and process changes. Those costs are real even when the new product is better.

## Why replacement is so tempting

A new system looks clean because it does not yet contain your data, your exceptions or your history. A demonstration shows the product working on tidy sample records. The current system, by contrast, carries every compromise made since it went live. Comparing the two is not a fair test. [How to buy business software without letting the demo make the decision](/insights/how-to-buy-business-software-without-letting-the-demo-make-the-decision/) covers this trap in detail.

There is also a natural tendency to blame the tool rather than the decisions made about it. If a CRM was rolled out without agreeing what a qualified lead is, who owns follow-up or which fields are mandatory, it will produce messy data whichever brand it carries. [Why your CRM is not the problem you think it is](/insights/why-your-crm-is-not-the-problem-you-think-it-is/) explores that pattern.

## A lesson from implementation practice

Microsoft's implementation guidance for its business applications makes a point that applies well beyond that product. Its article on [fit-to-standard and fit-gap analysis](https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/process-focused-solution-fit-to-standard-fit-gap-analysis) warns that recreating legacy processes in a new system leads to costly and unnecessary customisations that need more design, coding, testing, training and documentation. It recommends comparing your processes with what the system already supports, adopting the standard approach wherever possible and adapting only where justified.

That advice cuts both ways. Before you replace a system, ask whether you ever used it in its standard form, or whether years of customisation and workarounds have turned it into something harder to use than it needs to be. Many "bad" systems are good products buried under configuration built for an old way of working.

## Signs that reconfiguration is the better answer

- The complaints are about specific screens, steps or reports, not about the system's core capability.
- Other businesses of similar size and type use the same product successfully.
- Nobody has reviewed the configuration since go-live, or the person who set it up has left.
- Users rely on spreadsheets to do things the system can do but was never set up to do.
- Data quality problems come from unclear rules about who enters what, rather than from technical limits.
- The vendor has released features since you implemented that address the main complaints.

## Signs that replacement is justified

- The system cannot support a core capability the business now depends on, even with configuration.
- The vendor has announced end of support, or development has visibly stalled.
- It cannot meet a security or compliance requirement you cannot work around, such as enforced two-factor sign-in.
- Integration options are so limited that every connection requires manual transfer.
- The business has changed shape, for example moving from project work to subscriptions, and the product is built for the old model.
- Reconfiguration has been tried properly and the same problems returned.

## Run a short diagnostic before deciding

A focused two- to four-week diagnostic usually costs far less than a replacement project and often settles the question. It has four parts:

1. **List the complaints and classify them.** For each, ask whether it is caused by the product's capability, its configuration, the process around it, missing training, or poor data. Be honest; most lists are dominated by the last four.
2. **Compare current processes with the product's standard way of working.** Where you have customised, ask whether that customisation still earns its keep.
3. **Test the top fixes.** Pick the three most painful issues and try to solve them through configuration in a test environment, with real users.
4. **Cost both paths.** Include data migration, integrations, training, parallel running and lost productivity for replacement; include configuration effort, training and any plan upgrades for reconfiguration.

| Cost element | Reconfigure | Replace |
| --- | --- | --- |
| Licences | Existing, possibly a higher tier | New contract, often overlapping the old one |
| Data | Clean-up in place | Extraction, mapping, clean-up and migration |
| Integrations | Adjust existing connections | Rebuild each connection |
| People | Targeted retraining | Full retraining and a learning dip |
| Risk | Repeating past configuration mistakes | Disruption, plus the same process problems in a new tool |

## Do not underestimate the people side of replacement

Replacement projects are often costed as technology projects, but most of their risk sits with people. Microsoft's guidance on [standardising business processes during an implementation](https://learn.microsoft.com/en-us/dynamics365/guidance/business-processes/standardize-business-processes) lists the risks that come with changing how work is done: resistance from employees who feel familiar workflows are being disrupted, needs of particular departments being overlooked, integration and data migration problems that stretch timelines, and designs so rigid that they limit how the business can adapt. It recommends early involvement of stakeholders from every affected area, proper training and a mechanism for continuous improvement after the change.

Reconfiguration carries some of the same risks, but on a smaller scale. People keep the tool they know, and the changes can be introduced in stages, tested with the users who complain most, and reversed if they do not work.

## A worked example

*Illustrative example:* a Pretoria facilities maintenance company with about 70 staff was close to signing for a new field service platform. Technicians disliked the job app, office staff spent hours each week reconciling completed jobs, and managers did not trust the reports.

A three-week review classified 41 complaints. Six were genuine product limits. The rest came from configuration: a job form with 38 fields, of which technicians used nine; status values that did not match the real workflow; and an automation that had been switched off after an error two years earlier and never repaired. Simplifying the form, rebuilding the statuses and fixing the automation resolved most of the complaints within six weeks. The six product limits were recorded, and the business agreed to revisit replacement at the next renewal if they still mattered.

## Whichever way you go, fix the process

The most important point is that neither option works if the process is unclear. A replacement inherits whatever process confusion the old system had. Reconfiguration without a process decision just produces a different set of workarounds. Agree how the work should flow first, then decide what the system needs to do.

It also helps to control how the system changes afterwards, so that today's clean configuration does not drift back into a tangle. [Why uncontrolled configuration changes create operational risk](/insights/why-uncontrolled-configuration-changes-create-operational-risk/) explains how. And whichever path you choose, plan for what happens after go-live, because that is where most systems succeed or fail; see [why technology implementations fail after go-live](/insights/why-technology-implementations-fail-after-go-live/).
