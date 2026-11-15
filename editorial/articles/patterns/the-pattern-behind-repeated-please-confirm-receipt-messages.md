---
hub: patterns
record_id: PAT-097
slug: the-pattern-behind-repeated-please-confirm-receipt-messages
title: The Pattern Behind Repeated “Please Confirm Receipt” Messages
description: When customers and suppliers keep asking whether you got their email, order or document, they are telling you that nothing in your process confirms receipt. Here is how to read the signal and fix it.
lead: When customers and suppliers keep asking whether you got their email, order or document, they are telling you that nothing in your process confirms receipt. Here is how to read the signal and fix it.
category: Customer Experience & Service
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Customer Experience & Service
pattern_family: Customer Service, Status & Self-Service
observable_condition: Customers, suppliers and staff send follow-up messages asking whether an order, proof of payment, signed document or query was received, and someone has to search an inbox and reply by hand.
primary_identification: Missing acknowledgement: incoming items are not registered as records at the point of arrival, so the business cannot confirm receipt without a person searching for the message.
commercial_value_dimensions: Service staff time, customer confidence, duplicate submissions, order and payment delays
sources:
  - Message trace in the new EAC in Exchange Online | https://learn.microsoft.com/en-us/exchange/monitoring/trace-an-email-message/message-trace-modern-eac
  - Automatically create or update records in Dynamics 365 Customer Service | https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/automatically-create-update-records
  - Create a shared mailbox - Microsoft 365 admin | https://learn.microsoft.com/en-us/microsoft-365/admin/email/create-a-shared-mailbox
related:
  - When a Customer Portal Would Not Fix the Underlying Problem | /patterns/when-a-customer-portal-would-not-fix-the-underlying-problem/
  - Why Customers Should Not Need Your Org Chart to Get an Answer | /patterns/why-customers-should-not-need-your-org-chart-to-get-an-answer/
  - The Business Cost of Customers Chasing You | /patterns/the-business-cost-of-customers-chasing-you/
summary: When customers and suppliers keep asking whether you got their email, order or document, they are telling you that nothing in your process confirms receipt. Here is how to read the signal and fix it.
layout: plain
---
## Observable condition

A customer of a Pretoria office furniture supplier emails a purchase order on Monday morning. On Monday afternoon she sends a second email: "Please confirm receipt." On Tuesday she phones reception to ask the same thing. Reception does not know, so they transfer her to sales, who search the shared inbox, find the order and reply that it arrived. Nobody has yet looked at what it contains.

The same thing happens with proof of payment from debtors, signed quotes, supplier delivery notes and job applications. Each sender wants one simple fact: did it arrive, and is somebody dealing with it? The business can only answer by asking a person to look.

Some staff have started replying "Received, thanks" to every message they open. Others do not. Customers have learnt that the only way to be sure is to ask.

## Realisation

A request to confirm receipt is not a courtesy. It is a customer telling you that, from where they sit, your process looks like a black box. They have handed something over and have no evidence that it entered anything other than an inbox.

The realisation is that the business has no intake step. Items arrive, but they are not registered anywhere at the moment of arrival. Until a person opens the message, the item does not exist in any list, queue or system that could confirm it, and the sender knows it.

**Realisation prompt:** search your shared mailboxes for the phrases "confirm receipt", "did you get" and "please acknowledge" over the last month. Count them and note who they came from.

## Identification

This is a pattern of missing acknowledgement at intake. The visible symptom is a steady flow of confirmation requests and duplicate submissions. The common assumption is that some customers are anxious or impatient. The structural cause is that incoming work is held as unread messages rather than as records with a reference number, an owner and a status.

It sits just before the condition described in [why customers keep emailing to ask for an update](/patterns/why-customers-keep-emailing-to-ask-for-an-update/). That pattern is about progress after work starts. This one is earlier and simpler: the sender cannot even tell whether the work has started to exist.

## Diagnosis

- **Inbox as intake.** Orders, payments and documents arrive in a shared mailbox, and the mailbox is the only record that they arrived.
- **No reference number.** The sender gets nothing back they can quote, so every follow-up has to be matched to the original by hand.
- **Acknowledgement depends on habit.** Whether a sender hears back depends on which staff member opened the message and how busy they were.
- **Read is confused with received.** A message marked as read looks handled, even if nobody has acted on it.
- **No way to check delivery.** When a customer insists they sent something, staff cannot tell whether it was delivered, filtered or never sent, so they ask the customer to resend.

## Commercial impact

The commercial value at stake is service capacity, customer confidence and the speed of orders and payments.

Each confirmation request costs a few minutes: find the original, check it, reply. Across sales, debtors and procurement, a business receiving dozens of these a week is paying for hours of searching that adds nothing. The work described in [the cost of customer requests lost in a shared inbox](/impact/customer-requests-lost-shared-inbox-missed-service-work/) often starts here.

Confidence suffers. A customer who has to ask twice whether you received an order starts to wonder whether you will deliver it correctly. Some send the same order twice, which creates a duplicate order risk that someone then has to catch.

Cash is affected. When proof of payment is not acknowledged and not logged, the debtors team may keep chasing a customer who has already paid, which damages the relationship and wastes collection effort.

## Common misidentification

The first misreading is to switch on an automatic reply on the shared mailbox. That tells the sender a message arrived, but it carries no reference and creates no record. The customer is reassured once and then asks again when nothing visible happens.

The second is to ask staff to reply to everything promptly. That relies on the same individual habits that are failing now, and it adds more email without adding a record.

The third is to treat it as a customer behaviour problem. Customers ask because the process gives them no other way to know.

## Possibility

The possibility is an intake step that registers each item as soon as it arrives. The order, payment or document becomes a record with a reference number and an owner. The sender receives an acknowledgement quoting that reference, and staff can find the item by reference rather than by searching.

Many businesses already own the parts. Microsoft's guidance on [automatically creating records from incoming email](https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/automatically-create-update-records) shows how rules can turn messages arriving in a queue into cases, leads or other records without anyone retyping them. Even without a customer service system, a [shared mailbox](https://learn.microsoft.com/en-us/microsoft-365/admin/email/create-a-shared-mailbox) can feed a simple list or tracker through an automated flow.

For the disputed cases, administrators can use [message trace in Exchange Online](https://learn.microsoft.com/en-us/exchange/monitoring/trace-an-email-message/message-trace-modern-eac) to see whether a message was received, delivered, deferred or quarantined, instead of asking the customer to resend. This connects with [the cost of running business processes through email threads](/patterns/the-cost-of-running-business-processes-through-email-threads/), where the inbox is doing work a record should do.

## Intervention

Start with the inbound stream that generates the most confirmation requests. For many businesses that is purchase orders or proof of payment.

Give that stream its own address if it shares one with general enquiries. Then set up an automated step that creates a record for each message: sender, date, attachment and a reference number. Send the sender an acknowledgement quoting the reference and stating what happens next and by when.

Assign an owner for the queue and a target time to act. Review the list daily for items with no owner. Once the first stream works, repeat for the next one.

## Practical next actions

1. Count confirmation requests across your shared mailboxes for one month and group them by type of item.
2. Choose the single inbound stream that produces the most requests and give it a dedicated address.
3. Automatically create a record with a reference number for every message arriving at that address.
4. Send each sender an acknowledgement that quotes the reference and says when they will hear back.
5. Name one owner for the queue and set a target time for first action.
6. Ask your administrator to show the team how to check delivery with message trace before asking a customer to resend.

## Diagnostic questions

- How many times last month did a customer or supplier ask whether we received something?
- Can anyone in the business find a specific order or payment by reference without searching an inbox?
- How often do we receive the same document twice because the sender was unsure?
- Who decides whether an incoming item gets an acknowledgement today?

## Bottom line

Repeated requests to confirm receipt mean your process gives senders no evidence that their item has been registered. Turn incoming messages into records at the moment they arrive, acknowledge them with a reference and give each queue an owner. The chasing stops because the answer is already in the sender's hands.
