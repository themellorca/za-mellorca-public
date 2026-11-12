---
hub: moments
record_id: STORY-ANGLE-000423
slug: the-owner-facing-illness-with-no-one-who-knows-the-systems
title: The Owner Facing Illness With No One Who Knows the Systems
description: When an owner falls seriously ill, the first wall a small business hits is often access: the bank, payroll and passwords that only one person holds. What can be arranged while everyone is well.
lead: When an owner falls seriously ill, the first wall a small business hits is often access: the bank, payroll and passwords that only one person holds. What can be arranged while everyone is well.
category: Life Transitions & Vulnerability
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Life Transitions & Vulnerability
thematic_domain: life_transitions_and_vulnerability
human_situation: A small business owner faces serious illness and an unplanned absence while banking, payroll, software and passwords are accessible only to them.
human_dividend: Predictability for staff who can keep the business running, and optionality for the owner to make treatment and recovery decisions on health grounds rather than business access.
trade_off: Additional authorisers and administrators widen the security surface; delegation over money requires trust and controls; continuity planning is uncomfortable and easily postponed; arrangements decay without periodic checks.
epistemic_state: HYPOTHESISED: the wellbeing and optionality effects are reasoned from how access dependency works and from published continuity and emergency access guidance, not measured among South African owners; the worked example is illustrative.
sources:
  - Manage emergency access admin accounts - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/security-emergency-access
  - About Emergency Access - Bitwarden | https://bitwarden.com/help/emergency-access/
  - SP 800-34 Rev. 1, Contingency Planning Guide for Federal Information Systems - CSRC | https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final
  - What Is Business Continuity? - IBM | https://www.ibm.com/think/topics/business-continuity
related:
  - When Parental Leave Means Handing Over an Undocumented Job | /moments/when-parental-leave-means-handing-over-an-undocumented-job/
  - The Owner Who Can't Decide Without the Spreadsheet Wizard | /moments/the-owner-who-cant-decide-without-the-spreadsheet-wizard/
  - The Attention Spent Remembering What Systems Should Remember | /moments/the-attention-spent-remembering-what-systems-should-remember/
summary: When an owner falls seriously ill, the first wall a small business hits is often access: the bank, payroll and passwords that only one person holds. What can be arranged while everyone is well.
layout: plain
---
Some absences are planned for. Leave is booked, holidays are agreed, handovers are written, however imperfectly. Illness is different. It tends to arrive without a date, and serious illness often arrives with weeks or months of appointments, treatment and recovery that nobody chose.

For the owner of a small business, a diagnosis can raise two sets of questions at once. The first set is personal, and Mellorca has nothing useful to say about it. The second set is operational, and it is often surprisingly concrete. Who can log in to the banking profile? Who knows the password for the accounting system? Who approves payroll? Who can renew the domain before the website goes down? Who knows which customer needs a call before their invoice goes out?

In many owner-run businesses, the honest answer to most of those questions is a single name. This piece is about what that arrangement costs at exactly the moment it is tested, and what can be done about it while the owner is well.

## Why illness is a different test from a holiday

Mellorca has looked at owner dependency through other lenses: the laptop that goes on the family holiday in [why holidays still need a laptop in the suitcase](/moments/why-holidays-still-need-a-laptop-in-the-suitcase/), and the way identity and task can fuse in [when the founder's identity is fused with every task](/moments/when-the-founders-identity-is-fused-with-every-task/). Illness changes the shape of the problem in three ways.

- **There may be no handover.** A holiday allows preparation. A sudden admission to hospital does not.
- **The owner may not be able to help remotely.** Someone on holiday can usually answer a quick question. Someone in treatment may not be able to, and should not have to.
- **The duration is uncertain.** Workarounds that can hold for two weeks often cannot hold for three months.

For some owners, this can appear as a background worry long before anything happens: the awareness that the business would struggle to run for a week without them. For others it only becomes visible when it is tested. Both are understandable. Neither is a personal failing; it is how many small businesses grow, with the founder as the place where everything connects.

## Where the dependency actually lives

When people talk about key-person risk, they often mean knowledge: the owner knows the customers, the pricing logic, the supplier history. That is real, and it is discussed in Mellorca's work on [key-person dependency as a systems problem](/insights/key-person-dependency-is-a-systems-problem/). But in an unplanned absence, the first wall a business usually hits is more mundane. It is access.

- Banking profiles with the owner as the only authoriser.
- Email, domain and hosting accounts registered to the owner's personal address or phone number.
- Administrator accounts for the business's software protected by multi-factor authentication tied to one person's mobile phone.
- Passwords stored in a personal browser or a notebook at home.
- Supplier and tax portal logins that only one person has ever used.

Large organisations plan for this explicitly. Microsoft's guidance for its Entra identity platform recommends that organisations keep at least two emergency access accounts, not tied to any individual, with credentials stored securely and available to more than one authorised person. Among the situations it lists are an administrator's devices being unavailable and the last person with full administrative access leaving the organisation. The guidance is written for IT teams, but the principle travels to a twelve-person firm: no critical access should depend on one person's phone.

Consumer tools have caught up with the same idea. Bitwarden, for example, documents an emergency access feature in which a user nominates trusted contacts who can request access to a vault; the owner can approve it, or access is granted after a waiting period the owner has chosen. Other password managers offer comparable features.

## An illustrative case

Consider an illustrative example: a Polokwane accounting practice with eleven staff, run by its founder. The founder is the only authoriser on the business banking profile, the only administrator of the practice software and the only person who has logged in to several client-related portals.

The founder is admitted to hospital unexpectedly and is unable to work for six weeks. In the first week, the senior bookkeeper discovers that she can prepare the payroll but cannot release it. The software subscription renewal fails because the card on file has expired and only the founder can update billing. Clients phone with questions only the founder can answer.

None of this is anyone's fault. But the people left in the office spend those weeks working around closed doors, and the founder's family may find themselves fielding questions about passwords at the hospital bedside.

## The human tax: safety, wellbeing and optionality

The taxes here are hypotheses grounded in the mechanism rather than measured findings, and they should be stated carefully.

For the owner, the tax is to wellbeing and to optionality. An owner who knows the business cannot run without them may feel pressure to keep working through illness, to delay treatment, or to return before they are ready. Some people will choose to stay involved, and that is legitimate. The concern is when the choice is made by the system rather than by the person.

For staff, the tax is predictability. They may be capable and willing to keep things going, but unable to act because the keys are missing. That is an exposed and frustrating position to be in.

## What could realistically change

The useful work is ordinary continuity planning, scaled down to a small business. NIST's contingency planning guide for information systems and IBM's overview of business continuity both describe the same core idea in different language: identify what the business cannot do without, decide who is responsible for each part, and test the arrangements before they are needed.

- **List the critical access.** Banking, payroll, accounting, email and domain, key software, tax and supplier portals. For each one, write down who can get in today.
- **Add a second authorised person.** A second banking authoriser with sensible limits, a second administrator on key systems, a shared business password vault with emergency access configured.
- **Move accounts off personal details.** Register business systems to business addresses and, where possible, multi-factor methods that are not tied to one phone.
- **Write a short continuity note.** Not a manual: one or two pages saying what must happen each week and month, and who does it if the owner cannot.
- **Test it once.** Have the second person actually run payroll or log in to the bank while the owner is present. Untested access is a hope, not a plan.

Mellorca's guide on [how to know whether your business depends too much on one person](/insights/how-to-know-whether-your-business-depends-too-much-on-one-person/) offers a fuller diagnostic.

## The first consequence, and the business outcome

The immediate change is that an unplanned absence becomes a disruption rather than a lock-out. Payroll runs. Subscriptions renew. Someone can answer clients, even if some decisions wait.

The business outcome is continuity, and with it a business that is more resilient for any absence, as well as more credible to banks, clients and potential buyers.

## The human dividend

The dividend is predictability and optionality. Predictability for staff, who can keep the business running with the access they need. Optionality for the owner, who can make decisions about treatment, rest and recovery on health grounds rather than on the basis of who knows the banking password.

Nothing here makes illness easier. It removes one avoidable layer of pressure from a period that has enough of its own.

## The trade-offs

- **Shared access is a security decision.** Every additional authoriser or administrator is another account that must be protected and monitored.
- **Delegation requires trust.** Some owners find it hard to give others authority over money, and those concerns deserve controls, not dismissal.
- **Planning for illness is uncomfortable.** It can feel morbid, and it is easy to postpone. Framing it as general continuity for any absence often helps.
- **The plan decays.** Staff leave, passwords change and phones are replaced. Without a periodic check the arrangements quietly stop working.

## Why it matters

Illness is one of the moments when a person most needs to be able to put work down. A business built so that it cannot run without its owner takes that possibility away at the worst time.

Mellorca's interpretation is narrow and practical. Most of the dependency that bites in an unplanned absence is access and routine, not irreplaceable judgement. That part can be designed out while everyone is well, so that if the day comes, the owner's attention can go where it belongs.
