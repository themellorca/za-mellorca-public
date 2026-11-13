---
hub: moments
record_id: STORY-ANGLE-000111
slug: the-technician-whose-expertise-is-spent-on-password-resets
title: The Technician Whose Expertise Is Spent on Password Resets
description: A skilled IT technician hired to keep systems healthy spends the morning unlocking accounts. Why that happens, what it does to the person, and how self-service and better password rules return the time.
lead: A skilled IT technician hired to keep systems healthy spends the morning unlocking accounts. Why that happens, what it does to the person, and how self-service and better password rules return the time.
category: Work and Dignity
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Work and Dignity
thematic_domain: work_and_dignity
human_situation: A skilled technician hired to keep a firm's systems healthy spends much of each morning unlocking accounts and resetting passwords, so the improvement work they were hired for keeps slipping.
human_dividend: Time and optionality: routine resets handled by users themselves, so the technician's hours go to projects, security and learning, and their skills open more doors.
trade_off: Self-service needs licences, setup and staff registration; badly configured recovery can weaken security; some users will still need help; removing forced password changes needs other safeguards such as multi-factor sign-in.
epistemic_state: HYPOTHESISED: reasoned from vendor documentation and published identity guidance, not from measured help-desk data in South African firms; the example firm is hypothetical.
sources:
  - https://learn.microsoft.com/en-us/entra/identity/authentication/concept-sspr-howitworks | https://learn.microsoft.com/en-us/entra/identity/authentication/concept-sspr-howitworks
  - https://pages.nist.gov/800-63-3/sp800-63b.html | https://pages.nist.gov/800-63-3/sp800-63b.html
summary: A skilled IT technician hired to keep systems healthy spends the morning unlocking accounts. Why that happens, what it does to the person, and how self-service and better password rules return the time.
layout: plain
---
A business hires an IT technician because it wants someone who understands networks, backups, security and the dozen systems it depends on. The technician arrives with plans: patch the servers, sort out the backups, tidy the access rights. By ten o'clock on most days they have done none of it. They have unlocked four accounts, reset three passwords, and talked one person through signing in again after a forced change.

This piece looks at that technician, at how routine resets crowd out skilled work, and at what can return the time. It is reasoned from vendor documentation and published identity guidance, not from measured help-desk data in South African firms.

## Why resets fill the morning

Password resets cluster. They spike after weekends and holidays, after a forced password change, and when a new system is added with its own sign-in. They are urgent, because the person locked out cannot work, and they are quick, so it always feels reasonable to deal with them first. The trouble is that a stream of quick, urgent tasks never leaves a long enough gap for the slow, important ones.

Consider a hypothetical engineering consultancy with sixty staff and one in-house technician. Passwords expire every sixty days, so every week a few people are prompted to change theirs and some forget the new one. Staff also use several systems with separate sign-ins. The technician keeps a list of improvement projects that has barely changed in a year. Each item on it is important. None of it is as urgent as the partner who cannot open their email.

## Two published answers

The first answer is to let people help themselves. Microsoft's documentation on [self-service password reset](https://learn.microsoft.com/en-us/entra/identity/authentication/concept-sspr-howitworks) explains that it lets users change or reset their password with no administrator or help desk involvement, and unlock their own account if they are locked out. Users first register authentication methods, such as an authenticator app or a phone number, and the administrator decides how many methods are required. Other major identity platforms offer similar features.

The second answer is to stop creating unnecessary resets. The United States National Institute of Standards and Technology's [digital identity guidelines, SP 800-63B](https://pages.nist.gov/800-63-3/sp800-63b.html), advise that verifiers should not require passwords to be changed arbitrarily, for example periodically, and should force a change only where there is evidence of compromise. The same guidance discourages complex composition rules and favours length and checks against lists of commonly used or compromised passwords. A business that still forces changes every sixty days is creating a predictable wave of resets, often with little security benefit.

Neither change removes the need for good security. Self-service has to be set up carefully so that recovery cannot be abused, and dropping forced changes works best alongside multi-factor sign-in. The impact analysis on [accounts without multi-factor authentication](/impact/accounts-without-mfa-financial-risk/) sets out why that second layer matters.

## The human tax: dignity

The cost to the technician is partly time, but mostly dignity. Being hired for expertise and then used as a reset button sends a message, even if nobody intends it. The work they are proud of goes undone. The work they do is invisible when it goes well and resented when it is slow. Over time a skilled person can start to see themselves the way the queue sees them: as the person who unlocks things.

There is also a loss of standing in the eyes of colleagues. Staff who only ever meet the technician over a lockout come to think of IT as a help desk, not as the function that keeps the business safe and running. The Moment on [why repetitive work hides real talent](/moments/why-repetitive-work-hides-real-talent/) describes how this happens in other roles.

From the user's side, the story is different but connected. The Moment on [the relief of a password you do not have to reset](/moments/the-relief-of-a-password-you-dont-have-to-reset/) describes how the same change feels for the person who was locked out. Both people benefit when the reset stops being a conversation.

## What the technician gets back

Hours freed from resets are not simply spare time. They are the hours in which backups get tested, old accounts get removed, and the many separate sign-ins get consolidated, which in turn removes more resets. The pattern on [signing in to every system separately](/patterns/the-hidden-cost-of-signing-in-to-every-system-separately/) shows how much friction single sign-on can remove. The technician also gains room to learn, which keeps their skills current and their career options open.

## Practical next actions

1. **Count the resets.** For two weeks, log every password reset and account unlock: who, which system and why. The pattern will show whether expiry, a particular system or particular days drive the load.
2. **Review forced expiry.** If passwords expire on a fixed schedule, consider moving to change-on-compromise in line with the NIST guidance, paired with multi-factor sign-in and screening against known-breached passwords.
3. **Enable self-service reset.** Check whether your identity platform offers self-service reset and unlock, require at least two registration methods, and run a short campaign to get every user registered.
4. **Reduce the number of sign-ins.** List the systems that have their own password and check which can use your main identity platform for sign-in. Each one moved is a source of resets removed.
5. **Protect project time.** Agree with the technician a block of time each week that is not interrupted for routine requests, and review progress on their improvement list monthly.

## The business outcome

Staff get back to work faster when they are locked out, because they can fix it themselves at any hour. Security improves, because the technician finally has time for patching, backup testing and access reviews. The business gets the value of the skills it is paying for.

## The human dividend

The dividend is time and optionality. The technician spends their day on work that uses and grows their expertise. Their role becomes recognisable again as skilled work, and the skills they build widen the paths open to them, inside the business or beyond it.

## The trade-offs

- **Setup takes effort.** Self-service may need licences, configuration and a registration drive, and some users will need help the first time.
- **Recovery can be abused.** Weak recovery methods, such as easily guessed questions, can create a new risk. Choose stronger methods and require more than one.
- **Fewer forced changes need other safeguards.** Moving away from periodic changes is sensible only alongside multi-factor sign-in and breach screening.
- **Some people will still call.** Staff who are less comfortable with technology may prefer a person, and that route should remain open and patient.

## Why it matters

How a business uses a skilled person's time says what it values in them. A technician whose mornings vanish into resets is told, every day, that their expertise comes second. Removing the routine is not only an efficiency gain. It is a way of telling them that the work they were hired for matters.
