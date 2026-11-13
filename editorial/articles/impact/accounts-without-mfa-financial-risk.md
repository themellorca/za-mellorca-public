---
hub: impact
record_id: CPS-130
slug: accounts-without-mfa-financial-risk
title: Important accounts without MFA: The cost of preventable takeover
description: Passwords alone leave email, finance and remote-access accounts open to takeover. The cost shows up in recovery, downtime, fraud and lost trust.
lead: A password is a single point of failure. When email, finance, remote access or administrator accounts depend on passwords alone, one stolen credential can become an operational and financial incident.
category: Cybersecurity
published_date: 2026-09-01
updated_date: 2026-09-01
byline_category: Cybersecurity, Passwords & Access Control
tags:
  - Risk exposure
  - Downtime
  - Recovery cost
cta_label: Digital Systems Audit
cta_href: /services/digital-systems-audit/
side_title: Cost mechanisms
side_text: Authentication should be reviewed as part of the wider access and systems environment.
commercial_domain: Cybersecurity, Passwords & Access Control
primary_pain: Important business accounts rely on passwords alone
primary_cost_mechanism: Incident recovery, fraud exposure, downtime and business interruption
sources:
  - Require Multifactor Authentication - CISA | https://www.cisa.gov/secure-our-world/require-multifactor-authentication
  - More than a Password - CISA | https://www.cisa.gov/MFA
  - Microsoft Entra authentication overview - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-methods
  - Turn on 2-step verification (2SV) | https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/activate-2-step-verification-on-your-email
  - Require Multifactor Authentication - CISA | https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/require-multifactor-authentication
  - #StopRansomware Guide - CISA | https://www.cisa.gov/stopransomware/ransomware-guide
closing_title: Method note
closing_text: No generic breach-cost benchmark is used here. Quantify exposure from your own affected labour, downtime, transaction authority and response requirements.
related:
  - Reused passwords: How one stolen login becomes a business-wide risk | /impact/reused-passwords-single-credential-business-risk/
  - Backups in the same place as the data: The risk of losing both | /impact/backups-same-environment-losing-both-copies-risk/
  - Backups nobody has tested: The cost when recovery fails | /impact/backups-never-tested-restore-financial-cost/
---
## The tolerated pain is a fragile login

Businesses often treat a successful login as proof that access control is working. The more useful question is what happens after a password is stolen, reused, phished or exposed. If the password is the only factor protecting an account, possession of that credential can be enough to cross the front door.

This matters most where an account can read email, approve payments, reach customer information, administer systems or connect remotely. The technical weakness is simple; the commercial consequence can spread across several functions at once.

Picture a 40-person distribution business in Gqeberha. The financial manager’s mailbox is protected by a password she also used, years ago, on a supplier portal that was later breached. Nobody notices anything until a customer phones to ask why the company’s banking details changed in last week’s statement email. By then, the mailbox has been read for days, a forwarding rule has been added, and two customers have paid into the wrong account. Nothing in that sequence required sophisticated hacking. It required one reused password and no second factor.

## Why password-only access survives

Multi-factor authentication can be postponed because passwords feel familiar, some legacy systems make stronger authentication awkward, and managers worry about adding friction. The weakness remains invisible during normal operations because nothing appears broken.

CISA’s current guidance for small organisations [recommends MFA across email, file storage and remote access](https://www.cisa.gov/secure-our-world/require-multifactor-authentication), starting with administrators and people handling sensitive data. CISA’s [ransomware guidance](https://www.cisa.gov/stopransomware/ransomware-guide) likewise recommends phishing-resistant MFA, particularly for email, VPNs and critical systems. The UK’s [National Cyber Security Centre](https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/activate-2-step-verification-on-your-email) makes the same point for everyday accounts: even accounts with strong passwords benefit from two-step verification, because passwords are commonly stolen through data breaches and phishing.

There are also quieter reasons MFA coverage stays patchy:

- **Exceptions that never close.** A director travelling abroad is exempted “for now”, and the exemption outlives the trip.
- **Shared and service accounts.** A shared finance mailbox or an integration account cannot easily receive a code, so it is left out. Our note on [why automations should not run on personal credentials](/discovery/why-automations-should-not-run-on-personal-credentials/) explains why these accounts need their own design.
- **Applications outside the main identity platform.** MFA is on for email, but not for the accounting package, payroll portal or banking profile, each of which has its own login.

## How the pain becomes money

- **Recovery labour:** IT and management spend paid hours investigating, resetting access, reviewing logs and restoring confidence in affected systems.
- **Operational downtime:** accounts or systems may be disabled while the incident is contained.
- **Fraud exposure:** compromised email or finance accounts can be used to manipulate payment instructions or impersonate trusted people.
- **Customer and supplier disruption:** communications may need to be verified, corrected or reissued.
- **Specialist response cost:** outside security, legal or forensic support may be required depending on the incident.

> **The commercial signal:** if one stolen password can give an attacker useful access to email, finance, remote access or administration, the business is accepting a preventable concentration of risk.
>

## Model the exposure without inventing a breach number

Generic breach averages are a poor substitute for your own operating exposure. Build a scenario from the accounts that matter.

- **Incident labour exposure** = people involved × response hours × loaded hourly cost
- **Downtime exposure** = affected employees × unavailable hours × loaded hourly cost + contribution margin genuinely lost during the interruption

Add external response, recovery and contractual costs only where they are credible for the scenario. Do not assume every account compromise becomes a major breach; the purpose is to understand how much downside a weak authentication point can unlock.

A useful way to run this is account by account. For the distribution business above, the finance mailbox scenario might involve three people for two days of investigation and customer calls, a morning of lost invoicing, and the exposure of any payment that cannot be recovered. The value of a payment that could be redirected is bounded by the size of the invoices that mailbox normally sends, which finance already knows. That gives a defensible range without borrowing a headline figure from someone else’s breach.

## Not all MFA is equal

CISA recommends using the strongest method available and specifically favours phishing-resistant approaches. That matters because a business can technically “have MFA” while still relying on weaker methods that are more vulnerable to social engineering. The right control should reflect the value and privilege of the account.

CISA’s guidance for businesses ranks methods roughly as follows, from strongest to weakest:

| Method | Typical use | Notes |
| --- | --- | --- |
| Physical security keys and passkeys (FIDO) | Administrators, finance approvers | CISA describes FIDO/WebAuthn as the only widely available phishing-resistant option |
| Authenticator app with number matching | Most staff | CISA recommends number matching to counter push-notification bombardment |
| Authenticator app codes | Most staff, older systems | Better than SMS, but codes can still be phished |
| SMS or email codes | Fallback only | CISA describes these as the weakest protection |

[Microsoft’s documentation for its identity platform](https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-methods) makes a similar distinction: codes and push approvals are a significant improvement on passwords alone but remain open to remote phishing, so it recommends passkeys, security keys, Windows Hello for Business or certificate-based authentication where possible. For a smaller business, the practical takeaway is to reserve the strongest methods for the accounts that can move money or change other people’s access, and accept app-based MFA as a sound baseline elsewhere.

## How to diagnose your current position

Most businesses believe their MFA coverage is better than it is. A short check usually reveals the gaps:

1. Export the sign-in or user report from your email and identity platform and filter for accounts without MFA registered.
2. List every separate login that sits outside that platform: banking, payroll, accounting, domain registrar, website hosting, social media.
3. For each, record whether MFA is enforced, optional or unavailable.
4. Check for legacy sign-in methods that bypass MFA, such as old mail protocols left switched on.
5. Identify shared accounts and integration accounts, and note who controls them.

## When this becomes commercially urgent

Priority is high when administrator accounts lack MFA, remote access is password-only, finance or email accounts can approve or redirect transactions, staff reuse passwords, or the business cannot produce a list of accounts where MFA is enforced. Legacy systems that cannot support modern authentication deserve an explicit risk decision rather than indefinite acceptance.

## What good looks like

Important accounts require strong MFA, privileged accounts receive stronger controls, enrolment is monitored, exceptions are documented and time-bound, and authentication is part of a wider identity lifecycle. The organisation knows which systems cannot meet the standard and has a plan to reduce or retire that exposure. MFA also works best alongside disciplined access management; see [the financial risk of uncontrolled system access](/impact/uncontrolled-system-access-financial-risk/) and [former employees retaining system access](/impact/former-employees-retaining-system-access/), because a well-protected account that should not exist is still a risk.

### Trade-offs and friction

Friction is real but manageable. Remembered devices, single sign-on and number matching reduce prompts for routine work while keeping the control where it matters. The bigger operational risk is lockout: plan recovery routes, keep at least two administrators with strong MFA, and store break-glass credentials securely so a lost phone does not stop the business.

## Practical next actions

- Inventory email, finance, cloud, remote-access and administrator accounts.
- Identify which accounts still allow password-only access.
- Enable MFA first for privileged and commercially sensitive accounts.
- Prefer phishing-resistant methods where supported.
- Remove unnecessary accounts and review privileged access regularly.
- Track MFA coverage as an operating control rather than a one-off project.

### What to do first

This week, enforce MFA on every administrator account and every mailbox that sends invoices or payment details. Next, cover remote access and banking profiles. Then close legacy sign-in routes and set a monthly check of coverage, and add MFA set-up to the onboarding checklist so new staff never start without it.

## Bottom line

MFA does not eliminate cyber risk. It removes an unnecessarily weak failure mode: a stolen password being enough on its own. Where the account controls money, data or critical systems, that reduction in exposure is a business control, not an IT convenience.

*Method note:* no generic breach-cost benchmark is used here. Quantify exposure from your own affected labour, downtime, transaction authority and response requirements.
