---
hub: insights
record_id: INS-049
slug: how-to-stop-paying-for-features-your-business-does-not-need
title: How to stop paying for features your business does not need
description: Unused licences are easy to spot, unused features are not. How to find which paid features get used, right-size plans safely and check before downgrading.
lead: Unused licences are easy to spot. Unused features are not: higher plan tiers, add-ons and premium bundles that were bought for one reason and kept by default. How to find out which paid features are actually used, how to right-size plans safely and what to check before downgrading.
category: Operations
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Operations
sources:
  - Microsoft 365 Apps Active Users Report - Microsoft 365 admin | https://learn.microsoft.com/en-us/microsoft-365/admin/activity-reports/active-users-ww?view=o365-worldwide
  - Switch to Business Starter edition - Billing & subscriptions - Google Workspace Help | https://knowledge.workspace.google.com/admin/billing/switch-to-business-starter-edition
  - New commerce license-based overview - Partner Center | https://learn.microsoft.com/en-us/partner-center/customers/new-commerce-license-based
related:
  - The real cost of paying for software nobody uses properly | /insights/the-real-cost-of-paying-for-software-nobody-uses-properly/
  - What to fix first when everything feels broken | /insights/what-to-fix-first-when-everything-feels-broken/
  - Why cheap SaaS can become expensive operations | /insights/why-cheap-saas-can-become-expensive-operations/
  - Paying twice: What it costs when nobody knows what your plan already includes | /impact/paying-extra-for-features-already-in-your-plan-entitlement-check-cost/
summary: Unused licences are easy to spot. Unused features are not: higher plan tiers, add-ons and premium bundles that were bought for one reason and kept by default. How to find out which paid features are actually used, how to right-size plans safely and what to check before downgrading.
layout: plain
---
Most businesses that look at software waste start by counting seats: how many licences are paid for, and how many people actually use them. That is a sensible first step, and the impact of getting it wrong is set out in [unused software licences](/impact/unused-software-licences-financial-waste/). But a business can have every seat in use and still overpay, because each of those seats sits on a plan that includes far more than the user needs.

Software vendors sell in tiers. The basic plan covers the core job. The next tier adds reporting, automation or security controls. Premium tiers add advanced analytics, compliance tools or AI features. Add-ons sit on top of all of them. A business that moved up a tier for one feature three years ago may still be paying for the whole tier for every user, long after the feature fell out of use or turned out to be available somewhere else.

## How feature waste builds up

Paying for unneeded features is rarely a single bad decision. It usually builds up in a few familiar ways:

- **Upgrading everyone for a few.** Five people need advanced reporting, so all 50 users are moved to the higher plan.
- **Buying the bundle for one item.** A premium suite is chosen because it includes a feature the business wanted, and the rest is never switched on.
- **Add-ons that outlive their purpose.** Extra storage, a call recording module or a marketing feature bought for a campaign keeps renewing.
- **Default upgrades at renewal.** Suppliers or resellers renew on the current or a newer plan unless told otherwise.
- **Trials that convert.** A premium trial is accepted for evaluation and rolls into a paid plan.

None of this shows clearly on an invoice, which lists plans and quantities, not which features anyone uses.

## Step one: list what you pay for at feature level

For each important subscription, write down the plan tier, the number of users on each tier, every add-on, and the reason the business chose that tier. If nobody remembers the reason, that is worth noting. Include platforms bought through resellers, where the plan name on the reseller invoice may not match the vendor's naming. If the business does not yet have a reliable list of its subscriptions, [unknown software subscriptions](/impact/unknown-software-subscriptions-invisible-recurring-cost/) explains where to start.

## Step two: find out which features are actually used

Usage data is the most reliable evidence, and most platforms provide some of it in the admin console.

Microsoft's documentation for the [Microsoft 365 Active Users report](https://learn.microsoft.com/en-us/microsoft-365/admin/activity-reports/active-users-ww?view=o365-worldwide) explains that it shows how many product licences people use, can be drilled into to see which users use which products, and helps administrators identify underutilised products. It shows trends over the last 7, 30, 90 or 180 days and can be exported for analysis. Similar reports exist in most major platforms, though what they track varies.

Where usage data does not exist at feature level, ask. A short question to each team, such as "which of these features do you use at least monthly?", combined with a look at what is actually configured, will usually reveal the pattern. Look especially for:

- premium features that are licensed but not switched on;
- features used by a handful of people on a plan bought for everyone;
- features duplicated by another tool the business already pays for;
- add-ons with no activity in the last quarter.

## Step three: match plans to roles

Once usage is clear, group users by what they actually need. A typical mid-sized business might find three groups: a small number of power users who need advanced features, a large group who need the core product, and occasional users who need limited access.

| User group | Typical need | Plan approach |
| --- | --- | --- |
| Power users | Advanced reporting, automation, administration | Higher tier, limited to those who use it |
| Core users | Daily use of standard features | Standard tier |
| Occasional users | Viewing, approving, light editing | Basic or limited-access plans where the vendor offers them |

Not every platform allows mixed plans. Google's documentation on [switching to Business Starter](https://knowledge.workspace.google.com/admin/billing/switch-to-business-starter-edition), for example, states that everyone in the organisation gets the same subscription. In that case the decision is about the whole organisation's tier, and the question becomes whether the features that justify the higher tier are worth their cost across every user.

## Step four: check before you downgrade

Downgrading can remove more than convenience. Higher tiers often include security, compliance and data retention features that matter even if few people interact with them directly.

Google's documentation is a useful illustration of the care needed. It states that if you downgrade and lose a feature such as data loss prevention or Google Vault, you can get it back if you upgrade within 51 days; otherwise you must wait at least 85 days to upgrade to an edition with that feature. It also advises preserving Vault data if retention rules or holds are in place, and changing device management settings before switching. Other vendors have their own conditions.

Before any downgrade, confirm:

1. which security and compliance controls the current tier provides, and whether you rely on them;
2. whether any data retention, legal hold or archive depends on the tier;
3. whether integrations or automations use features of the higher plan;
4. what limits change, such as storage or API calls;
5. how easily, and how quickly, you could reverse the change.

## Step five: time the change

Many plans can only be changed at certain points. Microsoft's Partner Center documentation on [new commerce licensing](https://learn.microsoft.com/en-us/partner-center/customers/new-commerce-license-based), through which Microsoft 365 and Dynamics 365 are commonly bought from partners, states that these subscriptions can only be cancelled in the first seven days of their term, and that changes can be scheduled to take effect at the end of a term. Plan downgrades for the renewal point and agree them with the reseller in advance. Building feature reviews into the renewal routine is covered in [how to decide which software to remove](/insights/how-to-decide-which-software-to-remove/) and in the discovery note on [why contract renewals surprise finance and operations](/discovery/why-contract-renewals-surprise-finance-and-operations/).

## An illustrative example

Consider an illustrative East London retail group with 70 staff across four stores and a head office. All 70 users were on the premium tier of its office suite, chosen two years earlier for advanced security features and a reporting add-on.

A usage review showed that 12 head office staff used the reporting add-on, and that store staff mainly used email, shared files and the rostering tool. The security features were still needed for everyone. The group kept the premium tier, because the vendor's security controls justified it, but limited the reporting add-on to the 12 users who used it and cancelled an unused call recording add-on. The changes were scheduled for the next renewal date. The saving was modest but recurring, and the review became part of the annual renewal routine.

## Pay for what the work requires

The goal is not to buy the cheapest plan. It is to pay for features the business actually uses and needs, including the protective ones that rarely show up in usage reports. A feature-level review once a year, timed before renewals, keeps plans aligned with the work and stops yesterday's decisions from setting today's costs.
