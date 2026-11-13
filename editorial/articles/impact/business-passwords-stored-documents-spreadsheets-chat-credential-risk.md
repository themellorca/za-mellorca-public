---
hub: impact
record_id: CPS-137
slug: business-passwords-stored-documents-spreadsheets-chat-credential-risk
title: Passwords in Spreadsheets and Chats: The Business Risk of Insecure Storage
description: A spreadsheet of logins or a password pasted into a group chat is convenient. It also hands anyone who reaches that file or chat the keys to banking, email and customer systems.
lead: A spreadsheet of logins or a password pasted into a group chat is convenient. It also hands anyone who reaches that file or chat the keys to banking, email and customer systems.
category: Information Security
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Information Security
commercial_domain: Information Security
primary_pain: Business passwords are kept in documents, spreadsheets, email and chat messages where anyone who reaches them can read them
primary_cost_mechanism: Payment fraud and account takeover risk, incident response and password reset labour, external specialist fees, personal information compromise duties, and lost accountability on shared logins
sources:
  - Unsecured Credentials: Credentials In Files, Sub-technique T1552.001 - Enterprise - MITRE ATT&CK® | https://attack.mitre.org/techniques/T1552/001/
  - Managing your passwords | https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/password-managers
  - Protection of Personal Information Act 4 of 2013 - South African Government | https://www.gov.za/documents/protection-personal-information-act
related:
  - Guests on the Business Network: The Hidden Cost of Poor Separation | /impact/guest-devices-sharing-network-with-business-systems-poor-network-separation-financial-security-risk/
  - One Click, Real Rands: What Weak Phishing Awareness Costs a Business | /impact/employees-clicking-fraudulent-links-weak-security-awareness-phishing-fraud-interruption-cost/
  - Five Logins for One Request: The Productivity Cost of Fragmented Systems | /impact/staff-several-logins-systems-one-customer-request-fragmented-operations-cost/
summary: A spreadsheet of logins or a password pasted into a group chat is convenient. It also hands anyone who reaches that file or chat the keys to banking, email and customer systems.
layout: plain
---
## The file called "logins"

Ask around a typical 25-person business and someone will know about the file. It might be a spreadsheet on the shared drive called "Passwords", a Word document on the office manager's desktop, a note in a phone, or a thread in a chat group where logins were pasted when a new person joined. It holds the online banking user name, the accounting system administrator account, the domain registrar, the courier portal, the social media accounts and the Wi-Fi key. It exists because people need to share access to accounts, and nobody set up a better way.

That file is one of the most valuable things in the business to an attacker, and it is usually protected less carefully than the office stationery cupboard.

## Why credentials end up in documents and chats

Insecure credential storage is rarely careless. It is a practical answer to real problems:

- **Shared accounts.** Some services only allow one login per business, so several people need the same password.
- **Holiday cover.** When someone is away, a colleague needs to get into their accounts, so passwords are written down "just in case".
- **Too many systems.** Staff juggle dozens of logins and cannot remember strong, unique passwords for each one.
- **Onboarding by message.** New staff receive their logins in an email or chat because it is quick.
- **Supplier handovers.** An outside developer or IT provider sends administrator details in an email at the end of a project.

Each decision makes sense at the time. Over months they produce a scattered collection of plain-text secrets in places that were never designed to protect them.

## How attackers use them

Searching for stored credentials is a standard step for attackers once they have a foothold. The MITRE ATT&CK knowledge base describes this as [credentials in files](https://attack.mitre.org/techniques/T1552/001/): adversaries search local file systems and shared drives for files containing insecurely stored credentials, including user-created files with passwords and shared credential stores. The same applies to mailboxes and chat histories. If one staff email account is compromised through a phishing message, a search of that mailbox for the word "password" can reveal far more than the attacker originally gained.

The result is that one compromised account becomes many. An attacker who finds the banking login, the accounting administrator and the domain registrar in one spreadsheet does not need to break in again.

## The financial exposure

### Direct fraud

Access to banking profiles, payment approval accounts or supplier portals creates a route to redirect payments or change beneficiary details. Even where banks require a second approval, a business email account taken over with a stored password can be used to send convincing payment-change instructions to customers and suppliers.

### Incident response and recovery

Once a credential file is known to be exposed, every password in it must be treated as compromised. Changing dozens of logins, checking each account for misuse, revoking sessions and notifying affected parties takes days of skilled time. External incident response help is charged by the hour, and normal work slows while it happens.

### Regulatory and contractual consequences

Where those credentials protect systems holding customer or employee personal information, a compromise can trigger duties under the [Protection of Personal Information Act](https://www.gov.za/documents/protection-personal-information-act), which requires appropriate, reasonable technical and organisational measures to prevent unlawful access to personal information and sets out notification duties when a compromise occurs. This is general information, not legal advice.

### Lost accountability

When five people share one login stored in a spreadsheet, the system cannot show who did what. That makes errors and fraud harder to investigate, which is the problem described in [shared passwords and lost accountability](/impact/shared-passwords-lost-accountability-breach-exposure/).

## A scenario to size the risk

The following is an illustrative scenario, not a statistic. A business with a shared credential spreadsheet suffers a mailbox compromise. Responding requires resetting 40 accounts, reviewing activity in the banking, accounting and email systems, and engaging an outside specialist for two days. If internal staff spend 30 hours on the response at R300 an hour and the specialist charges R25,000, the direct cost is around R34,000, before any fraud loss, customer notification or downtime. The cost of a password manager for the same business is typically a small monthly fee per user. The comparison is not about the exact numbers; it is about a small, known cost set against a large, uncertain one.

## Why it persists

The file feels safe because it has never been misused, as far as anyone knows. Moving away from it feels like an IT project. And the person who maintains it is often the most trusted person in the business, so questioning it can feel personal. The related habit of using one password for several systems is covered in [reused passwords](/impact/reused-passwords-single-credential-business-risk/), and both problems usually share the same fix.

## What better looks like

The UK National Cyber Security Centre's guidance on [password managers](https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/password-managers) explains that they store passwords so people can use a different one for each account, can generate strong passwords, and fill them in only on the correct website, which helps against phishing. It also recommends turning on two-step verification for the password manager itself. Business editions add shared vaults, so a team can use a shared account without anyone seeing or copying the password, and access can be removed in one place when someone leaves.

Three further principles reduce the need for shared secrets in the first place: individual accounts wherever the service allows them, multi-factor authentication on every account that offers it, and administrator accounts kept separate from everyday ones. The related cost of [accounts without multi-factor authentication](/impact/accounts-without-mfa-financial-risk/) is discussed separately.

## Practical next actions

1. **Find the files and threads.** Search shared drives, desktops, email and chat groups for words such as "password", "login" and "pin", and list where credentials are stored.
2. **Rank the accounts by damage.** Banking, email administration, accounting, payroll and the domain registrar come first.
3. **Introduce a business password manager.** Move the high-damage accounts first, using shared vaults for genuinely shared logins.
4. **Change every password that was ever stored in plain text.** Assume old copies exist in backups, inboxes and chat histories.
5. **Turn on multi-factor authentication.** Start with email, banking, accounting and the password manager itself.
6. **Delete the old files and messages.** Remove the spreadsheet and the chat posts once the passwords have been changed, and agree that new credentials are never shared by message.

A password spreadsheet saves a few minutes a week. Replacing it takes a few days of work and turns a single point of failure into a controlled, auditable system that survives staff changes.
