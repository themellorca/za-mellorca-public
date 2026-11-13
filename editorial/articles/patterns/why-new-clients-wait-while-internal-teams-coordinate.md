---
hub: patterns
record_id: PAT-129
slug: why-new-clients-wait-while-internal-teams-coordinate
title: Why new clients wait while internal teams coordinate
description: The deal is signed and the client eager, yet nothing happens while sales, finance, operations and IT pass details around. Here is where the time goes.
lead: The deal is signed, the client is eager and nothing happens, because sales, finance, operations and IT are still passing the details between themselves. Here is where the time goes.
category: Data, Reporting & Management Visibility
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Data, Reporting & Management Visibility
pattern_family: Data, Reporting & Management Visibility
observable_condition: After a contract is signed the client waits days or weeks for a start while sales, finance, operations and IT pass details between themselves and ask for the same information again.
primary_identification: Coordination delay at client start: onboarding is a chain of undocumented handovers with no single owner, record or shared view of progress.
commercial_value_dimensions: Time to revenue, client retention, onboarding capacity and staff effort
sources:
  - What Is Workflow Automation? - IBM | https://www.ibm.com/think/topics/workflow-automation
  - Get started with Power Automate approvals - Power Automate | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
  - Pay As You Earn - South African Revenue Service | https://www.sars.gov.za/types-of-tax/pay-as-you-earn/
related:
  - When every department reports the same metric differently | /patterns/when-every-department-reports-the-same-metric-differently/
  - The cost of manual consolidation across workbooks | /patterns/the-hidden-cost-of-combining-figures-from-many-workbooks-by-hand/
  - When sales data is complete but the pipeline is still unreliable | /patterns/when-sales-data-is-complete-but-the-pipeline-is-still-unreliable/
  - When onboarding depends on a checklist in someone’s head | /patterns/when-the-onboarding-checklist-exists-only-in-one-persons-memory/
summary: The deal is signed, the client is eager and nothing happens, because sales, finance, operations and IT are still passing the details between themselves. Here is where the time goes.
layout: plain
---
## Observable condition

The contract is signed on a Monday. The client expects to start. By Friday they have been sent three emails asking for the same documents, a welcome call has been postponed and nobody has told them when work will begin. Internally, nothing is idle: sales has passed the details to finance, finance is waiting for a credit check, operations is waiting for finance, and IT is waiting to be told what to set up.

Everyone is busy, and the client is waiting. The delay is not caused by any single slow person. It is the time taken by coordination: handing information from one team to the next, confirming it, correcting it and handing it on again.

An illustrative example: a Cape Town facilities-management company wins a three-year cleaning and maintenance contract for a retail group. The service agreement says work begins on the first of the month. Account setup needs a vendor form for the client's supplier portal, a site list from the client, a rate card entered into the billing system, a staffing plan, uniforms and a safety induction. Each step belongs to a different person, and the first week of service is delivered on goodwill and phone calls.

## Realisation

The realisation is that, from the client's side, the business is a single organisation, but from the inside it is a relay race with no one holding the baton for the whole course. Every handover works most of the time. The trouble is that each one adds waiting: for the person to be available, for the missing detail to be chased, for the previous step to be confirmed.

In lean thinking, this is waiting waste. It is time during which the work is not being improved or processed, but the customer's need is still unmet. Value-stream mapping exists precisely to show that the elapsed time from signature to first delivery is often many times longer than the hands-on time, with most of the difference spent between steps.

For a new client, waiting has an unusual cost. This is the moment when expectations are being set, and the experience of those first weeks is what they remember when they decide whether to renew or recommend.

**Realisation prompt:** for your last three new clients, how many days passed between signature and first real delivery, and how many of those days were spent doing work rather than waiting for someone?

## Identification

This is a pattern of coordination delay at client start. The visible symptom is a slow, inconsistent start for each new client. The common assumption is that onboarding takes as long as it takes, or that the client was slow to provide information. The structural cause is that onboarding is a sequence of undocumented handovers between departments, without one owner, one checklist or one shared view of progress.

The published Pattern [the cost of delayed handoffs after a deal is won](/patterns/the-cost-of-delayed-handoffs-after-a-deal-is-won/) describes the cost at the point of handover. The Pattern [why does winning a customer create an internal scramble](/patterns/why-does-winning-a-customer-create-an-internal-scramble/) describes the scramble itself. This Pattern concentrates on the waiting time between internal steps, and on why it is invisible to the people causing it.

## Diagnosis

- **Nobody owns the client's start.** Each department owns its part. No one is responsible for the elapsed time from signature to first delivery.
- **The handover is a message, not a record.** Sales passes details by email or chat. Whatever was omitted is discovered later, by someone who has to ask.
- **Tasks run in sequence that could run in parallel.** Credit approval, site visits and staffing could proceed at the same time, but a habit of waiting for "the previous step" serialises them.
- **Approvals depend on availability.** A single signatory on leave stops everything behind them. Microsoft's documentation on approvals in [Power Automate](https://learn.microsoft.com/en-us/power-automate/get-started-approvals) illustrates how routing a request to the right person automatically, with reminders, removes much of this waiting.
- **The client is asked repeatedly.** Each department collects what it needs from the client directly, and the client supplies the same company details several times. The Pattern [the hidden cost of asking customers for the same information twice](/patterns/the-hidden-cost-of-asking-customers-for-the-same-information-twice/) covers this.
- **Progress is invisible.** There is no place to see which step a given client is on. Updates are obtained by interrupting colleagues, which creates yet more coordination work.
- **Compliance steps are bolted on.** Verification of identity, tax status or consent is often done late and by hand. SARS, for example, requires accurate tax details for VAT and withholding on supplier and client records, and late discovery of a missing number holds up billing.

## Commercial impact

The commercial value at stake is time to revenue, client retention, onboarding capacity and staff effort.

The most direct cost is delayed revenue. If invoicing starts when service starts, every extra day of coordination is a day of income postponed. For a business onboarding several clients a month, the accumulated delay is measurable in rand terms and can be compared with the cost of fixing the process.

The second cost is early churn and dissatisfaction. A client who spends their first month chasing updates forms a lasting impression of how the supplier operates. Some will absorb it, but others begin to look at alternatives long before the first renewal.

The third cost is capacity. If every onboarding needs senior staff to chase and intervene, the business can only onboard as many clients as those senior people can supervise. The Insight [how to design a customer onboarding workflow that scales](/insights/how-to-design-a-customer-onboarding-workflow-that-scales/) addresses this constraint directly.

## Common misidentification

A common response is to blame the client for slow document returns. Sometimes that is fair, but often the client is waiting on a request that was unclear, duplicated or sent late. Another response is to hire an onboarding coordinator. A coordinator can help, but if they have no shared checklist or system to work from, they become the human relay and the single point of failure.

A third response is to add a weekly onboarding meeting. A meeting surfaces delays once a week, which is too slow for a process measured in days, and it takes the same people away from the tasks they are meant to do.

## Possibility

In a better state, signing the contract creates a single onboarding record. It carries everything captured in the sales process, so nothing is retyped. A standard checklist assigns each task to a role, with due dates counted from signature. Tasks that can run together start together. Approvals reach the right person, with a deputy if they are away. Everyone, including the account manager, can see which tasks are done and which are waiting.

The client receives one request for information, one schedule and a start date they can rely on. Internal teams still coordinate, but they do so against a shared plan rather than through a chain of messages.

## Intervention

1. **Measure the elapsed time.** For recent clients, record the date of signature, each step completed and the first delivery. Separate working time from waiting time.
2. **Map the actual path.** Draw who hands what to whom, including informal steps. The Insight [how to stop sales-to-delivery handoffs from breaking](/insights/how-to-stop-sales-to-delivery-handoffs-from-breaking/) gives a useful starting frame.
3. **Name one owner.** Make one person accountable for time from signature to first delivery, with authority to ask other teams for action.
4. **Capture once, share everywhere.** Collect client details at the sales stage in a structured form and carry them forward automatically.
5. **Parallelise and automate.** Run independent steps at the same time, and route approvals and reminders automatically, with named deputies.
6. **Show progress.** Provide a simple status view for staff and, where useful, for the client.

## Diagnostic questions

- How many days pass, on average, between signature and first delivery?
- Who is accountable for that number?
- How many times is a new client asked for their company details?
- What happens to onboarding when one named approver is away?
- Can the account manager see, without asking anyone, what is still outstanding?

## Bottom line

New clients usually wait because the work is being passed around, not because anyone is idle. Giving the start of the relationship one owner, one record and one plan removes most of the waiting between teams, brings revenue forward and lets the first impression match the quality of the service that follows.
