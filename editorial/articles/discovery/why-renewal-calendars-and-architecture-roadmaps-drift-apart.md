---
hub: discovery
record_id: DISC-349
slug: why-renewal-calendars-and-architecture-roadmaps-drift-apart
title: Renewal calendars are disconnected from architecture roadmaps
description: The roadmap says retire, but the contract renews for another year. How to join renewal dates and notice deadlines to the technology plan, especially as AI tools multiply.
lead: The roadmap says retire, but the contract renews for another year. How to join renewal dates and notice deadlines to the technology plan, especially as AI tools multiply.
category: SaaS & Application Portfolio Management
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: SaaS & Application Portfolio Management
problem_domain: SaaS & Application Portfolio Management
problem_owner: Head of IT or operations director owning the roadmap, with procurement or finance owning the renewal calendar
budget_owner: Financial director or CFO
sources:
  - Budgeting FinOps Framework Capability | https://www.finops.org/framework/capabilities/budgeting/
  - Rate Optimization FinOps Framework Capability | https://www.finops.org/framework/capabilities/rate-optimization/
  - Application portfolio assessment guide for AWS Cloud migration - AWS Prescriptive Guidance | https://docs.aws.amazon.com/prescriptive-guidance/latest/application-portfolio-assessment-guide/introduction.html
related:
  - Paying for unused software features because contracts are bundled | /discovery/why-bundled-software-contracts-hide-unused-features/
  - Vendors change packaging and pricing faster than budgets adapt | /discovery/why-vendor-pricing-changes-outrun-software-budgets/
  - Applications are retained because migration effort is unknown | /discovery/why-applications-stay-because-migration-effort-is-unknown/
summary: The roadmap says retire, but the contract renews for another year. How to join renewal dates and notice deadlines to the technology plan, especially as AI tools multiply.
layout: plain
---
The architecture roadmap says the business will move off its old planning tool by the end of the second quarter. The renewal calendar, kept by procurement, shows that the planning tool renews for another twelve months in March, with a notice deadline in December that nobody remembers. The AI assistant licences bought by three departments renew on three different dates, none of which match the review in which the business intends to choose a standard. The plans are sensible. They simply do not know about each other.

This article looks at that operating condition: renewal calendars that are disconnected from architecture roadmaps. It is sharpened by the rapid spread of AI tools, which arrive on short contracts, with separate owners and separate dates.

## The problem in plain language

An architecture roadmap is a statement of intent: which systems the business will keep, replace, merge or retire, and roughly when. A renewal calendar is a record of legal commitment: which contracts end, when notice must be given and what the next term costs. When the two are kept apart, the roadmap can say "retire" while the calendar quietly commits the business for another year. Or the opposite happens: a renewal date arrives with no strategy attached, so the decision is made by whoever happens to see the invoice.

In smaller businesses the roadmap may be a slide or a conversation, and the renewal calendar a spreadsheet or someone's memory. The disconnect is not a software gap but a gap in how two pieces of knowledge are shared.

## What the buyer is actually trying to solve

Technology managers, operations directors and finance leads search for ways to avoid auto-renewals, align technology spending with strategy and decide which tools to standardise. What they want is a single view that answers three questions together: what is the plan for each system, when are we committed until, and what is the next decision we must make?

## Evidence and system mechanism

### Budgeting and forecasting need to share the plan

The FinOps Foundation describes [budgeting](https://www.finops.org/framework/capabilities/budgeting/) as a strategic and ongoing process for setting limits, monitoring and managing technology spending, aligned with business objectives. Its activities include choosing a budgeting cycle, setting thresholds for acceptable variance between budget and forecast, and defining how exceptions are handled when a budget has to change out of cycle. A renewal that contradicts the roadmap is precisely such an exception, and it is much cheaper to plan for it than to explain it afterwards.

### Commitments are a planned lever

In the same framework, [rate optimisation](https://www.finops.org/framework/capabilities/rate-optimization/) covers negotiated and commitment discounts used to meet strategic, operational and budgetary objectives. Commitments are valuable when they match a plan and costly when they outlive it. The principle for any business buying software: commit for as long as the roadmap supports, and no longer.

### Assessment is continuous, not a one-off

AWS's [application portfolio assessment guide](https://docs.aws.amazon.com/prescriptive-guidance/latest/application-portfolio-assessment-guide/introduction.html) describes portfolio assessment as a foundational activity whose results are a key input to other workstreams, and speaks of continuous assessment. A roadmap built on an assessment from two years ago, and a renewal calendar built from invoices, will drift apart unless somebody links them.

### Warning signs

- A tool the roadmap says will be retired has just been renewed for twelve months.
- Finance sees renewal notices before the technology owner does; see [why contract renewals surprise finance and operations](/discovery/why-contract-renewals-surprise-finance-and-operations/).
- Several teams buy the same kind of AI or automation tool on different dates with different terms.
- Nobody can state the next three decisions the roadmap needs and the dates by which they must be taken.

## Problem owner and why-now trigger

The person who owns the technology plan, whether that is a head of IT, an operations director or an external adviser, owns the roadmap. Procurement, the finance manager or an office administrator often owns the renewal calendar. The financial director owns the spend. These are different people, which is the structural reason the two documents diverge.

The trigger today is the proliferation of AI tools. Departments buy assistants, transcription tools, drafting tools and automation add-ons on monthly or annual plans, often on company cards. Each purchase adds a renewal date, a data-handling question and a possible overlap with something already owned, while the business is still deciding what its standard should be. Every unmanaged renewal narrows the choices the roadmap hopes to keep open.

## Economic consequence

The visible cost is paying for a term the business had already decided to leave. The less visible cost is lost leverage: a roadmap decision that cannot be executed until a contract ends is delayed by months or a year, and the benefits of the change, such as lower cost or a simpler process, are delayed with it. Short-term purchases that were meant to be experiments settle into the baseline because their renewal passed unreviewed. See [supplier contracts renewing without review](/impact/supplier-contracts-renewing-without-review/) for the pattern in procurement more broadly.

## Root cause

- **Two documents, two owners.** The roadmap lives with technology and the calendar with procurement or finance.
- **No decision dates in the roadmap.** The plan states a direction but not the notice deadline by which a choice must be made.
- **Purchases outside the calendar.** Tools bought on cards or by departments never reach the central record; compare [why IT asset registers miss cloud and SaaS services](/discovery/why-it-asset-registers-miss-cloud-and-saas-services/).
- **Roadmap not translated into contract terms.** Contracts are renewed for default periods rather than the periods the plan can support.

## Practical intervention

1. **Join the two lists.** Add three columns to the renewal calendar: roadmap intention (keep, replace, merge, retire, review), target date, and decision owner. Add the notice deadline next to the renewal date.
2. **Set decision dates, not only renewal dates.** For every contract, record the latest date to decide, normally the notice deadline minus thirty days, and put that date in the diary of the decision owner.
3. **Match term to intention.** If the roadmap says retire in nine months, negotiate a shorter term, a month-to-month arrangement or a no-auto-renew clause, even at a slightly higher unit price.
4. **Capture the tools that arrive on cards.** Ask finance to list recurring card payments each quarter and add every new subscription, especially AI tools, to the calendar with an owner and an intention.
5. **Review quarterly together.** Put the owners of the roadmap, the calendar and the budget in one short meeting that looks forward two quarters: which decisions are due, which renewals conflict with the plan, which experiments must now be adopted or ended. The thinking is outlined in [how software renewal dates can force better technology decisions](/insights/how-software-renewal-dates-can-force-better-technology-decisions/).
6. **Update the roadmap when a renewal changes the facts.** If the business must renew, record why, the new end date and what will be different next time.

### Trade-offs

Shorter terms and flexible clauses often cost more per month, and a vendor may refuse them to smaller customers. A roadmap that is too rigid can also force a decision before the business has enough information. Use the calendar to protect options rather than to enforce a plan mechanically: where the roadmap is uncertain, a short term is a form of insurance.

### An illustrative example

Illustrative: a Pretoria engineering firm with about 80 staff planned to standardise on one meeting-transcription and note-taking tool. A card-statement review showed four separate subscriptions, bought by different teams, with renewals in February, April, July and November. The IT manager added the four to the renewal calendar, marked three as retire, and moved the fourth to the chosen standard at its next renewal. Two of the others were cancelled before the notice deadline, and the third was allowed to lapse at the end of its month-to-month term. The roadmap's intention and the contracts finally matched.

## Diagnostic questions

- Can you see, in one place, each contract's end date, notice deadline and roadmap intention?
- Who is responsible for deciding before each notice deadline?
- Which renewals in the next six months contradict your current plan?
- How many AI or automation subscriptions were bought by individual departments, and when does each renew?
- When did the roadmap owner last meet the person who keeps the renewal calendar?

## What good looks like

The renewal calendar and the roadmap are one view. Every commitment shows what the business intends to do with it, who decides, and by when. Contract terms match planned lifespans. New tools join the calendar when they are bought, not when they renew. The business spends its renewal moments choosing, not reacting; the related ownership discipline is described in [why software renewals need a confirmed business owner](/discovery/why-software-renewals-need-a-confirmed-business-owner/).

## Where Mellorca fits

Mellorca helps businesses build an architecture roadmap that carries decision dates and contract positions, and set up a light review rhythm that links it to procurement and finance, so renewals support the plan instead of undermining it.

## Method note

FinOps and AWS material is used as a reference for how budgeting, commitments and portfolio assessment are managed; it does not prescribe terms for any particular contract. The example is illustrative rather than a client case.
