---
hub: insights
record_id: INS-214
slug: how-to-design-retries-without-creating-duplicate-work
title: How to design retries without creating duplicate work
description: How to design safe retries in business automations using idempotency, state checks, unique operation keys, duplicate prevention and clear recovery rules.
lead: A retry is meant to recover from failure. If it repeats a business action that already succeeded, it can create a second invoice, duplicate notification, repeated order or conflicting update. Safe retries therefore require business-state design, not just another attempt.
category: Business Automation
published_date: 2026-09-03
updated_date: 2026-10-02
eyebrow: Article
page_title: How to Design Retries Without Creating Duplicate Work | Mellorca
tags:
  - Automation Reliability
  - Retries
  - Idempotency
cta_label: Start a conversation
cta_href: /contact/
side_title: Topics
sources:
  - references-details-empty | https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/
  - Retry pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/retry
  - Idempotent Consumer Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/idempotent-consumer
  - Idempotent requests - Stripe API Reference | https://docs.stripe.com/api/idempotent_requests
related:
  - How silent automation failures damage operations | /insights/how-silent-automation-failures-damage-operations/
  - How to design automations that people can understand | /insights/how-to-design-automations-that-people-can-understand/
  - Why automation documentation matters | /insights/why-automation-documentation-matters/
---
Retries are one of the most common reliability mechanisms in automation. A connector times out, an API returns a transient error, a network request fails or a downstream platform is briefly unavailable, so the workflow tries again. That sounds simple until the first attempt actually completed but the caller never received the confirmation.

At that point the automation does not know whether it is recovering from a failed action or repeating a successful one. The technical failure and the business outcome are no longer the same thing.

> A safe retry answers two questions: should this action run again, and how will we prove that it has not already happened?
>
> A safe retry answers two questions: should this action run again, and how will we prove that it has not already happened?

## The commercially meaningful problem

Duplicate work is not merely untidy data. It can create customer confusion, extra reconciliation, duplicate financial activity, inventory mismatches, repeated approvals and manual investigation. The larger the downstream consequence, the less acceptable a blind retry becomes.

This is why automation reliability has to be designed around the business outcome. Mellorca’s earlier article on [who watches the automations](/insights/who-watches-the-automations/) focuses on observability. Retry design is the next layer: once a failure is detected, recovery must not create a second problem.

Consider a mid-sized online retailer in Durban that uses an automation platform to push paid web orders into its accounting system as invoices. One Friday the accounting system responds slowly. The connector waits, gives up, and retries three times. All four requests eventually succeed. On Monday the finance team finds four invoices for the same order, two customers have received duplicate payment reminders, and the stock report shows items allocated that were never sold. Nothing was “down” for long. The retry policy simply had no way of knowing that the first attempt had worked. We describe this failure in [when automation retries create duplicate customer or financial actions](/discovery/automation-retries-create-duplicate-customer-or-financial-actions/).

## Warning signs that retries are creating duplicates
- Finance periodically finds duplicate invoices, credit notes or payments and cannot explain them.
- Customers occasionally receive the same email or SMS twice.
- Duplicate tickets or tasks appear after a known outage at a supplier.
- The automation platform’s run history shows several attempts for one trigger, all marked successful.
- Staff have an informal “check for duplicates” step after busy periods.


## Start by separating read operations from side effects

Some operations are naturally safer to repeat. Reading a customer record or checking a status generally does not change the world. Creating an invoice, sending a payment instruction, issuing a refund, creating an order, changing a stock quantity or dispatching a message does.

For every automated step, classify whether it has an external side effect. If it does, define what makes one business operation unique. That may be an order number, transaction reference, workflow instance, customer-and-period combination or another stable operation key.

Microsoft’s architecture guidance makes the same distinction: an idempotent operation is inherently safe to retry, but otherwise a service might receive and process a request successfully, fail to send its response, and then receive the same request again from retry logic that assumes the first was lost.

## Use idempotency where the platform supports it

Idempotency means repeating the same request does not create additional side effects. AWS documents this pattern directly: a request can include a caller-provided client token so that a retry of the same operation returns the original result rather than performing the action again. AWS also describes rejecting a request that reuses a token with different parameters, which protects against accidental misuse.

Payment platforms commonly offer the same mechanism. Stripe’s API documentation, for example, describes an idempotency key sent with a create or update request; the platform saves the result of the first request for that key and returns the same result to later requests with the same key, and it errors if the parameters do not match the original.

The principle is portable even when the platform uses different terminology. Before calling a side-effecting API, ask whether it supports an idempotency key, request identifier or equivalent duplicate-prevention mechanism. If it does, use a stable key derived from the business operation, not a new random value on every retry. A key regenerated on each attempt defeats the purpose, because every retry then looks like a new request.

## When the platform is not idempotent, make the workflow state-aware

Many business applications do not expose perfect idempotency. In that case, the workflow needs its own state check. Before creating something again, verify whether the intended outcome already exists.

For example, before creating an invoice, search for the business’s unique invoice reference. Before sending a customer onboarding email, check whether the message event has already been recorded. Before creating a service ticket, check whether a ticket for the same triggering event already exists.

The check must use a reliable key. Matching on vague text, timestamps or names is usually too weak for business-critical duplicate prevention.

Microsoft’s [Idempotent Consumer pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/idempotent-consumer) adds a useful refinement for steps that call external systems: record the operation key as “in progress” before the external call, then mark it “completed” with the outcome. On a later attempt, a completed record means skip; an in-progress record means a previous attempt may have partly finished, so reconcile before writing again or route the case to a person.

## Do not treat every error as retryable

Retries are useful for temporary failures such as timeouts, rate limits and short service interruptions. They are usually harmful when the input is invalid, the user lacks permission, a required field is missing or a business rule rejects the action. Repeating a permanent error five more times only creates delay and noise.

Classify failures into at least three groups:

| Failure type | Examples | Response |
|---|---|---|
| Retryable | Rate limit, temporary unavailability, busy service | Retry with delay, within a limit |
| Non-retryable | Invalid data, missing field, permission denied, business rule rejected | Stop and route to a person with the reason |
| Uncertain | Timeout after the request was sent, connection dropped mid-response | Check state before any further write |

The uncertain group matters because it includes cases where the caller does not know whether the remote system completed the action. Those cases should trigger a state check before another write.

## Use bounded retries and backoff

An automation should not hammer a failing service indefinitely. Define a maximum number of attempts, increasing delay between attempts where appropriate, and a point at which the workflow stops retrying and escalates.

Rate limits are a good example. Immediate repeated attempts can make the problem worse; Microsoft’s retry guidance warns that an aggressive policy with minimal delay and many attempts can further degrade a busy service. A bounded retry policy gives the external platform time to recover and gives the business a predictable failure path. For why rate limits produce such patchy symptoms, see [why API rate limits create intermittent business failures](/discovery/why-api-rate-limits-create-intermittent-business-failures/).

Watch for layered retries too. If an automation platform retries a step and the connector inside it also retries, one failure can become many attempts. Decide which layer owns retries and let the others fail fast.

## Record enough evidence to reconstruct what happened

A retry policy is difficult to trust if nobody can tell which attempt succeeded. Record the workflow instance, operation key, attempt number, request time, response, resulting external identifier and final state. Do not log sensitive information unnecessarily, but preserve enough operational evidence to answer whether the business action happened. Microsoft suggests logging early failed attempts as informational and only the final failure as an error, so operators are not flooded with alerts for problems that resolved themselves.

This also supports the thinking in [what service levels make sense for business-critical automations](/insights/what-service-levels-make-sense-for-business-critical-automations/). Recovery time is only meaningful when recovery does not compromise data integrity.

## A practical retry decision sequence
1. Did the failed step have a side effect?
2. Is the error genuinely transient?
3. Does the target support idempotency or a unique request key?
4. If not, can the workflow reliably check whether the outcome already exists?
5. What is the maximum safe retry count and delay?
6. What should happen when the retry limit is reached?
7. What evidence will show which attempt produced the final outcome?


## What to do first

List your automations that create invoices, payments, orders, stock movements or customer messages. For each, check three things: what the retry setting is, whether a stable business key is passed or checked, and where a failure goes after the last attempt. Fix the financial steps first. Where the last attempt simply disappears, add a [failure path](/insights/why-every-automation-needs-a-failure-path/) before tuning anything else.

## What better looks like

A mature automation does not equate resilience with persistence. It retries only when appropriate, identifies each business operation uniquely, prevents duplicate side effects, checks state when the result is uncertain and escalates cleanly when recovery cannot be completed safely.

The result is an automation that can fail without turning one incident into a reconciliation project.
