---
hub: insights
record_id: INS-031
slug: how-duplicate-software-creates-duplicate-work
title: How duplicate software creates duplicate work
description: When two applications do the same job, the cost goes beyond the licence. Six kinds of duplicate work overlapping tools create, and how to measure them.
lead: When two applications do the same job, the business pays twice for more than the licence. Staff enter the same data twice, check two places, reconcile two versions and argue over which is right. The six kinds of duplicate work overlapping tools create, and how to measure them.
category: Systems & Integration
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Systems & Integration
sources:
  - What Are Data Silos? - IBM | https://www.ibm.com/think/topics/data-silos
  - What is Master Data Management? - IBM | https://www.ibm.com/think/topics/master-data-management
  - What Is Data Integration? - IBM | https://www.ibm.com/think/topics/data-integration
related:
  - When copy-and-paste is really an integration problem | /insights/when-copy-and-paste-is-really-an-integration-problem/
  - How a CRM turns into an expensive address book | /insights/how-a-crm-turns-into-an-expensive-address-book/
  - Why your systems do not talk to each other | /insights/why-your-systems-do-not-talk-to-each-other/
summary: When two applications do the same job, the business pays twice for more than the licence. Staff enter the same data twice, check two places, reconcile two versions and argue over which is right. The six kinds of duplicate work overlapping tools create, and how to measure them.
layout: plain
---
Duplicate software is usually discussed as a licensing problem. Two project tools, two file-sharing services, two places to keep customer contacts: the business is paying twice for the same capability. That cost is real, and it is set out in [the pain of paying for multiple applications](/impact/pain-paying-for-multiple-applications-duplicate-software-fragmented-work/). But the subscription is rarely the largest part of the bill.

The larger cost is work. When two tools hold the same kind of information or support the same task, people have to keep them both up to date, check both, reconcile both and decide which one to believe. That work is spread across many people in small pieces, so it rarely appears in any budget. It is also the reason duplicate software is so hard to remove: the people doing the extra work have adapted to it.

## How duplicate tools arrive

Nobody plans to run two tools for one job. It happens through ordinary decisions. A team adopts its own app because the official one does not quite suit it. A free tier is set up for one project and keeps running. A company buys a new system but never fully retires the old one, so both remain in use. A merger or a new branch brings its own tools. A department-level purchase solves a local problem without anyone checking what the business already has.

IBM's explanation of [data silos](https://www.ibm.com/think/topics/data-silos) describes much the same mechanism for data: departments run separate systems without integration, and information ends up isolated in each. Duplicate software is one of the most common ways silos form in smaller businesses.

## The six kinds of duplicate work

### 1. Double entry

The most visible form. A new customer is captured in the CRM and again in the accounting package. A job is logged in the field service app and again in the project tracker. Each retyping takes a few minutes and introduces a chance of error. Across a month of volume, those minutes add up to days. The broader pattern is described in [the hidden cost of re-entering the same information](/patterns/the-hidden-cost-of-reentering-the-same-information/).

### 2. Reconciliation

Once the same information lives in two places, the two copies drift apart. Someone updates a phone number in one tool and not the other. A price changes in one system first. Before anything important can be done, such as a month-end report, a customer statement or a stock count, someone has to compare the two and correct the differences. IBM notes that scattered customer data often has to be manually correlated and reconciled before it can be used. This work tends to fall on finance and operations staff, at the busiest times of the month.

### 3. Checking two places

When tasks, messages or documents can live in either of two tools, every person has to check both. Was the client's approval sent by email or posted in the project tool? Is the latest version of the contract in the shared drive or the document app? The time cost is small each time but constant, and the real risk is that something is missed because it was in the place nobody looked.

### 4. Arguing over which version is right

When two systems disagree, someone has to decide which one is correct, and often the answer is "neither, quite". IBM's description of [master data management](https://www.ibm.com/think/topics/master-data-management) notes that when different departments keep separate records of the same customer, the result is duplicated effort, inaccurate reporting and poor customer experiences. In practice, this shows up as meetings that start with ten minutes of agreeing on the numbers. It is the same root cause as [reports that cannot agree on the same number](/insights/why-your-reports-cannot-agree-on-the-same-number/).

### 5. Duplicate administration

Every tool needs users added and removed, permissions set, settings maintained, integrations kept running and renewals managed. Two tools doing one job double this overhead. They also double the security exposure, because each one is another set of accounts that must be closed when someone leaves.

### 6. Duplicate learning and support

New staff must learn both tools and, harder, learn the unwritten rules about which one is used for what. When something goes wrong, there are two places to investigate. Knowledge of how the two fit together often sits with one or two long-serving people, which creates a dependency of its own.

## Why the work is invisible

Duplicate work hides for three reasons. It is distributed: no single person spends a whole day on it. It is normalised: staff treat it as part of the job rather than as waste. And it is not tracked: nobody logs time spent reconciling two contact lists. The result is that the visible cost of consolidation, a migration project and some disruption, looks large next to an ongoing cost that nobody has counted.

## How to measure duplicate work

You do not need a time-and-motion study. A focused trace over a week or two is enough to put a number on it.

1. **Pick one overlap.** Choose a pair of tools that hold the same information or support the same task.
2. **List the touchpoints.** For each of the six kinds of work above, ask the people involved where it happens: who enters data twice, who reconciles, who checks both, who resolves disagreements, who administers both.
3. **Estimate frequency and time.** How often does each touchpoint happen per week, and how long does it take? Ask for honest estimates rather than precise logs.
4. **Count the errors.** How often has the overlap caused a mistake that reached a customer, a supplier or a report? Each one has a cost in correction and goodwill.
5. **Add it up.** Convert hours into a monthly figure using loaded staff costs, and set it beside the subscription cost of the second tool.

In most cases the labour figure is the larger of the two by some distance. That changes the conversation about whether consolidation is worth the effort.

## What to do once the work is visible

There are three broad options, and the right one depends on the overlap:

- **Designate one system as the source** for the shared information, and have the other read from it rather than keep its own copy. This removes reconciliation and arguments over the truth. Deciding which system should own which data is covered in [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/).
- **Integrate the two** where both genuinely need to exist. IBM describes [data integration](https://www.ibm.com/think/topics/data-integration) as combining data from multiple sources into a unified, consistent form, with less manual entry and fewer inconsistencies. A one-way integration from the source system removes double entry without forcing a team to give up a tool it needs.
- **Consolidate onto one tool** where the overlap serves no purpose. This removes all six kinds of duplicate work, but needs a planned migration and a clear retirement of the old tool. The decision process is covered in [how to decide which software to remove](/insights/how-to-decide-which-software-to-remove/).

## An illustrative example

The following is a hypothetical example. A South African marketing services agency uses two task tools: the account team uses one, the studio uses another. Client requests are logged in the first and re-created in the second. Each week, a coordinator compares the two lists to find tasks that were updated in one and not the other.

A two-week trace shows that re-creating tasks, checking both lists, reconciling status and answering "where is this?" questions add up to roughly a working day a week across the team, far more than the second tool's subscription. Two client deliverables were also late in the quarter because an update was made in only one tool. The agency moves both teams onto one tool, with separate boards for account and studio work, and the coordinator's weekly reconciliation disappears.

## The real price of overlap

Duplicate software is easy to tolerate because each tool, on its own, works. The cost lives in the gap between them, in the time people spend keeping two versions of the truth in step. Measuring that time is usually the step that turns a vague sense of inefficiency into a decision.
