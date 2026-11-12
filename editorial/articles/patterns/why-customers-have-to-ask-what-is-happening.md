---
hub: patterns
record_id: PAT-076
slug: why-customers-have-to-ask-what-is-happening
title: Why Do Customers Have to Ask You What Is Happening?
description: When customers repeatedly ask for status information that already exists inside the business, the visible service request may actually be an information-access and operating-visibility problem.
lead: When customers repeatedly ask for status information that already exists inside the business, the visible service request may actually be an information-access and operating-visibility problem.
category: Customer Service, Status & Self-Service
published_date: 2026-09-01
updated_date: 2026-09-01
eyebrow: Pattern
tags:
  - Customer experience
  - Capacity
  - Speed
  - Scalability
cta_label: Operations Improvement
cta_href: /services/digital-operations-improvement/
side_title: Commercial value
side_text: The point is not to buy technology for its own sake. It is to determine whether this operating condition is consuming or constraining meaningful business value.
pattern_family: Customer Service, Status & Self-Service
observable_condition: Customers repeatedly contact the business for status information that already exists internally but is not proactively or directly available to them.
primary_identification: information-access, service-design and operational-visibility problem
commercial_value_dimensions: Customer experience, Capacity, Speed, Scalability
sources:
  - 5 Customer Service Trends You Need to Watch in 2026 | https://www.salesforce.com/service/customer-service-trends/
  - The quiet shift behind customer expectations | https://www.zendesk.com/blog/zendesk-insights/trends/the-quiet-shift-behind-customer-expectations/
  - What is Customer Self-Service? A Complete Guide | https://www.salesforce.com/service/customer-self-service/what-is-customer-self-service/
related:
  - The Pain of Business Systems That Do Not Talk to Each Other | /impact/business-systems-do-not-talk-integration-cost/
  - Why Growth Breaks Systems That Worked When the Business Was Smaller | /insights/why-growth-breaks-systems-that-worked-when-the-business-was-smaller/
related_position: before_sources
summary: Repeated status enquiries are often evidence that useful operational information is not reaching customers when they need it. Improving that flow can strengthen customer experience while reducing avoidable service work. If this condition is familiar in your business, explore Mellorca's solutions or start a conversation with us. We can look at how your operations work today, identify where the constraint sits and see how Mellorca can help.
---
## Observable condition

The customer sends an email: "Any update?" A service representative opens another system, asks operations, checks a spreadsheet or messages a colleague, then returns with the answer. A few hours later another customer asks the same kind of question.

Nothing appears broken. The service team is responding. But the business is repeatedly spending human effort to reveal information it already possesses.

### An illustrative example

The following scenario is illustrative and does not describe a specific organisation. A specialist furniture maker quotes customers a six-week lead time. Production status lives in the workshop's job board; delivery slots live in the transport planner's calendar; the customer record lives in the sales system. In week five, customers start emailing. Each enquiry takes the service team two or three internal messages to answer. When a batch is delayed, customers learn about it only when they ask, and some learn about it from the driver who does not arrive. The information existed throughout. It never travelled to the customer on its own.

### Warning signs

- "Where is my order?" or "any update?" is among the most common reasons customers get in touch.
- Service staff need to ask another team to answer a routine question.
- Contact volume rises in predictable places in the customer journey, such as just before an expected date.
- Customers learn about delays when they ask, rather than when the delay is known.
- Different agents give slightly different answers to the same question.
- A customer portal or tracking page exists, but customers still call to confirm what it says.

## Realisation

The significant question is not why customers ask. It is why they need to ask at all.

Salesforce's [2026 customer service trends](https://www.salesforce.com/service/customer-service-trends/) report highlights a gap between how proactive service teams believe they are and how proactive customers experience them to be: it reports that 61% of service professionals say their organisation addresses service issues proactively, while only 33% of customers agree that the typical company does this. As a vendor publication it should be read with that context, but the gap it describes is the gap this pattern is about.

Zendesk's analysis of [shifting customer expectations](https://www.zendesk.com/blog/zendesk-insights/trends/the-quiet-shift-behind-customer-expectations/) makes a related point: self-service succeeds when it is connected to the operational reality behind the interface. In its framing, the challenge is not automation itself but how well it is connected to the realities of the business.

> **Realisation prompt.** If the answer already exists somewhere inside your systems, why is a customer-service interaction required to reveal it?
>

### Why the condition persists

Status questions feel like good service. Customers get a friendly, personal answer, and agents feel useful. The cost is spread thinly across many short interactions, so it rarely appears as a single problem. And the information each answer depends on belongs to a different team, so no one function owns the experience of "knowing where things are".

## Identification

This pattern is usually an **information-access, service-design and operational-visibility problem**. The customer sees a service issue. Internally, the real constraint may be fragmented status data, missing events, weak process visibility or no mechanism for exposing appropriate information externally.

## Diagnosis

Status chasing tends to emerge when the process was designed for internal execution but not for external transparency. Common causes include:

- status is stored in operational systems that customers cannot access;
- different teams own different stages without a shared status model;
- important events do not trigger notifications;
- service staff cannot see a complete end-to-end view;
- the business waits for the customer to ask instead of designing proactive communication.

The shared status model is usually the missing piece. Each team tracks its own stage in its own terms: "awaiting materials", "in QC", "slot pending". None of those maps cleanly to what the customer wants to know, which is when they will receive what they ordered and whether anything has changed. Until somebody defines a small set of customer-meaningful states, and connects each internal event to one of them, every answer has to be assembled by hand. The internal version of this condition is described in [when a status update requires a staff member to investigate](/patterns/when-a-status-update-requires-a-staff-member-to-investigate/).

## Commercial impact

The commercial value at stake is primarily **customer experience, service capacity, response speed and scalability**. Repetitive status enquiries consume agent time without creating new information. They also make response quality dependent on how quickly the agent can reconstruct the current state.

As volume grows, the support workload can grow even when the underlying product or service has not become more complex. That is a scaling problem: each transaction can generate avoidable communication work. There is also a trust effect. A customer who has to chase once is more likely to chase again, and a delay that is discovered rather than communicated tends to feel worse than the same delay explained in advance.

## Common misidentification

The obvious fix is often "we need a chatbot" or "we need more service agents". Either may help in the right context, but neither solves a fragmented status model. A chatbot that cannot access trustworthy operational data simply becomes another place where the customer fails to get a definitive answer.

Customers are often willing to help themselves. Salesforce's guide to [customer self-service](https://www.salesforce.com/service/customer-self-service/what-is-customer-self-service/) reports that 61% of customers would rather use self-service channels for routine matters. That preference only becomes value when the self-service channel can give a reliable answer.

## Possibility

A better state is one in which relevant operational events automatically update a trusted status and, where appropriate, trigger a notification or become visible through self-service. Customers can see what is happening without learning the company's internal organisation chart, and agents spend more time on exceptions that actually require human help.

Proactive messages matter most at the moments customers already worry about: confirmation, a change of date, dispatch, and anything that goes wrong. For a fuller treatment, see [why proactive communication can remove entire support workloads](/patterns/why-proactive-communication-can-remove-entire-support-workloads/).

## Intervention

Map the most common "what is happening?" questions. Identify where the answer originates, how reliable it is, who is allowed to see it, and whether an event can update the customer automatically. The intervention may involve system integration, status models, event-driven workflows, customer portals, notification services or agent tooling.

A practical sequence:

1. Sample a few weeks of inbound contacts and tag the status questions.
2. Define four to six customer-facing states in plain language.
3. Map each internal event to the state it changes, and note the system that records it.
4. Give agents a single view of that status before exposing it externally.
5. Add proactive notifications for the changes that generate the most contacts, starting with delays.

The right sequence is operations first, interface second.

## Practical diagnostic questions

- What percentage of inbound service contacts are status questions?
- Can an agent answer them from one trusted view?
- Which answers already exist in operational systems?
- Which status changes could safely trigger proactive communication?
- Would self-service resolve the question, or would fragmented back-office data still force escalation?
- When a delay is known internally, how long until the customer is told, and by whom?

## Bottom line

When customers repeatedly ask for information the business already has, the pattern is not merely "high support volume". It is a sign that information is not flowing to the point where it creates value. Fixing that flow can improve service while releasing support capacity.
