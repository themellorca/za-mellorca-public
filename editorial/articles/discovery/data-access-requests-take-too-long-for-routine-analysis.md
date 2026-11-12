---
hub: discovery
record_id: DISC-266
slug: data-access-requests-take-too-long-for-routine-analysis
title: Why routine data access requests take days instead of hours
description: Analysts wait days for approval to use data they are entitled to, so board packs slip and spreadsheets get emailed around. How owned, pre-approved access bundles make the safe route the fast route.
lead: Analysts wait days for approval to use data they are entitled to, so board packs slip and spreadsheets get emailed around. How owned, pre-approved access bundles make the safe route the fast route.
category: Data, Reporting & Decision Systems
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Data, Reporting & Decision Systems
problem_domain: Data, Reporting & Decision Systems
problem_owner: Head of Reporting / IT Manager
budget_owner: CFO / COO
sources:
  - Section 19 Security measures on integrity and confidentiality of personal information - POPIA | https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/
  - What is entitlement management? - Microsoft Entra ID Governance | https://learn.microsoft.com/en-us/entra/id-governance/entitlement-management-overview
  - Data Products in Unified Catalog | https://learn.microsoft.com/en-us/purview/unified-catalog-data-products
  - Row-level security (RLS) with Power BI - Microsoft Fabric | https://learn.microsoft.com/en-us/fabric/security/service-admin-row-level-security
related:
  - When KPI definitions live in slide decks instead of the reporting model | /discovery/metric-definitions-live-in-slide-decks-not-governed-models/
  - Why executives get different answers to the same KPI question | /discovery/executives-get-different-answers-to-the-same-kpi-question/
  - Why analysts keep rebuilding the same data joins in separate spreadsheets | /discovery/why-analysts-keep-rebuilding-the-same-data-joins-in-spreadsheets/
summary: Analysts wait days for approval to use data they are entitled to, so board packs slip and spreadsheets get emailed around. How owned, pre-approved access bundles make the safe route the fast route.
layout: plain
---
A finance analyst is asked to prepare a margin analysis by customer for next week's board meeting. The data exists in the ERP and the BI platform. She emails IT for access to the sales dataset. IT asks who approves it. The sales director is travelling. The approval arrives four days later, for the wrong workspace. By the time she has the right access, the board pack has gone out with last quarter's analysis and a note saying "updated figures to follow".

This article is about data access requests that take far too long for routine analysis. It is not about new employees waiting for their first logins, which is covered in [why new employees wait for system access](/discovery/why-new-employees-wait-for-system-access/). It is about established staff, analysts, finance teams and managers, who need access to data they are entitled to use, for a normal business purpose, and still wait days or weeks to get it.

## The problem in plain language

In most mid-sized businesses, access to data is granted one request at a time. Each request needs someone to work out what is being asked for, who owns the data, who should approve, and how to grant it in the specific tool. Because there is no standard answer to any of these questions, every request becomes a small investigation.

The typical symptoms are:

- requests sent by email or chat, with no visible status;
- uncertainty about who can approve access to which data;
- access granted too broadly, to a whole workspace or database, because narrowing it is hard;
- analysts asking colleagues to export data and send it by email instead;
- access that is granted and never removed, because nothing tracks it.

The last two symptoms matter as much as the delay. When the official route is slow, people find unofficial ones, and spreadsheets full of customer or employee data start circulating outside any control.

## What the buyer is actually trying to solve

Searches such as "how to speed up data access requests", "self-service data access with approval" or "who should approve access to Power BI data" come from heads of finance, BI leads and IT managers caught between two pressures. The business wants faster analysis, especially for board reporting. Compliance and security want access to personal and sensitive data to be controlled. The real goal is to make the safe route also the fast route: predefined bundles of data access for common roles and purposes, with clear owners, quick approvals and automatic expiry.

## Evidence and system mechanism

The South African legal baseline is clear about the control side. Section 19 of the [Protection of Personal Information Act](https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/) requires a responsible party to secure the integrity and confidentiality of personal information through appropriate, reasonable technical and organisational measures that prevent unlawful access, and to identify risks, maintain safeguards and verify them regularly. Slow access processes do not satisfy this on their own; they often undermine it by pushing people towards emailed exports.

Identity platforms offer a more scalable model. Microsoft's overview of [entitlement management](https://learn.microsoft.com/en-us/entra/id-governance/entitlement-management-overview) describes access packages: bundles of the groups, applications and sites a person needs for a task, governed by policies that define who can request them, who approves, and when the access expires. It explicitly lists the problems of people not knowing what access they need, struggling to find the right approver, and keeping access longer than required.

Data catalogues apply the same idea to datasets. Microsoft Purview's [data products](https://learn.microsoft.com/en-us/purview/unified-catalog-data-products) group related tables, files and reports under a business use case with named owners. Instead of requesting access to each asset separately, a user requests the data product, agrees to its terms of use and is approved by the right party once.

Finally, access can be narrowed inside a dataset rather than granted all-or-nothing. Power BI's [row-level security](https://learn.microsoft.com/en-us/fabric/security/service-admin-row-level-security) uses roles with filters so that, for example, a regional manager sees only their region's rows in a shared model. The documentation notes that it applies to users with Viewer permissions, not to workspace administrators, members or contributors, which is one reason workspace roles should be granted carefully.

## Problem owner and why now

The symptom is felt by the financial director or head of reporting, whose analysts cannot get data. The process usually sits with the IT manager, and the approvals with data owners in sales, HR or operations. The budget owner is typically the CFO or COO. The trigger is often board reporting pressure: tighter deadlines, more requests for ad hoc analysis, or a new board member asking questions that require data the finance team cannot reach. Other triggers include a POPIA review, an audit finding about excessive access, and AI projects that need well-defined, approved datasets.

## Economic consequence

The visible cost is waiting: analysts idle or working on stale extracts, board packs delayed or incomplete, decisions postponed. The hidden costs include IT time spent interpreting vague requests, over-broad access granted to save time, data copied into uncontrolled spreadsheets, and access never revoked. Each of these adds to privacy and security risk. Estimate the effect from your own records: average days from request to access, number of requests per month, and how often data is shared by export because access was not available.

### An illustrative example

*Illustrative example, not a client case.* A South African financial services intermediary handles about thirty data access requests a month by email. Approvals depend on whichever manager the IT administrator can reach. The business defines five standard access bundles: finance reporting, sales performance by region, HR headcount without personal details, operations service levels and executive summary. Each has a named owner, an approver, a row-level filter where needed and a six-month expiry with renewal. Most requests now map to a bundle and are approved by the owner directly. Requests outside the bundles still go through a fuller review.

## Root cause

- **No defined data owners.** Nobody knows who can approve access to which data.
- **Access granted asset by asset.** Each request is assembled from individual tables, reports and workspaces.
- **No standard bundles.** Common needs are not packaged for reuse.
- **Coarse permissions.** Without row-level or column-level controls, access is all-or-nothing, so approvers hesitate.
- **No expiry or review.** Access accumulates, increasing the risk of every new grant.

The access-control pressure that AI adds is explored in [why AI adoption creates a new access-control problem](/patterns/why-ai-adoption-creates-a-new-access-control-problem/). Access that is never removed is the subject of [why former employees still have access](/patterns/why-do-former-employees-still-have-access/).

## Practical intervention

1. **Name data owners** for each main domain, such as sales, finance, HR and operations, with authority to approve access.
2. **Classify the data.** Separate data that can be widely shared from data containing personal or sensitive information.
3. **Define standard access bundles** for the common analysis roles, each with an owner, approver, terms of use and expiry.
4. **Narrow access inside datasets** using row-level or column-level security, so approvers can say yes without granting everything.
5. **Run requests through one channel** with visible status, rather than email and chat.
6. **Review and expire.** Set expiry dates and periodic reviews so access does not accumulate.
7. **Measure the process.** Track time from request to access and the number of requests handled outside the standard bundles.

## Diagnostic questions

- How long does a routine data access request take today, from ask to access?
- For each main dataset, who can approve access?
- Do your most common analysis needs map to predefined access bundles?
- Can you give a regional manager access to their region only, without a separate report?
- How often is data emailed as an export because access was not available in time?

## What good looks like

Common analysis needs are met by standard, owned access bundles that are approved in hours, not days. Sensitive data is protected by filters inside shared models rather than by refusing access altogether. Every grant has an expiry and a review. Requests are visible and measured. Analysts spend their time on analysis, and the business can show how access to personal information is controlled.

## Where Mellorca fits

Our [digital infrastructure](/services/digital-infrastructure/) work sets up the identity groups, access bundles and expiry rules behind a faster, controlled access process. A [digital systems audit](/services/digital-systems-audit/) identifies data owners, current access patterns and where data is leaving controlled systems as exports.

*Method note:* this article is not legal advice; POPIA obligations for your organisation should be confirmed with your information officer or legal adviser.
