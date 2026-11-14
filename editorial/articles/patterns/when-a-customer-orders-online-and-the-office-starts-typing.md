---
hub: patterns
record_id: PAT-407
slug: when-a-customer-orders-online-and-the-office-starts-typing
title: When an Online Order Creates Offline Administration
description: The customer clicks buy, then staff print, retype, phone and check. Online ordering that ends in manual office work moves the effort from the customer's side to yours.
lead: The customer clicks buy, then staff print, retype, phone and check. Online ordering that ends in manual office work moves the effort from the customer's side to yours.
category: Order-to-Cash & Customer Operations
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Order-to-Cash & Customer Operations
pattern_family: Order-to-Cash & Customer Operations
observable_condition: An order placed on the website arrives as an email or a dashboard entry, and staff then print it, retype it into the accounting system, check stock by hand and phone or message the customer to confirm.
primary_identification: Online order capture that stops at the front door: the order is digital for the customer but a paper-and-keyboard task for staff, with no connection to stock, invoicing or delivery.
commercial_value_dimensions: Order processing time and cost, error and rework rate, customer satisfaction, cash collection speed and staff capacity for growth
sources:
  - https://learn.microsoft.com/en-us/dynamics365/business-central/sales-manage-sales | https://learn.microsoft.com/en-us/dynamics365/business-central/sales-manage-sales
  - https://learn.microsoft.com/en-us/power-automate/overview-cloud | https://learn.microsoft.com/en-us/power-automate/overview-cloud
  - https://www.sars.gov.za/types-of-tax/value-added-tax/ | https://www.sars.gov.za/types-of-tax/value-added-tax/
summary: The customer clicks buy, then staff print, retype, phone and check. Online ordering that ends in manual office work moves the effort from the customer's side to yours.
layout: plain
---
## Observable condition

At 7:40 on Monday morning, the office administrator opens the shared mailbox. Eleven orders came in over the weekend through the website. For each one she opens the confirmation email, copies the customer details into the accounting package, checks the product codes against a stock spreadsheet, adds delivery charges by hand and prints a picking slip for the warehouse. Two orders contain a product that is no longer available, so she phones the customers. By ten o'clock she has processed six.

An illustrative example: a Bloemfontein wholesaler of cleaning supplies launched an online ordering form after several customers asked for one. Orders rose by a third in a year. The office added a second administrator to keep up, and the customers still hear "we'll confirm tomorrow" after placing an order that felt instant.

The business did what was asked. It put ordering online. What it did not do is carry the order beyond the screen.

## Realisation

The realisation is that online ordering only digitises the part the customer sees. The customer's effort falls, but the effort did not vanish; it moved into the office. Each order that arrives in a mailbox is a small data-entry job, a stock check and often a phone call.

Sales and order management software is designed so that this does not happen. Microsoft's [documentation on managing sales in Business Central](https://learn.microsoft.com/en-us/dynamics365/business-central/sales-manage-sales) shows an order moving through quotes, orders, shipments and invoices as linked documents, with each step drawing on the one before. The point is the continuity: the same record travels from order to delivery to invoice, and nobody retypes it.

Without that continuity, the online order is a message. A message has to be read by a person, interpreted and rewritten before the business can act on it.

**Realisation prompt:** follow one web order from the moment it is placed to the moment it is invoiced. Count how many times a person typed, copied or checked something that already existed in digital form.

## Identification

This is a pattern of order capture without order flow. The visible symptoms are shared mailboxes full of orders, administrators who work through a daily batch, stock errors discovered after the sale and confirmations that lag the order. The common assumption is that the volume has grown and more staff are needed. The structural cause is that the website and the back office are separate, so every order crosses the gap by hand.

The Pattern [the hidden cost of re-keying order information](/patterns/the-hidden-cost-of-re-keying-order-information/) covers the cost of the retyping itself. The Pattern [when your website promises what your back office cannot see](/patterns/when-your-website-promises-what-your-back-office-cannot-see/) covers the customer-facing side. This pattern looks at the offline administration that builds up in between.

## Diagnosis

- **Orders arrive as messages.** They land in an inbox or a shop dashboard, not in the accounting or stock system, so a person has to move them.
- **Stock is checked by hand.** The website shows what the shop believes is available, and staff verify it against the real position after the customer has paid or committed.
- **Customer details are retyped.** Names, addresses, VAT numbers and delivery instructions are copied across, and each copy is a chance for a typing error.
- **Documents are printed and carried.** Picking slips, delivery notes and invoices are produced one at a time and passed along physically.
- **Status updates are manual.** Customers ask where their order is, and staff look in three places to answer.
- **Invoices wait.** The invoice is raised after everything else is done, which delays payment. The [SARS information on Value-Added Tax](https://www.sars.gov.za/types-of-tax/value-added-tax/) is a reminder that a registered vendor must issue valid tax invoices, so the details copied across the gap need to be right the first time.

## Commercial impact

The most visible cost is labour. Staff time spent retyping and checking grows in step with order volume, so success demands extra administrators instead of improving margins. The Impact note [orders rekeyed after the sale](/impact/orders-rekeyed-after-sale-fulfilment-risk-cost/) sets out the fulfilment risk.

The second cost is error. A mistyped product code or address leads to a wrong delivery, a return, a credit note and an unhappy customer. Each of these costs more than the original entry would have.

The third cost is customer experience. A customer who ordered in two minutes and waits a day for confirmation notices the contrast. Competitors with connected systems reply instantly, and the customer remembers which business was easier to buy from.

The fourth cost is cash. When invoices follow manual processing, payment dates slip, and the business funds more of its customers' purchases for longer.

The fifth is a limit on growth. Peaks such as month-end, promotions or the festive season overwhelm the office, because every extra order arrives as a task for a person. The business has built a system whose capacity is the typing speed of the back office.

## Common misidentification

The usual response is to hire another administrator, which is sensible in the short term but treats the symptom. A second reflex is to redesign the website, which improves the customer's experience of ordering and does nothing for the work afterwards. A third is to buy a larger platform before mapping the current process, which may reproduce the same gap on a more expensive screen. The problem is the link between systems, not the capacity of the office or the appearance of the shop.

## Possibility

In a better state, an order placed online creates a sales order directly in the business system, reserves stock, produces the picking and delivery documents and raises the invoice at the right moment. Staff handle exceptions: an item out of stock, an address that does not validate, a customer who needs a call. The routine order passes through untouched.

That connection can come from an integrated platform or from a modest automation between two existing tools. Microsoft's [overview of cloud flows in Power Automate](https://learn.microsoft.com/en-us/power-automate/overview-cloud) describes automating repetitive tasks by triggering a series of actions when an event occurs, such as a new item arriving. A new web order is exactly the kind of event that can start a flow in place of an administrator.

The Pattern [why does an order need so many manual touches](/patterns/why-does-an-order-need-so-many-manual-touches/) shows how to count what a single order costs the business in handling.

## Intervention

Map the route of one order first. Then connect the step that wastes most time, and treat the rest as a sequence of small improvements.

## Practical next actions

1. **Trace five recent orders.** Note each step from the website to the invoice, who performed it, how long it took and where information was typed again.
2. **Count the touches and the delays.** Record the number of manual steps per order and the time between order, confirmation, dispatch and invoice.
3. **Connect the biggest gap first.** Usually this is getting the order and customer details into the accounting or stock system without retyping, and it can often be done with an existing integration or a simple automation.
4. **Show real stock online.** Make the website draw on the same stock figures the warehouse uses, or at minimum update them at an agreed frequency, so fewer orders need apologies.
5. **Send automatic status messages.** Confirm the order, then notify the customer at dispatch, so staff are not asked the same question repeatedly.
6. **Define the exceptions.** Decide which orders still need a person, such as out-of-stock items or credit-limit breaches, and route only those to staff.

## Diagnostic questions

- How many times is a typical web order typed or copied by a person before it is invoiced?
- How many hours a week does the office spend moving orders from the website into other systems?
- How often do customers learn that an item is unavailable only after they have ordered?
- How long after the order is the invoice issued?
- What would happen to your office if web orders doubled next month?

## Bottom line

An online order that ends in a mailbox has moved the work from the customer to your staff. Connecting order capture to stock, invoicing and delivery lets routine orders flow through by themselves and leaves people to deal with the exceptions that need judgement.
