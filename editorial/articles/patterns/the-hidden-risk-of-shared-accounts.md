---
hub: patterns
record_id: PAT-353
slug: the-hidden-risk-of-shared-accounts
title: The Hidden Risk of Shared Accounts
description: One login used by many people is convenient until something goes wrong and nobody can say who did what. Here is why shared accounts create hidden risk and how to replace them.
lead: One login used by many people is convenient until something goes wrong and nobody can say who did what. Here is why shared accounts create hidden risk and how to replace them.
category: Security, Access & Accountability
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Security, Access & Accountability
pattern_family: Security, Access & Accountability
observable_condition: Several people log in to the same account for email, banking, accounting, social media or supplier portals, and the password is passed around by chat or note.
primary_identification: Shared credentials replacing individual identity: the business cannot attribute actions to a person, remove one person's access, or show control to a regulator or insurer.
commercial_value_dimensions: Financial control, fraud and breach exposure, regulatory compliance, operational continuity and reputation
sources:
  - Password administration for system owners | https://www.ncsc.gov.uk/collection/passwords
  - NIST Special Publication 800-63B | https://pages.nist.gov/800-63-3/sp800-63b.html
  - Protection of Personal Information Act 4 of 2013 - South African Government | https://www.gov.za/documents/protection-personal-information-act
related:
  - When AI Agents Can Act but Governance Cannot See Them | /patterns/when-ai-agents-can-act-but-governance-cannot-see-them/
  - When Nobody Knows Which Spreadsheet Is the Latest | /patterns/when-nobody-knows-which-spreadsheet-is-the-latest/
  - When Offboarding Leaves Digital Access Behind | /patterns/when-offboarding-leaves-digital-access-behind/
summary: One login used by many people is convenient until something goes wrong and nobody can say who did what. Here is why shared accounts create hidden risk and how to replace them.
layout: plain
---
## Observable condition

Several people in the business log in to the same account. The marketing inbox is used by three people. The accounting package has one login for the whole finance team. The company's social media page, the supplier portal, the bank's business platform and the domain registrar each have one username and password, kept on a sticky note, in a spreadsheet or in the memory of whoever set it up. Nobody remembers choosing this. It was quicker than setting up an account for each person, and it worked.

Day to day, it does work. People can cover for one another and a new starter can be productive on day one. The password is shared on WhatsApp when someone needs it. When someone leaves, a few people remember to change it and the rest do not.

An illustrative example: a Pretoria property management company with about forty staff shares one login to its online bank account between the bookkeeper, the office manager and a part-time assistant. When a payment goes to the wrong supplier account, nobody can say who captured it. The bank's records show only the shared username. The business is left reconstructing events from memory and email timestamps.

## Realisation

A shared account hides who did what. The risk is not only that an outsider might guess the password. It is that the business loses the ability to answer basic questions: who approved that payment, who changed that setting, who deleted that file, who still has access. Without individual identity, there is no accountability, and without accountability, there is no reliable audit trail.

The US Cybersecurity and Infrastructure Security Agency advises that every account should have its own strong password and that people should not reuse passwords across accounts. The UK National Cyber Security Centre's guidance on passwords makes a similar point from the angle of practicality: systems should be designed around how people actually behave, rather than leaving them to find workarounds. Sharing is the workaround. People share because the alternative, a separate login for each person for each tool, is slow or costs another licence.

Access control law is also relevant. South Africa's Protection of Personal Information Act requires responsible parties to secure the integrity and confidentiality of personal information in their care by taking appropriate, reasonable technical and organisational measures. A login that a dozen people know, and nobody can attribute, is difficult to describe as an appropriate measure.

**Realisation prompt:** for your most important shared login, can you say who used it last Tuesday?

## Identification

This is a pattern of shared credentials replacing individual identity. The visible symptom is one account used by many people. The common assumption is that sharing is a minor convenience and the only risk is a leaked password. The structural cause is that the business has not given each person a way to work in the tool under their own identity, so sharing is the path of least resistance.

The published Pattern [when everyone has more system access than their job needs](/patterns/when-everyone-has-more-system-access-than-their-job-needs/) covers the related problem of excess permissions, and [why former employees still have access](/patterns/why-do-former-employees-still-have-access/) looks at what happens when leavers keep their credentials. Shared accounts make both worse, because there is no individual account to remove or restrict.

## Diagnosis

- **Licence cost avoidance.** The software charges per user, so one account is shared to save money.
- **Admin accounts as everyday accounts.** The person who set up a tool created one all-powerful login and everyone has been using it since.
- **No approved way to share.** Without a company password manager or delegated access, people use chat messages and notes.
- **Handover by password.** When responsibilities change, the password is passed along instead of access being granted and removed.
- **Leaver blind spot.** The leaver checklist covers email and laptop but not the twenty shared logins the person knew.
- **Multi-factor authentication tied to one phone.** The verification code goes to one person's mobile, so when that person is away or leaves, everyone is locked out or the code is forwarded around.

## Commercial impact

The commercial value at stake is financial control, fraud and breach exposure, regulatory compliance, operational continuity and reputation.

When something goes wrong, a shared account turns a quick investigation into a dispute. If a supplier's bank details are changed, or a customer list is exported, or a social media post goes out that should not have, the business cannot say who did it, and it cannot show a regulator or an insurer that it had control. The Impact page on [shared passwords, lost accountability and breach exposure](/impact/shared-passwords-lost-accountability-breach-exposure/) sets out the financial and legal side. Accounts without a second verification step add to the exposure, as [accounts without multi-factor authentication](/impact/accounts-without-mfa-financial-risk/) explains.

There is an operational cost as well. When the shared password is changed after a leaver, everyone has to be told, and some are not. Work stops until someone finds the new password. A single shared login also means that a mistake by one person can lock the account for all.

## Common misidentification

Many businesses see this as a staff behaviour issue and respond with a policy: do not share passwords. The policy is ignored, because the tool gives people no other way to do the job. The behaviour reflects the design, not the discipline.

Another response is to demand ever more complex passwords. Complexity does not help when twelve people know the password. NIST's digital identity guidelines focus instead on the length of passwords, checking against known breached passwords and using a second factor, and they treat the authenticator as belonging to one person. The Discovery page on [API credentials shared across unrelated integrations](/discovery/api-credentials-shared-across-unrelated-integrations/) shows the same mistake in automated systems.

## Possibility

In a better state, every person has their own login for each tool, with permissions matched to their role. Where the software charges per user, the business has decided that the cost is worth the accountability, or has used delegated access features that let people act on behalf of a shared mailbox or page without sharing a password. The few accounts that truly cannot be individual, such as the domain registrar, sit in a company password manager with named owners and a record of who has retrieved them. Multi-factor authentication uses more than one device or method for the critical ones. When someone leaves, their access is removed in minutes and nothing else breaks.

For the property company, that could mean individual bank users with their own limits and an approval step for new beneficiaries, so that every payment shows who captured it and who released it.

## Intervention

1. **List shared accounts.** Ask each team which tools they log in to with a shared credential. Include bank, tax, supplier, marketing, domain and software accounts.
2. **Rank by consequence.** Put accounts that move money, hold personal information or represent the brand at the top.
3. **Replace with individual access.** For each high-risk account, create named users or use delegated access. Accept the licence cost where the exposure justifies it.
4. **Vault the remainder.** Put unavoidable shared credentials in a company password manager with named owners and access logs.
5. **Fix multi-factor authentication.** Make sure verification does not depend on one person's phone.
6. **Change what was shared.** Once each person has their own access, change the old shared password so that past sharing no longer matters.
7. **Add it to the leaver and mover checklist.** Include shared and vaulted accounts, not only email and devices.

## Diagnostic questions

- Which accounts in the business are used by more than one person under a single login?
- If a payment or a setting were changed on one of them today, could you find out who did it?
- When did the passwords for those accounts last change, and who was told?
- Who can receive the verification code for each critical account?
- Does the leaver checklist cover shared logins?

## Bottom line

Shared accounts trade a little convenience today for a large loss of control tomorrow. The cost appears only when something goes wrong, and by then the evidence needed to resolve it does not exist. Giving each person their own identity, vaulting the few credentials that must be shared and tying access to the leaver process turns an invisible exposure into an ordinary, manageable part of running the business.
