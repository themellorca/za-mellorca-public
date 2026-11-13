---
hub: patterns
record_id: PAT-083
slug: why-customers-keep-emailing-to-ask-for-an-update
title: The operational reason “Any update?” Emails keep arriving
description: Repeated status-chasing emails are rarely about impatient customers. They show a gap in how progress is recorded and shared. Remove the cause.
lead: Repeated status-chasing emails are rarely about impatient customers. They point to a gap in how the business records and shares progress. Here is how to read that signal and remove the cause.
category: Customer Experience & Service Operations
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Customer Experience & Service Operations
pattern_family: Customer Experience & Service Operations
observable_condition: Customers send repeated 'any update?' emails and staff answer each one only after checking with a colleague.
primary_identification: Unprompted-status failure: progress is not captured when it changes and no stage change triggers a customer message, producing failure demand.
commercial_value_dimensions: Staff capacity, customer confidence, repeat business and delivery-promise reliability
sources:
  - Failure Demand | https://beyondcommandandcontrol.com/failure-demand/
  - What Is Customer Relationship Management (CRM)? - IBM | https://www.ibm.com/think/topics/crm
  - What is Order Management? - IBM | https://www.ibm.com/think/topics/order-management
related:
  - When customer frustration is really an information flow problem | /patterns/reading-customer-complaints-as-signs-of-missing-information/
  - Why decision-makers keep asking for status updates | /patterns/why-decision-makers-keep-asking-for-status-updates/
  - Why service teams spend their day chasing internal answers | /patterns/why-service-teams-spend-their-day-chasing-internal-answers/
  - The cost of processes that move through email | /patterns/the-cost-of-running-business-processes-through-email-threads/
summary: Repeated status-chasing emails are rarely about impatient customers. They point to a gap in how the business records and shares progress. Here is how to read that signal and remove the cause.
layout: plain
---
## Observable condition

The inbox contains a growing thread of short messages. "Any update on my order?" "Just following up on the quote." "Can you let me know where this stands?" Some arrive twice in one day. Others are sent to three different people at once, in case one of them knows. The team replies to each in turn, usually after checking with someone else, and the customer thanks them and goes quiet until the next time.

The business reads this as customers being demanding. A better reading is that each message is a small piece of evidence that the customer could not find out something they needed to know without asking.

An illustrative example: a Midrand company that installs solar and backup power systems. After a customer pays a deposit, the job passes through a site survey, equipment ordering, scheduling and installation. At every stage the customer hears nothing until someone remembers to phone. Meanwhile the office receives a dozen "any update?" emails a week, and the project coordinator spends most of Tuesday answering them.

## Realisation

The realisation is that an "any update?" email is a symptom of a process whose progress lives in people's heads, not in a place the customer or the front-line staff can see. If the information existed in a shared, current form, the customer would be told before they needed to ask, or could look it up themselves.

The idea has a name in service management. John Seddon's concept of [failure demand](https://beyondcommandandcontrol.com/failure-demand/) describes the work that arrives because the organisation did not do something right or clearly the first time, as distinct from value demand, which is the work customers actually want. A chase email is a textbook example: the customer does not want to write it, and the business does not want to read it.

This reframes the question. Instead of asking how to reply to updates faster, the business can ask why the update was not already there.

**Realisation prompt:** count the status-chasing emails and calls last week. For how many of them could a person in your team answer the question only after asking a colleague?

## Identification

This is a pattern of unprompted-status failure. The visible symptom is a stream of follow-up messages. The common assumption is that customers are impatient or that the team needs to reply more quickly. The structural cause is that progress is not captured at the moment it changes, and nothing in the process turns a change of stage into a message.

The published Pattern [why customers have to ask what is happening](/patterns/why-customers-have-to-ask-what-is-happening/) introduces the customer side of this. This Pattern concentrates on the operational chain behind the email: where status is recorded, who can see it, and what triggers a message.

## Diagnosis

- **Status is recorded late, if at all.** A job moves from "ordered" to "received" on the warehouse floor, but the system learns about it when someone updates a spreadsheet the following day.
- **Only one person knows.** The coordinator or account manager holds the picture. When they are out, nobody can answer, and the customer waits longer and emails again.
- **Stages are internal, not customer-facing.** The team tracks "awaiting supplier confirmation" and "QA hold", but the customer needs to know one thing: when will it arrive. Without a translation from internal stage to customer meaning, the message is never written.
- **Nothing triggers a message.** A change of stage does not prompt a notification. Updates depend on someone's good intentions, which are strongest when the office is quiet.
- **Promised dates are not stored.** The date told to the customer lives in an email. When it slips, nobody is alerted, and the customer discovers the slip when the date passes.
- **Replies are written from scratch.** Each answer is composed individually after investigation. The Pattern [when a status update requires a staff member to investigate](/patterns/when-a-status-update-requires-a-staff-member-to-investigate/) describes this loop.

## Commercial impact

The commercial value at stake is staff capacity, customer confidence, repeat business and the reliability of the delivery promise.

The first cost is time. Each chase email takes a few minutes to read, a few more to check, and a few more to reply to. The Impact note [manual customer progress updates and status message labour cost](/impact/manual-customer-progress-updates-status-message-labour-cost/) shows how this adds up across a month. The people absorbing it are often the most knowledgeable on the team, who are then not available for work that moves jobs forward.

The second cost is confidence. A customer who has to ask for news begins to suspect that nothing is happening. This is damaging even when the job is on schedule, because the customer cannot tell the difference between quiet and stuck. In a market where buyers can compare suppliers easily, it affects referrals and repeat orders more than most businesses expect.

The third cost is interruption. Chase messages arrive at random and break concentration. The Pattern [why proactive communication can remove entire support workloads](/patterns/why-proactive-communication-can-remove-entire-support-workloads/) describes how a small number of well-timed messages can remove a large share of incoming queries.

The fourth cost is lost learning. When every update request is answered individually, nobody sees the pattern: that a particular supplier is always late, or that the survey step routinely takes twice as long as quoted. The feedback that would improve the process is buried in the inbox.

## Common misidentification

The first reflex is to hire a person to answer enquiries, or to introduce a rule that every email gets a reply within the hour. Both increase the capacity to respond without reducing the need to. The second reflex is a customer portal added on top of a process whose status is not captured. The portal then shows the same stale information more formally, or it is updated by hand and quickly neglected.

A third response is to ask customers not to chase. That tends to worsen the relationship and does not touch the cause.

## Possibility

In a better state, each stage change is recorded when it happens, by the person doing the work, in the one place everybody can see. A short customer-facing set of stages is mapped to the internal ones. A change of stage sends a plain message automatically, and a slipping date is flagged to the team before it reaches the customer. When a customer does ask, anyone on the team can answer in seconds from the same record.

The result is not a silent inbox but a different kind of contact: fewer "where is it?" messages and more genuine questions that need a human.

## Intervention

1. **Tag a week of enquiries.** Mark each "any update?" message with the stage the job was in. The distribution shows where silence is costing most.
2. **Define four to six customer-facing stages.** Write each in the customer's language, such as "order confirmed", "stock allocated", "out for delivery".
3. **Capture the change at the source.** Whoever completes a stage records it, in a shared tool, as part of finishing it. Do not rely on a later clean-up.
4. **Store the promised date.** Keep it on the job record and alert the owner when it is at risk.
5. **Automate the routine message.** Use the tools you already have, such as workflow rules in your CRM or ticketing software, to send a templated note when the stage changes. IBM's overview of CRM describes these notification and tracking functions as standard.
6. **Review the remainder monthly.** The enquiries that still arrive show where the process or the message is still unclear.

## Diagnostic questions

- How many "any update?" messages did you receive last week, and how many could have been avoided?
- Can anyone in the team answer a status question, or only one person?
- When a promised date slips, who finds out first: you or the customer?
- Which of your internal stages does the customer actually care about?
- What would change if every stage change sent a message automatically?

## Bottom line

A chase email is a customer asking the business to describe itself. When the process records its own progress and shares it at the right moments, most of those emails never need to be written. The reward is not just a quieter inbox, but a team that spends its day moving work forward and customers who trust what is happening without having to ask.
