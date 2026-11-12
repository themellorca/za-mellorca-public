---
hub: patterns
record_id: PAT-130
slug: when-the-onboarding-checklist-exists-only-in-one-persons-memory
title: When Onboarding Depends on a Checklist in Someone’s Head
description: New clients and new staff get a good start only when a particular person is available. This article explains why that is fragile and how to move the checklist out of memory and into the process.
lead: New clients and new staff get a good start only when a particular person is available. This article explains why that is fragile and how to move the checklist out of memory and into the process.
category: Process & Workflow Operations
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Process & Workflow Operations
pattern_family: Process & Workflow Operations
observable_condition: New clients or staff receive a complete start only when one particular person is available; otherwise steps are skipped, repeated or done out of order.
primary_identification: Memory-held process: the onboarding sequence, its dependencies, owners and completion status are recorded nowhere that others can follow or check.
commercial_value_dimensions: Time to first revenue or productivity, compliance evidence, consistency of client experience and continuity during absence
sources:
  - How to Ace Internal documentation - The Workstream | https://www.atlassian.com/work-management/knowledge-sharing/documentation
  - What Is Workflow Automation? - IBM | https://www.ibm.com/think/topics/workflow-automation
  - What are lifecycle workflows? - Microsoft Entra ID Governance | https://learn.microsoft.com/en-us/entra/id-governance/what-are-lifecycle-workflows
related:
  - When Staff Need to Ask Who Approves What | /patterns/when-staff-need-to-ask-who-approves-what/
  - When Cash Collection Depends on Someone Remembering to Follow Up | /patterns/when-cash-collection-depends-on-someone-remembering-to-follow-up/
  - When New Employees Spend Their First Week Chasing Basics | /patterns/why-new-starters-lose-their-first-week-to-logins-templates-and-names/
summary: New clients and new staff get a good start only when a particular person is available. This article explains why that is fragile and how to move the checklist out of memory and into the process.
layout: plain
---
## Observable condition

When a new client signs, or a new employee arrives, a particular person knows what must happen. They remember to request the signed agreement, to ask for the tax clearance and bank letter, to create the accounts, to book the kick-off call, to tell finance, to add the person to the right group. They do it well. They have done it dozens of times, and have never needed to write it down.

When they are on leave, ill or simply busy, the process behaves differently. A step is skipped, or done twice, or done in the wrong order. A new client's first invoice goes to the wrong address. A new hire arrives and has no laptop. Everyone says "that is not how it usually goes", and they are right, because "usually" was a person.

An illustrative example: a Stellenbosch accounting practice onboards around fifteen new clients a month. The practice manager handles each in her head: engagement letter, FICA documents, SARS eFiling authority, and setting up the client on the practice software. When she took two weeks off in December, three clients began work with no engagement letter, and one without their identity verified.

## Realisation

The realisation is that the checklist exists, but its only copy is in one person's memory. The business believes it has an onboarding process. What it actually has is a person who performs one. The distinction does not matter on a normal day, and matters a great deal on the day that person is unavailable, on the day volume doubles, or on the day an audit asks to see the process.

The Atlassian guidance on documentation makes a related point about knowledge: if it lives only in someone's head, it is available only when they are, and the cost of finding it out later falls on everyone else. An onboarding sequence is one of the most valuable pieces of such knowledge, because every new client and employee passes through it.

**Realisation prompt:** if your onboarding person were unreachable for a fortnight, could a colleague complete a new client's set-up from written instructions alone, and would the result be the same?

## Identification

This is a pattern of memory-held process. The visible symptom is inconsistent onboarding that depends on who is doing it. The common assumption is that the people involved should be more careful. The structural cause is that the steps, their order, their owners and their completion are not recorded anywhere that others can follow or check.

The Pattern [the business process that only works because someone remembers](/patterns/the-business-process-that-only-works-because-someone-remembers/) describes the general case. This Pattern addresses onboarding in particular, where the cost lands on a person outside the business who has just made a commitment to it. The related Pattern [when client onboarding starts with a chain of emails](/patterns/when-client-onboarding-starts-with-a-chain-of-emails/) shows what happens when the memory is replaced by an inbox instead.

## Diagnosis

- **No written sequence.** Ask three people how onboarding works and receive three versions. None is wrong; none is complete.
- **The order matters, but nobody has recorded why.** Identity verification must precede the first invoice; access must follow a signed agreement. Only the experienced person knows these dependencies.
- **Completion is not visible.** There is no way to see at a glance which steps are done for a given client. The status of an onboarding is what the person says it is.
- **Exceptions are handled from instinct.** A client with a different legal structure, or a hire from outside the country, needs extra steps. The person adapts on the fly, so the exception is never captured for next time.
- **Handoffs rely on conversation.** The person tells finance, IT or the delivery team by walking over or by message. If it is forgotten, the receiving team finds out when the first problem arrives.
- **Nobody reviews the process.** It has never been tested by someone else, so errors and unnecessary steps accumulate and are never removed.

## Commercial impact

The commercial value at stake is time to first revenue or first productive work, compliance, consistency of client experience and continuity when people are absent.

The first cost is delay. Every skipped or late step pushes back the date on which a client can be served or an employee can be productive. The Impact note [manual customer onboarding, email checklists and revenue delay cost](/impact/manual-customer-onboarding-email-checklists-revenue-delay-cost/) shows how a few days at the start can multiply across many onboardings in a year.

The second cost is compliance exposure. Where onboarding includes identity verification, consent, or the collection of personal information, a missed step is more than an inconvenience. In South Africa, FICA customer due diligence obligations for accountable institutions, and the POPIA expectation that personal information is collected for a specific purpose, both rest on being able to show that the steps were done. A memory cannot be produced as evidence.

The third cost is inconsistency. One client receives a warm, complete welcome; another receives half of it. The difference depends on who was in the office, which is not something a client expects to be affected by.

The fourth cost is a limit on growth. The Pattern [when client onboarding becomes a growth constraint](/patterns/when-client-onboarding-becomes-a-growth-constraint/) describes how a business can sell faster than it can onboard. If the only way to onboard is through one person, the ceiling on growth is that person's diary.

## Common misidentification

The typical reaction to a missed step is to ask the person to be more careful or to send a reminder email to the team. This treats a process gap as a behavioural problem. Another is to create a long document of onboarding guidelines that is read once and then ignored. A document is a start, but it is not a checklist that is used on every case and shows what has been done.

A third is to assume the issue will be solved by a large system purchase. Often the work needed is first to describe the process; only then is it clear what any tool should do.

## Possibility

In a better state, onboarding is a defined sequence with named owners, visible status and clear triggers. A new case opens the checklist automatically when a deal is won or an offer is accepted. Each step is assigned, dated and ticked off by the person who completes it. Dependent steps do not start until their prerequisites are done. Anyone in the team can see how a given onboarding is progressing, and the manager can see all of them in one view.

The experienced person's knowledge is not lost; it is recorded and used, and their time is released for the exceptions that need judgement.

## Intervention

1. **Capture the sequence from the person who holds it.** Sit with them while they onboard one real case, and write each step as it happens, including the small ones they do without noticing.
2. **Add owner, trigger and evidence to each step.** Who does it, what starts it, and what shows that it is complete (a document, a ticked field, a created account).
3. **Mark the dependencies.** Note which steps cannot start until another finishes, and why.
4. **Put the checklist where work happens.** A template in a task or workflow tool, a CRM stage with required tasks, or a shared tracker that is opened for each new case. Microsoft's lifecycle workflows documentation illustrates how joiner tasks can be defined once and run for every new starter.
5. **Test it with someone else.** Have a colleague onboard a case using only the checklist and record where they got stuck.
6. **Review after each ten cases.** Add the exceptions that arose and remove steps that nobody needs.

## Diagnostic questions

- If your onboarding person left tomorrow, what exactly would be lost?
- Can you tell, for any client currently being onboarded, which steps are complete?
- Which onboarding steps carry a compliance obligation, and where is the evidence kept?
- When did a new client or employee last experience a gap that was explained as "unusual"?
- Who would you ask to check the process, and have they ever done so?

## Bottom line

A skilled person who carries the whole onboarding sequence in their head is a strength until they are absent, at which point the strength becomes a single point of failure. Writing the checklist down, assigning its steps and making its progress visible turns individual skill into a repeatable process that new clients and staff can rely on.
