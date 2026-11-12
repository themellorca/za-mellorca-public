---
hub: impact
record_id: CPS-003
slug: pain-employees-wasting-time-information-stored
title: When Staff Keep Asking Where Information Is Stored
description: Explains how the pain of searching for information translates into labour costs and outlines practical governance and search improvements.
lead: Explains how the pain of searching for information translates into labour costs and outlines practical governance and search improvements.
category: Information Management and Operations
published_date: 2026-10-02
updated_date: 2026-10-02
eyebrow: Information Management
commercial_domain: Information Management and Operations
primary_pain: Wasting time locating information due to poor information organisation
primary_cost_mechanism: labour cost
sources:
  - Introduction to SharePoint information architecture - SharePoint in Microsoft 365 | https://learn.microsoft.com/en-us/sharepoint/information-architecture-modern-experience
  - Plan your content | https://learn.microsoft.com/en-us/microsoftsearch/make-content-easy-to-find
  - Disposing of records - The National Archives | https://www.nationalarchives.gov.uk/information-management/manage-information/policy-process/disposal/
related:
  - When Nobody Can Trace Where a Reported Number Came From | /impact/untraceable-reporting-number-audit-cost/
  - Recreating Documents Nobody Can Find: The Cost of Duplicated Work | /impact/staff-recreating-lost-documents-duplicated-work-cost/
  - Staff Using AI with Company Data Nobody Governs | /impact/uncontrolled-ai-company-data-financial-risk/
summary: Explains how the pain of searching for information translates into labour costs and outlines practical governance and search improvements.
layout: plain
---
In many organisations, employees waste significant time simply locating the information they need to do their jobs. A common pattern is multiple repositories, inconsistent naming conventions, and weak search that forces people to ask colleagues for the right storage location. The pain is often tolerated as a natural friction of complexity, but it hides a measurable economic cost in lost productivity and delayed customer outcomes.

The cost rarely shows up as a line item. Nobody's timesheet says "forty minutes looking for the signed version of the supplier agreement". It shows up instead as slower quotes, longer onboarding, more interruptions for the people who "know where things are", and decisions made on whichever version of a document someone happened to find first.

## Operational symptoms

Teams report repeated requests: where is the latest policy stored? which version of the customer contract holds the approved data? who owns the data? These questions create meetings, email threads, and cross-department handoffs that interrupt work and increase rework. The information landscape becomes a bottleneck, rather than an accelerant for decision-making. Inconsistent metadata and duplicate repositories amplify confusion, causing errors and inconsistent reporting.

Some warning signs are easy to recognise once you look for them:

- File names such as *Pricing_FINAL_v3_JM_edits.xlsx* sitting alongside *Pricing_FINAL_v4.xlsx* in different folders.
- The same document saved in a shared drive, a team channel, an email attachment and someone's desktop.
- New staff who keep a private list of links because the official structure does not help them.
- A small number of long-serving employees who are interrupted all day with "where do I find…" questions.
- Customer-facing staff who put callers on hold to search for an answer that should take seconds.

The last two signs matter most. When findability depends on particular people, the problem is no longer just inefficiency; it is a dependency. We explore that dynamic in [why nobody can find the document they know exists](/patterns/why-can-nobody-find-the-document-they-know-exists/).

## Why the pain endures

The tolerance exists because the underlying problem seems diffuse: it spans people, processes, and technology. There is no single owner or system that guarantees discovery or accuracy. As teams grow and tools multiply, the cognitive load increases; people default to asking a familiar colleague rather than performing a time-consuming search. The up-front effort to fix information architecture often appears expensive and risky, but the ongoing leakage of productivity and trust compounds over time.

There is also a structural reason. Most businesses adopt storage tools one at a time: a shared drive in the early years, then a cloud file service, then a collaboration platform, then a line-of-business system with its own attachments. Each move is sensible, but nobody decides what should live where, so content ends up in all of them. Microsoft's own guidance on SharePoint information architecture makes the point that information architecture is a continuous process rather than a one-off design, because organisations, people and projects change over time. A structure that was never designed cannot be maintained.

### A worked example

Consider a 60-person engineering services firm in Gauteng. Tender documents, safety files, client drawings and project correspondence are spread across a file server, a cloud drive and individual mailboxes. Each project manager has their own folder conventions. When a client asks for the latest revision of a method statement, the project administrator searches three places, finds two candidates with different dates, and has to ask the engineer which one was actually issued. Multiply that by every client query, every audit request and every new tender that reuses previous material, and the firm is paying skilled people to act as a human index. The fix in this case was not a new platform; it was agreeing one location per document type, one naming rule for issued documents and one owner for each project's records.

## Economic consequence and practical model

The primary economic mechanism is labour cost: time spent searching, verifying, and reconciling information reduces productive capacity. In addition, the risk of errors—using out-of-date data or mismatched versions—adds rework and margin erosion. A transparent model requires identifying root causes (storage fragmentation, naming incoherence, poor search indexing) and quantifying how many hours are lost per employee per week, multiplied by average wage. While exact numbers vary, the direction is clear: even modest improvements yield meaningful savings through faster decisions, fewer mistakes, and greater staff engagement.

To build the model from your own evidence rather than a borrowed benchmark:

1. **Sample, do not survey once.** Ask a representative group to log search episodes for two weeks: what they looked for, where they looked, how long it took and whether they had to ask someone.
2. **Count the interruptions.** Include the time of the colleague who was asked, not just the person searching.
3. **Separate search time from rework.** Time spent correcting work done on an outdated version is a different, often larger, cost.
4. **Apply a loaded hourly cost.** Use salary plus employer costs, then annualise. The method in [how to calculate the real cost of a repetitive task](/insights/how-to-calculate-the-real-cost-of-a-repetitive-task/) applies directly.

A related view of the same cost, focused on files specifically, is set out in [the lost productivity cost of employees searching for files](/impact/employees-searching-for-files-lost-productivity-cost/).

### What better looks like and practical remediation

A better state uses a single, well-described information layer with clear ownership, standardized metadata, and robust search. Practical steps include: define canonical storage for key document types; enforce consistent naming and metadata; invest in a lightweight discovery layer or knowledge graph; enable search-first workflows; train staff; and measure usage and accuracy over time. The ROI comes not from a single feature but from the reduced friction that frees people to contribute, innovate, and collaborate.

A few practical points make these steps work in a small or mid-sized business:

- **Start from what people look for.** Microsoft's guidance on planning searchable content recommends identifying the information users actually need, using search logs and common support questions, and making that discoverable first. You do not need to reorganise everything.
- **Prefer metadata over deep folders.** The same SharePoint guidance warns that folder structures nested more than one or two levels deep create a significant discoverability burden. A document type and a client or project tag usually do more than a sixth-level folder.
- **Give every document type an owner.** Someone must be accountable for deciding which version is authoritative and for retiring the rest.
- **Dispose deliberately.** The UK National Archives advises that organisations define how long they keep particular records and dispose of them when they are no longer needed. Fewer stale copies means fewer wrong answers.
- **Keep reviewing.** Broken links, renamed teams and new tools erode findability quietly. A quarterly check is enough for most firms.

### Trade-offs to be honest about

Standardisation costs something. People lose the freedom to file things their own way, and a migration takes time away from client work. Over-engineering is a real risk: an elaborate taxonomy that nobody applies is worse than a simple rule everyone follows. The aim is the smallest set of conventions that removes the most frequent searches. This matters more as businesses add AI assistants, because those tools inherit whatever disorder already exists; see [when AI search fails because knowledge is chaotic](/patterns/when-ai-search-fails-because-knowledge-is-chaotic/).

## What to do first

1. List the ten documents or answers people ask colleagues for most often.
2. For each, agree one authoritative location and one owner.
3. Remove or archive duplicate copies, and point old locations to the new one.
4. Set a simple naming rule for issued or approved versions.
5. Re-run the two-week search log after a month and compare.

## Bottom line

Understanding the cost of disorganised information is essential to improve service delivery and profitability. By treating information accessibility as a strategic asset, organisations can turn a persistent pain into a measurable, defensible savings program.
