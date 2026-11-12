---
hub: discovery
record_id: DISC-371
slug: when-every-system-owner-reads-compliance-rules-differently
title: When every system owner reads the same compliance rule differently
description: General policy wording leaves each system owner to decide what compliance means, producing several versions of one control. How to set one interpretation and apply it everywhere.
lead: General policy wording leaves each system owner to decide what compliance means, producing several versions of one control. How to set one interpretation and apply it everywhere.
category: Security & Compliance Operations
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Security & Compliance Operations
problem_domain: Security & Compliance Operations
problem_owner: Compliance officer or risk manager, with system owners responsible for implementation
budget_owner: CFO or chief operating officer
sources:
  - SP 800-53 Rev. 5, Security and Privacy Controls for Information Systems and Organizations - CSRC | https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final
  - OSCAL Profile Model | https://pages.nist.gov/OSCAL/learn/concepts/layer/control/profile/
  - SP 800-37 Rev. 2, Risk Management Framework for Information Systems and Organizations: A System Life Cycle Approach for Security and Privacy | https://csrc.nist.gov/pubs/sp/800/37/r2/final
related:
  - Access logs that disappear before the auditor asks for them | /discovery/access-logs-that-disappear-before-the-auditor-asks/
  - Why third-party security reviews keep starting from scratch | /discovery/third-party-security-reviews-keep-starting-from-scratch/
  - Why Supplier Access Survives After the Supplier Engagement Ends | /discovery/why-supplier-access-survives-after-engagements-end/
summary: General policy wording leaves each system owner to decide what compliance means, producing several versions of one control. How to set one interpretation and apply it everywhere.
layout: plain
---
The policy says "access to systems containing personal information must be reviewed regularly". The payroll administrator reviews payroll users once a year. The CRM owner reviews sales users every quarter but only checks who is still employed. The IT manager reviews administrator accounts monthly. The finance system has not been reviewed at all, because its owner reads "systems containing personal information" as meaning HR systems. Each owner believes they are compliant. The auditor sees four different controls wearing the same name.

This article looks at that operating condition: compliance requirements interpreted differently by each system owner. It appears whenever a business writes policy at the level of principle and leaves each application owner to work out what it means for their system.

## The problem in plain language

Policies, regulations and frameworks are written in general terms on purpose. "Regularly", "appropriate", "strong authentication", "timely removal" and "sensitive data" all need to be turned into specific settings, frequencies and procedures before anyone can apply them. When that translation is done separately by every system owner, the business ends up with as many versions of the requirement as it has systems. None of the owners is careless; they simply answered the same question differently.

## What the buyer is actually trying to solve

Compliance and risk leads search for ways to standardise controls across systems, make policies consistent, or prepare for an audit with fewer findings. System owners ask, more simply, "what exactly do I have to do?". The shared need is one agreed interpretation of each requirement, written in concrete terms, that every system owner applies and can show evidence for.

## Evidence and system mechanism

### Control frameworks leave values to the organisation

The [NIST SP 800-53 Revision 5 catalogue](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) describes its security and privacy controls as flexible and customisable, implemented as part of an organisation-wide process to manage risk. Many of its controls contain organisation-defined parameters: the frequency of a review, the number of failed attempts before lockout, the events to be logged. The framework deliberately leaves these values for the organisation to set. If the organisation does not set them centrally, each system owner sets them locally.

### Tailoring is meant to happen once, centrally

NIST's machine-readable control format makes the mechanism explicit. An [OSCAL profile](https://pages.nist.gov/OSCAL/learn/concepts/layer/control/profile/) selects controls from a catalogue, organises them and tailors them, including setting parameter values and amending control language, producing a baseline for a specific organisation or system. Whether or not a business uses OSCAL, the idea transfers: there should be one tailored baseline that states the organisation's interpretation, and systems should inherit from it.

### Common controls and clear roles reduce drift

The [NIST Risk Management Framework (SP 800-37 Rev. 2)](https://csrc.nist.gov/pubs/sp/800/37/r2/final) includes organisation-level preparation, common control authorisations, and responsibility and accountability for controls implemented within systems and inherited by them. Common controls, such as a single access review procedure run centrally for all systems, remove the opportunity for each owner to reinvent the control.

### Warning signs

- The same policy clause produces different procedures in different departments.
- Audit findings repeat for the same control in different systems.
- Evidence formats differ by system, so assembling an audit file takes weeks; see [why compliance evidence should not depend on screenshots](/discovery/why-compliance-evidence-should-not-depend-on-screenshots/).
- System owners ask compliance the same clarifying questions every year.
- Exceptions are agreed verbally rather than recorded, a gap explored in [why security architecture decisions need linked risk exception records](/discovery/why-security-architecture-decisions-need-linked-risk-exception-records/).

## Problem owner and why-now trigger

The compliance officer, risk manager or information officer owns the interpretation. System owners own implementation in their applications. The CFO or chief operating officer typically owns the budget and the relationship with the auditors.

The trigger is usually an audit finding of inconsistent control operation, often surfacing after the business has added several cloud systems, each owned by a different department. New regulatory obligations, customer due-diligence questionnaires and certification projects also expose the problem, because they ask the same question across every system and receive several different answers.

## Economic consequence

Inconsistent interpretation turns one control into many, each needing separate evidence, testing and remediation. Audit effort rises, and findings that could be fixed once must be fixed system by system. The weakest interpretation sets the real level of protection, so risk is higher than the policy suggests. Management also loses the ability to answer simple questions, such as "do we review access quarterly?", with a single, defensible answer. The parallel problem in reporting is described in [executives get different answers to the same KPI question](/discovery/executives-get-different-answers-to-the-same-kpi-question/).

## Root cause

- **Policy without standards.** High-level policy is not supported by a standard that sets concrete values, frequencies and methods.
- **Interpretation delegated by default.** Nobody is assigned to translate requirements, so each owner does it alone.
- **No common controls.** Activities that could run centrally, such as access reviews or log retention, are left to each system.
- **No feedback loop.** Clarifications given to one owner are never written down for the others.

## Practical intervention

1. **Write a control standard under each policy.** For every requirement that applies across systems, state the concrete interpretation: frequency, scope, method, evidence and who approves exceptions.
2. **Set parameters once.** Keep a single list of organisation-defined values, such as review periods, password and lockout settings, and retention periods, and require systems to use them.
3. **Centralise what can be central.** Run access reviews, policy acknowledgements and log retention as common processes covering all systems; see [why policy acknowledgements need a reliable system record](/discovery/why-policy-acknowledgements-need-a-reliable-system-record/).
4. **Map systems to controls.** Maintain a simple matrix showing, for each in-scope system, which controls apply, whether they are inherited or local, and the owner.
5. **Record exceptions.** Where a system cannot meet the standard, record the exception, the compensating measure, the approver and the expiry date.
6. **Publish clarifications.** Keep a short, searchable record of interpretation questions and answers, so the same question is answered the same way next year.

### Trade-offs

Standardisation can be resisted by owners whose systems genuinely differ. The standard should allow documented variation where justified, rather than forcing identical settings on systems that cannot support them. Over-specifying every control can also produce a document nobody reads; focus first on the controls that auditors and customers ask about most.

### An illustrative example

Illustrative: a Gauteng financial services intermediary with about 90 staff received the same access review finding for three systems in one audit. Each owner had a different review frequency and evidence format. The compliance officer wrote a one-page access review standard setting a quarterly frequency, a single review template and a central record, and moved the review into one quarterly cycle covering all systems. The following audit tested one control instead of three.

## Diagnostic questions

- For your top five policy requirements, is there a written standard that sets concrete values?
- Would three system owners describe the same requirement in the same way?
- Which controls are run centrally, and which does each system owner run alone?
- Where are exceptions recorded, and do they expire?
- How many audit findings last year were the same issue in different systems?

## What good looks like

Every cross-system requirement has one written interpretation with concrete parameters. Common controls run centrally, systems inherit them where possible, and local implementations are mapped and owned. Exceptions are recorded with an approver and an end date. When an auditor asks how a control works, the answer is the same in every system, and the evidence looks the same too.

## Where Mellorca fits

Mellorca's [digital systems architecture and roadmap](/services/digital-systems-architecture-roadmap/) work can map systems to controls and identify which can be centralised. [Digital operations improvement](/services/digital-operations-improvement/) can then turn agreed standards into common workflows, evidence records and exception registers that system owners use consistently.

## Method note

NIST publications are used as reference models for how requirements are tailored and inherited; they are not a statement of what any South African business is legally required to adopt. Interpretation of specific laws should involve qualified advisers. The example is illustrative rather than a client case.
