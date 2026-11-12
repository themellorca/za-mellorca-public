---
hub: patterns
record_id: PAT-351
slug: why-do-former-employees-still-have-access
title: Why Do Former Employees Still Have Access?
description: Former staff keep access when it was bound to shared passwords, personal accounts, live sessions or their own integration keys rather than a company identity. Binding access to business-controlled identities makes offboarding complete by design.
lead: Former staff keep access when it was bound to shared passwords, personal accounts, live sessions or their own integration keys rather than a company identity. Binding access to business-controlled identities makes offboarding complete by design.
category: Security, Access & Operational Risk
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Security, Access & Operational Risk
pattern_family: Security, Access & Operational Risk
observable_condition: Former employees can still reach business tools, accounts or assets after leaving, even though their main company account was disabled.
primary_identification: Identity-binding and access-visibility problem: access is tied to shared passwords, personal accounts, sessions and personal keys rather than a governed company identity.
commercial_value_dimensions: risk, resilience, continuity, cost
sources:
  - Revoke user access in an emergency in Microsoft Entra ID - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/users/users-revoke-access
  - Identity and access management | https://www.ncsc.gov.uk/collection/10-steps/identity-and-access-management
  - Section 19 Security measures on integrity and confidentiality of personal information - POPIA | https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/
related:
  - Why AI Adoption Creates a New Access-Control Problem | /patterns/why-ai-adoption-creates-a-new-access-control-problem/
  - When AI Agents Can Act but Governance Cannot See Them | /patterns/when-ai-agents-can-act-but-governance-cannot-see-them/
  - The Difference Between Having Data and Having Visibility | /patterns/the-difference-between-having-data-and-having-visibility/
summary: Former staff keep access when it was bound to shared passwords, personal accounts, live sessions or their own integration keys rather than a company identity. Binding access to business-controlled identities makes offboarding complete by design.
layout: plain
---
## Observable condition

The business did what it was supposed to do. When the marketing coordinator left, IT disabled her email account on her last day and collected her laptop. Six months later she mentions, kindly, that she can still log in to the company's social media scheduling tool. A few weeks after that, the business discovers that its website domain is registered to her personal Gmail address, and the renewal reminders have been going to her.

Variations of this are common. A former bookkeeper still knows the shared password for the bank-statement import tool. A developer who left last year still has a working key for the online store's admin interface. A former sales rep's phone still has the CRM app signed in. A supplier portal still lists an ex-employee as the only administrator. In each case, the business believed access had been removed, because the access it could see had been.

## Realisation

Most offboarding focuses on the accounts the business knows it issued: email, the directory login, perhaps the accounting system. That is necessary, but it rests on an assumption that every form of access is attached to one company identity that can be switched off. In practice, a lot of access is attached to other things: knowledge of a shared password, a personal email address, a long-lived session on a device, a key created for an integration, or an administrator role in a tool nobody else uses.

Disabling the main account cannot remove access that was never connected to it. The question is not whether the business followed its leaver checklist, but whether the checklist can see all the access a person actually had.

Realisation prompt: for someone who left recently, could the business produce a complete list of every system, shared credential, key and external account they could use? If that list can only be built by asking them, the business does not know what access it is trying to remove.

## Identification

This is an **identity-binding and access-visibility problem**. Access to business systems is bound to personal knowledge, personal accounts, devices and tokens rather than to a governed company identity, so leaver processes remove the visible access and leave the rest.

It complements the workflow view in [when offboarding leaves digital access behind](/patterns/when-offboarding-leaves-digital-access-behind/), which examines how the leaver event fails to reach every system owner. Here the concern is access that no leaver workflow, however well run, could reach because nobody knew it existed in that form.

## Diagnosis

The visible symptom is a former employee who can still get in. The common assumption is that someone forgot a step. The structural causes are usually these:

- **Shared credentials.** Tools used by a team are accessed through one login whose password everyone knows. Removing a person does nothing, because the credential is in their memory or their browser. The only fix is to change the password, and nobody wants to disrupt the team.
- **Business assets in personal accounts.** Domains, social media profiles, analytics, app-store listings and supplier portals were set up quickly with whatever email address was to hand. The business does not control the account; the person does.
- **Sessions that outlive the account.** Microsoft's guidance on [revoking user access in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/users/users-revoke-access) explains that disabling a user and revoking sign-in sessions stops new tokens being issued, but applications that rely on their own session tokens control access through their own policies, and Entra ID cannot directly revoke them. Access may persist until those sessions expire or the application deprovisions the user. Apps that allow users to sign in directly, without the central identity, are not affected at all.
- **Keys and automations created by individuals.** Integrations, API keys and scheduled automations are created under a person's account and keep working after they leave. The related issue is discussed in [why automations should not run on personal credentials](/discovery/why-automations-should-not-run-on-personal-credentials/).
- **Unlisted applications.** Tools adopted by a team, often on a card, never reach the inventory used for offboarding, a gap explored in [why businesses cannot list all the applications they use](/discovery/why-businesses-cannot-list-all-applications-they-use/).

Established guidance treats this as a basic control. The UK National Cyber Security Centre's guidance on [identity and access management](https://www.ncsc.gov.uk/collection/10-steps/identity-and-access-management) calls for policies on who should have access to what and why, covering staff, contractors and visitors; for joiner, mover and leaver processes that remove access when it is no longer needed; and for regular reviews of accounts and privileges. In South Africa, section 19 of POPIA requires a responsible party to secure the integrity and confidentiality of personal information through appropriate, reasonable technical and organisational measures, including identifying foreseeable internal and external risks and regularly verifying that safeguards are working, as set out on the [POPIA section 19 page](https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/). A business that cannot say who can still reach its customer data will find that difficult to demonstrate.

## Commercial impact

The commercial value at stake is **risk, resilience, continuity and cost**.

- **Security and compliance risk.** Former staff, or anyone who compromises their personal accounts, may reach customer data, financial tools or the company's public presence.
- **Loss of control over assets.** If a domain, social profile or supplier portal belongs to a former employee's personal account, the business may struggle to recover it, especially if the departure was not amicable.
- **Continuity.** Automations and integrations tied to a leaver's account may stop without warning when that account is eventually closed.
- **Licence cost.** Seats continue to be paid for people who have gone, a waste examined in [the financial risk of former employees retaining system access](/impact/former-employees-retaining-system-access/).

The scale depends on what each forgotten access path could reach. A practical starting point is to review the last few leavers and list what they could still use a month after leaving.

## Common misidentification

The common response is to tighten the leaver checklist. That helps with known accounts, but a checklist can only list what the business knows about. A second response is to rely on the honesty of departing staff. Most people are trustworthy, but control should not depend on that, and personal accounts can be compromised regardless of intent.

## Possibility

In a stronger state, business access is bound to company-controlled identities. Team tools use individual named logins, ideally through single sign-on, rather than shared passwords. Domains, social profiles and supplier portals are registered to company-owned role addresses with at least two administrators. Integrations run under service accounts owned by the business. Applications are inventoried with an owner, and disabling the central identity removes or flags access everywhere it matters.

Offboarding then becomes a matter of switching off one identity and confirming the exceptions, rather than hoping the list was complete.

## Intervention

1. **Inventory access, not just accounts.** For each application, record how people get in: named login, single sign-on, shared credential or personal account.
2. **Move business assets to business ownership.** Transfer domains, social profiles, analytics and supplier portals to company role addresses with more than one administrator.
3. **Replace shared logins.** Where a tool supports named users, use them. Where it does not, keep the credential in a business password manager and rotate it when anyone leaves.
4. **Connect applications to central identity** where possible, and configure deprovisioning so that removing a user ends their sessions in each application.
5. **Move integrations to service accounts** with named owners, and record which keys exist.
6. **Review periodically.** Compare active users in each important application against current staff and contractors, and treat any mismatch as a process signal.

## An illustrative example

The following is illustrative, not a client case. A Stellenbosch wine-tourism business with twenty staff loses its online booking page for three days when its domain lapses. The domain was registered years ago by a former manager using her personal email, and the renewal notices went to an inbox nobody at the business could see. Her company account had been disabled correctly. The access that mattered was never attached to it.

## Practical diagnostic questions

- Which tools does your team access through a shared login?
- Are your domain, social profiles and supplier portals owned by company addresses with two administrators?
- Do integrations and automations run under personal accounts?
- Does disabling a user's main account end their access in every important application?
- When did you last compare each application's active users against your staff list?

## Bottom line

Former employees keep access when access was never bound to an identity the business controls. Inventorying how people really get in, moving assets and integrations into business ownership and replacing shared logins makes offboarding complete by design rather than by luck.
