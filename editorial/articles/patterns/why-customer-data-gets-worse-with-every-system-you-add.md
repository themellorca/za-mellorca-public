---
hub: patterns
record_id: PAT-234
slug: why-customer-data-gets-worse-with-every-system-you-add
title: Why Customer Data Quality Degrades as Systems Multiply
description: Each new system that stores customer details adds another place for names, numbers and addresses to drift apart. Here is why quality decays, what it costs, and how to slow it.
lead: Each new system that stores customer details adds another place for names, numbers and addresses to drift apart. Here is why quality decays, what it costs, and how to slow it.
category: Data & Information Flow
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Data & Information Flow
pattern_family: Data & Information Flow
observable_condition: Each time a new system is added, it receives a copy of the customer list and then gets its own edits, so phone numbers, addresses, contacts and account details disagree between systems and nobody can say which is right.
primary_identification: Customer data has no designated master: every system is allowed to create and change customer details, and the number of possible disagreements grows with every system added.
commercial_value_dimensions: Billing accuracy, customer communication, collections, sales effectiveness, reporting trust and compliance with data protection duties
sources:
  - Data unification overview - Dynamics 365 Customer Insights | https://learn.microsoft.com/en-us/dynamics365/customer-insights/data/data-unification
  - What is Microsoft Dataverse? - Power Apps | https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intro
  - Welcome to Dynamics 365 Sales | https://learn.microsoft.com/en-us/dynamics365/sales/overview
related:
  - Why Important Information Is Trapped in PDFs and Attachments | /patterns/why-important-information-stays-trapped-in-pdfs-and-email-attachments/
  - When One Change Has to Be Made in Every System You Own | /patterns/when-one-change-has-to-be-made-in-every-system-you-own/
  - Why Does the Same Customer Have Three Different Names in Your Systems? | /patterns/why-does-the-same-customer-have-three-different-names-in-your-systems/
summary: Each new system that stores customer details adds another place for names, numbers and addresses to drift apart. Here is why quality decays, what it costs, and how to slow it.
layout: plain
---
## Observable condition

The business starts with a spreadsheet of customers. Then it buys an accounting package, and the customers are loaded in. A year later it adds a CRM for the sales team, and the list is exported and imported again. Support adopts a help-desk tool. Marketing starts an email platform. Each system receives a copy of the customers on the day it is introduced.

From that day, the copies live separate lives. A customer changes their contact number and tells their salesperson, who updates the CRM. Finance still has the old number. A new branch address goes into the help desk but not the invoice template. A person leaves a customer company, and their name stays on three mailing lists.

An illustrative example: a Pietermaritzburg industrial-equipment supplier with accounting, a CRM, a service-booking tool and a mailing platform. A statement goes to a contact who left the customer eighteen months ago, because accounts never learned of the change that sales recorded.

## Realisation

The realisation is that data quality does not fail suddenly. It erodes in proportion to the number of places a detail can be changed. With one system, a detail can be right or wrong. With four systems, a detail can be right in one, stale in a second, misspelled in a third and missing in a fourth, and the combinations multiply with each addition.

It also shows that cleaning the data once is not a solution. A tidy list loaded into five systems begins to diverge on the first day, because five separate groups of people can now edit it. Microsoft's [documentation on data unification](https://learn.microsoft.com/en-us/dynamics365/customer-insights/data/data-unification) describes the steps required to match, merge and de-duplicate customer records drawn from several sources. That a whole feature set exists for reconciling profiles after the fact is a measure of how routinely the problem arises.

**Realisation prompt:** take one customer and look up their phone number, billing address and main contact in every system. How many different versions exist?

## Identification

This is a pattern of unmanaged copies. The visible symptom is the returned statement, the wrong salutation or the duplicate in the mailing list. The common assumption is that staff are careless with updates. The structural cause is that no system is designated as the place where a customer detail is created and changed, so every system is, in effect, allowed to be wrong independently.

It is the cause behind several visible conditions already described, including [why one customer exists differently in three systems](/patterns/why-does-one-customer-exist-differently-in-three-systems/). This article looks at why the situation gets steadily worse rather than staying stable.

## Diagnosis

- **Every new tool is loaded with a copy.** The import is a snapshot. After it, nothing keeps the copy in step with its source.
- **Edits happen where the conversation happens.** Sales updates the CRM, support updates the help desk, finance updates the ledger. Nobody updates all three.
- **Identifiers differ.** One system keys customers by account number, another by email address, a third by company name. Matching between them depends on human judgement.
- **Formats are free text.** Without validation, "Pty Ltd", "(Pty) Ltd" and "PTY LTD" become three customers, and a phone number can be stored in half a dozen layouts.
- **Duplicates are created at the point of entry.** A new contact is typed in because nobody could find the existing one, which starts a second history.
- **Nobody is accountable for the whole.** Each system has an administrator who looks after that system. The customer list across systems has no owner.

## Commercial impact

The commercial value at stake is billing accuracy, customer relationships, collections and trust in reporting.

The first cost is misdirected communication. Quotes, invoices and statements sent to the wrong person or address delay payment and signal carelessness. Customers who see inconsistent details across documents begin to question other things the business tells them.

The second is wasted effort in sales and service. A salesperson who calls a customer without knowing a support issue is open, or a collector who chases an account that finance has already reconciled, is working from a partial picture. The Pattern [when sales, finance and support disagree about the same customer](/patterns/when-sales-finance-and-support-disagree-about-the-same-customer/) traces how that disagreement shows up day to day.

The third is unreliable reporting. A count of customers means little when one customer appears three times, and revenue per customer becomes a guess. Duplicates also make it hard to honour a request to correct or remove personal information, because the business cannot be sure it has found every copy.

The fourth is a rising cost of change. When a detail must be updated in many places, people stop doing it, and the data degrades further.

## Common misidentification

The typical response is a clean-up project: export everything, de-duplicate in a spreadsheet and reload. It works for a quarter and then the drift resumes, because the cause is untouched. Another is to demand that staff be more careful, which ignores that three correct entries in three systems still produce three entries. A third is to buy yet another system that promises a single view, which adds a further copy unless it takes over as the master.

## Possibility

In a better state, one system is the master for each kind of customer detail, and the others receive it from there or look it up. Contact people and addresses might be mastered in the CRM, while payment terms and account numbers are mastered in the accounting package. The rule is written down, and people know which system to change.

Where several systems must remain, a shared platform can hold the common customer record. Microsoft's [introduction to Dataverse](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intro) describes a store in which business applications read and write the same tables, so that the same customer is not duplicated for each application. A CRM such as the one in [Dynamics 365 Sales](https://learn.microsoft.com/en-us/dynamics365/sales/overview) is a further example of a system designed to hold the account and contact history in one place. Whatever the tool, the principle is the same: fewer places to type, and a named master for each fact.

See also [when nobody knows which system holds the correct data](/patterns/when-nobody-knows-which-system-holds-the-correct-data/).

## Intervention

Do not begin with a clean-up. Begin by deciding where each detail is allowed to change, then clean once.

## Practical next actions

1. **List every system that stores customer details.** Include the spreadsheets, the mailing platform and the quoting template. Note who can edit in each.
2. **Choose a master for each field.** Decide, for example, that billing address is changed in the accounting package only, and contact names in the CRM only. Write the list on one page.
3. **Agree one customer identifier.** Use the same account number in every system, so that records can be matched without guessing.
4. **Stop the new duplicates first.** Add a search-before-create step, and use any duplicate-detection feature your systems offer, before cleaning old data.
5. **Clean once, from the master.** De-duplicate the master list, then refresh the other systems from it, and note the date.
6. **Review quarterly.** Sample twenty customers across systems and count the disagreements. Track the number, not the feeling.

## Diagnostic questions

- How many systems in your business can create a new customer?
- If a customer's address changes today, how many places need to be edited, and who does each?
- Do all systems use the same customer number?
- How many customers appear twice in your mailing list or CRM?
- Who is accountable for the quality of customer data across all systems, not just one?

## Bottom line

Customer data does not decay because people are careless. It decays because each added system adds another place for the truth to be edited independently. Naming a master for each fact, using one identifier and stopping duplicates at the point of entry slows the decay, and a single clean-up can then last.
