---
hub: insights
record_id: INS-037
slug: why-software-consolidation-is-an-operations-project-not-just-an-it-project
title: Why software consolidation is an operations project, not just an IT project
description: Cancelling subscriptions is technical, changing how people work is not. Why consolidation stalls under IT alone and how to run it as operations change.
lead: Cancelling duplicate subscriptions is a technical task; changing how people work is not. Why consolidation stalls when it is run purely by IT, and how to plan, own and measure it as an operational change.
category: Digital Operations
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Digital Operations
sources:
  - The Prosci ADKAR® Model - Prosci | https://www.prosci.com/methodology/adkar
  - Select your cloud migration strategies - Cloud Adoption Framework | https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/plan/select-cloud-migration-strategy
  - Section 14 Retention and restriction of records - POPIA | https://popia.co.za/section-14-retention-and-restriction-of-records/
related:
  - Why uncontrolled configuration changes create operational risk | /insights/why-uncontrolled-configuration-changes-create-operational-risk/
  - Why shared inboxes become operational bottlenecks | /insights/why-shared-inboxes-become-operational-bottlenecks/
  - How to design workflows that can survive staff changes | /insights/how-to-design-workflows-that-can-survive-staff-changes/
summary: Cancelling duplicate subscriptions is a technical task; changing how people work is not. Why consolidation stalls when it is run purely by IT, and how to plan, own and measure it as an operational change.
layout: plain
---
Software consolidation usually starts as a cost exercise. Somebody notices that the business pays for three file-sharing services, two project tools and a CRM that only half the sales team uses. The obvious owner is whoever looks after technology: compare the products, pick the winners, migrate the data, cancel the rest.

That framing explains why so many consolidation projects stall or quietly reverse. Cancelling a subscription is a technical task. Changing how dozens of people do their daily work is not. When two tools are merged into one, at least one group of people has to work differently, give up shortcuts they rely on, and trust a system they did not choose. That is an operations change, and it needs to be led like one.

This article explains why consolidation belongs with operations as much as with IT, and what that means for how the project is planned, owned and measured.

## What actually changes when tools are consolidated

Look at any consolidation from the point of view of the people using the tools, rather than the invoices:

- **Processes change.** Two teams that tracked projects differently now have to agree on one set of stages, fields and rules.
- **Handovers change.** Work that used to pass between two tools by email or export may now flow inside one system, or may need a new handover that did not exist before.
- **Roles change.** Someone who administered the retired tool loses that role; someone else gains responsibility for a larger shared system.
- **Reporting changes.** Numbers that were calculated one way in each tool are now calculated once, which may not match either old figure.
- **Habits change.** People lose the workarounds that made the old tool bearable.

None of these can be solved by the person who configures the software. They need decisions from the people who run the work.

## Why IT-led consolidation tends to fall short

When consolidation is run purely as a technical project, a predictable set of problems appears:

1. **The product decision is made on features, not workflows.** The surviving tool has the longest feature list, but nobody checked whether it handles the way the losing team actually works.
2. **Hidden dependencies are discovered late.** The retired tool was feeding a monthly report, a client portal or an automation nobody had listed. Microsoft's [Cloud Adoption Framework](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/plan/select-cloud-migration-strategy) advises confirming that a workload has no critical dependencies before retiring it, and updating the inventory as you go. In practice, those dependencies are known by the people who use the tool, not by the people who pay for it.
3. **Adoption is assumed.** Accounts are created and training is offered, but people keep using the old tool, or a spreadsheet, because nobody changed what they are expected to do.
4. **Success is declared at cancellation.** The project closes when the old subscription ends, before anyone checks whether the work is flowing well in the new one.

## Change happens one person at a time

Prosci's [ADKAR model](https://www.prosci.com/methodology/adkar) is a useful lens here. It describes five outcomes each individual needs to reach before a change sticks: awareness of why the change is happening, desire to support it, knowledge of how to work in the new way, the ability to actually do it, and reinforcement so they do not slip back. Its premise is that organisational change only happens when individuals change.

Applied to software consolidation, that means a project plan needs more than a migration timeline. For each group affected, it should answer: do they understand why their tool is going? Do they see what is in it for them? Have they been shown how to do their real tasks, not just where the buttons are? Can they do those tasks at normal speed? And what will keep them from drifting back to the old way?

## Data decisions are business decisions

Consolidation forces decisions about records that only the business can make. Which customer record wins when two tools disagree? Which project history needs to come across, and which can be archived? How long should records from the retired tool be kept?

That last question has a legal dimension. Section 14 of the Protection of Personal Information Act requires that [records of personal information are not kept longer than necessary](https://popia.co.za/section-14-retention-and-restriction-of-records/) for their purpose, unless the law, a contract or another lawful reason requires it, and that they are destroyed, deleted or de-identified as soon as reasonably practicable once retention is no longer authorised.

A retired tool that still holds old customer data in a forgotten account is not consolidation; it is a liability with the subscription switched off, and a close relative of the problem described in [why legacy applications remain live without an owner](/discovery/why-legacy-applications-remain-live-without-an-owner/). Deciding what to migrate, what to archive and what to delete is a job for the people who understand why the data was collected.

## Who should own the project

The most reliable arrangement is joint ownership with clear roles:

| Role | Responsible for |
| --- | --- |
| Business sponsor | Why the change is happening, resolving disagreements between teams, and holding the line when people push back |
| Process owner for each affected workflow | Agreeing how the work will run in the surviving tool, and confirming that it does after go-live |
| System owner | Configuration, access, integrations and data migration |
| Team leads | Training, coaching and reinforcing the new way of working in their teams |
| Finance | Contract notice periods, cancellations and confirming that the savings are real |

Technology people are essential to the project. They should not be left to carry the operational change alone.

## A worked example

*Illustrative example:* a Johannesburg marketing and events agency with about 55 staff ran two project management tools after merging with a smaller agency. The technology lead chose the larger agency's tool, migrated the active projects in a weekend and cancelled the other subscription.

Within a month, the events team had moved its run sheets back into spreadsheets. Their old tool had a timeline view they used on the day of each event, and the surviving tool's default setup did not show the same information. Client approvals, which the smaller agency had tracked as a task status, had no equivalent, so approvals moved back into email.

The agency restarted the work as an operations project. The events lead and the account director agreed a shared set of project stages, an approval status was added, and a timeline view was configured for event days. Two team members from the smaller agency were trained as local champions. Three months later, both teams were working in one tool, and the spreadsheets had stopped.

## Measure the work, not just the invoice

Licence savings are easy to count and worth counting. But they are not the main reason to consolidate, and they are not proof of success. Better measures include:

- the share of the affected work now done in the surviving tool rather than in spreadsheets or email;
- time taken for the processes that crossed between the old tools;
- errors or rework caused by duplicate or conflicting records;
- whether management reports now come from one source without manual reconciliation.

Check these at one month and three months after go-live. If people have drifted back to old habits, the project is not finished.

## Plan it like any operational change

A consolidation that respects the operational side looks a lot like any well-run system change: map the current workflows first, agree the future process with the people who do the work, migrate in stages, and support people until the new way is normal. [How to map a business workflow without making it complicated](/insights/how-to-map-a-business-workflow-without-making-it-complicated/) and [how to implement a new business system without disrupting operations](/insights/how-to-implement-a-new-business-system-without-disrupting-operations/) both apply directly.

Consolidation is one of the most useful things a business with too many tools can do; [piling on more software is not digital maturity](/insights/piling-on-more-software-is-not-digital-maturity/). But fewer tools only help when the work moves cleanly into the ones that remain.
