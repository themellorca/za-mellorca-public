---
hub: impact
record_id: CPS-084
slug: employee-records-held-separately-payroll-hr-access-inconsistent-record-cost
title: Three Systems, One Employee: The Cost of Records That Disagree
description: When payroll, HR and access systems each hold their own copy of an employee, the copies drift apart, and the Rand and risk show up in payroll errors, reconciliation time and lingering access.
lead: When payroll, HR and access systems each hold their own copy of an employee, the copies drift apart, and the Rand and risk show up in payroll errors, reconciliation time and lingering access.
category: Human Resources
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Human Resources
commercial_domain: Human Resources
primary_pain: Employee information maintained separately in payroll, HR and access systems so the records drift apart
primary_cost_mechanism: Monthly reconciliation hours, payroll corrections and off-cycle payments, unreliable headcount and labour cost reports, access left open after employment ends, and exposure under data accuracy and safeguard duties
sources:
  - What is HR-driven provisioning with Microsoft Entra ID? - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/app-provisioning/what-is-hr-driven-provisioning
  - COMPLETING AND SUBMITTING EMPLOYER DECLARATIONS - South African Revenue Service | https://www.sars.gov.za/types-of-tax/pay-as-you-earn/completing-and-submitting-employer-declarations/
related:
  - Chasing Timesheets and Claims Every Pay Run: The Cost of Manual Data Collection | /impact/collecting-employee-information-every-pay-period-admin-cost/
  - The Cost of Business Systems That Do Not Talk to Each Other | /impact/business-systems-do-not-talk-integration-cost/
  - The Spreadsheet Only One Person Understands: Financial and Continuity Risk | /impact/business-run-on-spreadsheet-one-person-understands-financial-continuity-risk/
summary: When payroll, HR and access systems each hold their own copy of an employee, the copies drift apart, and the Rand and risk show up in payroll errors, reconciliation time and lingering access.
layout: plain
---
## One employee, three versions of the truth

Take a 40-person business in Durban. When Sipho joins as a warehouse supervisor, HR captures his details on a paper form and then in the HR spreadsheet. The payroll clerk keys the same details into the payroll package a few days later. The IT administrator creates his login and a door-access card from an email that says "new starter, Sipho, supervisor". Three people have typed one person's details into three places, and none of those places is connected to the others.

For the first month, everything looks fine. Then Sipho marries and changes his surname, and HR updates the spreadsheet. Payroll is not told. His payslip still shows the old name, his bank rejects the salary payment because the account holder name no longer matches, and the access card system still lists the previous surname on the door log. A small change has become three corrections and one late salary.

This article is about that specific pattern: employee information maintained separately in payroll, HR and access systems, so that the records drift apart. It is related to, but different from, [HR entering the same employee details into multiple systems](/impact/hr-entering-same-employee-details-into-multiple-systems-duplicate-admin-error-cost/), which looks at the typing time. Here the focus is on what happens afterwards, when the copies disagree and someone has to find out which one is right.

## Where the records drift apart

Records rarely start out inconsistent. They become inconsistent through ordinary events that touch one system and miss the others.

- **Changes of name, address or bank account.** Employees tell the person they trust, usually their manager or HR, and expect the rest to follow automatically.
- **Promotions and transfers.** The job title, cost centre and reporting line change in HR. The payroll package keeps the old cost centre, so labour cost lands in the wrong department's report.
- **Working hours and leave balances.** A shift pattern agreed with a manager is applied in the time-and-attendance system but not in payroll, so overtime is calculated on the wrong basis.
- **Resignations and dismissals.** HR closes the file. Payroll stops payment at month end. The login and the access card stay active because nobody told the person who maintains them.
- **Corrections made in one place only.** A payroll clerk fixes an ID number that was mistyped, and the corrected number never reaches the HR record, so the next export puts the mistake back.

## The cost shows up in four places

The cost of inconsistent records is rarely a single large event. It is a steady set of small costs, plus a tail risk that is much larger.

### 1. Reconciliation time

Someone has to compare lists. Every month, the payroll administrator checks the HR headcount against the payroll run, and someone else checks the access list against both. If that takes three hours a month for each comparison, it is roughly seventy hours a year, spent producing no new information. The figures here are illustrative, but the pattern is familiar to anyone who has run a month-end payroll with a spreadsheet beside the screen.

### 2. Payroll errors and rework

A wrong bank account, a missed salary increase or a stale deduction creates an off-cycle payment, a correction on the next payslip and a conversation with an employee who is understandably unhappy. Each correction also changes the figures behind employer submissions. SARS asks employers to [complete and submit employer declarations](https://www.sars.gov.za/types-of-tax/pay-as-you-earn/completing-and-submitting-employer-declarations/) that reconcile to what was paid, so payroll records that disagree with other employee records make that reconciliation harder to defend.

### 3. Wrong management information

If cost centres, job grades or start dates differ between HR and payroll, headcount reports and labour cost per department will disagree. Leaders then stop trusting either report and ask for a manual one, which adds another copy of the data.

### 4. Access that outlives employment

This is the risk that matters most. When the access system is maintained by hand, a leaver's account may stay open for weeks. The business then has a former employee who can still sign in, which is the situation described in [former employees retaining system access](/impact/former-employees-retaining-system-access/). The reverse also happens: new starters wait days for a login because the request travelled by email, a problem examined in [new starters waiting for logins](/impact/new-starters-waiting-for-logins-access-setup-cost/).

## The legal reason accuracy matters

For South African employers, inaccurate employee records are not only an inconvenience. The Protection of Personal Information Act places a duty on a responsible party to take reasonably practicable steps to make sure personal information is complete, accurate, not misleading and updated where necessary. It also requires appropriate safeguards against loss, damage and unauthorised access. The text of the [Protection of Personal Information Act](https://www.gov.za/documents/protection-personal-information-act) is published on the government website. Employee files contain identity numbers, bank details, medical aid information and sometimes health records, so three loosely managed copies create three places where that duty can be missed. This article does not offer legal advice, and a business with specific questions should take them to a qualified adviser.

## What a single source of truth means in practice

The fix is not necessarily one giant system. It is a decision about which system is the authority for each piece of information, and a reliable way for changes to flow from there to the others.

The common pattern is to treat the HR record as the starting point. When a person is hired, changed or dismissed there, the downstream systems are updated from it. Vendor documentation describes this idea as [HR-driven provisioning](https://learn.microsoft.com/en-us/entra/identity/app-provisioning/what-is-hr-driven-provisioning): the HR system becomes the source of authority for digital identities, and creating a new employee there triggers the creation of the user account. The same principle applies at smaller scale without any specialist product. A leaver checklist that starts in HR and has a named person responsible for each downstream step is an example of one authority, with the others following.

Not every business needs automation on day one. A realistic path for a company with forty to two hundred employees looks like this:

- Agree which fields each system owns. Bank details might belong to payroll, job title and manager to HR, and building access to IT, but all of them must be fed from a single change request.
- Replace email requests with one structured form that captures the change once and routes it to every owner.
- Where the payroll or access software offers an import or integration with the HR record, use it before building anything custom.
- Reduce the number of people who can edit identity fields. Fewer editors means fewer silent changes.

## Questions to ask before buying anything

Before spending on integration, ask a few plain questions. Which fields cause the most corrections? How long does it take from an HR change to the same change in payroll and access? Who finds out when a record disagrees, and how? If nobody can answer, the first investment is measurement, not software. Two months of logging every correction will usually show that three or four fields account for most of the work, and those are the ones to connect first.

Customer records show the same pattern at a larger scale. The effects of [departments keeping separate customer records](/impact/departments-separate-customer-records-financial-impact/) are well documented, and employee records follow the same logic with higher privacy stakes.

## Practical next actions

1. **List every system that holds an employee record.** Include payroll, HR, time and attendance, email and directory accounts, building access, medical aid and pension administrators, and any spreadsheet.
2. **Pick ten employees and compare their details across the systems.** Check name, ID number, bank account, job title, cost centre and status. Count the mismatches and record where they sit.
3. **Name the authority for each field.** Write it on one page, with the owner's name beside each system, and share it with HR, payroll and IT.
4. **Create a single change form and a single leaver checklist.** Each form should list every downstream step and who completes it, and no change is closed until all steps are ticked.
5. **Run a monthly three-way check.** Compare active employees in HR, payroll and the access list, and investigate every difference within the week.
6. **Ask each vendor what integration options exist.** Many payroll and access products can import from a common file or connect to an HR record, and the answer may already be included in your subscription.

None of these steps needs a large project. They need an owner, a one-page agreement and a month of discipline, and they usually pay for themselves in the first payroll cycle without a correction.
