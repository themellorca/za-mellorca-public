---
hub: moments
record_id: STORY-ANGLE-000030
slug: the-school-run-interrupted-by-a-system-alert
title: The school run interrupted by a system alert
description: An alert reaches someone who cannot act on it. What one badly routed alert costs a morning, and how deciding who gets alerted helps.
lead: An alert arrives at exactly the wrong moment, to a person who may not be able to act on it. What a single badly routed alert takes from someone's morning, and how deciding who gets alerted, about what, changes that.
category: Time & Attention
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Time & Attention
thematic_domain: time_and_attention
human_situation: A parent or carer on the morning school run receives an automated system failure alert on their phone that they cannot act on, and spends the rest of the drive thinking about it.
human_dividend: Presence and attention: alerts reach people who can act, at sensible times, with clear instructions, so personal moments are not interrupted by messages the recipient cannot use.
trade_off: Some people lose direct visibility of failures; the person who can act still receives the interruption; delayed non-urgent alerts may occasionally hide a real problem; reviewing alerts takes unglamorous effort.
epistemic_state: HYPOTHESISED: the attention cost of badly routed alerts is reasoned from established site reliability engineering guidance and escalation tool design; it has not been measured in South African businesses.
sources:
  - Google SRE monitoring ditributed system - sre golden signals | https://sre.google/sre-book/monitoring-distributed-systems/
  - Google SRE - On Call Engineer Best Practices for IT Services | https://sre.google/sre-book/being-on-call/
  - Escalation Policy Basics | https://support.pagerduty.com/main/docs/escalation-policies
related:
  - The report someone rebuilds by hand every Friday | /moments/the-report-someone-rebuilds-by-hand-every-friday/
  - When payroll week means late nights for one person | /moments/when-payroll-week-means-late-nights-for-one-person/
  - When Sunday evening becomes Monday morning | /moments/when-sunday-evening-becomes-monday-morning/
summary: An alert arrives at exactly the wrong moment, to a person who may not be able to act on it. What a single badly routed alert takes from someone's morning, and how deciding who gets alerted, about what, changes that.
layout: plain
---
It is 07:20. The car is in a queue outside a school gate, children in the back, bags on laps. A phone on the passenger seat buzzes. It is an automated message: a system at work has failed, or a sync has stopped, or a server is not responding.

The person driving cannot do anything about it right now. They may not be able to do anything about it at all, because they are not sure what the alert means or whether someone else has already seen it. But they have read it. For the rest of the drop-off, and probably the drive to work, part of their attention is somewhere else.

This is a small moment. It is also a very specific one, and worth looking at closely, because it shows how the design of a system's alerts reaches into someone's life at the exact points that matter to them.

## One alert, at the wrong time, to the wrong person

Much of the discussion about alerts concerns their cumulative volume. This piece is about something narrower: the single alert that arrives at a moment when the person receiving it can neither act on it nor ignore it.

That situation usually has three ingredients. The alert went to an individual rather than a role. It went to them regardless of the time. And it did not make clear whether action was needed now, by them, or at all.

None of those ingredients is unusual in smaller businesses. Alerts are often set up once, by whoever configured a system, and sent to whoever was the obvious contact at the time. Years later they still arrive on that person's phone, at any hour, about anything the system considers worth mentioning.

## What the engineering guidance says about alerts

Organisations that run large systems around the clock have thought carefully about this. Google's Site Reliability Engineering book, in its [chapter on monitoring distributed systems](https://sre.google/sre-book/monitoring-distributed-systems/), states plainly that paging a human is an expensive use of an employee's time, and argues that an alert which interrupts a person should be urgent, actionable and related to something users are experiencing or about to experience. It also warns that when alerts arrive too often, people start to second-guess, skim or ignore them.

The same book's [chapter on being on call](https://sre.google/sre-book/being-on-call/) recommends clear escalation paths and well-defined incident procedures, and suggests a limit on how many incidents one person should handle in a twelve-hour shift, so that the work stays sustainable. Incident tools such as PagerDuty reflect the same thinking: their [escalation policies](https://docs.pagerduty.com/incident-management/schedules/escalation-policies) notify whoever is on call according to a schedule, and move to the next responder if nobody acknowledges within a set time.

A business with a handful of systems and no IT department does not need site reliability engineering. But the principles scale down well. An alert should reach someone who can act, at a time when acting makes sense, about something that genuinely needs action.

## An illustrative case

Take an illustrative example, not a real business: a Durban online homeware retailer with about twenty staff, running an e-commerce platform, a stock system and an integration between them.

In this scenario, the integration was set up three years ago by an outside developer. Its failure notifications go to the finance manager's personal email, because the finance manager was the main contact during the project. The finance manager is not technical, and does not know how to restart the integration. When an alert arrives, they forward it to the developer and hope.

The alerts arrive at all hours, including before school, and the finance manager has learned to read them anxiously and then do nothing until they reach the office. Some are serious. Many resolve themselves. They cannot tell the difference from the message.

Mellorca has looked at the systems side of this in [why integration failures should not route to personal inboxes](/discovery/why-integration-failures-should-not-route-to-personal-inboxes/).

## The human tax

The tax is **presence and attention**. The school run is, for many parents and carers, one of the few fixed points in the day spent with their children. An alert that cannot be acted on does not take much time. It takes the moment, by moving part of the person's attention to a problem they cannot solve from the car.

It would be wrong to claim that every such alert causes distress, or to suggest that a single message damages anything lasting. The defensible point is narrower: a badly routed alert consumes attention at a moment the person would otherwise give to something else, and it does so without producing any useful action.

## What could realistically change

Most of the changes are about deciding who gets alerted, about what, and when. Few require new tools.

- **Review where alerts go.** List every automated alert the business sends and who receives it. In many businesses this list has never been made, and some alerts go to people who left or changed roles.
- **Route alerts to someone who can act.** If the finance manager cannot fix the integration, the alert should go to whoever can, with the finance manager informed of business impact separately, if at all.
- **Separate urgent from informational.** A failed payment run before payday may need someone immediately. A sync that will retry in an hour usually does not. Only the first should interrupt a person. Mellorca's guide on [separating urgent systems problems from merely annoying ones](/insights/how-to-separate-urgent-systems-problems-from-merely-annoying-ones/) covers this distinction.
- **Respect time.** Non-urgent alerts can wait for a morning summary at the start of the working day.
- **Write down the response.** For each alert that does need action, a short note on what it means and what to do, so that whoever receives it is not guessing.
- **Build failure handling into automations.** Many alerts exist because a process has no way to recover by itself. Retries and clear failure paths reduce how often a person needs to be told anything. Mellorca has written about this in [why every automation needs a failure path](/insights/why-every-automation-needs-a-failure-path/).

## What changes first, and for the business

The first change is that fewer alerts reach people who cannot act on them, and the ones that do arrive are fewer, clearer and better timed.

For the business, failures get to the right person faster, which shortens the time to fix them. Alerts that matter are less likely to be lost among those that do not, which is exactly the problem the SRE guidance warns about.

## The human dividend

The dividend is **presence and attention**. The school run can be a school run. The phone on the passenger seat can stay quiet unless something genuinely needs this person, now. When it does buzz, the message says what is wrong and what to do, so the person can respond or set it aside with confidence.

For the person who does need to act, there is a dividend too: alerts they can trust, because they are not buried among messages meant for someone else.

## The trade-offs

- **Less visibility for some people.** Removing the finance manager from integration alerts means they find out about problems later, or through someone else. Some people will be uncomfortable with that.
- **Someone still gets the alert.** Routing alerts properly moves the interruption to a person who can act, which is better, but it is still an interruption for them. Their time and boundaries matter too.
- **Delayed alerts can miss things.** Holding non-urgent alerts until morning is sensible until a "non-urgent" issue turns out to matter. Classifications need reviewing.
- **Setup takes effort.** Reviewing alerts, writing responses and agreeing who handles what is unglamorous work that is easy to postpone.

## Why it matters

Alerts are a small piece of system design, usually configured once and forgotten. But they are also one of the most direct ways a business system reaches into someone's personal time.

Mellorca's reading is that every alert is a decision about whose attention a system is allowed to claim, and when. Making those decisions deliberately gives back moments that matter far more than the systems involved. A related Moment looks at the uncertainty on the other side of the same problem: [the stress of not knowing whether the backup worked](/moments/the-stress-of-not-knowing-if-the-backup-worked/).
