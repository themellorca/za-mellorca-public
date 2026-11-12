---
hub: insights
record_id: INS-209
slug: what-audit-trails-should-exist-for-automated-decisions
title: What Audit Trails Should Exist for Automated Decisions
description: When software approves, blocks or ranks something, someone will eventually ask why. These are the seven things an audit trail should record so the answer is never just "the system decided".
lead: When software approves, blocks or ranks something, someone will eventually ask why. These are the seven things an audit trail should record so the answer is never just "the system decided".
category: Automation Governance
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Automation Governance
sources:
  - CloudTrail concepts - AWS CloudTrail | https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html
  - Learn about auditing solutions in Microsoft Purview | https://learn.microsoft.com/en-us/purview/audit-solutions-overview
  - AI Risk Management Framework | https://www.nist.gov/itl/ai-risk-management-framework
related:
  - Before You Buy Another Tool, Ask These Questions | /insights/before-you-buy-another-tool-ask-these-questions/
  - What Should Never Be Automated Inside a CRM? | /insights/crm-actions-that-should-stay-with-a-person/
  - What Makes an Automation Worth Building | /insights/what-makes-an-automation-worth-building/
summary: When software approves, blocks or ranks something, someone will eventually ask why. These are the seven things an audit trail should record so the answer is never just "the system decided".
layout: plain
---
A distributor in Gqeberha uses a rule to decide which credit-account customers are placed on hold. One Monday a long-standing customer is blocked, the sales rep is furious, and the credit controller is asked a simple question: why? Nobody can answer. The rule is in the system, but the record of what it looked at, which version of the rule applied and whether a person touched the result was never kept. The only honest reply is "the system decided".

That reply is not good enough once decisions affect money, access or service. An audit trail is the record that lets you reconstruct a decision after the fact. This article sets out what that record should contain for decisions made by rules, scripts and AI tools, how long to keep it and who should be able to read it.

## What counts as an automated decision

Any time software chooses an outcome without a person reading each case, you have an automated decision. Approving a refund below a threshold, ranking leads, flagging an invoice as a possible duplicate, routing a support ticket and declining a credit application all qualify. Some are trivial and some change a customer's life, and the depth of the trail should follow the stakes.

South African law already treats some of these seriously. Section 71 of the Protection of Personal Information Act, available on the [government's published copy of the Act](https://www.gov.za/documents/protection-personal-information-act), restricts decisions that carry legal consequences for a person, or affect them substantially, when they rest solely on automated processing of personal information. There are exceptions, and where they apply the person must be given an opportunity to make representations about the decision. You cannot honour that right if you cannot show how the decision was reached. Even outside the law, a decision you cannot explain is a decision you cannot defend to a customer, an auditor or your own board.

## The seven things a useful trail records

A trail is useful when someone who was not there can answer the question "what happened, and why?" without guesswork. Seven elements cover most cases.

1. **The trigger.** What started the decision: a form submission, a scheduled run, a message from another system. Include the time to the second and the system that sent it.
2. **The inputs, as they were.** The values the decision used at that moment, not a pointer to a record that may have changed since. If a customer's balance was R48,200 when the rule ran and R12,000 an hour later, the trail must hold the first number.
3. **The logic version.** The rule set, script or model that was live, identified by a version number or date. Without it, you cannot tell whether a surprising result came from the data or from a change someone made last week.
4. **The outcome.** What the system concluded and what it then did: the status it set, the message it sent, the record it created.
5. **The reason, in plain words.** Which condition decided the matter. "Overdue balance above limit for more than 30 days" is useful. "Rule 14 returned true" is not.
6. **Any human involvement.** Who reviewed, approved, overrode or ignored the outcome, and when. An override that looks identical to the system's own output is a standing hazard, as explained in [why manual overrides must be distinguishable from source data](/discovery/manual-overrides-indistinguishable-from-source-data/).
7. **The result of the action.** Whether the downstream step succeeded, failed or was retried. A decision that was made but never carried out is a different problem from one that was carried out wrongly.

## Borrow the discipline of mature logging

Cloud platforms have been solving this for years, and their documentation is a good model. AWS describes an event in CloudTrail as [the record of an activity in an account](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html), whether the activity was taken by a user or by a service. The principle carries over to business decisions: the record is made at the time of the action, by the system performing it, in a consistent format, and it is separate from the thing being recorded. Records written by the same process that can be edited are weaker than records written somewhere those users cannot change.

Microsoft's [description of its auditing solutions](https://learn.microsoft.com/en-us/purview/audit-solutions-overview) makes a similar point. The unified audit log captures user and admin operations so that security, IT and compliance teams can search them, and its documentation sets out how long audit records are kept by default and what is needed to keep them longer. Retention is a decision, not an accident. If your platform keeps records for a fixed period you did not choose, find out what that period is before an investigation depends on it.

## Match the depth of the trail to the stakes

Not every decision justifies the same effort. A sensible approach groups decisions into three tiers.

- **Low stakes, reversible.** Sorting a ticket into a queue, tagging a lead. Keep the trigger, outcome and logic version. Retain for a few months.
- **Money or service affected.** Credit holds, refunds, price changes, supplier payment runs. Keep all seven elements, and keep them for at least as long as the underlying financial records you are already required to hold.
- **Significant effect on a person.** Declining an application, ending a service, anything that triggers the POPIA concern above. Keep all seven elements, make the reasoning readable by a non-specialist, and record how a person can ask for a review.

Where AI tools are involved, the stakes rise further because the logic is harder to describe. The US National Institute of Standards and Technology frames this under its [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), which is voluntary and aims to help organisations build trustworthiness into how AI systems are designed, used and evaluated. For a small business the practical reading is modest: record which model or tool version produced an output, what it was given, and who accepted the result. The related discovery on [AI-generated decisions that cannot be traced to source data](/discovery/ai-generated-decisions-cannot-be-traced-to-source-data/) describes what happens when that is skipped.

## Decide who can read the trail, and who reads it

A trail nobody reads is a cost with no benefit. Two groups need access for different reasons.

The first is the people who answer questions: the credit controller, the customer service lead, the operations manager. They need to look up a single decision by customer, date or reference and see the seven elements in plain language. If answering takes an IT request and three days, the trail will be used only in a crisis.

The second is whoever checks that the automation behaves as intended over time. This is a sampling job: once a month, pull ten decisions at random, read the reasoning and confirm that a reasonable person would agree with the outcome. It catches drift that no alert will, such as a rule that is technically running but now excludes a whole customer segment. The same ownership question appears in [who watches the automations](/insights/who-watches-the-automations/).

Because trails hold personal information, access to them needs its own limits. Keep the readable summary available to the people who need it and restrict the raw inputs to a smaller group.

## Common failures to check for

When reviewing existing automations, four weaknesses come up repeatedly. The trail records outcomes but not inputs, so a result can never be reproduced. The logic changes without a version, so old decisions cannot be tied to the rule that made them. Retention is shorter than the dispute window, so the record vanishes just before the complaint arrives. And the trail exists but sits in a tool only one developer can open.

A related question, whether an automation ran at all, is answered by different evidence and is covered in [how to know whether an automation actually ran](/insights/how-to-know-whether-an-automation-actually-ran/). The two work together: one proves activity, the other explains reasoning.

## Practical next actions

1. List every automated decision in your business that affects a customer's money, access or service. Most owners find between five and fifteen once they ask each department.
2. For the three highest-stakes decisions, ask the person who built each one to show you the seven elements for a single real case from last month. Note which are missing.
3. Add a version label or date to each rule set or script, and record it with every decision from now on.
4. Find out how long your platforms retain logs by default, and set retention for the high-stakes tier to match your financial record-keeping period.
5. Nominate one person to sample ten decisions a month and write down whether the reasoning still holds.
6. Write one sentence on every customer-facing decision explaining how a person can ask for it to be reviewed by a human.

None of this requires new software. It requires deciding, before the first complaint, that "the system decided" will never be the whole answer.
