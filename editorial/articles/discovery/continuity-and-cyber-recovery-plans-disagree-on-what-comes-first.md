---
hub: discovery
record_id: DISC-375
slug: continuity-and-cyber-recovery-plans-disagree-on-what-comes-first
title: Continuity and cyber recovery plans disagree on what comes first
description: Two teams keep two plans with different service lists, priorities and contacts. Agree one list of critical services and targets, link both plans to it and rehearse ransomware together.
lead: Two teams keep two plans with different service lists, priorities and contacts. Agree one list of critical services and targets, link both plans to it and rehearse ransomware together.
category: Business Continuity & Resilience
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Business Continuity & Resilience
problem_domain: Business Continuity & Resilience
problem_owner: Business continuity or risk lead, with the head of information security
budget_owner: COO or CIO
sources:
  - https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-34r1.pdf | https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-34r1.pdf
  - #StopRansomware Guide - CISA | https://www.cisa.gov/stopransomware/ransomware-guide
related:
  - RTO targets are copied from templates rather than business impact | /discovery/why-recovery-time-targets-should-come-from-business-impact-not-templates/
  - Why critical services end up depending on one cloud region by accident | /discovery/critical-services-depend-on-one-cloud-region-by-accident/
  - Why pricing rules end up copied across the CRM, spreadsheets and the ERP | /discovery/why-the-same-pricing-rules-are-maintained-in-three-places-and-drift-apart/
summary: Two teams keep two plans with different service lists, priorities and contacts. Agree one list of critical services and targets, link both plans to it and rehearse ransomware together.
layout: plain
---
Picture a Midrand freight and logistics company in the weeks before its cyber-insurance renewal. The underwriter asks a plain question in a video call: if ransomware encrypted your systems tomorrow, which services would you restore first, and how long would it take? The risk manager answers from the business continuity plan. Dispatch and customer billing come back within eight hours, because the business cannot move freight without them.

The head of information security, on the same call, answers from the ransomware recovery plan. Identity services and backups come first, then the ERP, then email, and dispatch comes last because it depends on three other systems. The two answers do not match. Each plan was approved by a different committee and each is correct on its own terms. Neither team knew the other's document said something different, and the contact list in the recovery plan still names a vendor engineer who left the supplier last year.

The operating condition is plain: the business keeps continuity plans and cyber recovery plans separately, and they disagree about what matters most, what comes first and who to call. That matters to the COO and the CIO because the disagreement is invisible until an insurer, an auditor or a real attack forces both plans into use on the same day.

## The problem in plain language

Most mid-sized businesses have two sets of recovery documents. The first is the business continuity plan, usually owned by risk or operations. It describes how the business keeps trading when something goes wrong: which processes matter most, how long each can stop, what manual workarounds exist and who makes decisions.

The second is the cyber recovery plan, usually owned by IT or information security. It describes how the technology is brought back after an attack such as ransomware: how to isolate affected systems, which backups to trust, in what order to rebuild, and who to call at the supplier, the insurer and the incident response firm.

Each plan makes sense to the team that wrote it. Each is built from that team's own view of the business. The continuity plan lists business processes in the language of the business. The cyber plan lists systems in the language of IT. Each has its own idea of priority, its own contact list and its own review schedule.

During a ransomware attack both plans apply at once. Staff are told by the business to restore dispatch, and told by IT to rebuild identity first. Each instruction is reasonable, and they pull in different directions. The people who must decide are working from different documents with different numbers.

This differs from [recovery plans organised around servers instead of business services](/discovery/why-recovery-plans-should-be-organised-around-business-services-not-servers/). That problem is about how a single plan is structured. This one is about two plans, each internally coherent, that were never reconciled with each other.

## What the buyer is actually trying to solve

Continuity, risk and information security leads put this in practical terms. Which plan do we follow when both apply? Why do the two teams give different answers about recovery order? Who is the contact for each system, and is the list the same in both plans? What do we tell the insurer or auditor?

The outcome they want is one agreed picture. One list of the services that matter, each with an owner and an agreed recovery target. Both plans refer to that list instead of keeping their own. One contact tree. Exercises that bring both teams into the same room with the same scenario. A joint review, so that a change in one plan prompts a check of the other.

## Evidence and system mechanism

### Standards expect the plans to be coordinated

NIST's [Contingency Planning Guide for Federal Information Systems](https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-34r1.pdf) addresses this directly. It describes a suite of plans, including the business continuity plan, the information system contingency plan and the cyber incident response plan, and says that because there is an inherent relationship between an information system and the business process it supports, the plans must be coordinated during development and updates, so that recovery strategies and supporting resources neither negate each other nor duplicate efforts.

The guide also says continuity and contingency planning are often confused. Continuity planning normally applies to the business itself, and its ability to continue critical functions during and after an emergency. Contingency planning normally applies to information systems and the steps to recover them. Cyber incident response planning normally focuses on detection, response and recovery from a computer security incident. It states that the business continuity planner must coordinate with information system owners so that the continuity plan's expectations and the systems' actual capabilities are matched.

It describes the relationship between the plans in specific terms. A cyber incident response plan is system-focused and may activate a system contingency plan or a disaster recovery plan, depending on the extent of the attack, and it may be included as an appendix of the business continuity plan. These are not independent documents. One triggers the other.

### Recovery targets must connect the business and the systems

The same guide explains how the numbers fit together. Its business impact analysis identifies the processes a system supports and the maximum tolerable downtime the business will accept. It then sets a recovery time objective for each system resource, which must normally be shorter than the downtime the business can tolerate, because reprocessing and other work add time. The guide says the results of the analysis should feed the continuity plans and the disaster recovery plan alike.

If the business continuity plan and the cyber recovery plan each carry their own targets, they will drift. A continuity plan that promises dispatch within eight hours and a cyber plan that restores identity, backups and the ERP before dispatch cannot both be right unless someone has added up the time.

### Ransomware makes the gap sharper

The CISA [#StopRansomware Guide](https://www.cisa.gov/stopransomware/ransomware-guide) shows why ransomware tests the two plans together. It recommends maintaining offline, encrypted backups and regularly testing their availability and integrity in a disaster recovery scenario, because many ransomware variants try to find and delete or encrypt accessible backups. It recommends creating, maintaining and regularly exercising a cyber incident response plan and an associated communications plan that includes response and notification procedures for ransomware and data extortion incidents, and ensuring that a hard copy and an offline version of the plan are available.

Those are the technical team's tasks. Their purpose is to serve business priorities, and the communications plan involves senior managers, legal advisers and customers. No single team can complete them alone.

| Gap | Effect |
| --- | --- |
| Each plan has its own list of critical services | Two different answers to "what comes first?" |
| Recovery targets differ between plans | Promises made to the business cannot be kept by IT |
| Separate contact trees | Out-of-date or conflicting contacts in the first hours |
| Plans reviewed on different schedules | One is updated and the other is not |
| Exercises run separately | Business and technical teams never test their hand-offs |
| Neither plan names which one leads in a cyber event | Delay while people decide who is in charge |

### What South African law expects when a compromise occurs

POPIA adds a deadline-shaped reason to get this right. The [Protection of Personal Information Act, 4 of 2013](https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf) says in section 22 that where there are reasonable grounds to believe that personal information has been accessed or acquired by an unauthorised person, the responsible party must notify the Information Regulator and the affected data subjects. The notification must be made as soon as reasonably possible after the compromise is discovered, taking into account the legitimate needs of law enforcement and any measures reasonably necessary to determine the scope of the compromise and to restore the integrity of the responsible party's information system.

A business that cannot say which systems hold which personal information, or in what order it will restore its systems, is poorly placed to decide quickly what to tell the Regulator and the people affected. Confirm with your information officer how the notification duty fits into your own incident response.

## Why this becomes urgent

A cyber-insurance renewal is the usual trigger. Insurers now ask detailed questions about recovery: which systems, in what order, how long, who decides, how recovery has been tested. The questionnaire may be completed by one team and the follow-up call attended by another. When the two teams give different answers in front of an underwriter, the inconsistency becomes visible to someone outside the business.

An audit or a customer's security review can have the same effect. A regulator or a large customer may ask for the continuity plan and the cyber recovery plan together. A mismatch is easy to see once both documents are on the table.

The most expensive trigger is a real attack, because the business discovers the disagreement while systems are encrypted and people are waiting for instructions. By then there is no time to reconcile anything.

## Economic consequence

The cost of two unreconciled plans shows up in several places:

- **Slower recovery.** Time lost in the first hours while the business and IT argue about which service comes first, or while staff follow instructions that conflict.
- **Conflicting priorities.** Effort spent restoring the system the business plan names while the technical plan says its dependencies must come first, so the wrong work is done in the wrong order.
- **Wrong contacts.** Calls to people who have left, to vendors whose contracts have changed or to numbers that no longer work.
- **Duplicated effort.** Two analyses of what matters, two contact lists, two review cycles and two exercise calendars, each consuming time from the same people.
- **Weaker insurance and audit positions.** Inconsistent answers to an underwriter or auditor can lead to extra questions, added conditions or a weaker standing, depending on the insurer.

As an illustrative example only, suppose the continuity plan promises dispatch within eight hours but the cyber plan's dependency order means dispatch cannot be restored until hour thirty. In an attack, the business plans for one outcome and gets another, and the difference is paid for in missed deliveries and lost customers. The figures are invented, but the gap between two documents that were never reconciled is real in many businesses.

When the response has to be improvised across two plans, it becomes the pattern described in [incident response that is improvised every time](/discovery/automation-incident-response-improvised/), with each person using the document they know and filling gaps from memory.

## Root cause

The root cause is that continuity plans are owned by risk or operations and cyber recovery by IT security, built on different service lists, priorities and contact trees. Each owner is accountable for their own plan. Nobody is accountable for the two plans fitting together.

A second cause is that the plans are built from different inputs. The continuity plan draws on a business impact analysis done with business managers. The cyber plan draws on a technical inventory kept by IT. The two exercises were done years apart, with different people, and nobody compared the results.

A third cause is that the plans are tested apart. A tabletop exercise on continuity involves the business and a ransomware drill involves IT. The moment where the two teams hand work to each other, which is the moment that matters in a real attack, is never rehearsed.

## Practical intervention

### Practical next actions

1. **Agree one list of critical services.** Hold a short working session with the business, IT, information security and risk. Build a single list of the services the business cannot do without, named in business terms, such as dispatch, customer billing, payroll and customer portal. Name an owner for each.
2. **Set one recovery target per service.** For each service, agree the maximum downtime the business can tolerate, the recovery time objective for the systems behind it, and how much data loss is acceptable. Check that the system targets are shorter than the business tolerance, and record where they are not.
3. **Map the dependencies that decide the order.** For each service, list what it needs to run, including identity, network, backups and supporting systems. Use this to set a recovery order that both teams accept, and write down where a business priority has to wait for a technical dependency.
4. **Link both plans to the shared list.** The continuity plan and the cyber recovery plan should each point to the same service list and the same targets, not hold their own copies. Where a number appears in either plan, it comes from the list.
5. **Build one contact tree.** Combine the lists into a single set of contacts, with names, roles, alternates and the date each was last confirmed. Include suppliers, the insurer, legal advisers, the incident response firm and the person who handles notifications to the Information Regulator.
6. **State which plan leads in a cyber event.** Write down who declares an incident, who makes recovery decisions, who decides to activate the continuity plan and how the business and IT hand work between them.
7. **Run joint exercises with a cyber scenario.** Bring business and technical people together to walk through a ransomware scenario. Include the decisions that cross teams: which service to restore first, how to run manual workarounds, what to tell customers, and when and how the business would notify the Regulator and affected people. Record where the two plans disagree.
8. **Capture lessons and feed both plans.** Write an after-action report with named actions. Update the shared list, both plans and the contact tree. Where a lesson changes how the business is protected, see [incident lessons that never change the controls](/discovery/why-incident-reviews-must-change-the-controls-that-failed/) for why it often does not.
9. **Review together.** Put both plans on one review calendar. Review them at least once a year, after a major system or organisational change and after every incident or exercise. Keep an offline copy of both plans and the contact tree, since systems may be unavailable in an attack.

## Diagnostic questions

- If ransomware hit tomorrow, would the business plan and the cyber plan give the same answer about what to restore first?
- Do both plans use the same list of critical services and the same recovery targets, and who maintains it?
- Do the two contact lists match, and when was each last checked?
- Who decides which plan leads in a cyber incident, and is that written down?
- When did the business and IT last run an exercise together on the same scenario?
- If an underwriter asked both teams the same question separately, would we want to hear the answers side by side?

## What good looks like

There is a single list of critical services with owners and agreed recovery targets. The continuity plan and the cyber recovery plan both refer to it and say who leads in a cyber event. One contact tree, with alternates and confirmation dates, is held offline as well as online. Business and technical teams exercise a ransomware scenario together at least once a year. Lessons go into both plans, and both plans are reviewed together.

You can measure the result. The business and IT give the same recovery order when asked separately. Differences found in each exercise fall over time. Contacts are confirmed within an agreed interval. The insurer's recovery questions can be answered from one set of documents in an afternoon. When a real incident occurs, the first hours follow one plan, not an argument.

## Where Mellorca fits

If you are not sure how far your two plans differ, a [digital systems audit](/services/digital-systems-audit/) can map your critical services and their dependencies, compare what each plan says and produce the shared service list with the gaps marked. To set up the joint exercises, the single review calendar and the routine for feeding lessons into both plans, [digital operations improvement](/services/digital-operations-improvement/) can build the practice into the way your risk, operations and IT teams already work.

## Method note

This article draws on NIST Special Publication 800-34 Revision 1, the CISA #StopRansomware Guide and the text of the Protection of Personal Information Act. The scenario, the hours quoted in it and the effort comparison are illustrative and not measured. The article does not claim that any framework or product is required to fix the problem or that any plan behaves the same way in your environment, so check the guidance against your own situation. Insurers differ in what they ask and in how they respond. It is general information and not legal advice: confirm your obligations under section 22 of the Protection of Personal Information Act with your information officer or legal adviser.
