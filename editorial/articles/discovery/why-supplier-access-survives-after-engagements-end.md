---
hub: discovery
record_id: DISC-368
slug: why-supplier-access-survives-after-engagements-end
title: Why Supplier Access Survives After the Supplier Engagement Ends
description: External access can outlive supplier engagements when access lifecycle controls are not tied to sponsorship, expiry and periodic review.
lead: External access is easy to grant for urgent collaboration and surprisingly easy to forget when the commercial relationship, project or named supplier contact changes.
category: Security & Compliance Operations
published_date: 2026-09-04
updated_date: 2026-09-04
page_title: Why Supplier Access Survives After Engagements End | Mellorca Discovery
tags:
  - External access
  - Suppliers
  - Governance
cta_label: Digital Systems Audit
cta_href: /services/digital-systems-audit/
side_notes:
  - Problem owner: Security Lead / Risk & Compliance
  - Budget owner: CIO / CRO / CFO
problem_domain: Security & Compliance Operations
problem_owner: Security Lead / Risk & Compliance
budget_owner: CIO / CRO / CFO
sources:
  - Use Microsoft Entra ID Governance to review and remove external users who no longer have resource access - Microsoft Entra ID Governance | https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-external-users
  - Plan a Microsoft Entra access reviews deployment - Microsoft Entra ID Governance | https://learn.microsoft.com/en-us/entra/id-governance/deploy-access-reviews
  - Govern access for external users in entitlement management - Microsoft Entra ID Governance | https://learn.microsoft.com/en-us/entra/id-governance/entitlement-management-external-users
closing_title: Method note
closing_text: The sources establish current external-identity review mechanisms. Risk and remediation impact require organisation-specific access and system evidence.
related:
  - Why Security Architecture Decisions Need Linked Risk Exception Records | /discovery/why-security-architecture-decisions-need-linked-risk-exception-records/
  - Why security findings end up in spreadsheets after the scan finishes | /discovery/security-findings-tracked-in-spreadsheets-after-scans/
  - Why Policy Acknowledgements Need a Reliable System Record | /discovery/why-policy-acknowledgements-need-a-reliable-system-record/
---
## The problem in plain language

A supplier receives access to applications, groups, files or cloud resources. The engagement ends, but some accounts and entitlements remain because access removal was never connected to the supplier lifecycle.

Nobody decided that the access should stay. It stays because no event told anyone to remove it. The contract closed in procurement, the project closed in the delivery tracker and the final invoice was paid in finance, yet the identity system received none of those signals. The supplier's consultants, support engineers or contractors can still sign in, and in many cases nobody inside the business would notice if they did.

## What the buyer is actually trying to solve

The buyer needs external access to expire or be reviewed when the business justification ends—not months later during an audit or incident investigation.

The search language is usually direct: “remove guest users who no longer need access”, “vendor access review”, “third-party access offboarding”, “external user lifecycle” or “how to expire contractor accounts”. Behind those phrases is a simpler requirement: every external identity should be able to answer the question “why do you still have access?” with a current, named business reason.

## Evidence and system mechanism

Microsoft Entra ID Governance documents [access reviews for external identities](https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-external-users) and mechanisms to remove access that is no longer required. The same guidance acknowledges that it is not always obvious when an external user no longer needs access, which is why it describes reviews scoped to guest users, with an option to block sign-in for a period and then remove denied users from the tenant. Microsoft's [access reviews deployment guidance](https://learn.microsoft.com/en-us/entra/id-governance/deploy-access-reviews) also recommends review structures focused on guest and partner access. The underlying principle is durable sponsorship plus periodic or event-driven revalidation.

Entitlement management adds a lifecycle mechanism. Microsoft's documentation on [governing external users through access packages](https://learn.microsoft.com/en-us/entra/id-governance/entitlement-management-external-users) explains that when a policy includes an expiration date, the external user's access rights from that package are removed when the assignment expires. It also describes designating sponsors from the partner organisation as approvers, because they are likely to know which of their people need access. Where an external user loses all assignments, the platform can be configured to remove that user automatically.

The point is architectural rather than product-specific. Access that is granted through a governed package with an end date behaves very differently from access that is granted by adding a guest to a group, sharing a folder directly or creating a local account inside an application. The first has a built-in ending. The others end only when a person remembers.

Supplier access is different from employee access because the authoritative lifecycle signal may live in procurement, contract management or a project register rather than HR. Employee offboarding usually has a trigger, however imperfect: a termination date in the HR system. Supplier relationships rarely have an equivalent trigger wired into identity, so the gap is structural rather than a matter of diligence. The related pattern of [offboarding that leaves digital access behind](/patterns/when-offboarding-leaves-digital-access-behind/) is the internal version of the same problem.

## An illustrative example

*Illustrative scenario, not a client case.* A business engages an external firm to migrate its finance system. The firm's five consultants are invited as guests, added to a project group with access to the finance application, a shared document library and a remote administration tool. The migration finishes. The contract is closed and the purchase order is completed. Two of the consultants later move to other clients. Eighteen months on, an access review during an audit finds that all five guest accounts are still active, one still holds administrative rights in the finance application, and the document library contains current financial reports shared after the project ended. Nobody did anything wrong in a single step. The relationship simply had no ending in the identity layer.

## Problem owner and why now

Security, risk and compliance teams typically own the control outcome; CIO, CRO and CFO budgets carry the exposure and assurance burden. Procurement and contract owners hold the lifecycle signal, and business sponsors hold the knowledge of whether the work is still active. Urgency rises after supplier changes, audit findings, incidents and new assurance requirements. It also rises when the business consolidates suppliers, ends a large programme or discovers during an incident that it cannot quickly list which external parties can reach a critical system.

## Warning signs

- Guest or external accounts with no recorded sponsor or with a sponsor who has left.
- External accounts whose last sign-in is long ago but which remain enabled.
- Supplier staff listed in the directory under personal or generic email addresses rather than an identifiable organisation.
- Files and sites shared directly with external addresses outside any governed group.
- Local accounts inside business applications created for a supplier and absent from the central directory.
- Audit requests for third-party access that take days of manual collation to answer.

## Economic consequence

Unnecessary external access expands exposure and increases review effort. The organisation should quantify affected identities, entitlements, critical systems and remediation time rather than using generic breach-cost claims. The measurable costs usually include the labour of manual reviews before audits, the investigation time when an unexpected sign-in occurs, licence charges where external accounts consume paid features, and the management time spent deciding, case by case, whether access that nobody can explain is safe to remove. The broader financial view is covered in [the cost of uncontrolled system access](/impact/uncontrolled-system-access-financial-risk/).

## Root cause

Common causes are no external identity sponsor, access without expiry, offboarding that covers only named employees, direct resource sharing outside governed groups, and supplier records that are disconnected from identity systems. A further cause is that the person who requested access is often a project manager whose involvement ends with the project, so the sponsor disappears at exactly the moment a decision is needed.

## Practical intervention

1. Inventory external identities and resource assignments.
2. Assign a business sponsor for each supplier access relationship.
3. Use expiry or review dates aligned with the engagement.
4. Trigger access review when contracts, projects or supplier personnel change.
5. Remove access automatically where policy permits and route exceptions for approval.
6. Retain evidence of review and removal.

Sequencing matters. The inventory comes first because it usually reveals access paths nobody expected, such as application-local accounts or shared credentials. Linking each external identity to a supplier record comes next, because without that link neither expiry nor review can be tied to the real relationship.

## Trade-offs to manage

Short expiry periods reduce exposure but create renewal friction for long-running managed services, and frustrated sponsors may respond by requesting broad access to avoid repeated approvals. Automatic removal is clean but can interrupt a supplier who is still providing legitimate support after a contract extension that was not recorded. The practical balance is usually expiry aligned to the contract term, a warning before expiry to the sponsor, and a short block-before-delete period so that mistakes can be reversed without recreating accounts.

## Diagnostic questions

- Can every external identity be linked to an active supplier relationship?
- Who sponsors the access?
- When does the business need expire?
- Which external accounts have not been reviewed recently?
- Can direct sharing bypass the governed review path?
- Does closing a contract or purchase order notify anyone responsible for identity?
- Which business applications hold supplier accounts that the central directory cannot see?

## What good looks like

External access has a sponsor, scope and lifecycle. When the relationship ends, the organisation can prove which access was removed, which exceptions remain and who approved them. Access is granted through governed packages rather than ad hoc sharing, reviews are scheduled and also triggered by real supplier events, and the security team can produce a current list of third-party access to critical systems in minutes rather than weeks.

## Where Mellorca fits

Mellorca can map supplier access flows, connect procurement/contract lifecycle signals to identity governance, design review workflows and establish managed control evidence.

## Commercial next step

Discovery article → external-access diagnostic → supplier identity map → governance design → implementation → managed reviews.
