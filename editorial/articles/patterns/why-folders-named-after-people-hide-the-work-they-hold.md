---
hub: patterns
record_id: PAT-207
slug: why-folders-named-after-people-hide-the-work-they-hold
title: When Files Are Organized by People Instead of Processes
description: When the shared drive follows the staff list instead of the work, every resignation and role change quietly breaks the filing. Here is how the pattern forms and how to reverse it.
lead: When the shared drive follows the staff list instead of the work, every resignation and role change quietly breaks the filing. Here is how the pattern forms and how to reverse it.
category: Documents, Files & Knowledge Management
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Documents, Files & Knowledge Management
pattern_family: document-structure
observable_condition: Folders named after staff, personal copies of the same file, status typed into file names, and live material left in ex-employee folders
primary_identification: Readers can match their own shared drive to the folders, naming and handover symptoms described
commercial_value_dimensions: Search time, continuity when staff leave, version conflicts, personal-information control and new-starter productivity
sources:
  - Introduction to SharePoint information architecture - SharePoint in Microsoft 365 | https://learn.microsoft.com/en-us/sharepoint/information-architecture-modern-experience
  - Learn about retention policies & labels to retain or delete | https://learn.microsoft.com/en-us/purview/retention
related:
  - Why Looking for Information Has Quietly Become Part of Everyone's Job | /patterns/why-looking-for-information-has-become-part-of-everyones-job/
  - Why Staff Have to Chase Stock Availability | /patterns/why-staff-end-up-phoning-around-to-find-out-whats-in-stock/
  - The Cost of Not Knowing Who Can See What | /patterns/the-cost-of-not-being-able-to-say-who-can-open-which-files/
summary: When the shared drive follows the staff list instead of the work, every resignation and role change quietly breaks the filing. Here is how the pattern forms and how to reverse it.
layout: plain
---
## Observable condition

A new project coordinator joins a Durban logistics firm and asks where the signed customer contract for a freight client is kept. She is told to look in Thandi's folder. Thandi left in March, so the folder now sits under "Archive - ex staff". Inside are subfolders called "Contracts", "Contracts NEW" and "Misc". The signed copy turns out to be in Pieter's folder, because he was the one who chased the signature.

Nothing here is unusual. The shared drive is tidy in the sense that every top-level folder carries a name. Finance has a folder, sales has a folder, and under each sits a folder per person. The difficulty is that the structure answers the question "whose is this?" when the person looking for the file is asking "what is this about, and what stage is it at?"

This is an illustrative example, but the shape is familiar in owner-managed businesses across South Africa: a file store that grew one employee at a time and now reflects the staff list of three years ago rather than the way work actually moves.

## Realisation

The realisation is that a folder structure is a model of the business, and a person-based one models the wrong thing. People change roles, go on leave, resign and are promoted. Processes such as quoting, onboarding, invoicing and renewal stay put. When files are organised around the people, every staffing change quietly breaks the model, and nobody records that it broke.

Microsoft's guidance on SharePoint information architecture makes the opposite starting point explicit: the first step in planning is [understanding your users and helping them find what they need to complete tasks](https://learn.microsoft.com/en-us/sharepoint/information-architecture-modern-experience). The emphasis is on tasks, not on the owner of the file. A shared drive built around individuals is organised for the convenience of the person who saved the document, not the person who needs it next.

**Realisation prompt:** pick a customer you served last month. How many separate folders would you have to open to reconstruct everything the business holds about that job, and whose names are on them?

## Identification

This is a pattern of structure that follows ownership instead of work. The visible symptoms are folders named after individuals, copies of the same document in several places, and a habit of asking colleagues "do you have the latest?" before opening anything. The common assumption is that staff are untidy or that the business needs a stricter filing policy. The structural cause is that the layout gives nobody a reason to file by process, because nothing in the process itself says where a document belongs.

The related Pattern [why can nobody find the document they know exists](/patterns/why-can-nobody-find-the-document-they-know-exists/) describes the search experience. This Pattern is about the layout underneath it: why the document is so hard to find in the first place.

## Diagnosis

- **Personal folders are the default.** Each new employee is given a folder on their first day because it is the quickest way to give them somewhere to save. Nobody decides that work product will live there for good.
- **Naming carries the meaning.** With no stage or customer attribute attached to a file, staff cram status into the file name: "Final", "Final v2", "Final v2 signed", "Final v2 signed USE THIS". The name becomes the only record of where the document stands.
- **Access follows the folder.** Permissions are granted to the person, so when a colleague needs a file in someone else's folder, the owner shares it ad hoc. Over time the access list no longer reflects who should be able to see what.
- **Departures strand material.** When someone leaves, their folder is moved to an archive nobody opens. The files that were still live are found later, usually at an inconvenient moment, such as a customer query or an audit request.
- **Handovers are verbal.** A colleague taking over a client is told, "Most of it is in my folder, ask me if you can't find something." The map lives in one person's head.
- **Retention is guesswork.** Microsoft's documentation on [retention policies and labels](https://learn.microsoft.com/en-us/purview/retention) describes keeping or deleting content according to the type of content it is. That approach works when documents carry a type, such as contract or invoice. It cannot work when the only attribute a file has is the name of whoever saved it.

## Commercial impact

The commercial value at stake is staff time, customer responsiveness, continuity when people leave, and the ability to answer a formal request about what the business holds.

The first cost is search time. Every hunt through the wrong person's folders is a few minutes of paid time that produces nothing. A single hunt is trivial; a team of fifteen that does it daily is not, and because the effort is spread across many people it rarely shows up as a line item.

The second cost is continuity. The Impact note on [conflicting document versions and the cost of rework](/impact/conflicting-document-versions-rework-decision-cost/) describes what happens when two plausible versions of a file exist: someone spends time working out which is right, or worse, acts on the wrong one. A person-based layout produces conflicting versions almost by design, because each person keeps their own copy.

The third cost is risk. South Africa's Protection of Personal Information Act, available on the [South African Government site](https://www.gov.za/documents/protection-personal-information-act), places duties on organisations that hold personal information, including customer and employee records. A business that cannot say where such files sit, or who can open them, struggles to respond to a data-subject request or to a question after an incident. A folder named after a former employee is exactly where an ID copy or a payslip might still be sitting.

The fourth cost is the one owners notice last: new staff take longer to become useful, because the orientation they need is a tour of other people's folders.

## Common misidentification

The usual response is a clean-up day, where everyone is asked to tidy their own folders. This produces tidier personal folders and leaves the structure unchanged. A second response is to buy a search tool. Search helps, but it surfaces five versions of the contract rather than telling anyone which one counts. A third is to write a filing policy and email it round. Policies that depend on memory fade within weeks unless the layout itself makes the right choice the easy one.

## Possibility

In a better state, a document is found by what it relates to, such as the customer, the job and the stage, not by who touched it. Folders or libraries reflect the way the work flows: enquiry, quote, order, delivery, invoice. A handful of attributes travel with each document, such as customer, document type and status, so the same file can be viewed several ways without being copied. Permissions attach to the team and the process, so a resignation changes nothing about who can see a customer file.

The Insight on [broken handoffs as systems problems](/insights/broken-handoffs-are-systems-problems/) makes the same point from another angle: when continuity depends on a person remembering where things are, the system, not the person, is what needs repair.

## Intervention

A sensible sequence is small and needs no migration project on day one. Trace one customer journey end to end, define a short process-shaped structure with no individual's name in it, and attach a few attributes such as customer, document type and status. Apply the layout to new work first, and migrate older material only when it is next opened. Give each area an owner by role, such as head of operations, so a resignation does not orphan it.

## Practical next actions

1. List every folder at the top two levels of your shared drive and mark which ones are named after a person. That count is your baseline.
2. Choose one live customer or job and gather all its documents into a single process-based location, noting how long that took.
3. Check what remains in the folders of people who have left, and move any live customer or employee records into a controlled, role-owned area.
4. Replace "Final" and "signed" in file names with a visible status field or a single agreed naming convention that the whole team uses.
5. Rewrite the new-starter checklist so that it points to the process-based structure instead of giving the person a personal folder.
6. Review who can open sensitive folders each quarter, and attach access to roles rather than individuals.

## Article summary

When files are organised around the people who saved them, the business loses track of its own records every time someone changes role or leaves. The commercial implication is slower service, repeated searching, uncertain versions and weaker control over personal information. The remedy begins with a layout that follows the work rather than the staff list, applied first to new jobs and then to older material as it is touched.
