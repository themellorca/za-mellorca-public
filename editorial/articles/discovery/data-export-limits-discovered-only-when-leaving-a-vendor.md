---
hub: discovery
record_id: DISC-346
slug: data-export-limits-discovered-only-when-leaving-a-vendor
title: Data-export limits are discovered only when leaving a vendor
description: Incomplete exports and missing contract terms turn leaving a software vendor into a race. How to map, test and negotiate data export early.
lead: Incomplete exports, deletion timelines and missing contract terms turn software exits into a race. How to map, test and negotiate data export before you need it.
category: SaaS & Application Portfolio Management
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: SaaS & Application Portfolio Management
problem_domain: SaaS & Application Portfolio Management
problem_owner: Application business owner with procurement
budget_owner: CFO
sources:
  - What happens to my data and access when my Microsoft 365 for business subscription ends? | https://learn.microsoft.com/en-us/microsoft-365/commerce/subscriptions/what-if-my-subscription-expires
  - Data Act explained - Shaping Europe’s digital future | https://digital-strategy.ec.europa.eu/en/policies/data-act-explained
  - Export all your organization's data - Google Workspace Admin Help | https://knowledge.workspace.google.com/admin/migrate/export-all-your-organizations-data
related:
  - Why software portfolio decisions need business value, not only licence counts | /discovery/why-software-portfolio-decisions-need-business-value-not-only-licence-counts/
  - Why software renewals need a confirmed business owner | /discovery/why-software-renewals-need-a-confirmed-business-owner/
  - Business capabilities that depend on tools nobody supports | /discovery/business-capabilities-depend-on-tools-with-no-support-owner/
summary: Incomplete exports, deletion timelines and missing contract terms turn software exits into a race. How to map, test and negotiate data export before you need it.
layout: plain
---
Most businesses only find out how hard it is to get their data out of a software platform when they decide to leave it. The export button produces a partial spreadsheet. Attachments, history and audit trails are missing. The vendor offers a full extract as a paid service. The contract end date is close, and the data will be deleted on a schedule nobody read. A decision that should have been about which system serves the business best becomes a race against the clock.

## The problem in plain language

Every SaaS platform holds data the business depends on: customer records, transaction history, documents, configuration, notes, approvals. Data-export capability is how completely, quickly and usefully that data can be taken out in a form another system can use. It is rarely assessed when software is bought. Demonstrations show features, not exits.

The symptoms appear at the worst moment. A business tries to replace its CRM, job-management tool or practice-management system and discovers that exports exclude attachments, custom fields or history; that related records come out as separate files with no way to link them; that the API limits how fast data can be pulled; or that access ends shortly after the subscription does. The cost and risk of leaving suddenly look higher than the cost of staying, even when staying is the wrong choice.

## What you are actually trying to solve

The person asking is often a finance director or operations manager under pressure to cut software costs, or an IT lead planning a migration. The questions sound like "how do we export all our data from [platform]?", "how do we get our data out before cancelling?", "are we locked in?", "what happens to our data when the subscription ends?" and "does the contract include a data portability clause?"

What they actually need is the ability to leave any vendor with complete, usable data, on a timetable the business controls, and to know that before they sign rather than after they decide to go.

## Evidence and system mechanism

Vendor documentation shows how quickly time runs out. Microsoft's guidance for Microsoft 365 business subscriptions describes a sequence of statuses after a subscription ends, from Active to Expired to Disabled to Deleted. For most offers the Expired status lasts 30 days and Disabled 90 days; during Disabled, users lose access and only administrators can access and back up data. After cancellation, data left behind might be deleted after 90 days and will be deleted no later than 180 days.

Microsoft also warns that explicitly deleting a subscription skips these stages and immediately deletes SharePoint and OneDrive content, and that buying a new subscription does not restore data from a deleted one ([Microsoft Learn: What happens to my data when my subscription ends](https://learn.microsoft.com/en-us/microsoft-365/commerce/subscriptions/what-if-my-subscription-expires)). That is a relatively generous, well-documented process. Many smaller platforms publish far less. Google's guidance on [exporting all of an organisation's data from Google Workspace](https://knowledge.workspace.google.com/admin/migrate/export-all-your-organizations-data) says the export is available no earlier than 48 hours after it starts, typically takes 72 hours but can take up to 14 days, and is deleted from a Google-provided bucket 60 days after it begins.

Regulation is starting to address the problem, though mostly outside South Africa. The European Commission's explanation of the EU Data Act says providers of platform and software as a service must make open interfaces available and, at minimum, export data in a commonly used, machine-readable format; it also says that from 12 January 2027 providers will not be able to charge customers for switching operations or data egress ([European Commission: Data Act explained](https://digital-strategy.ec.europa.eu/en/policies/data-act-explained)). South African businesses buying from global vendors may benefit indirectly, but should not assume the same protections apply to their contracts.

The mechanism is straightforward. Platforms are built to bring data in easily. Exports are often designed for reporting, not migration, so they flatten relationships, omit history and leave out files. Contracts are signed on the vendor's standard terms, which rarely specify export format, completeness, timing or cost. Nobody tests the exit until it is needed.

## Problem owner and why now

The problem owner is the business owner of the application, for example the sales director for CRM, with procurement or whoever negotiates software contracts. The budget owner is usually the CFO, who carries both the subscription cost and the cost of a difficult exit.

The trigger is budget reduction. When software spend is reviewed, consolidation and cancellation are the obvious levers, and export capability determines whether they are realistic. Other triggers include a vendor price increase, an acquisition of the vendor, a product being discontinued, or poor service that makes leaving desirable.

## Economic consequence

- **Weak negotiating position:** a vendor who knows leaving is hard has little reason to concede on price at renewal.
- **Migration cost:** incomplete exports mean manual re-keying, paid vendor extracts or specialist migration work.
- **Lost history:** customer, financial or compliance history that cannot be exported may be lost, or the old system must be kept running just to look things up.
- **Retention and compliance risk:** records the business must keep, for tax or regulatory reasons, may be deleted with the subscription.
- **Delayed decisions:** worthwhile consolidation is postponed because exit looks too risky.

Size these against your own contracts and data volumes; the pattern is related to [why contract renewals surprise finance and operations](/discovery/why-contract-renewals-surprise-finance-and-operations/).

## Root cause

- **Exit not part of buying:** selection focuses on features and price, not on how data leaves.
- **Standard contract terms accepted:** no clauses on export format, completeness, assistance, timing or post-termination access.
- **No data map:** the business does not know which records, files and history each platform holds or which must be kept.
- **Exports never tested:** nobody has tried a full extract and loaded it somewhere else.

## Practical intervention

1. **Map what each critical platform holds.** Records, relationships, attachments, history, audit logs and configuration, and which of these the business must retain.
2. **Test a full export now.** Use the platform's export tools and API. Check completeness, whether relationships survive and whether attachments come out.
3. **Record the exit terms.** For each contract, note notice periods, post-termination access windows, deletion timing, and any charges for extracts.
4. **Add exit questions to buying.** Ask about export format, API access and exit assistance before signing; see [what to ask about APIs before buying business software](/insights/what-to-ask-about-apis-before-buying-business-software/).
5. **Negotiate the clause.** At renewal, seek written commitments on export format, completeness, timing and cost.
6. **Keep your own copy where it matters.** For critical data, scheduled exports or integration into a system the business controls reduce dependence on any one vendor.

### An illustrative example

*Illustrative:* a Johannesburg engineering consultancy decides to replace its project-management platform during a cost review. A test export shows tasks and projects come out, but time entries, file attachments and client comments do not. Rather than discover this after giving notice, the business uses the API to extract the missing data over several weeks, confirms it loads into the new system, and only then cancels.

## Diagnostic questions

- For your five most important platforms, have you ever performed and checked a full export?
- Do you know how long you keep access to your data after a subscription ends?
- Do your contracts say anything about export format, completeness or cost?
- Which records must you retain for tax, legal or customer reasons, and where do they live?
- Would you be able to leave your most expensive vendor within one notice period?

## What good looks like

Each critical platform has a data map, a tested export and documented exit terms. Contracts specify how data leaves and when. Critical data is periodically copied to a system the business controls. Renewal negotiations happen from a position where leaving is a real option, which is the core of [avoiding vendor-led architecture](/insights/how-to-avoid-vendor-led-architecture/).

## Where Mellorca fits

Mellorca helps businesses map the data held in their platforms, test exports, set exit requirements for procurement and plan migrations before notice is given. That work sits within [digital systems architecture and roadmap](/services/digital-systems-architecture-roadmap/) and, when a migration goes ahead, [systems implementation and integration](/services/systems-implementation-integration/).

## Method note

Microsoft 365 is used as a documented example; other vendors' timelines differ, and Microsoft's own durations vary by purchase channel. The EU Data Act applies to services within its scope and is cited for direction of travel, not as a protection South African contracts automatically enjoy. The example is illustrative.
