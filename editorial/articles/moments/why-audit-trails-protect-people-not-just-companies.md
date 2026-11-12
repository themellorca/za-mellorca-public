---
hub: moments
record_id: STORY-ANGLE-000385
slug: why-audit-trails-protect-people-not-just-companies
title: Why Audit Trails Protect People, Not Just Companies
description: An audit trail is usually sold as a compliance control. For the people who handle money and records, it is also the thing that lets them prove what they did.
lead: An audit trail is usually sold as a compliance control. For the people who handle money and records, it is also the thing that lets them prove what they did.
category: Trust and Fairness
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Trust and Fairness
thematic_domain: trust_fairness_and_clarity
human_situation: Something goes wrong with a payment, a record or a figure, and the people who touched it are left to prove they did nothing wrong from memory, because the system never recorded who did what.
human_dividend: Predictability and confidence: knowing that if a question is ever raised, the record will show what actually happened, so an honest person does not have to defend themselves with recollection.
trade_off: Trails can feel like surveillance if they are introduced badly; they create records that must themselves be secured and retained sensibly; they take effort to review; and they can expose honest mistakes that would otherwise have gone unnoticed.
epistemic_state: HYPOTHESISED: reasoned from the purpose of audit trails in standards and record-keeping law and from general workplace practice, not from interviews with South African finance staff; the worked example is illustrative.
sources:
  - audit trail - Glossary - CSRC | https://csrc.nist.gov/glossary/term/audit_trail
  - SP 800-92, Guide to Computer Security Log Management - CSRC | https://csrc.nist.gov/pubs/sp/800/92/final
related:
  - When Commission Disputes Come From Bad Data | /moments/when-commission-disputes-come-from-bad-data/
  - The Employee Who Can't See Their Own Leave Balance | /moments/the-employee-who-cant-see-their-own-leave-balance/
  - When Automation Removes a Choice People Wanted to Keep | /moments/when-automation-removes-a-choice-people-wanted-to-keep/
summary: An audit trail is usually sold as a compliance control. For the people who handle money and records, it is also the thing that lets them prove what they did.
layout: plain
---
Audit trails have a reputation problem. Mention them in a staff meeting and many people hear one thing: someone is going to be watching. The word "audit" sounds like inspection, and "trail" sounds like something to follow in order to catch somebody. Few people hear what is arguably the more important meaning, which is that the trail is the thing that clears you when something goes wrong.

This piece looks at audit trails from the point of view of the people who handle money and records every day. It is a hypothesis drawn from the purpose of these controls in standards and record-keeping law, not a finding about any particular workplace. The practical question is how to build a trail that employees experience as protection.

## What a trail actually is

The US National Institute of Standards and Technology [defines an audit trail](https://csrc.nist.gov/glossary/term/audit_trail) in terms of a chronological record that allows events to be reconstructed and examined. The idea is simple. When a figure changes, a payment is released or a customer record is edited, the system notes who did it, when, and what changed. NIST's [guide to computer security log management](https://csrc.nist.gov/pubs/sp/800/92/final) treats logs as a means of supporting investigations and of establishing accountability, and gives practical advice on generating, storing and reviewing them.

None of that says the purpose is to catch people. It says the purpose is to be able to reconstruct what happened. That sounds neutral, until you imagine being the person at the centre of an incident.

## The morning the numbers do not match

Consider an illustrative situation in a Durban logistics company. A supplier payment of a little over R180,000 went out twice, and the second was discovered three weeks later when the supplier called to ask why it had been paid double. The business has a small finance team. Four people can capture payments, two can approve them, and all of them share a login for the banking platform because that was cheaper and simpler when the team was smaller.

The finance manager now has to work out what happened. Without a trail, the conversation turns into a series of recollections: I think I approved it on Tuesday, I thought a colleague had already released it, I was on leave that day. Everyone is honest, and nobody can prove it. A mistake that might have been a simple duplicate invoice becomes a cloud of suspicion over the whole team, and the person with the weakest relationship with the owner quietly carries the most doubt.

With a trail, the same morning takes about ten minutes. The second payment was captured from a duplicate invoice by one user and approved by another who was shown only the amount. That is a process finding, not an accusation, and it suggests an obvious fix: show approvers the invoice number and flag a repeated supplier amount.

## The human tax: confidence

The cost of having no trail falls on honest people. They carry a low-level worry about being blamed for things they did not do, and they cannot dispel it, because the evidence does not exist. Some become over-cautious, copying their manager into every email and asking for written confirmation of routine decisions. Others avoid tasks where a slip could be traced to them. The business experiences this as slowness and defensiveness, and rarely connects it to the missing record. The same fog is described in [when nobody can say which number is true](/moments/when-nobody-can-say-which-number-is-true/).

There is a fairness dimension as well. In the absence of evidence, suspicion tends to land on the person who is newest, quietest or least liked. A trail makes the question about the record, not about reputation.

South African law already assumes that records will be kept. The [Companies Act](https://www.gov.za/documents/companies-act) requires companies to keep accurate and complete accounting records, and the [Protection of Personal Information Act](https://www.gov.za/documents/protection-personal-information-act) places duties on responsible parties to secure the personal information they hold. A trail of who accessed or changed a record helps with both, and it is easier to build early than to add after an incident.

## What makes a trail feel protective

The difference between a trail that protects and one that feels like surveillance usually lies in how it is introduced and used.

- **Say what is recorded and why.** Staff who understand that the trail exists to reconstruct events, not to score their performance, treat it differently.
- **Use individual logins.** A trail is only as good as the identity behind it. Shared credentials turn the record into a list of nobody.
- **Review for process, not for blame.** The first question after an error should be what the system allowed, which is the stance taken in [when access controls feel like distrust](/moments/when-access-controls-feel-like-distrust/).
- **Let people see their own entries.** A person who can look at their own history can answer questions quickly and correct their own mistakes.
- **Protect the trail itself.** A record that can be edited by the people it covers has little value.

The tension is real. The article on [when monitoring replaces trust in the reporting line](/moments/when-monitoring-replaces-trust-in-the-reporting-line/) describes what happens when recording turns into watching. The distinction is between a record kept of actions that affect money and customer data, and continuous observation of how a person spends their day. The first protects. The second erodes trust.

## Practical next actions

1. **Find the shared logins.** List every system that handles money, payroll or customer data and note where more than one person uses the same credentials. Replace them with individual accounts.
2. **Check what each system records.** For your accounting package, banking platform and customer records, confirm whether a change history exists and how far back it goes.
3. **Separate capture from approval.** Where one person can both create and release a payment, add a second person for amounts above a threshold you choose.
4. **Write a one-page note for staff.** Explain what is logged, who can read it, how long it is kept and that its purpose is to reconstruct events fairly.
5. **Make the records findable.** Keep invoices and approvals where anyone with access can retrieve them in minutes, as [the half hour lost to finding the right file](/moments/the-half-hour-lost-to-finding-the-right-file/) shows is rarely the case.
6. **Rehearse a question.** Pick a recent payment and ask whether you can show, within fifteen minutes, who captured it, who approved it and when. If not, you have found the gap.

## The business outcome

A business with reliable trails resolves queries faster, since it spends minutes instead of days reconstructing events. It finds process weaknesses before they become losses, and it can answer auditors, banks and regulators from records instead of recollection. It also has an easier time attracting and keeping people for finance and admin roles, since these roles carry real exposure.

## The human dividend

The dividend is confidence. A bookkeeper who knows the record will show what was done can approve a payment, correct an entry or raise a concern without bracing for blame. Predictability here means that an honest person's account is backed by evidence, and that a question, if it comes, will be answered by the system and not by whoever remembers best.

## The trade-offs

- **It can feel like surveillance.** Introduced without explanation, the same log reads as distrust, and staff may respond with resentment or workarounds.
- **Trails are data too.** They must be stored securely, retained for a sensible period and accessed only by people with a reason.
- **Honest mistakes become visible.** A trail will show errors that once vanished quietly, so the business has to respond with learning, not punishment, or people will stop reporting.
- **Review takes effort.** A trail nobody ever reads protects nobody. Someone needs to look at it on a schedule.

## Why it matters

People who handle money and records are trusted with something valuable, and trust is easier to give when it can be checked. A well-built trail lets the trusted person show, calmly and quickly, that the trust was well placed. That is a form of respect for the people doing the work, as well as protection for the company that depends on them.
