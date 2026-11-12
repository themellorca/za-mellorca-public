---
hub: discovery
record_id: DISC-365
slug: why-data-retention-rules-differ-from-one-system-to-the-next
title: Data-retention rules are not enforced consistently across systems
description: A retention policy on paper means little if email, file shares, the CRM and the accounting system each keep or delete data on their own terms. How to find the gaps and close them.
lead: A retention policy on paper means little if email, file shares, the CRM and the accounting system each keep or delete data on their own terms. How to find the gaps and close them.
category: Security & Compliance Operations
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Security & Compliance Operations
problem_domain: Security & Compliance Operations
problem_owner: IT manager or compliance and risk lead responsible for evidencing data handling
budget_owner: Financial director or managing director
sources:
  - Protection of Personal Information Act 4 of 2013 - South African Government | https://www.gov.za/documents/protection-personal-information-act
  - Learn about retention policies & labels to retain or delete | https://learn.microsoft.com/en-us/purview/retention
  - Learn about retention for SharePoint and OneDrive | https://learn.microsoft.com/en-us/purview/retention-policies-sharepoint
related:
  - When every system owner reads the same compliance rule differently | /discovery/when-every-system-owner-reads-compliance-rules-differently/
  - Security controls are duplicated across teams | /discovery/why-the-same-security-control-gets-built-and-evidenced-by-several-teams/
  - Access logs that disappear before the auditor asks for them | /discovery/access-logs-that-disappear-before-the-auditor-asks/
summary: A retention policy on paper means little if email, file shares, the CRM and the accounting system each keep or delete data on their own terms. How to find the gaps and close them.
layout: plain
---
A broker sends the cyber-insurance renewal form. One question asks how long customer and employee data is kept, and how deletion is enforced. The managing director forwards it to IT, who point to a retention schedule approved two years ago. When the schedule is checked against reality, the email system deletes nothing, the file server keeps every version since 2016, the CRM holds contacts nobody has touched in a decade, and the accounting system correctly keeps seven years of records. The policy exists. The enforcement does not.

This article is about that gap: why retention rules end up applied unevenly across systems, what that costs, and how to bring the systems into line without a large project.

## The problem in plain language

A retention rule says how long a type of record must be kept and when it should be removed. Enforcing it consistently means the same rule produces the same result wherever the record lives. In most growing businesses, each system has its own defaults. Some keep everything forever because nobody turned deletion on. Others delete automatically after a period nobody chose. A few are managed by a person who remembers to clean up twice a year.

The result is not one retention policy but six or seven informal ones, and nobody can say which applies to a given customer record without checking each system.

## What the buyer is actually trying to solve

People searching for this problem usually have a deadline. It might be an insurance renewal questionnaire, a customer's security review, an information request, or a privacy complaint. They need a straight answer to two questions: what do we keep, and how do we know it is removed when it should be? Behind that sits a wish to stop carrying data that adds risk and cost but no value, without deleting something the law requires them to keep.

## Evidence and system mechanism

### South African law ties retention to purpose

The [Protection of Personal Information Act](https://www.gov.za/documents/protection-personal-information-act) sets out conditions for lawful processing of personal information, and its provisions on retention generally expect records of personal information not to be kept longer than needed for the purpose they were collected for, subject to exceptions such as other legal requirements. The practical consequence is that a business needs to know why it holds each category of record, and for how long. That is a design question, not a clean-up exercise, because the answer must be applied in every system that holds the data. Read the Act, or take advice, on the exact wording and exceptions that apply to you.

### Platforms can enforce rules, but only where they are switched on

Microsoft's explanation of [retention policies and retention labels](https://learn.microsoft.com/en-us/purview/retention) describes two actions: retain content so it cannot be permanently deleted, and delete content after a set period. It also describes combining them, so content is kept for a defined time and then removed. These settings apply to content where it already sits, which means the rule only works for the locations the policy covers. A mailbox, a library or a team chat outside the policy keeps whatever defaults it had before.

Guidance on [retention policies for SharePoint and OneDrive](https://learn.microsoft.com/en-us/purview/retention-policies-sharepoint) shows the same scoping: new sites and personal storage must be brought under a policy deliberately.

## Problem owner and why-now trigger

The person who feels the problem first is usually the IT manager or the head of compliance, risk or legal, who is asked to evidence enforcement. The budget owner is the financial director or managing director, who signs the insurance renewal and carries the consequences of a poor answer. The trigger in this case is the cyber-insurance renewal, since the form asks for a description that can be defended rather than a policy document that cannot. Weak retention also makes the issues described in [IT asset registers that miss cloud and SaaS services](/discovery/why-it-asset-registers-miss-cloud-and-saas-services/) worse, because a system nobody has listed is a system nobody has applied a rule to.

## Economic consequence

There are four costs. The first is exposure: the more old personal information a business holds, the more there is to lose in a breach, and the more there is to notify and explain. The second is storage and licence cost, since keeping everything forever is not free, especially in cloud services priced by volume.

The third is the cost of searching. When a legal request or a data-subject request arrives, staff must search every system for the same person, and the work grows with each place that holds a copy. The fourth is the cost of a weak answer at renewal: a vague response may lead to follow-up questions, a delay, or conditions the business would rather not accept. The point here is cost of time and uncertainty rather than any figure, because the amounts depend on the insurer and the business.

## Root cause

- **The schedule is written once and not translated.** A document lists record types and periods but nobody maps those to systems and settings.
- **Each system has a different owner.** Finance owns the ledger, sales owns the CRM, IT owns email. Nobody owns the rule across them.
- **Defaults win.** Where no one sets a rule, the product default applies, and for many tools that default is to keep everything.
- **Copies multiply.** Exports, spreadsheets, backups and email attachments hold the same data outside the system the rule was applied to.
- **Deletion feels risky.** Nobody wants to be the person who removed something that was needed, so nothing is removed.

## Practical intervention

Start with a short list of the record categories that matter most: customer and prospect personal information, employee records, financial records, contracts and email. For each, write down the reason for keeping it, the period, and the point from which the period runs, such as the end of the customer relationship or the end of the financial year.

Next, create a simple map with one row for each place that category lives. The row should show the system, the owner, the current behaviour (keeps forever, deletes after a period, manual) and the gap against the rule. Most businesses find five to ten gaps in the first pass, and two or three account for most of the risk.

Then close the gaps in order of exposure. Where a platform supports automatic retention and deletion, use it, and record the setting. Where it does not, create a scheduled task with a named person and a date, and keep a note each time it is done. Finally, add the retention check to the routine that already exists for new systems, so a new tool is not live until its rule is set.

### An illustrative example

Illustrative: a Durban logistics company with 140 staff was asked at insurance renewal how it removed customer contact data. The IT manager listed seven places: email, the file server, the CRM, the accounting system, the fleet system, the HR system and the backup. Only two had any deletion setting. He proposed a seven-year rule for financial records, two years after last contact for prospects, and a review of email. Within a quarter the CRM and the file server were on automatic rules, and the others had a named owner and a half-yearly task. The renewal answer was a one-page table.

## Practical next actions

1. List the five record categories that carry the most personal or financial information, with the reason and period for keeping each.
2. Draw up a table of every system and storage location that holds each category, with its owner and its current deletion behaviour.
3. Pick the two largest gaps and switch on an automatic rule, or assign a named owner and a dated task where automation is not possible.
4. Check how backups, exports and shared spreadsheets are handled, and decide how long each is kept.
5. Add a retention-rule check to the checklist for introducing any new system, and diarise a yearly review.

## Where Mellorca fits

Mellorca helps businesses turn a policy into something their systems actually do. That normally means mapping where records live, agreeing the rules with the people who own each system, configuring what the platforms support, and putting a light routine in place for the rest. The work links closely to [reliable system records of policy acknowledgements](/discovery/why-policy-acknowledgements-need-a-reliable-system-record/) and to [deciding what should be the system of record](/insights/how-to-decide-what-should-be-the-system-of-record/), since a rule is easiest to enforce where one system is clearly in charge. A related risk is described in [former employees retaining system access](/impact/former-employees-retaining-system-access/).

## Method note

The sources describe South African data-protection law and the retention features of one widely used platform. They do not measure how many businesses enforce retention unevenly, and nothing here is a statement about what any insurer requires. The scenario and the example are illustrative rather than client cases, and this article is not legal advice.
