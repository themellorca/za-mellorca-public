---
hub: impact
record_id: CPS-043
slug: checking-stock-capacity-by-hand-before-promising-cost
title: "Let Me Check and Come Back to You": The Cost of Manual Availability Checks
description: When staff must walk the warehouse, phone colleagues or open several spreadsheets before confirming stock, capacity or a date, quotes slow down and promises get broken.
lead: When staff must walk the warehouse, phone colleagues or open several spreadsheets before confirming stock, capacity or a date, quotes slow down and promises get broken.
category: Sales Operations
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Sales Operations
commercial_domain: Digital Operations
primary_pain: Staff manually check stock, capacity or availability before making commitments to customers
primary_cost_mechanism: Checking labour and broken-promise recovery costs, with revenue risk from slow responses
sources:
  - Calculate order promising dates - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-to-calculate-order-promising-dates
  - Get an availability overview - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-availability-overview
  - Microsoft Bookings | https://learn.microsoft.com/en-us/microsoft-365/bookings/bookings-overview
related:
  - Retyping Website Enquiries Into the CRM: The Cost of Slow, Error-Prone Lead Capture | /impact/retyping-website-enquiries-into-crm-lead-capture-cost/
  - Unassigned Enquiries: Why Leads Go Cold Before Anyone Owns Them | /impact/unassigned-sales-enquiries-leads-going-cold/
  - Gathering Information Before Work Can Start: The Payroll Cost of Preparation | /impact/compiling-information-before-work-preparation-payroll-cost/
summary: When staff must walk the warehouse, phone colleagues or open several spreadsheets before confirming stock, capacity or a date, quotes slow down and promises get broken.
layout: plain
---
## The tolerated pain: every promise needs an investigation

A customer asks a simple question. Do you have forty of these in stock? Can you install next Thursday? Can you fit in another batch this month? Is the large venue free on the 14th?

In many South African small and mid-sized businesses, the person who takes the question cannot answer it. They put the customer on hold or promise to call back, then walk to the storeroom, phone the warehouse, message the workshop supervisor or open a spreadsheet that may or may not have been updated. Sometimes they check two sources that disagree. Eventually they answer, or they make an educated guess to avoid losing the sale.

The guess is where the second cost begins. Stock that looked available had already been promised to another customer. The installer was already booked. The production line was full. Someone now has to phone the customer back with bad news, re-plan, or pay to expedite.

This is a specific case of the broader pattern of [staff checking the same things over and over](/patterns/why-staff-keep-checking-the-same-things-over-and-over/). What makes it commercially distinct is that the check sits directly in front of a sale or a customer commitment.

## Why businesses tolerate it

- **Experienced staff usually know.** A long-serving salesperson or supervisor can often answer from memory, so the gap only shows when they are away.
- **Stock records are not trusted.** If the system has been wrong before, people learn to go and look, which keeps the system wrong because nobody relies on it.
- **Commitments are not recorded as reservations.** Stock or time promised to one customer is not marked as taken, so a physical count overstates what is free.
- **Capacity is in people's heads.** Workshop, installer or production capacity is managed on a whiteboard or in a supervisor's diary.

## Operational consequence

- Response times to enquiries and quote requests stretch from minutes to hours or days.
- Warehouse, workshop and field staff are interrupted repeatedly to confirm availability.
- Two salespeople promise the same stock or slot to different customers.
- Orders are accepted and then partially shipped, back-ordered or cancelled.
- Delivery dates are padded "to be safe", which makes the business less competitive than it really is.

When the question comes from the field, the pattern is familiar: [field teams still phone the office for information](/patterns/why-field-teams-still-phone-the-office-for-information/) because the answer is not available where the conversation happens.

## How the pain becomes money

1. **Checking labour:** the time spent by the person asking and the person who has to look.
2. **Broken-promise cost:** callbacks, re-planning, split deliveries, expedited freight or overtime to rescue commitments that should not have been made.
3. **Slow-response revenue risk:** customers who buy elsewhere while waiting for a confirmation. This should be estimated only from evidence such as lost-quote reasons, not assumed.
4. **Conservatism cost:** business declined or dates padded because nobody could confirm availability with confidence.

The revenue effect of slow answers is explored more broadly in [the revenue cost of slow sales lead response](/impact/slow-sales-lead-response-revenue-cost/). Here, the delay has a specific internal cause that can be measured.

### An illustrative cost model

The figures below are illustrative assumptions for an unnamed South African distributor that also offers installation. They are not benchmarks. Replace them with your own counts.

| Activity (illustrative) | Assumption | Monthly cost |
| --- | --- | --- |
| Availability checks by sales staff | 320 checks × 8 minutes at R260/hour | R11,093 |
| Interruptions to warehouse or workshop staff | 200 checks × 5 minutes at R200/hour | R3,333 |
| Recovering broken promises | 12 incidents × 90 minutes at R260/hour | R4,680 |
| Expedited freight to rescue commitments | 4 shipments × R1,500 | R6,000 |
| **Total** |  | **R25,107** |

On these assumptions the business spends about R25,100 a month, or roughly R301,300 a year, before counting any lost sales. The labour lines show how the cost is spread across roles. The broken-promise and expediting lines are often more revealing, because they are direct cash costs caused by answering without reliable information.

## Secondary consequences

Customers learn which suppliers answer on the spot and which ones always "come back to you". Sales staff become cautious and stop quoting tight dates. Warehouse and workshop teams resent constant interruptions. There is a planning cost as well: when commitments are not recorded, purchasing and production plans are built on demand the business cannot see, so shortages are discovered at dispatch rather than weeks earlier. Most damaging, the business never fixes its stock or capacity records, because everyone has learned to work around them, a symptom of the wider problem that [nobody knows which system holds the correct data](/patterns/when-nobody-knows-which-system-holds-the-correct-data/).

## When this becomes commercially urgent

- Quote turnaround is slower than competitors and customers say so.
- Back-orders, split deliveries or cancelled orders are rising.
- Expedited freight or overtime is regularly used to rescue promises.
- The business is adding a branch, a warehouse or an online channel that will draw on the same stock.
- Only one or two people can reliably answer availability questions.
- Customers increasingly expect to see stock or booking availability online, and the business cannot publish figures it does not trust.

## What better looks like

The goal is that anyone who takes an enquiry can see what is genuinely available to promise, and that a promise immediately reduces what is available to the next person.

Business systems distinguish these concepts explicitly. Microsoft's Business Central documentation, for example, separates quantity on hand, meaning what posted entries show today, from projected available balance, which adds scheduled receipts and subtracts requirements such as quantities on sales orders. Its order promising feature calculates available-to-promise dates from unreserved inventory and planned receipts, and capable-to-promise dates for quantities that would need to be bought or made. It also verifies whether a requested delivery date is realistic by working backwards from shipping and warehouse handling times, and shows a stock-out warning when items cannot be picked on the shipment date. For services, booking tools such as Microsoft Bookings let a business define staff, services, schedules and availability so that customers or staff book against published availability rather than a supervisor's memory.

None of this works unless the underlying records are disciplined: receipts and issues posted promptly, commitments recorded as orders or reservations, and capacity entered as a calendar rather than kept in someone's head.

### Trade-offs to weigh

- **Accuracy comes before visibility.** Showing inaccurate stock to more people makes broken promises more frequent, not less. Start with cycle counts on fast movers.
- **Reservation rules need agreement.** Decide when a quote reserves stock, for how long, and who can override.
- **Not everything needs real-time precision.** Slow-moving or made-to-order items may be better handled by a standard lead time than by live checks.
- **Integration and licences cost money.** Compare those recurring costs with the checking and recovery costs you actually measure.

## Practical diagnostic

1. For two weeks, log every customer question that needed an availability check, who answered it and how long it took.
2. Record every broken promise in the same period, with the cause and the cost of recovery.
3. Pick twenty fast-moving items and compare system stock with a physical count.
4. Check whether accepted orders and quotes reduce available stock or capacity in your system at the time they are accepted.
5. Ask sales staff which questions they can never answer on the spot, and start there.

## The bottom line

Every "let me check and come back to you" carries a cost in paid time, and every guess that turns out wrong carries a larger one in recovery and reputation. Reliable stock and capacity records, with commitments recorded as they are made, let the business answer at the speed customers expect and keep the promises it makes.
