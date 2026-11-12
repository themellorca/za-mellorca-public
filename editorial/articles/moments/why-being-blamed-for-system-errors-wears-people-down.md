---
hub: moments
record_id: STORY-ANGLE-000090
slug: why-being-blamed-for-system-errors-wears-people-down
title: Why Being Blamed for System Errors Wears People Down
description: When a system makes an error easy and a person takes the blame, dignity and confidence erode. What a blameless approach to exceptions can change.
lead: When a system makes an error easy and a person takes the blame, dignity and confidence erode. What a blameless approach to exceptions can change.
category: Work and Dignity
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Work and Dignity
thematic_domain: work_and_dignity
human_situation: After a system-enabled error, the person at the keyboard is named and blamed, and learns to hide problems and doubt their own competence.
human_dividend: Predictability: knowing in advance that an exception will be met with a search for causes rather than a search for someone to blame, which protects dignity and confidence.
trade_off: Blameless reviews take longer; real negligence still needs fair discipline; added controls cost time and money; culture changes only when the next incident is handled differently.
epistemic_state: HYPOTHESISED: reasoned from general research on blameless review, burnout and psychological safety, not from a survey of South African workplaces; the worked example is illustrative.
sources:
  - Google SRE - Blameless Postmortem for System Resilience | https://sre.google/sre-book/postmortem-culture/
  - Employee Burnout, Part 1: The 5 Main Causes | https://www.gallup.com/workplace/237059/employee-burnout-causes.aspx
  - Psychological safety - Wikipedia | https://en.wikipedia.org/wiki/Psychological_safety
  - Mental health at work | https://www.who.int/news-room/fact-sheets/detail/mental-health-at-work
related:
  - When Night-Shift Exceptions Fall on the Same Few People | /moments/when-night-shift-exceptions-keep-landing-on-the-same-few-people/
  - Why Re-Keying Data Is Not a Career | /moments/why-re-keying-data-is-not-a-career-and-what-replaces-it/
  - The Bookkeeper Who Knows Every Workaround | /moments/the-bookkeeper-who-carries-every-workaround-in-their-head/
summary: When a system makes an error easy and a person takes the blame, dignity and confidence erode. What a blameless approach to exceptions can change.
layout: plain
---
A system fails on a busy morning. Orders are duplicated, or a payment run rejects half its lines, or a customer is invoiced twice. Somebody has to explain it, and the explanation travels upward in a form that begins to sound like a name. By the afternoon, the question in the room is no longer what went wrong, but who did it.

This piece looks at what happens to people who are blamed for errors that a system made easy, why that blame wears them down over time, and what a business can change so that exceptions are handled as information instead of accusation. It is a hypothesis drawn from general research on safety and workplace stress, not a finding about any particular South African employer.

## When the system makes the mistake easy

Some errors are truly individual: a careless act, a shortcut taken against clear instruction. Many are not. A form that accepts a bank account number of the wrong length, a screen that places "approve" beside "reject", a manual step that has to be repeated forty times a day and will eventually be done wrong: these are conditions that make an error likely, and the person who happens to be at the keyboard when it occurs is simply the last link in the chain.

Google's site reliability engineers have written plainly about this in their material on postmortem culture. Their position is that a postmortem should be blameless, focusing on the contributing causes without indicting any individual, because people who fear punishment will hide information and the organisation then learns less. The logic is not about being gentle. It is about getting an accurate account of what happened.

## What blame does to the person

Being held personally responsible for something the system invited is a particular kind of strain. The work did not change, but the meaning of the work did: every task now carries a small risk of being the one that gets someone's name attached to it.

Gallup's research on employee burnout lists unfair treatment at work among its leading causes, alongside unmanageable workload and unclear expectations. Being blamed for a systemic fault is a clear instance of unfair treatment, and it tends to arrive at precisely the moments when the person is already under pressure from the exception itself.

The idea of psychological safety, associated with the research of Amy Edmondson, describes a team climate in which people believe they can raise concerns and admit mistakes without being punished or humiliated. Where it is absent, people become more cautious in unhelpful ways. They stop reporting near misses, avoid taking ownership of messy problems and spend effort on protecting themselves instead of fixing the cause.

## An illustrative case

Consider an illustrative example, not a real case: a Durban wholesale distributor where a clerk processes supplier payments on the last day of the month. The accounting package lets her import a bank file with no check for duplicates. During an afternoon in which load-shedding interrupts her connection twice, she re-imports the file after a freeze and, without realising it, pays eleven suppliers twice.

The finance manager is furious and the owner asks who did it. The clerk is formally warned. What nobody examines is that the import had no duplicate check, that the freeze came from an unreliable connection, that she was working alone on the busiest day of the month, and that she had never been shown how to confirm whether a file had already gone through. A month later she is still checking every import three times, and has stopped volunteering for anything that touches money.

## The human tax: dignity and confidence

The first cost is dignity. People who are repeatedly treated as the cause of problems they could not reasonably have prevented begin to feel that their competence is in question, in front of colleagues, and often in front of their managers. The second cost is confidence. A person who has been blamed for a systemic failure becomes slower and more defensive, and that defensiveness is mistaken for lack of skill.

There is a quieter business cost too. When blame is the usual response to exceptions, they stop being reported early. The first anyone hears is when the damage is larger, because the person who noticed it had learned that bringing bad news is dangerous.

In South Africa there is also a labour-relations dimension. Disciplinary action should rest on a fair process and a genuine finding of fault. A business that disciplines individuals for faults that were designed into its tools may find that it has weakened both its case and its culture. Anyone facing this question should take advice on the current position, as this article is not legal guidance.

## What could realistically change

The alternative to blame is not an absence of accountability. It is accountability aimed at the right target.

1. **Ask "how did the system allow this?" first.** Before anyone is named, trace what made the error possible. Missing validation, unclear screens and unrealistic workloads usually appear within a few questions.
2. **Write a short, blameless account.** Record what happened, the contributing causes and the change that will prevent a repeat. The note on [the team that only talks when something breaks](/moments/the-team-that-only-talks-when-something-breaks/) explains why conversation after failure shapes what people report next time.
3. **Fix the cause, not only the case.** Add a duplicate check, a confirmation step or a second pair of eyes for high-value actions. A control that works whoever is at the desk is worth more than a warning that works once.
4. **Separate the exceptional from the careless.** Be honest about the rare cases where an individual acted against clear rules, and handle those fairly and separately, so that people can see the distinction is real.
5. **Give front-line staff a way to flag weak spots.** The piece on [why teams stop suggesting improvements](/moments/why-teams-stop-suggesting-improvements/) describes how quickly suggestions dry up once they feel risky.

## The business outcome

Errors are found sooner because the people who see them are willing to say so. The same fault is not repeated by the next person who sits at that desk. Disciplinary matters become less frequent and more defensible, and staff turnover in exposed roles, such as payments, dispatch and customer service, is less likely to be driven by the fear of being the next name. For the front-line cost of carrying a system's failures, [the service agent who apologises for a system they cannot fix](/moments/the-service-agent-who-apologises-for-a-system-they-cannot-fix/) is a related read.

## The human dividend

The dividend is predictability, in the sense that matters most on a bad day: knowing in advance how an exception will be handled. If a person can rely on the response being a search for causes instead of a search for someone to blame, they can do their work with a steadier mind, and raise problems at the point where it is cheap to fix them. The effect on dignity and confidence follows from that, though it is not guaranteed and it will not look the same for everyone.

## The trade-offs

- **Slower initial answers.** A blameless review takes longer than naming someone, and owners under pressure may find that uncomfortable.
- **Genuine negligence still exists.** A no-blame culture must not become a no-accountability one, and fair discipline remains available for real misconduct.
- **Controls cost time and money.** Extra checks add steps, and some will need budget or a software change.
- **Culture does not shift on one memo.** People will watch the next real incident to see whether the stated approach holds.

## Why it matters

A business that blames people for what its systems allow pays twice: once in the error, and again in the silence that follows. Treating an exception as evidence about the system gives people their dignity, and gives the owner a more accurate picture of where the real risks sit.
