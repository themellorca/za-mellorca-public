---
hub: insights
record_id: INS-085
slug: crm-tasks-worth-automating-first
title: What should be automated inside a CRM?
description: The CRM tasks that are repetitive, rule-based and low-risk are the ones to automate first. Here is how to recognise them and set them up safely.
lead: The CRM tasks that are repetitive, rule-based and low-risk are the ones to automate first. Here is how to recognise them and set them up safely.
category: Automation
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Automation
sources:
  - Create workflows | https://knowledge.hubspot.com/workflows/create-workflows
  - Set up duplicate detection rules to keep your data clean - Power Platform | https://learn.microsoft.com/en-us/power-platform/admin/set-up-duplicate-detection-rules-keep-data-clean
  - Section 69 Direct marketing by means of unsolicited electronic communications - POPIA | https://popia.co.za/section-69-direct-marketing-by-means-of-unsolicited-electronic-communications/
related:
  - What should never be automated inside a CRM? | /insights/crm-actions-that-should-stay-with-a-person/
  - Which manual tasks should you automate first? | /insights/how-to-rank-manual-tasks-before-you-automate-any-of-them/
  - What business automation should actually solve | /insights/what-business-automation-should-actually-solve/
summary: The CRM tasks that are repetitive, rule-based and low-risk are the ones to automate first. Here is how to recognise them and set them up safely.
layout: plain
---
Most CRMs arrive with an automation engine and an invitation to use it. Within a few months, an enthusiastic administrator has built a dozen rules, nobody remembers what half of them do and a customer has received the same reminder three times. Automation inside a CRM is powerful precisely because it acts quietly and at scale, and that is also why it needs to be chosen with care.

The question is not whether to automate, but where to start. A useful rule of thumb is that good candidates are tasks that are frequent, follow clear rules, rarely need judgement and cause little harm if they go slightly wrong. This article lists the ones that usually meet that test, the conditions that make them safe and a simple method for adding them one at a time. Its companion piece on what should never be automated inside a CRM covers the other side of the line.

## A four-part test for any candidate

Before building anything, ask four questions about the task.

1. **Does it happen often enough to matter?** A task done twice a month rarely repays the effort of building, testing and maintaining a rule.
2. **Can you state the rule in a sentence?** "When a new enquiry arrives from the website, assign it to the next available salesperson and create a follow-up task for tomorrow" is a rule. "Contact the leads who seem most promising" is not.
3. **What happens if it fires wrongly?** A mislabelled lead is an irritation. A wrongly cancelled contract is a crisis. Automate where the worst outcome is easy to reverse.
4. **Is the underlying process sound?** Automation speeds up what exists. If the stages and hand-offs are muddled, it multiplies the muddle. See [why automating a broken process makes the problem worse](/insights/why-automating-a-broken-process-makes-the-problem-worse/).

## Eight CRM tasks that usually pass the test

### 1. Capturing and routing new enquiries

When a web form, email or phone enquiry arrives, the CRM can create the record, assign an owner by region, product or round-robin and notify that person. The cost of getting this wrong is low, and the cost of not doing it is high, because slow responses lose business. The impact page on [unassigned sales enquiries and leads going cold](/impact/unassigned-sales-enquiries-leads-going-cold/) describes what happens when this is left to chance.

### 2. Creating follow-up tasks

After a meeting is logged or a quote is sent, the CRM can create a reminder for a set number of days later. This replaces memory with a prompt, but leaves the action to a person.

### 3. Flagging duplicates on entry

Microsoft's documentation explains that its customer engagement apps include default [duplicate detection rules](https://learn.microsoft.com/en-us/power-platform/admin/set-up-duplicate-detection-rules-keep-data-clean) for accounts and contacts, but not for other record types, and that you need to create further rules yourself if you want them. It also recommends basing rules on a field that has unique values, such as email. The point for any platform is that detection and warning at the moment of entry is a very good use of automation. Merging is a different matter, discussed in the companion article. See also [how duplicate customer records are created](/insights/how-duplicate-customer-records-are-created/).

### 4. Standardising data formats

Changing phone numbers to a consistent format, capitalising names, trimming spaces from email addresses and filling the province from a postal code are mechanical corrections that remove noise without altering meaning.

### 5. Updating status fields from clear events

When a signed contract is attached, the stage moves to "Won". When an invoice is marked paid in the accounting system, the CRM shows "Paid". These changes should be driven by an event in a reliable source, not by a guess. [Deciding which system owns which data](/insights/how-to-decide-which-system-owns-which-data/) comes first.

### 6. Reminding about stale work

A rule that notifies an owner when a deal has had no activity for thirty days, or a ticket has been open past its target, keeps work visible. The rule should nudge a human to look rather than silently close anything. Our discovery note on [why dead deals stay open in the CRM and distort the sales forecast](/discovery/why-dead-deals-stay-open-in-the-crm-and-distort-the-sales-forecast/) shows what the reminder prevents.

### 7. Sending routine, expected messages

Acknowledgements ("we have received your enquiry"), appointment confirmations and delivery notices are expected by the customer and carry little risk, provided the content is accurate and the timing is right.

### 8. Producing routine internal summaries

A weekly email listing new customers, renewals due and overdue follow-ups saves the manager from assembling it by hand. It is read-only, so errors are visible and harmless.

## Where marketing messages need extra care

Automated email and SMS campaigns are among the most popular CRM automations, and also the ones with legal implications. Section 69 of South Africa's Protection of Personal Information Act prohibits electronic [direct marketing](https://popia.co.za/section-69-direct-marketing-by-means-of-unsolicited-electronic-communications/) unless the person has consented, with a limited route for existing customers. That route applies only where you obtained their details in the course of selling them a product or service, you are marketing your own similar products or services and they were offered a simple, free way to object when the details were collected and with each message. Every direct marketing message must identify the sender and give an address or other contact details for asking the messages to stop.

In practical terms, automation should check a consent or permission field before sending, include a working opt-out in every message and stop sending the moment someone objects. A rule that sends a promotion to every contact in the system is a rule that will eventually break the law. Confirm the details of your own situation with a qualified adviser.

## How to introduce automation without losing control

HubSpot's documentation for building workflows is a useful illustration of the discipline involved, even if you use another product. A workflow is built from enrolment triggers, which decide which records enter, and actions, which decide what happens to them. Re-enrolment is off by default, so a record normally passes through once unless you deliberately allow it to return. Existing records are included only if you choose to enrol them when the workflow is switched on. The review step shows an estimated count and the choices made, and the history afterwards shows what happened. The documentation also notes that undo covers only a limited period and that some changes cannot be reversed.

Those details suggest a routine that works on any platform:

- **Write the rule on paper first.** Trigger, conditions, action, exceptions and owner.
- **Check the number of records that will be affected before switching on.** If the count surprises you, the rule is wrong.
- **Start with new records only.** Apply it to existing data later, in a controlled batch.
- **Decide how often a record may re-enter.** Many duplicate-message complaints come from rules that re-trigger.
- **Review the history in the first week.** Look at ten actual outcomes, not only the counts.
- **Give every automation a name, a description and an owner.** An undocumented rule is a future incident. The article [why every automation needs a failure path](/insights/why-every-automation-needs-a-failure-path/) covers what should happen when it misfires.

## An illustrative sequence

Consider a Durban wholesaler with six salespeople and about two thousand customers. It might begin with automatic routing of website enquiries and a next-day follow-up task. Once those are running smoothly, it adds duplicate warnings on entry and format clean-up for phone numbers. Months later, it adds a thirty-day reminder for quiet deals and an automatic confirmation email for quote requests. Each step is small, each is reviewed after a week and each is documented. After a year the team has saved many hours without a single customer-facing surprise. The path is dull, and that is the point.

## The principle behind the list

Everything on the list above removes clerical effort or prompts a person. None of it makes a decision that materially affects a customer. If a candidate task seems to require judgement, relationship knowledge or accountability, it belongs on the other side of the line. For help choosing which of your manual tasks to tackle first, see [how to choose the first workflow to automate](/insights/how-to-choose-the-first-workflow-to-automate/).
