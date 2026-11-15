---
hub: patterns
record_id: PAT-100
slug: signs-customer-enquiries-should-become-automated-events
title: The Signs That Customer Enquiries Should Become Automated Events
description: Some enquiries need a person from the first second. Many do not: they need to be recorded, routed and acknowledged before anyone reads them. These are the signs your enquiries are ready to be treated as events.
lead: Some enquiries need a person from the first second. Many do not: they need to be recorded, routed and acknowledged before anyone reads them. These are the signs your enquiries are ready to be treated as events.
category: Customer Experience & Service
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Customer Experience & Service
pattern_family: Customer Service, Status & Self-Service
observable_condition: Every website form, email enquiry and message is read, sorted, forwarded and acknowledged by a person, even though most enquiries fall into a handful of predictable types with predictable next steps.
primary_identification: Unrecognised event: routine enquiries are treated as unique messages to be read rather than as events that should create a record, assign an owner and trigger a response automatically.
commercial_value_dimensions: Response time, conversion of enquiries, service and sales staff capacity, and visibility of demand
sources:
  - https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/automatically-create-update-records | https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/automatically-create-update-records
  - https://learn.microsoft.com/en-us/dynamics365/customer-insights/journeys/real-time-marketing-trigger-based-journey | https://learn.microsoft.com/en-us/dynamics365/customer-insights/journeys/real-time-marketing-trigger-based-journey
summary: Some enquiries need a person from the first second. Many do not: they need to be recorded, routed and acknowledged before anyone reads them. These are the signs your enquiries are ready to be treated as events.
layout: plain
---
## Observable condition

A Cape Town company that installs solar and backup power systems receives enquiries through a website form, a general email address, Facebook messages and phone calls. Each morning, the sales coordinator reads through everything that came in overnight. She decides whether each one is a new quote request, a service call, a warranty question or a supplier pitch, forwards it to the right person and sends the customer a short reply.

On a quiet day this takes an hour. After a weekend of load shedding announcements, it takes most of Monday. Enquiries that arrived on Saturday morning are answered on Monday afternoon.

When the owner asks how many quote requests came in last month, nobody can say without counting emails.

## Realisation

The realisation is that most of these enquiries are not unique conversations. They are the same few types arriving again and again, each with a known next step. A quote request needs an address, a monthly electricity spend and a site visit booking. A warranty question needs the installation date and serial number. The coordinator is not making judgements; she is running a sorting routine by hand.

When the routine is predictable, each enquiry is better understood as an event: something happened, and it should trigger a record, an owner and a response.

**Realisation prompt:** take the last hundred enquiries and sort them by type. How many types cover ninety of them?

## Identification

This is the pattern of an unrecognised event. The visible symptom is slow first responses, enquiries forwarded between people and no reliable count of demand. The common assumption is that enquiries need a human eye because every customer is different. The structural cause is that routine enquiry types have never been defined, so every message has to be read before anything can happen.

It is closely related to [why every new enquiry still has to be handed out by hand](/patterns/why-every-new-enquiry-still-has-to-be-handed-out-by-hand/) and [when lead routing depends on someone checking an inbox](/patterns/when-lead-routing-depends-on-someone-checking-an-inbox/). This pattern offers the test for deciding which enquiries are ready to change.

## Diagnosis: the signs

- **A few types dominate.** Most enquiries fall into five or six recognisable categories.
- **The next step is the same each time.** For each type, the coordinator does the same thing: forwards it to the same team and asks for the same missing details.
- **Acknowledgements are copied and pasted.** Staff send near-identical replies from a saved text file.
- **Volume is unknown.** Nobody can report enquiries by type, channel or week without manual counting.
- **Response time depends on the coordinator's day.** Enquiries wait when she is busy, on leave or in a meeting.
- **Information is requested twice.** The form collects some details, then someone emails the customer for the rest.

If four or more of these are true, enquiries are ready to become automated events.

## Commercial impact

The commercial value at stake is conversion, response time, staff capacity and visibility of demand.

Response time drives conversion. A customer comparing installers will often go with whoever acknowledges them first and books the site visit soonest. An enquiry that waits a weekend may already be lost. The cost of [website forms that email instead of updating systems](/impact/website-forms-emailing-instead-of-updating-systems-response-cost/) builds from exactly these delays.

Staff capacity is consumed by sorting. The coordinator's skill is in the conversations that need judgement, but her mornings go on reading and forwarding.

Visibility is lost. Without a count of enquiries by type, the owner cannot tell whether a marketing campaign worked, whether service calls are rising or whether quote requests are being converted.

## Common misidentification

One misreading is to install a chatbot on the website. A chatbot can collect details, but if its output still lands in the same inbox, the sorting work remains.

Another is to hire a second coordinator. That halves the delay but doubles the cost of a routine that could be automated.

A third is to fear that automation will make the business feel impersonal. Customers notice speed and accuracy more than whether a person typed the first reply.

## Possibility

The possibility is that each enquiry type has its own entry point, such as a form with the right questions or a dedicated address, and that every submission creates a record, assigns an owner and sends an acknowledgement with the next step. People read enquiries only when judgement is needed.

The building blocks are well documented. Microsoft's guidance on [automatically creating records from incoming email](https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/automatically-create-update-records) describes rules that turn messages into leads, opportunities or cases. For customer actions such as submitting a form, [trigger-based journeys](https://learn.microsoft.com/en-us/dynamics365/customer-insights/journeys/real-time-marketing-trigger-based-journey) respond in real time with the next message in a sequence.

Once enquiries are records, they can be routed without anyone reading them first, which addresses [the cost of manually assigning incoming requests](/impact/manually-assigning-incoming-requests-routing-delay-cost/).

## Intervention

Start by classifying a month of enquiries by type and channel. Pick the type with the highest volume and the clearest next step, usually new quote requests.

Design a form for that type that collects everything the next step needs, so nobody has to email back for missing details. Make each submission create a record and assign it to the right person or team by rule. Send the customer an acknowledgement that says what happens next and when.

Keep a human review for anything that does not match a known type. Report weekly on volume and response time by type. Then repeat for the next enquiry type.

## Practical next actions

1. Classify the last month of enquiries by type and channel and count each one.
2. Write down the standard next step for the three most common types.
3. Build a form or entry point for the top type that collects all details the next step needs.
4. Make each submission create a record, assign an owner by rule and send an acknowledgement.
5. Route anything unrecognised to a person for review rather than forcing it into a category.
6. Publish a weekly report of enquiry volume and first-response time by type.

## Diagnostic questions

- How many distinct enquiry types make up most of our inbound volume?
- How long does an enquiry received on Saturday morning wait for a first response?
- Can we say how many quote requests we received last month without counting emails?
- How often do we email customers back for details our form could have collected?

## Bottom line

When most enquiries fall into a few predictable types with known next steps, reading and forwarding them by hand is a routine that should be automated. Turn each routine enquiry into an event that creates a record, assigns an owner and acknowledges the customer, and keep people for the conversations that need them.
