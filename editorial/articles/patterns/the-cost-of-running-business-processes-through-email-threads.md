---
hub: patterns
record_id: PAT-306
slug: the-cost-of-running-business-processes-through-email-threads
title: The Cost of Processes That Move Through Email
description: When requests, approvals and orders travel as messages, nobody can see status without asking. Here is what that costs and how to give the process a home.
lead: When requests, approvals and orders travel as messages, nobody can see status without asking. Here is what that costs and how to give the process a home.
category: Process, Ownership & Handoffs
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Process, Ownership & Handoffs
pattern_family: Process, Ownership & Handoffs
observable_condition: Requests, approvals and orders move between people as email threads, and status can only be learned by asking whoever last handled the message.
primary_identification: Process state held in correspondence: no shared record, named owner or visible clock exists for work that moves through the inbox.
commercial_value_dimensions: Staff productivity, response speed, accuracy of orders and quotes, and capacity to grow without adding administrators
sources:
  - What Is a Workflow? - IBM | https://www.ibm.com/think/topics/workflow
  - What Is Business Process Automation? - IBM | https://www.ibm.com/think/topics/business-process-automation
  - What is Process Mining? - IBM | https://www.ibm.com/think/topics/process-mining
related:
  - When Nobody Knows Who Owns the Next Step | /patterns/when-nobody-knows-who-owns-the-next-step/
  - Why Teams Keep Chasing Sign-Off | /patterns/why-teams-keep-chasing-sign-off/
  - When Access Requests Depend on Messages and Memory | /patterns/when-system-access-is-granted-through-chat-messages-and-memory/
summary: When requests, approvals and orders travel as messages, nobody can see status without asking. Here is what that costs and how to give the process a home.
layout: plain
---
## Observable condition

A quote request arrives as an email. Someone forwards it to the person who prices it, who replies to the sender with a spreadsheet attached, copying a manager. The manager answers with "approved, but check the freight", and by Friday there are three versions of the quote in four inboxes. The customer accepts one of them. Nobody can say, without searching, which version it was.

Nothing in this story is dramatic, and that is the point. Email is the business's workflow engine. Orders, approvals, supplier queries, leave requests and invoice disputes all travel as messages, and the status of each one is whatever the last message in the thread happened to say. The business runs, but it runs on a trail of messages that only the participants can read.

An illustrative example: a Midrand electrical wholesaler handles special-order requests from contractors by email. Each request passes between the sales desk, the buyer and the accounts clerk. When a contractor phones to ask where a request stands, the answer takes ten minutes, because the person who answers has to find the thread, work out who has it and ask them what they did.

## Realisation

The realisation is that email is a delivery mechanism, not a process. A process has defined steps, a current state, an owner at each step and a record of what happened. An email thread has a sender, a recipient and a timestamp. Everything else, including who is responsible, what is outstanding and what was decided, lives in the heads of the people involved or in the wording of a message nobody has re-read.

IBM's overview of workflows describes a workflow as a defined sequence of tasks with clear inputs, outputs and responsibilities. An email chain can imitate that sequence, but it cannot enforce it. Nothing stops a step being skipped, a message being sent to the wrong person or a request sitting unopened over a long weekend.

**Realisation prompt:** pick one request that came in last week. Without opening anyone's inbox, can you say who has it now, what they are waiting for and how long it has been there?

## Identification

This is a pattern of process state held in correspondence. The visible symptom is the constant stream of "just checking where this is" messages. The common assumption is that people are disorganised or that the team needs a better email habit, such as folders, flags or rules. The structural cause is that the process has no home other than the inbox, so the only way to learn its status is to ask someone who has read the thread.

Related Patterns cover neighbouring versions of the problem. [When client onboarding starts with a chain of emails](/patterns/when-client-onboarding-starts-with-a-chain-of-emails/) looks at one specific journey, and [when business knowledge lives in inbox history](/patterns/when-business-knowledge-lives-in-inbox-history/) looks at what is lost when the inbox is the archive. This Pattern concentrates on the running cost of using email as the engine of everyday operations.

## Diagnosis

- **Status has to be asked for.** There is no board, queue or list to look at. If you want to know where something is, you interrupt a person.
- **Ownership is implied.** Whoever was last on copy is assumed to be responsible, which means that sometimes two people act and sometimes nobody does.
- **Attachments multiply.** Each reply carries a new copy of the spreadsheet or document, so there are several competing versions and no single current one.
- **Rules live in individuals.** Who approves what, and above which amount, is something people simply know. A new starter or a locum covering leave has to guess.
- **Volume hides the urgent.** Operational messages share an inbox with newsletters, notifications and social chat. The request that matters is one unread line among eighty.
- **Nothing can be measured.** Without timestamps for each stage, nobody can say how long approvals really take or where requests wait the longest.

## Commercial impact

The commercial value at stake is staff productivity, response speed, accuracy and the business's ability to grow without adding administrators.

The first cost is time spent searching and chasing. Each status question consumes the time of both the asker and the person asked, and the work being asked about does not move while they talk. Across a team of fifteen, a handful of those interruptions per person per day add up to a meaningful share of paid hours, at salaries that are not small in Rand terms.

The second cost is delay. A request that waits in someone's inbox while they are in a meeting, on leave or simply behind is invisible to everyone else. Customers experience this as slowness, and they do not distinguish between an internal handover problem and a lack of interest in their business.

The third cost is error. Decisions made on the wrong version of a quote, or on a thread where the earlier correction was missed, produce credit notes, rework and awkward calls. The Pattern [the hidden cost of re-keying order information](/patterns/the-hidden-cost-of-re-keying-order-information/) describes the same family of mistakes arising when information is retyped from a message into a system.

The fourth cost is scale. A process that runs on goodwill and diligent reading can handle forty requests a week. It struggles at two hundred, because the number of people who must be kept informed grows faster than the volume does.

There is also a governance angle. Under POPIA, a business is expected to know where personal information is held and who has access to it. When customer details travel as attachments through personal and shared mailboxes, that question becomes hard to answer.

## Common misidentification

The usual response is an email discipline campaign: standard subject lines, shared mailboxes, colour-coded flags. These help at the margin, and shared mailboxes are often a reasonable stopgap. But they improve the quality of the inbox without turning it into a process. The status still lives in the thread.

The second response is to buy a project or ticket tool and ask everyone to use it. If the tool does not match the real steps, people continue by email and update the tool afterwards, which makes it a second place to maintain. The third response is to blame individuals who "don't read their email". In most cases they are doing exactly what the system asks of them, which is to be the system.

## Possibility

In a better state, a request becomes a record the moment it arrives. It has a reference, an owner, a current step and a clock. Email still plays a role, but as a notification and an entry point rather than the place where the work lives. A manager can see every open request on one screen, sorted by age, and the person asking "where is this?" can be answered from the record in seconds.

IBM's overview of business process automation notes that automating routine, rules-based steps reduces manual handling and gives organisations more consistent execution. The first win is usually not automation itself but visibility: knowing what is open, with whom and for how long.

## Intervention

1. **Choose one email-driven process.** Pick the one that generates the most chasing, such as special orders, supplier queries or leave and expense approvals.
2. **Map it from real threads.** Read ten recent examples and write down each step, who did it and how long it waited. Process mining, which IBM describes as reconstructing a process from event data, is the formal version of this exercise, and a spreadsheet is enough to start.
3. **Name the states and the owners.** Agree four to six stages, such as received, priced, approved and sent, and one accountable person for each.
4. **Give the process a single home.** Use a shared list, board or workflow tool that creates a record when the email arrives, and keep the reference in every later message.
5. **Set a visible clock.** Decide what "too long" means at each stage and show it, so ageing requests surface without anyone going looking.
6. **Review the numbers monthly.** Look at volume, time per stage and rework, then change one thing at a time.

The Pattern [when a status update requires a staff member to investigate](/patterns/when-a-status-update-requires-a-staff-member-to-investigate/) is a useful companion for the visibility step.

## Diagnostic questions

- If your most experienced administrator resigned tomorrow, how long would it take to find every request currently in flight?
- How many versions of the average quote or order document exist by the time it is approved?
- Which stage of your most email-heavy process takes longest, and how do you know?
- How many status-chasing messages did your team send last week?
- Where would you point an auditor who asked who approved a particular transaction and when?

## Bottom line

Email is excellent at carrying a message and poor at carrying a process. When the two are confused, the business pays for it in chasing, delay and avoidable error, and the cost grows with every new customer. The remedy is rarely a bigger tool. It is giving each important process a visible state, a named owner and a record, and letting email go back to being the envelope.
