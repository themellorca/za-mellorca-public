---
hub: discovery
record_id: DISC-364
slug: why-the-same-security-control-gets-built-and-evidenced-by-several-teams
title: Security controls are duplicated across teams
description: When each team runs its own version of the same control, effort and evidence multiply and answers conflict. How to build one catalogue with single owners.
lead: When each team runs its own version of the same control, effort and evidence multiply and answers conflict. How to build one catalogue with single owners.
category: Security & Compliance Operations
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Security & Compliance Operations
problem_domain: Security & Compliance Operations
problem_owner: Head of security, IT director or compliance manager, with team leads
budget_owner: IT director, chief operating officer or chief risk officer
sources:
  - common control - Glossary - CSRC | https://csrc.nist.gov/glossary/term/common_control
  - SP 800-53 Rev. 5, Security and Privacy Controls for Information Systems and Organizations - CSRC | https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final
  - Microsoft Purview Compliance Manager | https://learn.microsoft.com/en-us/purview/compliance-manager
  - CIS Control 6: Access Control Management | https://www.cisecurity.org/controls/access-control-management
related:
  - Incident lessons do not update preventive controls | /discovery/why-incident-reviews-must-change-the-controls-that-failed/
  - Control testing schedules are maintained in personal calendars | /discovery/why-control-testing-schedules-should-not-live-in-personal-calendars/
  - Control owners cannot produce evidence without manual searching | /discovery/control-owners-cannot-produce-evidence-without-manual-searching/
  - Customer security questionnaires consume specialist time | /discovery/why-customer-security-questionnaires-keep-pulling-specialists-off-their-work/
summary: When each team runs its own version of the same control, effort and evidence multiply and answers conflict. How to build one catalogue with single owners.
layout: plain
---
A large customer sends a security questionnaire with two hundred questions. The IT team answers the ones about network and endpoint protection. The software development team answers the ones about secure coding and access to source code, and describes its own access review. The finance team answers the ones about payment systems, describing a third access review. The operations team, which runs a hosted platform, has a fourth. Four teams run four versions of what is essentially the same control, each with its own template, schedule and evidence folder. The answers disagree in small ways, and nobody can say which version is the business's actual position.

This article examines that condition: security controls duplicated across teams. It becomes visible when a customer assurance request forces the business to give one answer.

## The problem in plain language

Many security controls apply to the whole business: how people are onboarded and removed, how devices are managed, how backups are tested, how incidents are reported, how suppliers are assessed. When each team builds its own version, the business pays several times for the same protection, produces conflicting evidence and leaves gaps between versions. Some teams over-control, adding work with no extra safety. Others under-control, assuming that another team has it covered. A control that is everyone's job in four different ways is often nobody's job in one clear way.

## What you are actually trying to solve

The IT director, head of security or compliance manager facing this wants one set of controls that every team can point to, one body of evidence that answers customer and auditor questions consistently, and less repeated effort for the teams who are asked for the same proof several times a year. They also want to find the controls that fall between teams.

## Evidence and system mechanism

### Common controls are defined to be inherited, not rebuilt

NIST's glossary defines a [common control](https://csrc.nist.gov/glossary/term/common_control) as a security or privacy control inherited by multiple information systems or programmes. The concept is the direct answer to duplication: implement a control once, assess it once and let the systems that depend on it inherit the result. NIST's wider [catalogue of security and privacy controls](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) also publishes mappings to other frameworks, including ISO/IEC 27001:2022 and the NIST Cybersecurity Framework, with a warning that mappings give only a general indication of coverage and should not be assumed equivalent. That caution is useful: consolidating controls needs judgement, not a simple lookup.

### One control, many requirements

Microsoft's documentation on [Purview Compliance Manager](https://learn.microsoft.com/en-us/purview/compliance-manager) describes controls as the requirements of a regulation, standard or policy, tracked through assessments and improvement actions, with pre-built assessments for common standards. The structure separates the control, the test of it and the action to improve it, in one tool, instead of in each team's own files. Whether or not the product is used, keeping one record per control is a sound model to copy.

### Access control is a good example of what gets duplicated

The Center for Internet Security's [access control management control](https://www.cisecurity.org/controls/access-control-management) describes using processes and tools to create, assign, manage and revoke credentials and privileges for user, administrator and service accounts. This is the kind of control that is often run separately in each team, even though the underlying process is the same. The control needs to be defined once, with team-specific parts clearly separated.

### Warning signs

- Different teams answer the same customer question differently, or point to different documents.
- The same review, such as access or backup testing, is done by several teams on different schedules.
- Policies exist in several versions, each owned by the team that wrote it.
- Teams are asked for evidence three times a year for the same control and rebuild it each time.

## Problem owner and why-now trigger

The head of security, IT director or compliance manager owns the control framework. Team leads own the operation of the controls in their own areas. The budget owner is typically the IT director, chief operating officer or chief risk officer.

The usual trigger is a customer assurance request: a large client, bank or public-sector buyer sends a questionnaire or audit request, and the business finds that it cannot give one coherent answer. Preparation for ISO 27001 or SOC 2, or the need to show reasonable security safeguards under POPIA, creates the same pressure. A similar problem is described in [third-party security reviews that keep starting from scratch](/discovery/third-party-security-reviews-keep-starting-from-scratch/).

## Economic consequence

The direct cost is repeated effort: the same control designed, operated and evidenced by several teams, with each assessment consuming staff time. Tools and licences are sometimes bought separately for the same purpose, adding to the cost described in [security products bought without basic controls](/impact/security-products-without-basic-controls/). The indirect cost is inconsistency. Conflicting answers weaken the business's credibility with customers, and gaps between versions leave real exposure. Teams also experience control fatigue, which makes them less willing to cooperate when a genuinely new control is introduced.

## Root cause

- **Controls grew inside teams.** Each team solved its own problem at the time and never merged its solution with others.
- **No control catalogue.** Without a single list of controls, nobody can see which are duplicated.
- **Ownership by team, not by control.** The control framework is organised around departments rather than around the controls themselves.
- **Evidence is collected per audit,** not held continuously, so each audit encourages a fresh version.
- **Frameworks are treated separately.** Controls are built to meet each requirement in turn, so a business subject to three frameworks builds three versions.

## Practical intervention

1. **List the controls actually in operation.** Ask each team for the reviews, checks and policies it runs for security, and put them on one sheet with owner, frequency and evidence location.
2. **Group by purpose.** Cluster similar controls: access review, device management, backup testing, change approval, supplier assessment, incident handling.
3. **Choose one owner and one design for each group.** The owner defines the common version and decides what each team may adapt.
4. **Separate common from specific parts.** The access review process is common; the list of systems each team reviews is specific. Teams inherit the common part.
5. **Map requirements once.** Link each control to the customer, legal and framework requirements it supports, treating the mapping as a starting point to be checked, not as proof of equivalence.
6. **Collect evidence once.** Store the output of each control in a single location so it can answer many requests.
7. **Retire the duplicates deliberately,** and look for controls with no owner as you merge. Gaps are usually found at the same time.

### Trade-offs

A single shared control creates a single point of failure: if the common process is weak, every team inherits the weakness. Some teams will resist losing a version they built and trust. Keep room for justified local variation, such as stricter rules for payment systems, and record each variation with its reason. Consolidation can be done gradually, starting with the two or three controls that customers ask about most.

### An illustrative example

Illustrative: a Stellenbosch software company with 120 staff found that three teams each ran a quarterly access review in different formats, and two teams each tested backups on their own schedule. Mapping the controls showed seven duplicated controls and two that nobody ran, including review of vendor accounts. The company assigned a single owner to each group, used one template and stored outputs in one folder. The next customer questionnaire took two days instead of two weeks, and the answers matched across sections.

## Diagnostic questions

- Can you list every security control the business runs, with one named owner for each?
- Which controls are performed separately by more than one team?
- If two customers ask the same question, do they get the same answer and the same evidence?
- Which controls does everyone assume somebody else is running?

## What good looks like

The business has one catalogue of controls, each with a single owner, a common design and a clear list of where teams may differ. Evidence is collected once and reused for customers, auditors and regulators. Duplicate effort is removed, gaps are visible, and any team can point to the same version of the truth when asked.

## Where Mellorca fits

Mellorca can help build the control catalogue, identify duplicated and orphaned controls, and design one shared version with clear local variations. Because the work depends on understanding how the business really operates, it fits naturally alongside [the problem of every system owner reading compliance rules differently](/discovery/when-every-system-owner-reads-compliance-rules-differently/), and the shared evidence it produces makes future questionnaires faster to answer.

## Method note

The sources are standards and product documentation used to explain the idea of common controls and how one control can support several requirements. They do not measure how common duplication is in South African businesses. The example is illustrative rather than a client case.
