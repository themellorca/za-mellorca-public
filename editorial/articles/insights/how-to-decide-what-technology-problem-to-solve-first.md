---
hub: insights
record_id: INS-476
slug: how-to-decide-what-technology-problem-to-solve-first
title: How to decide what technology problem to solve first.
description: A practical framework for prioritising digital systems problems by business impact, dependency, urgency and implementation value.
lead: When everything needs improvement, starting with the loudest complaint or newest technology usually produces a fragmented roadmap. Prioritisation should follow business impact and system dependency.
category: Systems & Strategy
published_date: 2026-08-31
updated_date: 2026-08-31
eyebrow: Article
page_title: How to Decide What Technology Problem to Solve First | Mellorca
tags:
  - Prioritisation
  - Roadmap
  - Technology Value
cta_label: Talk to Mellorca
cta_href: /contact/
side_title: Topics
sources:
  - https://assets.publishing.service.gov.uk/media/698dbcd17da91680ad7f4308/The_Green_Book_2026.pdf | https://assets.publishing.service.gov.uk/media/698dbcd17da91680ad7f4308/The_Green_Book_2026.pdf
  - Plan for AI adoption - Cloud Adoption Framework | https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/plan
  - The Government Data Quality Framework | https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework
related:
  - How to separate urgent systems problems from merely annoying ones | /insights/how-to-separate-urgent-systems-problems-from-merely-annoying-ones/
  - How to decide which software to remove | /insights/how-to-decide-which-software-to-remove/
  - Why technology spend does not automatically create business value | /insights/why-technology-spend-does-not-automatically-create-business-value/
---
Businesses rarely have one digital problem. They have a queue: the CRM needs cleaning, reporting is manual, onboarding is slow, systems do not connect, an automation keeps failing, teams want AI and an old spreadsheet has quietly become critical infrastructure.

The difficult question is sequencing. Budget, attention and change capacity are limited, and the order in which problems are tackled shapes whether later work succeeds or has to be redone.

> The first project should not be the most fashionable problem. It should improve the conditions for everything that follows.

## Why prioritisation goes wrong

Most technology backlogs are assembled from requests. Each department brings the problem it feels most, often framed as a product it would like to buy. Vendors add their own framing. Leadership adds strategic themes. The result is a list of solutions competing for money, with the underlying problems and their dependencies left implicit.

When that list is ranked by who argues most persuasively, three things tend to happen: visible problems beat expensive ones, new capability beats foundations, and projects collide because one depends on another that has not been done.

## Start with operating consequences

Translate every technology complaint into a business consequence. "The CRM is messy" becomes lost follow-up, unreliable forecasting or repeated administration. "We need integration" becomes duplicated data entry and inconsistent customer status. "We need AI" becomes a specific workflow where time, quality or capacity could improve.

If the consequence cannot be articulated, the problem is not yet ready to compete for investment.

Include the cost of leaving things as they are. The UK Treasury's [Green Book](https://assets.publishing.service.gov.uk/media/698dbcd17da91680ad7f4308/The_Green_Book_2026.pdf) requires every appraisal to carry a business-as-usual option forward as a benchmark, and stresses that this does not mean doing nothing: it describes what is expected if current arrangements simply continue. A problem that is getting worse as volume grows has a different priority from one that is stable.

## Score four dimensions

### Impact

How much cost, delay, error, customer friction, risk or management effort does the problem create?

### Frequency

A small defect repeated thousands of times may deserve attention before a dramatic problem that occurs twice a year.

### Dependency

Does fixing this unlock other improvements? Data quality, identity, system-of-record decisions and integration architecture often sit upstream of automation and AI.

### Feasibility

Can the organisation make a meaningful improvement with available time, budget, ownership and technical capability?

Keep the scoring simple and visible. A three-point scale on each dimension, with a sentence of evidence for each score, is more useful than an elaborate weighted model nobody trusts. The point is to make the reasoning reviewable, not to manufacture precision.

## Fix foundations before accelerators

Current guidance from several directions makes the same point. Microsoft's [Cloud Adoption Framework](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/plan) advises organisations to assess skills, data assets and infrastructure before committing to AI use cases, and to rank use cases by strategic value and implementation feasibility rather than ambition alone; it states that AI projects fail when organisations attempt implementations beyond their technical maturity or data availability. The UK government's [Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework) describes data quality as fitness for purpose and warns that poor or unknown quality data undermines trust and leads to poor outcomes.

That means an AI initiative may be strategically important but still be the wrong first project if the workflow is undefined and source data cannot be trusted. Mellorca's view is that integration and data are usually where AI ambition meets reality; see [your AI strategy has an integration problem](/insights/your-ai-strategy-has-an-integration-problem/).

## Look for compound-value projects

The strongest priorities solve a painful problem and improve the architecture at the same time. Establishing a clear customer system of record can improve reporting today while making future automation safer. Redesigning onboarding can reduce delays now while creating a structured workflow that later supports AI.

These projects have compound value because they create reusable capability.

### An illustrative comparison

The following is a hypothetical example. A business has three candidates: an AI assistant for sales, an integration between the CRM and the finance system, and a new reporting dashboard. The assistant scores highest on enthusiasm. The integration scores highest on dependency, because both the dashboard and the assistant would otherwise draw on customer and invoice data that disagree between systems. Doing the integration first makes the dashboard credible and gives the assistant trustworthy data to work from. Doing it last means building the other two on numbers that will later change.

## Do not confuse urgency with noise

Executives often hear the problems that create the most complaints. Quiet problems can be more expensive: repeated manual reconciliation, small delays at every handoff, software nobody owns or a critical process dependent on one employee.

A systems audit helps make invisible cost visible before prioritisation decisions are made. For method, see [how to calculate the real cost of a repetitive task](/insights/how-to-calculate-the-real-cost-of-a-repetitive-task/).

## Allow for optimism

Estimates for the favoured project are usually the most hopeful. The Green Book names this optimism bias: costs and durations tend to be higher, and benefits lower, than first anticipated, and appraisers are told to adjust for it explicitly. Apply the same correction across the whole shortlist so that the most exciting option is not also the one with the most generous assumptions. Ignore sunk costs too: money already spent on a stalled platform is not a reason to rank its rescue first.

## Build a sequence, not a wish list

A useful roadmap shows dependencies. Diagnose before redesign. Define systems of record before building integrations. Stabilise data before asking AI to act on it. Redesign a broken process before automating it. Establish monitoring before treating an automation as business-critical.

This is not slower. It reduces rework.

Review the sequence periodically rather than fixing it once. Completing a foundation project changes the feasibility and impact of everything that depended on it, and new evidence from operations may move a quiet problem up the list. A quarterly review against the same four dimensions keeps the roadmap honest without turning it into a permanent debate.

## Trade-offs

Foundations-first sequencing has a real cost: early phases can look unglamorous, and stakeholders waiting for visible change may lose patience. Pair each foundation project with a visible outcome it enables, and keep the first phase short enough to show progress. Equally, do not let "foundations" become an endless programme; each one should be justified by the specific improvements it unlocks.

## Warning signs

- The roadmap lists products rather than problems.
- No item states what it depends on or what it enables.
- Every department has one project, regardless of impact.
- The AI initiative has no named source data or owning workflow.
- Success measures are delivery dates rather than operating outcomes.

## What better looks like

The organisation can explain why each project exists, what operating outcome it should change, what it depends on, what it enables next and how success will be measured. Technology investment becomes a sequence of capability improvements rather than a collection of purchases.

## When to act

If the roadmap is mostly vendor names, departmental requests or disconnected AI ideas, prioritisation has not yet happened. The organisation needs a systems-level view before committing more capital.
