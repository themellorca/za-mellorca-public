---
hub: impact
record_id: CPS-035
slug: approving-low-risk-transactions-one-by-one-management-cost
title: Approving Every Small Transaction: The Management Cost of Unnecessary Sign-Offs
description: When managers personally approve every routine, low-value transaction, the business pays senior time for little added control. Risk-based approval limits keep oversight where it matters.
lead: When managers personally approve every routine, low-value transaction, the business pays senior time for little added control. Risk-based approval limits keep oversight where it matters.
category: Business Automation
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Business Automation
commercial_domain: Business Automation
primary_pain: Managers approving routine low-risk transactions one by one
primary_cost_mechanism: Management labour cost of unnecessary approvals, with delay cost, supplier cost and diluted control
sources:
  - Set up approval users - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-to-set-up-approval-users
  - Get started with Power Automate approvals - Power Automate | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
  - Add a condition to a cloud flow in Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/add-condition
related:
  - Print, Sign, Scan, Email: The Labour and Turnaround Cost of Paper-Based Approvals | /impact/print-sign-scan-email-paper-approvals-turnaround-cost/
  - Predictable Appointments Still Carry a Cost When Staff Arrange Every Slot | /impact/manual-appointment-scheduling-administration-cost/
  - Rebuilding the Same Report Every Month: The Labour Cost of Manual Reporting | /impact/rebuilding-recurring-reports-by-hand-labour-cost/
summary: When managers personally approve every routine, low-value transaction, the business pays senior time for little added control. Risk-based approval limits keep oversight where it matters.
layout: plain
---
## The tolerated pain: the owner signs off the stationery order

Many South African small and mid-sized businesses have one approval rule: everything goes to the owner, the financial manager or a director. The R85,000 equipment purchase and the R450 courier invoice follow the same path. So do the monthly internet bill that has been the same for three years, the replenishment order from an approved supplier at agreed prices, the small refund to a long-standing customer and the overtime claim that matches the roster.

Each approval takes a minute or two. The approver opens an email or logs into a system, glances at the amount, and clicks approve. Almost none are ever rejected. Over a month, though, these minutes add up to hours of senior time, and every one of those transactions waits until the approver gets to it.

Mellorca has already examined the wider cost of [work waiting for approval](/impact/approval-queues-blocked-capacity-cost/) and the specific problem of [invoice approvals stuck in inboxes](/impact/pain-invoice-approvals-in-inboxes/). This article looks at a narrower question: which approvals should exist at all. When low-risk transactions are approved one by one, the business is paying for a control that adds little protection.

## Why businesses tolerate it

- **Approval feels like control.** Owners believe that seeing every transaction keeps them safe, even when they no longer read the detail.
- **Rules were set when the business was small.** Approving everything made sense with twenty transactions a month. It no longer does at five hundred.
- **Nobody has defined risk.** Without agreed thresholds and categories, every transaction is treated the same.
- **Delegation feels risky.** Owners worry that giving staff authority will lead to waste or fraud.
- **The cost is invisible.** Senior time spent approving is not recorded anywhere.

## Operational symptoms

- Approvers face long lists of pending items and approve them in bulk without real review.
- Routine purchases, refunds and claims wait days because the approver is travelling or busy.
- Staff phone or message the approver to push urgent items through, interrupting other work.
- Suppliers on short payment terms are paid late for small, uncontroversial invoices.
- Managers cannot point to a single rejected low-value item in the past year, yet the step remains.
- Higher-risk transactions get no more scrutiny than trivial ones, because the approver's attention is spread thin.

## How the pain becomes money

- **Management labour cost.** Senior time, the most expensive time in the business, is spent on routine sign-offs.
- **Delay cost.** Purchases, refunds and claims wait, which slows operations and frustrates customers and staff.
- **Supplier cost.** Late payment of small invoices can lose early-payment discounts, trigger late fees or weaken supplier relationships.
- **Control dilution.** When everything needs approval, approvers stop looking closely, so the transactions that genuinely deserve scrutiny receive less of it. Mellorca's article on [duplicate supplier invoice payments](/impact/duplicate-supplier-invoice-payments-weak-controls-cost/) shows how weak controls cost money.
- **Opportunity cost.** Hours spent approving are hours not spent on pricing, customers, staff or strategy.

## A transparent cost model

The figures below are illustrative assumptions. Replace them with your own volumes and rates.

| Transaction type | Approvals a month | Approver minutes each | Low-risk share |
| --- | --- | --- | --- |
| Supplier invoices under R5,000 | 250 | 2 | 90% |
| Purchase requests from approved catalogue | 80 | 3 | 85% |
| Expense and overtime claims within policy | 120 | 2 | 80% |
| Small customer refunds and credits | 40 | 3 | 75% |

**Approver time today:** (250 × 2) + (80 × 3) + (120 × 2) + (40 × 3) = 1,100 minutes a month, or about 18 hours.

**Time on transactions classed as low-risk:** (250 × 2 × 90%) + (80 × 3 × 85%) + (120 × 2 × 80%) + (40 × 3 × 75%) = about 936 minutes, or roughly 15.6 hours a month and 187 hours a year.

At an illustrative loaded cost of R900 an hour for an owner or financial manager, removing individual approval from the low-risk share would free roughly R168,000 of senior time a year. A business that replaces individual approval with a monthly review of a sample would need to deduct the time that review takes. The point is not the exact figure but that the cost is measurable and usually larger than owners expect.

*Illustrative example.* A Gauteng distribution company required the managing director to approve every supplier invoice. He typically cleared his queue on Friday afternoons. Freight and maintenance suppliers on seven-day terms were routinely paid late. After setting a threshold below which invoices matched to an approved order were paid without his sign-off, and reviewing a monthly report of those payments instead, his weekly approval session dropped to the handful of invoices above the limit or outside the rules.

## When it becomes commercially urgent

- approvers routinely approve items in bulk without reading them;
- suppliers or staff complain about slow payment of small amounts;
- the owner's or financial manager's diary has no room for strategic work;
- transaction volume is rising with growth, and approval queues grow with it;
- an auditor or adviser has questioned whether approvals are effective.

## What better looks like

### Approve according to risk, not habit

Define what makes a transaction low-risk in your business. Common criteria include an amount below a threshold, an approved supplier, a matching purchase order, a recurring contract at a known price, and a claim within policy. Transactions that meet all the criteria proceed without individual sign-off. Those that do not go to the right approver.

### Set approval limits in the system

Many accounting and ERP systems support this directly. Microsoft's Business Central documentation, for example, describes an approval user setup in which each user can be given a maximum sales, purchase or request amount they may approve, an approver above them, and a substitute approver for when the main approver is unavailable. The same documentation warns that when one user is both requester and approver, their own requests are approved automatically, which is a reminder that delegation must be designed with segregation of duties in mind.

### Automate the routing of what remains

Where approval is still needed, route it automatically. Microsoft's Power Automate documentation describes approval flows in which approvers respond from an Outlook email, a Teams adaptive card or the action centre, with options for everyone to approve, the first to respond, or approvers in sequence. Its documentation on conditions shows how a flow can take a different path depending on a value, such as an amount over a threshold. Mellorca's article on [why approval processes become bottlenecks](/insights/why-approval-processes-become-bottlenecks/) covers the design choices in more depth.

### Replace pre-approval with review

Removing individual approval does not remove oversight. A monthly report of all transactions processed without sign-off, a sample checked in detail, and exception alerts for unusual patterns often provide stronger control than hundreds of rushed clicks.

## Practical steps

1. Export three months of approvals and count them by type, amount and outcome.
2. Identify how many were rejected or changed. If almost none were, the step is adding little.
3. Agree written criteria for low-risk transactions and the limits each role may approve.
4. Configure limits and routing in your accounting or workflow system, keeping requester and approver separate.
5. Introduce a monthly review of transactions processed without individual approval.
6. Revisit thresholds every six months as volumes and risks change.

## Bottom line

Approving every small transaction feels like control but often delivers the opposite: tired approvers, slow payments and less attention for the transactions that matter. The cost is senior time, delays and diluted oversight. Risk-based limits, automated routing for what remains and periodic review of the rest give owners more control, not less, while returning hours of management time to the business.
