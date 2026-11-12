---
hub: discovery
record_id: DISC-354
slug: why-accepted-risks-need-expiry-dates-and-reassessment
title: Risk acceptances expire without reassessment
description: An accepted risk is only sound at the moment it is accepted. How to give every acceptance an expiry date, recorded assumptions and a reassessment, before a customer asks.
lead: An accepted risk is only sound at the moment it is accepted. How to give every acceptance an expiry date, recorded assumptions and a reassessment, before a customer asks.
category: Security & Compliance Operations
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Security & Compliance Operations
problem_domain: Security & Compliance Operations
problem_owner: Risk or compliance officer or information security lead, with the accepting executive owning each decision
budget_owner: Financial director or chief executive
sources:
  - SP 800-30 Rev. 1, Guide for Conducting Risk Assessments - CSRC | https://csrc.nist.gov/pubs/sp/800/30/r1/final
  - SP 800-39, Managing Information Security Risk: Organization, Mission, and Information System View - CSRC | https://csrc.nist.gov/pubs/sp/800/39/final
  - Build a cloud governance team - Cloud Adoption Framework | https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/govern/policy-compliance/risk-tolerance
related:
  - Why Supplier Access Survives After the Supplier Engagement Ends | /discovery/why-supplier-access-survives-after-engagements-end/
  - Why Vulnerability Severity Needs Business Criticality | /discovery/why-vulnerability-severity-needs-business-criticality/
  - Why IT asset registers miss cloud and SaaS services | /discovery/why-it-asset-registers-miss-cloud-and-saas-services/
summary: An accepted risk is only sound at the moment it is accepted. How to give every acceptance an expiry date, recorded assumptions and a reassessment, before a customer asks.
layout: plain
---
A large retail customer sends a supplier assurance questionnaire. One question reads: "List all open security risks that your management has formally accepted, with the date of acceptance and the date of next review." The information security lead opens the risk register and finds fourteen accepted risks. Nine were accepted more than eighteen months ago. Four carry a note that says "review in 6 months". One of them was accepted by a manager who has since left. None has been looked at again, and the questionnaire is due on Friday.

This article looks at that operating condition: risk acceptances that expire, or should have expired, without anyone reassessing them. It tends to surface when a customer, auditor or insurer asks for evidence that accepted risks are still understood and still tolerable.

## The problem in plain language

Accepting a risk is a legitimate management decision. A business may decide that a legacy system cannot be patched this quarter, that a control is too costly for the exposure it addresses, or that a supplier gap will be tolerated while a replacement is found. The decision is only sound at the moment it is taken. The threat changes, the system becomes more connected, the data becomes more sensitive, or the compensating control quietly stops working. If the acceptance is recorded but never revisited, it turns from a decision into a permanent default.

The common failure is not that the business accepts risks. It is that an acceptance has no end date, or has an end date that nothing monitors, and so continues indefinitely after the conditions that justified it have changed.

## What the buyer is actually trying to solve

Compliance officers, information security leads and operations directors search for ways to manage risk exceptions, answer customer assurance questionnaires and show that risk decisions are controlled. The underlying need is a register of acceptances that can answer, at any time: what was accepted, by whom, why, on what conditions, until when and what happens next?

## Evidence and system mechanism

### Risk assessment is part of an ongoing process

The NIST guide to [conducting risk assessments (SP 800-30)](https://csrc.nist.gov/pubs/sp/800/30/r1/final) describes risk assessments as part of an overall risk management process that gives senior leaders the information needed to choose a course of action in response to identified risks. A risk acceptance is one such course of action. Its basis is the assessment at the time, so when the assessment ages, the justification for the acceptance ages with it.

### Monitoring is a stage of the process, not an extra

NIST's [guidance on managing information security risk (SP 800-39)](https://csrc.nist.gov/pubs/sp/800/39/final) describes a structured but flexible approach, with assessing, responding to and monitoring risk on an ongoing basis. Monitoring is where an expiring acceptance should be caught. A business that has a place to record acceptances but no routine for monitoring them has completed only part of the cycle.

### Governance is continuous

Microsoft's cloud governance guidance makes a similar point in plain terms: governance is not a one-time project but a continuous process that needs ongoing monitoring, evaluation and updates as technology, risks and requirements change. See [its overview of cloud governance and risk tolerance](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/govern/policy-compliance/risk-tolerance). A risk acceptance is a governance decision and follows the same rule.

### Warning signs

- Accepted risks in the register have no review date, or the review date has passed.
- The person who accepted the risk has changed roles or left.
- The compensating control named in the acceptance has not been tested since it was written.
- Similar exceptions in different systems expire on different dates, or never. The patching version of this is described in [patch exceptions that never expire](/discovery/patch-exceptions-that-never-expire/).
- Answering a customer questionnaire requires a search through email.

## Problem owner and why-now trigger

The risk or compliance officer, or in smaller businesses the information security lead or operations director, owns the register. The executive who accepted the risk owns the decision. The financial director or chief executive owns the consequences if the accepted risk materialises.

The trigger is commonly a customer assurance request: a questionnaire, a security review for a tender or a contract renewal clause requiring evidence of risk management. Larger customers increasingly ask suppliers to show that risk decisions are recorded, dated and reviewed. A business that cannot answer quickly may lose time, credibility or the work itself. In South Africa the same evidence is useful under POPIA, where responsible parties are expected to take appropriate measures to secure personal information, and a weakness accepted long ago may now touch a larger store of personal information than anyone remembers.

## Economic consequence

A stale acceptance is an unpriced liability. If the risk materialises, the business cannot say the exposure was understood and tolerated, because nobody reassessed it. Direct costs include incident response, downtime, customer notification and possible regulatory consequences. Indirect costs include delayed customer onboarding while the register is reconstructed, lost tenders and weaker positions in insurance discussions. Evidence problems of this kind are explored in [access logs that disappear before the auditor asks](/discovery/access-logs-that-disappear-before-the-auditor-asks/), and the architecture-level version in [why security architecture decisions need linked risk exception records](/discovery/why-security-architecture-decisions-need-linked-risk-exception-records/).

## Root cause

- **No expiry by design.** The acceptance form asks for a rationale but not for an end date.
- **No trigger for review.** A review is only scheduled by diary, and diaries are lost when people change roles.
- **The acceptor cannot be found.** Ownership sits with a person, not a role, so reassessment has no home.
- **Conditions are not recorded.** The acceptance does not list the assumptions, such as network isolation or a compensating control, that must remain true.

## Practical intervention

1. **Add a mandatory expiry.** Every risk acceptance gets an end date at the point of approval. Twelve months is a common maximum, with shorter periods for higher risks.
2. **Record assumptions and triggers.** Write down what must stay true for the acceptance to remain valid, and what events force an early review: a new internet-facing connection, a change in data held, a vendor end-of-support notice, or an incident.
3. **Assign a role, not only a name.** Record the accepting executive's role and the risk owner's role, so that the acceptance survives staff changes.
4. **Automate the reminder.** Generate alerts at ninety, thirty and zero days before expiry to the owner and the risk register keeper. A simple calendar or ticket queue is enough.
5. **Reassess, then decide again.** At expiry, repeat the assessment. The outcome is one of four: renew with a new date, reduce the risk with a fix, transfer it, or stop the activity. No acceptance should continue by silence.
6. **Report the list.** Give the executive team a short quarterly view: accepted risks, expiry dates, overdue reviews and changes since last quarter. The need for repeated assessment is also set out in [why application risk assessments cannot be one-time](/discovery/why-application-risk-assessments-cannot-be-one-time/).

### Trade-offs

Short expiry periods create work, and a business with many small accepted risks may drown in reviews. Tier them: review high-impact risks often and low-impact ones annually. Be careful not to turn the process into a rubber stamp, where acceptances are renewed automatically without a fresh look. A renewed acceptance should show what was checked.

### An illustrative example

Illustrative: a Stellenbosch agri-processing company with about 150 staff received a supplier security questionnaire from an export customer. Its register held eleven accepted risks, only three with dates. The operations director spent two weeks establishing which were still valid. She found one, an unsupported scheduling server, that had since been connected to the customer-order system. The company added expiry dates and assumptions to every entry, assigned roles as owners, and set a quarterly review. At the next customer questionnaire the answer took an afternoon.

## Diagnostic questions

- Does every accepted risk have an approval date, an expiry date and a named role?
- Which acceptances were granted by people who have left?
- What assumptions made each acceptance reasonable, and are they still true?
- How quickly could you answer a customer asking for all open accepted risks?
- What happens on the day an acceptance expires?

## What good looks like

The register is short, current and owned. Each acceptance has an expiry date, recorded conditions and a reminder. Expiry forces a fresh assessment and a decision. Executives see the list regularly, customers receive it without delay, and no risk is accepted forever merely because nobody looked.

## Where Mellorca fits

Mellorca helps businesses design a workable risk acceptance register, with expiry, ownership and reminders built into the workflow, and connect it to the systems and controls it concerns, so that evidence is ready when a customer or auditor asks.

## Method note

NIST and Microsoft material is used as a reference for risk management practice; it is not a statement of what any South African business is legally required to adopt. Obligations under POPIA and other laws should be confirmed with qualified advisers. The example is illustrative rather than a client case.
