---
hub: impact
record_id: CPS-453
slug: critical-suppliers-chosen-without-dependency-check-vendor-failure-cost
title: Critical Suppliers Chosen Without Checking What Depends on Them
description: When a supplier fails, changes terms or disappears, the business discovers how much it depended on them, and the bill arrives in downtime, rework and lost customers.
lead: When a supplier fails, changes terms or disappears, the business discovers how much it depended on them, and the bill arrives in downtime, rework and lost customers.
category: Digital Operations
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: Critical suppliers selected without assessing how much the business depends on them operationally
primary_cost_mechanism: Risk exposure and downtime cost when a supplier fails, raises prices or exits, plus emergency replacement and data recovery cost
sources:
  - Supply chain security guidance | https://www.ncsc.gov.uk/collection/supply-chain-security
  - SP 800-161 Rev. 1, Cybersecurity Supply Chain Risk Management Practices for Systems and Organizations - CSRC | https://csrc.nist.gov/pubs/sp/800/161/r1/final
  - https://inforegulator.org.za/popia/ | https://inforegulator.org.za/popia/
related:
  - The Cost of Work Waiting for Approval | /impact/approval-queues-blocked-capacity-cost/
  - Fixing Avoidable Mistakes Instead of Serving Customers: The Cost of Rework | /impact/fixing-preventable-mistakes-rework-customer-time-cost/
  - The Labour Cost Hidden Behind Software That Needs Constant Workarounds | /impact/software-needing-constant-manual-workarounds-hidden-labour-cost-behind-licence-fee/
summary: When a supplier fails, changes terms or disappears, the business discovers how much it depended on them, and the bill arrives in downtime, rework and lost customers.
layout: plain
---
## Chosen for the price, depended on for everything

A supplier is usually chosen for good reasons: a competitive quote, a friendly rep, a recommendation from another business, a product that does the job. What is rarely asked at the time is a different question: if this supplier stopped delivering next month, what would stop with it? The accounting package, the courier that carries every parcel, the single hosting company behind the website, the one firm that configures the payroll system. Over the years, a tool or service chosen as a convenience becomes a load-bearing wall.

This article is about that specific gap: selecting suppliers without assessing how much the business operationally depends on them, and the financial exposure that follows when a supplier fails, changes its terms, is sold, or simply has a bad week. It is different from [not measuring how well a supplier performs](/impact/supplier-performance-not-measured/), which concerns service quality over time, and from [contracts that renew without review](/impact/supplier-contracts-renewing-without-review/), which concerns commercial terms. Here the question is dependency: what depends on what.

## Why the assessment is skipped

Dependency is invisible at the moment of purchase. When a supplier is new, the relationship is light: a few users, a trial, a modest invoice. Nobody writes a continuity plan for a trial. As the supplier gains more data, more processes and more staff habits, the dependency grows without a decision ever being taken. By the time the supplier is critical, the buying decision is years old and the person who made it may have left.

Procurement habits also reward the wrong things. Quotes are compared on price and features. Financial stability, where the supplier keeps its data, who its own critical suppliers are, how easily you could leave and how quickly it could restore service are harder to compare and rarely appear in a quote. For a small business, asking for these things can feel presumptuous. For a business of any size, not asking is more expensive.

The wider picture is that supplier risk extends beyond the supplier you contract with. The UK National Cyber Security Centre notes in its [supply chain security guidance](https://www.ncsc.gov.uk/collection/supply-chain-security) that supply chains can be large and complex, that vulnerabilities can be introduced and exploited at any point, and that many organisations lose track of their supply chains. That guidance is written from a cyber-security perspective, but the observation applies to operations generally: you depend on your supplier's suppliers too.

## What dependency looks like day to day

- **Single points of failure.** One supplier provides a function with no fallback, such as the only payment gateway, the only warehouse, or the only person at an outside firm who understands your system.
- **Locked-in data.** Your records sit in a format only the supplier can read, or can be exported only slowly and at a fee. See [data export limits discovered only when leaving a vendor](/discovery/data-export-limits-discovered-only-when-leaving-a-vendor/).
- **Hidden concentration.** Several apparently separate suppliers all rely on the same underlying platform or data centre.
- **Unwritten service levels.** Nobody can say how long the business can operate without the supplier, or what the supplier is obliged to do during an outage.
- **No exit route.** The business has never priced or tested moving to an alternative, so the supplier effectively sets its own terms.

## How a supplier failure becomes a financial loss

The cost mechanisms are risk exposure, downtime and, when the supplier uses its leverage, margin erosion. A failure does not have to be a collapse. It can be a price increase you cannot refuse, a discontinued product, an outage with no compensation, a supplier acquired by a competitor, or a staff departure at a small specialist firm.

> Exposure per event = days the function is unavailable × daily cost of the function not working + emergency replacement cost + data recovery or rebuild cost

### An illustrative scenario

Consider a mid-sized distributor with 30 staff that relies on a single small firm to host and maintain its order-entry system. The firm is owner-run and has served the distributor reliably for six years. The founder falls seriously ill and the firm winds down in a matter of weeks. All figures are **illustrative assumptions**.

| Cost element | Assumption | Estimate |
| --- | --- | --- |
| Manual order handling while the system is unavailable | 10 working days, 6 staff at R450 loaded hourly cost, 8 hours a day | R216,000 |
| Delayed or lost orders | Ten days of orders worth R900,000; 10% lost for good; 20% gross margin | R18,000 |
| Emergency selection and set-up of a replacement | 80 hours of internal and external effort at R700 | R56,000 |
| Rebuilding data from exports and paper records | 120 hours at R350 | R42,000 |
| **Total** |  | **R332,000** |

The arithmetic: 10 days × 8 hours × 6 staff × R450 = R216,000. Ten days of orders at R90,000 a day is R900,000; losing 10% of it is R90,000 of sales, which at a 20% margin is R18,000. Replacement effort is 80 × R700 = R56,000 and data rebuilding is 120 × R350 = R42,000. The total is R332,000.

Notice what the model leaves out: customers who quietly move their regular business elsewhere after a bad fortnight, and the owner's own time. Those are real but hard to measure, so they are better described than guessed. The point is not a precise number. It is that a planning range of a few hundred thousand rand is visible in advance, and can be compared with the cost of reducing it, such as a tested data export and a documented fallback, before the failure rather than after.

## Secondary consequences

Dependency creates quieter costs too. A critical supplier that knows it is critical can raise prices with little resistance. Staff stay with ageing tools because switching looks impossible. Compliance can also be affected. Under South Africa's Protection of Personal Information Act, a responsible party remains accountable for security safeguards even where a supplier processes the data. The Information Regulator's [POPIA overview](https://inforegulator.org.za/popia/) describes the requirement to take reasonable technical and organisational measures, identify foreseeable risks and keep safeguards updated, so a supplier that cannot show how it protects your data is a compliance question as well as an operational one.

## When it becomes urgent

Act when a supplier carries a function that would halt trading or invoicing for more than a day, when a contract is approaching renewal, when you hear that a supplier has been sold or is struggling, or when your own growth means a function that used to be small now carries real revenue. The assessment costs a few hours. The alternative is learning your dependencies during an outage.

## What better looks like

A business that handles supplier dependency well keeps a short register of critical suppliers: what each one does, what stops if it stops, how long the business can cope, who owns the relationship and what the fallback is. Before signing with a new supplier it asks a handful of standard questions about financial standing, data location, export options, support hours and continuity arrangements. The UK government's NCSC organises this into four stages: understand the risks, establish control, check your arrangements, and keep improving as the supply chain changes. A small business can adopt that rhythm without adopting a formal framework.

For wider guidance on risk management practice, the US National Institute of Standards and Technology's [publication on cybersecurity supply chain risk management](https://csrc.nist.gov/pubs/sp/800/161/r1/final) describes identifying, assessing and mitigating supply chain risk across an organisation. It has since been superseded by a newer edition, and it is written for large organisations, but its structure is a useful checklist to borrow from.

## Practical steps

1. **List suppliers by consequence, not spend.** For each, ask: if this stopped tomorrow, what would we be unable to do, and for how long?
2. **Mark the single points of failure** and decide which deserve a fallback, even a manual one.
3. **Confirm you can get your data out** in a usable format, and test it once.
4. **Put the questions into procurement.** Ask about continuity, data location, export, support and subcontractors before signing.
5. **Write down the exit cost** of your top five suppliers, even roughly.
6. **Review the register** annually, and whenever a supplier changes ownership.

## Bottom line

Choosing a supplier is a commercial decision. Depending on one is an operational and financial one, and it should be made deliberately. The business that knows its dependencies pays a little for resilience in advance. The business that does not, pays in full, under pressure, when the supplier is no longer there. For a related concern about single points of failure in connectivity, see [one internet line and cloud-dependent trading](/impact/one-internet-line-cloud-dependent-trading-stops-failover-cost/).
