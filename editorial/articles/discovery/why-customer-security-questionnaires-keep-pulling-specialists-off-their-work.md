---
hub: discovery
record_id: DISC-357
slug: why-customer-security-questionnaires-keep-pulling-specialists-off-their-work
title: Customer security questionnaires consume specialist time
description: Every enterprise deal now arrives with a security questionnaire that lands on the same two people. How to build an answer library, assign ownership and stop re-answering the same questions.
lead: Every enterprise deal now arrives with a security questionnaire that lands on the same two people. How to build an answer library, assign ownership and stop re-answering the same questions.
category: Security & Compliance Operations
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Security & Compliance Operations
problem_domain: Security & Compliance Operations
problem_owner: IT manager or operations head, with the sales lead owning the customer deadline
budget_owner: Financial director or managing director
sources:
  - Consensus Assessment Initiative Questionnaire (CAIQ) v3.1 [No - CSA | https://cloudsecurityalliance.org/artifacts/consensus-assessments-initiative-questionnaire-v3-1
  - STAR - Cloud Security Alliance (CSA) | https://cloudsecurityalliance.org/star
  - Section 19 Security measures on integrity and confidentiality of personal information - POPIA | https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/
  - Section 21 Security measures regarding information processed by operator - POPIA | https://popia.co.za/section-21-security-measures-regarding-information-processed-by-operator/
related:
  - Risk acceptances expire without reassessment | /discovery/why-accepted-risks-need-expiry-dates-and-reassessment/
  - Security controls are duplicated across teams | /discovery/why-the-same-security-control-gets-built-and-evidenced-by-several-teams/
  - When every system owner reads the same compliance rule differently | /discovery/when-every-system-owner-reads-compliance-rules-differently/
summary: Every enterprise deal now arrives with a security questionnaire that lands on the same two people. How to build an answer library, assign ownership and stop re-answering the same questions.
layout: plain
---
A sales manager forwards a spreadsheet with 240 questions. It came from a bank, a retailer or a large manufacturer that wants to buy, and the deal cannot move until the security section is complete. The questions go to the IT manager, who is also the person who restores the file server, resets passwords and renews licences. Three days of her week disappear into cells that ask whether the company encrypts laptops, how quickly leavers lose access and where backups are stored. The week after, a different customer sends a different spreadsheet with mostly the same questions in different words.

This article looks at that operating condition: customer security questionnaires consuming the time of the few people who understand the answers. It is common in South African businesses that supply larger organisations, and it grows with every new enterprise customer.

## The problem in plain language

Large buyers have to show that their suppliers protect information. Rather than audit each supplier, they send a questionnaire. Each buyer writes its own, or adapts one, so a supplier with ten customers can face ten formats, each asking overlapping questions in slightly different language. The people who can answer accurately are a small group: the IT lead, an external IT provider, perhaps a compliance officer. Their answers live in old emails and in the previous spreadsheet, if anyone can find it. Each new questionnaire starts close to zero.

## What the buyer is actually trying to solve

The person searching for this problem is rarely asking how to be more secure in the abstract. They want to shorten the time between receiving a questionnaire and returning an accurate answer, without pulling a specialist off operational work and without promising something the business does not actually do. The sales side wants speed because a stalled questionnaire is a stalled deal. The security side wants accuracy because an incorrect answer given to a customer becomes a contractual statement. Both interests have to be served.

## Evidence and system mechanism

### A standard questionnaire exists, but customers rarely require it

The Cloud Security Alliance publishes the [Consensus Assessments Initiative Questionnaire](https://cloudsecurityalliance.org/artifacts/consensus-assessments-initiative-questionnaire-v3-1), a standard set of security questions designed to be reused across assessments. Its existence shows the idea is accepted: one structured set of answers can serve many reviews. In practice a supplier cannot make every customer accept it. The useful lesson is internal rather than external. Even if each customer sends its own format, the supplier can hold one master set of answers and map each incoming question to it.

### Self-assessment and independent assurance are different things

The CSA's [STAR programme](https://cloudsecurityalliance.org/star) distinguishes a first level, where an organisation submits a self-assessment, from a second level that involves a certification or third-party attestation. That distinction matters for how a supplier answers. A statement that the business follows a practice is a self-declaration. A statement backed by an independent report carries more weight and may let a customer accept the report instead of asking each question. For a small supplier the sensible path is usually to make the self-declaration accurate and evidenced first, and consider independent assurance only if enough customers ask for it.

### South African law puts the duty on the responsible party

Under [section 19 of POPIA](https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/), a responsible party must take appropriate, reasonable technical and organisational measures to protect personal information, identify foreseeable risks, maintain safeguards, regularly verify that they work and keep them updated. [Section 21](https://popia.co.za/section-21-security-measures-regarding-information-processed-by-operator/) requires a written contract under which an operator processing information for the responsible party maintains those measures and notifies it of any compromise. When a customer sends a questionnaire, it is partly discharging its own duty to check its operators. The supplier is often that operator, so the questionnaire is a legitimate request, not an imposition, and a carefully maintained answer set is simply part of doing business with regulated customers.

### Warning signs

- The same person answers every questionnaire, and sales asks them for progress by message.
- Answers to the same question differ between two customers because they were written months apart.
- Nobody can say where the last completed questionnaire is stored.

## Problem owner and why-now trigger

The IT manager or operations head owns the answers. The sales or account lead owns the customer relationship and feels the delay. The budget owner for any improvement is usually the financial director or managing director, because the cost is hidden inside salaried time rather than a separate invoice.

The trigger is typically a first enterprise customer, a tender that requires a completed security section, or a customer announcing that it is tightening supplier checks because of its own legal obligations. Because POPIA expects responsible parties to oversee their operators, an increase in questionnaires often follows a customer's own compliance review.

## Economic consequence

The direct cost is specialist hours. If a questionnaire takes eighteen hours and a business receives eight a year, that is 144 hours, nearly four working weeks, taken from the person who keeps systems running, at their full cost to the company. The indirect costs are larger. Deals stall while answers are assembled. Rushed answers are sometimes wrong, and a wrong answer given to a customer creates a contractual problem later. Inconsistent answers also make a supplier look less reliable than it is.

## Root cause

- **No master answer set.** Every questionnaire is treated as a new task because the previous answers are not kept in reusable form.
- **No owner for accuracy.** Answers are written by whoever is available, without a review step.
- **Evidence scattered.** Policies, backup logs and access reviews sit in different places, a pattern also seen in [control owners who cannot produce evidence without manual searching](/discovery/control-owners-cannot-produce-evidence-without-manual-searching/).
- **Unclear thresholds for escalation.** Nobody decides when a question should go to a lawyer or an external adviser.
- **Starting from scratch each time.** This is the same pattern described in [third-party security reviews that keep starting from scratch](/discovery/third-party-security-reviews-keep-starting-from-scratch/).

## Practical intervention

1. **Collect the last five questionnaires.** Put all the questions in one sheet, group duplicates and note which are asked most often.
2. **Write one answer per question.** Keep it factual, dated and tied to a named control, such as the backup routine or the leaver process. Where the business does not do something, say so plainly and note the plan, if one exists.
3. **Attach evidence.** For each answer record where the proof lives: a policy, a configuration screenshot, a report. Review it every six months.
4. **Assign roles.** One person drafts from the library, one reviews for accuracy, and sales owns the deadline and the customer conversation.
5. **Set an escalation rule.** Questions about legal liability, breach notification times or data location go to a named senior reviewer.
6. **Offer the answer pack first.** Prepare a short security overview with the common answers and offer it to customers before they send their own sheet. Many will accept it for a first pass.

### Trade-offs

A master library can go out of date and then spread an old answer faster than before. The review date matters more than the library itself. Some customers will insist on their own format, and the library will still save most of the effort but not all of it. And an honest answer that reveals a gap may cost a deal in the short term, though a false answer costs more later.

### An illustrative example

Illustrative: a Durban logistics software supplier with 45 staff answered each new customer questionnaire from scratch. Its IT manager collected six past sheets and found that about two thirds of the questions repeated. She wrote a master set of answers with evidence links and a review date, and agreed with the sales director that sales would draft first and she would only review. The next questionnaire took a day of review time rather than most of a week.

## Diagnostic questions

- How many security questionnaires did the business receive in the last twelve months, and how many hours did each take?
- Can you find the answers you gave last time within five minutes?
- Who reviews an answer before it is sent?
- Which answers would you be unable to support with evidence if a customer asked?

## What good looks like

The business holds a single, dated set of answers mapped to the controls it actually operates, with evidence attached. Sales drafts from it, a specialist reviews only what is new or sensitive, and the turnaround is days rather than weeks. Answers stay consistent between customers, and the specialist spends their time on the systems rather than on the spreadsheets.

## Where Mellorca fits

Mellorca's [digital systems audit](/services/digital-systems-audit/) can document what controls and records actually exist, which is the factual base for accurate answers. [Digital operations improvement](/services/digital-operations-improvement/) can then set up the answer library, ownership and review routine so that it stays current.

## Method note

The sources describe a standard questionnaire, an assurance programme, the relevant POPIA sections and small business guidance. They do not measure how long questionnaires take in any particular business. The hours and the example are illustrative rather than a client case.
