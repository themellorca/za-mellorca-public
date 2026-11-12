---
hub: insights
record_id: INS-331
slug: what-business-processes-need-documentation-first
title: What business processes need documentation first?
description: A practical way to decide which workflows, exceptions and operational dependencies deserve documentation first.
lead: The best place to start is not the easiest process to document. It is the work where missing knowledge creates the greatest operational dependency, inconsistency or recovery risk.
category: Digital Operations
published_date: 2026-09-07
updated_date: 2026-09-07
eyebrow: Article
page_title: What Business Processes Need Documentation First? | Mellorca
tags:
  - Documentation
  - Knowledge
  - Operational Resilience
side_title: Topics
sources:
  - https://assets.publishing.service.gov.uk/media/5a7b283de5274a34770e9d01/Business_Continuity_Managment_Toolkit.pdf | https://assets.publishing.service.gov.uk/media/5a7b283de5274a34770e9d01/Business_Continuity_Managment_Toolkit.pdf
  - SP 800-34 Rev. 1, Contingency Planning Guide for Federal Information Systems - CSRC | https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final
  - https://www.epa.gov/sites/default/files/2015-06/documents/g6-final.pdf | https://www.epa.gov/sites/default/files/2015-06/documents/g6-final.pdf
closing_title: Document where operational memory is fragile
closing_text: [Explore our solutions](/solutions/) or [start a conversation](/contact/).
related:
  - Why approval processes become bottlenecks | /insights/why-approval-processes-become-bottlenecks/
  - How to find the manual work nobody is measuring | /insights/how-to-find-the-manual-work-nobody-is-measuring/
  - Why business systems need ongoing stewardship | /insights/why-business-systems-need-ongoing-stewardship/
---
Trying to document every process at once usually produces a large library that becomes difficult to maintain. Documentation creates more value when it begins with workflows the business cannot afford to misunderstand.

Most documentation efforts start in the wrong place for understandable reasons. The easy processes get written first because they are easy: they are linear, one team owns them, and nobody disagrees about how they work. Weeks later the business has a tidy folder of procedures and the same exposure it had before, because the work that actually depends on one person's memory was too messy to tackle first.

## Why the choice of starting point matters

Documentation has a cost. It takes time from the people who know the work best, and every document creates a maintenance obligation. A procedure that is wrong is often worse than none, because it gives false confidence to the person following it.

So the useful question is not "what can we document?" but "where would missing or wrong knowledge hurt us most?" Business continuity practice asks a similar question. The HM Government [Business Continuity Management Toolkit](https://assets.publishing.service.gov.uk/media/5a7b283de5274a34770e9d01/Business_Continuity_Managment_Toolkit.pdf) begins with a business impact analysis: identify the key products and services, the critical activities that deliver them, and the impact if those activities were disrupted over the first day, the first two days, a week and two weeks. [NIST SP 800-34](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final) takes the same approach for information systems, using impact analysis to set contingency priorities. The same lens works well for deciding what to write down first.

## Prioritise operational dependency

Start with processes that depend heavily on one person's knowledge, cross several teams or systems, affect customers or money, contain important exceptions, or are difficult to reconstruct after a failure.

Each of those criteria points at a different kind of fragility:

- **Single-person knowledge** is a continuity risk. If the person is ill, on leave or leaves, the process stops or degrades. We explore this in [key-person dependency is a systems problem](/insights/key-person-dependency-is-a-systems-problem/).
- **Cross-team and cross-system work** is where assumptions hide. Each team understands its own step; nobody holds the whole path.
- **Customer and money impact** raises the cost of error and the cost of delay.
- **Important exceptions** are where experienced staff add most value and new staff make most mistakes.
- **Hard-to-reconstruct processes**, such as month-end steps, annual renewals or recovery after an outage, are performed so rarely that even the expert may not remember them accurately.

## A practical priority test

Run each candidate process through five questions. A "yes" to two or more usually means it belongs near the top of the list.

- What breaks if the usual person is unavailable?
- Where do new staff need repeated explanation?
- Which errors are hard to reverse?
- Which workflows cross departmental boundaries?
- Which processes are prerequisites for automation or system change?

A simple scoring table helps make the choice visible and arguable rather than a matter of who shouts loudest:

| Process | Key-person risk | Cross-team | Money or customer impact | Hard to reverse | Change planned |
| --- | --- | --- | --- | --- | --- |
| Example: customer onboarding | High | Yes | Yes | Partly | CRM migration |
| Example: supplier invoice approval | Medium | Yes | Yes | Yes | None |
| Example: internal meeting room booking | Low | No | No | No | None |

These rows are illustrative, not a recommendation for any specific business. The point is that the third row is the kind of process that often gets documented first, and the first two are the kind that should.

## The automation and change trigger

The last question in the test deserves special attention. Any process that is about to be automated, migrated to a new system or integrated with another platform should be documented before the change, not after. Automating a process you do not understand risks encoding its workarounds as rules. Migrating it risks losing the steps that only existed in someone's habits. We cover this in [before you automate, understand how the work actually moves](/insights/before-you-automate-understand-how-the-work-actually-moves/) and [what to document before connecting two business platforms](/insights/what-to-document-before-connecting-two-business-platforms/).

## Document the real process

A useful process document should describe the actual operating path, including triggers, inputs, owners, system actions, decision points, exceptions, evidence and escalation. An idealised diagram that omits workarounds can create false confidence.

The US Environmental Protection Agency's [guidance on preparing standard operating procedures](https://www.epa.gov/sites/default/files/2015-06/documents/g6-final.pdf) offers a useful benchmark from a very different field. It recommends that procedures are written by the people who actually perform the work, in enough detail that someone with basic understanding but limited experience can follow them unsupervised, and that drafts are tested by someone other than the author before they are finalised. That last step is the one most often skipped, and the one that exposes the gaps.

To capture the real process rather than the official one:

1. **Observe or walk through a live instance** rather than relying on a workshop description.
2. **Record the trigger and the finish point.** What starts the process, and how do you know it is done?
3. **Name the owner of each step** as a role, not a person.
4. **Capture the systems touched** and what is entered, checked or copied in each.
5. **List the exceptions** explicitly, with what happens in each case.
6. **State the evidence** that shows each step was done correctly.
7. **Define escalation:** who to contact, and when, if something does not fit.
8. **Have someone else follow it** and note where they got stuck.

## Warning signs that documentation is overdue

- Holiday cover requires a long handover call and still produces mistakes.
- The same questions appear in team chat every month.
- Errors cluster around particular customers, products or times of year.
- A system change is being scoped and nobody can describe the current process end to end.
- Different people perform the same process differently and get different results.

## The trade-offs

Starting with the hardest processes means slower early progress. They take longer to understand, the experts are busy, and there may be disagreement about the right way to do the work. That disagreement is valuable, but it can stall a documentation effort that was meant to be quick. It helps to separate recording what happens today from deciding what should happen; the first is documentation, the second is process design.

There is also a maintenance trade-off. Every document needs an owner and a review trigger. The EPA guidance suggests updating procedures whenever the process changes and reviewing them periodically, withdrawing those that no longer reflect practice. A smaller library that is kept current is more useful than a large one that drifts.

## What better looks like

Documentation becomes part of the operating system rather than an archive. The highest-risk workflows are understandable, exceptions are explicit, ownership is visible and updates occur when the process changes. Documents live where the work happens, each has a named owner and a review date, and changing the process includes changing its documentation, in the same way that [automation documentation is part of delivery](/insights/why-automation-documentation-matters/) rather than an afterthought.

If you are unsure where your operational knowledge is most fragile, that question is a natural starting point for [digital operations improvement](/services/digital-operations-improvement/).
