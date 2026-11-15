---
hub: patterns
record_id: PAT-135
slug: when-client-information-is-collected-but-not-reused
title: When Client Information Is Collected but Not Reused
description: The business asked the client for their details at enquiry, again at sign-up and again at project kickoff. The information was collected every time. It was never reused, because each step stored it somewhere the next step could not reach.
lead: The business asked the client for their details at enquiry, again at sign-up and again at project kickoff. The information was collected every time. It was never reused, because each step stored it somewhere the next step could not reach.
category: Client Onboarding & Service Delivery
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Client Onboarding & Service Delivery
pattern_family: Client Onboarding & Service Delivery
observable_condition: Client details captured at enquiry, in the signed agreement or in an onboarding form are retyped by finance, operations and delivery teams, or requested from the client again, because each stage keeps its own copy.
primary_identification: Capture without reuse: information is collected into documents and inboxes that serve one step, rather than into a shared record that later steps can draw from.
commercial_value_dimensions: Onboarding speed, staff time, data accuracy, client experience and personal information compliance
sources:
  - https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intro | https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intro
  - https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview | https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview
  - https://www.gov.za/documents/protection-personal-information-act | https://www.gov.za/documents/protection-personal-information-act
summary: The business asked the client for their details at enquiry, again at sign-up and again at project kickoff. The information was collected every time. It was never reused, because each step stored it somewhere the next step could not reach.
layout: plain
---
## Observable condition

A Sandton accounting and payroll bureau signs a new client, a restaurant group with four outlets. During the sales conversation, the partner noted the company registration number, the outlets, the number of staff and the payroll dates. The client then completed a PDF onboarding form with much of the same information. The engagement letter was drafted by retyping details from the form.

The payroll team, setting up the client, emailed the restaurant's financial manager for a list of outlets and employee numbers. The billing clerk, setting up the monthly fee, emailed her for the registration number and VAT number. Two weeks later, the bookkeeping team sent its own information request.

The financial manager replied politely each time. On the fourth request she asked whether the bureau's teams talked to each other.

## Realisation

The realisation is that the information was never missing. It was collected early and well. The problem is that it was collected into a sales note, a PDF and an email, each of which served the step that collected it and nothing after.

Every later step then had to collect it again or find it and retype it. The business paid for the same information several times and gave the client the impression that nobody was listening.

**Realisation prompt:** follow one new client from first enquiry to first delivery. List every time the business asked for, or retyped, a piece of information it already had.

## Identification

This is a pattern of capture without reuse. The visible symptom is repeated information requests and retyping during onboarding. The common assumption is that teams are poorly coordinated. The structural cause is that information is captured into documents and messages designed for one step, rather than into a shared client record that every step can read.

The customer's side of this is covered in [the hidden cost of asking customers for the same information twice](/patterns/the-hidden-cost-of-asking-customers-for-the-same-information-twice/). This pattern looks inside the business at why the information does not travel, even when nobody asks the client again.

## Diagnosis

- **Forms produce documents, not data.** PDF and paper forms are filed, so their contents must be retyped to be used.
- **Each team has its own system.** Sales, billing, payroll and delivery each hold a copy of the client, entered separately.
- **No single client record.** There is nowhere that holds the agreed details and that every team can read.
- **Onboarding steps are not linked.** Each team starts its own setup without seeing what has already been collected.
- **Changes do not flow.** When the client updates a detail, only the team that received the update knows.

## Commercial impact

The commercial value at stake is onboarding speed, staff time, accuracy, client experience and compliance.

Onboarding slows down. Each information request adds days of waiting for the client to respond. A client who expected to be running in a week may wait a month.

Staff time is spent retyping. Every copy of the information is typed by someone, and every retyping is an opportunity for a wrong digit in a bank account or registration number.

Client experience suffers at the moment it matters most. Early impressions shape the relationship, and being asked the same questions repeatedly suggests disorganisation. [The small joy of a follow-up form that remembers you](/moments/the-small-joy-of-a-follow-up-form-that-remembers-you/) describes the opposite feeling.

Compliance is harder. The [Protection of Personal Information Act](https://www.gov.za/documents/protection-personal-information-act) establishes minimum requirements for processing personal information. Multiple copies of the same personal details in forms, emails and spreadsheets are harder to keep accurate, secure and correctable.

## Common misidentification

One misreading is to create a longer onboarding form that asks everything up front. That helps only if the answers are stored where every team can use them.

Another is to appoint an onboarding coordinator to relay information between teams. That reduces requests to the client but leaves the retyping in place.

A third is to accept it as the cost of specialised teams. Specialised teams need the same core facts, and they can share them.

## Possibility

The possibility is that client information is captured once, into a shared client record, and every later step reads from it. The onboarding form writes directly into that record. Billing, payroll and delivery setup pull the details they need instead of asking for them. When the client updates something, it is changed once.

Platforms are built for this. Microsoft describes [Dataverse](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intro) as a store where data used by business applications is held in tables that several apps can share, with business rules to validate what is entered. [Business process flows](https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview) guide users through the same steps each time, so each onboarding stage builds on the previous one.

A shared record also shortens the problem described in [when client onboarding starts with a chain of emails](/patterns/when-client-onboarding-starts-with-a-chain-of-emails/), and reduces [the pain of customers repeating information across disconnected records](/impact/pain-of-customers-repeating-information-disconnected-records/).

## Intervention

Start by listing every piece of information collected from a new client and every place it is stored. Mark which items are collected or retyped more than once.

Agree a single client record that holds the core details: legal entity, registration and VAT numbers, contacts, sites, billing details and service scope. Replace the PDF form with a digital form that writes into that record.

Then change each team's setup step to start from the client record. Where systems cannot read it directly, use a simple export or integration rather than retyping. Track the number of information requests sent to new clients as a measure of progress.

## Practical next actions

1. Trace one recent onboarding and count every repeated request and retyping step.
2. List the core client details that every team needs.
3. Choose one shared client record to hold those details.
4. Replace document-based onboarding forms with a digital form that writes into the record.
5. Change each team's setup so that it starts from the shared record instead of an email.
6. Measure information requests per new client and aim to bring them down to one.

## Diagnostic questions

- How many times do we ask a new client for their registration or VAT number?
- Where would a new team member look to find a client's agreed service scope?
- When a client changes a contact person, how many places need to be updated?
- Does our onboarding form produce data we can use, or a document we must retype?

## Bottom line

When client information is collected but not reused, the business pays for the same facts several times and tells the client it is not listening. Capture information once into a shared client record and let every later step draw from it. Onboarding becomes faster, more accurate and more reassuring for the client.
