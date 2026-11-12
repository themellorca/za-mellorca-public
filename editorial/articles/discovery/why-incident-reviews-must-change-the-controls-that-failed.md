---
hub: discovery
record_id: DISC-374
slug: why-incident-reviews-must-change-the-controls-that-failed
title: Incident lessons do not update preventive controls
description: Incident reviews often end in a report while the procedures and settings stay as they were. How to turn lessons into dated, verified control changes so the same incident does not return.
lead: Incident reviews often end in a report while the procedures and settings stay as they were. How to turn lessons into dated, verified control changes so the same incident does not return.
category: Security & Compliance Operations
published_date: 2026-10-09
updated_date: 2026-10-09
eyebrow: Security & Compliance Operations
problem_domain: Security & Compliance Operations
problem_owner: Incident response lead (IT or risk), with finance, HR and operations owning the affected procedures
budget_owner: Financial director or managing director
sources:
  - SP 800-61 Rev. 3, Incident Response Recommendations and Considerations for Cybersecurity Risk Management: A CSF 2.0 Community Profile - CSRC | https://csrc.nist.gov/pubs/sp/800/61/r3/final
  - Google SRE - Blameless Postmortem for System Resilience | https://sre.google/sre-book/postmortem-culture/
related:
  - Security controls are duplicated across teams | /discovery/why-the-same-security-control-gets-built-and-evidenced-by-several-teams/
  - Control testing schedules are maintained in personal calendars | /discovery/why-control-testing-schedules-should-not-live-in-personal-calendars/
  - Access logs that disappear before the auditor asks for them | /discovery/access-logs-that-disappear-before-the-auditor-asks/
summary: Incident reviews often end in a report while the procedures and settings stay as they were. How to turn lessons into dated, verified control changes so the same incident does not return.
layout: plain
---
A phishing email gets a staff member to approve a fake supplier bank-detail change. The finance team catches it before the payment goes out. The IT lead writes up what happened, the team meets for forty minutes, and everyone agrees the approval step needs a call-back check. Six months later the same thing happens to a different clerk, because the call-back step was agreed in the room and never written into the supplier-change procedure, the checklist or the system settings. The lesson was learned. It was not applied.

This article looks at that operating condition: incident lessons that do not update preventive controls. It is common in businesses that handle incidents competently and then move on.

## The problem in plain language

An incident review produces insight, but insight is not a control. A control is something that runs without relying on anyone remembering: a changed setting, a revised approval rule, a new check in a workflow. If the output of a review is a document or a conversation, the business has recorded history rather than changed its defences. The next incident then arrives through the same gap, and the review repeats.

## What the buyer is actually trying to solve

The managing director or financial director wants to stop paying for the same incident twice. They want evidence that when something goes wrong, the business ends up measurably safer, and that this can be shown to an insurer, regulator or large customer who asks what changed afterwards. The IT lead wants reviews to lead to approved work, not to a pile of recommendations nobody has the authority to implement.

## Evidence and system mechanism

### Incident response is meant to feed risk management

NIST's [incident response recommendations](https://csrc.nist.gov/pubs/sp/800/61/r3/final) aim to incorporate incident response throughout cybersecurity risk management activities, in order to help organisations prepare, reduce the number and impact of incidents, and improve their detection, response and recovery. The stated intent is that incident handling and risk management are one loop, not two separate activities. A review that does not reach the controls breaks the loop.

### Postmortems need tracked follow-up

Google's chapter on [postmortem culture](https://sre.google/sre-book/postmortem-culture/) describes a review process in which action items are recorded, assigned and tracked, and in which completed postmortems are kept in a repository so others can learn from them. The emphasis on tracked actions is the relevant point. A lesson without an owner and a due date is an observation.

### Handling frameworks assume a lessons-learned step with consequences

The CISA page on [incident and vulnerability response playbooks](https://www.cisa.gov/resources-tools/resources/federal-government-cybersecurity-incident-and-vulnerability-response-playbooks) sets out standardised response procedures for organisations. Whatever the size of the business, the idea carried across is that response follows a defined procedure that ends in improving the procedure and the controls around it. That requires someone to own the change, not only the write-up.

### Warning signs

- The same type of incident, such as a payment fraud attempt or a lost laptop, appears more than once in a year.
- Review notes say "we should" rather than naming a person and a date.
- Procedures and checklists are older than the last incident they were meant to prevent.
- Security settings are the same after the incident as before it.
- Nobody can say how many recommendations from the last three incidents were completed. See also [security findings tracked in spreadsheets after scans](/discovery/security-findings-tracked-in-spreadsheets-after-scans/).

## Problem owner and why-now trigger

The problem owner is whoever leads incident response, usually the IT lead or head of risk, but the controls that need changing belong to different people: finance owns payment procedures, HR owns leaver processes, operations owns site access. The budget owner is the financial director or managing director, because the fix often costs time rather than software.

The trigger is a customer assurance request, an insurer renewal or a contract clause that asks what the business changed after its last incident. It can also be a second incident of the same kind, which makes the gap hard to explain. Related reading: [incident response that is improvised](/discovery/automation-incident-response-improvised/).

## Economic consequence

A repeated incident costs more than the first, because the business now has no excuse. Losses from payment fraud, downtime or data exposure repeat, and so do the hours spent investigating. Insurers may increase premiums or exclusions on the next renewal. Where personal information is involved, the Information Regulator and affected customers will reasonably ask what was done after the first event. There is also a quieter cost: staff who take part in reviews see nothing change and stop engaging, so the next review is shallower.

## Root cause

- **Reviews end with a report.** The process has no step that turns recommendations into approved, assigned changes.
- **Controls belong to other teams.** The reviewer cannot change finance procedures or HR checklists, and nobody coordinates.
- **No action tracker.** Recommendations sit in meeting notes and email.
- **No link to the control register.** The business cannot see which controls were affected by which incident.
- **Urgency fades.** Once normal work resumes, the follow-up competes with everything else and loses.

## Practical intervention

1. **End every review with a short change list.** Each item names the control to change, the owner, the due date and how completion will be checked.
2. **Classify the lesson.** Was it a missing control, a control that failed, a procedure not followed or a decision made with poor information? Each calls for a different fix.
3. **Update the source document.** Change the procedure, checklist, system setting or training material itself, not only the review notes.
4. **Use one tracker.** Keep a single list of actions arising from incidents, visible to the executive, with status reviewed monthly.
5. **Close the loop with evidence.** An action is closed only when someone other than the owner confirms the change is live, for example by a test of the new check.
6. **Link to the control register.** Record which controls each incident affected and when they were last updated.
7. **Re-test after ninety days.** Check that the new control is being followed in practice.

### Trade-offs

Not every lesson deserves a new control. Some incidents are one-off and a heavy response adds friction for little gain. Apply a simple filter: would this change have prevented or reduced the incident, and what does it cost in staff time? Record the decision not to act, with the reason, so the choice is deliberate.

### An illustrative example

Illustrative: a Gauteng wholesaler had a fraudulent bank-detail change caught by luck. The review concluded that bank-detail changes needed a call-back to a known number. This time the finance manager updated the supplier-change procedure, added a mandatory call-back field to the change form, and the IT lead restricted who could edit bank details in the accounting system. Ninety days later a sample of ten changes was checked, and nine had the call-back recorded. The tenth was followed up with the clerk.

## Diagnostic questions

- What changed in your controls after your last three incidents?
- Where are the review actions recorded, and who checks them?
- Which procedures were updated, and when?
- Have you seen the same type of incident more than once in twelve months?

## What good looks like

Every incident review ends with named, dated changes to the controls that failed. Procedures, checklists and settings are updated at the source, the actions are tracked in one place, and completion is verified by someone other than the owner. A follow-up check after ninety days shows whether the change holds. When an insurer or customer asks what was learned, the answer is a short list of what was changed and when.

## Where Mellorca fits

Mellorca's [digital systems audit](/services/digital-systems-audit/) can trace recent incidents to the controls that were meant to prevent them and show where nothing changed. [Digital operations improvement](/services/digital-operations-improvement/) can then build the action tracker, update the procedures and set up the ninety-day verification.

## Method note

The sources are standards and practitioner guidance used to describe how incident response, postmortems and follow-up are normally structured. They do not measure how often any business repeats an incident, and the example is illustrative rather than a client case. Reporting duties under POPIA should be confirmed with the company's information officer or legal adviser.
