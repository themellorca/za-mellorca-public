---
hub: impact
record_id: CPS-006
slug: compiling-information-before-work-preparation-payroll-cost
title: Gathering Information Before Work Can Start: The Payroll Cost of Preparation
description: When staff must collect figures, files and updates from several places before a task can begin, the business pays for assembly work, not the work itself.
lead: When staff must collect figures, files and updates from several places before a task can begin, the business pays for assembly work, not the work itself.
category: Business Automation
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Business Automation
commercial_domain: Business Automation
primary_pain: Employees must manually compile information from several sources before they can start routine work
primary_cost_mechanism: Labour cost of preparation time, with opportunity cost, rework from stale inputs and slower customer response
sources:
  - What Are Data Silos? - IBM | https://www.ibm.com/think/topics/data-silos
  - What Is Data Integration? - IBM | https://www.ibm.com/think/topics/data-integration
  - Explore the Power Automate home page - Power Automate | https://learn.microsoft.com/en-us/power-automate/getting-started
related:
  - The Payroll Cost of Work Software Could Do Automatically | /impact/repeatable-manual-work-payroll-cost-automation/
  - From Inbox to System by Hand: The Labour Cost of Retyping Emails | /impact/copying-email-details-into-business-systems-admin-cost/
  - Manual Automation Triggers Leave Half the Process Manual | /impact/manual-automation-trigger-half-automated-process-cost/
summary: When staff must collect figures, files and updates from several places before a task can begin, the business pays for assembly work, not the work itself.
layout: plain
---
## The tolerated pain: the work before the work

Ask a quotations clerk, a project manager or a financial controller how long a routine task takes, and they will usually give the time for the task itself. Pricing a job takes twenty minutes. Preparing for the Monday operations meeting takes half an hour. Writing a client progress update takes fifteen minutes.

Then watch them do it. Before the pricing starts, someone opens the supplier price list in one spreadsheet, checks stock in the accounting package, searches email for the client's last order, and phones the workshop to confirm a lead time. Before the meeting, someone exports three reports, pastes them into a slide and chases two colleagues for numbers that are not in any system. The task takes twenty minutes. Getting ready for it takes forty.

This preparation work is rarely named. It does not appear in job descriptions, timesheets or process maps. Yet in many South African small and mid-sized businesses it is a large share of what skilled people are paid to do every day.

Mellorca has already written about [staff who cannot find where information is stored](/impact/pain-employees-wasting-time-information-stored/). This article deals with a different problem. Here the information can be found. It is simply spread across several systems, files and people, so it must be gathered and assembled by hand before any real decision or output is possible.

## Why businesses tolerate it

- **It looks like part of the job.** Gathering inputs feels like diligence, so nobody questions it.
- **It is spread thinly.** Ten minutes here and twenty there never add up to a visible line item.
- **Each system works on its own.** The accounting package, the job tracker and the shared drive all do their own jobs. The gap is between them, and no single system owner is responsible for it.
- **Capable people compensate.** Experienced staff know exactly where to look, which hides how fragile and slow the process is.
- **Nobody measures cycle time from request to output.** Businesses track whether the quote went out, not how long it took to assemble.

### How information ends up scattered

IBM describes data silos as isolated collections of data that stop information flowing between departments, systems and business units. It lists familiar causes: departments choosing their own tools, older systems that cannot connect to newer ones, limited budgets and growth that adds systems faster than anyone joins them up. Small businesses reach the same position more informally. A spreadsheet is started to fill a gap, a second application is bought for one team, and a key figure lives only in a manager's notebook.

## Operational symptoms

- Routine outputs, such as quotes, reports or client updates, take far longer than the core task suggests.
- Staff keep personal "master" spreadsheets that pull together information from several sources.
- Work stops when one person who knows where everything lives is on leave.
- Different people assemble the same inputs separately for different purposes.
- Figures in one output disagree with figures in another, because each was gathered at a different moment.
- Senior staff spend the first hour of the day "getting up to speed" rather than deciding or selling.

## How the pain becomes money

The main cost mechanism is **labour cost**: payroll spent on assembly rather than judgement. Three further mechanisms follow from it.

- **Opportunity cost.** Preparation usually falls on the people whose time is most valuable, such as estimators, managers and senior consultants. Every hour they spend gathering is an hour not spent on pricing, selling or improving delivery.
- **Error and rework cost.** IBM notes that without integration, teams must gather and reconcile data from various places by hand, which is slow and prone to error. A quote built on last week's stock figure, or a report built on a stale export, has to be corrected later, sometimes after a customer has seen it.
- **Revenue loss through delay.** When a quote takes a day to assemble instead of an hour, some customers accept a faster competitor's price.

## A transparent cost model

The figures below are illustrative assumptions, not benchmarks. Replace them with your own observations.

| Input | Illustrative value |
| --- | --- |
| Staff who prepare inputs before routine tasks | 8 |
| Preparation time per person per working day | 45 minutes |
| Working days per year | 220 |
| Average loaded cost per hour | R320 |

**Hours a year:** 8 people × 0.75 hours × 220 days = 1,320 hours.

**Labour cost:** 1,320 × R320 = R422,400 a year.

Not all of that can or should be removed. Some checking is genuine judgement. If better-connected systems removed half of the gathering, the recoverable value in this example would be about R211,000 a year. The figure becomes more meaningful when you compare it with what those hours could have produced instead.

*Illustrative example.* A Gauteng engineering supplier with 35 staff found that its four estimators spent most of each morning pulling together supplier prices, stock levels and previous job costs before they could price a single enquiry. After timing a week of work, the owner found that quotes took on average a day and a half to leave the business, of which only a fraction was pricing. Linking the stock and price data into a single quoting view did not change the estimators' expertise. It gave them back the morning.

For a fuller method, see Mellorca's guide to [calculating the real cost of a repetitive task](/insights/how-to-calculate-the-real-cost-of-a-repetitive-task/).

## When it becomes commercially urgent

- response times to customers are slipping and the delay sits in preparation, not decision;
- the business is about to hire another analyst, estimator or administrator to "keep up";
- management meetings start with arguments about whose numbers are right;
- one person's absence stops a routine output from being produced;
- growth means more quotes, more reports and more updates, each needing the same manual assembly.

The last point matters most. Preparation work grows in direct proportion to volume. A business that doubles its enquiries also doubles the hours spent gathering inputs, which is why it often feels harder to run as it grows. Mellorca's pattern on [why one number requires three people and four systems](/patterns/why-one-number-requires-three-people-and-four-systems/) shows how this plays out in reporting.

## What better looks like

The aim is not one system that does everything. It is that the inputs for routine work arrive already assembled.

- **A clear system of record for each kind of information,** so staff know which source is authoritative.
- **Integration between the systems that feed routine outputs,** so stock, prices, customer history and job status can be seen together. IBM describes integration as combining and harmonising data from multiple sources into a unified, coherent format.
- **Automated collection for recurring outputs.** Tools such as Microsoft Power Automate are designed to automate repetitive tasks and move data between applications and services, so the weekly pack or the client update can be pre-filled.
- **Templates and views built around the task,** not around each system's own screens.

## Practical steps

1. Pick three routine outputs that matter commercially, such as quotes, the weekly management pack and client progress updates.
2. For one week, ask the people who produce them to note separately the time spent gathering and the time spent on the actual task.
3. List every source each output draws from, including people who must be asked.
4. Identify which sources are the same across outputs. These are the best candidates for integration.
5. Remove the gathering steps that can be automated, and keep the checks that need judgement.
6. Measure request-to-output time again after the change.

Where the gaps cross several systems, a structured review such as a [digital systems audit](/services/digital-systems-audit/) helps decide which connections to build first, and [business automation](/services/business-automation/) can remove the repeatable assembly steps.

## Bottom line

Preparation work is payroll spent before value is created. Because it is spread thinly and done by capable people, it is easy to overlook. Once it is counted, the commercial value at stake is usually clear: hours of skilled time each week, faster responses to customers and fewer errors from stale inputs. The business does not need its people to work harder. It needs the information they use every day to arrive already assembled.
