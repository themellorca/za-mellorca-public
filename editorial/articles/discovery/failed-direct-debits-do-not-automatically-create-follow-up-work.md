---
hub: discovery
record_id: DISC-173
slug: failed-direct-debits-do-not-automatically-create-follow-up-work
title: Failed direct debits do not automatically create follow-up work
description: A returned debit order is a payment result, not an assigned task. Connect each failure to the customer, invoice and next action before unpaid balances accumulate.
lead: A returned debit order is a payment result, not an assigned task. Connect each failure to the customer, invoice and next action before unpaid balances accumulate.
category: Accounts Receivable & Collections
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Accounts Receivable & Collections
problem_domain: Accounts Receivable & Collections
problem_owner: Finance operations and credit control managers
budget_owner: CFO or finance director
sources:
  - Debit Orders - Payment Association of South Africa (PASA) | https://pasa.org.za/pasa-resources/pasa-debit-orders/
  - Frequently asked questions on DebiCheck - Nedbank | https://personal.nedbank.co.za/bank/digital-banking/needs/manage/nedbank-debicheck/frequently-asked-questions.html
  - Prepare processes and data - Power Automate | https://learn.microsoft.com/en-us/power-automate/process-mining-processes-and-data
  - Receive Stripe events in your webhook endpoint | https://docs.stripe.com/webhooks
related:
  - Recurring invoice failures are handled as isolated exceptions | /discovery/why-recurring-invoice-failures-need-a-reason-code-and-an-owner/
  - Collections activity is not visible to account managers | /discovery/why-account-managers-cannot-see-what-collections-has-already-said-to-the-customer/
  - Cash forecasts ignore real collections workflow states | /discovery/why-cash-forecasts-need-to-know-which-overdue-invoices-are-disputed-promised-or-on-hold/
summary: A returned debit order is a payment result, not an assigned task. Connect each failure to the customer, invoice and next action before unpaid balances accumulate.
layout: plain
---
A finance administrator downloads the debit-order results after the monthly collection run. Some payments succeeded; others came back unpaid. The billing system still shows invoices outstanding, the customer team has its own notes, and credit control is working from yesterday's spreadsheet. Unless the administrator forwards the right lines to the right person, nobody has an assigned action for the failures that have just arrived.

As the customer base grows, remembering those exceptions becomes less reliable. A returned payment can sit untouched while the next billing cycle approaches. Another customer may already have made an alternative payment but still receive a demand. The missing step is specific: the payment result must become follow-up work connected to the correct obligation, with an owner who knows what to do next.

## The problem in plain language

A failed debit order tells the business that an attempted collection did not complete as expected. It does not, by itself, identify who should investigate, which invoice remains unpaid, whether another collection attempt is pending, or what the customer should be told. Those are operational decisions that need an explicit handoff.

The gap often sits between the bank or collection provider and the receivables process. A results file may be available and the accounting balance may be correct, yet no case has been created. A reminder is not necessarily a solution either: an automated message can reach the wrong customer or request the wrong action if it ignores the reason for the return and the latest payment position.

## What the buyer is actually trying to solve

Finance operations wants every failed attempt accounted for. Credit control wants a usable instruction, rather than a list that must first be matched to customers. The CFO wants to know which expected receipts remain uncertain and whether somebody is resolving them.

The first objective is therefore complete, accurate case creation. For each relevant failure, the business should have either an owned next action or an explained reason why no new action is needed. Deciding which case comes first is a later step, covered in [why collections teams need a reliable priority queue](/discovery/collections-teams-chase-customers-without-a-priority-queue/). A well-sorted queue cannot help with failures that never entered it.

## Evidence and system mechanism

### Mandate approval and payment completion are different

The [Payments Association of South Africa's debit-order guidance](https://pasa.org.za/pasa-resources/pasa-debit-orders/) identifies three types used in South Africa: DebiCheck, Registered Mandate and EFT debit orders. It explains that a consumer electronically approves a DebiCheck mandate with their bank and that collections are checked against the agreed conditions. This is a verifiable local distinction: mandate approval concerns the authority and parameters for collection, rather than proof that a particular invoice has been paid.

[Nedbank's DebiCheck FAQ](https://personal.nedbank.co.za/bank/digital-banking/needs/manage/nedbank-debicheck/frequently-asked-questions.html) also addresses what happens when an account has insufficient funds, including account tracking in the arrangement it describes. The operational lesson is to establish the actual status supplied by the business's own bank or provider. A collection still being tracked, a final unpaid result and a later successful collection should not all trigger the same customer message. Do not assume another provider uses Nedbank's particular timing or follow-up arrangement.

### Join the attempt to the obligation

The collection instruction needs a reference that can be matched back to the customer, mandate and invoice or instalment. The incoming result then needs its own event identity, reason, amount and timing. One customer may have several obligations, and one obligation may have several attempts. Matching only by customer name or amount can connect a failure to the wrong balance.

Microsoft's [guidance on preparing process data](https://learn.microsoft.com/en-us/power-automate/process-mining-processes-and-data) describes using a case identifier, activities and timestamps to understand a process. Applied here, that means retaining the sequence from collection instruction to result, investigation and resolution. A field that simply says "unpaid" cannot explain when the failure arrived or whether anyone acted on it.

### Delivering a result is not completing the handoff

The result may arrive through a file, a portal or an automated event. Each channel still needs a reliable route into the follow-up process. [Stripe's webhook documentation](https://docs.stripe.com/webhooks) illustrates two integration hazards: events can arrive out of order, and an event can be delivered more than once. This is an example of event-handling behaviour, not a description of South African debit-order clearing or a recommendation to use Stripe for it.

The practical design should allow the same result to be received again without creating another customer demand. It should also check the latest payment position before acting on a late failure notification. The wider risk is explained in [how automation retries create duplicate customer or financial actions](/discovery/automation-retries-create-duplicate-customer-or-financial-actions/).

## Why this becomes urgent

Customer growth increases both successful collections and the number of exceptions that must be handled. A process that worked when one administrator recognised every account can break when multiple people process returns, different branches collect payments, or a new provider changes the format of the results file.

The warning signs are operational: somebody asks whether all returns were processed and receives no definite answer; a customer calls before credit control knows about the failure; or the unpaid list grows after a collection run without a corresponding increase in assigned work. The finance operations manager should own the handoff, with credit control involved in deciding actions and the CFO sponsoring changes that affect cash visibility.

## Economic consequence

Unnoticed failures delay the point at which the business can investigate or obtain payment. That may postpone cash receipts, increase the work needed to recover them and leave cash forecasts dependent on collections that did not succeed. Repeated unresolved balances can also increase exposure to non-payment, although a returned debit order alone does not establish that a customer will default.

Consider an illustrative R4,500 monthly service invoice. A return arrives, but nobody receives an assigned case. Until someone investigates, the business does not know whether it is dealing with a temporary funding problem, an incorrect detail, a customer query or an already resolved payment. The example demonstrates uncertainty, not a measured loss or a prediction of recovery.

Collections labour also increases when staff repeatedly download, compare and distribute the same result. Customer disputes can arise if a later payment is overlooked. The connection between payment allocation and inappropriate reminders is explored in [why paying customers still receive overdue-invoice reminders](/discovery/why-paying-customers-still-get-overdue-invoice-reminders/). Faster case creation should improve control without turning every failure into an immediate demand.

## Root cause

The underlying problem is usually fragmented information combined with an undefined transfer of responsibility. Billing knows what is due. The collection provider knows the result of an attempt. Customer service knows what the customer has said. Credit control may know none of those details when its next worklist is produced.

Common gaps include a collection reference that is not stored against the invoice; reason codes left untranslated in a file; no distinction between pending and final outcomes; and an email sent to a shared inbox without ownership. Another gap is treating the download itself as completion. Someone can receive the file successfully while several rows remain unmatched and no follow-up has begun.

Fixing the gap requires agreement on what counts as a completed handoff. An assigned case with a next action is different from an alert, and an alert is different from an acknowledged file transfer.

## Practical intervention

Start with one collection stream and trace a recent unpaid attempt from the provider result to its eventual resolution. Agree the identifiers and statuses before adding automatic customer contact.

### Practical next actions

1. **Capture the complete result.** Preserve the provider's attempt reference, result time, amount and original reason. Record when the business received it. Keep incomplete or unreadable inputs visible rather than quietly dropping them.
2. **Match it to the right obligation.** Link the attempt to the customer and invoice or instalment using stable references. Where the result covers several obligations, retain the allocation. Send uncertain matches to an investigation queue instead of guessing.
3. **Classify the outcome.** Use the provider's definitions to distinguish a final failure from a collection still pending or being tracked. Keep the original code alongside the business explanation. An unknown code needs investigation, not a default demand.
4. **Create one owned case.** Give the case an accountable person or team, a next action and a due time suited to the situation. A repeated notification should update the same case where appropriate. A genuinely new collection attempt should remain distinguishable from a duplicate delivery.
5. **Check before contacting the customer.** Confirm the current balance, recent receipts, any payment arrangement and relevant customer query. Use the appropriate authorised process for mandate or account-detail changes. Case automation should not silently initiate another debit or suspend a service.
6. **Close the loop.** Record the outcome and reconcile it with the ledger. If payment arrives later, update the case and stop obsolete follow-up. If it remains unresolved, escalate with the original payment evidence and the history of actions.

The minimum useful case is compact:

| Information | Purpose |
| --- | --- |
| Customer and obligation reference | Establishes what remains unpaid |
| Collection attempt and result | Separates the attempted payment from the obligation |
| Original reason and business explanation | Supports the appropriate investigation |
| Current payment position | Prevents action on an obsolete balance |
| Owner, next action and due time | Turns a result into executable work |

Check completeness independently of the case-creation automation. Each received failure should appear in an owned case, an explained duplicate, a pending-status category or a visible unmatched exception. Compare those outcomes with the provider results, and investigate gaps. Test later success, repeat delivery, unknown reasons and alternative payments before expanding the workflow.

## Diagnostic questions

- Can you follow one unpaid attempt from the provider result to its invoice, customer and current owner?
- What happens to a result that cannot be matched automatically?
- How does the team distinguish a pending collection from a final unpaid result?
- Can the same file be processed twice without creating two customer messages?
- Does a later receipt close or update the relevant follow-up case?
- Who investigates a failure with an unfamiliar reason code?
- Can finance show which received failures have no assigned next action?

## What good looks like

After a collection run, finance can account for every relevant failure without reconstructing the process from inboxes. Each unresolved obligation has an owner, a reason and a next action. Unmatched results are visible, pending collections are labelled accurately, and later receipts update the worklist.

The CFO can see outstanding value alongside case age and action status, without treating expected collection as confirmed cash. Credit control spends its time investigating and resolving cases rather than assembling them. Customers receive a message based on their current position, with enough context to respond, rather than a generic demand generated from an old failure.

## Where Mellorca fits

Mellorca can help define the failed-payment handoff, responsibilities and exception process through [Digital Operations Improvement](/services/digital-operations-improvement/). [Systems Implementation & Integration](/services/systems-implementation-integration/) can connect collection results with billing, customer information and the receivables ledger. [Business Automation & AI Workflows](/services/business-automation-ai-workflows/) can create and route cases, flag uncertain matches and prepare appropriate next actions within agreed controls.

The useful outcome is an owned, traceable response to each unresolved failure. Automatic collection, customer communication and service decisions should remain governed by the business's mandates, policies and approval requirements.

## Method note

The payment facts come from PASA and Nedbank's public guidance, consulted on 12 October 2026. Microsoft and Stripe provide examples of process-data and event-handling mechanisms; they do not establish the behaviour of a particular South African collection provider. The proposed workflow is an operating design derived from those distinctions, rather than a claim that every business or bank uses the same process. The rand amount is illustrative, no client outcome is implied, and no recovery benchmark is proposed.
