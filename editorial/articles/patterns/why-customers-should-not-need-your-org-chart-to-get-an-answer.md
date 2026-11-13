---
hub: patterns
record_id: PAT-094
slug: why-customers-should-not-need-your-org-chart-to-get-an-answer
title: Why Customers Should Not Need Your Org Chart to Get an Answer
description: When customers must know which department, person or email address handles their issue, the business has passed its internal structure on to them. Here is how to take it back.
lead: When customers must know which department, person or email address handles their issue, the business has passed its internal structure on to them. Here is how to take it back.
category: Customer Experience & Service
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Customer Experience & Service
pattern_family: Customer Experience & Service
observable_condition: Customers choose between several departmental email addresses and extensions, contact the wrong one and are told to write or call elsewhere, repeating their details each time.
primary_identification: Structure leaking to the customer: there is no single front door or owner responsible for routing requests internally, so customers must navigate the organisation themselves.
commercial_value_dimensions: Customer effort, response time, staff time on redirection, lost requests and loyalty
sources:
  - https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/overview-unified-routing | https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/overview-unified-routing
  - https://learn.microsoft.com/en-us/exchange/collaboration-exo/shared-mailboxes | https://learn.microsoft.com/en-us/exchange/collaboration-exo/shared-mailboxes
summary: When customers must know which department, person or email address handles their issue, the business has passed its internal structure on to them. Here is how to take it back.
layout: plain
---
## Observable condition

A customer has a question about a payment that was taken twice. The website lists five email addresses: sales, accounts, support, orders and info. He picks accounts. Two days later he is told to contact orders. Orders tell him it is a support matter. Support asks for his account number, which he sent in the first email.

By the time someone owns the problem, the customer has learned more about how the business is organised than he ever wanted to know. He now knows that accounts cannot see orders, that support cannot issue refunds and that the person who can is on leave.

An illustrative example: a Bloemfontein company that sells agricultural equipment and parts, with separate teams for sales, parts, service bookings and accounts, each with its own inbox and phone extension.

## Realisation

The realisation is that every inbox, extension and contact person the customer has to choose between is a piece of the internal structure exposed to the outside. The business has organised itself sensibly by function, but it has asked customers to work out that structure in order to be helped.

Customers do not think in departments. They think in problems: my payment, my delivery, my broken part. When the business makes them translate a problem into a department, some get it wrong, and every wrong guess costs both sides time.

**Realisation prompt:** look at your website contact page and your email signatures. How many different ways in does a customer have, and how would a stranger know which to use?

## Identification

This is a pattern of structure leaking to the customer. The visible symptom is customers being redirected between teams. The common assumption is that customers should read the contact page more carefully. The structural cause is that the business has no single front door that takes responsibility for routing a request internally.

It sits next to [why a single customer question gets passed between three departments](/patterns/why-a-single-customer-question-gets-passed-between-three-departments/), which looks at what happens inside once a question arrives. This pattern looks at the entrance: the choices the customer is forced to make before anyone helps.

## Diagnosis

- **Many doors, no host.** Each department publishes its own contact details, and nobody is responsible for requests that arrive at the wrong one.
- **Redirecting instead of routing.** A team that receives a misdirected request tells the customer to write elsewhere, rather than passing it on internally.
- **Shared inboxes without ownership.** A shared mailbox lets several people read and reply, as [Microsoft's Exchange documentation](https://learn.microsoft.com/en-us/exchange/collaboration-exo/shared-mailboxes) explains, but without a convention for claiming messages it can hide who is dealing with what.
- **Context does not travel.** When a request is forwarded, the customer is asked again for details they already gave.
- **Personal relationships as routing.** Long-standing customers learn to phone the one person who knows how to get things done, which works until that person is away.

## Commercial impact

The commercial value at stake is customer effort, response time, staff time and loyalty.

Each misdirected request adds at least one round trip, often a day or more. For a farmer waiting on a part during planting season, a day can cost far more than the part.

Staff time is lost on both ends: the team that receives the wrong request and replies to redirect it, and the right team that has to start again. The Impact note on [manually assigning incoming requests](/impact/manually-assigning-incoming-requests-routing-delay-cost/) describes how routing delay adds up.

Requests also go missing. When a customer is told to write elsewhere and does not, the request disappears from every queue. See [customer requests lost in a shared inbox](/impact/customer-requests-lost-shared-inbox-missed-service-work/) for that risk.

Most importantly, effort drives loyalty. Customers forgive mistakes more readily than they forgive being made to do the business's internal work.

## Common misidentification

One misreading is that the contact page needs clearer labels. Better labels help a little, but customers will still choose wrongly when a problem spans two departments.

Another is to reorganise departments. The structure behind the scenes may be perfectly sound. The problem is that it is visible.

A third is to hire a receptionist to redirect calls. That moves the guesswork from the customer to one person, but if that person can only transfer and not track, requests still fall through.

## Possibility

The possibility is a business with one front door, or a small number organised by customer need rather than department. Every request that arrives is logged once, assigned internally to the right team and tracked until it is resolved. The customer is told who has it and when to expect an answer. If it moves between teams, it moves with its history.

[Microsoft's overview of unified routing](https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/overview-unified-routing) describes classifying incoming work and assigning it to the best-suited queue and person. A small business can apply the same principle with a single intake address, a short list of categories and a named person who triages each morning. The Moment [why customers want to talk to someone who knows them](/moments/why-customers-want-to-talk-to-someone-who-knows-them/) captures what customers value in return.

## Intervention

Begin by listing every way a customer can contact the business: addresses, numbers, WhatsApp lines and personal cellphones. Most businesses find more than they expected.

Choose one primary entry point for service requests and publish it prominently. Keep departmental addresses working, but route everything they receive into the same queue.

Set a simple internal rule: whoever receives a misdirected request passes it on internally with its history and tells the customer who now has it. Customers are never told to write somewhere else.

Agree a short list of request categories and an owner for each. Review unassigned requests twice a day until the habit is established.

## Practical next actions

1. Audit every customer contact route currently published or in use, including personal numbers given to customers.
2. Choose one primary service entry point and make it the most visible option on the website and invoices.
3. Forward all departmental inboxes into a single tracked queue with a named triage owner.
4. Adopt a rule that misdirected requests are routed internally and never bounced back to the customer.
5. Define no more than eight request categories and assign an owning team to each.
6. Measure for a month how many requests are reassigned between teams, and why.

## Diagnostic questions

- How many different contact points does a new customer see when looking for help?
- What happens today when a request arrives at the wrong team?
- How many customers rely on one employee's personal number to get things done?
- Can we tell a customer, at any moment, who is handling their request?

## Bottom line

Customers should not need to understand how the business is organised in order to get help. Give them one clear way in, route requests internally with their history, and never send them to try another door. The structure can stay; it just stops being the customer's problem.
