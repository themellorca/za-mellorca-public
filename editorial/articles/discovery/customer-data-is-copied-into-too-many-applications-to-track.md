---
hub: discovery
record_id: DISC-340
slug: customer-data-is-copied-into-too-many-applications-to-track
title: Customer data is copied into too many applications to track
description: Each new tool got its own copy of customer data, so nobody knows which is right. Map the copies, pick a system of record per data type and connect the rest to it.
lead: Each new tool got its own copy of customer data, so nobody knows which is right. Map the copies, pick a system of record per data type and connect the rest to it.
category: SaaS & Application Portfolio Management
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: SaaS & Application Portfolio Management
problem_domain: SaaS & Application Portfolio Management
problem_owner: Head of IT or operations, with the data owner
budget_owner: CFO or COO
sources:
  - https://learn.microsoft.com/power-apps/developer/data-platform/virtual-entities/get-started-ve | https://learn.microsoft.com/power-apps/developer/data-platform/virtual-entities/get-started-ve
  - https://powerlaw.africa/2025/04/22/new-popia-regulations/ | https://powerlaw.africa/2025/04/22/new-popia-regulations/
summary: Each new tool got its own copy of customer data, so nobody knows which is right. Map the copies, pick a system of record per data type and connect the rest to it.
layout: plain
---
Picture the operations director of a Gauteng services company who has been asked to cut the application list before the next budget round. She asks the IT team which tools hold customer data, so that she can see what can be switched off. The answer takes two weeks. Customer names, email addresses and phone numbers turn out to sit in the CRM, the billing system, the email marketing tool, the helpdesk, the field-service app and two spreadsheets kept by account managers. Nobody can say which of them is correct.

A customer then asks the company's information officer for a copy of the personal information it holds on him. The team finds him in five places, with two different phone numbers and an address he left two years ago. Pulling the answer together takes weeks, and the director realises that retiring any one of these tools would mean working out what else depends on its copy.

The operating condition is plain: customer data has been copied into many applications without anyone deciding which copy is the master. That matters to the CFO and the COO because it multiplies licence and integration costs, slows every customer data request, and spreads personal information across more places than the business can safely account for.

## The problem in plain language

Every business application that deals with customers needs some customer data: a name, a contact, an account number. When a new tool is bought, the easiest way to get it working is to load the customer list into it. Someone exports from the CRM, imports into the new tool, and the project moves on.

Each of those imports creates a copy. The copy is correct on the day it is made. After that it drifts. A customer changes phone number in the CRM, but the billing system still has the old one. A new contact is added in the helpdesk and never reaches marketing. A spreadsheet is edited by hand and forgotten.

The business ends up with several versions of the same customer, held in tools that are managed by different people and paid for from different budgets. A "system of record" is the one application that is officially the master for a type of data: when two copies disagree, the system of record wins. In most businesses that decision was never made, so no copy has the authority to settle a dispute.

This is related to [customer account structures that miss real relationships](/discovery/why-crm-account-hierarchies-miss-how-customers-are-really-connected/), but it is a different problem. That topic is about how customers are grouped and linked. This one is about the same customer details being stored again and again in separate tools, and what that does to cost, accuracy and privacy.

## What the buyer is actually trying to solve

The head of IT, the head of operations and the information officer ask different questions that lead to the same place. Which of our tools hold customer data, and which can we switch off? Why does the same customer have different details in different systems? How long would it take us to answer a customer who asks what we hold on them? Where does our customer data actually live?

The outcome they want is a short, accurate list: for each type of customer data, which system is the master, which other systems read from it, and which copies can be removed. With that list, a tool can be retired without a month of detective work, and a customer request can be answered from known locations.

## Evidence and system mechanism

### Copying and reading are different designs

There are two ways a second application can use data held in a first. It can take a copy, or it can read the data from the source when it needs it. Microsoft's documentation on [virtual tables in Dataverse](https://learn.microsoft.com/power-apps/developer/data-platform/virtual-entities/get-started-ve) describes the second design: virtual tables represent data that lives in an external system as if it were a table in the platform, without replication of the data. Salesforce and other CRMs offer similar features under different names.

The point is not these particular products. It is that mainstream platforms already offer ways to show customer data from its master without making another stored copy. Copying is a choice, usually made because it was quicker, not because there was no alternative.

Reading from the master is not always the right answer. A tool may need its own copy to work offline, to run fast on large volumes or to keep a history. The better rule is to make each copy a deliberate decision: if a tool holds its own copy, someone has recorded why, which fields it holds, how it is refreshed and when it will be removed.

| Gap | Effect |
| --- | --- |
| No system of record chosen per data type | When copies disagree, nobody can say which is right |
| Copies made by export and import | Each copy starts to drift as soon as it is made |
| Copies not recorded anywhere | Retiring a tool means hunting for what depends on it |
| Copies in spreadsheets and email tools | Personal information sits outside controlled systems |
| No refresh or removal rule for copies | Old customer details survive long after they should |

### What South African law expects of customer data

POPIA turns the sprawl of copies into a legal matter. The [Protection of Personal Information Act, 4 of 2013](https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf) gives people a right of access to the personal information a responsible party holds about them (section 23), and a right to ask for it to be corrected or deleted (section 24). It also requires reasonably practicable steps to keep personal information accurate and updated where necessary (section 16), and it limits how long records may be kept once the purpose for holding them has ended (section 14).

Each of these is harder when customer data lives in many places. An access request has to cover every copy. A correction has to reach every copy, or the old value comes back from the one that was missed. A deletion has to be carried through to every tool that holds the record.

The rules for these requests were tightened recently. A law firm's summary of the [amended POPIA regulations](https://powerlaw.africa/2025/04/22/new-popia-regulations/) published by the Information Regulator on 17 April 2025 says they strengthen the right to request correction or deletion at any time and free of charge, require accessible ways of making such requests, and require the responsible party to tell the data subject in writing what action was taken within 30 days. A business that cannot list where it holds a customer's details will struggle to meet a deadline like that.

## Why this becomes urgent

Application rationalisation is the usual trigger. When finance asks IT to cut the number of tools, each candidate for removal turns out to hold customer data that other tools depend on. The business discovers that it cannot switch anything off with confidence, because nobody knows which copies feed which processes.

The same moment often brings the first serious customer data request, an audit question from the information officer, or a security review. All of them need the same thing: a reliable answer to where customer data lives. Until that answer exists, savings from retiring tools are delayed, and the risk is carried by the information officer.

## Economic consequence

The cost of copies shows up in several budgets at once:

- **Licences.** Tools kept alive because their customer data cannot be safely moved or retired.
- **Integration.** Each copy needs a connection or a manual routine to keep it current, which has to be built, run and fixed. The problem links to [integrations that multiply faster than applications](/discovery/point-to-point-integrations-multiply-faster-than-applications/), since every new copy tends to bring its own feed.
- **Conflicting details.** Staff spend time working out which phone number or address is right, and customers receive mail, invoices or calls at old details.
- **Request handling.** Every customer access, correction or deletion request takes longer because each copy has to be found and handled.
- **Privacy risk.** More copies mean more places where personal information can be lost, leaked or kept too long.

As an illustrative example only, suppose a company has customer details in eight places and a correction request takes an hour per place to find, change and confirm. Each correction then costs a working day, before counting the effort of discovering that a ninth copy exists. Multiply that by the requests received in a year and the cost becomes visible, even though no budget line is labelled "copies".

## Root cause

The root cause is that each new tool was given its own copy of customer data without deciding which system is the master and how the others should read from it. Each decision was reasonable alone: the project had a deadline, and loading a copy was the fastest way to meet it. Together they produced a pattern nobody chose.

A second cause is that no one owns the question. Application owners care about their own tool working. The information officer cares about compliance. IT cares about uptime. Nobody is responsible for the overall picture of where customer data is held, so nobody notices the new copy being made.

When customer details change in the master without the copies being told, reports and processes start to break in ways that are hard to explain, which is the problem described in [master data changes that break reports without warning](/discovery/master-data-changes-break-reports-without-warning/). The copies are the reason these changes spread so unpredictably.

## Practical intervention

### Practical next actions

1. **Map where customer data lives.** List every application that holds customer names, contact details, account numbers or similar data, including spreadsheets, email tools and personal databases. Start with the information officer's own records of processing, if they exist, and the licence list from finance.
2. **For each data type, record the fields and the copy.** Note which fields each application holds, how the data arrived (import, integration, manual entry) and how often it is refreshed.
3. **Choose a system of record per data type.** Contact details, billing details, consent and marketing preferences, and service history can each have a different master, but each should have exactly one. Write the choices down and have the COO or CFO approve them.
4. **Connect the other tools to the master instead of copying.** Where a tool can read from the master through a live connection, use that. Where it must hold its own copy, record the reason, the fields, the refresh rule and the date it will be reviewed.
5. **Route updates through the master.** Change customer details in the system of record only, and let the connected tools pick up the change. Close the side doors, such as spreadsheet edits that never reach the master.
6. **Set up a single process for customer data requests.** Use the map to answer access, correction and deletion requests, and test it with a real or practice request.
7. **Remove copies as tools are retired.** When an application is switched off, confirm what customer data it held, move what is still needed to the master, delete the rest and update the map.

## Diagnostic questions

- Can we list every application and spreadsheet that holds customer contact details, without asking around?
- For each type of customer data, which system is the master, and does everyone agree?
- If a customer changed their phone number today, how many places would need updating, and how would we know?
- How long would it take us to answer a customer who asks what personal information we hold on them?
- Which tools could we retire if we knew their customer data was safely held elsewhere?
- When we last retired a tool, what happened to the customer data it held?

## What good looks like

There is a short map of customer data: each data type, its system of record, the tools that read from it and the few tools that hold a deliberate copy, with a reason and a refresh rule. New tools are connected to the master by default. Anyone proposing to copy customer data has to record why.

You can measure the result. The time to answer a customer data request falls to a known number of working days. The number of applications holding customer contact details falls over time. A phone number changed in the master appears in connected tools without anyone re-keying it. When a tool is retired, the map says exactly what has to move first.

## Where Mellorca fits

If you cannot yet say where customer data lives, a [digital systems audit](/services/digital-systems-audit/) can map the copies across your applications and spreadsheets and show which ones depend on each other. Once the master for each data type is chosen, [systems implementation and integration](/services/systems-implementation-integration/) can connect the other tools to it and remove the copies safely as applications are retired.

## Method note

This article draws on Microsoft's documentation on Dataverse virtual tables, the text of the Protection of Personal Information Act and a law firm's summary of the April 2025 amended regulations. The scenarios, the counts of places and the effort figures are illustrative and not measured. The article does not claim that any product is needed to fix the problem or that it behaves the same way in your environment, so check the documentation for the tools you run. It is general information and not legal advice: confirm your obligations under the Protection of Personal Information Act and its regulations with your information officer or legal adviser.
