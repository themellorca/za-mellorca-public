---
hub: patterns
record_id: PAT-063
slug: why-a-business-with-plenty-of-data-still-has-no-single-view-of-operations
title: Why Your Business Has Data but No Single View of Operations
description: Every system holds a slice of the truth, yet nobody can see how orders, stock, people and cash fit together. Here is why that happens and how to build one usable view.
lead: Every system holds a slice of the truth, yet nobody can see how orders, stock, people and cash fit together. Here is why that happens and how to build one usable view.
category: Data, Reporting & Management Visibility
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Data, Reporting & Management Visibility
pattern_family: Data, Reporting & Management Visibility
observable_condition: Management questions about what is late, stuck or at risk take hours or days to answer because facts sit in separate tools and are joined by hand.
primary_identification: Fragmented operational visibility: no shared identifiers, status definitions or event flow connect the systems, and nobody owns the picture across them.
commercial_value_dimensions: Management productivity, decision speed, service reliability and the ability to plan stock, staffing and cash
sources:
  - What Are Data Silos? - IBM | https://www.ibm.com/think/topics/data-silos
  - What Is Data Integration? - IBM | https://www.ibm.com/think/topics/data-integration
  - Data unification overview - Dynamics 365 Customer Insights | https://learn.microsoft.com/en-us/dynamics365/customer-insights/data/data-unification
related:
  - When Every Department Reports the Same Metric Differently | /patterns/when-every-department-reports-the-same-metric-differently/
  - Why New Clients Wait While Internal Teams Coordinate | /patterns/why-new-clients-wait-while-internal-teams-coordinate/
  - The Cost of Manual Consolidation Across Workbooks | /patterns/the-hidden-cost-of-combining-figures-from-many-workbooks-by-hand/
summary: Every system holds a slice of the truth, yet nobody can see how orders, stock, people and cash fit together. Here is why that happens and how to build one usable view.
layout: plain
---
## Observable condition

The business is not short of information. The accounting package holds every invoice. The CRM holds every conversation. The warehouse tool knows what is on the shelf, the payroll system knows who worked which shift, and the service desk has a ticket for every complaint. Yet when the owner asks a simple operational question, such as "what is late, what is stuck and what will it cost us this week?", nobody can answer it in one sitting.

What happens instead is a small ritual. Someone opens four screens, someone else exports two spreadsheets, a third person phones the depot, and an answer is assembled by Thursday afternoon. By then the question has moved on. The business has plenty of data and no single view of operations.

An illustrative example: a Durban building-supplies distributor with six branches runs a point-of-sale system at each counter, a separate ordering tool for contractors, a delivery-scheduling spreadsheet and a cloud accounting package. Each branch manager understands their own corner of the operation well. Head office cannot say, on any given morning, how many contractor orders are waiting for stock, how many are waiting for a truck and how many are waiting for credit approval.

## Realisation

The realisation is that holding data and seeing operations are different achievements. Data is a record of events inside one tool. A view of operations connects those events across tools so that a person can follow a customer order, a purchase or a job from start to finish without changing screens or asking a colleague.

Most businesses reach this point gradually. Each system was bought to solve a real problem and does so reasonably well. The gap is not inside any one system. It sits between them, in the customer reference that is spelled differently, the order number that exists in two formats and the status that one tool calls "processing" while another calls "open". Nobody chose to leave that gap, which is why nobody is responsible for it.

IBM's overview of data silos describes the same outcome in general terms: when data sits in isolated stores, different parts of an organisation work from partial and sometimes conflicting pictures. Having more of that data does not remove the problem, because the problem is isolation rather than volume.

**Realisation prompt:** choose one customer order from last month. How many systems and how many people would you need to consult to say exactly where it was on every day of its life?

## Identification

This is a pattern of fragmented operational visibility. The visible symptom is that management questions take hours or days to answer. The common assumption is that staff are slow or that the business needs more reporting. The structural cause is that operational facts are recorded in separate tools with no shared identifiers, no shared definitions and no routine that brings them together.

The published Pattern [the difference between having data and having visibility](/patterns/the-difference-between-having-data-and-having-visibility/) introduces the distinction. This Pattern concentrates on the operational question: what a manager actually needs to see in order to run the day, and why the sum of the systems does not provide it. The Insight [what operational visibility actually means](/insights/what-operational-visibility-actually-means/) gives the wider definition.

## Diagnosis

- **There is no common key.** The same customer, product or job carries a different identifier in each tool, so records cannot be matched without a person who remembers which is which.
- **Each tool reports its own slice.** Standard reports answer the questions the vendor anticipated, such as sales by product or debtors by age, but not the cross-cutting questions a manager asks, such as which delayed deliveries belong to our biggest customers.
- **Statuses do not line up.** "Shipped", "dispatched", "collected" and "delivered" may mean the same thing in one department and four different things in another.
- **Timing differs.** One tool updates live, another syncs overnight, and a third is updated when someone gets round to it. A combined picture mixes information of different ages. Microsoft's documentation on scheduled refresh for Power BI is a useful reminder that a combined report is only as current as the slowest feed behind it.
- **Integration is done by people.** The connection between systems is a person with a spreadsheet, and the view disappears when that person is on leave.
- **Nobody owns the whole.** Each system has an administrator. The picture across systems has none.

## Commercial impact

The commercial value at stake is management productivity, response speed, service reliability and the ability to plan capacity and cash.

The first cost is slow decisions. When a question takes two days to answer, the options that existed on day one may be gone by day three. A branch that is running out of a fast-moving product, a customer drifting towards a competitor and a supplier running late all look like isolated events until someone connects them.

The second cost is hidden effort. Compiling the weekly picture is often the main job of one capable person, who could be improving the operation rather than describing it. The Pattern [why one number requires three people and four systems](/patterns/why-one-number-requires-three-people-and-four-systems/) describes how this effort accumulates.

The third cost is risk. Without a joined-up view, problems are discovered by customers first. A late delivery, a double-billed account or an unfulfilled promise becomes visible only when someone complains, and by then it has already affected the relationship.

The fourth cost is planning. Cash forecasts, stock orders and staffing decisions rely on knowing what is committed and what is coming. In a country where load-shedding, port delays and supplier disruption can shift a week's plan overnight, the ability to see the whole operation quickly is a practical advantage, not a luxury.

## Common misidentification

The most common response is to buy a dashboard tool. A dashboard can display a joined-up picture, but it cannot create one. If the underlying systems use different customer keys and different status words, the dashboard merely shows the mismatch more attractively, or it is quietly fed by a spreadsheet that someone updates by hand. The Pattern [when your dashboard is really a manually updated spreadsheet](/patterns/when-your-dashboard-is-really-a-manually-updated-spreadsheet/) describes that outcome.

Another response is to replace everything with one large system. That is sometimes right, but it is expensive and slow, and many businesses discover that the new system still has to coexist with specialist tools they cannot give up. A third response is to ask staff to report more often. More frequent manual reporting increases effort without improving accuracy.

## Possibility

In a better state, a manager can open one place and follow any order, job or customer from enquiry to payment. The identifiers match. The statuses mean the same thing everywhere. The picture shows when it was last updated, and an exception such as "order paid but not dispatched for three days" appears without anyone going looking for it.

This does not require every record to live in one database. It requires agreement on a small set of shared references and definitions, and a reliable way for each system to pass its events to a common place. The Insight [how to map the flow of information between business systems](/insights/how-to-map-the-flow-of-information-between-business-systems/) is a sensible starting point.

## Intervention

1. **Write down the five questions you cannot answer quickly.** Make them operational: what is late, what is waiting, what is at risk.
2. **Trace one record end to end.** Follow one order through every tool and note where its identifier changes, where its status changes meaning and who passes it on.
3. **Agree the shared references.** Decide which identifier is the master for customers, products and jobs, and make every system carry it. The Insight [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/) helps with this choice.
4. **Agree status words.** Define the handful of stages an order passes through and map each tool's labels to them.
5. **Connect events rather than copying reports.** Where the tools allow it, let systems pass changes to one another or to a shared store, instead of having people export and merge.
6. **Build the view for the questions, not the data.** Start with the five questions, show only what answers them, and give each view an owner.

## Diagnostic questions

- How long does it take to find out how many orders are currently delayed, and why?
- Does the same customer carry the same reference in every system?
- Who compiles the cross-system picture, and what happens when they are away?
- When did a customer last tell you about a problem before your own systems did?
- Can you tell, on any screen, how old the information is?

## Bottom line

A business can hold every record it needs and still be unable to see itself. The missing piece is usually not more data or a better chart but a small set of shared references, shared meanings and a routine that joins them. Once those exist, the data the business already holds starts to behave like a view of operations.
