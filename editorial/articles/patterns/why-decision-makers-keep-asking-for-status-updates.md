---
hub: patterns
record_id: PAT-058
slug: why-decision-makers-keep-asking-for-status-updates
title: Why decision-makers keep asking for status updates
description: Repeated status questions show which information the business fails to capture as work happens. Treat them as a specification and make status a by-product.
lead: Repeated status questions show which information the business fails to capture as work happens. Here is how to read those questions as a specification and make status a by-product of the work.
category: Reporting & Operational Visibility
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Reporting & Operational Visibility
pattern_family: Reporting & Operational Visibility
observable_condition: Directors and managers repeatedly ask colleagues whether specific pieces of work have happened, and answers require someone to stop and look.
primary_identification: Status-capture gap: workflow stages are undefined or recorded after the fact, so status is not a by-product of doing the work and is not visible or pushed to decision-makers.
commercial_value_dimensions: Decision speed, management capacity, responsiveness and risk
sources:
  - Scrum Guide - Scrum Guides | https://scrumguides.org/scrum-guide.html
  - Set data alerts in the Power BI service - Power BI | https://learn.microsoft.com/en-us/power-bi/create-reports/service-set-data-alerts
  - How to set performance metrics for your service | https://www.gov.uk/service-manual/measuring-success/how-to-set-performance-metrics-for-your-service
related:
  - Why teams spend more time preparing reports than using them | /patterns/why-teams-spend-more-time-preparing-reports-than-using-them/
  - Why reporting delays become decision delays | /patterns/why-reporting-delays-become-decision-delays/
  - When your dashboard is really a manually updated spreadsheet | /patterns/when-your-dashboard-is-really-a-manually-updated-spreadsheet/
summary: Repeated status questions show which information the business fails to capture as work happens. Here is how to read those questions as a specification and make status a by-product of the work.
layout: plain
---
## Observable condition

The questions are always similar. Has the quote gone out? Did the client approve the variation? Is the delivery booked? Have we been paid? Is the new hire's laptop ready? Directors, department heads and project leads ask them by message, in corridors and at the start of meetings. Each answer takes someone a few minutes to find, and many questions are passed down a level before they can be answered.

The people being asked often find it irritating. They feel micromanaged, or they feel that the information is obviously available somewhere. The people asking find it irritating too. They would rather not have to ask, but they need the answer to make a decision, and there is nowhere else to get it.

So the questions keep coming, week after week, and both sides quietly accept them as part of how the business runs.

## Realisation

The realisation is that a status question is a request for information the business should already hold. Every time a decision-maker asks whether something has happened, the organisation is revealing that the event either was not recorded when it happened, or was recorded somewhere the decision-maker cannot see or does not trust.

Seen that way, the repeated questions are not a management style. They are a specification. Each one names a piece of status that matters to someone with authority to act. Collected over a few weeks, they describe exactly what the business's systems are failing to make visible.

The Scrum Guide puts the underlying principle plainly for software teams: important decisions are based on the perceived state of the work, and when that state has low transparency, decisions can diminish value and increase risk. The same holds for a sales order, a project milestone or a supplier payment.

**Realisation prompt:** write down every status question you asked or were asked this week. How many could have been answered by looking at a system?

## Identification

This is a status-capture problem. The visible symptom is repeated requests for updates. The structural issue is that status is not produced as a by-product of doing the work. Work is done in one place, often email, phone or a personal list, and status is reported separately, if at all.

The wider principle is covered in [why chasing people for updates is a systems failure](/insights/why-chasing-people-for-updates-is-a-systems-failure/). This article focuses on a narrower point: what is missing at the moment the work happens, and how the questions themselves can be used to design the fix.

## Diagnosis

- **Work happens outside the system of record.** A quote is emailed from someone's inbox; a delivery is booked by phone; a payment is confirmed in the banking app. The business system is updated later, in a batch, or not at all.
- **Status steps are not defined.** The workflow has no agreed stages such as quoted, approved, scheduled, delivered and invoiced, so there is nothing consistent to record or display.
- **Visibility is limited by access.** The information exists in a departmental tool the decision-maker cannot open, or would need training to read.
- **Nothing is pushed.** Even when status is recorded, nobody is notified when it changes. Decision-makers must pull it, and the easiest way to pull is to ask a person.
- **Trust has worn thin.** If the system has been wrong before, people ask a colleague to confirm, even when the system is right.

## An illustrative example

The following scenario is illustrative and does not describe a specific organisation. A Johannesburg shopfitting company runs projects for retail clients. Its project managers track progress in their own spreadsheets and email threads. The commercial director, who approves variations and manages client relationships, asks each project manager several times a week whether drawings are signed off, materials ordered and installation dates confirmed. When the company lists those questions over a month, it finds that almost all of them concern six milestones. None of the six is recorded anywhere the director can see. The fix starts with those six fields, not with a new reporting tool.

## Commercial impact

The commercial value at stake is decision speed, management capacity, responsiveness and risk. Each status question delays a decision until the answer arrives. Each answer takes time from someone doing operational work, often a person who has to stop, search and reply. Across a management team, this adds up to a significant share of the working week, though the size varies and should be measured rather than assumed. The labour side is explored in [the visibility cost of managers chasing status updates](/impact/managers-chasing-status-updates-visibility-cost/).

There is a quality cost as well. Answers given from memory under time pressure are sometimes wrong, and decisions made on them inherit the error.

## Common misidentification

The most common misreading is that decision-makers are too controlling and should trust their teams. Trust is important, but it does not remove the need for information. A director deciding whether to accept a new order needs to know the state of existing commitments, whoever is responsible for them.

The second misreading is that the team needs to send better updates. Weekly status emails can reduce some questions, but they are another manual reporting task, out of date as soon as they are sent. The aim is not more reporting; it is status that exists without anyone having to report it. The difference is the subject of [the difference between having data and having visibility](/patterns/the-difference-between-having-data-and-having-visibility/).

## Possibility

In a better state, the key stages of each workflow are defined, and moving from one stage to the next is recorded as part of doing the work: sending the quote from the system marks it as sent, confirming the delivery marks it as booked. Decision-makers can see the current stage of anything they care about, and they are notified when something important changes or stalls.

Tools many businesses already use support this. Microsoft [Power BI](https://learn.microsoft.com/en-us/power-bi/create-reports/service-set-data-alerts), for example, can send alerts when a figure on a dashboard crosses a threshold, though such alerts only work on data that is actually refreshed. The UK Government's service manual recommends using dashboards for decision-making and alerts for significant changes, alongside a small set of core measures. The principle is the same at any scale: show the state, and signal the exceptions.

## Intervention

1. **Collect the questions.** For three or four weeks, log every status question asked by decision-makers, who asked it and who answered.
2. **Group them into stages.** Most questions will cluster around a handful of milestones in a few workflows.
3. **Define those stages formally.** Agree names, meanings and who moves work from one stage to the next.
4. **Capture status where work happens.** Change the workflow so that the action itself updates the status, rather than relying on a later update.
5. **Give decision-makers a view.** Provide a simple, trusted view of current stages, with access for the people who ask.
6. **Notify on exceptions.** Alert the right person when something stalls or misses a date, rather than broadcasting every change.

## Diagnostic questions

- Which status questions are asked most often in your business, and by whom?
- Where is the answer to each one recorded today, if anywhere?
- Is status updated at the moment work happens, or afterwards?
- Could a decision-maker check the stage of an order or project without asking a person?
- How would anyone know that a piece of work had stalled?

When decision-makers keep asking for updates, the questions are telling the business exactly which information its systems should be holding. The practical description of what changes for staff is in [what changes when status updates stop being a chore](/moments/what-changes-when-status-updates-stop-being-a-chore/).
