---
hub: discovery
record_id: DISC-227
slug: job-changes-updated-in-hr-but-not-in-downstream-systems
title: Job changes updated in HR but not in downstream systems
description: A promotion or transfer is recorded correctly in HR, yet approval chains, cost centres and directories keep the old details for weeks. Why mover changes stall and how to make one update reach every system.
lead: A promotion or transfer is recorded correctly in HR, yet approval chains, cost centres and directories keep the old details for weeks. Why mover changes stall and how to make one update reach every system.
category: HR & Workforce Operations
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: HR & Workforce Operations
problem_domain: HR & Workforce Operations
problem_owner: HR operations or people operations manager
budget_owner: HR director or COO
sources:
  - Plan cloud HR application to Microsoft Entra user provisioning - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/app-provisioning/plan-cloud-hr-provision
  - What are lifecycle workflows? - Microsoft Entra ID Governance | https://learn.microsoft.com/en-us/entra/id-governance/what-are-lifecycle-workflows
  - https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf | https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf
related:
  - Employee onboarding leaves HR chasing every other department | /discovery/employee-onboarding-leaves-hr-chasing-multiple-departments/
  - Warehouse adjustments do not reach ecommerce systems quickly | /discovery/why-stock-corrections-in-the-warehouse-take-hours-to-reach-the-online-shop/
  - New SKUs go on sale before every system has the product data | /discovery/launching-a-new-sku-before-every-system-knows-it-exists/
summary: A promotion or transfer is recorded correctly in HR, yet approval chains, cost centres and directories keep the old details for weeks. Why mover changes stall and how to make one update reach every system.
layout: plain
---
Illustrative example: a Johannesburg logistics company promotes a dispatch supervisor to branch manager in Gqeberha. HR updates the employee record on the first of the month: new title, new branch, new reporting line, new cost centre. Three weeks later, his leave requests still go to his old manager, the expense system still charges his claims to the Johannesburg depot, the fleet system still lists him as a supervisor and the company directory shows his old phone extension. His new team cannot add him to their approval chain because the workflow tool does not know he manages them. None of these systems was told. Each was updated, eventually, by someone who noticed something wrong.

## The problem in plain language

When an employee changes job, department, location, manager or cost centre, the change is recorded in the HR or payroll system. That record is usually correct. The problem is everything downstream: the directory, email groups, approval workflows, expense and procurement tools, the ERP's cost-centre assignments, rostering, the intranet and business applications that hold their own copy of the employee's details. If those systems are updated by hand, from emails or tickets, some are missed and others lag by weeks.

This is different from the question of whether someone keeps old system access after moving, which is covered in [staff keeping old application access after a role change](/discovery/staff-keep-old-application-access-after-they-change-roles/). Here the concern is data: titles, managers, departments and cost centres that drive routing, reporting and cost allocation across the business.

## What the buyer is actually trying to solve

The HR operations or people operations manager wants a job change to be entered once and to reach every system that needs it, on the effective date, with evidence that it did. They want to stop receiving complaints from finance about misallocated costs and from managers about approvals going to the wrong person, and they want to know which systems depend on which HR fields.

## Evidence and system mechanism

### HR as the source of authority

Identity platforms are designed to take HR as the authoritative source. Microsoft's guidance on [planning cloud HR to directory user provisioning](https://learn.microsoft.com/en-us/entra/identity/app-provisioning/plan-cloud-hr-provision) describes the joiners-movers-leavers process using a cloud HR application as the system of record, and states that when an employee's name, title or manager is updated in the HR application, the user account is updated automatically in Active Directory and Microsoft Entra ID. The guide asks implementers to decide which attributes to process whenever a mover operation takes place, and notes that a change of supervisory organisation may require moving the account to a different container in the directory.

### Movers can trigger workflows, not just attribute updates

Microsoft's overview of [lifecycle workflows](https://learn.microsoft.com/en-us/entra/id-governance/what-are-lifecycle-workflows) defines a mover as someone who moves between boundaries within an organisation, such as from marketing to sales, which may require different access or authorisation. Workflows run automatically when triggered, are scoped by user attributes such as department, and keep history and audit logs. The HR provisioning guide gives the example of launching a custom task when a user's department or job title changes. In other words, the technology to propagate a job change exists; what is often missing is the decision to connect it, and the list of systems that should receive it.

### Keeping personal information accurate is a legal duty

In South Africa, the [Protection of Personal Information Act](https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf) requires a responsible party, in section 16, to take reasonably practicable steps to ensure personal information is complete, accurate, not misleading and updated where necessary. Employee records copied into many systems and updated inconsistently make that harder to demonstrate.

## Why this becomes urgent

Hybrid work expansion is a common trigger. When staff work across offices and from home, location, reporting line and team membership matter more for routing work, approving leave, issuing equipment and applying policies, and managers can no longer fix errors by walking across the office. Restructures, branch openings and acquisitions produce many movers at once and expose how many systems hold their own copy of the organisation chart.

## Economic consequence

Approvals stall or go to the wrong manager. Costs land on the wrong cost centre, so branch and departmental reports are wrong until finance corrects them by journal. HR and IT staff spend time answering tickets about wrong titles, missing group memberships and broken approval chains, the duplicated effort described in [HR entering the same employee details into multiple systems](/impact/hr-entering-same-employee-details-into-multiple-systems-duplicate-admin-error-cost/). Inconsistent employee records across payroll, HR and access also create audit findings, as covered in [employee records held separately in payroll, HR and access systems](/impact/employee-records-held-separately-payroll-hr-access-inconsistent-record-cost/).

## Root cause

- **No map of dependent systems.** Nobody has listed which systems use title, manager, department, location or cost centre.
- **Joiners and leavers were automated, movers were not.** Integration projects focus on starting and leaving, because those have obvious security implications.
- **Effective dates are ignored.** Changes captured in advance are applied immediately, or changes applied late are not backdated.
- **Each system owns its own organisation chart.** Approval tools, expense systems and ERPs keep separate hierarchies.
- **Codes do not match.** HR department names do not map cleanly to finance cost centres.

## What good looks like

HR is the single place where job, manager, location and cost-centre changes are recorded, with an effective date. A maintained register lists every downstream system and the HR fields it needs. The directory is updated automatically, and other systems either read from the directory or receive changes through integrations. A mover event triggers defined tasks: approval chains updated, cost centre changed, equipment or access reviewed. A daily exception report shows changes that failed to reach a target, and someone owns clearing it.

## Diagnostic questions

- Which systems, outside HR and payroll, store an employee's manager or cost centre?
- When someone changed jobs last month, how many days passed before every system reflected it?
- Do approval workflows read the reporting line from a central source or keep their own?
- Can finance map every HR department to a cost centre without a manual lookup table?
- Who is told when a job change fails to reach a downstream system?

## Practical next actions

1. List every system that holds employee job, manager, location or cost-centre data and record how each is updated today.
2. Agree that HR is the source of authority for these fields and publish a mapping of HR departments to finance cost centres.
3. Connect the HR system to the directory for mover attributes, then point approval and expense tools at the directory where they support it.
4. Define the tasks a job change should trigger, such as approval chain updates and access review, and automate the routine ones.
5. Set up an exception report for failed or late updates with a named owner and a target clearing time.
6. Test with the next ten job changes and measure how long each takes to reach every system.

## Where Mellorca fits

Mellorca maps employee data flows from HR to downstream systems, designs mover workflows and builds the integrations and exception reporting that keep records aligned. This work sits within [business automation and AI workflows](/services/business-automation-ai-workflows/), with integration support where systems need to be connected.

## Method note

The opening example is illustrative. Microsoft Entra documentation is used as an example of HR-driven provisioning and mover workflows; other identity and HR platforms provide similar functions, and licensing requirements differ. The reference to the Protection of Personal Information Act is general information, not legal advice.
