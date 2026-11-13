---
hub: insights
record_id: INS-025
slug: what-good-digital-operations-look-like-before-you-buy-anything-new
title: What good digital operations look like before you buy anything new
description: New software works best when current systems run well. Eight foundations of good digital operations, from knowing what you have to tracking change.
lead: New software works best in a business that already runs its existing systems well. Eight foundations of good digital operations, from knowing what you have and who owns it to managing access, protecting data and tracking changes, with a simple way to check where you stand.
category: Digital Operations
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Digital Operations
sources:
  - What is application management? - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-application-management
  - Who makes an application to process Special Personal Information? | https://inforegulator.org.za/popia/
  - What Is Business Continuity? - IBM | https://www.ibm.com/think/topics/business-continuity
related:
  - How to know whether your business depends too much on one person | /insights/how-to-know-whether-your-business-depends-too-much-on-one-person/
  - Why uncontrolled configuration changes create operational risk | /insights/why-uncontrolled-configuration-changes-create-operational-risk/
  - Why your reports cannot agree on the same number | /insights/why-your-reports-cannot-agree-on-the-same-number/
summary: New software works best in a business that already runs its existing systems well. Eight foundations of good digital operations, from knowing what you have and who owns it to managing access, protecting data and tracking changes, with a simple way to check where you stand.
layout: plain
---
When something in the business is not working, buying a new tool is often the first idea. A new CRM to fix sales follow-up. A new project tool to fix delivery. A new reporting platform to fix the numbers. Sometimes that is the right answer. Often it is not, because the problem is not the software. It is the way the business runs the software it already has.

A new tool placed into weak operations inherits the weaknesses. Unclear ownership, duplicated data, unmanaged access and undocumented processes move across with the migration. The business ends up with a newer system and the same problems, plus the cost of the change.

This article describes what good digital operations look like in a small or mid-sized business. It is not a list of things to buy. It is the state worth reaching before a major purchase, because it makes any new system easier to choose, implement and run. If a purchase is already on the table, [before you buy another tool, ask these questions](/insights/before-you-buy-another-tool-ask-these-questions/) covers the decision itself.

## 1. You know what systems you have

A business with good digital operations can produce a current list of the applications, subscriptions and connected services it relies on. For each one it knows what it is for, who uses it, what it costs, what data it holds and what it connects to. This sounds basic, but many businesses cannot do it, and without it every new purchase risks duplicating something already paid for.

## 2. Every system has an owner

Ownership means a named person is responsible for each system: its configuration, its users, its renewals and its fitness for the job. That person does not need to be technical. They need to be accountable. Microsoft's guidance on [application management](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-application-management) recommends that each application in a tenant has at least two owners, to avoid ownerless applications. The same principle applies in any business: one owner and one backup, so that a resignation or a holiday does not orphan a system.

## 3. Each important piece of data has one home

Customers, products, prices, suppliers and employees should each have a single system of record that everyone treats as the truth. Other systems may display or use that data, but they should read it from the source rather than keep their own versions. Where this is not true, reports disagree and staff spend time reconciling. Choosing that home deliberately is the subject of [how to decide what should be the system of record](/insights/how-to-decide-what-should-be-the-system-of-record/).

## 4. Core workflows are written down

The few processes that keep the business running, such as quoting, order fulfilment, invoicing, collections, payroll and onboarding, are documented well enough that a capable new person could follow them. The documentation records which system is used at each step and what happens when things go wrong. It does not need to be long. It needs to be current and findable.

Written workflows are what make a later system change possible, because they show what the new tool must support.

## 5. Access is managed from joining to leaving

People get the access they need when they join, the access changes when their role changes, and it is removed promptly when they leave. Shared logins are rare and controlled. Multi-factor authentication is on for important systems. Microsoft's documentation describes this lifecycle as part of managing applications: assigning users, automating provisioning, and removing access when it is no longer needed. Weak offboarding is one of the most common gaps in smaller businesses, as described in [when offboarding leaves digital access behind](/patterns/when-offboarding-leaves-digital-access-behind/).

## 6. Personal information is handled deliberately

South African businesses process personal information about customers, employees and suppliers in most of their systems. The Protection of Personal Information Act sets conditions for lawful processing, and the Information Regulator's [POPIA guidance](https://inforegulator.org.za/popia/) explains that organisations must register an information officer, whose duties include encouraging compliance with those conditions. Good digital operations mean the business knows which systems hold personal information, who can see it and why, and what to do if it is compromised. Any new system will need the same answers, so it is better to have them first.

## 7. The business can recover when something fails

Important data is backed up, and someone has tested restoring it. The business knows which systems it cannot operate without and roughly how long it could manage if each one were unavailable. IBM's guide to [business continuity](https://www.ibm.com/think/topics/business-continuity) starts with a business impact analysis that assesses functions for risks and vulnerabilities, then sets out responses, assigns roles and calls for periodic testing and refinement. A small business can do a light version of this. What matters is that recovery has been thought about before it is needed. Untested backups are a common false comfort, as set out in [the financial cost of backups that have never been tested](/impact/backups-never-tested-restore-financial-cost/).

## 8. Changes and automations are watched

Settings changes, new integrations and automations are recorded, ideally tested, and have someone responsible for them. Automations that matter are monitored, so failures are noticed by the business rather than by customers. Changes are made by people who know what else they might affect.

## A simple self-assessment

For each foundation, rate the business honestly:

| Foundation | In place | Partly | Not yet |
| --- | --- | --- | --- |
| Current list of systems | Complete and maintained | Exists but out of date | No list |
| Named owners | Owner and backup for each system | Some systems owned | Nobody clearly responsible |
| Single home for key data | Agreed for each data type | Agreed for some | Several competing copies |
| Documented core workflows | Current and findable | Some, or outdated | In people's heads |
| Access lifecycle | Joiners, movers and leavers handled promptly | Handled inconsistently | Old accounts remain active |
| Personal information | Known where it is and who can see it | Partly known | Not considered |
| Recovery | Backups tested, critical systems known | Backups exist, untested | No clear plan |
| Changes and automations | Recorded, owned and monitored | Some oversight | Changes made ad hoc |

A business with mostly "not yet" answers should usually fix foundations before buying a major new system. A business with mostly "in place" answers is ready to buy well, because it knows what it needs, what the new tool must connect to and who will run it.

## Why foundations come first

Foundations reduce the cost and risk of every later change. With a current list of systems, you avoid buying duplicates. With owners, someone is accountable for adoption. With a single home for data, migration is cleaner and integration simpler. With documented workflows, you can test whether a new tool fits the work. With managed access and recovery in place, a new system starts secure.

None of this is glamorous, and none of it is finished once. Keeping these foundations in good order is ongoing work, the case made in [why business systems need ongoing stewardship](/insights/why-business-systems-need-ongoing-stewardship/).

## An illustrative example

The following is a hypothetical example. A South African property management company plans to buy a new tenant management platform because tenant queries are slow to resolve. Working through the self-assessment first, it finds that tenant contact details live in three places, that nobody owns the current system's configuration, and that two former staff still have access. Resolving those points takes a few weeks. When the company does evaluate new platforms, it knows exactly which data must migrate, who will own the new system and what access rules it needs, and its shortlist is shorter because some of the original complaints have disappeared.
