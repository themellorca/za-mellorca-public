---
hub: moments
record_id: STORY-ANGLE-000128
slug: the-relief-of-a-password-you-dont-have-to-reset
title: The Relief of a Password You Don't Have to Reset
description: Forced password changes take time and attention and, according to current guidance, add little security. What people get back when access is designed around them.
lead: Forced password changes take time and attention and, according to current guidance, add little security. What people get back when access is designed around them.
category: Relief from Friction
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Relief from Friction
thematic_domain: relief_from_friction
human_situation: An employee starts the day to an expiry notice and spends time inventing, recording and recovering a new password across several systems.
human_dividend: Time and attention: fewer interruptions and less to remember, because access is protected by stronger means than periodic change.
trade_off: Dropping expiry is only safe with multi-factor authentication, compromise detection and offboarding; single sign-on and password managers concentrate risk in one place; some staff feel safer with familiar rules.
epistemic_state: INFERRED: the security position is observed in NCSC and NIST guidance; the time and attention cost to individuals is inferred and not measured in South African firms.
sources:
  - Password policy: updating your approach | https://www.ncsc.gov.uk/collection/passwords/updating-your-approach
  - NIST Special Publication 800-63B | https://pages.nist.gov/800-63-4/sp800-63b.html
related:
  - When Your Calendar Belongs to Other People's Systems | /moments/when-your-calendar-belongs-to-other-peoples-systems/
  - What Changes When Status Updates Stop Being a Chore | /moments/what-changes-when-status-updates-stop-being-a-chore/
  - The Lunch Break Eaten by Approval Requests | /moments/the-lunch-break-eaten-by-approval-requests/
summary: Forced password changes take time and attention and, according to current guidance, add little security. What people get back when access is designed around them.
layout: plain
---
It often starts with a message. Your password will expire in three days. Then two. Then the morning arrives when the laptop will not let you in until you choose a new one.

So you invent something. It must be different from the last several. It must contain a capital letter, a number and a symbol. It must not contain your name. You settle on something, and then remember that three other systems use the same password, or almost the same one, and they will need changing too. Somewhere, a sticky note appears. Somewhere else, a reset link is requested because the new password has already slipped away.

It is a small ordeal. It is also, according to current guidance from two of the most cited security bodies, largely unnecessary.

## What the guidance now says

The UK's National Cyber Security Centre, in its guidance on updating password policy, states plainly that regular password changing harms rather than improves security. Its reasoning is practical. When people are forced to change passwords often, they tend to make small, predictable variations of the old one. And if a password has been stolen, it is usually used quickly, so a change months later does little to prevent harm.

The US National Institute of Standards and Technology goes further in its digital identity guidelines, SP 800-63B. It says that verifiers shall not require users to change passwords periodically, and shall not impose composition rules such as requiring a mixture of character types. It does require a change when there is evidence that a password has been compromised. The emphasis instead falls on length, on checking new passwords against lists of known compromised values, and on additional factors of authentication.

Both bodies point to a different set of controls: multi-factor authentication, monitoring for unusual sign-ins, locking unused accounts, removing access promptly when people leave, and giving people tools such as password managers. The NCSC also acknowledges that people now manage dozens of passwords, and that policies should be designed with that reality in mind.

## Why expiry persists

If the guidance has moved, why do so many small businesses still force regular resets?

Consider an illustrative case: a Gqeberha accounting practice with about fifteen staff. Its systems were set up years ago by an IT provider who applied what was then a standard policy: a ninety-day expiry and strict complexity rules. Nobody has revisited it since. The practice uses several cloud applications, each with its own login, and each with its own reset cycle.

The causes here are ordinary:

- **Defaults that were never reviewed.** A setting chosen once remains in force long after the advice behind it changed.
- **Visible effort mistaken for security.** Frequent resets look strict and are easy to explain, even when they add little protection.
- **No single place to sign in.** Each application holds its own credentials, multiplying the number of passwords people must manage.
- **Missing stronger controls.** Without multi-factor authentication, expiry can feel like the only defence available, which is part of the risk discussed in [accounts without multi-factor authentication](/impact/accounts-without-mfa-financial-risk/).

None of these causes reflects bad intent. The provider who set the policy was following the advice of the time, and the practice's partners have reasonably assumed that strict rules mean safe rules. The problem is simply that nobody owns the question of whether the policy still fits. It sits in an admin console, unexamined, while its cost is paid in small amounts by every member of staff, every few months, indefinitely.

## The human tax: time and attention

The time cost is the most visible part: the minutes spent choosing passwords, the reset emails, the calls to the IT provider when someone is locked out before a deadline. No reliable figure exists for how much time this takes in South African small businesses, and none is claimed here. But anyone who has been locked out on a busy morning knows the cost is not zero.

The attention cost is less visible. Expiry notices interrupt. A password that must be remembered, recorded, or recovered occupies a corner of the mind. Several such passwords, on staggered cycles, become a background task that never quite finishes. For some people this is a minor irritation. For others, particularly those less confident with technology, it can be a recurring source of anxiety about being shut out of their own work.

There is also a quieter cost to trust. Rules that people can see make little sense invite workarounds: the sticky note, the shared spreadsheet of logins, the password reused everywhere. The policy then produces the opposite of what it intended, while still taking time and attention from everyone who follows it.

## What could change

For the illustrative accounting practice, a better design might look like this:

1. **Turn on multi-factor authentication** for email, accounting software and any system holding client data.
2. **Remove routine expiry**, while keeping a rule that passwords are changed immediately when compromise is suspected.
3. **Prefer length to complexity.** A long passphrase is easier to remember and, according to the guidance, more useful than a short string of mixed symbols.
4. **Offer a password manager** so people do not have to remember dozens of credentials.
5. **Consolidate sign-in** where the applications support it, so one strong, well-protected identity opens most tools.
6. **Tighten offboarding**, since stale accounts are a real risk, as covered in [former employees retaining system access](/impact/former-employees-retaining-system-access/).

The first change is the one that makes the others safe. Removing expiry without stronger controls would trade friction for risk.

## Trade-offs

- **Concentrated risk.** Single sign-on and password managers mean one set of credentials opens many doors. They must be well protected and monitored.
- **New friction.** Multi-factor prompts are themselves an interruption. They are generally less frequent and less demanding than repeated resets, but they are not nothing.
- **Dependence on a device.** If the phone used for verification is lost or out of battery, access can stop entirely. Recovery routes need to be planned.
- **Comfort with the familiar.** Some staff and clients feel reassured by visible password rules. Explaining why a change makes things safer, not looser, matters.
- **Configuration effort.** Changing policies across several cloud services takes time and care from whoever supports the business.

This is part of a broader point Mellorca has made about [security products bought without basic controls](/impact/security-products-without-basic-controls/): the controls that matter most are often the plainest.

## Why it matters

The business outcomes of a better access design are fewer lockouts, fewer support calls and, if the guidance is right, better protection against the attacks that actually happen.

The human outcome is smaller but real. A person starts the day and simply signs in. There is no countdown in the inbox, no invented string to memorise, no sticky note to hide. The attention that went into managing access can go somewhere else.

It is easy to dismiss this as trivial. It is a few minutes here and there. But friction that recurs for everyone, for no good reason, is a tax that a business imposes without noticing. Removing it is one of the rare changes where security guidance and everyday relief point in the same direction. That is worth acting on.
