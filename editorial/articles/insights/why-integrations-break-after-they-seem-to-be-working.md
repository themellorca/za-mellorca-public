---
hub: insights
record_id: INS-057
slug: why-integrations-break-after-they-seem-to-be-working
title: Why integrations break after they seem to be working
description: Integrations that pass launch testing often fail weeks later. Six late causes, from expiring credentials to duplicate messages, and how to design for them.
lead: Integrations that pass launch testing often fail weeks later. Six late-arriving causes, from expiring credentials to duplicate messages, and how to design for them.
category: Integration
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Integration
sources:
  - Refresh tokens in the Microsoft identity platform - Microsoft identity platform | https://learn.microsoft.com/en-us/entra/identity-platform/refresh-tokens
  - Microsoft Graph throttling guidance - Microsoft Graph | https://learn.microsoft.com/en-us/graph/throttling
  - About Shopify API versioning | https://shopify.dev/docs/api/usage/versioning
  - Receive Stripe events in your webhook endpoint | https://docs.stripe.com/webhooks
related:
  - How to connect systems without creating a fragile web of dependencies | /insights/how-to-connect-systems-without-creating-a-fragile-web-of-dependencies/
  - Why integration projects fail at the handoffs | /insights/why-integration-projects-fail-at-the-handoffs/
  - Point-to-point integrations vs a more maintainable integration architecture | /insights/point-to-point-integrations-vs-a-more-maintainable-integration-architecture/
summary: Integrations that pass launch testing often fail weeks later. Six late-arriving causes, from expiring credentials to duplicate messages, and how to design for them.
layout: plain
---
Most integrations pass their first test. Orders flow from the online shop into the accounting package, new clients created in the CRM appear in the billing system, and the project is signed off. Then, weeks or months later, something quietly stops. Invoices are missing for a day's orders. A customer's address change never reached the warehouse. Someone notices only when a client complains or the month-end numbers do not reconcile.

This pattern is so common that many business owners conclude integrations are inherently unreliable. They are not. What fails is usually not the connection itself but the assumptions it was built on. An integration that works on launch day has been tested against the conditions of launch day. The conditions that break it arrive later, and they are predictable enough to plan for.

> An integration is not a finished object. It is an ongoing agreement between two systems that both keep changing.
>

## Why launch-day testing proves less than it seems

A typical integration test checks that a record created in one system appears correctly in the other. That confirms the mapping and the connection. It does not show what happens when the connection's credentials expire, when one vendor changes its interface, when volumes spike, when messages arrive twice or out of order, or when a person changes a setting without knowing the integration depends on it.

Each of these is a time-based or volume-based condition. None of them can appear during a short test window. That is why integrations seem to work and then break: the failure was always there, waiting for the calendar or the transaction count to reach it.

## The six late-arriving failures

### 1. Credentials and permissions expire or are revoked

Integrations sign in to systems just as people do, and their access has a lifetime. Microsoft's identity platform documentation, for example, sets a default lifetime of 90 days for most [refresh tokens](https://learn.microsoft.com/en-us/entra/identity-platform/refresh-tokens), the long-lived credential an application uses to stay connected. It also lists events that revoke tokens early, including a user changing their password or an administrator revoking a user's sessions.

The practical consequence is common in smaller businesses: an integration is set up using a staff member's own login. It works for months. Then that person changes their password, leaves the company or has their account disabled, and the integration stops with them. The fix is to run integrations on dedicated service accounts with documented ownership, which is the subject of [why automations should not run on personal credentials](/discovery/why-automations-should-not-run-on-personal-credentials/).

### 2. The vendor changes the interface

Software-as-a-service vendors update their APIs on their own schedules. Shopify's developer documentation states that it releases a new API version every three months and supports each stable version for at least twelve months. If an app keeps calling a version that is no longer available, Shopify responds using the oldest supported version instead. That is a sensible design, but it means an integration can begin receiving slightly different data without anyone changing a line of code on the business's side.

Version changes rarely cause a dramatic outage. They are more likely to cause a field to arrive empty, a status to be named differently or a new value to be ignored. The integration still "runs", but the data it moves is no longer quite right. Warning signs are discussed in [APIs that change without downstream teams being warned](/discovery/apis-change-without-downstream-teams-being-warned/).

### 3. Volume reaches a limit nobody tested

Most platforms limit how many requests an application can make in a period. Microsoft Graph's throttling guidance explains that when a threshold is exceeded, the service returns an HTTP 429 "Too Many Requests" response with a suggested waiting time, and it advises against immediate retries because all requests count against the limit. An integration built during a quiet month may never meet that limit until a promotion, a seasonal peak or a bulk import pushes it over.

The symptom is intermittent: most records arrive, some do not, and nothing looks broken when someone checks later. The pattern is described in [why API rate limits create intermittent business failures](/discovery/why-api-rate-limits-create-intermittent-business-failures/).

### 4. Messages arrive twice, late or out of order

Event notifications, often called webhooks, are a common way for one system to tell another that something has happened. Stripe's webhook documentation is unusually candid about how they behave in practice: endpoints may occasionally receive the same event more than once, Stripe does not guarantee that events are delivered in the order they were generated, and failed deliveries are retried for up to three days in live mode.

An integration written on the assumption that every message arrives exactly once, in order, will work during testing and then create duplicates or apply stale updates when real-world delivery behaves as documented. Designing for this is covered in [how to design retries without creating duplicate work](/insights/how-to-design-retries-without-creating-duplicate-work/).

### 5. Someone changes the business, not the code

New product categories, a new tax code, an extra branch, a renamed pipeline stage or a new mandatory field in the CRM can all break an integration that was mapped to the old structure. These changes are usually made by capable people doing their jobs, who have no way of knowing that a field they edited is read by another system. Without a record of what each integration depends on, there is nothing to check before making the change.

### 6. Failures happen silently

The most damaging condition is not any single failure but the absence of anyone being told. Many integrations log errors to a screen nobody visits, or email them to the person who built them. When a record fails, the integration moves on to the next one. The gap is found days later by a customer or an auditor rather than by the business. This is why [knowing whether an automation actually ran](/insights/how-to-know-whether-an-automation-actually-ran/) matters as much as building it.

## What these failures have in common

| Failure | What changed | What would have caught it |
| --- | --- | --- |
| Expired or revoked access | Time, or a person's account | Service accounts, a credential register and expiry reminders |
| Vendor interface change | The vendor's release schedule | A named owner who tracks vendor change notices |
| Rate limits | Transaction volume | Load testing at peak volumes and back-off on 429 responses |
| Duplicate or out-of-order messages | Normal delivery behaviour | Recording processed event IDs and checking current state before acting |
| Business configuration change | Internal setup | A dependency record checked before changes |
| Silent failure | Nothing; it was always invisible | Alerts to a team, plus a daily count reconciliation |

In every case, the thing that changed was outside the integration's code. Integrations break after they seem to work because they are treated as a delivery rather than as a running service with an owner, a budget for upkeep and a way of reporting its own health. The ownership question is explored further in [why every important integration needs an owner](/insights/why-every-important-integration-needs-an-owner/).

## An illustrative example

Consider an illustrative Durban distributor of catering supplies with about forty staff. Its online store sends orders to the accounting package, which creates invoices and reserves stock. The connection was set up by the operations manager using her own administrator login and tested with a few dozen orders.

For four months it worked. Then three things happened within a fortnight. The operations manager changed her password after a security prompt, which broke the connection for most of a day before anyone noticed. A month-end promotion more than doubled the normal order rate and some orders were rejected by the accounting package's request limit. And when the connection was restored, the store re-sent a batch of order notifications, producing duplicate invoices for several customers.

None of these was a defect in the original build. Each was a condition the original test could not have exposed. The repairs were modest: a dedicated integration account with its own credentials, a short delay and retry when the accounting package signalled it was busy, a check that skipped any order number already invoiced, and a daily comparison of store orders with invoices that was sent to the finance team rather than to one person.

## A practical diagnostic

1. List every integration that moves money, orders, customers or stock. For each, note whose credentials it uses.
2. Ask what happens if the same message arrives twice. If the answer is "it creates another record", that is a known future failure.
3. Find out whether each vendor publishes API versions or change notices, and who in the business reads them.
4. Check what volumes were tested, and compare them with your busiest day of the year.
5. Find where errors go. If they go to one inbox, or nowhere, fix that first.
6. Set up a simple daily reconciliation: count of records sent against count of records received.

Integrations that are designed for the conditions they will meet after launch rarely surprise anyone. The work is not exotic. It is mostly a matter of accepting that the connection will keep living in a changing environment, and giving it the ownership and visibility that any other operational service would receive.
