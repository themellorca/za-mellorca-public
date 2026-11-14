---
hub: patterns
record_id: PAT-408
slug: the-cost-of-manual-dispatch-notifications
title: The Cost of Manual Dispatch Notifications
description: When a dispatcher retypes a fact the business already holds into a message for every load, the courtesy has a price in time, late notices and inbound calls. Here is how to see it and reduce it.
lead: When a dispatcher retypes a fact the business already holds into a message for every load, the courtesy has a price in time, late notices and inbound calls. Here is how to see it and reduce it.
category: Operations & Delivery
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Operations & Delivery
pattern_family: Operations & Delivery
observable_condition: A dispatch clerk phones or types a message to each customer when a load leaves, then updates a spreadsheet, so notices are late, inconsistent and compete with loading work.
primary_identification: Manual relay of a known event: the dispatch status is recorded but does not trigger any message, so staff retype what the business already knows.
commercial_value_dimensions: Dispatcher capacity, delivery reliability, failed-delivery cost, inbound call volume and customer confidence
sources:
  - https://learn.microsoft.com/en-us/power-automate/overview-cloud | https://learn.microsoft.com/en-us/power-automate/overview-cloud
  - https://learn.microsoft.com/en-us/power-automate/email-triggers | https://learn.microsoft.com/en-us/power-automate/email-triggers
  - https://learn.microsoft.com/en-us/power-automate/triggers-introduction | https://learn.microsoft.com/en-us/power-automate/triggers-introduction
summary: When a dispatcher retypes a fact the business already holds into a message for every load, the courtesy has a price in time, late notices and inbound calls. Here is how to see it and reduce it.
layout: plain
---
## Observable condition

A building-materials supplier in Pietermaritzburg loads eleven trucks before 07:00. For each load, the dispatch clerk phones or messages the customer to say the order is on its way, then types the driver's name and a rough arrival time into a WhatsApp message, and then updates a column in a spreadsheet so the sales team can see what has left. On a busy morning this takes more than an hour of the clerk's time, and three customers are told after the truck has already arrived.

Nobody thinks of this as a problem. It is a courtesy, and customers appreciate it. But it is a courtesy delivered by hand, in the middle of the busiest part of the day, by the person whose main job is to get trucks out of the gate.

An illustrative example, but a familiar one: any business that moves goods or technicians to customers and tells them by hand when it happens.

## Realisation

The realisation is that the notification is not a separate task. It is a record of something that has already happened inside the business: a vehicle was assigned, a load was confirmed, a truck left. The information exists the moment the dispatcher makes the decision. Writing it out again as a message and then again in a spreadsheet is retyping a fact the business already knows.

That retyping has a price in time, errors and delay, and it quietly makes notification something that only happens when there is spare capacity. On the days when customers most need to hear from you, because things are late or changed, the person who would send the message is the one who is busiest.

**Realisation prompt:** how many customer messages does your dispatch team send in a day, and how many of them contain information that is already in a system somewhere?

## Identification

This is a pattern of manual relay of a known event. The visible signs are a dispatcher with a phone in one hand and a spreadsheet open, messages typed from scratch each time, and customers who still phone to ask where their order is. The common assumption is that personal messages feel better to the customer, so they should stay manual. The structural cause is that the dispatch system or record does not trigger anything when the status changes.

It is the delivery-side cousin of [when a status update requires a staff member to investigate](/patterns/when-a-status-update-requires-a-staff-member-to-investigate/). There the effort is in finding the answer. Here the answer is known, and the effort is in passing it on.

## Diagnosis

- **The dispatch record and the message are separate acts.** Updating the system does not send anything, so the clerk has to do both, and one of them is usually done late.
- **Contact details live somewhere else.** The customer's mobile number is in an old order, a contact sheet or a clerk's phone, so every message begins with a search.
- **Wording is improvised.** Messages differ by clerk and by mood. Some include a driver and a time, some do not, and customers learn that the content cannot be relied on.
- **Changes are not communicated as consistently as departures.** A delay or a substitution is harder to write and easier to put off, which is the moment the customer most needs the message.
- **Sales and customer service cannot see what was sent.** The only record is a chat history on one person's phone, so a customer who calls asking about a message gets a vague answer.
- **There is no event to attach to.** Tools such as the cloud flows described in [Microsoft's Power Automate documentation](https://learn.microsoft.com/en-us/power-automate/overview-cloud) run when something happens, for example when a record is created or changed. That only works if the dispatch status is recorded as a field that changes, not as a note or a mental fact.

## Commercial impact

The commercial value at stake is staff capacity, delivery reliability, customer confidence, error rates and the cost of inbound calls.

The first cost is time at a bad moment. Dispatch is a time-critical function. Every minute spent typing a notification is a minute not spent resolving a loading problem, checking a driver's documents or managing a late truck. In a small team the same person often does all three.

The second cost is inbound calls. When customers are not told reliably, they ask. Each call interrupts a salesperson or an administrator, takes several minutes and often requires a call back to the dispatcher for the answer. That interaction costs more than the message it replaces.

The third cost is receiving failures. If nobody is on site to accept the goods because the notification arrived late or never arrived, the delivery may fail, return to the depot or wait in the yard. A failed delivery means fuel, driver time and sometimes a customer who now doubts the supplier.

The fourth cost is inconsistency. Where one clerk gives a precise time window and another says "later today", customers form different expectations, and the supplier cannot be held to a standard it has never defined.

## Common misidentification

The first misreading is that the answer is to hire another dispatcher. More hands make the manual process faster, but they do not remove the retyping or the delay.

The second is to assume customers want a personal touch every time. Most want accurate information at the right moment. A clear message with a driver, a vehicle and a time window is usually better received than a hurried personal one. Personal calls can then be kept for exceptions, where they make a difference.

The third is to treat automation as an all-or-nothing project. The business does not have to change its dispatch system to begin. It can start with one status change and one message.

## Possibility

The possibility is that when the dispatcher confirms a load, the customer's message is produced from that record. The text always contains the same useful items: order reference, vehicle, estimated window and a contact number. The sales team sees the same status without asking. When a delay occurs, changing the status triggers a different message, so bad news travels as reliably as good news.

The dispatcher's attention is then free for the tasks that actually require judgement. The customer experience becomes more predictable, which in operational businesses is a large part of what customers pay for.

## Intervention

A sensible start is to choose the single most common notification, usually "your order has left", and map exactly what information it contains and where each piece lives. If the dispatch status is only in a spreadsheet, it can still be used: a spreadsheet row that changes can start a flow, and a message can be built from the row. Power Automate and similar tools publish documentation on [email triggers](https://learn.microsoft.com/en-us/power-automate/email-triggers) and other triggers that show how a change can start a sequence of steps.

Before building anything, agree a standard wording, a rule for what happens when contact details are missing and a named person who owns the template. Messages to customers on their phones also bring consent and privacy considerations, so check how contact numbers were collected and how customers can opt out. For related work, see [manual customer progress updates and the labour cost of status messages](/impact/manual-customer-progress-updates-status-message-labour-cost/).

The wider habit of customers chasing for news is covered in [why customers keep emailing to ask for an update](/patterns/why-customers-keep-emailing-to-ask-for-an-update/).

## Practical next actions

1. Record for one week how many customer notifications the dispatch team sends, how long each takes and how many were sent late or after arrival.
2. Write down the standard content of an "on its way" message and agree one wording that includes the order reference, vehicle, time window and contact number.
3. Make sure the dispatch status and the customer's mobile number are held as fields in one place, not in notes or chat threads.
4. Choose one status change, such as "loaded and left", and test producing the message from that record for a small group of customers.
5. Decide how delays and substitutions will be communicated, and track whether inbound "where is my order" calls fall over the next month.

## Diagnostic questions

- When we mark an order as dispatched, does anything happen automatically, or does someone have to remember?
- Which customers are most often told after the truck arrives?
- Could a salesperson see exactly what a customer was told, without asking the dispatcher?
- What fraction of our inbound calls are about delivery timing?

## Bottom line

Manual dispatch notifications look like good service, but they spend scarce attention on retyping information the business already holds. The cost appears as a busy dispatcher, a ringing phone and customers who are told too late. Treat the status change as the trigger, standardise the message, and keep the human effort for the exceptions where a call makes the difference.
