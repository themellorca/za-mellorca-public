---
hub: impact
record_id: CPS-090
slug: staff-several-logins-systems-one-customer-request-fragmented-operations-cost
title: Five Logins for One Request: The Productivity Cost of Fragmented Systems
description: When answering one customer means signing in to several systems, staff lose minutes on every request, customers wait longer, and password resets and access mistakes multiply.
lead: When answering one customer means signing in to several systems, staff lose minutes on every request, customers wait longer, and password resets and access mistakes multiply.
category: Customer Operations
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Customer Operations
commercial_domain: Customer Operations
primary_pain: Staff need several separate logins and systems to complete one ordinary customer request
primary_cost_mechanism: Paid minutes lost to sign-ins on every request, longer customer waiting times, password reset and lock-out effort, slower onboarding and incomplete offboarding, and weaker password habits
sources:
  - https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-single-sign-on | https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-single-sign-on
  - https://asana.com/resources/why-work-about-work-is-bad | https://asana.com/resources/why-work-about-work-is-bad
summary: When answering one customer means signing in to several systems, staff lose minutes on every request, customers wait longer, and password resets and access mistakes multiply.
layout: plain
---
## A simple question, a long sign-in

A customer phones a medical equipment distributor in Johannesburg to ask whether a replacement part has been dispatched and whether her last invoice was paid. The service agent signs in to the order system to find the order, then the warehouse system to check dispatch, then the courier portal for tracking, then the accounting package for the payment, and finally the CRM to log the call. Two of those systems have timed out since the morning. One asks for a code from his phone. The answer takes seven minutes, most of which is spent getting into systems rather than reading what they say.

This article looks at that specific friction: the number of separate logins and systems a staff member needs to complete one ordinary customer request, and what it costs in time, service and security.

## How the login count grows

No business sets out to give staff five logins for one task. It happens one sensible purchase at a time:

- A specialised tool is added for each department, each with its own user accounts.
- Suppliers and partners offer portals that need separate credentials.
- Older systems that cannot connect to modern sign-in methods are kept running.
- Security improvements such as short session timeouts and second-factor prompts are applied system by system, adding steps each time.

The broader problem of [too many applications for one task](/impact/too-many-applications-one-task-fragmented-work-cost/) covers the switching between screens. The login burden is a distinct and very measurable part of it.

## Where the cost appears

### Minutes on every request

Signing in, waiting, entering a code and finding the right screen takes time. The following figures are illustrative. If a service agent handles 40 requests a day and spends an extra 90 seconds per request on logins and re-logins, that is an hour a day. For a team of eight, that is eight hours a day, or around 175 hours a month. At a loaded cost of R220 an hour, that is more than R38,000 a month of paid time spent on access rather than on customers.

### Longer waits for customers

Customers on the phone hear the delay. Customers waiting by email or chat wait longer for a response. The cost of [customers waiting while staff search several systems](/impact/customers-waiting-staff-search-several-systems-service-payroll-cost/) shows how quickly this affects satisfaction.

### Password resets and lock-outs

Every separate login is another password to forget and another account to lock. Resets interrupt the staff member and someone in IT or administration. The burden also pushes people towards weak or reused passwords, written-down credentials and shared logins, which creates risk elsewhere.

### Onboarding and offboarding effort

Each new employee needs an account in every system they use. Each leaver needs every one of those accounts removed. The more separate systems there are, the more likely it is that a new starter waits for access, or that a former employee keeps it. The existing analysis of [incomplete offboarding](/impact/former-employees-still-active-systems-incomplete-offboarding-cost/) often traces back to this fragmentation.

### Attention and error

Switching between tools breaks concentration. Vendor research summarised by Asana on [why work about work is bad](https://asana.com/resources/why-work-about-work-is-bad) counts toggling between tools among the activities that take up a large share of knowledge workers' time, alongside searching for information and checking on progress. Survey figures from a software vendor deserve caution, but the experience is familiar to anyone who has handled a busy service queue.

## Why it is tolerated

Each login on its own takes only seconds, so nobody adds them up. Each system has an owner who sees only their own tool. And the people who feel the cost most, front-line staff, are rarely the people who choose software.

There is also a security argument that keeps the status quo in place. Separate logins can feel safer, because a breach of one system does not automatically open the others. In practice, people under pressure respond to many logins by reusing passwords or writing them down, which removes that benefit and adds risk of its own.

## What better looks like

Two changes remove most of the login burden.

The first is **single sign-on**. Microsoft's explanation of [single sign-on in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-single-sign-on) describes how users sign in once with one set of credentials and can then open their assigned applications without signing in again. It lists fewer credentials for users, consistent security policies, central control of access and fewer password resets reaching the help desk as benefits. Many business applications support single sign-on through the identity system a business already uses for email, sometimes at a higher subscription tier, and this is worth checking before renewal.

The second is **bringing information to one screen**. If the CRM or service desk can show order status, dispatch and payment information drawn from the other systems, many requests can be answered without opening anything else. This is an integration decision rather than a login decision, but it removes the need for several logins entirely for the most common questions.

Together, these changes mean fewer passwords, faster answers and access that can be granted or removed in one place, which also makes joiners and leavers simpler.

## The commercial trigger

Good moments to act include software renewals, when single sign-on support can be negotiated; a growth in service headcount, which multiplies the cost of each wasted minute; and any security review that finds shared or reused passwords, which are often a symptom of too many logins.

## Practical next actions

1. **Map the five most common customer requests.** For each one, list every system a staff member signs in to and how long the sign-ins take.
2. **Count logins per role.** Record how many separate accounts each service, sales and finance role needs.
3. **Check single sign-on support.** For each system, ask the vendor whether it supports sign-in through your existing identity provider and at what plan level.
4. **Connect the top three systems first.** Prioritise the systems used most often in customer requests for single sign-on.
5. **Bring key status data into one view.** Show order, dispatch and payment status in the system staff already use to handle customer contact.
6. **Measure before and after.** Time a sample of requests now and again after the changes, so the saving can be shown.

Every extra login is a small tax on customer service. Removed together, those small taxes return hours of capacity each week without hiring anyone.
