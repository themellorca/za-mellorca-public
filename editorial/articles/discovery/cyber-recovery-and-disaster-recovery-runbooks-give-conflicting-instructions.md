---
hub: discovery
record_id: DISC-391
slug: cyber-recovery-and-disaster-recovery-runbooks-give-conflicting-instructions
title: Cyber recovery and disaster recovery runbooks give conflicting instructions
description: The disaster recovery runbook says fail over and restore fast; the cyber response plan says isolate, preserve evidence and restore only from clean copies. Reconcile the steps before an attack forces the choice.
lead: The disaster recovery runbook says fail over and restore fast; the cyber response plan says isolate, preserve evidence and restore only from clean copies. Reconcile the steps before an attack forces the choice.
category: Business Continuity & Resilience
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Business Continuity & Resilience
problem_domain: Business Continuity & Resilience
problem_owner: Head of IT operations, with the information security lead
budget_owner: CIO or COO
sources:
  - https://learn.microsoft.com/en-us/security/ransomware/protect-against-ransomware-phase1 | https://learn.microsoft.com/en-us/security/ransomware/protect-against-ransomware-phase1
  - https://csrc.nist.gov/pubs/sp/800/61/r3/final | https://csrc.nist.gov/pubs/sp/800/61/r3/final
  - https://www.masthead.co.za/wp-content/uploads/2023/11/Joint_Communication_4_of_2023_Publication_of_Joint_Standard_1_of_2023.pdf | https://www.masthead.co.za/wp-content/uploads/2023/11/Joint_Communication_4_of_2023_Publication_of_Joint_Standard_1_of_2023.pdf
summary: The disaster recovery runbook says fail over and restore fast; the cyber response plan says isolate, preserve evidence and restore only from clean copies. Reconcile the steps before an attack forces the choice.
layout: plain
---
At 2am the monitoring team at a Durban financial services firm sees file servers and the core database slowing down, then files with strange extensions. The on-call infrastructure engineer opens the disaster recovery runbook, which was written for hardware and site failures. Step one says to fail over the database to the replica at the secondary site. Step two says to restore file servers from the most recent backup. Step three says to email the incident distribution list.

The security lead, called twenty minutes later, opens a different document, the cyber incident response plan. It says to isolate affected systems, preserve memory and logs for investigation, assume email may be compromised, and restore only from a backup confirmed to predate the intrusion. By then the replica has already received the encrypted data, the most recent backup has been mounted on the infected network and the incident email has gone to a mailbox the attacker can read.

## The problem in plain language

Most businesses have a disaster recovery procedure and a cyber incident procedure, written by different teams at different times for different events. Disaster recovery assumes the systems are damaged but trustworthy: get them back as fast as possible from the nearest copy. Cyber response assumes the systems may be controlled by an attacker: stop the spread, keep evidence and do not restore anything until you know it is clean.

For most events the difference does not matter. For ransomware and other destructive attacks, which are both a disaster and a cyber incident, the two procedures give opposite instructions at the same moment. Whoever opens their document first decides which one is followed.

## What the buyer is actually trying to solve

IT operations and security leads ask how to align disaster recovery with incident response, whether they should fail over during ransomware and how to recover without reinfecting systems. CIOs ask whether the business has one recovery process or two that will collide. The outcome they want is a single tested sequence for destructive cyber incidents, with clear decision points that say when disaster recovery steps are safe to run.

## Evidence and system mechanism

### Recovery must assume the attacker is targeting it

Microsoft's guidance on [preparing a backup and recovery plan for ransomware](https://learn.microsoft.com/en-us/security/ransomware/protect-against-ransomware-phase1) says attacks on backups aim to cripple an organisation's ability to respond without paying, often targeting backups and the key documentation needed for recovery, and that most organisations do not protect backup and restoration procedures against this level of deliberate targeting. It recommends requiring out-of-band steps before modifying online backups, storing backups in immutable storage or offline, and protecting supporting documents such as restoration procedures, the configuration management database and network diagrams. It also recommends regularly exercising the business continuity and disaster recovery plan, treating a ransomware or extortion attack with the same importance as a natural disaster.

That guidance exposes the conflict in a typical disaster recovery runbook. Replication and failover copy whatever is on the primary, including encrypted or tampered data. Restoring the latest backup may restore the attacker's foothold. Recovery documents on the same network may be unavailable or altered.

### Incident response now sits inside risk management

NIST Special Publication 800-61 Revision 3, [Incident Response Recommendations and Considerations for Cybersecurity Risk Management](https://csrc.nist.gov/pubs/sp/800/61/r3/final), published in April 2025 as a Cybersecurity Framework 2.0 community profile, replaced the 2012 revision. It aims to help organisations incorporate incident response into their wider cybersecurity risk management and to improve the efficiency and effectiveness of detection, response and recovery. Treating recovery as part of incident response, rather than a separate technical exercise, is the basis for reconciling the two procedures.

### South African financial regulation expects tested resilience and incident handling

The [Joint Standard 1 of 2023 on IT governance and risk management](https://www.masthead.co.za/wp-content/uploads/2023/11/Joint_Communication_4_of_2023_Publication_of_Joint_Standard_1_of_2023.pdf), which commenced on 15 November 2024 for the financial institutions it defines, requires an IT resilience plan that supports the protection and, if necessary, re-establishment of confidentiality, integrity and availability, and that is tested regularly and at least annually under various scenarios. It also requires a problem and incident management process that tracks and classifies incidents by business criticality and analyses root causes. A covered institution whose recovery and incident procedures conflict would struggle to show that its resilience plan protects integrity as well as availability.

## Why this becomes urgent

A major incident is the usual trigger, either in the business itself or at a peer, supplier or customer. After a ransomware attack, the post-incident review often finds that recovery was slowed or harmed because teams followed different documents. Insurers and auditors then ask which procedure governs.

The same gap often shows at the level of priorities, which is covered in [continuity and cyber recovery plans disagree on what comes first](/discovery/continuity-and-cyber-recovery-plans-disagree-on-what-comes-first/). This article looks at the steps themselves. Lessons from incidents only help if they change the procedures, as described in [why incident reviews must change the controls that failed](/discovery/why-incident-reviews-must-change-the-controls-that-failed/).

## Economic consequence

- **Reinfection and longer outages.** Restoring from compromised copies can return the attacker and force a second, longer recovery.
- **Lost evidence.** Rebuilding or rebooting systems before evidence is captured weakens investigation, insurance claims and any legal action.
- **Data loss.** Failing over to a replica that holds encrypted data can destroy the last good copy.
- **Regulatory and notification exposure.** Confusion over who decides and what was done makes it harder to meet notification duties and answer supervisors.
- **Wasted effort.** Teams undo each other's work during the most expensive hours of an incident.

## Root cause

The root cause is that the two procedures were written separately, by infrastructure and security teams, and never tested together. Each is correct for the event it was written for. Neither says what to do when an event is both, and neither names who decides which applies.

A second cause is that disaster recovery tooling was designed for speed. Continuous replication, automated failover and short restore points are excellent for hardware failures and dangerous when the primary is compromised. A third is that recovery depends on shared services, such as identity, email and file shares, that an attacker may control, and the runbooks assume they are trustworthy. Improvised response in these conditions is common, as described in [automation incident response improvised](/discovery/automation-incident-response-improvised/).

## Practical next actions

1. **Put the two documents side by side.** Walk through your disaster recovery runbook and cyber incident plan for a ransomware scenario, step by step, and mark every point where they give different instructions.
2. **Add a classification decision at the start.** Make the first step of any major outage a short decision, with a named decision maker, on whether a cyber cause is possible. If it is, the cyber sequence governs until security clears each step.
3. **Make failover conditional.** Rewrite failover and replication steps so they are paused, not triggered, when a cyber cause is suspected, until the replica is checked.
4. **Define clean restore points.** Specify how the team will identify a backup that predates the intrusion, and keep enough history in immutable or offline storage to go back that far.
5. **Capture evidence before rebuild.** Add evidence capture steps, agreed with security and your incident response provider, before systems are wiped or restored.
6. **Plan out-of-band operation.** Agree communication channels, contact lists and access methods that do not depend on the corporate email, identity or file systems, and keep runbooks in a protected copy outside the main environment.
7. **Exercise the combined sequence.** Run a joint exercise with infrastructure, security, the business and key suppliers at least annually, and fix the conflicts it reveals.

## Diagnostic questions

- If ransomware hit tonight, which document would the on-call engineer open first?
- Does your disaster recovery runbook say what to do if the cause might be an attacker?
- Would your replication copy encrypted data to the standby site before anyone could stop it?
- How far back do your immutable or offline backups go, and is that far enough to predate a slow intrusion?
- Could your teams communicate and reach the runbooks if email and the file servers were unavailable?

## What good looks like

There is one recovery sequence for destructive cyber incidents, owned jointly by IT operations and security. It starts with a classification decision, pauses failover until replicas are checked, captures evidence before rebuild and restores only from verified clean points. Runbooks, contact lists and recovery material are held outside the main environment. The sequence is exercised at least annually with the business and suppliers, and every exercise changes something. The CIO can show the board and, where applicable, supervisors how the business would recover from an attack, not only from a fire.

## Where Mellorca fits

To redesign replication, failover and backup retention so that recovery is safe during a cyber incident, [digital infrastructure](/services/digital-infrastructure/) can work with your platform and security teams. To keep the combined runbook current, run the exercises and track the fixes, [managed digital operations](/services/managed-digital-operations/) can take on the routine and report the evidence.

## Method note

This article draws on Microsoft's ransomware recovery guidance, NIST SP 800-61 Revision 3 and the Joint Standard 1 of 2023 as published with the Authorities' Joint Communication 4 of 2023. The scenario is illustrative. The Joint Standard applies only to the financial institutions it defines, and notification duties under it and under the Protection of Personal Information Act should be confirmed with your compliance and legal advisers. Evidence handling should follow the advice of your incident response provider. This is general information and not legal advice.
