---
hub: patterns
record_id: PAT-081
slug: why-service-teams-spend-their-day-chasing-internal-answers
title: Why service teams spend their day chasing internal answers
description: When customer-facing staff must ask colleagues for status, stock or policy before replying, they become a human connector between systems. Reduce that.
lead: When customer-facing staff must ask colleagues for status, stock, policy or account facts before they can reply, the service team becomes a human connector between systems. Here is why, and how to reduce it.
category: Customer Service & Support Operations
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Customer Service & Support Operations
pattern_family: Customer Service & Support Operations
observable_condition: Service staff are busy all day but slow to resolve requests because most contacts need one or more internal questions to colleagues before the customer can be answered.
primary_identification: Internal answer-chasing: the facts needed to resolve a request sit in other systems and people, with no routine way to reach the agent at the point of need.
commercial_value_dimensions: Customer experience, service capacity, handling cost, staff retention and colleague productivity
sources:
  - Failure Demand | https://beyondcommandandcontrol.com/failure-demand/
  - Information Scent: How Users Decide Where to Go Next | https://www.nngroup.com/articles/information-foraging/
  - Muda, Mura, Muri - Get a Quick Introduction - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/muda-mura-muri/
related:
  - The hidden cost of repetitive customer questions | /patterns/the-hidden-cost-of-repetitive-customer-questions/
  - Why teams keep asking the same internal questions | /patterns/why-teams-keep-asking-the-same-internal-questions/
  - When customers call for records your systems already hold | /patterns/when-customers-call-for-records-your-systems-already-hold/
summary: When customer-facing staff must ask colleagues for status, stock, policy or account facts before they can reply, the service team becomes a human connector between systems. Here is why, and how to reduce it.
layout: plain
---
## Observable condition

A customer phones to ask where their installation stands. The agent who answers has a screen full of the customer's account, and none of it answers the question. So the agent opens a chat to the technical team, which replies that scheduling has the date. Scheduling is in a meeting. The agent puts the customer on hold, writes to the planner, checks a shared spreadsheet, and calls back twenty minutes later with an answer that is still partly a guess.

Across a day, much of the service team's work looks like this. "Has the credit note been processed?" "Which warehouse is this stock in?" "Is this the latest quote?" "Can we waive this fee?" The work the team is paid for, helping the customer, is wrapped inside a continuous round of finding things out from colleagues.

An illustrative example: a Durban distributor of electrical components has a service team of eleven. A two-week tally shows that on an average day each agent sends or receives about twenty internal messages asking for information, and that more than half of customer calls need at least one such question before they can be closed.

## Realisation

Customers experience a slow answer. Staff experience a busy day. What both are really seeing is that the team has become the connector between systems and people that do not talk to each other. The agent is doing the job of a search function, a workflow and a notification, by hand and through goodwill.

This kind of work has a name in service design. [Failure demand](https://beyondcommandandcontrol.com/failure-demand/), a term associated with John Seddon and described on the Beyond Command and Control site, is the demand caused by a failure to do something or do something right for the customer. Chasing calls and repeat contacts are the visible tail of it. The internal version is its mirror image: each chase for an answer is a signal that the answer should have been available where the agent was working.

Nielsen Norman Group's work on information foraging describes how people follow the "scent" of information and abandon sources when it becomes too costly to reach it. In a service team, the cheapest source is the nearest colleague, which is why the chat window becomes the main system.

**Realisation prompt:** how many times yesterday did someone on your service team ask a colleague for information that already existed in one of your systems?

## Identification

This is a pattern of internal answer-chasing. The visible symptom is service staff who are always busy but slow to resolve. The common assumption is that the team is understaffed or poorly trained. The structural cause is that the information needed to resolve a customer request is scattered across systems and people, with no routine way for it to reach the agent at the moment of need.

The published Pattern [why customer service becomes a human search engine](/patterns/why-customer-service-becomes-a-human-search-engine/) describes the general condition. This Pattern looks at the working day of the team: the cost of each internal question, and how the interruptions compound for both the asker and the person asked. The related Pattern [when a status update requires a staff member to investigate](/patterns/when-a-status-update-requires-a-staff-member-to-investigate/) covers the case where the question is a status check.

## Diagnosis

- **Answers live in the wrong place.** Delivery dates sit in the logistics tool, credit notes in the accounting package, and contract terms in a signed PDF. The service system holds the conversation but not the facts.
- **Only some people have access.** Permissions were set for departments, not for tasks. Agents cannot see stock or invoices, so they have to ask someone who can.
- **Policy is unwritten.** Can the agent offer a refund, a courtesy visit, an extension? When the rules sit in a manager's head, every borderline case becomes a question.
- **Status is not recorded as work happens.** If technicians and planners update the job only at the end of the day or the week, the service team cannot know where things stand.
- **Chat makes asking free.** Instant messaging removes the friction from asking, and so removes the pressure to fix the cause. Each question is cheap for the asker and expensive in total.
- **Knowledge is tribal.** The experienced agent knows who to ask and what to look for. New agents learn the map of people before they learn the systems, which is why the pattern gets worse as turnover rises.

## Commercial impact

The commercial value at stake is customer experience, service capacity, staff retention and the cost of handling each request.

The direct cost is handling time. Each internal question adds minutes to a call or hours to a ticket, and the time is paid for in salaries and in call-queue length. The indirect cost lands on the people who are asked. A planner or accountant who answers a dozen questions a day from the service team loses their own deep work, and the delay spreads upstream.

Customers feel it as long holds, "I will call you back", and repeat contacts. Repeat contacts in turn raise volume, which increases pressure on the team, which makes more chasing likely. The Impact page on [managers chasing status updates](/impact/managers-chasing-status-updates-visibility-cost/) describes the equivalent loop at management level.

It also affects people. Service staff who spend their day asking for help they should not need feel ineffective, and the best leave. In South Africa, where recruitment and training are expensive and notice periods are long, that churn is a real cost.

## Common misidentification

The common fixes target the symptom. Hiring more agents adds more people asking the same questions of the same few colleagues. A longer training programme helps the new agent learn whom to ask, but not why they must ask. Banning internal chat during calls only removes the quickest route to an answer.

Another response is to build a large internal knowledge base. Articles on how to handle a return do help, but a knowledge base cannot tell the agent that this customer's order shipped this morning. Lean thinking calls waiting, motion and unnecessary processing forms of waste. The Lean Enterprise Institute's description of muda, mura and muri is a helpful lens: an agent hunting for answers is performing motion that adds nothing the customer values.

## Possibility

In a better state, the agent opens the customer record and sees what they need: open orders, delivery status, invoices and credit notes, last conversations, and the rules for what they may offer. When information must come from another team, it arrives automatically, because the other team's system updates the record or posts into it. Questions that remain go to a defined owner with a target time, rather than to whoever is online.

Not everything needs to be integrated. A well-chosen read-only view of the three or four systems agents consult most often can remove a large share of the questions. The aim is to bring the answers to the agent, not to make the agent better at finding them.

## Intervention

1. **Tally the questions.** For two weeks, have agents mark every internal question with a one-word reason: status, stock, price, policy, account, other. The tally shows where the largest sources are.
2. **Remove the top three.** For each of the most frequent categories, decide whether the answer should be visible to the agent, delegated by a written rule, or recorded at source. Start with the one that is easiest.
3. **Review access.** Check what agents can read, not only what they can change. Read-only access to stock, invoices and delivery tracking often solves a lot. Keep POPIA in mind: grant access for a purpose and no wider than needed.
4. **Write down the rules.** Put discretion limits, standard concessions and escalation paths on one page, and keep it where agents work. See [when service quality depends on who picks up the ticket](/patterns/when-service-quality-depends-on-who-picks-up-the-ticket/) for why consistency matters.
5. **Make updates part of the work.** Ask upstream teams to record status when it changes, as a step in their process rather than a favour to the service team.
6. **Measure the questions.** Track internal queries per contact. A falling number is the best sign that the underlying causes are being removed.

## Diagnostic questions

- How many internal questions does an average agent ask in a day?
- Which three questions are asked most often, and where does the answer live?
- What can agents see, and what must they ask someone to look up?
- Who answers the most questions from the service team, and what are they not doing as a result?
- How long does a new agent take to learn whom to ask?

## Bottom line

Service teams that spend their day chasing internal answers are working as human connectors between systems. The fix is not more agents or more chat, but removing the most frequent questions at source: make the answers visible, write down the rules and record status as it happens. Customers get faster answers, colleagues get their time back, and the service team gets to do the work it was hired for.
