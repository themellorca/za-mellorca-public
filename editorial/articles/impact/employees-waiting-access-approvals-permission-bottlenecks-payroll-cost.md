---
hub: impact
record_id: CPS-381
slug: employees-waiting-access-approvals-permission-bottlenecks-payroll-cost
title: Paid to Wait: The Payroll Cost of Slow Access Approvals
description: When employees wait days for system access to be approved, the business pays full salary for no output and invites shared logins and workarounds; clear approval routes remove most of the delay.
lead: When employees wait days for system access to be approved, the business pays full salary for no output and invites shared logins and workarounds; clear approval routes remove most of the delay.
category: IT and Operations
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: IT and Operations
commercial_domain: IT and Operations
primary_pain: Employees wait for access approvals before they can do their jobs
primary_cost_mechanism: Salary paid for idle days, colleagues interrupted by workarounds, shared credentials that weaken accountability, and delayed downstream customer and finance work
sources:
  - least privilege - Glossary - CSRC | https://csrc.nist.gov/glossary/term/least_privilege
  - What is entitlement management? - Microsoft Entra ID Governance | https://learn.microsoft.com/en-us/entra/id-governance/entitlement-management-overview
  - Change approval settings for an access package in entitlement management - Microsoft Entra - Microsoft Entra ID Governance | https://learn.microsoft.com/en-us/entra/id-governance/entitlement-management-access-package-approval-policy
related:
  - Chasing staff for receipts: The payroll cost of expense administration | /impact/chasing-employees-for-receipts-expense-information-payroll-cost/
  - The payroll cost of a slow, spreadsheet-heavy month-end | /impact/manual-month-end-close-payroll-cost/
  - The revenue cost of slow sales lead response | /impact/slow-sales-lead-response-revenue-cost/
summary: When employees wait days for system access to be approved, the business pays full salary for no output and invites shared logins and workarounds; clear approval routes remove most of the delay.
layout: plain
---
## Paid to wait

A logistics company in Johannesburg hires a dispatch controller on the first of the month. She arrives at 08:00, is shown her desk and finds she cannot open the routing system, the shared drive or the customer portal. The request for access went to her manager by email on Friday afternoon. The manager forwarded it to IT on Monday. IT replied asking which role she should copy. The manager, who is travelling, answers on Wednesday. By Thursday she can work, and she has spent four days being paid to read the policy manual.

This article is about that delay: employees waiting for approval before they can get the access their job requires, and what the waiting costs in salary paid for no output, in delayed work and in the workarounds people invent. The problem is not that approvals exist. It is that the approval route is unclear, slow and dependent on one person being at their desk.

## Why access approvals become bottlenecks

Access requests move slowly for ordinary reasons rather than bad ones. The same few causes appear in most businesses:

- **The request goes by email**, so it can sit unread, be forwarded to the wrong person or lose half its detail on the way.
- **Nobody knows who the approver is.** The manager assumes IT decides. IT assumes the manager decides.
- **Every request is treated as unique.** There is no standard list of what a dispatch controller, a bookkeeper or a sales representative normally needs, so each one is investigated from scratch.
- **One approver, no deputy.** Leave, travel or a meeting-heavy week stops everything behind them.
- **Approval is mixed up with fulfilment.** A simple "yes" waits for the technician who must then do the work, so there are two queues in a row.

We have looked at the arrival side of this problem in [new starters waiting for logins](/impact/new-starters-waiting-for-logins-access-setup-cost/). The same pattern also hits existing staff who change role, cover for a colleague or need temporary access to a system for a project.

## What the waiting costs

### Salary paid for no output

The arithmetic is simple. A new employee earning R30,000 a month costs roughly R1,400 a working day in salary alone, before benefits and overhead. Three days of waiting is more than R4,000, per hire, with no work done. Multiply by the number of starters and internal moves in a year. A company that hires or reassigns 40 people a year, losing three days each, is paying for 120 idle person-days. The figures are illustrative, but the structure applies to any payroll.

### Colleagues interrupted

The person waiting does not sit still. They ask a colleague to run reports for them, borrow a login or send documents by email so someone else can do the part they cannot reach. Each workaround interrupts a working employee and quietly weakens the controls the approval was meant to protect.

### Shared passwords and shortcuts

This is the hidden risk. When the proper route is slow, people share credentials to get the job done. A shared login removes accountability, because the audit log shows the colleague, not the person who used the account. It is a worse outcome than a short, well-run approval. The article on [uncontrolled system access and financial risk](/impact/uncontrolled-system-access-financial-risk/) describes how that exposure can turn into a financial loss.

### Delayed customer work

Work that depends on the new access waits too. An invoice is not raised, a delivery is not scheduled or a query is not answered. The cost lands in someone else's department and is rarely connected back to the access queue.

## The opposite error: approving too much

The answer is not to hand out access freely. Over-permissioned accounts carry their own risk, and the principle of least privilege exists for good reason. NIST defines [least privilege](https://csrc.nist.gov/glossary/term/least_privilege) as giving each user only the access necessary to perform their tasks. A business that responds to slow approvals by giving everyone broad rights has traded one problem for another, as we describe in [employees with more access than the job requires](/impact/employees-more-system-access-than-job-requires-excess-permissions-cost/).

The aim is fast, correct access: the right rights, quickly, with a record. Those are compatible goals when approval is designed rather than improvised.

## Design the approval, not just the request

Three changes remove most of the delay without loosening control.

1. **Pre-approve role bundles.** For common roles, agree once what access comes with the job. A new dispatch controller then gets the dispatch bundle on day one without anyone deciding again. Only exceptions need an approver.
2. **Use a single request form.** The form should name the person, the role, the start date, the manager and the systems required, so IT can act without asking a follow-up question.
3. **Set a response time and a deputy.** An approver who has not responded in one working day passes the request to the named deputy. The delay is visible instead of silent.

Where the same request needs approval from several people, run the approvals in parallel rather than one after another. Our piece on [why approval processes become bottlenecks](/insights/why-approval-processes-become-bottlenecks/) explains why sequential approvals are the main reason requests age.

## What the software can do for you

Identity and access tools can encode these rules. Microsoft's documentation on [entitlement management in Microsoft Entra ID Governance](https://learn.microsoft.com/en-us/entra/id-governance/entitlement-management-overview) describes automating access request workflows, assignments, reviews and expiry, so that access packages can be requested, approved and time-limited without a chain of emails. Its guidance on [approval settings for access packages](https://learn.microsoft.com/en-us/entra/id-governance/entitlement-management-access-package-approval-policy) covers configuring who approves and what happens if they do not respond. Some of these features sit in paid licence tiers, so check what your current subscription includes before you assume you need something new.

A smaller business can reach much of the same result with a shared form, a standard role list and a rule about who approves. Software helps most once the decisions have been made. It does not make them for you.

## Measure the delay before you fix it

Pick the last ten access requests and record two times for each: from request to approval, and from approval to access granted. Most businesses find that the waiting is in the first interval, which points to approvers rather than technicians. That tells you where to act. It also gives you a number, such as an average of 3.5 days, to compare against once the changes are in place.

## Practical next actions

1. **Time the last ten requests.** Record request to approval and approval to access, and note who the approver was each time.
2. **List your five most common roles.** For each, write down the systems and permissions that normally come with it.
3. **Agree who approves what.** Name one approver and one deputy for each system, and publish the list.
4. **Replace email with one request form.** Require the person, role, start date, manager and systems to be filled in before the request is accepted.
5. **Set a one-day response rule.** If the approver has not answered, the request goes to the deputy automatically.
6. **Prepare access before day one.** For new starters, submit and approve the request before the start date, and check it works the day before.

Done well, approval becomes a short, recorded decision, and the new dispatch controller spends her first morning dispatching.
