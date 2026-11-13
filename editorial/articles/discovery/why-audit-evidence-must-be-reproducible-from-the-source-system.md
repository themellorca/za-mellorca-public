---
hub: discovery
record_id: DISC-369
slug: why-audit-evidence-must-be-reproducible-from-the-source-system
title: Audit evidence cannot be reproduced from the original source
description: A screenshot or edited export cannot be confirmed by customers or auditors. How to name the source of record and capture evidence that can be re-run.
lead: When proof of a control is a screenshot or an edited export, customers and auditors cannot confirm it. How to name the source of record and capture evidence that can be re-run.
category: Security & Compliance Operations
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Security & Compliance Operations
problem_domain: Security & Compliance Operations
problem_owner: Compliance, risk or finance lead, with system administrators who extract the evidence
budget_owner: Financial director or executive responsible for the customer relationship
sources:
  - SP 800-53A Rev. 5, Assessing Security and Privacy Controls in Information Systems and Organizations - CSRC | https://csrc.nist.gov/pubs/sp/800/53/a/r5/final
  - SP 800-137, Information Security Continuous Monitoring (ISCM) for Federal Information Systems and Organizations - CSRC | https://csrc.nist.gov/pubs/sp/800/137/final
  - System and Organization Controls: SOC Suite of Services | https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2
related:
  - Why policy acknowledgements need a reliable system record | /discovery/why-policy-acknowledgements-need-a-reliable-system-record/
  - Security controls are duplicated across teams | /discovery/why-the-same-security-control-gets-built-and-evidenced-by-several-teams/
  - Control testing schedules are maintained in personal calendars | /discovery/why-control-testing-schedules-should-not-live-in-personal-calendars/
summary: When proof of a control is a screenshot or an edited export, customers and auditors cannot confirm it. How to name the source of record and capture evidence that can be re-run.
layout: plain
---
A large retail customer sends a supplier assurance request on a Monday. It asks for proof that access to the billing system was reviewed in the last quarter. The compliance lead knows the review happened. What she has is a PDF exported by someone who has since left, a screenshot with no date, and a spreadsheet that has been edited twice. When she tries to run the report again from the system, the user list now looks different, because people have joined and left. The evidence exists, but it cannot be reproduced from where it came from.

This article looks at that operating condition: audit evidence that cannot be regenerated from the original source. It is common in businesses that are good at doing controls and weak at proving them later.

## The problem in plain language

Evidence is useful to an auditor or customer only if it can be shown to come from the system of record, at a stated time, by a method someone else can repeat. When evidence is a copy of a copy, hand-edited, renamed or built from memory, nobody can confirm it matches what the system really held. The business then spends days arguing that a document is genuine instead of simply running the query again.

## What you are actually trying to solve

The financial director, compliance lead or operations head wants to answer an assurance request quickly and with confidence, without pulling the IT team away for a week. They also want to stop a good control from being marked as failed just because the proof was weak. For the auditor or customer, the question is simple: can I trust that this is what the system showed, and could I get it again?

## Evidence and system mechanism

### Assessment relies on examining the source

NIST's [guidance on assessing security and privacy controls](https://csrc.nist.gov/pubs/sp/800/53/a/r5/final) provides assessment procedures that are executed against defined controls and tailored to the organisation, along with advice on analysing results. Assessment procedures of this kind work by examining records, interviewing people and testing the control itself. Each method is only as good as the artefact it is given. If the artefact cannot be traced to a source, the assessor has to fall back on interviews, which are the weakest form of proof.

### Monitoring should produce repeatable information

NIST's guideline on [continuous monitoring](https://csrc.nist.gov/pubs/sp/800/137/final) describes ongoing assurance that controls are effective and aligned with the organisation's risk tolerance. Ongoing assurance implies that the same measurement is taken on a schedule from the same place. A one-off export prepared for an audit is the opposite of that: it cannot show a trend and it cannot be compared to last quarter.

### Assurance reports depend on evidence over a period

The AICPA's [SOC 2 resources](https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2) describe an assurance framework that service providers use to report to customers on controls relevant to security and related criteria. Even a business that never commissions a SOC 2 report is increasingly asked questions shaped by it, because large customers use that language in their own supplier reviews. Those questions assume that a control can be shown to have operated, not just to exist.

### Warning signs

- Evidence is a screenshot, a forwarded email or a PDF without a date or source stamp.
- The same question gives slightly different answers when asked in different weeks.
- The person who produced last year's evidence is the only one who knows how.
- Auditors ask for a "fresh extract" and the team has to work out how the first one was made.
- Data was transformed in a spreadsheet and the original is gone, as described in [why compliance evidence should not depend on screenshots](/discovery/why-compliance-evidence-should-not-depend-on-screenshots/).

## Problem owner and why-now trigger

The problem owner is the compliance, risk or finance lead who has to answer for the evidence, working with the system administrators who can pull it. The budget owner is typically the financial director or the executive responsible for the customer relationship, since the cost of failing an assurance request lands on revenue, not on the IT budget.

The trigger is a customer assurance request: a questionnaire, a supplier audit or a contract renewal that now includes security and privacy clauses. Retailers, banks, insurers and public bodies in South Africa routinely pass such requirements down to suppliers. Related reading: [control owners cannot produce evidence without manual searching](/discovery/control-owners-cannot-produce-evidence-without-manual-searching/).

## Economic consequence

The visible cost is time. Rebuilding evidence by hand for a single assurance request can take a finance or IT person several days, and it recurs at every renewal. The less visible cost is commercial. A response that arrives late, or that has to be qualified because the evidence cannot be confirmed, can delay a contract signature or push a customer to a supplier that answers cleanly. Weak evidence can also turn a control that worked into a finding. And when personal information is involved, the inability to show what was reviewed makes it harder to demonstrate to the Information Regulator that reasonable safeguards were in place.

## Root cause

- **Evidence is created for the audit, not by the process.** Nobody captures proof when the control runs, only when someone asks.
- **No fixed definition of the source.** The team has never agreed which system or report is the record for each control.
- **Reports depend on current state.** The system shows who has access today, not who had it on 31 March, and nothing was saved at the time.
- **Manual transformation.** Data is copied into a spreadsheet, filtered and edited, with no record of the steps.
- **Undocumented method.** The query or procedure lives in one person's head or browser history.

## Practical intervention

1. **Pick the ten controls customers ask about most.** Typical ones: access reviews, backup restores, patching, joiner and leaver handling, supplier reviews and incident logs.
2. **Name the source of record for each.** Write down the system, report or log from which the evidence must come.
3. **Write the extraction method.** A short, step-by-step note, or a saved report or query, that anyone with the right access can follow. Record the filters and the date range.
4. **Capture at the time of the control.** When the review is done, export the data, store it read-only with a date and the name of the person, and keep a hash or system-generated timestamp where the tool supports it.
5. **Test reproducibility.** Once a quarter, have a second person re-run the method and compare the result to the stored copy. Differences must be explained.
6. **Keep an evidence index.** One list showing control, owner, source, method, last capture date and storage location.

### Trade-offs

Capturing evidence at the time adds a few minutes to every control run, and storage must respect POPIA: evidence packs that contain personal information should be limited to what is needed and kept only as long as required. A small business does not need a compliance platform to begin. A shared folder with locked permissions and a disciplined naming convention works until volume justifies a tool.

### An illustrative example

Illustrative: a Pretoria logistics company was asked by a retail customer to show quarterly reviews of administrator access. The operations manager had evidence for two quarters, both screenshots. After agreeing that the identity system was the source of record, the IT lead saved a dated export on the day of each review and wrote a four-line method. At the next customer request the evidence was ready in an hour, and the customer's own assessor re-ran the report in front of the team.

## Diagnostic questions

- For each control customers ask about, which system is the source of record?
- Could someone other than the usual person re-create last quarter's evidence today?
- Is the evidence dated and stored in a place nobody can quietly edit?
- How long did your last assurance request take to answer, and why?

## What good looks like

Each key control has a named owner, a defined source, a written method and a dated capture each time it runs. Evidence is stored read-only and indexed. A second person can reproduce it on request, and the business answers assurance requests with extracts rather than explanations.

## Where Mellorca fits

Mellorca's [digital systems audit](/services/digital-systems-audit/) can identify which controls have weak or unrepeatable evidence and where the true source of record sits. [Digital operations improvement](/services/digital-operations-improvement/) can then build the capture routine, evidence index and review schedule so that proof is produced as a by-product of the work.

## Method note

The sources are standards and assurance-body guidance used to describe how assessment and ongoing assurance normally depend on traceable evidence. They do not measure how long any specific business takes to answer an assurance request, and the example is illustrative rather than a client case. Legal obligations should be confirmed with the company's information officer or adviser.
