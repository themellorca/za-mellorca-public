---
hub: insights
record_id: INS-127
slug: the-difference-between-necessary-human-work-and-avoidable-manual-work
title: The difference between necessary human work and avoidable manual work
description: Some work needs a person for judgement, relationships or accountability. Much only needs one because systems do not connect. A test to tell them apart.
lead: Some work needs a person because it requires judgement, a relationship or accountability. Much more work needs a person only because systems do not connect or inputs arrive incomplete. A practical test for telling them apart, task by task.
category: Automation
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Automation
sources:
  - Google SRE - What is Toil in SRE: Understanding Its Impact | https://sre.google/sre-book/eliminating-toil/
  - Muda, Mura, Muri - Get a Quick Introduction - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/muda/
  - https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf | https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf
related:
  - How to know whether an automation actually ran | /insights/how-to-know-whether-an-automation-actually-ran/
  - What business automation should actually solve | /insights/what-business-automation-should-actually-solve/
  - Why automating a broken process makes the problem worse | /insights/why-automating-a-broken-process-makes-the-problem-worse/
summary: Some work needs a person because it requires judgement, a relationship or accountability. Much more work needs a person only because systems do not connect or inputs arrive incomplete. A practical test for telling them apart, task by task.
layout: plain
---
Every business has work that only people should do, and work that people do only because nothing else has been arranged. From the outside, and often from the inside, the two look the same. Both take time. Both involve the same staff using the same systems. Both are described as "part of the job".

Telling them apart matters because the responses are opposite. Necessary human work should be protected, supported and given time. Avoidable manual work should be removed, redesigned or automated. Confusing the two produces either automation that strips out judgement the business needs, or skilled people spending their days moving data and chasing information.

## What makes human work necessary

In Mellorca's experience, human involvement is genuinely necessary for three reasons.

### Judgement

Some decisions depend on context that cannot be fully written down: whether to extend credit to a long-standing customer in a difficult month, how to respond to an unusual complaint, whether a quote is worth pursuing at a lower margin. These decisions involve weighing factors that change from case to case. A system can provide information for them, but the decision itself belongs with a person.

### Relationships

Negotiating, reassuring, persuading and resolving conflict depend on trust between people. A customer facing a delayed delivery may accept an explanation from someone they know when they would not accept an automated message.

### Accountability

Some actions need a named person to answer for them: approving a large payment, signing off a financial statement, cancelling a contract. Even advocates of automation recognise this. OpenAI's [practical guide to building agents](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf) recommends that actions which are sensitive, irreversible or high-stakes, such as cancelling orders, authorising large refunds or making payments, should trigger human oversight until confidence in the system's reliability grows.

## What makes manual work avoidable

Avoidable manual work exists to compensate for something. Five forms account for most of it.

1. **Transfer.** Moving information from one system to another by retyping or copy-and-paste.
2. **Chasing.** Following up for missing information, approvals or status updates that the process should have supplied.
3. **Compensating checks.** Checking work because inputs are unreliable, not because the decision is risky.
4. **Reformatting.** Rearranging information into a different layout for a report, a customer or another team.
5. **Finding.** Searching for documents, records or answers that should be in a known place.

Google's site reliability engineering guidance describes a similar category it calls [toil](https://sre.google/sre-book/eliminating-toil/): work that is manual, repetitive, automatable, tactical, without enduring value, and that grows in proportion to volume. The guidance is careful to separate toil from overhead such as meetings and planning, and from engineering work that produces lasting improvement. That separation is useful in any business. Not everything that feels like a chore is toil, and not everything a skilled person does is skilled work.

Lean practice uses the term [muda](https://www.lean.org/lexicon-terms/muda/) for any activity that consumes resources without creating value for the customer. Avoidable manual work is muda in office form. The customer does not value the fact that their order was typed twice.

## The hidden mix inside one role

The difficulty is that necessary and avoidable work are usually tangled together in the same role and often in the same task. A credit controller's decision about whether to put an account on hold is necessary human work. The forty minutes spent collecting the account history from three systems before making that decision is not.

This is why automation projects that target whole roles tend to disappoint, and why projects that target the preparation around decisions tend to succeed. The goal is to strip away the avoidable work surrounding a judgement, so the person can spend their time on the judgement itself. The pattern is described in [when people are used to move data instead of make decisions](/patterns/when-people-are-used-to-move-data-instead-of-make-decisions/).

## A task-by-task test

For any recurring task, ask five questions:

| Question | If yes |
| --- | --- |
| Would two experienced people sometimes reach different, reasonable conclusions? | Likely necessary judgement |
| Does the outcome depend on trust or a relationship with the other party? | Likely necessary human work |
| Must a named person be accountable for the result? | Keep a human decision, but support it |
| Does the task exist because information is missing, wrong or in the wrong place? | Likely avoidable |
| Would the task disappear if two systems were connected or an input were validated? | Avoidable |

Most tasks will produce a mix of answers. That is the useful result: it shows which part of the task to protect and which part to remove.

## An illustrative example

Consider a hypothetical East Rand logistics company where three experienced dispatchers plan daily delivery routes. Management believes dispatching is skilled work that cannot be automated, and in part they are right. Deciding how to handle a breakdown, which customer to prioritise when a truck is late, or whether to accept a same-day request requires judgement and relationships with drivers and customers.

Applying the test to a week of their work shows a different picture of how the time is spent. A large share goes to copying orders from email into the routing spreadsheet, phoning the warehouse to confirm what has been picked, and sending each customer an individual delivery time by message. None of that requires a dispatcher's experience. It exists because orders, warehouse status and customer notifications are not connected.

Removing that work would not replace the dispatchers. It would give them more time for the decisions that actually need them. This is an illustrative scenario, not a client case study.

## Common mistakes

- **Treating volume as proof of necessity.** A task being done often and by skilled people does not make it skilled work.
- **Automating the judgement.** Replacing a decision with a rule because the decision is slow, when the slowness is really in the preparation.
- **Removing accountability by accident.** Automating an approval step without asking who now answers for the outcome.
- **Accepting compensating checks permanently.** If a check exists because inputs are unreliable, fix the inputs and the check can often go.

The balance between reducing error and keeping judgement is explored further in [how to reduce human error without removing human judgment](/insights/how-to-reduce-human-error-without-removing-human-judgment/).

## When avoidable work is worth keeping

Classifying a task as avoidable does not mean it must be removed immediately. Some avoidable work costs less to keep than to fix. A transfer done twice a month, or a report reformatted once a quarter, may not justify the cost of building and maintaining an integration. The point of the classification is to make that a deliberate decision rather than an unexamined habit.

The useful order of attack is usually volume first, then risk. Avoidable work that grows with every order, customer or employee deserves attention before avoidable work that stays flat. Avoidable work that sits directly in front of an important decision, delaying it or feeding it unreliable information, deserves attention before work that sits off to one side.

## What better looks like

In a well-designed operation, skilled people spend most of their time on decisions, relationships and accountable sign-offs, with the information they need already assembled. Transfer, chasing, reformatting and searching are rare, because systems connect and inputs arrive complete. Where manual work remains, it is there by choice, because volumes are low or the cost of automation is not justified, rather than by default.

The first step is usually measurement, because avoidable manual work is rarely recorded anywhere. [How to find the manual work nobody is measuring](/insights/how-to-find-the-manual-work-nobody-is-measuring/) sets out how to surface it. Where the result shows substantial avoidable work around important decisions, Mellorca's [business automation](/services/business-automation/) work focuses on removing that work while leaving the decisions with the people who should make them.
