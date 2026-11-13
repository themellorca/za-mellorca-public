---
hub: discovery
record_id: DISC-107
slug: why-warehouses-with-different-location-codes-cannot-share-stock-data
title: Why warehouses with different location codes cannot share stock data
description: When each warehouse names its shelves and bins differently, transfers go astray and reports need translation. A simple convention and governance fix it.
lead: When each warehouse names its shelves and bins its own way, transfers go astray and group reports need translation. A simple convention and the governance to keep it.
category: Inventory & Order Operations
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Inventory & Order Operations
problem_domain: Inventory & Order Operations
problem_owner: Warehouse operations manager, with IT owning system configuration
budget_owner: Chief operating officer or operations director
sources:
  - Locations — Odoo 18.0 documentation | https://www.odoo.com/documentation/18.0/applications/inventory_and_mrp/inventory/warehouses_storage/inventory_management/use_locations.html
  - Cycle counting - Supply Chain Management - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/supply-chain/warehousing/cycle-counting
  - Global Location Numbers (GLN) - GS1 | https://www.gs1.org/docs/idkeys/GS1_Global_Location_Numbers.pdf
related:
  - Why sales and warehouse systems need one product identifier | /discovery/why-sales-and-warehouse-systems-need-one-product-identifier/
  - Why damaged stock keeps showing as available to customers | /discovery/why-damaged-stock-keeps-showing-as-available-to-customers/
  - Why stock in transit between locations goes missing in reconciliation | /discovery/why-stock-in-transit-between-locations-goes-missing-in-reconciliation/
  - New SKUs go on sale before every system has the product data | /discovery/launching-a-new-sku-before-every-system-knows-it-exists/
summary: When each warehouse names its shelves and bins its own way, transfers go astray and group reports need translation. A simple convention and the governance to keep it.
layout: plain
---
A distributor in Gauteng opens a second warehouse in the Eastern Cape (an illustrative example). The Johannesburg site labels its shelves in the form A-03-2, meaning aisle, bay, level. The new site, set up by a different supervisor with a different background, uses names such as COLD-ROOM-1 and MEZZ-B. Both are perfectly sensible. Six weeks later, the first inter-warehouse transfer arrives and the receiving clerk types "B-3-1" into a system that already has a location called "B-03-1" on the other side of the country. The stock lands somewhere, and nobody can say exactly where.

Location codes look like a trivial detail until two sites have to share one picture of the business.

## The problem in plain language

When a business has more than one warehouse, every shelf, bin, zone and dock has a code. If each site invents its own conventions, the codes cannot be compared, sorted, validated or reported on together. Staff who move between sites need retraining. Transfers are mis-keyed. Reports that should show "where is this product across the group" need a person to translate between schemes first.

The observable symptoms are mundane: wrong-location putaways, long searches for stock that is "in the system but not on the shelf", duplicate codes meaning different places, and spreadsheets that map one site's codes to another's.

## What you are actually trying to solve

People facing this usually phrase it as "warehouse location naming convention", "standardise bin locations across warehouses" or "stock in the wrong location after transfer". The goal is practical: a new site should be able to go live without inventing a new language, and a transfer between sites should land in an unambiguous place.

## How systems model locations

Inventory software generally models locations as a hierarchy, and that structure is what a naming convention should reflect. Odoo's documentation, for example, describes locations nested through a parent location field, with a path such as warehouse, stock, zone and then a specific shelf or unit. It also lets each location carry its own barcode, separate from its name, so a scanner can identify a place regardless of how people refer to it ([Odoo location documentation](https://www.odoo.com/documentation/18.0/applications/inventory_and_mrp/inventory/warehouses_storage/inventory_management/use_locations.html)).

The page asks only for a recognisable name; it does not impose a scheme. That is typical. The software gives you a structure, and the discipline of using it consistently is yours. At a larger scale, GS1's [Global Location Number](https://www.gs1.org/docs/idkeys/GS1_Global_Location_Numbers.pdf) shows the same principle: a location, including a warehouse or a warehouse gate, can carry a globally unique identifier.

Microsoft's Dynamics 365 warehouse documentation shows the same dependency from the operational side. Cycle counting there is enabled per location through location profiles, and counting work is created for a whole location ([cycle counting in Dynamics 365](https://learn.microsoft.com/en-us/dynamics365/supply-chain/warehousing/cycle-counting)). Any process built on locations, from putaway to counting to replenishment, inherits whatever inconsistency the codes contain.

Shopify's help documentation makes a related point about identifiers across places: it recommends using the same SKU for a variant at every location, while tracking inventory levels separately for each location, because that is what makes transfers and company-wide reports possible ([Shopify SKU guidance](https://help.shopify.com/en/manual/products/details/sku)). The principle generalises: the item should have one identity, and the place should have one structure, so a quantity can be expressed as "this item, in that place".

## Who owns it and why it becomes urgent

The warehouse operations manager normally owns the physical layout, and IT owns the system configuration. Group operations or the COO becomes involved once a second site exists. The trigger is almost always expansion: a new warehouse, a third-party logistics partner, a merger, or the move from one site to a network where stock is shifted between points to serve demand.

Growth also exposes the hidden labour. A site with fifteen people can run on tribal knowledge. A network cannot, and the cost shows up in training time, error rates and slow transfers.

## Economic consequence

- **Misplaced stock and search time.** Staff walk the floor looking for items recorded in a place that does not exist or means something different.
- **Slower transfers and receiving.** Each transfer needs a human check of the destination code.
- **Reporting workarounds.** Group stock reports depend on a mapping table that someone must maintain.
- **Training and onboarding cost.** Movers between sites relearn the scheme, and temporary staff are error-prone.
- **Integration cost.** Every connection to an e-commerce or finance system must handle each site's scheme separately, a theme explored in [point-to-point integrations multiplying faster than applications](/discovery/point-to-point-integrations-multiply-faster-than-applications/).

Exact costs vary by operation and are best measured, for example by timing a sample of putaways and searches at each site, rather than estimated from general figures.

## Root cause

The inconsistent codes themselves are the symptom. The roots usually include:

1. **Sites were set up independently,** often years apart, by different people, without a group standard to follow.
2. **Codes carry meaning in people's heads,** not in structure. A name like MEZZ-B tells a local reader something that no system can interpret.
3. **The name doubles as the identifier.** When the human-readable label is also the key, changing the label risks breaking history. Separating the stable identifier or barcode from the display name solves that.
4. **No owner for location master data.** New locations are created by whoever needs them, with no review.
5. **Acquisition and third-party sites bring their own scheme,** and nobody had time to harmonise.

## Practical intervention

### Design a group convention, simply

Choose a small, fixed structure, such as site, zone, aisle, bay and level, with a fixed length and delimiter for each. Keep it readable on a rack label and scannable. Document what each segment means and which characters are forbidden.

### Separate identity from label

Give every location a stable system identifier and, where the platform allows, a barcode. The display name can then be improved without affecting stock history.

### Plan the migration site by site

Do not relabel a live warehouse on a Monday. Create the new codes in the system, map old to new, relabel physically in a quiet period, and move stock records by controlled transactions. A new site adopts the convention from day one, which is the cheapest moment to do it.

### Add validation at the point of entry

The system should reject a destination code that does not exist, and a handheld scan should be the default rather than typing. Reject, do not guess.

### Govern new locations

Name an owner for location master data. A location is created through a short request, not on demand by anyone with access. This is a small version of the wider issue covered in [master data changes that break reports without warning](/discovery/master-data-changes-break-reports-without-warning/).

## Diagnostic questions

- Could a new picker at your second site find a bin from the code alone, without asking?
- Do any two sites use the same code for different places?
- Is there a spreadsheet that translates one site's codes into another's?
- When did you last reject a transfer because the destination code did not exist?
- Who is allowed to create a location in the system, and who reviews it?

## What good looks like

A person who has worked in one warehouse can read the code in another and know roughly where to walk. Scans replace typing for putaway and transfers. A single report can list the stock of a product across every site and every zone without a translation table. New locations arrive through a short, owned process, and the codes are the same on the shelf label, the handheld and the report.

## Where Mellorca can help

Location standards are usually settled in a workshop and then implemented in the warehouse and inventory systems, with the integrations updated to match. That work belongs to [systems implementation and integration](/services/systems-implementation-integration/). If it is not yet clear how many conventions exist across your sites and connected systems, a [digital systems audit](/services/digital-systems-audit/) will inventory them first. The consequence of weak foundations is also discussed in [why inventory numbers disagree across sales, warehouse and finance](/discovery/why-inventory-numbers-disagree-across-systems/).

## Method note

The scenario is illustrative and not drawn from a named business. The documentation cited describes how specific products model locations; none of it prescribes a particular naming scheme, so the convention suggested here is a practical recommendation rather than a vendor requirement.
