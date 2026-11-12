---
hub: patterns
record_id: PAT-088
slug: why-customer-self-service-fails-when-the-answer-lives-in-five-places
title: When Self-Service Is Impossible Because Information Is Fragmented
description: A business can build a portal in a week and still not offer self-service, because the facts a customer needs sit in separate tools. Here is how to tell, and what to fix first.
lead: A business can build a portal in a week and still not offer self-service, because the facts a customer needs sit in separate tools. Here is how to tell, and what to fix first.
category: Customer Experience & Service
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Customer Experience & Service
pattern_family: Customer Experience & Service
observable_condition: A self-service page, portal or chatbot is planned or launched, but customers still phone or email because staff are the only people able to gather the answer from several tools.
primary_identification: Fragmented information: the facts behind a customer's common questions are spread across separate systems, spreadsheets and inboxes, so nothing can present one answer without a person assembling it.
commercial_value_dimensions: Staff time, support volume, response time, customer experience and capacity to grow without adding admin headcount
sources:
  - What is Power Pages? | https://learn.microsoft.com/en-us/power-pages/introduction
  - Introduction to SharePoint and OneDrive in Microsoft 365 for administrators - SharePoint in Microsoft 365 | https://learn.microsoft.com/en-us/sharepoint/introduction
  - Overview of cloud flows - Power Automate | https://learn.microsoft.com/en-us/power-automate/overview-cloud
related:
  - Why One Customer Question Has to Travel Through Three Departments | /patterns/why-a-single-customer-question-gets-passed-between-three-departments/
  - When Infrastructure Problems First Appear as Customer Complaints | /patterns/when-infrastructure-faults-are-first-reported-by-customers-not-by-monitoring/
  - Why Do Customers Have to Ask You What Is Happening? | /patterns/why-customers-have-to-ask-what-is-happening/
summary: A business can build a portal in a week and still not offer self-service, because the facts a customer needs sit in separate tools. Here is how to tell, and what to fix first.
layout: plain
---
## Observable condition

The owner of a Cape Town building-supplies wholesaler decides customers should be able to look up their own orders. A web developer builds a tidy portal with a login, an orders page and a place to download invoices. It looks finished. Three weeks later the sales desk is still taking the same calls: where is my delivery, what do I owe, and can I get last month's statement?

The portal is not broken. It simply has nothing reliable to show. Order status lives in the dispatch spreadsheet, invoices in the accounting package, credit terms in the owner's notes and the customer's contact details in three different inboxes. The portal can display only what is stored in one place, and for most questions no such place exists.

An illustrative example, but a common one: the visible failure is low take-up of the self-service option. The real condition is that the answer to a routine question has to be assembled by a person every time.

## Realisation

The realisation is that self-service is not a feature you add to the front of a business. It is what remains possible once the information behind it is reachable, current and agreed. Tools for building customer portals exist and are well documented. [Microsoft's introduction to Power Pages](https://learn.microsoft.com/en-us/power-pages/introduction) describes websites that let external users sign in and work with business data. The phrase that matters is business data: the site shows what the underlying data holds, and no more.

So the question to ask is not which portal to buy. It is whether a customer's most common question has one place from which it can be answered without a human reading three screens first.

**Realisation prompt:** pick the question your team answers most often. List every place a staff member looks before replying. If the list has more than one item, self-service for that question is not yet possible, whatever the front end looks like.

## Identification

This is a pattern of fragmented information. The symptom is a self-service option that is ignored or abandoned. The common assumption is that customers prefer to speak to a person, or that the portal needs a better design. The structural cause is that the facts are split, and a portal built on split facts either shows incomplete answers or shows nothing.

It sits close to the situation in [why customer service becomes a human search engine](/patterns/why-customer-service-becomes-a-human-search-engine/), which describes staff doing the searching. This article looks at the step before: why that searching cannot simply be handed to the customer.

## Diagnosis

- **The answer is built, not stored.** A delivery date is worked out from the order, the stock position and the driver's schedule. Nobody has written it down in one place, so there is nothing for a customer to open.
- **Each tool has its own version of the customer.** The same account appears under slightly different names and numbers. A login cannot reliably connect a person to the right history. See [when nobody knows which system holds the correct data](/patterns/when-nobody-knows-which-system-holds-the-correct-data/).
- **Updates arrive late or by hand.** The dispatch sheet is updated at four in the afternoon. A customer checking at ten would see yesterday's position, and staff know it, so they prefer to be asked.
- **Some answers depend on judgement.** Credit limits, special prices and exceptions live in someone's head. These cannot be published until they are written down and agreed.
- **Documents are scattered.** Statements, certificates and delivery notes are saved in personal folders. [SharePoint](https://learn.microsoft.com/en-us/sharepoint/introduction), for example, is built to give a team a shared, permissioned place for documents and lists, but only if the files are actually kept there.

## Commercial impact

The cost shows up as steady interruption rather than a single large loss. Every repeated question takes a few minutes of a person who could be selling, planning or collecting payment. The calls also arrive when the customer is most impatient, which shapes how the business is judged.

There is a second cost, less visible. A portal that disappoints teaches customers not to use it. Winning them back later is harder than getting it right the first time, because the habit of phoning has been reinforced. Meanwhile the business pays for the portal, the developer and the licences while the phone traffic stays the same.

Finally, growth gets tied to headcount. If every additional customer produces a proportional number of status calls, the business must hire to keep pace. The related cost is explored in [when customers call for records your systems already hold](/patterns/when-customers-call-for-records-your-systems-already-hold/).

## Common misidentification

The pattern is usually mistaken for one of three things. The first is a design problem: the portal is blamed for being confusing, and money goes into redesign. The second is a training problem: staff are told to point customers to the portal, which only works if the portal has the answer. The third is a customer-behaviour problem: the conclusion that your customers just do not like self-service.

In each case the real issue is upstream. Until the facts are in one reachable place, no amount of polish at the front changes the outcome.

## Possibility

The encouraging point is that you do not need to unify everything. Self-service needs a small set of answers, each of which is reliable. Most businesses find that five or six questions account for the bulk of routine contact: order status, outstanding balance, delivery date, a copy of an invoice or statement, and how to log a problem.

For each of those, the work is to decide where the master fact will live, who updates it and how quickly. That is a modest amount of work compared with replacing systems.

Where updates currently depend on a person copying information between tools, a simple automated flow can do the copying. [Microsoft's overview of cloud flows](https://learn.microsoft.com/en-us/power-automate/overview-cloud) describes automated flows that run when something changes, such as a new row in a list. This is one option to evaluate against your own tools and volumes, not a requirement.

## Intervention

Work in the order the customer experiences it. First settle the facts, then the path to them, and only then the front end. A sensible first target is a single question, answered end to end, before anything is announced to customers.

The aim is to be able to say, for one question, that the answer exists in one place, is updated by a named person or a defined rule, and can be shown to the right customer and nobody else. The last part matters under South African privacy law: customers should see their own information only. If you are unsure about the obligations that apply, the guidance published by the Information Regulator is the right place to start.

## Practical next actions

1. **Count the calls.** For two weeks, tally why customers phone or email. Group the reasons and pick the top three.
2. **Trace one answer.** For the most common question, write down every place a staff member looks and how long each lookup takes.
3. **Choose the master source.** Decide where the fact will live, name the person or rule that keeps it current and retire the shadow copies.
4. **Fix the customer identity.** Make sure each customer has one account number used consistently across quotes, orders and invoices, so a login can find the right history.
5. **Pilot with ten customers.** Offer the one answer to a small group, watch whether calls on that topic fall, and fix gaps before widening.
6. **Write down the exceptions.** Capture the credit and pricing rules that sit in people's heads so they can be published or deliberately kept private.

## Diagnostic questions

- For our most common customer question, how many places does a person check before replying?
- If we gave a customer a login today, which answers could they actually see?
- Who is responsible for the master fact behind each of those answers?
- How old is the information when a customer looks at it?
- Does each customer have one identity across our quotes, orders and invoices?

## Bottom line

Self-service is a result, not a feature. It becomes possible when a few important answers live in one place, are kept current by a clear owner and can be shown safely to the right person. Start with one question and make it work end to end. The portal then becomes a thin layer over reliable facts, and the phone calls begin to drop for the right reason.
