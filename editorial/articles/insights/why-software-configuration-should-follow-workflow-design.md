---
hub: insights
record_id: INS-354
slug: why-software-configuration-should-follow-workflow-design
title: Why Software Configuration Should Follow Workflow Design
description: When software is configured before the workflow is designed, the tool ends up defining the process by accident. A practical sequence for designing first and configuring second.
lead: When software is configured before the workflow is designed, the tool ends up defining the process by accident. A practical sequence for designing first and configuring second.
category: Systems Design
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Systems Design
sources:
  - Implement a solution based on business processes - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/process-focused-solution
  - Application lifecycle management (ALM) with Microsoft Power Platform - Power Platform | https://learn.microsoft.com/en-us/power-platform/alm/overview-alm
  - Measure and communicate the business value of Power Platform solutions - Power Platform | https://learn.microsoft.com/en-us/power-platform/guidance/adoption/business-value
related:
  - The hidden cost of operational friction in digital systems | /insights/hidden-cost-of-operational-friction/
  - Before you automate, understand how the work actually moves | /insights/before-you-automate-understand-how-the-work-actually-moves/
  - Why Your CRM Is Not the Problem You Think It Is | /insights/why-your-crm-is-not-the-problem-you-think-it-is/
summary: When software is configured before the workflow is designed, the tool ends up defining the process by accident. A practical sequence for designing first and configuring second.
layout: plain
---
A common sequence in small and mid-sized businesses goes like this. A new platform is bought: a CRM, a job management system, a finance package. Someone is given a login and asked to "set it up". They create fields, stages and users, copying the structure of the spreadsheet it replaces. Six months later the business discovers that the software mirrors how work was done last year, not how it should be done now, and every change is expensive.

The order of events is the problem. Configuration is the act of making software behave in a particular way. If it happens before the workflow has been designed, the software ends up defining the workflow by accident. This article explains why configuration should follow workflow design, and how to sequence the two.

## What configuration actually fixes in place

Configuration sounds light and reversible: tick a box, rename a stage, add a dropdown. In practice each choice sets a rule that other parts of the business start to depend on.

- A **required field** decides what information must exist before work can move on.
- A **pipeline stage** decides how progress is described, and therefore how it is reported.
- A **permission** decides who can approve, change or see something.
- An **automation rule** decides what happens without anyone being asked.
- A **report definition** decides what counts as a sale, a late job or an active customer.

Each of those is a piece of workflow design expressed in software. If nobody designed the workflow first, these decisions are made one at a time by whoever happens to be in the settings screen, often under time pressure and without seeing how they interact.

## Why the order matters

Microsoft's implementation guidance for Dynamics 365 makes a point that applies to any business platform: the system should not define your processes, and technology is an enabler that serves and fits the way the business operates. When configuration comes first, the reverse happens. The tool's defaults, or a copy of the old spreadsheet, become the process.

Four problems follow.

### You automate the wrong thing

If a messy handoff is configured as it stands, the software preserves the mess and makes it faster. We explain this trap in [why automating a broken process makes the problem worse](/insights/why-automating-a-broken-process-makes-the-problem-worse/).

### You discover the missing information too late

A workflow that has been walked through on paper exposes the information each stage needs. A configured system exposes it only when the first real order fails because a field was left empty or a record was never created upstream.

### You build in rigidity or chaos

Without a design, configuration tends to swing between two extremes: too many mandatory fields that staff fill with junk to get past them, or too few, so that records are incomplete and reports are unreliable. A workflow design tells you which information is truly required and when.

### You make change costly

Once forty users, six reports and three integrations rely on a particular setup, altering it is a project. The cost of getting the design wrong is paid later, with interest.

## The sequence that works

The following sequence keeps design and configuration in the right order without turning a modest implementation into a long programme.

1. **Describe the outcome.** State in a sentence what the workflow must achieve, such as "every accepted quote becomes a scheduled job within one working day, with the right customer and site details".
2. **Map the current workflow honestly.** Record how work really moves, including the workarounds, not how the policy says it should. The approach in [how to map a business workflow without making it complicated](/insights/how-to-map-a-business-workflow-without-making-it-complicated/) keeps this to a few hours.
3. **Design the target workflow.** Remove steps that exist only because of old limitations, decide who owns each stage, and define the information that must travel with the work.
4. **Translate the design into configuration requirements.** Each stage, field, permission and rule in the software should trace back to a line in the design. If a requested setting cannot be traced to a purpose, leave it out.
5. **Configure the smallest version that supports the design.** Start with the main path and the two or three most common exceptions. Resist the urge to model every edge case on day one.
6. **Test with real scenarios.** Run actual past orders through the configured system and watch where they get stuck.
7. **Record the decisions.** Write down why each important setting is the way it is, so the reasoning survives the person who made it.

The decisions that must be made before anyone opens the settings screen are listed in [what to decide before configuring a new platform](/insights/what-to-decide-before-configuring-a-new-platform/).

## Design the workflow independent of the tool

A useful discipline is to write the target workflow so that it could be configured in more than one product. If the design reads "approval by the operations manager for any job above R50,000", it says what the business needs. If it reads "set the deal stage to Stage 4 and trigger the Zap", it already depends on the tool, and its logic has been tangled up with a vendor's vocabulary.

That separation has a practical payoff. When the business later replaces or reworks a platform, the workflow design is a reusable asset. Only the configuration needs to be redone. It also makes the replace-or-reconfigure question much easier, as covered in [how to decide whether to replace or reconfigure a system](/insights/how-to-decide-whether-to-replace-or-reconfigure-a-system/).

## Where the discipline is hardest to keep

### Vendor onboarding

Implementation partners often arrive with a standard setup and a timeline. A standard setup is a reasonable starting point, but it is someone else's workflow. Ask the partner to show where it matches yours and where it does not, and settle the differences deliberately, not by default.

### Departments that configure for themselves

When each team can change its own settings, sales may add a mandatory field that quietly breaks the finance integration. Design decisions that cross a team boundary belong to the workflow owner, not to the person with admin rights. Left unmanaged, this is the source of the risks in [why uncontrolled configuration changes create operational risk](/insights/why-uncontrolled-configuration-changes-create-operational-risk/).

### Urgent fixes

Under pressure, someone adds a quick rule to stop an immediate problem. That is sometimes necessary, but the fix should then be reflected in the workflow design, or the design and the configuration drift apart until nobody trusts either.

## Keep the design alive after go-live

Workflow design is not a one-off document. Microsoft's guidance on application lifecycle management describes a cycle of plan, develop, test, deploy, operate and monitor, with governance covering change tracking, review and rollback. The same logic applies to business configuration even where no developers are involved: changes should start from the design, be tested, be recorded and be reversible.

A light-touch version is enough for most small businesses. Keep the workflow design in one shared place. Require that any change to a core setting is described against that design before it is made. Review the design twice a year against what the system actually does.

## An illustrative example

The following is a hypothetical case. A Pretoria electrical contractor with sixty staff buys a job management platform. The office manager configures it over a weekend, copying the columns from the job spreadsheet, including a free-text "status" field and a "notes" column that holds everything from materials to customer complaints.

Three months later, management wants a report of jobs waiting on materials. The data cannot produce it, because that information lives in the notes. The business pauses to map the workflow, discovers that materials sourcing is a stage in its own right with a named owner and an exit condition, and reconfigures the system with a proper materials stage and a required supplier order number. The software was not at fault. The order of the work was.

## A short checklist before configuring anything

- Can we state the outcome of this workflow in one sentence?
- Have we mapped how the work actually moves today?
- Is there a target design that names stages, owners and required information?
- Can every planned setting be traced to a line in that design?
- Who approves changes to the configuration after go-live?

If any answer is no, the right next step is a working session around a whiteboard, not another hour in the settings menu.
