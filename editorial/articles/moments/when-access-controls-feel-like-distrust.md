---
hub: moments
record_id: STORY-ANGLE-000052
slug: when-access-controls-feel-like-distrust
title: When access controls feel like distrust
description: Shared logins vanish, codes arrive on phones and long-serving staff see less. The controls are sound but can feel like suspicion. How to protect dignity.
lead: Shared logins disappear, codes arrive on phones and long-serving staff see less than they used to. The controls are sound, but the way they arrive can read as suspicion. Why that happens, and how fair, explained access protects dignity as well as data.
category: Human Agency
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Human Agency
thematic_domain: human_agency
human_situation: A business replaces shared logins with individual accounts, multi-factor authentication and narrower permissions, and long-serving staff read the unexplained change as a sign they are no longer trusted.
human_dividend: Predictability and dignity: knowing what one can access and why, that the same rules apply to everyone, and how to ask for more; individual accounts also protect people from being blamed for actions under a shared login.
trade_off: Some loss of access is real; individual logging can feel like monitoring; consulting each role delays urgent changes; extra authentication steps add friction even when well designed.
epistemic_state: HYPOTHESISED: the perception of controls as distrust, and its link to explanation and even application, is inferred from security guidance and security-culture material, not from a study of South African workplaces.
sources:
  - SP 800-207, Zero Trust Architecture - CSRC | https://csrc.nist.gov/pubs/sp/800/207/final
  - Zero trust architecture design principles | https://www.ncsc.gov.uk/collection/zero-trust-architecture
  - Section 19 Security measures on integrity and confidentiality of personal information - POPIA | https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/
  - Cyber security culture principles | https://www.ncsc.gov.uk/collection/you-shape-security
related:
  - The difference between being informed and being in control | /moments/the-difference-between-being-informed-and-being-in-control/
  - When the system decides what you can do today | /moments/when-the-system-decides-what-you-can-do-today/
  - The manager who can't act without the founder | /moments/the-manager-who-cant-act-without-the-founder/
summary: Shared logins disappear, codes arrive on phones and long-serving staff see less than they used to. The controls are sound, but the way they arrive can read as suspicion. Why that happens, and how fair, explained access protects dignity as well as data.
layout: plain
---
For years, everyone in the office used the same login for the accounting system. The password was on a note inside a drawer. Then, one Monday, it stopped working. Each person received their own account, a prompt to set up a code on their phone, and a smaller view of the system than they had before. The bookkeeper who had been with the business for eleven years could no longer see payroll.

Nobody explained much. An email said the change was for security. In the kitchen, the conversation was not about security. It was about what had happened to make the owner stop trusting them.

Nothing had happened. The business had done something sensible and overdue. But the way it arrived left people with a story about distrust, and that story can linger long after the technical change is forgotten.

## Why access controls are tightening

The direction of travel in security guidance is clear, and it is not driven by suspicion of any particular employee. The US National Institute of Standards and Technology describes [zero trust](https://www.ncsc.gov.uk/collection/zero-trust-architecture), in its publication SP 800-207, as a set of approaches that move defences from network perimeters to users, assets and resources. A central idea is that no implicit trust is granted to accounts based only on their location on the network or on who owns the device.

The UK National Cyber Security Centre describes zero trust as an approach in which inherent trust in the network is removed, the network is assumed hostile, and each request is verified against an access policy. Its principles include knowing identities, so that users and devices are uniquely identifiable, and authenticating everywhere.

South African law points the same way. Section 19 of the Protection of [Personal Information](https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/) Act requires a responsible party to take appropriate, reasonable technical and organisational measures to prevent unlawful access to personal information, to identify foreseeable risks and to keep its safeguards up to date. A shared login to a system holding payroll and customer records is difficult to square with that duty.

Read carefully, this guidance is about removing assumptions from systems. It treats every request the same way precisely so that no individual is singled out. Mellorca has covered the business risk side in [the financial risk of uncontrolled system access](/impact/uncontrolled-system-access-financial-risk/).

## Why it can still feel personal

The language of security is not the language of the workplace. In ordinary conversation, being asked to prove who you are, or losing access you used to have, carries a meaning. It can sound like an accusation. Some reasons this happens:

- **The change arrives without context.** If people are not told why, they supply their own explanation, and the most available one is about them.
- **Access is removed rather than redesigned.** Taking someone's view of payroll away without discussing what they actually need for their role can read as a demotion.
- **The rules are uneven.** If staff must use codes on their phones while the owner keeps a simple password, the control looks like it is aimed at staff rather than at risk.
- **Long service is ignored.** A person who has handled sensitive information responsibly for years may reasonably expect that to count for something.

The tax here is dignity, and with it a degree of autonomy. It would be wrong to say that everyone feels this. Many people welcome their own login because it means they are no longer accountable for what others did under a shared one. But where the feeling of being distrusted does arise, it is usually a product of how the change was introduced rather than of the control itself.

## An illustrative example

Consider an illustrative case: an East London engineering services firm with about thirty staff. After a supplier in its sector suffers a payment fraud, the owner asks an IT provider to tighten access. Shared logins are removed, multi-factor authentication is switched on, and staff permissions are cut back to what the provider assumes each role needs.

In this scenario, the technical work is done well. But the stores manager loses the ability to see purchase order values and now has to phone the office to confirm whether a delivery matches what was ordered. Two senior staff ask privately whether they are under suspicion. One begins writing passwords on paper again because the new ones are harder to remember. The firm is more secure on paper and slightly less secure in practice, and the working atmosphere has shifted.

## What could realistically change

The answer is not to weaken the controls. It is to introduce them in a way that makes their purpose clear and their effect fair.

1. **Explain the reason before the change.** Say what risk is being addressed and that the same rules apply to everyone, including the owner.
2. **Apply rules evenly.** Owners and managers should go first. A control that exempts senior people says something about who it is aimed at.
3. **Design access with the people who use it.** Ask each role what it needs to see and do. Restrictions based on guesses tend to remove things people genuinely need.
4. **Make it easy to ask for more.** A clear route for requesting additional access, with a quick answer, turns a restriction into a conversation.
5. **Reduce friction where possible.** Single sign-on and password managers mean fewer passwords to remember. Mellorca has written about this in [the relief of a password you don't have to reset](/moments/the-relief-of-a-password-you-dont-have-to-reset/).

The NCSC's guidance on security culture is helpful here. It describes culture as the collective understanding of what is normal and valued, and focuses on creating conditions in which people feel safe to engage with security, rather than treating them as weak points.

## What changes first, and the human dividend

The first change is in understanding. When people know that a control applies to everyone and exists to protect them as well as the business, it is easier to see it as a shared safeguard rather than a judgement. Requests for access become routine rather than awkward.

The business outcome is security that people actually follow. Controls that are understood are less likely to be worked around, and fewer workarounds mean fewer gaps.

The human dividend is predictability and dignity: knowing what you can access and why, knowing that the rules are the same for everyone, and knowing how to ask for what you need. Individual accounts can also protect people. When each action is attributable, nobody has to answer for something done under a login they shared with five colleagues.

## The trade-offs

- **Some loss of access is real.** Good design and explanation reduce the sense of distrust but do not restore everything people previously had. Some roles will genuinely see less.
- **Logging can feel like monitoring.** Individual accounts make actions traceable. That protects people, but it can also feel like being watched, and businesses should be clear about how logs are used.
- **Consultation takes time.** Asking each role what it needs delays the change, which matters when a risk is pressing.
- **Friction does not disappear.** Multi-factor prompts and access requests add steps to the day, even when they are well designed.

## Why it matters

Access controls are now a normal part of running a business responsibly, and the guidance behind them is sound. Mellorca also covers the opposite failure, [when former employees keep access](/patterns/why-do-former-employees-still-have-access/), which is a real and common risk.

But the human side of tightening access is easy to neglect. The same control can feel like protection or like suspicion depending on how it arrives. Mellorca's reading is that the difference lies mostly in explanation, even application and a clear route to ask for more. Those cost little, and they let a business become more secure without leaving its longest-serving people wondering what they did wrong.
