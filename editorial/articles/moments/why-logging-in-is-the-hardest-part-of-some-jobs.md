---
hub: moments
record_id: STORY-ANGLE-000138
slug: why-logging-in-is-the-hardest-part-of-some-jobs
title: Why Logging In Is the Hardest Part of Some Jobs
description: For some workers the first fifteen minutes of every shift go on passwords, codes and locked accounts. Why sign-in friction falls hardest on part-time and shift staff, and what modern guidance says.
lead: For some workers the first fifteen minutes of every shift go on passwords, codes and locked accounts. Why sign-in friction falls hardest on part-time and shift staff, and what modern guidance says.
category: Relief from Friction
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Relief from Friction
thematic_domain: relief_from_friction
human_situation: A part-time worker starts each shift with an expired password, a verification code on a phone in a locker and a call to an off-duty manager before the inbox will open.
human_dividend: Time: shifts that start with work rather than sign-in problems, and managers spared off-duty reset calls.
trade_off: Single sign-on concentrates risk; some systems cannot join it; relaxing password rules needs compensating protections; some features carry licence costs.
epistemic_state: HYPOTHESISED: reasoned from published security guidance and identity platform documentation, not from measured sign-in times in South African workplaces; the worked example is illustrative.
sources:
  - NIST Special Publication 800-63B | https://pages.nist.gov/800-63-4/sp800-63b.html
  - Password administration for system owners | https://www.ncsc.gov.uk/collection/passwords
  - What is single sign-on in Microsoft Entra ID? - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-single-sign-on
related:
  - Why every new hire starts with a week of waiting | /moments/why-the-first-week-of-a-new-job-is-spent-waiting/
  - When Finding the Latest Version Is a Search Party | /moments/when-finding-the-latest-version-is-a-search-party/
  - The Friction of Working Across Countries and Time Zones | /moments/the-friction-of-working-across-countries-and-time-zones/
summary: For some workers the first fifteen minutes of every shift go on passwords, codes and locked accounts. Why sign-in friction falls hardest on part-time and shift staff, and what modern guidance says.
layout: plain
---
For a part-time pharmacy assistant who works two shifts a week, the hardest part of the job may not be the customers. It may be the first quarter of an hour: the shared computer that has logged itself out, the password that expired between shifts, the code sent to a phone left in the staff locker, and the email inbox that will not open until all of that is sorted.

This piece looks at sign-in friction as a working condition, especially for people who log in infrequently or on shared devices. It is a hypothesis built on published security guidance and identity platform documentation, not a measurement of any particular workplace.

## Who feels it most

Full-time office staff log in to the same laptop every day, and their passwords and sessions stay fresh. The friction concentrates elsewhere:

- **Part-time and shift workers**, whose infrequent use means passwords expire or are forgotten between shifts.
- **Staff on shared devices**, such as reception desks, tills and workshop terminals, where sessions are cleared after each person.
- **People who use many systems briefly**, such as a branch manager who needs the inbox, the stock system, the rostering tool and the payroll portal, each with its own sign-in.
- **Staff without a work phone**, who must use a personal device for verification codes or go without.

An illustrative example, not a real case: a Bloemfontein veterinary practice with two reception computers shared by five staff. Each person has a separate login for the practice system, the shared inbox and the card machine portal. Passwords must be changed every sixty days and must contain a symbol, a number and a capital. Staff who work only Saturdays find their password has expired almost every time. The weekend shift begins with a phone call to the practice manager, who is off duty, to reset it.

## What current guidance actually says

Many sign-in rules in small businesses date from older advice. The US National Institute of Standards and Technology's digital identity guideline, [SP 800-63B](https://pages.nist.gov/800-63-4/sp800-63b.html), now says verifiers should not require users to change passwords periodically and should not impose composition rules such as mandatory symbols, though a change must be forced if there is evidence of compromise. It also says password managers and pasting should be allowed. The UK National Cyber Security Centre's [password collection](https://www.ncsc.gov.uk/collection/passwords) notes the burden placed on users who must remember many complex passwords, and points towards passkeys as a more usable replacement.

Single sign-on addresses the number of logins. Microsoft's documentation on [single sign-on in Entra ID](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-single-sign-on) describes users signing in once with one set of credentials and then opening their assigned applications without signing in again, with fewer password resets reaching the help desk.

None of this means weakening security. Strong, unique credentials and multi-factor verification remain important. The point is that some rules add effort without adding protection, and that the effort falls unevenly.

## The human tax: time and energy

The time cost is the obvious one: minutes at the start of every shift, and longer when someone else must be found to reset an account. The energy cost is less visible. Starting a shift already frustrated, perhaps with a queue forming, sets the tone for the next few hours. There is also a quiet signal in being locked out of the tools of your own job, which the story [when access controls feel like distrust](/moments/when-access-controls-feel-like-distrust/) explores.

The cost spreads to others. The off-duty manager who takes reset calls on a Saturday, and the colleague who lends their login to keep the queue moving, are both paying part of the tax, and the second creates a security problem of its own.

## What could realistically change

Most improvements are configuration choices rather than new systems. Removing forced periodic password changes, in line with current guidance, stops the expiry cycle for infrequent users. Enabling single sign-on across the systems that support it reduces the number of credentials. Self-service password reset, with verification that does not depend on a phone in a locker, removes the off-duty phone call. Fast user switching on shared devices lets each person sign in quickly without sharing accounts.

Related stories cover nearby ground: [ten open tabs and five logins](/moments/ten-open-tabs-and-five-logins/) describes the multi-system day, [the relief of a password you don't have to reset](/moments/the-relief-of-a-password-you-dont-have-to-reset/) looks at the reset cycle, and [the technician whose expertise is spent on password resets](/moments/the-technician-whose-expertise-is-spent-on-password-resets/) shows the support side.

## Practical next actions

1. **Time the start of a shift.** Ask a part-time or shift worker to note how long it takes from arriving to being able to work, and what got in the way.
2. **Review password expiry.** Check whether your systems force periodic password changes, and discuss with whoever manages IT whether to remove them in line with current guidance.
3. **List every login a role needs.** For each role, count the separate sign-ins, and identify which systems could use single sign-on.
4. **Set up self-service reset.** Make sure staff can unlock their own accounts securely without calling a manager.
5. **Stop shared logins.** Where colleagues share credentials to save time, fix the underlying friction so they no longer need to.

## The business outcome

Shifts start on time, queues shrink, and fewer support calls reach managers or IT. Security often improves, because staff stop writing passwords down or sharing logins to work around the friction. The business also gets cleaner records of who did what, since each person uses their own account.

## The human dividend

The dividend is time, and a calmer start. A pharmacy assistant who can sign in within a minute begins the shift serving customers instead of fighting the computer. The off-duty manager gets a Saturday without reset calls. Small minutes, repeated across every shift, add up to working days that start on the person's terms.

## The trade-offs

- **Single sign-on concentrates risk.** One compromised account opens many systems, so the primary sign-in needs strong protection.
- **Not every system supports it.** Older or niche software may still need separate credentials.
- **Changing rules needs care.** Removing password expiry should go alongside other protections, such as checks against known compromised passwords.
- **Some costs are licence costs.** Single sign-on and self-service reset features may need a paid tier.

## Why it matters

Sign-in friction is easy to dismiss as a minor annoyance, but it lands hardest on the people with the least time and the least power to change it. Updating rules that current guidance no longer recommends, and reducing the number of doors each person must unlock, is a cheap way to give them back the start of their working day.
