---
hub: patterns
record_id: PAT-046
slug: the-hidden-cost-of-signing-in-to-every-system-separately
title: The Hidden Cost of Signing In to Every System Separately
description: Email, accounting, CRM, payroll and supplier portals each have their own login, password rules and verification codes. When every application manages its own identity, staff lose time, shortcuts weaken security and removing leavers becomes guesswork.
lead: Email, accounting, CRM, payroll and supplier portals each have their own login, password rules and verification codes. When every application manages its own identity, staff lose time, shortcuts weaken security and removing leavers becomes guesswork.
category: Disconnected Systems & Integration Friction
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Disconnected Systems & Integration Friction
pattern_family: Disconnected Systems & Integration Friction
observable_condition: Staff sign in separately to many business applications during the day, deal with time-outs, verification codes and lock-outs, and resort to saved, reused or shared passwords.
primary_identification: Fragmented identity: each application manages its own users and credentials instead of relying on a central work identity, so access and security are managed in many places.
commercial_value_dimensions: Productivity, risk, onboarding speed and management capacity
sources:
  - What is single sign-on in Microsoft Entra ID? - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-single-sign-on
  - NIST Special Publication 800-63B | https://pages.nist.gov/800-63-4/sp800-63b.html
related:
  - When Disconnected Systems Let the Business Act on Old Information | /patterns/when-disconnected-systems-let-the-business-act-on-old-information/
  - When Automation Stops at the Edge of Each System | /patterns/when-automation-stops-at-the-edge-of-each-system/
  - When One Change Has to Be Made in Every System You Own | /patterns/when-one-change-has-to-be-made-in-every-system-you-own/
summary: Email, accounting, CRM, payroll and supplier portals each have their own login, password rules and verification codes. When every application manages its own identity, staff lose time, shortcuts weaken security and removing leavers becomes guesswork.
layout: plain
---
## Observable condition

The working day starts with signing in. Email first, then the accounting system, then the CRM, the payroll portal, the supplier portal, the bank and the job-management app. Each has its own username, its own password rules and, increasingly, its own verification code sent to a phone. By mid-morning one of them has timed out and needs signing in again. Somebody is locked out of the payroll system and waits for the one person who can reset it.

Staff adapt. Passwords are saved in the browser, written in a notebook or reused across systems. A shared login is created for a tool "because it is easier". When someone leaves, nobody is quite sure which of the dozen systems they had accounts in.

An illustrative example: a Bloemfontein accounting practice with about fifteen staff used more than ten separate online systems, each with its own sign-in. The practice manager spent part of most weeks resetting passwords and unlocking accounts. When a junior staff member resigned, their access to two client portals was only discovered and removed months later.

## Realisation

Each sign-in seems trivial, but the pattern is not. Every separate login is a separate identity the business must create, manage and remove. Every password is something a person must remember or store. Every lock-out is a delay. Spread across a team and across every working day, login-switching becomes a steady drag on time and a steady source of risk.

The risk side is significant. CISA's guidance on multi-factor authentication explains that requiring more than one authenticator makes users significantly less likely to be hacked, and recommends phishing-resistant methods where possible. But when every system has its own login and its own verification method, applying strong authentication consistently becomes hard, and staff fatigue encourages workarounds such as shared accounts and reused passwords.

The alternative is well established. Microsoft's documentation describes single sign-on as letting users sign in once with one set of credentials and then open every assigned application without signing in again. It lists fewer credentials, consistent security policies, central access management and fewer password resets reaching the help desk as benefits. NIST's digital identity guidelines also advise against forcing periodic password changes without evidence of compromise, a common source of lock-outs and forgotten passwords.

**Realisation prompt:** how many separate usernames and passwords does a typical member of your team use in a day?

## Identification

This is a pattern of **fragmented identity**: each business application manages its own users and credentials, so people sign in repeatedly, the business manages many separate identities, and security controls are applied unevenly. The visible symptoms are frequent lock-outs, password resets and shared logins. The common assumption is that logging in is simply part of using software. The structural cause is that applications were adopted one at a time, each with its own user list, and never connected to a central identity.

The moment-by-moment experience is described in [ten open tabs and five logins](/moments/ten-open-tabs-and-five-logins/). This article looks at what lies underneath: why identity is fragmented and what that costs the business beyond irritation.

## Diagnosis

- **Applications were added without an identity plan.** Each new subscription was set up with its own user accounts, often by the team that bought it.
- **No central identity provider.** The business has email accounts in one place, but other applications are not connected to them for sign-in.
- **Inconsistent security settings.** Some systems require verification codes, some do not; password rules and time-outs differ in each.
- **Access is managed in many places.** Adding a new employee means creating accounts in each system; removing a leaver means remembering every one of them.
- **Shortcuts fill the gap.** Shared logins, reused passwords and passwords stored in insecure places become the practical way to cope.

## Commercial impact

The commercial value at stake is productivity, risk, onboarding speed and management capacity.

The productivity cost is time spent signing in, recovering from time-outs and waiting for resets. It falls on everyone, and it also falls on whoever handles resets and unlocks, often a manager or a senior administrator whose time is valuable elsewhere.

The risk cost is larger. Reused and shared passwords mean one compromised credential can open several systems. The Impact page on [reused passwords as a single point of failure](/impact/reused-passwords-single-credential-business-risk/) sets out how that risk accumulates. Fragmented identity also makes offboarding unreliable, which is why former staff can keep access long after they leave, as described in [when offboarding leaves digital access behind](/patterns/when-offboarding-leaves-digital-access-behind/).

Onboarding suffers too. A new employee may wait days for accounts to be created in every system they need, starting their job unable to do it.

## Common misidentification

A common response is to give staff a password manager and consider the problem solved. Password managers are a good control and reduce reuse, but they do not centralise access. The business still manages many separate identities, and leavers still have to be removed from each system.

Another response is to relax security to reduce friction, for example by turning off verification codes. That reduces annoyance at the expense of protection, when the better answer is fewer, stronger sign-ins.

A third is to accept the burden as an IT matter. In practice it is an operational one: it shapes how fast people start work, how much time they lose and how exposed the business is.

## Possibility

In a better state, staff sign in once with a strong, verified work identity and reach the applications they need without repeated logins. New employees receive access to a standard set of applications on day one, based on their role. When someone leaves, disabling one identity removes access to every connected system. Security settings such as multi-factor authentication are applied once, centrally, rather than system by system.

For the accounting practice, the change was to connect its main applications to the identity provider it already used for email, and to make that the only way to sign in where the applications supported it. For the few systems that could not be connected, access was listed so leavers could be removed reliably.

## Intervention

1. **List every application and who has access.** Include subscriptions bought by individual teams. This list is the foundation for everything else.
2. **Check which applications support single sign-on.** Many business applications support standard protocols such as SAML or OpenID Connect, sometimes on specific plans.
3. **Choose a central identity provider.** Most businesses already have one through their email and productivity platform.
4. **Connect the most-used and highest-risk applications first.** Finance, payroll, customer data and email-linked systems usually come first.
5. **Apply strong authentication centrally.** Enforce multi-factor authentication at the identity provider, preferring phishing-resistant methods where possible.
6. **Tie access to roles and to leaving.** Grant standard access by role and make disabling the central identity part of every exit. The Insight on [knowing when you have too many business apps](/insights/how-to-know-when-you-have-too-many-business-apps/) can help decide which applications to keep.

## Practical diagnostic questions

- How many separate sign-ins does a typical employee use each day?
- Who handles password resets and lock-outs, and how much of their time does it take?
- Are any systems accessed through a shared login?
- When someone leaves, how do you know you have removed every account?
- Is multi-factor authentication applied consistently across all your business systems?

## Bottom line

Logging in all day is more than an annoyance. It reflects a business that manages many separate identities, applies security unevenly and struggles to grant or remove access reliably. Connecting applications to a single, strongly protected work identity reduces lost time, closes common security gaps and makes joining and leaving the business far cleaner.
