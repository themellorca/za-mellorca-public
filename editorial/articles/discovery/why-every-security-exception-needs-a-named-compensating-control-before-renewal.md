---
hub: discovery
record_id: DISC-355
slug: why-every-security-exception-needs-a-named-compensating-control-before-renewal
title: Security exceptions have no clear compensating controls
description: Exceptions to security standards are often approved in an email with no substitute protection and no end date. How to build a register that stands up to an insurer, customer or auditor.
lead: Exceptions to security standards are often approved in an email with no substitute protection and no end date. How to build a register that stands up to an insurer, customer or auditor.
category: Security & Compliance Operations
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Security & Compliance Operations
problem_domain: Security & Compliance Operations
problem_owner: IT manager or security lead, with each exception carrying a named system owner
budget_owner: Financial director or managing director
sources:
  - compensating security control - Glossary - CSRC | https://csrc.nist.gov/glossary/term/compensating_security_control
  - SP 800-53 Rev. 5, Security and Privacy Controls for Information Systems and Organizations - CSRC | https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final
  - CIS Controls Version 8 | https://www.cisecurity.org/controls/v8
  - Section 19 Security measures on integrity and confidentiality of personal information - POPIA | https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/
related:
  - Incident lessons do not update preventive controls | /discovery/why-incident-reviews-must-change-the-controls-that-failed/
  - Risk acceptances expire without reassessment | /discovery/why-accepted-risks-need-expiry-dates-and-reassessment/
  - Security controls are duplicated across teams | /discovery/why-the-same-security-control-gets-built-and-evidenced-by-several-teams/
summary: Exceptions to security standards are often approved in an email with no substitute protection and no end date. How to build a register that stands up to an insurer, customer or auditor.
layout: plain
---
The cyber-insurance renewal form arrives with a section on multi-factor authentication, endpoint protection, backups and patching. The IT manager answers most of it quickly, then reaches a line asking whether any systems fall outside those requirements. There are four: an old finance server that cannot take the current operating system, a warehouse scanner application that does not support modern sign-in, a supplier's remote-access tool and a manager's laptop that was exempted last year because of a deadline. Each has an email thread somewhere that says "approved for now". None says what protects the system in the meantime, who is watching it or when the exception ends.

This article is about that operating condition: security exceptions granted without a clear compensating control. It matters most when a third party, such as an insurer, a customer or an auditor, asks you to prove that gaps are managed rather than ignored.

## The problem in plain language

Every business has legitimate reasons to depart from its own security standards. A system is too old, a supplier will not support a setting, a project cannot wait for a change. A formal exception acknowledges the gap. A compensating control is the extra protection that makes the gap tolerable: isolating the server on its own network segment, restricting who can reach it, logging access to it, or monitoring it more closely. Many businesses record the first and skip the second. The exception exists as a sentence in an email, while the thing that was supposed to make it safe exists only in the approver's assumption.

## What the buyer is actually trying to solve

The person searching for this problem wants to answer a question they can be asked at any time: "You do not meet this requirement, so what are you doing about it?" They want a short list of exceptions, each with an owner, a reason, a substitute protection and an end date, so that the answer is a document rather than a conversation.

## Evidence and system mechanism

### A compensating control has a definition

NIST's glossary entry for a [compensating security control](https://csrc.nist.gov/glossary/term/compensating_security_control) describes it as a management, operational or technical safeguard employed in place of a recommended control, which provides equivalent or comparable protection for the system. Two words in that definition do the work: in place of, and equivalent or comparable. An exception with no substitute does not meet the definition. It is simply a missing control.

### Control catalogues are meant to be tailored with judgment

NIST's [Special Publication 800-53](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) presents a catalogue of security and privacy controls and describes the controls as flexible and customisable, implemented as part of an organisation-wide process to manage risk. That framing is useful for small and mid-sized businesses. It means that departing from a standard is legitimate when the decision is made inside a risk process, with the reasoning recorded. It is not a licence to opt out informally. The record of the decision is what turns a lapse into a managed risk.

### Safeguards should be prioritised and checked

The Center for Internet Security's [CIS Controls v8](https://www.cisecurity.org/controls/v8) are a prioritised set of safeguards, grouped so that organisations can start with the most basic and add more as they mature. For a business with exceptions, this gives a practical way to choose the substitute: if you cannot patch a server, look at the basics around it, such as restricting network access, limiting administrator accounts and keeping a verified backup.

### Responsibility sits with the business

Under [section 19 of POPIA](https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/), a responsible party must take appropriate, reasonable technical and organisational measures to secure personal information, identify foreseeable risks and regularly verify that safeguards work. An unsupported server holding customer records is a foreseeable risk. Being able to show that you identified it and applied a substitute is the difference between reasonable and negligent.

### Warning signs

- Exceptions are recorded in email, chat or a manager's memory, and the list cannot be produced quickly.
- No exception has an end date, as in [patch exceptions that never expire](/discovery/patch-exceptions-that-never-expire/).
- The person who approved the exception cannot say what protects the system instead.

## Problem owner and why-now trigger

The problem owner is the IT manager or security lead, who is asked to answer for exceptions they did not always approve. The budget owner is the financial director or managing director, who signs the insurance proposal and carries the consequences of an inaccurate answer. The trigger here is a cyber-insurance renewal, though a customer assessment, a tender or an audit produces the same pressure. Insurance questionnaires commonly ask whether baseline controls are in place; an honest "no, but" answer needs the "but" to be real.

## Economic consequence

The direct costs are a harder renewal conversation, a higher premium or an exclusion if gaps cannot be explained. The larger risk is the claim that goes wrong. If a loss occurs through an exception that was described inaccurately on the proposal, the business may find itself disputing cover at the worst possible time. The cost of a breach through an unprotected system, in recovery effort, lost trading days and notification obligations, usually dwarfs the R30,000 to R150,000 that a replacement or a proper isolation exercise might cost. Those figures are illustrative. The related impact is described in [buying security products without the basic controls](/impact/security-products-without-basic-controls/).

## Root cause

- **Exceptions are approved on speed, not substitutes.** The approval question is "can we live with this for now", not "what covers it".
- **No register.** There is no single list, so nobody can review expiry or total exposure.
- **Approval and ownership are separate.** A manager approves, IT is left to cope, and no one monitors. The link between decisions and risk records is covered in [why security architecture decisions need linked risk exception records](/discovery/why-security-architecture-decisions-need-linked-risk-exception-records/).
- **Evidence is scattered.** Proving the substitute works means searching logs and screenshots, a problem also found with [control owners who cannot produce evidence without manual searching](/discovery/control-owners-cannot-produce-evidence-without-manual-searching/).

## Practical intervention

1. **Collect every known exception.** Search email, tickets and meeting notes for "exception", "waiver", "approved for now" and "temporary". Put them in one sheet.
2. **Record six fields for each.** The system, the requirement not met, the business reason, the named approver, the named owner and the end date.
3. **Define the compensating control.** Say what substitute protection applies, who operates it and how you will know it is working.
4. **Rate the residual risk.** High, medium or low, based on what the system holds and what reaches it. Treat anything touching personal information or payments as high until shown otherwise.
5. **Set expiry and review.** Give every exception a date no more than twelve months out. Anything not renewed with fresh evidence lapses.
6. **Check the substitute.** Once a quarter, test that the segment rule, the access list or the monitoring is actually in place, and keep the proof next to the entry.

### Trade-offs

A register creates visible obligations, and some owners will resist because it exposes how many exceptions exist. Sometimes replacing the system is cheaper than guarding it for three more years. And a register that is not reviewed becomes another stale document, so the quarterly check is the part to protect.

### An illustrative example

Illustrative: a Pretoria distribution company had five exceptions, among them an ageing server running its stock system. Before renewal, its IT manager recorded each one. For the stock server she moved it to an isolated network segment, restricted access to two named administrators and added a weekly review of its logs, then set a replacement date nine months out. The insurer's questionnaire was answered with the register attached, and the server was replaced before the next renewal.

## Diagnostic questions

- Can you produce a list of every active security exception within an hour?
- For each one, what protects the system instead, and who checks?
- Which exceptions have passed the date they were meant to end?
- Would your answers on the last insurance proposal still be accurate today?

## What good looks like

Each exception sits in one register with an owner, a reason, a compensating control, a residual risk rating and an end date. The substitute protections are tested on a schedule and the evidence is stored beside the entry. Renewal questionnaires are answered from the register, and exceptions either expire or are renewed with fresh proof. Gaps still exist, but they are known, bounded and defensible.

## Where Mellorca fits

Mellorca helps South African businesses assemble an honest register of exceptions, define realistic compensating controls for ageing or constrained systems, and set up the review routine so the register is trusted at renewal time.

## Method note

The sources define compensating controls, describe a tailorable control catalogue and a prioritised safeguard set, and set out the POPIA security duty. They do not describe any insurer's requirements or measure claim outcomes. The rand figures and the company are illustrative rather than a client case.
