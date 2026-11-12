---
hub: moments
record_id: STORY-ANGLE-000171
slug: the-employee-locked-out-by-a-system-built-for-someone-else
title: The Employee Locked Out by a System Built for Someone Else
description: Leave requests, payslips and expense claims moved online, designed around people with a laptop, a work email and good eyesight. For the employees who have none of these, a simple admin task becomes a favour they must ask for.
lead: Leave requests, payslips and expense claims moved online, designed around people with a laptop, a work email and good eyesight. For the employees who have none of these, a simple admin task becomes a favour they must ask for.
category: Inclusion & Access
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Inclusion & Access
thematic_domain: inclusion_and_access
human_situation: An employee without a company laptop or email address, or with a visual impairment or limited data, cannot use the online system for leave, payslips or expense claims and must ask a supervisor or administrator to do it for them.
human_dividend: Autonomy: the ability to handle one's own leave, pay information and claims directly and privately, on a device and in a form that works for the person.
trade_off: Designing for more devices, languages and accessibility needs costs time and money; mobile access to personal data raises security and privacy questions; some employees prefer a person to a screen; assisted routes must remain available.
epistemic_state: HYPOTHESISED: the exclusion of non-desk and disabled employees from internal admin systems is inferred from accessibility guidance and international survey evidence on frontline workers, not measured in South African businesses.
sources:
  - Introduction to Web Accessibility | https://www.w3.org/WAI/fundamentals/accessibility-intro/
  - WCAG 2 Overview | https://www.w3.org/WAI/standards-guidelines/wcag/
  - https://www.microsoft.com/en-us/worklab/work-trend-index/technology-unlocks-a-new-future-for-frontline | https://www.microsoft.com/en-us/worklab/work-trend-index/technology-unlocks-a-new-future-for-frontline
related:
  - When the Out-of-Office Reply Doesn't Stop the Work | /moments/when-the-out-of-office-reply-doesnt-stop-the-work/
  - Why Leave Requests Turn Into Coverage Puzzles | /moments/why-leave-requests-turn-into-coverage-puzzles/
  - The Relief of a Password You Don't Have to Reset | /moments/the-relief-of-a-password-you-dont-have-to-reset/
summary: Leave requests, payslips and expense claims moved online, designed around people with a laptop, a work email and good eyesight. For the employees who have none of these, a simple admin task becomes a favour they must ask for.
layout: plain
---
The business moved its leave requests online last year. It was a sensible change. Forms no longer went missing, balances were always up to date and managers could approve from their phones. For most of the office staff, it was a clear improvement.

For the forklift driver who has no work email, it was not. Nor for the cleaner who shares a phone with her family and has little data at the end of the month. Nor for the long-serving storeman whose eyesight makes the small grey text on the login page hard to read. Each of them now asks a supervisor to submit their leave for them, or to print their payslip, or to capture their travel claim.

The task is small. What changes is who controls it. Something that should be a person's own business, such as when they take leave or what they were paid, has become a favour they must ask someone else to do.

## Who systems are designed for

The W3C's introduction to web accessibility explains that accessible design lets people with disabilities perceive, understand, navigate and interact with digital tools. It also stresses that accessibility helps a much wider group: people with temporary injuries, older people whose abilities change, people in difficult situations such as bright sunlight, and people using mobile devices or slow connections. The international standard for this, WCAG 2.2, is organised around four principles: content should be perceivable, operable, understandable and robust.

Those principles are usually discussed for public websites. They apply just as much to the systems a business gives its own employees, and those internal systems are often the least considered. They are chosen for features and price, configured by the finance or HR team, and tested by the people who will use them at a desk.

Microsoft's survey of frontline workers, which covered thousands of employees across several industries and countries, found that a third felt they lacked the right technology to do their jobs, that 63% said messages from leadership did not reach them, and that 55% had to learn new digital tools without formal training. These are international figures, not South African ones, but they suggest a recurring pattern: tools and communication designed with office workers in mind do not reach people whose work happens elsewhere.

## How exclusion happens without anyone intending it

Consider an illustrative case: a Polokwane food distribution business with about sixty staff, roughly half of whom work in the warehouse, on delivery routes or on cleaning shifts. When it introduced an online payroll and leave system, accounts were created from the company email list. Warehouse staff did not have company email, so they were set up with a shared login managed by the warehouse supervisor.

The mechanism behind this is ordinary:

- **Identity built on email.** If access depends on a work email address, people without one are excluded from the start, a problem related to [why new employees wait for system access](/discovery/why-new-employees-wait-for-system-access/).
- **Designed and tested at a desk.** The system works well on a large screen with a fast connection, and less well on an older phone with little data.
- **Accessibility not checked.** Small text, low contrast and forms that do not work with screen readers or zoom are rarely noticed by the people choosing the system.
- **One language, one style.** Instructions written in dense administrative English can be a barrier for people who use another language at home.

In the illustrative distributor, the result is that the warehouse supervisor spends part of every Monday capturing leave for other people, printing payslips on request and answering questions about balances. Thirty employees can see their own pay and leave information only through him. Nobody chose this arrangement. It followed from a set-up decision that took a few minutes during implementation, when the system was configured around the people who were in the room at the time. Nobody in that room drove a forklift or worked a night cleaning shift.

Field and frontline staff often depend on the office for information in other ways too, as described in [why field teams still phone the office for information](/patterns/why-field-teams-still-phone-the-office-for-information/).

## The human tax: access and dignity

The access cost is direct. People cannot do their own admin when they need to. They wait until a supervisor is free, or until they are back at the depot.

The dignity cost is more personal, and it should not be overstated. Some employees are happy to have a supervisor handle their leave and see no loss in it. Others may find it uncomfortable that a colleague sees their leave reasons, pay details or medical certificates, or that they must ask permission simply to view information that belongs to them. A shared login also means that personal information is not truly private. Mellorca cannot know how any individual experiences this; it can say that the design removes a choice from them without anyone having decided that it should.

The same pattern applies to customers, as Mellorca discussed in [when digital-only leaves some customers behind](/moments/when-digital-only-leaves-some-customers-behind/). Inside a business, the effect can be sharper, because the people excluded are the business's own staff.

## What could change

1. **Give everyone their own identity.** Individual accounts, even for staff without email, using a mobile number or a simple username, so that nobody's personal information sits behind a shared login.
2. **Check the system on the devices people actually have.** Test with an older phone and limited data, not only a laptop on office Wi-Fi.
3. **Use accessibility as a buying criterion.** Ask vendors whether their employee-facing screens meet WCAG, and try them with zoom and a screen reader.
4. **Write instructions plainly.** Short steps, plain words and, where it matters, a second language.
5. **Keep an assisted route, by choice.** Some people will always prefer help. The aim is that asking for help is an option, not the only way.

Making systems understandable to the people who depend on them is a broader principle, discussed in [how to design automations that people can understand](/insights/how-to-design-automations-that-people-can-understand/).

## Trade-offs

- **Cost and effort.** Individual accounts, mobile testing and accessible configuration all take time and may cost more in licences.
- **Security and privacy.** Personal pay and leave data on personal phones needs sensible protection, such as strong sign-in and automatic logout.
- **Not everyone wants self-service.** For some employees, a trusted supervisor is the preferred route, and removing it would be a loss rather than a gain.
- **Data costs.** Expecting staff to use their own data for work tasks shifts a cost onto them unless the business addresses it.

## Why it matters

For the business, systems that work for everyone mean fewer requests routed through supervisors, fewer errors and better information. For the employee, the change is about control over their own affairs. Being able to check a payslip, apply for leave or submit a claim directly, privately and when convenient is a small thing that says something larger: that the system was built with them in mind too.

That is the dividend. Not technology for its own sake, but a working life in which ordinary admin does not depend on someone else's time or goodwill.
