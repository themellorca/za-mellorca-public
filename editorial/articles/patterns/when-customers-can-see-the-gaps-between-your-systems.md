---
hub: patterns
record_id: PAT-048
slug: when-customers-can-see-the-gaps-between-your-systems
title: When Customers Can See the Gaps Between Your Systems
description: A complaint is logged, then a sales email arrives, then a reminder for a disputed invoice, and the next caller asks for the same details again. When marketing, service, billing and delivery each hold their own view of the customer, fragmentation becomes something customers experience.
lead: A complaint is logged, then a sales email arrives, then a reminder for a disputed invoice, and the next caller asks for the same details again. When marketing, service, billing and delivery each hold their own view of the customer, fragmentation becomes something customers experience.
category: Disconnected Systems & Integration Friction
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Disconnected Systems & Integration Friction
pattern_family: Disconnected Systems & Integration Friction
observable_condition: Customers repeat their details to different staff, receive marketing or reminders that contradict an open complaint or dispute, and find that preferences given through one channel are ignored in another.
primary_identification: Customer-visible fragmentation: customer-facing systems each hold a partial customer view, with no shared identity, interaction history or preferences.
commercial_value_dimensions: Customer retention, revenue, reputation, service capacity and compliance
sources:
  - Section 69 Direct marketing by means of unsolicited electronic communications - POPIA | https://popia.co.za/section-69-direct-marketing-by-means-of-unsolicited-electronic-communications/
  - Section 16 Quality of information - POPIA | https://popia.co.za/section-16-quality-of-information/
  - Data unification overview - Dynamics 365 Customer Insights | https://learn.microsoft.com/en-us/dynamics365/customer-insights/data/data-unification
related:
  - When Sales, Finance and Support Disagree About the Same Customer | /patterns/when-sales-finance-and-support-disagree-about-the-same-customer/
  - The Hidden Cost of Signing In to Every System Separately | /patterns/the-hidden-cost-of-signing-in-to-every-system-separately/
  - Why Teams Keep Switching Between Apps to Finish One Task | /patterns/why-teams-keep-switching-between-apps-to-finish-one-task/
summary: A complaint is logged, then a sales email arrives, then a reminder for a disputed invoice, and the next caller asks for the same details again. When marketing, service, billing and delivery each hold their own view of the customer, fragmentation becomes something customers experience.
layout: plain
---
## Observable condition

A customer emails to complain about a late delivery. The next morning they receive a cheerful marketing email inviting them to order again. That afternoon, the accounts team sends a reminder about an invoice the customer has already disputed. When they phone, the person who answers cannot see the complaint, asks for their account number and details again, and promises to call back. The call-back comes from someone else, who asks the same questions.

Nobody in the business did anything wrong. Marketing sent its scheduled campaign. Accounts followed its reminder rules. The service desk logged the call. Each team acted correctly on what its own system showed. But the customer does not deal with teams or systems. They deal with one business, and to them it looks as if that business does not know who they are.

An illustrative example: a Cape Town home-services company with about thirty-five staff used separate tools for marketing email, bookings, invoicing and customer service. A customer who had asked to stop receiving marketing messages continued to receive them, because the request had been noted in the service tool, not in the marketing list. The customer complained publicly. The opt-out had been honoured in one system and ignored in another.

## Realisation

Inside the business, fragmentation feels like an efficiency problem: extra work, duplicate capture, slow reports. Outside, it is experienced as inconsistency. Customers repeat themselves, receive messages that contradict each other, get different answers from different channels and are asked for information they have already given. Each of these is a direct view of the gaps between the business's systems.

Some of these gaps carry legal weight. Section 69 of the Protection of Personal Information Act requires that people receiving electronic direct marketing are given a reasonable opportunity to object, on each communication, and contact details through which they can ask for communications to stop. If an objection is recorded in one system and marketing runs from another, honouring it depends on someone copying it across. Section 16 also requires reasonably practicable steps to keep personal information complete, accurate, not misleading and updated, which is harder when the same customer exists in several versions.

The tools to close these gaps exist. Microsoft describes data unification in its customer data platform as combining customer data sources to create a single customer profile, removing duplicates and matching records across tables. Platforms differ, but the principle is general: the customer should be one record, or one connected view, across the systems that talk to them.

**Realisation prompt:** if a customer contacted you through three different channels in one week, would each person they spoke to know about the other two contacts?

## Identification

This is a pattern of **customer-visible fragmentation**: separate systems for marketing, sales, service, billing and delivery each hold a partial view of the customer, and the inconsistency between them reaches the customer directly. The visible symptoms are repeated questions, contradictory messages and unhonoured preferences. The common assumption is that these are service mistakes by individuals. The structural cause is that customer-facing processes draw on systems that do not share a common customer record or a common view of recent interactions.

This overlaps with [one customer existing differently in three systems](/patterns/why-does-one-customer-exist-differently-in-three-systems/), which focuses on the data. This article focuses on what the customer experiences as a result. The related condition where [customers have to ask what is happening](/patterns/why-customers-have-to-ask-what-is-happening/) covers status updates in particular.

## Diagnosis

- **Each channel has its own system.** Marketing email, bookings, the service desk, the accounting system and the delivery app were chosen separately and keep their own customer lists.
- **Interaction history is not shared.** A complaint, a dispute or a preference recorded in one system is invisible to the others.
- **Automated messages run blind.** Campaigns and reminders follow rules inside their own system, with no check against open complaints, disputes or objections elsewhere.
- **Identity is inconsistent.** The customer has a different identifier, spelling or contact detail in each system, so even a willing colleague cannot match them quickly.
- **Nobody owns the customer journey.** Each team owns its channel. Nobody is responsible for the experience across them.

## Commercial impact

The commercial value at stake is customer retention, revenue, reputation, service capacity and compliance.

Customers judge a business by its consistency. Being asked for the same details repeatedly, receiving a sales message during a dispute or getting different answers from different people erodes trust. Some customers leave quietly; others complain publicly, and the damage reaches people who were never customers. The Impact page on [customers repeating information because records are disconnected](/impact/pain-of-customers-repeating-information-disconnected-records/) examines this cost.

Service capacity is also consumed. Each repeated question, call-back and escalation takes staff time that a shared view would have saved. Contradictory messages generate further contacts to sort them out.

Finally, the compliance exposure is concrete. Continuing to market to someone who has objected, or acting on outdated personal information, is a legal risk as well as a service failure.

## Common misidentification

A common response is customer-service training or scripting. Better service skills help, but staff cannot reference information their system does not show them.

Another response is to buy a new customer-service platform. If it is not connected to marketing, billing and delivery, it becomes one more partial view.

A third is to treat each incident separately: apologise, fix the record, move on. Without addressing the structure, the same type of incident recurs with the next customer.

## Possibility

In a better state, every system that communicates with customers draws on a shared customer identity and a shared view of recent interactions. Preferences such as marketing objections are recorded once and respected everywhere. Automated messages check for open complaints or disputes before sending. A person answering any channel can see the customer's recent history. The customer gives information once and is recognised after that.

For the home-services company, the first change was to make marketing objections flow automatically from every system into the marketing list. The second was to give service staff a view of bookings and invoices alongside the customer's service history, using the platforms' existing integrations.

## Intervention

1. **Walk the journey as a customer.** List every way a customer is contacted or can make contact, and which system sends or receives each.
2. **Find the contradictions.** Identify where messages can conflict, for example marketing during a complaint or reminders during a dispute.
3. **Agree one customer identity.** Decide which system holds the authoritative customer record and how others link to it. The Insight on [deciding what should be the system of record](/insights/how-to-decide-what-should-be-the-system-of-record/) sets out how.
4. **Centralise preferences and objections.** Ensure a marketing objection recorded anywhere is applied everywhere, promptly.
5. **Add suppression checks to automated messages.** Hold back campaigns and routine reminders for customers with open complaints or disputes.
6. **Give front-line staff a connected view.** Show recent interactions from other channels to whoever is speaking to the customer.

## Practical diagnostic questions

- How many separate systems send messages to your customers?
- If a customer objects to marketing in a phone call, how does your email system find out?
- Can the person answering the phone see open complaints, disputes and recent orders?
- How often do customers say they have already given you the information you are asking for?
- Who is responsible for the customer's experience across all channels?

## Bottom line

Disconnected systems are an internal problem until a customer sees the joins. Repeated questions, contradictory messages and ignored preferences tell customers that the business does not know them, and some of those gaps carry legal risk. Giving every customer-facing system a shared identity, shared preferences and shared recent history turns separate channels into one consistent relationship.
