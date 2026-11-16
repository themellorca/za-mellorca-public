---
hub: patterns
record_id: PAT-431
slug: why-supplier-information-is-re-entered-across-systems
title: Why Supplier Information Is Re-entered Across Systems
description: The same supplier name, VAT number and bank details are typed into the accounting system, the buying spreadsheet and the stock system. Why that happens and what it costs.
lead: The same supplier name, VAT number and bank details are typed into the accounting system, the buying spreadsheet and the stock system. Why that happens and what it costs.
category: Procurement, Suppliers & Inventory
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Procurement, Suppliers & Inventory
pattern_family: Procurement, Suppliers & Inventory
observable_condition: Each new supplier is captured separately in the accounting system, the purchasing spreadsheet or system, the stock system and sometimes a contract register, and the details drift apart over time.
primary_identification: No supplier master: there is no single authoritative supplier record or owner, so each system holds its own copy and changes are applied inconsistently.
commercial_value_dimensions: Fraud and payment risk, VAT compliance, administrative cost, supplier relationships and reporting accuracy
sources:
  - Tax Invoices - South African Revenue Service | https://www.sars.gov.za/businesses-and-employers/tax-invoices/
  - Vendor collaboration with external vendors - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/procurement/vendor-collaboration-work-external-vendors
related:
  - When Procurement Starts With an Email Request | /patterns/how-purchase-requests-get-lost-in-an-inbox/
  - Why does buying something internally take so long? | /patterns/why-does-buying-something-internally-take-so-long/
  - When one missing item stops a larger process | /patterns/when-one-missing-item-stops-a-larger-process/
summary: The same supplier name, VAT number and bank details are typed into the accounting system, the buying spreadsheet and the stock system. Why that happens and what it costs.
layout: plain
---
## Observable condition

A new supplier is approved. Finance captures them in the accounting system with their VAT number and bank details. The buyer adds them to the purchasing spreadsheet with a contact name and payment terms. The warehouse sets them up in the stock system so goods can be received. Someone adds them to the contract register. Four people have typed the same company four times, each with slightly different details.

Months later the supplier changes its bank account, or its trading name, or its delivery address. One system is updated. The others are not. Purchase orders go out under one name, invoices come in under another, and payments are made to whichever account the accounting system holds.

An illustrative example: a Bloemfontein agricultural supplies business with about three hundred active suppliers. A review finds that more than a third of them are spelled differently between the accounting package and the stock system, and several have two records in accounting because nobody could find the first one.

## Realisation

The realisation is that supplier details are not just admin. They control where the business's money goes and whether its VAT claims hold up. A supplier's bank details decide who receives payment. Its VAT registration number and registered name affect whether an invoice supports an input tax claim. [SARS guidance on tax invoices](https://www.sars.gov.za/businesses-and-employers/tax-invoices/) lists the supplier's name, address and VAT registration number among the particulars a valid tax invoice must show. When the same supplier exists in several systems with different details, nobody can be sure which version is right.

**Realisation prompt:** if a supplier's bank details changed tomorrow, how many systems would need updating, and who would make sure they all were?

## Identification

This is a pattern of having no supplier master. The visible symptom is repeated capture of the same supplier details across systems. The common assumption is that each system needs its own setup and the duplication is simply the cost of having several tools. The structural cause is that the business has never decided which system holds the authoritative supplier record, who owns it, or how changes flow from it to everywhere else.

It is a supplier-side version of the wider Pattern [the hidden cost of re-entering the same information](/patterns/the-hidden-cost-of-reentering-the-same-information/), with higher stakes because payments depend on it.

## Diagnosis

- **Each system was set up independently.** The accounting package, stock system and purchasing tool arrived at different times, each with its own supplier list.
- **No one owns the supplier record.** Finance, buying and the warehouse each maintain their part, and none is responsible for the whole.
- **Changes arrive by email.** Suppliers send updated details to whoever they deal with, and that person updates the system they use.
- **Duplicates are easier than searching.** When a supplier cannot be found quickly, a new record is created, and both stay active.
- **Verification is inconsistent.** New bank details may be checked in one process and simply typed in another.

Some platforms allow suppliers to take part in maintaining their own information. [Microsoft's documentation on vendor collaboration](https://learn.microsoft.com/en-us/dynamics365/supply-chain/procurement/vendor-collaboration-work-external-vendors) describes an interface where external vendors respond to purchase orders and access parts of their vendor master data. Whether or not such a portal is appropriate, the principle matters: one record, maintained in one place, with controlled changes.

## Commercial impact

The commercial value at stake is payment security, tax compliance, administrative cost and the accuracy of supplier reporting.

The sharpest risk is payment fraud. When bank details live in several places and changes arrive by email, a fraudulent change request has more chances to succeed. The Discovery note on [supplier bank detail changes that arrive by email](/discovery/supplier-bank-detail-changes-arrive-by-email-and-go-unchecked/) describes that exposure. Duplicate supplier records also make duplicate payments more likely, as the Impact note on [duplicate supplier invoice payments](/impact/duplicate-supplier-invoice-payments-weak-controls-cost/) explains.

There is a tax dimension. Invoices that do not match the supplier's registered details can weaken input VAT claims if questioned. There is also a reporting cost: when one supplier has three records, the business cannot see how much it really spends with them, which weakens price negotiations and supplier reviews. And there is the plain labour of capturing, correcting and reconciling the same details again and again.

## Common misidentification

The usual response is a cleanup project: someone spends weeks matching and merging supplier records. It helps for a while, then the duplicates return because the capture process has not changed. Another response is to blame staff for typing errors, when the process requires them to type the same details several times.

## Possibility

In a better state, the business has one authoritative supplier record, held in the system that controls payments, with a named owner. New suppliers are set up once through a short onboarding step that collects and verifies details. Other systems either read from that record or are updated from it in a controlled way. Changes, especially to bank details, follow a verification step and are applied everywhere at once. Supplier spend can be reported accurately because each supplier exists once.

## Intervention

Start by deciding where the master record lives and who owns it. Integration can follow, but ownership and a single front door for changes come first.

## Practical next actions

1. **Choose the master system.** Usually the accounting or ERP system that makes payments. Record the decision.
2. **Name a supplier data owner.** One person or role approves new suppliers and all changes to existing ones.
3. **Create a single supplier onboarding form.** Collect registered name, VAT number, bank details with proof, contacts and terms once.
4. **Verify bank detail changes independently.** Confirm any change by calling a known number from the existing record, never one supplied in the change request.
5. **Match and merge existing duplicates.** Start with the suppliers you pay most, and deactivate the extra records.
6. **Connect or synchronise the other systems.** Where integration is not yet possible, update all systems from the master on the same day, using a checklist.

## Diagnostic questions

- How many systems hold their own copy of your supplier details?
- Who is accountable for the accuracy of a supplier's bank details?
- How are supplier change requests received, verified and applied?
- How many of your top fifty suppliers have more than one record?
- Could you state your total annual spend with any one supplier with confidence?

## Article summary

Re-entering supplier information in several systems is not just tedious. It spreads the details that control payments and VAT across copies that drift apart, raising the risk of fraud, duplicate payments and invoice problems. One owned supplier master, a single onboarding route and verified changes reduce that risk and the admin with it. If this condition is familiar in your business, [explore our solutions](/solutions/) or [start a conversation](/contact/) so we can examine how your supplier data moves and how Mellorca may be able to help.
