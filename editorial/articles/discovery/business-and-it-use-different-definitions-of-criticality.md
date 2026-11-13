---
hub: discovery
record_id: DISC-382
slug: business-and-it-use-different-definitions-of-criticality
title: Business and IT use different definitions of criticality
description: The business rates systems by customer impact and IT by technical weight, so the two lists differ. Agree one scale, rate services first and reconcile the differences before an audit.
lead: The business rates systems by customer impact and IT by technical weight, so the two lists differ. Agree one scale, rate services first and reconcile the differences before an audit.
category: Business Continuity & Resilience
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Business Continuity & Resilience
problem_domain: Business Continuity & Resilience
problem_owner: Business continuity or IT service management lead
budget_owner: COO, CIO or CFO
sources:
  - Define reliability targets recommendation for Power Platform workloads - Power Platform | https://learn.microsoft.com/en-us/power-platform/well-architected/reliability/metrics
  - https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-34r1.pdf | https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-34r1.pdf
  - https://www.masthead.co.za/wp-content/uploads/2023/11/Joint_Communication_4_of_2023_Publication_of_Joint_Standard_1_of_2023.pdf | https://www.masthead.co.za/wp-content/uploads/2023/11/Joint_Communication_4_of_2023_Publication_of_Joint_Standard_1_of_2023.pdf
  - https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf | https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf
related:
  - Continuity and cyber recovery plans disagree on what comes first | /discovery/continuity-and-cyber-recovery-plans-disagree-on-what-comes-first/
  - Cyber recovery and disaster recovery runbooks give conflicting instructions | /discovery/cyber-recovery-and-disaster-recovery-runbooks-give-conflicting-instructions/
  - Data recovery points are not aligned with transaction criticality | /discovery/why-one-recovery-point-for-every-system-hides-your-most-valuable-data/
summary: The business rates systems by customer impact and IT by technical weight, so the two lists differ. Agree one scale, rate services first and reconcile the differences before an audit.
layout: plain
---
Picture a Durban pharmaceutical distributor that has been asked by its insurer and its external auditor for the same thing: a list of its critical systems, with a recovery time for each. The business continuity manager answers from the business impact workshops she ran last year. She lists twelve critical business processes, including order picking, cold-chain dispatch, customer invoicing and the regulatory batch-tracking records. The IT service manager answers from the configuration database. He lists thirty-one systems tagged "Tier 1", chosen because they have many users, many dependencies or strict uptime targets. Only six systems appear on both lists. These counts are illustrative, but the pattern is familiar.

The mismatch has consequences. The warehouse scanning application, which the business calls critical because dispatch stops without it, is Tier 2 in IT's list because it has few users. A finance reporting database is Tier 1 in IT's list because many systems read from it, though the business says month-end reports can wait a few days. The auditor asks which list is right, and nobody can say. The insurer asks for recovery times and receives two different sets.

The operating condition is plain: the business and IT each use their own definition of "critical", so the same system carries different ratings in different documents. That matters to the COO, the CIO and the CFO because recovery effort and money are spent according to one list while the business expects the other, and because the gap is discovered when an audit or an insurance renewal asks for a single answer.

## The problem in plain language

Ask a business manager what is critical, and the answer comes in terms of what stops. If this stops, customers cannot be served, orders cannot ship, staff cannot be paid, or a regulator will want an explanation. The measure is the effect on the business, and it is usually expressed as a process: dispatch, billing, payroll.

Ask the IT team the same question and the answer comes in terms of the system. Which systems have the most users? Which have the most dependencies? Which carry the strictest availability targets in a contract? Which hold the most sensitive data? The measure is technical weight, and it is expressed as a system: the ERP, the database cluster, the identity service.

Both answers are reasonable, and neither is wrong. They answer different questions. A system can be technically heavy and operationally modest, or technically light and operationally vital. A small warehouse application that few people use can halt the whole dispatch operation. A large reporting database can go down for two days without anyone outside finance noticing.

The trouble starts because each side writes its answer down using the same word. The business continuity plan says "critical". The configuration database says "critical". Nobody notices that the word means different things until a document from one side is compared with a document from the other.

This is related to [recovery plans organised around servers instead of business services](/discovery/why-recovery-plans-should-be-organised-around-business-services-not-servers/). That problem is about how a plan is structured. This one comes before it: the lists that the plan is built from do not agree on which services or systems come first.

## What the buyer is actually trying to solve

Business continuity leads and IT service management leads put this in practical terms. Which of our systems are critical, and by whose definition? Why do two documents give two answers? What do we tell the auditor or the insurer? Are we spending recovery money on the right systems? If something fails tonight, which list do we follow?

The outcome they want is one list. Each critical service has a rating that the business has agreed, each system behind it has a rating that follows from the services it supports, and the recovery targets for each follow from the rating. Anyone asking, whether an auditor, an insurer, the board or a new IT manager, receives the same answer.

## Evidence and system mechanism

### Criticality should come from business impact, and the guidance says so

Vendor and standards guidance both put the business first. Microsoft's Well-Architected guidance on [defining reliability targets](https://learn.microsoft.com/en-us/power-platform/well-architected/reliability/metrics) says reliability targets are derived through workshop exercises with business stakeholders, and that the flows in a workload should be identified and scored by how critical they are to the business's requirements. It says technical discussions should not drive how targets are defined for critical flows. Instead, business stakeholders should focus on customers as they define requirements. Its example is stakeholders estimating that an hour of downtime in a critical flow during business hours costs a stated amount in monthly revenue. It also warns that different flows have different criticality definitions, so a single technical label does not carry across.

NIST's [Contingency Planning Guide](https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-34r1.pdf) takes the same route through its business impact analysis. The analysis identifies the processes a system supports and the maximum tolerable downtime the business will accept, and then sets a recovery time objective for each system resource, which must normally be shorter than the downtime the business can tolerate. It says the results should feed the continuity plans and the disaster recovery plan alike, and that the business continuity planner must coordinate with the information system owners so the plan's expectations match what the systems can actually do.

Put together, the sequence is clear. The business rates the process by its impact. The system inherits a rating from the processes that depend on it. The recovery objectives follow from the rating. When IT starts from the system and its technical weight, the sequence is reversed, and the result is a list that reflects how the technology is built instead of what the business needs.

| Business view | IT view | What goes wrong |
| --- | --- | --- |
| Rated by effect on customers and revenue | Rated by users, dependencies and uptime targets | The same system carries different ratings |
| Expressed as processes | Expressed as systems | Nobody maps one to the other |
| Set in workshops, then filed | Held in the configuration database | The two are never compared |
| Rating scale invented by the business unit | Rating scale set by IT service management | The scales do not line up |
| Reviewed when a plan is updated | Reviewed when systems change | They drift apart over time |

### South African rules ask for one answer

Regulators and law in South Africa expect the business to know what its critical services are. The [Joint Standard 1 of 2023](https://www.masthead.co.za/wp-content/uploads/2023/11/Joint_Communication_4_of_2023_Publication_of_Joint_Standard_1_of_2023.pdf), made by the Financial Sector Conduct Authority and the Prudential Authority and commenced on 15 November 2024, applies to financial institutions such as banks and insurers. It requires them to define recovery priorities and to set recovery time and recovery point objectives for critical services and business processes, and to test an IT resilience plan at least annually. An institution that has two conflicting lists of critical systems cannot show which one its objectives and tests refer to.

The standard binds only the institutions it defines. For other businesses, the Protection of Personal Information Act, 4 of 2013, gives a related reason to know what matters. [Section 19](https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf) requires a responsible party to secure the integrity and confidentiality of personal information in its possession by taking appropriate, reasonable technical and organisational measures, which includes identifying reasonably foreseeable risks, establishing safeguards, verifying them regularly and updating them. A business that does not agree which systems hold the information and processes it cannot lose has a weaker basis for saying that its safeguards are proportionate. Confirm how these requirements apply to your business with your compliance team or information officer.

## Why this becomes urgent

An audit or insurance requirement is the usual trigger. The request is simple and specific: list your critical systems and their recovery times. It arrives with a deadline, and the person assembling the answer opens two documents that disagree.

At that point the business has three options, and none is comfortable. It can submit one list and risk contradiction by the other. It can submit both and explain the difference. Or it can try to reconcile them under time pressure, which usually means someone picks a side. The auditor may record the inconsistency as a finding, and the insurer may question whether the stated recovery times are credible.

The same discovery can come from an incident. A system fails, IT restores it in the order of its own list, and the business finds that the process it cared about most is still down. By then the difference between the lists has cost hours.

## Economic consequence

The cost of two definitions appears when the business needs to act:

- **Extended downtime.** Recovery follows IT's order, and the process the business needs most waits behind systems that were technically heavier but operationally less urgent.
- **Data loss.** Backup frequency and replication are set from the IT tier. A system the business rates as critical but IT rates as Tier 2 may be backed up too rarely for the business's tolerance for lost data.
- **Revenue interruption.** Dispatch, billing or ordering stops for longer than the business planned, and every extra hour has a cost in sales and penalties.
- **Customer harm.** Customers who depend on the delayed process, such as clinics waiting for temperature-controlled deliveries, are affected first.
- **Recovery uncertainty.** The business cannot state with confidence how long recovery will take, because the plan, the objectives and the tests refer to different lists.
- **Misplaced spend.** Money for redundancy and testing is directed at systems IT rates highly, while systems the business depends on receive less.

As an illustrative example only, suppose a warehouse scanning application is restored fourth in IT's order because it is rated Tier 2, and the business needs it first to resume dispatch. If the three systems ahead of it take six hours to restore, dispatch is delayed by six hours that a single agreed list would have removed. The numbers are invented, but the effect of a restore order built on the wrong ratings is common.

## Root cause

The root cause is that the business and IT each created their own criticality scale and ratings, without a shared definition or a single owner. The business set its ratings in impact workshops. IT set its tiers when it built the configuration database. Each was done properly, by people who did not see the other's work.

A second cause is that each side rates a different thing. The business rates processes. IT rates systems. Without a map that links each process to the systems it depends on, there is no way to derive one rating from the other, and no way to see where they disagree.

A third cause is that new areas of the business add their own definitions. When a new unit or product line starts, it describes what matters in its own terms, much as happens when [new business units invent their own metrics](/discovery/new-business-units-create-metrics-before-group-definitions/). Each addition brings another scale, and the number of definitions grows.

## Practical intervention

### Practical next actions

1. **Agree one criticality scale, defined in business terms.** Write a short scale, for example four levels, and define each by effect: customer impact, revenue lost per hour, legal or regulatory exposure and safety. Have the COO, CIO and the business continuity lead approve it, and publish it so that every team uses the same words.
2. **Rate the services, not the servers.** In a workshop with the business owners, list the services the business depends on, such as order picking, cold-chain dispatch, payroll and invoicing. Ask each owner to rate their service on the scale, using the cost of an hour or a day of downtime, as the Microsoft guidance suggests, and to state how much data loss they could tolerate.
3. **Map each service to the systems behind it.** For every service, list the applications, databases, identity, network and supplier connections it needs. Use the people who run the service, not only the configuration database, to check the map. Hidden dependencies, including internal interfaces that nobody has catalogued, as with [existing internal APIs that teams cannot find](/discovery/apis-exist-but-internal-teams-cannot-find-them/), are where ratings go wrong.
4. **Derive the system rating from the services.** A system takes at least the rating of the most critical service that depends on it, and a dependency takes at least the rating of whatever depends on it. Record the rule so that it can be applied the same way each time.
5. **Reconcile the two lists.** Compare the business ratings and the IT tiers system by system, and list every case where they differ. For each, decide which is right and why, change the rating where needed and note the reason.
6. **Set recovery targets from the rating.** For each level, agree a maximum tolerable downtime, a recovery time objective and a recovery point objective, checking that the objective is shorter than the tolerance. Compare what IT can do today with what the target requires, and list the gaps for funding or acceptance.
7. **Store one rating in one place.** Put the rating, its owner, its date and its source in the configuration database or service catalogue, where IT and the business can both see it. Link the business continuity plan, the disaster recovery plan and the insurance and audit responses to that record, so none keeps a private copy.
8. **Review on triggers and on a schedule.** Re-rate when a new service starts, when a system is added or retired, after an incident or test, and at least once a year. Include a check of the differences list each time.
9. **Report exceptions to the sponsors.** Give the COO and CIO a short list of services where the target is not met and the reason, so that decisions about money and risk are made with one set of facts.

## Diagnostic questions

- If an auditor asked for our critical systems today, how many lists would we have, and would they agree?
- When we say a system is critical, what do we mean, and does IT mean the same thing?
- Which of our critical business services depend on systems that IT has rated below the top tier?
- Who owns the criticality scale, and when was it last reviewed?
- Which recovery objectives in our plans come from a business rating, and which from a technical tier?
- If a system failed tonight, would we restore it in the order the business needs?

## What good looks like

One scale, defined in business terms, is used by the business, IT, audit and the insurer. Each critical service has a business owner and a rating. Each system carries a rating derived from the services it supports, and the recovery targets follow from the rating. The configuration database, the continuity plan and the disaster recovery plan all point to one record. Differences between business and IT views are listed, explained and reviewed.

You can measure the result. The two lists agree, or the differences are on file with reasons. The time to answer an audit or insurance request for critical systems falls from days to hours. Recovery tests restore services in the order the business needs and meet the targets set for them. Money for resilience is directed by the same list that the business uses to describe what it cannot do without.

## Where Mellorca fits

If you do not know where your two lists differ, a [digital systems audit](/services/digital-systems-audit/) can compare your business impact ratings with your IT tiers, map services to the systems behind them and produce the first reconciled list with the differences marked. To agree the scale, the review routine and the ownership between business and IT, [digital operations improvement](/services/digital-operations-improvement/) can design the process with your continuity, service management and business teams and help it become part of regular governance.

## Method note

This article draws on Microsoft's Well-Architected guidance on defining reliability targets, NIST Special Publication 800-34 Revision 1, the Joint Standard 1 of 2023 as published by the Financial Sector Conduct Authority and the Prudential Authority, and the text of the Protection of Personal Information Act. The scenario, the counts of systems and the downtime example are illustrative and not measured. The article does not claim that any framework or product is required to fix the problem or that any rating behaves the same way in your environment, so check the guidance against your own situation. The Joint Standard applies only to the financial institutions it defines. It is general information and not legal advice: confirm your obligations with your compliance team, your information officer or your legal adviser.
