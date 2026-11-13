---
hub: impact
record_id: CPS-127
slug: uncontrolled-system-access-financial-risk
title: Not knowing who still has access to your systems
description: When nobody can show who still has access to business systems, old accounts and excess permissions become a hidden operating, security and audit cost.
lead: Access accumulates quietly. Employees change roles, contractors finish projects, old accounts remain, and permissions that once made sense continue long after the business need has disappeared.
category: Cybersecurity
published_date: 2026-09-02
updated_date: 2026-09-02
byline_category: Cybersecurity, Passwords & Access Control
tags:
  - Risk exposure
  - Licence waste
  - Audit effort
cta_label: Digital Systems Audit
cta_href: /services/digital-systems-audit/
side_title: Cost mechanisms
side_text: Access should be assessed as part of the wider systems and identity environment.
commercial_domain: Cybersecurity, Passwords & Access Control
primary_pain: The business cannot reliably identify who still has access to its systems and data
primary_cost_mechanism: Risk exposure, incident response, audit effort and administrative rework
sources:
  - Identity and access management | https://www.ncsc.gov.uk/collection/10-steps/identity-and-access-management
  - least privilege - Glossary - CSRC | https://csrc.nist.gov/glossary/term/least_privilege
  - What is Identity and Access Management (IAM)? - IBM | https://www.ibm.com/think/topics/identity-access-management
  - https://www.cisa.gov/sites/default/files/2023-12/ESF%20IDENTITY%20AND%20ACCESS%20MANAGEMENT%20RECOMMENDED%20BEST%20PRACTICES%20FOR%20ADMINISTRATORS%20PP-23-0248_508C.pdf | https://www.cisa.gov/sites/default/files/2023-12/ESF%20IDENTITY%20AND%20ACCESS%20MANAGEMENT%20RECOMMENDED%20BEST%20PRACTICES%20FOR%20ADMINISTRATORS%20PP-23-0248_508C.pdf
  - SP 800-53 Rev. 5, Security and Privacy Controls for Information Systems and Organizations - CSRC | https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final
closing_title: Method note
closing_text: This article does not use a generic breach-cost benchmark. Quantify direct access-administration and licence costs from your own records, then model security scenarios separately.
related:
  - When former employees still have system access | /impact/former-employees-retaining-system-access/
  - Reused passwords: How one stolen login becomes a business-wide risk | /impact/reused-passwords-single-credential-business-risk/
  - When security spend runs ahead of basic controls | /impact/security-products-without-basic-controls/
---
## The tolerated pain is access nobody can confidently explain

A growing business can add accounts faster than it removes them. A new employee gets access to several systems. Six months later the person changes role but keeps the old permissions. A contractor receives temporary access that never expires. A shared mailbox or administrator account survives because nobody wants to risk breaking something.

Individually, these decisions look harmless. Together they create a basic control problem: the business cannot answer, with evidence, who can reach which systems and why.

A typical example: a 70-person property management company in Pretoria. Its bookkeeper moved into a portfolio manager role two years ago and still holds payment-approval rights in the banking profile. An IT support company that was replaced last year still has an administrator login on the file server. Three “temp” accounts set up for a busy month-end are still active and still licensed. None of this was a decision. It was simply the absence of one.

## Why uncontrolled access survives

Access is usually granted at moments of urgency and reviewed at moments of inconvenience. Managers focus on getting people productive. IT teams avoid removing permissions unless ownership is clear. Smaller organisations may have no central identity-governance process at all, so each application develops its own history of users, roles and exceptions.

The UK National Cyber Security Centre’s guidance on [identity and access management](https://www.ncsc.gov.uk/collection/10-steps/identity-and-access-management) recommends formal processes for joiners, movers and leavers, so that access is changed when people move and revoked when it is no longer needed, and advises reviewing user accounts regularly for unnecessary privileges. NIST, in SP 800-53, defines [least privilege](https://csrc.nist.gov/glossary/term/least_privilege) as granting each entity only the minimum authorisations it needs to perform its function, and treats account management and least privilege as core controls.

Several habits keep the problem alive:

- **Copying a colleague’s access.** “Give her what Thabo has” is quick, but it copies every historic permission Thabo has accumulated.
- **Fear of breaking things.** Nobody removes a mysterious account because it might be running a report or an integration.
- **Applications outside the central login.** Banking, payroll, supplier portals and niche tools each keep their own user lists that nobody reconciles.
- **Offboarding that stops at email.** The mailbox is closed, but the accounting login, the CRM seat and the shared password to the courier portal remain. We look at this in [when offboarding leaves digital access behind](/patterns/when-offboarding-leaves-digital-access-behind/).

## How the pain becomes money

- **Incident exposure:** an unnecessary account or permission can widen what a compromised credential can reach.
- **Administrative rework:** staff spend time reconstructing who should have access when audits, incidents or role changes force the question.
- **Operational delay:** urgent access removals become slower when ownership and dependencies are unclear.
- **Audit and compliance effort:** proving appropriate access becomes labour-intensive when evidence is scattered across applications.
- **Licence waste:** accounts that should have been removed can continue consuming paid seats or privileged features.

> **The commercial signal:** if the business cannot produce a current list of active users, privileged accounts, owners and business justification for important systems, it is managing access by memory rather than control.
>

## Quantify the operating cost before trying to price the risk

Do not invent a generic breach number. Start with what can be measured directly.

- **Annual access-administration cost** = access requests, reviews and corrections per month × average handling time × loaded labour cost × 12
- **Licence leakage** = inactive or unnecessary paid accounts × monthly licence cost × 12

For risk exposure, model scenarios separately. Ask which systems an unnecessary account could reach, what transaction authority it carries, what data it exposes, and how much paid response time would be required if that access were abused or compromised.

In the property management example, the licence leakage is easy to count from the supplier invoices. The risk scenario is more important: the former bookkeeper’s approval rights mean that one compromised login could release payments from trust and operating accounts. The exposure is bounded by the approval limits on that banking profile, which the business can look up. The case for removing the permission does not need a breach statistic; it needs that one sentence.

## How to diagnose the current state

A first review can be done in a few days for the systems that matter most:

1. List the systems that hold money, customer data or administrative control: email and identity, banking, accounting, payroll, CRM, file storage, website and domain.
2. Export the active users and roles from each one.
3. Put the exports next to the current staff and contractor list from HR or payroll.
4. Flag accounts with no matching person, people with no current reason for the access, and anyone holding administrator or approval rights.
5. Check last-login dates; accounts unused for months are prime candidates for removal.
6. Ask each system owner to confirm or reject every flagged item, in writing.

The output is the evidence the business currently lacks: a dated list, an owner’s confirmation and a record of what was removed.

## Role changes are where access debt accumulates

Joiners and leavers receive attention because they are visible events. Internal moves are easier to miss. A promotion, transfer or project change can add permissions without removing the old ones. Over time, access expands while accountability weakens.

This is why access reviews should not be treated only as an annual compliance exercise. The most useful control is a repeatable lifecycle: grant, change, review and remove.

### Suppliers and contractors

External access deserves its own attention. IT providers, accountants, developers and agencies often receive broad rights to do their job, and those rights rarely have an end date. When the engagement ends, nobody owns the removal. See [why supplier access survives after engagements end](/discovery/why-supplier-access-survives-after-engagements-end/) for the pattern and how to break it.

## When this becomes commercially urgent

Priority is high when former employees still appear in systems, contractors have open-ended access, privileged accounts are shared, managers cannot explain why users hold certain roles, sensitive files are broadly accessible, or a merger or restructuring has created overlapping identity systems. Another trigger is a licensing review: access and subscription waste often expose the same weak offboarding process, as discussed in [unused software licences as financial waste](/impact/unused-software-licences-financial-waste/).

## What good looks like

A controlled environment has named system owners, a reliable identity source, documented access roles, time-bound exceptions, prompt deprovisioning and periodic reviews that produce evidence. Privileged access is smaller, more visible and more deliberately managed than ordinary access. The NCSC also advises that administrators use separate accounts for administrative work and that privileged accounts are protected with multi-factor authentication; our article on [accounts without MFA](/impact/accounts-without-mfa-financial-risk/) covers that control.

The goal is not to make every permission request bureaucratic. It is to make access intentional and reversible.

### Trade-offs to manage

- **Speed versus precision.** Role-based templates make onboarding fast, but only if the roles are kept tidy; otherwise they spread excess access efficiently.
- **Review effort versus value.** Reviewing every system monthly is unrealistic for a small team. Review high-risk systems and privileged roles more often, and the rest less often.
- **Removal versus disruption.** Disable before deleting. A disabled account can be restored if something breaks; a deleted one may take data with it.

## Practical next actions

- Inventory important business applications and identify an accountable owner for each.
- Export active users and privileged roles from those systems.
- Compare the list with current employees, contractors and role assignments.
- Remove dormant accounts and unnecessary permissions through a controlled change process.
- Set expiry dates for temporary and supplier access where supported.
- Create a recurring review for high-risk systems and privileged roles.
- Link access removal to the employee and contractor offboarding process.

### What to do first

Start with administrator and payment-approval rights. They are few in number, high in consequence and quick to review. Then reconcile the user list of your main email or identity platform against payroll, and close anything without a current owner. Finally, add a “role change” step to your HR process so that a move triggers an access review, not just a new job title.

## Bottom line

The financial risk is not created by access itself. It is created when access outlives the business reason for granting it and nobody can prove otherwise. A current access inventory and disciplined lifecycle reduce security exposure, licence waste and the labour required to reconstruct permissions under pressure.

*Method note:* this article does not use a generic breach-cost benchmark. Quantify direct access-administration and licence costs from your own records, then model security scenarios separately.
