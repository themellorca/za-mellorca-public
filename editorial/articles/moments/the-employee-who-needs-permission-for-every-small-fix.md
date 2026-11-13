---
hub: moments
record_id: STORY-ANGLE-000045
slug: the-employee-who-needs-permission-for-every-small-fix
title: The employee who needs permission for every small fix
description: A misspelt product name or a stubborn printer is a minute's fix, if the system allows it. What blanket restrictions take, and what scoped trust gives back.
lead: A misspelt product name, a wrong customer address, a printer that will not install. Small fixes that a capable person could make in a minute, if the system allowed it. What blanket restrictions take, and what scoped trust gives back.
category: Human Agency
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Human Agency
thematic_domain: human_agency
human_situation: An experienced employee notices a small error in a business system, such as a wrong customer address or a misspelt product description, but must log a request and wait for someone with broader rights to correct it.
human_dividend: Autonomy and time: the ability to correct small, low-risk problems within one's own work, with changes logged, instead of waiting and chasing for permission.
trade_off: Restrictions protect data, prevent fraud and limit the damage of mistakes or compromised accounts; wider edit rights can introduce inconsistent data; people given fix rights also carry responsibility for errors; logging can feel like monitoring.
epistemic_state: HYPOTHESISED: the autonomy and dignity effects of restrictive edit permissions are inferred from survey evidence on job autonomy and from security guidance on privilege design, not from a study of South African businesses.
sources:
  - Secure system administration | https://www.ncsc.gov.uk/collection/secure-system-administration
  - What is Privileged Identity Management? - Microsoft Entra ID Governance | https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure
  - <span class="mw-page-title-main">Job autonomy and pressure at work - statistics</span> | https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Job_autonomy_and_pressure_at_work_-_statistics
related:
  - The owner who can't decide without the spreadsheet wizard | /moments/the-owner-who-cant-decide-without-the-spreadsheet-wizard/
  - What real delegation requires from systems | /moments/what-real-delegation-requires-from-systems/
  - When software workarounds replace professional discretion | /moments/when-software-workarounds-replace-professional-discretion/
summary: A misspelt product name, a wrong customer address, a printer that will not install. Small fixes that a capable person could make in a minute, if the system allowed it. What blanket restrictions take, and what scoped trust gives back.
layout: plain
---
The customer's delivery address is wrong. The person on the phone can see it is wrong, knows the right one, and has spoken to this customer every month for four years. But the field is greyed out. Changing it requires a request to the one colleague who has edit rights to customer records, and that colleague is at a site visit until Thursday.

So the fix waits. The person notes it on a sticky label, tells the driver separately, and remembers to check on Thursday that it was done. A one-minute correction has become a small project with three people in it.

Most people in organised work will recognise some version of this. The misspelt product name on every quote. The printer that cannot be added without an administrator. The price list that everyone knows is out of date but only one person may change. None of it is dramatic. All of it says something to the person who sees the problem and is not allowed to fix it.

## Why systems are locked down

It is worth starting with the case for restriction, because it is a strong one. The UK's National Cyber Security Centre, in its guidance on [secure system administration](https://www.ncsc.gov.uk/collection/secure-system-administration), advises giving administrators least privilege and removing access when it is no longer needed. It also notes that not all administration is the same: some access gives a person the opportunity to do far more harm than others, so it should be tiered.

Those principles exist for good reasons. Broad rights on many accounts increase the damage that a phishing attack or a stolen password can do. Unrestricted editing of customer and supplier records creates openings for fraud, such as changing a supplier's bank details. And well-meaning edits by many hands can leave data inconsistent.

The difficulty is that least privilege is often implemented as all or nothing. Either a person has broad edit or administrator rights, or they have none, and everything in between becomes a request to someone else. The principle is sound; the blunt implementation is where the human cost appears.

## What the evidence says about control over work

Eurostat's statistics on [job autonomy](https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Job_autonomy_and_pressure_at_work_-_statistics), from a 2019 module of the EU Labour Force Survey, show how unevenly control over work is spread. About 44% of employees reported some or a large influence over the content and order of their tasks, compared with 83% of the self-employed. Plant and machine operators and assemblers were the least autonomous group, with 62.5% reporting little or no influence.

These are European figures and should not be read as a measurement of South African workplaces. They do support a general point: for many employees, how their work proceeds is shaped by rules they did not set. System permissions are one of the most concrete forms those rules take, because they are enforced every time someone opens the screen.

## How small fixes become requests

Consider an illustrative case: a Gqeberha wholesale distributor with about 35 staff. When the business introduced its current accounting and stock system, the implementer set up two kinds of user: administrators, who could change anything, and everyone else, who could capture transactions but not edit master records. Only the financial manager and one IT contractor were administrators.

That arrangement made sense at go-live. Five years later, the sales team corrects customer details through emails to the financial manager. Warehouse staff report wrong item descriptions on a shared list that is cleared once a month. A new printer at the dispatch desk waits for the contractor's next visit.

The mechanism usually includes:

- **Roles that were never refined.** The original two-level design stayed in place while the business and its staff changed.
- **No distinction between risky and harmless edits.** Changing a supplier's bank account and correcting a typo in a product description sit behind the same lock.
- **Too few people with rights.** The few who can make changes become a queue, as described in [when staff need to ask who approves what](/patterns/when-staff-need-to-ask-who-approves-what/).
- **No record of who changed what.** Without logging, the only way to feel safe is to let almost nobody change anything.

That last point is important. Restriction is often a substitute for visibility. When a business cannot see changes after they happen, it tries to prevent them before they happen.

## The human tax: autonomy and dignity

The time cost is real but small per incident: a few minutes to write the request, some days of waiting, a reminder or two. Across a year and a team, it adds up.

The autonomy cost is that people cannot complete their own work. They can see the problem, they know the answer, and they must hand it to someone else and track it to the end.

Dignity is harder to discuss without overstating it. Some people are glad not to be responsible for master data and prefer a clear rule. Others may experience the locked field as a message that they are not trusted with something they plainly understand. Mellorca cannot know how any individual feels about it. What can be said is that the design treats a long-serving, knowledgeable employee and a first-day temporary worker in exactly the same way, and that is a choice the business has usually never consciously made.

Mellorca's earlier piece, [when the system decides what you can do today](/moments/when-the-system-decides-what-you-can-do-today/), looks at the related problem of approval queues for spending and authority. Fix permissions are a different layer: not whether a decision may be taken, but whether an obvious error may be corrected.

## What could change

The goal is not to loosen security. It is to make it more precise.

1. **Separate harmless edits from sensitive ones.** Product descriptions, contact numbers and delivery notes are not the same as bank details or credit limits. Most business systems allow field-level or role-level permissions; many businesses never use them.
2. **Give scoped rights to the people closest to the data.** A sales administrator who maintains customer contacts every day can be allowed to edit contact fields, while financial fields stay protected.
3. **Log changes and review them.** A change history lets the business allow more edits safely, because mistakes and misuse can be seen and reversed.
4. **Use temporary elevation for occasional tasks.** Microsoft's documentation for its [privileged identity](https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure) service describes just-in-time access that is time-bound, can require approval and a stated reason, and keeps an audit history. Smaller businesses may not need that tool, but the idea of temporary, recorded access applies widely.
5. **Review roles as the business changes.** A permission design set at go-live should be revisited, just as approval thresholds should.

Uncontrolled change carries its own risk, which Mellorca discusses in [why uncontrolled configuration changes create operational risk](/insights/why-uncontrolled-configuration-changes-create-operational-risk/). Scoped permission with logging sits between the two failures: everyone may change everything, or nobody may change anything.

## Trade-offs

- **Security exposure.** Every additional right is something an attacker could use if the account were compromised. Scoping must be careful, and sensitive fields must stay protected.
- **Data consistency.** More editors can mean more variation in how things are written. Simple conventions help.
- **Responsibility moves.** A person who may fix things also owns the errors they introduce. For some that is welcome; for others it is a new worry.
- **Logging can feel like watching.** A change history is a safety net, but it should be presented and used as one, not as a tool for catching people out.

## Why it matters

For the business, scoped permissions mean fewer stale records, fewer reminders and less load on the few people who hold every key. For the person, the change is simpler and more personal. They see a problem, they fix it, and the work is finished.

That is the dividend: not unlimited access, but a fair match between what someone understands and what they are allowed to correct. Over time, being trusted with small things is part of how people come to experience their work as their own.
