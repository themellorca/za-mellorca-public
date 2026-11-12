---
hub: discovery
record_id: DISC-206
slug: why-crm-account-hierarchies-miss-how-customers-are-really-connected
title: Account hierarchies do not reflect real customer relationships
description: Head offices, branches, subsidiaries and buying groups all appear as unrelated accounts in the CRM. How to model real customer relationships before a system change copies the mess into a new platform.
lead: Head offices, branches, subsidiaries and buying groups all appear as unrelated accounts in the CRM. How to model real customer relationships before a system change copies the mess into a new platform.
category: Sales Operations & CRM
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Sales Operations & CRM
problem_domain: Sales Operations & CRM
problem_owner: CRM owner or sales operations lead, with account managers owning the accuracy of each customer's relationships
budget_owner: Sales director or managing director, with the financial director consulted on credit exposure
sources:
  - Associate records | https://knowledge.hubspot.com/records/associate-records
  - Deduplicate records in HubSpot | https://knowledge.hubspot.com/records/deduplication-of-records
  - Credit and collections overview - Finance - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/finance/accounts-receivable/cm-credit-and-collections-overview
related:
  - Nobody keeps customer contact roles current after the deal | /discovery/nobody-keeps-customer-contact-roles-current-after-the-deal/
  - Salespeople update the CRM only before forecast meetings | /discovery/why-crm-updates-happen-only-before-forecast-meetings/
  - Sales cannot see a customer's credit or service problems | /discovery/sales-cannot-see-a-customer-s-credit-or-service-problems/
summary: Head offices, branches, subsidiaries and buying groups all appear as unrelated accounts in the CRM. How to model real customer relationships before a system change copies the mess into a new platform.
layout: plain
---
A national retail group has a head office in Johannesburg, a buying office in Cape Town, and forty-two stores. In the CRM, it appears as sixty-one accounts. Three are spellings of the head office. The stores are entered under their trading names with no link to a parent. Two different sales reps each believe they own the relationship, and neither can say what the group buys in total. Meanwhile the credit controller, working in the accounting system, sees yet another structure: seven debtor accounts and one credit limit.

When the sales director asks for "everything we sold to this group last year", the answer takes a week and three spreadsheets. This article looks at why account hierarchies in CRMs so often fail to reflect how customers are really connected, and what to do about it, especially when a CRM replacement is on the horizon.

## The problem in plain language

Real customers are organised in layers. A company has branches and departments. A group has subsidiaries. A franchise has independent owners who buy through a central agreement. A school belongs to a district or a trust. A project has an owner, a contractor and a payer who are three different companies. These relationships decide who signs, who pays, who influences, and how much the customer is worth in total.

A CRM can represent these relationships, but only if someone sets them up and keeps them current. In practice, accounts are created one at a time by whoever meets the customer. Each is entered as a standalone record, because that is the quickest way to log a deal. The hierarchy that exists in the real world never makes it into the system.

## What the buyer is actually trying to solve

The person searching for this problem wants to see a customer as a whole. A sales director wants to know the group's total spend and who is already talking to it. A credit controller wants to know the combined exposure. A service manager wants to know whether a branch's problem is also the head office's problem. When a migration is planned, the question sharpens: should this structure be copied into the new system as it is, or fixed first?

## Evidence and system mechanism

### Relationships are objects in their own right

HubSpot's documentation on [associating records](https://knowledge.hubspot.com/records/associate-records) explains that CRM objects represent different parts of a data model and that associations keep track of relationships within and between objects. It notes that records of the same object type can be associated, and gives the example of contacts being labelled as one another's manager or a contact being linked to more than one company with different roles. The mechanics differ by product, but the principle is general: the relationship is something somebody has to create, label and maintain, not something the system infers.

### Automatic matching is narrow

The same vendor's explanation of [record deduplication](https://knowledge.hubspot.com/records/deduplication-of-records) says that contacts are automatically deduplicated by email address and companies by domain name. That works well for obvious duplicates, but it says nothing about whether two companies with different domains are branches of the same group, or whether one with a shared domain is really a separate legal entity. Matching rules can remove copies. They cannot discover how a business is actually structured.

### Finance already models linked customers

Microsoft's overview of [credit and collections](https://learn.microsoft.com/en-us/dynamics365/finance/accounts-receivable/cm-credit-and-collections-overview) describes customer credit groups that link customers together so that they share a single credit limit. It is a reminder that finance systems often carry a grouping that the sales system does not. If the two structures are not aligned, a sales rep may close a deal with a branch that finance already treats as part of an over-limit group. That is the situation behind [credit checks that happen after sales has promised delivery](/discovery/why-credit-checks-happen-after-sales-has-promised-delivery/).

### Warning signs

- The same customer appears under several names, and nobody is sure which is the master.
- Reps are surprised to learn that a colleague is already selling into another part of the same group.
- Reports of revenue by customer disagree with finance because groups are counted differently.
- The team plans to migrate to a new CRM and intends to "bring the accounts across as they are".

## Problem owner and why-now trigger

The CRM owner or sales operations lead owns the structure. Account managers own the truth about each customer's relationships, because they are the ones who know who reports to whom. The budget owner is the sales director or managing director. The financial director has a stake because credit limits, rebates and group pricing all depend on the same structure.

The trigger is often a CRM replacement. A migration forces a decision about how customer data will be structured, and is the one moment when everyone is willing to look at it. Other triggers include a large customer asking for consolidated invoicing, a merger, or an account-based selling programme that needs a view of every contact across a group.

## Economic consequence

A flat account list hides the size of the opportunity and the size of the risk. A group buying R6 million a year in ten small orders from ten branches looks like ten minor accounts, each below the threshold for attention, even though the group as a whole is one of the top customers. Rebates and group pricing agreements are applied inconsistently. Duplicate outreach annoys customers: when three reps from the same company write to different people at the same group about the same product, the supplier looks disorganised.

The credit exposure is worse. If a group's total debt is spread across many accounts, each under its own limit, no one sees the combined amount. And there is a migration cost: moving a messy structure into a new system produces a messy new system, with the added expense of data conversion. A tidy-up before migration costs days; a clean-up afterwards, with live users and live pipeline, costs weeks.

## Root cause

- **Accounts are created for convenience.** A new record is the fastest way to log a first meeting, and nobody checks whether the organisation already exists under another name, which is one of the routes described in [how duplicate data gets into business systems](/insights/how-duplicate-data-gets-into-business-systems/).
- **No one owns the structure.** Reps own their accounts and no one owns the relationships between them.
- **Sales and finance use different definitions of "customer".** Sales tracks buyers and sites; finance tracks legal entities and debtors. This is the disagreement described in [when sales, finance and support disagree about the same customer](/patterns/when-sales-finance-and-support-disagree-about-the-same-customer/).
- **Structure is treated as optional.** The CRM works, in a way, without it, so it is never made mandatory.
- **Nobody decides which system holds the master record.** See [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/).

## Practical intervention

1. **Choose the levels you need.** Most small and mid-sized businesses need only three: group or parent, legal entity or account, and site or branch. Resist adding more until a use case demands it.
2. **Start with the top fifty customers.** Map their real structure with the account managers and, where relevant, with the finance team. A one-page diagram per group is enough to start.
3. **Align with finance.** Agree how the CRM's legal entity maps to the debtor account, and how any credit group is represented in both systems.
4. **Set creation rules.** Before creating an account, search for a parent or a match. New accounts below a threshold of information, such as a registration number or domain, go to a short review.
5. **Name an owner for each group.** One account manager is responsible for the group record and for coordinating colleagues who sell into it.
6. **Clean before you migrate.** Merge duplicates, attach children to parents, retire dead accounts and only then map fields into the new platform.

### Trade-offs

Deep hierarchies are expensive to maintain, and a structure that nobody updates becomes wrong in a new way. Rolling up revenue to a parent can also upset reps who are paid on their own accounts, so commission rules need to be settled with the structure. A group-level owner may slow smaller deals if every branch order requires coordination; the owner's role is visibility, not approval. Finally, the legal structure and the buying structure are not always the same, so the model should record both where it matters.

### An illustrative example

Illustrative: a Durban industrial supplier with 28 staff was moving to a new CRM. Before migration, the sales operations lead exported 3,400 accounts and found 520 that were probable duplicates or branches of larger customers. Working with the account managers and the credit controller, she mapped the fifty largest groups into three levels, merged the duplicates and left the long tail flat. The new CRM went live with a group view for the top customers, and the first quarterly review showed that two of the largest groups had been buying from three different reps.

## Diagnostic questions

- Can you list, in under ten minutes, everything you have sold to your largest customer group?
- How many accounts in the CRM have no parent but are known to belong to a group?
- Does finance use the same customer groupings as sales?
- If you migrated tomorrow, would you copy the current account structure or correct it first?

## What good looks like

For the customers who matter most, the CRM shows who the group is, which entities and sites sit beneath it, who owns the relationship and what it is worth in total. Finance and sales use the same grouping, or a documented mapping between them. New accounts are checked against existing ones before they are created, and a migration brings across a structure someone has actually reviewed.

## Where Mellorca fits

Mellorca's approach begins with the real customer relationships in your top accounts, mapped against what the CRM and the finance system currently hold. From there it helps decide the levels you need, the creation rules and the clean-up sequence before a system change. If your CRM has already lost people's trust, [how a CRM turns into an expensive address book](/insights/how-a-crm-turns-into-an-expensive-address-book/) describes the wider pattern.

## Method note

The sources describe how a widely used CRM stores relationships between records, how it matches duplicates, and how a finance system groups customers for credit purposes. They do not measure how common flat account structures are. The figures and the example are illustrative rather than a client case.
