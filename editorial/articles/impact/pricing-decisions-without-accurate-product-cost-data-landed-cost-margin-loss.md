---
hub: impact
record_id: CPS-119
slug: pricing-decisions-without-accurate-product-cost-data-landed-cost-margin-loss
title: Selling Price Set on Yesterday's Cost: The Margin Lost to Weak Product Cost Data
description: When selling prices are based on the supplier's last invoice price, not the full landed cost after freight, duties, exchange rates and handling, discounts and quotes quietly give margin away.
lead: When selling prices are based on the supplier's last invoice price, not the full landed cost after freight, duties, exchange rates and handling, discounts and quotes quietly give margin away.
category: Finance
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Finance
commercial_domain: Finance
primary_pain: Prices and discounts are set from supplier purchase price or outdated item cost rather than full, current landed cost
primary_cost_mechanism: Margin erosion from mark-ups on the wrong cost base, discounts given without margin visibility, late price increases, misdirected range and stocking decisions, and misstated inventory and profit
sources:
  - https://learn.microsoft.com/en-us/dynamics365/business-central/payables-how-assign-item-charges | https://learn.microsoft.com/en-us/dynamics365/business-central/payables-how-assign-item-charges
  - https://learn.microsoft.com/en-us/dynamics365/business-central/finance-about-calculating-unit-cost | https://learn.microsoft.com/en-us/dynamics365/business-central/finance-about-calculating-unit-cost
summary: When selling prices are based on the supplier's last invoice price, not the full landed cost after freight, duties, exchange rates and handling, discounts and quotes quietly give margin away.
layout: plain
---
## A price list built on the wrong number

An importer and distributor of plumbing fittings in Durban updates its price list twice a year. The sales team works from a spreadsheet that applies a standard mark-up to each item's purchase price, taken from the supplier's price list. What the spreadsheet does not include is the rest of the cost of getting stock onto the shelf: sea freight, clearing and forwarding fees, customs duty, local transport, insurance and the effect of a weaker rand between ordering and payment. Over the year, those costs rise sharply on some product lines. Salespeople, who can see only the mark-up on purchase price, continue to offer volume discounts that seem safe. At year-end, gross margin on several high-volume lines is close to zero, and on a few it is negative.

The example is illustrative, but the problem is widespread among trading, wholesale, retail and light manufacturing businesses. Prices and discounts are decided using a cost figure that is incomplete, out of date or simply wrong. The business does not know it is losing margin, because the cost data it relies on says otherwise.

## Why product cost data is often wrong

- **Landed cost is not captured.** Freight, duties, clearing fees and insurance arrive on separate invoices, often weeks after the stock, and are posted to general expense accounts instead of being attached to the items they relate to.
- **Exchange rates move after pricing.** Imported goods are priced at the rate when the order was placed, while the actual cost depends on the rate when the supplier is paid.
- **Cost fields are not maintained.** Item cost in the system is updated irregularly, and some items still carry a cost from years ago.
- **Overheads are ignored.** Warehousing, handling, packaging and delivery costs differ by product, but pricing treats them as the same.
- **Pricing lives outside the system.** Price lists are maintained in spreadsheets that copy cost once and are never refreshed.

Accounting systems can handle these costs properly when they are set up to do so. Microsoft's documentation on [using item charges to account for extra trade costs](https://learn.microsoft.com/en-us/dynamics365/business-central/payables-how-assign-item-charges) describes assigning freight, customs duty, insurance and handling to purchase receipts so that inventory carries its landed cost and cost of goods sold reflects true margin. Its worked example shows 100 units bought at $10.00 each with $200 of freight and $100 of duty, giving a landed cost of $13.00 a unit, 30 percent above the purchase price. Its explanation of [unit cost calculation](https://learn.microsoft.com/en-us/dynamics365/business-central/finance-about-calculating-unit-cost) shows how indirect cost percentages and overhead rates can be added to direct unit cost, and when the unit cost field is updated.

## Where the margin goes

### Mark-ups applied to the wrong base

A 35 percent mark-up on purchase price looks healthy. If landed cost is 20 percent above purchase price, the real mark-up is much smaller, and any discount quickly eliminates it.

### Discounts given without visibility

Salespeople need room to negotiate. When they can see only an inflated margin, they discount confidently on lines that cannot afford it. Large customers, who receive the deepest discounts on the highest volumes, can become the least profitable.

### Price increases made too late

When cost data lags, the business discovers rising costs only after margins have already fallen, often at month-end or year-end. Price increases follow months behind cost increases, and the gap is lost permanently.

### Wrong range and stocking decisions

Product decisions, such as which lines to promote, discontinue or stock more deeply, depend on margin by item. Inaccurate cost data steers investment towards lines that look profitable but are not.

### Inventory and tax effects

Incorrect cost also misstates inventory value and cost of sales in the financial statements, affecting reported profit, lending conversations and tax calculations.

## A transparent example

The following figures are hypothetical. A product is bought for R100 and sold at R135, a 35 percent mark-up on purchase price. Freight, duty, clearing and handling add R18, so landed cost is R118. True gross profit is R17, a margin of about 12.6 percent on the selling price, rather than the 25.9 percent the price list implies. If a customer receives a 10 percent discount, the selling price falls to R121.50 and gross profit to R3.50. Across sales of 50,000 units a year, the difference between perceived and real margin is hundreds of thousands of rand.

## Why businesses tolerate it

Capturing landed cost properly takes discipline: freight and clearing invoices must be matched to shipments, and someone must update costs regularly. Finance teams under month-end pressure post these invoices to expense accounts because it is faster. Sales teams prefer simple price lists. And as long as the business as a whole is profitable, poor item-level margins stay hidden. The pattern of [inventory numbers disagreeing across systems](/discovery/why-inventory-numbers-disagree-across-systems/) and the article on [accounting records not matching operations](/impact/accounting-records-not-matching-operations-reconciliation-decision-uncertainty-cost/) describe related gaps. A separate article covers [charges calculated in spreadsheets](/impact/fees-commissions-charges-calculated-in-spreadsheets-error-cost/), a common home for pricing logic.

## What reliable cost data looks like

In a business with reliable cost data, every item's cost includes the purchase price plus the freight, duties, handling and other direct charges needed to land it, updated when each shipment is received. Exchange-rate differences are tracked and reflected. Price lists and quoting tools read cost from the system rather than from a copied spreadsheet. Salespeople see margin on landed cost and have discount limits set accordingly. Finance reviews item and customer margins monthly, not annually.

## Practical next actions

1. **Compare system cost with real landed cost.** For your top 30 items by sales value, calculate landed cost from recent shipments and compare it with the cost your pricing uses.
2. **Attach freight and duty to stock.** Change the process so that freight, clearing and duty invoices are assigned to the shipments and items they relate to, not posted to general expenses.
3. **Refresh cost on every receipt.** Make sure item costs update when stock is received and costs are confirmed, and review items whose cost has not changed in over a year.
4. **Base price lists on landed cost.** Rebuild mark-ups and margin targets from landed cost and link pricing tools to the system's cost data.
5. **Set discount limits by real margin.** Give salespeople margin visibility on landed cost and approval thresholds for discounts below agreed levels.
6. **Review margin by item and customer monthly.** Identify lines and accounts where real margin has fallen, and reprice before the next quarter.

Pricing is only as sound as the cost behind it. A business that captures full landed cost and keeps it current can discount with confidence, raise prices on time and invest in the products that actually earn its profit.
