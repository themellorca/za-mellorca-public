---
hub: impact
record_id: CPS-085
slug: support-cannot-see-sales-promises-handover-gaps-service-failure-cost
title: What Sales Promised: The Cost of Support Working Blind
description: When support cannot see what sales agreed with a customer, every promise becomes a surprise, and the cost lands in rework, credits, escalations and lost renewals.
lead: When support cannot see what sales agreed with a customer, every promise becomes a surprise, and the cost lands in rework, credits, escalations and lost renewals.
category: Customer Service
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Customer Service
commercial_domain: Customer service and sales operations
primary_pain: Support teams cannot see what sales promised the customer, so handovers fail and the customer experiences the gap as a service failure.
primary_cost_mechanism: Rework, goodwill credits, escalation time, delayed onboarding and lost renewals caused by commitments that support only discovers when the customer complains.
sources:
  - Dynamics 365 Sales documentation | https://learn.microsoft.com/en-us/dynamics365/sales/
  - https://help.salesforce.com/s/articleView?id=sales.sales_core_opportunity_notes.htm | https://help.salesforce.com/s/articleView?id=sales.sales_core_opportunity_notes.htm
  - Consumer Protection Act 68 of 2008 - South African Government | https://www.gov.za/documents/consumer-protection-act
related:
  - "Just Checking on My Order": The Labour Cost of Manual Progress Updates | /impact/manual-customer-progress-updates-status-message-labour-cost/
  - Phone Calls Recorded on Notepads: The Cost of Incomplete Customer Records | /impact/phone-call-notes-not-recorded-in-shared-system-cost/
  - Leads Nobody Has Touched: The Revenue Cost of Invisible Follow-Up Failure | /impact/untouched-leads-invisible-follow-up-failure-revenue-cost/
summary: When support cannot see what sales agreed with a customer, every promise becomes a surprise, and the cost lands in rework, credits, escalations and lost renewals.
layout: plain
---
## The promise nobody wrote down where support could see it

A salesperson at a Cape Town facilities company closes a contract with a retail client. During the last call she agrees that the first site visit will happen within 48 hours, that the client's two stores will be billed separately, and that a named supervisor will be the contact. None of this appears in the signed quote. It lives in her notebook, a WhatsApp message and her memory of the call.

Three days later the support team receives a ticket from an irritated store manager asking why nobody has arrived. The support agent opens the customer record and sees a company name, a product code and a start date. There is nothing about a 48-hour promise, nothing about separate billing and no named supervisor. The agent apologises for something she did not know existed, the salesperson is out at another client, and a conversation that should have been routine becomes a complaint.

This article is about that gap: support teams that cannot see what sales promised the customer. It is related to, but different from, [customers repeating information across disconnected records](/impact/pain-of-customers-repeating-information-disconnected-records/), which looks at facts the customer has already given. Here the missing item is a commitment the business made, and the customer reasonably expects it to be honoured.

## What kinds of promises go missing

Most sales conversations produce more than the formal quote captures. The extra items are usually the ones the customer cares about most, because they were the reason the customer said yes.

- **Timing promises.** A first delivery, installation or response date mentioned in passing on a call.
- **Scope concessions.** A feature, a free service or a special configuration offered to close the deal and not added to the order.
- **Price and billing arrangements.** Split invoices, a delayed first invoice, a discount tied to volume or an agreed payment date.
- **Service levels.** A quicker response time, a named contact or an out-of-hours number that exists only in the salesperson's email.
- **Known customer concerns.** The client mentioned a previous supplier who failed them, and what went wrong, but the person now serving them has never heard it.

None of these requires bad faith. The salesperson believed she was passing the information on. The support team assumed the order contained everything. The customer assumed the company was one organisation with one memory.

## Why the information does not travel

The handover from sales to support usually depends on habit rather than design. A few common patterns explain why details disappear:

- **Two systems.** Sales works in a CRM or spreadsheet, while support works in a ticketing tool or a shared inbox. Neither shows the other's notes.
- **Notes live in the wrong place.** Calls are summarised in personal email, chat messages or private notebooks that no colleague can search.
- **The handover is a conversation.** A five-minute chat in the corridor passes on what the salesperson remembers to say, on the day she remembers to say it.
- **No agreed minimum.** Nobody has defined what a handover must contain, so quality depends on who is closing and how busy the month is.

Modern CRM platforms are built to hold a shared record of the customer relationship, with notes and activities attached to the opportunity so that other teams can see them. The documentation for [Dynamics 365 Sales](https://learn.microsoft.com/en-us/dynamics365/sales/) describes how sales activity is organised in one place, and Salesforce documents how [opportunity notes](https://help.salesforce.com/s/articleView?id=sales.sales_core_opportunity_notes.htm) are kept against a record. The tools are rarely the limit. The gap is that the notes are not written, or are written where support does not look.

## Where the cost shows up

The cost of a poor handover is spread across several budgets, which is why it is rarely added up.

### Rework and corrections

When an agent discovers a promise only after the customer complains, the work is done twice: once the wrong way and once the way the customer was told to expect. Billing is a common example. An invoice sent to the wrong entity must be cancelled, reissued and explained.

### Goodwill credits and concessions

The quickest way to settle an irritated customer is often a discount or a free month. Suppose a business grants a R2,000 credit on one in every ten new accounts because of a missed commitment. Across 200 new customers a year, that is R40,000 given away for problems that a single shared note could have prevented. These figures are illustrative, so replace them with your own.

### Escalation time

Support agents who cannot answer must find the salesperson, who is usually in front of another customer. Managers get pulled in. A ten-minute question becomes a day of messages, and the customer waits throughout. The time spent searching several places for a basic answer is a close cousin of the cost described in [customers waiting while staff search several systems](/impact/customers-waiting-staff-search-several-systems-service-payroll-cost/).

### Delayed onboarding and slower revenue

If the first weeks go badly, the customer may hold back payment, reduce the scope or disengage before the product has delivered any value. The business has already paid the cost of winning the account and now pays again to rescue it.

### Renewal and reference damage

A customer who found out that a promise was ignored remembers it at renewal time. A salesperson's credibility inside the client is also affected, and the next deal with that client becomes harder.

## Why this is more than an internal annoyance

Customers judge a business by what they were told, not by which department told them. In South Africa, the Consumer Protection Act sets out expectations about the quality of services and the accuracy of information given to consumers. The text of the [Consumer Protection Act](https://www.gov.za/documents/consumer-protection-act) is published on the government website, and anyone selling to individual consumers or small businesses covered by the Act should read how it treats service quality and clear communication. Even outside the Act's scope, a written promise that support did not know about still reads as the business breaking its word.

## How to see the size of the problem

You do not need new software to find out whether this is costing you. Pull the last 30 complaints or escalations from support and mark the ones where the first sentence from the customer was a version of "but I was told". Then for each, record:

- what was promised and who made the promise;
- whether it appeared in the quote, order or CRM;
- the hours spent resolving it and any credit given.

If a third of the cases trace back to an unrecorded commitment, you have both the size of the problem and the clearest places to fix it. Related patterns, such as requests that nobody owns in [support requests without clear owners](/impact/support-requests-without-clear-owners-cost/), often turn up in the same review.

## Practical next actions

1. **Define a minimum handover.** Agree one page that every closed deal must carry to support: promised dates, billing arrangements, named contacts, special terms and known customer concerns.
2. **Record promises where support looks.** Put notes against the customer record in the CRM or ticketing tool, not in personal email or chat, and give support read access to the sales notes.
3. **Make the handover a gate.** Do not mark a deal as won, or start onboarding, until the handover page is complete and a support owner has confirmed they have read it.
4. **Hold a short kick-off for larger accounts.** A fifteen-minute call between the salesperson and the support lead on the first working day removes most surprises and gives the customer one voice.
5. **Track "I was told" cases.** Tag tickets where the customer cites a promise, review them monthly and add the recurring promise types to the handover page.
6. **Close the loop with sales.** Share the monthly credit and rework total with the sales team so that a missing note carries a visible cost.

Where a handover relies on one person's memory, the exposure is the same as in [poor handovers when a colleague is absent](/impact/catching-up-after-absence-poor-handover-cost/). In both cases, the fix is to move the knowledge out of a head and into a record that anyone on the team can read.

## A better position to start from

A business that passes promises to support does not need extra headcount or an expensive system. It needs one agreed set of fields, one place to read them, and one person who confirms they were received. The result is that the customer's first experience after saying yes matches what they were told before saying yes, and the support team starts each relationship informed, not defensive.
