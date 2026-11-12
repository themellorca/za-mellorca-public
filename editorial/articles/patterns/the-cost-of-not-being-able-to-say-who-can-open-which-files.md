---
hub: patterns
record_id: PAT-356
slug: the-cost-of-not-being-able-to-say-who-can-open-which-files
title: The Cost of Not Knowing Who Can See What
description: When no one can list who has access to sensitive files and systems, every audit, client query and incident becomes a manual search. Here is where the blind spot comes from and how to close it.
lead: When no one can list who has access to sensitive files and systems, every audit, client query and incident becomes a manual search. Here is where the blind spot comes from and how to close it.
category: Security, Access & Governance
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Security, Access & Governance
pattern_family: Security, Access & Governance
observable_condition: Nobody can quickly list who has access to a given folder, system or mailbox, so audit, client and incident questions are answered by manual checking.
primary_identification: Invisible entitlement: access is granted in the moment across many tools with no owner, no single record and no routine review.
commercial_value_dimensions: Staff time, regulatory exposure, deal friction, incident response speed and confidence in sharing
sources:
  - What are access reviews? - Microsoft Entra - Microsoft Entra ID Governance | https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-overview
  - Learn about sensitivity labels | https://learn.microsoft.com/en-us/purview/sensitivity-labels
  - https://inforegulator.org.za/popia/ | https://inforegulator.org.za/popia/
related:
  - The Cost of Infrastructure That Cannot Scale With Demand | /patterns/why-growing-demand-exposes-infrastructure-sized-for-yesterday/
  - When AI Agents Can Act but Governance Cannot See Them | /patterns/when-ai-agents-can-act-but-governance-cannot-see-them/
  - The Hidden Cost of Re-Keying Order Information | /patterns/the-hidden-cost-of-re-keying-order-information/
summary: When no one can list who has access to sensitive files and systems, every audit, client query and incident becomes a manual search. Here is where the blind spot comes from and how to close it.
layout: plain
---
## Observable condition

A new payroll clerk is asked to share a folder with the auditors and cannot say who else can already open it. A manager leaves, and nobody can say which shared drives, mailboxes and applications he could reach. A supplier asks whether its staff can see your pricing spreadsheet, and the honest answer is "probably not, but we would have to check". The business is not careless. It simply cannot answer, quickly and with confidence, the question of who can see what.

An illustrative example: a Durban logistics company of forty people stores customer contracts, driver records and rate sheets across a shared drive, a cloud document service, a fleet-tracking application and several personal inboxes. Folders were shared as needs arose, mostly by whoever was asked first. Nobody has ever listed the results in one place.

## Realisation

The realisation is that access is a form of inventory. A business keeps a list of its vehicles, its stock and its keys, because losing track of them costs money. Digital access is the same kind of asset, but it is created in a hundred small clicks and stored in a hundred places, so it is seldom counted. The cost shows up when someone needs the answer and has to reconstruct it by hand.

Microsoft's documentation on [access reviews](https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-overview) states the problem plainly: excessive access rights can lead to compromises, and they can also lead to audit findings because they indicate a lack of control over access. The guidance is written for large organisations, but the underlying problem is identical in a company of twenty: access is easy to grant, and rarely examined afterwards.

**Realisation prompt:** pick one sensitive folder or application. Could you, within ten minutes and without asking anyone, list every person and outside party who can open it?

## Identification

This is a pattern of invisible entitlement. The visible symptoms are slow answers to simple questions, access granted "just in case", and a general nervousness when anyone asks for evidence. The common assumption is that the business needs better security software. The structural cause is that nobody owns a current picture of access, so every decision about sharing is made without knowing what is already shared.

It overlaps with the Pattern [when everyone has more system access than their job needs](/patterns/when-everyone-has-more-system-access-than-their-job-needs/), which looks at over-broad permissions. This Pattern is about the prior problem: being unable to tell whether permissions are broad or narrow because they cannot be seen in one place.

## Diagnosis

- **Access is granted in the moment.** A colleague needs a file, someone shares a link, and the grant is never recorded. The Pattern [when system access is granted through chat messages and memory](/patterns/when-system-access-is-granted-through-chat-messages-and-memory/) describes how this becomes the norm.
- **Permissions are spread across many tools.** Each application, drive and mailbox has its own sharing model, and none of them reports on the others. There is no single screen showing a person's total reach.
- **Groups hide individuals.** A folder shared with a group looks tidy, but group membership changes over time, and nobody checks who has drifted in.
- **External parties are forgotten.** Suppliers, contractors, accountants and former staff are given access for a task. When the task ends, the access does not.
- **Sensitive and ordinary data look the same.** If files are not classified, the business cannot decide which shares deserve closer attention.
- **No one is assigned to ask.** Reviews happen only after an incident or when an auditor requests evidence, so the answer is always assembled under pressure.

## Commercial impact

The most direct cost is the time spent finding out. When a client, auditor or insurer asks who has access to a record, a manager or IT contact must check each system individually. That effort recurs every time, and the result is only as good as the last person's memory.

The second cost is exposure. Personal information such as employee records, customer details and payment data is protected in South Africa under the Protection of Personal Information Act. The Information Regulator's guidance describes an Information Officer's duties, which include encouraging compliance with the conditions for lawful processing, and one of those conditions concerns securing the information a business holds. A company that cannot say who can open a file has difficulty showing that it has done so. The Regulator's own page on [protection of personal information](https://inforegulator.org.za/popia/) sets out these responsibilities.

The third cost is deal friction. Larger customers increasingly ask suppliers how access to their data is controlled. A slow or vague answer can delay onboarding or lose the contract, and the business is judged not on its actual practice but on how well it can describe it.

The fourth cost is hesitation inside the business. If managers do not know what is shared, they either share too freely, which increases exposure, or refuse to share at all, which slows collaboration. Both are expensive, and neither is a considered decision.

The fifth cost is the inability to respond when something goes wrong. If a laptop is lost or an account is compromised, the business needs to know immediately what that person could reach. Working that out during an incident is slower and more error-prone than knowing it in advance.

## Why the usual response falls short

The usual response is a one-off clean-up: someone spends a weekend removing old users and tightening a few folders. This helps, but it produces a snapshot that begins to age on Monday. Without a repeating routine, the same unknowns return within months.

Another common response is to buy a tool. Tools can report on access, and classification features such as the [sensitivity labels in Microsoft Purview](https://learn.microsoft.com/en-us/purview/sensitivity-labels) let administrators classify and protect data so that it stays protected as it moves between people and services. But a tool only displays what the business has decided. If nobody has defined who should be able to see which category of information, the tool will simply show the confusion more clearly.

## How to approach it

Begin small. Choose the categories of information whose exposure would hurt most: employee records, customer personal information, pricing and banking details. For each category, write down where it lives, who is meant to see it, and who actually can. The gap between the last two lists is the work.

Then assign ownership. Every shared location and every application should have a named owner who is responsible for confirming, on a schedule, that the right people have access. The Microsoft Entra guidance on access reviews describes the same idea: resource owners are engaged to review regularly who has access to their resources, rather than leaving it to one administrator who cannot know who needs what.

Finally, make the review short and routine. A quarterly twenty-minute check by each owner is more effective than an annual audit nobody has time to finish. For a view of how this fits alongside staff departures, see [when offboarding leaves digital access behind](/patterns/when-offboarding-leaves-digital-access-behind/).

## Practical next actions

1. List the five most sensitive kinds of information you hold, and for each write down every system, drive or mailbox where it is stored.
2. For each location, export or screenshot the current list of people, groups and outside parties with access, and date it.
3. Name one owner per location and ask them to confirm or remove each entry within two weeks.
4. Remove or time-limit access for suppliers, contractors and former staff that has no current task attached.
5. Agree a rule that every new share is recorded with who requested it, why, and when it should be reviewed.
6. Put a recurring quarterly access check in the calendar of each owner, and keep the dated results in one folder.

## What changes when access is visible

Once the business can answer who can see what, requests that used to take days take minutes. Auditors, clients and insurers get a prompt, accurate reply. Managers share with more confidence because they know what is already open. When an incident occurs, the first question has an answer.
