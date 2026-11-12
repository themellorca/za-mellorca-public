---
hub: moments
record_id: STORY-ANGLE-000018
slug: ten-open-tabs-and-five-logins
title: Ten Open Tabs and Five Logins: What the Morning Sign-In Takes
description: Email, accounting, the bank, the supplier portal, the job system, each with its own password and its own timeout. What a working day spread across many separate sign-ins quietly takes from attention, and what fewer doors give back.
lead: Email, accounting, the bank, the supplier portal, the job system, each with its own password and its own timeout. What a working day spread across many separate sign-ins quietly takes from attention, and what fewer doors give back.
category: Time and Attention
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Time and Attention
thematic_domain: time_and_attention
human_situation: A person whose work spans many separate business systems begins each day by signing in to email, accounting, banking, supplier portals and other tools, each with its own password, code and timeout, and keeps track of credentials in memory or a notebook.
human_dividend: Attention: less memory work and fewer interruptions from sign-in screens, so the working day can begin with the work itself.
trade_off: Single sign-on concentrates risk in one set of credentials and must be protected with multi-factor authentication; reliance on one identity provider creates a single point of failure; some applications charge more for single sign-on; password managers and authenticator apps require new habits.
epistemic_state: HYPOTHESISED: the attention cost of multiple sign-ins is inferred from security guidance on password overload and from vendor documentation, not from a measured study of South African workplaces.
sources:
  - Password policy: updating your approach | https://www.ncsc.gov.uk/collection/passwords/updating-your-approach
  - NIST Special Publication 800-63B | https://pages.nist.gov/800-63-4/sp800-63b.html
  - What is single sign-on in Microsoft Entra ID? - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-single-sign-on
related:
  - The Morning Routine of Checking Whether Overnight Jobs Ran | /moments/the-morning-check-that-overnight-jobs-ran/
  - Why Waiting for Information Feels Like Working | /moments/why-waiting-for-information-feels-like-working/
  - Why the Commute Has Become Unpaid Triage Time | /moments/why-the-commute-has-become-unpaid-triage-time/
summary: Email, accounting, the bank, the supplier portal, the job system, each with its own password and its own timeout. What a working day spread across many separate sign-ins quietly takes from attention, and what fewer doors give back.
layout: plain
---
The laptop opens and the day begins with a ritual. Email first. Then the accounting package, which has logged itself out overnight. Then the bank, with a one-time PIN sent to a phone that is somewhere in a bag. Then the supplier portal, whose password was changed last month and is written on something. Then the job system, then the shared drive, then the payroll site that is only needed on Thursdays but is kept open just in case.

By the time the work starts, there are ten tabs across the top of the screen and five or six separate sign-ins behind them. None of this is difficult. Each step takes a minute or less. And yet many people will recognise the feeling of having already spent something before the day has properly begun.

This piece looks at what that something is. Its argument is a hypothesis, not a finding: that a working day spread across many separate systems, each with its own door, carries a cost in attention that rarely shows up anywhere, and that the cost is partly a design choice.

## A problem security people already recognise

The clearest public acknowledgement of this burden comes from security guidance rather than from productivity writing. The UK National Cyber Security Centre's password guidance for organisations points out that the typical user has dozens of passwords to remember, not just the one a given system asks for. It describes how that load pushes people towards workarounds: reusing passwords, choosing predictable patterns, writing them down.

In other words, the burden of many sign-ins is not only an inconvenience. The guidance treats it as a cause of weaker security, because people cope with overload in the ways that are easiest for them. The same guidance recommends reducing reliance on passwords through technical measures and organisational processes, and says online services should permit the use of password managers.

The US National Institute of Standards and Technology makes a similar point in its digital identity guidelines. It states that verifiers shall allow password managers and autofill, and should allow people to paste a password where autofill is not available. It also notes research showing that password managers make it more likely that people choose stronger passwords. The direction of current guidance is clear: the human effort of remembering and typing credentials is something systems should reduce, not something people should be trained to endure.

## Where the attention goes

The time cost of signing in is small and easy to measure. The attention cost is harder to see. It tends to sit in three places.

- **Remembering.** Which system uses which password, which one expired, which phone receives which code. This is memory work that has nothing to do with the job itself.
- **Re-entering.** Systems that time out after a period of inactivity throw people back to a sign-in screen in the middle of a task. The interruption is brief, but the thread of thought often has to be picked up again.
- **Navigating.** When the information needed for one decision sits in four places, the person becomes the connection between them, moving from tab to tab to assemble a picture that no single system holds.

Mellorca has written about the broader cost of interruptions in [the pain of employees being interrupted by messages, notifications and context switching](/impact/pain-employees-interrupted-messages-notifications-context-switching/). Sign-ins are a quieter version of the same thing. They do not arrive from outside; they are built into the shape of the working day.

It would be wrong to claim every reader experiences this as a burden. Some people find the opening routine settling, a way of arriving at work. Others barely notice it. The claim here is narrower: for people whose work genuinely spans many systems, the number of separate doors adds a layer of carrying that could often be lighter.

## An illustrative office manager

Consider an illustrative case: the office manager of a South African electrical contracting business with about twenty staff. Their working day touches the following, each with its own account:

- the company email and calendar;
- a cloud accounting package;
- two business banking profiles, each with its own approval codes;
- the portals of three wholesalers;
- a job-card system used by the technicians;
- the payroll service and the shared document drive.

Some of these systems were chosen by the owner, some by an accountant, some by a supplier. Nobody ever looked at the whole set from the point of view of the person who would sign in to all of them every day. The office manager keeps a notebook of passwords in a drawer, knows it is not ideal, and has no better option that anyone has offered.

Nothing in this picture is a crisis. That is precisely why it persists. The cost is spread thinly across every working day and is carried by one person who has learned to absorb it.

## Why the doors multiply

The number of sign-ins in a business is rarely planned. It accumulates. Each new tool solves a real problem and arrives with its own account. Few small businesses have someone whose job it is to ask how the whole collection feels to use. Mellorca's guide on [how to know when you have too many business apps](/insights/how-to-know-when-you-have-too-many-business-apps/) explores the commercial side of this sprawl; the human side is the drawer with the notebook.

There is also a structural cause. When systems do not share data, people end up opening several of them to complete one piece of work. The sign-ins are a symptom of a deeper fragmentation, described in [when your staff become the integration between software platforms](/patterns/when-your-staff-become-the-integration-between-software-platforms/).

## What could realistically change

Several changes are available to small and mid-sized businesses without major projects.

1. **Single sign-on where systems support it.** Microsoft's documentation for single sign-on in its identity service describes the arrangement simply: users sign in once with one set of credentials and can then open every application assigned to them without signing in again. It lists fewer credentials to keep, less frequent sign-in and fewer password resets reaching the help desk among the benefits. Other identity providers offer similar arrangements, and many business applications support them.
2. **A business password manager.** Where single sign-on is not available, a managed password manager removes the remembering, replaces the notebook and makes it easier to remove access when someone leaves.
3. **Fewer systems.** The most effective way to remove a sign-in is to remove the system behind it. Some tools in any collection overlap or are barely used.
4. **Sensible session settings.** Timeouts exist for good reasons, but they can be set with the actual working pattern in mind, alongside device locking and strong authentication.
5. **A deliberate review.** Once a year, someone could list every account the most-connected person uses and ask which ones genuinely need to be separate.

Mellorca's earlier piece, [the relief of a password you don't have to reset](/moments/the-relief-of-a-password-you-dont-have-to-reset/), looks at forced password changes. This piece is about the number of doors rather than how often their locks are changed. The two are related, and both point towards access designed around the person using it.

## What changes first, and the business outcome

The first change is that the opening ritual shrinks. Fewer screens ask for credentials, fewer codes are needed, and timeouts interrupt less often. The notebook can be shredded.

The business outcome is partly about security. The NCSC guidance is explicit that overloaded users adopt weaker habits, so reducing the load can reduce reused and written-down passwords. It is also about continuity: centrally managed access is easier to grant to a new employee and to remove from a departing one.

## The human dividend

The dividend is attention. Less of the day is spent remembering which key opens which door, and less of the mind is held in reserve for the next sign-in screen. For the person who sits at the centre of many systems, the beginning of the day can start with the work itself.

It is a modest dividend, and it should not be overstated. It will not remove the underlying complexity of a business that genuinely needs many tools. But modest dividends repeated every working day are not trivial.

## The trade-offs

- **Concentration of risk.** The NCSC notes that if an attacker compromises single sign-on credentials, they may gain access to far more. It recommends that single sign-on require multi-factor authentication. One door must be a strong door.
- **Dependency on one provider.** If the identity service is unavailable, every connected application may be unreachable at once.
- **Cost and setup.** Some applications only support single sign-on on more expensive plans, and setting it up takes time and some expertise.
- **A new routine to learn.** Password managers and authentication apps ask people to adopt new habits, which can feel like more work before it feels like less.

## Why it matters

The ten tabs and five logins are rarely discussed because each one is so small. But they describe something real about how work is built: a person standing between many separate systems, holding the keys to all of them in memory or in a drawer.

Mellorca's interpretation is that this is a design choice, often made by accident, and that it can be remade deliberately. Fewer doors, stronger single locks and systems that share what they know return a little attention to the person who used to carry all of it. What changes for the human being is simple: the day starts when the work starts, not when the last password has been found.
