---
hub: moments
record_id: STORY-ANGLE-000142
slug: why-smooth-systems-are-noticed-only-when-they-fail
title: Why Smooth Systems Are Noticed Only When They Fail
description: When a system runs well, nobody thinks about it or the people who keep it that way. When it fails, everyone does. How to value reliability before the outage, not only during it.
lead: When a system runs well, nobody thinks about it or the people who keep it that way. When it fails, everyone does. How to value reliability before the outage, not only during it.
category: Relief from Friction
published_date: 2026-11-15
updated_date: 2026-11-15
eyebrow: Relief from Friction
thematic_domain: relief_from_friction
human_situation: A self-taught systems coordinator keeps the tills and network running for two quiet years, goes unmentioned, and is then called away from a family lunch when a surge takes the system down.
human_dividend: Predictability: outages become known situations with a plan, and prevention work is seen and shared rather than carried alone.
trade_off: Reporting takes time; prevention costs money before any failure; plans go stale without testing; blameless reviews depend on trust.
epistemic_state: HYPOTHESISED: reasoned from reliability engineering practice and contingency planning guidance, not from measured outage data in South African businesses; the worked example is illustrative.
sources:
  - https://sre.google/sre-book/embracing-risk/ | https://sre.google/sre-book/embracing-risk/
  - https://sre.google/sre-book/postmortem-culture/ | https://sre.google/sre-book/postmortem-culture/
  - https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final | https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final
summary: When a system runs well, nobody thinks about it or the people who keep it that way. When it fails, everyone does. How to value reliability before the outage, not only during it.
layout: plain
---
The point-of-sale system at a busy hardware store goes down at eleven on a Saturday morning. Within minutes, everyone knows: the tills stop, queues form, a manager is on the phone, and the person who looks after the systems is called away from a family lunch. On the previous two hundred Saturdays, when the system worked, nobody thought about it at all.

This piece looks at the strange visibility of reliable systems: unseen when they work, intensely noticed when they fail. It asks what that does to the people who keep them running, and how a business can value reliability before an outage forces it to. It is a hypothesis drawn from reliability engineering practice and contingency planning guidance, not a study of any specific business.

## The asymmetry of attention

Success in operations is mostly the absence of events. A backup that ran, a payment file that loaded, a network that stayed up: none of these generates a message or a meeting. Failure, by contrast, generates a great deal of both. Attention follows events, so the people responsible for reliability are seen mainly in connection with failure.

An illustrative example, not a real case: a family-owned chain of three hardware stores in the Free State. One staff member, a former till operator who taught herself networking, keeps the point-of-sale system, the stock database and the store Wi-Fi running. She applies updates after hours, replaces failing network switches before they die and tests the backup each month. For two years, there are no serious outages. At the annual review, the owner thanks the sales staff for a strong year. The systems coordinator is not mentioned. Three months later, a power surge damages a server and the tills are down for two hours on a Saturday. She is mentioned a great deal that week.

## The human tax: energy

For the people who maintain systems, the asymmetry has a steady energy cost. They carry a background alertness that others do not, because they know that the quiet depends on them. When an exception or emergency does arrive, it lands on top of that load, often outside working hours. And because the preventive work was never visible, the failure can look like their fault rather than a rare event in an otherwise good record.

Being noticed only when things break is also discouraging. People who prevent problems rarely get the recognition given to people who solve visible ones, which the story [why recognition rarely reaches the people who prevent problems](/moments/why-recognition-rarely-reaches-the-people-who-prevent-problems/) explores. Over time, the incentive drifts toward heroic fixes rather than quiet prevention.

## What reliability practice suggests

Large technology operators have developed ways to make reliability visible on purpose. Google's site reliability engineering book, in its chapter on [embracing risk](https://sre.google/sre-book/embracing-risk/), describes agreeing an explicit target for reliability and measuring actual performance against it. Once there is a target, a good month is something you can see and report, not just the absence of complaints.

The same book's chapter on [postmortem culture](https://sre.google/sre-book/postmortem-culture/) describes blameless reviews after incidents, which focus on systemic causes and follow-up actions rather than on fault. A blameless review after the Saturday outage would ask why a single surge could take down the server, not who should have prevented it, and would likely end with a modest investment in surge protection and a tested recovery plan.

For contingency planning more broadly, the US National Institute of Standards and Technology's [contingency planning guide, SP 800-34](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final), sets out how to plan for system disruptions and how that planning relates to wider organisational resilience. A small business does not need the full framework, but the basic idea, deciding in advance how you will operate during an outage and how you will recover, translates directly.

## What could realistically change

Three changes make reliability visible before failure. First, report on it: a short monthly note saying what was maintained, what was replaced, how many hours of downtime occurred and how that compares with the previous year. Second, plan for exceptions: a simple written procedure for selling during a till outage, for example, so the failure is an inconvenience rather than a crisis. Third, review incidents without blame and fund the follow-up actions.

Related stories show nearby pressures: [the stress of not knowing if the backup worked](/moments/the-stress-of-not-knowing-if-the-backup-worked/), and [when your best work is invisible because it's repair work](/moments/when-your-best-work-is-invisible-because-its-repair-work/).

## Practical next actions

1. **List the systems you would miss.** Name the three or four systems whose failure would stop trading, and who keeps each running.
2. **Start a monthly reliability note.** Ask the person responsible to write a few lines each month on maintenance done, risks spotted and any downtime.
3. **Write an outage procedure.** For each critical system, agree how staff will keep working during a failure, and test it once a year.
4. **Review incidents without blame.** After any significant failure, hold a short review focused on causes and fixes, and record the agreed actions.
5. **Recognise prevention.** In reviews and team meetings, name the problems that did not happen and the people who prevented them.

## The business outcome

Visible reliability lets owners make informed investment decisions, such as replacing ageing equipment before it fails. Outages become shorter and less chaotic because there is a plan. And the business is less likely to lose the person who keeps things running, since their work is understood and valued.

## The human dividend

The dividend is predictability. For staff on the shop floor, a tested outage procedure means a failure is a known situation rather than a panic. For the systems coordinator, a recognised record of prevention and a shared plan for emergencies mean that a Saturday failure no longer lands on her alone. She can take a family lunch knowing the business has a way to cope.

## The trade-offs

- **Reporting takes time.** A monthly note is another task, so keep it brief.
- **Prevention costs money up front.** Replacing equipment early or adding surge protection costs money for a problem that has not yet happened.
- **Plans go stale.** Outage procedures need periodic testing and updating, or they fail when needed.
- **Blameless reviews need trust.** They only work if people believe what they say will not be held against them.

## Why it matters

A business that notices systems only when they fail ends up rewarding crisis and neglecting prevention. Making reliability visible, through simple reporting, planning and blameless reviews, corrects that imbalance. It gives due credit to the people who keep things quiet, and it reduces the chance that the next Saturday failure becomes a crisis.
