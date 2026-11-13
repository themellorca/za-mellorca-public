---
hub: discovery
record_id: DISC-452
slug: automation-candidates-are-chosen-by-novelty-instead-of-business-value
title: Automation candidates are chosen by novelty instead of business value
description: Automation projects are often picked because they are new, not because they pay. How to rank automation candidates by demonstrable business value.
lead: A focused exploration of why automation initiatives are often selected for novelty rather than demonstrable business value, and how to implement value-driven prioritisation for automation portfolios.
category: AI, Automation & Agent Operations
published_date: 2026-10-02
updated_date: 2026-10-02
eyebrow: AI, Automation & Agent Operations
problem_domain: AI, Automation & Agent Operations
problem_owner: Automation Strategy Team
budget_owner: PMO
sources:
  - Holistic enterprise automation techniques (HEAT) - Power Automate | https://learn.microsoft.com/en-us/power-platform/guidance/automation-coe/heat
  - Overview of the Automation Kit - Power Automate | https://learn.microsoft.com/en-us/power-automate/guidance/automation-kit/overview/introduction
  - The Green Book | https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government
  - SP 800-53 Rev. 5, Security and Privacy Controls for Information Systems and Organizations - CSRC | https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final
related:
  - Human exception queues grow faster than automated throughput | /discovery/human-exception-queues-grow-faster-than-automated-throughput/
  - Automation success is measured by runs rather than business outcomes | /discovery/automation-success-measured-by-runs-not-business-outcomes/
  - Retired processes leave orphaned automations running | /discovery/retired-processes-leave-orphaned-automations-running/
summary: A focused exploration of why automation initiatives are often selected for novelty rather than demonstrable business value, and how to implement value-driven prioritisation for automation portfolios.
layout: plain
---
Automation programmes are increasingly crowded with new tools and pilot projects. Yet the selection of which automation candidates to pursue is often driven by novelty—the latest algorithm, interface or vendor feature—rather than a clear measurement of business value. This tendency creates a backlog of low-value automations and diverts scarce human and technical resources from high-impact work.

The pattern is not limited to large enterprises. A forty-person distributor can fall into it just as easily as a bank. The owner sees a demonstration of an AI assistant that drafts customer emails, the operations lead wants a chatbot on the website, and meanwhile the accounts team still spends two days every month matching supplier statements by hand. The exciting idea gets the budget. The boring, expensive problem stays where it was.

## The problem in plain language

When teams chase the flashy capability, they neglect to quantify expected outcomes such as cost savings, throughput gains or risk reduction. The result is a portfolio that looks dynamic but delivers limited return on investment.

Novelty is not wrong in itself. New capabilities sometimes do open valuable options. The problem is that novelty becomes the *selection criterion* instead of one input among several. A candidate is chosen because it is interesting to build, easy to demonstrate or favoured by a senior sponsor, and nobody writes down what the business should be able to measure afterwards.

## What you are actually trying to solve

- How to prioritise automation ideas by measurable business value rather than novelty.
- How to govern a portfolio of automation projects to avoid duplication and misaligned investments.
- How to build a decision framework that scales with tool proliferation.

Underneath these questions is a simpler one: of all the things we could automate, which ones would actually change cost, speed, quality or risk in a way we would notice?

## Evidence and system mechanism

The discipline problem is reinforced by a backlog of automation requests that arrive with high enthusiasm but vague value proofs. Without explicit metrics tied to outcomes, governance turns into a negotiation about features rather than impact.

Platform vendors themselves recognise that choosing what to automate is the hard part. Microsoft's [Holistic Enterprise Automation Techniques (HEAT) guidance](https://learn.microsoft.com/en-us/power-platform/guidance/automation-coe/heat) places a "discover and plan" stage before design and build, and notes that it is impossible to automate every process, so the backlog should be managed and candidates picked on expected return. Its [Automation Kit](https://learn.microsoft.com/en-us/power-automate/guidance/automation-kit/overview/introduction) was built around the same idea: an intake app for requesting projects and submitting them for approval, and dashboards to estimate money saved and return on investment once automations are running. You do not need that particular tool, but the sequence matters: intake, evaluation and measurement are part of the automation lifecycle, not paperwork bolted on afterwards.

The mechanism that produces novelty-led selection usually looks like this:

1. Ideas arrive informally—from a vendor demo, a conference, a manager's frustration.
2. There is no common template, so each idea is described in its own terms.
3. Comparison becomes impossible, so the most persuasive or most senior voice wins.
4. Nothing is measured after go-live, so the decision is never tested and the habit repeats.

## Warning signs

- Automation proposals describe the technology ("use an AI agent", "add a bot") before they describe the problem.
- Nobody can say how many hours, errors or days of delay a completed automation removed.
- Several teams have built similar automations independently—see [the same workflow automated by multiple teams](/discovery/the-same-workflow-is-automated-independently-by-multiple-teams/).
- Pilots are celebrated at launch and quietly abandoned months later.
- Staff still do large volumes of manual work in exactly the areas that were "automated", because the automation only handled the easy cases.

## Root causes and practical interventions

- Lack of explicit value criteria in project intake.
- Fragmented tooling without a central governance model.
- Incentives that reward novelty over sustained value.
- Insufficient post-implementation measurement.

Each cause has a practical counter. Value criteria can be added to intake with a one-page template. Fragmentation can be reduced by keeping a single register of automation candidates and live automations, regardless of which tool built them. Incentives can be adjusted by recognising teams for measured outcomes rather than launches. Measurement can be made routine by agreeing, before build starts, what number should move and who will check it.

## A worked example

Consider a mid-sized logistics business with three automation ideas on the table:

| Candidate | Why it was proposed | What the evidence showed |
| --- | --- | --- |
| AI chatbot for the public website | Seen at a trade show; strong executive interest | Low enquiry volume through the website; most customers phone their account manager |
| Automatic proof-of-delivery matching to invoices | Raised by the finance clerk | Several hours of manual matching each week; invoices held back until matching is done, delaying cash collection |
| Driver shift-roster app | Requested by a depot manager | Roster changes are weekly and handled quickly in a spreadsheet; low pain |

Ranked by novelty, the chatbot wins. Ranked by value, proof-of-delivery matching wins clearly, because it removes recurring labour *and* shortens the time to invoice. The roster app is a reasonable idea that can wait. Nothing in this ranking needed complex modelling—only a consistent set of questions applied to each candidate. The method for putting rough numbers on the winning candidate is covered in [how to calculate the business case for automation](/insights/how-to-calculate-the-business-case-for-automation/).

## A simple scoring approach

For small and mid-sized organisations, a light scoring model is usually enough. Score each candidate from one to five on:

- **Volume and frequency**: how often the work happens.
- **Effort per occurrence**: time spent by people today.
- **Cost of error or delay**: what goes wrong when the work is late or wrong.
- **Process stability**: whether the rules are clear and the inputs predictable.
- **Dependency risk**: how many systems, credentials and owners the automation will rely on.

The first three describe value; the last two describe feasibility and risk. Public-sector appraisal guidance such as HM Treasury's [Green Book](https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government) follows the same principle at much larger scale: compare the costs, benefits and risks of different options rather than judging a single favoured option in isolation. Include "do nothing" and "fix the process without automation" as options, because sometimes they win.

The trade-off is that scoring takes some effort and can feel bureaucratic. Keep it short. If a candidate needs more than half an hour to score, the problem is probably not understood well enough to automate yet—which is itself a useful finding. Evidence from the work itself helps here; [finding automation opportunities from operational evidence](/insights/how-to-find-automation-opportunities-from-operational-evidence/) explains where to look.

## What good looks like

A value-driven automation portfolio with explicit return or throughput targets, stage gates and a central library of reusable assets. Prioritisation decisions are documented, auditable and revisited on a regular cadence.

## Where Mellorca fits

Mellorca can support an immediate assessment of the current backlog, propose a governance framework and help implement value-based prioritisation for automation initiatives as part of an end-to-end portfolio programme, including playbooks for stage gates and outcome-driven metrics.

## Diagnostic questions

- Do we have explicit, measurable value targets for each automation candidate?
- Is there a central catalogue or backlog with standardised evaluation criteria?
- Are decisions revisited on a regular cadence with documented rationale?
- Do incentives align with delivering business value rather than novelty?
- Can we name one automation that was stopped or retired because it did not deliver?

## What good looks like (operational definition)

A prioritised automation portfolio where each candidate links to concrete business outcomes, governance checkpoints exist, and reusable components are leveraged to accelerate value realisation. In practice, anyone in the business can see the list of candidates, why each is ranked where it is, and what each live automation has actually delivered.

## What to do first

1. List every automation idea and live automation in one place, including the ones built informally.
2. For each, write one sentence describing the business problem without naming a technology.
3. Apply the five scoring questions above and rank the list.
4. For the top two or three, record a baseline today—hours, errors, cycle time—so that results can be checked later.
5. Set a review date, and be willing to drop items that no longer earn their place.

None of this rules out experimenting with new technology. It simply makes sure that experiments are labelled as experiments, and that the bulk of automation effort goes where the business will feel it.
