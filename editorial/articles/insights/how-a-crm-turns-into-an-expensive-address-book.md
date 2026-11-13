---
hub: insights
record_id: INS-077
slug: how-a-crm-turns-into-an-expensive-address-book
title: How a CRM turns into an expensive address book
description: CRMs rarely fail on go-live day. They fade as work moves to email and spreadsheets until only phone numbers are used. How to test for it and reverse it.
lead: Few CRMs fail on go-live day. They decline gradually, as activity moves to email and WhatsApp, deals move to spreadsheets and records go stale, until the system is used only to look up phone numbers. How the decline happens, how to test for it and how to reverse it.
category: Systems & Integration
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Systems & Integration
sources:
  - What Is CRM (Customer Relationship Management)? | https://www.salesforce.com/crm/what-is-crm/
  - Set up duplicate detection rules to keep your data clean - Power Platform | https://learn.microsoft.com/en-us/power-platform/admin/set-up-duplicate-detection-rules-keep-data-clean
  - Section 16 Quality of information - POPIA | https://popia.co.za/section-16-quality-of-information/
related:
  - When copy-and-paste is really an integration problem | /insights/when-copy-and-paste-is-really-an-integration-problem/
  - How to decide what should be the system of record | /insights/how-to-decide-what-should-be-the-system-of-record/
  - How to decide which system owns which data | /insights/how-to-decide-which-system-owns-which-data/
summary: Few CRMs fail on go-live day. They decline gradually, as activity moves to email and WhatsApp, deals move to spreadsheets and records go stale, until the system is used only to look up phone numbers. How the decline happens, how to test for it and how to reverse it.
layout: plain
---
Ask a business what its CRM is for and the answer usually describes an ambition: a complete view of every customer, a pipeline management can forecast from, a shared record that lets sales, service and finance work from the same facts. Salesforce's own explanation of [what a CRM is](https://www.salesforce.com/crm/what-is-crm/) describes much the same thing: contact information, sales opportunities, service issues and previous interactions held in one place and shared between teams.

Then ask how the CRM is actually used today. In many small and mid-sized businesses the honest answer is that people look up phone numbers in it. The pipeline is in a spreadsheet. Conversations are in email and WhatsApp. Order history is in the accounting system. The CRM still costs a licence per user every month, but it has become an expensive address book.

This rarely happens through one bad decision. It happens through a sequence of small, reasonable ones.

## The decline, stage by stage

### Stage one: go-live with contacts, not process

The implementation imports the customer list and sets up user accounts. Pipeline stages are left at the vendor's defaults or loosely defined, with no agreement on what has to be true before a deal moves forward. The CRM holds who the customers are, but not how the business sells to them.

### Stage two: activity stays where it was

Sales conversations continue in personal inboxes and messaging apps because that is faster than logging them. The CRM shows a contact, but not what was promised to them last week. Anyone covering for a colleague has to ask rather than look.

### Stage three: the spreadsheet returns

Because the CRM pipeline is incomplete, the sales manager builds a spreadsheet for the weekly meeting. It quickly becomes the version that matters. Updating the CRM now feels like duplicate work, so fewer people bother.

### Stage four: records go stale and multiply

Contacts change jobs, companies change names, and new records are created rather than old ones updated. Duplicate detection helps only if it is configured. Microsoft's documentation for Dynamics 365, for example, notes that default [duplicate detection rules](https://learn.microsoft.com/en-us/power-platform/admin/set-up-duplicate-detection-rules-keep-data-clean) cover accounts and contacts but not other record types, and recommends basing rules on a field with unique values such as email. In many CRMs, nobody has looked at those settings since go-live.

### Stage five: the CRM is cut off from finance

Without a connection to the accounting system, the CRM cannot show what a customer has bought, what they owe or whether they are on hold. Salespeople learn to check the accounting package instead. The CRM's picture of the customer is now visibly incomplete. The consequences are explored in [when your CRM knows something your finance system does not](/patterns/when-your-crm-knows-something-your-finance-system-does-not/).

### Stage six: nobody trusts the reports

Management stops using CRM dashboards because the numbers do not match the spreadsheet. With no one relying on the data, there is no pressure to keep it accurate, and the decline becomes self-reinforcing.

By the end of this sequence, the CRM's only reliable function is contact lookup, and even that is undermined by duplicates and outdated records.

## Why it matters more than the licence fee

The wasted subscription is the visible cost. The larger costs sit elsewhere.

- **Customer knowledge leaves with people.** When a salesperson resigns, their conversations, commitments and relationships leave in their inbox and phone.
- **Leads go unworked.** Without a reliable pipeline, enquiries can sit untouched, as described in [when a lead enters the CRM but nobody acts](/patterns/when-a-lead-enters-the-crm-but-nobody-acts/).
- **Forecasting becomes guesswork.** Revenue planning relies on one person's spreadsheet and judgement.
- **Personal information goes stale.** POPIA [section 16](https://popia.co.za/section-16-quality-of-information/) requires reasonably practicable steps to keep personal information complete, accurate and up to date. A CRM full of outdated and duplicated contacts makes that harder to show.

## A ten-question test

The fastest way to judge whether a CRM has become an address book is to ask what it can answer without anyone opening a spreadsheet or asking a colleague. For a sample of five active customers, check whether the CRM can tell you:

1. Who the current decision-maker is.
2. When the business last spoke to them, and about what.
3. What was promised in that conversation.
4. Which open opportunities exist, at what stage and value.
5. What must happen for each opportunity to move to the next stage.
6. What the customer has bought in the last year.
7. Whether they have an overdue account or open service issue.
8. Who in your business owns the relationship.
9. Whether there is more than one record for the same company or person.
10. Whether the pipeline total in the CRM matches the figure management uses.

If the CRM answers fewer than half of these reliably, it is functioning as a contact list. The useful next question is which stage of the decline it reached first.

## An illustrative example

Consider a hypothetical Pretoria industrial supplies business with eight sales representatives. The CRM was implemented four years ago. Today the representatives use it to find phone numbers, the sales manager runs the pipeline from a shared spreadsheet, and customer account status is checked in the accounting system by phoning the credit controller.

Applying the test shows that the CRM can answer two of the ten questions. Tracing back, the decline began at stage one: pipeline stages were never defined in terms the team agreed with, so the spreadsheet appeared within months. Recovery starts there, not with a new CRM. This scenario is illustrative, not a client case study.

## How to reverse it

Replacing the CRM is rarely the answer. A new system implemented the same way will follow the same path. Recovery works best in stages that mirror the decline.

1. **Define what the CRM must know.** Agree the handful of questions the business needs it to answer, using the test above as a starting point.
2. **Redefine the pipeline.** Fewer stages, each with clear entry criteria the team recognises from real deals.
3. **Retire the spreadsheet.** Run the sales meeting from the CRM. While a parallel spreadsheet exists, it will win.
4. **Capture activity with less effort.** Use email and calendar integration so conversations are logged without retyping.
5. **Clean and protect the data.** Merge duplicates, archive dead records and configure duplicate rules on reliable fields.
6. **Connect it to finance.** Bring account status and order history into the CRM so it becomes the place to look first.

Each step makes the CRM slightly more useful than the alternative, which is what drives adoption. Mandatory fields and management pressure alone do not, a point developed in [why CRM adoption problems are often workflow problems](/insights/why-crm-adoption-problems-are-often-workflow-problems/).

## When to act

The time to act is when the sales meeting runs from a spreadsheet, when customer history is found by asking people, or when the business is about to renew a CRM contract it barely uses. Each of those is a signal that the system's operational role has been lost. Where the recovery involves connecting the CRM to accounting and other systems, Mellorca's [systems implementation and integration](/services/systems-implementation-integration/) work can rebuild it around how the business actually sells.
