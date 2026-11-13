---
hub: insights
record_id: INS-086
slug: crm-actions-that-should-stay-with-a-person
title: What should never be automated inside a CRM?
description: Some CRM actions are irreversible, personal or legally sensitive. This guide explains which to keep under human control and how to automate around them safely.
lead: Some CRM actions are irreversible, personal or legally sensitive. This guide explains which to keep under human control and how to automate around them safely.
category: Automation
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Automation
sources:
  - Section 71 Automated decision making - POPIA | https://popia.co.za/section-71-automated-decision-making/
  - Merge records | https://knowledge.hubspot.com/records/merge-records
  - Delete bulk records - Power Platform | https://learn.microsoft.com/en-us/power-platform/admin/delete-bulk-records
related:
  - What should be automated inside a CRM? | /insights/crm-tasks-worth-automating-first/
  - Which manual tasks should you automate first? | /insights/how-to-rank-manual-tasks-before-you-automate-any-of-them/
  - The difference between necessary human work and avoidable manual work | /insights/the-difference-between-necessary-human-work-and-avoidable-manual-work/
summary: Some CRM actions are irreversible, personal or legally sensitive. This guide explains which to keep under human control and how to automate around them safely.
layout: plain
---
The safest question to ask about any automation is not "can we?" but "what is the worst thing that could happen, and could we undo it?" CRMs make it easy to build rules that act on thousands of records in seconds. That speed is wonderful for sending a reminder and dreadful for deleting a customer.

Some actions should never be fully automated, however tempting the time saving. They fall into a handful of groups: those that cannot be undone, those that decide something important about a person, those that speak for the business in a sensitive moment and those that change the rules the other automations rely on. This article walks through each and then shows the middle path, which is to automate the preparation and keep the decision.

## 1. Anything that cannot be undone

### Merging records

Merging two customer records into one looks like a clean-up job that a rule could do. But merges are rarely harmless. [HubSpot's documentation](https://knowledge.hubspot.com/records/merge-records) states plainly that merged records cannot be unmerged. It explains that the primary record's values are generally kept, that the secondary record is unenrolled from workflows and that the result combines activities and associations from both. You may be able to find the earlier identifiers afterwards, but you cannot simply pull the records apart again.

The risk is greatest where two records look alike but are not the same. Two people named Pillay in the same company, a head office and a branch sharing a switchboard number or a father and son with one email address can all appear to be duplicates. Automatic merging on a loose match will fuse them, and every note, quote and invoice reference will follow. Automatic detection and a flag for human review is fine. Automatic merging is not.

### Permanent deletion

[Microsoft's guidance on bulk deletion](https://learn.microsoft.com/en-us/power-platform/admin/delete-bulk-records) describes a "permanent deletion" option under which records are removed and cannot be recovered, and cautions that it should be used judiciously because data deleted this way is permanently lost. It also notes that, where deleted-record keeping is on, ordinary bulk deletion allows restoring records within a configured time frame. The lesson generalises: a scheduled rule that deletes "inactive contacts" can destroy history that finance, legal or the customer later needs. Deletion should be a reviewed, logged decision, preferably with a recovery window.

### Overwriting data in bulk

Rules that overwrite fields, such as resetting owners, replacing addresses or changing stages for all records matching a filter, are easy to get wrong and hard to reverse when the filter is broader than intended. Take a backup or export before any bulk change, and have a second person check the filter.

## 2. Decisions that significantly affect a person

Customers are people, and some CRM decisions affect them seriously: refusing credit, withdrawing service, blacklisting an account, flagging someone as a fraud risk or setting a price that others do not receive.

South Africa's Protection of Personal Information Act addresses this in [section 71](https://popia.co.za/section-71-automated-decision-making/). Under that section, a person may not be subject to a decision that has legal consequences for them, or substantially affects them, if it is based solely on automated processing intended to profile them, for example on creditworthiness, reliability, conduct or personal preferences. There are exceptions, including decisions taken in connection with concluding or performing a contract where appropriate measures protect the person's interests. Those measures must give the person a chance to make representations, and the business must give enough information about the underlying logic for them to do so.

The practical reading for a CRM owner is that a rule which, on its own, closes an account, blocks an order or declines a request on the basis of a profile of the customer is a rule to examine with great care and with proper advice. The safer design is to let the CRM flag, suggest and prepare while a named person decides and records the reason. See also [designing human approval checkpoints for AI workflows](/insights/designing-human-approval-checkpoints-for-ai-workflows/), which makes the same point for AI-driven actions.

## 3. Messages at sensitive moments

Routine confirmations are good candidates for automation, as the companion article on what to automate in a CRM explains. But some communications carry too much weight to be sent without a person reading them:

- Responses to complaints, especially about safety, billing disputes or discrimination.
- Debt collection or cancellation notices.
- Condolences, apologies or communication after a serious service failure.
- Anything that makes a commitment on price, delivery or liability.
- Messages to key accounts, where the relationship manager should decide tone and timing.

An illustrative case: an automated "your account is overdue" email goes to a long-standing customer whose payment cleared yesterday and whose finance contact is a personal friend of the owner. The error costs far more than the minutes the rule saved. The discovery note on [why paying customers still get overdue invoice reminders](/discovery/why-paying-customers-still-get-overdue-invoice-reminders/) describes how this happens.

## 4. Changes to the automation itself

An automation that edits other automations, permissions or data-matching rules is dangerous because mistakes spread invisibly. Do not let a rule change user permissions, alter another rule's conditions or modify the fields that other processes depend on. Changes to the structure of the CRM should go through a controlled change process with testing and a named approver.

## 5. Judgements that depend on relationships or context

Some tasks look mechanical but are really about knowing the customer. Prioritising which client to call first after an outage, deciding whether to give a discount to keep an account, or choosing how to handle a delicate renewal all depend on context that is not in the system. A CRM can show history and surface options. It should not be the one choosing.

## The middle path: automate the preparation, keep the decision

Saying "never" to automation does not mean doing everything by hand. For each action above, there is usually a way to automate the surrounding work and leave the decision with a person.

| Action | Automate | Keep with a person |
| --- | --- | --- |
| Merging duplicates | Detection, grouping and a side-by-side comparison | The decision to merge and which values win |
| Deleting old records | Listing candidates and estimating the impact | Approval, plus a backup and recovery window |
| Declining or restricting a customer | Gathering the facts and flagging the case | The decision, its reason and the customer's chance to respond |
| Complaint replies | Drafting a response and pulling the history | Reading, editing and sending |
| Changing CRM settings | Logging and validating the change | Approving and releasing it |

## A short test before switching anything on

1. If this fires on the wrong record, can we reverse it within a day?
2. Does it decide something important about a person, rather than just record or remind?
3. Would we be comfortable explaining the rule to the customer it affected?
4. Is a named person accountable for its outcomes?
5. Will we notice quickly if it misbehaves?

If the answer to the first, third, fourth or fifth is no, or the second is yes, redesign it so that a person approves the action. The article on [where AI agents add value and where they add unnecessary risk](/insights/where-ai-agents-add-value-and-where-they-add-unnecessary-risk/) applies the same thinking to AI tools that work inside your systems.

## Boundaries are a feature

Drawing these lines early makes automation easier to adopt, not harder. Staff are more willing to rely on rules that visibly stop short of the dangerous actions, and managers can approve them with more confidence. If a rule is still on the borderline, it is usually better to start with a human-in-the-loop version and relax it later, once the evidence shows it behaves. For help deciding what to build first, read [how to choose the first workflow to automate](/insights/how-to-choose-the-first-workflow-to-automate/).
