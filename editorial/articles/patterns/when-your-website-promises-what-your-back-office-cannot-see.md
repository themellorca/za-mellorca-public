---
hub: patterns
record_id: PAT-039
slug: when-your-website-promises-what-your-back-office-cannot-see
title: When Your Website Promises What Your Back Office Cannot See
description: The website shows stock that has already sold, quotes lead times the factory cannot meet and collects orders that someone re-types into the accounting system. When the website runs as a separate island, every online promise depends on a manual bridge to the back office.
lead: The website shows stock that has already sold, quotes lead times the factory cannot meet and collects orders that someone re-types into the accounting system. When the website runs as a separate island, every online promise depends on a manual bridge to the back office.
category: Disconnected Systems & Integration Friction
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Disconnected Systems & Integration Friction
pattern_family: Disconnected Systems & Integration Friction
observable_condition: The website shows stock, prices, lead times or availability that differ from the back office, and online orders, bookings or enquiries are re-captured by hand before they can be fulfilled or billed.
primary_identification: A website operating as a separate island from back-office systems, with information flowing between them only through manual re-capture and periodic updates.
commercial_value_dimensions: Revenue, customer experience, capacity, speed and scalability
sources:
  - Webhooks | https://woocommerce.com/document/webhooks/
  - About webhooks | https://shopify.dev/docs/apps/build/webhooks
related:
  - When Automation Stops at the Edge of Each System | /patterns/when-automation-stops-at-the-edge-of-each-system/
  - When the Next Step Waits for Someone to Check Another System | /patterns/when-the-next-step-waits-for-someone-to-check-another-system/
  - When Staff Get Blamed for Errors Their Systems Created | /patterns/when-staff-get-blamed-for-errors-their-systems-created/
summary: The website shows stock that has already sold, quotes lead times the factory cannot meet and collects orders that someone re-types into the accounting system. When the website runs as a separate island, every online promise depends on a manual bridge to the back office.
layout: plain
---
## Observable condition

A customer orders three units online. The website said they were in stock. The warehouse has one; the other two were sold over the counter yesterday, and the website's stock figure is updated from a spreadsheet once a week. Someone has to phone the customer, apologise and offer a partial delivery or a refund.

Behind the scenes, every online order is printed or forwarded by email to the office, where an administrator types it into the accounting system to create an invoice and into the dispatch system to create a picking slip. Contact form enquiries arrive in a shared inbox and are copied into the CRM when someone has time. Online booking requests are checked against a paper diary before they are confirmed.

From the outside, the business looks digital. Customers can browse, order and book at any hour. From the inside, the website is an order-taking front with a manual bridge to the systems that actually run the business.

An illustrative example: a Cape Town outdoor-equipment retailer with two stores and around twenty-five staff grew online sales steadily over several years. By the time online orders made up a large share of turnover, two staff members spent most of their day re-capturing web orders and reconciling stock between the store tills and the website. Weekend orders waited until Monday, and out-of-stock cancellations were a steady source of poor reviews.

## Realisation

A website makes promises on the business's behalf: this item is available, this price applies, this slot is free, delivery will take three days. Each promise is only as good as the information behind it. When that information comes from back-office systems through a manual or periodic update, the website is always describing the business as it was at the last update, not as it is.

The same gap runs in the other direction. Every order, booking or enquiry the website collects has to reach the back office before anything happens. If that journey depends on a person, the website's speed ends at the inbox.

Commerce platforms are designed to close both gaps. Shopify's inventory tracking keeps a stock count per product and, by default, stops customers buying items that are out of stock, unless the merchant chooses to continue selling at zero. That protection only works if the stock count reflects sales made elsewhere. Both WooCommerce and Shopify provide webhooks that notify other systems when orders and products are created or updated, so that back-office systems can stay in step without someone re-typing.

**Realisation prompt:** how old is the stock or availability information your website is showing customers right now?

## Identification

This is a pattern of a website operating as a separate island: the website and the back-office systems each hold their own version of products, prices, stock, availability and orders, and information passes between them through manual re-capture and periodic updates. The visible symptoms are online promises that cannot be kept and administrative effort that grows with online sales. The common assumption is that the website is a marketing and sales channel, and the back office is a separate operational concern. The structural cause is that nobody designed the end-to-end process across both.

The data side of this problem is explored in the Discovery page on [why inventory numbers disagree across systems](/discovery/why-inventory-numbers-disagree-across-systems/). The labour side is close to [why information has to be copied from one system to another](/patterns/why-information-has-to-be-copied-from-one-system-to-another/).

## Diagnosis

- **The website was built as a project, not a process.** It was commissioned by marketing or from an agency, scoped around design and content, and handed over without integration to stock, billing or scheduling.
- **Different owners on each side.** Marketing owns the website, operations owns fulfilment, finance owns billing. Nobody owns the flow from online order to delivered and invoiced.
- **Updates run on a schedule people set.** Stock and price uploads happen weekly or when someone remembers, so the website drifts between updates.
- **Orders arrive as messages, not records.** The back office receives an email or a printout rather than a structured order in its own system.
- **Failures are invisible.** Where a connection exists, failed deliveries may go unnoticed; WooCommerce, for example, documents that a webhook is disabled after repeated delivery failures.

## Commercial impact

The commercial value at stake is revenue, customer experience, capacity and scalability.

Orders for stock that is not there lead to cancellations, refunds and lost customers, often in public reviews. Prices that differ between the website and the store create disputes and margin leakage. Re-capturing online orders adds labour that grows in step with online sales, so the channel that should scale most easily becomes one that needs more administrators. Orders that arrive after hours wait for office hours, which undermines the very convenience the website offers.

Where forms or connections fail without anyone noticing, revenue is lost before anyone knows it existed; the Impact page on [website forms failing silently](/impact/website-forms-failing-silently/) explores that risk.

## Common misidentification

The usual response is to redesign the website, change e-commerce platform or add more administrators. A new website with the same manual bridge reproduces the problem with a better look. More administrators absorb the work but raise the cost of every online sale.

Another misreading is that the problem belongs to the web agency. Often the agency delivered exactly what was asked: a website. The connection to stock, billing and scheduling was never part of the brief.

## Possibility

In a better state, the website and back office share the same core information, and online activity creates records in the right systems automatically. Stock sold in store reduces the stock shown online within minutes. An online order becomes an order in the fulfilment system and an invoice in accounting without being re-typed. Bookings check real availability. People handle exceptions such as payment issues, special requests and failed transfers, rather than routine transcription.

For the outdoor retailer, that meant connecting the store tills and website to a single stock count and sending online orders straight into the dispatch queue, with a daily check that every web order had arrived.

## Intervention

1. **Map the journey end to end.** Follow an online order, booking or enquiry from the moment it is submitted to delivery, invoice and payment. Note every manual step.
2. **List the promises.** Identify what the website tells customers about stock, price, availability and timing, and where that information comes from.
3. **Name an owner for the flow.** One person responsible for the whole journey across website and back office.
4. **Connect the highest-value flow first.** Usually orders into fulfilment and billing, or stock into the website. Use the platforms' own integrations and notifications where they exist.
5. **Remove the drift.** Replace scheduled uploads with automatic updates for stock and prices that change often.
6. **Watch the connection.** Check daily that the number of online orders matches the number received in the back office, and route failures to the owner. The Insight on [what a good system integration actually does](/insights/what-a-good-system-integration-actually-does/) sets out what to expect.

## Practical diagnostic questions

- How many times is a typical online order typed or copied before it is delivered and invoiced?
- How often does the website sell something you do not have or cannot deliver on time?
- Who owns the process from online order to payment, across both website and back office?
- What happens to orders and enquiries placed after hours?
- Would doubling online sales require more administrative staff?

## Bottom line

A website that is not connected to the back office makes promises it cannot check and collects work it cannot pass on. The gap is filled by people re-typing orders and reconciling stock, and that cost grows with every online sale. Designing the journey from website to back office as one process, and connecting it where the value is highest, lets online growth scale without a matching rise in admin.
