---
hub: discovery
record_id: DISC-352
slug: control-owners-cannot-produce-evidence-without-manual-searching
title: Control owners cannot produce evidence without manual searching
description: When proof that a control operated lives in inboxes and personal folders, every audit becomes a search exercise. How to capture evidence as the work happens and retrieve it on demand.
lead: When proof that a control operated lives in inboxes and personal folders, every audit becomes a search exercise. How to capture evidence as the work happens and retrieve it on demand.
category: Security & Compliance Operations
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Security & Compliance Operations
problem_domain: Security & Compliance Operations
problem_owner: Compliance officer or information officer, with control owners responsible for creating proof
budget_owner: Financial director or chief operating officer
sources:
  - SP 800-53A Rev. 5, Assessing Security and Privacy Controls in Information Systems and Organizations - CSRC | https://csrc.nist.gov/pubs/sp/800/53/a/r5/final
  - SP 800-137, Information Security Continuous Monitoring (ISCM) for Federal Information Systems and Organizations - CSRC | https://csrc.nist.gov/pubs/sp/800/137/final
  - Protection of Personal Information Act 4 of 2013 - South African Government | https://www.gov.za/documents/protection-personal-information-act
related:
  - Why third-party security reviews keep starting from scratch | /discovery/third-party-security-reviews-keep-starting-from-scratch/
  - Why Policy Acknowledgements Need a Reliable System Record | /discovery/why-policy-acknowledgements-need-a-reliable-system-record/
  - Risk acceptances expire without reassessment | /discovery/why-accepted-risks-need-expiry-dates-and-reassessment/
summary: When proof that a control operated lives in inboxes and personal folders, every audit becomes a search exercise. How to capture evidence as the work happens and retrieve it on demand.
layout: plain
---
The auditor asks for proof that access to the finance system was reviewed in the second quarter. The control owner knows the review happened. Finding the proof is another matter. It might be in an email thread with the IT manager, in a spreadsheet saved on someone's laptop, in a ticket that was closed without attachments, or in a screenshot taken in May and filed under a name nobody can recall. Two days later, after searching three mailboxes and a shared drive, the evidence is assembled. Then the auditor asks for the same thing for the third quarter, and for four other controls.

This article looks at that operating condition: control owners who cannot produce evidence without searching manually. It shows up whenever a control is performed well but nothing records the performance in a place that can be found on demand.

## The problem in plain language

A control is only as useful as the proof that it operated. Proof usually has to show what was done, by whom, on what date and against which system or population. When evidence is scattered across inboxes and personal folders, the control owner becomes the search engine. The business depends on that person's memory and goodwill, and every audit request, customer questionnaire or regulator query starts a fresh hunt.

## What the buyer is actually trying to solve

Compliance officers, information officers and finance directors search for ways to prepare for audits faster, reduce findings and stop treating evidence as a once-a-year scramble. The underlying need is simple to state: for every control that matters, the proof should be created as a by-product of doing the work, stored in one findable place, and retrievable by someone other than the person who performed it.

## Evidence and system mechanism

### Assessment is built on examining records, interviewing people and testing

The NIST publication [SP 800-53A Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/a/r5/final) provides a methodology and procedures for assessing security and privacy controls. Its assessment methods are examining artefacts, interviewing people and testing. If artefacts cannot be produced, assessors fall back on interviews, which usually invites follow-up questions. The practical lesson for a smaller business is that evidence which exists but cannot be found counts, in effect, as evidence that does not exist.

### Monitoring is meant to be continuous, not annual

NIST's [guideline on information security continuous monitoring (SP 800-137)](https://csrc.nist.gov/pubs/sp/800/137/final) is intended to help organisations build a continuous monitoring strategy that provides visibility into the effectiveness of deployed controls. Continuous monitoring in a larger organisation uses tooling, but the idea scales down: instead of reconstructing a year in one week, record each performance of a control when it happens, so the record builds up as the year goes on.

### Accountability and safeguards are statutory expectations in South Africa

The [Protection of Personal Information Act](https://www.gov.za/documents/protection-personal-information-act) requires responsible parties to secure personal information and to take appropriate, reasonable technical and organisational measures. Whether a business can demonstrate that such measures operate is as important as whether it has them. Specific obligations depend on the business and should be confirmed with a qualified adviser, but the ability to show evidence quickly is common to nearly all of them.

### Warning signs

- Audit preparation starts with an email to several people asking "does anyone have the evidence for...".
- The same control is evidenced differently each time, as described in [why compliance evidence should not depend on screenshots](/discovery/why-compliance-evidence-should-not-depend-on-screenshots/).
- Only one person knows where the proof is kept, and they are about to go on leave.
- Logs and reports are requested after the retention period, a problem explored in [access logs that disappear before the auditor asks](/discovery/access-logs-that-disappear-before-the-auditor-asks/).

## Problem owner and why-now trigger

The compliance officer, information officer or risk manager owns the evidence requirement. Control owners, such as the IT manager, HR manager or finance controller, own the performance of each control and the creation of its proof. The budget owner is typically the financial director or chief operating officer, who funds both the audit and the time spent preparing for it.

The trigger is usually regulatory or contractual change: a new requirement, a larger customer who demands a security review, an insurer's questionnaire, or a first external audit. Each introduces a deadline for producing proof, and the scramble reveals how little of it is stored where it can be found.

## Economic consequence

The most visible cost is time. If five control owners each spend two days per audit searching for proof, that is ten days of skilled staff time that the business pays for and gets nothing from. The less visible costs are larger. Late or partial evidence leads to audit findings and qualified conclusions. Sales cycles with larger customers stall while the business answers due-diligence questions. Controls that cannot be evidenced are often quietly dropped from scope, which means the business takes on risk it has stopped being able to see.

## Root cause

- **Evidence is an afterthought.** The control is designed around the activity, with no step that records the proof.
- **No agreed home.** Each owner stores proof in whatever place is convenient: email, desktop, chat, or a ticket.
- **No naming or indexing.** Even when stored, files cannot be located without knowing the creator's habits.
- **No evidence list per control.** Nobody has written down exactly what an auditor would want to see.
- **Dependence on individuals.** The knowledge of where things are sits with a person, not a register.

## Practical intervention

1. **Choose the controls that are asked about most.** Start with ten or fewer: user access review, starter and leaver processing, backup restore tests, change approvals, supplier payment approvals and policy acknowledgements are typical.
2. **Write an evidence card for each.** One page stating what the control is, how often it runs, what proof is produced, who produces it, and where it is stored.
3. **Create one evidence location.** A single shared repository with a fixed folder structure by control and period, controlled access and a naming convention such as control name, period and date.
4. **Capture proof at the moment of performance.** Make saving the proof the last step of the control, not a later chore. Where a system can produce a dated report automatically, schedule it.
5. **Keep a simple evidence index.** A one-sheet register of control, period, location and owner lets anyone else retrieve proof without asking.
6. **Test retrieval quarterly.** Ask someone who is not the owner to pull the evidence for one control and one period, and time how long it takes. Fix the gaps they find.

### Trade-offs

Centralising evidence adds a small recurring burden on control owners, and some will resist it as paperwork. The burden is only justified if the index is actually used, so keep it lean and focus on controls that matter.

### An illustrative example

Illustrative: a Cape Town logistics company with about 120 staff took nine working days to assemble evidence for a customer security audit. The operations director chose eight controls, wrote an evidence card for each and set up a single shared folder with a one-sheet index. Quarterly access reviews now end with the signed report being saved into the folder and a line added to the index. When the same customer returned the next year, the evidence pack was assembled in a day, by someone who had not performed the controls.

## Diagnostic questions

- For your top ten controls, can you name exactly what proof is produced?
- Could someone other than the control owner find that proof within an hour?
- Where is evidence stored today: one place, or many?
- How long did your last audit or customer questionnaire take to answer, and who did the searching?
- Which controls would you struggle to evidence if the owner left tomorrow?

## What good looks like

Each important control has a written evidence card. Proof is saved at the moment the control is performed, in one controlled location, and listed on an index that anyone authorised can use. Retrieval is tested regularly. When an auditor, regulator or customer asks for proof, the answer takes minutes, and the control owner spends their time running the control rather than searching for it.

## Where Mellorca fits

Mellorca's [digital operations improvement](/services/digital-operations-improvement/) work can embed evidence capture into the workflows where controls actually run. [Digital systems architecture and roadmap](/services/digital-systems-architecture-roadmap/) work can identify where proof is generated, where it ends up, and which systems could produce it automatically. A related discussion of inconsistent control interpretation is in [when every system owner reads the same compliance rule differently](/discovery/when-every-system-owner-reads-compliance-rules-differently/).

## Method note

NIST publications are used as reference models for assessment and monitoring and are not statements of what any South African business is legally required to adopt. POPIA is cited for the general expectation of security safeguards; specific legal obligations should be confirmed with a qualified adviser. The example is illustrative rather than a client case.
