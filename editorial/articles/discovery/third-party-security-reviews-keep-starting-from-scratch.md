---
hub: discovery
record_id: DISC-356
slug: third-party-security-reviews-keep-starting-from-scratch
title: Why third-party security reviews keep starting from scratch
description: Each new contract, renewal or audit triggers a fresh supplier questionnaire, and last year's answers cannot be found. Here is how to make supplier assurance reusable.
lead: Each new contract, renewal or audit triggers a fresh supplier questionnaire, and last year's answers cannot be found. Here is how to make supplier assurance reusable.
category: Security & Compliance Operations
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Security & Compliance Operations
problem_domain: Security & Compliance Operations
problem_owner: Information Security Lead / Compliance Officer
budget_owner: CFO / COO
sources:
  - The principles of supply chain security | https://www.ncsc.gov.uk/collection/supply-chain-security/principles-supply-chain-security
  - SP 800-161 Rev. 1, Cybersecurity Supply Chain Risk Management Practices for Systems and Organizations - CSRC | https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final
  - https://inforegulator.org.za/popia/ | https://inforegulator.org.za/popia/
  - STAR Registry - Cloud Security Alliance (CSA) | https://cloudsecurityalliance.org/star/registry
related:
  - Why Policy Acknowledgements Need a Reliable System Record | /discovery/why-policy-acknowledgements-need-a-reliable-system-record/
  - Why Vulnerability Severity Needs Business Criticality | /discovery/why-vulnerability-severity-needs-business-criticality/
  - Why IT asset registers miss cloud and SaaS services | /discovery/why-it-asset-registers-miss-cloud-and-saas-services/
summary: Each new contract, renewal or audit triggers a fresh supplier questionnaire, and last year's answers cannot be found. Here is how to make supplier assurance reusable.
layout: plain
---
The procurement team wants to sign a new software supplier by Friday. Security sends a questionnaire of a hundred or more questions. The supplier says it answered the same questions for another department eight months ago. Nobody can find those answers, the person who reviewed them has left, and the evidence sits in an email thread. So the review starts again. Six weeks later the contract is signed, and the new answers are saved in a folder that the next reviewer will also fail to find.

This is a common pattern in businesses that have grown their supplier base faster than their supplier assurance process. Each review is done carefully, but none of them builds on the last.

## The problem in plain language

A third-party security review asks whether a supplier can be trusted with your data, systems or operations. In many businesses that review is a one-off project tied to a purchase. It is not kept as a record that can be maintained. The results live in a spreadsheet, an email or a procurement file. When the same supplier comes up again, through a new contract, a renewal, a new department using the product or an auditor's question, there is no current, trusted record to start from.

The symptoms are familiar. Suppliers complain about repeated questionnaires. Purchases stall in security review. Auditors ask for evidence of supplier assessment and get inconsistent answers. Security staff spend their time chasing forms instead of judging risk.

## What the buyer is actually trying to solve

People searching for "third-party security reviews repeated from scratch", "vendor security questionnaire reuse" or "supplier assurance register" usually face a deadline, often an audit finding about supplier oversight. Underneath, they want three things. Reviews should take less effort. The depth of each review should match the risk the supplier carries. The business should be able to show, at any time, what it knows about each important supplier and when it last checked.

## Evidence and system mechanism

Supplier risk is not a one-time event, and the main frameworks treat it as a cycle. The UK National Cyber Security Centre's [supply chain security principles](https://www.ncsc.gov.uk/collection/supply-chain-security/principles-supply-chain-security) group twelve principles into four stages: understand the risks, establish control, check your arrangements and keep improving as the supply chain changes. A review that is filed and forgotten covers only part of the first stage.

NIST's [SP 800-161 Rev. 1](https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final) on cybersecurity supply chain risk management makes a related point. Organisations often have little visibility into how the technology they buy is developed, integrated and deployed. It therefore builds supply chain risk management into wider risk management at several levels, not into single purchasing decisions.

For South African businesses there is also a legal side. The Information Regulator's [POPIA guidance](https://inforegulator.org.za/popia/) explains that a responsible party must take reasonable technical and organisational measures to secure personal information. It also explains that an operator processing information on its behalf must report security compromises to the responsible party, which stays accountable. If a supplier processes your customers' or employees' personal information, you need to know, and be able to show, that its safeguards are still adequate. A review from three years ago does not do that.

Some reuse already exists in the market. The Cloud Security Alliance's [STAR Registry](https://cloudsecurityalliance.org/star/registry) publishes cloud providers' completed Consensus Assessments Initiative Questionnaires, a standard set of yes/no control questions mapped to the Cloud Controls Matrix, along with higher-level certifications. Many suppliers also hold independent certifications or audit reports. A business that insists on its own custom questionnaire for every supplier pays for that choice in time and goodwill.

### How the repetition builds up

*Illustrative example, not a client case.* A South African financial services firm with about two hundred staff uses a cloud document-signing service. Compliance assessed it when it was bought. Two years later, HR wants to use the same service for employment contracts, and a new questionnaire goes out because the first review cannot be found. The next year, an auditor asks which suppliers process personal information and how they were assessed. Three spreadsheets give three answers. Each review was done in good faith. None was kept.

## Problem owner and why now

The problem usually sits between the information security lead, the compliance or risk officer and procurement. The budget owner is typically the CFO or COO, because delay and audit exposure land on them. Common triggers are an audit finding about supplier oversight, a customer demanding evidence of your own supply chain controls, a security incident at a supplier, and rapid growth in software-as-a-service subscriptions bought by individual departments.

## Economic consequence

The costs are labour, delay and risk. Security and compliance staff repeat work they have already done. Purchases wait weeks, which delays projects and sometimes pushes departments to buy around the process altogether. Suppliers spend time on repeated questionnaires, which can strain relationships and slow negotiations. The larger risk is false comfort: a supplier marked "reviewed" in a spreadsheet may have changed its hosting, ownership or security practices since, and the business would not know until an incident. Count your own figures: reviews per year, average elapsed days, and how many repeat a supplier already assessed.

## Root cause

- **Reviews are tied to purchases, not to suppliers.** The record belongs to a project, so it disappears when the project closes.
- **No single supplier register.** There is no authoritative list of suppliers, the data they handle, their risk tier and their last review date.
- **One questionnaire for everyone.** A low-risk tool and a payroll processor get the same depth of review, so effort is spent in the wrong place.
- **Evidence is not accepted in standard forms.** Certifications and published assessments are ignored in favour of custom forms.
- **No trigger for re-review.** Reviews happen when someone remembers, not when risk changes.

## Practical intervention

1. **Create a supplier assurance register** listing each supplier, the business owner, the data and systems it touches, its risk tier, the evidence held, findings, and next review date.
2. **Tier suppliers by impact.** Base the tier on data sensitivity, system access and operational dependence. Match review depth to the tier.
3. **Accept standard evidence first.** Ask for existing certifications, independent audit reports or published standard questionnaires, and send custom questions only for the gaps.
4. **Review on change as well as on schedule.** A new use case, wider data, a supplier incident, a change of ownership or a renewal should prompt a targeted update, not a full restart.
5. **Link the register to procurement and contracts,** so a new purchase starts by checking whether the supplier is already known.
6. **Track findings to closure,** with owners and dates, so a known weakness is not rediscovered next year.

Two related problems make supplier assurance harder and are worth tackling at the same time: [supplier access that survives after engagements end](/discovery/why-supplier-access-survives-after-engagements-end/), and the wider issue that [application risk assessments cannot be one-time](/discovery/why-application-risk-assessments-cannot-be-one-time/). Keeping evidence as records rather than attachments is covered in [why compliance evidence should not depend on screenshots](/discovery/why-compliance-evidence-should-not-depend-on-screenshots/).

## Trade-offs

Standard evidence saves time but may not cover a specific concern, such as where your data is hosted, so targeted follow-up questions are still needed. Tiering means accepting a lighter review for low-risk suppliers, which some risk teams find uncomfortable. A register only works if someone keeps it current. That is a small ongoing cost that replaces a much larger repeated one.

## Diagnostic questions

- Can you list your twenty most important suppliers, with the date each was last reviewed?
- When a department proposes a supplier, how do you check whether it has already been assessed?
- Do all suppliers get the same questionnaire regardless of risk?
- Which suppliers process personal information on your behalf, and what evidence shows their safeguards are current?
- What would prompt a re-review before the next renewal?

## What good looks like

Every material supplier has one current assurance record that anyone authorised can find. Review depth follows risk. Standard evidence is accepted where it is enough. Changes in use or supplier circumstances trigger targeted updates. When an auditor or customer asks how a supplier was assessed, the answer takes minutes, not weeks.

## Where Mellorca fits

Mellorca's [digital systems audit](/services/digital-systems-audit/) can map the current supplier estate and the data each supplier touches. Our [digital operations improvement](/services/digital-operations-improvement/) work designs the register, tiering and review workflow so they fit the tools the business already uses.

*Method note:* this article describes general practice and is not legal advice on POPIA obligations; confirm specific duties with a qualified adviser.
