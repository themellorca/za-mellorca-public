---
hub: discovery
record_id: DISC-339
slug: why-sso-coverage-lags-behind-the-saas-portfolio
title: Why single sign-on coverage lags behind the SaaS portfolio
description: Each new SaaS tool arrives with its own passwords while sign-in controls stay on a few core systems. How to measure SSO coverage and close the gap in a sensible order.
lead: Each new SaaS tool arrives with its own passwords while sign-in controls stay on a few core systems. How to measure SSO coverage and close the gap in a sensible order.
category: SaaS & Application Portfolio Management
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: SaaS & Application Portfolio Management
problem_domain: SaaS & Application Portfolio Management
problem_owner: IT manager or identity administrator, with application owners deciding when each tool is connected
budget_owner: CFO or COO
sources:
  - Plan a single sign-on deployment - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/plan-sso-deployment
  - What is automated app user provisioning in Microsoft Entra ID - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/app-provisioning/user-provisioning
  - SP 800-63C-4, Digital Identity Guidelines: Federation and Assertions - CSRC | https://csrc.nist.gov/pubs/sp/800/63/c/4/final
related:
  - Why departments buy overlapping software for the same capability | /discovery/departments-buy-overlapping-software-for-the-same-capability/
  - New SaaS purchases create integrations nobody budgets to maintain | /discovery/why-new-saas-integrations-have-no-maintenance-budget/
  - Business capabilities that depend on tools nobody supports | /discovery/business-capabilities-depend-on-tools-with-no-support-owner/
summary: Each new SaaS tool arrives with its own passwords while sign-in controls stay on a few core systems. How to measure SSO coverage and close the gap in a sensible order.
layout: plain
---
The business runs on about fifty cloud applications. Email, the accounting package and the HR system sign in through the company's single sign-on. Everything else has its own password: the marketing platform, the e-signature service, the project tool, the AI assistant a team adopted last quarter. When a manager asks whether everyone who left in March has lost access to everything, the honest answer is "to the things that use single sign-on, yes".

This article looks at the widening gap between the number of SaaS applications a business uses and the number connected to its central sign-in. The gap grows quietly because adding a new application is easy, and connecting it properly is a separate job that nobody scheduled.

## The problem in plain language

Single sign-on (SSO) lets a person sign in once, through a central identity service, and reach many applications. It gives the business one place to enforce multi-factor authentication, one place to remove access when someone leaves, and one record of who signed in where. An application that is not connected sits outside all of that. Its passwords are chosen by users, its accounts are created by whoever has admin rights, and it is only reviewed if somebody remembers.

Coverage lags for ordinary reasons. The vendor charges extra for SSO on its enterprise tier. The setup needs a certificate and an administrator who has time. The team that bought the tool does not know that SSO exists. Each application is a small decision, and together they leave a large share of the portfolio unmanaged.

## What the buyer is actually trying to solve

The IT manager or information officer wants to know which applications are protected by central controls and which are not, and to close the difference in a sensible order. The CFO wants to know what it will cost, since many SaaS vendors charge a premium for SSO. The COO wants new starters productive on day one and leavers removed on their last day without a manual checklist.

## Evidence and system mechanism

### SSO has a planning and ownership cost

Microsoft's guide to [planning a single sign-on deployment](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/plan-sso-deployment) lists the questions to answer before connecting an application: which administrative roles are required, who renews the SAML certificate, who must be told about changes, which licences are needed, and whether shared or guest accounts are in use. It notes that the certificate created for a federated application is by default valid for three years and that a process is needed to renew it before expiry. This is the work that does not appear in the vendor's brochure and is why SSO projects stall: each connection needs owners and a renewal date.

### Provisioning closes the joiner-and-leaver gap

Sign-in is only half the picture. Microsoft's explanation of [automated app user provisioning](https://learn.microsoft.com/en-us/entra/identity/app-provisioning/user-provisioning) describes automatically creating accounts when people join, deactivating them when they leave, keeping identities updated as roles change, and discovering existing local or orphan accounts. An application that supports SSO but not automatic provisioning can still keep a leaver's account alive inside the app, so both capabilities should be asked about.

### Federation is a recognised standard approach

NIST's guideline on [identity federations and assertions (SP 800-63C-4)](https://csrc.nist.gov/pubs/sp/800/63/c/4/final) describes federation as allowing an identity provider to supply authentication information to a number of separately administered relying applications. The point for a business is not the technical detail but that this is a mature, standard approach, not a niche feature to be treated as optional.

### Central sign-in is where multi-factor authentication is enforced

The US Cybersecurity and Infrastructure Security Agency's guidance on [requiring multifactor authentication](https://www.cisa.gov/secure-our-world/require-multifactor-authentication) advises turning on MFA across systems such as email, file storage and remote access, starting with admin accounts and employees who handle sensitive data, and using the strongest method available. When an application is outside SSO, MFA depends on that vendor's settings and on each user enabling it. The related access risk is described in [accounts without MFA and the financial risk](/impact/accounts-without-mfa-financial-risk/).

### Warning signs

- The business cannot list which applications use SSO and which do not.
- Leavers are removed through a checklist that names applications one by one; see [former employees retaining system access](/impact/former-employees-retaining-system-access/).
- New starters wait days for logins to separate tools, as in [why new employees wait for system access](/discovery/why-new-employees-wait-for-system-access/).
- Staff keep passwords in browsers, spreadsheets or shared documents.
- New AI tools are added by teams with their own accounts and no review.

## Problem owner and why-now trigger

The IT manager or identity administrator owns the connections, the information officer owns accountability for personal information held in the applications, and application owners decide whether and when to connect their tool. Procurement or finance holds the contract in which the SSO price is, or is not, included.

The trigger today is the spread of AI tools and departmental SaaS, each of which holds business data behind its own password. Cyber insurance renewals, customer security questionnaires that ask whether SSO and MFA cover all business applications, POPIA reviews and staff exits all expose the lag.

## Economic consequence

Unconnected applications multiply manual work: account creation, password resets, leaver checks and access reviews are all done by hand, application by application. Orphan accounts of former staff can remain open for months and expose customer information. A compromised password in a tool without MFA can lead to a data incident that has to be assessed and, where required, reported. Vendors often charge more for SSO, which is why it is skipped, but the saving is usually small against the cost of one significant incident. For the wider access picture see [when everyone has more system access than their job needs](/patterns/when-everyone-has-more-system-access-than-their-job-needs/).

## Root cause

- **SSO treated as a feature, not a standard.** Nobody requires it as a condition of buying.
- **Vendor pricing.** SSO is locked behind a higher tier that business owners decline.
- **Orphaned setup work.** Certificates, roles and renewal dates have no owner.
- **No list of applications.** Coverage cannot be measured against a portfolio nobody has counted.

## Practical intervention

1. **Measure coverage.** Take the application list and mark each application as connected to SSO, partly connected, or not. Report the percentage.
2. **Rank the gaps by data and access.** Connect first the applications that hold customer, financial or employee information, and those with many users or admin rights.
3. **Make it a purchase requirement.** Add "supports SSO and automated user provisioning, and at what price" to every software evaluation, and ask for the figure in writing.
4. **Price the upgrade properly.** Where SSO needs a higher tier, compare the extra cost with the manual effort and risk it removes, using the contract register described in [why software renewals need a confirmed business owner](/discovery/why-software-renewals-need-a-confirmed-business-owner/).
5. **Assign certificate and role owners.** Record the certificate expiry date, a named owner and a deputy for each connected application.
6. **Handle exceptions deliberately.** For applications that cannot be connected, require unique strong passwords through a password manager, MFA in the app, and a quarterly manual access review.

### Trade-offs

Connecting everything is rarely worth it. Small, low-risk tools used by one person may be better handled with a password manager and MFA. Centralising sign-in also concentrates risk in the identity service, which must itself be protected with strong MFA and a break-glass procedure.

### An illustrative example

Illustrative: a Gauteng engineering consultancy with 85 staff found that 17 of its 52 applications used SSO, a coverage of about a third. The information officer ranked the remainder by the data held, connected the six that held client drawings and personal information, and wrote a one-line SSO requirement into the purchasing checklist. A leaver check that once covered 20 separate logins was reduced to a handful of exceptions.

## Diagnostic questions

- What share of your applications sign in through the central identity service?
- Which applications holding personal information are outside it?
- Who owns each certificate, and when does it expire?
- What does SSO cost on your ten largest SaaS contracts?
- How many manual steps are in your leaver process?

## What good looks like

The business knows its SSO coverage as a number and improves it every quarter. New applications arrive with SSO and provisioning agreed up front, or with a recorded exception. Leavers lose access in one action, and MFA is enforced in one place for most of the portfolio.

## Where Mellorca fits

A [digital systems audit](/services/digital-systems-audit/) can measure SSO coverage across the real portfolio. Systems implementation and integration work can connect priority applications and automate joiner and leaver provisioning, with digital operations improvement setting up the purchasing check and review routine.

## Method note

Microsoft documents describe its own products; the NIST and CISA documents are reference guidance rather than South African legal requirements. The example is illustrative rather than a client case, and obligations under POPIA should be confirmed with a qualified adviser.
