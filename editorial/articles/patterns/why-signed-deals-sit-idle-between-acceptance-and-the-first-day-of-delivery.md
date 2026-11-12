---
hub: patterns
record_id: PAT-131
slug: why-signed-deals-sit-idle-between-acceptance-and-the-first-day-of-delivery
title: Why Signed Deals Stall Before Delivery Begins
description: The contract is signed, yet nothing happens for days. The gap between acceptance and delivery is where goodwill and early revenue leak away. Here is why it opens and how to close it.
lead: The contract is signed, yet nothing happens for days. The gap between acceptance and delivery is where goodwill and early revenue leak away. Here is why it opens and how to close it.
category: Sales, CRM & Revenue Operations
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Sales, CRM & Revenue Operations
pattern_family: Sales, CRM & Revenue Operations
observable_condition: A customer signs, and then days or weeks pass before anyone from delivery makes contact or begins work, while the customer waits and sometimes chases.
primary_identification: A missing start trigger: acceptance does not automatically create work for delivery, and the information delivery needs is incomplete or held with the salesperson.
commercial_value_dimensions: Time to first revenue, cash flow, customer confidence, early-stage cancellations and delivery capacity planning
sources:
  - Understand the sales process | https://learn.microsoft.com/en-us/dynamics365/sales/nurture-sales-from-lead-order-sales
  - Prospect-to-cash in dual-write - Finance & Operations - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/data-entities/dual-write/dual-write-prospect-to-cash
  - Overview of cloud flows - Power Automate | https://learn.microsoft.com/en-us/power-automate/overview-cloud
related:
  - Why Sales Forecasts Change Depending on Who You Ask | /patterns/why-the-sales-forecast-depends-on-which-person-you-ask/
  - Why Qualified Opportunities Go Cold During Internal Handoffs | /patterns/why-qualified-opportunities-go-cold-during-internal-handoffs/
  - Why New Clients Wait While Internal Teams Coordinate | /patterns/why-new-clients-wait-while-internal-teams-coordinate/
summary: The contract is signed, yet nothing happens for days. The gap between acceptance and delivery is where goodwill and early revenue leak away. Here is why it opens and how to close it.
layout: plain
---
## Observable condition

The customer signs on a Tuesday. The salesperson is delighted, tells the team, and moves to the next prospect. On Thursday the customer sends a polite message asking when to expect a call. On the following Wednesday, someone in delivery finds the signed document in a forwarded email and asks the salesperson for the missing details. Work begins two weeks after the signature, and the customer's first real experience of the business is waiting.

No one has dropped the ball in a way that anyone could point to. The salesperson did their job and delivery was busy with existing clients. The deal simply sat between them.

An illustrative example: a Pretoria company that installs security and access-control systems. A signed quote goes into the sales inbox. Installation scheduling happens from a separate list, and a clerk adds new jobs to it once a week from the forwarded quotes.

## Realisation

The realisation is that a signature is a commercial event, not an operational one. Nothing in the business is built to turn it into work. The deal is closed in the sales person's head and, if you are lucky, in a spreadsheet, but the delivery team has no way of knowing it exists until someone tells them.

[Microsoft's documentation on following a customer from lead through to order](https://learn.microsoft.com/en-us/dynamics365/sales/nurture-sales-from-lead-order-sales) describes the order as a distinct step in a connected sequence. The idea carries over to any business: acceptance should create a defined next record that delivery can see, not rely on a colleague remembering to pass on a message.

It also shows a cost that is easy to miss. The idle days are not neutral. Revenue that could have started is delayed, the customer's enthusiasm is cooling, and the early goodwill the sales effort built is being spent on silence.

**Realisation prompt:** for your last five signed deals, count the days from acceptance to the first action by delivery. What filled those days?

## Identification

This is a pattern of a missing start trigger. The visible symptom is silence after signing. The common assumption is that delivery is overloaded or the salesperson is slow to hand over. The structural cause is that the hand-over depends on a person choosing to do it, and the information delivery needs is incomplete when it does arrive.

The Pattern [the cost of delayed handoffs after a deal is won](/patterns/the-cost-of-delayed-handoffs-after-a-deal-is-won/) looks at the cost of late handovers. This pattern looks at why the gap opens in the first place, and what the customer sees in it.

## Diagnosis

- **Acceptance creates nothing.** A signed quote lands in an inbox or a folder. No job, task or order is created, and nobody is notified.
- **The hand-over is a favour.** The salesperson forwards details when they remember. Their incentive ends at the signature, and their attention is on the next deal.
- **Delivery needs details sales never captured.** Site access, contact person, purchase order number, required dates and payment terms are often missing at signature, so delivery must go back to the customer with questions the customer thought were already answered.
- **Information is retyped.** The accepted terms are re-entered into the order, project or job system by hand, which adds a delay and a chance of error. The Discovery note [accepted quotes that do not create fulfilment work](/discovery/accepted-quotes-that-do-not-create-fulfilment-work/) describes this precisely.
- **Capacity is invisible at the moment of sale.** Sales promises a start date without seeing the delivery calendar, so the date is wrong before the work is ever scheduled.
- **Finance waits too.** Invoicing cannot begin until delivery has begun, so the delay pushes cash further out. [Microsoft's description of its prospect-to-cash process](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/data-entities/dual-write/dual-write-prospect-to-cash) shows how order, delivery and invoice are meant to follow in one connected chain.

## Commercial impact

The commercial value at stake is the speed of first revenue, cash flow, customer confidence and the likelihood the deal survives its first month.

The first cost is time to cash. Each idle day pushes back the first delivery and therefore the first invoice. For a business with several signed deals a month, the cumulative delay can mean a meaningful amount of working capital tied up in work that is agreed but not started.

The second cost is cancellation and second-guessing. A customer who has signed and then heard nothing begins to wonder whether they chose well. Some ask for changes, some ask about cancellation terms, and some quietly take a competitor's follow-up call.

The third cost is the effort of catching up. Chasing a missing detail from the customer is awkward after the customer has already provided it once. The Impact note [manual customer onboarding by email checklists and the revenue delay it causes](/impact/manual-customer-onboarding-email-checklists-revenue-delay-cost/) shows how that effort accumulates.

The fourth is lost visibility. Because no one can see signed work waiting to start, delivery cannot plan its capacity, and the business is surprised by a wave of starts it could have anticipated.

## Common misidentification

The common response is to ask salespeople to hand over faster or to give delivery a bigger team. The first depends on memory and goodwill, which fail under pressure. The second adds cost without addressing the gap, since idle time between acceptance and start will exist at any size. A third reaction is to treat the delay as the customer's fault for not supplying information, when the real cause is that the business never asked for it at the right time.

## Possibility

In a better state, acceptance triggers the next step without anyone having to remember. A signed quote becomes an order or job record, delivery is notified, and the customer receives an acknowledgement with a named contact and the next date. The information delivery needs is collected before or at the moment of signing, using a short checklist the salesperson completes.

[Microsoft's documentation on cloud flows in Power Automate](https://learn.microsoft.com/en-us/power-automate/overview-cloud) describes actions that run automatically when something happens, such as creating a record or sending a notification when a document is signed. Whether that is done with software or with a disciplined manual routine, the principle is the same: the event creates the work.

The Insight [how to stop sales-to-delivery handoffs from breaking](/insights/how-to-stop-sales-to-delivery-handoffs-from-breaking/) sets out a fuller approach to the handover itself.

## Intervention

Begin with the first forty-eight hours after a signature, because that is where the gap shows most.

## Practical next actions

1. **Measure the gap.** For the last ten signed deals, record the date of acceptance and the date of the first delivery action. Share the average with both teams.
2. **Define a minimum hand-over.** List the details delivery needs, such as contacts, site, dates, purchase order number and terms, and make capturing them part of closing the deal.
3. **Create the trigger.** Decide what record is created on acceptance, who is told, and by when they must make first contact with the customer.
4. **Acknowledge the customer within a day.** Send a short message naming the person responsible and the expected start date, even if the work is weeks away.
5. **Show delivery capacity to sales.** Give salespeople a simple view of available start dates so promises match reality.
6. **Review weekly.** Look at signed deals that have not started and ask what each is waiting for.

## Diagnostic questions

- What happens in your business at the moment a customer signs?
- Who is notified automatically, and who only finds out when told?
- How many days pass, on average, before the customer hears from delivery?
- Which details does delivery most often have to ask the customer for again?
- Can anyone see a list of signed work that has not yet started?

## Bottom line

A signature does not start work unless the business is built to start it. Making acceptance create a visible next step, with the details delivery needs, closes a gap that otherwise costs revenue, goodwill and confidence in the first weeks of every new relationship.
