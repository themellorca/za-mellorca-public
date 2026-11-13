---
hub: patterns
record_id: PAT-095
slug: when-a-customer-portal-would-not-fix-the-underlying-problem
title: When a Customer Portal Would Not Fix the Underlying Problem
description: A customer portal shows customers what your systems know. If the systems are late, incomplete or inconsistent, a portal exposes the problem rather than solving it. Here is how to tell.
lead: A customer portal shows customers what your systems know. If the systems are late, incomplete or inconsistent, a portal exposes the problem rather than solving it. Here is how to tell.
category: Customer Experience & Service
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Customer Experience & Service
pattern_family: Customer Experience & Service
observable_condition: A customer portal is proposed to reduce status calls while order, delivery and invoice information is recorded late, held in separate systems and checked by staff through phone calls.
primary_identification: Front-end remedy for a back-end condition: the information customers want is not captured reliably at the source, so a portal would display stale or contradictory records.
commercial_value_dimensions: Technology investment risk, customer trust, service workload, dispute risk and opportunity cost
sources:
  - https://learn.microsoft.com/en-us/power-pages/introduction | https://learn.microsoft.com/en-us/power-pages/introduction
  - https://www.gov.za/documents/consumer-protection-act | https://www.gov.za/documents/consumer-protection-act
summary: A customer portal shows customers what your systems know. If the systems are late, incomplete or inconsistent, a portal exposes the problem rather than solving it. Here is how to tell.
layout: plain
---
## Observable condition

A logistics company in Gqeberha is losing patience with the volume of calls asking where consignments are. The proposed answer is a customer portal: customers log in, see their shipments and stop phoning. A developer has quoted for it and the directors are ready to approve.

Then someone asks where the portal would get its information. Consignment status is updated by depot clerks at the end of each shift, when they remember. Proof of delivery arrives on paper and is scanned two days later. Invoices sit in a separate accounting system that does not know which consignment they relate to.

A portal built on that data would show customers, in real time, information that is up to two days old. The calls would not stop. They would change from "where is my parcel?" to "why does your website say it has not left?"

## Realisation

The realisation is that a portal is a window, not an engine. It shows customers what the business's records say. If those records are late, incomplete or contradictory, a portal makes that visible to every customer at once.

The problem the business wants to solve, too many customers asking for information, is usually caused by the information not being available to staff either. A portal cannot create information that the operation does not capture.

**Realisation prompt:** pick five open orders or jobs. Could your own staff, right now, give an accurate status for each from the system alone without phoning anyone?

## Identification

This is a pattern of a front-end remedy for a back-end condition. The visible symptom is pressure from customers for information. The common assumption is that customers need a self-service channel. The structural cause is that the underlying records are not captured at the time events happen, are spread across systems, or are not trusted internally.

It connects with [why customer self-service fails when the answer lives in five places](/patterns/why-customer-self-service-fails-when-the-answer-lives-in-five-places/) and [when your website promises what your back office cannot see](/patterns/when-your-website-promises-what-your-back-office-cannot-see/). Those pages describe the failure. This one is about deciding before you build.

## Diagnosis

- **Events are recorded late.** Status changes are captured at the end of a shift or a week, not when they happen.
- **Data lives in several places.** Orders, deliveries and invoices are in different systems with no shared reference, so no single view can be assembled.
- **Staff do not trust the system.** If staff phone the depot rather than check the screen, the data is not good enough for customers either.
- **Exceptions are handled off-system.** Delays, damages and partial deliveries are dealt with by phone and email and never reach the record.
- **Nobody owns data quality.** When a status is wrong, it is corrected for that customer but not traced to the cause.

## Commercial impact

The commercial value at stake is the portal investment itself, customer trust, service workload and the opportunity cost of fixing the wrong thing.

The most direct risk is wasted spend. A portal that customers stop using after a month because it is unreliable is a sunk cost, and it makes the next technology proposal harder to approve.

Trust can fall rather than rise. A customer who sees an incorrect status on your website has evidence, in writing, that your records are wrong. That is worse than not knowing. Where consumers are involved, inaccurate information about goods or delivery can also raise questions under the [Consumer Protection Act](https://www.gov.za/documents/consumer-protection-act).

Service workload can rise. Calls about wrong portal information take longer to resolve than simple status requests, because the agent must first find out why the system is wrong.

The opportunity cost is the largest. The money and attention spent on the portal could have gone into capturing data at the source, which would have helped staff and customers alike.

## Common misidentification

The main misreading is to see customer calls as a channel problem: customers are using the phone when they should be using the web. In reality the calls are a data problem, and the channel is incidental.

Another is to assume the portal will force the operation to improve. Sometimes it does, but usually staff keep working the way they did, and the portal quietly shows stale information.

A third is to treat the portal decision as purely technical. The questions that matter are operational: when is each event recorded, by whom and where?

## Possibility

The possibility is a business that gets its records right first and then decides whether a portal is needed. Statuses are captured when they happen, ideally by the person doing the work. Orders, deliveries and invoices share a reference. Staff answer status questions from the screen without phoning anyone.

At that point, a portal becomes simple and low-risk, because it is showing information the business already trusts. Platforms such as [Microsoft Power Pages](https://learn.microsoft.com/en-us/power-pages/introduction) build external sites on the same shared business data used by internal apps, which only helps if that shared data is accurate. In some cases the business finds it no longer needs a portal, because proactive updates have already removed most of the calls. The pattern [when customers know less than your internal systems do](/patterns/when-customers-know-less-than-your-internal-systems-do/) describes that situation.

## Intervention

Before approving a portal, run an internal test. For a week, ask staff to answer every customer status query using only what the system shows, and record how often they had to phone or email someone to find out.

Map the events customers ask about, such as dispatched, in transit, delivered and invoiced, and for each note when and how it is recorded today.

Close the biggest gaps first. Often that means giving drivers or depot staff a simple way to record events as they happen, or linking invoices to orders by a common reference.

Once internal staff can answer from the system with confidence, revisit the portal decision. Build it on data the business already relies on.

## Practical next actions

1. For one week, record how many customer status queries staff could answer from the system alone.
2. List the five events customers ask about most and note when, where and by whom each is recorded.
3. Identify the event with the longest delay between happening and being recorded, and fix its capture first.
4. Agree a shared reference that links orders, deliveries and invoices across systems.
5. Send proactive updates on the most-asked event before deciding whether a portal is still needed.
6. Only approve portal development once internal staff trust the data it will display.

## Diagnostic questions

- Do our own staff answer status questions from the system or by phoning someone?
- How old is the status information in our system at any given moment?
- Would we be comfortable if every customer could see exactly what our records say today?
- Is the problem that customers cannot see the information, or that nobody can?

## Bottom line

A customer portal shows customers what the business already knows. If the records are late, scattered or distrusted, a portal exposes the problem and adds a new source of complaints. Fix how and when information is captured first. Then a portal becomes a small step, or an unnecessary one.
