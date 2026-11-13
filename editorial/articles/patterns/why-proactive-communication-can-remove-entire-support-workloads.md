---
hub: patterns
record_id: PAT-084
slug: why-proactive-communication-can-remove-entire-support-workloads
title: Why proactive communication can remove entire support workloads
description: Repeated status enquiries can indicate that customers are forced to request information the business could communicate proactively.
lead: When customers repeatedly ask for predictable status updates, part of the support workload may exist only because the business waits to be asked.
category: Customer Service, Status & Self-Service
published_date: 2026-09-04
updated_date: 2026-09-04
eyebrow: Pattern
tags:
  - Service cost
  - CX
  - Response time
cta_label: Digital Operations Improvement
cta_href: /services/digital-operations-improvement/
side_title: Commercial value
pattern_family: Customer Service, Status & Self-Service
observable_condition: Customers repeatedly contact support for predictable status information that already exists inside operational systems.
primary_identification: proactive service communication and event-notification problem
commercial_value_dimensions: Service cost, Retention, Response time, Customer experience
sources:
  - Planning and writing text messages and emails | https://www.gov.uk/service-manual/design/sending-emails-and-text-messages
  - Configure proactive engagement in Dynamics 365 Contact Center | https://learn.microsoft.com/en-us/dynamics365/contact-center/administer/configure-proactive-engagement
  - Configure a chat widget in Dynamics 365 Contact Center | https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/add-chat-widget
related:
  - The hidden cost of repetitive customer questions | /patterns/the-hidden-cost-of-repetitive-customer-questions/
  - When service quality depends on who picks up the ticket | /patterns/when-service-quality-depends-on-who-picks-up-the-ticket/
  - Why customer service becomes a human search engine | /patterns/why-customer-service-becomes-a-human-search-engine/
summary: Repeated status enquiries can be created by the business itself when known operational events are not communicated proactively. Event-driven updates can move simple information requests out of the reactive support queue.
---
## Observable condition

Customers email, call or message to ask whether an order was received, whether work has started, whether a request has been approved, or when the next step will happen. Service staff investigate, find a status that already exists somewhere internally, and relay it by hand.

The same questions arrive day after day. They are polite, simple and repetitive, and they fill the queue ahead of the enquiries that genuinely need investigation.

## Realisation

The visible demand is a support enquiry, but the underlying need is often information at the right moment. If the status is predictable and held in a system, waiting for the customer to ask creates avoidable work on both sides: the customer has to chase, and the business has to look up something it already knew.

This reframes part of the support workload. Some demand is not caused by problems at all. It is caused by silence. The business has, in effect, designed a process in which the customer must make contact to find out what is happening.

## Identification

This is a **proactive service communication and event-notification problem**. The business has operational events, such as order received, payment taken, engineer booked or application approved, but has not connected them to customer-facing communication.

Public service design has recognised this for some time. The [GOV.UK Service Manual guidance on sending emails and text messages](https://www.gov.uk/service-manual/design/sending-emails-and-text-messages) distinguishes transactional messages, such as confirming a completed transaction or telling someone their application has been approved, and notes that such messages reassure users that the service is working, reduce anxiety and stop users contacting the service needlessly.

## Diagnosis

The visible symptom is a high volume of status enquiries. The common assumption is that customers are impatient or that the support team needs more capacity. The structural cause usually sits elsewhere:

- **Fragmented status data.** The answer exists, but it is spread across an order system, a scheduling tool and a finance system, so no single event represents the customer’s progress.
- **No notification rules.** Nobody has decided which changes of status the customer should hear about.
- **Weak customer identity matching.** The system that knows the status cannot reliably link it to the customer’s contact details or preferred channel.
- **Reactive service design.** Support processes are built around inbound queues, so outbound communication is nobody’s responsibility.

Contact-centre platforms now support outbound, event-driven communication as standard configuration. Microsoft’s [documentation on configuring proactive engagement in Dynamics 365 Contact Center](https://learn.microsoft.com/en-us/dynamics365/contact-center/administer/configure-proactive-engagement) describes initiating outbound communication over voice and SMS, supplying audiences through file upload or an API, templating messages, and setting frequency limits and quiet hours so that customers are not over-contacted. It also asks administrators to choose a reliable unique identifier for contacts, which underlines the point that proactive communication depends on knowing exactly who the customer is.

## Commercial impact

The commercial value at stake is **service cost, capacity, response time, retention and customer experience**.

Repetitive status questions consume service capacity and lengthen queues for issues that genuinely require investigation or judgement. Each enquiry also signals a moment of uncertainty for the customer, and repeated uncertainty affects how a customer feels about the relationship. Reducing avoidable contact therefore improves both cost and experience at once: staff time moves to the cases that need it, and customers spend less time chasing.

## Common misidentification

The instinct may be to add agents, improve scripts or introduce a chatbot. Those measures can help, but they leave the root cause intact if customers still lack timely access to the information they need. A chatbot that answers “where is my order?” faster is still answering a question the customer should not have needed to ask. The related pattern [Why customers have to ask what is happening](/patterns/why-customers-have-to-ask-what-is-happening/) looks at this from the customer’s side.

## Possibility

A better model treats meaningful status changes as communication events. The customer receives the right update through the right channel, with a clear next step, while exceptions remain available for human support. Following the Service Manual’s advice, good messages say who they are from, explain what the customer needs to do, if anything, and include a reference the customer can quote if they do need to make contact.

In this model, the support team spends its time on delays, faults and decisions, which are the cases where a person adds value. Proactive updates also extend naturally to bad news: telling a customer about a delay before they notice it is usually received better than an explanation given after they chase.

## Intervention

1. **Classify the inbound demand.** Sample recent enquiries and group them by the question being asked.
2. **Find the answering event.** For each high-volume question, identify the operational event that changes the answer and the system where it is recorded.
3. **Validate identity and preferences.** Check that the event can be linked reliably to the right customer and their chosen channel.
4. **Design notification rules.** Decide which events trigger a message, what it says and what the customer should do next.
5. **Design the failure path.** Decide what happens when a notification cannot be sent or an expected event does not occur; [Why every automation needs a failure path](/insights/why-every-automation-needs-a-failure-path/) covers this.
6. **Start small and measure.** Begin with a few high-confidence events and observe whether inbound enquiries of that type fall.

## Practical diagnostic

### Warning signs

- “Where is my…?” or “Has anyone looked at…?” are among the most common enquiry types.
- Agents answer by looking up a status in another system and reading it back.
- Customers contact several channels about the same request.
- Enquiry volumes rise sharply whenever there is a delay, even a small one.
- Status data is complete internally but not visible to customers.
- Answering a status question requires staff to investigate, as described in [When a status update requires a staff member to investigate](/patterns/when-a-status-update-requires-a-staff-member-to-investigate/).

### Diagnostic questions

- Which customer questions repeat most often?
- Does the answer already exist in a system?
- What event makes that answer change?
- Which channel should carry the update?
- When should the workflow escalate to a person?

## Bottom line

If support teams repeatedly look up information that customers could have received automatically, part of the workload may be a communication-design problem rather than unavoidable service demand. Telling customers what is happening, at the moment it happens, can remove whole categories of enquiry and give the support team its time back.
