---
hub: impact
record_id: CPS-262
slug: automations-running-on-employee-accounts-not-service-identities-staff-change-failure-cost
title: Automations Tied to Employee Logins: What Breaks When People Move On
description: Invoices stop sending, reports stop arriving and integrations fail on the day an employee leaves, because the automation was running under their personal login. Controlled service identities prevent it.
lead: Invoices stop sending, reports stop arriving and integrations fail on the day an employee leaves, because the automation was running under their personal login. Controlled service identities prevent it.
category: Automation and Integration
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Automation and Integration
commercial_domain: Automation and Integration
primary_pain: Business automations run under employee accounts and fail when those people change roles or leave
primary_cost_mechanism: Delayed invoicing and reporting when accounts are disabled, emergency rebuilding by consultants, security exposure from keeping leavers' accounts active, unnoticed quiet failures, and unclear audit trails
sources:
  - Service accounts overview - Identity and Access Management (IAM) - Google Cloud Documentation | https://docs.cloud.google.com/iam/docs/service-account-overview
  - Workload identities - Microsoft Entra Workload ID | https://learn.microsoft.com/en-us/entra/workload-id/workload-identities-overview
related:
  - The Integration That Is Always Being Fixed: Paying for Poorly Designed Connections | /impact/custom-integrations-constantly-need-repair-poorly-designed-connections-cost/
  - When Customers Find the Broken Integration Before You Do | /impact/integrations-breaking-silently-customers-report-failure-first-cost/
  - Buying Software Before Asking How It Connects: The Cost of Integration Debt | /impact/new-software-added-without-integration-check-integration-debt-cost/
summary: Invoices stop sending, reports stop arriving and integrations fail on the day an employee leaves, because the automation was running under their personal login. Controlled service identities prevent it.
layout: plain
---
## The day the invoices stopped

A logistics company in Pinetown found out about a dependency the hard way. Its finance administrator resigned, and on her last day her Microsoft 365 account was disabled as part of normal offboarding. The next morning, customer invoices stopped going out. So did the daily delivery report to the operations manager and the overnight transfer of proof-of-delivery files into the accounting system. All three automations had been built by the administrator over several years, using her own account to connect to email, SharePoint and the accounting platform. When her account stopped working, so did they.

It took four days and an outside consultant to find and rebuild them. The company had done exactly what good security practice requires. The automations had simply been tied to a person rather than to the business.

## Why automations end up on personal accounts

Most workflow and integration tools make it easiest to connect with your own login. A staff member building a flow in Power Automate, Zapier, Make or a CRM's built-in automation signs in as themselves, grants access, and the automation runs. It works, so nobody revisits it. Over time the business accumulates automations that depend on:

- a specific person's password and multi-factor authentication;
- that person's mailbox, calendar or file permissions;
- that person's licence remaining active;
- that person's role not changing in ways that alter their access.

The automation looks like a business process. Technically, it is an employee acting on the business's behalf, all day, every day.

## What a controlled service identity is

Major platforms separate identities for people from identities for software. Google Cloud describes a [service account](https://docs.cloud.google.com/iam/docs/service-account-overview) as an account used by an application or workload rather than a person, which can be granted only the permissions it needs, and advises disabling and deleting service accounts that are no longer used. Microsoft's overview of [workload identities](https://learn.microsoft.com/en-us/entra/workload-id/workload-identities-overview) explains that applications, service principals and managed identities represent software rather than employees, and notes that it is hard to track when such identities are created or should be revoked, which is why they need their own governance.

For a smaller business, the practical version is simple: an automation that matters to the business should run under an identity that belongs to the business, has a named owner, has only the access it needs and is not affected when someone resigns, goes on leave or changes role.

## What it costs when automations are tied to people

The figures below are illustrative.

### Failures at the moment of change

Offboarding, a password reset, a licence change or a role change can all break an automation without warning. If invoicing stops for four days in a business billing R2 million a month, around R360,000 of invoices are delayed, and collection moves out with them.

### Emergency rebuilding

Finding out what an automation did, which accounts it used and what data it touched takes time when the builder has left. Four days of an external consultant at R1,000 an hour adds up to R32,000, before internal time is counted.

### Security exceptions

The alternative many businesses choose is worse: keeping the former employee's account active "until the automations are moved". That leaves an unused but powerful account open, the risk described in [former employees still active in systems](/impact/former-employees-still-active-systems-incomplete-offboarding-cost/).

### Hidden failures

Some automations fail quietly, such as a sync that stops or a report that is not sent. Nobody notices for weeks. The consequences are covered in [silent automation failures](/impact/silent-automation-failures-financial-impact/).

### Licence and audit confusion

Actions taken by an automation appear in logs as actions by the employee. When something goes wrong, it is hard to tell whether a person or a process did it.

## Why this is easy to miss

Automations built by individuals are often valuable precisely because the builder understood the process well. The problem of [personal automations outside business oversight](/impact/personal-automations-outside-business-oversight-shadow-automation-continuity-risk/) overlaps with this one, but even officially approved automations are often connected through a person's login because nobody set up an alternative.

## Questions to ask about any automation

A quick way to assess exposure is to ask five questions of each automation that matters. Whose login does it use? What happens if that person resets their password or loses their licence? Who would notice if it stopped, and how quickly? Where is it documented, and could someone else rebuild it from that documentation? Does it have more access than it needs, for example to every mailbox or every file, because the person who built it did? Automations that fail two or more of these questions should be at the top of the list for moving to a service identity. The answers also help when budgeting, because a dedicated identity sometimes needs its own licence, and the cost of that licence can be compared directly with the cost of one failure.

## What good practice looks like

- **An inventory of automations** that records what each one does, which systems it touches and which identity it uses.
- **Dedicated service identities** for business-critical automations, using the platform's service account or application features where available, or a dedicated, licensed non-personal account where the tool requires one.
- **Least privilege**: each identity has access only to what its automations need.
- **Named owners**: a person responsible for each automation and for its identity, with a deputy.
- **Credential management**: secrets stored in a password manager or vault, multi-factor or certificate-based authentication where supported, and a renewal schedule.
- **Offboarding and role-change checks**: before disabling an account, check whether any automation depends on it.

The guide on [designing workflows that survive staff changes](/insights/how-to-design-workflows-that-can-survive-staff-changes/) covers the process side of the same problem.

## Practical next actions

1. **List your automations and their connections.** Check workflow tools, CRM and accounting automation settings, and scheduled tasks for the account each uses.
2. **Flag those running on personal accounts.** Prioritise automations that affect invoicing, payments, customer communication and reporting.
3. **Create service identities for the critical ones.** Use the platform's application or service account features, with the minimum access required.
4. **Move connections and test.** Rebuild each critical connection on the service identity and confirm the automation runs end to end.
5. **Add a check to offboarding.** Before disabling any account, search for automations and connections that use it.
6. **Review quarterly.** Confirm owners, permissions and credentials are current, and remove identities that are no longer needed.

Automations are meant to make the business less dependent on individual effort. Running them on individual logins brings that dependency back, and it is usually discovered on someone's last day.
