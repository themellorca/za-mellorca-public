---
hub: patterns
record_id: PAT-410
slug: when-order-exceptions-are-managed-in-email
title: When Order Exceptions Are Managed in Email
description: Short stock, wrong addresses, credit holds and late deliveries all get sorted out in email threads. Why that hides problem orders, and how to give exceptions a proper home.
lead: Short stock, wrong addresses, credit holds and late deliveries all get sorted out in email threads. Why that hides problem orders, and how to give exceptions a proper home.
category: Orders, Fulfilment & Logistics
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Orders, Fulfilment & Logistics
pattern_family: Orders, Fulfilment & Logistics
observable_condition: When an order cannot proceed normally, because of short stock, a credit problem, a wrong address or a failed delivery, the problem is raised and resolved in email threads between sales, warehouse, finance and the customer.
primary_identification: Untracked exceptions: the order system handles the normal path, while every deviation leaves the system and lives in inboxes with no status, reason, owner or time limit.
commercial_value_dimensions: Customer experience, cash flow, staff capacity, delivery reliability and compliance with delivery obligations
sources:
  - Manage order holds - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/sales-marketing/tasks/manage-order-holds
  - Consumer Protection Act, 2008 (Act No. 68 of 2008) - 19. Consumer's rights with respect to delivery of goods or supply of service - Acts Onl | https://www.acts.co.za/consumer-protection/19_consumer_s_rights_with_respect_to_delivery_of_goods_or_supply_of_service
related:
  - When customers know their order is late before your team does | /patterns/when-customers-know-their-order-is-late-before-your-team-does/
  - Why returns become a cross-department investigation | /patterns/why-returns-become-a-cross-department-investigation/
  - Why fulfilment problems begin before the warehouse | /patterns/why-fulfilment-problems-begin-before-the-warehouse/
summary: Short stock, wrong addresses, credit holds and late deliveries all get sorted out in email threads. Why that hides problem orders, and how to give exceptions a proper home.
layout: plain
---
## Observable condition

Most orders flow through the system without trouble. The difficult ones do not. When a line is short, a customer is over their credit limit, the delivery address is wrong or the courier brings a parcel back, someone sends an email. The warehouse replies to sales, sales copies finance, finance asks the customer, and the thread grows. The order sits in the system as if nothing were wrong, while its real status lives in a dozen messages across four inboxes.

Ask how many orders are currently stuck and nobody can say without searching. Ask how long the average exception takes to resolve and there is no figure. Ask why exceptions happen and the answers are anecdotes.

An illustrative example: an East Rand hardware wholesaler that processes several hundred orders a day. About one in twelve hits a problem. Each problem generates an email thread. The customer service team spends most mornings reading threads to work out which orders are still waiting, and customers often learn of a problem only when their delivery fails to arrive.

## Realisation

The realisation is that exceptions are not a small side issue. They are where most of the effort, cost and customer frustration in fulfilment is concentrated. A normal order may need a few minutes of attention. An exception can need an hour across several people. When exceptions are handled in email, the business has no view of the part of its operation that consumes the most time and causes the most complaints.

Order systems are generally built to handle exceptions as a first-class state. [Microsoft's documentation on managing order holds](https://learn.microsoft.com/en-us/dynamics365/supply-chain/sales-marketing/tasks/manage-order-holds), for example, describes hold codes for different reasons, a role required to release each hold, a hold that blocks picking and packing until cleared, and a workbench that lists all current holds. Many businesses already own a system with something similar and simply do not use it.

**Realisation prompt:** how many orders are waiting on a problem right now, and how would you find out without reading email?

## Identification

This is a pattern of untracked exceptions. The visible symptom is order problems discussed and resolved in email. The common assumption is that exceptions are too varied to put in a system, or that email is quicker. The structural cause is that the order process was designed for the normal path only. Every deviation leaves the system, so it loses its status, owner, reason and time limit.

It is a specific case of the wider Pattern [the cost of running business processes through email threads](/patterns/the-cost-of-running-business-processes-through-email-threads/), and it often grows into the condition described in [when manual exceptions become the normal process](/patterns/when-manual-exceptions-become-the-normal-process/).

## Diagnosis

- **The order record does not show the exception.** The system says the order is open or in progress, while the real status is in a thread elsewhere.
- **There are no reason codes.** Exceptions are described in free text, so nobody can count how many were caused by stock, credit, address or carrier problems.
- **Ownership is implied, not assigned.** Whoever was last copied is assumed to be dealing with it. Threads stall when that person is busy or away.
- **There is no time limit.** Nothing marks an exception as overdue, so a held order can wait days before anyone notices.
- **The customer is told late or not at all.** Because status is buried, customers usually find out when the delivery fails, not when the problem is found.

## Commercial impact

The commercial value at stake is customer experience, cash flow and staff capacity.

Customers judge a supplier mostly by how it handles problems. An exception that is found early and explained clearly often costs little goodwill. One the customer discovers through a missed delivery costs much more. For consumer sales there is also a legal dimension. [Section 19 of the Consumer Protection Act](https://www.acts.co.za/consumer-protection/19_consumer_s_rights_with_respect_to_delivery_of_goods_or_supply_of_service) sets out the supplier's obligations around delivery at the agreed time and place, and the consumer's options when delivery is offered at a different time or place. An exception that sits unseen in an inbox makes it harder to meet those obligations or to agree a change in time.

Cash suffers because held orders are not invoiced. Capacity suffers because skilled staff spend hours reading threads and chasing colleagues instead of resolving problems. The Discovery note on [why account managers phone operations to find an order's status](/discovery/why-account-managers-have-to-phone-operations-to-find-out-an-order-s-status/) shows how the same blind spot spreads to sales.

## Common misidentification

The usual responses are a shared mailbox, a daily exceptions meeting, or a rule that everyone must copy customer service. A shared mailbox centralises the emails but not the status. A daily meeting finds stuck orders once a day. Wider copy lists make ownership less clear. None of these records why exceptions happen, so the business never reduces them.

## Possibility

In a better state, an order that cannot proceed is marked as held in the order system with a reason code and an owner. The hold is visible to sales, warehouse, finance and customer service. Each reason has a target time and a standard first step, including when and how the customer is told. Overdue holds are flagged. Each month, the business reviews which reasons occur most often and fixes the causes upstream, so exceptions fall over time instead of being handled forever.

## Intervention

Start by bringing the status of exceptions back into the order record, even before redesigning how they are resolved. Visibility comes first.

## Practical next actions

1. **Count last month's exceptions.** Search inboxes for a sample of problem orders and group them by cause: stock, credit, address, pricing, carrier and other.
2. **Create a short list of reason codes.** Six to ten reasons usually cover most cases. Add them to the order system as a hold status or a simple field.
3. **Assign an owner per reason.** Credit holds belong to finance, stock problems to the warehouse or buying, address problems to customer service.
4. **Set a target time and a customer message for each reason.** Agree how quickly each type should be resolved and when the customer must be told.
5. **Run a daily held-orders view.** A single list showing every held order, its reason, owner and age replaces the morning spent reading threads.
6. **Review causes monthly.** Pick the most common reason and fix it at its source, such as a stock rule, a credit check or an address field.

## Diagnostic questions

- How many orders are held right now, and who owns each one?
- What were the three most common causes of order exceptions last month?
- How long does the average exception take to resolve?
- When does a customer usually learn that their order has a problem?
- Does your order system have a hold or exception feature that nobody uses?

## Article summary

When order exceptions live in email, the most expensive part of fulfilment is invisible: nobody can see how many orders are stuck, why, or for how long. Giving exceptions a status, a reason, an owner and a time limit in the order system lets the business tell customers sooner, release cash faster and reduce the causes over time. If this condition is familiar in your business, [explore our solutions](/solutions/) or [start a conversation](/contact/) so we can examine where your order exceptions go and how Mellorca may be able to help.
