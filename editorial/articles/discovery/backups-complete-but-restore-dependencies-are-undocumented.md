---
hub: discovery
record_id: DISC-305
slug: backups-complete-but-restore-dependencies-are-undocumented
title: Backups complete, but nobody has written down what a restore depends on
description: Green backup reports say the data is safe, yet a real restore stalls on missing keys, identity services, DNS and licences that nobody listed. Map what each restore needs before you need it.
lead: Green backup reports say the data is safe, yet a real restore stalls on missing keys, identity services, DNS and licences that nobody listed. Map what each restore needs before you need it.
category: Cloud, Infrastructure & Platform Operations
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Cloud, Infrastructure & Platform Operations
problem_domain: Cloud, Infrastructure & Platform Operations
problem_owner: Infrastructure or cloud platform lead
budget_owner: CIO, with the CFO where compliance funding is involved
sources:
  - https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf | https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf
  - https://www.masthead.co.za/wp-content/uploads/2023/11/Joint_Communication_4_of_2023_Publication_of_Joint_Standard_1_of_2023.pdf | https://www.masthead.co.za/wp-content/uploads/2023/11/Joint_Communication_4_of_2023_Publication_of_Joint_Standard_1_of_2023.pdf
  - Prepare for ransomware attacks with a backup and recovery plan | https://learn.microsoft.com/en-us/security/ransomware/protect-against-ransomware-phase1
related:
  - Why servers get upsized when nobody trusts the utilisation data | /discovery/server-capacity-added-because-utilisation-data-is-not-trusted/
  - When capacity planning only happens after something has gone down | /discovery/capacity-planning-only-after-incidents/
  - Why critical services end up depending on one cloud region by accident | /discovery/critical-services-depend-on-one-cloud-region-by-accident/
summary: Green backup reports say the data is safe, yet a real restore stalls on missing keys, identity services, DNS and licences that nobody listed. Map what each restore needs before you need it.
layout: plain
---
The backup dashboard at a Pretoria logistics business has been green for two years. Every night the servers, databases and file shares are copied, and every morning a report confirms that the jobs completed. Then a storage failure takes out the main database server, and the team starts a restore.

The data comes back within an hour. The application does not. It needs the domain controller to authenticate its service account, but that server was restored to a different network segment. The database is encrypted, and the key lives in a vault nobody has the recovery code for. The licence server checks a hardware identifier that has changed. A firewall rule allowing the application to reach its payment partner was added by a contractor and never recorded. Each problem is solved in turn, by whoever remembers the answer, and the service is back late the next day.

## The problem in plain language

A backup is a copy of data. A restore is the work of turning that copy back into a running service. The two are often treated as one, because a completed backup feels like proof that the business can recover. But a restore depends on many things that are not in the backup: identity services, encryption keys, network addresses and routes, DNS records, certificates, licences, the order in which systems must start and the people who know how to do each step.

When those dependencies are not written down, every restore becomes an investigation. It works only if the right people are available and remember the details correctly under pressure.

## What the buyer is actually trying to solve

Infrastructure leads ask whether they can actually restore, not just whether backups ran. They ask what they need besides the data, in what order systems should come back, and how to prove recoverability to an auditor or regulator. The outcome they want is a restore plan for each critical service that lists its dependencies, sets the order and is kept where it will survive the incident.

## Evidence and system mechanism

### Recovery procedures should be sequenced and written down

NIST Special Publication 800-34 Revision 1, the [Contingency Planning Guide for Federal Information Systems](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf), addresses this directly in its section on the sequence of recovery activities. It says that when recovering a complex system with several components, procedures should reflect the priorities from the business impact analysis and be written in a stepwise, sequential format so components can be restored in a logical order. Its example is that to recover an application server, procedures should first restore and verify the operating system before the application and its data. It also says recovery team members need to understand how interdependencies between teams may affect the overall strategy. The guide was written for United States federal systems but is widely used as a reference for contingency planning elsewhere.

### South African financial regulation now names dependencies

The [Joint Standard 1 of 2023 on IT governance and risk management](https://www.masthead.co.za/wp-content/uploads/2023/11/Joint_Communication_4_of_2023_Publication_of_Joint_Standard_1_of_2023.pdf), issued by the Financial Sector Conduct Authority and the Prudential Authority and commencing on 15 November 2024, applies to the financial institutions it defines. It requires institutions to define and implement backup and restoration procedures to ensure recovery of IT systems, to set the scope and frequency of backups according to business recovery requirements and criticality, and to test backup and restoration procedures regularly and at least annually. It also requires the configuration of IT assets and the links and interdependencies between them to be stored, and it states that an institution must test the recovery dependencies between systems.

### Attackers target the documents you need to restore

Microsoft's guidance on [preparing a backup and recovery plan for ransomware](https://learn.microsoft.com/en-us/security/ransomware/protect-against-ransomware-phase1) adds a practical warning. It advises protecting the supporting documents required for recovery, naming restoration procedure documents, the configuration management database and network diagrams, because threat actors deliberately target them to impair recovery. It also recommends regularly exercising the business continuity and disaster recovery plan. A dependency map that exists only on a file share that is encrypted along with everything else is of no help.

## Why this becomes urgent

A new compliance requirement is a common trigger. For financial institutions, the Joint Standard turns restoration procedures and dependency testing into obligations that supervisors and auditors can ask about. Businesses outside financial services meet similar questions from cyber insurers, large customers' supplier questionnaires and their own auditors, who increasingly ask for evidence of restore tests rather than backup reports.

The other trigger is a real restore that takes far longer than expected, often because a dependency was missed. Expiring certificates are a common example, as described in [certificates expire because nobody owns renewal](/discovery/certificates-expire-because-nobody-owns-renewal/).

## Economic consequence

- **Longer outages.** Hours or days are spent discovering dependencies during the incident instead of following a plan.
- **Key-person risk.** Recovery depends on the few people who remember how systems connect, and stalls when they are unavailable.
- **Audit and regulatory findings.** A business that cannot show documented restoration procedures and dependency tests may face findings or questions from supervisors.
- **Insurance exposure.** Insurers may question claims or premiums where recovery capability cannot be evidenced.

## Root cause

The root cause is that backup is managed as a technical job and recovery is never designed as a process. The backup tool is configured to copy systems, and its reports measure whether copies were made. Nobody is asked to describe what must be true for each copy to become a working service again.

A second cause is that dependency knowledge changes faster than documentation. New integrations, firewall rules and identity changes are made through projects that end without updating diagrams, as described in [infrastructure diagrams out of date when projects end](/discovery/infrastructure-diagrams-out-of-date-when-projects-end/). A third is that recovery documentation is organised by server rather than by business service, which hides the chains that matter, as covered in [why recovery plans should be organised around business services, not servers](/discovery/why-recovery-plans-should-be-organised-around-business-services-not-servers/).

## Practical next actions

1. **Choose the critical services.** Start with the three to five business services whose loss would hurt most, using your business impact assessment.
2. **List each service's restore dependencies.** For each, record what it needs besides data: identity and service accounts, encryption keys and where they are held, DNS records, certificates, network routes and firewall rules, licences, third-party allow-lists and the people with the necessary access.
3. **Set the restore order.** Write the sequence in which components must come back, starting with shared foundations such as identity, name resolution and key management, then data, then applications.
4. **Protect the plan and the keys.** Keep restore procedures, dependency maps and key recovery material in a location that survives the loss or encryption of the main environment, with access tested.
5. **Test a dependency, not just a file.** In each restore test, restore a whole service in an isolated environment following the written order, and record each step that was missing or wrong.
6. **Tie updates to change.** Add a question to your change process: does this change add or alter a restore dependency? If yes, the map must be updated before the change is closed.
7. **Report evidence.** Give the CIO and, where relevant, the compliance function a short record of each test, the gaps found and the fixes.

## Diagnostic questions

- For your most critical service, could someone new restore it from the documentation alone?
- Where are your encryption keys and their recovery codes, and would you reach them if the main network were down?
- Which systems must be restored before any others will start?
- When did a restore test last bring back a whole service rather than individual files?
- Would your restore documents survive a ransomware attack on your file shares?

## What good looks like

Each critical service has a restore plan that lists its dependencies, its restore order and the people involved. The plan and the key recovery material are stored where they survive an incident. Restore tests bring back whole services, and gaps found in tests are fixed and retested. Changes that alter dependencies update the plan. The CIO can show an auditor or supervisor when each service was last restored and what was learned.

## Where Mellorca fits

To map restore dependencies for your critical services and design restore order and protected storage for recovery material, [digital infrastructure](/services/digital-infrastructure/) can work with your platform team. To keep the dependency maps current through change and run restore tests on a schedule, [managed digital operations](/services/managed-digital-operations/) can take on the routine and report the evidence.

## Method note

This article draws on NIST SP 800-34 Revision 1, the Joint Standard 1 of 2023 as published with the Authorities' Joint Communication 4 of 2023, and Microsoft's ransomware recovery guidance. The scenario is illustrative. The Joint Standard applies only to the financial institutions it defines, and its requirements should be confirmed with your compliance team or the Authorities. Product behaviour differs between backup and cloud platforms, so check your own vendor's documentation. This is general information and not legal advice.
