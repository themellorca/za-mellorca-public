---
hub: patterns
record_id: PAT-327
slug: when-your-website-is-up-but-the-business-process-behind-it-is-down
title: When Your Website Is Up but the Business Process Behind It Is Down
description: When uptime monitoring says the website is fine but enquiries, payments or bookings never reach the business, the failure sits in the chain behind the page. Monitoring customer journeys end to end, with named owners, protects revenue that otherwise disappears silently.
lead: When uptime monitoring says the website is fine but enquiries, payments or bookings never reach the business, the failure sits in the chain behind the page. Monitoring customer journeys end to end, with named owners, protects revenue that otherwise disappears silently.
category: Cloud, Infrastructure & Reliability
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Cloud, Infrastructure & Reliability
pattern_family: Cloud, Infrastructure & Reliability
observable_condition: The website is reported as up, but enquiries, payments or bookings started on it do not reach the business, and customers report the problem first.
primary_identification: Business-transaction visibility problem: website availability is monitored but completion of customer transactions is not.
commercial_value_dimensions: revenue protection, customer experience, cash flow, resilience, detection time
sources:
  - Google SRE monitoring ditributed system - sre golden signals | https://sre.google/sre-book/monitoring-distributed-systems/
  - Application Insights availability tests - Azure Monitor | https://learn.microsoft.com/en-us/azure/azure-monitor/app/availability
  - Synthetic monitoring (canaries) - Amazon CloudWatch | https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html
related:
  - Why Backups Do Not Equal Business Resilience | /patterns/why-backups-do-not-equal-business-resilience/
  - Why Does a Small Technical Failure Stop the Whole Business? | /patterns/why-does-a-small-technical-failure-stop-the-whole-business/
  - When Work Goes Missing in the Gap Between Two Systems | /patterns/when-work-goes-missing-in-the-gap-between-two-systems/
summary: When uptime monitoring says the website is fine but enquiries, payments or bookings never reach the business, the failure sits in the chain behind the page. Monitoring customer journeys end to end, with named owners, protects revenue that otherwise disappears silently.
layout: plain
---
## Observable condition

The website is up. The hosting dashboard shows it has been available all month, the pages load quickly and the monitoring service has not sent a single alert. Yet on Tuesday a customer phones to ask why nobody responded to the quote request she submitted on Friday. On Wednesday the accounts team notices that three online payments went through at the bank but the orders never appeared in the system. On Thursday someone realises that bookings made through the website have not reached the diary since a plug-in update the week before.

Nothing was technically down. Every check said the website was working. What had stopped was the business process behind it: the form that should create a lead, the payment confirmation that should create an order, the booking that should reach a calendar. Customers could start the transaction, but the business never finished it.

## Realisation

Most small and mid-sized businesses monitor whether their website responds. That is useful, but it answers a narrow question: can the page be reached? The realisation is that the website is only the front door of a chain of steps that runs through email, forms, payment gateways, integrations, CRMs and accounting systems. Any link in that chain can fail while the front door stays open, and a failure in the chain is often worse than an outage, because nobody knows to look for it. Customers keep submitting, the website keeps thanking them, and the requests go nowhere.

When the failure is eventually noticed, it is usually because a customer complains, which means the business has learned about its own problem from the people it let down.

Realisation prompt: for each thing a customer can do on your website, such as submitting a form, paying or booking, ask how you would know within an hour if it stopped reaching the right person or system. If the honest answer is "when a customer tells us", the process is unmonitored.

## Identification

This is a business-transaction visibility problem: the business monitors the availability of its website but not the completion of the transactions that the website is supposed to start. It is related to the [cost of website forms failing silently](/impact/website-forms-failing-silently/), which examines lost leads, and to [when one unmonitored component can stop a critical service](/patterns/when-one-unmonitored-component-can-stop-a-critical-service/), which looks at hidden technical dependencies. This pattern is about the gap between technical uptime and business completion across every customer-facing transaction.

Site reliability engineering practice draws the same distinction. Google's chapter on [monitoring distributed systems](https://sre.google/sre-book/monitoring-distributed-systems/) separates black-box monitoring, which tests behaviour as users experience it, from white-box monitoring of internal metrics, and argues for alerting on symptoms that users actually feel. For a business, the symptom that matters is not whether the page loads, but whether the customer's request was completed.

## Diagnosis

The visible symptom is customers reporting problems the monitoring never saw. The common assumption is that the website or hosting is unreliable. The structural causes usually sit in the chain behind the website:

- **Monitoring stops at the front door.** Uptime checks request a page and confirm it returns. Nothing tests that a form submission arrives, a payment creates an order or a booking reaches the diary.
- **Hidden dependencies.** Form delivery relies on an email service, payment confirmations rely on a webhook, bookings rely on an integration. Each was set up once and nobody has a list of them. The wider issue is covered in [when nobody knows which services depend on which systems](/patterns/when-nobody-knows-which-services-depend-on-which-systems/).
- **Silent failure by design.** Many website components show the customer a success message once the page has accepted the data, whether or not the next step succeeds.
- **Changes without end-to-end testing.** Plug-in updates, expired credentials, changed email settings or new spam filters break a step, and nobody tests the full journey after the change.
- **Failures routed to nobody.** Where errors are logged, they go to a developer's mailbox or a system log that nobody reads.
- **No business owner for the journey.** Marketing owns the website, sales owns the leads and finance owns payments, but nobody owns the journey from one to the other.

## Commercial impact

The commercial value at stake is revenue protection, customer experience, cash flow and resilience.

- **Revenue.** Leads and orders that never arrive are lost silently, and the loss is not visible in any report.
- **Customer experience.** Customers who were told their request succeeded and then heard nothing are more frustrated than customers who saw an error.
- **Cash flow and reconciliation.** Payments received without matching orders create manual reconciliation work and delayed fulfilment.
- **Reputation.** Missed bookings and unanswered enquiries damage trust in ways a brief outage usually does not.
- **Detection time.** Because the failure is silent, it can run for days or weeks, so the cost grows with every hour it goes unnoticed.

The scale is specific to each business and should be estimated from its own volumes: how many enquiries, orders or bookings arrive through the website on a typical day, and what each is worth.

## Common misidentification

The usual response after an incident is to switch hosting provider or rebuild the website. Neither addresses the problem if the failure was in an email service, a payment webhook or an integration. Another common response is to add more technical monitoring of servers, which still does not answer whether customers' requests are completed. The related challenge for automated processes is examined in [how silent automation failures damage operations](/insights/how-silent-automation-failures-damage-operations/).

## Possibility

In a stronger state, the business monitors its customer journeys, not just its pages. Each critical transaction is tested regularly from start to finish by an automated check that behaves like a customer. Business-level signals are watched: if no enquiries have arrived by mid-morning on a normal weekday, someone is told. Every step in each journey has a known owner, and failures go to a person who acts on them. When something changes, the full journey is tested before it is considered done.

## Intervention

1. **List the customer transactions** your website supports and the systems each one passes through.
2. **Name an owner for each journey,** responsible for it working end to end.
3. **Add end-to-end synthetic checks.** Cloud monitoring services support this directly. Microsoft's documentation on [Application Insights availability tests](https://learn.microsoft.com/en-us/azure/azure-monitor/app/availability) describes recurring tests that can send requests such as form posts and check the response content, and AWS describes [CloudWatch Synthetics canaries](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html) as scripts that follow the same routes and actions as a customer. Simpler tools can submit a test form on a schedule and confirm it arrives.
4. **Watch business signals.** Alert when expected volumes of enquiries, orders or bookings fall to zero during normal hours.
5. **Route failures to people.** Ensure errors from forms, payment webhooks and integrations reach a monitored channel with a named responder.
6. **Test the full journey after every change,** including plug-in updates and changes to email or payment settings.

## An illustrative example

The following is illustrative, not a client case. A Stellenbosch guesthouse group takes most bookings through its website, which feeds a channel manager and a shared diary. Uptime monitoring shows nothing wrong for months. After a plug-in update, bookings stop reaching the diary for nine days, and the problem surfaces only when guests arrive for rooms that are not prepared. The owner adds a daily automated test booking that is checked against the diary, an alert if no bookings arrive in a day during the season, and a rule that every website change ends with a test booking.

## Practical diagnostic questions

- Which customer transactions does your website start, and where do they end?
- How would you know within an hour if one of them stopped completing?
- Does your monitoring test anything beyond whether a page loads?
- Who owns each customer journey end to end?
- Was the full journey tested after the last website change?

## Bottom line

A website that is up is not the same as a business that is open. When monitoring stops at the page, failures in forms, payments and integrations can run silently until customers complain. Monitoring the journey from customer action to business outcome, with clear owners and end-to-end checks, protects revenue that would otherwise disappear without a trace.
