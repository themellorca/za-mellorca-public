---
hub: impact
record_id: CPS-159
slug: no-written-business-recovery-plan-improvising-during-crisis-financial-cost
title: No Written Recovery Plan: What Improvising in a Crisis Costs
description: When a fire, outage or cyber incident hits a business with no written recovery plan, decisions are made under stress and the Rand cost grows with every hour of confusion.
lead: When a fire, outage or cyber incident hits a business with no written recovery plan, decisions are made under stress and the Rand cost grows with every hour of confusion.
category: Risk and Continuity
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Risk and Continuity
commercial_domain: Risk management and business continuity
primary_pain: The business has no written plan for how it will keep serving customers and restore operations after a serious disruption, so every decision is made under pressure.
primary_cost_mechanism: Extended downtime, duplicated effort, poor decisions made in a panic, lost customers and slower insurance and supplier engagement, all multiplied by the hours spent working out who does what.
sources:
  - Business Continuity Planning | https://www.ready.gov/business/emergency-plans/continuity-planning
  - Architecture strategies for disaster recovery - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery
  - Small Business Cybersecurity Corner | https://www.nist.gov/itl/smallbusinesscyber
related:
  - How Much Data Could You Lose? The Cost of an Undefined Recovery Point | /impact/undefined-recovery-point-how-much-data-business-can-lose-financial-risk/
  - The Spreadsheet Only One Person Understands: Financial and Continuity Risk | /impact/business-run-on-spreadsheet-one-person-understands-financial-continuity-risk/
  - A Recovery Plan That Depends on One Person Is Not a Plan | /impact/recovery-plan-depends-on-one-employee-unavailable-person-financial-risk/
summary: When a fire, outage or cyber incident hits a business with no written recovery plan, decisions are made under stress and the Rand cost grows with every hour of confusion.
layout: plain
---
## The morning the plan is a conversation in the car park

A Bloemfontein wholesaler arrives at work to find that a burst pipe overnight has flooded the server cupboard and half the ground floor. Staff gather in the car park. The owner asks who has the insurance details. Nobody is certain. The finance manager asks whether the accounting data is backed up and where. Someone thinks the IT contractor handles that, but nobody has his number saved except the office manager, who is on leave. Customers are phoning to ask about deliveries due that day, and no one has been given the job of answering them.

Nothing in this scene is about a lack of effort. Everyone is working hard. What is missing is a document that says who decides, who calls whom, what comes back first and what customers are told. In its absence, the business improvises, and improvisation during a crisis is slow, inconsistent and expensive.

This article is about that missing document: a written business recovery plan. It sits alongside pages on specific technical questions, such as [not knowing recovery time after a major outage](/impact/not-knowing-recovery-time-after-major-outage-unplanned-downtime-cost/). Here the focus is on the whole business, including people, premises, suppliers and communication, and the cost of having none of it written down.

## What improvising actually costs

The costs of a disorganised response fall into predictable groups.

### Hours lost to working out the basics

In the first hours, a business without a plan spends its time answering questions that could have been settled in advance: Who is in charge? Where do we work? Which customers are most urgent? Which system do we restore first? Each unanswered question stalls other people. If ten people spend half a day waiting for decisions, that is five person-days of paid time lost before real recovery has started. These numbers are illustrative, but the pattern is consistent.

### Longer downtime

Downtime cost is usually quoted per hour or per day, and every unplanned hour adds to it. A plan does not prevent the disruption, but it removes the false starts. Staff try the wrong fixes, restore systems in the wrong order and discover missing passwords or licence keys only when they are needed.

### Decisions made in a panic

Under stress, owners may pay inflated prices for emergency equipment, agree to unfavourable terms with a recovery supplier or promise customers dates they cannot meet. Most of those decisions could be made better in a calm hour.

### Customers and suppliers who hear nothing

Silence costs more than bad news. A customer who cannot reach you for two days will order elsewhere, and some will not return. Suppliers who are not told what is happening may hold orders, restrict credit or ask for payment up front.

### Insurance and legal friction

Insurers expect prompt notice and evidence of loss. If the policy number, the broker's contact and an asset list are not to hand, claims take longer to start. Where personal information is affected, the business also has statutory duties, such as notifying the Information Regulator and the people concerned, and these are far easier to meet when the steps were written down earlier.

### Staff stress and turnover

The people who carry the improvisation, usually the owner and two or three senior staff, absorb the strain. In the weeks after, resignations and burnout become part of the true cost.

## What a recovery plan is, and is not

A recovery plan is not a thick binder. For a small business it can be ten pages or fewer. It answers a short list of questions in plain language and is stored where people can reach it when the office or the main systems are unavailable. The US Ready.gov guidance on [business continuity planning](https://www.ready.gov/business/emergency-plans/continuity-planning) lists the same core elements: understanding which functions are essential, identifying what they depend on, and setting out how to keep them going or restore them. Microsoft's guidance on [disaster recovery](https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery) makes the technical version of the same point, that recovery targets and procedures should be defined before an incident.

It is also not the same as a backup. Backups are one input to the plan, and our pages on [single backup methods with no fallback](/impact/single-backup-method-no-recovery-fallback-cost/) and [backups that are never tested](/impact/backups-never-tested-restore-financial-cost/) explain why. A plan says what happens after the restore is possible, including who runs it and in what order.

## What a short plan contains

- **Roles and contacts.** A decision-maker and a deputy, plus phone numbers for every employee, key customers, suppliers, the IT contractor, the insurance broker and the landlord.
- **Critical services.** The three to five things the business must keep doing, such as taking orders, paying salaries and invoicing, ranked by urgency. This is the idea behind [organising recovery plans around business services, not servers](/discovery/why-recovery-plans-should-be-organised-around-business-services-not-servers/).
- **Dependencies.** The systems, people, premises and suppliers each critical service needs, and an alternative where one exists.
- **Recovery targets.** How long each service can be down, and how much recent data can be lost.
- **Communication scripts.** Short draft messages for staff, customers and suppliers, ready to send.
- **Where to work.** A fallback location or remote-working arrangement, and what staff need to use it.
- **Essential records.** Insurance policies, licence keys, account numbers and administrator credentials stored securely and available offline.

## Keeping the plan alive

A plan written once and forgotten is almost as bad as none. Contacts go out of date, systems change and new staff never see it. Review it every six months, update it whenever you change a key supplier or system, and rehearse it. A one-hour table-top exercise, where the group talks through a scenario such as a power failure or a ransomware message, will uncover gaps at almost no cost. The NIST [small business cybersecurity resources](https://www.nist.gov/itl/smallbusinesscyber) include material on planning for incidents and recovery that can be adapted for this exercise.

## Practical next actions

1. **List your critical services.** Write down the three to five activities that would hurt most if they stopped for a day, and rank them.
2. **Name the decision-maker and a deputy.** Record how each can be reached outside office hours and what authority they have to spend money.
3. **Build the contact sheet.** Collect mobile numbers for staff, key customers, suppliers, your IT contractor and your insurance broker, and store a copy offline and with a trusted second person.
4. **Write the first-hour checklist.** Set out the first ten actions after any serious disruption, from making people safe to contacting the insurer and informing customers.
5. **Draft three messages.** Prepare short notices for staff, customers and suppliers that need only dates and details filled in.
6. **Run a one-hour rehearsal.** Walk through a realistic scenario with your team, record what was unclear and fix those gaps within a month.

## What you get for a few hours of writing

A written plan will not stop the pipe from bursting. It changes the first morning. People know where to go, who decides and what to say. Systems return in a sensible order, customers hear from you before they hear from anyone else, and the owner spends the day directing recovery instead of inventing it. The cost of the plan is a few hours of thought, and the cost of not having one is paid by the hour once something goes wrong.
