---
hub: insights
record_id: INS-082
slug: how-to-design-crm-stages-that-match-what-your-team-actually-does
title: How to Design CRM Stages Around Real Work
description: CRM stages that mirror a textbook funnel get ignored. Stages built from observable events, with clear entry and exit tests, give a team a pipeline it can trust.
lead: CRM stages that mirror a textbook funnel get ignored. Stages built from observable events, with clear entry and exit tests, give a team a pipeline it can trust.
category: CRM and Sales Operations
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: CRM and Sales Operations
sources:
  - What Is Customer Relationship Management (CRM)? - IBM | https://www.ibm.com/think/topics/crm
  - What is Kanban in Project Management? | https://www.atlassian.com/agile/kanban
  - Working with WIP limits for kanban - Atlassian | https://www.atlassian.com/agile/kanban/wip-limits
  - What is Process Mining? - IBM | https://www.ibm.com/think/topics/process-mining
related:
  - How to Design a Customer Onboarding Workflow That Scales | /insights/how-to-design-a-customer-onboarding-workflow-that-scales/
  - Why Work Gets Lost Between Teams | /insights/why-work-gets-lost-between-teams/
  - Before you automate, understand how the work actually moves | /insights/before-you-automate-understand-how-the-work-actually-moves/
summary: CRM stages that mirror a textbook funnel get ignored. Stages built from observable events, with clear entry and exit tests, give a team a pipeline it can trust.
layout: plain
---
Open the pipeline of almost any growing business and you will find stages called something like Lead, Qualified, Proposal, Negotiation and Closed. They look tidy, and they were probably copied from a template on the day the CRM was installed. Then a salesperson tries to move a real deal through them. The prospect asked for a site visit before a quote, the finance director needs to approve before anyone signs, and the customer disappeared for six weeks and came back. The deal does not fit the stages, so it sits in the wrong one, and the pipeline report slowly stops describing reality.

Stages are the skeleton of a CRM. If they follow the way work really happens, reports, reminders and forecasts all become more reliable. If they follow a generic funnel, people work around them. This article explains how to design stages from the work itself.

## Start with what happens, not what the system offers

IBM describes CRM as a set of integrated technologies used to document, track and manage relationships and interactions with existing and potential customers, helping companies measure and control their lead generation and sales pipelines. That is a description of recording what happens. It follows that the stages should be a faithful record of events in the customer's journey, not an aspiration about where the team would like deals to be.

The simplest way to find those events is to take ten recent deals, five won and five lost, and walk through each one with the person who handled it. For each, write down in order:

- the moments when something concrete happened, such as a meeting held, a quote sent, a document signed or a deposit received;
- who did the work at each point;
- how long the deal waited between those moments, and why;
- where deals were lost or went quiet.

Patterns appear quickly. You may discover that every successful deal included a site visit, which the template never mentioned, or that the stage labelled "Negotiation" actually contains three distinct activities handled by different people. A broader method for finding this kind of detail is described in [how to map a business workflow without making it complicated](/insights/how-to-map-a-business-workflow-without-making-it-complicated/).

## Use stages that describe the customer's position, not the salesperson's mood

A frequent flaw is stage names that describe how the seller feels, such as "Hot", "Warm" or "Promising". These cannot be tested. Two people will classify the same deal differently, and the same person will classify it differently on a Monday and a Friday. Better stage names describe a position that can be verified:

- **Enquiry received** instead of "New lead".
- **Needs confirmed** instead of "Qualified".
- **Quote issued** instead of "Proposal".
- **Decision-maker engaged** instead of "Negotiation".
- **Deposit or order received** instead of "Won".

The test is whether a colleague reading the record could confirm the stage from evidence in it: a logged call, an attached quote, a payment reference. If confirming a stage needs a conversation with the salesperson, the stage is too subjective.

## Write an entry test and an exit test for every stage

Each stage should have a one-line rule for entering it and a one-line rule for leaving it. For example, a deal enters "Needs confirmed" when the customer's requirements have been written into the record and read back to them. It leaves when a quote is issued. These rules prevent two common distortions: deals skipping ahead to look more advanced, and deals lingering because nobody is sure what comes next.

Capture the required information at the point where it is naturally available. If a quote cannot be issued without a delivery address, make the address a required field on the step into "Quote issued", not a form a salesperson must fill in a week later. Why this matters for data quality is explored in [how bad CRM data gets created](/insights/how-bad-crm-data-gets-created/).

## Keep the number of stages small

More stages are not more control. Each additional stage is another decision a busy person must make and another opportunity to be wrong. For many service businesses five to seven stages are enough, with detail recorded in fields and tasks rather than extra stages. A useful rule is that a stage should exist only if it changes what someone does next, who owns the deal, or how you forecast it.

Atlassian's guidance on kanban boards makes a related point about visualising work: the value comes from columns that reflect the real steps and from limiting how much work sits in each. Its article on work-in-progress limits explains that capping the work in a stage makes bottlenecks and blockers visible, so the team can focus on clearing them. A pipeline is a board of the same kind. If forty deals sit in "Quote issued" and three in everything else, you have learned something that the stage names alone would never have told you.

## Separate stage from status

Stage answers "where is this deal in the process?". Status answers "is anything wrong with it?". Mixing them produces stages such as "On hold" or "Waiting for client", which hide the real position. A deal on hold after the quote has been issued is still at "Quote issued"; it also carries a status of waiting, with a reason and a date to chase. Keeping the two apart means your report still shows how many quotes are out, while a second view shows how many are stalled.

Closed-lost deserves the same care. Require a reason from a short list, such as price, timing, chose a competitor or no response. Without it, the most valuable learning in the pipeline is thrown away. The related problem of deals that never close is covered in [why dead deals stay open in the CRM and distort the sales forecast](/discovery/why-dead-deals-stay-open-in-the-crm-and-distort-the-sales-forecast/).

## Check the design against evidence

Once the stages are live, use the data to test them. IBM's overview of process mining explains how event logs from systems such as a CRM can be used to build a model of how a process really unfolds, and how timestamps reveal where time is spent and where cases deviate. You do not need specialist software to apply the principle. Export the stage history and look for four things.

1. Deals that skip stages. They may signal a stage nobody needs.
2. Deals that move backwards. They may signal an unclear exit test.
3. Stages where time varies wildly. They may contain more than one activity.
4. Stages with consistently long waits. They may mark a handoff or approval that needs attention.

Review after a quarter and adjust. Changing stages mid-year disturbs comparisons, so make changes deliberately, note the date, and tell the team why. A pipeline built to match the work usually needs gentle tuning, not rebuilding.

## Involve the people who will use it

Stages designed in a management meeting tend to serve reports rather than the people entering data. Ask the sales and service staff what they would want to see at a glance, and what they currently track in private spreadsheets. If the CRM does not contain what people need, they will keep the spreadsheet, and the CRM will lose the argument. This is one reason adoption problems are so often workflow problems, as discussed in [why CRM adoption problems are often workflow problems](/insights/why-crm-adoption-problems-are-often-workflow-problems/). The same logic underlies [why software configuration should follow workflow design](/insights/why-software-configuration-should-follow-workflow-design/).

## An illustrative example

The following is a hypothetical case. A Pretoria company that installs solar and battery systems for homes began with a generic five-stage pipeline. Walking through recent jobs showed that no deal progressed without a roof inspection, and that a recurring delay came after quote acceptance, while the customer arranged finance. The company redesigned its pipeline as: Enquiry received, Needs and roof details confirmed, Inspection done, Quote issued, Quote accepted, Finance or deposit confirmed. Each stage had an exit test. Waiting for finance became a status, not a stage. Within two months the owner could see that most delays sat in the inspection stage, hired a second inspector, and the forecast became something the team trusted enough to plan installations around.

## The point

Good stages describe real, checkable events in the order they happen, are few enough to maintain, have clear entry and exit tests, and separate position from status. Build them from the deals your team has actually won and lost, test them against the data, and adjust them with the people who use them. The pipeline then stops being a reporting chore and becomes a working picture of the business.
