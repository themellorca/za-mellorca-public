---
hub: impact
record_id: CPS-099
slug: customers-repeating-information-systems-cannot-share-disconnected-journey-revenue-cost
title: Asking Customers Twice: The Revenue Cost of Disconnected Customer Journeys
description: A customer gives their details to sales, again to onboarding, again to accounts and again to support. Each repetition slows revenue, adds service cost and tells the customer the business is not joined up.
lead: A customer gives their details to sales, again to onboarding, again to accounts and again to support. Each repetition slows revenue, adds service cost and tells the customer the business is not joined up.
category: Customer Experience
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Customer Experience
commercial_domain: Customer Experience
primary_pain: Customers have to repeat their information to different teams because the business's systems cannot share it
primary_cost_mechanism: Delayed time to first invoice, abandoned sign-ups, repeated administration across onboarding, finance and support, inconsistent records and billing errors, and weaker renewal and expansion
sources:
  - Your Silos Are Showing: 16,000+ Customers on Importance of Consistency | https://www.salesforce.com/eu/blog/data-silos-and-customer-needs-south-africa/
  - https://inforegulator.org.za/popia/ | https://inforegulator.org.za/popia/
related:
  - The hidden cost of asking customers for the same information twice | /patterns/the-hidden-cost-of-asking-customers-for-the-same-information-twice/
  - Support requests without owners: The cost of slow answers and frustrated customers | /impact/support-requests-without-clear-owners-cost/
  - What Sales Promised: The Cost of Support Working Blind | /impact/support-cannot-see-sales-promises-handover-gaps-service-failure-cost/
summary: A customer gives their details to sales, again to onboarding, again to accounts and again to support. Each repetition slows revenue, adds service cost and tells the customer the business is not joined up.
layout: plain
---
## Four forms for one customer

A business customer signing up with an IT services provider in Sandton gave its company details, contacts and requirements to the salesperson during the proposal. After signing, the onboarding team sent a form asking for the same company details and contacts. Accounts then sent a separate credit application asking for the registration number, VAT number and billing contact again. A week after going live, the first support call began with the service desk asking who the customer was and what they had bought.

None of this was rude or careless. Each team followed its own process in its own system. From the customer's side, the provider looked like four companies that did not talk to each other.

## Why customers end up repeating themselves

Repetition is a symptom of systems that cannot share information along the customer journey. The guide [why customers are asked to repeat their details](/insights/why-customers-are-asked-to-repeat-their-details/) explains the mechanics. Typical causes include:

- Sales records live in a CRM that onboarding and accounts cannot see.
- Onboarding uses forms or email rather than the system of record.
- Finance needs specific fields, such as registration or tax numbers, that sales never captures.
- Support uses a ticketing platform with its own customer list, which is not linked to the CRM.
- Handoffs are done by email, so information is summarised, not transferred.

An existing article on [customers repeating information because of disconnected records](/impact/pain-of-customers-repeating-information-disconnected-records/) covers the service frustration. This one focuses on what repetition costs along the journey, from signature to first invoice to renewal.

## What customers expect

Customer research consistently shows that people notice. Salesforce's summary of its State of the Connected Customer research for South Africa, published on its [blog on data silos and customer needs](https://www.salesforce.com/eu/blog/data-silos-and-customer-needs-south-africa/), reported that 92% of South African respondents expected consistent interactions across departments, and 63% said they felt they were dealing with separate departments rather than one company. These are vendor survey figures, and they should be read as an indication of expectations rather than a measure of any particular business's losses. They match what most owners hear directly from customers.

## Where the cost appears

The figures below are illustrative.

### Slower time to revenue

If onboarding waits for a customer to complete forms they believe they have already answered, the start date moves. A business that signs ten new monthly-billed clients a quarter at R25,000 a month, and loses an average of ten days to repeated information gathering, delays more than R80,000 of billing every quarter.

### Abandoned sign-ups

For smaller customers and online sign-ups, every additional form increases the chance that the customer gives up. The lost revenue is rarely measured because the customer simply never finishes.

### Service and administration time

Each repeated request requires staff to send it, chase it, capture it and reconcile it with what is already held. Across onboarding, finance and support, this can add hours to every new customer. The problem connects to [manual customer onboarding through email and checklists](/impact/manual-customer-onboarding-email-checklists-revenue-delay-cost/).

### Inconsistent records and errors

When the same details are captured several times, they are captured slightly differently. Invoices go to the wrong contact, support cannot find the account and reports count the same customer more than once.

### Weaker renewal and expansion

Customers who experience the business as disconnected are less likely to trust it with more work. The cost appears at renewal, often months after the first friction.

## A compliance angle

Collecting the same personal information repeatedly, in different forms and systems, also makes it harder to protect. The Information Regulator's [guidance on POPIA](https://inforegulator.org.za/popia/) sets out that organisations processing personal information must comply with the conditions for lawful processing and maintain appropriate security safeguards. Each extra copy in an email, a form tool or a spreadsheet is another place where those safeguards must apply. Collecting once and sharing internally under control is easier to secure as well as easier for the customer.

## Why each team thinks its form is necessary

When businesses look at repeated requests, each team usually has a good reason for its own form. Finance needs verified registration and tax details before granting credit. Onboarding needs technical contacts that sales never asked for. Support needs site details and service levels. The problem is not that each team needs information. It is that each team collects it separately, at a different time, in a different tool, and often asks again for what others already hold because it cannot see it. Bringing the teams together to agree one set of required fields, and the point in the journey at which each is collected, normally removes most of the repetition without reducing what any team receives. It also exposes fields that nobody actually uses, which can simply be dropped.

## Collect once, use many times

The principle is simple: capture each piece of customer information once, at the point where it is first needed, into a system of record, and let other teams use it from there. The guide on [designing a customer intake that collects once](/insights/how-to-design-a-new-customer-intake-that-collects-once-and-starts-right/) sets out a practical approach. Typical elements include:

- A single intake that captures what sales, onboarding and finance all need, agreed across those teams.
- A clear system of record for customer details, with other systems linked to it rather than holding their own copies.
- Handoffs that pass the record, not an email summary.
- Support and service tools that show the customer's history and what was sold.
- A rule that staff check existing records before asking a customer for anything.

## Practical next actions

1. **Walk a recent customer's journey.** List every time they were asked for information, by whom, through which channel and into which system.
2. **Mark each repeated request.** Note what was asked again and why the team could not get it from an existing record.
3. **Measure time from signature to first invoice.** Identify how much of it is spent waiting for information the business already had.
4. **Agree one intake across teams.** Sales, onboarding and finance decide together what must be captured at the start.
5. **Name a system of record for customer details.** Link onboarding, finance and support tools to it rather than keeping separate lists.
6. **Ask new customers about their experience.** A single question about repeated requests in the first month gives a simple ongoing measure.

Customers rarely complain formally about repeating themselves. They form an impression that the business is hard to deal with, and that impression costs revenue at sign-up, during service and at renewal.
