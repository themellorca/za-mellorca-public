---
hub: patterns
record_id: PAT-034
slug: when-one-change-has-to-be-made-in-every-system-you-own
title: When one change has to be made in every system you own
description: A price rise or new supplier bank account must be updated in four places, and one is always missed. Duplicate data multiplies every change.
lead: A price increase, a new supplier bank account or a customer's change of address has to be updated in four places, and one is always missed. Duplicate copies of the same business data multiply every change and quietly drift apart.
category: Disconnected Systems & Integration Friction
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Disconnected Systems & Integration Friction
pattern_family: Disconnected Systems & Integration Friction
observable_condition: Routine changes to prices, products, supplier details or customer details must be repeated by hand in several platforms, and at least one copy is regularly missed or updated late.
primary_identification: Duplicated master data maintained independently in multiple platforms, with no single place where a change is made and propagated.
commercial_value_dimensions: Margin, staff capacity, risk, customer experience and compliance
sources:
  - What is Master Data Management? - IBM | https://www.ibm.com/think/topics/master-data-management
  - Use Microsoft Dataverse to detect duplicate records and merge - Power Platform | https://learn.microsoft.com/en-us/power-platform/admin/detect-duplicate-records
  - Section 16 Quality of information - POPIA | https://popia.co.za/section-16-quality-of-information/
related:
  - Why the same problems return after you replace the system | /patterns/why-the-same-problems-return-after-you-replace-the-system/
  - Why information has to be copied from one system to another | /patterns/why-information-has-to-be-copied-from-one-system-to-another/
  - When your CRM knows something your finance system does not | /patterns/when-your-crm-knows-something-your-finance-system-does-not/
summary: A price increase, a new supplier bank account or a customer's change of address has to be updated in four places, and one is always missed. Duplicate copies of the same business data multiply every change and quietly drift apart.
layout: plain
---
## Observable condition

A supplier increases its prices. Someone updates the cost price in the accounting system. Someone else updates the selling price on the website. The point-of-sale system in the shop is updated a few days later, and the quoting spreadsheet the sales team uses is updated when somebody remembers. For a week or two, the business quotes, sells and invoices at different prices depending on which channel the customer happened to use.

The same thing happens with smaller changes. A customer moves premises and updates their address with the accounts team, but deliveries still go to the old address because the courier booking tool has its own copy. A supplier changes banks and the new details are captured in the payments system but not in the procurement tool, which still shows the old account on the purchase order.

None of these feel like system problems. They feel like housekeeping: one more list to update. But the list keeps growing, and every addition makes the next change slower and more likely to be incomplete.

An illustrative example: a Gauteng hardware and building-supplies business with three branches kept its product list in four places: accounting, the online store, the branch tills and a pricing spreadsheet used for trade quotes. A general price adjustment took most of a week to complete across all four. During that week, trade customers received quotes at old prices that were then invoiced at new ones, and several disputed the difference.

## Realisation

When the same data lives in several platforms, the business has not just stored it several times. It has committed to changing it several times, forever. Every price change, every new product, every updated contact detail becomes a small project with as many steps as there are copies.

The copies also drift. [IBM's explanation of master data management](https://www.ibm.com/think/topics/master-data-management) describes how, without a single authoritative record for key entities such as customers and products, organisations end up with duplicated and inconsistent records spread across systems, and how that leads to problems like incorrect billing and misdirected shipments. [Microsoft's documentation for Dataverse](https://learn.microsoft.com/en-us/power-platform/admin/detect-duplicate-records) describes how duplicate customer and contact records can be detected when they are entered manually and then merged into one.

For personal information, drift is also a compliance matter. [Section 16 of the Protection of Personal Information Act](https://popia.co.za/section-16-quality-of-information/) requires a responsible party to take reasonably practicable steps to ensure personal information is complete, accurate, not misleading and updated where necessary. Every extra copy is another place where that obligation has to be met.

**Realisation prompt:** how many systems would need to be updated if one of your top suppliers changed its prices tomorrow, and who would update each one?

## Identification

This is a pattern of duplicated master data: the core reference information a business runs on, such as products, prices, customers and suppliers, maintained independently in more than one platform. The visible symptom is repeated update work and occasional mismatches. The common assumption is that keeping lists up to date is simply part of admin. The structural cause is that there is no single place where a change is made and from which it flows to everywhere else.

It sits next to [when nobody knows which system holds the correct data](/patterns/when-nobody-knows-which-system-holds-the-correct-data/), which deals with which copy to trust once values conflict. This Pattern is about the cost of having the copies at all, even when they currently agree.

## Diagnosis

- **Each platform arrived with its own lists.** The online store, till system, accounting package and quoting tool each needed products and prices to work, so each was loaded separately when it was introduced.
- **Changes enter wherever they are first heard.** A sales rep hears about a price change, an accounts clerk hears about a new address. Each updates the system in front of them.
- **Nobody owns the data itself.** Teams own systems, not the product list or the supplier record. So no one is responsible for making sure a change reaches every copy.
- **Imports refresh rather than reconcile.** Periodic spreadsheet uploads overwrite one copy from another, sometimes reintroducing old values or creating fresh duplicates.
- **Drift is only detected by its consequences.** There is no routine comparison between copies, so differences surface as a disputed invoice, a returned delivery or a payment to an old account.

## Commercial impact

The commercial value at stake is margin, capacity, risk and customer experience.

Margin leaks when items are sold at an old price after costs have risen, or when discounts that have ended remain active in one channel. Capacity is consumed by repeated updates, and the effort rises every time a new platform, branch or sales channel is added. Risk rises where supplier banking details or customer contact details differ between systems, because payments and communications can go to the wrong place. Customers notice when the website, the quote and the invoice do not agree.

Related Impact analysis on [the financial impact of departments keeping separate customer records](/impact/departments-separate-customer-records-financial-impact/) looks at the cost side in more depth.

## Common misidentification

Mismatches are usually treated as individual errors: someone forgot to update the till. The response is a reminder or a checklist. Checklists help, but they do not change the fact that the business has designed itself to need the same change made several times by different people.

Another common response is a periodic clean-up. Clean-ups improve the data for a while, but if the copies remain independent, they drift apart again.

## Possibility

In a better state, each type of core data has one home and one owner. Prices are changed in one place and flow to the website, tills and quoting tool automatically, or at least through a controlled, scheduled process. Supplier banking details are changed only in one system, with a verification step, and other systems read from it. Where copies must remain, a simple comparison report highlights differences before they reach a customer.

For the building-supplies business, that meant making the accounting system the home of products and prices, connecting the online store and tills to it, and replacing the quoting spreadsheet with quotes generated from the same list.

## Intervention

1. **Inventory the copies.** For products, prices, customers and suppliers, list every platform that holds its own copy.
2. **Choose a home for each.** Decide which system is the authoritative source. The Insight on [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/) sets out the criteria.
3. **Name a data owner.** One person responsible for the accuracy of each data type, separate from who owns each system.
4. **Route changes to the home.** Agree that changes are made only in the authoritative system, and remove or lock editing elsewhere where possible.
5. **Propagate, do not re-key.** Use the integrations your platforms already support to push changes outward, starting with the data that changes most often.
6. **Detect drift.** Turn on duplicate detection where platforms offer it, and run a regular comparison of key fields between copies that remain.
7. **Protect sensitive changes.** Treat changes to banking details and contact details as controlled events with verification, not as routine edits.

## Practical diagnostic questions

- How many platforms hold their own list of your products, prices, customers or suppliers?
- When a price changes, how long until every channel shows the new price?
- Who is responsible for the accuracy of your product or supplier data, as opposed to a particular system?
- Have you ever paid, delivered to or invoiced from an out-of-date copy?
- Is there any routine check that your copies still agree?

## Bottom line

Every extra copy of core business data is a promise to make every future change more than once. As platforms and channels are added, that promise becomes slower to keep and easier to break, and the gaps show up as lost margin, misdirected payments and confused customers. Giving each type of data one home, one owner and a controlled way to reach other systems turns a growing burden of housekeeping into a single, reliable change.
