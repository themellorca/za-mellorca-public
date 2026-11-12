---
hub: moments
record_id: STORY-ANGLE-000046
slug: why-good-judgement-gets-buried-under-process
title: Why Good Judgement Gets Buried Under Process
description: Approval steps are added one incident at a time, until an expert's routine work needs three sign-offs that change nothing. How process can bury experienced judgement, what that takes from professionals, and how to keep safeguards in proportion.
lead: Approval steps are added one incident at a time, until an expert's routine work needs three sign-offs that change nothing. How process can bury experienced judgement, what that takes from professionals, and how to keep safeguards in proportion.
category: Human Agency
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Human Agency
thematic_domain: human_agency
human_situation: An experienced professional's routine work, such as a building quote, must pass through several approvers who rarely change anything, because approval steps added after past incidents now apply to all work.
human_dividend: Autonomy: experienced staff can complete routine work they are qualified to decide, within clear risk-based limits, with confidence following from being trusted to decide.
trade_off: Fewer checks let some errors through; not everyone wants added responsibility; thresholds need maintenance; removing rules can feel like ignoring past incidents; some high-risk decisions genuinely need several approvers.
epistemic_state: HYPOTHESISED: the autonomy and confidence effects of layered approvals are inferred from the mechanism and general European job-autonomy data, not from a South African study of approval processes.
sources:
  - <span class="mw-page-title-main">Job autonomy and pressure at work - statistics</span> | https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Job_autonomy_and_pressure_at_work_-_statistics
  - Set up approval users - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-to-set-up-approval-users
  - Get started with Power Automate approvals - Power Automate | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
related:
  - When Software Workarounds Replace Professional Discretion | /moments/when-software-workarounds-replace-professional-discretion/
  - What Real Delegation Requires From Systems | /moments/what-real-delegation-requires-from-systems/
  - When the System Decides What You Can Do Today | /moments/when-the-system-decides-what-you-can-do-today/
summary: Approval steps are added one incident at a time, until an expert's routine work needs three sign-offs that change nothing. How process can bury experienced judgement, what that takes from professionals, and how to keep safeguards in proportion.
layout: plain
---
Imagine a senior estimator who has priced building work for fifteen years. She can look at a set of drawings and tell, within a few percent, what the job should cost. Yet a quote she has prepared now needs three sign-offs before it can go to the client: her manager, the finance lead and the managing director. Each of them glances at it, finds nothing to change and approves it. The quote goes out four days later than it could have. The client has meanwhile accepted a competitor's price.

The scene is hypothetical, but its shape will be familiar to many. Nobody in it is doing anything wrong. Each approval step was added for a reason. But somewhere along the way, the most experienced judgement in the room has been buried under a process that no longer trusts it. This piece looks at how that happens, what it takes from the people whose judgement is overridden, and how to keep the safeguards without losing the expertise.

## How process accumulates

Approval steps rarely arrive as a design. They arrive one at a time, usually after something goes wrong. A quote is underpriced and loses money, so finance must now review all quotes. A discount is given that the owner disagrees with, so all discounts need the owner's sign-off. A supplier is paid twice, so every payment needs two approvers.

Each rule is a sensible response to a real event. What is less often done is to remove a rule when its reason has passed, or to ask whether it should apply to everyone or only to the cases that carry real risk. Over time the rules apply to all work, not just risky work. Process accumulates like sediment, and the judgement of experienced people sits underneath it.

Mellorca's pattern on [when staff need to ask who approves what](/patterns/when-staff-need-to-ask-who-approves-what/) describes the confusion that follows. This piece is about a quieter consequence: what it does to the person whose expertise used to be the safeguard.

## What the evidence says about influence over work

There is no South African dataset on approval layers and professional confidence, so this piece does not claim one. There is broader evidence that influence over one's own work differs sharply by position. Eurostat's statistics on job autonomy, based on the 2019 EU Labour Force Survey, found that 43.7% of employees had some or a large influence on the content and order of their tasks, compared with 83.0% of self-employed people and 78.6% of managers.

Those figures are European and concern autonomy in general, not approvals specifically. They are useful mainly as a reminder that control over one's work is unevenly distributed, and that the way work is organised, including how decisions are approved, is one of the things that shapes it.

## The human tax: autonomy and confidence

**Autonomy** is the first tax. The estimator in our opening can still prepare the quote, but she cannot finish it. The decision that matters, whether the price goes to the client, has been moved away from the person best placed to make it.

**Confidence** is the second, and it is worth stating carefully. When expertise is routinely checked by people with less of it, some professionals may begin to doubt their own judgement, or to stop exercising it fully. A reasonable response to a system that will always review your work is to stop owning the outcome: to send it up and let someone else decide. That is offered as an inference about how people may adapt, not as an observed finding about any particular person or business.

There is also a quieter dignity question. Having one's work signed off by others is normal, and often valuable. Having it signed off in a way that adds nothing can feel different, a signal that experience does not count for much. Whether it feels that way will vary from person to person.

## An illustrative firm

Consider an illustrative example: a Gqeberha building contractor with sixty staff. It is a hypothetical scenario, not a real company. Five years ago a large quote was underpriced and the firm lost money on the job. Since then every quote, of any size, has passed through three approvers. The approvers are busy, so quotes wait. Small, routine quotes wait as long as large, unusual ones.

The estimators adapt. Some stop sanity-checking their own figures as closely, because finance will review them anyway. Others pad their quotes to avoid questions. The firm now has more process and, arguably, less judgement than before the incident that prompted it.

## What could realistically change

1. **Match the approval to the risk.** Routine work within agreed parameters should not need the same scrutiny as large or unusual work. Business systems can support this directly. Microsoft's Business Central documentation, for example, describes approval users with sales and purchase amount limits, so that requests within a person's limit are approved by them and larger ones go up the chain.
2. **Approve once, not three times.** Several approvers looking at the same thing for the same reason add delay without adding much assurance. Approval tools can be configured so that one response is enough; Microsoft's Power Automate documentation distinguishes approvals where everyone must approve from those where the first response completes the request.
3. **Review samples, not everything.** A periodic review of a sample of decisions can catch drift without putting every decision in a queue.
4. **Give each rule an expiry date.** When an approval step is added after an incident, decide when it will be reviewed. If the original risk has been addressed in another way, the step can go.
5. **Make the criteria explicit.** If the estimator knows what makes a quote high-risk, such as value, margin, client type or unusual scope, she can flag those herself. Mellorca's guide on [reducing human error without removing human judgement](/insights/how-to-reduce-human-error-without-removing-human-judgment/) develops this idea.

## What changes first, and the business outcome

The first change is speed. Routine quotes go out the day they are ready. Approvers see fewer requests and can give the large ones proper attention.

The business outcome follows. Faster quotes win more work. Approvers spend their time where their review adds value. Mellorca has looked at the capacity cost of long queues in [the capacity cost of blocked approval queues](/impact/approval-queues-blocked-capacity-cost/). Perhaps most importantly, accountability returns to where the knowledge is: the estimator owns her routine quotes and stands behind them.

## The human dividend

The dividend is **autonomy**: experienced people can complete the work they are qualified to do, within boundaries that are clear and fair. With autonomy may come confidence, not as a feeling granted by management, but as the ordinary result of being trusted to decide and seeing those decisions hold.

That matters beyond the individual. A business where judgement is exercised is one where people keep learning, because they own the consequences of their decisions. A business where judgement is always deferred upward risks raising people who have never had to decide.

## The trade-offs

- **Fewer checks mean some errors get through.** Risk-based approval accepts that a small routine mistake may occasionally reach a client. The question is whether that cost is lower than the cost of reviewing everything.
- **Not everyone wants the responsibility.** Some people prefer the safety of sign-off. Giving authority should come with support, not pressure.
- **Limits need maintenance.** Approval thresholds set today will be wrong in a few years as prices change.
- **Removing a rule can feel like ignoring the incident.** People who remember why a step was added may resist its removal. The conversation needs to show what now manages the original risk.
- **Some decisions really do need several eyes.** Large payments, legal commitments and unusual contracts may justify multiple approvals. The aim is proportion, not abolition.

## Why it matters

Process exists to protect a business from bad decisions. When it grows unchecked, it can also protect the business from good ones. The change worth making is not to remove safeguards but to put them where the risk is, so that the people with the most experience are trusted to use it. Mellorca's related piece on [the lunch break eaten by approval requests](/moments/the-lunch-break-eaten-by-approval-requests/) looks at the same system from the approver's side.
