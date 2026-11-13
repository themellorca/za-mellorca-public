---
hub: moments
record_id: STORY-ANGLE-000054
slug: why-the-person-closest-to-the-problem-cant-fix-it
title: Why the person closest to the problem can't fix it
description: The person taking the third complaint call knows the fix, but authority sits elsewhere. How a small, bounded zone of local authority lets people act.
lead: The person taking the third complaint call knows exactly what is wrong and how to fix it, but the authority sits elsewhere. Why knowledge and decision rights drift apart, and how a small, bounded zone of local authority lets people act on what they know.
category: Human Agency
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Human Agency
thematic_domain: human_agency
human_situation: A front-line employee repeatedly handles the same customer problem, knows its cause and the fix, but the template, refund and process changes all require managers who are elsewhere and busy.
human_dividend: Autonomy: the ability to act on what one knows, within a defined and reviewed zone of local authority, instead of apologising repeatedly for a fixable problem.
trade_off: Local fixes can conflict and create inconsistency; authority brings accountability some people do not want; refund limits and separation of duties guard against fraud; skipped reviews mean lost oversight.
epistemic_state: HYPOTHESISED: the autonomy and confidence effects of separating knowledge from authority are inferred from published production-system and work-design guidance, not from a study of South African businesses.
sources:
  - Toyota Production System - Vision & Philosophy - Company - Toyota Motor Corporation Official Global Website | https://global.toyota/en/company/vision-and-philosophy/production-system/
  - Management Standards - Control - HSE | https://www.hse.gov.uk/stress/standards/control.htm
  - Best practices for Microsoft Entra roles - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/best-practices
related:
  - The employee who needs permission for every small fix | /moments/the-employee-who-needs-permission-for-every-small-fix/
  - The manager who can't act without the founder | /moments/the-manager-who-cant-act-without-the-founder/
  - The owner who can't decide without the spreadsheet wizard | /moments/the-owner-who-cant-decide-without-the-spreadsheet-wizard/
summary: The person taking the third complaint call knows exactly what is wrong and how to fix it, but the authority sits elsewhere. Why knowledge and decision rights drift apart, and how a small, bounded zone of local authority lets people act on what they know.
layout: plain
---
A customer phones for the third time about the same problem. The person answering knows exactly what is wrong. The delivery note template leaves off the unit size, so the warehouse picks the wrong pack every few weeks. They know because they have taken all three calls, and a dozen like them from other customers. They also know what would fix it.

What they cannot do is fix it. The template belongs to the operations manager. A goodwill credit for the customer needs the financial manager. Changing the picking instruction is a warehouse decision. So the person closest to the problem logs a complaint, apologises, and waits for the next call.

This is one of the more common shapes that frustration takes at work, and one of the least discussed. It is not about a lack of skill or effort. It is about a gap between where knowledge sits and where authority sits.

## Knowledge flows up slowly; authority stays put

In most businesses, decision rights are arranged by role and seniority. That makes sense for many decisions. But problems do not appear at the level where they can be solved. They appear where the work meets the customer, the machine or the supplier, and that is usually far from the people who can change the process.

The result is a predictable delay. The person who sees the problem must describe it to someone else, who must understand it well enough to decide, who must then instruct someone to change it. Each step loses detail. Some problems never complete the journey. They are simply absorbed by the person on the front line, call after call.

Mellorca has written about the structural cost of this in [why one approval holds up an entire process](/patterns/why-does-one-approval-hold-up-an-entire-process/) and how routine problems harden into [manual exceptions that become the normal process](/patterns/when-manual-exceptions-become-the-normal-process/). The related Moments piece, [when the system decides what you can do today](/moments/when-the-system-decides-what-you-can-do-today/), looks at how approval thresholds shape the order of someone's day. This piece is narrower: the specific experience of seeing a fixable problem and being unable to touch it.

## A model that gives authority to the point of work

[Toyota's description of its production system](https://global.toyota/en/company/vision-and-philosophy/production-system/) includes an idea that runs against the usual arrangement. Under jidoka, which Toyota describes as automation with a human touch, workers who see an abnormality can stop the line themselves by pulling a stop cord, and an andon board lights up to show where the problem is. The company also says that only humans can implement kaizen, its practice of continuous improvement, and describes developing people who can think independently and improve their own work.

The point is not that every business should copy a car manufacturer. The point is that a large, highly disciplined organisation chose to give a specific, bounded power to the person nearest the problem, and built the signals and support around it so that the power is used well.

The UK Health and Safety Executive's [Management Standard on control](https://www.hse.gov.uk/stress/standards/control.htm) makes a related point in general terms. It describes control as how much say a person has in the way they do their work, and sets as a goal that employees are encouraged to use their skills and initiative.

## The human tax

The tax is autonomy and, over time, confidence. Repeatedly seeing a problem, knowing the fix and being unable to apply it can wear on people. Some will raise it louder; some will stop raising it; some will start working around the rule informally, which carries its own risks. It would overstate the evidence to say that everyone experiences this as distress. Some people prefer to escalate and let others decide. But for those who care about the outcome, being the one who apologises for a problem they could have solved is a particular kind of powerlessness.

## An illustrative example

Consider an illustrative case: a Polokwane agricultural supplies business with about forty staff. Counter staff handle customer queries and returns. Any refund over a small amount, any change to how a product is described on the till, and any request to the warehouse to change a picking rule must go through a manager.

In this scenario, a counter assistant notices that a particular fertiliser is regularly returned because its product name on the till slip is easily confused with a similar product. They raise it twice. The manager agrees it should change but has other priorities. Meanwhile the assistant processes the returns, explains the mix-up to each customer, and waits for a refund approval each time. A ten-minute fix has become a recurring cost carried mostly by one person.

## What could realistically change

The aim is not to remove authority from managers. It is to give the people nearest to problems a defined, limited power to act, with clear signals and review.

1. **Define a small zone of local authority.** List the kinds of fix that front-line staff may make themselves: correcting a description, issuing a goodwill credit up to a set value, flagging a product for review. Write it down so it is not a matter of interpretation.
2. **Make the authority bounded and visible.** Security practice offers a useful pattern. [Microsoft's best-practice guidance for access roles](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/best-practices) describes granting a specific set of permissions, over a specific scope, for a specific period, with reviews to remove what is no longer needed. The same shape works for business decisions.
3. **Create a signal that cannot be ignored.** A shared problem list, reviewed at a set time each week, plays the role of an andon board. Problems that are raised get looked at.
4. **Review after rather than approve before.** For low-risk, reversible fixes, a weekly look at what was changed gives oversight without delay.
5. **Treat repeated problems as process problems.** When the same issue is fixed locally several times, it should trigger a change to the underlying process.

## What changes first, and the human dividend

The first change is speed. A problem that used to wait days for a decision is solved in minutes, by the person who understood it best. The business outcome is fewer repeat complaints, fewer returns and less management time spent approving small, obvious corrections. Mellorca's article on [why approval processes become bottlenecks](/insights/why-approval-processes-become-bottlenecks/) sets out the operational case.

The human dividend is autonomy: the ability to act on what one knows. For many people, being trusted to solve a problem they can see is a meaningful part of feeling that their judgement counts at work.

## The trade-offs

- **Local fixes can conflict.** Two people solving the same problem differently can create inconsistency that takes longer to unwind than the original issue.
- **Authority brings accountability.** Some people do not want to be responsible for a fix that later proves wrong, and should not be pressured into it.
- **Controls exist for reasons.** Refund limits and separation of duties protect against fraud and error. Widening authority without review creates real exposure.
- **Managers lose some sight.** If after-the-fact review is skipped, oversight is lost rather than changed.

## Why it matters

The person closest to a problem often knows more about it than anyone else in the business. When the business is arranged so that they cannot act on that knowledge, it wastes something valuable and asks them to carry the consequences. Mellorca's interpretation is that a small, written, bounded zone of local authority, with review behind it, is often enough to change that. The dividend is not dramatic. It is being able to fix the thing in front of you, and to stop apologising for it.
